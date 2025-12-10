"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import TestimonialandAward from "../Components/TestimonialandAward";
import Awards from "../Components/Awards";
export default function EnterpriseSolutions() {
  return (
    <CommomLayout>
      <>
        {/* Header Start */}
        {/*?php include "navbar.php" ?*/}
        {/* Header End */}
        <div className="collateralssec">
          {/* <div class="parent2 retailparent2">
  <video src="/videos/uiux.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
          <div className="container">
            <div className="row section-row1 align-items-center builtsec collat">
              <div className="col-sm-12">
                <div className="section-title text-center ">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    LEADERSHIP
                  </h2>
                  {/* <p>In today’s digital-first world, great design is more than looks—it’s about creating seamless, intuitive experiences that drive engagement, satisfaction, and loyalty. </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div class="hero brainsec  lsbaner enterban pd30 pdb0">*/}
        {/*    <div class="container">*/}
        {/*        <div class="row section-row align-items-center builtsec">*/}
        {/*            <div class="col-sm-6">*/}
        {/*                <div class="section-title">*/}
        {/*                    <h2 class="text-anime-style-2" data-cursor="-opaque"> The Minds <br> Behind The Mission*/}
        {/*                    </h2>*/}
        {/*                    <p>True transformation is powered by people. Our leadership team embodies a culture of integrity,*/}
        {/*                        collaboration, and relentless curiosity. They are the strategists, mentors, and innovators*/}
        {/*                        ensuring every solution we create is built on a foundation of deep industry knowledge and a*/}
        {/*                        genuine commitment to our clients' success.*/}
        {/*                    </p>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div class="col-sm-1"></div>*/}
        {/*            <div class="col-sm-4">*/}
        {/*                <div class="parentban mtt50">*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/* Leadership Section Start*/}
        <div className="our-testimonial partner corussecond leadermobile pd-50">
          <div className="container">
            <div className="row section-row1 align-items-center">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="section-title text-center">
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      The Visionaries Behind Our Success
                    </h2>
                    <p className="mt-5">
                      Meet the dedicated leaders steering our strategy and inspiring
                      our global teams. With a shared passion for technological
                      advancement and a deep commitment to our clients' goals, they
                      provide the vision and expertise that drive RheinBrücke forward
                      and shape the future of digital transformation.
                    </p>
                  </div>
                </div>
                <div className="corimg mt-5">
                  <ul id="cards">
                    {/* Member 1 */}
                    <li className="card11 leder-waber-hight" id="card-1">
                      <div className="card-content col-sm-12">
                        <div className="row">
                          <div className="col-sm-9">
                            <div className="micfabric lesh">
                              <h2>Dr. Joerg Pirron</h2>
                              <h6> Board Member</h6>
                              <p>
                                After studying Electrical Engineering (Dipl.-Ing.),
                                Dr. Joerg Pirron received a Doctor’s degree from the
                                University of Stuttgart for his work in the area of
                                supply chain management. Dr. Pirron serves as one of
                                the Executive Board Member of Rheinbrücke. In this
                                capacity, he provides strategic guidance and Board
                                level oversight.
                              </p>
                              <p>
                                He is currently the Managing Partner of PROTEMA
                                Unternehmensberatung GmbH, a German based management
                                consulting firm that focuses on solving issues of
                                concern to senior management. It is a leading regional
                                strategy and operations consulting firm, that offers
                                experienced, expert consulting and advisory services
                                that drive measurable improvements in the efficiency
                                and effectiveness of their clients’ operations, apart
                                from providing other advisory services
                              </p>
                              <div id="more" className="more-text hidden">
                                <p>
                                  Prior to PROTEMA, he worked several years at various
                                  leadership roles for Fraunhofer, Europe’s largest
                                  application-oriented research organisation. In
                                  addition to his consulting activities Dr. Joerg
                                  Pirron was member of the Board of Directors of the
                                  Supply Chain Council from 2006 to 2008. Since
                                  September 2013, he is part of the managing board of
                                  an Intralogistics Cluster (Intralogistik-Netzwerk in
                                  Baden-Wuerttemberg), for which he was one of the
                                  founders in 2006.
                                </p>
                                <p>
                                  Currently he works on the development and
                                  application of Industry 4.0 concepts for the
                                  implementation of smart factory solutions, agile
                                  supply networks and innovative after sales services.
                                </p>
                              </div>
                              <div className="ser-btn leaderbtn readmore">
                                <span
                                  className="animated-svg-link"
                                  id="toggleReadMore"
                                >
                                  <span className="label">Read More</span>
                                  <span className="svg-container p-0">
                                    {/* Simple Down Arrow SVG */}
                                    <svg
                                      width={32}
                                      className="arrow-icon"
                                      height={32}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_5511_10679)">
                                        <circle
                                          cx="16.8"
                                          cy="10.8"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 16.8 10.8)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="19.1999"
                                          cy="8.40001"
                                          opacity="0.5"
                                          r="1.2"
                                          transform="rotate(90 19.1999 8.40001)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx={12}
                                          cy="15.6"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 12 15.6)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="9.60005"
                                          cy="13.2"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 9.60005 13.2)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="7.1999"
                                          cy="10.8"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 7.1999 10.8)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="4.8"
                                          cy="8.40001"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 4.8 8.40001)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="14.4001"
                                          cy="13.2"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 14.4001 13.2)"
                                          fill="#535353"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_5511_10679">
                                          <rect
                                            width={32}
                                            height={32}
                                            opacity="0.5"
                                            fill="#535353"
                                            transform="translate(24 1.04907e-06) rotate(90)"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <figure>
                              <img
                                src="/new/leadership/Dr. Joerg Pirron.jpg"
                                alt="card-one"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Member 2 */}
                    <li className="card11 leder-waber-hight " id="card-2">
                      <div className="card-content col-sm-12">
                        <div className="row">
                          <div className="col-sm-9">
                            <div className="micfabric lesh">
                              <h2>Kenneth Taormina </h2>
                              <h6> Board Member</h6>
                              <p>
                                Kenneth Taormina is currently the CEO and CO-Founder
                                of Nablis LLC a U.S. based Management Consulting firm
                                focusing on helping companies excel in their Business
                                Strategy, Human Capital Management and in building the
                                Leadership Culture and Processes to maximize their
                                return on investments. The Nablis team focuses on
                                bringing across industry corporate experience with
                                proven tools and techniques and a vast network of
                                Corporate, Private Equity, Venture Capital experience
                                for moving clients to the next level of performance.
                              </p>
                              <p>
                                {" "}
                                Ken has been a senior executive at Accenture, KPMG,
                                Oracle and GE. He has led creation, development, and
                                growth of companies in professional services areas of
                                global software services, corporate strategy,
                                enterprise information systems, and digital Industrial
                                Internet. He has led global organizations through
                                successful transformation, growth and change in the
                                US, Europe and Asia.
                              </p>
                              <div id="more" className="more-text hidden">
                                <p>
                                  {" "}
                                  While at Accenture he led the Automotive and
                                  Industrial Mobility and Connected Car Initiative and
                                  business while living in Munich, Germany. He also
                                  has extensive Private Equity experience and has led
                                  or participated in the M&amp;A of nine technology
                                  companies globally.
                                </p>
                                <p>
                                  He has served twice, as a Board member of National
                                  Association of Manufacturing and was the lead
                                  executive member to the Genivi Open Source
                                  Automobile Mobility Consortium for Accenture. He is
                                  also a prominent executive speaker in industry
                                  circles.
                                </p>
                                <p>
                                  Ken holds a Bachelor of Arts from Georgetown
                                  University and completed his Masters in Information
                                  Systems at the American University. He is a graduate
                                  of the Executive program at the University of
                                  Pennsylvania, Wharton School of Business and is a
                                  graduate of GE’s Executive Management Training
                                  Center at Crotonville, New York. He sits on the
                                  Advisory Board of Rollins College Business School
                                  and is an Adjunct Professor of Business there.
                                </p>
                              </div>
                              <div className="ser-btn leaderbtn readmore">
                                <span
                                  className="animated-svg-link"
                                  id="toggleReadMore"
                                >
                                  <span className="label">Read More</span>
                                  <span className="svg-container p-0">
                                    {/* Simple Down Arrow SVG */}
                                    <svg
                                      width={32}
                                      className="arrow-icon"
                                      height={32}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_5511_10679)">
                                        <circle
                                          cx="16.8"
                                          cy="10.8"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 16.8 10.8)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="19.1999"
                                          cy="8.40001"
                                          opacity="0.5"
                                          r="1.2"
                                          transform="rotate(90 19.1999 8.40001)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx={12}
                                          cy="15.6"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 12 15.6)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="9.60005"
                                          cy="13.2"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 9.60005 13.2)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="7.1999"
                                          cy="10.8"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 7.1999 10.8)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="4.8"
                                          cy="8.40001"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 4.8 8.40001)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="14.4001"
                                          cy="13.2"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 14.4001 13.2)"
                                          fill="#535353"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_5511_10679">
                                          <rect
                                            width={32}
                                            height={32}
                                            opacity="0.5"
                                            fill="#535353"
                                            transform="translate(24 1.04907e-06) rotate(90)"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <figure>
                              <img
                                src="/new/leadership/Kenneth Taormina.jpg"
                                alt="card-one"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Member 3 */}
                    <li className="card11 leder-waber-hight" id="card-2">
                      <div className="card-content col-sm-12">
                        <div className="row">
                          <div className="col-sm-9">
                            <div className="micfabric lesh">
                              <h2>Carlos A. Alvarenga</h2>
                              <h6> Board Member</h6>
                              <p>
                                Carlos A. Alvarenga is the Founder and CEO of Katalyst
                                Networks , He was earlier the Executive Director of
                                World 50 Labs, the member innovation team at World 50,
                                Inc. World 50, Inc. is the premier global CXO network,
                                with over 1,400 C-suite executives across every
                                corporate function. At World 50, Carlos oversees
                                custom innovation and insight programs and content
                                development. Previous to World 50, Carlos was a
                                Principal in EY’s Consulting Practice where he helped
                                launch the operational risk practice.
                              </p>
                              <p>
                                {" "}
                                Before joining EY, Carlos was the Managing Director of
                                Accenture’s Supply Chain and Procurement BPO business,
                                which he helped launch in 2009 and which is now a $1B+
                                plus global business for Accenture. In addition to his
                                P&amp;L role, Carlos worked closely with Accenture’s
                                M&amp;A team on several strategic acquisitions in
                                support of the overall BPO growth strategy.
                              </p>
                              <div id="more" className="more-text hidden">
                                <p>
                                  {" "}
                                  Prior to his role at Accenture, Carlos was a VP at
                                  Mahindra-Satyam, where he focused on growing their
                                  supply chain technology and services business
                                  globally. This role included leading the selection
                                  and acquisition of S&amp;V Management Consulting in
                                  Belgium. Carlos led the acquisition due diligence,
                                  negotiations and post-acquisition integration.
                                </p>
                                <p>
                                  Prior to his role at Mahindra-Satyam, Carlos was
                                  partner at KPMG Consulting where he sold and let
                                  global strategy operational transformation projects
                                  for companies such as Nissan, GE, Alcatel and
                                  Motorola. In addition to his corporate leadership
                                  roles, Carlos holds the position of Senior Research
                                  Fellow and Adjunct Professor in the Logistics,
                                  Business and Public Policy Department at the
                                  University of Maryland’s Robert E. Smith School of
                                  Business
                                </p>
                              </div>
                              {/* Button */}
                              <div className="ser-btn leaderbtn readmore">
                                <span className="animated-svg-link" id="toggleReadMore">
                                  <span className="label">Read More</span>
                                  <span className="svg-container p-0">
                                    {/* Simple Down Arrow SVG */}
                                    <svg
                                      width={32}
                                      className="arrow-icon"
                                      height={32}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_5511_10679)">
                                        <circle
                                          cx="16.8"
                                          cy="10.8"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 16.8 10.8)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="19.1999"
                                          cy="8.40001"
                                          opacity="0.5"
                                          r="1.2"
                                          transform="rotate(90 19.1999 8.40001)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx={12}
                                          cy="15.6"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 12 15.6)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="9.60005"
                                          cy="13.2"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 9.60005 13.2)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="7.1999"
                                          cy="10.8"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 7.1999 10.8)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="4.8"
                                          cy="8.40001"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 4.8 8.40001)"
                                          fill="#535353"
                                        />
                                        <circle
                                          cx="14.4001"
                                          cy="13.2"
                                          r="1.2"
                                          opacity="0.5"
                                          transform="rotate(90 14.4001 13.2)"
                                          fill="#535353"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_5511_10679">
                                          <rect
                                            width={32}
                                            height={32}
                                            opacity="0.5"
                                            fill="#535353"
                                            transform="translate(24 1.04907e-06) rotate(90)"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <figure>
                              <img
                                src="/new/leadership/Carlos A. Alvarenga.jpg"
                                alt="card-one"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Leadership Section End*/}
        <div className="container">
          <p className="lines" />
        </div>
        <TestimonialandAward />
    
        <Awards />
        {/* Footer Start */}
        <footer className="main-footer pd0">
          {/* Footer Main Start */}
          <div className="footer-main">
            <div className="container">
              <div className="firstrow">
                <div className="row">
                  <div className="col-sm-8">
                    <h2>Ready to accelerate value creation across your portfolio?</h2>
                    <p>
                      Contact us today to learn how we can help modernise operations,
                      de-risk integrations, and improve commercial outcomes.
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <div className="ser-btn text-right">
                      <Link href="/contact" className="animated-svg-link">
                        Contact Us
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