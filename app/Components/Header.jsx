"use client";

import React from "react";
import { NavArrowLeft, NavArrowRight } from "../icons";

export default function Header() {
    return (
        <>
            <div className="topheader text-right">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 col-0" />
                        <div className="col-sm-7 col-12">
                            <ul className="top-in">
                                <li className="top-icon-gap">
                                    <span className="fa fa-envelope1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                                                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white"
                                                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <a href="mailto:info@rheincs.com"> info@rheincs.com</a>
                                </li>
                                <li>
                                    <div className="custom-select top-icon-gap">
                                        <select name="lang" id="lang">
                                            <option value="German">German</option>
                                            <option value="English">English</option>
                                        </select>
                                        <label htmlFor="lang" className="ml-4" style={{ marginLeft: '5px' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_5511_10679)">
                                                    <circle cx="16.8" cy="10.8" r="1.2" transform="rotate(90 16.8 10.8)" fill="white" />
                                                    <circle cx="19.1999" cy="8.40001" r="1.2" transform="rotate(90 19.1999 8.40001)" fill="white" />
                                                    <circle cx="12" cy="15.6" r="1.2" transform="rotate(90 12 15.6)" fill="white" />
                                                    <circle cx="9.60005" cy="13.2" r="1.2" transform="rotate(90 9.60005 13.2)" fill="white" />
                                                    <circle cx="7.1999" cy="10.8" r="1.2" transform="rotate(90 7.1999 10.8)" fill="white" />
                                                    <circle cx="4.8" cy="8.40001" r="1.2" transform="rotate(90 4.8 8.40001)" fill="white" />
                                                    <circle cx="14.4001" cy="13.2" r="1.2" transform="rotate(90 14.4001 13.2)" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5511_10679">
                                                        <rect width="24" height="24" fill="white" transform="translate(24 1.04907e-06) rotate(90)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div id="chcp_font_size" className="input-group">
                                        <span className="input-group-btn font-increase-waber">
                                            <button
                                                id="btn-decrease"
                                                className="btn btn-default"
                                                type="button"
                                            >
                                                Aa&nbsp;-
                                            </button>
                                            <button
                                                id="btn-increase"
                                                className="btn btn-default"
                                                type="button"
                                            >
                                                Aa&nbsp;+
                                            </button>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="desktop-nav">
                <header className="main-header boxshadow" id="mainHeader">
                    <div className="header-sticky">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                {/* Logo Start */}
                                <a className="navbar-brand" href="index.php">
                                    <img src="/images/rlogo.png" alt="Logo" />
                                </a>
                                {/* Logo End */}
                                {/* Main Menu Start */}
                                <div className="collapse navbar-collapse main-menu">
                                    <div className="nav-menu-wrapper">
                                        <ul className="navbar-nav mr-auto" id="menu">
                                            {/* <li class="nav-item submenu1"><a class="nav-link" href="index.php">Home</a> </li> */}
                                            <li className="nav-item submenu mega-menu <?php echo in_array($current_page, $about_pages) ? 'active' : ''; ?>">
                                                <a className="nav-link drop-1" href="#">
                                                    <span> About Us</span>
                                                    <span style={{ marginLeft: '5px' }}>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_5511_10679)">
                                                                <circle
                                                                    cx="16.8"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 16.8 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="19.1999"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 19.1999 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="15.6"
                                                                    r="1.2"
                                                                    transform="rotate(90 12 15.6)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="9.60005"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 9.60005 13.2)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="7.1999"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 7.1999 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="4.8"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 4.8 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="14.4001"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 14.4001 13.2)"
                                                                    fill="white"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_5511_10679">
                                                                    <rect
                                                                        width={24}
                                                                        height={24}
                                                                        fill="white"
                                                                        transform="translate(24 1.04907e-06) rotate(90)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </a>
                                                <div className="mega-menu-content full-width">
                                                    <div className="container">
                                                        {/* <h1>About Us</h1> */}
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="tab-contents aboutnav">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="tabcont1">
                                                                                <h1>About Us</h1>
                                                                                <ul>
                                                                                    <li className="ser-btn">
                                                                                        <a
                                                                                            href="overview.php"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Overview
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <a
                                                                                            href="leadership.php"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Leadership
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <a
                                                                                            href="customer-speak.php"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Customers Speak
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <a
                                                                                            href="success-stories.php"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Success Stories
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <a
                                                                                            href="careers.php"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Careers
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="our-services projects pd0">
                                                                                <div className="row">
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                10 Must-Have Features in a Modern ERP
                                                                                                System
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <a
                                                                                                    href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                10 Must-Have Features in a Modern ERP
                                                                                                System
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <a
                                                                                                    href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body secondser">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                The Top 8 ERP Systems for Financial
                                                                                                Management
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <a
                                                                                                    href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        {/* Service Item End */}
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
                                            </li>
                                            <li className="nav-item submenu mega-menu <?php echo in_array($current_page, $solutions_pages) ? 'active' : ''; ?>">
                                                <a className="nav-link darp-1" href="#">
                                                    {" "}
                                                    <span> Solutions &amp; Services </span>
                                                    <span>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_5511_10679)">
                                                                <circle
                                                                    cx="16.8"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 16.8 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="19.1999"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 19.1999 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="15.6"
                                                                    r="1.2"
                                                                    transform="rotate(90 12 15.6)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="9.60005"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 9.60005 13.2)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="7.1999"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 7.1999 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="4.8"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 4.8 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="14.4001"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 14.4001 13.2)"
                                                                    fill="white"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_5511_10679">
                                                                    <rect
                                                                        width={24}
                                                                        height={24}
                                                                        fill="white"
                                                                        transform="translate(24 1.04907e-06) rotate(90)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </a>
                                                <div className="mega-menu-content full-width">
                                                    <div className="container">
                                                        <h1>Solutions &amp; Services</h1>
                                                        {/* Vertical tabs */}
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <div className="tab-buttons">
                                                                    <button className="tab-link active" data-tab="tab1">
                                                                        Our Solutions
                                                                    </button>
                                                                    <button className="tab-link" data-tab="tab2">
                                                                        Enterprise Solutions &amp; Services
                                                                    </button>
                                                                    <button className="tab-link" data-tab="tab3">
                                                                        Digital Solutions &amp; Services
                                                                    </button>
                                                                    {/*<button class="tab-link" data-tab="tab4">Digital*/}
                                                                    {/*    Services</button>*/}
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                {/* Tab content */}
                                                                <div className="tab-contents">
                                                                    <div id="tab1" className="tab-content active">
                                                                        <div className="row">
                                                                            <div className="col-sm-5 pr0">
                                                                                <div className="tabcont">
                                                                                    <h3>Our Solutions</h3>
                                                                                    <ul>
                                                                                        <li className="ser-btn">
                                                                                            <a
                                                                                                href="corushr.php"
                                                                                                className="animated-svg-link"
                                                                                            >
                                                                                                Corus HR
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a
                                                                                                href="MeRLIN.php"
                                                                                                className="animated-svg-link"
                                                                                            >
                                                                                                MeRLIN Sourcing
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-7">
                                                                                <div className="our-services projects pd0">
                                                                                    <div className="row">
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body">
                                                                                                <h3>
                                                                                                    <span>Case Study</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    10 Must-Have Features in a Modern
                                                                                                    ERP System
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <a
                                                                                                        href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                        className="animated-svg-link1 btn-style-3"
                                                                                                    >
                                                                                                        Read More
                                                                                                        <NavArrowLeft />
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body secondser">
                                                                                                <h3>
                                                                                                    <span>Case Study</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    The Top 8 ERP Systems for Financial
                                                                                                    Management
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <a
                                                                                                        href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                                                                                                        className="animated-svg-link1 btn-style-3"
                                                                                                    >
                                                                                                        Read More
                                                                                                        <NavArrowLeft />
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                            {/* Service Item End */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="tab2" className="tab-content">
                                                                        <div className="row">
                                                                            <div className="col-sm-5 pr0">
                                                                                <div className="tabcont">
                                                                                    <h3 className="ser-btn">
                                                                                        <a
                                                                                            className="animated-svg-link"
                                                                                            href="enterprise-solutions.php"
                                                                                        >
                                                                                            Enterprise Solutions and Services
                                                                                            <NavArrowLeft />
                                                                                        </a>
                                                                                    </h3>
                                                                                    <ul>
                                                                                        <li className="ser-btn">
                                                                                            <div className="menu-item">
                                                                                                <a
                                                                                                    href="epicor.php"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Epicor
                                                                                                </a>
                                                                                                <a
                                                                                                    href="#demo"
                                                                                                    data-bs-toggle="collapse"
                                                                                                    className="arrow-toggle animated-svg-link"
                                                                                                >
                                                                                                    <NavArrowRight />
                                                                                                </a>
                                                                                            </div>
                                                                                            <div
                                                                                                id="demo"
                                                                                                className="collapse content-box"
                                                                                            >
                                                                                                <a href="epicor-kinetic.php">
                                                                                                    {" "}
                                                                                                    Epicor Kinetic
                                                                                                </a>
                                                                                                <a href="epicor-iscala.php">
                                                                                                    {" "}
                                                                                                    Epicor iScala
                                                                                                </a>
                                                                                                <a href="epicor-companion.php">
                                                                                                    {" "}
                                                                                                    Epicor Companion Products
                                                                                                </a>
                                                                                                <a href="epicor-epicpay.php">
                                                                                                    {" "}
                                                                                                    EpicPay
                                                                                                </a>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a
                                                                                                href="microsoft-dynamics-solutions.php"
                                                                                                className=""
                                                                                            >
                                                                                                MS Dynamics
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a href="SAP.php" className="">
                                                                                                SAP
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a href="sugar-CRM.php" className="">
                                                                                                Sugar CRM
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a
                                                                                                href="ERP-customer-excellence.php"
                                                                                                className=""
                                                                                            >
                                                                                                ERP Customer Excellence
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-7">
                                                                                <div className="our-services projects pd0">
                                                                                    <div className="row">
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body">
                                                                                                <h3>
                                                                                                    <span>Case Study</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    10 Must-Have Features in a Modern
                                                                                                    ERP System 1
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <a
                                                                                                        href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                        className="animated-svg-link1
                                                      btn-style-3"
                                                                                                    >
                                                                                                        Read More
                                                                                                        <NavArrowLeft />
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body secondser">
                                                                                                <h3>
                                                                                                    <span>Case Study</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    The Top 8 ERP Systems for Financial
                                                                                                    Management 1
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <a
                                                                                                        href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                                                                                                        className="animated-svg-link1
                                                      btn-style-3"
                                                                                                    >
                                                                                                        Read More
                                                                                                        <NavArrowLeft />
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                            {/* Service Item End */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="tab3" className="tab-content">
                                                                        <div className="row">
                                                                            <div className="col-sm-5 pr0">
                                                                                <div className="tabcont">
                                                                                    <h3 className="ser-btn">
                                                                                        <a
                                                                                            className="animated-svg-link"
                                                                                            href="digital-solutions.php"
                                                                                        >
                                                                                            Solutions
                                                                                            <NavArrowRight />
                                                                                        </a>
                                                                                    </h3>
                                                                                    <ul>
                                                                                        <li className="ser-btn">
                                                                                            <a href="business-intelligence.php">
                                                                                                BI &amp; Analytics
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a href="AI-ML.php">AI/ML</a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a href="ecommerce.php">eCommerce</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="tabcont">
                                                                                    <h3 className="ser-btn">
                                                                                        <a
                                                                                            className="animated-svg-link"
                                                                                            href="digital-solutions.php"
                                                                                        >
                                                                                            Services
                                                                                            <NavArrowRight />
                                                                                        </a>
                                                                                    </h3>
                                                                                    <ul>
                                                                                        <li className="ser-btn">
                                                                                            <a href="Architecture.php">
                                                                                                Architecture &amp; App Modernisation
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a href="data-engineering-warehousing.php">
                                                                                                Data Engineering and Warehousing
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a href="enterprise-solutions.php">
                                                                                                Enterprise Software
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a href="AM-S.php">A M &amp; S</a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a href="user-exprience.php">
                                                                                                User Experience
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a href="commercetools.php">
                                                                                                Commercetools
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a href="fluent-commerce.php">
                                                                                                Fluent Commerce
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <a href="ms-technology.php">
                                                                                                MS Technologies
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-7">
                                                                                <div className="our-services projects pd0">
                                                                                    <div className="row">
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body">
                                                                                                <h3>
                                                                                                    <span>Case Study</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    10 Must-Have Features in a Modern
                                                                                                    ERP System 2
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <a
                                                                                                        href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                        className="animated-svg-link1
                                                      btn-style-3"
                                                                                                    >
                                                                                                        Read More
                                                                                                        <NavArrowLeft />
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body secondser">
                                                                                                <h3>
                                                                                                    <span>Case Study</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    The Top 8 ERP Systems for Financial
                                                                                                    Management 2
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <a
                                                                                                        href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                                                                                                        className="animated-svg-link1
                                                      btn-style-3"
                                                                                                    >
                                                                                                        Read More
                                                                                                        <NavArrowLeft />
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                            {/* Service Item End */}
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
                                                </div>
                                            </li>
                                            <li className="nav-item submenu mega-menu <?php echo in_array($current_page, $industry_pages) ? 'active' : ''; ?> ">
                                                <a className="nav-link darp-1" href="#">
                                                    {" "}
                                                    <span>Industries</span>
                                                    <span>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_5511_10679)">
                                                                <circle
                                                                    cx="16.8"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 16.8 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="19.1999"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 19.1999 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="15.6"
                                                                    r="1.2"
                                                                    transform="rotate(90 12 15.6)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="9.60005"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 9.60005 13.2)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="7.1999"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 7.1999 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="4.8"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 4.8 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="14.4001"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 14.4001 13.2)"
                                                                    fill="white"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_5511_10679">
                                                                    <rect
                                                                        width={24}
                                                                        height={24}
                                                                        fill="white"
                                                                        transform="translate(24 1.04907e-06) rotate(90)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </a>
                                                <div className="mega-menu-content full-width">
                                                    <div className="container">
                                                        {/* <h1>About Us</h1> */}
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="tab-contents aboutnav1">
                                                                    <div className="row">
                                                                        <div className="width60">
                                                                            <div className="tabcont1">
                                                                                <h1>Industries</h1>
                                                                                <div className="row">
                                                                                    <div className="col-sm-6">
                                                                                        <ul className="verline">
                                                                                            <li className="ser-btn">
                                                                                                <a
                                                                                                    href="vertical-retail.php"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Brand Owners and Vertical Retailers
                                                                                                </a>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <a
                                                                                                    href="industries-retail.php"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Retail Industry
                                                                                                </a>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <a
                                                                                                    href="supply-chain.php"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Distribution and Supply Chain
                                                                                                </a>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <a
                                                                                                    href="discrete-manufacturing.php"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Discrete Manufacturing
                                                                                                </a>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <a
                                                                                                    href="automotive.php"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Automotive Industry
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-sm-6 pdl0">
                                                                                        <ul>
                                                                                            <li className="ser-btn">
                                                                                                <a
                                                                                                    href="epc.php"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Engineering Procurement and
                                                                                                    Construction
                                                                                                </a>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <a
                                                                                                    href="process-manufacturing.php"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Process Manufacturing
                                                                                                </a>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <a
                                                                                                    href="private-quity.php"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Private Equity &amp; Funding Backed
                                                                                                    Ventures
                                                                                                </a>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <a
                                                                                                    href="cable-manufacturing.php"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Cable Manufacturing
                                                                                                </a>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <a
                                                                                                    href="interior-design.php"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Interior Design
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="width40">
                                                                            <div className="our-services projects pd0">
                                                                                <div className="row">
                                                                                    <div className="col-lg-6 col-md-6">
                                                                                        <div className="service-item-body">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                10 Must-Have Features in a Modern ERP
                                                                                                System
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <a
                                                                                                    href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6">
                                                                                        <div className="service-item-body secondser">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                The Top 8 ERP Systems for Financial
                                                                                                Management
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <a
                                                                                                    href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        {/* Service Item End */}
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
                                            </li>
                                            <li className="nav-item submenu mega-menu <?php echo in_array($current_page, $resource_pages) ? 'active' : ''; ?> ">
                                                <a className="nav-link darp-1" href="#">
                                                    {" "}
                                                    <span>Resources </span>{" "}
                                                    <span>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_5511_10679)">
                                                                <circle
                                                                    cx="16.8"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 16.8 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="19.1999"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 19.1999 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="15.6"
                                                                    r="1.2"
                                                                    transform="rotate(90 12 15.6)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="9.60005"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 9.60005 13.2)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="7.1999"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 7.1999 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="4.8"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 4.8 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="14.4001"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 14.4001 13.2)"
                                                                    fill="white"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_5511_10679">
                                                                    <rect
                                                                        width={24}
                                                                        height={24}
                                                                        fill="white"
                                                                        transform="translate(24 1.04907e-06) rotate(90)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </a>
                                                <div className="mega-menu-content full-width">
                                                    <div className="container">
                                                        {/* <h1>About Us</h1> */}
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="tab-contents aboutnav">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="tabcont1">
                                                                                <h1>Resources</h1>
                                                                                <ul>
                                                                                    <li className="ser-btn">
                                                                                        <a
                                                                                            href="blog.php"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Blog
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <a
                                                                                            href="case-study-details.php"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Case Studies
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <a
                                                                                            href="webinars.php"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Webinars
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <a
                                                                                            href="collaterals.php"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Collaterals
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <a
                                                                                            href="corporate-videos.php"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Videos
                                                                                        </a>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <a
                                                                                            href="news-events.php"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            News and Events
                                                                                        </a>
                                                                                    </li>
                                                                                    {/*<li class="ser-btn">*/}
                                                                                    {/*    <a href="faq.php" class="animated-svg-link">*/}
                                                                                    {/*        FAQs*/}
                                                                                    {/*    </a>*/}
                                                                                    {/*</li>*/}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="our-services projects pd0">
                                                                                <div className="row">
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                10 Must-Have Features in a Modern ERP
                                                                                                System
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <a
                                                                                                    href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                    className="animated-svg-link1
                                              btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                10 Must-Have Features in a Modern ERP
                                                                                                System
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <a
                                                                                                    href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body secondser">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                The Top 8 ERP Systems for Financial
                                                                                                Management
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <a
                                                                                                    href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        {/* Service Item End */}
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
                                            </li>
                                            <li className="nav-item  <?php echo ($current_page == 'contact.php') ? 'active' : ''; ?> ">
                                                <a className="nav-link" href="contact.php">
                                                    Contact Us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Header Social Box Start */}
                                    <div className="header-social-box d-inline-flex">
                                        {/* Header Social Links Start */}
                                        <div className="header-social-links">
                                            <ul>
                                                <li className="search-icon">
                                                    <div className="search-box" id="searchBox">
                                                        <button className="btn-search" id="searchBtn">
                                                            <svg
                                                                className="icon-search"
                                                                width={32}
                                                                height={32}
                                                                viewBox="0 0 32 32"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M14.667 26.676C21.2944 26.676 26.667 21.3034 26.667 14.676C26.667 8.04855 21.2944 2.67596 14.667 2.67596C8.03958 2.67596 2.66699 8.04855 2.66699 14.676C2.66699 21.3034 8.03958 26.676 14.667 26.676Z"
                                                                    stroke="white"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M25.2402 27.5957C25.9469 29.729 27.5602 29.9424 28.8002 28.0757C29.9336 26.369 29.1869 24.969 27.1336 24.969C25.6136 24.9557 24.7602 26.1424 25.2402 27.5957Z"
                                                                    stroke="white"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <span className="icon-close" id="searchClose">
                                                            ✕
                                                        </span>
                                                        <div className="search-full" id="searchFull">
                                                            <div className="search-bar">
                                                                <span className="search-icon-left ">
                                                                    <svg
                                                                        className="icon-search1"
                                                                        width={25}
                                                                        height={25}
                                                                        viewBox="0 0 32 32"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M14.667 26.676C21.2944 26.676 26.667 21.3034 26.667 14.676C26.667 8.04855 21.2944 2.67596 14.667 2.67596C8.03958 2.67596 2.66699 8.04855 2.66699 14.676C2.66699 21.3034 8.03958 26.676 14.667 26.676Z"
                                                                            stroke="#B9B9B9"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                        <path
                                                                            d="M25.2402 27.5957C25.9469 29.729 27.5602 29.9424 28.8002 28.0757C29.9336 26.369 29.1869 24.969 27.1336 24.969C25.6136 24.9557 24.7602 26.1424 25.2402 27.5957Z"
                                                                            stroke="#B9B9B9"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    placeholder="What are you looking for ?"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Header Social Links End */}
                                    </div>
                                    {/* Header Social Box End */}
                                </div>
                                {/* Main Menu End */}
                                <div className="navbar-toggle">
                                    <div className="header-social-links">
                                        <ul>
                                            <li>
                                                <div className="search-wrapper">
                                                    <button
                                                        id="searchBtn"
                                                        className="btn-search"
                                                        aria-label="Open search"
                                                    >
                                                        {/* 🔍 Search Icon */}
                                                        <svg
                                                            className="icon-search"
                                                            width={32}
                                                            height={32}
                                                            viewBox="0 0 32 32"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M14.667 26.676C21.2944 26.676 26.667 21.3034 26.667 14.676C26.667 8.04855 21.2944 2.67596 14.667 2.67596C8.03958 2.67596 2.66699 8.04855 2.66699 14.676C2.66699 21.3034 8.03958 26.676 14.667 26.676Z"
                                                                stroke="white"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M25.2402 27.5957C25.9469 29.729 27.5602 29.9424 28.8002 28.0757C29.9336 26.369 29.1869 24.969 27.1336 24.969C25.6136 24.9557 24.7602 26.1424 25.2402 27.5957Z"
                                                                stroke="white"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        {/* ✕ Close Icon */}
                                                        <span className="icon-close">✕</span>
                                                    </button>
                                                    <div
                                                        className="search-full"
                                                        id="searchFull"
                                                        role="dialog"
                                                        aria-hidden="true"
                                                    >
                                                        <div className="container">
                                                            <div className="search-bar">
                                                                <span className="search-icon-left">
                                                                    <svg
                                                                        className="icon-search"
                                                                        width={25}
                                                                        height={25}
                                                                        viewBox="0 0 32 32"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M14.667 26.676C21.2944 26.676 26.667 21.3034 26.667 14.676C26.667 8.04855 21.2944 2.67596 14.667 2.67596C8.03958 2.67596 2.66699 8.04855 2.66699 14.676C2.66699 21.3034 8.03958 26.676 14.667 26.676Z"
                                                                            stroke="#082326"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                        <path
                                                                            d="M25.2402 27.5957C25.9469 29.729 27.5602 29.9424 28.8002 28.0757C29.9336 26.369 29.1869 24.969 27.1336 24.969C25.6136 24.9557 24.7602 26.1424 25.2402 27.5957Z"
                                                                            stroke="#082326"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    placeholder="What are you looking for ?"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <a
                                        href="#"
                                        aria-haspopup="true"
                                        role="button"
                                        tabIndex={0}
                                        className="slicknav_btn slicknav_collapsed"
                                    >
                                        <span className="slicknav_menutxt" />
                                        {/* Replace slicknav_icon with custom SVG */}
                                        <span className="custom-menu-icon">
                                            <svg
                                                width={26}
                                                height={18}
                                                viewBox="0 0 26 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M25 9H1M25 17H1M25 1H9"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </nav>
                        <div className="responsive-menu" />
                    </div>
                </header>
            </div>
            <div className="mobile-nav">
                {/* The visible header bar on mobile */}
                <header className="mobile-header">
                    <div className="container">
                        <a className="mobile-logo" href="index.php">
                            <img src="/images/rlogo.png" alt="Logo" />
                        </a>
                        <div>
                            <div className="search-box" id="mobileSearchBox">
                                <button className="btn-search" id="mobileSearchBtn">
                                    <svg
                                        className="icon-search"
                                        width={28}
                                        height={32}
                                        viewBox="0 0 32 32"
                                        fill="none"
                                    >
                                        <path
                                            d="M14.667 26.676C21.2944 26.676 26.667 21.3034 26.667 14.676C26.667 8.04855 21.2944 2.67596 14.667 2.67596C8.03958 2.67596 2.66699 8.04855 2.66699 14.676C2.66699 21.3034 8.03958 26.676 14.667 26.676Z"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M25.2402 27.5957C25.9469 29.729 27.5602 29.9424 28.8002 28.0757C29.9336 26.369 29.1869 24.969 27.1336 24.969C25.6136 24.9557 24.7602 26.1424 25.2402 27.5957Z"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <span className="icon-close" id="mobileSearchClose">
                                    ✕
                                </span>
                                <div
                                    className="search-full mobile-search-overlay"
                                    id="mobileSearchFull"
                                >
                                    <div className="search-bar">
                                        <span className="search-icon-left ">
                                            <svg
                                                className="icon-search1"
                                                width={25}
                                                height={25}
                                                viewBox="0 0 32 32"
                                                fill="none"
                                            >
                                                <path
                                                    d="M14.667 26.676C21.2944 26.676 26.667 21.3034 26.667 14.676C26.667 8.04855 21.2944 2.67596 14.667 2.67596C8.03958 2.67596 2.66699 8.04855 2.66699 14.676C2.66699 21.3034 8.03958 26.676 14.667 26.676Z"
                                                    stroke="#B9B9B9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M25.2402 27.5957C25.9469 29.729 27.5602 29.9424 28.8002 28.0757C29.9336 26.369 29.1869 24.969 27.1336 24.969C25.6136 24.9557 24.7602 26.1424 25.2402 27.5957Z"
                                                    stroke="#B9B9B9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <input type="text" placeholder="What are you looking for ?" />
                                    </div>
                                </div>
                            </div>
                            <button
                                id="hamburger-btn"
                                className="hamburger-btn"
                                aria-label="Open Menu"
                            >
                                <svg
                                    width={26}
                                    height={18}
                                    viewBox="0 0 26 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M25 9H1M25 17H1M25 1H9"
                                        stroke="white"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>
                {/* The slide-in (off-canvas) navigation panel */}
                <nav id="mobileNavPanel" className="mobile-nav-panel">
                    <div className="tag-logo">
                        <a className="" href="index.php">
                            <img src="/images/rlogo.png" alt="Logo" />
                        </a>
                    </div>
                    <button id="close-btn" className="close-btn" aria-label="Close Menu">
                        ×
                    </button>
                    <ul>
                        {/* About Us */}
                        <li>
                            <div className="menu-item">
                                <a href="#">About Us</a>
                                <span className="submenu-toggle">
                                    <svg
                                        className="submenu-arrow"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_5511_10679)">
                                            <circle
                                                cx="16.8"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 16.8 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="19.1999"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 19.1999 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx={12}
                                                cy="15.6"
                                                r="1.2"
                                                transform="rotate(90 12 15.6)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="9.60005"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 9.60005 13.2)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="7.1999"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 7.1999 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="4.8"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 4.8 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="14.4001"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 14.4001 13.2)"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5511_10679">
                                                <rect
                                                    width={24}
                                                    height={24}
                                                    fill="white"
                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <ul className="submenu">
                                <li>
                                    <a href="overview.php">Overview</a>
                                </li>
                                <li>
                                    <a href="leadership.php">Leadership</a>
                                </li>
                                <li>
                                    <a href="customer-speak.php">Customers Speak</a>
                                </li>
                                <li>
                                    <a href="success-stories.php">Success Stories</a>
                                </li>
                                <li>
                                    <a href="careers.php">Careers</a>
                                </li>
                                {/* Card Slider for About Us */}
                                {/*<li class="submenu-card-item">*/}
                                {/*    <div class="swiper submenu-swiper">*/}
                                {/*        <div class="swiper-wrapper">*/}
                                {/*            <div class="swiper-slide">*/}
                                {/*                <div class="service-item-body">*/}
                                {/*                    <div class="nave-bar-card-waber">*/}
                                {/*                        <div class="nave-bar-card-content-waber">*/}
                                {/*                            <div>*/}
                                {/*                                <span>Case Study</span>*/}
                                {/*                            </div>*/}
                                {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                {/*                            <div class="ser-btn1">*/}
                                {/*                                <a href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                {/*                                    Read*/}
                                {/*                                    More*/}
                                {/*                                    <?php include "navarrowleft.php" ?>*/}
                                {/*                                </a>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div class="swiper-slide">*/}
                                {/*                <div class="service-item-body">*/}
                                {/*                    <div class="nave-bar-card-waber">*/}
                                {/*                        <div class="nave-bar-card-content-waber">*/}
                                {/*                            <div>*/}
                                {/*                                <span>Case Study</span>*/}
                                {/*                            </div>*/}
                                {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                {/*                            <div class="ser-btn1">*/}
                                {/*                                <a href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                {/*                                    Read*/}
                                {/*                                    More*/}
                                {/*                                    <?php include "navarrowleft.php" ?>*/}
                                {/*                                </a>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div class="swiper-pagination"></div>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                            </ul>
                        </li>
                        {/* Solutions & Services */}
                        <li>
                            <div className="menu-item">
                                <a href="#">Solutions &amp; Services</a>
                                <span className="submenu-toggle">
                                    <svg
                                        className="submenu-arrow"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_5511_10679)">
                                            <circle
                                                cx="16.8"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 16.8 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="19.1999"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 19.1999 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx={12}
                                                cy="15.6"
                                                r="1.2"
                                                transform="rotate(90 12 15.6)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="9.60005"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 9.60005 13.2)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="7.1999"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 7.1999 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="4.8"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 4.8 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="14.4001"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 14.4001 13.2)"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5511_10679">
                                                <rect
                                                    width={24}
                                                    height={24}
                                                    fill="white"
                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <ul className="submenu">
                                {/* Our Solutions (Tab 1) */}
                                <li>
                                    <div className="menu-item">
                                        <a href="#">Our Solutions</a>
                                        <span className="submenu-toggle">
                                            <svg
                                                className="submenu-arrow"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_5511_10679)">
                                                    <circle
                                                        cx="16.8"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 16.8 10.8)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="19.1999"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 19.1999 8.40001)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx={12}
                                                        cy="15.6"
                                                        r="1.2"
                                                        transform="rotate(90 12 15.6)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="9.60005"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 9.60005 13.2)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="7.1999"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 7.1999 10.8)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="4.8"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 4.8 8.40001)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="14.4001"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 14.4001 13.2)"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5511_10679">
                                                        <rect
                                                            width={24}
                                                            height={24}
                                                            fill="white"
                                                            transform="translate(24 1.04907e-06) rotate(90)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                    <ul className="submenu">
                                        <li>
                                            <a href="corushr.php">Corus HR</a>
                                        </li>
                                        <li>
                                            <a href="MeRLIN.php">MeRLIN Sourcing</a>
                                        </li>
                                        {/*<li class="submenu-card-item">*/}
                                        {/*    <div class="swiper submenu-swiper">*/}
                                        {/*        <div class="swiper-wrapper">*/}
                                        {/*            <div class="swiper-slide">*/}
                                        {/*                <div class="service-item-body">*/}
                                        {/*                    <div class="nave-bar-card-waber">*/}
                                        {/*                        <div class="nave-bar-card-content-waber">*/}
                                        {/*                            <div>*/}
                                        {/*                                <span>Case Study</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                        {/*                            <div class="ser-btn1">*/}
                                        {/*                                <a href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                        {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                        {/*                                    Read*/}
                                        {/*                                    More*/}
                                        {/*                                    <?php include "navarrowleft.php" ?>*/}
                                        {/*                                </a>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*            <div class="swiper-slide">*/}
                                        {/*                <div class="service-item-body">*/}
                                        {/*                    <div class="nave-bar-card-waber">*/}
                                        {/*                        <div class="nave-bar-card-content-waber">*/}
                                        {/*                            <div>*/}
                                        {/*                                <span>Case Study</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                        {/*                            <div class="ser-btn1">*/}
                                        {/*                                <a href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                        {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                        {/*                                    Read*/}
                                        {/*                                    More*/}
                                        {/*                                    <?php include "navarrowleft.php" ?>*/}
                                        {/*                                </a>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div class="swiper-pagination"></div>*/}
                                        {/*    </div>*/}
                                        {/*</li>*/}
                                    </ul>
                                </li>
                                {/* Enterprise Solutions & Services (Tab 2) */}
                                <li>
                                    <div className="menu-item">
                                        <a href="enterprise-solutions.php">Enterprise Solutions</a>
                                        <span className="submenu-toggle">
                                            <svg
                                                className="submenu-arrow"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_5511_10679)">
                                                    <circle
                                                        cx="16.8"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 16.8 10.8)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="19.1999"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 19.1999 8.40001)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx={12}
                                                        cy="15.6"
                                                        r="1.2"
                                                        transform="rotate(90 12 15.6)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="9.60005"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 9.60005 13.2)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="7.1999"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 7.1999 10.8)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="4.8"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 4.8 8.40001)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="14.4001"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 14.4001 13.2)"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5511_10679">
                                                        <rect
                                                            width={24}
                                                            height={24}
                                                            fill="white"
                                                            transform="translate(24 1.04907e-06) rotate(90)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                    <ul className="submenu">
                                        <li>
                                            <div className="menu-item">
                                                <a href="epicor.php"> Epicor</a>
                                                <span className="submenu-toggle">
                                                    <svg
                                                        className="submenu-arrow"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_5511_10679)">
                                                            <circle
                                                                cx="16.8"
                                                                cy="10.8"
                                                                r="1.2"
                                                                transform="rotate(90 16.8 10.8)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="19.1999"
                                                                cy="8.40001"
                                                                r="1.2"
                                                                transform="rotate(90 19.1999 8.40001)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx={12}
                                                                cy="15.6"
                                                                r="1.2"
                                                                transform="rotate(90 12 15.6)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="9.60005"
                                                                cy="13.2"
                                                                r="1.2"
                                                                transform="rotate(90 9.60005 13.2)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="7.1999"
                                                                cy="10.8"
                                                                r="1.2"
                                                                transform="rotate(90 7.1999 10.8)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="4.8"
                                                                cy="8.40001"
                                                                r="1.2"
                                                                transform="rotate(90 4.8 8.40001)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="14.4001"
                                                                cy="13.2"
                                                                r="1.2"
                                                                transform="rotate(90 14.4001 13.2)"
                                                                fill="white"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_5511_10679">
                                                                <rect
                                                                    width={24}
                                                                    height={24}
                                                                    fill="white"
                                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <ul className="submenu sup-li-pading">
                                                <li>
                                                    <a href="epicor-kinetic.php">Epicor Kinetic</a>
                                                </li>
                                                <li>
                                                    <a href="epicor-iscala.php">Epicor iScala</a>
                                                </li>
                                                <li>
                                                    <a href="epicor-companion.php">Epicor Companion Products</a>
                                                </li>
                                                <li>
                                                    <a href="epicor-epicpay.php">EpicPay</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="microsoft-dynamics-solutions.php">MS Dynamics</a>
                                        </li>
                                        <li>
                                            <a href="SAP.php">SAP</a>
                                        </li>
                                        <li>
                                            <a href="sugar-CRM.php">Sugar CRM</a>
                                        </li>
                                        <li>
                                            <a href="ERP-customer-excellence.php">
                                                ERP Customer Excellence
                                            </a>
                                        </li>
                                        {/*<li class="submenu-card-item">*/}
                                        {/*    <div class="swiper submenu-swiper">*/}
                                        {/*        <div class="swiper-wrapper">*/}
                                        {/*            <div class="swiper-slide">*/}
                                        {/*                <div class="service-item-body">*/}
                                        {/*                    <div class="nave-bar-card-waber">*/}
                                        {/*                        <div class="nave-bar-card-content-waber">*/}
                                        {/*                            <div>*/}
                                        {/*                                <span>Case Study</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                        {/*                            <div class="ser-btn1">*/}
                                        {/*                                <a href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                        {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                        {/*                                    Read*/}
                                        {/*                                    More*/}
                                        {/*                                    <?php include "navarrowleft.php" ?>*/}
                                        {/*                                </a>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*            <div class="swiper-slide">*/}
                                        {/*                <div class="service-item-body">*/}
                                        {/*                    <div class="nave-bar-card-waber">*/}
                                        {/*                        <div class="nave-bar-card-content-waber">*/}
                                        {/*                            <div>*/}
                                        {/*                                <span>Case Study</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                        {/*                            <div class="ser-btn1">*/}
                                        {/*                                <a href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                        {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                        {/*                                    Read*/}
                                        {/*                                    More*/}
                                        {/*                                    <?php include "navarrowleft.php" ?>*/}
                                        {/*                                </a>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div class="swiper-pagination"></div>*/}
                                        {/*    </div>*/}
                                        {/*</li>*/}
                                    </ul>
                                </li>
                                {/* Digital Solutions & Services (Tab 3) */}
                                {/* Tab 3: Digital Solutions & Services */}
                                <li>
                                    <div className="menu-item">
                                        <a href="digital-solutions.php">
                                            Digital Solutions &amp; Services
                                        </a>
                                        <span className="submenu-toggle">
                                            <svg
                                                className="submenu-arrow"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_5511_10679)">
                                                    <circle
                                                        cx="16.8"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 16.8 10.8)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="19.1999"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 19.1999 8.40001)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx={12}
                                                        cy="15.6"
                                                        r="1.2"
                                                        transform="rotate(90 12 15.6)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="9.60005"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 9.60005 13.2)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="7.1999"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 7.1999 10.8)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="4.8"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 4.8 8.40001)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="14.4001"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 14.4001 13.2)"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5511_10679">
                                                        <rect
                                                            width={24}
                                                            height={24}
                                                            fill="white"
                                                            transform="translate(24 1.04907e-06) rotate(90)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                    <ul className="submenu">
                                        <li>
                                            <div className="menu-item">
                                                <a href="epicor.php"> Solutions</a>
                                                <span className="submenu-toggle">
                                                    <svg
                                                        className="submenu-arrow"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_5511_10679)">
                                                            <circle
                                                                cx="16.8"
                                                                cy="10.8"
                                                                r="1.2"
                                                                transform="rotate(90 16.8 10.8)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="19.1999"
                                                                cy="8.40001"
                                                                r="1.2"
                                                                transform="rotate(90 19.1999 8.40001)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx={12}
                                                                cy="15.6"
                                                                r="1.2"
                                                                transform="rotate(90 12 15.6)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="9.60005"
                                                                cy="13.2"
                                                                r="1.2"
                                                                transform="rotate(90 9.60005 13.2)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="7.1999"
                                                                cy="10.8"
                                                                r="1.2"
                                                                transform="rotate(90 7.1999 10.8)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="4.8"
                                                                cy="8.40001"
                                                                r="1.2"
                                                                transform="rotate(90 4.8 8.40001)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="14.4001"
                                                                cy="13.2"
                                                                r="1.2"
                                                                transform="rotate(90 14.4001 13.2)"
                                                                fill="white"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_5511_10679">
                                                                <rect
                                                                    width={24}
                                                                    height={24}
                                                                    fill="white"
                                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <ul className="submenu sup-li-pading">
                                                <li>
                                                    <a href="business-intelligence.php">BI &amp; Analytics</a>
                                                </li>
                                                <li>
                                                    <a href="AI-ML.php">AI/ML</a>
                                                </li>
                                                <li>
                                                    <a href="ecommerce.php">eCommerce</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <a href="epicor.php"> Services</a>
                                                <span className="submenu-toggle">
                                                    <svg
                                                        className="submenu-arrow"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_5511_10679)">
                                                            <circle
                                                                cx="16.8"
                                                                cy="10.8"
                                                                r="1.2"
                                                                transform="rotate(90 16.8 10.8)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="19.1999"
                                                                cy="8.40001"
                                                                r="1.2"
                                                                transform="rotate(90 19.1999 8.40001)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx={12}
                                                                cy="15.6"
                                                                r="1.2"
                                                                transform="rotate(90 12 15.6)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="9.60005"
                                                                cy="13.2"
                                                                r="1.2"
                                                                transform="rotate(90 9.60005 13.2)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="7.1999"
                                                                cy="10.8"
                                                                r="1.2"
                                                                transform="rotate(90 7.1999 10.8)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="4.8"
                                                                cy="8.40001"
                                                                r="1.2"
                                                                transform="rotate(90 4.8 8.40001)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="14.4001"
                                                                cy="13.2"
                                                                r="1.2"
                                                                transform="rotate(90 14.4001 13.2)"
                                                                fill="white"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_5511_10679">
                                                                <rect
                                                                    width={24}
                                                                    height={24}
                                                                    fill="white"
                                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <ul className="submenu sup-li-pading">
                                                <li>
                                                    <a href="Architecture.php">
                                                        Architecture &amp; App Modernisation
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="data-engineering-warehousing.php">
                                                        Data Engineering and Warehousing
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="enterprise-solutions.php">Enterprise Software</a>
                                                </li>
                                                <li>
                                                    <a href="AM-S.php">A M &amp; S</a>
                                                </li>
                                                <li>
                                                    <a href="user-exprience.php">User Experience</a>
                                                </li>
                                                <li>
                                                    <a href="commercetools.php">Commercetools</a>
                                                </li>
                                                <li>
                                                    <a href="fluent-commerce.php">Fluent Commerce</a>
                                                </li>
                                                <li>
                                                    <a href="ms-technology.php">MS Technologies</a>
                                                </li>
                                            </ul>
                                        </li>
                                        {/*<li class="submenu-card-item">*/}
                                        {/*    <div class="swiper submenu-swiper">*/}
                                        {/*        <div class="swiper-wrapper">*/}
                                        {/*            <div class="swiper-slide">*/}
                                        {/*                <div class="service-item-body">*/}
                                        {/*                    <div class="nave-bar-card-waber">*/}
                                        {/*                        <div class="nave-bar-card-content-waber">*/}
                                        {/*                            <div>*/}
                                        {/*                                <span>Case Study</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                        {/*                            <div class="ser-btn1">*/}
                                        {/*                                <a href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                        {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                        {/*                                    Read*/}
                                        {/*                                    More*/}
                                        {/*                                    <?php include "navarrowleft.php" ?>*/}
                                        {/*                                </a>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*            <div class="swiper-slide">*/}
                                        {/*                <div class="service-item-body">*/}
                                        {/*                    <div class="nave-bar-card-waber">*/}
                                        {/*                        <div class="nave-bar-card-content-waber">*/}
                                        {/*                            <div>*/}
                                        {/*                                <span>Case Study</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                        {/*                            <div class="ser-btn1">*/}
                                        {/*                                <a href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                        {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                        {/*                                    Read*/}
                                        {/*                                    More*/}
                                        {/*                                    <?php include "navarrowleft.php" ?>*/}
                                        {/*                                </a>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div class="swiper-pagination"></div>*/}
                                        {/*    </div>*/}
                                        {/*</li>*/}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/* Industries */}
                        <li>
                            <div className="menu-item">
                                <a href="#">Industries</a>
                                <span className="submenu-toggle">
                                    <svg
                                        className="submenu-arrow"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_5511_10679)">
                                            <circle
                                                cx="16.8"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 16.8 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="19.1999"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 19.1999 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx={12}
                                                cy="15.6"
                                                r="1.2"
                                                transform="rotate(90 12 15.6)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="9.60005"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 9.60005 13.2)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="7.1999"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 7.1999 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="4.8"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 4.8 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="14.4001"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 14.4001 13.2)"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5511_10679">
                                                <rect
                                                    width={24}
                                                    height={24}
                                                    fill="white"
                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <ul className="submenu">
                                <li>
                                    <a href="vertical-retail.php">
                                        Brand Owners and Vertical Retailers
                                    </a>
                                </li>
                                <li>
                                    <a href="industries-retail.php">Retail Industry</a>
                                </li>
                                <li>
                                    <a href="supply-chain.php">Distribution and Supply Chain</a>
                                </li>
                                <li>
                                    <a href="discrete-manufacturing.php">Discrete Manufacturing</a>
                                </li>
                                <li>
                                    <a href="automotive.php">Automotive Industry</a>
                                </li>
                                <li>
                                    <a href="epc.php">Engineering Procurement and Construction</a>
                                </li>
                                <li>
                                    <a href="process-manufacturing.php">Process Manufacturing</a>
                                </li>
                                <li>
                                    <a href="private-quity.php">
                                        Private Equity &amp; Funding Backed Ventures
                                    </a>
                                </li>
                                <li>
                                    <a href="cable-manufacturing.php">Cable Manufacturing</a>
                                </li>
                                <li>
                                    <a href="interior-design.php">Interior Design</a>
                                </li>
                                {/* Card Slider for Industries */}
                                {/*<li class="submenu-card-item">*/}
                                {/*    <div class="swiper submenu-swiper">*/}
                                {/*        <div class="swiper-wrapper">*/}
                                {/*            <div class="swiper-slide">*/}
                                {/*                <div class="service-item-body">*/}
                                {/*                    <div class="nave-bar-card-waber">*/}
                                {/*                        <div class="nave-bar-card-content-waber">*/}
                                {/*                            <div>*/}
                                {/*                                <span>Case Study</span>*/}
                                {/*                            </div>*/}
                                {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                {/*                            <div class="ser-btn1">*/}
                                {/*                                <a href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                {/*                                    Read*/}
                                {/*                                    More*/}
                                {/*                                    <?php include "navarrowleft.php" ?>*/}
                                {/*                                </a>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div class="swiper-slide">*/}
                                {/*                <div class="service-item-body">*/}
                                {/*                    <div class="nave-bar-card-waber">*/}
                                {/*                        <div class="nave-bar-card-content-waber">*/}
                                {/*                            <div>*/}
                                {/*                                <span>Case Study</span>*/}
                                {/*                            </div>*/}
                                {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                {/*                            <div class="ser-btn1">*/}
                                {/*                                <a href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                {/*                                    Read*/}
                                {/*                                    More*/}
                                {/*                                    <?php include "navarrowleft.php" ?>*/}
                                {/*                                </a>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div class="swiper-pagination"></div>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                            </ul>
                        </li>
                        {/* Resources */}
                        <li>
                            <div className="menu-item">
                                <a href="#">Resources</a>
                                <span className="submenu-toggle">
                                    <svg
                                        className="submenu-arrow"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_5511_10679)">
                                            <circle
                                                cx="16.8"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 16.8 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="19.1999"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 19.1999 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx={12}
                                                cy="15.6"
                                                r="1.2"
                                                transform="rotate(90 12 15.6)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="9.60005"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 9.60005 13.2)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="7.1999"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 7.1999 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="4.8"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 4.8 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="14.4001"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 14.4001 13.2)"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5511_10679">
                                                <rect
                                                    width={24}
                                                    height={24}
                                                    fill="white"
                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <ul className="submenu">
                                <li>
                                    <a href="blog.php">Blog</a>
                                </li>
                                <li>
                                    <a href="case-study-details.php">Case Studies</a>
                                </li>
                                <li>
                                    <a href="webinars.php">Webinars</a>
                                </li>
                                <li>
                                    <a href="collaterals.php">Collaterals</a>
                                </li>
                                <li>
                                    <a href="corporate-videos.php">Videos</a>
                                </li>
                                <li>
                                    <a href="news-events.php">News and Events</a>
                                </li>
                                {/* Card Slider for Resources */}
                                {/*<li class="submenu-card-item">*/}
                                {/*    <div class="swiper submenu-swiper">*/}
                                {/*        <div class="swiper-wrapper">*/}
                                {/*            <div class="swiper-slide">*/}
                                {/*                <div class="service-item-body">*/}
                                {/*                    <div class="nave-bar-card-waber">*/}
                                {/*                        <div class="nave-bar-card-content-waber">*/}
                                {/*                            <div>*/}
                                {/*                                <span>Case Study</span>*/}
                                {/*                            </div>*/}
                                {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                {/*                            <div class="ser-btn1">*/}
                                {/*                                <a href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                {/*                                    Read*/}
                                {/*                                    More*/}
                                {/*                                    <?php include "navarrowleft.php" ?>*/}
                                {/*                                </a>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div class="swiper-slide">*/}
                                {/*                <div class="service-item-body">*/}
                                {/*                    <div class="nave-bar-card-waber">*/}
                                {/*                        <div class="nave-bar-card-content-waber">*/}
                                {/*                            <div>*/}
                                {/*                                <span>Case Study</span>*/}
                                {/*                            </div>*/}
                                {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                {/*                            <div class="ser-btn1">*/}
                                {/*                                <a href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                {/*                                    Read*/}
                                {/*                                    More*/}
                                {/*                                    <?php include "navarrowleft.php" ?>*/}
                                {/*                                </a>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div class="swiper-pagination"></div>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                            </ul>
                        </li>
                        {/* Contact Us */}
                        <li>
                            <div className="menu-item">
                                <a href="contact.php">Contact Us</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                {/* Dark overlay for when the menu is open */}
                <div id="menuOverlay" className="menu-overlay" />
            </div>

        </>
    );
}