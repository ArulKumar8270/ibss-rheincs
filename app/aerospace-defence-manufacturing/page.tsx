"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import {useTranslation} from "../hooks/useTranslation";
import TestimonialandAward from "../Components/TestimonialandAward";
export default function AerospaceDefenceManufacturing() {
  const { t, language } = useTranslation();
    return (
        <CommomLayout>
<>
  {/* Header Start */}
  {/*?php include "navbar.php" ?*/}
  {/* Header End */}
  <div className="main-baner-hight retail-baner ">
    <div className="container bg-video-waber-content ">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-lg-5 col-11">
          <div className="pe-main-hadding-waber">
            <h2 className="main-hadding-1 text-white" data-cursor="-opaque">
              {t("Enterprise ERP & Digital Transformation for Aerospace and Defence Manufacturing")}
            </h2>
            <p>
              {t("Enabling Precision, Accelerating Throughput and Ensuring CMMC Compliance")}
            </p>
            <p>
              {t("A smart digital strategy helps A&D manufacturers navigate record backlogs, secure multi-tier supply chains and meet rigorous global defence standards with absolute confidence.")}
            </p>
            <div className="ser-btn m-0">
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
    </div>
    <div className="">
      <video
        src="/videos/Interior-Design.mp4"
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
      />
    </div>
  </div>
  <div className="py-100 pe-chellange-waber">
    <div className="container">
      <div className="d-flex justify-content-lg-end">
        <div className="pe-chellange-content-waber f-g32">
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
                {t("Engineering change cycles take weeks when production, PLM and supply chain run on disconnected systems leading to costly floor-side rework")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Configuration variants and multi-level BOMs introduce structural complexity in BOM management that creates scheduling and cost control complexity at scale")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("AS9100 and CMMC compliance demands full traceability, yet most operations cannot audit end-to-end in real time")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Multi-tier supply chains with restricted suppliers and export controls are poorly visible beyond tier one")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Record programme backlogs are piling up because capacity constraints and data gaps block conversion to output")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Quality issues and traceability failures in flight-critical components carry severe contractual, legal and safety consequences")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Programme cost overruns accumulate silently when financial, production and engineering data are not unified")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="retail-chellange-bg-img">
      <img src="/new/int-0999.jpeg" alt="" />
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
          {t("Most A&D manufacturers lose programme margin not from poor strategy, but from disconnected operational data models")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad2.svg" alt="Real-time project managing and planning icon" />
        <p>
          {t("A single traceability gap can trigger audit failure, contract suspension or programme disqualification")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad4.svg" alt="Project management limitations icon" />
        <p>
          {t("Engineering changes that cannot reach the shop floor and suppliers within hours create costly rework and delays")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad3.svg" alt="Project contract management icon" />
        <p>
          {t("Without real-time supply chain visibility, critical material shortages in titanium or composites surface too late to recover")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ds5.svg" alt="Compliance readiness icon" />
        <p>
          {t("Winning new defence contracts increasingly requires demonstrable CMMC readiness, not just intention")}
        </p>
      </div>
      </div>
    </div>
  </div>
  <section className="py-100 pe-help-waber aerospace-help">
    <div className="container">
      <h2 className="main-hadding-1 text-white mb-40" data-cursor="-opaque">
        {t("How We Help")}
      </h2>
      <div className="pe-help-content-waber">
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Synchronise PLM, MRP and supplier schedules so engineering changes reach production and procurement simultaneously.")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Build end-to-end digital traceability from raw material receipt to finished component, audit-ready at any point in the programme")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Connect shopfloor execution to programme planning so cost, quality and schedule deviations surface in real time")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Integrate restricted and multi-tier supplier networks with procurement controls aligned to export, ESG and compliance requirements")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Consolidate programme financial, operational and quality data into a single performance view for leadership decision-making")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Deploy using a structured global deployment model that reduces transformation cost without compromising delivery rigour")}
          </p>
        </div>
      </div>
    </div>
    <div className="commen-help-bg-img">
      <video src="/new/int99.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} />
    </div>
  </section>
  <div className="benifites-waber">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 ind-b-h1">
              <div className="tangcontent">
                <h4 className="benifit-title">
                  {t("Why Choose Us")}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("We understand that A&D manufacturers have execution challenges, not strategic and we fix the operational data gaps that cause it")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Deep expertise across regulated, programme-driven environments including MRO, avionics and defence systems")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Compliance-first delivery model built around AS9100, CMMC and traceability requirements, not bolted on after")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Structured global delivery capability that makes enterprise-grade transformation commercially viable at any programme scale")}
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
                    {t("Aerospace structural and composite manufacturing")}
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
                    {t("Precision machining and advanced materials processing")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Maintenance, Repair, and Overhaul (MRO) operations & Sustainment")}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <img src="/new/nodr.svg" style={{ width: "70%" }} alt="" />
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
                    {t("Engineering change impact cycles reduced from weeks to days through synchronised PLM, MRP and supplier data")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Full material, process and component traceability across flight-critical and mission-critical parts, enabling 100% audit readiness throughout the programme lifecycle")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Improved on-time delivery through scheduling visibility that accounts for real supply chain and capacity constraints")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Audit-ready data architecture that reduces the operational burden of CMMC and AS9100 compliance activities")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Reduced programme cost overrun risk through unified financial, production and quality performance data")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Greater capacity to convert backlog into output by eliminating the data bottlenecks that slow production conversion")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Sustained programme performance from initial build through to end-of-life, with integrated lifecycle support maintaining cost, schedule and quality visibility across long-duration contracts")}
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

    )
}
