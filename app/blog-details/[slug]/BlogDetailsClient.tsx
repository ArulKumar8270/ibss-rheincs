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
  const supabase = createClient();

  useEffect(() => {
    if (!initialBlog && slug) {
      fetchBlog();
    }
  }, [slug, initialBlog]);

  const fetchBlog = async () => {
    try {
      // Fetch the current blog
      const { data: blogData, error: blogError } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (blogError) throw blogError;
      
      if (!blogData) {
        router.push('/blog');
        return;
      }

      setBlog(blogData);

      // Fetch related blogs (same category, excluding current blog)
      const { data: relatedData } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .neq('id', blogData.id)
        .eq('category', blogData.category || 'all')
        .order('created_at', { ascending: false })
        .limit(4);

      setRelatedBlogs(relatedData || []);
    } catch (err) {
      console.error('Error fetching blog:', err);
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
          <Link href="/blog" style={{ color: '#667eea', textDecoration: 'none' }}>
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
                    <h2 className="case-study-main-title" data-cursor="-opaque">
                      {blog.title}
                    </h2>
                    <div className="study-img-info">
                      <p>{formatDate(blog.created_at)}</p>
                      <p>{blog.author || 'Admin'}</p>
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
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                      style={{
                        lineHeight: '1.8',
                        color: '#333',
                        fontSize: '16px'
                      }}
                    />
                    <div className="ser-btn2">
                      <Link href="/contact" className="animated-svg-link1 btn-style-3">
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
                      <img src="/new/Linked-in.svg" alt="" />
                      <img src="/new/twitter.svg" alt="" />
                      <img src="/new/instagram.svg" alt="" />
                      <img src="/new/facebook.svg" alt="" />
                      <img src="/new/whatsapp-3.svg" alt="" />
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
                      <Link href="/contact" className="animated-svg-link">
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
