"use client";
import React from 'react'
import CommomLayout from '../Components/CommomLayout'
import Link from "next/link";
import {useTranslation} from "../hooks/useTranslation";
const page = () => {
  const { t, language } = useTranslation();
    return (
        <CommomLayout>
           <>
  {/* Header Start */}
  {/*?php include "navbar.php" ?*/}
  {/* Header End */}
  <div className="hero brainsec enter  retailsection1 mobileuiux">
    <div className="parent2 retailparent2 rechange-baner mobilevideo">
      <img src="/images/UX.png" alt="" />
      {/* <video src="/videos/uiux.mp4" autoplay muted loop playsinline class="bg-image1"></video> */}
    </div>
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-5">
          <div className="section-title">
            <h2 className="text-anime-style-21" data-cursor="-opaque">
              {t("UI/UX as a Service for Digital Products and Enterprise Platforms")}
            </h2>
            <p>
              {t("Successful digital solutions depend on experiences that are simple, intuitive and aligned with user needs.")}
            </p>
            <p>
              {t("We design responsive and accessible interfaces that support better user engagement across web, mobile and enterprise applications. From UX strategy and user research to UX/UI design and experience optimization, we create human-centric solutions that connect users with technology.")}
            </p>
          </div>
        </div>
        <div className="col-sm-7 pd0">
          <div className="corusimg mobileview">
            <img src="/images/UX.png" alt="" />
          </div>
          {/* <div class="parent2 retailparent2 mobileview">
              <video src="/videos/uiux.mp4" autoplay muted loop playsinline class="bg-image1"></video>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section Start*/}
  <div className=" buildsection">
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
                  {t("Why Choose RheinBrücke for User Experience (UX/UI) Design Services?")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-3 col-6">
          <div className="dynamics-advantage-waber">
            <img src="/new/g501.svg" alt="Human centred UX design icon" />
            <p>
              {t("Human-centred design focused on usability, clarity and meaningful interactions.")}
            </p>
          </div>
        </div>
        <div className="col-sm-3 col-6">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad2.svg" alt="Digital first interfaces for UI/UX icon" />
            <p>
              {t("Our multidisciplinary teams bring tailored solutions across industries.")}
            </p>
          </div>
        </div>
        <div className="col-sm-3 col-6">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad3.svg" alt="Creative UI/UX design icon" />
            <p>
              {t("Strategic design that connects technology, creativity and business goals.")}
            </p>
          </div>
        </div>
        <div className="col-sm-3 col-6">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad4.svg" alt="" />
            <p>
              {t("A track record for responsive, accessible and engaging UI interfaces.")}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End*/}
  {/* Hero Section Start*/}
  <div className="hero digi2 self1 mobileself1">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 order2 systemview">
          <div className="hero-bg-video buildsec mobileux">
            {/*<video autoplay muted loop id="myVideo" height="800">*/}
            {/*    <source src="/videos/uicap.mp4" type="video/mp4">*/}
            {/*</video>*/}
            <img src="/new/ux-9.jpg" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hero-content buildsecont pd50">
            <div className="section-title mobileh2">
              <div className="hero-video-content wow fadeInUp mt-4">
                <h2
                  className="text-anime-style-2 text-dark"
                  data-cursor="-opaque"
                >
                  {t("Our Capabilities")}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss1.svg" alt="UI/UX design tools icon" />
                  <p>
                    <b>{t("UX/UI Design")}</b> – {t("Built with Figma, Webflow, Anima and Adobe XD for enterprise needs.")}
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss2.svg" alt="Responsive UI/UX design icon" />
                  <p>
                    <b>{t("UX Research & User Journey Mapping")}</b> – {t("Insights that shape meaningful interactions and workflows.")}
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss3.svg" alt="UI/UX with AR/VR icon" />
                  <p>
                    <b>{t("Immersive User Experiences")}</b> – {t("Enable AR/VR for Next-Gen engagement.")}
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss4.svg" alt="UI/UX design and prototyping icon" />
                  <p>
                    <b>{t("Design Systems, Prototyping & Wireframing")}</b> – {t("Accelerating time-to-market and consistency.")}
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss5.svg" alt="UI/UX testing and feedback icon" />
                  <p>
                    <b>{t("Usability Testing & Optimisation")}</b> – {t("refining experiences through feedback, analysis and UX audits.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mobileview">
        <div className="corusimg-5 ">
          <img src="/new/ux-9.jpg" alt="" />
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
                            {t("What specific UX services does RheinBrücke offer to enhance digital platforms?")}
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
                              {t("We provide end-to-end User Experience (UX) services focused on crafting seamless and effective digital experiences. Our core offerings include:")}
                              <br />
                              {t("• User Interface (UI) Design: Creating visually appealing and intuitive interfaces.")}
                              <br />
                              {t("• Information Architecture (IA): Structuring content for optimal navigation and findability.")}
                              <br />
                              {t("• Usability Engineering: Ensuring high accessibility and ease-of-use (we make sure your users don't have to think too hard!).")}
                              <br />
                              {t("• Engagement Strategy: Designing flows that drive user retention and conversion.")}
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
                            {t("How does RheinBrücke approach the modernization of legacy user interfaces (UIs)?")}
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
                              {t("We turn aging, clunky systems into modern, enjoyable experiences. Legacy UIs are completely reimagined using a phased process:")}
                              <br />
                              {t("• Audit & Discovery: We assess pain points through user research.")}
                              <br />
                              {t("• Design System Implementation: We create reusable, modern design systems (like pattern libraries) for consistency.")}
                              <br />
                              {t("• Responsive Design: We deploy mobile-first and responsive frameworks, ensuring the interface works perfectly on any device.")}
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
                            {t("How is the UX design process aligned with core business objectives and measurable results?")}
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
                              {t("Our UX design is not just about aesthetics; it’s about driving business outcomes. We ensure alignment through a rigorous, research-driven process:")}
                              <br />
                              {t("• User Research & Testing: Continuous feedback loops via prototyping and A/B testing.")}
                              <br />
                              {t("• Iterative Design: Using Design Thinking principles to refine solutions based on data.")}
                              <br />
                              {t("• KPI Alignment: Ensuring design decisions directly contribute to key metrics like conversion rates, task completion time and user adoption rates.")}
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
                            {t("Which key design and front-end tools and technologies are employed for UX development?")}
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
                              {t("We utilize the leading tools in both the design and development phases to ensure efficiency and quality:")}
                              <br />
                              {t("• Design & Prototyping: Figma and Adobe XD for collaborative design, wireframing and interactive prototypes.")}
                              <br />
                              {t("• Front-End Development: Modern, high-performance frameworks like React, Angular, or Vue.js to build fast and scalable user interfaces. Tools include Figma, Adobe XD and front-end frameworks such as React and Angular.")}
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
                            {t("Do you offer UI/UX services in India (UK and Europe) for enterprises?")}
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
                              {t("Yes. RheinBrücke provides UI/UX services in India for organisations looking to improve digital products, enterprise applications and customer experiences through research-driven design and technology expertise. Our User Experience Design services cover UX strategy, UX research, user journey mapping, interaction design, usability evaluation and experience optimisation to improve how users interact with digital platforms.")}
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
              <h2>{t("Create Better Digital Experiences Through UX Expertise")}</h2>
              <p>
                {t("Partner with RheinBrücke for enterprise-ready UI/UX services to create modern user interfaces.")}
              </p>
              {/* <p>
                {t("Talk to our UX experts today.")}
              </p> */}
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

export default page