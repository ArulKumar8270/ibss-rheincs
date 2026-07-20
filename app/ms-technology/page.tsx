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
  <div className="hero brainsec enter retailsection1 mobilefluent">
    <div className="parent2 retailparent2 rechange-baner mobilevideo">
      <img src="/images/MSTechnology4.jpg" alt="" />
      {/* <video src="/videos/mstech.mp4" autoplay muted loop playsinline class="bg-image1"></video> */}
    </div>
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-5">
          <div className="section-title">
            <h2 className="text-anime-style-21" data-cursor="-opaque">
              {t("Microsoft Technology Services for Cloud, AI & Application Modernisation")}
            </h2>
            <p>
              {t("Accelerate digital transformation with Microsoft technology services from RheinBrücke.")}
            </p>
            <p>
              {t("We help organisations modernise applications, migrate to Azure cloud, integrate enterprise platforms and operationalise AI with secure, scalable solutions tailored to your business goals.")}
            </p>
          </div>
        </div>
        <div className="col-sm-7 mobileview pd0">
          <div className="corusimg ">
            <img src="/images/MSTechnology4.jpg" alt="" />
          </div>
          {/* <div class="parent2 retailparent2 mobileview">
  <video src="/videos/mstech.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
        </div>
      </div>
    </div>
  </div>
  <section className="mds-section1 dynamics features1 pd50">
    <div className="container">
      <div className="content text-left">
        <div className="section-title ">
          <div className="hero-video-content1 wow fadeInUp mt-4">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("The Microsoft Technologies Advantage")}
            </h2>
            <p>{t("Why Choose Microsoft Technologies for Enterprise Transformation?")}</p>
            <p>
              {t("Modern enterprises face challenges such as:")}
            </p>  
          </div>
        </div>
      </div>
      {/* Testimonial Slider Start */}
      <div className={`digital-features-item agency-supports mstechadv ${language === 'German' ? 'germstech' : ''}`}>
        <div className="agency-supports-slider slidebefore">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss1.svg" alt="MS technology upgrade and scalability icon" />
                    <p>
                      {t("Disconnected legacy systems that limit agility and scalability")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss2.svg" alt="MS technology UI/UX application icon" />
                    <p>
                      {t("Inconsistent user experiences across enterprise applications")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss3.svg" alt="MS technology poor communication icon " />
                    <p>
                      {t("Poor interoperability between business applications and platforms")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss4.svg" alt="MS technology data and reporting icon" />
                    <p>
                      {t("Siloed data and inconsistent reporting")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss5.svg" alt="MS technology workflows icon" />
                    <p>
                      {t("Manual, repetitive workflows that reduce productivity and increase errors")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss6.svg" alt="MS technology cost reduction icon" />
                    <p>
                      {t("Rising operational costs caused by legacy systems and manual processes")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss7.svg" alt="MS technology real time visibility icon" />
                    <p>
                      {t("Limited real-time visibility into business performance and operations")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss8.svg" alt="MS technology secure integration icon" />
                    <p>
                      {t("Difficulty integrating applications, analytics, and AI securely")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Agency Support Slider End */}
      </div>
      <div className="hero-video-content1 wow fadeInUp mt-4">
        <p>
          {t("Microsoft Technologies address these challenges with enterprise-ready platforms that provide:")}
        </p>
        <p>
          {t("How Microsoft Technologies Drive Business Transformation")}
        </p>
      </div>
      <div className={`digital-features-item agency-supports mstechadv ${language === 'German' ? 'germstechadv' : ''}`}>
        <div className="agency-supports-slider2">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss1.svg" alt="MS technology application development and integration icon" />
                    <p>
                      {t("Unified application development, cloud migration and enterprise integration")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss2.svg" alt="Microsoft azure cloud services icon" />
                    <p>
                      {t("Secure, scalable cloud services built on Microsoft Azure")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss3.svg" alt="Advanced AI and ML with microsoft Copilot icon" />
                    <p>
                      {t("Advanced AI & Machine Learning (ML) powered by Microsoft Copilot that deliver predictive insights, intelligent automation")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss4.svg" alt="Low code MS technology icons" />
                    <p>
                      {t("Agile low-code development with Power Platform to accelerate innovation driven by the business")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss5.svg" alt="Enterprise-grade security and governance in MS technology icon" />
                    <p>
                      {t("Enterprise-grade cloud security, IT governance, identity management and compliance tools")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss6.svg" alt="Microsoft Power Platform and Copilot driving business automation icon" />
                    <p>
                      {t("Intelligent cloud-based business applications powered by Microsoft Power Platform and Microsoft Copilot for faster automation & integration")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Agency Support Slider End */}
      </div>
      {/* Testimonial Slider End */}
    </div>
  </section>
  <section className={`mds-section capabilities msmobilecap pd50 ${language === 'German' ? 'germsapproch' : ''}`}>
    <div className="container">
      <div className="content width50">
        <div className="section-title ">
          <div className="hero-video-content1 mt-4">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Our Approach")}
            </h2>
            <p>
              {t("We align Microsoft Technologies with your business objectives using RheinBrücke’s Analyse–Integrate–Transform (AIT) methodology:")}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      {/* Testimonial Slider Start */}
      <div className="CorusHR-slider mstechapproach">
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/access-technology-challenges.svg" alt="Business and technology assessment process icon" />
                {/* <h6> Dynamics 365 ERP & CRM Solutions</h6> */}
                <p>
                  {t("Assess technology challenges, business requirements and system gaps")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/configure-microsoft-solution.svg" alt="Industry-specific Microsoft solution icon" />
                <p>
                  {t("Configure Microsoft solutions to industry-specific requirements")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img
                  src="/images/integrate-with-existing-application.svg"
                  alt="Microsoft platform integration icon"
                />
                <p>
                  {t("Integrate with existing applications for seamless workflows")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/auto-manual-process.svg" alt="Automate manual processes using Microsoft Power platform icon" />
                <p>
                  {t("Automate manual processes to improve efficiency and productivity")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/real-time-data-insights.svg" alt="Real-time data insights icon" />
                <p>
                  {t("Enable real-time data insights for faster, smarter decision-making")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/scalability-security.svg" alt="Agile delivery and automation icon" />
                <p>
                  {t("Accelerated Time-to-Value through Agile delivery and automation")}
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
  <div className="benifites-waber mobilemssol">
    <div className="container">
      <div className="col-lg-12">
        <div className="hero-content buildsecont ">
          <div className="section-title">
            <div className="hero-video-content wow fadeInUp mt-4">
              <h2
                className="text-anime-style-2 text-center"
                data-cursor="-opaque"
              >
                {t("Our Microsoft Technology Solutions")}
              </h2>
              <p className="text-center">
                {t(
                  "We deliver end-to-end Microsoft services to help you modernise, integrate, and optimise your enterprise:"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mstechsolutions">
        <div className="col-sm-6">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 height500">
              <div>
                <h4 className="benifit-title">
                  {" "}
                  {t("Business Intelligence and Analytics")}{" "}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t(
                      "Create rich visualisations and self-service dashboards with Power BI"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t(
                      "Orchestrate backend data flows and transformations using Microsoft Fabric Data Factory"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {t(
                      "Store and manage enterprise-scale datasets with Fabric Lakehouse and Data Warehouse"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Enable real-time monitoring and automation with Fabric Real-Time Intelligence (including Activator)"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Leverage Microsoft Fabric’s unified SaaS data platform for scalable analytics and AI"
                    )}
                  </p>
                </div>
              </div>
              {/* <img src="/new/pf-6.svg" alt=""> */}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 height500">
              <div>
                <h4 className="benifit-title">
                  {" "}
                  {t("Integration and Workflow Automation")}{" "}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Enterprise integrations with Azure API Management and Logic Apps"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Cross-platform workflow automation using Power Automate with Copilot assistance"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p> {" "}
                    {t("Low-code business apps with Power Apps")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Document management and collaboration using with Microsoft 365:"
                    )}
                  </p>
                </div>
                <ul className="pdl15 ullist">
                  <li>
                    {" "}
                    {t(
                      "SharePoint for enterprise content and workflows"
                    )}
                  </li>
                  <li>
                    {" "}
                    {t(
                      "OneDrive for Business for secure personal file storage and sharing"
                    )}
                  </li>
                  <li>
                    {" "}
                    {t(
                      "Teams for real-time co-authoring and collaboration"
                    )}
                  </li>
                  <li>
                    {" "}
                    {t(
                      "Microsoft Loop for dynamic, modular content across apps."
                    )}
                  </li>
                </ul>
              </div>
              {/* <img src="/new/pf-7.svg" alt=""> */}
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 height600">
              <div>
                <h4 className="benifit-title">
                  {" "}
                  {t("Application Development and Modernisation")}{" "}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t("Azure-native application development and cloud hosting")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Legacy app modernisation using microservices and API-first architecture"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "CI/CD pipelines and automated release management with Azure DevOps"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Custom developed applications using C#, ASP.NET Core, VB.NET"
                    )}
                  </p>
                </div>
              </div>
              {/* <img src="/new/pf-6.svg" alt=""> */}
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 height600">
              <div>
                <h4 className="benifit-title">
                  {" "}
                  {t("AI, Machine Learning, and Intelligent Services")}{" "}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "AI/ML model training and deployment via Azure Machine Learning"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Embedded AI capabilities using Azure AI services (vision, speech, language, search)")}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "AI-powered automation, bots, and document processing workflows"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Low-code/no-code AI solutions with Power Platform and AI Builder"
                    )}
                  </p>
                </div>
              </div>
              {/* <img src="/new/pf-6.svg" alt=""> */}
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 height600">
              <div>
                <h4 className="benifit-title">
                  {" "}
                  {t("Cloud Security and Governance")}{" "}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Threat detection and response with Microsoft Defender for Cloud and Microsoft Sentinel"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Identity and access governance with Microsoft Entra ID"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Policy management, compliance, and operational monitoring for cloud infrastructure")}
                    
                  </p>
                </div>
              </div>
              {/* <img src="/new/pf-6.svg" alt=""> */}
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 height600">
              <div>
                <h4 className="benifit-title">
                  {" "}
                  {t("Azure Infrastructure and Managed Services")}{" "}
                </h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Cloud infrastructure provisioning, virtual networks, and storage management"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "Microsoft licensing optimisation and advisory services"
                    )}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    {t(
                      "24x7 managed services for Azure, Microsoft 365, and Power Platform"
                    )}
                  </p>
                </div>
              </div>
              {/* <img src="/new/pf-6.svg" alt=""> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section Start*/}
  <div className="aboutretail retail-baner1 retail-baner-11 approachh mobilegolf mobilemsimg pd60">
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-5">
          <div className="section-title">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {" "}
              {t("The RheinBrücke Advantage")}{" "}
            </h2>
          </div>
          <div className="pill-points appro">
            <div className="challenge-point-waber self-service">
              <img src="/images/app1.svg" alt="Microsoft ISV Partner and AI Cloud Partner icon" />
              <div className="pill-cont">
                {/* <h5>Solution Architecture</h5> */}
                <p>
                  {" "}
                  {t(
                    "Microsoft ISV Partner and AI Cloud Partner with proven expertise in delivering enterprise technology solutions"
                  )}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/app2.svg" alt="End-to-end MS technology project delivery icon" />
              <div className="pill-cont">
                {/* <h5>Project Management</h5> */}
                <p>
                  {" "}
                  {t(
                    "End-to-end IT project delivery from initial digital strategy to long-term technical support"
                  )}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/app3.svg" alt="application development with DevOps practices icon" />
              <div className="pill-cont">
                {/* <h5>Consulting</h5> */}
                <p>
                  {" "}
                  {t(
                    "Accelerated adoption of cloud-native development and DevOps practices"
                  )}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/fe3.svg" alt="Faster innovation with MS technology icon" />
              <div className="pill-cont">
                {/* <h5>Consulting</h5> */}
                <p>
                  {" "}
                  {t(
                    "Faster Innovation Without Business Disruption"
                  )}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/fe5.svg" alt="Outcome-focused delivery icon" />
              <div className="pill-cont">
                {/* <h5>Consulting</h5> */}
                <p>
                  {" "}
                  {t(
                    "Outcome-focused delivery ensuring resilience and business value"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 pd0">
          <div className="mobileapproach mobileview">
            <img src="/new/ms-7.jpg" alt="" />
          </div>
          {/* <img src="/new/retail-baner.jpg" alt=""> */}
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End*/}
  <div className="our-testimonial pd30">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-12">
          <div className="section-title text-center headingss">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {" "}
              {t("Industries We Serve")}{" "}
            </h2>
            <p>
              {" "}
              {t(
                "Our Microsoft technology services support industries including:"
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12">
          {/* Testimonial Slider Start */}
          <div className=" industries2 ">
            <div className="swiper ">
              <div className="swiper-wrapper industries">
                {/* Testimonial Slide Start */}
                <div className="swiper-slide ">
                  <div className="service-item-body in4">
                    <h3>
                      <span>{" "}
                        {t("Manufacturing ")}{" "}
                      </span>
                    </h3>
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="service-item-body in2">
                    <h3>
                      <span>{" "}
                        {t("Retail & E-commerce")}{" "}
                      </span>
                    </h3>
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="service-item-body in5">
                    <h3>
                      <span>{" "}
                        {t("Automotive")}{" "}
                      </span>
                    </h3>
                  </div>
                </div>
                {/* Testimonial Slide End */}
                {/* Testimonial Slide Start */}
                <div className="swiper-slide">
                  <div className="service-item-body fin1">
                    <h3>
                      <span>{" "}
                        {t("Financial Services")}{" "}
                      </span>
                    </h3>
                  </div>
                </div>
                {/* Testimonial Slide End */}
              </div>
              <div className="testimonial-btn justify-content-center mobileonly mt-5">
                <div
                  className="testimonial-button-prev swiper-button-disabled"
                  tabIndex={-1}
                  role="button"
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-7647141044685c7c4"
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
                          ></circle>
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
                  1/4
                </span>
                <div
                  className="testimonial-button-next"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-7647141044685c7c4"
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
                          ></circle>
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
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
          </div>
          {/* Testimonial Slider End */}
        </div>
      </div>
    </div>
  </div>
  <div className="advantage advantage99 msadv mscap mobilexplore pd-50">
    <div className="container">
      <div className="row section-row1 align-items-center">
        <div className="col-sm-12">
          <div className="section-title text-center ">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {" "}
              {t("Explore Our Microsoft Capabilities")}{" "}
            </h2>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="service-item-body1 imgpos ">
                <Link href="/business-intelligence">
                  <h3>{" "}
                    {t("Business Intelligence (BI)")}{" "}
                  </h3>
                  <img src="/new/adv1.svg" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="service-item-body1 imgpos">
                <Link href="/digital-solutions">
                  <h3>{" "}
                    {t("Digital Solutions & Services")}{" "}
                  </h3>
                  <img src="/new/gt.svg" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="service-item-body1 imgpos1">
                <Link href="/solutions/erp-enterprise-solutions-and-services/ms-dynamics">
                  <h3>{" "}
                    {t("Microsoft Dynamics")}{" "}
                  </h3>
                  <img src="/new/adv3.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section Start*/}
  <div className="aboutretail retail-baner1 retail-baner-11 deliver mobilegolf pd60">
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-5">
          <div className="section-title">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {" "}
              {t("Delivering Values that Last")}{" "}
            </h2>
            <p>
              {" "}
              {t(
                "Our Microsoft technology services are built for operational resilience, faster innovation, and sustained business impact. From cloud migrations and AI adoption to workflow automation and security frameworks, we ensure your digital foundation is ready for what’s next."
              )}{" "}
            </p>
          </div>
        </div>
        <div className="col-sm-6 pd0">
          {/* <img src="/new/retail-baner.jpg" alt=""> */}
          <div className="mobileapproach mobileview">
            <img src="/images/delivering.jpg" alt="" />
          </div>
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
                            {t("Which core Microsoft Cloud technologies does RheinBrücke specialize in?")}
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
                              {t("We specialize in the foundational pillars of the Microsoft Cloud ecosystem, delivering comprehensive implementation, integration and managed services for the entire Microsoft Business Applications stack. This focus includes:")}
                            </p>
                            <ul>
                              <li>{t("Dynamics 365: The unified suite of Cloud ERP (Finance, SCM) and CRM (Sales, Service) solutions.")}</li>
                              <li>{t("Power Platform: The low-code/no-code platform comprising Power BI (Business Intelligence), Power Apps and Power Automate.")}</li>
                              <li>{t("Azure Cloud: The scalable, secure and resilient cloud infrastructure services.")}</li>
                              <li>{t("Microsoft 365: Productivity and collaboration solutions (Teams, Exchange Online, SharePoint).")}</li>
                            </ul>
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
                            {t("How do these integrated Microsoft technologies drive measurable digital transformation?")}
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
                              {t("They create a unified, intelligent and secure digital core for your enterprise. By connecting real-time data from every department—finance, sales, operations and service—they enable:")}
                            </p>
                            <ul>
                              <li>{t("Data-Driven Decisions: Power BI transforms siloed information into actionable, real-time insights.")}</li>
                              <li>{t("Process Automation: Dynamics 365 and Power Automate streamline critical workflows.")}</li>
                              <li>{t("Enhanced Security: Azure Cloud provides world-class compliance and data protection. This integrated approach moves your business from disconnected applications to connected, intelligent operations.")}</li>
                            </ul>
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
                            {t("Are Microsoft solutions easily integrated with existing Enterprise Resource Planning (ERP) platforms?")}
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
                              {t("Yes, integration is a core strength. We ensure seamless, two-way data flow between the Microsoft stack and other critical enterprise systems. Specifically, we specialize in integrating Dynamics 365 and Azure with major third-party platforms like Epicor and SAP, providing a consolidated view of business processes and a single source of truth for all data.")}
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
                            {t("Beyond implementation, what modernization and managed services are available?")}
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
                              {t("Our partnership extends far beyond initial go-live. We provide a full range of lifecycle services to ensure continuous performance and value:")}
                            </p>
                            <ul>
                              <li>{t("Cloud Migration & Modernization: Strategic movement of legacy on-premises systems to the secure, scalable Azure Cloud.")}</li>
                              <li>{t("Managed Services: Proactive, ongoing support, maintenance and optimization for all Dynamics 365, Power Platform and Azure environments.")}</li>
                              <li>{t("Application Enhancement: Custom development and scaling using the Power Platform for long-term functional improvement.")}</li>
                            </ul>
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
                            {t("How does Microsoft Copilot improve business productivity?")}
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
                              {t("Microsoft Copilot uses AI capabilities to automate repetitive tasks, generate insights, assist decision-making and improve productivity across business applications and workflows.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item 5 End */}
                      {/* FAQ Item 6 Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="1.0s"
                      >
                        <h2 className="accordion-header" id="heading6">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                            {t("What is Azure DevOps and how does RheinBrücke use it for MVP development?")}
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
                              {t("Azure DevOps is Microsoft's platform for planning, building and releasing software. RheinBrücke uses it to move client MVPs and prototypes from concept to a working, testable build quickly, with source control, automated builds and release pipelines managed in one environment rather than stitched together across disconnected tools.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item 6 End */}
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
                {" "}
                {t(
                  "Build Future-Ready Solutions with Microsoft Technologies"
                )}{" "}
              </h2>
              <p>{" "}
                {t("Let RheinBrücke help you modernise applications, accelerate cloud adoption, integrate enterprise systems and unlock AI-driven innovation with Microsoft technologies.")}{" "}
              </p>
              <p>{" "}
                {t("Talk to our Microsoft experts today.")}{" "}
              </p>
            </div>
            <div className="col-sm-4">
              <div className="ser-btn text-right">
                <Link href="/contact-us" className="animated-svg-link">
                  {" "}
                  {t("Contact Us")}{" "}
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