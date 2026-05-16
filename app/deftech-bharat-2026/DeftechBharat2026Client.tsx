"use client";

import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./deftech.module.css";
import Footer1 from "../Components/Footer1";
import ScriptReinit from "../Components/ScriptReinit";
import LeadSquaredInit from "../Components/LeadSquaredInit";
import { NavArrowLeft } from "../icons";
import TestimonialandAward from "../Components/TestimonialandAward";
import Awards from "../Components/Awards";

type Status = "idle" | "submitting" | "success" | "error";

export default function DeftechBharat2026Client() {
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const router = useRouter();

  const pageUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  const sleep = (ms: number) =>
    new Promise<void>((resolve) => setTimeout(resolve, ms));

  const waitFor = async (
    predicate: () => boolean,
    { timeoutMs, intervalMs }: { timeoutMs: number; intervalMs: number },
  ) => {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      if (predicate()) return true;
      await sleep(intervalMs);
    }
    return false;
  };

  const captureLeadSquared = async () => {
    if (typeof window === "undefined") return;

    await waitFor(() => typeof (window as any).saveleadlan === "function", {
      timeoutMs: 2500,
      intervalMs: 50,
    });

    const saveLead = (window as any).saveleadlan;
    if (typeof saveLead !== "function") return;

    try {
      await Promise.resolve(saveLead());
      await sleep(300);
    } catch (err) {
      console.warn("LeadSquared capture failed:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setStatusMessage("Submitting...");

    try {
      const formData = new FormData(e.currentTarget);
      const fullName = String(formData.get("fullName") ?? "");
      const email = String(formData.get("email") ?? "");
      const companyName = String(formData.get("companyName") ?? "");
      const selection = "DefTech Bharat 2026 Meeting Request";

      const supabase = createClient();

      // 1) Save to contacts table (so it appears in Admin panel)
      const { error: dbError } = await supabase.from("contacts").insert([
        {
          full_name: fullName,
          email,
          company_name: companyName,
          phone: "N/A",
          selection,
          message: `Meeting request from DefTech Bharat 2026 landing page. URL: ${pageUrl}`,
        },
      ]);
      if (dbError) {
        throw new Error(dbError.message);
      }

      // 2) Send mail (same as Contact Us page)
      const { data: emailResult, error: emailError } =
        await supabase.functions.invoke("send-contact-email", {
          body: {
            channel: "contact",
            fullName,
            email,
            phone: "N/A",
            countryCode: "",
            companyName,
            selection,
            message: `Meeting request from DefTech Bharat 2026 landing page. URL: ${pageUrl}`,
            // Admin copy
            adminEmail: "padma@impressbss.com",
          },
        });

      if (emailError) {
        throw new Error(emailError.message);
      }
      if (emailResult && emailResult.success === false) {
        throw new Error(emailResult.error || "Email sending failed");
      }

      // 3) LeadSquared (best-effort)
      await captureLeadSquared();

      setStatus("success");
      setStatusMessage("Thanks! We’ll get back to you shortly.");
      const form = document.getElementById("form1") as HTMLFormElement;
      if (form) form.reset();

      router.push("/thanks");
    } catch (err: any) {
      console.error("DefTech submit failed:", err);
      setStatus("error");
      setStatusMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <LeadSquaredInit />
      <div className={`topheader defhead ${styles.defTopHeader}`}>
        <div className="container">
          <div className={`row align-items-center ${styles.defTopRow}`}>
            <div className="col-auto">
              <Link href="/" className={styles.defLogoLink}>
                <img
                  src="/images/rlogo.png"
                  alt="RheinBrücke"
                  height={52}
                  className={styles.defLogoImg}
                />
              </Link>
            </div>

            <div className="col" />

            <div className="col-auto">
              <div className={styles.defMailWrap}>
                <span className={styles.defMailIcon} aria-hidden="true">
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
                <Link className={styles.defMailLink} href="mailto:info@rheincs.com">
                  info@rheincs.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className={styles.heroWrap}>
          <img
            className={styles.heroImg}
            src="/images/deftech-bharat-2026/hero.png"
            alt="DefTech Bharat 2026 - RheinBrücke"
          />
        </div>

        <div className={styles.contentWrap}>
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-lg-7">
                <h2 className={styles.title}>
                  Meet RheinBrücke at DefTech Bharat 2026
                </h2>
                <p className={styles.subtitle}>
                  Visit us at Booth C10, KTPO, Whitefield, Bengaluru | 20–22 May
                  2026
                </p>

                <p className={styles.bodyText}>
                  We work with aerospace and defence manufacturers to close the
                  operational data gaps that slow production, create compliance
                  risk, and limit programme performance. Explore how RheinBrücke
                  and MeRLIN work together to modernise your core systems, connect
                  your data and bring efficiency to procurement.
                </p>

                <div className={styles.sectionHeading}>
                  Four capabilities. One integrated approach.
                </div>
                <ul className={styles.bulletList}>
                  <li>
                    Digital transformation for manufacturing and supply chain
                  </li>
                  <li>ERP implementation and procurement digitisation</li>
                  <li>Data, AI and analytics for operational insights</li>
                  <li>System integration and digital ecosystem enablement</li>
                </ul>

                <div className={styles.sectionHeading}>Event details</div>
                <ul className={styles.detailsList}>
                  <li>Event: DefTech Bharat 2026</li>
                  <li>Booth: C10</li>
                  <li>Venue: KTPO, Whitefield, Bengaluru</li>
                  <li>Dates: 20, 21, 22 May 2026</li>
                </ul>

                <p className={styles.bodyText} style={{ marginTop: 14 }}>
                  Our team will be at Booth C10 across all three days. Book a
                  meeting slot in advance to discuss your specific programme or
                  simply drop by during the event.
                </p>
              </div>

              <div className="col-lg-5">
                <div className={styles.formCard}>
                  <h3 className={styles.formTitle}>Book a Meeting</h3>

                  <form id="form1" onSubmit={handleSubmit}>
                    <input type="hidden" name="MXHOrgCode" value="17537" />
                    <input type="hidden" name="MXHLandingPageId" value="" />
                    <input
                      type="hidden"
                      name="pageName"
                      value="DefTech Bharat 2026 - Book a Meeting"
                    />
                    <input type="hidden" name="Page_URL" value={pageUrl} />
                    <input
                      type="hidden"
                      name="selection"
                      value="DefTech Bharat 2026 Meeting Request"
                    />
                    <input type="hidden" name="phone" id="phone" value="N/A" />
                    <input
                      type="hidden"
                      name="lsqNotes"
                      value="Event: DefTech Bharat 2026 | Booth: C10 | Dates: 20–22 May 2026"
                    />

                    <div style={{ marginBottom: 12 }}>
                      <div className={styles.label}>Name *</div>
                      <input
                        className={styles.input}
                        name="fullName"
                        id="fullName"
                        required
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div style={{ marginBottom: 12 }}>
                      <div className={styles.label}>Email *</div>
                      <input
                        className={styles.input}
                        type="email"
                        name="email"
                        id="email"
                        required
                        disabled={status === "submitting"}
                      />
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <div className={styles.label}>Company Name *</div>
                      <input
                        className={styles.input}
                        name="companyName"
                        id="companyName"
                        required
                        disabled={status === "submitting"}
                      />
                    </div>

                    <button
                      className={styles.submitBtn}
                      type="submit"
                      disabled={status === "submitting"}
                    >
                      Submit
                    </button>

                    {status !== "idle" && (
                      <div className={styles.status}>{statusMessage}</div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestimonialandAward />
      <Awards />
      <Footer1 />
      <ScriptReinit />
    </>
  );
}
