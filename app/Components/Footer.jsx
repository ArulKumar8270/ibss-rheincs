"use client";
import Link from "next/link";
export default function Footer() {
    return (
        <>
            <footer className="main-footer pd0">
                {/* Footer Main Start */}
                <div className="footer-main pd40">
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
                                                <Link href="https://www.linkedin.com/company/rheinbr%C3%BCcke-it-consulting">
                                                    <i className="fa-brands fa-linkedin" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://x.com/RheinBruckeIT">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/rheinbrucke_itconsulting/">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.facebook.com/RheinBrucke">
                                                    <i className="fa-brands fa-facebook" />
                                                </Link>
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
                                        <Link href="">
                                            <img src="/images/phone.svg" alt="" />
                                            &nbsp; +49 231 292 95619
                                        </Link>
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
                                                <Link href="/overview">Overview </Link>
                                            </li>
                                            <li>
                                                <Link href="/leadership">Leadership</Link>
                                            </li>
                                            <li>
                                                <Link href="/customer-speak">Customer Speaks</Link>
                                            </li>
                                            <li>
                                                <Link href="/success-stories">Success Stories</Link>
                                            </li>
                                            <li>
                                                <Link href="/careers">Careers</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact Us</Link>
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
                                                        <Link href="/corushr">CorusHR </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/MeRLIN">MeRLIN – Strategic Sourcing Software</Link>
                                                    </li>
                                                    <li>
                                                        <span>Enterprise Solutions &amp; Services</span>
                                                    </li>
                                                    <li>
                                                        <Link href="/epicor">Epicor</Link>
                                                    </li>

                                                    <li>
                                                        <Link href="/SAP">SAP</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/microsoft-dynamics-solutions">MS Dynamics</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/sugar-CRM">Sugar CRM</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ERP-customer-excellence">ERP Customer Excellence</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul>
                                                    <li>
                                                        <span>Digital Solutions</span>
                                                    </li>
                                                    <li>
                                                        <Link href="/AI-ML">AI/ML </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ecommerce">eCommerce</Link>
                                                    </li>
                                                    <li>
                                                        <span>Digital Services</span>
                                                    </li>
                                                    <li>
                                                        <Link href="/Architecture">Architecture &amp; App Modernisation</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/data-engineering-warehousing">Data Engineering and Warehousing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/enterprise-solutions">Enterprise Software</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/AM-S">A M &amp; S</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/user-exprience">User Experience</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/commercetools">Commercetools</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/fluent-commerce">Fluent Commerce</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ms-technology">MS Technologies </Link>
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
                                            <Link href="/vertical-retail">Brand Owners and Vertical Retailers </Link>
                                        </li>
                                        <li>
                                            <Link href="/industries-retail">Retail Industry </Link>
                                        </li>
                                        <li>
                                            <Link href="/supply-chain">Distribution and Supply Chain</Link>
                                        </li>
                                        <li>
                                            <Link href="/discrete-manufacturing">Discrete Manufacturing </Link>
                                        </li>
                                        <li>
                                            <Link href="/automotive">Automotive Industry</Link>
                                        </li>
                                        <li>
                                            <Link href="/epc">Engineering Procurement and Construction </Link>
                                        </li>
                                        <li>
                                            <Link href="/process-manufacturing">Process Manufacturing </Link>
                                        </li>
                                        <li>
                                            <Link href="/private-quity">Private Equity &amp; Funding Backed Ventures </Link>
                                        </li>
                                        <li>
                                            <Link href="/cable-manufacturing">Cable Manufacturing </Link>
                                        </li>
                                        <li>
                                            <Link href="/interior-design">Interior Design </Link>
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
                                            <Link href="/blog">Blog </Link>
                                        </li>
                                        <li>
                                            <Link href="/case-study-details">Case studies</Link>
                                        </li>
                                        <li>
                                            <Link href="/webinars">Webinars</Link>
                                        </li>
                                        <li>
                                            <Link href="/collaterals">Collaterals</Link>
                                        </li>
                                        <li>
                                            <Link href="/corporate-videos">Videos</Link>
                                        </li>
                                        <li>
                                            <Link href="/news-events">News and Events</Link>
                                        </li>
                                        <li>
                                            <Link href="/Faq">FAQs</Link>
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
                                                        <Link href="/overview">Overview </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/leadership">Leadership</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/customer-speak">Customer Speaks</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/success-stories">Success Stories</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/careers">Careers</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/contact">Contact Us</Link>
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
                                                    <Link href="/blog">Blog </Link>
                                                </li>
                                                <li>
                                                    <Link href="/case-study-details">Case studies</Link>
                                                </li>
                                                <li>
                                                    <Link href="/webinars">Webinars</Link>
                                                </li>
                                                <li>
                                                    <Link href="/collaterals">Collaterals</Link>
                                                </li>
                                                <li>
                                                    <Link href="/corporate-videos">Videos</Link>
                                                </li>
                                                <li>
                                                    <Link href="/news-events">News and Events</Link>
                                                </li>
                                                <li>
                                                    <Link href="/Faq">FAQs</Link>
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
                                                        <Link href="/corushr">CorusHR </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/MeRLIN">MeRLIN – Strategic Sourcing Software</Link>
                                                    </li>
                                                    <li>
                                                        <b>Enterprise Solutions &amp; Services</b>
                                                    </li>
                                                    <li>
                                                        <Link href="/epicor">Epicor</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/microsoft-dynamics-solutions">MS Dynamics</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/SAP">SAP</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/sugar-CRM">Sugar CRM</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ERP-customer-excellence">ERP Customer Excellence</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 col-6">
                                                <ul>
                                                    <li>
                                                        <b>Digital Solutions</b>
                                                    </li>
                                                    <li>
                                                        <Link href="/AI-ML">AI/ML </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ecommerce">eCommerce</Link>
                                                    </li>
                                                    <li>
                                                        <b>Digital Services</b>
                                                    </li>
                                                    <li>
                                                        <Link href="/Architecture">Architecture &amp; App Modernisation</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/data-engineering-warehousing">Data Engineering and Warehousing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/enterprise-solutions">Enterprise Software</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/AM-S">A M &amp; S</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/user-exprience">User Experience</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/commercetools">Commercetools</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/fluent-commerce">Fluent Commerce</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ms-technology">MS Technologies </Link>
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
                                                    <Link href="/vertical-retail">
                                                        Brand Owners and Vertical Retailers{" "}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/industries-retail">Retail Industry </Link>
                                                </li>
                                                <li>
                                                    <Link href="/supply-chain">Distribution and Supply Chain</Link>
                                                </li>
                                                <li>
                                                    <Link href="/discrete-manufacturing">Discrete Manufacturing </Link>
                                                </li>
                                                <li>
                                                    <Link href="/automotive">Automotive Industry</Link>
                                                </li>
                                            </div>
                                            <div className=" col-6">
                                                <li>
                                                    <Link href="/epc">Engineering Procurement and Construction </Link>
                                                </li>
                                                <li>
                                                    <Link href="/process-manufacturing">Process Manufacturing </Link>
                                                </li>
                                                <li>
                                                    <Link href="/private-quity">
                                                        Private Equity &amp; Funding Backed Ventures{" "}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/cable-manufacturing">Cable Manufacturing </Link>
                                                </li>
                                                <li>
                                                    <Link href="/interior-design">Interior Design </Link>
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
                                                <Link href="">Sitemap</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <Link href="">Impressum</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <Link href="">Privacy</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                {" "}
                                                <Link href="">Terms</Link>
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
                                                <Link href="">Sitemap</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <Link href="">Impressum</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <Link href="">Privacy</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                {" "}
                                                <Link href="">Terms</Link>
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