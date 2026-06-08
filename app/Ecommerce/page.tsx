"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import {useTranslation} from "../hooks/useTranslation";
export default function digitalsolution() {
  const { t, language } = useTranslation();
    return (
        <CommomLayout>
            <>
                {/* Header Start */}
                {/*?php include "navbar.php" ?*/}
                {/* Header End */}
                <div className="hero brainsec enter  retailsection1 sm-img  erpexcel ">
                    <div className="parent2 retailparent2 rechange-baner  mobilevideo">
                        <img src="/new/ecom-99.jpeg" alt="" />
                        {/* <video src="/videos/achitect.mp4" autoplay muted loop playsinline class="bg-image1"></video> */}
                    </div>
                    <div className="container">
                        <div className="row section-row1 align-items-center builtsec">
                            <div className="col-sm-5">
                                <div className="section-title">
                                    <h2 className="text-anime-style-21" data-cursor="-opaque">
                                        {t("Enterprise Ecommerce Solutions & Digital Commerce Services")}
                                    </h2>
                                    <p>
                                        {t("Build scalable, fast, and personalized digital storefronts with composable commerce architecture.")}
                                    </p>
                                    <p>
                                        {t("Our headless, cloud-native solutions modernize legacy infrastructure, unify sales channels, and optimize order management systems. Turn complex operations into agile, high-performance digital commerce engines that accelerate revenue growth and customer loyalty.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="corusimg mobileview">
                                    <img src="/new/ecom-99.jpeg" alt="" />
                                </div>
                                {/* <div class="parent2 retailparent2 mobileview">
              <video src="/videos/achitect.mp4" autoplay muted loop playsinline class="bg-image1"></video>
          </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section Start*/}
                <div className=" buildsection mobilepdb40">
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
                                                {t("Why Choose us for Ecommerce Transformation?")}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center width80">
                            <div className="col-sm-4 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/g501.svg" alt="Ecommerce migration icon" />
                                    <p>{t("A proven track record of migrating complex enterprise commerce systems to flexible architectures.")}</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad2.svg" alt="Ecommerce management icon" />
                                    <p>
                                        {t("Deep specialization in multi-channel integration, order management, and automated product data synchronization.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad3.svg" alt="Next-gen Ecommerce tools icon" />
                                    <p>
                                        {t("Strong alliance and delivery capabilities with industry leaders like commercetools for next-gen commerce.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad4.svg" alt="Ecommerce support and deployment icon" />
                                    <p>
                                        {t("Complete end-to-end support, covering initial strategy, frontend design, cloud deployment, and managed services.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-12">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad5.svg" alt="Ecommerce customer satisfaction icon" />
                                    <p>
                                        {t("Relentless focus on faster time-to-market, higher revenue, and stronger customer loyalty.")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section End*/}
                <section className="mds-section dynamics mobileecommcap pd50">
                    <div className="container">
                        <div className="content text-left">
                            <div className="section-title ">
                                <div className="hero-video-content1 wow fadeInUp mt-4">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        {t("Our Capabilities")}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        {/* Testimonial Slider Start */}
                        <div className="overview-slider ">
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/new/ds1.svg" alt="Headless Commerce Architecture icon" />
                                            <h6> {t("Headless Commerce Architecture")}</h6>
                                            <p>{t("Storefronts redesigned for maximum brand agility and rapid development cycles.")}</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/new/ds2.svg" alt="Cloud-Native, API Driven ecommerce platform icon" />
                                            <h6> {t("Cloud-Native, API Driven platform")} </h6>
                                            <p>{t("Flexible microservices infrastructure built for effortless operations.")}</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/new/ds3.svg" alt="Seamless Ecommerce integration icon" />
                                            <h6> {t("Seamless Integration")} </h6>
                                            <p>{t("Harmonized data exchange across enterprise ERP, CRM, OMS and third-party systems.")}</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/new/ds4.svg" alt="Personalised Storefronts in ecommerce icon" />
                                            <h6> {t("Personalised Storefronts")}</h6>
                                            <p>{t("Advanced content management, intelligent search, and AI-powered product recommendations.")}</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/new/ds5.svg" alt="Ecommerce Omnichannel Experiences icon" />
                                            <h6> {t("Unified Omnichannel Experiences")}</h6>
                                            <p>{t("Consistent engagement across web, mobile, and in-store.")}</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/new/ds3.svg" alt="Ecommerce Performance Optimisation & Innovation icon" />
                                            <h6> {t("Performance Optimisation & Innovation")} </h6>
                                            <p>{t("Continuous platform innovation to keep you ahead.")}</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                </div>
                                <div className="testimonial-btn rtyElement ecommbtnn">
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
                {/* Our Testimonial Section Start */}
                <div className="our-testimonial epiccompanion1 epictechnology pd30">
                    <div className="container">
                        <div className="row section-row align-items-center">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        {t("Our Technology Partners")}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                {/* Testimonial Slider Start */}
                                <div className=" ecommers-8 enterslide ">
                                    <div className="swiper">
                                        <div className="swiper-wrapper testimonial-slider">
                                            {/* Testimonial Slide Start */}
                                            <div className="swiper-slide">
                                                <div className="service-item flip-card ">
                                                    <div className="flip-card-inner">
                                                        {/* Front Side */}
                                                        <div className="flip-card-front">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header ">
                                                                <div className="service-card">
                                                                    <img src="/images/ss1.svg" alt="Fluent Commerce partner icon" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body  oa-para-waber">
                                                                <h3> {t("Fluent Commerce")} </h3>
                                                                <p className="oa-para">
                                                                    {" "}
                                                                    {t("A distributed Order Management System (OMS) that optimises inventory, orders, and multi-location fulfilment at scale.")}
                                                                </p>
                                                                <div className="ser-btn serbtn1">
                                                                    <Link href="/fluent-commerce"
                                                                        className="animated-svg-link1 animated-svg-link12"
                                                                    >
                                                                        {t("Read More")}
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
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Testimonial Slide End */}
                                            {/* Testimonial Slide Start */}
                                            <div className="swiper-slide">
                                                <div className="service-item flip-card">
                                                    <div className="flip-card-inner">
                                                        {/* Front Side */}
                                                        <div className="flip-card-front ">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header">
                                                                <div className="service-card">
                                                                    <img src="/images/ss2.svg" alt="Commercetools partner icon" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body oa-para-waber">
                                                                <h3> {t("Commercetools")} </h3>
                                                                <p className="oa-para">
                                                                    {t("A headless commerce platform built on MACH principles, delivering speed, flexibility, and personalisation.")}
                                                                </p>
                                                                <div className="ser-btn serbtn1">
                                                                    <Link href="/Commercetools"
                                                                        className="animated-svg-link1 animated-svg-link12"
                                                                    >
                                                                        {t("Read More")}
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
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Testimonial Slide End */}
                                            {/* Testimonial Slide Start */}
                                            <div className="swiper-slide">
                                                <div className="service-item flip-card">
                                                    <div className="flip-card-inner">
                                                        {/* Front Side */}
                                                        <div className="flip-card-front">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header">
                                                                <div className="service-card">
                                                                    <img src="/images/ss3.svg" alt="Algolia partner icon" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body oa-para-waber">
                                                                <h3> {t("Algolia")} </h3>
                                                                <p className="oa-para">
                                                                    {" "}
                                                                    {t("High-performance AI-powered search and discovery, delivering lightning-fast, personalised results.")}
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Testimonial Slide End */}
                                            {/* Testimonial Slide Start */}
                                            <div className="swiper-slide">
                                                <div className="service-item flip-card">
                                                    <div className="flip-card-inner">
                                                        {/* Front Side */}
                                                        <div className="flip-card-front">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header">
                                                                <div className="service-card">
                                                                    <img src="/images/ss10.svg" alt="Contentstack partner icon" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body oa-para-waber">
                                                                <h3> {t("Contentstack")} </h3>
                                                                <p className="oa-para">
                                                                     {t("Centralized content infrastructure allowing marketing and product teams to update assets instantly using headless CMS.")}
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Testimonial Slide End */}
                                            {/* Testimonial Slide Start */}
                                            <div className="swiper-slide">
                                                <div className="service-item flip-card">
                                                    <div className="flip-card-inner">
                                                        {/* Front Side */}
                                                        <div className="flip-card-front ">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header">
                                                                <div className="service-card">
                                                                    <img src="/images/ss6.svg" alt="Amplience partner icon" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body oa-para-waber">
                                                                <h3> {t("Amplience")} </h3>
                                                                <p className="oa-para">
                                                                     {t("Rich media optimization and dynamic content delivery frameworks that elevate the frontend visual brand experience.")}
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Testimonial Slide End */}
                                        </div>
                                        <div className="testimonial-btn ecom rtyElement mobileview">
                                            <div
                                                className="testimonial-button-prev swiper-button-disabled"
                                                tabIndex={-1}
                                                role="button"
                                                aria-label="Previous slide"
                                                aria-controls="swiper-wrapper-fdb461101066bdb146"
                                                aria-disabled="true"
                                            >
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
                                                1/7
                                            </span>
                                            <div
                                                className="testimonial-button-next"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Next slide"
                                                aria-controls="swiper-wrapper-fdb461101066bdb146"
                                                aria-disabled="false"
                                            >
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
                            {t(
                              "What eCommerce platforms does RheinBrücke work with?",
                            )}
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
                              {t(
                                "RheinBrücke specializes in commercetools and Fluent Commerce, delivering composable and headless eCommerce solutions fully integrated with ERP systems. This empowers scalable, flexible digital storefronts that adapt to changing business needs and support omnichannel experiences.",
                              )}
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
                            {t(
                              "Can eCommerce platforms be integrated with ERP and inventory systems?",
                            )}
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
                              {t(
                                "Yes. Commercetools storefronts are seamlessly connected with backend ERP, Order Management Systems (OMS), and Product Information Management (PIM) systems. Real-time data synchronization ensures accurate inventory visibility, order fulfillment, and unified product information across channels.",
                              )}
                            </p>
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
                            {t(
                              "What are the benefits of a headless eCommerce approach?",
                            )}
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
                              {t(
                                "A headless eCommerce architecture offers superior flexibility and scalability by separating frontend and backend. This enables seamless omnichannel customer experiences, faster feature deployment, and better adaptability to new technologies and sales channels.",
                              )}
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
                            {t(
                              "Is post-launch support available for eCommerce platforms?",
                            )}
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
                              {t(
                                "Yes. RheinBrücke provides dedicated post-launch support, focusing on platform performance, uptime reliability, continuous optimization, and scaling to meet evolving business requirements.",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
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
                            {t(
                              "What are headless and composable ecommerce solutions?",
                            )}
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
                              {t(
                                "Headless commerce decouples the frontend digital storefront from the backend database logic, allowing them to communicate via APIs. Composable commerce takes this further by allowing enterprises to select and connect best-of-breed components such as a specific content management system (CMS) or an independent order management system (OMS) to build a custom, highly flexible technology stack rather than relying on a rigid, single-vendor platform.",
                              )}
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
                                        <h2> {t("Partner with Enterprise e-commerce Specialists")} </h2>
                                        <p className="oa-para"> {t("Move beyond the limitations of legacy commerce platforms.")} </p>
                                        <p className="oa-para"> {t("Talk to Our Ecommerce Experts Today.")} </p>
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