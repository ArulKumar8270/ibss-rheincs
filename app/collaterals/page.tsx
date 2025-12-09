"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import TestimonialandAward from "../Components/TestimonialandAward";
import Awards from "../Components/Awards";
export default function Collaterals() {
    return (
        <CommomLayout>
            <>
                {/* Header Start */}
                {/*?php include "navbar.php" ?*/}
                {/* Header End */}
                {/* Hero Section Start*/}
                <div className="hero89 success-main1 systemview pdb0">
                    {/* <div class="parent2 retailparent2">
  <video src="/videos/equity.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
                    <div className="baner-img1 ssbimg">
                        <img src="/images/colletrals.jpg" alt="" />
                    </div>
                    <div className="container">
                        <div className="row section-row1 align-items-center builtsec">
                            <div className="col-sm-5">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Collaterals
                                    </h2>
                                </div>
                            </div>
                            <div className="col-sm-7"></div>
                        </div>
                    </div>
                </div>
                {/* Hero Section End*/}
                {/* Hero Section Start*/}
                <div className="hero89 success-main1 webhero mobileview pdb0">
                    {/* <div class="parent2 retailparent2">
  <video src="/videos/equity.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
                    <div className="container">
                        <div className="row section-row1 align-items-center builtsec">
                            <div className="col-sm-5">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Collaterals
                                    </h2>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="baner-img1 ssbimg webinarimg1">
                                    <img src="/images/colletrals.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section End*/}
                <section className="blog-main-waber newcollat">
                    <div className="container">
                        {/* <h2 class="blog-main-title"> Collaterals </h2> */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="bolg-filter-waber collatpage">
                                    {/* 1. Filter Buttons (Controls) */}
                                    <ul
                                        className="nav nav-tabs filter-controls"
                                        id="myTab"
                                        role="tablist"
                                    >
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#home"
                                                type="button"
                                                role="tab"
                                                aria-controls="home"
                                                aria-selected="true"
                                            >
                                                White Papers
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="profile-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#profile"
                                                type="button"
                                                role="tab"
                                                aria-controls="profile"
                                                aria-selected="false"
                                            >
                                                Brochures
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="budget-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#budget"
                                                type="button"
                                                role="tab"
                                                aria-controls="budget"
                                                aria-selected="false"
                                            >
                                                Factsheets
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="collattabsec">
                                    <div className="tab-content" id="myTabContent">
                                        {/* Supplier Relationship Pane */}
                                        <div
                                            className="tab-pane fade show active"
                                            id="home"
                                            role="tabpanel"
                                            aria-labelledby="home-tab"
                                        >
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <div className="mobileview">
                                                        <div className="mobile-blog-top ">
                                                            <div className="filtermbl search-row">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search blogs"
                                                                    className="search-input"
                                                                />
                                                                <button className="filter-btn1" id="openFilterBtn">
                                                                    <svg
                                                                        width={20}
                                                                        height={23}
                                                                        viewBox="0 0 20 23"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M2.87667 0.75H16.9383C18.1117 0.75 19.065 1.70333 19.065 2.87667V5.22333C19.065 6.085 18.5333 7.14833 18.0017 7.68L13.4183 11.7317C12.7767 12.2633 12.355 13.3267 12.355 14.1883V18.7717C12.355 19.4133 11.9333 20.2567 11.4017 20.5867L9.91667 21.5217C8.52333 22.3833 6.61667 21.4117 6.61667 19.7067V14.06C6.61667 13.3083 6.195 12.355 5.755 11.8233L1.70333 7.55167C1.17167 7.03833 0.75 6.06667 0.75 5.425V2.98667C0.75 1.70333 1.70333 0.75 2.87667 0.75Z"
                                                                            stroke="#499A9A"
                                                                            strokeWidth="1.5"
                                                                            strokeMiterlimit={10}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* Filter Content */}
                                                        <div className="mobile-filter" id="mobileFilter">
                                                            <Link href="#demo3"
                                                                data-bs-toggle="collapse"
                                                                className="arrow-toggle"
                                                                aria-expanded="true"
                                                            ></Link>
                                                            <div
                                                                id="demo3"
                                                                className="collapse content-box collapse show"
                                                            >
                                                                <div className="col-sm-12 width100">
                                                                    <h6 className="fome-filter-title">White Papers</h6>
                                                                    <div className="filter-check-box-waber">
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor ERP
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                HCM
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Iscala
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Manufacturing
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mey-fucher-tab-waber-content1">
                                                        <h4>
                                                            White Papers: Insightful Whitepapers from RheinBrücke{" "}
                                                        </h4>
                                                        <div className="bolg-filter-waber webinarbtn collatfilter brofilter">
                                                            <div className="row">
                                                                {/* Item 1: Our Solutions & Digital Services */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white1.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            Choosing the right ERP solution for your
                                                                            business
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 2: Enterprise Solutions & Digital Services */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white2.png" alt="" />
                                                                        </figure>
                                                                        <h4>Future with Manufacturing Technology</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 3: Digital Solutions */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="1 2"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white3.png" alt="" />
                                                                        </figure>
                                                                        <h4>Finding the Perfect Candidate</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 4: Our Solutions & Digital Solutions */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="3  4"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white4.png" alt="" />
                                                                        </figure>
                                                                        <h4>The Need for Speed and Accurate Data</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 5: Enterprise Solutions (Takes full width if only 5 items in col-sm-3) */}
                                                                <div className="col-sm-4 mb-4 item" data-category={2}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white5.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            Top 6 Technologies Small And Midsize
                                                                            Manufacturers Can't Afford to Ignore
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 3: Digital Solutions */}
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white6.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>ERP Guide 2023</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white7.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            ERP and Digital transfornation Outlook for 2023
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="solution popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white8.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            Four Quick Ways to Unlock Hidden Manufacturing
                                                                            Capacity
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white9.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            The Future of ERP : Predictions and Trends for
                                                                            2023
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white10.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            Choosing the Right ERP Solution to Support a
                                                                            Global Business
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white11.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            Best Practices for ERP Implementation Success
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white12.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            Time to Rethink Accounting Software and switch
                                                                            to an ERP?
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white13.png" alt="" />
                                                                        </figure>
                                                                        <h4>Transforming HR Made Easy</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white14.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>Buyer's guide to choosing the right ERP</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white15.png" alt="" />
                                                                        </figure>
                                                                        <h4>Choosing your ERP in 2024</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white16.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            ERP-in-2025-Your-Essential-Guide-to-the-Future
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 systemview">
                                                    <form action="" method="post">
                                                        <div className="blog-serch">
                                                            <input type="text" placeholder="Search blogs" />
                                                            <button type="submit">
                                                                <img src="/new/ser-blog.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <h6 className="fome-filter-title">White Papers</h6>
                                                    <div className="filter-check-box-waber">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor ERP
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                HCM
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Iscala
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Manufacturing
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* eProcurement Pane */}
                                        <div
                                            className="tab-pane fade"
                                            id="profile"
                                            role="tabpanel"
                                            aria-labelledby="profile-tab"
                                        >
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <div className="mobileview">
                                                        <div className="mobile-blog-top ">
                                                            <div className="filtermbl search-row">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search blogs"
                                                                    className="search-input"
                                                                />
                                                                <button className="filter-btn1" id="openFilterBtn">
                                                                    <svg
                                                                        width={20}
                                                                        height={23}
                                                                        viewBox="0 0 20 23"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M2.87667 0.75H16.9383C18.1117 0.75 19.065 1.70333 19.065 2.87667V5.22333C19.065 6.085 18.5333 7.14833 18.0017 7.68L13.4183 11.7317C12.7767 12.2633 12.355 13.3267 12.355 14.1883V18.7717C12.355 19.4133 11.9333 20.2567 11.4017 20.5867L9.91667 21.5217C8.52333 22.3833 6.61667 21.4117 6.61667 19.7067V14.06C6.61667 13.3083 6.195 12.355 5.755 11.8233L1.70333 7.55167C1.17167 7.03833 0.75 6.06667 0.75 5.425V2.98667C0.75 1.70333 1.70333 0.75 2.87667 0.75Z"
                                                                            stroke="#499A9A"
                                                                            strokeWidth="1.5"
                                                                            strokeMiterlimit={10}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* Filter Content */}
                                                        <div className="mobile-filter" id="mobileFilter">
                                                            <Link href="#demo4"
                                                                data-bs-toggle="collapse"
                                                                className="arrow-toggle"
                                                                aria-expanded="true"
                                                            ></Link>
                                                            <div
                                                                id="demo4"
                                                                className="collapse content-box collapse show"
                                                            >
                                                                <div className="col-sm-12 width100">
                                                                    <h6 className="fome-filter-title">Brochures</h6>
                                                                    <div className="filter-check-box-waber">
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Corporate Brochure
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                EPICOR
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor iScala for Hospitality
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor HCM
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor Payroll MEA
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor Copy Company Tool
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Power Plant Analytics
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor for Manufacturing
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor for EPC and Construction
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor for Automotive
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor for Distribution
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mey-fucher-tab-waber-content1">
                                                        <h4>
                                                            Brochures: Epicor Solutions for Various Industries
                                                        </h4>
                                                        <div className="bolg-filter-waber webinarbtn collatfilter brofilter">
                                                            <div className="row">
                                                                {/* Item 1: Our Solutions & Digital Services */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro1.png" alt="" />
                                                                        </figure>
                                                                        <h4>Corporate Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 2: Enterprise Solutions & Digital Services */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro2.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor ERP Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 3: Digital Solutions */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="1 2"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro3.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor for Oil and Gas Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 4: Our Solutions & Digital Solutions */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="3  4"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro4.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor Copy Company Tool Overview</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 5: Enterprise Solutions (Takes full width if only 5 items in col-sm-3) */}
                                                                <div className="col-sm-4 mb-4 item" data-category={2}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro5.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor Payroll MEA Overview</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 3: Digital Solutions */}
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro6.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor HCM Overview</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro7.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor for Manufacturing Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="solution popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro8.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor for EPC and Construction Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro9.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor for Distribution Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro10.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor for Automotive Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro11.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            RheinBrücke's Power Plant Analytics Brochure
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro12.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor iScala for Hospitality Overview</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro13.jpg" alt="" />
                                                                        </figure>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 systemview">
                                                    <form action="" method="post">
                                                        <div className="blog-serch">
                                                            <input type="text" placeholder="Search blogs" />
                                                            <button type="submit">
                                                                <img src="/new/ser-blog.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <h6 className="fome-filter-title">Brochures</h6>
                                                    <div className="filter-check-box-waber">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Corporate Brochure
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                EPICOR
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor iScala for Hospitality
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor HCM
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor Payroll MEA
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor Copy Company Tool
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Power Plant Analytics
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor for Manufacturing
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor for EPC and Construction
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor for Automotive
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor for Distribution
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Budgeting & Planning Pane */}
                                        <div
                                            className="tab-pane fade"
                                            id="budget"
                                            role="tabpanel"
                                            aria-labelledby="budget-tab"
                                        >
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <div className="mobileview">
                                                        <div className="mobile-blog-top ">
                                                            <div className="filtermbl search-row">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search blogs"
                                                                    className="search-input"
                                                                />
                                                                <button className="filter-btn1" id="openFilterBtn">
                                                                    <svg
                                                                        width={20}
                                                                        height={23}
                                                                        viewBox="0 0 20 23"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M2.87667 0.75H16.9383C18.1117 0.75 19.065 1.70333 19.065 2.87667V5.22333C19.065 6.085 18.5333 7.14833 18.0017 7.68L13.4183 11.7317C12.7767 12.2633 12.355 13.3267 12.355 14.1883V18.7717C12.355 19.4133 11.9333 20.2567 11.4017 20.5867L9.91667 21.5217C8.52333 22.3833 6.61667 21.4117 6.61667 19.7067V14.06C6.61667 13.3083 6.195 12.355 5.755 11.8233L1.70333 7.55167C1.17167 7.03833 0.75 6.06667 0.75 5.425V2.98667C0.75 1.70333 1.70333 0.75 2.87667 0.75Z"
                                                                            stroke="#499A9A"
                                                                            strokeWidth="1.5"
                                                                            strokeMiterlimit={10}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* Filter Content */}
                                                        <div className="mobile-filter" id="mobileFilter">
                                                            <Link href="#demo5"
                                                                data-bs-toggle="collapse"
                                                                className="arrow-toggle"
                                                                aria-expanded="true"
                                                            ></Link>
                                                            <div
                                                                id="demo5"
                                                                className="collapse content-box collapse show"
                                                            >
                                                                <div className="col-sm-12 width100">
                                                                    <h6 className="fome-filter-title">Factsheets</h6>
                                                                    <div className="filter-check-box-waber">
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor ERP
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                HCM
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Iscala
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Manufacturing
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mey-fucher-tab-waber-content1">
                                                        <h4>
                                                            Epicor Factsheets: ERP, HCM, iScala, Manufacturing
                                                        </h4>
                                                        <div className="bolg-filter-waber webinarbtn collatfilter brofilter">
                                                            <div className="row">
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/fact1.png" alt="" />
                                                                        </figure>
                                                                        <h4>Choosing the right ERP Vendor</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 2: Enterprise Solutions & Digital Services */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/fact2.png" alt="" />
                                                                        </figure>
                                                                        <h4>ROI Analysis Factsheet</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 3: Digital Solutions */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="1 2"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/fact3.png" alt="" />
                                                                        </figure>
                                                                        <h4>Oilfield services Factsheet</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 4: Our Solutions & Digital Solutions */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="3  4"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/fact4.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            3 Reasons why ERP software is a must for
                                                                            Financial Management
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 5: Enterprise Solutions (Takes full width if only 5 items in col-sm-3) */}
                                                                <div className="col-sm-4 mb-4 item" data-category={2}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/fact5.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            20 Questions to ask before you choose your cloud
                                                                            ERP
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 3: Digital Solutions */}
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/fact6.png" alt="" />
                                                                        </figure>
                                                                        <h4>Warning Signs of A Growing business</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                {/*?php include "navarrowright.php" ?*/}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 systemview">
                                                    <form action="" method="post">
                                                        <div className="blog-serch">
                                                            <input type="text" placeholder="Search blogs" />
                                                            <button type="submit">
                                                                <img src="/new/ser-blog.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <h6 className="fome-filter-title">Factsheets</h6>
                                                    <div className="filter-check-box-waber">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor ERP
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                HCM
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Iscala
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Manufacturing
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="page-nate-waber">
                                        <Link href="#" className="animated-svg-link left-arrow">
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
                                        <span className="active">1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                        <span>6</span>
                                        <span>7</span>
                                        <span className="dark">...</span>
                                        <span>20</span>
                                        <Link href="#" className="animated-svg-link">
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
                    </div>
                </section>
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
                            <div className="modal collatmodal" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        {/* Modal Header */}
                                        <div className="modal-header">
                                            <h4 className="modal-title">Let’s Connect With Us</h4>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                            />
                                        </div>
                                        {/* Modal body */}
                                        <div className="modal-body">
                                            <div className="contect-enq-waber">
                                                {/* <h2> Let’s Connect With Us</h2> */}
                                                <form action="#" method="post" className="row g-3 pp-0">
                                                    {/* Full Name */}
                                                    <div className="col-12">
                                                        <input
                                                            type="text"
                                                            className="form-control custom-form-control"
                                                            name="fullName"
                                                            placeholder="Enter Your Full Name*"
                                                            required={true}
                                                        />
                                                    </div>
                                                    {/* Phone Number with Country Code */}
                                                    <div className="col-md-12">
                                                        <div className="input-group custom-form-control">
                                                            <select
                                                                className="form-select"
                                                                name="countryCode"
                                                                required={true}
                                                            >
                                                                <option value={+91} selected="">
                                                                    +91
                                                                </option>
                                                                <option value={+1}>+1</option>
                                                                <option value={+44}>+44</option>
                                                                <option value={+971}>+971</option>
                                                            </select>
                                                            <input
                                                                type="tel"
                                                                className="form-control"
                                                                name="phone"
                                                                placeholder="Enter Your Phone No*"
                                                                required={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* Email Address */}
                                                    <div className="col-md-12">
                                                        <input
                                                            type="email"
                                                            className="form-control custom-form-control"
                                                            name="email"
                                                            placeholder="Enter Your Email Address*"
                                                            required={true}
                                                        />
                                                    </div>
                                                    {/* Company Name */}
                                                    <div className="col-md-12">
                                                        <input
                                                            type="text"
                                                            className="form-control custom-form-control"
                                                            name="companyName"
                                                            placeholder="Enter Your Company Name*"
                                                            required={true}
                                                        />
                                                    </div>
                                                    {/* Submit Button (Optional) */}
                                                    <div className="col-12">
                                                        <div className="ser-btn2">
                                                            <Link href="#" className="animated-svg-link1 btn-style-3">
                                                                Submit
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
                                                </form>
                                            </div>
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