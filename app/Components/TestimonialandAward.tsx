'use client'
import React from 'react'
import Link from 'next/link'
import useTranslation from '../hooks/useTranslation'

const TestimonialandAward = () => {
    const { t } = useTranslation()
    return (
        <>
            {/* Our Testimonial Section Start */}
            <div className="our-testimonial trsutedtesti pd30">
                <div className="container-fluid">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title text-center headingss">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">
                                    {t("Trusted by Enterprise Worldwide")}
                                </h2>
                                <div className="ser-btn2 mt-4">
                                    <Link href="/about-us/customer-speak" className="animated-svg-link1 btn-style-3">
                                        {t("View All")}
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
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            {/* Testimonial Slider Start */}
                            <div className="testimonial-slider1 ">
                                <div className="swiper">
                                    <div className="swiper-wrapper">
                                        {/* Testimonial Slide Start */}
                                        <div className="swiper-slide">
                                            <div className="service-item flip-card">
                                                <div className="flip-card-inner active">
                                                    {/* Front Side */}
                                                    <div className="flip-card-front">
                                                        {/* Your current service content */}
                                                        <div className="service-item-header ">
                                                            <div className="icon-box">
                                                                <img src="/images/doublequote.svg" alt="" />
                                                            </div>
                                                            <div className="icon-box1">
                                                                <img
                                                                    src="/images/ts/Cold-Chain-Logo-full.png"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="service-item-body">
                                                            {/* <h3>ERP Modernisation</h3> */}
                                                            <p className="desc">
                                                                “RheinBrücke IT Consulting's technical expertise
                                                                makes me feel invincible.  CCT has a talented pool
                                                                of internal IT resources but sometimes that's not
                                                                enough. Working with RB has taken a lot of weight
                                                                off our shoulders; both the sheer volume of what we
                                                                can handle together as well as the high level of
                                                                technical expertise they bring to the table have
                                                                greatly advanced CCT's abilities to adapt and evolve
                                                                with our expanding global market. Nithish and
                                                                Rajagopol are easy to work with and always have
                                                                great ideas on how to solve our technical and
                                                                business process issues plus they're just nice
                                                                guys.”
                                                            </p>
                                                            <div className="testimonial-body">
                                                                <div className="author-image">
                                                                    <figure className="image-anime">
                                                                        <img
                                                                            src="/images/testimonials/Cold-Chain-Logo.png"
                                                                            alt=""
                                                                        />
                                                                    </figure>
                                                                </div>
                                                                <div className="author-content">
                                                                    <h3>Darius Jonason </h3>
                                                                    <p>
                                                                        Business Process Analyst/Solutions Architect
                                                                        Cold Chain Technologies{" "}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Slide End */}
                                        {/* Testimonial Slide Start */}
                                        <div className="swiper-slide">
                                            <div className="service-item flip-card">
                                                <div className="flip-card-inner">
                                                    {/* Front Side */}
                                                    <div className="flip-card-front ">
                                                        {/* Your current service content */}
                                                        <div className="service-item-header">
                                                            <div className="icon-box">
                                                                <img src="/images/doublequote.svg" alt="" />
                                                            </div>
                                                            <div className="icon-box1">
                                                                <img src="/images/ts/a-map.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="service-item-body">
                                                            {/* <h3>Digital Supply Chain Enablement</h3> */}
                                                            <p className="desc">
                                                                “Congratulations to your team for successfully
                                                                pulling off the “Automation of RMA” project using
                                                                the “A-MAP Smart” mobile based application ! The
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
                                                                claims vide relevant sales orders.”{" "}
                                                            </p>
                                                            <div className="testimonial-body">
                                                                <div className="author-image">
                                                                    <figure className="image-anime">
                                                                        <img
                                                                            src="/images/testimonials/Ramamurthy Rao.png"
                                                                            alt=""
                                                                        />
                                                                    </figure>
                                                                </div>
                                                                <div className="author-content">
                                                                    <h3>Ramamurthy Rao</h3>
                                                                    <p>
                                                                        Head of R&amp;D and QC Al Muqarram Auto Parts{" "}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Slide End */}
                                        {/* Testimonial Slide Start */}
                                        <div className="swiper-slide">
                                            <div className="service-item flip-card">
                                                <div className="flip-card-inner">
                                                    {/* Front Side */}
                                                    <div className="flip-card-front">
                                                        {/* Your current service content */}
                                                        <div className="service-item-header  ">
                                                            <div className="icon-box">
                                                                <img src="/images/doublequote.svg" alt="" />
                                                            </div>
                                                            <div className="icon-box1">
                                                                <img src="/images/ts/Federal-Mogul.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="service-item-body">
                                                            {/* <h3>Data & Analytics Strategy</h3> */}
                                                            <p className="desc">
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
                                                                        <img
                                                                            src="/images/testimonials/Massimiliano A. Milani.png"
                                                                            alt=""
                                                                        />
                                                                    </figure>
                                                                </div>
                                                                <div className="author-content">
                                                                    <h3>Massimiliano A. Milani</h3>
                                                                    <p>
                                                                        Director Europe &amp; Africas at Federal Mogul
                                                                        Antwerp, Belgium
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Slide End */}
                                        {/* Testimonial Slide Start */}
                                        <div className="swiper-slide">
                                            <div className="service-item flip-card ">
                                                <div className="flip-card-inner">
                                                    {/* Front Side */}
                                                    <div className="flip-card-front">
                                                        {/* Your current service content */}
                                                        <div className="service-item-header ">
                                                            <div className="icon-box">
                                                                <img src="/images/doublequote.svg" alt="" />
                                                            </div>
                                                            <div className="icon-box1">
                                                                <img src="/images/ts/Epicor.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="service-item-body">
                                                            {/* <h3>Business Model Transformation</h3> */}
                                                            <p className="desc">
                                                                “I had been using RheinBrücke team as my extended
                                                                arm for sometime now and I have really come to
                                                                appreciate their depth of technical and functional
                                                                knowledge of the product and their commitment to our
                                                                end customers needs. They react quickly to new
                                                                challenges and are always there for me to rely on.”{" "}
                                                            </p>
                                                            <div className="testimonial-body">
                                                                <div className="author-image">
                                                                    <figure className="image-anime">
                                                                        <img
                                                                            src="/images/testimonials/Craig Stephens.png"
                                                                            alt=""
                                                                        />
                                                                    </figure>
                                                                </div>
                                                                <div className="author-content">
                                                                    <h3>Craig Stephens</h3>
                                                                    <p>
                                                                        Vice President-International Consulting at
                                                                        Epicor Software United Kingdom{" "}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Slide End */}
                                        {/* Testimonial Slide Start */}
                                        <div className="swiper-slide">
                                            <div className="service-item flip-card">
                                                <div className="flip-card-inner">
                                                    {/* Front Side */}
                                                    <div className="flip-card-front">
                                                        {/* Your current service content */}
                                                        <div className="service-item-header  ">
                                                            <div className="icon-box">
                                                                <img src="/images/doublequote.svg" alt="" />
                                                            </div>
                                                            <div className="icon-box1">
                                                                <img
                                                                    src="/images/ts/SAUDI AMERICAN GLASS.png"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="service-item-body">
                                                            {/* <h3>Data & Analytics Strategy</h3> */}
                                                            <p className="desc">
                                                                “We implemented Epicor ERP for one of our large
                                                                Glass manufacturing facility in Middle East. Like
                                                                any ERP implementations, even though the product was
                                                                good, we faced initial hiccup and challenges during
                                                                the implementation . This is where we came across
                                                                the German based RheinBrücke IT consulting and took
                                                                their support. They did a fantastic turnaround of
                                                                the project. I enjoyed the transparent and efficient
                                                                dealing with the company and came to appreciate
                                                                their work. Now they have opened the Middle East
                                                                operations and am positive they will do well due to
                                                                their good service motto.”
                                                            </p>
                                                            <div className="testimonial-body">
                                                                <div className="author-image">
                                                                    <figure className="image-anime">
                                                                        <img
                                                                            src="/images/testimonials/Rizwanulla Khan.png"
                                                                            alt=""
                                                                        />
                                                                    </figure>
                                                                </div>
                                                                <div className="author-content">
                                                                    <h3>Rizwanulla Khan </h3>
                                                                    <p>
                                                                        Executive President at Emirates Glass Saudi
                                                                        American &amp; Lumi Glass{" "}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Slide End */}
                                        {/* Testimonial Slide Start */}
                                        <div className="swiper-slide">
                                            <div className="service-item flip-card">
                                                <div className="flip-card-inner">
                                                    {/* Front Side */}
                                                    <div className="flip-card-front">
                                                        {/* Your current service content */}
                                                        <div className="service-item-header  ">
                                                            <div className="icon-box">
                                                                <img src="/images/doublequote.svg" alt="" />
                                                            </div>
                                                            <div className="icon-box1">
                                                                <img src="/images/ts/SAG.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="service-item-body">
                                                            {/* <h3>Data & Analytics Strategy</h3> */}
                                                            <p className="desc">
                                                                "We were very impressed with the way RheinBrücke
                                                                carried out their work. From analysis to
                                                                implementation and post-production support, their
                                                                analysis was always detailed and complete. It was
                                                                easily understood by users, so different system
                                                                extension options could be evaluated with all
                                                                relevant information."{" "}
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
                                                                    <h3>Syed Waseem Wajid </h3>
                                                                    <p>
                                                                        IT HEAD at Global Glass Manufacturer KSA, Middle
                                                                        East{" "}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Slide End */}
                                        {/* Testimonial Slide Start */}
                                        <div className="swiper-slide">
                                            <div className="service-item flip-card">
                                                <div className="flip-card-inner">
                                                    {/* Front Side */}
                                                    <div className="flip-card-front">
                                                        {/* Your current service content */}
                                                        <div className="service-item-header  ">
                                                            <div className="icon-box">
                                                                <img src="/images/doublequote.svg" alt="" />
                                                            </div>
                                                            <div className="icon-box1">
                                                                <img src="/images/ts/RAY.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="service-item-body">
                                                            {/* <h3>Data & Analytics Strategy</h3> */}
                                                            <p className="desc">
                                                                "Our challenges made us to embark on our ERP journey
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
                                                                operations, I wish them good luck and every
                                                                success."{" "}
                                                            </p>
                                                            <div className="testimonial-body">
                                                                <div className="author-image">
                                                                    <figure className="image-anime">
                                                                        <img
                                                                            src="/images/testimonials/Vinit Agarwal.png"
                                                                            alt=""
                                                                        />
                                                                    </figure>
                                                                </div>
                                                                <div className="author-content">
                                                                    <h3>Vinit Agarwal </h3>
                                                                    <p>CEO at RAY </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Slide End */}
                                        {/* Testimonial Slide Start */}
                                        <div className="swiper-slide">
                                            <div className="service-item flip-card">
                                                <div className="flip-card-inner">
                                                    {/* Front Side */}
                                                    <div className="flip-card-front">
                                                        {/* Your current service content */}
                                                        <div className="service-item-header  ">
                                                            <div className="icon-box">
                                                                <img src="/images/doublequote.svg" alt="" />
                                                            </div>
                                                            <div className="icon-box1">
                                                                <img src="/images/ts/NGC.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="service-item-body">
                                                            {/* <h3>Data & Analytics Strategy</h3> */}
                                                            <p className="desc">
                                                                “NGC Energy’s Epicor Implementation go-live happened
                                                                earlier this year and at the end of Jan, we had
                                                                successfully closed our Jan 2015 books in Epicor.
                                                                This is a big milestone for all of us. It has indeed
                                                                been a long journey, starting from inception, system
                                                                study, training, pilot &amp; finally the 1st
                                                                month-end closing. During each stage, we received
                                                                full co-operation from RheinBrücke teams. They had
                                                                given us their unwavering support, with full
                                                                dedication &amp; positive attitude to make this
                                                                project successful. During this entire journey, both
                                                                teams faced many challenges &amp; at times,…”{" "}
                                                            </p>
                                                            <div className="testimonial-body">
                                                                <div className="author-image">
                                                                    <figure className="image-anime">
                                                                        <img
                                                                            src="/images/testimonials/Kiranjit Kaur.png"
                                                                            alt=""
                                                                        />
                                                                    </figure>
                                                                </div>
                                                                <div className="author-content">
                                                                    <h3>Kiranjit Kaur </h3>
                                                                    <p>Finance Manager at NGC Companies Malaysia </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Slide End */}
                                        <div className="swiper-slide">
                                            <div className="service-item flip-card">
                                                <div className="flip-card-inner">
                                                    {/* Front Side */}
                                                    <div className="flip-card-front">
                                                        {/* Your current service content */}
                                                        <div className="service-item-header  ">
                                                            <div className="icon-box">
                                                                <img src="/images/doublequote.svg" alt="" />
                                                            </div>
                                                            <div className="icon-box1">
                                                                <img src="/images/1-Americanbw.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="service-item-body">
                                                            {/* <h3>Data & Analytics Strategy</h3> */}
                                                            <p className="desc">
                                                                “The launch of the IDC in Chennai marks a pivotal
                                                                step forward in our collaboration with RheinBrücke.
                                                                This new centre will enhance our operational
                                                                efficiency and growth potential and I would like to
                                                                extend my thanks to everyone involved for their hard
                                                                work in making this a reality.”{" "}
                                                            </p>
                                                            <div className="testimonial-body">
                                                                <div className="author-image">
                                                                    <figure className="image-anime">
                                                                        <img
                                                                            src="/images/simon.png"
                                                                            alt=""
                                                                        />
                                                                    </figure>
                                                                </div>
                                                                <div className="author-content">
                                                                    <h3>Simon Owers </h3>
                                                                    <p>CFO of American Golf</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Testimonial Slide End */}
                                    </div>
                                    <div className="testimonial-btn1 mt-5">
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
            
        </>
    )
}

export default TestimonialandAward
