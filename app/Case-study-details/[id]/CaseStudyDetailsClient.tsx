"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import CommomLayout from "../../Components/CommomLayout";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  author: string | null;
  featured_image: string | null;
  category: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  client_name: string | null;
  client_logo: string | null;
  client_description: string | null;
  client_location: string | null;
  overview: string | null;
  challenges: string | null;
  solution: string | null;
  benefits: string | null;
  implementation: string | null;
  download_url: string | null;
  industries: string[] | null;
}

interface CaseStudyDetailsClientProps {
  initialCaseStudy: CaseStudy | null;
  initialRelatedCaseStudies: CaseStudy[];
  caseStudyId: string;
}

// Arrow SVG Component
const ArrowSVG = ({ direction = "right" }: { direction?: "left" | "right" }) => (
  <svg
    width={24}
    height={23}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle className="dot" opacity="0.5" cx="16.0004" cy="4.79995" r="1.6" fill="#535353" />
    <circle className="dot" opacity="0.5" cx="12.7992" cy="1.6" r="1.6" fill="#535353" />
    <circle className="dot" opacity="0.5" cx="22.4008" cy="11.2" r="1.6" fill="#535353" />
    <circle className="dot" opacity="0.5" cx="1.6" cy="11.2" r="1.6" fill="#535353" />
    <circle className="dot" opacity="0.5" cx="6.40078" cy="11.2" r="1.6" fill="#535353" />
    <circle className="dot" opacity="0.5" cx="11.1996" cy="11.2" r="1.6" fill="#535353" />
    <circle className="dot" opacity="0.5" cx="16.0004" cy="11.2" r="1.6" fill="#535353" />
    <circle className="dot" opacity="0.5" cx="19.1996" cy="14.4" r="1.6" fill="#535353" />
    <circle className="dot" opacity="0.5" cx="16.0004" cy="17.6" r="1.6" fill="#535353" />
    <circle className="dot" opacity="0.5" cx="12.7992" cy="20.8" r="1.6" fill="#535353" />
    <circle className="dot" opacity="0.5" cx="19.1996" cy="8.00002" r="1.6" fill="#535353" />
  </svg>
);

