"use client";

import React from 'react'
import CommomLayout from '../Components/CommomLayout'
import Link from "next/link";
import TestimonialandAward from '../Components/TestimonialandAward';
import Awards from '../Components/Awards';
import {useTranslation} from "../hooks/useTranslation";
const page = () => {
  const { t, language } = useTranslation();
  return (
    <CommomLayout>
      <>
        {/* Header Start */}
        {/*?php include "navbar.php" ?*/}
        {/* Header End */}
        <div className="collateralssec ">
          {/* <div class="parent2 retailparent2">
  <video src="/videos/uiux.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
          <div className="container">
            <div className="row section-row1 align-items-center builtsec collat">
              <div className="col-sm-12">
                <div className="section-title text-center ">
                  <h2 className="text-anime-style-21">
                    {t("CORPORATE VIDEOS")}
                  </h2>
                  {/* <p>In today’s digital-first world, great design is more than looks—it’s about creating seamless, intuitive experiences that drive engagement, satisfaction, and loyalty. </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Video Gallery Start */}
        <div className="page-video-gallery corvideosec pt40">
          <div className="container">
            {/* <div class="row justify-content-center text-center">
          <div class="col-lg-12">
              <div class="hero-content buildsecont ">
                  <div class="section-title">
                      <div class="hero-video-content mt-4">
                          <h2 class="text-anime-style-2 text-center" data-cursor="-opaque">CORPORATE VIDEOS </h2>
                      </div>
                  </div>
              </div>
          </div>
      </div> */}
            <div className="row">
              <div className="col-lg-4 col-md-6">
                {/* image gallery start */}
                <div
                  className="video-gallery-image"
                  data-wow-delay="1.6s"
                >
                  <Link href="https://youtu.be/G1M5A1CBpYY" 
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure>
                      <img src="/images/vi11.jpg" alt="" />
                    </figure>
                  </Link>
                  <h4>{t("Liftek's ERP Transformation Journey with RheinBrücke: A Success Story")}</h4>
                </div>
                {/* image gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* image gallery start */}
                <div
                  className="video-gallery-image"
                  data-wow-delay="1.6s"
                >
                  <Link href="https://youtu.be/Y3Kc616jPU0" 
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure>
                      <img src="/images/vi10.jpg" alt="" />
                    </figure>
                  </Link>
                  <h4>{t("RheinBrucke – FLSmidth Testimonial | Mads Madsbjerg Hansen")}</h4>
                </div>
                {/* image gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* image gallery start */}
                <div
                  className="video-gallery-image"
                  data-wow-delay="1.6s"
                >
                  <Link href="https://youtu.be/s2jmxT8fP5c" 
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure>
                      <img src="/images/vi9.jpg" alt="" />
                    </figure>
                  </Link>
                  <h4>{t("RheinBrucke – Stevie Awards 2016 German")}</h4>
                </div>
                {/* image gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* image gallery start */}
                <div
                  className="video-gallery-image"
                  data-wow-delay="0.4s"
                >
                  <Link href="https://youtu.be/-t5b2gIdhyo" 
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure>
                      <img src="/images/vi3.jpg" alt="" />
                    </figure>
                  </Link>
                  <h4>{t("RheinBrücke – Pinnacle Awards of Excellence 2016")}</h4>
                </div>
                {/* image gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* image gallery start */}
                <div className="video-gallery-image">
                  <Link href="https://youtu.be/IDrR7hiizhI"
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure>
                      <img src="/images/vi1.jpg" alt="" />
                    </figure>
                  </Link>
                  <h4>{t("RheinBrucke IT Consulting – Corporate video")}</h4>
                </div>
                {/* image gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* image gallery start */}
                <div
                  className="video-gallery-image"
                  data-wow-delay="0.2s"
                >
                  <Link href="https://www.youtube.com/watch?app=desktop&v=Fh6P6teEH3c" 
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure>
                      <img src="/images/vi2.jpg" alt="" />
                    </figure>
                  </Link>
                  <h4>{t("RheinBrücke IT Consulting - Stevie Awards 2015 German")}</h4>
                </div>
                {/* image gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* image gallery start */}
                <div
                  className="video-gallery-image"
                  data-wow-delay="0.6s"
                >
                  <Link href="https://youtu.be/B-XFRUeSlUs" 
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure>
                      <img src="/images/vi4.jpg" alt="" />
                    </figure>
                  </Link>
                  <h4>{t("RheinBrücke – Customer Reference by Martin Peters")}</h4>
                </div>
                {/* image gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* image gallery start */}
                <div
                  className="video-gallery-image"
                  data-wow-delay="0.8s"
                >
                  <Link href="https://youtu.be/yvtX2yqWxVg" 
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure>
                      <img src="/images/vi5.jpg" alt="" />
                    </figure>
                  </Link>
                  <h4>{t("RheinBrücke – Customer Reference by Dr. Schrettl")}</h4>
                </div>
                {/* image gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* image gallery start */}
                <div className="video-gallery-image" data-wow-delay="1s">
                  <Link href="https://youtu.be/MmXOpBXQdZM" 
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure>
                      <img src="/images/vi6.jpg" alt="" />
                    </figure>
                  </Link>
                  <h4>{t("RheinBrücke – Customer Reference by Greg Bryan")}</h4>
                </div>
                {/* image gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* image gallery start */}
                <div
                  className="video-gallery-image"
                  data-wow-delay="1.2s"
                >
                  <Link href="https://youtu.be/C6sDlZCKIA4"
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure>
                      <img src="/images/vi7.jpg" alt="" />
                    </figure>
                  </Link>
                  <h4>{t("RheinBrücke – Customer Reference by Harry Hezel")}</h4>
                </div>
                {/* image gallery end */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* image gallery start */}
                <div
                  className="video-gallery-image"
                  data-wow-delay="1.4s"
                >
                  <Link href="https://youtu.be/TIIjLQps44U"
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <figure>
                      <img src="/images/vi8.jpg" alt="" />
                    </figure>
                  </Link>
                  <h4>{t("RheinBrucke – IDC Inauguration Event")}</h4>
                </div>
                {/* image gallery end */}
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
                    <h2>{t("Ready to accelerate value creation across your portfolio?")}</h2>
                    <p>
                    {t("Contact us today to learn how we can help modernise operations, de-risk integrations, and improve commercial outcomes.")}
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <div className="ser-btn text-right">
                      <Link href="/contact-us" className="animated-svg-link">
                        {t("Contact Us")}
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