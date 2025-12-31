"use client";

import React, { useState, useEffect } from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import TestimonialandAward from "../Components/TestimonialandAward";
import Awards from "../Components/Awards";
import { createClient } from "@/lib/supabase-browser";

interface NewsEvent {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  type: 'news' | 'event';
  event_date: string | null;
  location: string | null;
  featured_image: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export default function EnterpriseSolutions() {
  const [items, setItems] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchItems();
    
    // Refetch items when window gains focus (user returns to tab)
    const handleFocus = () => {
      fetchItems();
    };
    
    // Refetch items periodically (every 30 seconds) to catch new records
    const intervalId = setInterval(() => {
      fetchItems();
    }, 30000);
    
    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      clearInterval(intervalId);
    };
  }, []);

  const fetchItems = async () => {
    try {
      // Add cache-busting to ensure fresh data
      const { data, error } = await supabase
        .from('news_events')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Only update if data has actually changed (prevent unnecessary re-renders)
      setItems(prevItems => {
        const prevIds = new Set(prevItems.map(item => item.id));
        const newIds = new Set((data || []).map((item: NewsEvent) => item.id));
        const idsChanged = prevItems.length !== (data || []).length || 
          ![...prevIds].every(id => newIds.has(id)) ||
          ![...newIds].every(id => prevIds.has(id));
        
        // If data changed, update state
        if (idsChanged || JSON.stringify(prevItems) !== JSON.stringify(data)) {
          return data || [];
        }
        return prevItems;
      });
    } catch (err: any) {
      console.error('Error fetching news/events:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const getIcon = (type: string) => {
    if (type === 'event') {
      return 'fas fa-calendar-alt';
    }
    return 'fas fa-newspaper';
  };
  return (
    <CommomLayout>
      <>
        {/* Header Start */}
        {/*?php include "navbar.php" ?*/}
        {/* Header End */}
        <div className="bg-video-waber2 newsmobile py-100">
          <div className="parent2 retailparent2 mobilevideo">
            <video
              src="/new/histery.mp4"
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
              className="bg-image1"
            />
          </div>
          <div className="container bg-video-waber-content2 ">
            <div className="row section-row1 align-items-center builtsec">
              <div className="col-sm-6">
                <div className="section-title">
                  <h2
                    className="text-anime-style-2"
                    style={{ color: "#082326" }}
                    data-cursor="-opaque"
                  >
                    Our History
                  </h2>
                  <p className="text-dark">
                    {" "}
                    The latest in news and events from RheinBrücke, giving you
                    insights on the recent developments in our organization.{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-6 pd0">
                <div className="parent2 retailparent2 mobileview">
                  <video
                    src="/new/histery.mp4"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    className="bg-image1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* START OF THE TIMELINE SECTION */}
        <div className="time-99">
          <div className="container">
            <div className="row section-row1 align-items-center">
              <div className="col-sm-12">
                {/* The new, attractive timeline starts here */}
                <div className="timeline">
                  {loading ? (
                    <div style={{ padding: '40px', textAlign: 'center' }}>
                      <p>Loading news and events...</p>
                    </div>
                  ) : items.length === 0 ? (
                    <div style={{ padding: '40px', textAlign: 'center' }}>
                      <p>No news or events available at the moment.</p>
                    </div>
                  ) : (
                    items.map((item, index) => (
                      <div key={item.id} className="timeline-item is-visible">
                        <div className="timeline-marker">
                          <i className={getIcon(item.type)} />
                        </div>
                        <div className="timeline-content card">
                          <div className="card-body p-4">
                            <p className="text-primary mb-1">
                              {item.event_date ? formatDate(item.event_date) : formatDate(item.created_at)}
                            </p>
                            <h5 className="card-title fw-bold">
                              {item.title}
                            </h5>
                            {item.featured_image && (
                              <img
                                src={item.featured_image}
                                alt={item.title}
                                className="timeline-image"
                              />
                            )}
                            {item.excerpt && (
                              <p className="mt-3">{item.excerpt}</p>
                            )}
                            {index < 3 && (
                              <Link href={`/news-events/${item.id}`} className="animated-svg-link hr-link">
                                Read More
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
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>{" "}
                {/* End of .timeline */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="lines" />
        </div>
        <TestimonialandAward />

        <Awards />
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