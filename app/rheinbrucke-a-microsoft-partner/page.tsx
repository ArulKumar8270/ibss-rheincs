import Link from 'next/link'
import React from 'react'
import CommomLayout from '../Components/CommomLayout'

export default function RheinbruckeAMicrosoftPartnerPage() {
    return (
        <CommomLayout>
            <div className="collateralssec">
                {/* <div class="parent2 retailparent2">
  <video src="videos/uiux.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
                <div className="container">
                    <div className="row section-row1 align-items-center builtsec collat">
                        <div className="col-sm-12">
                            <div className="section-title text-center ">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">
                                    NEWS AND EVENTS
                                </h2>
                                {/* <p>In today’s digital-first world, great design is more than looks—it’s about creating seamless, intuitive experiences that drive engagement, satisfaction, and loyalty. </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Testimonial Section Start */}
            <div className="our-testimonial events pd-50">
                <div className="container">
                    <div className="row section-row1 align-items-center">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">
                                    RheinBrücke achieves the Microsoft Gold Competency Partner status{" "}
                                </h2>
                                <div className="corimg mt-5">
                                    <img src="/new/event.jpg" alt="" />
                                </div>
                                <p className="mt-5">
                                    We are excited to announce the achievement of the prestigious
                                    Microsoft Gold Competency Partner status for Collaboration and
                                    Content and Microsoft Silver Competency Partner status for
                                    Application Development.
                                </p>
                                <p>
                                    The Microsoft Partner Network Programme has been modified in the
                                    recent past to encourage specialization and ensure that
                                    organizations award the Gold Competency have the highest focus and
                                    expertise in the specified Microsoft competencies.
                                </p>
                                <p>
                                    RheinBrücke IT Consulting is delighted to have achieved this
                                    within the first year of operations and it reinforces our team’s
                                    expertise in SharePoint and .NET technologies and the trust our
                                    customers have in our delivery capability. The milestone confirms
                                    RheinBrücke’s standing amongst a very exclusive group of partners
                                    who have achieved the top accreditation level for Microsoft
                                    collaboration and content competency area.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Testimonial Section End */}
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
                    </div>
                </div>
            </footer>
        </CommomLayout>
    )
}