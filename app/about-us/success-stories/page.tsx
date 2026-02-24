"use client";

import CommomLayout from "../../Components/CommomLayout";
import Link from "next/link";
import TestimonialandAward from "../../Components/TestimonialandAward";
import Awards from "../../Components/Awards";
import {useTranslation} from "../../hooks/useTranslation";
function SuccessStories() {
  const { t, language } = useTranslation();
    return (
        <CommomLayout>
            <>
                <div className="main-baner-hight retail-baner ">
                    <div className="container bg-video-waber-content ">
                        <div className="row section-row1 align-items-center builtsec">
                            <div className="col-lg-5 col-11">
                                <div className="pe-main-hadding-waber">
                                    <h2 className="main-hadding-1 text-white" data-cursor="-opaque">
                                        {t("Real Results,")} <br />{t("Real Transformation")}
                                    </h2>
                                    <p>
                                        {t("Explore how we've partnered with industry leaders to overcome complex challenges, modernize operations, and drive measurable growth. Each story is a testament to our commitment to delivering powerful, technology-driven outcomes.")}
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
                        <video src="/new/realresult.mp4" autoPlay={true} muted={true} loop={true} playsInline={true} />
                    </div>
                </div>
                {/* Hero Section End*/}
                {/* Success Stories Section Start*/}
                <div className="advantage additional1 successsec pd-50">
                    <div className="container">
                        <div className="row section-row1 align-items-center">
                            <div className="col-sm-12">
                                <div className="section-title text-center text-black">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        {t("Success Stories")}
                                    </h2>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-sm-12">
                                        <div className="cuccess-story-waber">
                                            <div className="d-flex">
                                                <div className="flex1">
                                                    <img src="/images/Alshaya.png" alt="" />
                                                </div>
                                                <div className="flex2">
                                                    <div className="success-company">
                                                        <h3> {t("Alshaya")}</h3>
                                                        <img src="/new/ssc-1.jpeg" alt="" />
                                                    </div>
                                                    <p>
                                                        <b>
                                                            {" "}
                                                            {t("Improving customer fulfilment and reducing waste with Smart Manufacturing Control")}
                                                        </b>
                                                    </p>
                                                    <p>
                                                        {t("A multinational retail and franchise powerhouse operating over 70 global brands across food, fashion, and health sectors. This transformation focused on their food manufacturing division, which supplies products to thousands of cafés, restaurants, and outlets across MENA and Europe.")}
                                                    </p>
                                                    <div id="more" className="more-text hidden">
                                                        <p>
                                                            <b>
                                                                {" "}
                                                                    {t("Production plans now run on predictive data, not spreadsheets.")}
                                                            </b>
                                                        </p>
                                                        <p>
                                                                {" "}
                                                                    {t("With high SKU counts and complex production schedules, the food division relied on manual processes driven by Excel to manage manufacturing, resulting in overproduction, delayed fulfilment, and wasted inventory. Manual tracking of batch expiry and raw material consumption created significant bottlenecks in a time-sensitive industry.")}
                                                        </p>
                                                        <p>
                                                             {" "}
                                                                    {t("We delivered an Epicor MRP solution that unified recipe-based production, quality control, demand forecasting, and inventory planning. The system handled both batch and semi-continuous processes. Shelf-life tracking and FEFO (First Expiry, First Out) logic ensured the right products reached the right stores at the right time, without waste.")}
                                                        </p>
                                                        <p>
                                                            <b>
                                                                {" "}
                                                                    {t("The Results")}
                                                            </b>
                                                        </p>
                                                        <ul className="success-point-waber">
                                                            <li>
                                                                {" "}
                                                                {t("Data upload time reduced from 32+ hours to ~1 hour per outlet, automating 280,000+ orders")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Only 3 FTEs required for order processing, cutting labor costs dramatically")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Accurate demand planning prevented shortages and overproduction across 1200+ stores")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Transportation costs reduced through optimized routing and automated logistics")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Enhanced quality control and inventory traceability, ensuring products reach stores fresh and on time")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Improved supply chain efficiency, reduced waste, and higher customer satisfaction")}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="ser-btn leaderbtn readmore">
                                                        <span className="animated-svg-link" id="toggleReadMore">
                                                            <span className="label">{t("Read More")}</span>
                                                            <span className="svg-container p-0">
                                                                {/* OLD Circles Removed. NEW Down Arrow Added */}
                                                                <svg
                                                                    width={32}
                                                                    className="arrow-icon"
                                                                    height={32}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g clipPath="url(#clip0_5511_10679)">
                                                                        <circle
                                                                            cx="16.8"
                                                                            cy="10.8"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 16.8 10.8)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="19.1999"
                                                                            cy="8.40001"
                                                                            opacity="0.5"
                                                                            r="1.2"
                                                                            transform="rotate(90 19.1999 8.40001)"
                                                                            fill="#535353"
                                                                        ></circle>
                                                                        <circle
                                                                            cx={12}
                                                                            cy="15.6"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 12 15.6)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="9.60005"
                                                                            cy="13.2"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 9.60005 13.2)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="7.1999"
                                                                            cy="10.8"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 7.1999 10.8)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="4.8"
                                                                            cy="8.40001"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 4.8 8.40001)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="14.4001"
                                                                            cy="13.2"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 14.4001 13.2)"
                                                                            fill="#535353"
                                                                        />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_5511_10679">
                                                                            <rect
                                                                                width={32}
                                                                                height={32}
                                                                                opacity="0.5"
                                                                                fill="#535353"
                                                                                transform="translate(24 1.04907e-06) rotate(90)"
                                                                            />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="cuccess-story-waber ">
                                            <div className="d-flex">
                                                <div className="flex1">
                                                    <img src="/images/Sembcorp.png" alt="" />
                                                </div>
                                                <div className="flex2">
                                                    <div className="success-company">
                                                        <h3> {t("Sembcorp")}</h3>{t("Read More")}
                                                        <img src="/images/clients1/11-sembcorp.png" alt="" />
                                                    </div>
                                                    <p>
                                                        <b> {t("Powering Real-Time Insight Across Plants")}</b>
                                                    </p>
                                                    <p>
                                                        <b>
                                                            {" "}
                                                            {t("What looked like a multi-million dollar initiative was delivered at a fraction of the cost, without compromise.")}
                                                        </b>
                                                    </p>
                                                    <p>
                                                        {t("A global utilities and energy company backed by a sovereign investment fund, operating a 14+ GW renewable and conventional power portfolio across Asia. Known for its commitment to sustainability and digitisation of energy operations.")}
                                                    </p>
                                                    <div id="more" className="more-text hidden">
                                                        <p>
                                                            {t("This company needed more than reporting, they needed real-time intelligence from across their power plant ecosystem. Legacy integrations, siloed systems, and disconnected meter data made it impossible to act in the moment.")}
                                                        </p>
                                                        <p>
                                                            {t("We engineered a Power Plant Analytics system that stitched together SAP, the national grid, ABT meters, and plant IoT, all on a .NET backbone. With predictive analytics, real-time alerts, and MIS reporting, the business moved from lagging indicators to live insights.")}
                                                        </p>
                                                        <p>
                                                            <b> {t("The Results")}</b>
                                                        </p>
                                                        <ul className="success-point-waber">
                                                            <li>
                                                                {" "}
                                                                {t("Delivered at one-fifth of the original estimated cost, making advanced analytics accessible without compromise")}
                                                            </li>
                                                            <li>
                                                                {t("Enhanced decision support, with accurate projections for commercial and operational planning")}
                                                            </li>
                                                            <li>
                                                                {t("Real-time monitoring and alerts enabled timely interventions, boosting operational efficiency")}
                                                            </li>
                                                            <li>
                                                                {t("Seamless MIS reporting reduced manual effort and improved reporting accuracy")}
                                                            </li>
                                                            <li>
                                                                {t("Global rollout across all plants, standardising processes and improving efficiency worldwide")}
                                                            </li>
                                                            <li>
                                                                {t("Ongoing support for 6+ years, ensuring stability, upgrades, and continuous alignment with evolving business needs")}
                                                            </li>
                                                        </ul>
                                                        <p>
                                                            {t("Today, decision-making is powered by integrated intelligence. Operators and managers respond in the moment, sustainability reporting is easier, and the company has built a scalable digital backbone for its next phase of energy growth.")}
                                                        </p>
                                                    </div>
                                                    <div className="ser-btn leaderbtn readmore">
                                                        <span className="animated-svg-link" id="toggleReadMore">
                                                            <span className="label">{t("Read More")}</span>
                                                            <span className="svg-container p-0">
                                                                {/* OLD Circles Removed. NEW Down Arrow Added */}
                                                                <svg
                                                                    width={32}
                                                                    className="arrow-icon"
                                                                    height={32}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g clipPath="url(#clip0_5511_10679)">
                                                                        <circle
                                                                            cx="16.8"
                                                                            cy="10.8"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 16.8 10.8)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="19.1999"
                                                                            cy="8.40001"
                                                                            opacity="0.5"
                                                                            r="1.2"
                                                                            transform="rotate(90 19.1999 8.40001)"
                                                                            fill="#535353"
                                                                        ></circle>
                                                                        <circle
                                                                            cx={12}
                                                                            cy="15.6"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 12 15.6)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="9.60005"
                                                                            cy="13.2"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 9.60005 13.2)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="7.1999"
                                                                            cy="10.8"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 7.1999 10.8)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="4.8"
                                                                            cy="8.40001"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 4.8 8.40001)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="14.4001"
                                                                            cy="13.2"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 14.4001 13.2)"
                                                                            fill="#535353"
                                                                        />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_5511_10679">
                                                                            <rect
                                                                                width={32}
                                                                                height={32}
                                                                                opacity="0.5"
                                                                                fill="#535353"
                                                                                transform="translate(24 1.04907e-06) rotate(90)"
                                                                            />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="cuccess-story-waber ">
                                            <div className="d-flex">
                                                <div className="flex1">
                                                    <img src="/images/FLSmidth.png" alt="" />
                                                </div>
                                                <div className="flex2">
                                                    <div className="success-company">
                                                        <h3> {t("FLSmidth")}</h3>
                                                        <img src="/new/20-flsmidth.png" alt="" />
                                                    </div>
                                                    <p>
                                                        <b> {t("Unifying Global Operations with a Two-Tier ERP")}</b>
                                                    </p>
                                                    <p>
                                                        <b>
                                                            {t("60 countries, 21 markets, and a fractured ERP landscape, transformed into a unified global backbone.")}
                                                        </b>
                                                    </p>
                                                    <p>
                                                        <b>
                                                            {t("A global industrial engineering company operating in over 60 countries with 9,000+ employees. Focused on the mining and cement sectors, with strong sustainability commitments through its Mission Zero programme.")}
                                                        </b>
                                                    </p>
                                                    <div id="more" className="more-text hidden">
                                                        <p>
                                                            {t("This enterprise had a patchwork of ERPs across its global landscape. Years of M&A left them with too many systems, no global blueprint and disconnected data. We designed a two-tier ERP strategy, defined a global template and deployed it across regions. Mobile apps enabled field productivity, Power BI brought real-time insights, and change management ensured smooth adoption. Select team members were embedded into the internal team, ensuring long-term knowledge retention.")}
                                                        </p>
                                                        <p>
                                                            <b> {t("The Results")}</b>
                                                        </p>
                                                        <ul className="success-point-waber">
                                                            <li>
                                                                {" "}
                                                                {t("Global Standardisation at Scale - a harmonised ERP footprint across 21+ countries, reducing complexity from dozens of legacy systems.")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Massive Rollout Efficiency - phased deployments delivered with minimal disruption, keeping local operations running smoothly.")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Seamless Data Integration - HQ and subsidiaries now operate on shared, real-time data for finance, projects, and operations.")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Actionable Insights - advanced analytics with Power BI, improving visibility into performance across geographies.")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Mobility Breakthroughs - mobile-enabled processes boosted productivity for remote and field staff.")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Operational Stability - 7+ years of sustained ERP support and continuous improvements ensured reliability and ROI.")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Sustainable Knowledge Transfer - rebadged employees formed an in-house ERP centre of excellence for long-term independence.")}
                                                            </li>
                                                        </ul>
                                                        <p>
                                                            {" "}
                                                            {t("This wasn’t just an implementation, it was a transformation that gave FLSmidth the agility, resilience, and visibility to pursue its MissionZero ambitions with confidence.")}
                                                        </p>
                                                    </div>
                                                    <div className="ser-btn leaderbtn readmore">
                                                        <span className="animated-svg-link" id="toggleReadMore">
                                                            <span className="label">{t("Read More")}</span>
                                                            <span className="svg-container p-0">
                                                                {/* OLD Circles Removed. NEW Down Arrow Added */}
                                                                <svg
                                                                    width={32}
                                                                    className="arrow-icon"
                                                                    height={32}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g clipPath="url(#clip0_5511_10679)">
                                                                        <circle
                                                                            cx="16.8"
                                                                            cy="10.8"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 16.8 10.8)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="19.1999"
                                                                            cy="8.40001"
                                                                            opacity="0.5"
                                                                            r="1.2"
                                                                            transform="rotate(90 19.1999 8.40001)"
                                                                            fill="#535353"
                                                                        ></circle>
                                                                        <circle
                                                                            cx={12}
                                                                            cy="15.6"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 12 15.6)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="9.60005"
                                                                            cy="13.2"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 9.60005 13.2)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="7.1999"
                                                                            cy="10.8"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 7.1999 10.8)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="4.8"
                                                                            cy="8.40001"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 4.8 8.40001)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="14.4001"
                                                                            cy="13.2"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 14.4001 13.2)"
                                                                            fill="#535353"
                                                                        />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_5511_10679">
                                                                            <rect
                                                                                width={32}
                                                                                height={32}
                                                                                opacity="0.5"
                                                                                fill="#535353"
                                                                                transform="translate(24 1.04907e-06) rotate(90)"
                                                                            />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="cuccess-story-waber">
                                            <div className="d-flex">
                                                <div className="flex1">
                                                    <img src="/images/American-golf.png" alt="" />
                                                </div>
                                                <div className="flex2">
                                                    <div className="success-company">
                                                        <h3>{t("American Golf")}</h3>
                                                        <img src="/images/clients1/1-American-golf.png" alt="" />
                                                    </div>
                                                    <p>
                                                        <b>
                                                            {" "}
                                                            {t("Modernising Retail for Speed, Scale, and Revenue Growth")}
                                                        </b>
                                                    </p>
                                                    <p>
                                                        <b>
                                                            {" "}
                                                            {t("From disparate legacy systems to a connected, future-ready retail stack, with eCommerce revenue set to jump 7.5%.")}
                                                        </b>
                                                    </p>
                                                    <p>
                                                        <b>
                                                            {" "}
                                                            {t("Europe’s largest golf retailer with 80+ stores across the UK and Ireland, offering a full range of golfing products and apparel, backed by a growing eCommerce presence.")}
                                                        </b>
                                                    </p>
                                                    <div id="more" className="more-text hidden">
                                                        <p>
                                                            {t("This specialty retailer was hampered by outdated tools, Salesforce and legacy ERP resulting in slower order processing, data sync and scalability challenges. We transformed their tech stack with a microservices-based, headless architecture powered by custom APIs, Commerce Connect, and Fluent. Orders now flow automatically between systems, data stays consistent, and the user experience is seamless. Our 16/7 support model with tiered ticketing keeps ops stable through business hours and beyond.")}
                                                        </p>
                                                        <p>
                                                            <b>
                                                                {" "}
                                                                {t("The Results")}
                                                            </b>
                                                        </p>
                                                        <ul className="success-point-waber">
                                                            <li>
                                                                {" "}
                                                                {t("Optimised Operational Efficiency - Automated order and product data handling reduced manual errors.")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Enhanced Data Accuracy - Master product data synchronisation improved reliability and reporting.")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Significant Cost Savings - Retiring Salesforce and streamlining Navision reduced operational overheads.")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Revenue Growth - eCommerce integration projected to deliver a 7.5% uplift in online revenue.")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Future-Ready Infrastructure - Flexible, scalable architecture supporting ongoing innovation.")}
                                                            </li>
                                                            <li>
                                                                {" "}
                                                                {t("Business Continuity - Robust, round-the-clock offshore support ensured stability during peak trading.")}
                                                            </li>
                                                        </ul>
                                                        <p>
                                                            {" "}
                                                            {t("By modernising their retail stack, AG now benefits from faster fulfilment, improved customer experience, and a future-ready platform that supports growth at scale.")}
                                                        </p>
                                                    </div>
                                                    <div className="ser-btn leaderbtn readmore">
                                                        <span className="animated-svg-link" id="toggleReadMore">
                                                            <span className="label">{t("Read More")}</span>
                                                            <span className="svg-container p-0">
                                                                {/* OLD Circles Removed. NEW Down Arrow Added */}
                                                                <svg
                                                                    width={32}
                                                                    className="arrow-icon"
                                                                    height={32}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g clipPath="url(#clip0_5511_10679)">
                                                                        <circle
                                                                            cx="16.8"
                                                                            cy="10.8"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 16.8 10.8)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="19.1999"
                                                                            cy="8.40001"
                                                                            opacity="0.5"
                                                                            r="1.2"
                                                                            transform="rotate(90 19.1999 8.40001)"
                                                                            fill="#535353"
                                                                        ></circle>
                                                                        <circle
                                                                            cx={12}
                                                                            cy="15.6"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 12 15.6)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="9.60005"
                                                                            cy="13.2"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 9.60005 13.2)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="7.1999"
                                                                            cy="10.8"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 7.1999 10.8)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="4.8"
                                                                            cy="8.40001"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 4.8 8.40001)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="14.4001"
                                                                            cy="13.2"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 14.4001 13.2)"
                                                                            fill="#535353"
                                                                        />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_5511_10679">
                                                                            <rect
                                                                                width={32}
                                                                                height={32}
                                                                                opacity="0.5"
                                                                                fill="#535353"
                                                                                transform="translate(24 1.04907e-06) rotate(90)"
                                                                            />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="cuccess-story-waber">
                                            <div className="d-flex">
                                                <div className="flex1">
                                                    <img src="/images/A-Map1.png" alt="" />
                                                </div>
                                                <div className="flex2">
                                                    <div className="success-company">
                                                        <h3>{t("A-Map")}</h3>
                                                        <img src="/new/scss-a.jpeg" alt="" />
                                                    </div>
                                                    <p>
                                                        {t("How A-MAP Turned Manual Mayhem into Real-Time Precision: Cutting Processes from Days to Seconds")}
                                                    </p>
                                                    <p>
                                                        {t("A-MAP’s warehouse used to run on paper and hours of manual checks. Today, a single scan does in seconds what once took days, thanks to our extensive digital transformation.")} 
                                                    </p>
                                                    <div id="more" className="more-text hidden">
                                                        <p>
                                                            {t("As a high-volume distributor across the Middle East, Africa, and Asia, A-MAP faced mounting challenges: delayed container receipts, inventory mismatches, disconnected systems, and a warranty process drowning in paperwork. In just six weeks, we delivered a full-scale transformation of their warehouse operations.")}
                                                        </p>
                                                        <p>
                                                            {t("Smart warehousing with mobile picking, intelligent bin allocation, FIFO inventory, and automated transport planning replaced manual chaos. A bespoke warranty app digitized the claim process end-to-end. Real-time dashboards unlocked visibility across sales, warehouse, and last-mile delivery.")}
                                                        </p>
                                                        <p>
                                                            <b>{t("The Results")}</b>
                                                        </p>
                                                        <ul className="success-point-waber">
                                                            <li>
                                                                {t("Container processing time cut from 40 minutes to just 3 minutes")}
                                                            </li>
                                                            <li>
                                                                {t("Warranty claim time reduced from 30 hours to under 60 seconds")}
                                                            </li>
                                                            <li>
                                                                {t("15,000+ serials picked within the first few days with full traceability")}
                                                            </li>
                                                            <li>
                                                                {t("Paper picking lists eliminated and replaced with mobile-enabled workflows")}
                                                            </li>
                                                            <li>
                                                                {t("Excel-driven planning retired in favour of live, actionable insights")}
                                                            </li>
                                                        </ul>
                                                        <p>
                                                            {t("Within couple of days after go-live, A-MAP’s fulfilment speed, inventory accuracy, and customer satisfaction began to climb. Today, our solution acts as a digital twin of the warehouse, and A-MAP is scaling faster, smarter, and paper-free.")}
                                                        </p>
                                                    </div>
                                                    <div className="ser-btn leaderbtn readmore">
                                                        <span className="animated-svg-link" id="toggleReadMore">
                                                            <span className="label">{t("Read More")}</span>
                                                            <span className="svg-container p-0">
                                                                {/* OLD Circles Removed. NEW Down Arrow Added */}
                                                                <svg
                                                                    width={32}
                                                                    className="arrow-icon"
                                                                    height={32}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g clipPath="url(#clip0_5511_10679)">
                                                                        <circle
                                                                            cx="16.8"
                                                                            cy="10.8"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 16.8 10.8)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="19.1999"
                                                                            cy="8.40001"
                                                                            opacity="0.5"
                                                                            r="1.2"
                                                                            transform="rotate(90 19.1999 8.40001)"
                                                                            fill="#535353"
                                                                        ></circle>
                                                                        <circle
                                                                            cx={12}
                                                                            cy="15.6"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 12 15.6)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="9.60005"
                                                                            cy="13.2"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 9.60005 13.2)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="7.1999"
                                                                            cy="10.8"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 7.1999 10.8)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="4.8"
                                                                            cy="8.40001"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 4.8 8.40001)"
                                                                            fill="#535353"
                                                                        />
                                                                        <circle
                                                                            cx="14.4001"
                                                                            cy="13.2"
                                                                            r="1.2"
                                                                            opacity="0.5"
                                                                            transform="rotate(90 14.4001 13.2)"
                                                                            fill="#535353"
                                                                        />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_5511_10679">
                                                                            <rect
                                                                                width={32}
                                                                                height={32}
                                                                                opacity="0.5"
                                                                                fill="#535353"
                                                                                transform="translate(24 1.04907e-06) rotate(90)"
                                                                            />
                                                                        </clipPath>
                                                                    </defs>
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
                    </div>
                </div>
                {/* Success Stories Section End*/}
                <div className="container">
                    <p className="lines" />
                </div>
                <br/>
                {/* <TestimonialandAward /> */}

                <Awards />
                {/* Footer Start */}
                <footer className="main-footer pd0">
                    {/* Footer Main Start */}
                    <div className="footer-main">
                        <div className="container">
                            <div className="firstrow">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2>{t("Ready to accelerate value creation across your portfolio?")}</h2>
                                        <p>
                                            {t("Contact us today to learn how we can help modernise operations, de-risk integrations, and improve commercial outcomes.")}
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

export default SuccessStories