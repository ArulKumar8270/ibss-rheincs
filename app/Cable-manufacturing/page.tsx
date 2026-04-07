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
                                        {t("AI-ready ERP Cable Manufacturing Operations")}
                                    </h2>
                                    <p>{t("Solving Operational Complexity to Drive Scalable Growth for Wire rope and Cable industry")}</p>
                                    <p>
                                        {t("Overcome complex challenges from production to delivery. Modernize your cable manufacturing operations with greater visibility across procurement, production, inventory, and distribution.")}
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
                            src="/new/cable-hero.mp4"
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                        />
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
                                    {t("Challenges in Cable Manufacturing")}
                                </h2>
                                <div className="d-g24 flex-wrap">
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            {t("Complex, multi-stage production processes impacting efficiency and on-time delivery")}
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            {t("Manual reporting processes slowing financial closure and operational decision-making")}
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            {t("Rising material costs and fluctuating demand affecting inventory and cash flow management")}
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            {t("Difficulty in forecasting demand and planning capacity effectively")}
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            {t("Disconnected legacy systems limiting real-time operational visibility")}
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            {t("Limited data integration hindering collaboration between departments and external partners")}
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            {t("Traceability gaps and compliance risks across production and supply chain")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="retail-chellange-bg-img">
                        <img src="/new/cm-09.jpeg" alt="" />
                    </div>
                </div>
                <div className="container">
                <div className="py-100 pe-matters-waber">
                    <h2
                        className="main-hadding-1 them-dark-text-color text-center mb-40"
                        data-cursor="-opaque"
                    >
                        {t("Why it Matters for Cable Manufacturing")}
                    </h2>
                    <div className="pe-matters-content-waber">
                        <div className="pe-matters-content">
                            <img src="/new/g501.svg" alt="Operational risk and system challenges icon" />
                            <p>
                                {t("Operational inefficiencies and poor system integration increase production costs and delay delivery performance")}
                            </p>
                        </div>
                        <div className="pe-matters-content">
                            <img src="/new/ad2.svg" alt="Cloud systems and data handling icons" />
                            <p>
                                {t("Weak inventory and batch traceability increases quality risks and regulatory non-compliance")}
                            </p>
                        </div>
                        <div className="pe-matters-content">
                            <img src="/new/ad3.svg" alt="Improved operational workflows icon" />
                            <p>
                                {t("Manual, disconnected reporting delays decision-making and impairs control over profitability")}
                            </p>
                        </div>
                        <div className="pe-matters-content">
                            <img src="/new/ad4.svg" alt="Financial performance optimization icon" />
                            <p>
                                {t("Ineffective demand forecasting impacts cash flow stability, production planning, and overall customer satisfaction")}
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                <section className="py-100  pe-help-waber cable-help ">
                    <div className="container">
                        <h2 className="main-hadding-1 text-white  mb-40" data-cursor="-opaque">
                            {t("How We Help")}
                        </h2>
                        <div className="pe-help-content-waber">
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Deploy modern ERP solutions tailored for cable manufacturing operations, supply chain, and financial workflows")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Automate forecasting, cash flow management, and month-end closure processes")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Integrate production planning, inventory management, quality assurance, procurement, and finance into a single connected platform")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Simplify third-party managed procurement and project-based operations through structured ERP workflows")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Automate multi-level job orders, sub-assemblies, and material issues for streamlined production planning and control")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Migrate legacy operational and financial data using structured migration tools and standardized templates")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Enable barcode-driven batch tracking for end-to-end traceability")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Deliver cost-effective transformation programmes supporting scalable adoption")}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    {t("Provide centralised data access and real-time business insights through interactive dashboards")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="commen-help-bg-img">
                        <video
                            src="/new/cable-vv.mp4"
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsInline={true}
                        />
                    </div>
                </section>
                <div className="benifites-waber">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="benifet-content-waber">
                                    <div className="benifet-content benifet-content-1">
                                        <div>
                                            <h4 className="benifit-title"> {t("Tangible Outcomes")}</h4>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Improved production efficiency, inventory accuracy, and on-time delivery rates")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Faster, data-driven operational decision-making supported by real-time financial reporting visibility")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {" "}
                                                    {t("Enhanced traceability and regulatory compliance through batch-level tracking")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {" "}
                                                    {t("Increased profitability via dynamic forecasting and margin control")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {" "}
                                                    {t("Stronger collaboration across production, procurement, finance, and sales teams through shared operational data")}
                                                </p>
                                            </div>
                                        </div>
                                        <img src="/new/bf-1.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="benifet-content-waber">
                                    <div className="benifet-content benifet-content-1">
                                        <div>
                                            <h4 className="benifit-title">
                                                {t("Global Best Practices We Apply")}
                                            </h4>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Automated job scheduling and production planning integrated with real-time shop floor data")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("End-to-end traceability enabled through barcode-driven batch management processes")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {" "}
                                                    {t("Connected data ecosystems enabling operational agility and faster decision cycles")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Industry-proven inventory, order, and cost control processes tailored for cable manufacturers")}
                                                </p>
                                            </div>
                                        </div>
                                        <img src="/new/bf-2.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="benifet-content-waber">
                                    <div className="benifet-content  pm-flex">
                                        <div>
                                            <h4 className="benifit-title">
                                                {t("Why Choose Us")}
                                            </h4>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Deep domain expertise delivering ERP implementation and operational transformation programmes for cable manufacturers")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {t("Proven track record of modernising production and operational systems for leading manufacturers")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {" "}
                                                    {t("Focus on measurable business outcomes, operational efficiency, and long-term value creation")}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {" "}
                                                    {t("Offshore delivery model for scalable, efficient, cost-effective programme execution")}
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
                                            {t("Modernise Your Cable Manufacturing Operations")}
                                        </h2>
                                        <p>
                                            {" "}
                                            {t("Future-proof your cable manufacturing business with connected infrastructure, automated production workflows, and real-time operational insights that support smarter planning, improved quality control, and sustainable profitability.")}
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