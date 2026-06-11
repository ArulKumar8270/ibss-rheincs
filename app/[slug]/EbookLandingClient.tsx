"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";
import LeadSquaredInit from "../Components/LeadSquaredInit";
import ScriptReinit from "../Components/ScriptReinit";
import Footer1 from "../Components/Footer1";
import TestimonialandAward from "../Components/TestimonialandAward";
import Awards from "../Components/Awards";
import Link from "next/link";

interface EbookLandingData {
  id: string;
  slug: string;
  title: string;
  headline: string | null;
  subheadline: string | null;
  additional_paragraph: string | null;
  logo_text: string | null;
  logo_image_url: string | null;
  book_image_url: string | null;
  learning_title: string | null;
  learning_description: string | null;
  benefits_heading: string | null;
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

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const STORAGE_BUCKET = "case-study-images";

function resolveImageUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${value}`;
}

const downloadPdf = async (rawPdfValue: string | null, title: string) => {
  if (!rawPdfValue) return;
  
  const safeTitle = String(title || "ebook")
    .trim()
    .replace(/[/\\?%*:|"<>]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
  const filename = `${safeTitle || "ebook"}.pdf`;
  
  const pdfPublicUrl = resolveImageUrl(rawPdfValue);
  if (!pdfPublicUrl) return;
  
  try {
    const response = await fetch(pdfPublicUrl);
    if (!response.ok) throw new Error("Failed to fetch PDF");
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
  } catch (err) {
    console.error("Failed to download via blob, opening directly:", err);
    window.open(pdfPublicUrl, "_blank");
  }
};

export default function EbookLandingClient({ initialData }: { initialData?: EbookLandingData | null }) {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  const supabase = createClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [pageData, setPageData] = useState<EbookLandingData | null>(initialData || null);
  const [loading, setLoading] = useState(!initialData);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (slug && !initialData) {
      fetchPageData();
    }
  }, [slug, initialData]);

  const fetchPageData = async () => {
    try {
      setLoading(true);
      setFetchError(null);
      const { data, error } = await supabase
        .from("ebook_landing_pages")
        .select("*")
        .eq("slug", slug)
        .single();
      
      if (error) {
        setFetchError(error.message);
        return;
      }
      
      if (data) {
        const resolvedData: EbookLandingData = {
          ...data,
          logo_image_url: resolveImageUrl(data.logo_image_url),
          book_image_url: resolveImageUrl(data.book_image_url),
          author_avatar_url: resolveImageUrl(data.author_avatar_url),
        };
        setPageData(resolvedData);
      }
    } catch (err: any) {
      console.error("Fetch Error:", err);
      setFetchError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const { error: dbError } = await supabase
      .from("contacts")
      .insert([
        {
          full_name: name,
          email,
          phone,
          company_name: companyName,
          country_code: "+91",
          selection: `E-Book Download: ${pageData?.title || "E-Book"}`,
          message: "Requested E-book download from landing page",
        },
      ]);

    if (dbError) throw dbError;

    // Send Email
    try {
  const { data: emailData, error: emailError } =
    await supabase.functions.invoke("send-contact-email", {
      body: {
        channel: "contact",
        fullName: name,
        email,
        phone,
        countryCode: "+91",
        companyName,
        selection: `E-Book Download: ${pageData?.title || "E-Book"}`,
        message: "Requested E-book download from landing page",
      },
    });

  console.log("Email Response:", emailData);

  if (emailError) {
    console.error("Email Error:", emailError);
  }
} catch (emailErr) {
  console.error("Email Exception:", emailErr);
}

    // Download PDF
    if (pageData?.pdf_url) {
      await downloadPdf(pageData.pdf_url, pageData.title);
    }

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setCompanyName("");

    router.push("/thanks");
  } catch (err: any) {
    console.error("Submit Error:", err);
    alert(err.message);
  } finally {
    setIsSubmitting(false);
  }
};

  const defaults: EbookLandingData = {
    id: "",
    slug: "default",
    title: "E-Book",
    headline: "Headline of your E-Book goes here",
    subheadline: "The supporting subheadline goes here",
    additional_paragraph: null,
    logo_text: "Logo",
    logo_image_url: null,
    book_image_url: "/images/book.png",
    learning_title: "What will you learn from this E-Book?",
    learning_description: "Learning description goes here",
    benefits_heading: "What you'll get",
    benefits: ["Benefit One", "Benefit Two", "Benefit Three"],
    form_title: "Download the E-Book Now",
    author_heading: null,
    author_name: null,
    author_role: null,
    author_bio: null,
    author_avatar_url: null,
    author_avatar_svg: null,
    footer_color: "#3aaee0",
    pdf_url: null,
  };
  
  const data = pageData || defaults;
  const accentColor = data.footer_color || "#3aaee0";

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f2f2f2" }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!pageData && fetchError) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
        <h1>No Landing Page Found</h1>
        {fetchError && <p>{fetchError}</p>}
      </div>
    );
  }

  return (
    <>
      <LeadSquaredInit />
      
      <div className="topheader defhead1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto">
              <Link href="/">
                <img
                  src="/images/rlogo.png"
                  alt="RheinBrücke"
                  height={52}
                />
              </Link>
            </div>

            <div className="col" />

            <div className="col-auto">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span aria-hidden="true" style={{ color: "white" }}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <Link href="mailto:info@rheincs.com" style={{ color: "white", textDecoration: "none" }}>
                  info@rheincs.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="ebook-landing-root">
        <section className="topheadsize" style={{ textAlign: "center", padding: "50px 20px", background: "#fff" }}>
          <div style={{ width: "200px", height: "auto", margin: "0 auto 20px", borderRadius: "0%", overflow: "hidden", background: "transparent", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontWeight: "bold" }}>
            {data.logo_image_url ? (
              <img src={data.logo_image_url} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            ) : data.logo_text}
          </div>
          <h1>{data.headline}</h1>
          <h5>{data.subheadline}</h5>
          {data.additional_paragraph && (
            <p style={{ marginTop: '15px', fontSize: '14px', color: '#777' }}>{data.additional_paragraph}</p>
          )}
        </section>

        <section style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", padding: "40px 20px" }}>
          <div>
            <img src={data.book_image_url || "/images/book.png"} alt="Book" style={{ width: "100%", maxWidth: "auto" }} />
          </div>
          <div>
            <h2>{data.learning_title}</h2>
            <p style={{ marginTop: "15px" }}>{data.learning_description}</p>
            {data.benefits_heading && (
              <h3 style={{ marginTop: "20px" }}>{data.benefits_heading}</h3>
            )}
            <ul style={{ marginTop: "20px" }}>
              {data.benefits?.map((benefit, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>{benefit}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
              <h3>{data.form_title}</h3>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required style={inputStyle} />
              <div className="text-center">

              <button type="submit" disabled={isSubmitting} style={{ margin: "15px auto", padding: "12px 30px", background: "#082326", border: "none", color: "#fff", cursor: "pointer", borderRadius: "5px" }}>
                {isSubmitting ? "Submitting..." : "Download Now"}
              </button>
              </div>
            </form>
          </div>
        </section>

        {(() => {
          const hasAuthorInfo = 
            data.author_heading || 
            data.author_name || 
            data.author_role || 
            data.author_bio || 
            data.author_avatar_url || 
            data.author_avatar_svg;
          
          if (hasAuthorInfo) {
            return (
              <section style={{ background: "#2d3e50", color: "#fff", padding: "50px 20px", textAlign: "center" }}>
                {data.author_heading && <h2>{data.author_heading}</h2>}
                {data.author_avatar_url && <img src={data.author_avatar_url} alt="Author" style={{ width: "100px", height: "100px", borderRadius: "50%", marginTop: "20px", objectFit: "cover" }} />}
                {data.author_name && <h3 style={{ marginTop: "20px" }}>{data.author_name}</h3>}
                {data.author_role && <p>{data.author_role}</p>}
                {data.author_bio && <p style={{ maxWidth: "700px", margin: "20px auto 0" }}>{data.author_bio}</p>}
              </section>
            );
          }
          return null;
        })()}

        <div style={{ height: "10px", background: accentColor }} />
      </div>

      <TestimonialandAward />
      <Awards />
      <Footer1 />
      <ScriptReinit />
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  marginTop: "12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};
