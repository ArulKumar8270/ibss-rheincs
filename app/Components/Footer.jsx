"use client";
import { useEffect } from "react";
import { NavArrowRight } from "../icons";
import React from "react";
export default function Footer() {
    return (
        <>
            <footer className="main-footer pd0">
                {/* Footer Main Start */}
                <div className="footer-main">
                    <div className="container">
                        <hr className="firsthr" />
                        <div className="row pd60 align-items-center secondrow">
                            <div className="col-sm-4">
                                <div className="about-footer">
                                    <div className="footer-logo">
                                        <img src="/images/rlogo.png" alt="" />
                                    </div>
                                    <div className="header-social-links">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="places text-right">
                                    <ul>
                                        <li>Netherlands</li>
                                        <li>|</li>
                                        <li>Germany</li>
                                        <li>|</li>
                                        <li>USA</li>
                                        <li>|</li>
                                        <li>India</li>
                                        <li>|</li>
                                        <li>UAE</li>
                                        <li>|</li>
                                        <li>SA</li>
                                    </ul>
                                    <div className="phone">
                                        <a href="">
                                            <img src="/images/phone.svg" alt="" />
                                            &nbsp; +49 231 292 95619
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row mt-50 systemview">
                            <div className="col-lg-2 col-md-6">
                                {/* About Footer start */}
                                <div className="about-footer">
                                    {/* Footer Links start */}
                                    <div className="footer-links">
                                        <h3>About Us</h3>
                                        <ul>
                                            <li>
                                                <a href="/overview">Overview </a>
                                            </li>
                                            <li>
                                                <a href="/leadership">Leadership</a>
                                            </li>
                                            <li>
                                                <a href="/customer-speak">Customer Speaks</a>
                                            </li>
                                            <li>
                                                <a href="/success-stories">Success Stories</a>
                                            </li>
                                            <li>
                                                <a href="/careers">Careers</a>
                                            </li>
                                            <li>
                                                <a href="/contact">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Footer Links end */}
                                </div>
                                {/* About Footer End */}
                            </div>
                            <div className="col-lg-5 col-md-6">
                                {/* About Footer start */}
                                <div className="about-footer">
                                    {/* Footer Links start */}
                                    <div className="footer-links">
                                        <h3>Solutions &amp; Services</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul>
                                                    <li>
                                                        <span>Our Solutions</span>
                                                    </li>
                                                    <li>
                                                        <a href="/corushr">CorusHR </a>
                                                    </li>
                                                    <li>
                                                        <a href="/MeRLIN">MeRLIN – Strategic Sourcing Software</a>
                                                    </li>
                                                    <li>
                                                        <span>Enterprise Solutions &amp; Services</span>
                                                    </li>
                                                    <li>
                                                        <a href="/epicor">Epicor</a>
                                                    </li>
                                                    <li>
                                                        <a href="/microsoft-dynamics-solutions">MS Dynamics</a>
                                                    </li>
                                                    <li>
                                                        <a href="/SAP">SAP</a>
                                                    </li>
                                                    <li>
                                                        <a href="/sugar-CRM">Sugar CRM</a>
                                                    </li>
                                                    <li>
                                                        <a href="/ERP-customer-excellence">ERP Customer Excellence</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul>
                                                    <li>
                                                        <span>Digital Solutions</span>
                                                    </li>
                                                    <li>
                                                        <a href="/AI-ML">AI/ML </a>
                                                    </li>
                                                    <li>
                                                        <a href="/ecommerce">eCommerce</a>
                                                    </li>
                                                    <li>
                                                        <span>Digital Services</span>
                                                    </li>
                                                    <li>
                                                        <a href="/Architecture">Architecture &amp; App Modernisation</a>
                                                    </li>
                                                    <li>
                                                        <a href="/data-engineering-warehousing">Data Engineering and Warehousing</a>
                                                    </li>
                                                    <li>
                                                        <a href="/enterprise-solutions">Enterprise Software</a>
                                                    </li>
                                                    <li>
                                                        <a href="/AM-S">A M &amp; S</a>
                                                    </li>
                                                    <li>
                                                        <a href="/user-exprience">User Experience</a>
                                                    </li>
                                                    <li>
                                                        <a href="/commercetools">Commercetools</a>
                                                    </li>
                                                    <li>
                                                        <a href="/fluent-commerce">Fluent Commerce</a>
                                                    </li>
                                                    <li>
                                                        <a href="/ms-technology">MS Technologies </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Footer Links end */}
                                </div>
                                {/* About Footer End */}
                            </div>
                            <div className="col-lg-3 col-md-3 col-6">
                                {/* Footer Links start */}
                                <div className="footer-links">
                                    <h3>Industries</h3>
                                    <ul>
                                        <li>
                                            <a href="/vertical-retail">Brand Owners and Vertical Retailers </a>
                                        </li>
                                        <li>
                                            <a href="/industries-retail">Retail Industry </a>
                                        </li>
                                        <li>
                                            <a href="/supply-chain">Distribution and Supply Chain</a>
                                        </li>
                                        <li>
                                            <a href="/discrete-manufacturing">Discrete Manufacturing </a>
                                        </li>
                                        <li>
                                            <a href="/automotive">Automotive Industry</a>
                                        </li>
                                        <li>
                                            <a href="/epc">Engineering Procurement and Construction </a>
                                        </li>
                                        <li>
                                            <a href="/process-manufacturing">Process Manufacturing </a>
                                        </li>
                                        <li>
                                            <a href="/private-quity">Private Equity &amp; Funding Backed Ventures </a>
                                        </li>
                                        <li>
                                            <a href="/cable-manufacturing">Cable Manufacturing </a>
                                        </li>
                                        <li>
                                            <a href="/interior-design">Interior Design </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Footer Links end */}
                            </div>
                            <div className="col-lg-2 col-md-3 col-6">
                                {/* Footer Links start */}
                                <div className="footer-links">
                                    <h3>Resources</h3>
                                    <ul>
                                        <li>
                                            <a href="/blog">Blog </a>
                                        </li>
                                        <li>
                                            <a href="/case-study-details">Case studies</a>
                                        </li>
                                        <li>
                                            <a href="/webinars">Webinars</a>
                                        </li>
                                        <li>
                                            <a href="/collaterals">Collaterals</a>
                                        </li>
                                        <li>
                                            <a href="/corporate-videos">Videos</a>
                                        </li>
                                        <li>
                                            <a href="/news-events">News and Events</a>
                                        </li>
                                        <li>
                                            <a href="/Faq">FAQs</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Footer Links end */}
                            </div>
                        </div>
                        <div className="row mt-30 mobileview">
                            <div className="col-12 mb20">
                                <div className="row">
                                    <div className=" col-6">
                                        {/* About Footer start */}
                                        <div className="about-footer">
                                            {/* Footer Links start */}
                                            <div className="footer-links">
                                                <h3>About Us</h3>
                                                <ul>
                                                    <li>
                                                        <a href="/overview">Overview </a>
                                                    </li>
                                                    <li>
                                                        <a href="/leadership">Leadership</a>
                                                    </li>
                                                    <li>
                                                        <a href="/customer-speak">Customer Speaks</a>
                                                    </li>
                                                    <li>
                                                        <a href="/success-stories">Success Stories</a>
                                                    </li>
                                                    <li>
                                                        <a href="/careers">Careers</a>
                                                    </li>
                                                    <li>
                                                        <a href="/contact">Contact Us</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Footer Links end */}
                                        </div>
                                        {/* About Footer End */}
                                    </div>
                                    <div className=" col-6">
                                        {/* Footer Links start */}
                                        <div className="footer-links">
                                            <h3>Resources</h3>
                                            <ul>
                                                <li>
                                                    <a href="/blog">Blog </a>
                                                </li>
                                                <li>
                                                    <a href="/case-study-details">Case studies</a>
                                                </li>
                                                <li>
                                                    <a href="/webinars">Webinars</a>
                                                </li>
                                                <li>
                                                    <a href="/collaterals">Collaterals</a>
                                                </li>
                                                <li>
                                                    <a href="/corporate-videos">Videos</a>
                                                </li>
                                                <li>
                                                    <a href="/news-events">News and Events</a>
                                                </li>
                                                <li>
                                                    <a href="/Faq">FAQs</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Footer Links end */}
                                    </div>
                                </div>
                            </div>
                            <div className=" col-12 mb20">
                                {/* About Footer start */}
                                <div className="about-footer">
                                    {/* Footer Links start */}
                                    <div className="footer-links">
                                        <h3>Solutions &amp; Services</h3>
                                        <div className="row">
                                            <div className="col-sm-6 col-6">
                                                <ul>
                                                    <li>
                                                        <b>Our Solutions</b>
                                                    </li>
                                                    <li>
                                                        <a href="/corushr">CorusHR </a>
                                                    </li>
                                                    <li>
                                                        <a href="/MeRLIN">MeRLIN – Strategic Sourcing Software</a>
                                                    </li>
                                                    <li>
                                                        <b>Enterprise Solutions &amp; Services</b>
                                                    </li>
                                                    <li>
                                                        <a href="/epicor">Epicor</a>
                                                    </li>
                                                    <li>
                                                        <a href="/microsoft-dynamics-solutions">MS Dynamics</a>
                                                    </li>
                                                    <li>
                                                        <a href="/SAP">SAP</a>
                                                    </li>
                                                    <li>
                                                        <a href="/sugar-CRM">Sugar CRM</a>
                                                    </li>
                                                    <li>
                                                        <a href="/ERP-customer-excellence">ERP Customer Excellence</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 col-6">
                                                <ul>
                                                    <li>
                                                        <b>Digital Solutions</b>
                                                    </li>
                                                    <li>
                                                        <a href="/AI-ML">AI/ML </a>
                                                    </li>
                                                    <li>
                                                        <a href="/ecommerce">eCommerce</a>
                                                    </li>
                                                    <li>
                                                        <b>Digital Services</b>
                                                    </li>
                                                    <li>
                                                        <a href="/Architecture">Architecture &amp; App Modernisation</a>
                                                    </li>
                                                    <li>
                                                        <a href="/data-engineering-warehousing">Data Engineering and Warehousing</a>
                                                    </li>
                                                    <li>
                                                        <a href="/enterprise-solutions">Enterprise Software</a>
                                                    </li>
                                                    <li>
                                                        <a href="/AM-S">A M &amp; S</a>
                                                    </li>
                                                    <li>
                                                        <a href="/user-exprience">User Experience</a>
                                                    </li>
                                                    <li>
                                                        <a href="/commercetools">Commercetools</a>
                                                    </li>
                                                    <li>
                                                        <a href="/fluent-commerce">Fluent Commerce</a>
                                                    </li>
                                                    <li>
                                                        <a href="/ms-technology">MS Technologies </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Footer Links end */}
                                </div>
                                {/* About Footer End */}
                            </div>
                            <div className=" col-12">
                                {/* Footer Links start */}
                                <div className="footer-links">
                                    <h3>Industries</h3>
                                    <ul>
                                        <div className="row">
                                            <div className=" col-6">
                                                <li>
                                                    <a href="/vertical-retail">
                                                        Brand Owners and Vertical Retailers{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/industries-retail">Retail Industry </a>
                                                </li>
                                                <li>
                                                    <a href="/supply-chain">Distribution and Supply Chain</a>
                                                </li>
                                                <li>
                                                    <a href="/discrete-manufacturing">Discrete Manufacturing </a>
                                                </li>
                                                <li>
                                                    <a href="/automotive">Automotive Industry</a>
                                                </li>
                                            </div>
                                            <div className=" col-6">
                                                <li>
                                                    <a href="/epc">Engineering Procurement and Construction </a>
                                                </li>
                                                <li>
                                                    <a href="/process-manufacturing">Process Manufacturing </a>
                                                </li>
                                                <li>
                                                    <a href="/private-quity">
                                                        Private Equity &amp; Funding Backed Ventures{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/cable-manufacturing">Cable Manufacturing </a>
                                                </li>
                                                <li>
                                                    <a href="/interior-design">Interior Design </a>
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                {/* Footer Links end */}
                            </div>
                        </div>
                        {/* Footer Copyright Section Start */}
                        <div className="footer-copyright systemview">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    {/* Footer Copyright Start */}
                                    <div className="footer-copyright-text">
                                        <p>© RheinBrücke IT Consulting BV - All Rights Reserved. </p>
                                    </div>
                                    {/* Footer Copyright End */}
                                </div>
                                <div className="col-sm-6">
                                    <div className="places rights text-right">
                                        <ul>
                                            <li>
                                                <a href="">Sitemap</a>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <a href="">Impressum</a>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <a href="">Privacy</a>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                {" "}
                                                <a href="">Terms</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-copyright mobileview">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <div className="places rights text-right">
                                        <ul>
                                            <li>
                                                <a href="">Sitemap</a>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <a href="">Impressum</a>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <a href="">Privacy</a>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                {" "}
                                                <a href="">Terms</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    {/* Footer Copyright Start */}
                                    <div className="footer-copyright-text">
                                        <p>
                                            © RheinBrücke IT Consulting BV - <br /> All Rights Reserved.{" "}
                                        </p>
                                    </div>
                                    {/* Footer Copyright End */}
                                </div>
                            </div>
                        </div>
                        {/* Footer Copyright Section End */}
                    </div>
                </div>
                {/* Footer Main End */}
                {/* Let's Work Together start */}
                <div className="footer-work-together">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="work-together-box">
                                    {/* Work Together Content Start */}
                                    <div className="work-together-content">
                                        <img src="/images/Rheinbrucke_.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Let's Work Together end */}
            </footer>
            <div className="footimg">
                <img src="/images/footimg.png" alt="" />
            </div>
        </>
    );
}