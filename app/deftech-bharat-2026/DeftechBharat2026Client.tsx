"use client";

import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";
import React, { useMemo, useState, useEffect } from "react";
import styles from "./deftech.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export default function DeftechBharat2026Client() {
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const router = useRouter();

  const pageUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

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

      // 1. Save to Database (Primary)
      const { error: dbError } = await supabase.from("contacts").insert([
        {
          full_name: fullName,
          email: email,
          company_name: companyName,
          phone: "N/A", 
          selection: selection,
          message: `Meeting request from DefTech Bharat 2026 landing page.`,
        },
      ]);

      if (dbError) throw dbError;

      // 2. Email notification (Best-effort)
      try {
        await supabase.functions.invoke("send-contact-email", {
          body: {
            channel: "contact", // Using standard contact channel
            fullName,
            email,
            phone: "N/A",
            companyName,
            selection,
            message: `Meeting request from DefTech Bharat 2026 landing page.`,
          },
        });
      } catch (err) {
        console.warn("DefTech email invoke failed:", err);
      }

      // 3. LeadSquared (Best-effort)
      const saveLead = (window as any)?.saveleadlan;
      if (typeof saveLead === "function") {
        try {
          await Promise.resolve(saveLead());
        } catch (err) {
          console.warn("LeadSquared capture failed:", err);
        }
      }

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
                      required
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <div className={styles.label}>Company Name *</div>
                    <input
                      className={styles.input}
                      name="companyName"
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
  );
}
