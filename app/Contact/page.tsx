"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
export default function AlMl() {
    return (
        <CommomLayout>

            <>
                <div className="contect-waber">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="section-title">
                                    <h2
                                        className="text-anime-style-2 text-white "
                                        data-cursor="-opaque"
                                    >
                                        Talk to Our Experts
                                    </h2>
                                    <p className="">
                                        {" "}
                                        Thank you for your interest in RheinBrücke. Please contact us by
                                        either visiting our office at the locations provided or write to
                                        us for more information on how RheinBrücke can help you stay ahead
                                        of competition. For additional information on our IT consulting
                                        services, solutions or industry expertise, please visit the
                                        relevant pages on our website.{" "}
                                    </p>
                                </div>
                                <div className="contect-call">
                                    <img src="/new/contect-call.svg" alt="" />{" "}
                                    <a href=""> +49 231 292 95619</a>
                                </div>
                                <div className="contect-call">
                                    <img src="/new/c-mail.svg" alt="" /> <a href=""> info@rheincs.com</a>
                                </div>
                                <div className="contect-call sos">
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/company/rheinbr%C3%BCcke-it-consulting"
                                            target="_blank"
                                        >
                                            <i className="fa-brands fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/RheinBruckeIT" target="_blank">
                                            <i className="fa-brands fa-x-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/rheinbrucke_itconsulting/"
                                            target="_blank"
                                        >
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/RheinBrucke" target="_blank">
                                            <i className="fa-brands fa-facebook" />
                                        </a>
                                    </li>
                                </div>
                                <div className="chat-main-waber">
                                    <div className="chat-btn-1">
                                        <img src="/new/chat-btn.svg" alt="" />
                                        <p>Chat With Us</p>
                                    </div>
                                    <div className="chat-btn-1">
                                        <img src="/new/chat-3.svg" alt="" />
                                        <p>Become a Partner</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="contect-enq-waber">
                                    <h2> Let’s Connect With Us</h2>
                                    <p className="text-dark">
                                        Complete the two-step process and submit your requirements — our
                                        team will get in touch with you shortly.
                                    </p>
                                    <form action="#" method="post" className="row g-3 pp-0">
                                        {/* Full Name */}
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                className="form-control custom-form-control"
                                                name="fullName"
                                                placeholder="Enter Your Full Name*"
                                                required=""
                                            />
                                        </div>
                                        {/* Phone Number with Country Code */}
                                        <div className="col-md-6">
                                            <div className="input-group custom-form-control">
                                                <select
                                                    className="form-select"
                                                    name="countryCode"
                                                    required=""
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
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        {/* Email Address */}
                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                className="form-control custom-form-control"
                                                name="email"
                                                placeholder="Enter Your Email Address*"
                                                required=""
                                            />
                                        </div>
                                        {/* Company Name */}
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control custom-form-control"
                                                name="companyName"
                                                placeholder="Enter Your Company Name*"
                                                required=""
                                            />
                                        </div>
                                        {/* Select Any One */}
                                        <div className="col-md-6">
                                            <select
                                                className="form-select custom-form-control"
                                                name="selection"
                                                required=""
                                            >
                                                <option value="" disabled="" selected="">
                                                    Select Any One
                                                </option>
                                                <option value="service1">Service 1</option>
                                                <option value="service2">Service 2</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        {/* Message */}
                                        <div className="col-12">
                                            <textarea
                                                className="form-control custom-form-control"
                                                name="message"
                                                placeholder="Message"
                                                rows={5}
                                                defaultValue={""}
                                            />
                                        </div>
                                        {/* Submit Button (Optional) */}
                                        <div className="col-12">
                                            <div className="ser-btn2">
                                                <a href="#" className="animated-svg-link1 btn-style-3">
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
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-waber">
                    <div className="container">
                        <div className="section-title">
                            <h2
                                className="text-anime-style-2 text-center text-dark "
                                data-cursor="-opaque"
                            >
                                Talk to Our Experts
                            </h2>
                            <ul className="contres-15">
                                <li> Netherlands</li>
                                <li>Germany</li>
                                <li>USA</li>
                                <li>India</li>
                                <li>UAE</li>
                            </ul>
                        </div>
                        <div className="map-img-waber">
                            <img src="/new/map.svg" alt="" />
                            <div className="locat-icon location-1">
                                <button
                                    id="myPopover"
                                    type="button"
                                    className="unstyld-btn"
                                    data-bs-toggle="popover"
                                    data-bs-placement="left"
                                    data-bs-content='<div class="too-con-waber">
              <h4> Netherlands</h4>
              <p>
                  Netherlands <br>
                  RheinBrücke IT Consulting BV, <br>Wim Duisenbergplantsoen 31,<br> 6221 SE Maastricht,
              </p>
              <div class="contect-call2">
                  <img src="/new/contect-call.svg" alt=""> <a href=""> +49 231 292 95619</a>
              </div>
              <div class="contect-call2">
                  <img src="/new/c-mail.svg" alt=""> <a href=""> info@rheincs.com9</a>
              </div>
          </div>'
                                >
                                    <img src="/new/map-locat.svg" alt="" />
                                </button>
                            </div>
                            <div className="locat-icon location-2">
                                <button
                                    id="myPopover2"
                                    type="button"
                                    className="unstyld-btn"
                                    data-bs-toggle="popover"
                                    data-bs-placement="left"
                                    data-bs-content='<div class="too-con-waber">
              <h4> Netherlands</h4>
              <p>
                  Netherlands <br>
                  RheinBrücke IT Consulting BV, <br>Wim Duisenbergplantsoen 31,<br> 6221 SE Maastricht,
              </p>
              <div class="contect-call2">
                  <img src="/new/contect-call.svg" alt=""> <a href=""> +49 231 292 95619</a>
              </div>
              <div class="contect-call2">
                  <img src="/new/c-mail.svg" alt=""> <a href=""> info@rheincs.com9</a>
              </div>
          </div>'
                                >
                                    <img src="/new/map-locat.svg" alt="" />
                                </button>
                            </div>
                            <div className="locat-icon location-3">
                                <button
                                    id="myPopover3"
                                    type="button"
                                    className="unstyld-btn"
                                    data-bs-toggle="popover"
                                    data-bs-placement="left"
                                    data-bs-content='<div class="too-con-waber">
              <h4> Netherlands</h4>
              <p>
                  Netherlands <br>
                  RheinBrücke IT Consulting BV, <br>Wim Duisenbergplantsoen 31,<br> 6221 SE Maastricht,
              </p>
              <div class="contect-call2">
                  <img src="/new/contect-call.svg" alt=""> <a href=""> +49 231 292 95619</a>
              </div>
              <div class="contect-call2">
                  <img src="/new/c-mail.svg" alt=""> <a href=""> info@rheincs.com9</a>
              </div>
          </div>'
                                >
                                    <img src="/new/map-locat.svg" alt="" />
                                </button>
                            </div>
                            <div className="locat-icon location-4">
                                <button
                                    id="myPopover4"
                                    type="button"
                                    className="unstyld-btn"
                                    data-bs-toggle="popover"
                                    data-bs-placement="left"
                                    data-bs-content='<div class="too-con-waber">
              <h4> Netherlands</h4>
              <p>
                  Netherlands <br>
                  RheinBrücke IT Consulting BV, <br>Wim Duisenbergplantsoen 31,<br> 6221 SE Maastricht,
              </p>
              <div class="contect-call2">
                  <img src="/new/contect-call.svg" alt=""> <a href=""> +49 231 292 95619</a>
              </div>
              <div class="contect-call2">
                  <img src="/new/c-mail.svg" alt=""> <a href=""> info@rheincs.com9</a>
              </div>
          </div>'
                                >
                                    <img src="/new/map-locat.svg" alt="" />
                                </button>
                            </div>
                            <div className="locat-icon location-5">
                                <button
                                    id="myPopover5"
                                    type="button"
                                    className="unstyld-btn"
                                    data-bs-toggle="popover"
                                    data-bs-placement="left"
                                    data-bs-content='<div class="too-con-waber">
              <h4> Netherlands</h4>
              <p>
                  Netherlands <br>
                  RheinBrücke IT Consulting BV, <br>Wim Duisenbergplantsoen 31,<br> 6221 SE Maastricht,
              </p>
              <div class="contect-call2">
                  <img src="/new/contect-call.svg" alt=""> <a href=""> +49 231 292 95619</a>
              </div>
              <div class="contect-call2">
                  <img src="/new/c-mail.svg" alt=""> <a href=""> info@rheincs.com9</a>
              </div>
          </div>'
                                >
                                    <img src="/new/map-locat.svg" alt="" />
                                </button>
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
                                        <h2>Ready to accelerate value creation across your portfolio?</h2>
                                        <p>
                                            Contact us today to learn how we can help modernise operations,
                                            de-risk integrations, and improve commercial outcomes.
                                        </p>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="ser-btn text-right">
                                            <a href="contact.php" className="animated-svg-link">
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