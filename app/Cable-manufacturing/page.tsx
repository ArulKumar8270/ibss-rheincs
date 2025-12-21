"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
export default function AlMl() {
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
                                        Cable Manufacturing
                                    </h2>
                                    <p>
                                        The cable manufacturing industry faces persistent challenges, from
                                        rising raw material costs and complex, multi-level production
                                        processes to stringent quality mandates and growing demands for
                                        customisation. Manufacturers must navigate operational
                                        inefficiencies, disconnected systems, and increasing pressure to
                                        reduce lead times while maintaining product quality and
                                        profitability.
                                    </p>
                                    <div className="ser-btn m-0">
                                        <Link href="/contact-us" className="animated-svg-link">
                                            Contact Us
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
                                    Challenges in Cable Manufacturing
                                </h2>
                                <div className="d-g24 flex-wrap">
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Complex, multi-stage production processes impacting efficiency
                                            and on-time delivery
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Manual reporting processes slowing financial closure and
                                            operational decision-making
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Rising material costs and fluctuating demand affecting inventory
                                            and cash flow management
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Difficulty in forecasting demand and planning capacity
                                            effectively
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Disconnected legacy systems limiting real-time operational
                                            visibility
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Limited data integration hindering collaboration between
                                            departments and external partners
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Traceability gaps and compliance risks across production and
                                            supply chain
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
                        Why It Matters
                    </h2>
                    <div className="pe-matters-content-waber">
                        <div className="pe-matters-content">
                            <img src="/new/g501.svg" alt="" />
                            <p>
                                Operational inefficiencies and poor system integration lead to higher
                                production costs and delayed deliveries
                            </p>
                        </div>
                        <div className="pe-matters-content">
                            <img src="/new/ad2.svg" alt="" />
                            <p>
                                Weak inventory and batch traceability increases quality risks and
                                regulatory non-compliance
                            </p>
                        </div>
                        <div className="pe-matters-content">
                            <img src="/new/ad3.svg" alt="" />
                            <p>
                                Manual, disconnected reporting delays decision-making and impairs
                                profitability control
                            </p>
                        </div>
                        <div className="pe-matters-content">
                            <img src="/new/ad4.svg" alt="" />
                            <p>
                                Ineffective demand forecasting impacts cash flow, capacity planning,
                                and customer satisfaction
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                <section className="py-100  pe-help-waber cable-help ">
                    <div className="container">
                        <h2 className="main-hadding-1 text-white  mb-40" data-cursor="-opaque">
                            How We Help
                        </h2>
                        <div className="pe-help-content-waber">
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Deploy modern ERP solutions tailored for cable manufacturing
                                    operations
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Automate forecasting, cash flow management, and month-end closure
                                    processes{" "}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Integrate production, inventory, quality, and finance functions into
                                    a single, connected platform
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Simplify third-party managed procurement and project operations
                                    within the ERP system{" "}
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Automate multi-level job orders, sub-assemblies, and material issues
                                    for streamlined production
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Migrate legacy data seamlessly using structured data migration tools
                                    and templates
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Enable barcode-driven batch tracking for end-to-end traceability
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Deliver offshore-enabled, cost-effective transformation programmes
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Provide centralised data access and real-time business insights
                                    through interactive dashboards
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
                                            <h4 className="benifit-title"> Tangible Outcomes</h4>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Improved production efficiency, inventory accuracy, and
                                                    on-time delivery rates
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Faster, data-led operational decision-making and financial
                                                    reporting{" "}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {" "}
                                                    Enhanced traceability and regulatory compliance through
                                                    batch tracking{" "}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {" "}
                                                    Increased profitability via dynamic forecasting and margin
                                                    control{" "}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {" "}
                                                    Stronger collaboration across production, procurement,
                                                    finance, and sales functions
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
                                                Global Best Practices We Apply
                                            </h4>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Automated job scheduling and production planning integrated
                                                    with real-time shop floor data
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    End-to-end traceability using barcode-driven batch
                                                    management{" "}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {" "}
                                                    Connected data ecosystems enabling operational agility and
                                                    faster decision cycles
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Industry-proven inventory, order, and cost control processes
                                                    tailored for cable manufacturers
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
                                            <h4 className="benifit-title">Why Choose Us</h4>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Deep domain expertise in cable manufacturing ERP
                                                    implementations
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Proven track record of modernising production and
                                                    operational systems for leading manufacturers{" "}
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {" "}
                                                    Focus on tangible business outcomes and operational value
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    {" "}
                                                    Offshore delivery model for scalable, efficient,
                                                    cost-effective programme execution
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
                {/* Footer Start */}
                <footer className="main-footer pd0">
                    {/* Footer Main Start */}
                    <div className="footer-main">
                        <div className="container">
                            <div className="firstrow">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 data-cursor="-opaque">
                                            Modernise Your Cable Manufacturing Operations
                                        </h2>
                                        <p>
                                            {" "}
                                            Let us future-proof your cable manufacturing business with
                                            connected, agile infrastructure, automated production workflows,
                                            and real-time operational insights.
                                        </p>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="ser-btn text-right">
                                            <Link href="/contact-us" className="animated-svg-link">
                                                Contact Us
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