export default function CaseStudyDetailsClient({
  initialCaseStudy,
  initialRelatedCaseStudies,
  caseStudyId
}: CaseStudyDetailsClientProps) {
  const router = useRouter();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(initialCaseStudy);
  const [relatedCaseStudies, setRelatedCaseStudies] = useState<CaseStudy[]>(initialRelatedCaseStudies);
  const [loading, setLoading] = useState(!initialCaseStudy && !caseStudy);
  const [activeSection, setActiveSection] = useState<string>('overview-section');
  const [isAdmin, setIsAdmin] = useState(false);
  const supabase = createClient();

  const checkAdminStatus = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAdmin(!!user);
    } catch (err) {
      setIsAdmin(false);
    }
  };

  // Define fetchCaseStudy before using it in useEffect
  const fetchCaseStudy = useCallback(async () => {
    try {
      setLoading(true);
      
      // Check admin status first
      await checkAdminStatus();
      
      // ALWAYS fetch from database - never use cached/initial data
      // This ensures new content created after build is always accessible
      const { data: caseStudyData, error: caseStudyError } = await supabase
        .from('case_studies')
        .select('*')
        .eq('id', caseStudyId)
        .single()

      if (caseStudyError) {
        console.error(`[CaseStudyDetailsClient] Supabase error:`, caseStudyError);
        // If case study not found, redirect to case studies list
        if (caseStudyError.code === 'PGRST116') {
          router.push('/Case-study');
          return;
        }
        throw caseStudyError;
      }
      
      if (!caseStudyData) {
        router.push('/Case-study');
        return;
      }

      
      // Check if case study is published or user is admin
      const { data: { user } } = await supabase.auth.getUser();
      const userIsAdmin = !!user;
      
      if (!caseStudyData.published && !userIsAdmin) {
        router.push('/Case-study');
        return;
      }
      
      // Always update with fresh data from database
      setCaseStudy(caseStudyData);

      // Fetch related case studies with fresh data
      const { data: relatedData } = await supabase
        .from('case_studies')
        .select('*')
        .eq('published', true)
        .neq('id', caseStudyData.id)
        .eq('category', caseStudyData.category || 'all')
        .order('created_at', { ascending: false })
        .limit(4)

      setRelatedCaseStudies(relatedData || [])
      console.log(`[CaseStudyDetailsClient] Fetch completed successfully`);
    } catch (err: any) {
      console.error('[CaseStudyDetailsClient] Error fetching case study:', err);
      // Always redirect on error - never show stale data
      router.push('/Case-study');
    } finally {
      setLoading(false);
    }
  }, [caseStudyId, supabase, router])

  useEffect(() => {
    // Check admin status on mount
    checkAdminStatus();
    
    if (caseStudyId === 'placeholder' && !initialCaseStudy) {
      router.push('/Case-study');
      return;
    }

    // Always fetch fresh data on client side to get latest updates
    // This ensures updated content appears immediately without needing a rebuild
    // We ALWAYS fetch, even if we have initialCaseStudy, to get the latest data
    if (caseStudyId && caseStudyId !== 'placeholder') {
      // Fetch immediately to get fresh data
      fetchCaseStudy();
    }
  }, [caseStudyId, fetchCaseStudy])

  // Set up interval to periodically check for updates (every 30 seconds)
  useEffect(() => {
    if (caseStudyId && caseStudyId !== 'placeholder') {
      const interval = setInterval(() => {
        fetchCaseStudy();
      }, 30000); // Check every 30 seconds

      return () => clearInterval(interval);
    }
  }, [caseStudyId, fetchCaseStudy])

  // Refresh data when page becomes visible (user switches back to tab)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && caseStudyId && caseStudyId !== 'placeholder') {
        fetchCaseStudy();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [caseStudyId, fetchCaseStudy])

  // Set up Intersection Observer to track active section
  useEffect(() => {
    if (!caseStudy) return;

    const sections = [
      { id: 'overview-section', condition: caseStudy.overview },
      { id: 'challenges-section', condition: caseStudy.challenges },
      { id: 'solution-section', condition: caseStudy.solution },
      { id: 'benefits-section', condition: caseStudy.benefits },
      { id: 'implementation-section', condition: caseStudy.implementation }
    ].filter(section => section.condition);

    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        });
      }, observerOptions);

      observer.observe(element);
      observers.push(observer);
    });

    // Set initial active section based on scroll position
    const checkInitialSection = () => {
      const scrollPosition = window.scrollY + 200; // Offset for nav position
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    // Check on mount and after a short delay to ensure DOM is ready
    setTimeout(checkInitialSection, 100);
    window.addEventListener('scroll', checkInitialSection);

    return () => {
      observers.forEach(observer => observer.disconnect());
      window.removeEventListener('scroll', checkInitialSection);
    };
  }, [caseStudy])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Replace &nbsp; with regular spaces in HTML content to allow proper word breaking
  const processContent = (html: string): string => {
    if (!html) return '';
    // Replace &nbsp; with regular spaces, but preserve HTML structure
    // This allows words to break naturally at word boundaries
    return html.replace(/&nbsp;/g, ' ');
  };

  // Only show loading if we don't have any case study data
  // This prevents flash of loading state when we have cached data
  if (loading && !caseStudy && !initialCaseStudy) {
    return (
      <CommomLayout>
        <div style={{
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #667eea',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{ color: '#666', fontSize: '18px' }}>Loading case study...</p>
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </CommomLayout>
    );
  }

  if (!caseStudy) {
    return (
      <CommomLayout>
        <div style={{
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h2 style={{ color: '#333' }}>Case Study not found</h2>
          <Link href="/Case-study" style={{ color: '#667eea', textDecoration: 'none' }}>
            ← Back to Case Studies
          </Link>
        </div>
      </CommomLayout>
    );
  }

  return (
    <CommomLayout>
      <>
        {/* Header Start */}
        {/*?php include "navbar.php" ?*/}
        <section className="case-study-waber">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="case-study-main-title" data-cursor="-opaque">
                  {caseStudy.title}
                  {!caseStudy.published && isAdmin && (
                    <span style={{
                      marginLeft: '15px',
                      padding: '5px 10px',
                      backgroundColor: '#f97316',
                      color: 'white',
                      borderRadius: '5px',
                      fontSize: '0.7em',
                      fontWeight: 'bold',
                      verticalAlign: 'middle',
                    }}>
                      DRAFT
                    </span>
                  )}
                </h2>
                <div className="study-img-info my-24">
                  <p>{formatDate(caseStudy.created_at)}</p>
                  {caseStudy.author && <p>{caseStudy.author}</p>}
                </div>
                {caseStudy.featured_image && (
                  <img
                    src={caseStudy.featured_image}
                    alt={caseStudy.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/new/stu-img.jpg";
                    }}
                  />
                )}
                <div className="scrollspy-nav-container">
                  <ul
                    className="nav nav-pills custom-nav-pills"
                    id="scrollspyNav"
                    role="tablist"
                  >
                    {caseStudy.overview && (
                      <li className="nav-item" role="presentation">
                        <Link 
                          className={`nav-link ${activeSection === 'overview-section' ? 'active' : ''}`} 
                          href="#overview-section"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('overview-section');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                        >
                          Overview
                        </Link>
                      </li>
                    )}
                    {caseStudy.challenges && (
                      <li className="nav-item" role="presentation">
                        <Link 
                          className={`nav-link ${activeSection === 'challenges-section' ? 'active' : ''}`} 
                          href="#challenges-section"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('challenges-section');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                        >
                          Challenges
                        </Link>
                      </li>
                    )}
                    {caseStudy.solution && (
                      <li className="nav-item" role="presentation">
                        <Link 
                          className={`nav-link ${activeSection === 'solution-section' ? 'active' : ''}`} 
                          href="#solution-section"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('solution-section');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                        >
                          Our Solution
                        </Link>
                      </li>
                    )}
                    {caseStudy.benefits && (
                      <li className="nav-item" role="presentation">
                        <Link 
                          className={`nav-link ${activeSection === 'benefits-section' ? 'active' : ''}`} 
                          href="#benefits-section"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('benefits-section');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                        >
                          Business Impact
                        </Link>
                      </li>
                    )}
                    {/* {caseStudy.implementation && (
                      <li className="nav-item" role="presentation">
                        <Link 
                          className={`nav-link ${activeSection === 'implementation-section' ? 'active' : ''}`} 
                          href="#implementation-section"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('implementation-section');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                        >
                          Implementation
                        </Link>
                      </li>
                    )} */}
                  </ul>
                </div>
                <div className="content-wrapper">
                  {caseStudy.overview && (
                    <div id="overview-section" className="content-section">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="stu-tap-content">
                            <h6 className="stu-sub-title">Overview</h6>
                            <p
                              dangerouslySetInnerHTML={{ __html: processContent(caseStudy.overview) }}
                              style={{
                                wordBreak: 'normal',
                                overflowWrap: 'break-word',
                                whiteSpace: 'normal'
                              }}
                            />
                          </div>
                        </div>
                        {(caseStudy.client_name || caseStudy.client_logo || caseStudy.client_description) && (
                          <div className="col-sm-6">
                            <div className="stu-tap-color-content">
                              <h6 className="stu-sub-title">About Client</h6>
                              {caseStudy.client_logo && (
                                <img
                                  src={caseStudy.client_logo}
                                  className="stu-logo-img-1"
                                  alt={caseStudy.client_name || 'Client logo'}
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "/new/sty-abo-logo.svg";
                                  }}
                                />
                              )}
                              {caseStudy.client_description && (
                                <p
                                  dangerouslySetInnerHTML={{ __html: processContent(caseStudy.client_description) }}
                                  style={{
                                    wordBreak: 'normal',
                                    overflowWrap: 'break-word',
                                    whiteSpace: 'normal'
                                  }}
                                />
                              )}
                              {caseStudy.client_location && (
                                <div className="stu-color-6">
                                  <img src="/new/stu-22.svg" alt="" />
                                  <p>{caseStudy.client_location}</p>
                                </div>
                              )}
                              {caseStudy.client_name && (
                                <div className="stu-color-6">
                                  <img src="/new/stu-24.svg" alt="" />
                                  <p>{caseStudy.client_name}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        {caseStudy.content && (
                          <div className="col-sm-12">
                            <div className="stu-tab-dark-color">
                              <p
                                dangerouslySetInnerHTML={{ __html: processContent(caseStudy.content) }}
                                style={{
                                  wordBreak: 'normal',
                                  overflowWrap: 'break-word',
                                  whiteSpace: 'normal'
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {caseStudy.challenges && (
                    <div id="challenges-section" className="content-section">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="stu-tap-content">
                            <h6 className="stu-sub-title">Challenges</h6>
                            <p
                              dangerouslySetInnerHTML={{ __html: processContent(caseStudy.challenges) }}
                              style={{
                                wordBreak: 'normal',
                                overflowWrap: 'break-word',
                                whiteSpace: 'normal'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {caseStudy.solution && (
                    <div id="solution-section" className="content-section">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="stu-tap-content">
                            <h6 className="stu-sub-title">Our Solution</h6>
                            <p
                              dangerouslySetInnerHTML={{ __html: processContent(caseStudy.solution) }}
                              style={{
                                wordBreak: 'normal',
                                overflowWrap: 'break-word',
                                whiteSpace: 'normal'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {caseStudy.benefits && (
                    <div id="benefits-section" className="content-section">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="stu-tap-content">
                            <h6 className="stu-sub-title">Business Impact</h6>
                            <p
                              dangerouslySetInnerHTML={{ __html: processContent(caseStudy.benefits) }}
                              style={{
                                wordBreak: 'normal',
                                overflowWrap: 'break-word',
                                whiteSpace: 'normal'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* {caseStudy.implementation && (
                    <div id="implementation-section" className="content-section">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="stu-tap-content">
                            <h6 className="stu-sub-title">Implementation</h6>
                            <p
                              dangerouslySetInnerHTML={{ __html: processContent(caseStudy.implementation) }}
                              style={{
                                wordBreak: 'normal',
                                overflowWrap: 'break-word',
                                whiteSpace: 'normal'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )} */}
                </div>
                {caseStudy.download_url && (
                  <div className="ser-btn2">
                    <Link
                      href={caseStudy.download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-svg-link1 btn-style-3"
                    >
                      Download the Case Study
                      <span className="svg-container ">
                        <span className=" left">
                          <ArrowSVG direction="left" />
                        </span>
                      </span>
                    </Link>
                  </div>
                )}
                <div className="stu-sociyal-waber">
                  <h6 className="stu-sub-title">Share with</h6>
                  <div className="stu-sociyal">
                    <img src="/new/Linked-in.svg" alt="" />
                    <img src="/new/twitter.svg" alt="" />
                    <img src="/new/instagram.svg" alt="" />
                    <img src="/new/facebook.svg" alt="" />
                    <img src="/new/whatsapp-3.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-3">
                <h6 className="stu-sub-title">Related Case Study</h6>
                {relatedCaseStudies.length === 0 ? (
                  <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
                    No related case studies found.
                  </div>
                ) : (
                  relatedCaseStudies.map((related) => (
                    <div key={related.id} className="case-one-waber" style={{ marginBottom: '30px' }}>
                      <div>
                        <Link href={`/Case-study-details/${related.id}`} className="case-bage">
                          Case Study
                        </Link>
                      </div>
                      <h6 className="stu-sub-title p-0 m-0">
                        {related.title}
                      </h6>
                      <div className="ser-btn m-0">
                        <Link
                          href={`/Case-study-details/${related.id}`}
                          className="animated-svg-link p-0"
                        >
                          Read More
                          <span className="svg-container ">
                            <span className=" right">
                              <ArrowSVG />
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Footer Start */}
        <footer className="main-footer pd0">
          <div className="footer-main">
            <div className="container">
              <div className="firstrow">
                <div className="row">
                  <div className="col-sm-8">
                    <h2>Ready to accelerate value creation across your portfolio?</h2>
                    <p>
                      Contact us today to learn how we can help modernise operations,
                      de-risk integrations, and improve commercial outcomes.
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <div className="ser-btn text-right">
                      <Link href="/contact-us" className="animated-svg-link">
                        Contact Us
                        <span className="svg-container ">
                          <span className=" right">
                            <ArrowSVG />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </CommomLayout>
  );
}
