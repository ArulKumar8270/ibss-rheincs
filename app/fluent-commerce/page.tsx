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
            <h2 className="text-anime-style-21" data-cursor="-opaque">
              {t("Fluent Commerce Implementation, Solutions & Services")}
            </h2>
            <p>
              {t("Unlock faster, smarter Distributed Order Orchestration (DOO) with Fluent Commerce implementation and consulting services.")}
            </p>
            <p>
              {t("At RheinBrücke, we deliver Fluent Commerce implementation, integration, and support services to help businesses improve real-time inventory visibility, optimise omnichannel fulfilment, and modernise their cloud-native Distributed Order Management System (OMS).")}
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
            <img src="/new/g501.svg" alt="Real time fluent commerce inventory visibility icon" />
            <p>
              {t("Real-time inventory visibility across all locations, channels and warehouses")}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad2.svg" alt="Order placement and tracking in fluent commerce icon" />
            <p>
              {t("Intelligent order routing based on stock, location, SLAs, and priorities")}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad3.svg" alt="Ship to store support n fluentcommerce icon" />
            <p>
              {t("Full support for ship-from-store, click & collect, and split orders")}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad4.svg" alt="Integration with ecommerce, ERP, WMS and CRM tools icon" />
            <p>
              {t("Seamless API-first integration with eCommerce, ERP, WMS, CRM")}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad5.svg" alt="MACH architecture for fluent commerce icon" />
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
                <img src="/images/implementation.svg" alt="Fluent commerce implementation icon" />
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
                <img src="/images/end-t-end-order-management.svg" alt="Fluent commerce order management icon" />
                <p>
                  {t("End-to-end Order Management Design & Rollout")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/system-integration.svg" alt="Fluent commerce integration icon" />
                <p>
                  {t("Fluent Commerce Integration with ERP, WMS, CRM & eCommerce Platforms")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/inventory-visibility.svg" alt="real time inventory visibility in fluent commerce icon" />
                <p>
                  {t("Real-time Inventory Visibility & Fulfilment Optimisation")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/ship-to-store.svg" alt="Ship to store icon" />
                <p>
                  {t("Ship-from-Store and Click & Collect Enablement")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/custom-workflow.svg" alt="Fluent commerce workflow and API icon" />
                <p>
                  {t("Custom Workflows & API Development and Integration")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/oms-support.svg" alt="Fluent commerce OMS support icon" />
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
                  <img src="/images/ss1.svg" alt="Fluent commerce integration with MACH architecture icon" />
                  <p>
                    {t("Composable commerce integration with MACH expertise")}
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss2.svg" alt="Fluent commerce for B2B distribution icon" />
                  <p>
                    {t("Deep domain knowledge in retail, B2B, and distribution")}
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss3.svg" alt="Fluent commerce global scale delivery" />
                  <p>
                    {t("Global scale delivery with agile, phased rollouts")}
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss4.svg" alt="Fluent commerce deployment icon" />
                  <p>
                    {t("Deployments focused on speed, customer experience, and fulfilment efficiency")}
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
                            {t("What exactly is Fluent Commerce, and how does it function as an Order Management System (OMS)?")}
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
                              {t("Fluent Commerce is a leading, cloud-native platform specializing in Distributed Order Management (DOM). It provides a single source of truth for real-time inventory visibility across all channels, locations, and partners. Its core function is to use intelligent rules (algorithmic order routing) to match customer orders to the best fulfilment location, whether that's a warehouse, store, or supplier.")}
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
                            {t("How does RheinBrücke support the full lifecycle of a Fluent Commerce implementation?")}
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
                              {t("We offer comprehensive, end-to-end consulting and implementation services for Fluent Commerce. This includes:")}
                            </p>
                            <ul>
                              <li>{t("Strategic Consulting: Defining optimal fulfilment logic and system architecture.")}</li>
                              <li>{t("Complex Integration: Connecting Fluent to your existing ecosystem.")}</li>
                              <li>{t("Customization: Tailoring the platform to unique business rules.")}</li>
                              <li>{t("Post-Deployment Support: Providing continuous maintenance and optimization. We treat it as a critical business transformation, not just a software installation.")}</li>
                            </ul>
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
                            {t("Can Fluent Commerce be seamlessly integrated with our existing ERP and eCommerce platforms?")}
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
                              {t("Absolutely. Integration is where the real power of a DOM system lies. Fluent Commerce is designed with a robust API-first architecture, allowing for seamless integration with core enterprise platforms. We regularly connect it with major systems like Epicor, SAP, and commercetools, ensuring a synchronized flow of order, product, and customer data across your entire tech stack.")}
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
                            {t("What are the key, measurable benefits of implementing Fluent Commerce?")}
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
                              {t("Fluent Commerce delivers significant improvements across the entire supply chain and customer experience, resulting in clear ROI:")}
                            </p>
                            <ul>
                              <li>{t("Faster Fulfilment & Delivery: Intelligent routing minimizes shipping zones and transit times.")}</li>
                              <li>{t("Improved Stock Accuracy: Unified, real-time inventory orchestration virtually eliminates overselling.")}</li>
                              <li>{t("Unified Omnichannel Experience: Enabling popular capabilities like Click and Collect, Ship from Store, and seamless returns.")}</li>
                              <li>{t("Increased Profitability: Lowering logistics costs by optimizing the use of available inventory across all locations.")}</li>
                            </ul>
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
                            {t("Why do businesses use Fluent Commerce?")}
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
                              {t("Businesses use Fluent Commerce to improve inventory visibility, automate order routing, enable ship-from-store and Click & Collect, reduce fulfilment costs, and deliver faster, more reliable customer experiences across multiple sales channels.")}
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
