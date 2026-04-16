"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import {useTranslation} from "../hooks/useTranslation";
export default function AlMl() {
  const { t, language } = useTranslation();
    return (
        <CommomLayout>
<>
  {/*?php include "navbar.php" ?*/}
  {/* Hero Section Start*/}
  <div className="hero brainsec bluebg digi1 digitalsolsec pdb0">
    <div className="container">
      <div className="row section-row align-items-center  digitalsec">
        <div className="col-sm-6">
          <div className="section-title">
            <h2 className="text-anime-style-21" data-cursor="-opaque">
              {t("Digital Services for Scalable, Agile, and Future-Ready Business Growth")}
            </h2>
            <p>{t("MACH Architecture, Data Intelligence, and AI Built to Perform")}</p>
            <p>
              {t("Our Digital Services empower your business with the tools, technologies, and expertise needed to drive transformation and sustain growth. Through our Analyse-Integrate-Transform framework, we ensure every engagement delivers measurable, long-term value, with solutions that are scalable, agile, and future-ready.")}
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
        <div className="col-sm-6">
          <div className="digiban">
            <img src="/images/digitalban.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End*/}
  {/* Our Testimonial Section Start */}
  <div className={`our-testimonial digiupgradesec pd50 ${language === 'German' ? 'gerdigisermodern' : ''}`}>
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-sm-2" />
        <div className="col-lg-8">
          <div className="section-title testidescription text-center">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Modernise and Upgrade Your Enterprise Core")}
            </h2>
            <p>
              {t("To stay competitive, businesses must evolve their core systems to be agile, scalable, and cloud-native. Our enterprise modernisation services help you replace legacy systems with high-performance platforms, architectures, and applications, enabling faster innovation and operational resilience.")}
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center digitalmobilesec">
        <div className="col-lg-12">
          {/* Testimonial Slider Start */}
          <div className="testimonial-slider-081 systemview">
            <div className="swiper w-100">
              <div className="row">
                {/* Slide 1: Supplier Relationship */}
                <div className="col-sm-4">
                  <div className="swiper-slide">
                    <div className="MeRLIN-service">
                      <div className="service-icon1">
                        <svg
                          width={80}
                          height={80}
                          viewBox="0 0 80 80"
                          fill="none"
  role="img" 
  aria-label="Cloud native architectural services icon"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_3813_38813"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={80}
                            height={80}
                          >
                            <path
                              d="M0 7.62939e-06H80V80H0V7.62939e-06Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask0_3813_38813)">
                            <path
                              className="icns"
                              d="M40 30.4688C32.2455 30.4688 25.9375 24.1608 25.9375 16.4062C25.9375 8.65172 32.2455 2.34375 40 2.34375C47.7545 2.34375 54.0625 8.65172 54.0625 16.4062C54.0625 24.1608 47.7545 30.4688 40 30.4688Z"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M35.0273 11.4344L44.9711 21.3782"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M35.0273 21.3781L44.9711 11.4343"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M11.7188 16.4062C11.7188 18.995 9.62 21.0938 7.03125 21.0938C4.4425 21.0938 2.34375 18.995 2.34375 16.4062C2.34375 13.8175 4.4425 11.7188 7.03125 11.7188C9.62 11.7188 11.7188 13.8175 11.7188 16.4062Z"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M77.6562 16.4062C77.6562 18.995 75.5575 21.0938 72.9688 21.0938C70.38 21.0938 68.2812 18.995 68.2812 16.4062C68.2812 13.8175 70.38 11.7188 72.9688 11.7188C75.5575 11.7188 77.6562 13.8175 77.6562 16.4062Z"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M68.125 68.2812H11.875C11.875 73.4589 16.0723 77.6562 21.25 77.6562H58.75C63.9277 77.6562 68.125 73.4589 68.125 68.2812Z"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M63.4375 68.2812V39.8438H16.5625V68.2812"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M40 39.8438V30.4688"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M11.7188 16.4062H25.9375"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M68.2812 16.4062H54.0625"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M30.625 56.5625V51.875"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M40 56.5625V51.875"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M49.375 56.5625V51.875"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                          </g>
                        </svg>
                        {/* <i class="bi bi-people-fill"></i> */}
                      </div>
                      <h3>{t("Architecture Services:")} </h3>
                      <ul>
                        <li>
                          {t("We design and implement MACH architecture on Microsoft Azure, leveraging Microservices, APIs, Cloud-Native and Headless principles, and event-driven systems. Our solutions ensure high availability, scalability, and faster innovation cycles, while modernising legacy infrastructure.")}
                        </li>
                        <li>
                          <b>{t("Tech:")}</b> {t("MACH, SOA, Microsoft Azure, Event-driven Frameworks")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Slide 2: eProcurement */}
                <div className="col-sm-4">
                  <div className="swiper-slide ">
                    <div className="MeRLIN-service">
                      <div className="service-icon1">
                        <svg
                          width={80}
                          height={80}
                          viewBox="0 0 80 80"
                          fill="none"
  role="img" 
  aria-label="Digital services App modernization icon"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="icns"
                            d="M11.2113 67.933H1.71875"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="icns"
                            d="M26.9082 39.0114C19.6764 31.7792 19.6764 20.0547 26.9082 12.8225C34.14 5.59075 45.8652 5.59075 53.0971 12.8225C60.3288 20.0547 60.3288 31.7792 53.0971 39.0114C45.8653 46.2431 34.14 46.2431 26.9082 39.0114Z"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="icns"
                            d="M40 63.2646V44.5908"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="icns"
                            d="M53.2267 67.933H44.668"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="icns"
                            d="M35.3323 67.933H26.7734"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="icns"
                            d="M78.2816 67.933H68.7891"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="icns"
                            d="M32.2959 33.6195C28.042 29.3653 28.042 22.4685 32.2959 18.2142C36.55 13.9603 43.4471 13.9603 47.7012 18.2142C51.9551 22.4685 51.9551 29.3653 47.7012 33.6195C43.4471 37.8735 36.55 37.8735 32.2959 33.6195Z"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="icns"
                            d="M40 7.39856C18.8581 7.39872 1.71875 25.9168 1.71875 25.9168C1.71875 25.8512 18.8578 44.4348 40 44.4351C61.1419 44.435 78.2812 26.0068 78.2812 25.9168C78.2812 25.9168 61.1422 7.39887 40 7.39856Z"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="icns"
                            d="M32.2969 18.2144L47.7022 33.6195"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="icns"
                            d="M32.2969 33.6195L39.9995 25.9169L47.7022 18.2144"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="icns"
                            d="M41.7887 72.2468C44.1708 71.2601 45.302 68.5291 44.3153 66.1471C43.3286 63.765 40.5976 62.6338 38.2155 63.6205C35.8334 64.6072 34.7022 67.3382 35.689 69.7203C36.6757 72.1024 39.4066 73.2335 41.7887 72.2468Z"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="icns"
                            d="M22.1039 72.6014H15.8794C13.3011 72.6014 11.2109 70.5112 11.2109 67.933C11.2109 65.3547 13.3011 63.2645 15.8794 63.2645H22.1039C24.6822 63.2645 26.7723 65.3547 26.7723 67.933C26.7723 70.5112 24.6822 72.6014 22.1039 72.6014Z"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className="icns"
                            d="M64.1195 72.6014H57.895C55.3167 72.6014 53.2266 70.5112 53.2266 67.933C53.2266 65.3547 55.3167 63.2645 57.895 63.2645H64.1195C66.6978 63.2645 68.788 65.3547 68.788 67.933C68.788 70.5112 66.6978 72.6014 64.1195 72.6014Z"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {/*<img src="/images/ss5.svg" alt="">*/}
                        {/* <i class="bi bi-cart-check-fill"></i> */}
                      </div>
                      <h3>{t("App Modernisation:")}</h3>
                      <ul>
                        <li>
                          {" "}
                          {t("We transform outdated systems into modern, cloud-native applications using composable architectures and scalable frameworks. Improved performance and security through tools like Algolia, Amplience, and Metapack.")}
                        </li>
                        <li>
                          <b>{t("Tech:")}</b> {t("Microservices, Serverless Computing, Emarsys")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Add other slides here with the same structure */}
                {/* Slide 3: Budgeting & Planning */}
                <div className="col-sm-4">
                  <div className="swiper-slide">
                    <div className="MeRLIN-service">
                      <div className="service-icon1">
                        <svg
                          width={73}
                          height={79}
                          viewBox="0 0 73 79"
                          fill="none"
  role="img" 
  aria-label="Digital services app development icon"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25.7573 40.8894C24.5186 40.8894 23.2945 40.9743 22.1733 41.3518C22.173 41.3519 22.1727 41.3519 22.1723 41.3521C16.16 42.9378 11.7266 48.4169 11.7266 54.9327C11.7266 62.4536 17.6336 68.5936 25.0573 68.9586C25.0573 68.9586 25.0577 68.9586 25.058 68.9588C25.2866 68.9982 25.523 68.976 25.7575 68.976C33.5066 68.976 39.7883 62.6886 39.7883 54.9327C39.7881 47.1768 33.5064 40.8894 25.7573 40.8894Z"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.8264 77.5625L20.6473 74.7904C18.7827 74.312 17.0042 73.5742 15.3448 72.5908L12.5511 73.7172L6.99047 68.1515L8.11578 65.3553C7.13313 63.6945 6.39594 61.9143 5.91797 60.0481L3.14844 58.8681V50.9975L5.91797 49.8175C6.39594 47.9511 7.13313 46.1711 8.11578 44.5103L6.99047 41.714L12.5511 36.1484L15.3448 37.2748C17.0042 36.2914 18.7827 35.5534 20.6473 35.0751L21.8264 32.3031H29.6903L30.8694 35.0751C32.7341 35.5536 34.5123 36.2914 36.1719 37.2748L38.9656 36.1484L44.5262 41.714L43.4009 44.5103C44.3836 46.1711 45.1206 47.9512 45.5988 49.8175L48.3683 50.9975V58.8681L45.5988 60.0481C45.1206 61.9145 44.3836 63.6945 43.4009 65.3553L44.5262 68.1515L38.9656 73.7172L36.1719 72.5908C34.5123 73.5744 32.7341 74.312 30.8694 74.7904L29.6903 77.5625H21.8264Z"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M45.6609 10.8779C45.0892 10.0618 43.6513 9.45524 41.772 10.0223C40.0464 10.5429 39.2731 13.3088 41.5239 14.372C41.877 14.5388 42.782 14.8949 44.1475 15.3784C47.2034 16.4604 47.3039 20.4806 43.677 20.7979C42.4684 20.9037 40.7452 20.5782 39.8281 19.4379"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M42.9727 20.9246V21.8613"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M42.9727 8.62109V9.73469"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M43.1264 29.4822C50.9972 29.4822 57.3778 23.1062 57.3778 15.2411C57.3778 7.37595 50.9972 1 43.1264 1C35.2556 1 28.875 7.37595 28.875 15.2411C28.875 23.1062 35.2556 29.4822 43.1264 29.4822Z"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M71.9127 43.6286L61.175 27.0428L50.4375 43.6286H56.1809V77.5625H66.1692V43.6286H71.9127Z"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.8414 19.5936L10.4206 4.84717L1 19.5936H6.03906V29.7712H14.8023V19.5936H19.8414Z"
                            stroke="#499A9A"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {/*<img src="/images/ss6.svg" alt="">*/}
                        {/* <i class="bi bi-pie-chart-fill"></i> */}
                      </div>
                      <h3>{t("Application Development:")}</h3>
                      <ul>
                      <li>
                          {t("We build enterprise-grade, custom designed applications tailored to your business processes. From development to deployment, we ensure our solutions are high-performance, integration-ready, and lifecycle optimised.")}
                        </li>
                        <li>
                          <b>{t("Tech:")}</b> {t(".NET, C#, VB.NET, Angular, React, Blazor, Azure DevOps.")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Slider End */}
          </div>
          <div className="testimonial-slider enterslide mobileview">
            <div className="swiper">
              <div className="swiper-wrapper">
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="MeRLIN-service">
                    <div className="service-icon1">
                        <svg
                          width={80}
                          height={80}
                          viewBox="0 0 80 80"
                          fill="none"
  role="img" 
  aria-label="Cloud native architectural services icon"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_3813_38813"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={80}
                            height={80}
                          >
                            <path
                              d="M0 7.62939e-06H80V80H0V7.62939e-06Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask0_3813_38813)">
                            <path
                              className="icns"
                              d="M40 30.4688C32.2455 30.4688 25.9375 24.1608 25.9375 16.4062C25.9375 8.65172 32.2455 2.34375 40 2.34375C47.7545 2.34375 54.0625 8.65172 54.0625 16.4062C54.0625 24.1608 47.7545 30.4688 40 30.4688Z"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M35.0273 11.4344L44.9711 21.3782"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M35.0273 21.3781L44.9711 11.4343"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M11.7188 16.4062C11.7188 18.995 9.62 21.0938 7.03125 21.0938C4.4425 21.0938 2.34375 18.995 2.34375 16.4062C2.34375 13.8175 4.4425 11.7188 7.03125 11.7188C9.62 11.7188 11.7188 13.8175 11.7188 16.4062Z"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M77.6562 16.4062C77.6562 18.995 75.5575 21.0938 72.9688 21.0938C70.38 21.0938 68.2812 18.995 68.2812 16.4062C68.2812 13.8175 70.38 11.7188 72.9688 11.7188C75.5575 11.7188 77.6562 13.8175 77.6562 16.4062Z"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M68.125 68.2812H11.875C11.875 73.4589 16.0723 77.6562 21.25 77.6562H58.75C63.9277 77.6562 68.125 73.4589 68.125 68.2812Z"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M63.4375 68.2812V39.8438H16.5625V68.2812"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M40 39.8438V30.4688"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M11.7188 16.4062H25.9375"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M68.2812 16.4062H54.0625"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M30.625 56.5625V51.875"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M40 56.5625V51.875"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                            <path
                              className="icns"
                              d="M49.375 56.5625V51.875"
                              stroke="#499A9A"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                            />
                          </g>
                        </svg>
                      {/* <i class="bi bi-people-fill"></i> */}
                    </div>
                    <h3>{t("Architecture Services:")}</h3>
                    <ul>
                      <li>
                        {t("We design and implement MACH architecture on Microsoft Azure, leveraging Microservices, APIs, Cloud-Native and Headless principles, and event-driven systems. Our solutions ensure high availability, scalability, and faster innovation cycles, while modernising legacy infrastructure.")}
                      </li>
                      <li>
                        <b>{t("Tech:")}</b> {t("MACH, SOA, Microsoft Azure, Event-driven Frameworks")}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="MeRLIN-service">
                    <div className="service-icon1">
                      <svg
                        width={80}
                        height={80}
                        viewBox="0 0 80 80"
                        fill="none"
  role="img" 
  aria-label="Digital services App modernization icon"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="icns"
                          d="M11.2113 67.933H1.71875"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="icns"
                          d="M26.9082 39.0114C19.6764 31.7792 19.6764 20.0547 26.9082 12.8225C34.14 5.59075 45.8652 5.59075 53.0971 12.8225C60.3288 20.0547 60.3288 31.7792 53.0971 39.0114C45.8653 46.2431 34.14 46.2431 26.9082 39.0114Z"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="icns"
                          d="M40 63.2646V44.5908"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="icns"
                          d="M53.2267 67.933H44.668"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="icns"
                          d="M35.3323 67.933H26.7734"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="icns"
                          d="M78.2816 67.933H68.7891"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="icns"
                          d="M32.2959 33.6195C28.042 29.3653 28.042 22.4685 32.2959 18.2142C36.55 13.9603 43.4471 13.9603 47.7012 18.2142C51.9551 22.4685 51.9551 29.3653 47.7012 33.6195C43.4471 37.8735 36.55 37.8735 32.2959 33.6195Z"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="icns"
                          d="M40 7.39856C18.8581 7.39872 1.71875 25.9168 1.71875 25.9168C1.71875 25.8512 18.8578 44.4348 40 44.4351C61.1419 44.435 78.2812 26.0068 78.2812 25.9168C78.2812 25.9168 61.1422 7.39887 40 7.39856Z"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="icns"
                          d="M32.2969 18.2144L47.7022 33.6195"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="icns"
                          d="M32.2969 33.6195L39.9995 25.9169L47.7022 18.2144"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="icns"
                          d="M41.7887 72.2468C44.1708 71.2601 45.302 68.5291 44.3153 66.1471C43.3286 63.765 40.5976 62.6338 38.2155 63.6205C35.8334 64.6072 34.7022 67.3382 35.689 69.7203C36.6757 72.1024 39.4066 73.2335 41.7887 72.2468Z"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="icns"
                          d="M22.1039 72.6014H15.8794C13.3011 72.6014 11.2109 70.5112 11.2109 67.933C11.2109 65.3547 13.3011 63.2645 15.8794 63.2645H22.1039C24.6822 63.2645 26.7723 65.3547 26.7723 67.933C26.7723 70.5112 24.6822 72.6014 22.1039 72.6014Z"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          className="icns"
                          d="M64.1195 72.6014H57.895C55.3167 72.6014 53.2266 70.5112 53.2266 67.933C53.2266 65.3547 55.3167 63.2645 57.895 63.2645H64.1195C66.6978 63.2645 68.788 65.3547 68.788 67.933C68.788 70.5112 66.6978 72.6014 64.1195 72.6014Z"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {/*<img src="/images/ss5.svg" alt="">*/}
                      {/* <i class="bi bi-cart-check-fill"></i> */}
                    </div>
                    <h3>{t("App Modernisation:")}</h3>
                    <ul>
                      <li>
                        {" "}
                        {t("We transform outdated systems into modern, cloud-native applications using composable architectures and scalable frameworks. Improved performance and security through tools like Algolia, Amplience, and Metapack.")}
                      </li>
                      <li>
                        <b>{t("Tech:")}</b> {t("Microservices, Serverless Computing, Emarsys")}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="MeRLIN-service">
                    <div className="service-icon1">
                      <svg
                        width={73}
                        height={79}
                        viewBox="0 0 73 79"
                        fill="none"
  role="img" 
  aria-label="Digital services app development icon"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.7573 40.8894C24.5186 40.8894 23.2945 40.9743 22.1733 41.3518C22.173 41.3519 22.1727 41.3519 22.1723 41.3521C16.16 42.9378 11.7266 48.4169 11.7266 54.9327C11.7266 62.4536 17.6336 68.5936 25.0573 68.9586C25.0573 68.9586 25.0577 68.9586 25.058 68.9588C25.2866 68.9982 25.523 68.976 25.7575 68.976C33.5066 68.976 39.7883 62.6886 39.7883 54.9327C39.7881 47.1768 33.5064 40.8894 25.7573 40.8894Z"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.8264 77.5625L20.6473 74.7904C18.7827 74.312 17.0042 73.5742 15.3448 72.5908L12.5511 73.7172L6.99047 68.1515L8.11578 65.3553C7.13313 63.6945 6.39594 61.9143 5.91797 60.0481L3.14844 58.8681V50.9975L5.91797 49.8175C6.39594 47.9511 7.13313 46.1711 8.11578 44.5103L6.99047 41.714L12.5511 36.1484L15.3448 37.2748C17.0042 36.2914 18.7827 35.5534 20.6473 35.0751L21.8264 32.3031H29.6903L30.8694 35.0751C32.7341 35.5536 34.5123 36.2914 36.1719 37.2748L38.9656 36.1484L44.5262 41.714L43.4009 44.5103C44.3836 46.1711 45.1206 47.9512 45.5988 49.8175L48.3683 50.9975V58.8681L45.5988 60.0481C45.1206 61.9145 44.3836 63.6945 43.4009 65.3553L44.5262 68.1515L38.9656 73.7172L36.1719 72.5908C34.5123 73.5744 32.7341 74.312 30.8694 74.7904L29.6903 77.5625H21.8264Z"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M45.6609 10.8779C45.0892 10.0618 43.6513 9.45524 41.772 10.0223C40.0464 10.5429 39.2731 13.3088 41.5239 14.372C41.877 14.5388 42.782 14.8949 44.1475 15.3784C47.2034 16.4604 47.3039 20.4806 43.677 20.7979C42.4684 20.9037 40.7452 20.5782 39.8281 19.4379"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M42.9727 20.9246V21.8613"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M42.9727 8.62109V9.73469"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M43.1264 29.4822C50.9972 29.4822 57.3778 23.1062 57.3778 15.2411C57.3778 7.37595 50.9972 1 43.1264 1C35.2556 1 28.875 7.37595 28.875 15.2411C28.875 23.1062 35.2556 29.4822 43.1264 29.4822Z"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M71.9127 43.6286L61.175 27.0428L50.4375 43.6286H56.1809V77.5625H66.1692V43.6286H71.9127Z"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.8414 19.5936L10.4206 4.84717L1 19.5936H6.03906V29.7712H14.8023V19.5936H19.8414Z"
                          stroke="#499A9A"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {/*<img src="/images/ss6.svg" alt="">*/}
                      {/* <i class="bi bi-pie-chart-fill"></i> */}
                    </div>
                    <h3>{t("Application Development:")}</h3>
                    <ul>
                      <li>
                        {t("We build enterprise-grade, custom designed applications tailored to your business processes. From development to deployment, we ensure our solutions are high-performance, integration-ready, and lifecycle optimised.")}
                      </li>
                      <li>
                        <b>{t("Tech:")}</b> {t(".NET, C#, VB.NET, Angular, React, Blazor, Azure DevOps.")}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Testimonial Slide End */}
              </div>
              <div className="testimonial-btn">
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
                <span className="testspace" style={{ color: "#000" }}>
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
        </div>
      </div>
    </div>
  </div>
  {/* Our Testimonial Section End */}
  {/* Hero Section Start*/}
  <div className="aboutretail retail-baner1 retail-baner-11 approachh1 activateservice systemview pd60">
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-6">
          <div className="section-title">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Activate Data and Intelligence")}
            </h2>
            <p>
              {t("Unlock the full potential of your data to drive smarter, faster business decisions. By connecting, integrating, and activating your data, we turn it into real-time, actionable intelligence that empowers you to make data-driven decisions and optimise performance at scale.")}
            </p>
          </div>
          <div className="pill-points appro">
            <div className="challenge-point-waber self-service">
              <img src="/images/app1.svg" alt="Digital services integration and services icon" />
              <div className="pill-cont">
                <h5>{t("Integration & Data Services:")}</h5>
                <p>
                  {t("We enable Microservices and API-led integration and real-time data connectivity across your digital ecosystem. Get real-time insights, and automated workflows using Azure Logic Apps, API Management, and Cosmos DB.")} <br /> <b>{t("Tech:")}</b> 
                  {t("SQL, Azure, Data Factory, Real-time Data Services")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/app2.svg" alt="Data engineering in digital services icon" />
              <div className="pill-cont">
                <h5>{t("Data Engineering & Warehousing:")}</h5>
                <p>
                  {t("Engineer scalable data pipelines and modern cloud warehouses to unlock enterprise insights. We build and manage secure, optimised data platforms for advanced analytics using Azure Data Lake, Synapse Analytics, and Delta Lake architectures.")}
                  <br /> <b>{t("Tech:")}</b> 
                  {t("Azure Data Lake, Synapse Analytics, Delta Lake, Azure Data Factory")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/app3.svg" alt="AI and Analytics icon" />
              <div className="pill-cont">
                <h5>{t("AI & Analytics:")}</h5>
                <p>
                  {" "}
                  {t("We deploy AI and Azure Machine Learning solutions to deliver predictive analytics, intelligent automation, and business insights. Our Power BI and Tableau solutions enable real-time dashboards and data visualisation for decision intelligence.")} <br />{" "}
                  <b>{t("Tech:")}</b> 
                  {t("Azure Machine Learning, Power BI, Tableau")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        {/* <img src="/new/retail-baner.jpg" alt=""> */}
      </div>
    </div>
  </div>
  <div className="aboutretail mobileturn mobileview dnone pd60">
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-6">
          <div className="section-title">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Activate Data and Intelligence")}
            </h2>
            <p>
              {t("Unlock the full potential of your data to drive smarter, faster business decisions. By connecting, integrating, and activating your data, we turn it into real-time, actionable intelligence that empowers you to make data-driven decisions and optimise performance at scale.")}
            </p>
          </div>
          <div className="pill-points appro">
            <div className="challenge-point-waber self-service">
              <img src="/images/app1.svg" alt="Digital services integration and services icon" />
              <div className="pill-cont">
                <h5>{t("Integration & Data Services:")}</h5>
                <p>
                  {t("We enable Microservices and API-led integration and real-time data connectivity across your digital ecosystem. Get real-time insights, and automated workflows using Azure Logic Apps, API Management, and Cosmos DB.")} <br /> <b>{t("Tech:")}</b> 
                  {t("SQL, Azure, Data Factory, Real-time Data Services")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/app2.svg" alt="Data engineering in digital services icon" />
              <div className="pill-cont">
                <h5>{t("Data Engineering & Warehousing:")}</h5>
                <p>
                  {t("Engineer scalable data pipelines and modern cloud warehouses to unlock enterprise insights. We build and manage secure, optimised data platforms for advanced analytics using Azure Data Lake, Synapse Analytics, and Delta Lake architectures.")}
                  <br /> <b>{t("Tech:")}</b> 
                  {t("Azure Data Lake, Synapse Analytics, Delta Lake, Azure Data Factory")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/app3.svg" alt="AI and Analytics icon" />
              <div className="pill-cont">
                <h5>{t("AI & Analytics:")}</h5>
                <p>
                  {" "}
                  {t("We deploy AI and Azure Machine Learning solutions to deliver predictive analytics, intelligent automation, and business insights. Our Power BI and Tableau solutions enable real-time dashboards and data visualisation for decision intelligence.")}<br />
                  <b>{t("Tech:")}</b> 
                  {t("Azure Machine Learning, Power BI, Tableau")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mobileapproach">
        <img src="/images/approach.jpg" alt="" />
      </div>
    </div>
  </div>
  {/* Hero Section End*/}
  {/* Our Services Section Start */}
  <div className="our-services thepath digisec digialserpage pd30">
    <div className="container">
      <div className="row section-row text-center">
        <div className="col-lg-12">
          {/* Section Title Start */}
          <div className="section-title digitalexp">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Enhance Digital Experiences")}
            </h2>
            <p>
              {t("Deliver seamless, intuitive, and high-performing digital experiences that improve user engagement, retention, and conversions. We design modern, responsive, and accessible digital interfaces that empower your users and deliver exceptional experiences across all platforms.")}
            </p>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className=" digiexperience">
        <div className="row sersec">
          <div className="col-lg-6 col-md-6">
            <div className="service-item firstmobile">
              <div className="service-item-body">
                <h3>{t("UX/UI Services")}</h3>
                <p>
                  {t("We design intuitive, user-centric interfaces using tools like Figma, Webflow, and Adobe XD, blending AR/VR and inclusive design. Our approach ensures clear navigation, responsive design, and enhanced user journeys.")}
                </p>
                <p>
                  <b>{t("Tech :")} </b> 
                  {t("Figma, Webflow, Anima, AR/VR Design, Adobe XD")}
                </p>
                <img src="/images/digiexp.png" alt="Advanced UI UX development services image" />
              </div>
            </div>
            {/* Service Item End */}
          </div>
          <div className="col-lg-6 col-md-6">
            {/* Service Item Start */}
            <div className="service-item secondmobile">
              <div className="service-item-body">
                <h3>{t("Mobile Applications")}</h3>
                <p>
                  {t("We build scalable, high-performance mobile applications for iOS and Android using cross-platform and native technologies using React Native, Flutter, and native SDKs. Integrated with Azure, our solutions deliver reliable, engaging experiences for standalone and hybrid deployments.")}
                </p>
                <p>
                  <b>{t("Tech :")} </b> 
                  {t("React Native, Flutter, iOS SDK, Android SDK, Microsoft Azure, Hybrid Apps, Standalone Apps")}
                </p>
                <img src="/images/digiexp2.png" alt="Mobile app development image" />
              </div>
            </div>
          </div>
          {/* Service Item End */}
        </div>
      </div>
    </div>
  </div>
  {/* Our Services Section End */}
  {/* Our Services Section Start */}
  <div className={`our-services1 customer digiserpage digisecureimg pd30 ${language === 'German' ? 'gerdigisecure' : ''}`}>
    <div className="container">
      <div className="row section-row">
        <div className="col-lg-6">
          {/* Section Title Start */}
          <div className="section-title">
            <h2 className="text-anime-style-21" data-cursor="-opaque">
              {t("Cloud Security, Managed Services & IT Operations")}
            </h2>
            <p>
              {t("Building a secure and resilient IT environment is crucial for sustaining operations and ensuring business continuity. We offer a range of services to safeguard your infrastructure, optimise performance, and enable continuous, proactive management of your technology environment.")}
            </p>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className=" cussec">
        <div className="row ">
          <div className="col-lg-6 col-md-6">
            <div className="service-item ">
              <div className="service-item-body">
                <h3>{t("Managed Services")}</h3>
                <p>
                  {" "}
                  {t("We deliver 24/7 monitoring, proactive support, and optimisation to keep your IT environment secure and resilient. Using Azure Sentinel and Defender, we protect against threats and enhance performance.")}
                </p>
                <p>
                  <b>{t("Tech :")} </b> 
                  {t("Azure Sentinel, Azure Defender, Proactive Security Management")}
                </p>
                <img src="/images/cu1.png" alt="Secure KPI driven managed services image" />
              </div>
            </div>
            {/* Service Item End */}
          </div>
          <div className="col-lg-6 col-md-6">
            {/* Service Item Start */}
            <div className="service-item ">
              <div className="service-item-body identifyimg">
                <h3>{t("Identity Solutions")}</h3>
                <p>
                  {t("We implement Zero Trust security architectures and Microsoft Entra for identity management and MFA, ensuring protected, compliant operations. Our approach ensures secure access, compliance, and risk mitigation.")}
                </p>
                <p>
                  <b>{t("Tech :")} </b> 
                  {t("Microsoft Entra, Zero Trust, MFA")}
                </p>
                <div className="text-center">
                <img src="/images/cus2.png" alt="Identity management solutions image" />
                </div>
              </div>
            </div>
            {/* Service Item End */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Our Services Section End */}



  
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
                            {t("What services does RheinBrücke provide?")} 
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
                              {t("RheinBrücke offers comprehensive services including ERP implementation, upgrades, global rollouts, application support and maintenance, digital transformation consulting, and custom software development tailored to specific business needs.")}  
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
                             {t("Is consulting provided prior to implementation?")}
                          </button>
                        </h2>
                        <div
                          id="collapse2"
                          className="accordion-collapse collapse "
                          aria-labelledby="heading2"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>{t("Yes. RheinBrücke’s expert consultants conduct detailed readiness assessments and develop customized roadmaps to align ERP projects with organizational goals, ensuring smooth transitions and successful outcomes.")}</p>
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
                            {t("How does RheinBrücke ensure project success?")} 
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
                              {t("Projects follow proven methodologies and industry best practices, utilizing standardized templates and emphasizing user adoption, change management, and clear ROI measurement to maximize business value from ERP investments.")} 
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
                          {t("Are 24x7 support options available?")} 
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading4"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>{t("Yes. RheinBrücke offers 24x7 global support across multiple time zones, providing continuous system monitoring, issue resolution, and proactive maintenance to keep ERP systems running optimally.")}</p>
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
                            {t("How do you implement MACH architecture in your digital solutions?")} 
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
                              {t("We implement MACH architecture using a practical, engineering-led approach rather than a theoretical model. Systems are broken down into microservices, exposed through API-first layers, and deployed on cloud-native infrastructure, primarily Microsoft Azure. Headless components are introduced where flexibility across web, mobile, and commerce platforms is required.")}  
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
                            {t("What tools and technologies do you support?")} 
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
                              {t("We work across a wide enterprise stack covering cloud, application development, data engineering, integration, and experience layers. This includes Microsoft Azure services, .NET and modern frontend frameworks, API management and integration services, data platforms like Azure Data Lake and Synapse, and analytics tools such as Power BI.")}  
                            </p>
                            <p>
                              {t("The focus is not on pushing a fixed stack but aligning the right technologies to the use case, whether it is application modernisation, data platform build, or cloud migration. This is typically relevant for organisations operating in markets like the UAE where scalability, security, and integration with existing enterprise systems are critical.")}  
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
              <h2>{t("Built for Scale. Designed for Impact.")}</h2>
              <p>
                {t("Every engagement is designed for measurable value. We help enterprises modernise applications, unlock data value, enhance digital experiences, and secure operations, all aligned to measurable business outcomes.")}
              </p>
              <p>{t("Let’s accelerate your digital transformation journey.")}</p>
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