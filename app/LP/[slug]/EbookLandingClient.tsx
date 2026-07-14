"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";
import LeadSquaredInit from "../../Components/LeadSquaredInit";
import ScriptReinit from "../../Components/ScriptReinit";
import Footer1 from "../../Components/Footer1";
import TestimonialandAward from "../../Components/TestimonialandAward";
import Awards from "../../Components/Awards"; 
import Link from "next/link";

interface FormField {
  id: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select';
  label?: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

interface EbookLandingData {
  id: string;
  slug: string;
  title: string;
  headline: string | null;
  subheadline: string | null;
  additional_paragraph: string | null;
  extra_content: string | null;
  logo_text: string | null;
  logo_image_url: string | null;
  book_image_url: string | null;
  learning_title: string | null;
  learning_description: string | null;
  benefits_heading: string | null;
  benefits: string[];
  form_title: string | null;
  form_button_text: string | null;
  form_fields: FormField[];
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

export default function EbookLandingClient({ initialData, slug: propSlug }: { initialData?: EbookLandingData | null; slug?: string }) {
  const router = useRouter();
  const params = useParams();
  const slug = propSlug || (params?.slug as string);
  const supabase = createClient();

  // Keep original fixed form fields for backward compatibility (and email)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [pageData, setPageData] = useState<EbookLandingData | null>(initialData || null);
  const [loading, setLoading] = useState(!initialData || slug === "placeholder");
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const defaults: EbookLandingData = {
    id: "",
    slug: "default",
    title: "E-Book",
    headline: "Headline of your E-Book goes here",
    subheadline: "The supporting subheadline goes here",
    additional_paragraph: null,
    extra_content: null,
    logo_text: "Logo",
    logo_image_url: null,
    book_image_url: "/images/book.png",
    learning_title: "What will you learn from this E-Book?",
    learning_description: "Learning description goes here",
    benefits_heading: "What you'll get",
    benefits: ["Benefit One", "Benefit Two", "Benefit Three"],
    form_title: "Download the E-Book Now",
    form_button_text: "Download Now",
    form_fields: [],
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

  // Helper to check if a field has actual content (not just empty HTML)
  const hasContent = (value: any) => {
    if (typeof value === 'string') {
      const stripped = value.replace(/<[^>]*>/g, '').trim();
      return stripped !== '';
    }
    return !!value;
  };

  const normalizeHeadingHtml = (value: string | null | undefined) => {
    if (!value) return "";
    return value.replace(/&nbsp;/g, " ").replace(/\u00A0/g, " ");
  };

  const normalizeRichHtml = (value: string | null | undefined) => {
    if (!value) return "";
    return value.replace(/&nbsp;/g, " ").replace(/\u00A0/g, " ");
  };

  useEffect(() => {
    if (slug === "placeholder") {
      // Do nothing - the redirects will handle it, or just wait for client-side fetch
      return;
    }

    if (slug) {
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
        // Helper to convert empty strings (and empty HTML) to null
        const emptyToNull = (value: any) => {
          if (typeof value === 'string') {
            // Strip HTML tags first
            const stripped = value.replace(/<[^>]*>/g, '').trim();
            if (stripped === '') {
              return null;
            }
          }
          return value;
        };
        
        const resolvedData: EbookLandingData = {
          ...data,
          logo_image_url: resolveImageUrl(data.logo_image_url),
          book_image_url: resolveImageUrl(data.book_image_url),
          author_heading: emptyToNull(data.author_heading),
          author_name: emptyToNull(data.author_name),
          author_role: emptyToNull(data.author_role),
          author_bio: emptyToNull(data.author_bio),
          author_avatar_url: resolveImageUrl(data.author_avatar_url),
          author_avatar_svg: emptyToNull(data.author_avatar_svg),
          form_fields: data.form_fields || [],
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

  const getLatestDownloadData = async () => {
    if (!slug || slug === "placeholder") {
      return null;
    }

    try {
      const { data, error } = await supabase
        .from("ebook_landing_pages")
        .select("title, pdf_url")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Latest PDF fetch error:", error);
        return null;
      }

      return data;
    } catch (err) {
      console.error("Latest PDF fetch exception:", err);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EXTRACT VALUES FROM formData FIRST for 100% reliability!
    let submitName = name;
    let submitEmail = email;
    let submitPhone = phone;
    let submitCompanyName = companyName;

//     let submitName = '';
// let submitEmail = '';
// let submitCompanyName = '';

Object.keys(formData).forEach(key => {
  const label = key.toLowerCase().trim();

  if (label === 'full name') {
    submitName = formData[key];
  }

  if (label === 'email') {
    submitEmail = formData[key];
  }

  if (label === 'company name') {
    submitCompanyName = formData[key];
  }
});

    if (data.form_fields && data.form_fields.length > 0) {
      console.log("ALL formData:", formData);
      data.form_fields.forEach(field => {
        const fieldIdLower = field.id.toLowerCase();
        // EXACT MATCH ONLY for name/email/phone/companyName!
        if (fieldIdLower === 'name' || fieldIdLower === 'fullname') {
          submitName = formData[field.id] || "";
          console.log("Set NAME to:", submitName);
        }
        if (fieldIdLower === 'email') {
          submitEmail = formData[field.id] || "";
          console.log("Set EMAIL to:", submitEmail);
        }
        if (fieldIdLower === 'phone') {
          submitPhone = formData[field.id] || "";
          console.log("Set PHONE to:", submitPhone);
        }
        if (fieldIdLower === 'company' || fieldIdLower === 'companyname') {
          submitCompanyName = formData[field.id] || "";
          console.log("Set COMPANY to:", submitCompanyName);
        }
      });
    }

    try {
      const { error: dbError } = await supabase
        .from("contacts")
        .insert([
          {
            full_name: submitName,
            email: submitEmail,
            phone: submitPhone,
            company_name: submitCompanyName,
            country_code: "+91",
            selection: `E-Book Download: ${pageData?.title || "E-Book"}`,
            // message: "Requested E-book download from landing page",
          },
        ]);

      if (dbError) throw dbError;

      // Send Email - EXACTLY like contact-us page!
      const trimmedPhone = String(submitPhone ?? "").trim();
      const phoneForEmail = trimmedPhone ? trimmedPhone : "N/A";
      const countryCodeForEmail = trimmedPhone ? "+91" : "";
      console.log("Sending email with: name=" + submitName + ", email=" + submitEmail + ", phone=" + phoneForEmail + ", countryCode=" + countryCodeForEmail + ", companyName=" + submitCompanyName);
      try {
        const { data: emailData, error: emailError } =
          await supabase.functions.invoke("send-contact-email", {
            body: {
              channel: "contact",
              fullName: submitName,
              email: submitEmail,
              phone: phoneForEmail,
              countryCode: countryCodeForEmail,
              companyName: submitCompanyName,
              selection: `E-Book Download: ${pageData?.title || "E-Book"}`,
              // message: "Requested E-book download from landing page",
            },
          });

        console.log("Email Response:", emailData);

        if (emailError) {
          console.error("Email Error:", emailError);
        }
      } catch (emailErr) {
        console.error("Email Exception:", emailErr);
      }

      // Always fetch the latest PDF URL before download so admin updates reflect immediately.
      const latestDownloadData = await getLatestDownloadData();
      const pdfUrlToDownload = latestDownloadData?.pdf_url || pageData?.pdf_url || null;
      const pdfTitle = latestDownloadData?.title || pageData?.title || "E-Book";

      if (latestDownloadData) {
        setPageData((prev) =>
          prev
            ? {
                ...prev,
                title: latestDownloadData.title ?? prev.title,
                pdf_url: latestDownloadData.pdf_url ?? prev.pdf_url,
              }
            : prev,
        );
      }

      if (pdfUrlToDownload) {
        await downloadPdf(pdfUrlToDownload, pdfTitle);
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

      <div className="topheader defhead1 lp-mobile-safe">
        <div className="container">
          <div className="row align-items-center lp-header-row">
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
              <div className="lp-header-contact">
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
                <Link href="mailto:info@rheincs.com">
                  info@rheincs.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="ebook-landing-root" className="lp-mobile-safe">
        <section className="topheadsize lp-top-section" style={{ textAlign: "center", padding: "30px 20px 0px", background: "#fff" }}>
          <div className="lp-logo-wrap" style={{ width: "200px", height: "auto", margin: "0 auto 20px", borderRadius: "0%", overflow: "hidden", background: "transparent", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontWeight: "bold", maxWidth: "100%" }}>
            {data.logo_image_url ? (
              <img src={data.logo_image_url} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            ) : data.logo_text}
          </div>
          {/* {data.title && <div dangerouslySetInnerHTML={{ __html: data.title }} />} */}
          {data.headline && (
            <h1
              style={{ width: "80%", margin: "0 auto 10px", whiteSpace: "normal", wordBreak: "normal", overflowWrap: "normal" }}
              dangerouslySetInnerHTML={{ __html: normalizeHeadingHtml(data.headline) }}
            />
          )}
          {data.subheadline && (
            <h5
              style={{ width: "80%", margin: "0 auto", whiteSpace: "normal", wordBreak: "normal", overflowWrap: "normal" }}
              dangerouslySetInnerHTML={{ __html: normalizeHeadingHtml(data.subheadline) }}
            />
          )}
          {data.additional_paragraph && (
            <div className="lp-rich-text" style={{ marginTop: '15px', fontSize: '14px', color: '#000', textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: normalizeRichHtml(data.additional_paragraph) }} />
          )}
        </section>

        <section className="lp-main-grid" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", padding: "40px 20px", width: "100%" }}>
          <div>
            <img src={data.book_image_url || "/images/book.png"} alt="Book" style={{ width: "100%", maxWidth: "100%", height: "auto" }} />
          </div>
          <div>
            {data.learning_title && (
              <h2
                className="lp-side-heading"
                dangerouslySetInnerHTML={{ __html: normalizeRichHtml(data.learning_title) }}
              />
            )}
            {data.learning_description && (
              <div className="lp-rich-text" style={{ marginTop: "15px" }} dangerouslySetInnerHTML={{ __html: normalizeRichHtml(data.learning_description) }} />
            )}
            {data.benefits_heading && (
              <h3
                className="lp-side-heading"
                style={{ marginTop: "20px" }}
                dangerouslySetInnerHTML={{ __html: normalizeRichHtml(data.benefits_heading) }}
              />
            )}
            <ul style={{ marginTop: "20px" }}>
              {data.benefits?.map((benefit, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>{benefit}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
              {data.form_title && (
                <h3
                  className="lp-form-heading"
                  dangerouslySetInnerHTML={{ __html: normalizeRichHtml(data.form_title) }}
                />
              )}             
              {data.form_fields && data.form_fields.length > 0 ? (
                data.form_fields.map((field) => {
                  const defaultPlaceholder = field.id.charAt(0).toUpperCase() + field.id.slice(1);
                  
                  const handleChange = (e: any) => {
                    const value = e.target.value;

                    setFormData(prev => ({ ...prev, [field.id]: value }));
                    
                    // Update original state variables for email submission
                    if (field.id.toLowerCase() === 'name' || field.id.toLowerCase() === 'fullname' || field.id.toLowerCase().includes('name')) {
                      setName(value);
                    }
                    if (field.id.toLowerCase() === 'email' || field.id.toLowerCase().includes('email')) {
                      setEmail(value);
                    }
                    if (field.id.toLowerCase() === 'phone' || field.id.toLowerCase().includes('phone')) {
                      setPhone(value);
                    }
                    if (field.id.toLowerCase() === 'company' || field.id.toLowerCase() === 'companyname' || field.id.toLowerCase().includes('company')) {
                      setCompanyName(value);
                    }
                    
                    console.log("Field change: id=" + field.id + ", value=" + value + ", name=" + name + ", email=" + email);
                  };
                  
                  return (
                    <div key={field.id} style={{ marginBottom: "12px" }}>
                      {field.label && <label style={{ display: "block", marginBottom: "4px", fontWeight: 500 }}>{field.label}</label>}
                      
                      {field.type === 'textarea' ? (
                        <textarea
                          placeholder={field.placeholder || defaultPlaceholder}
                          value={formData[field.id] || ""}
                          onChange={handleChange}
                          required={field.required}
                          style={{ ...inputStyle, minHeight: "80px" }}
                        />
                      ) : field.type === 'select' ? (
                        <select
                          value={formData[field.id] || ""}
                          onChange={handleChange}
                          required={field.required}
                          style={inputStyle}
                        >
                          <option value="">{defaultPlaceholder}...</option>
                          {(field.options || []).map((option, idx) => (
                            <option key={idx} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          placeholder={field.placeholder || defaultPlaceholder}
                          value={formData[field.id] || ""}
                          onChange={handleChange}
                          required={field.required}
                          style={inputStyle}
                        />
                      )}
                    </div>
                  );
                })
              ) : (
                // Fallback to original fields if no fields added
                <>
                  <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle} />
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
                  <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required style={inputStyle} />
                  <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required style={inputStyle} />
                </>
              )}
              
              <div className="text-center">
                <button className="lp-submit-btn" type="submit" disabled={isSubmitting} style={{ margin: "15px auto", padding: "12px 30px", background: "#082326", border: "none", color: "#fff", cursor: "pointer", borderRadius: "5px", maxWidth: "100%" }}>
                  {isSubmitting ? "Submitting..." : data.form_button_text || "Download Now"}
                </button>
              </div>
            </form>

            
          </div>
        {data.extra_content && (
          <div
            className="contentbox lp-rich-text col-12"
            style={{ color: "#000", gridColumn: "1 / -1", width: "100%" }}
            dangerouslySetInnerHTML={{ __html: normalizeRichHtml(data.extra_content) }}
          />
        )}

        </section>



        {(() => {
          // Debug: log author fields
          console.log("Author fields debug (client):", {
            author_heading: data.author_heading,
            author_name: data.author_name,
            author_role: data.author_role,
            author_bio: data.author_bio,
            author_avatar_url: data.author_avatar_url,
            author_avatar_svg: data.author_avatar_svg,
            pageData: pageData,
            initialData: initialData
          });

          // Check if any author field has actual content (not just empty HTML)
          const hasAuthorInfo =
            hasContent(data.author_heading) ||
            hasContent(data.author_name) ||
            hasContent(data.author_role) ||
            hasContent(data.author_bio) ||
            hasContent(data.author_avatar_url) ||
            hasContent(data.author_avatar_svg);

          console.log("hasAuthorInfo (client):", hasAuthorInfo);

          if (hasAuthorInfo) {
                return (
                  <section style={{ background: "#2d3e50", color: "#fff", padding: "50px 20px", textAlign: "center" }}>
                    {hasContent(data.author_heading) && (
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: String(data.author_heading ?? ""),
                        }}
                      />
                    )}
                    {hasContent(data.author_avatar_url) && (
                      <img
                        src={typeof data.author_avatar_url === "string" ? data.author_avatar_url : undefined}
                        alt="Author"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          marginTop: "20px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                    {hasContent(data.author_name) && (
                      <h3 style={{ marginTop: "20px" }}>{data.author_name}</h3>
                    )}
                    {hasContent(data.author_role) && <p>{data.author_role}</p>}
                    {hasContent(data.author_bio) && (
                      <div
                        className="lp-rich-text"
                        style={{ maxWidth: "700px", margin: "20px auto 0" }}
                        dangerouslySetInnerHTML={{
                          __html: normalizeRichHtml(data.author_bio),
                        }}
                      />
                    )}
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

      <style jsx global>{`
        .lp-rich-text,
        .lp-rich-text p,
        .lp-rich-text span,
        .lp-rich-text li,
        .lp-rich-text div {
          word-break: normal !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
          hyphens: none !important;
        }

        .lp-top-section h1,
        .lp-top-section h5,
        .lp-top-section h1 p,
        .lp-top-section h5 p,
        .lp-top-section h1 span,
        .lp-top-section h5 span {
          word-break: normal !important;
          overflow-wrap: normal !important;
          white-space: normal !important;
          hyphens: none !important;
        }

        .lp-side-heading,
        .lp-side-heading p,
        .lp-side-heading span,
        .lp-form-heading,
        .lp-form-heading p,
        .lp-form-heading span {
          max-width: 100%;
          word-break: normal !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
          hyphens: none !important;
        }

        @media (max-width: 768px) {
          .lp-top-section h1,
          .lp-top-section h5 {
            width: 100% !important;
          }

          .lp-side-heading,
          .lp-side-heading p,
          .lp-side-heading span,
          .lp-form-heading,
          .lp-form-heading p,
          .lp-form-heading span {
            font-size: 24px !important;
            line-height: 1.3 !important;
          }
        }

        /* Apply Quill sizes in preview */
        .contentbox span.ql-size-10px,
        .contentbox p.ql-size-10px,
        .contentbox div.ql-size-10px,
        .contentbox .ql-size-10px,
        span.ql-size-10px,
        p.ql-size-10px,
        div.ql-size-10px,
        .ql-size-10px {
          font-size: 10px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-12px,
        .contentbox p.ql-size-12px,
        .contentbox div.ql-size-12px,
        .contentbox .ql-size-12px,
        span.ql-size-12px,
        p.ql-size-12px,
        div.ql-size-12px,
        .ql-size-12px {
          font-size: 12px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-14px,
        .contentbox p.ql-size-14px,
        .contentbox div.ql-size-14px,
        .contentbox .ql-size-14px,
        span.ql-size-14px,
        p.ql-size-14px,
        div.ql-size-14px,
        .ql-size-14px {
          font-size: 14px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-16px,
        .contentbox p.ql-size-16px,
        .contentbox div.ql-size-16px,
        .contentbox .ql-size-16px,
        span.ql-size-16px,
        p.ql-size-16px,
        div.ql-size-16px,
        .ql-size-16px {
          font-size: 16px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-18px,
        .contentbox p.ql-size-18px,
        .contentbox div.ql-size-18px,
        .contentbox .ql-size-18px,
        span.ql-size-18px,
        p.ql-size-18px,
        div.ql-size-18px,
        .ql-size-18px {
          font-size: 18px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-20px,
        .contentbox p.ql-size-20px,
        .contentbox div.ql-size-20px,
        .contentbox .ql-size-20px,
        span.ql-size-20px,
        p.ql-size-20px,
        div.ql-size-20px,
        .ql-size-20px {
          font-size: 20px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-24px,
        .contentbox p.ql-size-24px,
        .contentbox div.ql-size-24px,
        .contentbox .ql-size-24px,
        span.ql-size-24px,
        p.ql-size-24px,
        div.ql-size-24px,
        .ql-size-24px {
          font-size: 24px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-28px,
        .contentbox p.ql-size-28px,
        .contentbox div.ql-size-28px,
        .contentbox .ql-size-28px,
        span.ql-size-28px,
        p.ql-size-28px,
        div.ql-size-28px,
        .ql-size-28px {
          font-size: 28px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-32px,
        .contentbox p.ql-size-32px,
        .contentbox div.ql-size-32px,
        .contentbox .ql-size-32px,
        span.ql-size-32px,
        p.ql-size-32px,
        div.ql-size-32px,
        .ql-size-32px {
          font-size: 32px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-36px,
        .contentbox p.ql-size-36px,
        .contentbox div.ql-size-36px,
        .contentbox .ql-size-36px,
        span.ql-size-36px,
        p.ql-size-36px,
        div.ql-size-36px,
        .ql-size-36px {
          font-size: 36px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-40px,
        .contentbox p.ql-size-40px,
        .contentbox div.ql-size-40px,
        .contentbox .ql-size-40px,
        span.ql-size-40px,
        p.ql-size-40px,
        div.ql-size-40px,
        .ql-size-40px {
          font-size: 40px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-48px,
        .contentbox p.ql-size-48px,
        .contentbox div.ql-size-48px,
        .contentbox .ql-size-48px,
        span.ql-size-48px,
        p.ql-size-48px,
        div.ql-size-48px,
        .ql-size-48px {
          font-size: 48px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-56px,
        .contentbox p.ql-size-56px,
        .contentbox div.ql-size-56px,
        .contentbox .ql-size-56px,
        span.ql-size-56px,
        p.ql-size-56px,
        div.ql-size-56px,
        .ql-size-56px {
          font-size: 56px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-64px,
        .contentbox p.ql-size-64px,
        .contentbox div.ql-size-64px,
        .contentbox .ql-size-64px,
        span.ql-size-64px,
        p.ql-size-64px,
        div.ql-size-64px,
        .ql-size-64px {
          font-size: 64px !important;
          line-height: 1.4 !important;
        }
        .contentbox span.ql-size-72px,
        .contentbox p.ql-size-72px,
        .contentbox div.ql-size-72px,
        .contentbox .ql-size-72px,
        span.ql-size-72px,
        p.ql-size-72px,
        div.ql-size-72px,
        .ql-size-72px {
          font-size: 72px !important;
          line-height: 1.4 !important;
        }
      `}</style>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  marginTop: "0px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};
