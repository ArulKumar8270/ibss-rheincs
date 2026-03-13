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
  meta_title?: string;
  meta_description?: string;
}

interface Faq {
  question: string;
  answer: string;
}

interface BlogDetailsClientProps {
  initialBlog: Blog | null;
  initialRelatedBlogs: Blog[];
  slug: string;
}

export default function BlogDetailsClient({
  initialBlog,
  initialRelatedBlogs,
  slug,
}: BlogDetailsClientProps) {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(initialBlog);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>(initialRelatedBlogs);
  const [loading, setLoading] = useState(initialBlog ? false : true);
  const [isAdmin, setIsAdmin] = useState(false);
  // Track if we have fetched related blogs to avoid redundant fetches
  const [hasFetchedRelated, setHasFetchedRelated] = useState(
    initialRelatedBlogs.length > 0,
  );
  // Track if we have fetched FAQs
  const [hasFetchedFaqs, setHasFetchedFaqs] = useState(false);
  const supabase = createClient();
  const [faqs, setFaqs] = useState<Faq[]>([]);

  useEffect(() => {
    if (slug === "placeholder") {
      router.push("/blog");
      return;
    }

    if (!blog && slug) {
      fetchBlog();
    } else if (blog) {
      // If we have blog data, ensure we fetch related content if missing
      if (!hasFetchedRelated) fetchRelatedBlogs(blog);
      if (!hasFetchedFaqs) fetchFaqs(blog);
    }
  }, [slug, blog, hasFetchedRelated, hasFetchedFaqs]);

  // Update meta title
  useEffect(() => {
    if (!blog) return;

    const defaultTitle =
      "Enterprise Digital Transformation & ERP Solutions | RheinBrücke";
    const defaultDescription =
      "Driving Digital Innovation with Integrated Business Platforms";

    // Title
    document.title = blog.meta_title ? blog.meta_title : defaultTitle;

    // Description
    let meta = document.querySelector("meta[name='description']");

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      blog.meta_description ? blog.meta_description : defaultDescription,
    );
  }, [blog]);

  const checkAdminStatus = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsAdmin(!!user);
    } catch (err) {
      setIsAdmin(false);
    }
  };

  const fetchRelatedBlogs = async (currentBlog: Blog) => {
    try {
      // Fetch related blogs (same category, excluding current blog)
      // Only show published blogs in related section
      let relatedBlogsResult: Blog[] = [];

      // 1. Try to fetch blogs with the same category
      const { data: categoryData } = await supabase
        .from("blogs")
        .select(
          "id,title,slug,excerpt,author,author_linkedin,featured_image,category,published,created_at",
        )
        .eq("published", true)
        .neq("id", currentBlog.id)
        .eq("category", currentBlog.category)
        .order("created_at", { ascending: false })
        .limit(4);

      if (categoryData && categoryData.length > 0) {
        relatedBlogsResult = categoryData as Blog[];
      } else {
        // 2. Fallback: If no related blogs found by category, fetch latest published blogs
        const { data: fallbackData } = await supabase
          .from("blogs")
          .select(
            "id,title,slug,excerpt,author,author_linkedin,featured_image,category,published,created_at",
          )
          .eq("published", true)
          .neq("id", currentBlog.id)
          .order("created_at", { ascending: false })
          .limit(4);

        if (fallbackData) {
          relatedBlogsResult = fallbackData as Blog[];
        }
      }

      setRelatedBlogs(relatedBlogsResult);
      setHasFetchedRelated(true);
    } catch (err) {
      console.error("[BlogDetailsClient] Error fetching related blogs:", err);
    }
  };

  const fetchFaqs = async (currentBlog: Blog) => {
    try {
      const { data: faqData, error } = await supabase
        .from("blog_faqs")
        .select("question,answer")
        .eq("blog_id", currentBlog.id);

      if (error) {
        console.error("[BlogDetailsClient] Error fetching FAQs:", error);
        setFaqs([]);
      } else {
        setFaqs((faqData as Faq[]) || []);
      }
      setHasFetchedFaqs(true);
    } catch (err) {
      console.error("[BlogDetailsClient] Unexpected error fetching FAQs:", err);
      setFaqs([]);
    }
  };

  const fetchBlog = async () => {
    if (blog) return;
    try {
      setLoading(true);

      // Check admin status
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const userIsAdmin = !!user;
      setIsAdmin(userIsAdmin);

      // ALWAYS fetch from database - never use cached/initial data
      // This ensures new content created after build is always accessible
      const { data: blogData, error: blogError } = await supabase
        .from("blogs")
        .select(
          "id,title,slug,content,excerpt,author,author_linkedin,category,published,created_at,meta_title,meta_description",
        )
        .eq("slug", slug)
        .single();

      if (blogError) {
        console.error(`[BlogDetailsClient] Supabase error:`, blogError);
        // If blog not found, redirect to blog list
        if (blogError.code === "PGRST116") {
          router.push("/blog");
          return;
        }
        throw blogError;
      }

      if (!blogData) {
        router.push("/blog");
        return;
      }

      // Check if blog is published or user is admin
      if (!blogData.published && !userIsAdmin) {
        router.push("/blog");
        return;
      }

      const newBlog = blogData as Blog;
      // Always update with fresh data from database
      setBlog(newBlog);

      // We rely on useEffect to trigger fetching FAQs and Related Blogs now
      // This ensures consistent behavior regardless of how 'blog' is set

      console.log(`[BlogDetailsClient] Fetch completed successfully`);
    } catch (err) {
      console.error("[BlogDetailsClient] Error fetching blog:", err);
      // Always redirect on error - never show stale data
      router.push("/blog");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Replace &nbsp; with regular spaces in HTML content to allow proper word breaking
  // Also decode HTML entities and remove <p> tags that wrap iframes
  const processContent = (html: string): string => {
    if (!html) return "";
    let processed = html.replace(/&nbsp;/g, " ");

    // First, handle escaped iframe tags inside <p> tags
    // Match: <p>&lt;iframe ...&gt;&lt;/iframe&gt;</p>
    // This regex captures the full iframe tag with all attributes
    processed = processed.replace(
      /<p[^>]*>\s*&lt;iframe\s+([^&]*?)&gt;([\s\S]*?)&lt;\/iframe&gt;\s*<\/p>/gi,
      (match, attributes, content) => {
        // Return the properly decoded iframe tag
        return `<iframe ${attributes}>${content}</iframe>`;
      },
    );

    // Also handle self-closing iframe tags: <p>&lt;iframe .../&gt;</p>
    processed = processed.replace(
      /<p[^>]*>\s*&lt;iframe\s+([^&]*?)\s*\/&gt;\s*<\/p>/gi,
      (match, attributes) => {
        return `<iframe ${attributes}></iframe>`;
      },
    );

    // Now decode remaining HTML entities (convert &lt; to < and &gt; to >)
    // This handles cases where iframe HTML is stored as escaped text
    processed = processed.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    processed = processed.replace(/&quot;/g, '"').replace(/&#39;/g, "'");
    // Handle &amp; carefully - decode it but avoid double-decoding
    processed = processed.replace(/&amp;(?![a-z#])/gi, "&");

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
        return (
          (beforeTrim ? `<p>${beforeTrim}</p>` : "") +
          `<iframe ${iframeContent}` +
          (afterTrim ? `<p>${afterTrim}</p>` : "")
        );
      },
    );

    // Also handle cases where iframe is directly in p tag with no other content
    processed = processed.replace(
      /<p[^>]*>\s*<iframe\s+([^>]*>[\s\S]*?<\/iframe>)\s*<\/p>/gi,
      "<iframe $1",
    );

    // Handle self-closing iframe tags
    processed = processed.replace(
      /<p[^>]*>\s*<iframe\s+([^>]*\/>)\s*<\/p>/gi,
      "<iframe $1",
    );

    // Insert Contact Us button after the first paragraph
    processed = insertContactButtonAfterFirstParagraph(processed);

    return processed;
  };

  // Function to insert Contact Us button after the first paragraph
  const insertContactButtonAfterFirstParagraph = (html: string): string => {
    if (!html) return "";

    // Check if button already exists right after a paragraph tag (indicating it's already been inserted)
    // This pattern matches: </p> followed by <div class="ser-btn2" with contact-us link
    if (
      /<\/p>\s*<div[^>]*class="ser-btn2"[^>]*>[\s\S]*?href="\/contact-us"/i.test(
        html,
      )
    ) {
      return html;
    }

    // Find the first <p> tag that contains actual text content (not empty, not just whitespace)
    // This regex matches opening <p> tag with optional attributes, followed by content, then closing </p>
    const firstParagraphRegex = /<p[^>]*>([\s\S]*?)<\/p>/i;
    const match = html.match(firstParagraphRegex);

    if (match && match[0]) {
      const firstParagraph = match[0];
      const paragraphContent = match[1];

      // Check if paragraph has actual content (not just whitespace or empty)
      if (paragraphContent.trim().length > 0) {
        // Create the Contact Us button HTML with SVG arrow
        const contactButton = `
          <div class="ser-btn2" style="margin: 30px 0;">
            <a href="/contact-us" class="animated-svg-link1 btn-style-3">
              Contact Us
              <span class="svg-container">
                <span class="left">
                  <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </span>
              </span>
            </a>
          </div>
        `;

        // Replace the first paragraph with itself followed by the button
        return html.replace(firstParagraph, firstParagraph + contactButton);
      }
    }

    // If no paragraph found or paragraph is empty, return original HTML
    return html;
  };

  // Get current page URL
  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  };

  // Share functions for each platform
  const shareOnLinkedIn = () => {
    if (!blog) return;
    const url = encodeURIComponent(getCurrentUrl());
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "width=600,height=400",
    );
  };

  const shareOnTwitter = () => {
    if (!blog) return;
    const url = encodeURIComponent(getCurrentUrl());
    const text = encodeURIComponent(
      `${blog.title}${blog.excerpt ? " - " + blog.excerpt : ""}`,
    );
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank",
      "width=600,height=400",
    );
  };

  const shareOnFacebook = () => {
    if (!blog) return;
    const url = encodeURIComponent(getCurrentUrl());
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank",
      "width=600,height=400",
    );
  };

  // const shareOnWhatsApp = () => {
  //   if (!blog) return;
  //   const url = encodeURIComponent(getCurrentUrl());
  //   const text = encodeURIComponent(`${blog.title}\n${getCurrentUrl()}`);
  //   window.open(`https://wa.me/?text=${text}`, "_blank");
  // };

  const shareOnInstagram = () => {
    if (!blog) return;
    const url = getCurrentUrl();
    if (navigator.share) {
      navigator
        .share({
          title: blog.title,
          text: blog.excerpt || blog.title,
          url, 
        })
        .catch(() => {
          if (navigator.clipboard) {
            navigator.clipboard
              .writeText(url)
              .then(() => {
                alert("URL copied to clipboard! You can now paste it on Instagram.");
              })
              .catch(() => {
                copyToClipboardFallback(url);
              });
          } else {
            copyToClipboardFallback(url);
          }
        });
      return;
    }
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          alert("URL copied to clipboard! You can now paste it on Instagram.");
        })
        .catch(() => {
          copyToClipboardFallback(url);
        });
    } else {
      copyToClipboardFallback(url);
    }
  };

  const copyToClipboardFallback = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      alert("URL copied to clipboard! You can now paste it on Instagram.");
    } catch (err) {
      console.error("Failed to copy:", err);
      alert("Please copy this URL manually: " + text);
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
  );

  // Only show loading if we don't have initial blog data
  // This prevents flash of loading state when we have cached data
  if (loading && !blog) {
    return (
      <CommomLayout>
        <div
          style={{
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #667eea",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <p style={{ color: "#666", fontSize: "18px" }}>Loading blog...</p>
          <style jsx>{`
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      </CommomLayout>
    );
  }

  if (!blog) {
    return (
      <CommomLayout>
        <div
          style={{
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h2 style={{ color: "#333" }}>Blog not found</h2>
          <Link
            href="/Blog"
            style={{ color: "#667eea", textDecoration: "none" }}
          >
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
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                        marginBottom: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      <h2
                        className="case-study-main-title"
                        data-cursor="-opaque"
                        style={{ margin: 0 }}
                      >
                        {blog.title}
                      </h2>
                      {isAdmin && !blog.published && (
                        <span
                          style={{
                            display: "inline-block",
                            padding: "6px 12px",
                            background: "#ff9800",
                            color: "#fff",
                            borderRadius: "4px",
                            fontSize: "14px",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                          }}
                        >
                          DRAFT
                        </span>
                      )}
                    </div>
                    <div className="study-img-info">
                      <p>{formatDate(blog.created_at)}</p>
                      <p
                        style={{
                          display: "flex",
                          gap: "8px",
                          flexWrap: "wrap",
                        }}
                      >
                        {blog.author || "Admin"}
                        {blog.author_linkedin && (
                          <Link
                            href={blog.author_linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",

                              textDecoration: "none",
                              marginLeft: "4px",
                              marginTop: "-7px",
                            }}
                            title="View author's LinkedIn profile"
                          >
                            <img
                              src="/new/Linked-in.svg"
                              alt="LinkedIn"
                              style={{
                                width: "18px",
                                height: "18px",
                                verticalAlign: "middle",
                                cursor: "pointer",
                                transition: "opacity 0.2s",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.opacity = "0.7")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.opacity = "1")
                              }
                            />
                          </Link>
                        )}
                      </p>
                    </div>
                    {/* {blog.featured_image && (
                      <img 
                        src={blog.featured_image} 
                        alt={blog.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/new/dd-one.jpg";
                        }}
                      />
                    )} */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: processContent(blog.content),
                      }}
                      style={{
                        lineHeight: "1.8",
                        color: "#333",
                        fontSize: "16px",
                        wordBreak: "normal",
                        overflowWrap: "break-word",
                        whiteSpace: "normal",
                      }}
                    />
                    <div className="ser-btn2">
                      <Link
                        href="/contact-us"
                        className="animated-svg-link1 btn-style-3"
                      >
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
                        style={{ cursor: "pointer" }}
                        title="Share on LinkedIn"
                      />
                      <img
                        src="/new/twitter.svg"
                        alt="Share on Twitter"
                        onClick={shareOnTwitter}
                        style={{ cursor: "pointer" }}
                        title="Share on Twitter"
                      />
                      <img
                        src="/new/instagram.svg"
                        alt="Share on Instagram"
                        onClick={shareOnInstagram}
                        style={{ cursor: "pointer" }}
                        title="Share on Instagram"
                      />
                      <img
                        src="/new/facebook.svg"
                        alt="Share on Facebook"
                        onClick={shareOnFacebook}
                        style={{ cursor: "pointer" }}
                        title="Share on Facebook"
                      />
                      {/* <img
                        src="/new/whatsapp-3.svg"
                        alt="Share on WhatsApp"
                        onClick={shareOnWhatsApp}
                        style={{ cursor: "pointer" }}
                        title="Share on WhatsApp"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-3">
                <h6 className="stu-sub-title"> Related Blog Posts</h6>
                {relatedBlogs.length === 0 ? (
                  <div
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      color: "#999",
                    }}
                  >
                    No related blogs found.
                  </div>
                ) : (
                  relatedBlogs.map((relatedBlog) => (
                    <div
                      key={relatedBlog.id}
                      className="case-one-waber"
                      style={{ marginBottom: "30px" }}
                    >
                      <div>
                        <Link
                          href={`/Blogs/${relatedBlog.slug}`}
                          className="case-bage"
                        >
                          Blog
                        </Link>
                      </div>
                      <h6 className="stu-sub-title p-0 m-0">
                        {relatedBlog.title}
                      </h6>
                      <div className="ser-btn m-0">
                        <Link
                          href={`/Blogs/${relatedBlog.slug}`}
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

        {faqs.length > 0 && (
          <div className="page-faqs bggray pd60">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  {/* Page FAQs Category Start */}
                  <div className="page-faqs-catagery">
                    {/* FAQs section start */}
                    <div
                      className="our-faq-section page-faq-accordion"
                      id="general_information"
                    >
                      <div className="section-title text-center">
                        <h2>Wondering Why? We’re Here to Answer</h2>
                      </div>

                      <div className="faq-accordion" id="accordion">
                        {faqs.map((faq, index) => (
                          <div
                            className="accordion-item wow fadeInUp"
                            key={index}
                          >
                            <h2 className="accordion-header">
                              <button
                                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                data-bs-toggle="collapse"
                                data-bs-target={`#faq${index}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                              >
                                {faq.question}
                              </button>
                            </h2>

                            <div
                              id={`faq${index}`}
                              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                              data-bs-parent="#accordion"
                            >
                              <div className="accordion-body">{faq.answer}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
                      Discover how RheinBrücke can help you optimise core
                      systems, automate processes, and build future-ready
                      platforms.
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
