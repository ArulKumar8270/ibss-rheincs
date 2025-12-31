"use client";

import React, { useState, useEffect } from "react";
import CommomLayout from "../Components/CommomLayout";
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

interface Industry {
  id: string;
  name: string;
  slug: string;
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

export default function CaseStudyPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const supabase = createClient();

  useEffect(() => {
    fetchCaseStudies();
    fetchIndustries();
    
    // Refetch case studies when window gains focus (user returns to tab)
    const handleFocus = () => {
      fetchCaseStudies();
    };
    
    // Refetch case studies periodically (every 30 seconds) to catch new records
    const intervalId = setInterval(() => {
      fetchCaseStudies();
    }, 30000);
    
    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      clearInterval(intervalId);
    };
  }, []);

  const fetchIndustries = async () => {
    try {
      const { data, error } = await supabase
        .from('industries')
        .select('id, name, slug')
        .eq('active', true)
        .order('display_order', { ascending: true })
        .order('name', { ascending: true });

      if (error) throw error;
      setIndustries(data || []);
    } catch (err) {
      console.error('Error fetching industries:', err);
      setIndustries([]);
    }
  };

  const fetchCaseStudies = async () => {
    try {
      // Add cache-busting to ensure fresh data
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Only update if data has actually changed (prevent unnecessary re-renders)
      setCaseStudies(prevCaseStudies => {
        const prevIds = new Set(prevCaseStudies.map(cs => cs.id));
        const newIds = new Set((data || []).map((cs: CaseStudy) => cs.id));
        const idsChanged = prevCaseStudies.length !== (data || []).length || 
          ![...prevIds].every(id => newIds.has(id)) ||
          ![...newIds].every(id => prevIds.has(id));
        
        // If data changed, update state
        if (idsChanged || JSON.stringify(prevCaseStudies) !== JSON.stringify(data)) {
          return data || [];
        }
        return prevCaseStudies;
      });
    } catch (err: any) {
      console.error('Error fetching case studies:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Filter case studies by category, industries, and search term
  const filteredCaseStudies = caseStudies.filter(cs => {
    // Category filter - when "all" is selected, show case studies from ALL categories
    const categoryMatch = selectedCategory === "all" 
      ? true  // Show all case studies regardless of category when "All" is selected
      : (cs.industries?.includes(selectedCategory) || cs.category === selectedCategory);
    
    // Industry filter
    const industryMatch = selectedIndustries.length === 0 || 
      (cs.industries && cs.industries.length > 0 && 
       selectedIndustries.some(selectedSlug => cs.industries!.includes(selectedSlug)));
    
    // Search filter
    const searchMatch = searchTerm === '' || 
      cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (cs.excerpt && cs.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (cs.content && cs.content.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (cs.client_name && cs.client_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (cs.overview && cs.overview.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return categoryMatch && industryMatch && searchMatch;
  });

  // Get latest 4 case studies for the carousel - from filtered results
  const carouselItems = filteredCaseStudies.slice(0, 4);

  // Handle industry checkbox change
  const handleIndustryChange = (industrySlug: string) => {
    setSelectedIndustries(prev => {
      if (prev.includes(industrySlug)) {
        return prev.filter(slug => slug !== industrySlug);
      } else {
        return [...prev, industrySlug];
      }
    });
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedIndustries([]);
    setSearchTerm('');
  };

  if (loading) {
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
          <p style={{ color: '#666', fontSize: '18px' }}>Loading case studies...</p>
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

  return (
    <CommomLayout>
      <>
        {/* Header Start */}
        {/*?php include "navbar.php" ?*/}
        {/* Header End */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .swiper-horizontal {\n        touch-action: pan-y;\n        width: 100%;\n    }\n"
          }}
        />
        <section className="blog-main-waber">
          <div className="container">
            <h2 className="blog-main-title" data-cursor="-opaque">
              Latest Case Study
            </h2>
            <div className="blog-waber-one">
              {/* Testimonial Slider Start */}
              <div className="testimonial-slider77 testianimdot">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {carouselItems.length > 0 ? (
                      carouselItems.map((item) => (
                        <div key={item.id} className="swiper-slide">
                          <div className="blog-baner">
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="blog-content-waber">
                                  <p className="blog-bage">Case Study</p>
                                  <h2 className="blog-baner-title">
                                    {item.title}
                                  </h2>
                                  <div className="ser-btn m-0">
                                    <Link
                                      href={`/Case-study-details/${item.id}`}
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
                              </div>
                              <div className="col-sm-6">
                                <img
                                  src={item.featured_image || "/new/blog-slider.jpg"}
                                  alt={item.title}
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "/new/blog-slider.jpg";
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="swiper-slide">
                        <div className="blog-baner">
                          <div className="row">
                            <div className="col-sm-12">
                              <p style={{ textAlign: 'center', padding: '40px' }}>
                                No case studies available yet.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="testimonial-btn77">
                    <div className="testimonial-button-prev">
                      <div className="animated-svg-link">
                        <span className="svg-container ">
                          <span className=" right">
                            <ArrowSVG />
                          </span>
                        </span>
                      </div>
                    </div>
                    <span className="testspace" style={{ color: "#000" }}>
                      {carouselItems.length > 0 ? `1/${carouselItems.length}` : '0/0'}
                    </span>
                    <div className="testimonial-button-next">
                      <div className="animated-svg-link">
                        <span className="svg-container ">
                          <span className=" right">
                            <ArrowSVG />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Slider End */}
            </div>
            <div className="row">
              <div className="col-sm-9">
                <div className="bolg-filter-waber">
                  {/* Filter Buttons */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
                    <div className="filter-controls">
                      <button
                        className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
                        onClick={() => setSelectedCategory("all")}
                      >
                        All
                      </button>
                      <button
                        className={`filter-btn ${selectedCategory === "our-solutions" ? "active" : ""}`}
                        onClick={() => setSelectedCategory("our-solutions")}
                      >
                        Our Solutions
                      </button>
                      <button
                        className={`filter-btn ${selectedCategory === "enterprise-solutions" ? "active" : ""}`}
                        onClick={() => setSelectedCategory("enterprise-solutions")}
                      >
                        Enterprise Solutions & Services
                      </button>
                      <button
                        className={`filter-btn ${selectedCategory === "digital-solutions" ? "active" : ""}`}
                        onClick={() => setSelectedCategory("digital-solutions")}
                      >
                        Digital Solutions
                      </button>
                      <button
                        className={`filter-btn ${selectedCategory === "digital-services" ? "active" : ""}`}
                        onClick={() => setSelectedCategory("digital-services")}
                      >
                        Digital Services
                      </button>
                    </div>
                    {(selectedIndustries.length > 0 || selectedCategory !== 'all' || searchTerm) && (
                      <div style={{ fontSize: '14px', color: '#666' }}>
                        Showing {filteredCaseStudies.length} of {caseStudies.length} case stud{caseStudies.length !== 1 ? 'ies' : 'y'}
                      </div>
                    )}
                  </div>
                  <div className="row">
                    {filteredCaseStudies.length > 0 ? (
                      filteredCaseStudies.map((item) => {
                        // Build category string for data-category attribute
                        const categories = [
                          ...(item.industries || []),
                          item.category
                        ].filter(Boolean).join(' ');
                        
                        return (
                          <div
                            key={item.id}
                            className="col-sm-4 mb-4 item"
                            data-category={categories || "all"}
                          >
                            <div className="blog-content-waber2">
                              <img
                                src={item.featured_image || "/new/blg-222.jpeg"}
                                className="blog-img-waber-img"
                                alt={item.title}
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/new/blg-222.jpeg";
                                }}
                              />
                              <div className="blog-content-in-blog-page">
                                <p className="blag-page-1">Case Study</p>
                                <h5 className="blog-page-blog-titles">
                                  {item.title}
                                </h5>
                                <p className="blog-date-time">
                                  {formatDate(item.created_at)}
                                </p>
                                <div className="ser-btn1">
                                  <Link
                                    href={`/Case-study-details/${item.id}`}
                                    className="animated-svg-link1 btn-style-3"
                                  >
                                    Read More
                                    <span className="svg-container ">
                                      <span className=" left">
                                        <ArrowSVG direction="left" />
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="col-sm-12">
                        {(selectedIndustries.length > 0 || selectedCategory !== 'all' || searchTerm) ? (
                          <div style={{ textAlign: 'center', padding: '40px' }}>
                            <p>No case studies match your current filters.</p>
                            <button
                              onClick={clearFilters}
                              style={{
                                background: '#499A9A',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                marginTop: '10px'
                              }}
                            >
                              Clear All Filters
                            </button>
                          </div>
                        ) : (
                          <p style={{ textAlign: 'center', padding: '40px' }}>
                            No case studies available yet.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  {/* Pagination - Simplified for now */}
                  <div className="page-nate-waber">
                    <Link href="#" className="animated-svg-link left-arrow">
                      <span className="svg-container ">
                        <span className=" right">
                          <ArrowSVG direction="left" />
                        </span>
                      </span>
                    </Link>
                    <span className="active">1</span>
                    <Link href="#" className="animated-svg-link">
                      <span className="svg-container ">
                        <span className=" right">
                          <ArrowSVG />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <form onSubmit={handleSearch}>
                  <div className="blog-serch">
                    <input 
                      type="text" 
                      placeholder="Search case studies" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">
                      <img src="/new/ser-blog.svg" alt="Search" />
                    </button>
                  </div>
                </form>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', marginBottom: '15px' }}>
                  <h6 className="fome-filter-title" style={{ margin: 0 }}>Industries</h6>
                  {(selectedIndustries.length > 0 || selectedCategory !== 'all' || searchTerm) && (
                    <button
                      onClick={clearFilters}
                      style={{
                        background: 'none',
                        border: '1px solid #499A9A',
                        color: '#499A9A',
                        padding: '5px 15px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
                <div className="filter-check-box-waber">
                  {industries.length === 0 ? (
                    <p style={{ color: '#666', fontSize: '14px' }}>No industries available</p>
                  ) : (
                    industries.map((industry) => (
                      <div key={industry.id} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={selectedIndustries.includes(industry.slug)}
                          onChange={() => handleIndustryChange(industry.slug)}
                          id={`case-study-industry-${industry.slug}`}
                        />
                        <label 
                          className="form-check-label" 
                          htmlFor={`case-study-industry-${industry.slug}`}
                          style={{ cursor: 'pointer' }}
                        >
                          {industry.name}
                        </label>
                      </div>
                    ))
                  )}
                </div>
                {/* Show active filters */}
                {(selectedIndustries.length > 0 || searchTerm) && (
                  <div style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5', borderRadius: '4px' }}>
                    <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>Active Filters:</p>
                    {searchTerm && (
                      <span style={{ 
                        display: 'inline-block', 
                        background: '#499A9A', 
                        color: 'white', 
                        padding: '4px 8px', 
                        borderRadius: '3px', 
                        fontSize: '11px',
                        margin: '2px'
                      }}>
                        Search: {searchTerm}
                      </span>
                    )}
                    {selectedIndustries.map(slug => {
                      const industry = industries.find(ind => ind.slug === slug);
                      return industry ? (
                        <span key={slug} style={{ 
                          display: 'inline-block', 
                          background: '#499A9A', 
                          color: 'white', 
                          padding: '4px 8px', 
                          borderRadius: '3px', 
                          fontSize: '11px',
                          margin: '2px'
                        }}>
                          {industry.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Footer Start */}
        <footer className="main-footer pd30">
          {/* Footer Main Start */}
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
              {/*?php include "footer.php" ?*/}
            </div>
          </div>
        </footer>
      </>
    </CommomLayout>
  );
}
