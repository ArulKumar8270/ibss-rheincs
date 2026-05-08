"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";

interface EbookLandingData {
  id: string;
  slug: string;
  title: string;
  headline: string | null;
  subheadline: string | null;
  logo_text: string | null;
  logo_image_url: string | null;
  book_image_url: string | null;
  learning_title: string | null;
  learning_description: string | null;
  benefits: string[];
  form_title: string | null;
  author_heading: string | null;
  author_name: string | null;
  author_role: string | null;
  author_bio: string | null;
  author_avatar_url: string | null;
  author_avatar_svg: string | null;
  footer_color: string | null;
  pdf_url: string | null;
}

export default function EbookLandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [pageData, setPageData] = useState<EbookLandingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    fetchPageData();
  }, []);

  const fetchPageData = async () => {
    try {
      const { data, error } = await supabase
        .from("ebook_landing_pages")
        .select("*")
        .eq("slug", "default")
        .single();

      if (error) {
        console.warn(
          "Could not fetch ebook landing page data, using defaults:",
          error.message,
        );
      } else {
        setPageData(data);
      }
    } catch (err) {
      console.error("Error fetching ebook landing page:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const currentData = pageData || defaults;

    try {
      // 1. Save contact to database
      const { error: dbError } = await supabase.from("contacts").insert([
        {
          full_name: name,
          email: email,
          phone: phone,
          company_name: companyName,
          selection: `E-Book Download: ${currentData.title || "Headline of your E-Book"}`,
          message: "Requested E-book download from landing page",
        },
      ]);

      if (dbError) throw dbError;

      // 2. Email notification
      try {
        await fetch("/api/send-enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: name,
            email: email,
            phone: phone,
            companyName: companyName,
            selection: `E-Book Download: ${currentData.title || "E-Book"}`,
            message: "Requested E-book download from landing page",
          }),
        });
      } catch (emailErr) {
        console.warn("Email notification failed, but data was saved:", emailErr);
      }

      // 3. Handle Auto-download if PDF exists
      if (currentData.pdf_url) {
        try {
          const response = await fetch(currentData.pdf_url);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "ebook.pdf");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        } catch (downloadErr) {
          console.error(
            "Auto-download failed, falling back to direct link:",
            downloadErr,
          );
          // Fallback: Try a hidden iframe for download to avoid opening new tab if possible
          const link = document.createElement("a");
          link.href = currentData.pdf_url;
          link.setAttribute("download", "ebook.pdf");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }

      setName("");
      setEmail("");
      setPhone("");
      setCompanyName("");

      // 4. Redirect to thanks page
      router.push("/thanks");
    } catch (err: any) {
      console.error("Error submitting form:", err);
      alert("Error: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fallback defaults if no data is found in database
  const defaults: EbookLandingData = {
    id: "",
    slug: "default",
    title: "E-Book",
    logo_text: "Logo",
    logo_image_url: null,
    headline: "Headline of your E-Book goes here",
    subheadline: "The supporting subheadline goes here",
    book_image_url: "/images/book.png",
    learning_title: "What will you learn from this E-Book?",
    learning_description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",
    benefits: [
      "Your benefit number one goes here",
      "Your benefit number two goes here",
      "Your benefit number three goes here",
    ],
    pdf_url: null,
    form_title: "Download the E-Book Now",
    author_heading: "About the Author",
    author_name: "Author's Name",
    author_role: "Designation, Company",
    author_bio:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    author_avatar_url: null,
    author_avatar_svg: null,
    footer_color: "#3aaee0",
  };

  const data = pageData || defaults;

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f2f2f2",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div id="ebook-landing-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

        #ebook-landing-root {
          all: initial; /* Reset all inherited properties from layout */
          display: block;
          font-family: 'Lato', sans-serif;
          background: #f2f2f2;
          color: #333;
          min-height: 100vh;
        }
.admin-ebook-form-card p{
color:#000;
}
        #ebook-landing-root * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Lato', sans-serif;
        }

        /* ── HERO SECTION ── */
        #ebook-landing-root .hero1 {
          background: #f2f2f2;
          text-align: center;
          padding: 40px 20px 10px;
        }

        #ebook-landing-root .logo-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: ${data.logo_image_url ? "transparent" : data.footer_color || "#3aaee0"};
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 28px;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.5px;
          overflow: hidden;
        }

        #ebook-landing-root .logo-circle img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        #ebook-landing-root .hero1 h1 {
          font-size: 36px;
          font-weight: 300;
          color: #444;
          line-height: 1.2;
          margin-bottom: 10px;
          letter-spacing: -0.3px;
        }

        #ebook-landing-root .hero1 p {
          font-size: 15px;
          color: #888;
          font-weight: 300;
        }

        /* ── MAIN CONTENT ── */
        #ebook-landing-root .main-content {
          background: #f2f2f2;
          padding: 40px 20px 60px;
          max-width: 960px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        /* ── BOOK COVER ── */
        #ebook-landing-root .book-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #ebook-landing-root .book-cover1 {
    height: auto;
    width: 360px;
          /* background: linear-gradient(135deg, #2d3e50 0%, #1a2a3a 60%, #263445 100%); */
          border-radius: 3px 8px 8px 3px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow:
            -6px 6px 20px rgba(0,0,0,0.4),
            inset -3px 0 8px rgba(0,0,0,0.3),
            inset 3px 0 6px rgba(255,255,255,0.04);
          position: relative;
          text-align: center;
          /* padding: 30px 24px; */
        }
        
        #ebook-landing-root .book-cover1 img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 3px 8px 8px 3px;
        }

        /* ── RIGHT PANEL ── */
        #ebook-landing-root .right-panel {
          padding-top: 8px;
        }

        #ebook-landing-root .section-title {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          margin-bottom: 14px;
          line-height: 1.3;
        }

        #ebook-landing-root .description {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
          margin-bottom: 22px;
        }

        /* ── BENEFIT LIST ── */
        #ebook-landing-root .benefits {
          list-style: none;
          margin-bottom: 30px;
        }

        #ebook-landing-root .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          font-size: 14px;
          color: #555;
        }

        #ebook-landing-root .benefit-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: ${data.footer_color || "#3aaee0"};
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── FORM ── */
        #ebook-landing-root .form-title {
          font-size: 18px;
          font-weight: 700;
          color: #333;
          margin-bottom: 16px;
        }

        #ebook-landing-root .form-group {
          margin-bottom: 12px;
        }

        #ebook-landing-root .form-input {
          width: 100%;
          padding: 11px 14px;
          border: 1px solid #ccc;
          border-radius: 3px;
          font-size: 14px;
          color: #444;
          background: #fff;
          outline: none;
          font-family: 'Lato', sans-serif;
          transition: border-color 0.2s;
        }

        #ebook-landing-root .form-input::placeholder {
          color: #aaa;
        }

        #ebook-landing-root .form-input:focus {
          border-color: ${data.footer_color || "#3aaee0"};
        }

        #ebook-landing-root .submit-btn {
          display: block;
          margin-left: auto;
          padding: 13px 32px;
          background: linear-gradient(to bottom, #f5a623, #e8920f);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-family: 'Lato', sans-serif;
          letter-spacing: 0.3px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          transition: opacity 0.15s, transform 0.1s;
        }

        #ebook-landing-root .submit-btn:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        #ebook-landing-root .submit-btn:active {
          transform: translateY(0);
          opacity: 1;
        }

        /* ── AUTHOR SECTION ── */
        #ebook-landing-root .author-section {
          background: #2d3e50;
          padding: 60px 20px 70px;
          text-align: center;
          color: #fff;
        }

        #ebook-landing-root .author-heading {
          font-size: 28px;
          font-weight: 400;
          color: #fff;
          margin-bottom: 30px;
          letter-spacing: 0.3px;
        }

        #ebook-landing-root .author-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto 18px;
          overflow: hidden;
          border: 3px solid rgba(255,255,255,0.15);
          background: #3d5068;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #ebook-landing-root .author-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* SVG placeholder avatar that matches the screenshot */
        #ebook-landing-root .avatar-svg {
          width: 100%;
          height: 100%;
        }

        #ebook-landing-root .author-name {
          font-size: 20px;
          font-weight: 400;
          color: #fff;
          margin-bottom: 6px;
        }

        #ebook-landing-root .author-role {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          margin-bottom: 22px;
          letter-spacing: 0.2px;
        }

        #ebook-landing-root .author-bio {
          max-width: 680px;
          margin: 0 auto;
          font-size: 14px;
          color: rgba(255,255,255,0.65);
          line-height: 1.75;
        }

        /* ── FOOTER BAR ── */
        #ebook-landing-root .footer-bar {
          background: ${data.footer_color || "#3aaee0"};
          height: 8px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 680px) {
          #ebook-landing-root .main-content {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          #ebook-landing-root .hero1 h1 {
            font-size: 26px;
          }

          #ebook-landing-root .book-cover1 {
            width: 220px;
            height: 310px;
          }

          #ebook-landing-root .submit-btn {
            width: 100%;
          }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero1">
        <div className="logo-circle">
          {data.logo_image_url ? (
            <img src={data.logo_image_url} alt="Logo" />
          ) : (
            data.logo_text
          )}
        </div>
        <h1>{data.headline}</h1>
        <p>{data.subheadline}</p>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="main-content">
        {/* Book Cover */}
        <div className="book-wrapper">
          <div className="book-cover1">
            <img
              src={data.book_image_url || "/images/book.png"}
              alt="E-Book Cover"
            />
            {data.pdf_url && (
              <div
                className="pdf-badge"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "#ff4d4f",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                PDF Available
              </div>
            )}
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <h2 className="section-title">{data.learning_title}</h2>
          <p className="description">{data.learning_description}</p>

          <ul className="benefits">
            {(data.benefits || []).map((benefit, i) => (
              <li className="benefit-item" key={i}>
                <span className="benefit-num">{i + 1}</span>
                {benefit}
              </li>
            ))}
          </ul>

          <h3 className="form-title">{data.form_title}</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                placeholder="Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                placeholder="Phone No*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                placeholder="Company Name*"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <button
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Download Now!"}
            </button>
          </form>
        </div>
      </div>

      {/* ── AUTHOR SECTION ── */}
      <section className="author-section">
        <h2 className="author-heading">{data.author_heading}</h2>

        <div className="author-avatar">
          {data.author_avatar_url ? (
            <img
              src={data.author_avatar_url}
              alt={data.author_name || "Author"}
            />
          ) : data.author_avatar_svg ? (
            <div
              dangerouslySetInnerHTML={{ __html: data.author_avatar_svg }}
              className="avatar-svg"
            />
          ) : (
            <svg
              className="avatar-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background */}
              <rect width="100" height="100" fill="#5b7fa6" />
              {/* Body / shoulders */}
              <ellipse cx="50" cy="115" rx="38" ry="30" fill="#3d5a7a" />
              {/* Neck */}
              <rect
                x="40"
                y="68"
                width="20"
                height="18"
                rx="4"
                fill="#e8b89a"
              />
              {/* Head */}
              <ellipse cx="50" cy="52" rx="26" ry="30" fill="#e8b89a" />
              {/* Hair - back / sides */}
              <ellipse cx="50" cy="38" rx="27" ry="22" fill="#8B3A2A" />
              {/* Hair flowing over shoulders */}
              <ellipse cx="24" cy="62" rx="10" ry="22" fill="#8B3A2A" />
              <ellipse cx="76" cy="62" rx="10" ry="22" fill="#8B3A2A" />
              {/* Face over hair */}
              <ellipse cx="50" cy="54" rx="19" ry="24" fill="#e8b89a" />
              {/* Eyes */}
              <ellipse cx="42" cy="50" rx="2.5" ry="3" fill="#5a3010" />
              <ellipse cx="58" cy="50" rx="2.5" ry="3" fill="#5a3010" />
              {/* Nose */}
              <ellipse cx="50" cy="57" rx="2" ry="1.5" fill="#d4956a" />
              {/* Mouth */}
              <path
                d="M44 63 Q50 67 56 63"
                stroke="#c47a5a"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
              />
              {/* Hair top */}
              <ellipse cx="50" cy="30" rx="19" ry="14" fill="#8B3A2A" />
            </svg>
          )}
        </div>

        <h3 className="author-name">{data.author_name}</h3>
        <p className="author-role">{data.author_role}</p>
        <p className="author-bio">{data.author_bio}</p>
      </section>

      {/* ── FOOTER BAR ── */}
      <div className="footer-bar" />
    </div>
  );
}
