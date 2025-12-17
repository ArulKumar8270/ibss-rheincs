"use client";

import React from "react";
import CommomLayout from "../../Components/CommomLayout";
import Link from "next/link";
import TestimonialandAward from "../../Components/TestimonialandAward";
export default function AlMl() {
    return (
        <CommomLayout>
            <>
                {/*?php include "navbar.php" ?*/}
                <div className="hero brainsec enter retailsection1 erpexcel mobilecomm">
                    <div className="parent2 retailparent2 mobilevideo">
                        <video
                            src="/videos/cusspeak.mp4"
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            className="bg-image1"
                        />
                    </div>
                    <div className="container">
                        <div className="row section-row1 align-items-center builtsec">
                            <div className="col-sm-5 col-12">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Customer Speak
                                    </h2>
                                    <p>
                                        We are constantly striving to deliver more value than our client’s
                                        expectations and this is reflected in what our customers are
                                        saying about us.{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-7 col-12">
                                <div className="parent2 retailparent2 mobileview">
                                    <video
                                        src="/videos/cusspeak.mp4"
                                        autoPlay={true}
                                        muted={true}
                                        loop={true}
                                        playsInline={true}
                                        className="bg-image1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section Start*/}
                {/*<div class="hero89 success-main1 webhero systemview pdb0">*/}
                {/*    <div class="baner-img1 ssbimg webinarimg1">*/}
                {/*        <img src="/new/csbaner.jpg" alt="">*/}
                {/*    </div>*/}
                {/*    <div class="container">*/}
                {/*        <div class="row section-row1 align-items-center builtsec">*/}
                {/*            <div class="col-sm-5">*/}
                {/*                <div class="section-title">*/}
                {/*                    <h2 class="text-anime-style-2 " data-cursor="-opaque">Customer Speak*/}
                {/*                    </h2>*/}
                {/*                    <p class="text-white">*/}
                {/*                        We are constantly striving to deliver more value than our client’s expectations and this is*/}
                {/*                        reflected in what our customers are saying about us*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div class="col-sm-7">*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/* Hero Section End*/}
                {/* Our Testimonial Section Start */}
                <div className="our-testimonial pd30">
                    <div className="container">
                        {/* <div class="row section-row align-items-center">
          <div class="col-lg-6"> 
              <div class="section-title testidescription">
                  <h2 class="text-anime-style-2" data-cursor="-opaque">Customer Speak
                  </h2>
              </div>
          </div>
      </div> */}
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                {/* Testimonial Slider Start */}
                                <div className="testimonial-sliders11 ">
                                    <div className="swiper1">
                                        <div className="row">
                                            {/* Testimonial Slide Start */}
                                            <div className="col-sm-4">
                                                <div className="service-item flip-card ">
                                                    <div className="flip-card-inner">
                                                        {/* Front Side */}
                                                        <div className="flip-card-front">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header ">
                                                                <div className="icon-box">
                                                                    <img
                                                                        src="/images/testimonials/Federal-Mogul.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body">
                                                                {/* <h3>ERP Modernisation</h3> */}
                                                                <p>
                                                                    “Thank you for the continued good work on the ERP
                                                                    and Supply Chain project. Your Consulting,
                                                                    Technical, Functional and Project management
                                                                    expertise was evident and was very well appreciated
                                                                    by our staffs. I was also pleased with the flexible,
                                                                    easily approachable, transparent dealing with your
                                                                    team. Needless to mention I also appreciate how
                                                                    effectively you leverage the teaming with cross
                                                                    cultural teams with low cost geography for
                                                                    developmental resources while not compromising on
                                                                    the quality of deliverables to business. Keep up the
                                                                    good work.”
                                                                </p>
                                                                <div className="testimonial-body">
                                                                    <div className="author-image">
                                                                        <figure className="image-anime">
                                                                            <img src="/new/Milani.png" alt="" />
                                                                        </figure>
                                                                    </div>
                                                                    <div className="author-content">
                                                                        <h3>Massimiliano A. Milani </h3>
                                                                        <p>
                                                                            Product &amp; Pricing Director Europe &amp;
                                                                            Africa at Federal Mogul Corporation Antwerp,
                                                                            Belgium
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="service-item flip-card">
                                                    <div className="flip-card-inner">
                                                        <div className="flip-card-front">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header ">
                                                                <div className="icon-box">
                                                                    <img src="/images/testimonials/Epicor.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body">
                                                                {/* <h3>ERP Modernisation</h3> */}
                                                                <p>
                                                                    I had been using RheinBrücke team as my extended arm
                                                                    for sometime now and I have really come to
                                                                    appreciate their depth of technical and functional
                                                                    knowledge of the product and their commitment to our
                                                                    end customers needs. They react quickly to new
                                                                    challenges and are always there for me to rely on.
                                                                </p>
                                                                <div className="testimonial-body">
                                                                    <div className="author-image">
                                                                        <figure className="image-anime">
                                                                            <img src="/new/cs-2.gif" alt="" />
                                                                        </figure>
                                                                    </div>
                                                                    <div className="author-content">
                                                                        <h3>Craig Stephens</h3>
                                                                        <p>
                                                                            Vice President-International Consulting at
                                                                            Epicor Software
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Front Side */}
                                                    </div>
                                                </div>
                                                <div className="service-item flip-card">
                                                    <div className="flip-card-inner">
                                                        <div className="flip-card-front">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header ">
                                                                <div className="icon-box">
                                                                    <img src="/images/testimonials/NGC.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body">
                                                                {/* <h3>ERP Modernisation</h3> */}
                                                                <p>
                                                                    "NGC Energy’s Epicor Implementation go-live happened
                                                                    earlier this year and at the end of Jan, we had
                                                                    successfully closed our Jan 2015 books in Epicor.
                                                                    This is a big milestone for all of us.It has indeed
                                                                    been a long journey, starting from inception, system
                                                                    study, training, pilot &amp; finally the 1st
                                                                    month-end closing.During each stage, we received
                                                                    full co-operation from Rheinbrücke teams. They had
                                                                    given us their unwavering support, with full
                                                                    dedication &amp; positive attitude to make this
                                                                    project successful. During this entire journey, both
                                                                    teams faced many challenges &amp; at times, things
                                                                    were difficult, but both teams continued to give
                                                                    their focus &amp; commitment, which helped to
                                                                    overcome these obstacles."
                                                                </p>
                                                                <div className="testimonial-body">
                                                                    <div className="author-image">
                                                                        <figure className="image-anime">
                                                                            <img src="/new/cs-6.gif" alt="" />
                                                                        </figure>
                                                                    </div>
                                                                    <div className="author-content">
                                                                        <h3>Kiranjit Kaur</h3>
                                                                        <p>
                                                                            Finance Manager at NGC Companies Malaysia &amp;
                                                                            Oman
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Front Side */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Testimonial Slide End */}
                                            {/* Testimonial Slide Start */}
                                            <div className="col-sm-4">
                                                <div className="service-item flip-card">
                                                    <div className="flip-card-inner">
                                                        <div className="flip-card-front">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header ">
                                                                <div className="icon-box">
                                                                    <img
                                                                        src="/images/testimonials/Cold-Chain-Logo-full.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body">
                                                                {/* <h3>ERP Modernisation</h3> */}
                                                                <p>
                                                                    RheinBrucke IT Consulting's technical expertise
                                                                    makes me feel invincible.
                                                                    <br /> CCT has a talented pool of internal IT
                                                                    resources but sometimes that's not enough. Working
                                                                    with RB has taken a lot of weight off our shoulders;
                                                                    both the sheer volume of what we can handle together
                                                                    as well as the high level of technical expertise
                                                                    they bring to the table have greatly advanced CCT's
                                                                    abilities to adapt and evolve with our expanding
                                                                    global market. Nithish and Rajagopol are easy to
                                                                    work with and always have great ideas on how to
                                                                    solve our technical and business process issues plus
                                                                    they're just nice guys.
                                                                </p>
                                                                <p>
                                                                    I recently moved internationally, I was nervous
                                                                    about being so far out of sync but this had zero
                                                                    impact on our work relationship, it was seamless. I
                                                                    highly recommend RheinBrucke IT Consulting to anyone
                                                                    in need of serious in-depth expertise and
                                                                    around-the-clock support.
                                                                </p>
                                                                <p>
                                                                    My favorite thing is when I spend half my day trying
                                                                    to solve a complicated issue then I give up, assign
                                                                    it to RB at the end of my workday and come in the
                                                                    next morning to find a solution ready for testing!
                                                                </p>
                                                                <div className="testimonial-body">
                                                                    <div className="author-image">
                                                                        <figure className="image-anime">
                                                                            <img src="/new/cs-7.webp" alt="" />
                                                                        </figure>
                                                                    </div>
                                                                    <div className="author-content">
                                                                        <h3>Darius Jonason</h3>
                                                                        <p>
                                                                            Business Process Analyst/Solutions Architect at
                                                                            Cold Chain Technologies
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Front Side */}
                                                    </div>
                                                </div>
                                                <div className="service-item flip-card">
                                                    <div className="flip-card-inner">
                                                        <div className="flip-card-front">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header ">
                                                                <div className="icon-box">
                                                                    <img
                                                                        src="/images/testimonials/SAUDI AMERICAN GLASS.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body">
                                                                {/* <h3>ERP Modernisation</h3> */}
                                                                <p>
                                                                    "We implemented Epicor ERP for one of our large
                                                                    Glass manufacturing facility in Middle East. Like
                                                                    any ERP implementations, even though the product was
                                                                    good , we faced initial hiccup and challenges during
                                                                    the implementation . This is where we came across
                                                                    the German based Rheinbrücke IT consulting and took
                                                                    their support. They did a fantastic turnaround of
                                                                    the project. I enjoyed the transparent and efficient
                                                                    dealing with the company and came to appreciate
                                                                    their work. Now they have opened the Middle East
                                                                    operations and am positive they will do well due to
                                                                    their good service motto.."
                                                                </p>
                                                                <div className="testimonial-body">
                                                                    <div className="author-image">
                                                                        <figure className="image-anime">
                                                                            <img src="/new/cs-3.png" alt="" />
                                                                        </figure>
                                                                    </div>
                                                                    <div className="author-content">
                                                                        <h3>Rizwanulla Khan</h3>
                                                                        <p>
                                                                            Executive President at Emirates Glass, Saudi
                                                                            American Glass &amp; Lumi Glass
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Front Side */}
                                                    </div>
                                                </div>
                                                <div className="service-item flip-card">
                                                    <div className="flip-card-inner">
                                                        <div className="flip-card-front">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header ">
                                                                <div className="icon-box">
                                                                    <img src="/images/1-American.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body">
                                                                {/* <h3>ERP Modernisation</h3> */}
                                                                <p>
                                                                    "The launch of the IDC in Chennai marks a pivotal
                                                                    step forward in our collaboration with RheinBrücke.
                                                                    This new centre will enhance our operational
                                                                    efficiency and growth potential and I would like to
                                                                    extend my thanks to everyone involved for their hard
                                                                    work in making this a reality."
                                                                </p>
                                                                <div className="testimonial-body">
                                                                    <div className="author-image">
                                                                        <figure className="image-anime">
                                                                            <img src="/images/simon.png" alt="" />
                                                                        </figure>
                                                                    </div>
                                                                    <div className="author-content">
                                                                        <h3>Simon Owers</h3>
                                                                        <p>CFO of American Golf</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Front Side */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Testimonial Slide End */}
                                            {/* Testimonial Slide Start */}
                                            <div className="col-sm-4">
                                                <div className="service-item flip-card">
                                                    <div className="flip-card-inner">
                                                        <div className="flip-card-front">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header ">
                                                                <div className="icon-box">
                                                                    <img src="/images/testimonials/RAY.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body">
                                                                {/* <h3>ERP Modernisation</h3> */}
                                                                <p>
                                                                    “Our challenges made us to embark on our ERP journey
                                                                    and after lots of analysis, we choose Epicor ERP for
                                                                    RAY Group. We also faced initial hiccup and
                                                                    challenges during the implementations. This is where
                                                                    we came across the German based Rheinbrücke IT
                                                                    consulting and took their support. We leveraged
                                                                    their services for past 12 months and from this
                                                                    experience, I can definitely say that they did a
                                                                    fantastic turnaround of the project. I enjoyed the
                                                                    open, transparent and efficient dealing with them
                                                                    and came to appreciate their work. I understand that
                                                                    they recently started their Middle east and Africas
                                                                    operations, I wish them good luck and every success.
                                                                    "
                                                                </p>
                                                                <div className="testimonial-body">
                                                                    <div className="author-image">
                                                                        <figure className="image-anime">
                                                                            <img src="/new/cs-5.gif" alt="" />
                                                                        </figure>
                                                                    </div>
                                                                    <div className="author-content">
                                                                        <h3>Vinit Agarwal</h3>
                                                                        <p>CEO at RAY International, Sultanate of Oman</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Front Side */}
                                                    </div>
                                                </div>
                                                <div className="service-item flip-card">
                                                    <div className="flip-card-inner">
                                                        <div className="flip-card-front">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header ">
                                                                <div className="icon-box">
                                                                    <img src="/images/testimonials/SNG.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body">
                                                                {/* <h3>ERP Modernisation</h3> */}
                                                                <p>
                                                                    "We were very impressed with the way RheinBrücke
                                                                    carried out their work. From analysis to
                                                                    implementation and post-production support, their
                                                                    analysis was always detailed and complete. It was
                                                                    easily understood by users, so different system
                                                                    extension options could be evaluated with all
                                                                    relevant information."
                                                                </p>
                                                                <div className="testimonial-body">
                                                                    <div className="author-image">
                                                                        <figure className="image-anime">
                                                                            <img
                                                                                src="/images/testimonials/Syed Waseem Wajid.png"
                                                                                alt=""
                                                                            />
                                                                        </figure>
                                                                    </div>
                                                                    <div className="author-content">
                                                                        <h3>Syed Waseem Wajid</h3>
                                                                        <p>
                                                                            IT HEAD at Global Glass Manufacturer | KSA,
                                                                            Middle East
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Front Side */}
                                                    </div>
                                                </div>
                                                <div className="service-item flip-card">
                                                    <div className="flip-card-inner">
                                                        <div className="flip-card-front">
                                                            {/* Your current service content */}
                                                            <div className="service-item-header ">
                                                                <div className="icon-box">
                                                                    <img src="/images/testimonials/a-map.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="service-item-body">
                                                                {/* <h3>ERP Modernisation</h3> */}
                                                                <p>
                                                                    "Congratulations to your team for successfully
                                                                    pulling off the “Automation of RMA” project using
                                                                    the “A-MAP Smart” mobile based application! The
                                                                    legacy system was a laborious and time-consuming
                                                                    activity of data entry of the hundreds of Inspection
                                                                    entries, from the numerous Inspection sheets
                                                                    generated on a daily basis from the field, matching
                                                                    the claims against the supplied Sales orders and
                                                                    line details, entering all the warranty test
                                                                    information including customer purchasing &amp;
                                                                    return data, creating disposition against the
                                                                    relevant warehouses and summarizing all the data for
                                                                    transfer to the sales teams for actual settlement of
                                                                    claims vide relevant sales orders."
                                                                </p>
                                                                <div className="testimonial-body">
                                                                    <div className="author-image">
                                                                        <figure className="image-anime">
                                                                            <img src="/new/cs-8.png" alt="" />
                                                                        </figure>
                                                                    </div>
                                                                    <div className="author-content">
                                                                        <h3>Ramamurthy Rao</h3>
                                                                        <p>
                                                                            Head of R&amp;D and QC/AL-MUQARRAM AUTO PARTS
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Front Side */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Testimonial Slide End */}
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial Slider End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Testimonial Section End */}
                <div className="container">
                    <p className="lines" />
                </div>
                <TestimonialandAward />
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