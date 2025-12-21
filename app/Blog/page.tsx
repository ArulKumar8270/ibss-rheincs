"use client";

import React, { useEffect, useState } from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  featured_image: string | null;
  category: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const itemsPerPage = 9; // 3 columns x 3 rows
  const supabase = createClient();

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'our-solutions', label: 'Our Solutions' },
    { value: 'enterprise-solutions', label: 'Enterprise Solutions & Services' },
    { value: 'digital-solutions', label: 'Digital Solutions' },
    { value: 'digital-services', label: 'Digital Services' }
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter blogs by category
  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => (blog.category || 'all') === selectedCategory);

  // Get featured blogs for slider (first 6) - from filtered blogs
  const featuredBlogs = filteredBlogs.slice(0, 6);
  
  // Calculate pagination based on filtered blogs
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const gridBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7; // Show up to 7 page numbers
    
    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);
      
      if (currentPage <= 4) {
        // Near the beginning
        for (let i = 2; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Near the end
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of blog section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const ArrowSVG = () => (
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
              {" "}
              Latest Blog Posts{" "}
            </h2>
            <div className="blog-waber-one">
              {/* Testimonial Slider Start */}
              <div className="testimonial-slider77 testianimdot">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {loading ? (
                      <div className="swiper-slide">
                        <div className="blog-baner">
                          <div className="row">
                            <div className="col-sm-12" style={{ textAlign: 'center', padding: '40px' }}>
                              <p>Loading blogs...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : featuredBlogs.length === 0 ? (
                      <div className="swiper-slide">
                        <div className="blog-baner">
                          <div className="row">
                            <div className="col-sm-12" style={{ textAlign: 'center', padding: '40px' }}>
                              <p>No blogs available yet.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      featuredBlogs.map((blog) => (
                        <div key={blog.id} className="swiper-slide">
                          <div className="blog-baner">
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="blog-content-waber">
                                  <div>
                                    <p className="blog-bage">Blog</p>
                                  </div>
                                  <h2 className="blog-baner-title">
                                    {blog.title}
                                  </h2>
                                  <div className="ser-btn m-0">
                                    <Link
                                      href={`/blog-details/${blog.slug}`}
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
                                  src={blog.featured_image || "/new/blog-slider.jpg"}
                                  alt={blog.title}
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "/new/blog-slider.jpg";
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                                    <div className="testimonial-btn77">
                                        <div className="testimonial-button-prev">
                                            <div className="animated-svg-link">
                                                <span className="svg-container ">
                                                    <span className=" right">
                                                        <svg
                                                            width={24}
                                                            height={23}
                                                            viewBox="0 0 24 23"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="16.0004"
                                                                cy="4.79995"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="12.7992"
                                                                cy="1.6"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="22.4008"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="1.6"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="6.40078"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="11.1996"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="16.0004"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="19.1996"
                                                                cy="14.4"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="16.0004"
                                                                cy="17.6"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="12.7992"
                                                                cy="20.8"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="19.1996"
                                                                cy="8.00002"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                        </svg>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <span className="testspace" style={{ color: "#000" }}>
                                            1/6
                                        </span>
                                        <div className="testimonial-button-next">
                                            <div className="animated-svg-link">
                                                <span className="svg-container ">
                                                    <span className=" right">
                                                        <svg
                                                            width={24}
                                                            height={23}
                                                            viewBox="0 0 24 23"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="16.0004"
                                                                cy="4.79995"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="12.7992"
                                                                cy="1.6"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="22.4008"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="1.6"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="6.40078"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="11.1996"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="16.0004"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="19.1996"
                                                                cy="14.4"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="16.0004"
                                                                cy="17.6"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="12.7992"
                                                                cy="20.8"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="19.1996"
                                                                cy="8.00002"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                        </svg>
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
                                <div className="mobileview">
                                    <div className="mobile-blog-top ">
                                        <div className="filtermbl search-row">
                                            <input
                                                type="text"
                                                placeholder="Search blogs"
                                                className="search-input"
                                            />
                                            <button className="filter-btn1" id="openFilterBtn">
                                                <svg
                                                    width={20}
                                                    height={23}
                                                    viewBox="0 0 20 23"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2.87667 0.75H16.9383C18.1117 0.75 19.065 1.70333 19.065 2.87667V5.22333C19.065 6.085 18.5333 7.14833 18.0017 7.68L13.4183 11.7317C12.7767 12.2633 12.355 13.3267 12.355 14.1883V18.7717C12.355 19.4133 11.9333 20.2567 11.4017 20.5867L9.91667 21.5217C8.52333 22.3833 6.61667 21.4117 6.61667 19.7067V14.06C6.61667 13.3083 6.195 12.355 5.755 11.8233L1.70333 7.55167C1.17167 7.03833 0.75 6.06667 0.75 5.425V2.98667C0.75 1.70333 1.70333 0.75 2.87667 0.75Z"
                                                        stroke="#499A9A"
                                                        strokeWidth="1.5"
                                                        strokeMiterlimit={10}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Filter Content */}
                                    <div className="mobile-filter" id="mobileFilter">
                                        <Link                        href="#demo3"
                                            data-bs-toggle="collapse"
                                            className="arrow-toggle"
                                            aria-expanded="true"
                                        ></Link>
                                        <div id="demo3" className="collapse content-box collapse show">
                                            <div className="col-sm-12 width100">
                                                <h6 className="fome-filter-title">Industries</h6>
                                                <div className="filter-check-box-waber">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            Brand Owners and Vertical Retailers
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            Retail Industry
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            Distribution and Supply Chain
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            Discrete Manufacturing
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            Automotive Industry
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            Engineering Procurement and Construction
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            Process Manufacturing
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            Private Equity &amp; Funding Backed Ventures
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            Cable Manufacturing
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            Interior Design
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bolg-filter-waber">
                                    {/* 1. Filter Buttons (Controls) */}
                                    <div className="filter-controls">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat.value}
                                                className={`filter-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                                                data-filter={cat.value}
                                                onClick={() => setSelectedCategory(cat.value)}
                                                style={{
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s'
                                                }}
                                            >
                                                {cat.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="row">
                                        {loading ? (
                                            <div className="col-sm-12" style={{ textAlign: 'center', padding: '40px' }}>
                                                <p>Loading blogs...</p>
                                            </div>
                                        ) : gridBlogs.length === 0 ? (
                                            <div className="col-sm-12" style={{ textAlign: 'center', padding: '40px' }}>
                                                <p>No blogs available yet.</p>
                                            </div>
                                        ) : (
                                            gridBlogs.map((blog) => (
                                                <div
                                                    key={blog.id}
                                                    className="col-sm-4 mb-4 item"
                                                    data-category={blog.category || 'all'}
                                                >
                                                    <div className="blog-content-waber2">
                                                        <img
                                                            src={blog.featured_image || "/new/blg-222.jpeg"}
                                                            className="blog-img-waber-img"
                                                            alt={blog.title}
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).src = "/new/blg-222.jpeg";
                                                            }}
                                                        />
                                                        <div className="blog-content-in-blog-page">
                                                            <div>
                                                                <p className="blag-page-1">Blog</p>
                                                            </div>
                                                            <h5 className="blog-page-blog-titles">
                                                                {blog.title}
                                                            </h5>
                                                            <p className="blog-date-time">{formatDate(blog.created_at)}</p>
                                                            <div className="ser-btn1">
                                                                <Link
                                                                    href={`/blog-details/${blog.slug}`}
                                                                    className="animated-svg-link1 btn-style-3 p-0"
                                                                >
                                                                    Read More
                                                                    <span className="svg-container ">
                                                                        <span className=" left">
                                                                            <ArrowSVG />
                                                                        </span>
                                                                    </span>{" "}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                    {totalPages > 1 && (
                                        <div className="page-nate-waber">
                                            {currentPage > 1 ? (
                                                <Link
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handlePageChange(currentPage - 1);
                                                    }}
                                                    className="animated-svg-link left-arrow"
                                                >
                                                    <span className="svg-container ">
                                                        <span className=" right">
                                                            <ArrowSVG />
                                                        </span>
                                                    </span>
                                                </Link>
                                            ) : (
                                                <span className="animated-svg-link left-arrow" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                                                    <span className="svg-container ">
                                                        <span className=" right">
                                                            <ArrowSVG />
                                                        </span>
                                                    </span>
                                                </span>
                                            )}
                                            {getPaginationNumbers().map((page, index) => {
                                                if (page === '...') {
                                                    return (
                                                        <span key={`ellipsis-${index}`} className="dark">
                                                            ...
                                                        </span>
                                                    );
                                                }
                                                const pageNum = page as number;
                                                return (
                                                    <Link
                                                        key={pageNum}
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handlePageChange(pageNum);
                                                        }}
                                                        className={currentPage === pageNum ? 'active' : ''}
                                                        style={{
                                                            textDecoration: 'none',
                                                            color: 'inherit',
                                                            display: 'inline-block',
                                                            padding: '5px 10px',
                                                            margin: '0 2px'
                                                        }}
                                                    >
                                                        {pageNum}
                                                    </Link>
                                                );
                                            })}
                                            {currentPage < totalPages ? (
                                                <Link
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handlePageChange(currentPage + 1);
                                                    }}
                                                    className="animated-svg-link"
                                                >
                                                    <span className="svg-container ">
                                                        <span className=" right">
                                                            <ArrowSVG />
                                                        </span>
                                                    </span>
                                                </Link>
                                            ) : (
                                                <span className="animated-svg-link" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                                                    <span className="svg-container ">
                                                        <span className=" right">
                                                            <ArrowSVG />
                                                        </span>
                                                    </span>
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-sm-3 systemview">
                                <form action="" method="post">
                                    <div className="blog-serch">
                                        <input type="text" placeholder="Search blogs" />
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
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Brand Owners and Vertical Retailers
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Retail Industry
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Distribution and Supply Chain
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Discrete Manufacturing
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Automotive Industry
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Engineering Procurement and Construction
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Process Manufacturing
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Private Equity &amp; Funding Backed Ventures
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Cable Manufacturing
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Interior Design
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer Start */}
                <footer className="main-footer pd0">
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
                                                        <svg
                                                            width={24}
                                                            height={23}
                                                            viewBox="0 0 24 23"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="16.0004"
                                                                cy="4.79995"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="12.7992"
                                                                cy="1.6"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="22.4008"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="1.6"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="6.40078"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="11.1996"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="16.0004"
                                                                cy="11.2"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="19.1996"
                                                                cy="14.4"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="16.0004"
                                                                cy="17.6"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="12.7992"
                                                                cy="20.8"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                            <circle
                                                                className="dot"
                                                                opacity="0.5"
                                                                cx="19.1996"
                                                                cy="8.00002"
                                                                r="1.6"
                                                                fill="#535353"
                                                            />
                                                        </svg>
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
    )
}