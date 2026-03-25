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
  <div className="main-baner-hight retail-baner ">
    <div className="container bg-video-waber-content ">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-lg-5 col-11">
          <div className="pe-main-hadding-waber">
            <h2 className="main-hadding-1 text-white" data-cursor="-opaque">
              {t("ERP for Interior Design Companies ")}
            </h2>
            <p>
              {t("ERP and Digital Solutions for Interior Design and Fit-Out Businesses")}
            </p>
            <p>
              {t("Digital solutions powered by ERP help interior design and fit-out companies manage project planning, material procurement, supplier coordination and financial operations within a unified system.")}
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
  <div className="py-100 pe-chellange-waber ">
    <div className="container">
      <div className="d-flex justify-content-lg-end">
        <div className="pe-chellange-content-waber f-g32">
          <h2
            className="main-hadding-1 them-dark-text-color"
            data-cursor="-opaque"
          >
            {t("Challenges in Interior Design")}
          </h2>
          <div className="d-g24 flex-wrap">
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Complex, multi-phase interior design projects requiring detailed project planning, project scheduling, and resource management")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Delayed revenue recognition due to fragmented project financials data and poor cost tracking")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Heavy reliance on spreadsheets, manual processes and disconnected project management tools")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Inaccurate time tracking, expense management, and resource utilization impacting project delivery timelines")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Limited visibility into real-time project costs, margins, and site-level profitability")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Difficulty scaling business operations and managing multi-location projects")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Inefficient bid management, contract administration, and variation control affecting financial performance")}
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
          {t("Manual, disconnected project management processes lead to increased project delays, cost overruns, reduced productivity, and significant profit leakage")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad2.svg" alt="Real-time project managing and planning icon" />
        <p>
          {t("Poor visibility into real‑time project costs, schedules, and performance weakens financial control and slows data‑driven decision‑making")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad3.svg" alt="Project contract management icon" />
        <p>
          {t("Ineffective resource and contract management leads to operational inefficiencies")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad4.svg" alt="Project management limitations icon" />
        <p>
          {t("Lack of operational scalability restricts business growth, limits multi‑location expansion, and reduces the ability to standardize processes across teams")}
        </p>
      </div>
    </div>
    </div>
  </div>
  <section className="py-100  pe-help-waber int-help ">
    <div className="container">
      <h2 className="main-hadding-1 text-white  mb-40" data-cursor="-opaque">
        {t("How We Help")}
      </h2>
      <div className="pe-help-content-waber">
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Deploy modern ERP solutions tailored for interior design project management and project-based operations")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Provide real-time dashboards, KPIs, and operational performance trackers to enhance project visibility and support data-driven decision-making")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Integrate project management, procurement, scheduling, finance, and CRM workflows into a unified digital platform for seamless end‑to‑end project execution")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Capture time, expenses, and project costs accurately for reliable financial reporting")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Automate bid creation, contract management, and variation order tracking with complete project history, audit trails, and document control")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Automate revenue recognition processes in line with policy and compliance requirements")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Enable multi-level work breakdown structures for precise project cost tracking, budgeting, forecasting, and reporting")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Support cross-department collaboration and multi-location business operations through centralized data, standardized processes, and integrated communication")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            {t("Streamline resource planning, workforce allocation, and scheduling using embedded project operations and capacity management tools")}
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
            <div className="benifet-content benifet-content-2 ind-b-h">
              <div>
                <h4 className="benifit-title">
                  {t("Tangible Outcomes")}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Improved project delivery timelines, tighter cost control, and enhanced profitability tracking")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Enhanced operational visibility with real-time dashboards and powerful analytics")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Data-driven decision-making with real-time cost capture, budget monitoring, and faster financial closure")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Greater scalability and operational agility to manage multi-project, multi-location interior design operations")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Better client satisfaction through transparent project tracking, efficient collaboration, and controlled execution")}
                  </p>
                </div>
              </div>
              <img src="/new/pf-6.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 ind-b-h">
              <div>
                <h4 className="benifit-title">
                  {t("Global Best Practices We Apply")}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Integrated project lifecycle management with embedded financial controls")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Automated bid and contract management linked to real-time project status")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Standardised multi-level Work Breakdown Structures (WBS) with integrated resource planning and scheduling")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Connected data environments ensuring a single source of truth across projects, finance, and procurement")}
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
                  {t("Why Choose Us")}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Extensive experience delivering ERP solutions for interior design and project-based businesses")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Strong capability in transforming fragmented project management, procurement, and financial workflows into unified digital systems")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Delivery focused on measurable improvements in project cost control, margin visibility, and operational efficiency")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Global delivery capability leveraging specialised implementation teams")}
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
                {t("Modernise Your Interior Design Operations?")}
              </h2>
              <p>
                {t("Elevate your interior design operations with one intelligent system that unifies planning, execution, and financial control for consistent, accurate project delivery.")}
              </p>
            </div>
            <div className="col-sm-4">
              <div className="ser-btn text-right">
                <Link href="/contact-us" className="animated-svg-link">
                  {t("See How")}
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