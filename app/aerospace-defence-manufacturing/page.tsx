"use client";

import React, { useState } from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";
import TestimonialandAward from "../Components/TestimonialandAward";
import LeadSquaredInit from "../Components/LeadSquaredInit";

export default function AerospaceDefenceManufacturing() {
  const { t, language } = useTranslation();
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91",
    phone: "",
    email: "",
    companyName: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
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
      await Promise.resolve(saveLead());
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
          selection: "Aerospace Brochure Request",
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
          selection: "Aerospace Brochure Request",
        },
      });

      setStatus("success");
      setStatusMessage(t("Thank you! Your request has been submitted."));

      // LeadSquared capture
      await captureLeadSquared();

      // Auto download PDF
      const link = document.createElement("a");
      // link.href = "/images/sappdf.pdf";
      // link.download = "Aerospace_Brochure.pdf";
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
        <LeadSquaredInit />
        {/* Header Start */}
        {/*?php include "navbar.php" ?*/}
        {/* Header End */}

        <div className="hero brainsec enter retailsection corushrbanner1 systemview pdb01">
          {/* <div class="parent2 retailparent2">
    <video src="/videos/equity.mp4" autoplay muted loop playsinline class="bg-image1"></video>
      </div> */}
          <div className="container">
            <div className="row section-row1 align-items-center builtsec">
              <div className="col-sm-5">
                <div className="section-title coruslogo">
                  <h2
                    className="main-hadding-1 text-white"
                    data-cursor="-opaque"
                  >
                    {t(
                      "Enterprise ERP & Digital Transformation for Aerospace and Defence Manufacturing",
                    )}
                  </h2>
                  <p>
                    {t(
                      "Enabling Precision, Accelerating Throughput and Ensuring CMMC Compliance",
                    )}
                  </p>
                  <p>
                    {t(
                      "A smart digital strategy helps A&D manufacturers navigate record backlogs, secure multi-tier supply chains and meet rigorous global defence standards with absolute confidence.",
                    )}
                  </p>
                  <div className="ser-btn ">
                    <Link href="/contact-us" className="animated-svg-link">
                      {t("Contact Us")}
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
              <div className="col-sm-7"></div>
            </div>
          </div>
        </div>

        
        <div className="sap-advantage-main-waber">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-6">
                <div className="sap-advantage-waber f-g32">
                <h2
                  className="main-hadding-1 them-dark-text-color"
                  data-cursor="-opaque"
                >
                  {t("Challenges in Aerospace and Defence Manufacturing")}
                </h2>
                <div className="d-g24 flex-wrap">
                  <div className="challenge-point-waber">
                    <img src="/new/qs-2.svg" alt="" />
                    <p>
                      {t(
                        "Engineering change cycles take weeks when production, PLM and supply chain run on disconnected systems leading to costly floor-side rework",
                      )}
                    </p>
                  </div>
                  <div className="challenge-point-waber">
                    <img src="/new/qs-2.svg" alt="" />
                    <p>
                      {t(
                        "Configuration variants and multi-level BOMs introduce structural complexity in BOM management that creates scheduling and cost control complexity at scale",
                      )}
                    </p>
                  </div>
                  <div className="challenge-point-waber">
                    <img src="/new/qs-2.svg" alt="" />
                    <p>
                      {t(
                        "AS9100 and CMMC compliance demands full traceability, yet most operations cannot audit end-to-end in real time",
                      )}
                    </p>
                  </div>
                  <div className="challenge-point-waber">
                    <img src="/new/qs-2.svg" alt="" />
                    <p>
                      {t(
                        "Multi-tier supply chains with restricted suppliers and export controls are poorly visible beyond tier one",
                      )}
                    </p>
                  </div>
                  <div className="challenge-point-waber">
                    <img src="/new/qs-2.svg" alt="" />
                    <p>
                      {t(
                        "Record programme backlogs are piling up because capacity constraints and data gaps block conversion to output",
                      )}
                    </p>
                  </div>
                  <div className="challenge-point-waber">
                    <img src="/new/qs-2.svg" alt="" />
                    <p>
                      {t(
                        "Quality issues and traceability failures in flight-critical components carry severe contractual, legal and safety consequences",
                      )}
                    </p>
                  </div>
                  <div className="challenge-point-waber">
                    <img src="/new/qs-2.svg" alt="" />
                    <p>
                      {t(
                        "Programme cost overruns accumulate silently when financial, production and engineering data are not unified",
                      )}
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sap-advantage-img">
            <img src="/images/aerochallenge.jpg" alt="" />
          </div>
        </div>



        <div className="py-100 pe-matters-waber">
          <h2
            className="main-hadding-1 them-dark-text-color text-center mb-40"
            data-cursor="-opaque"
          >
            {t("Why It Matters")}
          </h2>
          <div className="container">
            <div className="pe-matters-content-waber">
              <div className="pe-matters-content">
                <img src="/new/g501.svg" alt="Project management icon" />
                <p>
                  {t(
                    "Most A&D manufacturers lose programme margin not from poor strategy, but from disconnected operational data models",
                  )}
                </p>
              </div>
              <div className="pe-matters-content">
                <img
                  src="/new/ad2.svg"
                  alt="Real-time project managing and planning icon"
                />
                <p>
                  {t(
                    "A single traceability gap can trigger audit failure, contract suspension or programme disqualification",
                  )}
                </p>
              </div>
              <div className="pe-matters-content">
                <img
                  src="/new/ad4.svg"
                  alt="Project management limitations icon"
                />
                <p>
                  {t(
                    "Engineering changes that cannot reach the shop floor and suppliers within hours create costly rework and delays",
                  )}
                </p>
              </div>
              <div className="pe-matters-content">
                <img
                  src="/new/ad3.svg"
                  alt="Project contract management icon"
                />
                <p>
                  {t(
                    "Without real-time supply chain visibility, critical material shortages in titanium or composites surface too late to recover",
                  )}
                </p>
              </div>
              <div className="pe-matters-content">
                <img src="/new/ds5.svg" alt="Compliance readiness icon" />
                <p>
                  {t(
                    "Winning new defence contracts increasingly requires demonstrable CMMC readiness, not just intention",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero brainsec enter  retailsection1 sm-img  erpexcel ">
          <div className="parent2 retailparent2 rechange-baner  mobilevideo">
            <img src="/images/aerohelp3.jpg" alt="" />
            {/* <video src="/videos/achitect.mp4" autoplay muted loop playsinline class="bg-image1"></video> */}
          </div>
          <div className="container">
            <h2
              className="main-hadding-1 text-white mb-40"
              data-cursor="-opaque"
            >
              {t("How We Help")}
            </h2>
            <div className="pe-help-content-waber">
              <div className="pe-help-content">
                <img src="/new/Headset.svg" alt="" />
                <p>
                  {t(
                    "Synchronise PLM, MRP and supplier schedules so engineering changes reach production and procurement simultaneously.",
                  )}
                </p>
              </div>
              <div className="pe-help-content">
                <img src="/new/Headset.svg" alt="" />
                <p>
                  {t(
                    "Build end-to-end digital traceability from raw material receipt to finished component, audit-ready at any point in the programme",
                  )}
                </p>
              </div>
              <div className="pe-help-content">
                <img src="/new/Headset.svg" alt="" />
                <p>
                  {t(
                    "Connect shopfloor execution to programme planning so cost, quality and schedule deviations surface in real time",
                  )}
                </p>
              </div>
              <div className="pe-help-content">
                <img src="/new/Headset.svg" alt="" />
                <p>
                  {t(
                    "Integrate restricted and multi-tier supplier networks with procurement controls aligned to export, ESG and compliance requirements",
                  )}
                </p>
              </div>
              <div className="pe-help-content">
                <img src="/new/Headset.svg" alt="" />
                <p>
                  {t(
                    "Consolidate programme financial, operational and quality data into a single performance view for leadership decision-making",
                  )}
                </p>
              </div>
              <div className="pe-help-content">
                <img src="/new/Headset.svg" alt="" />
                <p>
                  {t(
                    "Deploy using a structured global deployment model that reduces transformation cost without compromising delivery rigour",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="benifites-waber">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="benifet-content-waber">
                  <div className="benifet-content benifet-content-2 ind-b-h1">
                    <div className="tangcontent">
                      <h4 className="benifit-title">{t("Why Choose Us")}</h4>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "We understand that A&D manufacturers have execution challenges, not strategic and we fix the operational data gaps that cause it",
                          )}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Deep expertise across regulated, programme-driven environments including MRO, avionics and defence systems",
                          )}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Compliance-first delivery model built around AS9100, CMMC and traceability requirements, not bolted on after",
                          )}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Structured global delivery capability that makes enterprise-grade transformation commercially viable at any programme scale",
                          )}
                        </p>
                      </div>

                      <img src="/new/why-22.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="benifet-content-waber">
                  <div className="benifet-content benifet-content-2 ind-b-h1">
                    <div>
                      <h4 className="benifit-title">
                        {t("Aerospace and Defence Verticals We Support")}
                      </h4>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t("Aircraft and aerospace component manufacturing")}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t("Avionics and aerospace electronics production")}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Aerospace structural and composite manufacturing",
                          )}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t("Defence systems and equipment manufacturing")}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Precision machining and advanced materials processing",
                          )}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Maintenance, Repair, and Overhaul (MRO) operations & Sustainment",
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <img
                        src="/new/nodr.svg"
                        style={{ width: "70%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="benifet-content-waber">
                  <div className="benifet-content pm-flex">
                    <div>
                      <h4 className="benifit-title">
                        {t("Tangible Outcomes")}
                      </h4>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Engineering change impact cycles reduced from weeks to days through synchronised PLM, MRP and supplier data",
                          )}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Full material, process and component traceability across flight-critical and mission-critical parts, enabling 100% audit readiness throughout the programme lifecycle",
                          )}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Improved on-time delivery through scheduling visibility that accounts for real supply chain and capacity constraints",
                          )}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Audit-ready data architecture that reduces the operational burden of CMMC and AS9100 compliance activities",
                          )}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Reduced programme cost overrun risk through unified financial, production and quality performance data",
                          )}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Greater capacity to convert backlog into output by eliminating the data bottlenecks that slow production conversion",
                          )}
                        </p>
                      </div>
                      <div className="bf-content">
                        <img src="/new/lp.svg" alt="" />
                        <p>
                          {t(
                            "Sustained programme performance from initial build through to end-of-life, with integrated lifecycle support maintaining cost, schedule and quality visibility across long-duration contracts",
                          )}
                        </p>
                      </div>
                    </div>
                    <img src="/new/pf-6.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        
        {/* Hero Section Start*/}
        <div className=" bluebg brouchure">
          <div className="container">
            <div className="row section-row align-items-center builtsec">
              <div className="col-sm-6">
                <div className="section-title mb-20">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Talk to Our Experts")}
                  </h2>
                  {/* <p>
                    {t(
                      "Download Our Brochure now to know more about our Aerospace Solution!",
                    )}
                  </p> */}

                  <form onSubmit={handleSubmit} id="form1">
                    {/* Hidden Fields for LeadSquared Tracking */}
                    <input type="hidden" name="MXHOrgCode" value="17537" />
                    <input
                      type="hidden"
                      name="pageName"
                      value="Aerospace Brochure Request"
                    />
                    <input
                      type="hidden"
                      name="selection"
                      value="Aerospace Brochure Request"
                    />
                    <input
                      type="hidden"
                      name="lsqNotes"
                      value="Selection: Aerospace Brochure Request | Message: Requested Aerospace Brochure download"
                    />
                    <input
                      type="hidden"
                      name="Page_URL"
                      value={
                        typeof window !== "undefined"
                          ? window.location.href
                          : ""
                      }
                    />
                    <div className="w100">
                      <input
                        type="text"
                        className="form-control custom-form-control"
                        name="fullName"
                        id="fullName"
                        placeholder={t("Enter your full name")}
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required={true}
                        disabled={status === "loading"}
                      />
                    </div>
                    <div className="w100">
                      <div className="phone-input">
                        <div
                          className="country-code codeSelect"
                          style={{ position: "relative" }}
                        >
                          <select
                            className="form-select"
                            name="countryCode"
                            id="countryCode"
                            value={formData.countryCode}
                            onChange={handleInputChange}
                            onFocus={() => setIsCountryCodeFocused(true)}
                            onBlur={() => setIsCountryCodeFocused(false)}
                            required={true}
                            disabled={status === "loading"}
                            style={{
                              appearance: "none",
                              paddingRight: "35px",
                              color: "transparent",
                            }}
                          >
                            <option value="+93">Afghanistan (+93)</option>
                            <option value="+355">Albania (+355)</option>
                            <option value="+213">Algeria (+213)</option>
                            <option value="+376">Andorra (+376)</option>
                            <option value="+244">Angola (+244)</option>
                            <option value="+1-268">
                              Antigua and Barbuda (+1-268)
                            </option>
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
                            <option value="+387">
                              Bosnia and Herzegovina (+387)
                            </option>
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
                            <option value="+1-345">
                              Cayman Islands (+1-345)
                            </option>
                            <option value="+236">
                              Central African Republic (+236)
                            </option>
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
                            <option value="+1-809">
                              Dominican Republic (+1-809)
                            </option>
                            <option value="+593">Ecuador (+593)</option>
                            <option value="+20">Egypt (+20)</option>
                            <option value="+503">El Salvador (+503)</option>
                            <option value="+240">
                              Equatorial Guinea (+240)
                            </option>
                            <option value="+291">Eritrea (+291)</option>
                            <option value="+372">Estonia (+372)</option>
                            <option value="+251">Ethiopia (+251)</option>
                            <option value="+500">
                              Falkland Islands (+500)
                            </option>
                            <option value="+298">Faroe Islands (+298)</option>
                            <option value="+679">Fiji (+679)</option>
                            <option value="+358">Finland (+358)</option>
                            <option value="+33">France (+33)</option>
                            <option value="+594">French Guiana (+594)</option>
                            <option value="+689">
                              French Polynesia (+689)
                            </option>
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
                            <option value="+692">
                              Marshall Islands (+692)
                            </option>
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
                            <option value="+675">
                              Papua New Guinea (+675)
                            </option>
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
                            <option value="+1-869">
                              Saint Kitts and Nevis (+1-869)
                            </option>
                            <option value="+1-758">Saint Lucia (+1-758)</option>
                            <option value="+1-784">
                              Saint Vincent (+1-784)
                            </option>
                            <option value="+685">Samoa (+685)</option>
                            <option value="+378">San Marino (+378)</option>
                            <option value="+239">
                              São Tomé and Príncipe (+239)
                            </option>
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
                            <option value="+1-868">
                              Trinidad and Tobago (+1-868)
                            </option>
                            <option value="+216">Tunisia (+216)</option>
                            <option value="+90">Turkey (+90)</option>
                            <option value="+993">Turkmenistan (+993)</option>
                            <option value="+1-649">
                              Turks and Caicos (+1-649)
                            </option>
                            <option value="+688">Tuvalu (+688)</option>
                            <option value="+256">Uganda (+256)</option>
                            <option value="+380">Ukraine (+380)</option>
                            <option value="+971">
                              United Arab Emirates (+971)
                            </option>
                            <option value="+44">United Kingdom (+44)</option>
                            <option value="+1">United States (+1)</option>
                            <option value="+598">Uruguay (+598)</option>
                            <option value="+998">Uzbekistan (+998)</option>
                            <option value="+678">Vanuatu (+678)</option>
                            <option value="+379">Vatican City (+379)</option>
                            <option value="+58">Venezuela (+58)</option>
                            <option value="+84">Vietnam (+84)</option>
                            <option value="+1-284">
                              British Virgin Islands (+1-284)
                            </option>
                            <option value="+1-340">
                              US Virgin Islands (+1-340)
                            </option>
                            <option value="+681">
                              Wallis and Futuna (+681)
                            </option>
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
                          id="phone"
                          placeholder={t("Enter your phone number")}
                          value={formData.phone}
                          onChange={handleInputChange}
                          onKeyDown={(e) => {
                            // Prevent minus, plus, and 'e' keys (scientific notation)
                            if (
                              e.key === "-" ||
                              e.key === "+" ||
                              e.key === "e" ||
                              e.key === "E"
                            ) {
                              e.preventDefault();
                            }
                          }}
                          min="0"
                          required={true}
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>
                    <div className="w100">
                      <input
                        type="email"
                        className="form-control custom-form-control"
                        name="email"
                        id="email"
                        placeholder={t("Enter your email address")}
                        value={formData.email}
                        onChange={handleInputChange}
                        required={true}
                        disabled={status === "loading"}
                      />
                    </div>
                    <div className="w100">
                      <input
                        type="text"
                        className="form-control custom-form-control"
                        name="companyName"
                        id="companyName"
                        placeholder={t("Enter your company name")}
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required={true}
                        disabled={status === "loading"}
                      />
                    </div>
                    <div className="ser-btn mt-3">
                      <a>
                        <button
                          type="submit"
                          className="animated-svg-link"
                          disabled={status === "loading"}
                          style={{
                            opacity: status === "loading" ? 0.6 : 1,
                            cursor:
                              status === "loading" ? "not-allowed" : "pointer",
                            background: "transparent",
                            border: "none",
                            width: "100%",
                            textAlign: "left",
                            padding: 0,
                          }}
                        >
                          {status === "loading"
                            ? t("Submitting...")
                            : t("Submit")}
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
                        className={`mt-2 ${status === "success" ? "text-success" : status === "error" ? "text-danger" : "text-info"}`}
                        style={{ fontSize: "14px", fontWeight: "500" }}
                      >
                        {status === "success" && "✅ "}
                        {status === "error" && "❌ "}
                        {statusMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="parentban mtt501">
                  {/* <svg
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
                        <stop
                          offset="0.67478"
                          stopColor="#082326"
                          stopOpacity={0}
                        />
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
                        <stop
                          offset="0.74249"
                          stopColor="#499A9A"
                          stopOpacity={0}
                        />
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
                        <stop
                          offset="0.74249"
                          stopColor="#499A9A"
                          stopOpacity={0}
                        />
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
                        <stop
                          offset="0.74249"
                          stopColor="#499A9A"
                          stopOpacity={0}
                        />
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
                        <stop
                          offset="0.74249"
                          stopColor="#499A9A"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                  </svg> */}
                  <img
                    src="/images/aerohelp2.jpg"
                    width={379}
                    height={542}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}

        <TestimonialandAward />

        {/* Footer Start */}
        <footer className="main-footer pd0">
          {/* Footer Main Start */}
          <div className="footer-main">
            <div className="container">
              <div className="firstrow">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 data-cursor="-opaque">
                      {t("Ready to Transform Your A&D Operations?")}
                    </h2>
                    <p>
                      {t("Talk to our aerospace and defence experts today.")}
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <div className="ser-btn text-right">
                      <Link href="/contact-us" className="animated-svg-link">
                        {t("Contact Us")}
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
              </div>
              {/*?php include "footer.php" ?*/}
            </div>
          </div>
        </footer>
      </>
    </CommomLayout>
  );
}
