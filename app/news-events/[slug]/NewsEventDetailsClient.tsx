"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CommomLayout from "../../Components/CommomLayout";
import Link from "next/link";
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

interface NewsEventDetailsClientProps {
  initialItem: NewsEvent | null;
  itemId: string;
}

export default function NewsEventDetailsClient({ initialItem, itemId }: NewsEventDetailsClientProps) {
  const router = useRouter();
  const [item, setItem] = useState<NewsEvent | null>(initialItem);
  const [loading, setLoading] = useState(!initialItem);
  const supabase = createClient();

  useEffect(() => {
    if (itemId === 'placeholder' && !initialItem) {
      // Handle placeholder case - redirect to news-events list
      router.push('/news-events');
      return;
    }

    // Always fetch fresh data on client side to get latest updates
    // This ensures updated content appears immediately without needing a rebuild
    if (itemId && itemId !== 'placeholder') {
      fetchItem();
    }
  }, [itemId]);

  const fetchItem = async () => {
    try {
      setLoading(true);
      
      // Fetch by ID instead of slug - IDs are unique and don't have encoding issues
      const { data: itemData, error: itemError } = await supabase
        .from('news_events')
        .select('*')
        .eq('id', itemId)
        .eq('published', true)
        .single();

      if (itemError) throw itemError;
      
      if (!itemData) {
        // If no data found and we have initial item, keep showing it
        if (!initialItem) {
          router.push('/news-events');
          return;
        }
        // Otherwise keep existing item data
        setLoading(false);
        return;
      }

      // Update with fresh data
      setItem(itemData);
    } catch (err) {
      console.error('Error fetching news/event:', err);
      // If fetch fails but we have initial item, keep showing it
      if (!initialItem) {
        router.push('/news-events');
      }
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

  // Only show loading if we don't have initial item data
  // This prevents flash of loading state when we have cached data
  if (loading && !item) {
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
          <p style={{ color: '#666', fontSize: '18px' }}>Loading news/event...</p>
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

  if (!item) {
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
          <h2 style={{ color: '#333' }}>News/Event not found</h2>
          <Link href="/news-events" style={{ color: '#667eea', textDecoration: 'none' }}>
            ← Back to News & Events
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
        {/* Header End */}
      <div className="collateralssec">
        <div className="container">
          <div className="row section-row1 align-items-center builtsec collat">
            <div className="col-sm-12">
              <div className="section-title text-center ">
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  {item.type === 'event' ? 'EVENT' : 'NEWS'}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-testimonial events pd-50">
        <div className="container">
          <div className="row section-row1 align-items-center">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="section-title">
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  {item.title}
                </h2>
                {item.featured_image && (
                  <img 
                    src={item.featured_image} 
                    alt={item.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/new/dd-one.jpg";
                    }}
                  />
                )}
                {item.event_date && (
                  <p className="mt-3">
                    <strong>Event Date:</strong> {formatDate(item.event_date)}
                  </p>
                )}
                {item.location && (
                  <p className="mt-2">
                    <strong>Location:</strong> {item.location}
                  </p>
                )}
                <div 
                  dangerouslySetInnerHTML={{ __html: item.content }}
                  style={{
                    lineHeight: '1.8',
                    color: '#333',
                    fontSize: '16px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
                    <Link href="/contact" className="animated-svg-link">
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
          </div>
        </div>
      </footer>
      </>
    </CommomLayout>
  );
}
