"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";
import CommomLayout from "../Components/CommomLayout";
import LeadSquaredInit from "../Components/LeadSquaredInit";
import ScriptReinit from "../Components/ScriptReinit";

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

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

const STORAGE_BUCKET = "ebook-assets";

function resolveImageUrl(
  value: string | null | undefined
): string | null {
  if (!value) return null;

  // Already full URL
  if (
    value.startsWith("http://") ||
    value.startsWith("https://")
  ) {
    return value;
  }

  // Convert storage path to public URL
  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${value}`;
}

export default function EbookLandingPage() {
  const router = useRouter();
  const params = useParams();

  const slug = params?.slug as string;

  const supabase = createClient();

  // =====================================================
  // STATES
  // =====================================================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] =
    useState("");

  const [pageData, setPageData] =
    useState<EbookLandingData | null>(null);

  const [loading, setLoading] = useState(true);

  const [fetchError, setFetchError] =
    useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  // =====================================================
  // FETCH PAGE DATA BY SLUG
  // =====================================================

  useEffect(() => {
    if (slug) {
      fetchPageData();
    }
  }, [slug]);

  const fetchPageData = async () => {
    try {
      setLoading(true);
      setFetchError(null);

      const { data, error } = await supabase
        .from("ebook_landing_pages")
        .select("*")
        .eq("slug", slug)
        .single();

      console.log("Current Slug:", slug);
      console.log("Fetched Data:", data);
      console.log("Supabase Error:", error);

      if (error) {
        setFetchError(error.message);
        return;
      }

      if (data) {
        const resolvedData: EbookLandingData = {
          ...data,

          logo_image_url: resolveImageUrl(
            data.logo_image_url
          ),

          book_image_url: resolveImageUrl(
            data.book_image_url
          ),

          author_avatar_url: resolveImageUrl(
            data.author_avatar_url
          ),

          pdf_url: resolveImageUrl(data.pdf_url),
        };

        setPageData(resolvedData);
      }
    } catch (err: any) {
      console.error("Fetch Error:", err);

      setFetchError(
        err.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // FORM SUBMIT
  // =====================================================

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const { error: dbError } =
        await supabase.from("contacts").insert([
          {
            full_name: name,
            email: email,
            phone: phone,
            company_name: companyName,
            selection: `E-Book Download: ${
              pageData?.title || "E-Book"
            }`,
            message:
              "Requested E-book download from landing page",
          },
        ]);

      if (dbError) throw dbError;

      // Email API
      try {
        await fetch("/api/send-enquiry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: name,
            email: email,
            phone: phone,
            companyName: companyName,
            selection: `E-Book Download: ${
              pageData?.title || "E-Book"
            }`,
            message:
              "Requested E-book download from landing page",
          }),
        });
      } catch (emailErr) {
        console.warn(
          "Email failed but DB saved:",
          emailErr
        );
      }

      // Download PDF
      if (pageData?.pdf_url) {
        const link =
          document.createElement("a");

        link.href = pageData.pdf_url;

        link.setAttribute(
          "download",
          "ebook.pdf"
        );

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
      }

      // Reset Form
      setName("");
      setEmail("");
      setPhone("");
      setCompanyName("");

      // Redirect
      router.push("/thanks");
    } catch (err: any) {
      console.error("Submit Error:", err);

      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // =====================================================
  // DEFAULT DATA
  // =====================================================

  const defaults: EbookLandingData = {
    id: "",
    slug: "default",
    title: "E-Book",
    headline:
      "Headline of your E-Book goes here",
    subheadline:
      "The supporting subheadline goes here",
    logo_text: "Logo",
    logo_image_url: null,
    book_image_url: "/images/book.png",

    learning_title:
      "What will you learn from this E-Book?",

    learning_description:
      "Learning description goes here",

    benefits: [
      "Benefit One",
      "Benefit Two",
      "Benefit Three",
    ],

    form_title: "Download the E-Book Now",

    author_heading: "About the Author",

    author_name: "Author Name",

    author_role: "Designation",

    author_bio:
      "Author bio goes here",

    author_avatar_url: null,

    author_avatar_svg: null,

    footer_color: "#3aaee0",

    pdf_url: null,
  };

  const data = pageData || defaults;

  const accentColor =
    data.footer_color || "#3aaee0";

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f2f2f2",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }

  // =====================================================
  // PAGE NOT FOUND
  // =====================================================

  if (!pageData) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h1>No Landing Page Found</h1>

        {fetchError && (
          <p>{fetchError}</p>
        )}
      </div>
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <CommomLayout>
      <LeadSquaredInit />

      <div id="ebook-landing-root">
        {/* HERO */}

        <section
          style={{
            textAlign: "center",
            padding: "50px 20px",
            background: "#f2f2f2",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 20px",
              borderRadius: "50%",
              overflow: "hidden",
              background: accentColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {data.logo_image_url ? (
              <img
                src={data.logo_image_url}
                alt="Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              data.logo_text
            )}
          </div>

          <h1>{data.headline}</h1>

          <p>{data.subheadline}</p>
        </section>

        {/* MAIN */}

        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr",
            gap: "40px",
            padding: "40px 20px",
          }}
        >
          {/* LEFT */}

          <div>
            <img
              src={
                data.book_image_url ||
                "/images/book.png"
              }
              alt="Book"
              style={{
                width: "100%",
                maxWidth: "400px",
              }}
            />
          </div>

          {/* RIGHT */}

          <div>
            <h2>
              {data.learning_title}
            </h2>

            <p
              style={{
                marginTop: "15px",
              }}
            >
              {data.learning_description}
            </p>

            <ul
              style={{
                marginTop: "20px",
              }}
            >
              {data.benefits?.map(
                (benefit, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    {benefit}
                  </li>
                )
              )}
            </ul>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              style={{
                marginTop: "30px",
              }}
            >
              <h3>
                {data.form_title}
              </h3>

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
                style={inputStyle}
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
                style={inputStyle}
              />

              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                required
                style={inputStyle}
              />

              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) =>
                  setCompanyName(
                    e.target.value
                  )
                }
                required
                style={inputStyle}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: "15px",
                  padding:
                    "12px 30px",
                  background:
                    "#f5a623",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Download Now"}
              </button>
            </form>
          </div>
        </section>

        {/* AUTHOR */}

        <section
          style={{
            background: "#2d3e50",
            color: "#fff",
            padding: "60px 20px",
            textAlign: "center",
          }}
        >
          <h2>
            {data.author_heading}
          </h2>

          {data.author_avatar_url && (
            <img
              src={
                data.author_avatar_url
              }
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

          <h3
            style={{
              marginTop: "20px",
            }}
          >
            {data.author_name}
          </h3>

          <p>
            {data.author_role}
          </p>

          <p
            style={{
              maxWidth: "700px",
              margin:
                "20px auto 0",
            }}
          >
            {data.author_bio}
          </p>
        </section>

        {/* FOOTER */}

        <div
          style={{
            height: "10px",
            background:
              accentColor,
          }}
        />
      </div>

      <ScriptReinit />
    </CommomLayout>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  marginTop: "12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};