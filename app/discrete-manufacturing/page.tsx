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
                                        Discrete Manufacturing
                                    </h2>
                                    <p>
                                        Discrete manufacturers operate in highly competitive markets where
                                        precision, operational efficiency, and supply chain agility
                                        directly impact profitability and customer loyalty. Characterised
                                        by assembly-based, unit-specific production models, discrete
                                        manufacturers must manage complex Bills of Materials (BOMs),
                                        frequent product variations, and dynamic customer demands while
                                        controlling costs and lead times.
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
                                    Challenges in Discrete Manufacturing
                                </h2>
                                <div className="d-g24 flex-wrap">
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Complex multi-level BOM and routing management increasing
                                            operational complexity
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Slow responsiveness to engineering changes, customer
                                            customisation, and urgent orders
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Disconnected production planning, procurement, and inventory
                                            systems causing inefficiencies and delays
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Inconsistent product quality and traceability across production
                                            lines and suppliers
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Limited real-time visibility into shop-floor performance,
                                            resource utilisation, and production bottlenecks
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            Manual, reactive issue management impacting delivery performance
                                            and operational resilience
                                        </p>
                                    </div>
                                    <div className="challenge-point-waber">
                                        <img src="/new/qs-2.svg" alt="" />
                                        <p>
                                            High mix, low-volume orders increasing scheduling complexity and
                                            cost-to-serve
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
                            Why It Matters
                        </h2>
                        <div className="pe-matters-content-waber">
                            <div className="pe-matters-content">
                                <img src="/new/mat-1.svg" alt="" />
                                <p>
                                    Inefficient operational control drives excess inventory, missed
                                    delivery deadlines, and cost overruns
                                </p>
                            </div>
                            <div className="pe-matters-content">
                                <img src="/new/met-2.svg" alt="" />
                                <p>
                                    Poor scheduling flexibility restricts the ability to respond to
                                    market fluctuations or urgent demand
                                </p>
                            </div>
                            <div className="pe-matters-content">
                                <img src="/new/met-3.svg" alt="" />
                                <p>
                                    Disconnected data systems weaken profitability analysis, resource
                                    planning, and production decision-making
                                </p>
                            </div>
                            <div className="pe-matters-content">
                                <img src="/new/met-4.svg" alt="" />
                                <p>
                                    Quality lapses or traceability failures risk product recalls,
                                    customer penalties, and reputational damage
                                </p>
                            </div>
                            <div className="pe-matters-content">
                                <div className="matters-content-waber">
                                    <img src="/new/met-5.svg" alt="" />
                                    <p>
                                        Lack of operational agility undermines competitiveness in highly
                                        customised, fast-changing markets
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
                            How We Help
                        </h2>
                        <div className="pe-help-content-waber">
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Deploy integrated production planning, scheduling, and shop-floor
                                    control systems for real-time coordination
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Automate quality management, traceability, and compliance reporting
                                    across production and supplier networks
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Implement advanced BOM management frameworks supporting product
                                    variants, engineering changes, and order-specific configurations
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Integrate inventory management, procurement, and production
                                    scheduling for seamless operational control
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Enable real-time production monitoring dashboards and digital
                                    performance management tools
                                </p>
                            </div>
                            <div className="pe-help-content">
                                <img src="/new/Headset.svg" alt="" />
                                <p>
                                    Deliver scalable, offshore-supported operational modernisation
                                    programmes optimised for multi-site, multi-country operations
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
                                            <h4 className="benifit-title">Tangible Outcomes</h4>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Faster production cycles and improved on-time delivery rates
                                                    through optimised scheduling and operational control
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Reduced operational costs and working capital requirements
                                                    via better inventory, procurement, and production alignment
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Enhanced product quality and traceability through integrated
                                                    quality management and reporting frameworks
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Greater operational agility and responsiveness to urgent
                                                    demand, engineering changes, and supply chain disruptions
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Improved resource utilisation and downtime reduction through
                                                    real-time shop-floor performance insights
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Lower operational overhead and accelerated transformation
                                                    delivery via scalable, offshore-supported models
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
                                            <h4 className="benifit-title">Why Choose Us</h4>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Deep expertise in discrete manufacturing operational
                                                    transformation across industrial, automotive, machinery, and
                                                    electronics sectors
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Proven capability delivering integrated production, quality,
                                                    and supply chain modernisation programmes
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Commercially focused — committed to profitability
                                                    protection, operational agility, and delivery performance
                                                </p>
                                            </div>
                                            <div className="bf-content">
                                                <img src="/new/lp.svg" alt="" />
                                                <p>
                                                    Offshore-enabled delivery capability ensuring scalable,
                                                    high-quality, cost-effective project execution
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
                <footer className="main-footer pd0">
                    {/* Footer Main Start */}
                    <div className="footer-main">
                        <div className="container">
                            <div className="firstrow">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2 data-cursor="-opaque">
                                            Ready to optimise your discrete manufacturing operations?
                                        </h2>
                                        <p>
                                            Contact us today to discover how we can help improve production
                                            performance, quality, and operational resilience.
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