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
                                        {t("Ecommerce Solutions")}
                                    </h2>
                                    <p>
                                        {t("Deliver seamless digital commerce experiences with platforms built for scale, speed, and personalisation.")}
                                    </p>
                                    <p>
                                        {t("Our headless, cloud-native solutions modernise legacy systems, unify channels, and optimise order management, helping you boost revenue, delight customers, and stay ahead in a competitive market.")}
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
                                                {t("Why Choose Us?")}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center width80">
                            <div className="col-sm-4 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/g501.svg" alt="" />
                                    <p>{t("Proven track record in modernising complex commerce systems.")}</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad2.svg" alt="" />
                                    <p>
                                        {t("Deep expertise in omnichannel, order management, and product data synchronisation.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad3.svg" alt="" />
                                    <p>
                                        {t("Strong partnerships with Fluent Commerce and commercetools for next-gen commerce.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad4.svg" alt="" />
                                    <p>
                                        {t("End-to-end delivery - from strategy and design to deployment and ongoing support.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-12">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad5.svg" alt="" />
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
                                            <img src="/new/ds1.svg" alt="" />
                                            <h6> {t("Headless Commerce Architecture")}</h6>
                                            <p>{t("Agility and scalability for future-ready commerce.")}</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/new/ds2.svg" alt="" />
                                            <h6> {t("Cloud-Native, API Driven platform")} </h6>
                                            <p>{t("Designed with microservices for flexibility")}</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/new/ds3.svg" alt="" />
                                            <h6> {t("Seamless Integration")} </h6>
                                            <p>{t("ERP, CRM, OMS and third party systems working as one")}</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/new/ds4.svg" alt="" />
                                            <h6> {t("Personalised Storefronts")}</h6>
                                            <p>{t("Advanced content, search, and AI-driven recommendations.")}</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/new/ds5.svg" alt="" />
                                            <h6> {t("Unified Omnichannel Experiences")}</h6>
                                            <p>{t("Consistent engagement across web, mobile, and in-store.")}</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/new/ds3.svg" alt="" />
                                            <h6> {t("Performance Optimisation & Innovation")} </h6>
                                            <p>{t("Continuous improvement to keep you ahead.")}</p>
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
                                                                    <img src="/images/ss1.svg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body  oa-para-waber">
                                                                <h3> {t("Fluent Commerce")} </h3>
                                                                <p className="oa-para">
                                                                    {" "}
                                                                    {t("A distributed Order Management System (OMS) that optimises inventory, orders, and fulfilment at scale")}
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
                                                                    <img src="/images/ss2.svg" alt="" />
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
                                                                    <img src="/images/ss3.svg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body oa-para-waber">
                                                                <h3> {t("Algolia")} </h3>
                                                                <p className="oa-para">
                                                                    {" "}
                                                                    {t("Advanced AI-powered search and discovery, delivering lightning-fast, personalised results.")}
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
                                                                    <img src="/images/ss10.svg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body oa-para-waber">
                                                                <h3> {t("Contentstack")} </h3>
                                                                <p className="oa-para">
                                                                     {t("An enterprise-grade headless CMS for flexible, scalable, and omnichannel content delivery.")}
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
                                                                    <img src="/images/ss6.svg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body oa-para-waber">
                                                                <h3> {t("Amplience")} </h3>
                                                                <p className="oa-para">
                                                                     {t("A powerful content and experience management platform for rich media, dynamic content, and personalised digital experiences.")}
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Testimonial Slide End */}
                                        </div>
                                        <div className="testimonial-btn ecom rtyElement systemview">
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
                {/* Footer Start */}
                <footer className="main-footer pd0">
                    {/* Footer Main Start */}
                    <div className="footer-main">
                        <div className="container">
                            <div className="firstrow">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2> {t("Reimagine eCommerce")} </h2>
                                        <p className="oa-para"> {t("Ready to modernise, scale, and unlock new growth?")} </p>
                                        <p className="oa-para"> {t("Talk to our experts today.")} </p>
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