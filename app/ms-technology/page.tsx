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
              {t("Microsoft Technologies")}
            </h2>
            <p>
              {t("Empower agile, scalable, and intelligent solutions with Microsoft’s technology ecosystem.")}
            </p>
            <p>
              {t("At RheinBrücke, we help organisations modernise applications, migrate to the cloud, integrate platforms, and operationalise AI with secure, scalable solutions tailored to your business goals.")}
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
                    <img src="/images/ss1.svg" alt="" />
                    <p>
                      {t("Complex integrations with disconnected legacy systems that limit agility and scalability")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss2.svg" alt="" />
                    <p>
                      {t("Inconsistent UI/UX across applications")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss3.svg" alt="" />
                    <p>
                      {t("Applications not communicating effectively with each other")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss4.svg" alt="" />
                    <p>
                      {t("Siloed data and inconsistent reporting")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss5.svg" alt="" />
                    <p>
                      {t("Manual, time-consuming workflows")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss6.svg" alt="" />
                    <p>
                      {t("Rising operational costs and inefficiencies")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss7.svg" alt="" />
                    <p>
                      {t("Limited real-time visibility for decision-making")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss8.svg" alt="" />
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
      </div>
      <div className={`digital-features-item agency-supports mstechadv ${language === 'German' ? 'germstechadv' : ''}`}>
        <div className="agency-supports-slider2">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss1.svg" alt="" />
                    <p>
                      {t("Unified development, cloud, and integration tools")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss2.svg" alt="" />
                    <p>
                      {t("Secure, scalable cloud services with Azure")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss3.svg" alt="" />
                    <p>
                      {t("AI & ML capabilities for smarter decision-making, predictive insights and automation (including Microsoft Copilot)")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss4.svg" alt="" />
                    <p>
                      {t("Low-code platforms for faster business-led innovation through Power Platform")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss5.svg" alt="" />
                    <p>
                      {t("Enterprise-grade security, governance, and compliance tools")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="agency-supports-logo">
                  <div className="dynamics-advantage-waber">
                    <img src="/images/ss6.svg" alt="" />
                    <p>
                      {t("Intelligent, cloud-based business applications with Microsoft Power Platform, enhanced by Copilot, enabling faster automation, integration, and innovation")}
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
                <img src="/images/access-technology-challenges.svg" alt="" />
                {/* <h6> Dynamics 365 ERP & CRM Solutions</h6> */}
                <p>
                  {t("Assess technology challenges and system gaps")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/configure-microsoft-solution.svg" alt="" />
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
                  alt=""
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
                <img src="/images/auto-manual-process.svg" alt="" />
                <p>
                  {t("Automate manual processes for efficiency")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/real-time-data-insights.svg" alt="" />
                <p>
                  {t("Deliver real-time data insights for smarter decisions")}
                </p>
              </div>
            </div>
            {/* Testimonial Slide End */}
            {/* Testimonial Slide Start */}
            <div className="swiper-slide">
              <div className="valueslide">
                <img src="/images/scalability-security.svg" alt="" />
                <p>
                  {t("Ensure scalability, security, and governance for future growth")}
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
              <img src="/images/app1.svg" alt="" />
              <div className="pill-cont">
                {/* <h5>Solution Architecture</h5> */}
                <p>
                  {" "}
                  {t(
                    "Microsoft ISV Partner and AI Cloud Partner with proven expertise"
                  )}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/app2.svg" alt="" />
              <div className="pill-cont">
                {/* <h5>Project Management</h5> */}
                <p>
                  {" "}
                  {t(
                    "End-to-end project delivery from strategy to support"
                  )}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/app3.svg" alt="" />
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
              <img src="/images/fe3.svg" alt="" />
              <div className="pill-cont">
                {/* <h5>Consulting</h5> */}
                <p>
                  {" "}
                  {t(
                    "Continuous security, governance, and platform management"
                  )}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/fe5.svg" alt="" />
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
                  "Let us build your future-ready systems with Microsoft technologies."
                )}{" "}
              </h2>
              <p>{" "}
                {t("Talk to our experts today.")}{" "}
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