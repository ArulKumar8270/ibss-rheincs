"use client";
import React from 'react'
import CommomLayout from '../Components/CommomLayout'
import Link from "next/link";
import {useTranslation} from "../hooks/useTranslation";
import TestimonialandAward from '../Components/TestimonialandAward';
const page = () => {
  const { t, language } = useTranslation();
    return (
        <CommomLayout>
         <>
  {/* Header Start */}
  {/*?php include "navbar.php" ?*/}
  {/* Header End */}
  <div className="main-baner-hight sup-1 retail-baner ">
    <div className="container bg-video-waber-content ">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-lg-5">
          <div className="pe-main-hadding-waber">
            <h2 className="main-hadding-1 text-white" data-cursor="-opaque">
              {t("ERP & Supply Chain Solutions for Distribution Businesses")}
            </h2>
            <p>{t("Improve inventory visibility, demand forecasting and deploy warehouse management solutions")}</p>
            <p>
              {t("Distribution businesses face constant pressure from fragmented systems, unpredictable demand and rising costs. Supply chain visibility and the right ERP foundation are what keep margins intact. RheinBrücke helps distributors modernise inventory management, warehouse operations and order fulfilment through integrated ERP solutions built for distribution.")}
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
      <video src="/new/sp-08.mp4" autoPlay={true} muted={true} loop={true} playsInline={true} />
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
            {t("Challenges in Distribution & Supply Chain")}
          </h2>
          <div className="d-g24 flex-wrap">
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Unpredictable demand, supply chain disruptions, and market volatility affecting inventory, delivery and customer service.")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Manual, reactive inventory planning and replenishment processes leading to overstocking or stockouts")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Inventory imbalances, stockouts, and excess inventory increase carrying costs and working capital lock-up")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Inefficient supplier, logistics partner, and customer collaboration leads to communication gaps and delayed shipments")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Disconnected ERP, warehouse management (WMS), transportation management (TMS), and order management systems create data slower decision-making")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Rising transportation and last-mile logistics costs continue to pressure margins")}
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                {t("Limited supply chain visibility across orders, shipments, suppliers, stock, status and warehouses")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="retail-chellange-bg-img">
      <img src="/new/sp-08.jpeg" alt="" />
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
          {t("Poor inventory and order visibility leads to missed service level agreements (SLAs), penalties, and lost business")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad2.svg" alt="" />
        <p>
          {t("Inefficient operations increase carrying costs, working capital exposure, and operational waste")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad3.svg" alt="" />
        <p>
          {t("Slow response to disruptions weakens customer trust, competitiveness, and profitability")}
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad4.svg" alt="" />
        <p>
          {t("Disconnected systems limit forecast accuracy, fulfilment agility, and operational control")}
        </p>
      </div>
    </div>
    </div>
  </div>
  <section className="py-100  pe-help-waber sup-pre ">
    <div className="container">
      <h2 className="main-hadding-1 text-white  mb-40" data-cursor="-opaque">
        {t("How We Help")}
      </h2>
      <div className="pe-help-content-waber">
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="Inventory management for distribution business icon" />
          <p>
            {t("Optimise inventory management with AI-driven demand forecasting, predictive analytics, automated replenishment")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="Stock delivery and tracking icon" />
          <p>
            {t("Deploy real-time stock, order, and delivery tracking solutions to improve fulfilment performance and SLA adherence")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="ERP integration for warehouse and order management icon" />
          <p>
            {t("Integrate ERP, warehouse, transport, and order management systems for seamless, real-time operational visibility")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="Customer collaboration for supply chain and distribution ERP icon" />
          <p>
            {t("Improve supplier, partner, and customer collaboration, reduce manual dependencies")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="Automated workflow for logistics icon" />
          <p>
            {t("Automate business processes with intelligent workflow for order management, dispatch, and logistics coordination and seamless barcode and QR code integration.")}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="Inventory order management dashboard" />
          <p>
            {t("Gain end-to-end supply chain visibility with centralised dashboards for inventory, orders, warehouse operations, shipments, and supplier performance.")}
          </p>
        </div>
      </div>
    </div>
    <div className="commen-help-bg-img">
      <video src="/new/sp008.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} />
    </div>
  </section>
  <div className="benifites-waber">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 sc-b-h1">
              <div className="benifithght">
                <h4 className="benifit-title"> {t("Tangible Outcomes")}</h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Improved inventory turnover and stock accuracy across warehouses and delivery points")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Deliver better customer experiences with greater order visibility, faster fulfilment, and more reliable deliveries.")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Lower carrying costs, less wastage, and fewer stockouts through smarter, data-led demand planning")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Greater operational agility and resilience in managing supply disruptions and volatile demand")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t("Higher productivity and reduced operational costs through automation and process optimisation")}
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
            <div className="benifet-content benifet-content-2 sc-b-h">
              <div className="benifithght">
                <h4 className="benifit-title"> {t("Why Choose Us")}</h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Proven, digital transformation expertise across distribution, supply chain, logistics, and fulfilment operations")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t("Proven capability in integrating enterprise platforms, data, and business processes to enable connected, intelligent operations.")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t("Experienced in deploying integrated, real-time supply chain platforms and operational control systems")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t("Global delivery model combining domain expertise, scalable execution, and cost-efficient implementation without compromising quality.")}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <img src="/new/nodr.svg"  alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TestimonialandAward />

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
                            {t("How does RheinBrücke empower distributors and optimize the supply chain?")}
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
                              {t("We implement end-to-end ERP and digital solutions to create a single, unified system for modern, agile distribution. Our focus areas are:")}
                            </p>
                            <ul>
                              <li>{t("Demand-Driven Planning: Leveraging predictive analytics for highly accurate demand forecasting to align supply and sales.")}</li>
                              <li>{t("Inventory Optimization: Implementing real-time controls to maintain optimal stock levels, drastically reducing both stock-outs and carrying costs.")}</li>
                              <li>{t("Logistics & Fulfilment Orchestration: Streamlining warehouse operations and improving delivery accuracy and speed.")}</li>
                            </ul>
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
                            {t("Which key technology platforms are deployed to support complex distribution processes?")}
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
                              {t("We utilize a best-in-class, integrated technology stack anchored by leading enterprise systems:")}
                            </p>
                            <ul>
                              <li>{t("Core ERP: Epicor ERP, SAP, and Microsoft Dynamics 365 provide the financial, procurement, and inventory backbone.")}</li>
                              <li>{t("Digital Commerce & Order Management: Solutions like Fluent Commerce for flexible, omnichannel order fulfilment and logistics orchestration.")}</li>
                              <li>{t("Intelligence Layer: Advanced analytics dashboards and Business Intelligence (BI) platforms for real-time operational insights.")}</li>
                            </ul>
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
                            {t("What specific Supply Chain Analytics and intelligence capabilities are offered?")}
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
                              {t("We provide a strategic intelligence layer for proactive decision-making and risk mitigation:")}
                            </p>
                            <ul>
                              <li>{t("Predictive Forecasting: AI and BI-powered tools for high-accuracy sales and demand forecasting that adapts to market volatility.")}</li>
                              <li>{t("Vendor Performance Management: Automated evaluation of supplier quality, lead times, and compliance to inform strategic sourcing.")}</li>
                              <li>{t("Risk and Resiliency Management: Tools to identify potential disruptions (e.g., transport delays, capacity issues) and model \"what-if\" scenarios before they impact the bottom line.")}</li>
                            </ul>
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
                            {t("What measurable outcomes can distributors expect?")}
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
                              {t("Delivery accuracy improves, costs are reduced, and real-time supply chain visibility is achieved.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        <h2 className="accordion-header" id="heading5">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            {t("How does ERP improve supply chain visibility for distributors?")}
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading5"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("ERP consolidates data from warehousing, transport, and order management systems into a single platform, so distributors can track inventory, orders, and shipments in real time instead of relying on disconnected spreadsheets and siloed tools.")}
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
              <h2 data-cursor="-opaque">
                {t("Turn Supply Chain Complexity Into Your Competitive Edge")}
              </h2>
              <p>
                {t("Contact us today to discover how we can help optimise your warehousing, inventory, and order management for a more resilient, agile business.")}  
              </p>
              {/*<p>Talk to our enterprise solutions experts today.</p>*/}
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

export default page
