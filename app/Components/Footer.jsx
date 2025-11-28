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
                                                <a href="index.php">Overview </a>
                                            </li>
                                            <li>
                                                <a href="#!">Leadership</a>
                                            </li>
                                            <li>
                                                <a href="#!">Customer Speaks</a>
                                            </li>
                                            <li>
                                                <a href="#!">Success Stories</a>
                                            </li>
                                            <li>
                                                <a href="#!">Careers</a>
                                            </li>
                                            <li>
                                                <a href="#!">Contact Us</a>
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
                                                        <a href="index.php">CorusHR </a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">MeRLIN – Strategic Sourcing Software</a>
                                                    </li>
                                                    <li>
                                                        <span>Enterprise Solutions &amp; Services</span>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Epicor</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">MS Dynamics</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">SAP</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Sugar CRM</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">ERP Customer Excellence</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul>
                                                    <li>
                                                        <span>Digital Solutions</span>
                                                    </li>
                                                    <li>
                                                        <a href="index.php">AI/ML </a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">eCommerce</a>
                                                    </li>
                                                    <li>
                                                        <span>Digital Services</span>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Architecture &amp; App Modernisation</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Data Engineering and Warehousing</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Enterprise Software</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">A M &amp; S</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">User Experience</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Commercetools</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Fluent Commerce</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">MS Technologies </a>
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
                                            <a href="index.php">Brand Owners and Vertical Retailers </a>
                                        </li>
                                        <li>
                                            <a href="#!">Retail Industry </a>
                                        </li>
                                        <li>
                                            <a href="#!">Distribution and Supply Chain</a>
                                        </li>
                                        <li>
                                            <a href="#!">Discrete Manufacturing </a>
                                        </li>
                                        <li>
                                            <a href="#!">Automotive Industry</a>
                                        </li>
                                        <li>
                                            <a href="#!">Engineering Procurement and Construction </a>
                                        </li>
                                        <li>
                                            <a href="#!">Process Manufacturing </a>
                                        </li>
                                        <li>
                                            <a href="#!">Private Equity &amp; Funding Backed Ventures </a>
                                        </li>
                                        <li>
                                            <a href="#!">Cable Manufacturing </a>
                                        </li>
                                        <li>
                                            <a href="#!">Interior Design </a>
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
                                            <a href="#!">Blog </a>
                                        </li>
                                        <li>
                                            <a href="#">Case studies</a>
                                        </li>
                                        <li>
                                            <a href="#">Webinars</a>
                                        </li>
                                        <li>
                                            <a href="#">Collaterals</a>
                                        </li>
                                        <li>
                                            <a href="#">Videos</a>
                                        </li>
                                        <li>
                                            <a href="#">News and Events</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQs</a>
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
                                                        <a href="index.php">Overview </a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Leadership</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Customer Speaks</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Success Stories</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Careers</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Contact Us</a>
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
                                                    <a href="#!">Blog </a>
                                                </li>
                                                <li>
                                                    <a href="#">Case studies</a>
                                                </li>
                                                <li>
                                                    <a href="#">Webinars</a>
                                                </li>
                                                <li>
                                                    <a href="#">Collaterals</a>
                                                </li>
                                                <li>
                                                    <a href="#">Videos</a>
                                                </li>
                                                <li>
                                                    <a href="#">News and Events</a>
                                                </li>
                                                <li>
                                                    <a href="#">FAQs</a>
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
                                                        <a href="index.php">CorusHR </a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">MeRLIN – Strategic Sourcing Software</a>
                                                    </li>
                                                    <li>
                                                        <b>Enterprise Solutions &amp; Services</b>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Epicor</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">MS Dynamics</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">SAP</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Sugar CRM</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">ERP Customer Excellence</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 col-6">
                                                <ul>
                                                    <li>
                                                        <b>Digital Solutions</b>
                                                    </li>
                                                    <li>
                                                        <a href="index.php">AI/ML </a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">eCommerce</a>
                                                    </li>
                                                    <li>
                                                        <b>Digital Services</b>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Architecture &amp; App Modernisation</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Data Engineering and Warehousing</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Enterprise Software</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">A M &amp; S</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">User Experience</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Commercetools</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Fluent Commerce</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">MS Technologies </a>
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
                                                    <a href="index.php">
                                                        Brand Owners and Vertical Retailers{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">Retail Industry </a>
                                                </li>
                                                <li>
                                                    <a href="#!">Distribution and Supply Chain</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Discrete Manufacturing </a>
                                                </li>
                                                <li>
                                                    <a href="#!">Automotive Industry</a>
                                                </li>
                                            </div>
                                            <div className=" col-6">
                                                <li>
                                                    <a href="#!">Engineering Procurement and Construction </a>
                                                </li>
                                                <li>
                                                    <a href="#!">Process Manufacturing </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        Private Equity &amp; Funding Backed Ventures{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">Cable Manufacturing </a>
                                                </li>
                                                <li>
                                                    <a href="#!">Interior Design </a>
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