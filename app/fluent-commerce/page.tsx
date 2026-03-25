"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import {useTranslation} from "../hooks/useTranslation";
export default function EnterpriseSolutions() {
  const { t, language } = useTranslation();
    return (
        <CommomLayout>
<>
  {/* Header Start */}
  {/*?php include "navbar.php" ?*/}
  {/* Header End */}
  <div className="hero brainsec enter  retailsection1 mobilefluent">
    <div className="parent2 retailparent2 rechange-baner mobilevideo">
      <img src="/images/FluentCommece2.png" alt="" />
      {/* <video src="/videos/fluent1.mp4" autoplay muted loop playsinline class="bg-image1"></video> */}
    </div>
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-5">
          <div className="section-title">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Fluent Commerce Solutions & Services")}
            </h2>
            <p>
              {t("Unlock faster, smarter, and more reliable order orchestration with Fluent Commerce.")}
            </p>
            <p>
              {t("At RheinBrücke, we help businesses gain real-time inventory visibility and optimise fulfilment strategies with Fluent Commerce’s cloud-native Distributed Order Management System (OMS).")}
            </p>
          </div>
        </div>
        <div className="col-sm-7 pd0">
          <div className="corusimg mobileview">
            <img src="/images/FluentCommece2.png" alt="" />
          </div>
          {/* <div class="parent2 retailparent2 ">
              <video src="/videos/fluent1.mp4" autoplay muted loop playsinline class="bg-image1"></video>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section Start*/}
  <div className=" buildsection mobilewhyfc">
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
                  {t("Why Fluent Commerce")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center width80">
        <div className="col-sm-4 col-12">
          <div className="dynamics-advantage-waber">
            <img src="/new/g501.svg" alt="" />
            <p>
              {t("Real-time inventory visibility across all locations and channels")}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad2.svg" alt="" />
            <p>
              {t("Intelligent order routing based on stock, location, SLAs, and priorities")}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad3.svg" alt="" />
            <p>
              {t("Full support for ship-from-store, click & collect, and split orders")}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad4.svg" alt="" />
            <p>
              {t("Seamless API-first integration with eCommerce, ERP, WMS, CRM")}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad5.svg" alt="" />
            <p>
              {t("Scalable, MACH-compatible architecture with robust uptime")}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End*/}
  <section className={`mds-section capabilities mobilecommexpert pd50 ${language === 'German' ? 'gercommexp' : ''}`}>
    <div className="container">
      <div className="content width50">
        <div className="section-title ">
          <div className="hero-video-content1 wow fadeInUp mt-4">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Our Fluent Commerce Expertise")}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      {/* Testimonial Slider Start */}
      <div className="overview-slider5">
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/implementation.svg" alt="" />
                {/* <h6> Dynamics 365 ERP & CRM Solutions</h6> */}
                <p>
                  {t("Fluent Commerce Implementation & Configuration")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/end-t-end-order-management.svg" alt="" />
                <p>
                  {t("End-to-end Order Management Design & Rollout")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/system-integration.svg" alt="" />
                <p>
                  {t("System Integration with ERP, WMS, CRM, and eCommerce platforms")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/inventory-visibility.svg" alt="" />
                <p>
                  {t("Inventory Visibility & Fulfilment Optimisation")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/ship-to-store.svg" alt="" />
                <p>
                  {t("Enablement for Ship-from-Store and Click & Collect")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/custom-workflow.svg" alt="" />
                <p>
                  {t("Custom Workflows & API Development")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/oms-support.svg" alt="" />
                <p>
                  {t("Managed OMS Support & Monitoring")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
          </div>
          <div className="testimonial-btn rtyElement">
            <div className="testimonial-button-prev">
              <div className="animated-svg-link1 btn-style-3">
                <span className="svg-container ">
                  <span className=" left">
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
            <span className="testspace">1/6</span>
            <div className="testimonial-button-next">
              <div className="animated-svg-link1 btn-style-3">
                <span className="svg-container ">
                  <span className=" left">
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
  {/* Hero Section Start*/}
  <div className="hero digi2 self1 mobileself1">
    <div className="container">
      <div className="row">
        <div className="col-sm-6  systemview order2 pd0">
          <div className="hero-bg-video buildsec mobileux">
            {/*<video autoplay muted loop id="myVideo" height="800">*/}
            {/*    <source src="/videos/fluent1.mp4" type="video/mp4">*/}
            {/*</video>*/}
            <img src="/new/fr33.jpg" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hero-content buildsecont pd50">
            <div className="section-title">
              <div className="hero-video-content wow fadeInUp mt-4">
                <h2
                  className="text-anime-style-2 text-dark"
                  data-cursor="-opaque"
                >
                  {t("Why RheinBrücke")}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss1.svg" alt="" />
                  <p>
                    {t("Composable commerce integration with MACH expertise")}
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss2.svg" alt="" />
                  <p>
                    {t("Deep domain knowledge in retail, B2B, and distribution")}
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss3.svg" alt="" />
                  <p>
                    {t("Global scale delivery with agile, phased rollouts")}
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss4.svg" alt="" />
                  <p>
                    {t("Deployments focused on speed, CX, and fulfilment efficiency")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mobileview">
        <div className="corusimg-5 ">
          <img src="/new/fr33.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End*/}
  {/* Footer Start */}
  <footer className="main-footer pd0">
    {/* Footer Main Start */}
    <div className="footer-main">
      <div className="container">
        <div className="firstrow">
          <div className="row">
            <div className="col-sm-8">
              <h2>
                {t("Modernise fulfilment and inventory operations")}
              </h2>
              <p>
                {t("Speak to our Fluent Commerce specialists today.")}
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