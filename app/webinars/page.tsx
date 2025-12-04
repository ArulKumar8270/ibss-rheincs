import React from 'react'
import CommomLayout from '../Components/CommomLayout'
import Link from "next/link";
import TestimonialandAward from '../Components/TestimonialandAward';
import Awards from '../Components/Awards';
const page = () => {
  return (
    <CommomLayout>
      <>
        {/* Header Start */}
        {/*?php include "navbar.php" ?*/}
        {/* Header End */}
        {/* Hero Section Start*/}
        <div className="hero89 success-main1 webhero systemview pdb0">
          {/* <div class="parent2 retailparent2">
  <video src="/videos/equity.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
          <div className="baner-img1 ssbimg webinarimg">
            <img src="/images/webinar.jpg" alt="" />
          </div>
          <div className="container">
            <div className="row section-row1 align-items-center builtsec">
              <div className="col-sm-5">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Webinars
                  </h2>
                </div>
              </div>
              <div className="col-sm-7"></div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        {/* Hero Section Start*/}
        <div className="hero89 success-main1 webhero webinarhero mobileview pdb0">
          {/* <div class="parent2 retailparent2">
  <video src="/videos/equity.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
          <div className="container">
            <div className="row section-row1 align-items-center builtsec">
              <div className="col-sm-5">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Webinars
                  </h2>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="baner-img1 ssbimg webinarimg1">
                  <img src="/images/webinar.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        {/* Page Video Gallery Start */}
        <div className="page-video-gallery pt40">
          <div className="container">
            <div className="col-sm-12">
              <div className="bolg-filter-waber webinarbtn webvideo">
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
                            <h6 className="fome-filter-title">Webinars</h6>
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
                                  Product Based
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
                                  Solution based
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
                                  Popular
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
                                  Recent
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
                                  Sort by Release Date
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {/* Item 1: Our Solutions & Digital Services */}
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="product popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://youtu.be/09M-Mq4cNrs"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/1.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Future of ERP Series – How to Choose
                            the Right ERP for a Rapidly Changing Business Landscape
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 06/November/2024
                          </p>
                        </div>
                      </div>
                      {/* Item 2: Enterprise Solutions & Digital Services */}
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="product popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://youtu.be/D_-8yEYVXAI"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/2.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> #Future-Proofing with ERP – Top
                            Trends in Enterprise Software for 2024 and Beyond
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 02/July/2024
                          </p>
                        </div>
                      </div>
                      {/* Item 3: Digital Solutions */}
                      <div className="col-sm-4 mb-4 item" data-category="1 2">
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://youtu.be/NfyIuui1VwI"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/3.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Maximizing ROI with Field Service
                            Automation for ERP
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 23/August/2023
                          </p>
                        </div>
                      </div>
                      {/* Item 4: Our Solutions & Digital Solutions */}
                      <div className="col-sm-4 mb-4 item" data-category="3  4">
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://youtu.be/W64fGZcwNCs"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/4.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Webinar on Top ERP Extensions to
                            improve Your IT ROI | ECM | Demand Planning| Data Analysis
                            Solution
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 08/March/2023
                          </p>
                        </div>
                      </div>
                      {/* Item 5: Enterprise Solutions (Takes full width if only 5 items in col-sm-3) */}
                      <div className="col-sm-4 mb-4 item" data-category={2}>
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://youtu.be/EVC-oAYXURg"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/5.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Why Manufacturing Industry Needs a
                            Vertical Specific ERP Solution?
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 05/October/2022
                          </p>
                        </div>
                      </div>
                      {/* Item 3: Digital Solutions */}
                      <div className="col-sm-4 mb-4 item" data-category={3}>
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://youtu.be/LAA3YcA49H0"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/6.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Essential Strategies for ERP Project
                            Success
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 16/March/2022
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-4 mb-4 item" data-category={3}>
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://youtu.be/D5uhU1W-k-0"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/7.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> How ERP on the cloud can Improve
                            Efficiency of your Interior Design Business
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 10/November/2021
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="solution popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://youtu.be/miDuBj216ZQ"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/8.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> #Webinar Leveraging Effective Change
                            Management for ERP Project Success
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 27/January/2021
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="product popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://youtu.be/nFjdgAf6rBI"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/9.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> #Webinar Get your ERP Implemented
                            Right{" "}
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 25/November/2020
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-4 mb-4 item" data-category={3}>
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/10.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Post Pandemic: 5 Proven Reasons for
                            Adopting Cloud ERP
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 07/October/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="product popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/11.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Panel Discussion - Rebooting your
                            EPC Business for the New Normal
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 30/September/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="product popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/12.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Webinar Procurement Beyond 2020
                            Evolving Technology Trends and Priorities
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 16/September/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="product popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/13.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> [Panel Discussion] Growing Your
                            Business Through Digital Transformation
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 09/September/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="product popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/14.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Digitally Transform your Procurement
                            Function with MeRLIN
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 19/August/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="product popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/15.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Webinar on Digitally Transform your
                            Procurement Function with MeRLIN
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 19/August/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="product popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/16.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Improve the Strategic Quotient of
                            Sourcing through Analytics
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 15/July/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="solution popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/17.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> [Panel Discussion] Agile Procurement
                            Processes to Manage a Dynamic Business Environment
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 24/June/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="solution popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/18.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Enhance and Extend your Epicor ERP's
                            Value to Business with the right Ancillary Software
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 10/June/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="product popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/19.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Getting Your ERP Implemented Right -
                            A Key to Successful Digital Transformation
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 03/June/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="solution popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/20.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Enabling a Virtual Workplace with
                            Document Management System
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 14/May/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="product popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/21.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> How COVID-19 will change the design,
                            planning and operation of global supply chains
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 07/May/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="product popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/22.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Epicor ERP Performance Management –
                            Approach, Tools and Techniques
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 06/May/2020
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-sm-4 mb-4 item"
                        data-category="solution popular"
                      >
                        <div className="video-gallery-image wow fadeInUp">
                          <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                            className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                              <img src="/images/23.jpg" alt="" />
                            </figure>
                          </Link>
                          <h4>
                            <b>Webinar Title:</b> Calculate ROI for your ERP to save
                            Money during this Economic Crisis
                          </h4>
                          <p>
                            <b>Webinar Date:</b> 29/April/2020
                          </p>
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
                    <h6 className="fome-filter-title">Webinars</h6>
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
                          Product Based
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
                          Solution based
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
                          Popular
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
                          Recent
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
                          Sort by Release Date
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Video Gallery End */}
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
                      <Link href="#" className="animated-svg-link">
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

export default page