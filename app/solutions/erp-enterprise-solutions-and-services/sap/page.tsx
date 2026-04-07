"use client";

import React, { useState } from 'react'
import CommomLayout from '../../../Components/CommomLayout'
import Link from "next/link";
import { useTranslation } from "../../../hooks/useTranslation";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

const page = () => {
  const { t, language } = useTranslation();
  const router = useRouter();
  const leadSquaredPageName = (() => {
    try {
      if (typeof window === "undefined") return "SAP";
      const segments = window.location.pathname.split("/").filter(Boolean);
      const raw = segments.length ? segments[segments.length - 1] : "Home";
      return decodeURIComponent(raw)
        .replace(/[-_]+/g, " ")
        .trim()
        .replace(/\s+/g, " ")
        .split(" ")
        .filter(Boolean)
        .map((word) =>
          word.length <= 3 && /^[a-z]+$/i.test(word)
            ? word.toUpperCase()
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" ");
    } catch {
      return "SAP";
    }
  })();

  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91",
    phone: "",
    email: "",
    companyName: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");
  const [isCountryCodeFocused, setIsCountryCodeFocused] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      timeoutMs: 1200,
      intervalMs: 50,
    });

    await waitFor(() => typeof (window as any).LSQForm !== "undefined", {
      timeoutMs: 1500,
      intervalMs: 100,
    });

    const saveLead = (window as any).saveleadlan;
    if (typeof saveLead !== "function") {
      console.warn("LeadSquared: saveleadlan not available");
      return;
    }

    try {
      saveLead();
      await sleep(400);
    } catch (error) {
      console.warn("LeadSquared capture failed", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage(t("Submitting your request..."));

    try {
      const { fullName, countryCode, phone, email, companyName } = formData;

      const supabase = createClient();
      const { error } = await supabase.from("contacts").insert([
        {
          full_name: fullName,
          country_code: countryCode || "+91",
          phone: phone,
          email: email,
          company_name: companyName,
          selection: "SAP Brochure Request",
          // message: "Requested SAP Brochure download",
        },
      ]);

      if (error) throw error;

      // Send Email
      await supabase.functions.invoke("send-contact-email", {
        body: {
          channel: "contact",
          fullName,
          email,
          phone,
          countryCode: countryCode || "+91",
          companyName,
          selection: "SAP Brochure Request",
          // message: "Requested SAP Brochure download",
        },
      });

      setStatus("success");
      setStatusMessage(t("Thank you! Your request has been submitted."));

      // LeadSquared capture
      await captureLeadSquared();

      // Auto download PDF
      const link = document.createElement("a");
      link.href = "/images/sappdf.pdf";
      link.download = "SAP_Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form
      setFormData({
        fullName: "",
        countryCode: "+91",
        phone: "",
        email: "",
        companyName: "",
      });

      // Redirect after delay
      setTimeout(() => {
        router.push("/thanks");
      }, 2000);
    } catch (error: any) {
      console.error("Error:", error);
      setStatus("error");
      setStatusMessage(t("An error occurred. Please try again."));
    }
  };

  return (
    <CommomLayout>
      <>
        {/* Header Start */}
        {/*?php include "navbar.php" ?*/}
        {/* Header End */}
        {/* <div className="sap-baner-waber">
          <div className="container">
            <div className="animesan-waber llo">
              <div className="sap-title sap-paner-text">
                <h2 className="text-anime-style-21" data-cursor="-opaque">
                  {t("Build Resilient, Connected, Scalable and Future-Ready Enterprises with SAP")}
                </h2>
                <div className="ser-btn ">
                  <Link href="/contact-us" className="animated-svg-link">
                    {t("Contact us")}
                    <span className="svg-container">
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
              <div className="sap-svg-animation-wrap" style={{ width: '100%', margin: '0 auto' }}>
                <iframe
                  src="/htmls/SVG_Animation%20Code.html"
                  title="SAP SVG Animation"
                  style={{
                    width: '100%',
                    height: '650px',
                    border: 'none',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </div>
            </div>
          </div>
        </div> */}


        
                {/* Hero Section Start*/}
                <div className="hero brainsec bluebg digi1 mobilepd40 pdb0">
                  <div className="container">
                    <div className="row section-row align-items-center  digitalsec">
                      <div className="col-sm-6">
                        <div className="section-title">
                          <h2 className="text-anime-style-21" data-cursor="-opaque">
                            {t("Transform Your Enterprise with SAP S/4HANA and Cloud Innovation")}
                          </h2>
                          <p className="epic16">
                            {t("Drive real-time decision-making, simplify operations, and accelerate growth with RheinBrücke’s end-to-end SAP transformation services.")}
                          </p>
                          <div className="ser-btn mt-15">
                            <Link href="/contact-us" className="animated-svg-link">
                              {t("Request a SAP ERP Consultation")}
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
                      <div className="col-sm-6">
                        <div className="digiban text-center">
                          {/*<img src="/images/digitalban.png" alt="">*/}
                        <svg width="300" height="597" viewBox="0 0 300 597" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7_6)">
<circle cx="150" cy="477.191" r="150" fill="url(#paint0_linear_7_6)"/>
<path d="M71.3243 471.847H82.4163C86.0059 471.847 87.3089 474.36 87.3089 476.672C87.3089 478.984 86.2556 480.507 84.2982 481.141V481.192C85.8781 481.422 86.8074 482.919 86.9081 485.052C87.0591 488.43 87.1598 489.269 87.7619 489.98H84.9507C84.5228 489.472 84.5228 488.71 84.3989 486.526C84.2227 483.275 83.1443 482.284 80.9352 482.284H73.9845V489.978H71.3243V471.845V471.847ZM81.4134 479.948C84.0233 479.948 84.6506 478.35 84.6506 477.078C84.6506 475.352 83.6225 474.182 81.4889 474.182H73.9845V479.946H81.4134V479.948Z" fill="white"/>
<path d="M89.8716 471.696H92.3809V478.679H92.4312C93.6103 476.825 95.6936 476.216 97.5755 476.216C100.737 476.216 103.097 477.587 103.097 480.914V489.98H100.588V481.422C100.588 479.466 99.3838 478.35 96.6984 478.35C94.4157 478.35 92.3828 479.696 92.3828 482.311V489.98H89.8736V471.696H89.8716Z" fill="white"/>
<path d="M108.243 484.088C108.444 486.831 110.853 488.305 113.085 488.305C114.516 488.305 116.473 487.823 117.327 485.944H119.987C118.733 489.143 115.796 490.438 113.211 490.438C108.092 490.438 105.583 487.162 105.583 483.328C105.583 479.494 108.092 476.218 113.211 476.218C116.675 476.218 120.338 478.25 120.338 483.761V484.092H108.241L108.243 484.088ZM117.678 482.107C117.302 479.696 115.443 478.35 113.085 478.35C110.727 478.35 108.694 479.721 108.316 482.107H117.678Z" fill="white"/>
<path d="M122.898 471.696H125.408V474.49H122.898V471.696ZM122.898 476.672H125.408V489.98H122.898V476.672Z" fill="white"/>
<path d="M128.468 476.672H130.978V478.679H131.028C132.207 476.825 134.29 476.216 136.172 476.216C139.334 476.216 141.694 477.587 141.694 480.914V489.98H139.185V481.422C139.185 479.466 137.981 478.35 135.295 478.35C133.013 478.35 130.98 479.696 130.98 482.311V489.98H128.47V476.672H128.468Z" fill="white"/>
<path d="M144.733 471.847H154.395C157.833 471.847 159.614 473.473 159.614 476.316C159.614 478.093 158.811 479.897 156.1 480.481V480.532C159.589 480.889 160.216 483.453 160.216 485.001C160.216 486.957 159.163 489.978 154.218 489.978H144.733V471.845V471.847ZM145.887 480.076H153.868C154.795 480.076 158.46 480.076 158.46 476.394C158.46 472.713 155.601 472.864 153.692 472.864H145.887V480.076ZM145.887 488.965H153.969C154.871 488.965 159.063 488.965 159.063 484.901C159.063 481.093 155.649 481.093 153.667 481.093H145.887V488.965Z" fill="white"/>
<path d="M162.753 476.978H163.909V480.05H163.959C164.813 477.764 166.77 476.571 169.279 476.571C169.63 476.571 169.882 476.621 170.232 476.723V477.891C169.957 477.789 169.63 477.738 168.902 477.738C165.564 477.738 163.909 480.303 163.909 482.944V489.978H162.753V476.976V476.978Z" fill="white"/>
<path d="M184.107 489.98H182.953V487.39H182.903C182.099 488.939 180.419 490.385 177.482 490.385C171.584 490.385 171.584 486.577 171.584 485.001V476.976H172.74V484.95C172.74 487.591 173.72 489.368 177.509 489.368C181.298 489.368 182.955 486.982 182.955 484.568V476.974H184.109V489.976L184.107 489.98ZM174.624 472.101H175.778V474.793H174.624V472.101ZM179.942 472.101H181.096V474.793H179.942V472.101Z" fill="white"/>
<path d="M198.869 481.067C198.718 479.415 196.511 477.587 193.423 477.587C189.357 477.587 187.324 480.509 187.324 483.606C187.324 485.714 188.78 489.37 193.423 489.37C196.007 489.37 198.466 488.126 199.045 485.434H200.199C199.521 488.838 196.66 490.385 193.424 490.385C189.21 490.385 186.172 487.642 186.172 483.604C186.172 479.033 189.484 476.571 193.424 476.571C197.364 476.571 199.874 478.855 200.025 481.065H198.869V481.067Z" fill="white"/>
<path d="M202.255 471.847H203.411V483.885L212.57 476.976H214.276L207.775 481.878L214.878 489.98H213.296L206.872 482.615L203.409 485.205V489.98H202.253V471.847H202.255Z" fill="white"/>
<path d="M216.612 483.732C216.687 486.982 218.869 489.368 222.734 489.368C226.598 489.368 227.754 486.829 228.205 485.662H229.359C228.281 488.937 226.021 490.385 222.608 490.385C218.217 490.385 215.456 487.693 215.456 483.377C215.456 480.66 217.162 476.571 222.633 476.571C227.1 476.571 229.659 479.566 229.71 483.732H216.61H216.612ZM228.407 482.717C227.928 479.161 225.469 477.587 222.509 477.587C219.196 477.587 217.113 479.619 216.612 482.717H228.407Z" fill="white"/>
<path d="M118.147 437.007C118.147 440.114 115.659 442.632 112.588 442.632C109.518 442.632 107.03 440.114 107.03 437.007C107.03 433.9 109.518 431.384 112.588 431.384C115.659 431.384 118.147 433.902 118.147 437.007Z" fill="white"/>
<path d="M140.378 437.007C140.378 440.114 137.89 442.632 134.819 442.632C131.748 442.632 129.261 440.114 129.261 437.007C129.261 433.9 131.748 431.384 134.819 431.384C137.89 431.384 140.378 433.902 140.378 437.007Z" fill="white"/>
<path d="M162.609 437.007C162.609 440.114 160.122 442.632 157.053 442.632C153.984 442.632 151.494 440.114 151.494 437.007C151.494 433.9 153.982 431.384 157.053 431.384C160.123 431.384 162.609 433.902 162.609 437.007Z" fill="white"/>
<path d="M184.843 437.007C184.843 440.114 182.355 442.632 179.284 442.632C176.214 442.632 173.728 440.114 173.728 437.007C173.728 433.9 176.215 431.384 179.284 431.384C182.353 431.384 184.843 433.902 184.843 437.007Z" fill="white"/>
<path d="M129.261 453.88C129.261 456.988 126.773 459.505 123.703 459.505C120.632 459.505 118.144 456.988 118.144 453.88C118.144 450.773 120.632 448.257 123.703 448.257C126.773 448.257 129.261 450.775 129.261 453.88Z" fill="white"/>
<path d="M151.495 453.88C151.495 456.988 149.007 459.505 145.936 459.505C142.866 459.505 140.38 456.988 140.38 453.88C140.38 450.773 142.868 448.257 145.936 448.257C149.005 448.257 151.495 450.775 151.495 453.88Z" fill="white"/>
<path d="M173.728 453.88C173.728 456.988 171.24 459.505 168.169 459.505C165.098 459.505 162.61 456.988 162.61 453.88C162.61 450.773 165.1 448.257 168.169 448.257C171.238 448.257 173.728 450.775 173.728 453.88Z" fill="white"/>
</g>
<path id="path_center_sap" d="M150 0.19143V342.191" stroke="url(#paint1_linear_7_6)" stroke-width="1.5"/>
<path id="path_left_outer_sap" d="M89.5106 0.19143L90.6705 4.58523C98.3955 33.8483 102.307 63.987 102.307 94.2525V342.191" stroke="url(#paint2_linear_7_6)" stroke-width="1.5"/>
{/* Animated Dots */}
<circle r="2.32653" fill="#28B67E">
  <animateMotion dur="4.5s" repeatCount="indefinite" begin="0.2s">
    <mpath href="#path_left_outer_sap" />
  </animateMotion>
  <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="4.5s" repeatCount="indefinite" begin="0.2s" />
</circle>
<circle r="2.32653" fill="#28B67E">
  <animateMotion dur="4s" repeatCount="indefinite" begin="1.2s" keyPoints="1;0" keyTimes="0;1">
    <mpath href="#path_left_mid_sap" />
  </animateMotion>
  <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" begin="1.2s" />
</circle>
<circle r="2.32653" fill="#28B67E">
  <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.5s" keyPoints="1;0" keyTimes="0;1">
    <mpath href="#path_left_inner_sap" />
  </animateMotion>
  <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
</circle>
<circle r="2.32653" fill="#28B67E">
  <animateMotion dur="3s" repeatCount="indefinite" begin="0s">
    <mpath href="#path_center_sap" />
  </animateMotion>
  <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" begin="0s" />
</circle>
<circle r="2.32653" fill="#28B67E">
  <animateMotion dur="3.6s" repeatCount="indefinite" begin="0.7s">
    <mpath href="#path_right_inner_sap" />
  </animateMotion>
  <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" begin="0.7s" />
</circle>
<circle r="2.32653" fill="#28B67E">
  <animateMotion dur="4.1s" repeatCount="indefinite" begin="1.5s" keyPoints="1;0" keyTimes="0;1">
    <mpath href="#path_right_mid_sap" />
  </animateMotion>
  <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="4.1s" repeatCount="indefinite" begin="1.5s" />
</circle>
<circle r="2.32653" fill="#28B67E">
  <animateMotion dur="4.6s" repeatCount="indefinite" begin="0.3s">
    <mpath href="#path_right_outer_sap" />
  </animateMotion>
  <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="4.6s" repeatCount="indefinite" begin="0.3s" />
</circle>
<path id="path_right_outer_sap" d="M210.49 0.19143L209.33 4.58523C201.605 33.8483 197.694 63.987 197.694 94.2525V342.191" stroke="url(#paint3_linear_7_6)" stroke-width="1.5"/>
<path id="path_left_mid_sap" d="M104.633 0.19143L105.793 4.58523C113.518 33.8483 117.429 63.987 117.429 94.2525V342.191" stroke="url(#paint4_linear_7_6)" stroke-width="1.5"/>
<path id="path_right_mid_sap" d="M195.367 0.19143L194.207 4.58523C186.482 33.8483 182.571 63.987 182.571 94.2525V342.191" stroke="url(#paint5_linear_7_6)" stroke-width="1.5"/>
<path id="path_left_inner_sap" d="M119.755 0.19143L120.915 4.58523C128.64 33.8483 132.551 63.987 132.551 94.2525V342.191" stroke="url(#paint6_linear_7_6)" stroke-width="1.5"/>
<path id="path_right_inner_sap" d="M180.245 0.19143L179.085 4.58523C171.36 33.8483 167.449 63.987 167.449 94.2525V342.191" stroke="url(#paint7_linear_7_6)" stroke-width="1.5"/>
<g filter="url(#filter0_d_7_6)">
<circle cx="150" cy="167.191" r="75" fill="white"/>
<circle cx="150" cy="167.191" r="74.0625" stroke="#499A9A" stroke-width="1.875"/>
</g>
<g clip-path="url(#clip1_7_6)">
<path d="M201 148.191H106V194.191H154.022" fill="url(#paint8_linear_7_6)"/>
<path d="M152.978 157.391V179.063L144.835 157.391H136.692L129.802 175.383C128.967 170.885 124.165 169.249 120.407 168.023C117.901 167.205 115.187 166.183 115.187 164.751C115.187 163.729 116.648 162.707 119.363 162.911C121.242 163.116 122.912 163.116 126.253 164.751L129.593 159.231C126.462 157.596 122.286 156.778 118.945 156.778C114.978 156.778 111.637 158.005 109.549 160.049C108.088 161.48 107.462 163.32 107.253 165.365C107.253 168.227 108.297 170.271 110.593 171.907C112.473 173.134 114.769 173.951 116.857 174.565C119.571 175.383 121.659 176.2 121.659 177.631C121.451 179.471 119.363 179.88 117.901 179.88C115.396 180.085 113.308 179.676 110.176 177.836L107.253 183.356C110.385 185.196 113.725 186.014 117.692 186.014C120.407 186.014 124.582 185.196 126.879 183.151L126.462 184.991H134.396L135.857 181.516C138.989 182.334 142.538 182.538 145.67 181.516L146.714 184.991H160.912V176.814H163.835C171.143 176.814 175.527 173.338 175.527 167.205C175.527 160.254 171.352 157.391 162.374 157.391H152.978ZM137.736 175.383L140.659 166.183H140.868L143.791 175.383C141.703 175.996 139.615 175.996 137.736 175.383ZM160.912 170.68V163.32H163C165.714 163.32 167.802 164.138 167.802 166.796C167.802 169.658 165.714 170.68 163 170.68H160.912Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_7_6" x="20.625" y="37.8164" width="258.75" height="258.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="9.375" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_7_6"/>
<feOffset/>
<feGaussianBlur stdDeviation="22.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.603922 0 0 0 0 0.603922 0 0 0 0.78 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_6"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_6" result="shape"/>
</filter>
<linearGradient id="paint0_linear_7_6" x1="150" y1="327.191" x2="150" y2="627.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#008080"/>
<stop offset="0.67478" stop-color="#082326" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_7_6" x1="150.5" y1="0.19143" x2="150.5" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_7_6" x1="95.9086" y1="0.19143" x2="95.9086" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_7_6" x1="204.092" y1="0.19143" x2="204.092" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_7_6" x1="111.031" y1="0.19143" x2="111.031" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_7_6" x1="188.969" y1="0.19143" x2="188.969" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_7_6" x1="126.153" y1="0.19143" x2="126.153" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_7_6" x1="173.847" y1="0.19143" x2="173.847" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_7_6" x1="106" y1="148.191" x2="106" y2="194.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#00AAEE"/>
<stop offset="1" stop-color="#0055AA"/>
</linearGradient>
<clipPath id="clip0_7_6">
<rect width="300" height="269" fill="white" transform="translate(0 327.191)"/>
</clipPath>
<clipPath id="clip1_7_6">
<rect width="95" height="46" fill="white" transform="translate(106 148.191)"/>
</clipPath>
</defs>
</svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Hero Section End*/}


                
        {/* Our Testimonial Section Start */}
        {/* <div className={`our-testimonial merlinicon1 pd30 ${language === 'German' ? 'germanwhysugar1' : ''}`}>
          <div className="container">
            <div className="row section-row text-center">
              <div className="col-lg-12">
                <div className="section-title testidescription">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {" "}
                    {t("The SAP Transformation Journey")}
                  </h2>
                  <p>
                    {" "}
                    {t("RheinBrücke supports enterprises across the full SAP lifecycle, from transformation planning to implementation to continuous optimisation.")}
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="testimonial-slider-08 testianimdot">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="MeRLIN-service">
                          <div className="service-icon1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              id="svg8"
                              viewBox="0 0 16.933333 16.933334"
                            >
                              <g id="layer6">
                                <path
                                  className="icns1"
                                  id="path940"
                                  d="m3.9589358 7.8742461c-.015058.000023-.030123.001-.044958.0036-.8516816.172697-1.5311816.388185-2.0195156.644404-.2441669.128109-.4421189.265783-.5896281.42788-.1466571.161161-.2443328.35779-.2454631.570508h-.00103c-.0000096.0013-.0000096.0023 0 .0036v2.6468649c-.0000004.316855.2049375.57872.484725.784966.2797874.206245.6560275.378988 1.1187948.533301.8639448.288087 2.0764777.508604 3.4240803.628901v1.226283c-.0000495.249729.3141411.360902.4707726.166398l2.1171799-2.646852c.07703-.09654.07703-.233153 0-.329694l-2.1171836-2.6447779c-.1560169-.193759-.4689925-.084944-.4707724.1638139v.887284c-.6617502-.060951-1.2898972-.150282-1.8536335-.248562l-.002064-2.5543679c-.0005027-.148483-.1228712-.267412-.2713043-.26355zm-.2578655.594279.00362 2.1120149c-.3218106-.06916-.6239621-.153562-.876435-.237712-.4301792-.143377-.7645519-.305615-.9725504-.4588839-.2079986-.15327-.2676839-.275604-.2676839-.359668-.0000001-.05502.022175-.121072.1090373-.216525.086862-.09545.2356956-.207806.4433838-.316777.3450588-.181045.9301703-.372927 1.5606282-.522449zm-2.1130493 1.8644869c.2760201.195363.6296478.363547 1.0738363.511596.9255546.308489 2.1973444.534476 3.6679931.64854.1537171.01197.2851724-.109368.2852539-.26355v-.418063l1.5120525 1.888773-1.5120525 1.888774v-.713133c-.0000757-.138147-.1061815-.252866-.2439128-.263552-1.4399673-.111658-2.6826159-.338405-3.5429362-.625284-.4301599-.14344-.7645644-.303503-.9725504-.456819-.2079861-.153317-.267684-.275059-.2676839-.359152z"
                                  font-variant-ligatures="normal"
                                  font-variant-position="normal"
                                  font-variant-caps="normal"
                                  font-variant-numeric="normal"
                                  font-variant-alternates="normal"
                                  font-feature-settings="normal"
                                  text-indent={0}
                                  text-align="start"
                                  text-decoration-line="none"
                                  text-decoration-style="solid"
                                  text-decoration-color="rgb(0,0,0)"
                                  text-transform="none"
                                  text-orientation="mixed"
                                  white-space="normal"
                                  shape-padding={0}
                                  mix-blend-mode="normal"
                                  solid-color="rgb(0,0,0)"
                                  solid-opacity={1}
                                  vectorEffect="none"
                                  fill="#499a9a"
                                />
                                <path
                                  className="icns1"
                                  id="path944"
                                  d="m12.941333 7.8742461c-.135345.01356-.238361.127527-.238228.26355l-.0036 2.5548829c-.967508.181185-2.135026.30466-3.4085954.341581l.015499.529166c1.7934724-.05199 3.3859984-.266842 4.5511444-.591694.582573-.162427 1.057672-.349623 1.408182-.574126.0462-.02959.0375-.02251.0801-.05426v1.827279c0 .0962-.08764.247928-.365352.425813-.277715.177886-.712318.358431-1.263489.512114-1.102343.307363-2.666203.521003-4.4260873.572057l.015499.529167c1.7933463-.05203 3.3861003-.266847 4.5511463-.591695.582523-.162424 1.059769-.351699 1.410249-.576191.350478-.224495.607199-.508974.607199-.870748v-2.6468669c0-.214141-.09847-.412027-.24598-.574125-.147508-.162144-.345977-.299772-.590144-.427881-.488333-.256219-1.167834-.471702-2.019515-.644405 0 0-.04292-.0084-.07803-.0036zm.289388.591696c.631468.149633 1.216727.344298 1.562179.525549.207688.108971.356522.220809.443384.31626.08686.09545.109554.161507.109554.216524 0 .09621-.08761.247919-.365352.425814-.277744.1778949-.712267.3579109-1.263489.5115969-.153399.04277-.31781.08351-.488343.122473z"
                                  font-variant-ligatures="normal"
                                  font-variant-position="normal"
                                  font-variant-caps="normal"
                                  font-variant-numeric="normal"
                                  font-variant-alternates="normal"
                                  font-feature-settings="normal"
                                  text-indent={0}
                                  text-align="start"
                                  text-decoration-line="none"
                                  text-decoration-style="solid"
                                  text-decoration-color="rgb(0,0,0)"
                                  text-transform="none"
                                  text-orientation="mixed"
                                  white-space="normal"
                                  shape-padding={0}
                                  mix-blend-mode="normal"
                                  solid-color="rgb(0,0,0)"
                                  solid-opacity={1}
                                  vectorEffect="none"
                                  fill="#499a9a"
                                />
                                <path
                                  className="icns1"
                                  id="path870"
                                  d="m8.4669617 2.6455858c-1.1658688 0-2.1171877.9513189-2.1171874 2.1171873 0 1.165869.9513186 2.117188 2.1171874 2.117188 1.1658685 0 2.1171873-.951319 2.1171873-2.117188 0-1.1658684-.9513188-2.1171873-2.1171873-2.1171873zm0 .5292969c.8798856 0 1.5878913.708005 1.5878913 1.5878904 0 .879886-.7080057 1.587891-1.5878913 1.587891-.8798857 0-1.5878908-.708005-1.5878908-1.587891 0-.8798855.7080051-1.5878904 1.5878908-1.5878904z"
                                  font-variant-ligatures="normal"
                                  font-variant-position="normal"
                                  font-variant-caps="normal"
                                  font-variant-numeric="normal"
                                  font-variant-alternates="normal"
                                  font-feature-settings="normal"
                                  text-indent={0}
                                  text-align="start"
                                  text-decoration-line="none"
                                  text-decoration-style="solid"
                                  text-decoration-color="rgb(0,0,0)"
                                  text-transform="none"
                                  text-orientation="mixed"
                                  white-space="normal"
                                  shape-padding={0}
                                  mix-blend-mode="normal"
                                  solid-color="rgb(0,0,0)"
                                  solid-opacity={1}
                                  vectorEffect="none"
                                  fill="#499a9a"
                                />
                                <path
                                  className="icns1"
                                  id="path872"
                                  d="m8.4669617 1.3233202c-.9832123 0-2.0672936.5601514-2.9375 1.2460937-.4351033.3429712-.8158192.7204142-1.0937499 1.0917969-.2779311.3713827-.4667973.7336528-.466797 1.1015623-.0000003.36791.1888659.73018.466797 1.101563.2779307.371382.6586466.746872 1.0937499 1.089844.8702064.685942 1.9542879 1.248046 2.9375 1.248047.983212-.000001 2.0672933-.562105 2.9375003-1.248047.435103-.342972.813866-.718462 1.091797-1.089844.277931-.371383.46875-.733653.46875-1.101563 0-.3679095-.190819-.7301796-.46875-1.1015623s-.656694-.7488257-1.091797-1.0917969c-.870207-.6859423-1.9542883-1.2460936-2.9375003-1.2460937zm0 .5292969c.7702918 0 1.8012913.4958382 2.6093753 1.1328125.404042.3184871.756213.669039.998047.9921875s.361328.623899.361328.785156-.119494.460055-.361328.783204c-.241834.323148-.594005.6737-.998047.992187-.808084.636974-1.8390835 1.134765-2.6093753 1.134765-.7702921 0-1.8032439-.497791-2.611328-1.134765-.4040423-.318487-.7542599-.669039-.9960938-.992187-.2418342-.323149-.3613283-.621947-.3613283-.783204s.1194941-.4620075.3613283-.785156c.2418339-.3231485.5920515-.6737004.9960938-.9921875.8080841-.6369743 1.8410359-1.1328125 2.611328-1.1328125z"
                                  font-variant-ligatures="normal"
                                  font-variant-position="normal"
                                  font-variant-caps="normal"
                                  font-variant-numeric="normal"
                                  font-variant-alternates="normal"
                                  font-feature-settings="normal"
                                  text-indent={0}
                                  text-align="start"
                                  text-decoration-line="none"
                                  text-decoration-style="solid"
                                  text-decoration-color="rgb(0,0,0)"
                                  text-transform="none"
                                  text-orientation="mixed"
                                  white-space="normal"
                                  shape-padding={0}
                                  mix-blend-mode="normal"
                                  solid-color="rgb(0,0,0)"
                                  solid-opacity={1}
                                  vectorEffect="none"
                                  fill="#499a9a"
                                />
                              </g>
                            </svg>
                          </div>
                          <h3>
                            {t("SAP S/4HANA Transformation")}
                          </h3>
                          <ul>
                            <p>
                              {t("Accelerate ERP modernisation with SAP S/4HANA through flexible transformation pathways—greenfield, brownfield, or cloud with RISE and GROW—to drive real-time insights, operational efficiency, and scalable growth.")}
                            </p>
                          </ul>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="MeRLIN-service">
                          <div className="service-icon1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              id="Layer_1"
                              viewBox="0 0 512 512"
                              data-name="Layer 1"
                            >
                              <path
                                d="m383.809 160.188-28.913-28.884c-2.208-2.205-5.496-2.925-8.419-1.847l-30.003 11.051-24.064-9.964-13.4-29.047c-1.308-2.833-4.144-4.648-7.265-4.648h-40.874c-3.121 0-5.957 1.815-7.265 4.648l-13.4 29.047-24.064 9.964-30.003-11.051c-2.922-1.078-6.214-.356-8.422 1.85l-28.885 28.884c-2.206 2.206-2.928 5.494-1.85 8.422l11.051 30.002-9.966 24.069-29.05 13.428c-2.831 1.309-4.644 4.143-4.644 7.262v40.846c0 3.121 1.814 5.957 4.648 7.264l29.047 13.4 9.964 24.066-11.051 30.002c-1.078 2.927-.357 6.213 1.848 8.419l28.885 28.913c2.205 2.208 5.497 2.931 8.424 1.853l30.003-11.05 24.066 9.965 13.4 29.02c1.308 2.833 4.143 4.646 7.263 4.646h40.874c3.12 0 5.955-1.813 7.263-4.646l13.4-29.02 24.066-9.965 30.003 11.05c2.926 1.079 6.215.357 8.422-1.85l28.913-28.913c2.206-2.206 2.928-5.494 1.85-8.422l-11.051-30.002 9.965-24.067 29.02-13.399c2.833-1.308 4.646-4.143 4.646-7.263v-40.875c0-3.12-1.813-5.955-4.646-7.263l-29.02-13.399-9.965-24.067 11.051-30.002c1.079-2.929.355-6.219-1.853-8.425zm-8.781 75.708 27.214 12.566v30.639l-27.214 12.566c-1.827.843-3.269 2.344-4.038 4.203l-12.358 29.848c-.77 1.858-.811 3.938-.115 5.826l10.362 28.135-21.675 21.674-28.135-10.363c-1.885-.695-3.967-.654-5.825.115l-29.848 12.359c-1.858.77-3.359 2.211-4.202 4.038l-12.566 27.214h-30.64l-12.566-27.214c-.843-1.826-2.344-3.268-4.202-4.038l-29.848-12.359c-1.858-.77-3.939-.811-5.825-.115l-28.133 10.362-21.649-21.671 10.363-28.137c.695-1.887.654-3.967-.115-5.826l-12.358-29.848c-.771-1.859-2.213-3.36-4.04-4.204l-27.24-12.567v-30.611l27.245-12.593c1.825-.844 3.266-2.344 4.035-4.201l12.358-29.848c.77-1.858.811-3.938.115-5.826l-10.362-28.135 21.646-21.646 28.135 10.363c1.887.696 3.968.654 5.825-.115l29.848-12.358c1.859-.77 3.36-2.213 4.204-4.04l12.566-27.241h30.636l12.566 27.241c.844 1.827 2.345 3.27 4.204 4.04l29.848 12.358c1.858.769 3.939.811 5.825.115l28.138-10.364 21.671 21.65-10.361 28.132c-.695 1.887-.654 3.967.115 5.826l12.358 29.848c.77 1.858 2.211 3.359 4.038 4.203zm122.899 85.537c-2.208-3.826-7.102-5.135-10.928-2.928l-10.31 5.953c5.289-19.678 7.966-40.007 7.966-60.677 0-104.133-68.885-195.354-168.316-224.116-1.042-13.83-12.631-24.766-26.737-24.766-14.773 0-26.793 12.019-26.793 26.793s12.02 26.822 26.793 26.822c9.834 0 18.445-5.324 23.113-13.238 92.164 27.055 155.939 111.801 155.939 208.505 0 19.89-2.665 39.434-7.915 58.318l-7.26-12.572c-2.209-3.826-7.102-5.136-10.928-2.927-3.827 2.209-5.138 7.102-2.928 10.928l16.27 28.175c1.481 2.566 4.171 4.001 6.936 4.001 1.357 0 2.732-.346 3.992-1.074l28.177-16.27c3.826-2.209 5.138-7.102 2.928-10.928zm-208.324-268.918c-5.951 0-10.793-4.854-10.793-10.822s4.842-10.793 10.793-10.793 10.821 4.842 10.821 10.793-4.854 10.822-10.821 10.822zm-249.573 262.373c-4.01-16.633-6.042-33.791-6.042-51.106 0-102.603 70.812-190.152 169.864-212.125l-6.722 11.629c-2.212 3.825-.903 8.718 2.922 10.93 1.261.729 2.638 1.075 3.996 1.075 2.764 0 5.451-1.434 6.934-3.998l16.271-28.147c1.062-1.838 1.351-4.022.803-6.072-.549-2.05-1.89-3.798-3.728-4.859l-28.176-16.271c-3.829-2.211-8.72-.899-10.929 2.927-2.21 3.826-.899 8.719 2.927 10.928l11.223 6.481c-48.77 11.124-93.064 37.906-125.778 76.32-35.858 42.107-55.606 95.798-55.606 151.182 0 18.9 2.262 37.631 6.717 55.78-7.062 4.836-11.706 12.955-11.706 22.142 0 14.774 12.032 26.793 26.821 26.793s26.793-12.02 26.793-26.793-11.907-26.703-26.584-26.816zm-.209 37.609c-5.967 0-10.821-4.842-10.821-10.793s4.854-10.821 10.821-10.821 10.793 4.854 10.793 10.821-4.842 10.793-10.793 10.793zm384.65 28.686c-14.773 0-26.793 12.02-26.793 26.793 0 4.804 1.274 9.313 3.494 13.218-40.602 38.699-93.542 59.936-149.864 59.936-58.773 0-114.39-23.549-155.153-65.154h14.53c4.418 0 8-3.582 8-8s-3.582-8-8-8h-32.541c-4.418 0-8 3.582-8 8v32.541c0 4.418 3.582 8 8 8s8-3.582 8-8v-11.922c43.631 43.781 102.735 68.536 165.164 68.536 60.778 0 117.889-23.028 161.563-64.979 3.512 1.695 7.447 2.646 11.6 2.646 14.789 0 26.821-12.032 26.821-26.821s-12.032-26.793-26.821-26.793zm0 37.615c-5.951 0-10.793-4.854-10.793-10.821s4.842-10.793 10.793-10.793 10.821 4.842 10.821 10.793-4.854 10.821-10.821 10.821zm-204.316-208.971-.004.002c-29.749 17.182-39.976 55.361-22.799 85.106 8.319 14.421 21.756 24.738 37.835 29.049 5.371 1.44 10.82 2.153 16.235 2.153 10.793 0 21.446-2.832 31.043-8.375 29.748-17.193 39.987-55.384 22.821-85.142-17.2-29.727-55.391-39.951-85.132-22.794zm54.307 94.082c-10.708 6.184-23.185 7.825-35.131 4.622-11.949-3.204-21.936-10.872-28.121-21.593-12.767-22.107-5.167-50.48 16.939-63.25 22.109-12.755 50.502-5.151 63.283 16.938 12.757 22.113 5.143 50.503-16.971 63.284zm-1.548-28.107c0 8.42-5.643 15.637-13.605 18.589v.799c0 4.418-3.582 8-8 8s-8-3.582-8-8v-.803c-4.716-1.746-8.705-5.007-11.156-9.355-2.171-3.848-.811-8.728 3.038-10.898 3.848-2.171 8.728-.81 10.897 3.039.744 1.318 2.646 2.647 5.221 2.647 2.986 0 5.605-1.877 5.605-4.018 0-2.247 0-2.651-7.241-4.176-6.969-1.468-19.942-4.201-19.942-19.833 0-8.415 5.633-15.62 13.578-18.576v-.813c0-4.418 3.582-8 8-8s8 3.582 8 8v.79c4.749 1.743 8.747 5.013 11.177 9.376 2.15 3.86.765 8.732-3.095 10.882-3.858 2.15-8.731.765-10.882-3.095-.717-1.286-2.603-2.583-5.2-2.583-2.972 0-5.578 1.877-5.578 4.018 0 2.247 0 2.651 7.241 4.176 6.969 1.468 19.942 4.201 19.942 19.833zm1.254-97.268c-22.77-6.103-46.554-2.973-66.968 8.817-20.426 11.788-35.037 30.823-41.142 53.598-6.104 22.773-2.972 46.558 8.818 66.973 16.333 28.28 46.059 44.106 76.582 44.106 14.964 0 30.122-3.805 43.984-11.811 20.414-11.775 35.018-30.802 41.118-53.575 6.101-22.772 2.968-46.556-8.819-66.962-11.773-20.427-30.8-35.039-53.574-41.145zm46.938 103.967c-4.994 18.643-16.947 34.217-33.661 43.858-11.353 6.557-23.76 9.672-36.015 9.671-24.988-.001-49.327-12.958-62.698-36.11-9.652-16.713-12.216-36.185-7.219-54.829 4.998-18.646 16.96-34.231 33.685-43.883h.002c11.132-6.431 23.485-9.714 36.005-9.714 6.275 0 12.595.826 18.819 2.495 18.644 4.998 34.218 16.959 43.859 33.687 9.652 16.712 12.217 36.183 7.223 54.826z"
                                fill="#499a9a"
                              />
                            </svg>
                          </div>
                          <h3>
                            {t("SAP Cloud Applications")}
                          </h3>
                          <ul>
                            <p>
                              {t("Transform HR, procurement, and expense management with SAP SuccessFactors, Ariba, and Concur, enabling integrated, scalable, and cloud-driven business operations.")}
                            </p>
                          </ul>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="MeRLIN-service">
                          <div className="service-icon1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              id="Layer_1"
                              data-name="Layer 1"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M505.737,208.935l-37.187-8.272a217.942,217.942,0,0,0-23.138-55.809l20.459-32.165a8,8,0,0,0-1.093-9.951L409.261,47.223a8,8,0,0,0-9.95-1.094L367.146,66.588a217.949,217.949,0,0,0-55.81-23.139L303.065,6.263A8,8,0,0,0,295.256,0H216.744a8,8,0,0,0-7.809,6.263l-8.272,37.186a217.951,217.951,0,0,0-55.809,23.139L112.689,46.129a8,8,0,0,0-9.95,1.094L47.222,102.738a8,8,0,0,0-1.093,9.951l20.459,32.165a217.929,217.929,0,0,0-23.139,55.81L6.263,208.935A8,8,0,0,0,0,216.744v78.512a8,8,0,0,0,6.263,7.809l37.187,8.272a217.942,217.942,0,0,0,23.138,55.809L46.129,399.311a8,8,0,0,0,1.093,9.951l55.517,55.515a8,8,0,0,0,9.95,1.094l32.165-20.459a217.949,217.949,0,0,0,55.81,23.139l8.271,37.186A8,8,0,0,0,216.744,512h78.512a8,8,0,0,0,7.809-6.263l8.271-37.186a217.957,217.957,0,0,0,55.81-23.139l32.165,20.459a8,8,0,0,0,9.95-1.094l55.517-55.515a8,8,0,0,0,1.093-9.951l-20.459-32.165a217.929,217.929,0,0,0,23.139-55.81l37.186-8.271A8,8,0,0,0,512,295.256V216.744A8,8,0,0,0,505.737,208.935ZM496,288.84,460.239,296.8a8,8,0,0,0-6.051,5.978,202.085,202.085,0,0,1-24.988,60.27,8,8,0,0,0,.051,8.507l19.676,30.934-46.443,46.444L371.55,429.251a8,8,0,0,0-8.507-.051,202.088,202.088,0,0,1-60.271,24.988,8,8,0,0,0-5.978,6.05L288.84,496H223.16l-7.954-35.762a8,8,0,0,0-5.979-6.05A202.117,202.117,0,0,1,148.956,429.2a8,8,0,0,0-8.506.051l-30.934,19.677L63.073,402.484,82.749,371.55a8,8,0,0,0,.051-8.507,202.083,202.083,0,0,1-24.988-60.272,8,8,0,0,0-6.051-5.976L16,288.84V223.16l35.761-7.955a8,8,0,0,0,6.051-5.978A202.085,202.085,0,0,1,82.8,148.957a8,8,0,0,0-.051-8.507L63.073,109.516l46.443-46.444L140.45,82.749a8,8,0,0,0,8.507.051,202.088,202.088,0,0,1,60.271-24.988,8,8,0,0,0,5.977-6.05L223.16,16h65.68l7.954,35.762a8,8,0,0,0,5.979,6.051A202.088,202.088,0,0,1,363.044,82.8a8,8,0,0,0,8.506-.051l30.934-19.677,46.443,46.444L429.251,140.45a8,8,0,0,0-.051,8.507,202.083,202.083,0,0,1,24.988,60.272,8,8,0,0,0,6.051,5.976L496,223.16ZM256,94.9C167.172,94.9,94.9,167.172,94.9,256S167.172,417.1,256,417.1,417.1,344.828,417.1,256,344.829,94.9,256,94.9ZM256,401.1c-80.006,0-145.1-65.09-145.1-145.1S175.994,110.9,256,110.9,401.1,175.994,401.1,256,336.006,401.1,256,401.1Zm90.942-234.224A12.985,12.985,0,0,0,324,158.532a102.771,102.771,0,0,1-74.341,36.6H178.054a8.021,8.021,0,0,0-1.774.2,42.608,42.608,0,0,0-33.212,43.688,42.608,42.608,0,0,0,33.168,43.676l10.477,68.64a8,8,0,0,0,7.908,6.793h30.131a8,8,0,0,0,7.91-9.2l-6.646-43.789h3.771a13,13,0,0,0,12.986-12.986V282.9h6.89A102.781,102.781,0,0,1,324,319.5a12.856,12.856,0,0,0,9.891,4.665,13.152,13.152,0,0,0,4.5-.8,12.858,12.858,0,0,0,8.547-12.2V267.97a30.039,30.039,0,0,0,0-57.907ZM201.493,342.125l-9.04-59.223H206.46l8.987,59.223Zm25.28-52.989h-3.185l-.946-6.234h4.131Zm0-22.234H179.011a26.657,26.657,0,0,1-19.946-27.423,7.946,7.946,0,0,0,0-.926,26.657,26.657,0,0,1,19.946-27.424h47.762Zm104.169,36.386a118.85,118.85,0,0,0-80.793-36.379c-.107,0-.214-.007-.321-.007h-7.055V211.129h7.055c.107,0,.214,0,.321-.007a118.838,118.838,0,0,0,80.793-36.379Zm22.038-64.272a14.017,14.017,0,0,1-6.038,11.534V227.489A14.028,14.028,0,0,1,352.98,239.016ZM176.486,217.648h19.75a8,8,0,0,1,0,16h-19.75a8,8,0,0,1,0-16Zm25.53,17.341a8,8,0,0,1,0,16h-25.53a8,8,0,0,1,0-16Z"
                                fill="#499a9a"
                              />
                            </svg>
                          </div>
                          <h3>{t("SAP BTP")}</h3>
                          <ul>
                            <p>
                              {t("Integrate SAP with your enterprise ecosystem and build scalable extensions on SAP BTP, enabling innovation while preserving a clean, stable core.")}
                            </p>
                          </ul>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="MeRLIN-service">
                          <div className="service-icon1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              id="Layer_1"
                              enableBackground="new 0 0 64 64"
                              viewBox="0 0 64 64"
                            >
                              <g>
                                <path
                                  d="m59.506 27.903c-.245-6.981-3.072-13.509-8.036-18.473-5.203-5.204-12.118-8.069-19.47-8.069-14.849 0-26.982 11.819-27.505 26.542-2.266 1.007-3.852 3.275-3.852 5.911v7.262c0 3.566 2.901 6.468 6.468 6.468 2.308 0 4.185-1.877 4.185-4.185v-11.829c0-2.167-1.662-3.934-3.775-4.144.78-12.827 11.458-23.025 24.479-23.025 6.552 0 12.713 2.554 17.35 7.191 4.258 4.258 6.75 9.808 7.125 15.835-2.111.212-3.77 1.978-3.77 4.143v11.828c0 2.185 1.688 3.963 3.826 4.148v2.989c0 3.366-2.739 6.104-6.105 6.104h-4.521c-.222-.634-.57-1.22-1.058-1.706-.855-.859-1.995-1.332-3.209-1.332h-4.66c-.669 0-1.311.142-1.899.416-1.604.737-2.64 2.355-2.64 4.122 0 1.214.473 2.354 1.33 3.207.857.859 1.997 1.332 3.209 1.332h4.66c1.932 0 3.635-1.249 4.27-3.039h4.518c5.021 0 9.105-4.084 9.105-9.104v-3.523c2.252-1.013 3.826-3.273 3.826-5.898v-7.262c0-2.634-1.586-4.902-3.851-5.909zm-51.211 3.627v11.828c0 .653-.531 1.185-1.185 1.185-1.912 0-3.468-1.556-3.468-3.468v-7.262c0-1.913 1.556-3.468 3.468-3.468.654 0 1.185.532 1.185 1.185zm34.848 26.891c-.149.706-.783 1.219-1.506 1.219h-4.66c-.41 0-.795-.16-1.089-.454-.29-.289-.45-.675-.45-1.085 0-.599.351-1.146.901-1.399.196-.092.411-.139.638-.139h4.66c.41 0 .795.159 1.088.453.29.289.45.675.45 1.085.001.11-.011.22-.032.32zm17.214-17.346c0 1.912-1.556 3.468-3.468 3.468-.653 0-1.185-.531-1.185-1.185v-11.828c0-.653.531-1.185 1.185-1.185 1.912 0 3.468 1.556 3.468 3.468z"
                                  fill="#499a9a"
                                />
                                <path
                                  d="m41.713 41.592c3.505 0 6.356-2.852 6.356-6.356v-12.951c0-1.694-.662-3.29-1.864-4.492s-2.797-1.864-4.492-1.864h-19.426c-3.505 0-6.356 2.851-6.356 6.356v12.951c0 3.505 2.851 6.356 6.356 6.356h.119v3.356c0 1.28.763 2.416 1.943 2.895.381.153.777.229 1.169.229.817 0 1.613-.324 2.196-.927l5.583-5.553zm-10.091-2.564-6.042 6.009c-.027.028-.047.049-.104.024-.069-.028-.069-.073-.069-.113v-4.856c0-.828-.671-1.5-1.5-1.5h-1.619c-1.851 0-3.356-1.506-3.356-3.356v-12.951c0-1.851 1.505-3.356 3.356-3.356h19.426c.894 0 1.735.35 2.371.985.636.636.985 1.478.985 2.371v12.951c0 1.851-1.506 3.356-3.356 3.356h-9.034c-.397 0-.777.157-1.058.436z"
                                  fill="#499a9a"
                                />
                                <path
                                  d="m24.713 26.787c-1.22 0-2.213.994-2.213 2.213s.994 2.213 2.213 2.213c1.221 0 2.215-.994 2.215-2.213s-.993-2.213-2.215-2.213z"
                                  fill="#499a9a"
                                />
                                <path
                                  d="m31.999 26.787c-1.22 0-2.213.994-2.213 2.213s.994 2.213 2.213 2.213c1.222 0 2.215-.994 2.215-2.213s-.993-2.213-2.215-2.213z"
                                  fill="#499a9a"
                                />
                                <path
                                  d="m39.285 26.787c-1.22 0-2.213.994-2.213 2.213s.994 2.213 2.213 2.213c1.221 0 2.215-.994 2.215-2.213s-.994-2.213-2.215-2.213z"
                                  fill="#499a9a"
                                />
                              </g>
                            </svg>
                          </div>
                          <h3>{t("SAP Analytics")}</h3>
                          <ul>
                            <p>
                              {t("Turn enterprise data into real-time, actionable insights with SAP Analytics Cloud and advanced reporting—enabling faster decisions and improved business performance.")}
                            </p>
                          </ul>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="MeRLIN-service">
                          <div className="service-icon1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              enableBackground="new 0 0 512 512"
                              viewBox="0 0 512 512"
                            >
                              <g id="_x32_1_Layers">
                                <g>
                                  <path
                                    d="m480.544 138.166c0-21.048-17.102-38.17-38.122-38.17h-39.938c-3.576 0-6.475 2.898-6.475 6.475s2.898 6.475 6.475 6.475h39.938c13.88 0 25.173 11.316 25.173 25.221v202.233h-423.189v-202.234c0-13.905 11.293-25.221 25.173-25.221h39.938c3.576 0 6.475-2.898 6.475-6.475s-2.898-6.475-6.475-6.475h-39.938c-21.02 0-38.122 17.123-38.122 38.17-.001 13.364-.011 215.178-.013 237.976 0 20.993 17.218 38.16 38.135 38.16h145.398v43.411h-29.511c-13.293 0-24.108 10.815-24.108 24.108s10.815 24.108 24.108 24.108h141.068c13.293 0 24.108-10.815 24.108-24.108s-10.815-24.108-24.108-24.108h-29.511v-43.411h145.398c20.909 0 38.135-17.158 38.135-38.16-.001-22.797-.012-224.602-.012-237.975zm-12.95 215.184v22.778c0 13.891-11.336 25.211-25.181 25.211-52.476 0-320.59 0-372.827 0-13.838 0-25.181-11.313-25.181-25.211v-22.778zm-129.901 128.472c0 6.151-5.005 11.159-11.159 11.159h-141.068c-6.154 0-11.159-5.008-11.159-11.159s5.005-11.159 11.159-11.159h141.068c6.153 0 11.159 5.008 11.159 11.159zm-53.619-24.108h-56.148v-43.411h56.148z"
                                    fill="#499a9a"
                                  />
                                  <path
                                    d="m327.06 383.816h73.207c3.576 0 6.475-2.898 6.475-6.475 0-3.576-2.898-6.475-6.475-6.475h-73.207c-3.576 0-6.475 2.898-6.475 6.475s2.899 6.475 6.475 6.475z"
                                    fill="#499a9a"
                                  />
                                  <path
                                    d="m420.18 383.816h23.428c3.576 0 6.475-2.898 6.475-6.475 0-3.576-2.898-6.475-6.475-6.475h-23.428c-3.576 0-6.475 2.898-6.475 6.475s2.898 6.475 6.475 6.475z"
                                    fill="#499a9a"
                                  />
                                  <path
                                    d="m131.802 178.016 32.545 18.093-32.548 18.109c-11.623 6.424-11.489 23.134-.02 29.475l113.846 63.331c6.494 3.618 14.242 3.624 20.744.005l113.841-63.336c11.53-6.37 11.55-23.085.01-29.465l-32.567-18.119 32.555-18.099c11.573-6.462 11.593-23.075-.013-29.551l-42.162-23.416 42.157-23.445c11.581-6.434 11.584-23.079 0-29.516l-113.858-63.319c-6.475-3.591-14.199-3.591-20.663 0l-113.86 63.321c-11.581 6.434-11.584 23.08 0 29.516l42.156 23.445-42.174 23.421c-11.569 6.46-11.594 23.071.011 29.55zm242.142 54.347c-.008.005-.013.01-.02.01l-113.856 63.341c-2.544 1.416-5.587 1.421-8.141-.005l-113.869-63.346c-2.64-1.452-2.668-5.336.02-6.814l39.592-22.029 67.957 37.801c6.497 3.622 14.254 3.617 20.742.005l67.964-37.806 39.612 22.039c2.657 1.463 2.641 5.351-.001 6.804zm-235.842-148.958 113.859-63.321c2.527-1.406 5.546-1.406 8.078 0l113.859 63.321c2.697 1.494 2.702 5.377 0 6.874l-113.859 63.321c-2.532 1.406-5.552 1.406-8.078 0l-113.859-63.321c-2.698-1.495-2.702-5.377 0-6.874zm-.01 76.376 49.201-27.325 58.376 32.465c6.377 3.54 14.09 3.649 20.663 0l58.375-32.464 49.189 27.32c2.722 1.516 2.727 5.406.01 6.92l-113.834 63.285c-2.549 1.411-5.592 1.411-8.126.01l-113.841-63.29c-2.738-1.526-2.713-5.415-.013-6.921z"
                                    fill="#499a9a"
                                  />
                                </g>
                              </g>
                              <g id="Layer_1" />
                            </svg>
                          </div>
                          <h3>{t("SAP Application Management Services (AMS)")}</h3>
                          <ul>
                            <p>
                              {t("Ensure a stable, secure, and continuously optimised SAP landscape with outcome-led support, proactive monitoring, and ongoing enhancements.")}
                            </p>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-btn-08">
                      <div className="testimonial-button-prev">
                        <div className="animated-svg-link">
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
                        </div>
                      </div>
                      <span className="testspace" style={{ color: "#000" }}>
                        1/6
                      </span>
                      <div className="testimonial-button-next">
                        <div className="animated-svg-link">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Our Testimonial Section End */}


        {/* Hero Section Start*/}
        <div className=" buildsection mobilesap2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="hero-content buildsecont ">
                  <div className="section-title">
                    <div className="hero-video-content wow fadeInUp mt-4">
                      <h2
                        className="text-anime-style-2 text-center"
                        data-cursor="-opaque"
                      >
                        {t("The SAP Transformation Journey")}
                      </h2>
                      <p className="text-center">
                        {t("RheinBrücke supports enterprises across the full SAP lifecycle, from transformation planning to implementation to continuous optimisation.")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center width801">
              <div className="col-sm-4">
                <div className="dynamics-advantage-waber">
                  <img src="/new/g501.svg" alt="" />
                  <h3>{t("SAP S/4HANA Transformation")}</h3>
                  <p>{t("Accelerate ERP modernisation with SAP S/4HANA through flexible transformation pathways—greenfield, brownfield, or cloud with RISE and GROW—to drive real-time insights, operational efficiency, and scalable growth.")}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="dynamics-advantage-waber">
                  <img src="/new/ad2.svg" alt="" />
                  <h3>{t("SAP Cloud Applications")}</h3>
                  <p>{t("Transform HR, procurement, and expense management with SAP SuccessFactors, Ariba, and Concur, enabling integrated, scalable, and cloud-driven business operations.")}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="dynamics-advantage-waber">
                  <img src="/new/ad3.svg" alt="" />
                  <h3>{t("SAP BTP")}</h3>
                  <p>{t("Integrate SAP with your enterprise ecosystem and build scalable extensions on SAP BTP, enabling innovation while preserving a clean, stable core.")}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="dynamics-advantage-waber">
                  <img src="/new/ad4.svg" alt="" />
                  <h3>{t("SAP Analytics")}</h3>
                  <p>{t("Turn enterprise data into real-time, actionable insights with SAP Analytics Cloud and advanced reporting—enabling faster decisions and improved business performance.")}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="dynamics-advantage-waber">
                  <img src="/new/ad5.svg" alt="" />
                  <h3>{t("SAP Application Management Services (AMS)")}</h3>
                  <p>{t("Ensure a stable, secure, and continuously optimised SAP landscape with outcome-led support, proactive monitoring, and ongoing enhancements.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        <div className="sap-advantage-main-waber">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-6">
                <div className="sap-advantage-waber">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("SAP is More Than ERP…")}
                  </h2>
                  <p>
                    {t("SAP today goes beyond traditional ERP—it is a unified platform powering intelligent, connected, and data-driven enterprises:")}
                  </p>
                  <div className="advantage-sap">
                    <h6>
                      {t("Real-time decisions powered by embedded analytics")}
                    </h6>
                    <p>
                      {t("S/4HANA and SAP Analytics Cloud enable business users to make decisions with live data - not spreadsheets or monthly reports.")}
                    </p>
                  </div>
                  <div className="advantage-sap">
                    <h6>
                      {t("Continuous innovation through cloud updates")}
                    </h6>
                    <p>
                      {t("Public and private cloud editions deliver ongoing enhancements, AI capabilities, and new best practices.")}
                    </p>
                  </div>
                  <div className="advantage-sap">
                    <h6>
                      {t("End-to-end process clarity with Signavio")}
                    </h6>
                    <p>
                      {t("Organisations worldwide report significant improvements in process transparency, operational consistency, and cycle-time reduction")}
                    </p>
                  </div>
                  <div className="advantage-sap">
                    <h6>
                      {t("Connected ecosystems through SAP BTP")}
                    </h6>
                    <p>
                      {t("Integrations, extensions, and automations help SAP fit seamlessly into your broader digital landscape.")}
                    </p>
                  </div>
                  <div className="advantage-sap">
                    <h6>
                      {t("Radical simplification of IT operations")}
                    </h6>
                    <p>
                      {t("Cloud migrations reduce system complexity, improve resilience, and free teams to focus on value creation.")}
                    </p>
                  </div>
                  <p>
                    {t("This is the future of SAP - agile, modular, analytics-driven, and business-led.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sap-advantage-img">
            <img src="/new/sap-advantage.jpg" alt="" />
          </div>
        </div>
        {/* Our Testimonial Section Start */}
        <div className={`our-testimonial saptest pd30 ${language === 'German' ? 'germansapservice' : ''}`}>
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Our SAP Capabilities")}
                  </h2>
                  <h6 className="text-black mt15">
                    {t("Unlock business value through a comprehensive portfolio of SAP services and proven transformation methodologies.")}
                  </h6>
                  <p>
                    {t("From strategy to execution and continuous optimisation, we help organisations accelerate innovation, improve agility, and achieve measurable business outcomes across their SAP landscape.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-12">
                {/* Testimonial Slider Start */}
                <div className="sap-service enterslide">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {/* 1. SAP Signavio & Process Intelligence */}
                      <div className="swiper-slide">
                        <div className="sap-service-waber">
                          <h3>{t("SAP Signavio & Process Intelligence")}</h3>
                          <p>
                            {t("Transform the way your organisation understands and improves processes.")}
                          </p>
                          <h5>{t("We help you:")}</h5>
                          <ul>
                            <li>
                              {t("Map, analyse, and benchmark business processes")}
                            </li>
                            <li>
                              {t("Identify bottlenecks, inefficiencies, and compliance gaps")}
                            </li>
                            <li>
                              {t("Build future-state process models")}
                            </li>
                            <li>
                              {t("Drive harmonisation across global operations")}
                            </li>
                          </ul>
                          <p>
                            {t("Signavio brings clarity. We turn that clarity into action.")}
                          </p>
                        </div>
                      </div>

                      {/* 2. SAP EWM Implementation */}
                      <div className="swiper-slide">
                        <div className="sap-service-waber">
                          <h3>{t("SAP EWM Implementation")}</h3>
                          <p>
                            {t("We help organisations modernise warehouse operations using SAP Extended Warehouse Management (EWM) to improve inventory accuracy, throughput, and operational efficiency.")}
                          </p>
                          <h5>{t("Key capabilities:")}</h5>
                          <ul>
                            <li>
                              {t("SAP EWM embedded and decentralised implementations")}
                            </li>
                            <li>
                              {t("Warehouse process optimisation and automation")}
                            </li>
                            <li>
                              {t("Integration with S/4HANA, TM, and third-party systems")}
                            </li>
                            <li>
                              {t("RF, Fiori, and automation enablement")}
                            </li>
                          </ul>
                          <p>
                            {t("Real-time warehouse control with measurable gains in inventory accuracy and throughput.")}
                          </p>
                        </div>
                      </div>

                      {/* 3. SAP SuccessFactors Implementation */}
                      <div className="swiper-slide">
                        <div className="sap-service-waber">
                          <h3>{t("SAP SuccessFactors Implementation")}</h3>
                          <p>
                            {t("RheinBrücke helps organisations transform HR operations with SAP SuccessFactors, enabling improved employee experience and data-driven workforce management.")}
                          </p>
                          <h5>{t("Key capabilities:")}</h5>
                          <ul>
                            <li>
                              {t("Core HR, Talent, Learning, and Performance modules")}
                            </li>
                            <li>
                              {t("Global HR standardisation and localisation")}
                            </li>
                            <li>
                              {t("Integration with S/4HANA and third-party payroll systems")}
                            </li>
                            <li>
                              {t("Data migration and change management")}
                            </li>
                          </ul>
                          <p>
                            {t("SuccessFactors implemented with clean data, controlled change, and minimal disruption.")}
                          </p>
                        </div>
                      </div>

                      {/* 4. SAP Ariba Services */}
                      <div className="swiper-slide">
                        <div className="sap-service-waber">
                          <h3>{t("SAP Ariba Services")}</h3>
                          <p>
                            {t("We modernise procurement and supplier collaboration using SAP Ariba to deliver transparency, control, and cost efficiency.")}
                          </p>
                          <h5>{t("Key capabilities:")}</h5>
                          <ul>
                            <li>
                              {t("Ariba Buying, Invoicing, and Sourcing implementations")}
                            </li>
                            <li>
                              {t("Supplier onboarding and enablement")}
                            </li>
                            <li>
                              {t("Integration with SAP S/4HANA and ECC")}
                            </li>
                            <li>
                              {t("Spend visibility and compliance optimisation")}
                            </li>
                          </ul>
                          <p>
                            {t("Ariba embedded as a governed procurement platform—not another disconnected tool.")}
                          </p>
                        </div>
                      </div>

                      {/* 5. EDI & SAP CPI Integration Services */}
                      <div className="swiper-slide">
                        <div className="sap-service-waber">
                          <h3>{t("EDI & SAP CPI Integration Services")}</h3>
                          <p>
                            {t("We enable seamless system-to-system and business partner integrations using SAP Integration Suite (CPI) and EDI platforms.")}
                          </p>
                          <h5>{t("Key capabilities:")}</h5>
                          <ul>
                            <li>
                              {t("EDI integrations with customers, suppliers, and logistics partners")}
                            </li>
                            <li>
                              {t("SAP CPI-based cloud and hybrid integrations")}
                            </li>
                            <li>
                              {t("API management and message mapping")}
                            </li>
                            <li>
                              {t("Monitoring, error handling, and optimisation")}
                            </li>
                          </ul>
                          <p>
                            {t("Integrations designed for failure handling, visibility, and long-term stability.")}
                          </p>
                        </div>
                      </div>

                      {/* 6. Merlin Sourcing – SAP-Integrated Strategic Sourcing */}
                      <div className="swiper-slide">
                        <div className="sap-service-waber">
                          <h3>{t("Merlin Sourcing – SAP Integrated Strategic Sourcing")}</h3>
                          <p>
                            {t("Merlin Sourcing enables governed, SAP-integrated strategic sourcing, extending SAP procurement with structured sourcing, supplier collaboration, and decision control, without breaking clean-core principles.")}
                          </p>
                          <h5>{t("Key capabilities:")}</h5>
                          <ul>
                            <li>
                              {t("SAP-integrated sourcing solution aligned to S/4HANA and ECC")}
                            </li>
                            <li>
                              {t("Direct materials and BoM based sourcing solution")}
                            </li>
                            <li>
                              {t("Configurable for scale without customisation debt")}
                            </li>
                            <li>
                              {t("Delivered and supported by RheinBrücke’s supply chain consulting teams")}
                            </li>
                          </ul>
                          <p>
                            {t("SAP procurement investments extended into strategic sourcing without platform sprawl or governance loss.")}
                          </p>
                        </div>
                      </div>

                      {/* 7. Custom Development & Technical Services */}
                      <div className="swiper-slide">
                        <div className="sap-service-waber">
                          <h3>{t("Custom Development & Technical Services")}</h3>
                          <p>
                            {t("We design and develop SAP extensions that enhance business capabilities while preserving a clean core.")}
                          </p>
                          <h5>{t("Key capabilities:")}</h5>
                          <ul>
                            <li>
                              {t("ABAP and RAP-based developments")}
                            </li>
                            <li>
                              {t("SAP Fiori and UX enhancements")}
                            </li>
                            <li>
                              {t("Custom reports, interfaces, forms, and workflows")}
                            </li>
                            <li>
                              {t("Side-by-side extensions using SAP BTP")}
                            </li>
                          </ul>
                          <p>
                            {t("We build only what adds value and ensure everything stays upgrade-friendly.")}
                          </p>
                        </div>
                      </div>

                      {/* 8. Global Rollout Services */}
                      <div className="swiper-slide">
                        <div className="sap-service-waber">
                          <h3>{t("Implementation & Global Rollout Services")}</h3>
                          <p>
                            {t("RheinBrücke enables seamless SAP rollouts across geographies, ensuring standardisation while accommodating local regulatory and business requirements.")}
                          </p>
                          <h5>{t("Key capabilities:")}</h5>
                          <ul>
                            <li>
                              {t("Template-based global rollouts")}
                            </li>
                            <li>
                              {t("Localisation and compliance management")}
                            </li>
                            <li>
                              {t("Multi-country data and process harmonisation")}
                            </li>
                            <li>
                              {t("Central governance with regional flexibility")}
                            </li>
                          </ul>
                          <p>
                            {t("Consistent global execution with local compliance assured from day one.")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-btn sap-ser-1 rtyElement">
                      <div className="testimonial-button-prev">
                        <div className="animated-svg-link">
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
                        </div>
                      </div>
                      <span className="testspace" style={{ color: "#000" }}>
                        1/8
                      </span>
                      <div className="testimonial-button-next">
                        <div className="animated-svg-link">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Slider End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Testimonial Section End */}
        <section className={`mds-section capabilities sapcap pd50 ${language === 'German' ? 'germansap' : ''}`}>
          <div className="container">
            <div className="content width50">
              <div className="section-title ">
                <div className="hero-video-content1 wow fadeInUp mt-4">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {" "}
                    {t("Why RheinBrücke")}
                  </h2>
                  <p> {t("An SAP partner for modern enterprises.")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Testimonial Slider Start */}
            <div className="sap systemview">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap1.svg" alt="" />
                      {/* <h6> Dynamics 365 ERP & CRM Solutions</h6> */}
                      <p>
                        {t("Strong S/4HANA, ECC, RISE, BTP, Signavio & SAC expertise")}
                      </p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap2.svg" alt="" />
                      <p> {t("Proven migration frameworks and accelerators")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap3.svg" alt="" />
                      <p>
                        {t("Deep integration capability across ERP and non-ERP systems")}
                      </p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap4.svg" alt="" />
                      <p> {t("Agile delivery with predictable outcomes")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap5.svg" alt="" />
                      <p> {t("A global delivery model that balances cost and quality")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/new/ds2.svg" alt="" />
                      <p> {t("Long-term AMS+ to keep your SAP evolving")}</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-btn  rtyElement">
                  <div className="testimonial-button-prev">
                    <div className="animated-svg-link1 btn-style-3">
                      <span className="svg-container ">
                        <span className=" left">
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
                    </div>
                  </div>
                  <span className="testspace">1/6</span>
                  <div className="testimonial-button-next">
                    <div className="animated-svg-link1 btn-style-3">
                      <span className="svg-container ">
                        <span className=" left">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-slider1  mobile mobileview">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap1.svg" alt="" />
                      {/* <h6> Dynamics 365 ERP & CRM Solutions</h6> */}
                      <p> {t("Extensive global delivery experience in SAP")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap2.svg" alt="" />
                      <p>
                        {t("Proven expertise in S/4HANA Cloud, RISE with SAP, BTP, Signavio, and SAC")}
                      </p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap3.svg" alt="" />
                      <p> {t("Flexible delivery models tailored to business outcomes")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap4.svg" alt="" />
                      <p> {t("End-to-end SAP AMS, ABAP, and Basis services")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap5.svg" alt="" />
                      <p> {t("Focus on operational resilience and accelerated value")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                </div>
              </div>
              <div className="testimonial-btn ">
                <div className="testimonial-button-prev">
                  <div className="animated-svg-link1 btn-style-3">
                    <span className="svg-container">
                      <span className="left">
                        {/* Prev SVG */}
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
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="12.7992"
                            cy="1.6"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="22.4008"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="1.6"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="6.40078"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="11.1996"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="16.0004"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="19.1996"
                            cy="14.4"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="16.0004"
                            cy="17.6"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="12.7992"
                            cy="20.8"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="19.1996"
                            cy="8.00002"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
                {/* Slide counter */}
                <span className="testspace">3/3</span>
                <div className="testimonial-button-next">
                  <div className="animated-svg-link1 btn-style-3">
                    <span className="svg-container">
                      <span className="left">
                        {/* Next SVG */}
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
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="12.7992"
                            cy="1.6"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="22.4008"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="1.6"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="6.40078"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="11.1996"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="16.0004"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="19.1996"
                            cy="14.4"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="16.0004"
                            cy="17.6"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="12.7992"
                            cy="20.8"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="19.1996"
                            cy="8.00002"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Slider End */}
            <p className="mt-3">
              {" "}
              {t("We don’t just implement SAP - we help you run, optimise, and scale with it.")}
            </p>
          </div>
        </section>
        {/* Our Testimonial Section Start */}
        <div className="our-testimonial pd30">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-12">
                <div className="section-title text-center headingss">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Industries We Support")}
                  </h2>
                  <p> {t("Modern SAP solutions tailored for:")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-12">
                {/* Testimonial Slider Start */}
                <div className="industries enterintsec">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body in4">
                          <h3>
                            <span> {t("Manufacturing")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body in5">
                          <h3>
                            <span> {t("Automotive")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body in6">
                          <h3>
                            <span> {t("Engineering, Procurement & Construction")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body in2">
                          <h3>
                            <span> {t("Distribution & Retail")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body in1">
                          <h3>
                            <span> {t("Consumer Products")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body ein5">
                          <h3>
                            <span> {t("Energy & Utilities")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                    </div>
                  </div>
                  <div className="testimonial-btn9 ">
                    <div
                      className="testimonial-button-prev"
                      tabIndex={0}
                      role="button"
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-458e8c1080a2f710c9"
                    >
                      <div className="animated-svg-link">
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
                              ></circle>
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
                      </div>
                    </div>
                    <span className="testspace" style={{ color: "#000" }}>
                      1/8
                    </span>
                    <div
                      className="testimonial-button-next"
                      tabIndex={0}
                      role="button"
                      aria-label="Next slide"
                      aria-controls="swiper-wrapper-458e8c1080a2f710c9"
                    >
                      <div className="animated-svg-link">
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
                              ></circle>
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
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Slider End */}
              </div>
            </div>
          </div>
          <div className="container">
            <p className="mt-3 text-center">
              {t("Each industry has different priorities. We bring the right processes, accelerators, and domain expertise.")}
            </p>
          </div>
        </div>
        {/* Our Testimonial Section End */}




        
                {/* Hero Section Start*/}
                <div className=" bluebg brouchure">
                    <div className="container">
                        <div className="row section-row align-items-center builtsec">
                            <div className="col-sm-6">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        {t('Download Our Brochure')}
                                    </h2>
                                    <p>
                                        {t('Download Our Brochure now to know more about our SAP Solution!')}
                                    </p>

  	                                    <form onSubmit={handleSubmit} id="form1">
  	                                        {/* Hidden Fields for LeadSquared Tracking */}
  	                                        {/* <input type="hidden" name="Search" value={leadSquaredPageName} />
  	                                        <input type="hidden" name="lsqNotes" value="Selection: SAP Brochure Request | Message: Requested SAP Brochure download" />
  	                                        <input type="hidden" name="message" value="Requested SAP Brochure download" /> */}

                                             <input type="hidden" name="pageName" value="SAP Brochure Request" />
<input
  type="hidden"
  name="Page_URL"
  value={typeof window !== "undefined" ? window.location.href : ""}
  />
  	                                        <div className="w100">
	                                            <input
	                                                type="text"
	                                                className="form-control custom-form-control"
	                                                name="fullName"
                                                placeholder={t("Enter your full name")}
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required={true}
                                                disabled={status === 'loading'}
                                            />
                                        </div>
                                        <div className="w100">
                                            <div className="phone-input">
                                                <div className="country-code codeSelect" style={{ position: 'relative' }}>
                                                    <select
                                                        className="form-select"
                                                        name="countryCode"
                                                        value={formData.countryCode}
                                                        onChange={handleInputChange}
                                                        onFocus={() => setIsCountryCodeFocused(true)}
                                                        onBlur={() => setIsCountryCodeFocused(false)}
                                                        required={true}
                                                        disabled={status === 'loading'}
                                                        style={{
                                                            appearance: 'none',
                                                            paddingRight: '35px',
                                                            color: 'transparent'
                                                        }}
                                                    >
                                                        <option value="+93">Afghanistan (+93)</option>
                                                        <option value="+355">Albania (+355)</option>
                                                        <option value="+213">Algeria (+213)</option>
                                                        <option value="+376">Andorra (+376)</option>
                                                        <option value="+244">Angola (+244)</option>
                                                        <option value="+1-268">Antigua and Barbuda (+1-268)</option>
                                                        <option value="+54">Argentina (+54)</option>
                                                        <option value="+374">Armenia (+374)</option>
                                                        <option value="+61">Australia (+61)</option>
                                                        <option value="+43">Austria (+43)</option>
                                                        <option value="+994">Azerbaijan (+994)</option>
                                                        <option value="+1-242">Bahamas (+1-242)</option>
                                                        <option value="+973">Bahrain (+973)</option>
                                                        <option value="+880">Bangladesh (+880)</option>
                                                        <option value="+1-246">Barbados (+1-246)</option>
                                                        <option value="+375">Belarus (+375)</option>
                                                        <option value="+32">Belgium (+32)</option>
                                                        <option value="+501">Belize (+501)</option>
                                                        <option value="+229">Benin (+229)</option>
                                                        <option value="+1-441">Bermuda (+1-441)</option>
                                                        <option value="+975">Bhutan (+975)</option>
                                                        <option value="+591">Bolivia (+591)</option>
                                                        <option value="+387">Bosnia and Herzegovina (+387)</option>
                                                        <option value="+267">Botswana (+267)</option>
                                                        <option value="+55">Brazil (+55)</option>
                                                        <option value="+673">Brunei (+673)</option>
                                                        <option value="+359">Bulgaria (+359)</option>
                                                        <option value="+226">Burkina Faso (+226)</option>
                                                        <option value="+257">Burundi (+257)</option>
                                                        <option value="+855">Cambodia (+855)</option>
                                                        <option value="+237">Cameroon (+237)</option>
                                                        <option value="+1">Canada/USA (+1)</option>
                                                        <option value="+238">Cape Verde (+238)</option>
                                                        <option value="+1-345">Cayman Islands (+1-345)</option>
                                                        <option value="+236">Central African Republic (+236)</option>
                                                        <option value="+235">Chad (+235)</option>
                                                        <option value="+56">Chile (+56)</option>
                                                        <option value="+86">China (+86)</option>
                                                        <option value="+57">Colombia (+57)</option>
                                                        <option value="+269">Comoros (+269)</option>
                                                        <option value="+242">Congo (+242)</option>
                                                        <option value="+506">Costa Rica (+506)</option>
                                                        <option value="+385">Croatia (+385)</option>
                                                        <option value="+53">Cuba (+53)</option>
                                                        <option value="+357">Cyprus (+357)</option>
                                                        <option value="+420">Czech Republic (+420)</option>
                                                        <option value="+45">Denmark (+45)</option>
                                                        <option value="+253">Djibouti (+253)</option>
                                                        <option value="+1-767">Dominica (+1-767)</option>
                                                        <option value="+1-809">Dominican Republic (+1-809)</option>
                                                        <option value="+593">Ecuador (+593)</option>
                                                        <option value="+20">Egypt (+20)</option>
                                                        <option value="+503">El Salvador (+503)</option>
                                                        <option value="+240">Equatorial Guinea (+240)</option>
                                                        <option value="+291">Eritrea (+291)</option>
                                                        <option value="+372">Estonia (+372)</option>
                                                        <option value="+251">Ethiopia (+251)</option>
                                                        <option value="+500">Falkland Islands (+500)</option>
                                                        <option value="+298">Faroe Islands (+298)</option>
                                                        <option value="+679">Fiji (+679)</option>
                                                        <option value="+358">Finland (+358)</option>
                                                        <option value="+33">France (+33)</option>
                                                        <option value="+594">French Guiana (+594)</option>
                                                        <option value="+689">French Polynesia (+689)</option>
                                                        <option value="+241">Gabon (+241)</option>
                                                        <option value="+220">Gambia (+220)</option>
                                                        <option value="+995">Georgia (+995)</option>
                                                        <option value="+49">Germany (+49)</option>
                                                        <option value="+233">Ghana (+233)</option>
                                                        <option value="+350">Gibraltar (+350)</option>
                                                        <option value="+30">Greece (+30)</option>
                                                        <option value="+299">Greenland (+299)</option>
                                                        <option value="+1-473">Grenada (+1-473)</option>
                                                        <option value="+590">Guadeloupe (+590)</option>
                                                        <option value="+1-671">Guam (+1-671)</option>
                                                        <option value="+502">Guatemala (+502)</option>
                                                        <option value="+224">Guinea (+224)</option>
                                                        <option value="+245">Guinea-Bissau (+245)</option>
                                                        <option value="+592">Guyana (+592)</option>
                                                        <option value="+509">Haiti (+509)</option>
                                                        <option value="+504">Honduras (+504)</option>
                                                        <option value="+852">Hong Kong (+852)</option>
                                                        <option value="+36">Hungary (+36)</option>
                                                        <option value="+354">Iceland (+354)</option>
                                                        <option value="+91">India (+91)</option>
                                                        <option value="+62">Indonesia (+62)</option>
                                                        <option value="+98">Iran (+98)</option>
                                                        <option value="+964">Iraq (+964)</option>
                                                        <option value="+353">Ireland (+353)</option>
                                                        <option value="+972">Israel (+972)</option>
                                                        <option value="+39">Italy (+39)</option>
                                                        <option value="+1-876">Jamaica (+1-876)</option>
                                                        <option value="+81">Japan (+81)</option>
                                                        <option value="+962">Jordan (+962)</option>
                                                        <option value="+7">Kazakhstan (+7)</option>
                                                        <option value="+254">Kenya (+254)</option>
                                                        <option value="+686">Kiribati (+686)</option>
                                                        <option value="+965">Kuwait (+965)</option>
                                                        <option value="+996">Kyrgyzstan (+996)</option>
                                                        <option value="+856">Laos (+856)</option>
                                                        <option value="+371">Latvia (+371)</option>
                                                        <option value="+961">Lebanon (+961)</option>
                                                        <option value="+266">Lesotho (+266)</option>
                                                        <option value="+231">Liberia (+231)</option>
                                                        <option value="+218">Libya (+218)</option>
                                                        <option value="+423">Liechtenstein (+423)</option>
                                                        <option value="+370">Lithuania (+370)</option>
                                                        <option value="+352">Luxembourg (+352)</option>
                                                        <option value="+853">Macau (+853)</option>
                                                        <option value="+389">North Macedonia (+389)</option>
                                                        <option value="+261">Madagascar (+261)</option>
                                                        <option value="+265">Malawi (+265)</option>
                                                        <option value="+60">Malaysia (+60)</option>
                                                        <option value="+960">Maldives (+960)</option>
                                                        <option value="+223">Mali (+223)</option>
                                                        <option value="+356">Malta (+356)</option>
                                                        <option value="+692">Marshall Islands (+692)</option>
                                                        <option value="+596">Martinique (+596)</option>
                                                        <option value="+222">Mauritania (+222)</option>
                                                        <option value="+230">Mauritius (+230)</option>
                                                        <option value="+52">Mexico (+52)</option>
                                                        <option value="+691">Micronesia (+691)</option>
                                                        <option value="+373">Moldova (+373)</option>
                                                        <option value="+377">Monaco (+377)</option>
                                                        <option value="+976">Mongolia (+976)</option>
                                                        <option value="+382">Montenegro (+382)</option>
                                                        <option value="+1-664">Montserrat (+1-664)</option>
                                                        <option value="+212">Morocco (+212)</option>
                                                        <option value="+258">Mozambique (+258)</option>
                                                        <option value="+95">Myanmar (+95)</option>
                                                        <option value="+264">Namibia (+264)</option>
                                                        <option value="+674">Nauru (+674)</option>
                                                        <option value="+977">Nepal (+977)</option>
                                                        <option value="+31">Netherlands (+31)</option>
                                                        <option value="+687">New Caledonia (+687)</option>
                                                        <option value="+64">New Zealand (+64)</option>
                                                        <option value="+505">Nicaragua (+505)</option>
                                                        <option value="+227">Niger (+227)</option>
                                                        <option value="+234">Nigeria (+234)</option>
                                                        <option value="+850">North Korea (+850)</option>
                                                        <option value="+47">Norway (+47)</option>
                                                        <option value="+968">Oman (+968)</option>
                                                        <option value="+92">Pakistan (+92)</option>
                                                        <option value="+680">Palau (+680)</option>
                                                        <option value="+970">Palestine (+970)</option>
                                                        <option value="+507">Panama (+507)</option>
                                                        <option value="+675">Papua New Guinea (+675)</option>
                                                        <option value="+595">Paraguay (+595)</option>
                                                        <option value="+51">Peru (+51)</option>
                                                        <option value="+63">Philippines (+63)</option>
                                                        <option value="+48">Poland (+48)</option>
                                                        <option value="+351">Portugal (+351)</option>
                                                        <option value="+1-787">Puerto Rico (+1-787)</option>
                                                        <option value="+974">Qatar (+974)</option>
                                                        <option value="+262">Réunion (+262)</option>
                                                        <option value="+40">Romania (+40)</option>
                                                        <option value="+7">Russia (+7)</option>
                                                        <option value="+250">Rwanda (+250)</option>
                                                        <option value="+1-869">Saint Kitts and Nevis (+1-869)</option>
                                                        <option value="+1-758">Saint Lucia (+1-758)</option>
                                                        <option value="+1-784">Saint Vincent (+1-784)</option>
                                                        <option value="+685">Samoa (+685)</option>
                                                        <option value="+378">San Marino (+378)</option>
                                                        <option value="+239">São Tomé and Príncipe (+239)</option>
                                                        <option value="+966">Saudi Arabia (+966)</option>
                                                        <option value="+221">Senegal (+221)</option>
                                                        <option value="+381">Serbia (+381)</option>
                                                        <option value="+248">Seychelles (+248)</option>
                                                        <option value="+232">Sierra Leone (+232)</option>
                                                        <option value="+65">Singapore (+65)</option>
                                                        <option value="+421">Slovakia (+421)</option>
                                                        <option value="+386">Slovenia (+386)</option>
                                                        <option value="+677">Solomon Islands (+677)</option>
                                                        <option value="+252">Somalia (+252)</option>
                                                        <option value="+27">South Africa (+27)</option>
                                                        <option value="+82">South Korea (+82)</option>
                                                        <option value="+211">South Sudan (+211)</option>
                                                        <option value="+34">Spain (+34)</option>
                                                        <option value="+94">Sri Lanka (+94)</option>
                                                        <option value="+249">Sudan (+249)</option>
                                                        <option value="+597">Suriname (+597)</option>
                                                        <option value="+268">Eswatini (+268)</option>
                                                        <option value="+46">Sweden (+46)</option>
                                                        <option value="+41">Switzerland (+41)</option>
                                                        <option value="+963">Syria (+963)</option>
                                                        <option value="+886">Taiwan (+886)</option>
                                                        <option value="+992">Tajikistan (+992)</option>
                                                        <option value="+255">Tanzania (+255)</option>
                                                        <option value="+66">Thailand (+66)</option>
                                                        <option value="+228">Togo (+228)</option>
                                                        <option value="+676">Tonga (+676)</option>
                                                        <option value="+1-868">Trinidad and Tobago (+1-868)</option>
                                                        <option value="+216">Tunisia (+216)</option>
                                                        <option value="+90">Turkey (+90)</option>
                                                        <option value="+993">Turkmenistan (+993)</option>
                                                        <option value="+1-649">Turks and Caicos (+1-649)</option>
                                                        <option value="+688">Tuvalu (+688)</option>
                                                        <option value="+256">Uganda (+256)</option>
                                                        <option value="+380">Ukraine (+380)</option>
                                                        <option value="+971">United Arab Emirates (+971)</option>
                                                        <option value="+44">United Kingdom (+44)</option>
                                                        <option value="+1">United States (+1)</option>
                                                        <option value="+598">Uruguay (+598)</option>
                                                        <option value="+998">Uzbekistan (+998)</option>
                                                        <option value="+678">Vanuatu (+678)</option>
                                                        <option value="+379">Vatican City (+379)</option>
                                                        <option value="+58">Venezuela (+58)</option>
                                                        <option value="+84">Vietnam (+84)</option>
                                                        <option value="+1-284">British Virgin Islands (+1-284)</option>
                                                        <option value="+1-340">US Virgin Islands (+1-340)</option>
                                                        <option value="+681">Wallis and Futuna (+681)</option>
                                                        <option value="+967">Yemen (+967)</option>
                                                        <option value="+260">Zambia (+260)</option>
                                                        <option value="+263">Zimbabwe (+263)</option>
                                                    </select>
                                                    <span className="arrow">
                                                        <i className="fa fa-angle-down" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder={t("Enter your phone number")}
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    onKeyDown={(e) => {
                                                        // Prevent minus, plus, and 'e' keys (scientific notation)
                                                        if (e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E') {
                                                          e.preventDefault();
                                                        }
                                                      }}
                                                      min="0"
                                                    required={true}
                                                    disabled={status === 'loading'}
                                                />
                                            </div>
                                        </div>
                                        <div className="w100">
                                            <input
                                                type="email"
                                                className="form-control custom-form-control"
                                                name="email"
                                                placeholder={t("Enter your email address")}
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required={true}
                                                disabled={status === 'loading'}
                                            />
                                        </div>
                                        <div className="w100">
                                            <input
                                                type="text"
                                                className="form-control custom-form-control"
                                                name="companyName"
                                                placeholder={t("Enter your company name")}
                                                value={formData.companyName}
                                                onChange={handleInputChange}
                                                required={true}
                                                disabled={status === 'loading'}
                                            />
                                        </div>
                                        <div className="ser-btn mt-3">
                                            <a>
                                                <button
                                                    type="submit"
                                                    className="animated-svg-link"
                                                    disabled={status === 'loading'}
                                                    style={{
                                                        opacity: status === 'loading' ? 0.6 : 1,
                                                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                                                        background: 'transparent',
                                                        border: 'none',
                                                        width: '100%',
                                                        textAlign: 'left',
                                                        padding: 0
                                                    }}
                                                >
                                                    {status === 'loading' ? t('Submitting...') : t('Submit')}
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
                                                </button>
                                            </a>
                                        </div>
                                        {statusMessage && (
                                             <div
                                                 className={`mt-2 ${status === 'success' ? 'text-success' : status === 'error' ? 'text-danger' : 'text-info'}`}
                                                 style={{ fontSize: '14px', fontWeight: '500' }}
                                             >
                                                 {status === 'success' && '✅ '}
                                                 {status === 'error' && '❌ '}
                                                 {statusMessage}
                                             </div>
                                         )}
                                     </form>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="parentban mtt50">
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 886 754"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="442.75"
                                            cy="444.75"
                                            r={252}
                                            fill="url(#paint0_linear_1699_17987)"
                                        />
                                        <ellipse
                                            opacity="0.6"
                                            cx="442.75"
                                            cy="442.25"
                                            rx={295}
                                            ry="294.5"
                                            stroke="url(#paint1_linear_1699_17987)"
                                            strokeWidth="1.5"
                                        />
                                        <ellipse
                                            opacity="0.3"
                                            cx="442.75"
                                            cy="442.25"
                                            rx={345}
                                            ry="344.5"
                                            stroke="url(#paint2_linear_1699_17987)"
                                            strokeWidth="1.5"
                                        />
                                        <ellipse
                                            opacity="0.2"
                                            cx="442.75"
                                            cy="442.25"
                                            rx={392}
                                            ry="392.5"
                                            stroke="url(#paint3_linear_1699_17987)"
                                            strokeWidth="1.5"
                                        />
                                        <circle
                                            opacity="0.1"
                                            cx="442.75"
                                            cy="442.75"
                                            r={442}
                                            stroke="url(#paint4_linear_1699_17987)"
                                            strokeWidth="1.5"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_1699_17987"
                                                x1="442.75"
                                                y1="192.75"
                                                x2="442.75"
                                                y2="696.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#008080" />
                                                <stop offset="0.67478" stopColor="#082326" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint1_linear_1699_17987"
                                                x1="442.75"
                                                y1="147.75"
                                                x2="442.75"
                                                y2="736.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint2_linear_1699_17987"
                                                x1="442.75"
                                                y1="97.75"
                                                x2="442.75"
                                                y2="786.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint3_linear_1699_17987"
                                                x1="442.75"
                                                y1="49.75"
                                                x2="442.75"
                                                y2="834.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint4_linear_1699_17987"
                                                x1="442.75"
                                                y1="0.75"
                                                x2="442.75"
                                                y2="884.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <img src="/images/sapforrm.png" width={379} height={542} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section End*/}



  {/* Page Faqs Start */}
        <div className="page-faqs bggray pd60">
          <div className="container">
            <div className="row">
              <div className="col-sm-2" />
              <div className="col-lg-8">
                {/* Page FAQs Category Start */}
                <div className="page-faqs-catagery">
                  {/* FAQs section start */}
                  <div
                    className="our-faq-section page-faq-accordion"
                    id="general_information"
                  >
                    <div className="section-title text-center">
                      <h2 className="text-anime-style-2" data-cursor="-opaque">
                        {t("Wondering Why? We’re Here to Answer")}
                      </h2>
                    </div>
                    {/* FAQ Accordion Start */}
                    <div className="faq-accordion" id="accordion">
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp">
                        <h2 className="accordion-header" id="heading1">
                          <button
                            className="accordion-button collapsein"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse1"
                            aria-expanded="true"
                            aria-controls="collapse1"
                          >
                            {t("What SAP services does RheinBrücke provide?")} 
                          </button>
                        </h2>
                        <div
                          id="collapse1"
                          className="accordion-collapse collapse show"
                          aria-labelledby="heading1"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("RheinBrücke provides strategic SAP consulting, end-to-end implementation, system integration, and complex Cloud transformation and migration services. We also offer customization and support for SAP ECC as well as technical support for ABAP and BASIS. Our goal is to modernize your SAP ERP landscape and significantly improve operational efficiency and data integrity.")}  
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <h2 className="accordion-header" id="heading2">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse2"
                            aria-expanded="false"
                            aria-controls="collapse2"
                          >
                             {t("Do you specialise in particular SAP modules?")} 
                          </button>
                        </h2>
                        <div
                          id="collapse2"
                          className="accordion-collapse collapse "
                          aria-labelledby="heading2"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("Yes. RheinBrücke specializes in core SAP ERP solutions, with deep expertise in managing large-scale S/4HANA migrations and implementing SAP Business One tailored for mid-sized enterprises and global subsidiaries. We focus particularly on complex financials, Supply Chain Management (SCM), and logistics modules.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <h2 className="accordion-header" id="heading3">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse3"
                            aria-expanded="false"
                            aria-controls="collapse3"
                          >
                            {t("Can SAP systems integrate with other enterprise applications?")} 
                          </button>
                        </h2>
                        <div
                          id="collapse3"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading3"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("Absolutely. SAP systems are central to the enterprise ecosystem. We leverage modern API and middleware tools to ensure seamless integration with CRM, HR, Business Intelligence (BI), and critical third-party applications. Critically, we specialize in complex interoperability projects involving platforms like Epicor and Microsoft Dynamics 365.")} 
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <h2 className="accordion-header" id="heading4">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                           {t("Does RheinBrücke provide SAP support and AMS services?")} 
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading4"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("Yes. Our dedicated Application Management and Support (AMS) services provide proactive, SLA-based support to maintain system stability, manage regular version upgrades, and ensure continuous optimization of your SAP landscape. We offer flexible models, including 24/7 coverage for global and GCC operations.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                    </div>
                    {/* FAQ Accordion End */}
                  </div>
                  {/* FAQs section End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Faq End */}


        {/* Footer Start */}
        <footer className="main-footer pd0">
          {/* Footer Main Start */}
          <div className="footer-main">
            <div className="container">
              <div className="firstrow">
                <div className="row">
                  <div className="col-sm-8">
                    <h2> {t("Ready to Modernise with SAP?")}</h2>
                    <p>
                      {t("Talk to our SAP experts to see how we can help optimise your systems and drive business transformation.")}
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <div className="ser-btn text-right">
                      <a href="/contact-us" className="animated-svg-link">
                        {t("Contact us")}
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
                      </a>
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
  )
}

export default page
