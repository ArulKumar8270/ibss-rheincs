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
                <div className="hero brainsec enter  retailsection1  erpexcel ">
                    <div className="parent2 retailparent2 rechange-baner  mobilevideo">
                        <img src="/images/Appmodernisation1.png" alt="" />
                        {/* <video src="/videos/achitect.mp4" autoplay muted loop playsinline class="bg-image1"></video> */}
                    </div>
                    <div className="container">
                        <div className="row section-row1 align-items-center builtsec">
                            <div className="col-sm-5">
                                <div className="section-title">
                                    <h2 className="text-anime-style-21" data-cursor="-opaque">
                                    {t("Architecture & App Modernisation")}
                                    </h2>
                                    <p>
                                        {t("Transform Legacy Applications into Agile, Cloud-Ready Platforms")}
                                    </p>
                                    <p>
                                        {t("Accelerate digital transformation with enterprise application modernization services designed to upgrade legacy systems, optimize cloud architecture, and improve business agility using modern frameworks, cloud-native infrastructure, and best-in-class tools.")}
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
                                    <img src="/images/Appmodernisation1.png" alt="" />
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
                        <div className="row justify-content-center">
                            <div className="col-sm-3 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/g501.svg" alt="App architecture icon" />
                                    <p>
                                        {t("Proven track record in legacy application re-architecting for complex enterprise systems.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad2.svg" alt="App architecture in Ms azure icon" />
                                    <p>
                                        {t("Deep expertise in Microsoft Azure and multi-cloud modernisation.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad3.svg" alt="App deployment icon" />
                                    <p>
                                        {t("End-to-end delivery from cloud assessment to deployment and continuous optimization.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad4.svg" alt="App scalability icon" />
                                    <p>
                                        {t("Focus on lowering costs, improving agility, and enterprise scalability with confidence.")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section End*/}
                <section className="mds-section dynamics features1 mobilearchit pd50">
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
                        <div className="architecture">
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/images/fe1.svg" alt="" />
                                            <h6> {t("Application Re-engineering.")}</h6>
                                            <p>
                                                {t("Transitioning to cloud-native, microservices architecture, and serverless environments.")}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/images/fe2.svg" alt="" />
                                            <h6> {t("Legacy System Migration")}</h6>
                                            <p>
                                                {t("Legacy system migration with minimal risk, disruption, and business downtime.")}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/images/fe3.svg" alt="" />
                                            <h6> {t("Modern Tool Integration")}</h6>
                                            <p>
                                                {t("Connecting Algolia, Amplience, Metapack, and modern tools for digital-first operations.")}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/images/fe4.svg" alt="" />
                                            <h6> {t("Secure & Compliant Architecture")}</h6>
                                            <p>
                                                {t("Engineered with enterprise cloud governance and security at the core.")}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/images/fe5.svg" alt="" />
                                            <h6> {t("Performance Optimisation")}</h6>
                                            <p>
                                                {t("Ensuring architectural resilience, high availability, and maximum application speed.")}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                </div>
                                <div className="testimonial-btn rtyElement mobileview">
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
                                    <span className="testspace">1/5</span>
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
                <div className="aboutretail retail-baner1 retail-baner-11 mobilegolf pd60">
                    <div className="container">
                        <div className="row section-row1 align-items-center builtsec">
                            <div className="col-sm-5">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        {t("Proven in Action American Golf")}
                                    </h2>
                                    <p>
                        {t("For American Golf, Europe’s largest golf retailer, we modernised legacy Salesforce and Navision systems by implementing a headless, microservices-based architecture.")} {t("Through API-driven integrations and a scalable, cloud-ready design, the solution improved operational efficiency, ensured data consistency, and laid the foundation for digital growth.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 pd0">
                                <div className="mobileapproach mobileview">
                                    <img src="/new/am-g.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section End*/}


                <div className="page-faqs bggray pd60">
  <div className="container">
    <div className="row">
      <div className="col-sm-2" />
      <div className="col-lg-8">
        <div className="page-faqs-catagery">
          <div
            className="our-faq-section page-faq-accordion"
            id="general_information"
          >
            <div className="section-title text-center">
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                {t("Wondering Why? We’re Here to Answer")}
              </h2>
            </div>

            <div className="faq-accordion" id="accordion">

              {/* FAQ 1 */}
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
                    {t("What exactly is application modernization and why is it necessary?")}
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
                      {t("Application modernization is the strategic process of upgrading your existing legacy software to modern, efficient, and scalable architectures. It typically involves moving to a cloud-ready or cloud-native model, enabling applications to run on platforms like Azure or AWS. This is necessary to reduce high maintenance costs, eliminate technical debt, and unlock agility for faster innovation.")}
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
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
                    {t("How does RheinBrücke approach and support a successful modernization roadmap?")}
                  </button>
                </h2>

                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading2"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      {t("RheinBrücke employs a structured approach starting with a comprehensive legacy system assessment (often called discovery). We then define a clear, phased modernization roadmap tailored to your business goals. Finally, we execute the re-engineering of your applications, often breaking monolithic structures down into independent, scalable components like microservices and APIs. This delivers incremental, measurable value.")}
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
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
                    {t("Which key technologies and frameworks are utilized in the application modernization process?")}
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
                      {t("Our modernization projects focus on proven, industry-leading cloud and integration technologies. We primarily leverage Microsoft .NET for robust development and utilize leading cloud platforms such as Microsoft Azure and AWS for scalable deployment. We also employ modern integration frameworks to ensure seamless connectivity, always aligning the technology stack with your specific enterprise architecture and objectives.")}
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
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
                    {t("Can modernization reduce technical debt?")}
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
                      {t("Yes. As a key component of digital transformation consulting, application modernization is one of the most effective ways to reduce technical debt by replacing outdated technologies, simplifying complex codebases, improving architecture, and eliminating legacy system dependencies, while also improving maintainability, scalability, security, and long-term operational efficiency.")}
                    </p>
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




                {/* Footer Start */}
                <footer className="main-footer pd0">
                    {/* Footer Main Start */}
                    <div className="footer-main">
                        <div className="container">
                            <div className="firstrow">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2> {t("Future-Proof Your Business with Application Modernization")} </h2>
                                        <p>
                                            {t("Ready to modernise your applications and accelerate growth?")}
                                        </p>
                                        <p> {t("Talk to our experts today.")} </p>
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