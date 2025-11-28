"use client";

import { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { NavArrowLeft } from "../icons";
import React from "react";
export default function Home() {

  return (
    <>
      <Header />
      <main>
        {/* Hero Section Start*/}
        <div className="hero banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-content ">
                  <div className="section-title">
                    <h1 className=" mainbannerh1">
                      <div className="topbar_text_slider1">
                        <ul className="vertical-reveal">
                          <li>Analyse</li>
                          <li>Integrate</li>
                          <li>Transform</li>
                        </ul>
                      </div>
                    </h1>
                    <div className="hero-video-content wow fadeInUp mt-3">
                      <p>
                        Empowering businesses to operate smarter, adapt faster, and
                        unlock new opportunities in a technology-driven economy.
                      </p>
                    </div>
                  </div>
                  <div className="hero-content-body">
                    <div className="hero-content-video">
                      {/* Play Button */}
                      <div className="video-play-button" data-cursor-text="play">
                        <a href="#" id="playVideo">
                          <svg
                            width={76}
                            height={76}
                            viewBox="0 0 76 76"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.25 38V29.6563C19.25 19.3125 26.5938 15.0625 35.5625 20.25L42.7813 24.4375L50 28.625C58.9688 33.8125 58.9688 42.2813 50 47.4687L42.7813 51.6563L35.5625 55.8437C26.5938 60.9375 19.25 56.7187 19.25 46.3438V38Z"
                              stroke="white"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                      {/* Video Popup */}
                      <div className="video-popup" id="videoPopup">
                        <iframe
                          id="youtubeVideo"
                          src=""
                          allow="autoplay; encrypted-media"
                          allowFullScreen={true}
                        />
                        <button className="close-popup" id="closePopup">
                          ✕
                        </button>
                      </div>
                      <div className="learn-more-circle">
                        <a href="">
                          <span className="fa fa-arrow-up1">
                            <svg
                              width={45}
                              height={45}
                              viewBox="0 0 45 45"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M27.0566 11.1188L38.4379 22.5L27.0566 33.8813"
                                stroke="#008080"
                                strokeWidth="1.125"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6.5625 22.5H38.1188"
                                stroke="#008080"
                                strokeWidth="1.125"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <img src="images/Contact us1.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="hero-bg-video">
                  <video autoPlay={true} muted={true} loop={true} id="myVideo" height={800}>
                    <source src="videos/banner.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        {/* Our Services Section Start */}
        <div className="our-services thepath pd30">
          <div className="container">
            <div className="row section-row text-center">
              <div className="col-lg-12">
                {/* Section Title Start */}
                <div className="section-title text-center">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    The Path to Transformation
                  </h2>
                  <p>
                    Every successful transformation starts with clarity and ends with
                    measurable impact. Our approach is built to take you from insight
                    to execution, helping your business unlock real value at every
                    stage of the journey
                  </p>
                  <div className="ser-btn">
                    <a href="#" className="animated-svg-link">
                      <span>
                        Know More
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
                      </span>
                    </a>
                  </div>
                </div>
                {/* Section Title End */}
              </div>
            </div>
            <div className="systemview">
              <div className="row sersec thepathsec">
                <div className="col-lg-4 col-md-6">
                  <div className="service-item ">
                    <div className="service-item-header">
                      <div className="icon-box">
                        <img src="images/a1.svg" alt="" />
                      </div>
                    </div>
                    <div className="service-item-body">
                      <h3>Analyse</h3>
                      <p>
                        We start by understanding your business at its core your
                        operating model, value drivers, and constraints. Using
                        data-led diagnostics and performance benchmarking, we identify
                        the real levers for impact whether it’s efficiency, margin
                        growth, agility, or customer experience.
                      </p>
                      <div className="ser-btn1">
                        <a href="#" className="animated-svg-link1 btn-style-3">
                          Know More
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
                    </div>
                  </div>
                  {/* Service Item End */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* Service Item Start */}
                  <div className="service-item ">
                    {/* Your current service content */}
                    <div className="service-item-header">
                      <div className="icon-box">
                        <img src="images/i1.svg" alt="" />
                      </div>
                      {/* <div class="service-arrow">
                                  <a href="#!"><img src="images/arrow-accent.svg" alt=""></a>
                              </div> */}
                    </div>
                    <div className="service-item-body">
                      <h3>Integrate</h3>
                      <p>
                        Next, we bring together the systems, tools, and workflows that
                        drive your operations. We align technology with your strategic
                        goals – implementing and integrating ERP and digital platforms
                        including Epicor, Microsoft Dynamics, SAP, and others,
                        tailored to your unique needs. Our focus: speed, reliability,
                        and scalability.
                      </p>
                      <div className="ser-btn1">
                        <a href="#" className="animated-svg-link1 btn-style-3">
                          Know More
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
                    </div>
                  </div>
                  {/* Service Item End */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* Service Item Start */}
                  <div className="service-item ">
                    {/* Your current service content */}
                    <div className="service-item-header">
                      <div className="icon-box">
                        <img src="images/t1.svg" alt="" />
                      </div>
                      {/* <div class="service-arrow">
                                  <a href="#!"><img src="images/arrow-accent.svg" alt=""></a>
                              </div> */}
                    </div>
                    <div className="service-item-body">
                      <h3>Transform</h3>
                      <p>
                        This is where change becomes reality. From digitised supply
                        chains to intelligent forecasting, we help you deploy
                        solutions that move the needle - unlocking new revenue,
                        simplifying complexity, and accelerating time-to-value.
                      </p>
                      <div className="ser-btn1">
                        <a href="#" className="animated-svg-link1 btn-style-3">
                          Know More
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
                    </div>
                  </div>
                  {/* Service Item End */}
                </div>
                {/* <div class="col-lg-12">
              <div class="service-footer wow fadeInUp" data-wow-delay="0.25s">
                  <p>Let's make something great work together. <a href="#!">get free quote</a></p>
              </div>
          </div> */}
              </div>
            </div>
            <div className="mobileview">
              {/* Testimonial Slider Start */}
              <div className="testimonial-slider33 thepathindex">
                <div className="swiper mySwiper3">
                  <div className="swiper-wrapper">
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="service-item ">
                        <div className="service-item-header">
                          <div className="icon-box">
                            <img src="images/a1.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body">
                          <h3>Analyse</h3>
                          <p>
                            We start by understanding your business at its core your
                            operating model, value drivers, and constraints. Using
                            data-led diagnostics and performance benchmarking, we
                            identify the real levers for impact whether it’s
                            efficiency, margin growth, agility, or customer
                            experience.
                          </p>
                          <div className="ser-btn1">
                            <a href="#" className="animated-svg-link1 btn-style-3">
                              Know More
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
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="service-item ">
                        {/* Your current service content */}
                        <div className="service-item-header">
                          <div className="icon-box">
                            <img src="images/i1.svg" alt="" />
                          </div>
                          {/* <div class="service-arrow">
                                  <a href="#!"><img src="images/arrow-accent.svg" alt=""></a>
                              </div> */}
                        </div>
                        <div className="service-item-body">
                          <h3>Integrate</h3>
                          <p>
                            Next, we bring together the systems, tools, and workflows
                            that drive your operations. We align technology with your
                            strategic goals – implementing and integrating ERP and
                            digital platforms including Epicor, Microsoft Dynamics,
                            SAP, and others, tailored to your unique needs. Our focus:
                            speed, reliability, and scalability.
                          </p>
                          <div className="ser-btn1">
                            <a href="#" className="animated-svg-link1 btn-style-3">
                              Know More
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
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="service-item ">
                        {/* Your current service content */}
                        <div className="service-item-header">
                          <div className="icon-box">
                            <img src="images/t1.svg" alt="" />
                          </div>
                          {/* <div class="service-arrow">
                                  <a href="#!"><img src="images/arrow-accent.svg" alt=""></a>
                              </div> */}
                        </div>
                        <div className="service-item-body">
                          <h3>Transform</h3>
                          <p>
                            This is where change becomes reality. From digitised
                            supply chains to intelligent forecasting, we help you
                            deploy solutions that move the needle - unlocking new
                            revenue, simplifying complexity, and accelerating
                            time-to-value.
                          </p>
                          <div className="ser-btn1">
                            <a href="#" className="animated-svg-link1 btn-style-3">
                              Know More
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
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}
                  </div>
                </div>
                <div className="testimonial-btn">
                  <div className="testimonial-button-prev">
                    <div className="animated-svg-link1 btn-style-3">
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
                    </div>
                  </div>
                  <span className="testspace">1/3</span>
                  <div className="testimonial-button-next">
                    <div className="animated-svg-link1 btn-style-3">
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
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Slider End */}
            </div>
            <div className="bgvideo">
              <video autoPlay={true} muted={true} loop={true} id="myVideo">
                <source src="videos/globe1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        {/* Our Services Section End */}
        {/* About Agency Section Start */}
        <div className="about-agency systemview">
          <div className=" container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-agency-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      Powering Enterprise Growth Through Digital-Enabled
                      Transformation
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-agency-list">
                  <div className="about-agency-item wow fadeInUp">
                    <div className="agency-item-content">
                      <p>
                        At RheinBrücke, we believe transformation is not just about
                        technology -it’s about unlocking new business models, new ways
                        of working, and new value for your customers.
                      </p>
                      <p>
                        We help enterprises go beyond incremental change. Whether
                        you’re scaling operations, modernizing your ERP landscape, or
                        launching entirely new services, we enable rapid, meaningful
                        transformation across your organisation -powered by enterprise
                        technology, real-world insight, and strategic execution.
                      </p>
                      <div className="ser-btn2">
                        <a href="#" className="animated-svg-link1 btn-style-3">
                          Learn More About Our Story
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row countingss mt-5">
            <div className="col-sm-2" />
            <div className="col-sm-2 col-6">
              <div className="success-counter-box1 firstbox">
                <div className="success-counter-item">
                  <h2>
                    <span className="counter">10</span>+
                  </h2>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-6">
              <div className="success-counter-box1">
                <div className="success-counter-item">
                  <h2>
                    <span className="counter">45</span>+
                  </h2>
                  <p>Countries Served</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-6">
              <div className="success-counter-box1">
                <div className="success-counter-item">
                  <h2>
                    <span className="counter">300</span>+
                  </h2>
                  <p>Projects Delivered</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-6">
              <div className="success-counter-box1">
                <div className="success-counter-item">
                  <h2>
                    <span className="counter">8</span>+
                  </h2>
                  <p>Industries Covered</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2" />
          </div>
        </div>
        <div className="about-agency mobileview pd30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-agency-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      Powering Enterprise Growth Through Digital-Enabled
                      Transformation
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-agency-list">
                  <div className="about-agency-item wow fadeInUp">
                    <div className="agency-item-content">
                      <p>
                        At RheinBrücke, we believe transformation is not just about
                        technology -it’s about unlocking new business models, new ways
                        of working, and new value for your customers.
                      </p>
                      <p>
                        We help enterprises go beyond incremental change. Whether
                        you’re scaling operations, modernizing your ERP landscape, or
                        launching entirely new services, we enable rapid, meaningful
                        transformation across your organisation -powered by enterprise
                        technology, real-world insight, and strategic execution.
                      </p>
                      <div className="ser-btn2">
                        <a href="#" className="animated-svg-link1 btn-style-3">
                          Learn More About Our Story
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row countingss mt-2">
              <div className="col-sm-2" />
              <div className="col-sm-2 col-6">
                <div className="success-counter-box1 firstbox">
                  <div className="success-counter-item">
                    <h2>
                      <span className="counter">10</span>+
                    </h2>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 col-6">
                <div className="success-counter-box1 firstbox1">
                  <div className="success-counter-item">
                    <h2>
                      <span className="counter">45</span>+
                    </h2>
                    <p>Countries Served</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 col-6">
                <div className="success-counter-box1 firstbox2">
                  <div className="success-counter-item">
                    <h2>
                      <span className="counter">300</span>+
                    </h2>
                    <p>Projects Delivered</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 col-6">
                <div className="success-counter-box1 firstbox3">
                  <div className="success-counter-item">
                    <h2>
                      <span className="counter">8</span>+
                    </h2>
                    <p>Industries Covered</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2" />
            </div>
          </div>
        </div>
        {/* About Us Section End */}
        {/* Hero Section Start*/}
        <div className="hero brainbgsec brine-waper-padding">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-sm-7">
                {/* Section Title Start */}
                <div className="prine-title">
                  <h2 data-cursor="-opaque">
                    Built for Enterprises that Want to Scale
                  </h2>
                  <p className="brin-p-tag m-0">
                    Scaling successfully means balancing agility with execution. We
                    design solutions that are digital at the core, powered by trusted
                    platforms, and tailored for enterprise growth. Every engagement is
                    focused on measurable outcomes that drive lasting business value.
                  </p>
                  <div className="ser-btn m-0">
                    <a href="#" className="animated-svg-link">
                      Konw More
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
                <div className="row mt-5">
                  <div className="col-lg-6 col-md-6 col-6">
                    {/* Benefits Steps Item Start */}
                    <div className="benefits-steps-item wow fadeInUp">
                      <div className="icon-box">
                        <img src="images/brr1.svg" alt="" />
                      </div>
                      <div className="benefits-steps-content">
                        <h3>Digital by Design</h3>
                        <p>
                          Cloud native, mobile first, AI-ready solutions designed for
                          agility and growth.
                        </p>
                      </div>
                    </div>
                    {/* Benefits Steps Item End */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    {/* Benefits Steps Item Start */}
                    <div
                      className="benefits-steps-item wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="icon-box">
                        <img src="images/brr2.svg" alt="" />
                      </div>
                      <div className="benefits-steps-content">
                        <h3>Outcomes-Driven</h3>
                        <p>
                          We quantify the impact from cost savings &amp; operational
                          KPIs to customer lifetime value.
                        </p>
                      </div>
                    </div>
                    {/* Benefits Steps Item End */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    {/* Benefits Steps Item Start */}
                    <div
                      className="benefits-steps-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon-box">
                        <img src="images/brr3.svg" alt="" />
                      </div>
                      <div className="benefits-steps-content">
                        <h3>Trusted Enterprise Platforms </h3>
                        <p>
                          Epicor Premium Partner, Microsoft ISV &amp; AI Cloud
                          Partner, SAP certified - deep expertise in platforms that
                          run the world’s leading businesses.
                        </p>
                      </div>
                    </div>
                    {/* Benefits Steps Item End */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    {/* Benefits Steps Item Start */}
                    <div
                      className="benefits-steps-item wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="icon-box">
                        <img src="images/brr4.svg" alt="" />
                      </div>
                      <div className="benefits-steps-content">
                        <h3>Deep Execution Capability</h3>
                        <p>
                          We combine global delivery centres with local expertise to
                          execute transformation programs at speed, and at scale.
                        </p>
                      </div>
                    </div>
                    {/* Benefits Steps Item End */}
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="parent1">
                  <video
                    src="videos/brain.mp4"
                    autoPlay={true} muted={true} loop={true}
                    className="bg-image"
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        {/* Our Testimonial Section Start */}
        <div className="our-testimonial indexwhatdo  pd30">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-6">
                <div className="section-title testidescription">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {" "}
                    What Do to Drive Enterprise Transformation
                  </h2>
                  <p>
                    We help enterprises modernise systems, build digital capabilities,
                    and unlock growth. From ERP transformation to automation and data
                    strategy, our solutions simplify complexity and create
                    future-ready enterprises.
                  </p>
                  <div className="ser-btn2">
                    <a href="#" className="animated-svg-link1 btn-style-3">
                      Read More
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
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-12">
                {/* Testimonial Slider Start */}
                <div className="testimonial-slider testianimdot">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item flip-card">
                          <div className="flip-card-inner">
                            {/* Front Side */}
                            <div className="flip-card-front">
                              {/* Your current service content */}
                              <div className="service-item-header ">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      className="card-svg"
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        id="line-ml"
                                        d="M0.999367 60.6538 H 84.4375"
                                      />
                                      <path
                                        id="line-tl"
                                        d="M1.4209 2L34.7821 2C46.3801 2 55.7821 11.402 55.7821 23V39.5752C55.7821 51.1732 65.1841 60.5752 76.7821 60.5752H84.859"
                                      />
                                      <path
                                        id="line-bl"
                                        d="M1.4209 119.15L34.7821 119.15C46.3801 119.15 55.7821 109.748 55.7821 98.1504V81.5752C55.7821 69.9772 65.1841 60.5751 76.7821 60.5751H84.859"
                                      />
                                      <path id="line-mr" d="M250 60.1538 H 166.562" />
                                      <path
                                        id="line-tr"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                      />
                                      <path
                                        id="line-br"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                      />
                                      <ellipse
                                        cx="125.304"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="#082326"
                                      />
                                      <path
                                        className="icns"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M129.083 64.9397L133.27 62.5092L133.269 62.5075L137.459 60.0756C137.118 58.2645 138.508 56.591 140.327 56.591C142.146 56.591 143.536 58.264 143.196 60.0749L151.575 64.9409C153.46 63.3014 156.4 64.657 156.4 67.1617C156.4 68.4253 155.598 69.5261 154.445 69.9324V79.6586C156.456 80.3672 157.075 82.9626 155.545 84.5014C154.458 85.594 152.73 85.6571 151.572 84.6523L147.384 87.0827L147.385 87.0844L143.196 89.5164C143.536 91.3287 142.146 93 140.327 93C138.507 93 137.117 91.3259 137.459 89.5136L129.08 84.6507C127.184 86.2964 124.256 84.9206 124.256 82.4294C124.256 81.1656 125.057 80.0647 126.211 79.6585V69.9325C124.195 69.2229 123.584 66.6209 125.111 65.086C126.192 63.9992 127.925 63.9347 129.083 64.9397ZM108.753 65.3942C108.753 64.8586 109.185 64.4244 109.717 64.4244C110.25 64.4244 110.682 64.8586 110.682 65.3942V81.4596H117.466L116.349 80.6175C115.924 80.2974 115.838 79.6918 116.156 79.2651C116.475 78.8383 117.077 78.7518 117.502 79.0718L120.861 81.6046C121.474 82.0255 121.474 82.8325 120.861 83.2539L117.501 85.7884C117.077 86.1085 116.475 86.0221 116.156 85.5952C115.838 85.1684 115.924 84.5628 116.349 84.2428L117.467 83.3991H109.717C109.185 83.3991 108.753 82.9649 108.753 82.4293L108.753 65.3942ZM142.131 48.6431C142.449 48.2164 143.051 48.1298 143.476 48.4499C143.9 48.7699 143.986 49.3755 143.668 49.8022L141.147 53.18C140.728 53.7964 139.926 53.7962 139.507 53.1797L136.987 49.8022C136.669 49.3755 136.755 48.77 137.18 48.4499C137.604 48.1298 138.206 48.2162 138.525 48.6431L139.362 49.7661V38.5693H127.736C127.204 38.5693 126.772 38.1351 126.772 37.5995C126.772 37.0639 127.204 36.6297 127.736 36.6297H140.327C140.86 36.6297 141.292 37.0639 141.292 37.5995V49.7675L142.131 48.6431ZM130.043 82.9797L138.42 87.8417C138.694 87.6036 139.013 87.416 139.362 87.2931V77.5665C138.013 77.092 137.187 75.6907 137.458 74.2476L129.081 69.3842C128.807 69.6222 128.489 69.8096 128.14 69.9324V79.6585C129.489 80.1337 130.316 81.5376 130.043 82.9797ZM127.875 81.7257C127.253 81.0998 126.185 81.5458 126.185 82.4294C126.185 83.3369 127.27 83.7474 127.876 83.1378C128.26 82.7513 128.264 82.1166 127.875 81.7257ZM152.515 79.6594V69.9318C152.168 69.8087 151.85 69.6211 151.576 69.3832L143.195 74.2484C143.466 75.6908 142.641 77.0921 141.291 77.5665V87.2929C141.64 87.4156 141.959 87.603 142.233 87.8406L146.42 85.4099L146.421 85.4116L150.611 82.9802C150.339 81.5368 151.171 80.1351 152.515 79.6594ZM154.18 81.7258C153.563 81.1058 152.489 81.533 152.489 82.4294C152.489 83.3242 153.569 83.7528 154.18 83.1377C154.565 82.7508 154.569 82.1169 154.18 81.7258ZM141.027 89.36C140.406 88.7351 139.337 89.1794 139.337 90.0641C139.337 90.9695 140.42 91.383 141.027 90.7726C141.412 90.3858 141.416 89.7505 141.027 89.36ZM130.044 67.7088L138.421 72.5725C139.516 71.6228 141.138 71.6231 142.233 72.5729L150.611 67.7091C150.543 67.3477 150.543 66.9734 150.612 66.6121L142.233 61.7508C141.139 62.7006 139.517 62.701 138.422 61.7512L134.234 64.1822L134.233 64.1805L130.043 66.6122C130.111 66.9732 130.112 67.3473 130.044 67.7088ZM127.876 66.4578C127.255 65.8338 126.185 66.2749 126.185 67.1617C126.185 68.0453 127.253 68.4915 127.875 67.8655C128.262 67.4762 128.262 66.8462 127.876 66.4578ZM141.027 74.0915C140.404 73.4657 139.337 73.9125 139.337 74.7956C139.337 75.6818 140.407 76.1238 141.027 75.4998C141.414 75.1115 141.414 74.4806 141.027 74.0915ZM154.18 66.4579C153.565 65.8396 152.489 66.2625 152.489 67.1617C152.489 68.058 153.563 68.4855 154.18 67.8654C154.567 67.4759 154.567 66.8465 154.18 66.4579ZM141.027 58.8189C140.419 58.2076 139.337 58.6227 139.337 59.5279C139.337 60.4109 140.404 60.8578 141.027 60.232C141.416 59.8409 141.412 59.2059 141.027 58.8189ZM98.4852 37.5995L109.717 44.1184L120.947 37.6006L115.812 34.6198L115.812 34.6182L109.718 31.0806L98.4852 37.5995ZM110.682 45.7884L121.904 39.2743V52.3101L110.682 58.8255V45.7884ZM108.753 58.8255L97.5287 52.3122V39.2743L108.753 45.7885V58.8255ZM110.209 29.1362C109.921 28.9637 109.551 28.9484 109.239 29.1285L96.1635 36.7171C95.8308 36.87 95.5996 37.2076 95.5996 37.5995V52.8672H95.6037C95.604 53.2013 95.7769 53.526 96.0858 53.7045L102.658 57.5214L109.225 61.3339C109.515 61.5073 109.887 61.522 110.2 61.34L116.776 57.5214L123.29 53.74C123.612 53.5828 123.834 53.251 123.834 52.8672V37.5995H123.832C123.831 37.2659 123.659 36.9414 123.352 36.7624L116.776 32.9455L116.775 32.9471L110.209 29.1362Z"
                                        fill="#008080"
                                      />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>Business Model Transformation</h3>
                                <p>
                                  We help businesses rethink their operating models,
                                  uncover new revenue streams, and deliver innovative
                                  services that drive sustainable growth.
                                </p>
                                <div className="ser-btn serbtn1">
                                  <a
                                    href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                    className="animated-svg-link1 animated-svg-link12"
                                  >
                                    Read More
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
                              <div className="service-item-header">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.9"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="#082326"
                                      />
                                      <line
                                        opacity="0.9"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="#082326"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="#082326"
                                      />
                                      <path
                                        className="icns"
                                        d="M124.602 83.1395C112.779 83.1395 103.162 73.5221 103.162 61.6997C103.162 49.8773 112.779 40.2612 124.602 40.2612C136.424 40.2612 146.042 49.8786 146.042 61.701C146.042 62.403 146.007 63.1115 145.94 63.807L144.661 63.6823C144.725 63.0279 144.757 62.3619 144.757 61.701C144.757 50.5883 135.716 41.547 124.603 41.547C113.49 41.547 104.448 50.587 104.448 61.701C104.448 72.8137 113.489 81.855 124.602 81.855C125.101 81.855 125.605 81.837 126.101 81.7997L126.195 83.0816C125.668 83.1202 125.132 83.1395 124.602 83.1395Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M125.244 82.4982H123.959V78.7336H125.244V82.4982ZM109.231 76.4L108.691 75.2338C113.239 73.1278 118.493 71.9834 123.959 71.9012V62.3442H103.805V61.0585H123.959V51.5016C118.497 51.418 113.23 50.2698 108.691 48.1689L109.231 47.0028C113.602 49.0265 118.682 50.1335 123.959 50.2171V40.9058H125.244V50.2171C130.521 50.1335 135.6 49.0265 139.973 47.0028L140.513 48.1689C135.973 50.2698 130.708 51.418 125.244 51.5016V61.0585H134.405V62.3442H125.244V72.6019H125.224L125.215 73.1869C119.484 73.1008 113.958 74.2116 109.231 76.4ZM145.398 62.3442H139.962V61.0585H145.398V62.3442Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M124.603 82.9673C121.434 82.9673 118.487 80.7006 116.305 76.5849C114.191 72.5978 113.027 67.3121 113.027 61.6998C113.027 56.0876 114.191 50.8019 116.305 46.8148C118.487 42.6991 121.434 40.4324 124.603 40.4324C130.881 40.4324 135.962 49.4531 136.172 60.9683L134.886 60.9914C134.693 50.3635 130.08 41.7181 124.603 41.7181C121.932 41.7181 119.388 43.7419 117.44 47.4165C115.424 51.221 114.313 56.2933 114.313 61.6986C114.313 67.1038 115.424 72.1774 117.44 75.9806C119.388 79.6552 121.932 81.679 124.603 81.679C125.113 81.679 125.628 81.6031 126.129 81.4553L126.494 82.6883C125.873 82.8747 125.237 82.9673 124.603 82.9673Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M123.145 90.1737C123.133 90.1737 123.123 90.1737 123.111 90.1725C107.978 89.3933 96.1208 76.9164 96.0912 61.7575L94.1986 63.6502C93.9479 63.9009 93.5403 63.9009 93.2896 63.6502C93.0389 63.3994 93.0389 62.9919 93.2896 62.7411L96.2802 59.7505C96.4011 59.6296 96.5644 59.5628 96.7354 59.5628C96.9064 59.5628 97.0697 59.6309 97.1905 59.7505L100.181 62.7411C100.432 62.9919 100.432 63.3994 100.181 63.6502C99.9305 63.9009 99.5229 63.9009 99.2722 63.6502L97.377 61.7575C97.4066 76.2324 108.729 88.1436 123.177 88.8893C123.532 88.9073 123.804 89.2094 123.786 89.5643C123.768 89.9076 123.484 90.1737 123.145 90.1737ZM152.468 63.8392C152.297 63.8392 152.134 63.771 152.013 63.6514L149.023 60.6608C148.772 60.4101 148.772 60.0025 149.023 59.7518C149.273 59.5011 149.681 59.5011 149.932 59.7518L151.824 61.6444C151.799 49.021 143.228 38.1616 130.963 35.2237C130.617 35.1414 130.405 34.7942 130.487 34.4484C130.57 34.1038 130.917 33.8904 131.263 33.9726C137.385 35.4384 142.933 38.9703 146.886 43.9166C150.946 48.9991 153.097 55.127 153.11 61.6431L155.003 59.7505C155.253 59.4998 155.661 59.4998 155.912 59.7505C156.162 60.0012 156.162 60.4088 155.912 60.6595L152.921 63.6502C152.803 63.771 152.639 63.8392 152.468 63.8392ZM97.4991 55.8303C97.449 55.8303 97.3988 55.8251 97.3487 55.8123C97.0028 55.73 96.7907 55.3828 96.873 55.037C98.3387 48.9143 101.871 43.3663 106.817 39.4139C111.899 35.3535 118.027 33.2025 124.543 33.1896L122.651 31.297C122.4 31.0463 122.4 30.6387 122.651 30.388C122.902 30.1373 123.309 30.1373 123.56 30.388L126.55 33.3786C126.671 33.4995 126.738 33.6628 126.738 33.8338C126.738 34.0048 126.67 34.1681 126.55 34.2889L123.56 37.2796C123.309 37.5303 122.902 37.5303 122.651 37.2796C122.4 37.0289 122.4 36.6213 122.651 36.3706L124.543 34.4779C111.92 34.5037 101.061 43.0744 98.1227 55.3391C98.0533 55.631 97.7897 55.8303 97.4991 55.8303Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M137.233 91.0008C136.698 91.0008 136.163 90.9738 135.632 90.9185C134.553 90.8066 133.731 89.9735 133.629 88.8934L133.431 86.763C133.403 86.4595 133.219 86.2114 132.94 86.0969C132.661 85.9825 132.355 86.0314 132.122 86.2268L130.487 87.6064C129.657 88.3059 128.487 88.3213 127.64 87.645C126.773 86.9533 125.98 86.1664 125.282 85.3062C124.598 84.4641 124.604 83.2927 125.297 82.4583L126.663 80.8125C126.857 80.5785 126.903 80.2725 126.786 79.9935C126.669 79.7145 126.419 79.5332 126.116 79.5075L123.983 79.3262C122.902 79.2349 122.063 78.4172 121.943 77.3385C121.821 76.2366 121.816 75.1206 121.93 74.0187C122.042 72.9399 122.875 72.1171 123.955 72.0155L126.086 71.8175C126.389 71.7892 126.637 71.6053 126.752 71.3263C126.866 71.0473 126.817 70.7413 126.622 70.5086L125.243 68.8731C124.544 68.0438 124.529 66.8738 125.205 66.0265C125.897 65.1599 126.683 64.3666 127.544 63.6685C128.386 62.9844 129.557 62.9909 130.392 63.6839L132.037 65.0493C132.271 65.2435 132.577 65.2898 132.856 65.1728C133.135 65.0558 133.317 64.8051 133.342 64.5029L133.524 62.3699C133.615 61.2885 134.433 60.449 135.511 60.3294C136.612 60.2059 137.729 60.2021 138.831 60.3165C139.91 60.4284 140.733 61.2615 140.834 62.3416L141.032 64.472C141.061 64.7755 141.244 65.0236 141.524 65.1381C141.804 65.2525 142.109 65.2036 142.341 65.0082L143.975 63.6286C144.805 62.9292 145.975 62.9137 146.822 63.59C147.689 64.2818 148.482 65.0686 149.18 65.9288C149.864 66.771 149.858 67.9423 149.165 68.7767L147.799 70.4225C147.605 70.6565 147.559 70.9625 147.676 71.2415C147.793 71.5205 148.044 71.7018 148.346 71.7275L150.479 71.9088C151.56 72.0001 152.4 72.8178 152.519 73.8965C152.641 74.9984 152.646 76.1157 152.532 77.2163C152.42 78.2951 151.587 79.1192 150.508 79.2195L148.378 79.4175C148.074 79.4458 147.826 79.6297 147.71 79.9087C147.596 80.1877 147.645 80.4937 147.84 80.7264L149.22 82.3606C149.919 83.1899 149.935 84.3599 149.259 85.2072C148.567 86.0738 147.78 86.8671 146.92 87.5653C146.078 88.2493 144.906 88.2429 144.072 87.5498L142.426 86.1844C142.192 85.9902 141.886 85.9439 141.607 86.0609C141.328 86.1779 141.147 86.4287 141.121 86.7308L140.94 88.8639C140.848 89.9452 140.031 90.7848 138.952 90.9043C138.381 90.9699 137.808 91.0008 137.233 91.0008ZM132.638 84.7508C132.904 84.7508 133.171 84.8022 133.427 84.9064C134.147 85.2008 134.64 85.8668 134.712 86.6434L134.91 88.7739C134.952 89.2354 135.304 89.5903 135.765 89.6379C136.774 89.7433 137.799 89.7395 138.809 89.6263C139.27 89.5749 139.619 89.2162 139.658 88.7546L139.839 86.6215C139.905 85.8437 140.392 85.1751 141.109 84.8742C141.827 84.5733 142.646 84.6968 143.246 85.1944L144.892 86.5598C145.248 86.8555 145.748 86.8581 146.108 86.5662C146.898 85.9259 147.619 85.1982 148.253 84.4036C148.542 84.0423 148.535 83.5422 148.236 83.1873L146.857 81.5531C146.354 80.9565 146.224 80.1388 146.52 79.4188C146.816 78.6988 147.48 78.2063 148.257 78.1343L150.387 77.9363C150.849 77.8939 151.204 77.5416 151.251 77.0813C151.357 76.0707 151.353 75.0473 151.24 74.0367C151.188 73.5764 150.83 73.2267 150.368 73.1881L148.235 73.0068C147.457 72.9412 146.789 72.4539 146.488 71.7365C146.187 71.019 146.31 70.2 146.808 69.5996L148.173 67.9538C148.469 67.5977 148.472 67.0975 148.18 66.7375C147.539 65.9481 146.812 65.2268 146.017 64.5929C145.656 64.3036 145.156 64.3113 144.801 64.6096L143.167 65.9892C142.57 66.4919 141.752 66.6218 141.032 66.3261C140.312 66.0316 139.82 65.3656 139.748 64.589L139.55 62.4586C139.507 61.997 139.155 61.6421 138.695 61.5946C137.684 61.4891 136.661 61.493 135.65 61.6061C135.19 61.6576 134.84 62.0163 134.802 62.4779L134.62 64.6109C134.555 65.3875 134.067 66.0574 133.35 66.3582C132.633 66.6591 131.814 66.5357 131.213 66.0381L129.567 64.6726C129.211 64.3769 128.711 64.3743 128.351 64.6662C127.562 65.3065 126.84 66.0342 126.206 66.8288C125.917 67.1914 125.925 67.6903 126.223 68.0451L127.603 69.6793C128.105 70.2759 128.235 71.0936 127.94 71.8136C127.645 72.5336 126.979 73.0261 126.203 73.0981L124.072 73.2961C123.611 73.3385 123.256 73.6908 123.208 74.1511C123.103 75.1617 123.107 76.1852 123.22 77.1958C123.271 77.656 123.63 78.0058 124.091 78.0443L126.224 78.2256C127.002 78.2912 127.671 78.7785 127.972 79.4959C128.273 80.2134 128.149 81.0324 127.652 81.6328L126.286 83.2786C125.99 83.6348 125.988 84.1349 126.28 84.4949C126.92 85.2844 127.648 86.0057 128.442 86.6395C128.804 86.9288 129.304 86.9211 129.659 86.6228L131.294 85.2445C131.677 84.9205 132.154 84.7508 132.638 84.7508Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        d="M137.232 82.8773C133.229 82.8773 129.973 79.6205 129.973 75.618C129.973 71.6142 133.229 68.3574 137.232 68.3574C141.236 68.3574 144.493 71.6142 144.493 75.618C144.491 79.6205 141.234 82.8773 137.232 82.8773ZM137.232 69.6432C133.938 69.6432 131.258 72.3227 131.258 75.618C131.258 78.9134 133.938 81.5916 137.232 81.5916C140.526 81.5916 143.207 78.9121 143.207 75.618C143.207 72.3239 140.526 69.6432 137.232 69.6432Z"
                                        fill="#082326"
                                      />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>ERP Modernisation</h3>
                                <p>
                                  We modernise legacy ERP systems to unlock agility,
                                  reduce complexity, supporting faster decisions and
                                  scalable operations.
                                </p>
                                <div className="ser-btn serbtn1">
                                  <a
                                    href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                    className="animated-svg-link1 animated-svg-link12"
                                  >
                                    Read More
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
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.9"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="#082326"
                                      />
                                      <line
                                        opacity="0.9"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="#082326"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="#082326"
                                      />
                                      <path
                                        className="icns"
                                        d="M127.098 61.2757H124.908C124.269 61.2757 123.75 60.7563 123.75 60.118V55.0896H125.229V59.7972H126.773V55.0896H128.252V60.118C128.252 60.7563 127.734 61.2757 127.098 61.2757Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M100.527 60.2607H107.638V61.7394H100.527V60.2607Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M112.491 48.5371L108.042 44.0879H100.523V42.6094H108.348C108.544 42.6094 108.732 42.6872 108.871 42.8259L113.537 47.4916L112.491 48.5371Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M98.1315 46.48C96.4048 46.48 95 45.0753 95 43.3487C95 41.622 96.4048 40.2173 98.1315 40.2173C99.8581 40.2173 101.263 41.622 101.263 43.3487C101.263 45.0753 99.8581 46.48 98.1315 46.48ZM98.1315 41.6957C97.2201 41.6957 96.4785 42.4372 96.4785 43.3487C96.4785 44.2601 97.2199 45.0016 98.1315 45.0016C99.043 45.0016 99.7843 44.2601 99.7843 43.3487C99.7843 42.4372 99.0429 41.6957 98.1315 41.6957Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M128.086 80.1057H123.919C122.916 80.1057 122.073 79.4566 121.819 78.4904L121.226 76.2809C120.311 75.9939 119.423 75.6254 118.577 75.1814L116.589 76.3278C115.726 76.8305 114.67 76.692 113.965 75.9817L111.021 73.037C110.316 72.3326 110.176 71.2783 110.672 70.4135L111.822 68.4261C111.379 67.5807 111.01 66.6929 110.723 65.7779L108.506 65.1838C107.544 64.9248 106.898 64.0817 106.898 63.0854V58.9149C106.898 57.9186 107.544 57.0754 108.506 56.8166L110.723 56.2223C111.009 55.3103 111.378 54.4236 111.822 53.5772L110.673 51.5888C110.176 50.7217 110.316 49.6674 111.02 48.963L113.967 46.0165C114.67 45.3077 115.726 45.1695 116.591 45.6738L118.577 46.8186C119.423 46.3746 120.311 46.0062 121.226 45.7191L121.82 43.5057C122.073 42.5436 122.916 41.8945 123.919 41.8945H128.086C129.085 41.8945 129.93 42.5422 130.188 43.5062L130.782 45.7196C131.696 46.007 132.583 46.3755 133.427 46.8187L135.416 45.6722C136.279 45.1695 137.334 45.308 138.039 46.0185L140.987 48.9625C141.689 49.6704 141.827 50.7239 141.333 51.5867L140.185 53.5743C140.632 54.4263 141 55.3141 141.283 56.2228L143.498 56.8165C144.462 57.076 145.11 57.9193 145.11 58.915V63.0855C145.11 64.0812 144.462 64.9243 143.499 65.1836L141.283 65.7777C141 66.6864 140.632 67.5741 140.185 68.4262L141.332 70.4118C141.827 71.2764 141.69 72.33 140.99 73.0351L138.038 75.9838C137.334 76.6925 136.279 76.8313 135.413 76.3263L133.427 75.1816C132.58 75.6262 131.694 75.9939 130.782 76.2783L130.188 78.4945C129.93 79.4583 129.085 80.106 128.086 80.106V80.1057ZM118.566 73.5952C118.69 73.5952 118.815 73.6266 118.927 73.6895C119.905 74.2368 120.951 74.671 122.036 74.98C122.286 75.0511 122.48 75.2484 122.547 75.4994L123.248 78.1113C123.331 78.4263 123.594 78.6271 123.919 78.6271H128.086C128.411 78.6271 128.676 78.4247 128.759 78.1116L129.46 75.4961C129.528 75.2445 129.723 75.0469 129.973 74.976C131.052 74.671 132.097 74.2381 133.077 73.6893C133.305 73.5621 133.582 73.564 133.808 73.694L136.154 75.0469C136.436 75.211 136.763 75.1686 136.99 74.9399L139.943 71.9907C140.169 71.7628 140.212 71.4313 140.05 71.1488L138.698 68.8075C138.568 68.5821 138.566 68.3049 138.693 68.0776C139.244 67.0887 139.677 66.0432 139.98 64.9698C140.05 64.7189 140.248 64.5238 140.5 64.4563L143.115 63.7553C143.428 63.671 143.631 63.4079 143.631 63.0851V58.9146C143.631 58.5917 143.428 58.3285 143.115 58.2441L140.5 57.5435C140.248 57.476 140.051 57.2809 139.98 57.0299C139.677 55.9564 139.244 54.9108 138.693 53.9222C138.566 53.6948 138.568 53.4177 138.698 53.1923L140.051 50.849C140.212 50.5684 140.169 50.2367 139.94 50.0061L136.992 47.0616C136.763 46.831 136.436 46.7883 136.158 46.9509L133.808 48.3056C133.582 48.4359 133.305 48.4375 133.077 48.3103C132.101 47.7637 131.056 47.3294 129.971 47.0196C129.722 46.9483 129.528 46.7512 129.461 46.5004L128.76 43.8886C128.676 43.5751 128.411 43.3727 128.086 43.3727H123.919C123.594 43.3727 123.331 43.5736 123.249 43.8846L122.547 46.5005C122.48 46.7514 122.286 46.9486 122.036 47.0199C120.951 47.329 119.905 47.7631 118.927 48.3104C118.7 48.4376 118.422 48.436 118.197 48.3057L115.85 46.9527C115.568 46.7885 115.241 46.831 115.014 47.0598L112.066 50.0083C111.836 50.238 111.792 50.5687 111.954 50.8512L113.31 53.1958C113.44 53.4215 113.442 53.6993 113.315 53.9267C112.766 54.9069 112.332 55.9517 112.024 57.0319C111.953 57.282 111.755 57.4762 111.504 57.5435L108.889 58.2443C108.578 58.328 108.377 58.5911 108.377 58.9146V63.0851C108.377 63.4085 108.578 63.6718 108.89 63.7556L111.504 64.4563C111.755 64.5235 111.953 64.7178 112.024 64.9679C112.333 66.0525 112.767 67.0985 113.315 68.0766C113.442 68.3043 113.44 68.5821 113.309 68.8079L111.953 71.1513C111.793 71.4308 111.836 71.7616 112.066 71.9912L115.012 74.9378C115.241 75.1682 115.568 75.211 115.847 75.0484L118.197 73.6936C118.311 73.6278 118.439 73.5947 118.566 73.5947L118.566 73.5952Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M98.1315 64.1313C96.4048 64.1313 95 62.7265 95 60.9999C95 59.2732 96.4048 57.8684 98.1315 57.8684C99.8581 57.8684 101.263 59.2732 101.263 60.9999C101.263 62.7265 99.8581 64.1313 98.1315 64.1313ZM98.1315 59.3469C97.2201 59.3469 96.4785 60.0884 96.4785 60.9999C96.4785 61.9114 97.2199 62.6527 98.1315 62.6527C99.043 62.6527 99.7843 61.9113 99.7843 60.9999C99.7843 60.0885 99.0429 59.3469 98.1315 59.3469Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M108.348 79.3909H100.523V77.9122H108.042L112.491 73.4631L113.537 74.5085L108.871 79.1743C108.732 79.3129 108.544 79.3909 108.348 79.3909Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M98.1315 81.7831C96.4048 81.7831 95 80.3783 95 78.6516C95 76.925 96.4048 75.5203 98.1315 75.5203C99.8581 75.5203 101.263 76.925 101.263 78.6516C101.263 80.3783 99.8581 81.7831 98.1315 81.7831ZM98.1315 76.9988C97.2201 76.9988 96.4785 77.7402 96.4785 78.6516C96.4785 79.5631 97.2199 80.3046 98.1315 80.3046C99.043 80.3046 99.7843 79.5632 99.7843 78.6516C99.7843 77.7401 99.0429 76.9988 98.1315 76.9988Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M144.371 60.2607H151.478V61.7394H144.371V60.2607Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M125.264 35.5237H126.742V42.6338H125.264V35.5237Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M139.512 48.5371L138.467 47.4916L143.133 42.8259C143.271 42.6872 143.459 42.6094 143.655 42.6094H151.48V44.0879H143.961L139.512 48.5371Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M153.87 46.48C152.143 46.48 150.738 45.0753 150.738 43.3487C150.738 41.622 152.143 40.2173 153.87 40.2173C155.596 40.2173 157.001 41.622 157.001 43.3487C157.001 45.0753 155.596 46.48 153.87 46.48ZM153.87 41.6957C152.958 41.6957 152.217 42.4372 152.217 43.3487C152.217 44.2601 152.958 45.0016 153.87 45.0016C154.781 45.0016 155.523 44.2601 155.523 43.3487C155.523 42.4372 154.781 41.6957 153.87 41.6957Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M153.87 64.1313C152.143 64.1313 150.738 62.7265 150.738 60.9999C150.738 59.2732 152.143 57.8684 153.87 57.8684C155.596 57.8684 157.001 59.2732 157.001 60.9999C157.001 62.7265 155.596 64.1313 153.87 64.1313ZM153.87 59.3469C152.958 59.3469 152.217 60.0884 152.217 60.9999C152.217 61.9114 152.958 62.6527 153.87 62.6527C154.781 62.6527 155.523 61.9113 155.523 60.9999C155.523 60.0885 154.781 59.3469 153.87 59.3469Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M126.003 36.2627C124.276 36.2627 122.871 34.858 122.871 33.1314C122.871 31.4047 124.276 30 126.003 30C127.729 30 129.134 31.4047 129.134 33.1314C129.134 34.858 127.729 36.2627 126.003 36.2627ZM126.003 31.4784C125.091 31.4784 124.35 32.2199 124.35 33.1314C124.35 34.0428 125.091 34.7843 126.003 34.7843C126.914 34.7843 127.655 34.0428 127.655 33.1314C127.655 32.2199 126.914 31.4784 126.003 31.4784Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M151.48 79.3909H143.655C143.459 79.3909 143.271 79.3129 143.133 79.1743L138.467 74.5085L139.512 73.4631L143.961 77.9122H151.48V79.3909Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M153.87 81.7831C152.143 81.7831 150.738 80.3783 150.738 78.6516C150.738 76.925 152.143 75.5203 153.87 75.5203C155.596 75.5203 157.001 76.925 157.001 78.6516C157.001 80.3783 155.596 81.7831 153.87 81.7831ZM153.87 76.9988C152.958 76.9988 152.217 77.7402 152.217 78.6516C152.217 79.5631 152.958 80.3046 153.87 80.3046C154.781 80.3046 155.523 79.5632 155.523 78.6516C155.523 77.7401 154.781 76.9988 153.87 76.9988Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M126.002 72.4519C119.686 72.4519 114.547 67.3148 114.547 61.0004C114.547 54.686 119.686 49.5488 126.002 49.5488C132.318 49.5488 137.454 54.686 137.454 61.0004C137.454 67.3148 132.316 72.4519 126.002 72.4519ZM126.002 51.0274C120.501 51.0274 116.025 55.5012 116.025 61.0004C116.025 66.4996 120.501 70.9733 126.002 70.9733C131.503 70.9733 135.975 66.4994 135.975 61.0004C135.975 55.5013 131.501 51.0274 126.002 51.0274Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M125.264 79.3665H126.742V86.4765H125.264V79.3665Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        className="icns"
                                        d="M126.003 91.9999C124.276 91.9999 122.871 90.5952 122.871 88.8686C122.871 87.1419 124.276 85.7371 126.003 85.7371C127.729 85.7371 129.134 87.1419 129.134 88.8686C129.134 90.5952 127.729 91.9999 126.003 91.9999ZM126.003 87.2156C125.091 87.2156 124.35 87.957 124.35 88.8686C124.35 89.7801 125.091 90.5214 126.003 90.5214C126.914 90.5214 127.655 89.78 127.655 88.8686C127.655 87.9571 126.914 87.2156 126.003 87.2156Z"
                                        fill="#499A9A"
                                      />
                                      <path
                                        d="M130.726 67.6496H121.273C120.214 67.6496 119.352 66.7876 119.352 65.7282V56.2712C119.352 55.2118 120.214 54.3499 121.273 54.3499H130.726C131.786 54.3499 132.648 55.2118 132.648 56.2712V65.7282C132.648 66.7876 131.786 67.6496 130.726 67.6496ZM121.273 55.8284C121.033 55.8284 120.83 56.0311 120.83 56.2712V65.7282C120.83 65.9682 121.033 66.1711 121.273 66.1711H130.726C130.966 66.1711 131.169 65.9683 131.169 65.7282V56.2712C131.169 56.0312 130.967 55.8284 130.726 55.8284H121.273Z"
                                        fill="#082326"
                                      />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>Digital Supply Chain Enablement</h3>
                                <p>
                                  We connect your supply chain through cloud and
                                  analytics solutions, providing real-time visibility
                                  and seamless collaboration with partners.
                                </p>
                                <div className="ser-btn serbtn1">
                                  <a
                                    href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                    className="animated-svg-link1 animated-svg-link12"
                                  >
                                    Read More
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
                              <div className="service-item-header">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.9"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="#082326"
                                      />
                                      <line
                                        opacity="0.9"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="#082326"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="#082326"
                                      />
                                      <path
                                        className="icns"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M132.436 42.3324V44.8241C132.436 45.285 132.811 45.66 133.273 45.66C133.735 45.66 134.109 45.285 134.109 44.8241V40.3127C134.109 40.3005 134.104 40.2882 134.104 40.2746C134.104 40.2328 134.099 40.1923 134.088 40.1493C134.084 40.1222 134.073 40.0952 134.068 40.0681C134.059 40.0435 134.054 40.019 134.044 39.9944C134.028 39.9636 134.014 39.9366 133.998 39.9083C133.99 39.8887 133.979 39.8678 133.969 39.8493C133.905 39.7584 133.825 39.6797 133.735 39.6182C133.716 39.6035 133.69 39.5949 133.67 39.5813C133.646 39.5666 133.621 39.5518 133.59 39.5396C133.561 39.5297 133.536 39.5223 133.507 39.5137C133.482 39.5064 133.462 39.4965 133.437 39.4916C133.383 39.4806 133.327 39.4756 133.273 39.4756H128.759C128.301 39.4756 127.922 39.8506 127.922 40.3115C127.922 40.7737 128.301 41.1474 128.759 41.1474H131.252L125.385 47.0146L121.27 42.8978C120.94 42.5709 120.413 42.5709 120.085 42.8978L117.138 45.8443C116.816 46.1713 116.816 46.6999 117.138 47.0256C117.468 47.3526 117.995 47.3526 118.322 47.0256L120.677 44.6716L124.793 48.7884C124.957 48.9519 125.171 49.033 125.385 49.033C125.599 49.033 125.813 48.9519 125.978 48.7884L132.436 42.3324ZM150.53 77.887C150.69 78.0813 150.754 78.3369 150.705 78.5828C149.838 82.8151 146.071 85.887 141.741 85.887C136.7 85.887 132.599 81.785 132.599 76.7426C132.599 72.4157 135.67 68.6493 139.905 67.7827C140.148 67.7323 140.408 67.7962 140.601 67.9547C140.795 68.1133 140.905 68.3506 140.905 68.6013V77.5773H149.883C150.138 77.5797 150.371 77.6928 150.53 77.887ZM142.578 75.0721C142.578 75.533 142.957 75.908 143.414 75.908H149.884C150.138 75.908 150.371 75.7949 150.53 75.6006C150.69 75.4052 150.754 75.1495 150.705 74.9049C149.967 71.313 147.175 68.519 143.583 67.7839C143.339 67.7335 143.08 67.7974 142.886 67.956C142.692 68.1146 142.577 68.3518 142.577 68.6026V75.0721H142.578ZM153.327 76.7438C153.327 70.3555 148.132 65.1595 141.743 65.1595C135.358 65.1595 130.162 70.3555 130.162 76.7438C130.162 83.131 135.358 88.3282 141.743 88.3282C148.132 88.3282 153.327 83.131 153.327 76.7438ZM120.842 76.7438C120.842 70.3555 115.646 65.1595 109.257 65.1595C102.871 65.1595 97.6718 70.3555 97.6718 76.7438C97.6718 83.131 102.871 88.3282 109.257 88.3282C115.646 88.3282 120.842 83.131 120.842 76.7438ZM125.498 55.8418C119.113 55.8418 113.914 50.6458 113.914 44.2574C113.914 37.869 119.113 32.673 125.498 32.673C131.888 32.673 137.084 37.869 137.084 44.2574C137.085 50.6458 131.889 55.8418 125.498 55.8418ZM155 76.7438C155 84.0541 149.053 90 141.743 90C134.437 90 128.49 84.0529 128.49 76.7438C128.49 73.4974 129.664 70.5214 131.605 68.2141L125.499 65.1349L119.394 68.2141C121.34 70.5202 122.514 73.4974 122.514 76.7438C122.514 84.0541 116.566 90 109.257 90C101.946 90 96 84.0529 96 76.7438C96 69.4335 101.947 63.4877 109.257 63.4877C112.696 63.4877 115.826 64.8017 118.184 66.9529L124.663 63.6856V57.4853C117.742 57.0514 112.242 51.2862 112.242 44.2574C112.242 36.9471 118.19 31 125.499 31C132.811 31 138.757 36.9483 138.757 44.2574C138.757 51.2862 133.257 57.0514 126.335 57.4853V63.6856L132.82 66.9529C135.174 64.8017 138.308 63.4877 141.743 63.4877C149.053 63.4865 155 69.4335 155 76.7438ZM114.576 69.8392C115.039 69.8392 115.412 70.2141 115.412 70.6763V82.8102C115.412 83.2711 115.039 83.6473 114.576 83.6473C114.119 83.6473 113.739 83.2711 113.739 82.8102V70.6763C113.739 70.2141 114.119 69.8392 114.576 69.8392ZM111.032 72.6849C111.491 72.6849 111.87 73.0598 111.87 73.5208V82.8102C111.87 83.2711 111.491 83.6473 111.032 83.6473C110.57 83.6473 110.197 83.2711 110.197 82.8102V73.5208C110.197 73.0598 110.569 72.6849 111.032 72.6849ZM107.484 75.5306C107.946 75.5306 108.319 75.9055 108.319 76.3677V82.8102C108.319 83.2711 107.946 83.6473 107.484 83.6473C107.021 83.6473 106.648 83.2711 106.648 82.8102V76.3677C106.648 75.9055 107.021 75.5306 107.484 75.5306ZM104.772 79.2122V82.8102C104.772 83.2711 104.398 83.6473 103.936 83.6473C103.474 83.6473 103.1 83.2711 103.1 82.8102V79.2122C103.1 78.7512 103.474 78.3763 103.936 78.3763C104.398 78.3763 104.772 78.7512 104.772 79.2122Z"
                                        fill="#499A9A"
                                      />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>Data &amp; Analytics Strategy</h3>
                                <p>
                                  We turn data into a strategic asset, with analytics
                                  frameworks that deliver actionable insights, improve
                                  decision-making and unlock opportunities.
                                </p>
                                <div className="ser-btn serbtn1">
                                  <a
                                    href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                    className="animated-svg-link1 animated-svg-link12"
                                  >
                                    Read More
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
                              <div className="service-item-header">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.9"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="#082326"
                                      />
                                      <line
                                        opacity="0.9"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="#082326"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="#082326"
                                      />
                                      <path
                                        className="icns"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M141.278 80.8295C141.394 80.4882 141.766 80.3068 142.107 80.4234C142.447 80.5408 142.629 80.912 142.512 81.2526C141.166 85.1717 138.741 88.12 135.778 90.0849C132.905 91.9907 129.526 92.9657 126.14 92.9991C122.756 93.0325 119.361 92.1244 116.456 90.2641C113.484 88.3604 111.025 85.4639 109.613 81.5634C109.49 81.2256 109.664 80.8515 110.003 80.7292C110.34 80.6069 110.714 80.7811 110.837 81.1196C112.145 84.7315 114.416 87.4103 117.16 89.1675C119.848 90.8892 122.992 91.7297 126.13 91.6984C129.267 91.6672 132.397 90.764 135.059 88.9983C137.792 87.1863 140.032 84.4605 141.278 80.8295ZM148.41 66.2065C147.755 66.1546 147.142 66.3729 146.68 66.7668C146.218 67.1615 145.906 67.7333 145.855 68.3889C145.803 69.0446 146.021 69.6576 146.415 70.1191C146.809 70.5814 147.381 70.8935 148.036 70.9447C148.692 70.9967 149.304 70.7783 149.766 70.3844C150.228 69.9897 150.54 69.4179 150.592 68.763C150.643 68.1073 150.425 67.4943 150.031 67.0321C149.636 66.5699 149.065 66.2584 148.41 66.2065ZM145.833 65.7769C146.551 65.1647 147.5 64.8255 148.512 64.9051C149.524 64.9847 150.408 65.4683 151.02 66.1851C151.632 66.9027 151.971 67.8527 151.892 68.8647C151.812 69.8773 151.329 70.7627 150.612 71.3743C149.895 71.9866 148.945 72.3258 147.934 72.2461C146.922 72.1665 146.037 71.6829 145.425 70.9661C144.813 70.2486 144.474 69.2985 144.554 68.2865C144.634 67.2739 145.117 66.3892 145.833 65.7769ZM148.625 62.84V62.8385C148.843 62.8535 149.063 62.7596 149.199 62.5697L150.164 61.2257L151.354 61.6488L151.256 63.2794C151.235 63.5042 151.332 63.7339 151.53 63.8725C151.727 64.0112 151.909 64.1556 152.074 64.3049C152.239 64.4535 152.398 64.6157 152.549 64.7899C152.691 64.9634 152.92 65.0587 153.158 65.0203L154.791 64.7515L155.333 65.8936L154.134 66.9553C153.945 67.0982 153.84 67.3393 153.883 67.5896C153.925 67.8257 153.952 68.0568 153.963 68.2816C153.974 68.5091 153.972 68.7424 153.956 68.9778H153.957C153.942 69.1954 154.036 69.4151 154.226 69.5516L155.569 70.5166L155.146 71.7078L153.517 71.6089C153.292 71.5883 153.063 71.685 152.924 71.8827C152.785 72.0804 152.64 72.2625 152.491 72.4275C152.342 72.5924 152.18 72.751 152.007 72.9032C151.833 73.0454 151.738 73.2737 151.777 73.5119L152.045 75.1461L150.904 75.6887L149.843 74.4897C149.7 74.2999 149.459 74.1953 149.209 74.2387C148.973 74.28 148.742 74.3063 148.517 74.3184C148.289 74.3304 148.055 74.3276 147.819 74.3113V74.3127C147.603 74.2985 147.384 74.393 147.247 74.5815L146.283 75.9255L145.092 75.5024L145.19 73.8718C145.211 73.6471 145.114 73.4181 144.916 73.2787C144.719 73.14 144.537 72.9949 144.372 72.8456C144.207 72.697 144.049 72.5348 143.897 72.3613C143.755 72.1878 143.526 72.0925 143.289 72.1309L141.655 72.3997L141.113 71.2576L142.311 70.1959C142.501 70.053 142.606 69.8112 142.562 69.5616C142.521 69.3255 142.495 69.0944 142.483 68.8697C142.471 68.6421 142.473 68.4088 142.49 68.1735H142.488C142.503 67.9559 142.409 67.7361 142.22 67.5996L140.876 66.6346L141.3 65.4434L142.93 65.5423C143.154 65.5629 143.383 65.4662 143.523 65.2678C143.661 65.0701 143.805 64.888 143.955 64.723C144.103 64.5581 144.265 64.3995 144.44 64.2473C144.613 64.1051 144.708 63.8761 144.67 63.6386L144.402 62.0051L145.543 61.4625L146.605 62.6615C146.748 62.8513 146.988 62.9559 147.239 62.9125C147.475 62.8713 147.706 62.8442 147.93 62.8329C148.157 62.8208 148.39 62.8236 148.625 62.84ZM147.864 61.5315C148.026 61.5229 148.188 61.5201 148.349 61.5229L149.368 60.1021C149.526 59.8482 149.845 59.7288 150.138 59.8326L152.251 60.5835C152.518 60.6774 152.701 60.9398 152.684 61.2364L152.576 63.027C152.701 63.1251 152.824 63.2297 152.947 63.3406C153.067 63.4501 153.184 63.5625 153.295 63.6777L155.041 63.3904C155.328 63.3328 155.628 63.475 155.758 63.7516L156.721 65.7777C156.841 66.033 156.784 66.3466 156.563 66.5428L155.223 67.7297C155.242 67.889 155.256 68.0511 155.264 68.2154C155.273 68.3783 155.276 68.5404 155.273 68.7011L156.693 69.7216C156.947 69.8795 157.066 70.1981 156.963 70.4918L156.211 72.6052C156.117 72.8726 155.855 73.0561 155.559 73.039L153.769 72.9309C153.67 73.0554 153.566 73.1791 153.455 73.3014C153.347 73.4223 153.234 73.539 153.119 73.6499L153.406 75.3972C153.464 75.6837 153.322 75.9838 153.045 76.114L151.02 77.0776C150.765 77.1985 150.452 77.1416 150.255 76.9197L149.069 75.5792C148.91 75.5984 148.748 75.6119 148.584 75.6204C148.421 75.629 148.259 75.6318 148.098 75.629L147.078 77.0498C146.92 77.3037 146.602 77.4232 146.308 77.3193L144.196 76.5684C143.929 76.4738 143.745 76.2121 143.762 75.9156L143.87 74.1249C143.746 74.0261 143.622 73.9216 143.5 73.8113C143.379 73.7018 143.262 73.5895 143.152 73.475L141.405 73.7623C141.119 73.8199 140.819 73.6776 140.689 73.401L139.725 71.375L139.726 71.3743C139.606 71.119 139.662 70.8054 139.883 70.6091L141.223 69.4215C141.204 69.2622 141.19 69.1001 141.182 68.9358C141.173 68.7729 141.171 68.6108 141.173 68.4501L139.753 67.4303C139.499 67.2725 139.38 66.9539 139.484 66.6602L140.234 64.5467C140.328 64.2793 140.59 64.0958 140.887 64.1129L142.677 64.221C142.776 64.0965 142.88 63.9728 142.99 63.8505C143.1 63.7296 143.212 63.6137 143.327 63.502L143.04 61.7548C142.982 61.4682 143.125 61.1681 143.401 61.038L145.426 60.0751L145.427 60.0758C145.681 59.9549 145.995 60.0111 146.192 60.233L147.379 61.5734C147.537 61.5542 147.699 61.54 147.864 61.5315ZM131.216 50.8261C131.216 52.2668 130.633 53.5718 129.689 54.5162C128.746 55.4591 127.443 56.0422 126 56.0422C124.559 56.0422 123.254 55.4591 122.311 54.5162C121.367 53.5718 120.784 52.2668 120.784 50.8261C120.784 50.4655 121.076 50.1726 121.436 50.1726H130.563C130.923 50.1726 131.216 50.4648 131.216 50.8261ZM128.765 53.5924C129.328 53.0299 129.719 52.2974 129.857 51.4789H122.143C122.281 52.2974 122.672 53.0306 123.235 53.5924C123.943 54.3021 124.921 54.7409 126 54.7409C127.078 54.7409 128.056 54.3021 128.765 53.5924ZM121.719 67.372L119.506 66.1503C119.253 65.9903 118.915 66.0202 118.695 66.2406L116.535 68.4017L116.536 68.4024C116.336 68.6023 116.283 68.9173 116.426 69.1776L117.667 71.4276C117.549 71.6573 117.441 71.8898 117.344 72.1238C117.246 72.3606 117.158 72.6017 117.08 72.8456L114.676 73.5397C114.373 73.5959 114.143 73.8618 114.143 74.1818V77.2383H114.145C114.145 77.5213 114.332 77.7816 114.617 77.8634L117.08 78.5745C117.158 78.8184 117.246 79.0595 117.344 79.2963C117.441 79.531 117.549 79.7635 117.667 79.9925L116.445 82.207C116.285 82.4594 116.315 82.7979 116.535 83.0176L118.695 85.1788L118.696 85.1781C118.896 85.3779 119.211 85.4312 119.471 85.2883L121.719 84.0467C121.949 84.1647 122.181 84.2728 122.416 84.3695C122.652 84.4676 122.893 84.5558 123.137 84.6341L123.841 87.0725C123.91 87.3577 124.166 87.5696 124.473 87.5696L127.528 87.5689C127.811 87.5689 128.071 87.3826 128.153 87.0974L128.864 84.6333C129.107 84.5551 129.348 84.4669 129.585 84.3688C129.82 84.2714 130.052 84.164 130.282 84.0459L132.494 85.2677C132.747 85.4277 133.085 85.3978 133.305 85.1774L135.465 83.0162L135.464 83.0155C135.664 82.8157 135.717 82.5007 135.574 82.2404L134.333 79.9904C134.451 79.7607 134.559 79.5281 134.657 79.2934C134.755 79.0566 134.843 78.8156 134.921 78.5716L137.358 77.8676C137.643 77.7986 137.855 77.5419 137.855 77.2354L137.855 74.179C137.855 73.8959 137.668 73.6357 137.383 73.5539L134.92 72.8428C134.842 72.5988 134.754 72.3578 134.656 72.121C134.559 71.8863 134.451 71.6537 134.333 71.4248L135.554 69.2103C135.714 68.9578 135.684 68.6193 135.464 68.3996L133.304 66.2385L133.303 66.2392C133.104 66.0394 132.789 65.986 132.528 66.129L130.28 67.3706C130.051 67.2525 129.818 67.1445 129.584 67.0477C129.347 66.9496 129.106 66.8614 128.862 66.7832L128.168 64.3789C128.112 64.0745 127.846 63.8441 127.526 63.8441H124.471V63.8469C124.188 63.8469 123.928 64.0325 123.847 64.3184L123.136 66.7825C122.892 66.8607 122.651 66.9489 122.414 67.047C122.181 67.1459 121.949 67.254 121.719 67.372ZM122.91 68.2531C122.62 68.3726 122.343 68.507 122.076 68.6549C121.88 68.7857 121.62 68.8064 121.399 68.6848L119.271 67.51L117.804 68.9778L118.978 71.1069L118.977 71.1076C119.081 71.2982 119.088 71.5364 118.973 71.7391C118.815 72.0193 118.673 72.3123 118.547 72.6173C118.422 72.9188 118.316 73.2282 118.228 73.5432C118.17 73.7544 118.006 73.9308 117.78 73.9948L115.448 74.6682V76.7483L117.744 77.4111C117.971 77.4623 118.163 77.6337 118.228 77.8733C118.316 78.1883 118.422 78.4977 118.547 78.7992C118.666 79.0886 118.801 79.3667 118.949 79.6334C119.08 79.8289 119.1 80.0892 118.979 80.3104L117.805 82.4395L119.272 83.9073L121.4 82.7325L121.401 82.7339C121.591 82.6294 121.829 82.623 122.032 82.7375C122.311 82.8953 122.605 83.0383 122.91 83.1641C123.211 83.2886 123.52 83.3953 123.835 83.4827C124.046 83.541 124.223 83.7053 124.287 83.9315L124.96 86.2675H127.038L127.701 83.9677C127.753 83.7409 127.923 83.5489 128.163 83.4827C128.478 83.3953 128.787 83.2886 129.088 83.1641C129.377 83.0447 129.655 82.9103 129.922 82.7624C130.117 82.6315 130.378 82.6109 130.599 82.7325L132.727 83.9073L134.194 82.4395L133.02 80.3104L133.021 80.3097C132.917 80.1191 132.91 79.8808 133.025 79.6782C133.182 79.3987 133.325 79.105 133.451 78.7999C133.576 78.4984 133.682 78.1891 133.77 77.874C133.828 77.6628 133.992 77.4865 134.218 77.4225L136.552 76.7483V74.6697L134.254 74.0062C134.027 73.955 133.835 73.7836 133.77 73.5439C133.682 73.2289 133.575 72.9188 133.451 72.618C133.332 72.3286 133.197 72.0506 133.049 71.7846C132.919 71.5883 132.898 71.3288 133.02 71.1076L134.194 68.9785L132.727 67.5107L130.599 68.6855L130.598 68.6833C130.407 68.7879 130.169 68.7943 129.967 68.6798C129.687 68.5219 129.394 68.379 129.089 68.2531C128.787 68.1287 128.478 68.022 128.163 67.9345C127.952 67.8762 127.776 67.7119 127.712 67.4858L127.039 65.1533H124.96L124.297 67.451C124.246 67.6778 124.075 67.8698 123.835 67.9359C123.52 68.022 123.211 68.1287 122.91 68.2531ZM122.05 71.7576C120.96 72.8484 120.414 74.2792 120.414 75.7093C120.414 77.1394 120.959 78.5695 122.05 79.6604C123.141 80.7513 124.571 81.2974 126 81.2974C127.429 81.2974 128.859 80.752 129.949 79.6604C131.039 78.5688 131.585 77.1387 131.585 75.7093H131.582C131.582 74.2778 131.038 72.8477 129.949 71.7576C128.858 70.6667 127.428 70.1205 126 70.1205C124.57 70.1213 123.141 70.6667 122.05 71.7576ZM122.973 72.6813C123.809 71.8458 124.904 71.4276 126 71.4276C127.095 71.4276 128.19 71.8458 129.026 72.6813C129.864 73.5191 130.282 74.6149 130.282 75.7093H130.279C130.279 76.8052 129.861 77.9011 129.026 78.7373C128.19 79.5736 127.095 79.9918 126 79.9918C124.904 79.9918 123.809 79.5736 122.973 78.7373C122.137 77.9011 121.719 76.8052 121.719 75.7093C121.719 74.6135 122.137 73.5176 122.973 72.6813ZM103.963 66.2065C103.308 66.1546 102.695 66.3729 102.233 66.7668C101.771 67.1615 101.459 67.7333 101.408 68.3889C101.356 69.0446 101.574 69.6576 101.969 70.1191C102.363 70.5814 102.935 70.8935 103.59 70.9447C104.245 70.9967 104.858 70.7783 105.32 70.3844C105.782 69.9897 106.094 69.4179 106.145 68.763C106.197 68.1073 105.979 67.4943 105.585 67.0321C105.19 66.5699 104.618 66.2584 103.963 66.2065ZM101.386 65.7769C102.104 65.1647 103.053 64.8255 104.065 64.9051C105.077 64.9847 105.961 65.4683 106.573 66.1851C107.185 66.9027 107.524 67.8527 107.445 68.8647C107.365 69.8773 106.882 70.7627 106.165 71.3743C105.448 71.9866 104.499 72.3258 103.487 72.2461C102.475 72.1665 101.59 71.6829 100.978 70.9661C100.366 70.2486 100.027 69.2985 100.107 68.2865C100.187 67.2739 100.671 66.3892 101.386 65.7769ZM104.178 62.84V62.8385C104.396 62.8535 104.616 62.7596 104.752 62.5697L105.717 61.2257L106.907 61.6488L106.808 63.2794C106.788 63.5042 106.884 63.7339 107.083 63.8725C107.28 64.0112 107.462 64.1556 107.627 64.3049C107.792 64.4535 107.951 64.6157 108.103 64.7899C108.245 64.9634 108.474 65.0587 108.711 65.0203L110.344 64.7515L110.887 65.8936L109.688 66.9553C109.498 67.0982 109.394 67.3393 109.437 67.5896C109.478 67.8257 109.505 68.0568 109.517 68.2816C109.529 68.5091 109.526 68.7424 109.51 68.9778H109.511C109.496 69.1954 109.59 69.4151 109.78 69.5516L111.123 70.5166L110.7 71.7078L109.07 71.6089C108.846 71.5883 108.617 71.685 108.477 71.8827C108.339 72.0804 108.194 72.2625 108.045 72.4275C107.896 72.5924 107.734 72.751 107.56 72.9025C107.387 73.0447 107.292 73.2737 107.33 73.5112L107.599 75.1454L106.457 75.688L105.396 74.489C105.253 74.2992 105.012 74.1939 104.762 74.238C104.526 74.2792 104.295 74.3056 104.07 74.3176C103.842 74.3297 103.608 74.3269 103.372 74.3105V74.312C103.155 74.2977 102.937 74.3923 102.801 74.5808L101.836 75.9248L100.646 75.5017L100.745 73.8711C100.765 73.6463 100.668 73.4174 100.471 73.278C100.273 73.1393 100.091 72.9942 99.9264 72.8449C99.7614 72.6963 99.6029 72.5341 99.4515 72.3606C99.3094 72.1871 99.0805 72.0918 98.8431 72.1302L97.2082 72.3997L96.6659 71.2576L97.8643 70.1959C98.0541 70.053 98.1586 69.8112 98.1152 69.5616C98.074 69.3255 98.0477 69.0944 98.0356 68.8697C98.0242 68.6421 98.0264 68.4088 98.0427 68.1735H98.0413C98.0562 67.9559 97.9624 67.7361 97.7726 67.5996L96.4292 66.6346L96.8521 65.4434L98.482 65.5423C98.7066 65.5629 98.9355 65.4662 99.0748 65.2678C99.2134 65.0701 99.3584 64.888 99.5077 64.723C99.657 64.5581 99.8183 64.3995 99.9925 64.2473C100.166 64.1051 100.261 63.8761 100.223 63.6386L99.9541 62.0051L101.096 61.4625L102.158 62.6615C102.3 62.8513 102.541 62.9559 102.792 62.9125C103.028 62.8713 103.259 62.8442 103.483 62.8329C103.711 62.8208 103.943 62.8236 104.178 62.84ZM103.416 61.5315C103.579 61.5229 103.741 61.5201 103.902 61.5229L104.921 60.1021C105.079 59.8482 105.397 59.7288 105.691 59.8326L107.804 60.5835C108.071 60.6774 108.254 60.9398 108.237 61.2364L108.129 63.027C108.254 63.1251 108.377 63.2297 108.499 63.3406C108.62 63.4501 108.737 63.5625 108.848 63.6777L110.594 63.3904C110.881 63.3328 111.181 63.475 111.311 63.7516L112.274 65.7777H112.273C112.394 66.033 112.338 66.3466 112.116 66.5428L110.776 67.7297C110.795 67.889 110.809 68.0511 110.817 68.2154C110.826 68.3783 110.829 68.5404 110.826 68.7011L112.246 69.7216C112.5 69.8795 112.619 70.1981 112.516 70.4918L111.765 72.6052C111.67 72.8726 111.409 73.0561 111.112 73.039L109.322 72.9309C109.224 73.0554 109.119 73.1791 109.008 73.3014C108.899 73.4223 108.787 73.539 108.672 73.6499L108.959 75.3972C109.017 75.6837 108.875 75.9838 108.598 76.114L106.573 77.0776L106.572 77.0768C106.318 77.1977 106.004 77.1416 105.808 76.9197L104.622 75.5792C104.463 75.5984 104.301 75.6119 104.136 75.6204C103.974 75.629 103.812 75.6318 103.651 75.629L102.631 77.0498C102.473 77.3037 102.155 77.4232 101.861 77.3193L99.7487 76.5684C99.4814 76.4738 99.298 76.2121 99.3151 75.9156L99.4231 74.1249C99.2987 74.0261 99.175 73.9216 99.0528 73.8113C98.9319 73.7018 98.8154 73.5895 98.7045 73.475L96.958 73.7623C96.6715 73.8199 96.3716 73.6776 96.2415 73.401L95.2784 71.3743L95.2791 71.3736C95.1589 71.1183 95.2144 70.8047 95.4362 70.6084L96.776 69.4208C96.7568 69.2615 96.7433 69.0994 96.7348 68.9351C96.7263 68.7722 96.7234 68.6101 96.7263 68.4494L95.3068 67.4296C95.053 67.2717 94.9336 66.9532 95.0374 66.6595L95.788 64.546C95.8825 64.2786 96.1441 64.0951 96.4405 64.1122L98.2304 64.2203C98.3292 64.0958 98.4329 63.9721 98.5438 63.8498C98.6533 63.7289 98.7656 63.613 98.88 63.5013L98.5936 61.7541C98.5367 61.4675 98.6782 61.1674 98.9547 61.0372L100.98 60.0744C101.235 59.9535 101.548 60.0104 101.745 60.2322L102.932 61.5727C103.09 61.5542 103.252 61.54 103.416 61.5315ZM138.219 29C137.304 29 136.476 29.3712 135.876 29.9714C135.276 30.5716 134.905 31.4001 134.905 32.316C134.905 33.2312 135.276 34.0604 135.876 34.6606C136.476 35.2608 137.304 35.632 138.219 35.632C138.935 35.632 139.597 35.4052 140.139 35.019C141.4 36.4513 142.25 37.9596 142.688 39.5418C143.128 41.1312 143.156 42.8081 142.772 44.5724C142.485 44.5667 142.199 44.5852 141.918 44.6279V43.8371C141.918 41.9803 141.158 40.2921 139.936 39.0689C138.713 37.8458 137.026 37.0863 135.17 37.0863H116.829C114.973 37.0863 113.285 37.8451 112.063 39.0689C110.84 40.2921 110.081 41.9803 110.081 43.8371V44.6279C109.799 44.5859 109.513 44.5674 109.227 44.5724C108.842 42.8081 108.871 41.1312 109.31 39.5418C109.748 37.9596 110.598 36.452 111.86 35.019C112.402 35.4052 113.064 35.632 113.78 35.632C114.695 35.632 115.524 35.2608 116.124 34.6606C116.724 34.0604 117.095 33.232 117.095 32.316C117.095 31.4008 116.724 30.5716 116.124 29.9714C115.524 29.3712 114.696 29 113.78 29C112.865 29 112.036 29.3712 111.437 29.9714C110.837 30.5716 110.466 31.4001 110.466 32.316C110.466 32.9582 110.648 33.5577 110.965 34.0654C109.527 35.6733 108.558 37.3835 108.056 39.1948C107.565 40.9655 107.526 42.8216 107.936 44.763C107.551 44.8711 107.173 45.0268 106.811 45.2309C105.577 45.9264 104.741 47.0578 104.388 48.3243C104.035 49.5887 104.164 50.9875 104.858 52.2206C105.472 53.3115 106.413 54.0973 107.487 54.5133C108.303 54.8291 109.196 54.9307 110.082 54.7899V58.6898C110.082 59.0503 110.374 59.3426 110.734 59.3426H141.266C141.626 59.3426 141.918 59.0503 141.918 58.6898V54.7899C142.804 54.9307 143.697 54.8291 144.513 54.5133C145.587 54.0973 146.528 53.3115 147.142 52.2206C147.836 50.9875 147.965 49.5887 147.612 48.3243C147.259 47.0578 146.423 45.9264 145.188 45.2309C144.826 45.0268 144.448 44.8718 144.063 44.763C144.474 42.8216 144.434 40.9655 143.943 39.1948C143.442 37.3835 142.473 35.674 141.035 34.0654C141.35 33.5577 141.533 32.9582 141.533 32.316C141.533 31.4008 141.162 30.5716 140.562 29.9714C139.963 29.3712 139.135 29 138.219 29ZM139.64 30.8945C140.003 31.2578 140.229 31.7606 140.229 32.3153C140.229 32.87 140.004 33.3728 139.64 33.7361C139.277 34.0995 138.774 34.3243 138.22 34.3243C137.665 34.3243 137.163 34.0995 136.8 33.7361C136.436 33.3728 136.212 32.87 136.212 32.3153C136.212 31.7606 136.436 31.2578 136.8 30.8945C137.163 30.5311 137.665 30.3056 138.22 30.3056C138.774 30.3056 139.276 30.5311 139.64 30.8945ZM115.2 30.8945C115.564 31.2578 115.789 31.7606 115.789 32.3153C115.789 32.87 115.564 33.3728 115.201 33.7361C114.838 34.0995 114.335 34.3243 113.781 34.3243C113.226 34.3243 112.724 34.0995 112.361 33.7361C111.997 33.3728 111.772 32.87 111.772 32.3153C111.772 31.7606 111.997 31.2578 112.361 30.8945C112.724 30.5311 113.226 30.3056 113.781 30.3056C114.335 30.3056 114.837 30.5311 115.2 30.8945ZM133.605 42.9012C134.448 42.9012 135.212 43.2433 135.764 43.7958C136.316 44.3484 136.658 45.1121 136.658 45.9555C136.658 46.7989 136.316 47.5627 135.764 48.1153C135.211 48.6678 134.448 49.0099 133.605 49.0099C132.762 49.0099 131.999 48.6678 131.447 48.1153C130.894 47.5627 130.552 46.7989 130.552 45.9555C130.552 45.1121 130.894 44.3484 131.447 43.7958C131.999 43.2433 132.762 42.9012 133.605 42.9012ZM134.841 44.7196C135.157 45.036 135.353 45.4727 135.353 45.9555C135.353 46.4384 135.157 46.875 134.841 47.1915C134.524 47.5079 134.088 47.7035 133.605 47.7035C133.123 47.7035 132.686 47.5079 132.37 47.1915C132.054 46.875 131.858 46.4384 131.858 45.9555C131.858 45.4727 132.054 45.0353 132.37 44.7196C132.686 44.4031 133.123 44.2076 133.605 44.2076C134.088 44.2076 134.524 44.4031 134.841 44.7196ZM118.642 42.9012C119.485 42.9012 120.248 43.2433 120.801 43.7958C121.353 44.3484 121.695 45.1121 121.695 45.9555C121.695 46.7989 121.353 47.5627 120.801 48.1153C120.248 48.6678 119.485 49.0099 118.642 49.0099C117.799 49.0099 117.036 48.6678 116.483 48.1153C115.931 47.5627 115.589 46.7989 115.589 45.9555C115.589 45.1121 115.931 44.3484 116.483 43.7958C117.036 43.2433 117.799 42.9012 118.642 42.9012ZM119.877 44.7196C120.194 45.036 120.389 45.4727 120.389 45.9555C120.389 46.4384 120.194 46.875 119.877 47.1915C119.561 47.5079 119.125 47.7035 118.642 47.7035C118.159 47.7035 117.723 47.5079 117.407 47.1915C117.09 46.875 116.895 46.4384 116.895 45.9555C116.895 45.4727 117.09 45.0353 117.407 44.7196C117.723 44.4031 118.159 44.2076 118.642 44.2076C119.125 44.2076 119.561 44.4031 119.877 44.7196ZM110.082 45.9491V53.4644C109.36 53.6208 108.623 53.5561 107.956 53.298C107.157 52.9886 106.456 52.4012 105.995 51.582C105.476 50.6597 105.379 49.6143 105.643 48.6706C105.906 47.7291 106.528 46.8871 107.449 46.368C107.885 46.1219 108.347 45.9712 108.809 45.9079C109.235 45.8503 109.665 45.8652 110.082 45.9491ZM141.918 53.4651V45.9491C142.334 45.8652 142.765 45.8496 143.191 45.9079C143.654 45.9712 144.115 46.1219 144.551 46.368C145.472 46.8871 146.095 47.7284 146.358 48.6706C146.622 49.6143 146.525 50.6597 146.005 51.582C145.544 52.4012 144.843 52.9894 144.045 53.298C143.377 53.5568 142.64 53.6216 141.918 53.4651ZM135.17 38.3912H116.829C115.333 38.3912 113.973 39.0042 112.986 39.9913C111.999 40.9783 111.387 42.3394 111.387 43.8357V58.0356H140.613V43.8357C140.613 42.3394 140 40.9783 139.013 39.9913C138.027 39.0042 136.666 38.3912 135.17 38.3912Z"
                                        fill="#499A9A"
                                      />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>Intelligent Automation</h3>
                                <p>
                                  We deploy RPA and AI-driven automation solutions
                                  that streamline operations, reduce manual effort and
                                  improve accuracy.
                                </p>
                                <div className="ser-btn serbtn1">
                                  <a
                                    href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                    className="animated-svg-link1 animated-svg-link12"
                                  >
                                    Read More
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
                              <div className="service-item-header">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.9"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="#082326"
                                      />
                                      <line
                                        opacity="0.9"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="#082326"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="#082326"
                                      />
                                      <path
                                        className="icns"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M141.278 80.8295C141.394 80.4882 141.766 80.3068 142.107 80.4234C142.447 80.5408 142.629 80.912 142.512 81.2526C141.166 85.1717 138.741 88.12 135.778 90.0849C132.905 91.9907 129.526 92.9657 126.14 92.9991C122.756 93.0325 119.361 92.1244 116.456 90.2641C113.484 88.3604 111.025 85.4639 109.613 81.5634C109.49 81.2256 109.664 80.8515 110.003 80.7292C110.34 80.6069 110.714 80.7811 110.837 81.1196C112.145 84.7315 114.416 87.4103 117.16 89.1675C119.848 90.8892 122.992 91.7297 126.13 91.6984C129.267 91.6672 132.397 90.764 135.059 88.9983C137.792 87.1863 140.032 84.4605 141.278 80.8295ZM148.41 66.2065C147.755 66.1546 147.142 66.3729 146.68 66.7668C146.218 67.1615 145.906 67.7333 145.855 68.3889C145.803 69.0446 146.021 69.6576 146.415 70.1191C146.809 70.5814 147.381 70.8935 148.036 70.9447C148.692 70.9967 149.304 70.7783 149.766 70.3844C150.228 69.9897 150.54 69.4179 150.592 68.763C150.643 68.1073 150.425 67.4943 150.031 67.0321C149.636 66.5699 149.065 66.2584 148.41 66.2065ZM145.833 65.7769C146.551 65.1647 147.5 64.8255 148.512 64.9051C149.524 64.9847 150.408 65.4683 151.02 66.1851C151.632 66.9027 151.971 67.8527 151.892 68.8647C151.812 69.8773 151.329 70.7627 150.612 71.3743C149.895 71.9866 148.945 72.3258 147.934 72.2461C146.922 72.1665 146.037 71.6829 145.425 70.9661C144.813 70.2486 144.474 69.2985 144.554 68.2865C144.634 67.2739 145.117 66.3892 145.833 65.7769ZM148.625 62.84V62.8385C148.843 62.8535 149.063 62.7596 149.199 62.5697L150.164 61.2257L151.354 61.6488L151.256 63.2794C151.235 63.5042 151.332 63.7339 151.53 63.8725C151.727 64.0112 151.909 64.1556 152.074 64.3049C152.239 64.4535 152.398 64.6157 152.549 64.7899C152.691 64.9634 152.92 65.0587 153.158 65.0203L154.791 64.7515L155.333 65.8936L154.134 66.9553C153.945 67.0982 153.84 67.3393 153.883 67.5896C153.925 67.8257 153.952 68.0568 153.963 68.2816C153.974 68.5091 153.972 68.7424 153.956 68.9778H153.957C153.942 69.1954 154.036 69.4151 154.226 69.5516L155.569 70.5166L155.146 71.7078L153.517 71.6089C153.292 71.5883 153.063 71.685 152.924 71.8827C152.785 72.0804 152.64 72.2625 152.491 72.4275C152.342 72.5924 152.18 72.751 152.007 72.9032C151.833 73.0454 151.738 73.2737 151.777 73.5119L152.045 75.1461L150.904 75.6887L149.843 74.4897C149.7 74.2999 149.459 74.1953 149.209 74.2387C148.973 74.28 148.742 74.3063 148.517 74.3184C148.289 74.3304 148.055 74.3276 147.819 74.3113V74.3127C147.603 74.2985 147.384 74.393 147.247 74.5815L146.283 75.9255L145.092 75.5024L145.19 73.8718C145.211 73.6471 145.114 73.4181 144.916 73.2787C144.719 73.14 144.537 72.9949 144.372 72.8456C144.207 72.697 144.049 72.5348 143.897 72.3613C143.755 72.1878 143.526 72.0925 143.289 72.1309L141.655 72.3997L141.113 71.2576L142.311 70.1959C142.501 70.053 142.606 69.8112 142.562 69.5616C142.521 69.3255 142.495 69.0944 142.483 68.8697C142.471 68.6421 142.473 68.4088 142.49 68.1735H142.488C142.503 67.9559 142.409 67.7361 142.22 67.5996L140.876 66.6346L141.3 65.4434L142.93 65.5423C143.154 65.5629 143.383 65.4662 143.523 65.2678C143.661 65.0701 143.805 64.888 143.955 64.723C144.103 64.5581 144.265 64.3995 144.44 64.2473C144.613 64.1051 144.708 63.8761 144.67 63.6386L144.402 62.0051L145.543 61.4625L146.605 62.6615C146.748 62.8513 146.988 62.9559 147.239 62.9125C147.475 62.8713 147.706 62.8442 147.93 62.8329C148.157 62.8208 148.39 62.8236 148.625 62.84ZM147.864 61.5315C148.026 61.5229 148.188 61.5201 148.349 61.5229L149.368 60.1021C149.526 59.8482 149.845 59.7288 150.138 59.8326L152.251 60.5835C152.518 60.6774 152.701 60.9398 152.684 61.2364L152.576 63.027C152.701 63.1251 152.824 63.2297 152.947 63.3406C153.067 63.4501 153.184 63.5625 153.295 63.6777L155.041 63.3904C155.328 63.3328 155.628 63.475 155.758 63.7516L156.721 65.7777C156.841 66.033 156.784 66.3466 156.563 66.5428L155.223 67.7297C155.242 67.889 155.256 68.0511 155.264 68.2154C155.273 68.3783 155.276 68.5404 155.273 68.7011L156.693 69.7216C156.947 69.8795 157.066 70.1981 156.963 70.4918L156.211 72.6052C156.117 72.8726 155.855 73.0561 155.559 73.039L153.769 72.9309C153.67 73.0554 153.566 73.1791 153.455 73.3014C153.347 73.4223 153.234 73.539 153.119 73.6499L153.406 75.3972C153.464 75.6837 153.322 75.9838 153.045 76.114L151.02 77.0776C150.765 77.1985 150.452 77.1416 150.255 76.9197L149.069 75.5792C148.91 75.5984 148.748 75.6119 148.584 75.6204C148.421 75.629 148.259 75.6318 148.098 75.629L147.078 77.0498C146.92 77.3037 146.602 77.4232 146.308 77.3193L144.196 76.5684C143.929 76.4738 143.745 76.2121 143.762 75.9156L143.87 74.1249C143.746 74.0261 143.622 73.9216 143.5 73.8113C143.379 73.7018 143.262 73.5895 143.152 73.475L141.405 73.7623C141.119 73.8199 140.819 73.6776 140.689 73.401L139.725 71.375L139.726 71.3743C139.606 71.119 139.662 70.8054 139.883 70.6091L141.223 69.4215C141.204 69.2622 141.19 69.1001 141.182 68.9358C141.173 68.7729 141.171 68.6108 141.173 68.4501L139.753 67.4303C139.499 67.2725 139.38 66.9539 139.484 66.6602L140.234 64.5467C140.328 64.2793 140.59 64.0958 140.887 64.1129L142.677 64.221C142.776 64.0965 142.88 63.9728 142.99 63.8505C143.1 63.7296 143.212 63.6137 143.327 63.502L143.04 61.7548C142.982 61.4682 143.125 61.1681 143.401 61.038L145.426 60.0751L145.427 60.0758C145.681 59.9549 145.995 60.0111 146.192 60.233L147.379 61.5734C147.537 61.5542 147.699 61.54 147.864 61.5315ZM131.216 50.8261C131.216 52.2668 130.633 53.5718 129.689 54.5162C128.746 55.4591 127.443 56.0422 126 56.0422C124.559 56.0422 123.254 55.4591 122.311 54.5162C121.367 53.5718 120.784 52.2668 120.784 50.8261C120.784 50.4655 121.076 50.1726 121.436 50.1726H130.563C130.923 50.1726 131.216 50.4648 131.216 50.8261ZM128.765 53.5924C129.328 53.0299 129.719 52.2974 129.857 51.4789H122.143C122.281 52.2974 122.672 53.0306 123.235 53.5924C123.943 54.3021 124.921 54.7409 126 54.7409C127.078 54.7409 128.056 54.3021 128.765 53.5924ZM121.719 67.372L119.506 66.1503C119.253 65.9903 118.915 66.0202 118.695 66.2406L116.535 68.4017L116.536 68.4024C116.336 68.6023 116.283 68.9173 116.426 69.1776L117.667 71.4276C117.549 71.6573 117.441 71.8898 117.344 72.1238C117.246 72.3606 117.158 72.6017 117.08 72.8456L114.676 73.5397C114.373 73.5959 114.143 73.8618 114.143 74.1818V77.2383H114.145C114.145 77.5213 114.332 77.7816 114.617 77.8634L117.08 78.5745C117.158 78.8184 117.246 79.0595 117.344 79.2963C117.441 79.531 117.549 79.7635 117.667 79.9925L116.445 82.207C116.285 82.4594 116.315 82.7979 116.535 83.0176L118.695 85.1788L118.696 85.1781C118.896 85.3779 119.211 85.4312 119.471 85.2883L121.719 84.0467C121.949 84.1647 122.181 84.2728 122.416 84.3695C122.652 84.4676 122.893 84.5558 123.137 84.6341L123.841 87.0725C123.91 87.3577 124.166 87.5696 124.473 87.5696L127.528 87.5689C127.811 87.5689 128.071 87.3826 128.153 87.0974L128.864 84.6333C129.107 84.5551 129.348 84.4669 129.585 84.3688C129.82 84.2714 130.052 84.164 130.282 84.0459L132.494 85.2677C132.747 85.4277 133.085 85.3978 133.305 85.1774L135.465 83.0162L135.464 83.0155C135.664 82.8157 135.717 82.5007 135.574 82.2404L134.333 79.9904C134.451 79.7607 134.559 79.5281 134.657 79.2934C134.755 79.0566 134.843 78.8156 134.921 78.5716L137.358 77.8676C137.643 77.7986 137.855 77.5419 137.855 77.2354L137.855 74.179C137.855 73.8959 137.668 73.6357 137.383 73.5539L134.92 72.8428C134.842 72.5988 134.754 72.3578 134.656 72.121C134.559 71.8863 134.451 71.6537 134.333 71.4248L135.554 69.2103C135.714 68.9578 135.684 68.6193 135.464 68.3996L133.304 66.2385L133.303 66.2392C133.104 66.0394 132.789 65.986 132.528 66.129L130.28 67.3706C130.051 67.2525 129.818 67.1445 129.584 67.0477C129.347 66.9496 129.106 66.8614 128.862 66.7832L128.168 64.3789C128.112 64.0745 127.846 63.8441 127.526 63.8441H124.471V63.8469C124.188 63.8469 123.928 64.0325 123.847 64.3184L123.136 66.7825C122.892 66.8607 122.651 66.9489 122.414 67.047C122.181 67.1459 121.949 67.254 121.719 67.372ZM122.91 68.2531C122.62 68.3726 122.343 68.507 122.076 68.6549C121.88 68.7857 121.62 68.8064 121.399 68.6848L119.271 67.51L117.804 68.9778L118.978 71.1069L118.977 71.1076C119.081 71.2982 119.088 71.5364 118.973 71.7391C118.815 72.0193 118.673 72.3123 118.547 72.6173C118.422 72.9188 118.316 73.2282 118.228 73.5432C118.17 73.7544 118.006 73.9308 117.78 73.9948L115.448 74.6682V76.7483L117.744 77.4111C117.971 77.4623 118.163 77.6337 118.228 77.8733C118.316 78.1883 118.422 78.4977 118.547 78.7992C118.666 79.0886 118.801 79.3667 118.949 79.6334C119.08 79.8289 119.1 80.0892 118.979 80.3104L117.805 82.4395L119.272 83.9073L121.4 82.7325L121.401 82.7339C121.591 82.6294 121.829 82.623 122.032 82.7375C122.311 82.8953 122.605 83.0383 122.91 83.1641C123.211 83.2886 123.52 83.3953 123.835 83.4827C124.046 83.541 124.223 83.7053 124.287 83.9315L124.96 86.2675H127.038L127.701 83.9677C127.753 83.7409 127.923 83.5489 128.163 83.4827C128.478 83.3953 128.787 83.2886 129.088 83.1641C129.377 83.0447 129.655 82.9103 129.922 82.7624C130.117 82.6315 130.378 82.6109 130.599 82.7325L132.727 83.9073L134.194 82.4395L133.02 80.3104L133.021 80.3097C132.917 80.1191 132.91 79.8808 133.025 79.6782C133.182 79.3987 133.325 79.105 133.451 78.7999C133.576 78.4984 133.682 78.1891 133.77 77.874C133.828 77.6628 133.992 77.4865 134.218 77.4225L136.552 76.7483V74.6697L134.254 74.0062C134.027 73.955 133.835 73.7836 133.77 73.5439C133.682 73.2289 133.575 72.9188 133.451 72.618C133.332 72.3286 133.197 72.0506 133.049 71.7846C132.919 71.5883 132.898 71.3288 133.02 71.1076L134.194 68.9785L132.727 67.5107L130.599 68.6855L130.598 68.6833C130.407 68.7879 130.169 68.7943 129.967 68.6798C129.687 68.5219 129.394 68.379 129.089 68.2531C128.787 68.1287 128.478 68.022 128.163 67.9345C127.952 67.8762 127.776 67.7119 127.712 67.4858L127.039 65.1533H124.96L124.297 67.451C124.246 67.6778 124.075 67.8698 123.835 67.9359C123.52 68.022 123.211 68.1287 122.91 68.2531ZM122.05 71.7576C120.96 72.8484 120.414 74.2792 120.414 75.7093C120.414 77.1394 120.959 78.5695 122.05 79.6604C123.141 80.7513 124.571 81.2974 126 81.2974C127.429 81.2974 128.859 80.752 129.949 79.6604C131.039 78.5688 131.585 77.1387 131.585 75.7093H131.582C131.582 74.2778 131.038 72.8477 129.949 71.7576C128.858 70.6667 127.428 70.1205 126 70.1205C124.57 70.1213 123.141 70.6667 122.05 71.7576ZM122.973 72.6813C123.809 71.8458 124.904 71.4276 126 71.4276C127.095 71.4276 128.19 71.8458 129.026 72.6813C129.864 73.5191 130.282 74.6149 130.282 75.7093H130.279C130.279 76.8052 129.861 77.9011 129.026 78.7373C128.19 79.5736 127.095 79.9918 126 79.9918C124.904 79.9918 123.809 79.5736 122.973 78.7373C122.137 77.9011 121.719 76.8052 121.719 75.7093C121.719 74.6135 122.137 73.5176 122.973 72.6813ZM103.963 66.2065C103.308 66.1546 102.695 66.3729 102.233 66.7668C101.771 67.1615 101.459 67.7333 101.408 68.3889C101.356 69.0446 101.574 69.6576 101.969 70.1191C102.363 70.5814 102.935 70.8935 103.59 70.9447C104.245 70.9967 104.858 70.7783 105.32 70.3844C105.782 69.9897 106.094 69.4179 106.145 68.763C106.197 68.1073 105.979 67.4943 105.585 67.0321C105.19 66.5699 104.618 66.2584 103.963 66.2065ZM101.386 65.7769C102.104 65.1647 103.053 64.8255 104.065 64.9051C105.077 64.9847 105.961 65.4683 106.573 66.1851C107.185 66.9027 107.524 67.8527 107.445 68.8647C107.365 69.8773 106.882 70.7627 106.165 71.3743C105.448 71.9866 104.499 72.3258 103.487 72.2461C102.475 72.1665 101.59 71.6829 100.978 70.9661C100.366 70.2486 100.027 69.2985 100.107 68.2865C100.187 67.2739 100.671 66.3892 101.386 65.7769ZM104.178 62.84V62.8385C104.396 62.8535 104.616 62.7596 104.752 62.5697L105.717 61.2257L106.907 61.6488L106.808 63.2794C106.788 63.5042 106.884 63.7339 107.083 63.8725C107.28 64.0112 107.462 64.1556 107.627 64.3049C107.792 64.4535 107.951 64.6157 108.103 64.7899C108.245 64.9634 108.474 65.0587 108.711 65.0203L110.344 64.7515L110.887 65.8936L109.688 66.9553C109.498 67.0982 109.394 67.3393 109.437 67.5896C109.478 67.8257 109.505 68.0568 109.517 68.2816C109.529 68.5091 109.526 68.7424 109.51 68.9778H109.511C109.496 69.1954 109.59 69.4151 109.78 69.5516L111.123 70.5166L110.7 71.7078L109.07 71.6089C108.846 71.5883 108.617 71.685 108.477 71.8827C108.339 72.0804 108.194 72.2625 108.045 72.4275C107.896 72.5924 107.734 72.751 107.56 72.9025C107.387 73.0447 107.292 73.2737 107.33 73.5112L107.599 75.1454L106.457 75.688L105.396 74.489C105.253 74.2992 105.012 74.1939 104.762 74.238C104.526 74.2792 104.295 74.3056 104.07 74.3176C103.842 74.3297 103.608 74.3269 103.372 74.3105V74.312C103.155 74.2977 102.937 74.3923 102.801 74.5808L101.836 75.9248L100.646 75.5017L100.745 73.8711C100.765 73.6463 100.668 73.4174 100.471 73.278C100.273 73.1393 100.091 72.9942 99.9264 72.8449C99.7614 72.6963 99.6029 72.5341 99.4515 72.3606C99.3094 72.1871 99.0805 72.0918 98.8431 72.1302L97.2082 72.3997L96.6659 71.2576L97.8643 70.1959C98.0541 70.053 98.1586 69.8112 98.1152 69.5616C98.074 69.3255 98.0477 69.0944 98.0356 68.8697C98.0242 68.6421 98.0264 68.4088 98.0427 68.1735H98.0413C98.0562 67.9559 97.9624 67.7361 97.7726 67.5996L96.4292 66.6346L96.8521 65.4434L98.482 65.5423C98.7066 65.5629 98.9355 65.4662 99.0748 65.2678C99.2134 65.0701 99.3584 64.888 99.5077 64.723C99.657 64.5581 99.8183 64.3995 99.9925 64.2473C100.166 64.1051 100.261 63.8761 100.223 63.6386L99.9541 62.0051L101.096 61.4625L102.158 62.6615C102.3 62.8513 102.541 62.9559 102.792 62.9125C103.028 62.8713 103.259 62.8442 103.483 62.8329C103.711 62.8208 103.943 62.8236 104.178 62.84ZM103.416 61.5315C103.579 61.5229 103.741 61.5201 103.902 61.5229L104.921 60.1021C105.079 59.8482 105.397 59.7288 105.691 59.8326L107.804 60.5835C108.071 60.6774 108.254 60.9398 108.237 61.2364L108.129 63.027C108.254 63.1251 108.377 63.2297 108.499 63.3406C108.62 63.4501 108.737 63.5625 108.848 63.6777L110.594 63.3904C110.881 63.3328 111.181 63.475 111.311 63.7516L112.274 65.7777H112.273C112.394 66.033 112.338 66.3466 112.116 66.5428L110.776 67.7297C110.795 67.889 110.809 68.0511 110.817 68.2154C110.826 68.3783 110.829 68.5404 110.826 68.7011L112.246 69.7216C112.5 69.8795 112.619 70.1981 112.516 70.4918L111.765 72.6052C111.67 72.8726 111.409 73.0561 111.112 73.039L109.322 72.9309C109.224 73.0554 109.119 73.1791 109.008 73.3014C108.899 73.4223 108.787 73.539 108.672 73.6499L108.959 75.3972C109.017 75.6837 108.875 75.9838 108.598 76.114L106.573 77.0776L106.572 77.0768C106.318 77.1977 106.004 77.1416 105.808 76.9197L104.622 75.5792C104.463 75.5984 104.301 75.6119 104.136 75.6204C103.974 75.629 103.812 75.6318 103.651 75.629L102.631 77.0498C102.473 77.3037 102.155 77.4232 101.861 77.3193L99.7487 76.5684C99.4814 76.4738 99.298 76.2121 99.3151 75.9156L99.4231 74.1249C99.2987 74.0261 99.175 73.9216 99.0528 73.8113C98.9319 73.7018 98.8154 73.5895 98.7045 73.475L96.958 73.7623C96.6715 73.8199 96.3716 73.6776 96.2415 73.401L95.2784 71.3743L95.2791 71.3736C95.1589 71.1183 95.2144 70.8047 95.4362 70.6084L96.776 69.4208C96.7568 69.2615 96.7433 69.0994 96.7348 68.9351C96.7263 68.7722 96.7234 68.6101 96.7263 68.4494L95.3068 67.4296C95.053 67.2717 94.9336 66.9532 95.0374 66.6595L95.788 64.546C95.8825 64.2786 96.1441 64.0951 96.4405 64.1122L98.2304 64.2203C98.3292 64.0958 98.4329 63.9721 98.5438 63.8498C98.6533 63.7289 98.7656 63.613 98.88 63.5013L98.5936 61.7541C98.5367 61.4675 98.6782 61.1674 98.9547 61.0372L100.98 60.0744C101.235 59.9535 101.548 60.0104 101.745 60.2322L102.932 61.5727C103.09 61.5542 103.252 61.54 103.416 61.5315ZM138.219 29C137.304 29 136.476 29.3712 135.876 29.9714C135.276 30.5716 134.905 31.4001 134.905 32.316C134.905 33.2312 135.276 34.0604 135.876 34.6606C136.476 35.2608 137.304 35.632 138.219 35.632C138.935 35.632 139.597 35.4052 140.139 35.019C141.4 36.4513 142.25 37.9596 142.688 39.5418C143.128 41.1312 143.156 42.8081 142.772 44.5724C142.485 44.5667 142.199 44.5852 141.918 44.6279V43.8371C141.918 41.9803 141.158 40.2921 139.936 39.0689C138.713 37.8458 137.026 37.0863 135.17 37.0863H116.829C114.973 37.0863 113.285 37.8451 112.063 39.0689C110.84 40.2921 110.081 41.9803 110.081 43.8371V44.6279C109.799 44.5859 109.513 44.5674 109.227 44.5724C108.842 42.8081 108.871 41.1312 109.31 39.5418C109.748 37.9596 110.598 36.452 111.86 35.019C112.402 35.4052 113.064 35.632 113.78 35.632C114.695 35.632 115.524 35.2608 116.124 34.6606C116.724 34.0604 117.095 33.232 117.095 32.316C117.095 31.4008 116.724 30.5716 116.124 29.9714C115.524 29.3712 114.696 29 113.78 29C112.865 29 112.036 29.3712 111.437 29.9714C110.837 30.5716 110.466 31.4001 110.466 32.316C110.466 32.9582 110.648 33.5577 110.965 34.0654C109.527 35.6733 108.558 37.3835 108.056 39.1948C107.565 40.9655 107.526 42.8216 107.936 44.763C107.551 44.8711 107.173 45.0268 106.811 45.2309C105.577 45.9264 104.741 47.0578 104.388 48.3243C104.035 49.5887 104.164 50.9875 104.858 52.2206C105.472 53.3115 106.413 54.0973 107.487 54.5133C108.303 54.8291 109.196 54.9307 110.082 54.7899V58.6898C110.082 59.0503 110.374 59.3426 110.734 59.3426H141.266C141.626 59.3426 141.918 59.0503 141.918 58.6898V54.7899C142.804 54.9307 143.697 54.8291 144.513 54.5133C145.587 54.0973 146.528 53.3115 147.142 52.2206C147.836 50.9875 147.965 49.5887 147.612 48.3243C147.259 47.0578 146.423 45.9264 145.188 45.2309C144.826 45.0268 144.448 44.8718 144.063 44.763C144.474 42.8216 144.434 40.9655 143.943 39.1948C143.442 37.3835 142.473 35.674 141.035 34.0654C141.35 33.5577 141.533 32.9582 141.533 32.316C141.533 31.4008 141.162 30.5716 140.562 29.9714C139.963 29.3712 139.135 29 138.219 29ZM139.64 30.8945C140.003 31.2578 140.229 31.7606 140.229 32.3153C140.229 32.87 140.004 33.3728 139.64 33.7361C139.277 34.0995 138.774 34.3243 138.22 34.3243C137.665 34.3243 137.163 34.0995 136.8 33.7361C136.436 33.3728 136.212 32.87 136.212 32.3153C136.212 31.7606 136.436 31.2578 136.8 30.8945C137.163 30.5311 137.665 30.3056 138.22 30.3056C138.774 30.3056 139.276 30.5311 139.64 30.8945ZM115.2 30.8945C115.564 31.2578 115.789 31.7606 115.789 32.3153C115.789 32.87 115.564 33.3728 115.201 33.7361C114.838 34.0995 114.335 34.3243 113.781 34.3243C113.226 34.3243 112.724 34.0995 112.361 33.7361C111.997 33.3728 111.772 32.87 111.772 32.3153C111.772 31.7606 111.997 31.2578 112.361 30.8945C112.724 30.5311 113.226 30.3056 113.781 30.3056C114.335 30.3056 114.837 30.5311 115.2 30.8945ZM133.605 42.9012C134.448 42.9012 135.212 43.2433 135.764 43.7958C136.316 44.3484 136.658 45.1121 136.658 45.9555C136.658 46.7989 136.316 47.5627 135.764 48.1153C135.211 48.6678 134.448 49.0099 133.605 49.0099C132.762 49.0099 131.999 48.6678 131.447 48.1153C130.894 47.5627 130.552 46.7989 130.552 45.9555C130.552 45.1121 130.894 44.3484 131.447 43.7958C131.999 43.2433 132.762 42.9012 133.605 42.9012ZM134.841 44.7196C135.157 45.036 135.353 45.4727 135.353 45.9555C135.353 46.4384 135.157 46.875 134.841 47.1915C134.524 47.5079 134.088 47.7035 133.605 47.7035C133.123 47.7035 132.686 47.5079 132.37 47.1915C132.054 46.875 131.858 46.4384 131.858 45.9555C131.858 45.4727 132.054 45.0353 132.37 44.7196C132.686 44.4031 133.123 44.2076 133.605 44.2076C134.088 44.2076 134.524 44.4031 134.841 44.7196ZM118.642 42.9012C119.485 42.9012 120.248 43.2433 120.801 43.7958C121.353 44.3484 121.695 45.1121 121.695 45.9555C121.695 46.7989 121.353 47.5627 120.801 48.1153C120.248 48.6678 119.485 49.0099 118.642 49.0099C117.799 49.0099 117.036 48.6678 116.483 48.1153C115.931 47.5627 115.589 46.7989 115.589 45.9555C115.589 45.1121 115.931 44.3484 116.483 43.7958C117.036 43.2433 117.799 42.9012 118.642 42.9012ZM119.877 44.7196C120.194 45.036 120.389 45.4727 120.389 45.9555C120.389 46.4384 120.194 46.875 119.877 47.1915C119.561 47.5079 119.125 47.7035 118.642 47.7035C118.159 47.7035 117.723 47.5079 117.407 47.1915C117.09 46.875 116.895 46.4384 116.895 45.9555C116.895 45.4727 117.09 45.0353 117.407 44.7196C117.723 44.4031 118.159 44.2076 118.642 44.2076C119.125 44.2076 119.561 44.4031 119.877 44.7196ZM110.082 45.9491V53.4644C109.36 53.6208 108.623 53.5561 107.956 53.298C107.157 52.9886 106.456 52.4012 105.995 51.582C105.476 50.6597 105.379 49.6143 105.643 48.6706C105.906 47.7291 106.528 46.8871 107.449 46.368C107.885 46.1219 108.347 45.9712 108.809 45.9079C109.235 45.8503 109.665 45.8652 110.082 45.9491ZM141.918 53.4651V45.9491C142.334 45.8652 142.765 45.8496 143.191 45.9079C143.654 45.9712 144.115 46.1219 144.551 46.368C145.472 46.8871 146.095 47.7284 146.358 48.6706C146.622 49.6143 146.525 50.6597 146.005 51.582C145.544 52.4012 144.843 52.9894 144.045 53.298C143.377 53.5568 142.64 53.6216 141.918 53.4651ZM135.17 38.3912H116.829C115.333 38.3912 113.973 39.0042 112.986 39.9913C111.999 40.9783 111.387 42.3394 111.387 43.8357V58.0356H140.613V43.8357C140.613 42.3394 140 40.9783 139.013 39.9913C138.027 39.0042 136.666 38.3912 135.17 38.3912Z"
                                        fill="#499A9A"
                                      />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>Cross-Platform Integration</h3>
                                <p>
                                  We deploy RPA and AI-driven automation solutions
                                  that streamline operations, reduce manual effort and
                                  improve accuracy.
                                </p>
                                <div className="ser-btn serbtn1">
                                  <a
                                    href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                    className="animated-svg-link1 animated-svg-link12"
                                  >
                                    Read More
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
                              <div className="service-item-header">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.9"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="#082326"
                                      />
                                      <line
                                        opacity="0.9"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="#082326"
                                      />
                                      <path
                                        opacity="0.9"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="#082326"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="#082326"
                                      />
                                      <path
                                        className="icns"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M141.278 80.8295C141.394 80.4882 141.766 80.3068 142.107 80.4234C142.447 80.5408 142.629 80.912 142.512 81.2526C141.166 85.1717 138.741 88.12 135.778 90.0849C132.905 91.9907 129.526 92.9657 126.14 92.9991C122.756 93.0325 119.361 92.1244 116.456 90.2641C113.484 88.3604 111.025 85.4639 109.613 81.5634C109.49 81.2256 109.664 80.8515 110.003 80.7292C110.34 80.6069 110.714 80.7811 110.837 81.1196C112.145 84.7315 114.416 87.4103 117.16 89.1675C119.848 90.8892 122.992 91.7297 126.13 91.6984C129.267 91.6672 132.397 90.764 135.059 88.9983C137.792 87.1863 140.032 84.4605 141.278 80.8295ZM148.41 66.2065C147.755 66.1546 147.142 66.3729 146.68 66.7668C146.218 67.1615 145.906 67.7333 145.855 68.3889C145.803 69.0446 146.021 69.6576 146.415 70.1191C146.809 70.5814 147.381 70.8935 148.036 70.9447C148.692 70.9967 149.304 70.7783 149.766 70.3844C150.228 69.9897 150.54 69.4179 150.592 68.763C150.643 68.1073 150.425 67.4943 150.031 67.0321C149.636 66.5699 149.065 66.2584 148.41 66.2065ZM145.833 65.7769C146.551 65.1647 147.5 64.8255 148.512 64.9051C149.524 64.9847 150.408 65.4683 151.02 66.1851C151.632 66.9027 151.971 67.8527 151.892 68.8647C151.812 69.8773 151.329 70.7627 150.612 71.3743C149.895 71.9866 148.945 72.3258 147.934 72.2461C146.922 72.1665 146.037 71.6829 145.425 70.9661C144.813 70.2486 144.474 69.2985 144.554 68.2865C144.634 67.2739 145.117 66.3892 145.833 65.7769ZM148.625 62.84V62.8385C148.843 62.8535 149.063 62.7596 149.199 62.5697L150.164 61.2257L151.354 61.6488L151.256 63.2794C151.235 63.5042 151.332 63.7339 151.53 63.8725C151.727 64.0112 151.909 64.1556 152.074 64.3049C152.239 64.4535 152.398 64.6157 152.549 64.7899C152.691 64.9634 152.92 65.0587 153.158 65.0203L154.791 64.7515L155.333 65.8936L154.134 66.9553C153.945 67.0982 153.84 67.3393 153.883 67.5896C153.925 67.8257 153.952 68.0568 153.963 68.2816C153.974 68.5091 153.972 68.7424 153.956 68.9778H153.957C153.942 69.1954 154.036 69.4151 154.226 69.5516L155.569 70.5166L155.146 71.7078L153.517 71.6089C153.292 71.5883 153.063 71.685 152.924 71.8827C152.785 72.0804 152.64 72.2625 152.491 72.4275C152.342 72.5924 152.18 72.751 152.007 72.9032C151.833 73.0454 151.738 73.2737 151.777 73.5119L152.045 75.1461L150.904 75.6887L149.843 74.4897C149.7 74.2999 149.459 74.1953 149.209 74.2387C148.973 74.28 148.742 74.3063 148.517 74.3184C148.289 74.3304 148.055 74.3276 147.819 74.3113V74.3127C147.603 74.2985 147.384 74.393 147.247 74.5815L146.283 75.9255L145.092 75.5024L145.19 73.8718C145.211 73.6471 145.114 73.4181 144.916 73.2787C144.719 73.14 144.537 72.9949 144.372 72.8456C144.207 72.697 144.049 72.5348 143.897 72.3613C143.755 72.1878 143.526 72.0925 143.289 72.1309L141.655 72.3997L141.113 71.2576L142.311 70.1959C142.501 70.053 142.606 69.8112 142.562 69.5616C142.521 69.3255 142.495 69.0944 142.483 68.8697C142.471 68.6421 142.473 68.4088 142.49 68.1735H142.488C142.503 67.9559 142.409 67.7361 142.22 67.5996L140.876 66.6346L141.3 65.4434L142.93 65.5423C143.154 65.5629 143.383 65.4662 143.523 65.2678C143.661 65.0701 143.805 64.888 143.955 64.723C144.103 64.5581 144.265 64.3995 144.44 64.2473C144.613 64.1051 144.708 63.8761 144.67 63.6386L144.402 62.0051L145.543 61.4625L146.605 62.6615C146.748 62.8513 146.988 62.9559 147.239 62.9125C147.475 62.8713 147.706 62.8442 147.93 62.8329C148.157 62.8208 148.39 62.8236 148.625 62.84ZM147.864 61.5315C148.026 61.5229 148.188 61.5201 148.349 61.5229L149.368 60.1021C149.526 59.8482 149.845 59.7288 150.138 59.8326L152.251 60.5835C152.518 60.6774 152.701 60.9398 152.684 61.2364L152.576 63.027C152.701 63.1251 152.824 63.2297 152.947 63.3406C153.067 63.4501 153.184 63.5625 153.295 63.6777L155.041 63.3904C155.328 63.3328 155.628 63.475 155.758 63.7516L156.721 65.7777C156.841 66.033 156.784 66.3466 156.563 66.5428L155.223 67.7297C155.242 67.889 155.256 68.0511 155.264 68.2154C155.273 68.3783 155.276 68.5404 155.273 68.7011L156.693 69.7216C156.947 69.8795 157.066 70.1981 156.963 70.4918L156.211 72.6052C156.117 72.8726 155.855 73.0561 155.559 73.039L153.769 72.9309C153.67 73.0554 153.566 73.1791 153.455 73.3014C153.347 73.4223 153.234 73.539 153.119 73.6499L153.406 75.3972C153.464 75.6837 153.322 75.9838 153.045 76.114L151.02 77.0776C150.765 77.1985 150.452 77.1416 150.255 76.9197L149.069 75.5792C148.91 75.5984 148.748 75.6119 148.584 75.6204C148.421 75.629 148.259 75.6318 148.098 75.629L147.078 77.0498C146.92 77.3037 146.602 77.4232 146.308 77.3193L144.196 76.5684C143.929 76.4738 143.745 76.2121 143.762 75.9156L143.87 74.1249C143.746 74.0261 143.622 73.9216 143.5 73.8113C143.379 73.7018 143.262 73.5895 143.152 73.475L141.405 73.7623C141.119 73.8199 140.819 73.6776 140.689 73.401L139.725 71.375L139.726 71.3743C139.606 71.119 139.662 70.8054 139.883 70.6091L141.223 69.4215C141.204 69.2622 141.19 69.1001 141.182 68.9358C141.173 68.7729 141.171 68.6108 141.173 68.4501L139.753 67.4303C139.499 67.2725 139.38 66.9539 139.484 66.6602L140.234 64.5467C140.328 64.2793 140.59 64.0958 140.887 64.1129L142.677 64.221C142.776 64.0965 142.88 63.9728 142.99 63.8505C143.1 63.7296 143.212 63.6137 143.327 63.502L143.04 61.7548C142.982 61.4682 143.125 61.1681 143.401 61.038L145.426 60.0751L145.427 60.0758C145.681 59.9549 145.995 60.0111 146.192 60.233L147.379 61.5734C147.537 61.5542 147.699 61.54 147.864 61.5315ZM131.216 50.8261C131.216 52.2668 130.633 53.5718 129.689 54.5162C128.746 55.4591 127.443 56.0422 126 56.0422C124.559 56.0422 123.254 55.4591 122.311 54.5162C121.367 53.5718 120.784 52.2668 120.784 50.8261C120.784 50.4655 121.076 50.1726 121.436 50.1726H130.563C130.923 50.1726 131.216 50.4648 131.216 50.8261ZM128.765 53.5924C129.328 53.0299 129.719 52.2974 129.857 51.4789H122.143C122.281 52.2974 122.672 53.0306 123.235 53.5924C123.943 54.3021 124.921 54.7409 126 54.7409C127.078 54.7409 128.056 54.3021 128.765 53.5924ZM121.719 67.372L119.506 66.1503C119.253 65.9903 118.915 66.0202 118.695 66.2406L116.535 68.4017L116.536 68.4024C116.336 68.6023 116.283 68.9173 116.426 69.1776L117.667 71.4276C117.549 71.6573 117.441 71.8898 117.344 72.1238C117.246 72.3606 117.158 72.6017 117.08 72.8456L114.676 73.5397C114.373 73.5959 114.143 73.8618 114.143 74.1818V77.2383H114.145C114.145 77.5213 114.332 77.7816 114.617 77.8634L117.08 78.5745C117.158 78.8184 117.246 79.0595 117.344 79.2963C117.441 79.531 117.549 79.7635 117.667 79.9925L116.445 82.207C116.285 82.4594 116.315 82.7979 116.535 83.0176L118.695 85.1788L118.696 85.1781C118.896 85.3779 119.211 85.4312 119.471 85.2883L121.719 84.0467C121.949 84.1647 122.181 84.2728 122.416 84.3695C122.652 84.4676 122.893 84.5558 123.137 84.6341L123.841 87.0725C123.91 87.3577 124.166 87.5696 124.473 87.5696L127.528 87.5689C127.811 87.5689 128.071 87.3826 128.153 87.0974L128.864 84.6333C129.107 84.5551 129.348 84.4669 129.585 84.3688C129.82 84.2714 130.052 84.164 130.282 84.0459L132.494 85.2677C132.747 85.4277 133.085 85.3978 133.305 85.1774L135.465 83.0162L135.464 83.0155C135.664 82.8157 135.717 82.5007 135.574 82.2404L134.333 79.9904C134.451 79.7607 134.559 79.5281 134.657 79.2934C134.755 79.0566 134.843 78.8156 134.921 78.5716L137.358 77.8676C137.643 77.7986 137.855 77.5419 137.855 77.2354L137.855 74.179C137.855 73.8959 137.668 73.6357 137.383 73.5539L134.92 72.8428C134.842 72.5988 134.754 72.3578 134.656 72.121C134.559 71.8863 134.451 71.6537 134.333 71.4248L135.554 69.2103C135.714 68.9578 135.684 68.6193 135.464 68.3996L133.304 66.2385L133.303 66.2392C133.104 66.0394 132.789 65.986 132.528 66.129L130.28 67.3706C130.051 67.2525 129.818 67.1445 129.584 67.0477C129.347 66.9496 129.106 66.8614 128.862 66.7832L128.168 64.3789C128.112 64.0745 127.846 63.8441 127.526 63.8441H124.471V63.8469C124.188 63.8469 123.928 64.0325 123.847 64.3184L123.136 66.7825C122.892 66.8607 122.651 66.9489 122.414 67.047C122.181 67.1459 121.949 67.254 121.719 67.372ZM122.91 68.2531C122.62 68.3726 122.343 68.507 122.076 68.6549C121.88 68.7857 121.62 68.8064 121.399 68.6848L119.271 67.51L117.804 68.9778L118.978 71.1069L118.977 71.1076C119.081 71.2982 119.088 71.5364 118.973 71.7391C118.815 72.0193 118.673 72.3123 118.547 72.6173C118.422 72.9188 118.316 73.2282 118.228 73.5432C118.17 73.7544 118.006 73.9308 117.78 73.9948L115.448 74.6682V76.7483L117.744 77.4111C117.971 77.4623 118.163 77.6337 118.228 77.8733C118.316 78.1883 118.422 78.4977 118.547 78.7992C118.666 79.0886 118.801 79.3667 118.949 79.6334C119.08 79.8289 119.1 80.0892 118.979 80.3104L117.805 82.4395L119.272 83.9073L121.4 82.7325L121.401 82.7339C121.591 82.6294 121.829 82.623 122.032 82.7375C122.311 82.8953 122.605 83.0383 122.91 83.1641C123.211 83.2886 123.52 83.3953 123.835 83.4827C124.046 83.541 124.223 83.7053 124.287 83.9315L124.96 86.2675H127.038L127.701 83.9677C127.753 83.7409 127.923 83.5489 128.163 83.4827C128.478 83.3953 128.787 83.2886 129.088 83.1641C129.377 83.0447 129.655 82.9103 129.922 82.7624C130.117 82.6315 130.378 82.6109 130.599 82.7325L132.727 83.9073L134.194 82.4395L133.02 80.3104L133.021 80.3097C132.917 80.1191 132.91 79.8808 133.025 79.6782C133.182 79.3987 133.325 79.105 133.451 78.7999C133.576 78.4984 133.682 78.1891 133.77 77.874C133.828 77.6628 133.992 77.4865 134.218 77.4225L136.552 76.7483V74.6697L134.254 74.0062C134.027 73.955 133.835 73.7836 133.77 73.5439C133.682 73.2289 133.575 72.9188 133.451 72.618C133.332 72.3286 133.197 72.0506 133.049 71.7846C132.919 71.5883 132.898 71.3288 133.02 71.1076L134.194 68.9785L132.727 67.5107L130.599 68.6855L130.598 68.6833C130.407 68.7879 130.169 68.7943 129.967 68.6798C129.687 68.5219 129.394 68.379 129.089 68.2531C128.787 68.1287 128.478 68.022 128.163 67.9345C127.952 67.8762 127.776 67.7119 127.712 67.4858L127.039 65.1533H124.96L124.297 67.451C124.246 67.6778 124.075 67.8698 123.835 67.9359C123.52 68.022 123.211 68.1287 122.91 68.2531ZM122.05 71.7576C120.96 72.8484 120.414 74.2792 120.414 75.7093C120.414 77.1394 120.959 78.5695 122.05 79.6604C123.141 80.7513 124.571 81.2974 126 81.2974C127.429 81.2974 128.859 80.752 129.949 79.6604C131.039 78.5688 131.585 77.1387 131.585 75.7093H131.582C131.582 74.2778 131.038 72.8477 129.949 71.7576C128.858 70.6667 127.428 70.1205 126 70.1205C124.57 70.1213 123.141 70.6667 122.05 71.7576ZM122.973 72.6813C123.809 71.8458 124.904 71.4276 126 71.4276C127.095 71.4276 128.19 71.8458 129.026 72.6813C129.864 73.5191 130.282 74.6149 130.282 75.7093H130.279C130.279 76.8052 129.861 77.9011 129.026 78.7373C128.19 79.5736 127.095 79.9918 126 79.9918C124.904 79.9918 123.809 79.5736 122.973 78.7373C122.137 77.9011 121.719 76.8052 121.719 75.7093C121.719 74.6135 122.137 73.5176 122.973 72.6813ZM103.963 66.2065C103.308 66.1546 102.695 66.3729 102.233 66.7668C101.771 67.1615 101.459 67.7333 101.408 68.3889C101.356 69.0446 101.574 69.6576 101.969 70.1191C102.363 70.5814 102.935 70.8935 103.59 70.9447C104.245 70.9967 104.858 70.7783 105.32 70.3844C105.782 69.9897 106.094 69.4179 106.145 68.763C106.197 68.1073 105.979 67.4943 105.585 67.0321C105.19 66.5699 104.618 66.2584 103.963 66.2065ZM101.386 65.7769C102.104 65.1647 103.053 64.8255 104.065 64.9051C105.077 64.9847 105.961 65.4683 106.573 66.1851C107.185 66.9027 107.524 67.8527 107.445 68.8647C107.365 69.8773 106.882 70.7627 106.165 71.3743C105.448 71.9866 104.499 72.3258 103.487 72.2461C102.475 72.1665 101.59 71.6829 100.978 70.9661C100.366 70.2486 100.027 69.2985 100.107 68.2865C100.187 67.2739 100.671 66.3892 101.386 65.7769ZM104.178 62.84V62.8385C104.396 62.8535 104.616 62.7596 104.752 62.5697L105.717 61.2257L106.907 61.6488L106.808 63.2794C106.788 63.5042 106.884 63.7339 107.083 63.8725C107.28 64.0112 107.462 64.1556 107.627 64.3049C107.792 64.4535 107.951 64.6157 108.103 64.7899C108.245 64.9634 108.474 65.0587 108.711 65.0203L110.344 64.7515L110.887 65.8936L109.688 66.9553C109.498 67.0982 109.394 67.3393 109.437 67.5896C109.478 67.8257 109.505 68.0568 109.517 68.2816C109.529 68.5091 109.526 68.7424 109.51 68.9778H109.511C109.496 69.1954 109.59 69.4151 109.78 69.5516L111.123 70.5166L110.7 71.7078L109.07 71.6089C108.846 71.5883 108.617 71.685 108.477 71.8827C108.339 72.0804 108.194 72.2625 108.045 72.4275C107.896 72.5924 107.734 72.751 107.56 72.9025C107.387 73.0447 107.292 73.2737 107.33 73.5112L107.599 75.1454L106.457 75.688L105.396 74.489C105.253 74.2992 105.012 74.1939 104.762 74.238C104.526 74.2792 104.295 74.3056 104.07 74.3176C103.842 74.3297 103.608 74.3269 103.372 74.3105V74.312C103.155 74.2977 102.937 74.3923 102.801 74.5808L101.836 75.9248L100.646 75.5017L100.745 73.8711C100.765 73.6463 100.668 73.4174 100.471 73.278C100.273 73.1393 100.091 72.9942 99.9264 72.8449C99.7614 72.6963 99.6029 72.5341 99.4515 72.3606C99.3094 72.1871 99.0805 72.0918 98.8431 72.1302L97.2082 72.3997L96.6659 71.2576L97.8643 70.1959C98.0541 70.053 98.1586 69.8112 98.1152 69.5616C98.074 69.3255 98.0477 69.0944 98.0356 68.8697C98.0242 68.6421 98.0264 68.4088 98.0427 68.1735H98.0413C98.0562 67.9559 97.9624 67.7361 97.7726 67.5996L96.4292 66.6346L96.8521 65.4434L98.482 65.5423C98.7066 65.5629 98.9355 65.4662 99.0748 65.2678C99.2134 65.0701 99.3584 64.888 99.5077 64.723C99.657 64.5581 99.8183 64.3995 99.9925 64.2473C100.166 64.1051 100.261 63.8761 100.223 63.6386L99.9541 62.0051L101.096 61.4625L102.158 62.6615C102.3 62.8513 102.541 62.9559 102.792 62.9125C103.028 62.8713 103.259 62.8442 103.483 62.8329C103.711 62.8208 103.943 62.8236 104.178 62.84ZM103.416 61.5315C103.579 61.5229 103.741 61.5201 103.902 61.5229L104.921 60.1021C105.079 59.8482 105.397 59.7288 105.691 59.8326L107.804 60.5835C108.071 60.6774 108.254 60.9398 108.237 61.2364L108.129 63.027C108.254 63.1251 108.377 63.2297 108.499 63.3406C108.62 63.4501 108.737 63.5625 108.848 63.6777L110.594 63.3904C110.881 63.3328 111.181 63.475 111.311 63.7516L112.274 65.7777H112.273C112.394 66.033 112.338 66.3466 112.116 66.5428L110.776 67.7297C110.795 67.889 110.809 68.0511 110.817 68.2154C110.826 68.3783 110.829 68.5404 110.826 68.7011L112.246 69.7216C112.5 69.8795 112.619 70.1981 112.516 70.4918L111.765 72.6052C111.67 72.8726 111.409 73.0561 111.112 73.039L109.322 72.9309C109.224 73.0554 109.119 73.1791 109.008 73.3014C108.899 73.4223 108.787 73.539 108.672 73.6499L108.959 75.3972C109.017 75.6837 108.875 75.9838 108.598 76.114L106.573 77.0776L106.572 77.0768C106.318 77.1977 106.004 77.1416 105.808 76.9197L104.622 75.5792C104.463 75.5984 104.301 75.6119 104.136 75.6204C103.974 75.629 103.812 75.6318 103.651 75.629L102.631 77.0498C102.473 77.3037 102.155 77.4232 101.861 77.3193L99.7487 76.5684C99.4814 76.4738 99.298 76.2121 99.3151 75.9156L99.4231 74.1249C99.2987 74.0261 99.175 73.9216 99.0528 73.8113C98.9319 73.7018 98.8154 73.5895 98.7045 73.475L96.958 73.7623C96.6715 73.8199 96.3716 73.6776 96.2415 73.401L95.2784 71.3743L95.2791 71.3736C95.1589 71.1183 95.2144 70.8047 95.4362 70.6084L96.776 69.4208C96.7568 69.2615 96.7433 69.0994 96.7348 68.9351C96.7263 68.7722 96.7234 68.6101 96.7263 68.4494L95.3068 67.4296C95.053 67.2717 94.9336 66.9532 95.0374 66.6595L95.788 64.546C95.8825 64.2786 96.1441 64.0951 96.4405 64.1122L98.2304 64.2203C98.3292 64.0958 98.4329 63.9721 98.5438 63.8498C98.6533 63.7289 98.7656 63.613 98.88 63.5013L98.5936 61.7541C98.5367 61.4675 98.6782 61.1674 98.9547 61.0372L100.98 60.0744C101.235 59.9535 101.548 60.0104 101.745 60.2322L102.932 61.5727C103.09 61.5542 103.252 61.54 103.416 61.5315ZM138.219 29C137.304 29 136.476 29.3712 135.876 29.9714C135.276 30.5716 134.905 31.4001 134.905 32.316C134.905 33.2312 135.276 34.0604 135.876 34.6606C136.476 35.2608 137.304 35.632 138.219 35.632C138.935 35.632 139.597 35.4052 140.139 35.019C141.4 36.4513 142.25 37.9596 142.688 39.5418C143.128 41.1312 143.156 42.8081 142.772 44.5724C142.485 44.5667 142.199 44.5852 141.918 44.6279V43.8371C141.918 41.9803 141.158 40.2921 139.936 39.0689C138.713 37.8458 137.026 37.0863 135.17 37.0863H116.829C114.973 37.0863 113.285 37.8451 112.063 39.0689C110.84 40.2921 110.081 41.9803 110.081 43.8371V44.6279C109.799 44.5859 109.513 44.5674 109.227 44.5724C108.842 42.8081 108.871 41.1312 109.31 39.5418C109.748 37.9596 110.598 36.452 111.86 35.019C112.402 35.4052 113.064 35.632 113.78 35.632C114.695 35.632 115.524 35.2608 116.124 34.6606C116.724 34.0604 117.095 33.232 117.095 32.316C117.095 31.4008 116.724 30.5716 116.124 29.9714C115.524 29.3712 114.696 29 113.78 29C112.865 29 112.036 29.3712 111.437 29.9714C110.837 30.5716 110.466 31.4001 110.466 32.316C110.466 32.9582 110.648 33.5577 110.965 34.0654C109.527 35.6733 108.558 37.3835 108.056 39.1948C107.565 40.9655 107.526 42.8216 107.936 44.763C107.551 44.8711 107.173 45.0268 106.811 45.2309C105.577 45.9264 104.741 47.0578 104.388 48.3243C104.035 49.5887 104.164 50.9875 104.858 52.2206C105.472 53.3115 106.413 54.0973 107.487 54.5133C108.303 54.8291 109.196 54.9307 110.082 54.7899V58.6898C110.082 59.0503 110.374 59.3426 110.734 59.3426H141.266C141.626 59.3426 141.918 59.0503 141.918 58.6898V54.7899C142.804 54.9307 143.697 54.8291 144.513 54.5133C145.587 54.0973 146.528 53.3115 147.142 52.2206C147.836 50.9875 147.965 49.5887 147.612 48.3243C147.259 47.0578 146.423 45.9264 145.188 45.2309C144.826 45.0268 144.448 44.8718 144.063 44.763C144.474 42.8216 144.434 40.9655 143.943 39.1948C143.442 37.3835 142.473 35.674 141.035 34.0654C141.35 33.5577 141.533 32.9582 141.533 32.316C141.533 31.4008 141.162 30.5716 140.562 29.9714C139.963 29.3712 139.135 29 138.219 29ZM139.64 30.8945C140.003 31.2578 140.229 31.7606 140.229 32.3153C140.229 32.87 140.004 33.3728 139.64 33.7361C139.277 34.0995 138.774 34.3243 138.22 34.3243C137.665 34.3243 137.163 34.0995 136.8 33.7361C136.436 33.3728 136.212 32.87 136.212 32.3153C136.212 31.7606 136.436 31.2578 136.8 30.8945C137.163 30.5311 137.665 30.3056 138.22 30.3056C138.774 30.3056 139.276 30.5311 139.64 30.8945ZM115.2 30.8945C115.564 31.2578 115.789 31.7606 115.789 32.3153C115.789 32.87 115.564 33.3728 115.201 33.7361C114.838 34.0995 114.335 34.3243 113.781 34.3243C113.226 34.3243 112.724 34.0995 112.361 33.7361C111.997 33.3728 111.772 32.87 111.772 32.3153C111.772 31.7606 111.997 31.2578 112.361 30.8945C112.724 30.5311 113.226 30.3056 113.781 30.3056C114.335 30.3056 114.837 30.5311 115.2 30.8945ZM133.605 42.9012C134.448 42.9012 135.212 43.2433 135.764 43.7958C136.316 44.3484 136.658 45.1121 136.658 45.9555C136.658 46.7989 136.316 47.5627 135.764 48.1153C135.211 48.6678 134.448 49.0099 133.605 49.0099C132.762 49.0099 131.999 48.6678 131.447 48.1153C130.894 47.5627 130.552 46.7989 130.552 45.9555C130.552 45.1121 130.894 44.3484 131.447 43.7958C131.999 43.2433 132.762 42.9012 133.605 42.9012ZM134.841 44.7196C135.157 45.036 135.353 45.4727 135.353 45.9555C135.353 46.4384 135.157 46.875 134.841 47.1915C134.524 47.5079 134.088 47.7035 133.605 47.7035C133.123 47.7035 132.686 47.5079 132.37 47.1915C132.054 46.875 131.858 46.4384 131.858 45.9555C131.858 45.4727 132.054 45.0353 132.37 44.7196C132.686 44.4031 133.123 44.2076 133.605 44.2076C134.088 44.2076 134.524 44.4031 134.841 44.7196ZM118.642 42.9012C119.485 42.9012 120.248 43.2433 120.801 43.7958C121.353 44.3484 121.695 45.1121 121.695 45.9555C121.695 46.7989 121.353 47.5627 120.801 48.1153C120.248 48.6678 119.485 49.0099 118.642 49.0099C117.799 49.0099 117.036 48.6678 116.483 48.1153C115.931 47.5627 115.589 46.7989 115.589 45.9555C115.589 45.1121 115.931 44.3484 116.483 43.7958C117.036 43.2433 117.799 42.9012 118.642 42.9012ZM119.877 44.7196C120.194 45.036 120.389 45.4727 120.389 45.9555C120.389 46.4384 120.194 46.875 119.877 47.1915C119.561 47.5079 119.125 47.7035 118.642 47.7035C118.159 47.7035 117.723 47.5079 117.407 47.1915C117.09 46.875 116.895 46.4384 116.895 45.9555C116.895 45.4727 117.09 45.0353 117.407 44.7196C117.723 44.4031 118.159 44.2076 118.642 44.2076C119.125 44.2076 119.561 44.4031 119.877 44.7196ZM110.082 45.9491V53.4644C109.36 53.6208 108.623 53.5561 107.956 53.298C107.157 52.9886 106.456 52.4012 105.995 51.582C105.476 50.6597 105.379 49.6143 105.643 48.6706C105.906 47.7291 106.528 46.8871 107.449 46.368C107.885 46.1219 108.347 45.9712 108.809 45.9079C109.235 45.8503 109.665 45.8652 110.082 45.9491ZM141.918 53.4651V45.9491C142.334 45.8652 142.765 45.8496 143.191 45.9079C143.654 45.9712 144.115 46.1219 144.551 46.368C145.472 46.8871 146.095 47.7284 146.358 48.6706C146.622 49.6143 146.525 50.6597 146.005 51.582C145.544 52.4012 144.843 52.9894 144.045 53.298C143.377 53.5568 142.64 53.6216 141.918 53.4651ZM135.17 38.3912H116.829C115.333 38.3912 113.973 39.0042 112.986 39.9913C111.999 40.9783 111.387 42.3394 111.387 43.8357V58.0356H140.613V43.8357C140.613 42.3394 140 40.9783 139.013 39.9913C138.027 39.0042 136.666 38.3912 135.17 38.3912Z"
                                        fill="#499A9A"
                                      />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>Strategic System Design &amp; Delivery</h3>
                                <p>
                                  We deploy RPA and AI-driven automation solutions
                                  that streamline operations, reduce manual effort and
                                  improve accuracy.
                                </p>
                                <div className="ser-btn serbtn1">
                                  <a
                                    href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                    className="animated-svg-link1 animated-svg-link12"
                                  >
                                    Read More
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                    </div>
                    <div className="testimonial-btn">
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
        {/* Hero Section Start*/}
        <div className="hero brainsec routes systemview">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-sm-6">
                <div className="hero-bg-video2">
                  <video
                   autoPlay={true} muted={true} loop={true}
                    id="myVideo"
                    height={700}
                    width="100%"
                  >
                    <source src="videos/way.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="col-sm-6">
                {/* Section Title Start */}
                <div className="section-title">
                  {/* <h3 class="wow fadeInUp">key benefits</h3> */}
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Our Edge in Driving Transformation
                  </h2>
                </div>
                <div className="row mt-5 index-benefit">
                  <div className="col-lg-6 col-md-6">
                    {/* Benefits Steps Item Start */}
                    <div className="benefits-steps-item wow fadeInUp">
                      <div className="icon-box">
                        <img src="images/r1.svg" alt="" />
                      </div>
                      <div className="benefits-steps-content">
                        <h3>
                          Proven Methodology <br /> (AIT)
                        </h3>
                        <p>Achieve measurable transformation across your business.</p>
                      </div>
                    </div>
                    {/* Benefits Steps Item End */}
                    {/* Benefits Steps Item Start */}
                    <div
                      className="benefits-steps-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon-box">
                        <img src="images/r2.svg" alt="" />
                      </div>
                      <div className="benefits-steps-content">
                        <h3>Industry Expertise Across Verticals </h3>
                        <p>
                          Deep experience in manufacturing, retail, automotive and
                          private equity.
                        </p>
                      </div>
                    </div>
                    {/* Benefits Steps Item End */}
                  </div>
                  <div className="col-lg-6 col-md-6 ">
                    {/* Benefits Steps Item Start */}
                    <div
                      className="benefits-steps-item wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="icon-box">
                        <img src="images/r3.svg" alt="" />
                      </div>
                      <div className="benefits-steps-content">
                        <h3>Global Delivery. Local Execution.</h3>
                        <p>
                          Efficient, rapidly executed cost-effective transformation
                          programs.
                        </p>
                      </div>
                    </div>
                    {/* Benefits Steps Item End */}
                    {/* Benefits Steps Item Start */}
                    <div
                      className="benefits-steps-item wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="icon-box">
                        <img src="images/r4.svg" alt="" />
                      </div>
                      <div className="benefits-steps-content">
                        <h3>Clear ROI, Quantified Results</h3>
                        <p>Enhanced operational performance and customer value.</p>
                      </div>
                    </div>
                    {/* Benefits Steps Item End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero brainsec routes mobileview pd30 pdb0">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-sm-6">
                {/* Section Title Start */}
                <div className="section-title">
                  {/* <h3 class="wow fadeInUp">key benefits</h3> */}
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Our Edge in Driving Transformation
                  </h2>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-6 col-md-6 col-6">
                    {/* Benefits Steps Item Start */}
                    <div className="benefits-steps-item wow fadeInUp">
                      <div className="icon-box">
                        <img src="images/r1.svg" alt="" />
                      </div>
                      <div className="benefits-steps-content">
                        <h3>Proven Methodology (AIT)</h3>
                        <p>Achieve measurable transformation across your business.</p>
                      </div>
                    </div>
                    {/* Benefits Steps Item End */}
                    {/* Benefits Steps Item Start */}
                    <div
                      className="benefits-steps-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon-box">
                        <img src="images/r2.svg" alt="" />
                      </div>
                      <div className="benefits-steps-content">
                        <h3>Industry Expertise Across Verticals </h3>
                        <p>
                          Deep experience in manufacturing, retail, automotive and
                          private equity.
                        </p>
                      </div>
                    </div>
                    {/* Benefits Steps Item End */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    {/* Benefits Steps Item Start */}
                    <div
                      className="benefits-steps-item wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="icon-box">
                        <img src="images/r3.svg" alt="" />
                      </div>
                      <div className="benefits-steps-content">
                        <h3>Global Delivery. Local Execution.</h3>
                        <p>
                          Efficient, rapidly executed cost-effective transformation
                          programs.
                        </p>
                      </div>
                    </div>
                    {/* Benefits Steps Item End */}
                    {/* Benefits Steps Item Start */}
                    <div
                      className="benefits-steps-item wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="icon-box">
                        <img src="images/r4.svg" alt="" />
                      </div>
                      <div className="benefits-steps-content">
                        <h3>Clear ROI, Quantified Results</h3>
                        <p>Enhanced operational performance and customer value.</p>
                      </div>
                    </div>
                    {/* Benefits Steps Item End */}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="hero-bg-video2">
                  <video
                    autoPlay={true} muted={true} loop={true}
                    id="myVideo"
                    height={700}
                    width="100%"
                  >
                    <source src="videos/way.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        {/* Our Testimonial Section Start */}
        <div className="our-testimonial partner pd-50">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Partnering with <br /> Businesses Worldwide
                  </h2>
                  <p>
                    We partner with businesses in over 40 countries to deliver
                    high-impact transformation across key sectors including brand
                    owners and vertical retailers, the retail industry, distribution
                    and supply chain, discrete and process manufacturing, the
                    automotive industry, engineering, procurement and construction as
                    well as the private equity and funding backed ventures.{" "}
                  </p>
                  <p>
                    Whether you are mid-sized and scaling, or enterprise-level and
                    rethinking your model, we help you unlock growth.
                  </p>
                  <div className="ser-btn2 mt-4">
                    <a href="#" className="animated-svg-link1 btn-style-3">
                      Know More
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
                </div>
              </div>
            </div>
            <div className="digital-features-item agency-supports mt-5">
              <div className="logo-marquee">
                {/* Row 1 */}
                <div className="logo-slider ltr">
                  <div className="logos">
                    <img src="images/clients1/1-American-golf.png" alt="logo" />
                    <img src="images/clients1/2-cold-chain-tech.png" alt="logo" />
                    <img src="images/clients1/10-bond.png" alt="logo" />
                    <img src="images/clients1/11-sembcorp.png" alt="logo" />
                    <img src="images/clients1/12-cellcentric.png" alt="logo" />
                    {/* repeat for smooth scrolling */}
                    <img src="images/clients1/13-ecolean.png" alt="logo" />
                    <img src="images/clients1/14-ceco.png" alt="logo" />
                    <img src="images/clients1/15-TRW.png" alt="logo" />
                    <img src="images/clients1/16-kraft.png" alt="logo" />
                    <img src="images/clients1/17-eccbc.png" alt="logo" />
                    <img src="images/clients1/18-oman-fiber.png" alt="logo" />
                    <img src="images/clients1/19-kern.png" alt="logo" />
                    <img src="images/clients1/20-flsmidth.png" alt="logo" />
                    <img src="images/clients1/21-kone.png" alt="logo" />
                    <img src="images/clients1/22-tadco.png" alt="logo" />
                  </div>
                </div>
                {/* Row 2 */}
                <div className="logo-slider rtl">
                  <div className="logos">
                    <img src="images/clients1/23-rsp.png" alt="logo" />
                    <img src="images/clients1/24-kempi.png" alt="logo" />
                    <img src="images/clients1/25-nucor.png" alt="logo" />
                    <img src="images/clients1/26-rfa.png" alt="logo" />
                    <img src="images/clients1/27-schalke.png" alt="logo" />
                    <img src="images/clients1/28-gemaco.png" alt="logo" />
                    <img src="images/clients1/29-talents.png" alt="logo" />
                    <img src="images/clients1/30-tialoc.png" alt="logo" />
                    <img src="images/clients1/31-zamil.png" alt="logo" />
                    <img src="images/clients1/32-eva.png" alt="logo" />
                    <img src="images/clients1/33-nasco.png" alt="logo" />
                    <img src="images/clients1/34-global-industries.png" alt="logo" />
                    <img src="images/clients1/35-ghassan.png" alt="logo" />
                    <img src="images/clients1/36-glaze.png" alt="logo" />
                    <img src="images/clients1/37-greentech.png" alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Testimonial Section End */}
        {/* Our Services Section Start */}
        <div className="our-services projects systemview">
          <div className="container">
            <div className="row section-row text-center">
              <div className="col-lg-12">
                {/* Section Title Start */}
                <div className="section-title text-center">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Projects That Made a Difference
                  </h2>
                  <p>
                    At RheinBrücke, every project is a purposeful collaboration—driven
                    by innovation, guided by precision, and focused on real-world
                    impact. From streamlining automation systems to accelerating
                    embedded development, our solutions have helped businesses
                    overcome complexity, improve efficiency, and scale with
                    confidence. These are the projects that truly made a difference.
                  </p>
                  <div className="ser-btn">
                    <a href="#" className="animated-svg-link">
                      Explore More
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
                {/* Section Title End */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="service-item-body">
                  <h3>
                    <span>Case Study</span>
                  </h3>
                  <p>
                    How an Engineering Procurement Construction Company overcame their
                    challenge by implementing Epicor ERP?
                  </p>
                  <div className="ser-btn1">
                    <a
                      href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                      className="animated-svg-link1 btn-style-3"
                    >
                      Read More
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
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-item-body secondser">
                  <h3>
                    <span>Case Study</span>
                  </h3>
                  <p>
                    Welding Equipment Manufacturer Implements Epicor Country Specific
                    Functionality
                  </p>
                  <div className="ser-btn1">
                    <a
                      href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                      className="animated-svg-link1 btn-style-3"
                    >
                      Read More
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
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-item-body thirdser">
                  <h3>
                    <span>Blog</span>
                  </h3>
                  <p>7 Game Changing Benefits of AI and Automation in ERP</p>
                  <div className="ser-btn1">
                    <a
                      href="https://blog.rheincs.com/7-game-changing-benefits-of-ai-and-automation-in-erp/"
                      className="animated-svg-link1 btn-style-3"
                    >
                      Read More
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
                </div>
                {/* Service Item End */}
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-item-body fourthser">
                  <h3>
                    <span>Blog</span>
                  </h3>
                  <p>10 Must-Have Features in a Modern ERP System</p>
                  <div className="ser-btn1">
                    <a
                      href="https://blog.rheincs.com/10-must-have-features-in-a-modern-erp-system/"
                      className="animated-svg-link1 btn-style-3"
                    >
                      Read More
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
                </div>
                {/* Service Item End */}
              </div>
            </div>
          </div>
        </div>
        <div className="our-services projects indexprojectsmobile mobileview pd30">
          <div className="container">
            <div className="row section-row text-center">
              <div className="col-lg-12">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Projects That Made a Difference
                  </h2>
                  <p>
                    At RheinBrücke, every project is a purposeful collaboration—driven
                    by innovation, guided by precision, and focused on real-world
                    impact. From streamlining automation systems to accelerating
                    embedded development, our solutions have helped businesses
                    overcome complexity, improve efficiency, and scale with
                    confidence. These are the projects that truly made a difference.
                  </p>
                  <div className="ser-btn">
                    <a href="#" className="animated-svg-link">
                      Explore More
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          id="dot-1"
                          opacity="0.5"
                          cx="16.0004"
                          cy="4.79995"
                          r="1.6"
                          fill="#535353"
                        ></circle>
                        <circle
                          id="dot-2"
                          opacity="0.5"
                          cx="12.7992"
                          cy="1.6"
                          r="1.6"
                          fill="#535353"
                        ></circle>
                        <circle
                          id="dot-3"
                          opacity="0.5"
                          cx="22.4008"
                          cy="11.2"
                          r="1.6"
                          fill="#535353"
                        ></circle>
                        <circle
                          id="dot-4"
                          opacity="0.5"
                          cx="1.6"
                          cy="11.2"
                          r="1.6"
                          fill="#535353"
                        />
                        <circle
                          id="dot-5"
                          opacity="0.5"
                          cx="6.40078"
                          cy="11.2"
                          r="1.6"
                          fill="#535353"
                        ></circle>
                        <circle
                          id="dot-6"
                          opacity="0.5"
                          cx="11.1996"
                          cy="11.2"
                          r="1.6"
                          fill="#535353"
                        ></circle>
                        <circle
                          id="dot-7"
                          opacity="0.5"
                          cx="16.0004"
                          cy="11.2"
                          r="1.6"
                          fill="#535353"
                        ></circle>
                        <circle
                          id="dot-8"
                          opacity="0.5"
                          cx="19.1996"
                          cy="14.4"
                          r="1.6"
                          fill="#535353"
                        ></circle>
                        <circle
                          id="dot-9"
                          opacity="0.5"
                          cx="16.0004"
                          cy="17.6"
                          r="1.6"
                          fill="#535353"
                        ></circle>
                        <circle
                          id="dot-10"
                          opacity="0.5"
                          cx="12.7992"
                          cy="20.8"
                          r="1.6"
                          fill="#535353"
                        ></circle>
                        <circle
                          id="dot-11"
                          opacity="0.5"
                          cx="19.1996"
                          cy="8.00002"
                          r="1.6"
                          fill="#535353"
                        ></circle>
                      </svg>
                    </a>
                  </div>
                </div>
                {/* Section Title End */}
              </div>
            </div>
            <div className="row">
              {/* Testimonial Slider Start */}
              <div className="testimonial-slider3 projectslider">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="service-item-body">
                        <h3>
                          <span>Case Study</span>
                        </h3>
                        <p>
                          How an Engineering Procurement Construction Company overcame
                          their challenge by implementing Epicor ERP?
                        </p>
                        <div className="ser-btn1">
                          <a href="#" className="animated-svg-link1">
                            Read More
                            <svg
                              width={24}
                              height={23}
                              viewBox="0 0 24 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                id="dot-1"
                                cx="16.0004"
                                cy="4.80001"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-2"
                                cx="12.7992"
                                cy="1.6"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-3"
                                cx="22.4008"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-4"
                                cx="1.6"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-5"
                                cx="6.40078"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-6"
                                cx="11.1996"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-7"
                                cx="16.0004"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-8"
                                cx="19.1996"
                                cy="14.4"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-9"
                                cx="16.0004"
                                cy="17.6"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-10"
                                cx="12.7992"
                                cy="20.8"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-11"
                                cx="19.1996"
                                cy="8.00002"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="service-item-body secondser">
                        <h3>
                          <span>Case Study</span>
                        </h3>
                        <p>
                          Welding Equipment Manufacturer Implements Epicor Country
                          Specific Functionality
                        </p>
                        <div className="ser-btn1">
                          <a href="#" className="animated-svg-link1">
                            Read More
                            <svg
                              width={24}
                              height={23}
                              viewBox="0 0 24 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                id="dot-1"
                                cx="16.0004"
                                cy="4.80001"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-2"
                                cx="12.7992"
                                cy="1.6"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-3"
                                cx="22.4008"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-4"
                                cx="1.6"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-5"
                                cx="6.40078"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-6"
                                cx="11.1996"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-7"
                                cx="16.0004"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-8"
                                cx="19.1996"
                                cy="14.4"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-9"
                                cx="16.0004"
                                cy="17.6"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-10"
                                cx="12.7992"
                                cy="20.8"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-11"
                                cx="19.1996"
                                cy="8.00002"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="service-item-body thirdser">
                        <h3>
                          <span>Blog</span>
                        </h3>
                        <p>7 Game Changing Benefits of AI and Automation in ERP</p>
                        <div className="ser-btn1">
                          <a href="#" className="animated-svg-link1">
                            Read More
                            <svg
                              width={24}
                              height={23}
                              viewBox="0 0 24 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                id="dot-1"
                                cx="16.0004"
                                cy="4.80001"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-2"
                                cx="12.7992"
                                cy="1.6"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-3"
                                cx="22.4008"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-4"
                                cx="1.6"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-5"
                                cx="6.40078"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-6"
                                cx="11.1996"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-7"
                                cx="16.0004"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-8"
                                cx="19.1996"
                                cy="14.4"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-9"
                                cx="16.0004"
                                cy="17.6"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-10"
                                cx="12.7992"
                                cy="20.8"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-11"
                                cx="19.1996"
                                cy="8.00002"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="service-item-body fourthser">
                        <h3>
                          <span>Blog</span>
                        </h3>
                        <p>10 Must-Have Features in a Modern ERP System</p>
                        <div className="ser-btn1">
                          <a href="#" className="animated-svg-link1">
                            Read More
                            <svg
                              width={24}
                              height={23}
                              viewBox="0 0 24 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                id="dot-1"
                                cx="16.0004"
                                cy="4.80001"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-2"
                                cx="12.7992"
                                cy="1.6"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-3"
                                cx="22.4008"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-4"
                                cx="1.6"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-5"
                                cx="6.40078"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-6"
                                cx="11.1996"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-7"
                                cx="16.0004"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-8"
                                cx="19.1996"
                                cy="14.4"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-9"
                                cx="16.0004"
                                cy="17.6"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-10"
                                cx="12.7992"
                                cy="20.8"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                              <circle
                                id="dot-11"
                                cx="19.1996"
                                cy="8.00002"
                                r="1.6"
                                fill="#535353"
                                opacity="0.9"
                              ></circle>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-btn">
                    <div className="testimonial-button-prev">
                      <div className="animated-svg-link1 btn-style-3">
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
                      </div>
                    </div>
                    <span className="testspace1" style={{ color: "#fff" }}>
                      1/6
                    </span>
                    <div className="testimonial-button-next">
                      <div className="animated-svg-link1 btn-style-3">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Services Section End */}
        {/* Our Testimonial Section Start */}
        <div className="our-testimonial trsutedtesti pd30">
          <div className="container-fluid">
            <div className="row section-row align-items-center">
              <div className="col-lg-12">
                <div className="section-title text-center headingss">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Trusted by Enterprises Worldwide
                  </h2>
                  <div className="ser-btn2 mt-4">
                    <a href="#" className="animated-svg-link1 btn-style-3">
                      View All
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
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-12">
                {/* Testimonial Slider Start */}
                <div className="testimonial-slider1 testspace">
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
                                  <img src="images/doublequote.svg" alt="" />
                                </div>
                                <div className="icon-box1">
                                  <img
                                    src="images/testimonials/Cold-Chain-Logo-full.png"
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
                                        src="images/testimonials/Cold-Chain-Logo.png"
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
                                  <img src="images/doublequote.svg" alt="" />
                                </div>
                                <div className="icon-box1">
                                  <img src="images/testimonials/a-map.png" alt="" />
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
                                        src="images/testimonials/Ramamurthy Rao.png"
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
                                  <img src="images/doublequote.svg" alt="" />
                                </div>
                                <div className="icon-box1">
                                  <img
                                    src="images/testimonials/Federal-Mogul.png"
                                    alt=""
                                  />
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
                                        src="images/testimonials/Massimiliano A. Milani.png"
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
                                  <img src="images/doublequote.svg" alt="" />
                                </div>
                                <div className="icon-box1">
                                  <img src="images/testimonials/Epicor.png" alt="" />
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
                                        src="images/testimonials/Craig Stephens.png"
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
                                  <img src="images/doublequote.svg" alt="" />
                                </div>
                                <div className="icon-box1">
                                  <img
                                    src="images/testimonials/SAUDI AMERICAN GLASS.png"
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
                                        src="images/testimonials/Rizwanulla Khan.png"
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
                                  <img src="images/doublequote.svg" alt="" />
                                </div>
                                <div className="icon-box1">
                                  <img src="images/testimonials/SAG.png" alt="" />
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
                                        src="images/testimonials/Syed Waseem Wajid.png"
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
                                  <img src="images/doublequote.svg" alt="" />
                                </div>
                                <div className="icon-box1">
                                  <img src="images/testimonials/RAY.png" alt="" />
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
                                        src="images/testimonials/Vinit Agarwal.png"
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
                                  <img src="images/doublequote.svg" alt="" />
                                </div>
                                <div className="icon-box1">
                                  <img src="images/testimonials/NGC.png" alt="" />
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
                                        src="images/testimonials/Kiranjit Kaur.png"
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
        {/* Our Awards Section Start */}
        <div className="Awards">
          <div className="container-fluid">
            <div className="row section-row align-items-center">
              <div className="col-lg-12">
                <div className="section-title text-center m-auto headingss">
                  <h2
                    className="text-anime-style-2 text-dark text-center"
                    data-cursor="-opaque"
                  >
                    Awards
                  </h2>
                </div>
              </div>
            </div>
            {/* Testimonial Slider Start */}
            <div className="testimonial-slider-awards equitywhy">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="awards-waber">
                      <img src="new/aw-1.svg" alt="" />
                      <div className="aw-text-waber">
                        <p>
                          Bestes Neues Produkt Oder Dienstleistung- Software - Alle
                          Anderen Losungen 2017
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="awards-waber">
                      <img src="new/aw-2.jpg" alt="" />
                      <div className="aw-text-waber">
                        <p>Stevie - Epicor EpicPay for the EMEA Market 2017</p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="awards-waber">
                      <img src="new/aw-3.png" alt="" />
                      <div className="aw-text-waber">
                        <p>Epicor Partner of the Year 2016 &amp; 2018</p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="awards-waber">
                      <img src="new/aw-4.png" alt="" />
                      <div className="aw-text-waber">
                        <p>Stevie - L1 Epicor Support Team of the Year 2016</p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="awards-waber">
                      <img src="new/aw-5.png" alt="" />
                      <div className="aw-text-waber">
                        <p>Stevie Company of the Year 2015 &amp; 2017</p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="awards-waber">
                      <img src="new/aw-6.png" alt="" />
                      <div className="aw-text-waber">
                        <p>Stevie People Choice Of the Year 2015 &amp; 2016</p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="awards-waber">
                      <img src="new/aw-7.png" alt="" />
                      <div className="aw-text-waber">
                        <p>Top IT Berater 2014-2015</p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="awards-waber">
                      <img src="new/aw-8.png" alt="" />
                      <div className="aw-text-waber">
                        <p>Beste Berater Brand enis 2018</p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="awards-waber">
                      <img src="new/aw-9.png" alt="" />
                      <div className="aw-text-waber">
                        <p>
                          Stevie - Fastest Growing Company in Europe 2015 &amp; 2016
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="awards-waber">
                      <img src="new/aw-5.png" alt="" />
                      <div className="aw-text-waber">
                        <p>Stevie Company of the Year 2015 &amp; 2017</p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                </div>
                <div className="testimonial-btn-awards mt-10">
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
      </main>
      <Footer />
    </>
  );
}