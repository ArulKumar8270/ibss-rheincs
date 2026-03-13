"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import {useTranslation} from "../hooks/useTranslation";
import TestimonialandAward from "../Components/TestimonialandAward";
export default function EnterpriseSolutions() {
  const { t, language } = useTranslation();
    return (

        <CommomLayout>
          <>
  {/* Header Start */}
  {/*?php include "navbar.php" ?*/}
  {/* Header End */}
  {/* <link rel="stylesheet" href="style3.css"> */}
  <div className="main-baner-hight retail-baner ">
    <div className="container bg-video-waber-content ">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-lg-5">
          <div className="pe-main-hadding-waber">
            <h2 className="main-hadding-1 text-white" data-cursor="-opaque">
              {t("Process Manufacturing")}
            </h2>
            <p>
              {t("Process manufacturing industries, including food, pharma, chemicals, oil, personal care, paints, plastics, and rubber, operate in highly regulated, complex, and cost-sensitive environments. Success demands operational agility, end-to-end traceability, and the ability to respond rapidly to shifting market, regulatory, and sustainability pressures.")}
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
      <video src="/new/pm.mp4" autoPlay={true} muted={true} loop={true} playsInline={true} />
    </div>
  </div>
  <div className="py-100 pe-chellange-waber ">
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="pe-chellange-content-waber f-g32">
          <h2
            className="main-hadding-1 them-dark-text-color"
            data-cursor="-opaque"
          >
            {t("Challenges in Process Manufacturing")}
          </h2>
          <div className="d-g241 flex-wrap1 processman row">
            <div className="col-sm-6">
              <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Increasing complexity across multi-step formulations, stringent regulations, and volatile input costs")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Transformation initiatives often too slow, theoretical, or cost-prohibitive")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Operational silos between R&D, production, quality, compliance, and logistics")}
              </p>
            </div>
            </div>
            <div className="col-sm-6">
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Rising ESG, traceability, and sustainability mandates, particularly in chemicals and oil sectors")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Limited real-time visibility into batch performance, yield, and cost-to-serve metrics")}
              </p>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div className="retail-chellange-bg-img">
      <img src="/new/pm01.jpeg" alt="" />
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
        <img src="/new/g501.svg" alt="" />
        <p>
          {t("Delayed time-to-market affects profitability")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad2.svg" alt="" />
        <p>
          {t("Compliance breaches risk costly recalls and potential lawsuits, especially in pharma, food, and oil processing")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad3.svg" alt="" />
        <p>
          {t("Inefficient operations squeeze margins that are already low in this sector")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad4.svg" alt="" />
        <p>
          {t("Failure to leverage data for agile decision-making weakens competitiveness across regulated markets")}
        </p>
      </div>
    </div>
    </div>
  </div>
  <section className="py-100  pe-help-waber ">
    <div className="container">
      <h2 className="main-hadding-1 text-white  mb-40" data-cursor="-opaque">
        {t("How We Help")}
      </h2>
      <div className="pe-help-content-waber">
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Deploy agile, data-driven operating models")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Implement ESG-aligned traceability and compliance reporting ")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Digitize QA/QC processes, batch tracking, and formula control for improved traceability and regulatory compliance")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Use intelligent data structures and automation to optimize yield, waste reduction, and cost control without global consultancy overhead")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Integrate MES and ERP systems to enable seamless production planning, inventory control, and shop-floor monitoring")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Build scalable, offshore-led digital infrastructure for operational consistency and rapid ROI")}
          </p>
        </div>
      </div>
    </div>
    <div className="commen-help-bg-img">
      <video src="/new/pm-02.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} />
    </div>
  </section>
  <div className="benifites-waber">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 pm-b-h1">
              <div className="benifithght">
                <h4 className="benifit-title">
                  {t("Tangible Outcomes")}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Faster product development cycles and reduced time-to-market")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Improved yield, cost control, and reduced waste through real-time analytics")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("End-to-end regulatory compliance and automated traceability")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Scalable digital operating models delivering measurable, sustainable ROI")}
                  </p>
                </div>
              </div>
              <div className="text-center">
              <img src="/new/pf-6.svg" alt="" />
            </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 pm-b-h1">
              <div className="benifithght">
                <h4 className="benifit-title">
                  {t("Global Industry Best Practices We Apply")}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("L’Oréal and Unilever use AI-driven R&D and lean digital PLM to cut time-to-market by over 40% - we apply the same principles for mid-tier personal care and contract manufacturers")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("AkzoNobel’s shift to predictive maintenance and advanced demand sensing guides us on how to optimize coatings and chemical operations for our clients")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Data-first operating models from Covestro and Dow inspire our approach to digitizing production, automating QA, and integrating real-time inventory in plastics and rubber manufacturing")}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <img src="/new/nodr.svg"  alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="benifet-content-waber">
            <div className="benifet-content pm-flex">
              <div>
                <h4 className="benifit-title">
                  {t("Why Choose Us")}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Deep, cross-sector transformation expertise covering food, pharma, chemicals, oil, personal care, paints, plastics, and rubber")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Offshore delivery model ensuring high-quality, cost-effective, scalable execution")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Commercially focused on operational outcomes, not endless diagnostics")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Proven ability to deliver rapid, scalable digital transformation programs designed for operational realities")}
                  </p>
                </div>
              </div>
              <img src="/new/why-22.svg" alt="" />
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
                  {t("Ready to future-proof your process manufacturing operations?")}
              </h2>
              <p>
                {t("Contact us today to learn how we can help optimize your plant, processes, and profitability with data-driven, scalable solutions.")}
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