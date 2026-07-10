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
  {/* Header Start */}
  {/*?php include "navbar.php" ?*/}
  {/* Header End */}
  <div className="hero brainsec enter retailsection1 mobilecommpd0">
    <div className="parent2 retailparent2 rechange-baner mobilevideo">
      <img src="/images/commerce-tool2.png" alt="" />
      {/* <video src="/videos/commercetools.mp4" autoplay muted loop playsinline class="bg-image1"></video> */}
    </div>
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-5">
          <div className="section-title">
            <h2 className="text-anime-style-21" data-cursor="-opaque">
              {t("commercetools Solutions & Services")}
            </h2>
            <p>
              {t("Deliver agile, composable commerce and headless commerce solutions with commercetools.")}
            </p>
            <p>
              {t("At RheinBrücke, we help enterprises build future-proof digital commerce platforms using MACH-based, cloud-native technology. Using commercetools services, we build scalable commerce solutions, accelerate enterprise eCommerce transformation, and deliver consistent omnichannel customer experiences across web, mobile, marketplaces and every customer touchpoint.")}
            </p>
          </div>
        </div>
        <div className="col-sm-7 pd0">
          <div className="corusimg mobileview">
            <img src="/images/commerce-tool2.png" alt="" />
          </div>
          {/* <div class="parent2 retailparent2 mobileview">
              <video src="/videos/commercetools.mp4" autoplay muted loop playsinline class="bg-image1"></video>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  {/* Our Testimonial Section Start */}
  <div className="our-testimonial whyequitysec pd30">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-12">
          <div className="section-title text-center headingss">
            <h2 className="text-anime-style-2 text-black" data-cursor="-opaque">
              {t("Why Choose commercetools")}
            </h2>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12">
          {/* Testimonial Slider Start */}
          <div className="testimonial-slider-0009 equitywhy">
            <div className="swiper">
              <div className="swiper-wrapper">
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="matters-content-waber">
                    <img src="/images/agentic-ai.svg" alt="" />
                    <p>
                      {t("Built-in Agentic AI capabilities for intelligent and autonomous commerce")}
                    </p>  
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="matters-content-waber">
                    <img src="/images/api-first.svg" alt="" />
                    <p>
                      {t("API-first, microservices-based architecture for superior flexibility")}
                    </p>
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="matters-content-waber">
                    <img src="/images/headless-architecture.svg" alt="" />
                    <p>
                      {t("True headless architecture enabling fully decoupled frontends and backends")}
                    </p>
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="matters-content-waber">
                    <img src="/images/support-multi-store-currency.svg" alt="" />
                    <p>
                      {t("Full support for multi-store, multi-currency, multilingual, and omnichannel commerce")}
                    </p>
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="matters-content-waber">
                    <img src="/images/rapid-innovation.svg" alt="" />
                    <p>
                      {t("Modular commerce components and pre-built integrations")}
                    </p>
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="matters-content-waber">
                    <img src="/images/enterprise-grade-security.svg" alt="" />
                    <p>
                      {t("Enterprise-grade security, high availability, and cloud-native resilience")}
                    </p>
                  </div>
                </div>
                {/* Testimonial Slide End */}
              </div>
              <div className="testimonial-btn5 ">
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
          {/* Testimonial Slider End */}
        </div>
      </div>
    </div>
  </div>
  {/* Our Testimonial Section End */}
  <section className="grid-section systemview pd50">
    <div className="grid-overlay" />
    <div className="container">
      <div className="content gridsec">
        <div className="section-title">
          <div className="hero-video-content wow fadeInUp mt-4">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Our commercetools Expertise")}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="skew-carousel owl-carousel">
      <div className="item">
        <div className="inner">
          <img src="/images/g1.png" alt="Commerce Implementation, Migration and Management icon" />
          <p>{t("Commerce Platform Implementation, Migration and Management")}</p>
        </div>
      </div>
      <div className="item">
        <div className="inner">
          <img src="/images/g2.png" alt="commercetools design and delivery icon" />
          <p>{t("Composable Architecture Design & Delivery")}</p>
        </div>
      </div>
      <div className="item">
        <div className="inner">
          <img src="/images/g3.png" alt="commercetools frontend Integration icon " />
          <p>
            {t("React, Vue Storefront, Frontastic & Custom Frontend Integration")}
          </p>
        </div>
      </div>
      <div className="item">
        <div className="inner">
          <img src="/images/g4.png" alt="commercetools Product and Pricing icon" />
          <p>{t("Product, Pricing, and Order API Integration")}</p>
        </div>
      </div>
      <div className="item">
        <div className="inner">
          <img src="/images/g5.png" alt="commercetools Engine Development icon" />
          <p>{t("Checkout, Cart & Promotion Engine Development ")}</p>
        </div>
      </div>
      {/* Duplicate for seamless marquee */}
      <div className="item">
        <div className="inner">
          <img src="/images/g1.png" alt="commercetools custom Extensions & Microservices icon" />
          <p>{t("Custom Extensions & Microservices ")}</p>
        </div>
      </div>
      <div className="item">
        <div className="inner">
          <img src="/images/g2.png" alt="commercetools services and management icon" />
          <p>{t("Ongoing Managed Services & Optimisation")}</p>
        </div>
      </div>
    </div>
    {/* your content */}
  </section>
  <section className="grid-section1 mobileview pd50">
    {/* <div class="grid-overlay"></div> */}
    <div className="container">
      <div className="content gridsec">
        <div className="section-title">
          <div className="hero-video-content wow fadeInUp mt-4">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Our commercetools Expertise")}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="testimonial-slider-marquee enterslide gridmobilsec">
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="MeRLIN-service">
                <div className="inner">
                  <img src="/images/g1.png" alt="Commerce Implementation, Migration and Management icon" />
                  <p>{t("Commerce Platform Implementation, Migration and Management")}</p>
                </div>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="MeRLIN-service">
                <div className="inner">
                  <img src="/images/g2.png" alt="commercetools design and delivery icon" />
                  <p>{t("Composable Architecture Design & Delivery")}</p>
                </div>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="MeRLIN-service">
                <div className="inner">
                  <img src="/images/g3.png" alt="commercetools frontend Integration icon" />
                  <p>
                    {t("React, Vue Storefront, Frontastic & Custom Frontend Integration")}
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="MeRLIN-service">
                <div className="inner">
                  <img src="/images/g4.png" alt="commercetools Product and Pricing icon" />
                  <p>{t("Product, Pricing, and Order API Integration")}</p>
                </div>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="MeRLIN-service">
                <div className="inner">
                  <img src="/images/g5.png" alt="commercetools Engine Development icon" />
                  <p>{t("Checkout, Cart & Promotion Engine Development ")}</p>
                </div>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="MeRLIN-service">
                <div className="inner">
                  <img src="/images/g1.png" alt="commercetools custom Extensions & Microservices icon" />
                  <p>{t("Custom Extensions & Microservices ")}</p>
                </div>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="MeRLIN-service">
                <div className="inner">
                  <img src="/images/g2.png" alt="commercetools services and management icon" />
                  <p>{t("Ongoing Managed Services & Optimisation")}</p>
                </div>
              </div>
            </div>
            {/* Testimonial Slide End */}
          </div>
          <div className="testimonial-btn">
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
    </div>
  </section>
  {/* Hero Section Start*/}
  <div className="aboutretail retail-baner1 retail-baner-11 approachh mobilegolf mobilecommimg pd60">
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-5">
          <div className="section-title">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Why RheinBrücke")}
            </h2>
          </div>
          <div className="pill-points appro">
            <div className="challenge-point-waber self-service">
              <img src="/images/app1.svg" alt="Certified commercetools implementation icon" />
              <div className="pill-cont">
                {/* <h5>Solution Architecture</h5> */}
                <p>{t("Certified commercetools and MACH specialists")}</p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/app2.svg" alt="commercetools global delivery icon" />
              <div className="pill-cont">
                {/* <h5>Project Management</h5> */}
                <p>{t("Enterprise B2B & global delivery expertise across retail, distribution & digital ecosystems")}</p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/app3.svg" alt="commercetools  multi-platform integration icon" />
              <div className="pill-cont">
                {/* <h5>Consulting</h5> */}
                <p>{t("Integrations across ERP, OMS, CRM, PIM, CMS and payment platforms")}</p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/fe3.svg" alt="commercetools transformation and implementation icon" />
              <div className="pill-cont">
                {/* <h5>Consulting</h5> */}
                <p>{t("Strategic and rapid commerce transformation and implementation")}</p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/fe5.svg" alt="commercetools architects and partnership icon" />
              <div className="pill-cont">
                {/* <h5>Consulting</h5> */}
                <p>{t("Long-term partnership with managed services and continuous optimisation")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 pd0">
          <div className="mobileapproach mobileview">
            <img src="/images/aboutretail.jpg" alt="" />
          </div>
          {/* <img src="/new/retail-baner.jpg" alt=""> */}
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End*/}



  
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
                            {t("What is commercetools and what are the key principles of its architecture?")}
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
                              {t("commercetools is a leading cloud-native, composable commerce platform built on the principles of MACH architecture:")}
                              <br />
                              {t("· Microservices: Modular, independent services for ultimate flexibility.")}
                              <br />
                              {t("· API-first: Everything is accessible via a robust API.")}
                              <br />
                              {t("· Cloud-native: Scalability and reliability guaranteed via the cloud (SaaS).")}
                              <br />
                              {t("· Headless: Decoupling the front-end experience from the back-end commerce logic.")}
                              <br />
                              {t("It allows organizations to create highly flexible, customized, and future-proof digital stores without vendor lock-in.")}
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
                            {t("How does RheinBrücke implement commercetools to unlock agility?")}
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
                              {t("Our implementation focuses on leveraging the platform's headless commerce capabilities. We design and deploy a decoupled eCommerce architecture where the core commerce engine (commercetools) is integrated with best-of-breed tools. We then integrate it seamlessly with critical back-end systems like ERP (Enterprise Resource Planning) and OMS (Order Management Systems) to create a unified commerce flow.")}
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
                            {t("Can commercetools integrate in real-time with enterprise systems like Epicor or SAP?")}
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
                              {t("Yes, integration with core ERP platforms is crucial and is our specialty. Using the platform's robust API-first approach, we build custom, high-performance connectors (or leverage pre-built middleware solutions) to synchronize essential data. This enables real-time data flow for product information management (PIM), dynamic pricing, inventory levels, and order synchronization between commercetools and systems like Epicor or SAP S/4HANA.")}
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
                            {t("Which industries and business models benefit most from adopting commercetools?")}
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
                              {t("Composable commerce is a game-changer for businesses that require high flexibility and speed. It benefits:")}
                              <br />
                              {t("· Brand Owners & Manufacturers (D2C/DTC): Seeking to control the end-to-end customer experience and bypass traditional retailers.")}
                              <br />
                              {t("· B2B & Enterprise Retailers: Needing complex catalogues, bespoke pricing, and multi-region/multi-brand capabilities.")}
                              <br />
                              {t("· Any organization adopting an omnichannel commerce strategy who needs to deploy commerce functionalities across non-traditional touchpoints (e.g., mobile apps, IoT devices, or in-store kiosks).")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item 4 End */}
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
              <h2>{t("Let’s modernise your commerce experience")}</h2>
              <p>{t("Connect with our commercetools experts today.")}</p>
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