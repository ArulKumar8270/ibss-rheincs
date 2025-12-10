"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
export default function Establishing() {
    return (
        <CommomLayout>
            <>

                <div className="our-testimonial events pd-50">
                    <div className="container">
                        <div className="row section-row1 align-items-center">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Establishing our Saudi presence and launch of AIMS partnership
                                    </h2>
                                    <img src="/new/h3-in.jpg" alt="" />
                                    <p className="mt-5">
                                        {" "}
                                        RheinBrücke established its presence in Saudi Arabia through a new
                                        strategic partnership with AIMS. AIMS is a multi-billion-dollar
                                        investment holding company headquartered in Jeddah that operates in
                                        several sectors, including Investment, Properties, Industrial
                                        Trading and Manufacturing, Education, Real Estate, and Hospitality.
                                    </p>
                                    <p>
                                        {" "}
                                        We would like to express our sincere appreciation to His Excellency
                                        Mohamed Hassan Al Noman, the chairman of the board, Mr. Saleh
                                        Abdullah Ibrahim, and the CEO of Business Services, Eng. Tariq
                                        Malki, for their tremendous assistance in making this collaboration
                                        possible. We also express our gratitude to Mr. Nadeem Zaman, Chief
                                        Advisor to the Minister of Investment (KSA), for all the guidance
                                        and assistance provided.
                                    </p>
                                    <p>
                                        {" "}
                                        Their forethought and vision have started our journey's fascinating,
                                        new chapter. Our partnership with AIMS is proof of our constant
                                        commitment to providing outstanding experiences and value to our
                                        consumers in the Saudi Arabian market.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Footer Start */}
                <footer className="main-footer pd0">
                    {/* Footer Main Start */}
                    <div className="footer-main">
                        <div className="container">
                            <div className="firstrow">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2>Ready to accelerate value creation across your portfolio? </h2>
                                        <p>
                                            Contact us today to learn how we can help modernise operations, de-risk integrations, and improve commercial outcomes.
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