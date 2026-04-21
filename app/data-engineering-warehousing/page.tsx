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
              {t("Data Engineering & Warehousing")}
            </h2>
            <p>
              {t("Unlock the full potential of your data by consolidating siloed sources into scalable warehouses and lakes.")}
            </p>
            <p>
              {t("We design real-time and batch pipelines that ensure seamless data flow, fuel advanced analytics, and enable AI/ML at scale.")}
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
                <img src="/new/cr-1.svg" alt="" />
                <h6> {t("Real-Time & Batch Pipelines")} </h6>
                <p>{t("Built for high-volume, high-velocity data.")}</p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="mds-waber2">
                <img src="/new/cr-2.svg" alt="" />
                <h6> {t("Data Consolidation")} </h6>
                <p>{t("Unifying ERP, CRM, IoT, and third-party sources.")}</p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="mds-waber2">
                <img src="/new/cr-3.svg" alt="" />
                <h6> {t("Scalable Warehouses & Lakes")} </h6>
                <p>{t("Including Microsoft Fabric OneLake.")}</p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="mds-waber2">
                <img src="/new/cr-4.svg" alt="" />
                <h6> {t("Analytics & AI/ML Enablement")} </h6>
                <p>{t("Powering predictive and real-time insights.")}</p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="mds-waber2">
                <img src="/new/cr-5.svg" alt="" />
                <h6> {t("Cloud-Native Platforms")} </h6>
                <p>{t("Architected on Azure and other leading technologies.")}</p>
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
            {t("Why Choose Us?")}
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
                {t("Success with complex, enterprise-scale data challenges.")}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 col-6">
            <div className="wcu-waber-1">
              <img src="/new/wcu-13.svg" alt="" />
              <p>
                {t("Seamless integration with AI/ML frameworks for operational intelligence.")}
              </p>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="wcu-waber-1">
              <img src="/new/wcu-11.svg" alt="" />
              <p>
                {t("End-to-end services: design, build, migrate, and optimise.")}
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
      <div className={`dew-arrow-animet ${language === 'German' ? 'warehousegerman' : ''}`}>
        <svg
          width={1221}
          height={392}
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
            x={490}
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
            {t("seamless MIS reporting")}
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