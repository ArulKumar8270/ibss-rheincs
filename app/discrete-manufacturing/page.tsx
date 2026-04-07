"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import {useTranslation} from "../hooks/useTranslation";
import TestimonialandAward from "../Components/TestimonialandAward";
export default function AlMl() {
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
                            <div className="col-lg-5">
                                <div className="pe-main-hadding-waber">
                                    <h2 className="main-hadding-1 text-white" data-cursor="-opaque">
                                        {t("Discrete Manufacturing ERP & Digital Solutions")}
                                    </h2>
                                    <p>{t("Streamline production, control costs, and adapt quickly to changing customer demands.")}</p>
                                    <p>
                                        {t("A smart digital strategy helps discrete manufacturers anticipate market shifts, streamline production, and enhance decision-making.")}
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
                        <video src="/new/dm-1.mp4" autoPlay={true} muted={true} loop={true} playsInline={true} />
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
                                    {t("Challenges in Discrete Manufacturing")}
                                </h2>
                                <div className="d-g24 flex-wrap">
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="ERP BOM management icon" />
                                        <p>
                                            {t("Complex multi-level BOM and routing management increasing operational complexity")}
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="Discrete manufacturing challenges icon" />
                                        <p>
                                            {t("Slow response to engineering changes, customer customisation requests and urgent production orders")}
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="ERP for production planning and inventory management icon" />
                                        <p>
                                            {t("Disconnected production planning, procurement, and inventory management systems causing inefficiencies and delays")}
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="ERP for production planning and inventory management icon" />
                                        <p>
                                            {t("Inconsistent product quality, compliance, and traceability across production lines and supplier networks")}
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="ERP for shop-floor visibility icon" />
                                        <p>
                                            {t("Limited real-time shop-floor visibility into performance, resource utilisation, and production bottlenecks")}
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="ERP for delivery performance icon" />
                                        <p>
                                            {t("Manual, reactive issue resolution impacting on-time delivery performance and operational resilience")}
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="ERP for order management and MRP icon" />
                                        <p>
                                            {t("High-mix, low-volume manufacturing increasing scheduling challenges and MRP complexity and cost-to-serve")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="retail-chellange-bg-img">
                        <img src="/new/dm-07.jpeg" alt="" />
                    </div>
                </div>
                <div className="py-100 pe-matters-waber">
                    <div className="container">
                        <h2
                            className="main-hadding-1 them-dark-text-color text-center mb-40"
                            data-cursor="-opaque"
                        >
                            {t("Why It Matters")}
                        </h2>
                        <div className="pe-matters-content-waber">
                            <div className="pe-matters-content">
                                <img src="/new/mat-1.svg" alt="Manufacturing operational inefficiency icon" />
                                <p>
                                    {t("Inefficient operational control drives excess inventory, missed delivery deadlines, and cost overruns")}
                                </p>
                            </div>
                            <div className="pe-matters-content">
                                <img src="/new/met-2.svg" alt="Poor production planning and scheduling icon" />
                                <p>
                                    {t("Poor flexibility in production planning and scheduling restricts the ability to respond to market fluctuations or urgent demand")}
                                </p>
                            </div>
                            <div className="pe-matters-content">
                                <img src="/new/met-3.svg" alt="Disconnected manufacturing systems icon" />
                                <p>
                                    {t("Disconnected data systems weaken profitability analysis, resource planning, and production decision-making")}
                                </p>
                            </div>
                            <div className="pe-matters-content">
                                <img src="/new/met-4.svg" alt="Manufacturing quality failures icon" />
                                <p>
                                    {t("Quality lapses or traceability failures risk product recalls, customer penalties, and reputational damage")}
                                </p>
                            </div>
                            <div className="pe-matters-content">
                                <div className="matters-content-waber">
                                    <img src="/new/met-5.svg" alt="Low operational agility icon" />
                                    <p>
                                        {t("Lack of operational agility undermines competitiveness in highly customised, fast-changing markets")}
                                    </p>
                                </div>
                            </div>
                            {/*<div class="pe-matters-content">*/}
                            {/*<div class="matters-content-waber">*/}
                            {/*                         <img src="/new/mat-1.svg" alt=""> <!-- Changed image source for consistency */}
                            --&gt;
                            {/*                         <p>*/}
                            {/*                             Failure to balance cost, quality, and speed leads to compromised products and*/}
                            {/*                             missed market opportunities*/}
                            {/*                         </p>*/}
                            {/*                     </div>*/}
                            {/*</div>*/}
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
                                    {t("Deploy integrated production planning & scheduling, MRP and shop-floor control systems for real-time coordination")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Automate quality management, traceability, and compliance reporting across production and supplier networks")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Implement advanced BOM management frameworks supporting product variants, engineering changes, and order-specific configurations")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Integrate inventory management, procurement, and production scheduling for seamless operational control")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Enable real-time production monitoring dashboards and digital performance management tools")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Deliver scalable, offshore-supported operational modernisation programmes optimised for multi-site, multi-country operations")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="commen-help-bg-img">
                        <video src="/new/dm02.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} />
                    </div>
                </section>
                <div className="benifites-waber">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="benifet-content-waber">
                                    <div className="benifet-content benifet-content-2   dm-b-h">
                                        <div>
                                            <h4 className="benifit-title">{t("Tangible Outcomes")}</h4>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Faster production cycles and improved on-time delivery(OTD) rates through optimised scheduling and operational control")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Reduced operational costs and working capital requirements via better inventory, procurement, and production alignment")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Enhanced product quality, compliance, and traceability through integrated quality management and reporting frameworks")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Greater operational agility and responsiveness to urgent demand, engineering changes, and supply chain disruptions")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Improved resource utilisation and reduced downtime through real-time shop-floor performance insights")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Lower transformation risk and overhead through scalable delivery models driven by manufacturing industry experts")}
                                                </p>
                                            </div>
                                        </div>
                                        <img src="/new/pf-6.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="benifet-content-waber">
                                    <div className="benifet-content benifet-content-2 dm-b-h">
                                        <div>
                                            <h4 className="benifit-title">{t("Why Choose Us")}</h4>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Deep expertise in discrete manufacturing operational transformation across industrial equipment, automotive, machinery, and electronics sectors")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Proven capability delivering integrated production, quality, and supply chain modernisation programmes")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Commercially focused - committed to profitability protection, operational agility, and delivery performance")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Expert driven delivery capability ensuring scalable, high-quality, cost-effective project execution")}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <img src="/new/nodr.svg" style={{ width: "70%" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Start */}




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
                            {t("What is RheinBrücke’s expertise in discrete manufacturing?")} 
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
                              {t("We specialize in digital transformation for Make-to-Order (MTO), Make-to-Stock (MTS), and complex Mixed-Mode manufacturing environments. Our deep specialization lies in Epicor ERP implementation, which is natively designed to handle the variable processes, complex Bills of Material (BOMs), and detailed tracking required by discrete manufacturers. RheinBrücke specialises in Epicor ERP implementations for Make-to-Order (MTO), Make-to-Stock (MTS), and mixed-mode manufacturing.")}  
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
                             {t("How do your solutions drive production efficiency and agility?")}
                          </button>
                        </h2>
                        <div
                          id="collapse2"
                          className="accordion-collapse collapse "
                          aria-labelledby="heading2"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>{t("By establishing a digital thread between planning and execution. We achieve efficiency by:")} 
                            </p>
                            <p>{t("Advanced Scheduling: Automating production scheduling and sequencing based on capacity, material availability, and real-time shop floor feedback.")}</p>
                            <p>{t("Shop Floor Automation: Implementing Manufacturing Execution System (MES) capabilities for real-time monitoring, reducing manual data entry and improving data accuracy.")}</p>
                            <p>{t("Inventory Velocity: Optimizing inventory management to reduce buffer stock and enable Just-in-Time (JIT) material delivery to the work center. Scheduling, inventory, and shop floor operations are automated with real-time performance analytics.")}</p>
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
                            {t("Is integration with CAD/CAM or MES systems supported?")} 
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
                              {t("Absolutely. Full integration is non-negotiable for modern manufacturing. We create a cohesive digital ecosystem by integrating the ERP with:")} 
                            </p>
                            <p>
                              {t("CAD/CAM: Seamlessly transferring engineering data (e.g., drawings, Bill of Materials) directly into the ERP to eliminate manual data entry and accelerate the quote-to-cash cycle.")} 
                            </p>
                            <p>
                              {t("MES & IoT: Connecting the ERP's financial and planning data with the shop floor's real-time operational technology (OT) data, providing end-to-end traceability and machine performance metrics.Yes. ERP is integrated with engineering, quality, and production systems for a connected ecosystem.")} 
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
                          {t("What measurable, high-impact business outcomes are realized by manufacturers?")} 
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading4"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>{t("Our clients realize four primary benefits, driven by the tight integration of their ERP and shop floor data:")}</p>
                            <p>{t("Improved Time-to-Market: We achieve a substantial reduction in manufacturing lead times and accelerate the entire order-to-delivery cycle, allowing you to meet customer demands faster.")}</p>
                            <p>{t("Optimized Cost Control: By managing and monitoring all resources in real-time, we ensure optimized resource utilization (machines, labor, materials). This directly leads to lower operating costs and a significant reduction in production waste.")}</p>
                            <p>{t("Enhanced Quality and Compliance: We enable full lot and serial traceability from raw material receipt to finished product shipment. This capability is critical for seamless audit trails, quality control, and quickly resolving warranty claims.")}</p>
                            <p>{t("Maximized Uptime (OEE): Real-time data visibility across all equipment allows for the shift to predictive maintenance. This capability maximizes your Overall Equipment Effectiveness (OEE) and minimizes costly unplanned downtime.What benefits are realised by manufacturers?")}</p>
                            <p>{t("Lead times are reduced, traceability improves, and resource utilisation is optimised.")}</p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp">
                        <h2 className="accordion-header" id="heading5">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="true"
                            aria-controls="collapse5"
                          >
                            {t("What is MRP in ERP, and how does it integrate with the shop floor?")} 
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
                              {t("Material Requirements Planning (MRP) is a core ERP module that calculates material needs, schedules production, and ensures components are available on time. ERP extends this further by connecting planning directly with the shop floor, providing real-time visibility into work-in-progress, machine utilization, and production status to keep operations running efficiently.")}  
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp">
                        <h2 className="accordion-header" id="heading6">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="true"
                            aria-controls="collapse6"
                          >
                            {t("Can digital solutions reduce manufacturing costs?")} 
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading6"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("Yes. By improving planning, inventory management, and workflow efficiency, manufacturers can cut waste and lower production costs.")}  
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

<TestimonialandAward />

                <footer className="main-footer pd0">
                    {/* Footer Main Start */}
                    <div className="footer-main">
                        <div className="container">
                            <div className="firstrow">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 data-cursor="-opaque">
                                            {t("Ready to optimise your discrete manufacturing operations?")}
                                        </h2>
                                        <p>
                                            {t("Discover how our Digital and ERP-led discrete manufacturing solutions can improve production performance, quality, and operational resilience.")}
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