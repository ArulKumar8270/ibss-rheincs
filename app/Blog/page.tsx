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
  industries: string[] | null;
}

interface Industry {
  id: string;
  name: string;
  slug: string;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
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
    checkAdminStatus();
    fetchBlogs();
    fetchIndustries();
    
    // Refetch blogs when window gains focus (user returns to tab)
    const handleFocus = () => {
      fetchBlogs();
    };
    
    // Refetch blogs periodically (every 30 seconds) to catch new records
    const intervalId = setInterval(() => {
      fetchBlogs();
    }, 30000);
    
    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      clearInterval(intervalId);
    };
  }, []);

  const checkAdminStatus = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAdmin(!!user);
    } catch (err) {
      setIsAdmin(false);
    }
  };

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

  const fetchBlogs = async () => {
    try {
      // Check if user is admin
      const { data: { user } } = await supabase.auth.getUser();
      const userIsAdmin = !!user;
      setIsAdmin(userIsAdmin);

      // Add cache-busting: use timestamp to ensure fresh data
      const timestamp = Date.now();
      let query = supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      // If not admin, only fetch published blogs
      if (!userIsAdmin) {
        query = query.eq('published', true);
      }
      // If admin, fetch all blogs (published and unpublished)

      // Add cache-busting header to bypass any caching
      const { data, error } = await query;

      if (error) throw error;
      
      // Only update if data has actually changed (prevent unnecessary re-renders)
      setBlogs(prevBlogs => {
        const prevIds = new Set(prevBlogs.map(b => b.id));
        const newIds = new Set((data || []).map((b: Blog) => b.id));
        const idsChanged = prevBlogs.length !== (data || []).length || 
          ![...prevIds].every(id => newIds.has(id)) ||
          ![...newIds].every(id => prevIds.has(id));
        
        // If data changed, update state
        if (idsChanged || JSON.stringify(prevBlogs) !== JSON.stringify(data)) {
          return data || [];
        }
        return prevBlogs;
      });
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter blogs by category, industries, and search term
  const filteredBlogs = blogs.filter(blog => {
    // Category filter - when "all" is selected, show blogs from ALL categories
    // This includes: our-solutions, enterprise-solutions, digital-solutions, digital-services, and any other category
    const categoryMatch = selectedCategory === 'all' 
      ? true  // Show all blogs regardless of category when "All" is selected
      : (blog.category || 'all') === selectedCategory;  // Match specific category
    
    // Industry filter
    const industryMatch = selectedIndustries.length === 0 || 
      (blog.industries && blog.industries.length > 0 && 
       selectedIndustries.some(selectedSlug => blog.industries!.includes(selectedSlug)));
    
    // Search filter
    const searchMatch = searchTerm === '' || 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.excerpt && blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (blog.content && blog.content.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return categoryMatch && industryMatch && searchMatch;
  });

  // Get featured blogs for slider (latest 4) - from filtered blogs
  const featuredBlogs = filteredBlogs.slice(0, 4);
  
  // Calculate pagination based on filtered blogs
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const gridBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedIndustries, searchTerm]);

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
    setCurrentPage(1);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedIndustries([]);
    setSearchTerm('');
    setCurrentPage(1);
  };

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
                                    {isAdmin && !blog.published && (
                                      <span style={{
                                        display: 'inline-block',
                                        marginLeft: '10px',
                                        padding: '4px 8px',
                                        background: '#ff9800',
                                        color: '#fff',
                                        borderRadius: '4px',
                                        fontSize: '12px',
                                        fontWeight: '600'
                                      }}>
                                        DRAFT
                                      </span>
                                    )}
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
                                            1/{featuredBlogs.length}
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
                                            <form onSubmit={handleSearch} style={{ display: 'flex', width: '100%', gap: '10px' }}>
                                                <input
                                                    type="text"
                                                    placeholder="Search blogs"
                                                    className="search-input"
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    style={{ flex: 1 }}
                                                />
                                                <button type="submit" style={{ background: 'none', border: 'none', padding: 0 }}>
                                                    <img src="/new/ser-blog.svg" alt="Search" style={{ width: '20px', height: '20px' }} />
                                                </button>
                                            </form>
                                            <button 
                                                className="filter-btn1" 
                                                id="openFilterBtn"
                                                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                                                style={{ marginLeft: '10px' }}
                                            >
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
                                    <div className="mobile-filter" id="mobileFilter" style={{ display: mobileFilterOpen ? 'block' : 'none' }}>
                                        <Link
                                            href="#demo3"
                                            data-bs-toggle="collapse"
                                            className="arrow-toggle"
                                            aria-expanded="true"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setMobileFilterOpen(!mobileFilterOpen);
                                            }}
                                        ></Link>
                                        <div id="demo3" className="collapse content-box collapse show">
                                            <div className="col-sm-12 width100">
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
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
                                                                    id={`mobile-industry-${industry.slug}`}
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor={`mobile-industry-${industry.slug}`}
                                                                >
                                                                    {industry.name}
                                                                </label>
                                                            </div>
                                                        ))
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bolg-filter-waber">
                                    {/* 1. Filter Buttons (Controls) */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
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
                                        {(selectedIndustries.length > 0 || selectedCategory !== 'all' || searchTerm) && (
                                            <div style={{ fontSize: '14px', color: '#666' }}>
                                                Showing {filteredBlogs.length} of {blogs.length} blog{blogs.length !== 1 ? 's' : ''}
                                            </div>
                                        )}
                                    </div>
                                    <div className="row">
                                        {loading ? (
                                            <div className="col-sm-12" style={{ textAlign: 'center', padding: '40px' }}>
                                                <p>Loading blogs...</p>
                                            </div>
                                        ) : gridBlogs.length === 0 ? (
                                            <div className="col-sm-12" style={{ textAlign: 'center', padding: '40px' }}>
                                                {(selectedIndustries.length > 0 || selectedCategory !== 'all' || searchTerm) ? (
                                                    <div>
                                                        <p>No blogs match your current filters.</p>
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
                                                    <p>No blogs available yet.</p>
                                                )}
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
                                                                {isAdmin && !blog.published && (
                                                                  <span style={{
                                                                    display: 'inline-block',
                                                                    marginLeft: '10px',
                                                                    padding: '4px 8px',
                                                                    background: '#ff9800',
                                                                    color: '#fff',
                                                                    borderRadius: '4px',
                                                                    fontSize: '11px',
                                                                    fontWeight: '600'
                                                                  }}>
                                                                    DRAFT
                                                                  </span>
                                                                )}
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
                                <form onSubmit={handleSearch}>
                                    <div className="blog-serch">
                                        <input 
                                            type="text" 
                                            placeholder="Search blogs" 
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
                                                    id={`desktop-industry-${industry.slug}`}
                                                />
                                                <label 
                                                    className="form-check-label" 
                                                    htmlFor={`desktop-industry-${industry.slug}`}
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