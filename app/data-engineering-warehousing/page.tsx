"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import TestimonialandAward from "../Components/TestimonialandAward";
import {useTranslation} from "../hooks/useTranslation";
export default function AlMl() {
  const { t, language } = useTranslation();
    return (
        <CommomLayout>
           <>
  {/*?php include "navbar.php" ?*/}
  {/* Header End */}
  <div className="hero brainsec enter  retailsection1  erpexcel ">
    <div className="parent2 retailparent2 rechange-baner  mobilevideo">
      <img src="/new/data-2.jpeg" alt="" />
      {/* <video src="/videos/achitect.mp4" autoplay muted loop playsinline class="bg-image1"></video> */}
    </div>
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-5">
          <div className="section-title">
            <h2 className="text-anime-style-21" data-cursor="-opaque">
              {t("Data Engineering & Data Warehousing Services")}
            </h2>
            <p>
              {t("Build Scalable Data Warehouses & Real-Time Pipelines")}
            </p>
            <p>
              {t("Consolidate siloed sources into scalable warehouses and data lakes. We design real-time and batch pipelines that ensure seamless data flow, fueling advanced analytics and AI/ML at scale.")}
            </p>
            <div className="ser-btn mt-5">
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
        <div className="col-sm-7">
          <div className="corusimg mobileview">
            <img src="/new/data-2.jpeg" alt="" />
          </div>
          {/* <div class="parent2 retailparent2 mobileview">
              <video src="/videos/achitect.mp4" autoplay muted loop playsinline class="bg-image1"></video>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  <section className=" dynamics pd50">
    <div className="container">
      <div className="content text-left">
        <div className="section-title ">
          <div className="hero-video-content1 wow fadeInUp mt-4">
            <h2 className="text-anime-style-2 text-dark">{t("Our Capabilities")}</h2>
          </div>
        </div>
      </div>
      {/* Testimonial Slider Start */}
      <div className="testimonial-slider-009 dew-schorrol">
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="mds-waber2">
                <img src="/new/cr-1.svg" alt="Data Engineering and Data Warehousing Batch Pipelines icon" />
                <h6> {t("Real-Time & Batch Pipelines")} </h6>
                <p>{t("Built for high-volume, high-velocity ETL data.")}</p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="mds-waber2">
                <img src="/new/cr-2.svg" alt="Data Consolidation icon" />
                <h6> {t("Data Consolidation")} </h6>
                <p>{t("Unifying ERP, CRM, IoT, and third-party sources.")}</p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="mds-waber2">
                <img src="/new/cr-3.svg" alt="Warehouse and microsoft onelake icon" />
                <h6> {t("Scalable Warehouses & Lakes")} </h6>
                <p>{t("Optimized for Microsoft Fabric OneLake.")}</p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="mds-waber2">
                <img src="/new/cr-4.svg" alt="Analytics & AI/M icon" />
                <h6> {t("Analytics & AI/ML Enablement")} </h6>
                <p>{t("Powering predictive models and BI insights.")}</p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="mds-waber2">
                <img src="/new/cr-5.svg" alt="Cloud-Native Platforms icon" />
                <h6> {t("Cloud-Native Platforms")} </h6>
                <p>{t("Engineered on Azure and modern data stacks.")}</p>
              </div>
            </div>
            {/* Testimonial Slide End */}
          </div>
          <div className="testimonial-btn  system-hide">
            <div className="testimonial-button-prev">
              <div className="animated-svg-link">
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
              </div>
            </div>
            <span className="testspace" style={{ color: "#000000ff" }}>
              1/6
            </span>
            <div className="testimonial-button-next">
              <div className="animated-svg-link">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Slider End */}
    </div>
  </section>
  <div className="wcu-1 mobilewcu">
    <div className="container">
      <div className="platdesc">
        <div className="section-title">
          <h2 className="text-anime-style-2" data-cursor="-opaque">
            {t("Why Choose Data Engineering & Warehousing?")}
          </h2>
        </div>
        <div className="row">
          <div className="col-sm-3 col-6">
            <div className="wcu-waber-1">
              <img src="/new/wcu-11.svg" alt="" />
              <p>
                {t("Proven expertise in modern data architectures and Azure Synapse solutions.")}
              </p>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="wcu-waber-1">
              <img src="/new/wcu-12.svg" alt="" />
              <p>
                {t("Success solving complex, enterprise-scale data engineering challenges.")}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 col-6">
            <div className="wcu-waber-1">
              <img src="/new/wcu-13.svg" alt="" />
              <p>
                {t("Seamless integration with AI/ML frameworks for operational intelligence and analytics.")}
              </p>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="wcu-waber-1">
              <img src="/new/wcu-11.svg" alt="" />
              <p>
                {t("End-to-end data engineering services: design, build, migrate, and optimise.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="wcu-video">
      <video src="/new/wcu-1.mp4" autoPlay={true} loop={true} muted={true} />
    </div>
  </div>
  <div className="buildsection mobilebuild">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="hero-content buildsecont ">
            <div className="section-title">
              <div className="hero-video-content wow fadeInUp mt-4">
                <h2
                  className="text-anime-style-2 text-center"
                  data-cursor="-opaque"
                >
                  {t("Proven in Action – Sembcorp")}
                </h2>
                <p className="text-center">
                  {t("For Sembcorp Industries, we built a Power Plant Analytics (PPA) system that consolidated data from SAP, IoT devices, and grid meters into a single platform.")}
                </p>
                <p className="text-center">
                  {t("With real-time and batch pipelines, the solution enabled seamless MIS reporting, predictive analytics, and stronger decision support across global operations.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`dew-arrow-animet ${language === 'German' ? 'warehousegerman' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <svg
          width={1050}
          height={340}
          viewBox="0 0 1221 392"
          fill="none"
          xmlns="http://www.w.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            {/* Correct V-shaped arrowhead to match the original image */}
            <g id="v-arrow">
              <path
                d="M-6.5,-6 L0,0 L-6.5,6"
                fill="none"
                stroke="#499A9A"
                strokeWidth="2.26064"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            {/* Animation paths with corrected coordinates for perfect alignment */}
            <path id="path_in_predictive" d="M625.942 0 L 625.942 67.5497" />
            <path
              id="path_out_predictive_up"
              d="M594.294 67.5497 L 594.294 0"
            />
            <path
              id="path_predictive_to_stronger"
              d="M610.754 130.213 L 610.754 216.55"
            />
            <path id="path_in_ppa" d="M0 231.853 L 75.7535 231.853" />
            <path id="path_out_ppa" d="M75.7535 263.502 L 0 263.502" />
            <path
              id="path_ppa_to_stronger"
              d="M332.3885 247.796 L 487.254 247.796"
            />
            <path
              id="path_stronger_to_seamless"
              d="M731.889 247.796 L 910.754 247.796"
            />
            <path id="path_out_seamless" d="M1144.387 231.853 L 1221 231.853" />
            <path id="path_in_seamless" d="M1221 263.501 L 1144.387 263.501" />
            <path
              id="path_ppa_to_bottom"
              d="M204.07 279.213 L 204.07 301.516 C 204.07 318.163 217.565 331.658 234.212 331.658 H 579.858 C 596.505 331.658 610 345.153 610 361.8 V 392"
            />
            <path
              id="path_stronger_to_bottom"
              d="M610.754 279.213 L 610.754 392"
            />
            <path
              id="path_seamless_to_bottom"
              d="M1027.57 279.213 L 1027.57 301.516 C 1027.57 318.163 1014.08 331.658 997.434 331.658 H 640.142 C 623.495 331.658 610 345.153 610 361.8 V 392"
            />
          </defs>
          {/* Static Background Elements */}
          <rect
            x="75.7535"
            y="216.55"
            width="256.635"
            height="62.6631"
            rx="11.3032"
            fill="white"
            stroke="#499A9A"
            strokeWidth="1.50709"
          />
          <text
            x={95}
            y={254}
            fontFamily="Arial, sans-serif"
            fontSize={16}
            fill="#333"
          >
            {t("Power Plant Analytics (PPA)")}
          </text>
          <rect
            x="487.254"
            y="216.55"
            width="244.635"
            height="62.6631"
            rx="11.3032"
            fill="white"
            stroke="#499A9A"
            strokeWidth="1.50709"
          />
          <text
            x={520}
            y={254}
            fontFamily="Arial, sans-serif"
            fontSize={16}
            fill="#333"
          >
            {t("Stronger decision support")}
          </text>
          <rect
            x="910.754"
            y="216.55"
            width="233.633"
            height="62.6631"
            rx="11.3032"
            fill="white"
            stroke="#499A9A"
            strokeWidth="1.50709"
          />
          <text
            x={935}
            y={254}
            fontFamily="Arial, sans-serif"
            fontSize={16}
            fill="#333"
          >
            {t("Seamless MIS reporting")}
          </text>
          <rect
            x="492.754"
            y="67.5497"
            width="233.633"
            height="62.6631"
            rx="11.3032"
            fill="white"
            stroke="#499A9A"
            strokeWidth="1.50709"
          />
          <text
            x={540}
            y={104}
            fontFamily="Arial, sans-serif"
            fontSize={16}
            fill="#333"
          >
            {t("Predictive analytics")}
          </text>
          {/* All Static Lines (now perfectly aligned) */}
          <use
            xlinkHref="#path_ppa_to_bottom"
            stroke="#499A9A"
            strokeWidth="1.50709"
            fill="none"
          />
          <use
            xlinkHref="#path_seamless_to_bottom"
            stroke="#499A9A"
            strokeWidth="1.50709"
            fill="none"
          />
          <use
            xlinkHref="#path_stronger_to_bottom"
            stroke="#499A9A"
            strokeWidth="1.50709"
          />
          <use
            xlinkHref="#path_predictive_to_stronger"
            stroke="#499A9A"
            strokeWidth="1.50709"
          />
          <use
            xlinkHref="#path_ppa_to_stronger"
            stroke="#499A9A"
            strokeWidth="2.26064"
          />
          <use
            xlinkHref="#path_stronger_to_seamless"
            stroke="#499A9A"
            strokeWidth="2.26064"
          />
          <use
            xlinkHref="#path_out_ppa"
            stroke="#499A9A"
            strokeWidth="2.26064"
          />
          <use
            xlinkHref="#path_in_ppa"
            stroke="#499A9A"
            strokeWidth="2.26064"
          />
          <use
            xlinkHref="#path_out_predictive_up"
            stroke="#499A9A"
            strokeWidth="2.26064"
          />
          <use
            xlinkHref="#path_in_predictive"
            stroke="#499A9A"
            strokeWidth="2.26064"
          />
          <use
            xlinkHref="#path_in_seamless"
            stroke="#499A9A"
            strokeWidth="2.26064"
          />
          <use
            xlinkHref="#path_out_seamless"
            stroke="#499A9A"
            strokeWidth="2.26064"
          />
          {/* Animated Arrows */}
          <use xlinkHref="#v-arrow">
            {" "}
            <animateMotion dur="2.5s" repeatCount="indefinite" rotate="auto">
              {" "}
              <mpath xlinkHref="#path_in_predictive" />{" "}
            </animateMotion>{" "}
          </use>
          <use xlinkHref="#v-arrow">
            {" "}
            <animateMotion
              dur="2.5s"
              begin="0.2s"
              repeatCount="indefinite"
              rotate="auto"
            >
              {" "}
              <mpath xlinkHref="#path_out_predictive_up" />{" "}
            </animateMotion>{" "}
          </use>
          <use xlinkHref="#v-arrow">
            {" "}
            <animateMotion
              dur="2s"
              begin="0.4s"
              repeatCount="indefinite"
              rotate="auto"
            >
              {" "}
              <mpath xlinkHref="#path_predictive_to_stronger" />{" "}
            </animateMotion>{" "}
          </use>
          <use xlinkHref="#v-arrow">
            {" "}
            <animateMotion
              dur="4s"
              begin="0.6s"
              repeatCount="indefinite"
              rotate="auto"
            >
              {" "}
              <mpath xlinkHref="#path_in_ppa" />{" "}
            </animateMotion>{" "}
          </use>
          <use xlinkHref="#v-arrow">
            {" "}
            <animateMotion
              dur="4s"
              begin="0.8s"
              repeatCount="indefinite"
              rotate="auto"
            >
              {" "}
              <mpath xlinkHref="#path_out_ppa" />{" "}
            </animateMotion>{" "}
          </use>
          <use xlinkHref="#v-arrow">
            {" "}
            <animateMotion
              dur="3s"
              begin="1.0s"
              repeatCount="indefinite"
              rotate="auto"
            >
              {" "}
              <mpath xlinkHref="#path_ppa_to_stronger" />{" "}
            </animateMotion>{" "}
          </use>
          <use xlinkHref="#v-arrow">
            {" "}
            <animateMotion
              dur="3s"
              begin="1.2s"
              repeatCount="indefinite"
              rotate="auto"
            >
              {" "}
              <mpath xlinkHref="#path_stronger_to_seamless" />{" "}
            </animateMotion>{" "}
          </use>
          <use xlinkHref="#v-arrow">
            {" "}
            <animateMotion
              dur="4s"
              begin="1.4s"
              repeatCount="indefinite"
              rotate="auto"
            >
              {" "}
              <mpath xlinkHref="#path_out_seamless" />{" "}
            </animateMotion>{" "}
          </use>
          <use xlinkHref="#v-arrow">
            {" "}
            <animateMotion
              dur="4s"
              begin="1.6s"
              repeatCount="indefinite"
              rotate="auto"
            >
              {" "}
              <mpath xlinkHref="#path_in_seamless" />{" "}
            </animateMotion>{" "}
          </use>
          <use xlinkHref="#v-arrow">
            {" "}
            <animateMotion
              dur="4s"
              begin="1.8s"
              repeatCount="indefinite"
              rotate="auto"
            >
              {" "}
              <mpath xlinkHref="#path_ppa_to_bottom" />{" "}
            </animateMotion>{" "}
          </use>
          <use xlinkHref="#v-arrow">
            {" "}
            <animateMotion
              dur="3s"
              begin="2.0s"
              repeatCount="indefinite"
              rotate="auto"
            >
              {" "}
              <mpath xlinkHref="#path_stronger_to_bottom" />{" "}
            </animateMotion>{" "}
          </use>
          <use xlinkHref="#v-arrow">
            {" "}
            <animateMotion
              dur="4s"
              begin="2.2s"
              repeatCount="indefinite"
              rotate="auto"
            >
              {" "}
              <mpath xlinkHref="#path_seamless_to_bottom" />{" "}
            </animateMotion>{" "}
          </use>
        </svg>
        <img src="/new/dde-4.svg" alt="" />
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
                      {/* FAQ Item 1 Start */}
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
                            {t("What core services does RheinBrücke offer within Data Engineering and Warehousing?")}
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
                              {t("We specialize in transforming raw data chaos into actionable intelligence. Our core services include:")}
                              <br />
                              {t("• Designing and building robust data pipelines (ingestion, processing, and storage).")}
                              <br />
                              {t("• Developing and automating ETL/ELT processes for maximum efficiency.")}
                              <br />
                              {t("• Implementing modern Cloud Data Warehouses and Data Lakes.")}
                              <br />
                              {t("• Establishing comprehensive Data Governance frameworks and quality assurance solutions.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item 1 End */}
                      {/* FAQ Item 2 Start */}
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
                            {t("What leading data platforms and technologies are utilized for these services?")}
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
                              {t("We leverage best-in-class cloud and on-premises technologies to build highly scalable data architectures. We commonly work with:")}
                              <br />
                              {t("• Cloud Platforms: Azure Data Factory for orchestration and Snowflake, AWS Redshift, or Google BigQuery for high-performance warehousing.")}
                              <br />
                              {t("• On-Premises: Modernizing and optimizing existing SQL-based data platforms and relational databases.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item 2 End */}
                      {/* FAQ Item 3 Start */}
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
                            {t("How is data engineering used to integrate core business systems like ERP, CRM, or BI tools?")}
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
                              {t("Data engineering is the crucial bridge that unites disparate systems. We design unified data models that efficiently integrate all key organizational data—from ERP and CRM systems to IoT and operational logs. This centralization ensures that your Business Intelligence (BI) and analytical reporting tools operate on a single, consistent, and trustworthy source of truth.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item 3 End */}
                      {/* FAQ Item 4 Start */}
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
                            {t("Does RheinBrücke provide Data Quality Management (DQM) and compliance services?")}
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
                              {t("Yes, because \"garbage in, garbage out\" is not a strategy! Data Quality Management is integral to every solution we deliver. We implement rigorous DQM processes to ensure data accuracy, consistency, completeness, and timeliness. Furthermore, we help ensure your data practices comply with relevant regulatory standards, safeguarding your data integrity across all systems.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item 4 End */}
                      {/* FAQ Item 5 Start */}
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
                            {t("What is an ETL pipeline in data engineering?")}
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
                              {t("An ETL pipeline is a data engineering process that extracts data from multiple siloed sources, transforms it into a clean, standardized format, and loads it into a centralized data warehouse or lakehouse for analytics.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item 5 End */}
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
              <h2>{t("Future-Ready Data")}</h2>
              <p>{t("Make your data insight-driven and AI-ready.")}</p>
              <p>{t("Talk to our experts today.")}</p>
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