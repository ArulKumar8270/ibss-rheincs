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
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const supabase = createClient();

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCaseStudies(data || []);
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

  // Get unique categories from all case studies
  const allCategories = Array.from(
    new Set(
      caseStudies.flatMap(cs => cs.industries || [])
    )
  );

  // Filter case studies by selected category
  const filteredCaseStudies = selectedCategory === "all"
    ? caseStudies
    : caseStudies.filter(cs => 
        cs.industries?.includes(selectedCategory) || cs.category === selectedCategory
      );

  // Get first 3-6 case studies for the carousel
  const carouselItems = caseStudies.slice(0, 6);

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
                        <p style={{ textAlign: 'center', padding: '40px' }}>
                          No case studies found in this category.
                        </p>
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
                <form action="" method="post">
                  <div className="blog-serch">
                    <input type="text" placeholder="Search case studies" />
                    <button type="submit">
                      <img src="/new/ser-blog.svg" alt="" />
                    </button>
                  </div>
                </form>
                <h6 className="fome-filter-title">Industries</h6>
                <div className="filter-check-box-waber">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                      Brand Owners and Vertical Retailers
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault2"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault2">
                      Retail Industry
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault3"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                      Distribution and Supply Chain
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault4"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault4">
                      Discrete Manufacturing
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault5"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault5">
                      Automotive Industry
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault6"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault6">
                      Engineering Procurement and Construction
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault7"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault7">
                      Process Manufacturing
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault8"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault8">
                      Private Equity & Funding Backed Ventures
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault9"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault9">
                      Cable Manufacturing
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault10"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault10">
                      Interior Design
                    </label>
                  </div>
                </div>
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
