"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
export default function AlMl() {
    return (
        <CommomLayout>
            <>
                <section className="case-study-waber">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8">
                                <h2 className="case-study-main-title" data-cursor="-opaque">
                                    Implementation of Epicor 10 ERP in Oman Fibre Optic – Oman, A
                                    leading Manufacturer of world class fibre cable products
                                </h2>
                                <div className="study-img-info my-24">
                                    <p>September 22, 2025</p>
                                    <p>Kumar Mallampalli</p>
                                </div>
                                <img src="/new/stu-img.jpg" alt="" />
                                {/* <ul class="nav stu-tab-1 nav-pills justify-content-between " id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Overview</button>
              </li>
              <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Challenges</button>
              </li>
              <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Our Solution</button>
              </li>
              <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-Benefits-tab" data-bs-toggle="pill" data-bs-target="#pills-Benefits" type="button" role="tab" aria-controls="pills-Benefits" aria-selected="false">Benefits</button>
              </li>
              <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-Implementation-tab" data-bs-toggle="pill" data-bs-target="#pills-Implementation" type="button" role="tab" aria-controls="pills-Implementation" aria-selected="false">Implementation</button>
              </li>

          </ul> */}
                                <div className="scrollspy-nav-container">
                                    <ul
                                        className="nav nav-pills custom-nav-pills"
                                        id="scrollspyNav"
                                        role="tablist"
                                    >
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active" href="#overview-section">
                                                Overview
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" href="#challenges-section">
                                                Challenges
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" href="#solution-section">
                                                Our Solution
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" href="#benefits-section">
                                                Benefits
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" href="#implementation-section">
                                                Implementation
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content-wrapper">
                                    <div id="overview-section" className="content-section">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="stu-tap-content">
                                                    <h6 className="stu-sub-title"> Overview</h6>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                                        sint occaecat cupidatat non proident, sunt in culpa qui
                                                        officia deserunt mollit anim id est laborum.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="stu-tap-color-content">
                                                    <h6 className="stu-sub-title"> About Client</h6>
                                                    <img
                                                        src="/new/sty-abo-logo.svg"
                                                        className="stu-logo-img-1"
                                                        alt=""
                                                    />
                                                    <p>
                                                        OFO uses state-of-the-art technology to draw fiber and
                                                        manufacture world class fiber cable products.
                                                    </p>
                                                    <div className="stu-color-6">
                                                        <img src="/new/stu-22.svg" alt="" />
                                                        <p> Muscat, Oman</p>
                                                    </div>
                                                    <div className="stu-color-6">
                                                        <img src="/new/stu-24.svg" alt="" />
                                                        <p>
                                                            {" "}
                                                            Oman Fiber Optic Co. S.A.O.G. (OFO) is a public listed
                                                            company that commenced cable production in early 1999.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="stu-tab-dark-color">
                                                    <p>
                                                        {" "}
                                                        Implementing a standardised ERP solution gives
                                                        organisations a precise and consistent comprehension of
                                                        their business operations, wherever they are. Furthermore,
                                                        such a solution reduces the expenses associated with
                                                        support and maintenance and enables businesses to identify
                                                        targeted measures to enhance operational efficiency
                                                        throughout.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="challenges-section" className="content-section">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="stu-tap-content">
                                                    <h6 className="stu-sub-title">Challenges</h6>
                                                    <p>
                                                        The implementation of EPICOR 10 with comprehensive modules
                                                        for Cable Production has proven instrumental in addressing
                                                        various business challenges through:
                                                    </p>
                                                    <div className="stu-color-6">
                                                        <img src="/new/stu-tick.svg" alt="" />
                                                        <p>
                                                            {" "}
                                                            The structured implementation, compliant with statutory
                                                            requirements, involved the use of Epicor std. Data
                                                            Migration Tool and Templates effectively migrated data
                                                            from the Legacy system to Epicor ERP.
                                                        </p>
                                                    </div>
                                                    <div className="stu-color-6">
                                                        <img src="/new/stu-tick.svg" alt="" />
                                                        <p>
                                                            {" "}
                                                            The ERP system handled all third-party managed
                                                            operations in procurement and project execution, while
                                                            also implementing business process harmonization to
                                                            simplify operations under a single ERP platform.{" "}
                                                        </p>
                                                    </div>
                                                    <div className="stu-color-6">
                                                        <img src="/new/stu-tick.svg" alt="" />
                                                        <p>
                                                            Multiple sub-assemblies and materials issued to
                                                            inventory simultaneously, generalised batch number
                                                            system with barcode generation for multi-level job
                                                            operations, and automated job orders for daily
                                                            production from the sales order.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="solution-section" className="content-section">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="stu-tap-content">
                                                    <h6 className="stu-sub-title"> Our Solution</h6>
                                                    <p>
                                                        The implementation of EPICOR 10 with comprehensive modules
                                                        for Cable Production has proven instrumental in addressing
                                                        various business challenges through:
                                                    </p>
                                                    <div className="stu-color-6">
                                                        <img src="/new/stu-tick.svg" alt="" />
                                                        <p>
                                                            {" "}
                                                            The structured implementation, compliant with statutory
                                                            requirements, involved the use of Epicor std. Data
                                                            Migration Tool and Templates effectively migrated data
                                                            from the Legacy system to Epicor ERP.
                                                        </p>
                                                    </div>
                                                    <div className="stu-color-6">
                                                        <img src="/new/stu-tick.svg" alt="" />
                                                        <p>
                                                            {" "}
                                                            The ERP system handled all third-party managed
                                                            operations in procurement and project execution, while
                                                            also implementing business process harmonization to
                                                            simplify operations under a single ERP platform.{" "}
                                                        </p>
                                                    </div>
                                                    <div className="stu-color-6">
                                                        <img src="/new/stu-tick.svg" alt="" />
                                                        <p>
                                                            Multiple sub-assemblies and materials issued to
                                                            inventory simultaneously, generalised batch number
                                                            system with barcode generation for multi-level job
                                                            operations, and automated job orders for daily
                                                            production from the sales order.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="benefits-section" className="content-section">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="stu-tap-content">
                                                    <h6 className="stu-sub-title"> Benefits</h6>
                                                    <div className="stu-color-6">
                                                        <img src="/new/stu-tick.svg" alt="" />
                                                        <p>
                                                            {" "}
                                                            Reduced ‘Accounts Receivables’ Collection Cycle,
                                                            realistic and faster estimation process, and effective
                                                            cash flow forecasts for future planning.
                                                        </p>
                                                    </div>
                                                    <div className="stu-color-6">
                                                        <img src="/new/stu-tick.svg" alt="" />
                                                        <p>
                                                            {" "}
                                                            Real-time integration of business transactions, better
                                                            collaboration between departments, elimination of manual
                                                            reporting processes, faster month-end closing activities
                                                            and streamlined inventory management and production
                                                            processes.{" "}
                                                        </p>
                                                    </div>
                                                    <div className="stu-color-6">
                                                        <img src="/new/stu-tick.svg" alt="" />
                                                        <p>
                                                            Centralised repository for data, real-time access to ERP
                                                            data for analysis, improved data security and restricted
                                                            access to sensitive information, customizable reporting
                                                            using ERP data and creation of interactive business
                                                            dashboards and graphical reports.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="implementation-section" className="content-section">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="stu-tap-content">
                                                    <h6 className="stu-sub-title">Implementation</h6>
                                                    <p>
                                                        At RheinBrücke, we offer a range of services to assist our
                                                        customers in various industries including cable
                                                        production. Our services include ERP implementation,
                                                        support, and rollout, which aim to automate essential
                                                        functions and ensure quality control throughout the
                                                        process for our client’s convenience.
                                                    </p>
                                                    <div className="stu-color-6">
                                                        <img src="/new/stu-tick.svg" alt="" />
                                                        <p>
                                                            {" "}
                                                            Multiple sub-assemblies and materials issued to
                                                            inventory simultaneously, generalised batch number
                                                            system with barcode generation for multi-level job
                                                            operations, and automated job orders for daily
                                                            production from the sales order.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ser-btn2">
                                    <a href="#" className="animated-svg-link1 btn-style-3">
                                        Download the Case Study
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
                                    </a>
                                </div>
                                <div className="stu-sociyal-waber">
                                    <h6 className="stu-sub-title"> Share with </h6>
                                    <div className="stu-sociyal">
                                        <img src="/new/Linked-in.svg" alt="" />
                                        <img src="/new/twitter.svg" alt="" />
                                        <img src="/new/instagram.svg" alt="" />
                                        <img src="/new/facebook.svg" alt="" />
                                        <img src="/new/whatsapp-3.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-3">
                                <h6 className="stu-sub-title"> Related Case Study</h6>
                                <div className="case-one-waber">
                                    <div>
                                        <a href="" className="case-bage">
                                            Case Study
                                        </a>
                                    </div>
                                    <h6 className="stu-sub-title p-0 m-0">
                                        {" "}
                                        Digital Transformation of American Golf’s Retail Operation
                                    </h6>
                                    <div className="ser-btn m-0">
                                        <a href="#" className="animated-svg-link p-0">
                                            Read More
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
                                <div className="case-one-waber">
                                    <div>
                                        <a href="" className="case-bage">
                                            Case Study
                                        </a>
                                    </div>
                                    <h6 className="stu-sub-title p-0 m-0">
                                        Implementation of Epicor 10 ERP at Bond Interiors, a multinational
                                        company based out of Dubai
                                    </h6>
                                    <div className="ser-btn m-0">
                                        <a href="#" className="animated-svg-link p-0">
                                            Read More
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
                                <div className="case-one-waber">
                                    <div>
                                        <a href="" className="case-bage">
                                            Case Study
                                        </a>
                                    </div>
                                    <h6 className="stu-sub-title p-0 m-0">
                                        Implementation of Epicor 10 ERP in Oman Fibre Optic – Oman, a
                                        leading Manufacturer of world class fibre cable products
                                    </h6>
                                    <div className="ser-btn m-0">
                                        <a href="#" className="animated-svg-link p-0">
                                            Read More
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
                                <div className="case-one-waber">
                                    <div>
                                        <a href="" className="case-bage">
                                            Case Study
                                        </a>
                                    </div>
                                    <h6 className="stu-sub-title p-0 m-0">
                                        Welding Equipment Manufacturer Implements Epicor Country Specific
                                        Functionality
                                    </h6>
                                    <div className="ser-btn m-0">
                                        <a href="#" className="animated-svg-link p-0">
                                            Read More
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
                    </div>
                </section>
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
                                            <a href="#" className="animated-svg-link">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>





        </CommomLayout>
    )
}