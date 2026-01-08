"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CommomLayout from "../../Components/CommomLayout";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  author_linkedin: string | null;
  featured_image: string | null;
  category: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

interface BlogDetailsClientProps {
  initialBlog: Blog | null;
  initialRelatedBlogs: Blog[];
  slug: string;
}

export default function BlogDetailsClient({ initialBlog, initialRelatedBlogs, slug }: BlogDetailsClientProps) {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(initialBlog);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>(initialRelatedBlogs);
  const [loading, setLoading] = useState(!initialBlog);
  const [isAdmin, setIsAdmin] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    // ALWAYS fetch from database - never rely on initialBlog
    // This ensures new content created after build is always accessible
    if (slug && slug !== 'placeholder') {
      console.log(`[BlogDetailsClient] Fetching blog for slug: "${slug}"`);
      fetchBlog();
    } else if (slug === 'placeholder') {
      // Handle placeholder case - redirect to blog list
      console.log(`[BlogDetailsClient] Placeholder slug detected, redirecting`);
      router.push('/blog');
      return;
    } else {
      console.log(`[BlogDetailsClient] No slug provided, redirecting`);
      router.push('/blog');
    }
  }, [slug]);

  const checkAdminStatus = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAdmin(!!user);
    } catch (err) {
      setIsAdmin(false);
    }
  };

  const fetchBlog = async () => {
    try {
      console.log(`[BlogDetailsClient] Starting fetch for slug: "${slug}"`);
      setLoading(true);
      
      // Check admin status
      const { data: { user } } = await supabase.auth.getUser();
      const userIsAdmin = !!user;
      setIsAdmin(userIsAdmin);
      
      // ALWAYS fetch from database - never use cached/initial data
      // This ensures new content created after build is always accessible
      console.log(`[BlogDetailsClient] Querying Supabase for slug: "${slug}"`);
      const { data: blogData, error: blogError } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .single();

      if (blogError) {
        console.error(`[BlogDetailsClient] Supabase error:`, blogError);
        // If blog not found, redirect to blog list
        if (blogError.code === 'PGRST116') {
          console.log(`[BlogDetailsClient] Blog not found, redirecting to blog list`);
          router.push('/blog');
          return;
        }
        throw blogError;
      }
      
      if (!blogData) {
        console.log(`[BlogDetailsClient] No blog data returned, redirecting to blog list`);
        router.push('/blog');
        return;
      }

      console.log(`[BlogDetailsClient] Blog found: "${blogData.title}" (Published: ${blogData.published})`);

      // Check if blog is published or user is admin
      if (!blogData.published && !userIsAdmin) {
        console.log(`[BlogDetailsClient] Blog not published and user is not admin, redirecting`);
        router.push('/blog');
        return;
      }

      // Always update with fresh data from database
      console.log(`[BlogDetailsClient] Setting blog data`);
      setBlog(blogData);

      // Fetch related blogs (same category, excluding current blog)
      // Only show published blogs in related section
      const { data: relatedData } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .neq('id', blogData.id)
        .eq('category', blogData.category || 'all')
        .order('created_at', { ascending: false })
        .limit(4);

      setRelatedBlogs(relatedData || []);
      console.log(`[BlogDetailsClient] Fetch completed successfully`);
    } catch (err) {
      console.error('[BlogDetailsClient] Error fetching blog:', err);
      // Always redirect on error - never show stale data
      router.push('/blog');
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

  // Replace &nbsp; with regular spaces in HTML content to allow proper word breaking
  // Also decode HTML entities and remove <p> tags that wrap iframes
  const processContent = (html: string): string => {
    if (!html) return '';
    let processed = html.replace(/&nbsp;/g, ' ');
    
    // First, handle escaped iframe tags inside <p> tags
    // Match: <p>&lt;iframe ...&gt;&lt;/iframe&gt;</p>
    // This regex captures the full iframe tag with all attributes
    processed = processed.replace(
      /<p[^>]*>\s*&lt;iframe\s+([^&]*?)&gt;([\s\S]*?)&lt;\/iframe&gt;\s*<\/p>/gi,
      (match, attributes, content) => {
        // Return the properly decoded iframe tag
        return `<iframe ${attributes}>${content}</iframe>`;
      }
    );
    
    // Also handle self-closing iframe tags: <p>&lt;iframe .../&gt;</p>
    processed = processed.replace(
      /<p[^>]*>\s*&lt;iframe\s+([^&]*?)\s*\/&gt;\s*<\/p>/gi,
      (match, attributes) => {
        return `<iframe ${attributes}></iframe>`;
      }
    );
    
    // Now decode remaining HTML entities (convert &lt; to < and &gt; to >)
    // This handles cases where iframe HTML is stored as escaped text
    processed = processed.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    processed = processed.replace(/&quot;/g, '"').replace(/&#39;/g, "'");
    // Handle &amp; carefully - decode it but avoid double-decoding
    processed = processed.replace(/&amp;(?![a-z#])/gi, '&');
    
    // Remove <p> tags that wrap iframes (for already decoded iframes)
    // Matches: <p>...<iframe>...</iframe>...</p> or <p><iframe>...</iframe></p>
    processed = processed.replace(
      /<p[^>]*>([\s\S]*?)<iframe\s+([^>]*>[\s\S]*?<\/iframe>)([\s\S]*?)<\/p>/gi,
      (match, before, iframeContent, after) => {
        // If there's only whitespace before and after the iframe, remove the p tag entirely
        const beforeTrim = before.trim();
        const afterTrim = after.trim();
        if (!beforeTrim && !afterTrim) {
          return `<iframe ${iframeContent}`;
        }
        // If there's content before or after, keep it but remove p tag around iframe
        return (beforeTrim ? `<p>${beforeTrim}</p>` : '') + `<iframe ${iframeContent}` + (afterTrim ? `<p>${afterTrim}</p>` : '');
      }
    );
    
    // Also handle cases where iframe is directly in p tag with no other content
    processed = processed.replace(
      /<p[^>]*>\s*<iframe\s+([^>]*>[\s\S]*?<\/iframe>)\s*<\/p>/gi,
      '<iframe $1'
    );
    
    // Handle self-closing iframe tags
    processed = processed.replace(
      /<p[^>]*>\s*<iframe\s+([^>]*\/>)\s*<\/p>/gi,
      '<iframe $1'
    );
    
    return processed;
  };

  // Get current page URL
  const getCurrentUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return '';
  };

  // Share functions for each platform
  const shareOnLinkedIn = () => {
    if (!blog) return;
    const url = encodeURIComponent(getCurrentUrl());
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    if (!blog) return;
    const url = encodeURIComponent(getCurrentUrl());
    const text = encodeURIComponent(`${blog.title}${blog.excerpt ? ' - ' + blog.excerpt : ''}`);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
  };

  const shareOnFacebook = () => {
    if (!blog) return;
    const url = encodeURIComponent(getCurrentUrl());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsApp = () => {
    if (!blog) return;
    const url = encodeURIComponent(getCurrentUrl());
    const text = encodeURIComponent(`${blog.title}\n${getCurrentUrl()}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareOnInstagram = () => {
    if (!blog) return;
    // Instagram doesn't support direct URL sharing, so copy URL to clipboard
    const url = getCurrentUrl();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        alert('URL copied to clipboard! You can now paste it on Instagram.');
      }).catch(() => {
        // Fallback if clipboard API fails
        copyToClipboardFallback(url);
      });
    } else {
      // Fallback for older browsers
      copyToClipboardFallback(url);
    }
  };

  const copyToClipboardFallback = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      alert('URL copied to clipboard! You can now paste it on Instagram.');
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Please copy this URL manually: ' + text);
    }
    document.body.removeChild(textArea);
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

  // Only show loading if we don't have initial blog data
  // This prevents flash of loading state when we have cached data
  if (loading && !blog) {
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
          <p style={{ color: '#666', fontSize: '18px' }}>Loading blog...</p>
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

  if (!blog) {
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
          <h2 style={{ color: '#333' }}>Blog not found</h2>
          <Link href="/Blog" style={{ color: '#667eea', textDecoration: 'none' }}>
            ← Back to Blogs
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
        <section className="case-study-waber ">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <div className="blog-details-waber">
                  <div className="blog-details-alignment">
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '10px', flexWrap: 'wrap' }}>
                      <h2 className="case-study-main-title" data-cursor="-opaque" style={{ margin: 0 }}>
                        {blog.title}
                      </h2>
                      {isAdmin && !blog.published && (
                        <span style={{
                          display: 'inline-block',
                          padding: '6px 12px',
                          background: '#ff9800',
                          color: '#fff',
                          borderRadius: '4px',
                          fontSize: '14px',
                          fontWeight: '600',
                          whiteSpace: 'nowrap'
                        }}>
                          DRAFT
                        </span>
                      )}
                    </div>
                    <div className="study-img-info">
                      <p>{formatDate(blog.created_at)}</p>
                      <p style={{ display: 'flex',  gap: '8px', flexWrap: 'wrap' }}>
                        {blog.author || 'Admin'}
                        {blog.author_linkedin && (
                          <Link
                            href={blog.author_linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                             
                              textDecoration: 'none',
                              marginLeft: '4px',
                              marginTop: '-7px',
                            }}
                            title="View author's LinkedIn profile"
                          >
                            <img 
                              src="/new/Linked-in.svg" 
                              alt="LinkedIn" 
                              style={{ 
                                width: '18px', 
                                height: '18px',
                                verticalAlign: 'middle',
                                cursor: 'pointer',
                                transition: 'opacity 0.2s'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                            />
                          </Link>
                        )}
                      </p>
                    </div>
                    {blog.featured_image && (
                      <img 
                        src={blog.featured_image} 
                        alt={blog.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/new/dd-one.jpg";
                        }}
                      />
                    )}
                    <div 
                      dangerouslySetInnerHTML={{ __html: processContent(blog.content) }}
                      style={{
                        lineHeight: '1.8',
                        color: '#333',
                        fontSize: '16px',
                        wordBreak: 'normal',
                        overflowWrap: 'break-word',
                        whiteSpace: 'normal'
                      }}
                    />
                    <div className="ser-btn2">
                      <Link href="/contact-us" className="animated-svg-link1 btn-style-3">
                        Contact Us
                        <span className="svg-container ">
                          <span className=" left">
                            <ArrowSVG />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="stu-sociyal-waber">
                    <h6 className="stu-sub-title"> Share with </h6>
                    <div className="stu-sociyal">
                      <img 
                        src="/new/Linked-in.svg" 
                        alt="Share on LinkedIn" 
                        onClick={shareOnLinkedIn}
                        style={{ cursor: 'pointer' }}
                        title="Share on LinkedIn"
                      />
                      <img 
                        src="/new/twitter.svg" 
                        alt="Share on Twitter" 
                        onClick={shareOnTwitter}
                        style={{ cursor: 'pointer' }}
                        title="Share on Twitter"
                      />
                      <img 
                        src="/new/instagram.svg" 
                        alt="Share on Instagram" 
                        onClick={shareOnInstagram}
                        style={{ cursor: 'pointer' }}
                        title="Share on Instagram"
                      />
                      <img 
                        src="/new/facebook.svg" 
                        alt="Share on Facebook" 
                        onClick={shareOnFacebook}
                        style={{ cursor: 'pointer' }}
                        title="Share on Facebook"
                      />
                      <img 
                        src="/new/whatsapp-3.svg" 
                        alt="Share on WhatsApp" 
                        onClick={shareOnWhatsApp}
                        style={{ cursor: 'pointer' }}
                        title="Share on WhatsApp"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-3">
                <h6 className="stu-sub-title"> Related Blog Posts</h6>
                {relatedBlogs.length === 0 ? (
                  <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
                    No related blogs found.
                  </div>
                ) : (
                  relatedBlogs.map((relatedBlog) => (
                    <div key={relatedBlog.id} className="case-one-waber" style={{ marginBottom: '30px' }}>
                      <div>
                        <Link href={`/blog-details/${relatedBlog.slug}`} className="case-bage">
                          Blog
                        </Link>
                      </div>
                      <h6 className="stu-sub-title p-0 m-0">
                        {relatedBlog.title}
                      </h6>
                      <div className="ser-btn m-0">
                        <Link href={`/blog-details/${relatedBlog.slug}`} className="animated-svg-link p-0">
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
        <footer className="main-footer pd30">
          {/* Footer Main Start */}
          <div className="footer-main">
            <div className="container">
              <div className="firstrow">
                <div className="row">
                  <div className="col-sm-8">
                    <h2>Let us Modernise Your Enterprise</h2>
                    <p>
                      Discover how RheinBrücke can help you optimise core systems,
                      automate processes, and build future-ready platforms.
                    </p>
                    <p>Talk to our enterprise solutions experts today.</p>
                  </div>
                  <div className="col-sm-4">
                    <div className="ser-btn text-right">
                      <Link href="/contact-us" className="animated-svg-link">
                        Request a Consultation
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
