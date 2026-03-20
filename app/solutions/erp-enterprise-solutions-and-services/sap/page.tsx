"use client";

import React from 'react'
import CommomLayout from '../../../Components/CommomLayout'
import Link from "next/link";
import {useTranslation} from "../../../hooks/useTranslation";
const page = () => {
  const { t, language } = useTranslation();
  return (
    <CommomLayout>
      <>
        {/* Header Start */}
        {/*?php include "navbar.php" ?*/}
        {/* Header End */}
        <div className="sap-baner-waber">
          <div className="container">
            <div className="animesan-waber llo">
              <div className="sap-title sap-paner-text">
                <h2 className="text-anime-style-21" data-cursor="-opaque">
                  {t("Build Resilient, Connected, Scalable and Future-Ready Enterprises with SAP")}
                </h2>
                {/* <p className="mt-3 mb-0">
                  SAP is not just a system. It’s the backbone for building operational
                  excellence. At RheinBrücke, we help organisations unlock the real
                  value of SAP through faster adoption, smarter integrations, and
                  outcome-focused execution.
                </p> */}
                <div className="ser-btn ">
                  <Link href="/contact-us" className="animated-svg-link">
                    {t("Contact us")}
                    <span className="svg-container">
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
              {/* SVG Animation from SVG_Animation Code.html */}
              <div className="sap-svg-animation-wrap" style={{ width: '100%', margin: '0 auto' }}>
                <iframe
                  src="/htmls/SVG_Animation%20Code.html"
                  title="SAP SVG Animation"
                  style={{
                    width: '100%',
                    height: '650px',
                    border: 'none',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </div>
              {/* 3. Create a container div */}
              {/* <div id="lottie-container" /> */}
            </div>
          </div>
        </div>
        {/* Hero Section Start*/}
        <div className=" buildsection mobilesap2">
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
                        {t("Business Transformation with SAP")}
                      </h2>
                      <p className="text-center">
                        {t("SAP’s intelligent cloud ERP and business technology platforms help enterprises:")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center width80">
              <div className="col-sm-4">
                <div className="dynamics-advantage-waber">
                  <img src="/new/g501.svg" alt="" />
                  <p>{t("Unify finance, operations, HR and supply chain")}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="dynamics-advantage-waber">
                  <img src="/new/ad2.svg" alt="" />
                  <p>{t("Boost productivity through AI-driven automation")}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="dynamics-advantage-waber">
                  <img src="/new/ad3.svg" alt="" />
                  <p>{t("Gain real-time operational visibility")}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="dynamics-advantage-waber">
                  <img src="/new/ad4.svg" alt="" />
                  <p>{t("Accelerate cloud transformation with secure, scalable systems")}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="dynamics-advantage-waber">
                  <img src="/new/ad5.svg" alt="" />
                  <p>{t("Optimise processes with continuous innovation")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        <div className="sap-advantage-main-waber">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-6">
                <div className="sap-advantage-waber">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("SAP is More Than ERP…")}
                  </h2>
                  <p>{t("Today, SAP is more than an ERP. It is a platform for:")}</p>
                  <div className="advantage-sap">
                    <h6> {t("Real-time decisions powered by embedded analytics")}</h6>
                    <p>
                      {t("S/4HANA and SAP Analytics Cloud enable business users to make decisions with live data - not spreadsheets or monthly reports.")}
                    </p>
                  </div>
                  <div className="advantage-sap">
                    <h6> {t("Continuous innovation through cloud updates")}</h6>
                    <p>
                      {t("Public and private cloud editions deliver ongoing enhancements, AI capabilities, and new best practices.")}
                    </p>
                  </div>
                  <div className="advantage-sap">
                    <h6> {t("End-to-end process clarity with Signavio")}</h6>
                    <p>
                      {t("Organisations worldwide report significant improvements in process transparency, operational consistency, and cycle-time reduction")}
                    </p>
                  </div>
                  <div className="advantage-sap">
                    <h6> {t("Connected ecosystems through SAP BTP")}</h6>
                    <p>
                      {t("Integrations, extensions, and automations help SAP fit seamlessly into your broader digital landscape.")}
                    </p>
                  </div>
                  <div className="advantage-sap">
                    <h6> {t("Radical simplification of IT operations")}</h6>
                    <p>
                      {t("Cloud migrations reduce system complexity, improve resilience, and free teams to focus on value creation.")}
                    </p>
                  </div>
                  <p>
                    {t("This is the future of SAP - agile, modular, analytics-driven, and business-led")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sap-advantage-img">
            <img src="/new/sap-advantage.jpg" alt="" />
          </div>
        </div>
        {/* Our Testimonial Section Start */}
        <div className={`our-testimonial saptest pd30 ${language === 'German' ? 'germansapservice' : ''}`}>
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Our SAP Services")}
                  </h2>
                  <h6 className='text-black mt15'>{t("Unlock business value through a comprehensive portfolio of SAP services and proven transformation methodologies.")}</h6>
                  <p>
                    {t("From strategy to execution and continuous optimisation, we help organisations accelerate innovation, improve agility, and achieve measurable business outcomes across their SAP landscape.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-12">
                {/* Testimonial Slider Start */}
                <div className="sap-service enterslide">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        {/* Your current service content */}
                        <div className="sap-service-waber">
                          <h3> {t("SAP Implementation Services")}</h3>
                          <p>
                            {t("We deliver end-to-end SAP implementations aligned with industry best practices and clean-core principles. Our structured delivery approach ensures predictable outcomes, faster go-lives, and scalable architectures.")}
                          </p>
                          <h5> {t("Key capabilities:")}</h5>
                          <ul>
                            <li> {t("SAP S/4HANA implementations (Greenfield / Brownfield / Selective)")}
                            </li>
                            <li> {t("Fit-to-standard and best-practice-driven design")}</li>
                            <li> {t("Process harmonisation and simplification")}</li>
                            <li> {t("Data migration, testing, and cutover management")}</li>
                            {/* <li> Post-go-live stabilisation & optimisation</li> */}
                          </ul>
                          <p>
                            {t("Reduced implementation risk, controlled scope, and a future-proof SAP landscape.")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        {/* Your current service content */}
                        <div className="sap-service-waber">
                          <h3> {t("RISE with SAP Transformation")}</h3>
                          <p>
                            {t("As a RISE with SAP® Validated Partner, RheinBrücke simplifies the journey from ECC to SAP S/4HANA with minimal disruption and maximum value realisation.")}
                          </p>
                          <h5> {t("Key capabilities:")}</h5>
                          <ul>
                            <li>
                              {t("System conversion, landscape transformation, and selective migration")}
                            </li>
                            <li> {t("Custom code remediation and clean-core alignment")}</li>
                            <li> {t("Data volume management and archiving")}</li>
                            <li> {t("SAP Readiness Check, Simplification Item handling, and CVI")}</li>
                          </ul>
                          <p>
                            {t("A modern RISE journey means clean processes, integrated systems, predictable costs, and continuous innovation.")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        {/* Your current service content */}
                        <div className="sap-service-waber">
                          <h3> {t("SAP Business Technology Platform (BTP)")}</h3>
                          <p>
                            {t("RheinBrücke unlocks innovation and extensibility using the SAP Business Technology Platform (SAP BTP).")}
                          </p>
                          <h5> {t("Key capabilities:")}</h5>
                          <ul>
                            <li> {t("Application development and extensions")}</li>
                            <li> {t("Integration Suite, Workflow, and Automation")}</li>
                            <li> {t("AI, RPA, and event-driven architectures")}</li>
                            <li> {t("Clean-core compliant innovations")}</li>
                          </ul>
                          <p>
                            {t("BTP is where enterprises unlock real agility, we help you get there.")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        {/* Your current service content */}
                        <div className="sap-service-waber">
                          <h3> {t("SAP Signavio & Process Intelligence")}</h3>
                          <p>
                            {t("Transform the way your organisation understands and improves processes.")}
                          </p>
                          <h5> {t("We help you:")}</h5>
                          <ul>
                            <li> {t("Map, analyse, and benchmark business processes")}</li>
                            <li>
                              {" "}
                              {t("Identify bottlenecks, inefficiencies, and compliance gaps")}
                            </li>
                            <li> {t("Build future-state process models")}</li>
                            <li> {t("Drive harmonisation across global operations")}</li>
                          </ul>
                          <p>
                            {t("Signavio brings clarity. We turn that clarity into action")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        <div className="sap-service-waber">
                          <h3> {t("SAP EWM Implementation")}</h3>
                          <p>
                            {t("We help organisations modernise warehouse operations using SAP Extended Warehouse Management (EWM) to improve inventory accuracy, throughput, and operational efficiency.")}
                          </p>
                          <h5> {t("Key capabilities:")}</h5>
                          <ul>
                            <li> {t("SAP EWM embedded and decentralised implementations")}</li>
                            <li> {t("Warehouse process optimisation and automation")}</li>
                            <li> {t("Integration with S/4HANA, TM, and third-party systems")}</li>
                            <li> {t("RF, Fiori, and automation enablement")}</li>
                          </ul>
                          <p>
                            {t("Real-time warehouse control with measurable gains in inventory accuracy and throughput.")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        {/* Your current service content */}
                        <div className="sap-service-waber">
                          <h3>
                            {" "}
                            {t("SAP Analytics Cloud (SAC) Implementation")}
                          </h3>
                          <p>
                            {t("We enable real-time insights and predictive analytics using SAP Analytics Cloud to support smarter, faster decision-making.")}
                          </p>
                          <h5> {t("Key capabilities:")}</h5>
                          <ul>
                            <li> {t("SAC planning, analytics, and predictive scenarios")}</li>
                            <li> {t("Integration with S/4HANA, BW, and non-SAP sources")}</li>
                            <li> {t("Executive dashboards and self-service analytics")}</li>
                            <li> {t("Financial and operational planning models")}</li>
                          </ul>
                          <p>
                            {t("We help organisations shift from data-rich to insight-driven.")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        {/* Your current service content */}
                        <div className="sap-service-waber">
                          <h3>
                            {" "}
                            {t("SAP AMS+ (Application Management & Optimisation)")}
                          </h3>
                          <p>
                            {" "}
                            {t("RheinBrücke provides reliable SAP AMS services that ensure business continuity, system stability, and continuous improvement.")}
                          </p>
                          <h5> {t("Key capabilities:")}</h5>
                          <ul>
                            <li> {t("Functional and technical support (L2/L3)")}</li>
                            <li> {t("Proactive monitoring and incident management")}</li>
                            <li> {t("Enhancement, optimisation, and minor developments")}</li>
                            <li> {t("SLA-driven offshore-onsite delivery model")}</li>
                          </ul>
                          <p>
                            {t("RheinBrücke's SAP AMS services ensure your SAP landscape is reliable, optimised, and always evolving.")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        {/* Your current service content */}
                        <div className="sap-service-waber">
                          <h3> {" "} {t("SAP SuccessFactors Implementation")} </h3>
                          <p>
                            {t("RheinBrücke helps organisations transform HR operations with SAP SuccessFactors, enabling improved employee experience and data-driven workforce management.")}
                          </p>
                          <h5> {t("Key capabilities:")}</h5>
                          <ul>
                            <li> {t("Core HR, Talent, Learning, and Performance modules")}</li>
                            <li> {t("Global HR standardisation and localisation")}</li>
                            <li> {t("Integration with S/4HANA and third-party payroll systems")}</li>
                            <li> {t("Data migration and change management")}</li>
                          </ul>
                          <p>
                            {t("SuccessFactors implemented with clean data, controlled change, and minimal disruption.")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}

                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        {/* Your current service content */}
                        <div className="sap-service-waber">
                          <h3> {" "} {t("SAP Ariba Services")} </h3>
                          <p>
                            {t("We modernise procurement and supplier collaboration using SAP Ariba to deliver transparency, control, and cost efficiency.")}
                          </p>
                          <h5> {t("Key capabilities:")}</h5>
                          <ul>
                            <li> {t("Ariba Buying, Invoicing, and Sourcing implementations")}</li>
                            <li> {t("Supplier onboarding and enablement")}</li>
                            <li> {t("Integration with SAP S/4HANA and ECC")}</li>
                            <li> {t("Spend visibility and compliance optimisation")}</li>
                          </ul>
                          <p>
                            {t("Ariba embedded as a governed procurement platform—not another disconnected tool.")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}

                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        {/* Your current service content */}
                        <div className="sap-service-waber">
                          <h3> {" "} {t("EDI & SAP CPI Integration Services")} </h3>
                          <p>
                            {t("We enable seamless system-to-system and business partner integrations using SAP Integration Suite (CPI) and EDI platforms.")}
                          </p>
                          <h5> {t("Key capabilities:")}</h5>
                          <ul>
                            <li> {t("EDI integrations with customers, suppliers, and logistics partners")}</li>
                            <li> {t("SAP CPI-based cloud and hybrid integrations")}</li>
                            <li> {t("API management and message mapping")}</li>
                            <li> {t("Monitoring, error handling, and optimisation")}</li>
                          </ul>
                          <p>
                            {t("Integrations designed for failure handling, visibility, and long-term stability.")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}

                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        {/* Your current service content */}
                        <div className="sap-service-waber">
                          <h3> {" "} {t("Merlin Sourcing – SAP-Integrated Strategic Sourcing")} </h3>
                          <p>
                            {t("Merlin Sourcing enables governed, SAP-integrated strategic sourcing, extending SAP procurement with structured sourcing, supplier collaboration, and decision control, without breaking clean-core principles.")}
                          </p>
                          <h5> {t("Key capabilities:")}</h5>
                          <ul>
                            <li> {t("SAP-integrated sourcing aligned to S/4HANA and ECC")}</li>
                            <li> {t("Structured sourcing workflows and event management")}</li>
                            <li> {t("Configurable for scale without customisation debt")}</li>
                            <li> {t("Delivered and supported by RheinBrücke’s SAP consulting and AMS teams")}</li>
                          </ul>
                          <p>
                            {t("SAP procurement investments extended into strategic sourcing without platform sprawl or governance loss.")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        {/* Your current service content */}
                        <div className="sap-service-waber">
                          <h3> {" "} {t("Custom Development & Technical Services")} </h3>
                          <p>
                            {t("We design and develop SAP extensions that enhance business capabilities while preserving a clean core.")}
                          </p>
                          <h5> {t("Key capabilities:")}</h5>
                          <ul>
                            <li> {t("ABAP and RAP-based developments")}</li>
                            <li> {t("SAP Fiori and UX enhancements")}</li>
                            <li> {t("Custom reports, interfaces, forms, and workflows")}</li>
                            <li> {t("Side-by-side extensions using SAP BTP")}</li>
                          </ul>
                          <p>
                            {t("We build only what adds value and ensure everything stays upgrade-friendly.")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}

                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide ">
                        {/* Your current service content */}
                        <div className="sap-service-waber">
                          <h3> {" "} {t("Global Rollout Services")} </h3>
                          <p>
                            {t("RheinBrücke enables seamless SAP rollouts across geographies, ensuring standardisation while accommodating local regulatory and business requirements.")}
                          </p>
                          <h5> {t("Key capabilities:")}</h5>
                          <ul>
                            <li> {t("Template-based global rollouts")}</li>
                            <li> {t("Localisation and compliance management")}</li>
                            <li> {t("Multi-country data and process harmonisation")}</li>
                            <li> {t("Central governance with regional flexibility")}</li>
                          </ul>
                          <p>
                            {t("Consistent global execution with local compliance assured from day one.")}
                          </p>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                    </div>
                    <div className="testimonial-btn sap-ser-1 rtyElement">
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
        <section className={`mds-section capabilities sapcap pd50 ${language === 'German' ? 'germansap' : ''}`}>
          <div className="container">
            <div className="content width50">
              <div className="section-title ">
                <div className="hero-video-content1 wow fadeInUp mt-4">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {" "}
                    {t("Why RheinBrücke")}
                  </h2>
                  <p> {t("An SAP partner for modern enterprises.")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Testimonial Slider Start */}
            <div className="sap systemview">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap1.svg" alt="" />
                      {/* <h6> Dynamics 365 ERP & CRM Solutions</h6> */}
                      <p>
                        {t("Strong S/4HANA, ECC, RISE, BTP, Signavio & SAC expertise")}
                      </p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap2.svg" alt="" />
                      <p> {t("Proven migration frameworks and accelerators")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap3.svg" alt="" />
                      <p>
                        {t("Deep integration capability across ERP and non-ERP systems")}
                      </p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap4.svg" alt="" />
                      <p> {t("Agile delivery with predictable outcomes")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap5.svg" alt="" />
                      <p> {t("A global delivery model that balances cost and quality")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/new/ds2.svg" alt="" />
                      <p> {t("Long-term AMS+ to keep your SAP evolving")}</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-btn  rtyElement">
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
            <div className="testimonial-slider1  mobile mobileview">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap1.svg" alt="" />
                      {/* <h6> Dynamics 365 ERP & CRM Solutions</h6> */}
                      <p> {t("Extensive global delivery experience in SAP")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap2.svg" alt="" />
                      <p>
                        {t("Proven expertise in S/4HANA Cloud, RISE with SAP, BTP, Signavio, and SAC")}
                      </p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap3.svg" alt="" />
                      <p> {t("Flexible delivery models tailored to business outcomes")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap4.svg" alt="" />
                      <p> {t("End-to-end SAP AMS, ABAP, and Basis services")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap5.svg" alt="" />
                      <p> {t("Focus on operational resilience and accelerated value")}</p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                </div>
              </div>
              <div className="testimonial-btn ">
                <div className="testimonial-button-prev">
                  <div className="animated-svg-link1 btn-style-3">
                    <span className="svg-container">
                      <span className="left">
                        {/* Prev SVG */}
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
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="12.7992"
                            cy="1.6"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="22.4008"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
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
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="11.1996"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="16.0004"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="19.1996"
                            cy="14.4"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="16.0004"
                            cy="17.6"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="12.7992"
                            cy="20.8"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="19.1996"
                            cy="8.00002"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
                {/* Slide counter */}
                <span className="testspace">3/3</span>
                <div className="testimonial-button-next">
                  <div className="animated-svg-link1 btn-style-3">
                    <span className="svg-container">
                      <span className="left">
                        {/* Next SVG */}
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
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="12.7992"
                            cy="1.6"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="22.4008"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
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
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="11.1996"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="16.0004"
                            cy="11.2"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="19.1996"
                            cy="14.4"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="16.0004"
                            cy="17.6"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="12.7992"
                            cy="20.8"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                          <circle
                            className="dot"
                            opacity="0.5"
                            cx="19.1996"
                            cy="8.00002"
                            r="1.6"
                            fill="#535353"
                          ></circle>
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Slider End */}
            <p className="mt-3">
              {" "}
              {t("We don’t just implement SAP - we help you run, optimise, and scale with it.")}
            </p>
          </div>
        </section>
        {/* Our Testimonial Section Start */}
        <div className="our-testimonial pd30">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-12">
                <div className="section-title text-center headingss">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Industries We Support")}
                  </h2>
                  <p> {t("Modern SAP solutions tailored for:")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-12">
                {/* Testimonial Slider Start */}
                <div className="industries enterintsec">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body in4">
                          <h3>
                            <span> {t("Manufacturing")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body in5">
                          <h3>
                            <span> {t("Automotive")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body in6">
                          <h3>
                            <span> {t("Engineering, Procurement & Construction")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body in2">
                          <h3>
                            <span> {t("Distribution & Retail")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body in1">
                          <h3>
                            <span> {t("Consumer Products")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body ein5">
                          <h3>
                            <span> {t("Energy & Utilities")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                    </div>
                  </div>
                  <div className="testimonial-btn9 ">
                    <div
                      className="testimonial-button-prev"
                      tabIndex={0}
                      role="button"
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-458e8c1080a2f710c9"
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
                      1/8
                    </span>
                    <div
                      className="testimonial-button-next"
                      tabIndex={0}
                      role="button"
                      aria-label="Next slide"
                      aria-controls="swiper-wrapper-458e8c1080a2f710c9"
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
                </div>
                {/* Testimonial Slider End */}
              </div>
            </div>
          </div>
          <div className="container">
            <p className="mt-3 text-center">
              {t("Each industry has different priorities. We bring the right processes, accelerators, and domain expertise.")}
            </p>
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
                            {t("What SAP services does RheinBrücke provide?")} 
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
                              {t("RheinBrücke provides strategic SAP consulting, end-to-end implementation, system integration, and complex Cloud transformation and migration services. We also offer customization and support for SAP ECC as well as technical support for ABAP and BASIS. Our goal is to modernize your SAP ERP landscape and significantly improve operational efficiency and data integrity.")}  
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
                             {t("Do you specialise in particular SAP modules?")} 
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
                              {t("Yes. RheinBrücke specializes in core SAP ERP solutions, with deep expertise in managing large-scale S/4HANA migrations and implementing SAP Business One tailored for mid-sized enterprises and global subsidiaries. We focus particularly on complex financials, Supply Chain Management (SCM), and logistics modules.")}
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
                            {t("Can SAP systems integrate with other enterprise applications?")} 
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
                              {t("Absolutely. SAP systems are central to the enterprise ecosystem. We leverage modern API and middleware tools to ensure seamless integration with CRM, HR, Business Intelligence (BI), and critical third-party applications. Critically, we specialize in complex interoperability projects involving platforms like Epicor and Microsoft Dynamics 365.")} 
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
                           {t("Does RheinBrücke provide SAP support and AMS services?")} 
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
                              {t("Yes. Our dedicated Application Management and Support (AMS) services provide proactive, SLA-based support to maintain system stability, manage regular version upgrades, and ensure continuous optimization of your SAP landscape. We offer flexible models, including 24/7 coverage for global and GCC operations.")}
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
                    <h2> {t("Ready to Modernise with SAP?")}</h2>
                    <p>
                      {t("Talk to our SAP experts to see how we can help optimise your systems and drive business transformation.")}
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <div className="ser-btn text-right">
                      <a href="/contact-us" className="animated-svg-link">
                        {t("Contact us")}
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
                      </a>
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