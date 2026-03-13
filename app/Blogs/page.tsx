"use client";

import React, { useEffect, useState } from "react";
import CommomLayout from "../Components/CommomLayout";
import { useTranslation } from "../hooks/useTranslation";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";
import { Metadata } from "next";
import { getCache, setCache } from "../utils/cache";

export const metadata: Metadata = {
  title: "Blogs | Enterprise Digital Transformation & ERP Solutions | RheinBrücke",
  description: "Explore our latest insights, industry trends, and expert opinions on digital transformation, ERP solutions, and enterprise services.",
};

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  featured_image: string | null;
  category: string;
  language: string | null;
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
  const { t, language } = useTranslation();
  
  // Try to initialize from cache to prevent loading flicker
  const initialCache = typeof window !== 'undefined' ? getCache(language) : null;
  
  const [blogs, setBlogs] = useState<Blog[]>(initialCache?.blogs || []);
  const [industries, setIndustries] = useState<Industry[]>(initialCache?.industries || []);
  const [loading, setLoading] = useState(!initialCache || !initialCache.blogs);
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
    
    // Try to load from cache first
    const cachedData = getCache(language);
    if (cachedData && cachedData.blogs && cachedData.industries) {
      setBlogs(cachedData.blogs);
      setIndustries(cachedData.industries);
      setLoading(false);
    } else {
      fetchIndustries();
      fetchBlogs();
    }
  }, [language]);

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
      const industriesData = data || [];
      setIndustries(industriesData);
      
      // Update cache
      const currentCache = getCache(language) || {};
      setCache(language, { ...currentCache, industries: industriesData });
    } catch (err) {
      console.error('Error fetching industries:', err);
      setIndustries([]);
    }
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      // Check if user is admin
      const { data: { user } } = await supabase.auth.getUser();
      const userIsAdmin = !!user;
      setIsAdmin(userIsAdmin);

      let query = supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      // Filter by current language: show only blogs for English or German
      const currentLang = language === 'German' ? 'German' : 'English';
      if (currentLang === 'German') {
        query = query.eq('language', 'German');
      } else {
        // English: include rows where language is 'English' or null (legacy)
        query = query.or('language.eq.English,language.is.null');
      }

      // If not admin, only fetch published blogs
      if (!userIsAdmin) {
        query = query.eq('published', true);
      }

      const { data, error } = await query;

      if (error) throw error;
      
      const blogsData = data || [];
      setBlogs(blogsData);
      
      // Update cache
      const currentCache = getCache(language) || {};
      setCache(language, { ...currentCache, blogs: blogsData });
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter blogs by category, industries, and search term
  const filteredBlogs = blogs.filter(blog => {
    // Category filter - when "all" is selected, show blogs from ALL categories
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

  // Reset to page 1 when filters or language change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedIndustries, searchTerm, language]);

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
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage <= 4) {
        for (let i = 2; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
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
                                      href={`/Blogs/${blog.slug}`}
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
                            <ArrowSVG />
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
                            <ArrowSVG />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-9">
                <div className="bolg-filter-waber">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
                    <div className="filter-controls">
                      {categories.map((cat) => (
                        <button
                          key={cat.value}
                          className={`filter-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                          onClick={() => setSelectedCategory(cat.value)}
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
                                  href={`/Blogs/${blog.slug}`}
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
              </div>
            </div>
          </div>
        </section>
      </>
    </CommomLayout>
  );
}
