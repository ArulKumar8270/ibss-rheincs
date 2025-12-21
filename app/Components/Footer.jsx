"use client";
import Link from "next/link";
import useTranslation from "../hooks/useTranslation";
export default function Footer() {
    const { t } = useTranslation();
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
                                                <Link href="https://www.linkedin.com/company/rheinbr%C3%BCcke-it-consulting" target="_blank">
                                                    <i className="fa-brands fa-linkedin" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://x.com/RheinBruckeIT" target="_blank">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/rheinbrucke_itconsulting/" target="_blank">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.facebook.com/RheinBrucke" target="_blank">
                                                    <i className="fa-brands fa-facebook" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.youtube.com/@rheinbruckeitconsulting" target="_blank">
                                                    <i className="fa-brands fa-youtube" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="places text-right">
                                    <ul>
                                        <li>{t("Netherlands")}</li>
                                        <li>|</li>
                                        <li>Germany</li>
                                        <li>|</li>
                                        <li>USA</li>
                                        <li>|</li>
                                        <li>India</li>
                                        <li>|</li>
                                        <li>UAE</li>
                                        <li>|</li>
                                        <li>{t("KSA")}</li>
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
                                        <h3>{t("About Us")}</h3>
                                        <ul>
                                            <li>
                                                <Link href="/about-us/overview">{t("Overview")}</Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us/leadership">{t("Leadership")}</Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us/customer-speak">{t("Customers Speak")}</Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us/success-stories">{t("Success Stories")}</Link>
                                            </li>
                                            <li>
                                                <Link href="/careers">{t("Careers")}</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">{t("Contact Us")}</Link>
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
                                        <h3>{t("Solutions & Services")}</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul>
                                                    <li>
                                                        <Link href="/our-solution"><span>{t("Our Solutions")}</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/CorusHR">{t("CorusHR")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/MeRLIN-strategic-sourcing-software">{t("MeRLIN – Strategic Sourcing Software")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/erp"><span>{t("Enterprise Solutions & Services")}</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/epicor">{t("Epicor")}</Link>
                                                    </li>

                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/sap">{t("SAP")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/ms-dynamics">{t("MS Dynamics")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/sugar-crm">{t("Sugar CRM")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ERP-customer-excellence">{t("ERP Customer Excellence")}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul>
                                                <li>
                                                        <Link href="/digital-services-and-solutions"><span>{t("Digital Solutions and Services")}</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/digital-solutions">{t("Digital Solutions")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/business-intelligence">{t("BI & Analytics")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/AI-ML">{t("AI/ML")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Ecommerce">{t("eCommerce")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/digital-services">{t("Digital Services")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Architecture">{t("Architecture & App Modernisation")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/data-engineering-warehousing">{t("Data Engineering and Warehousing")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/erp">{t("Enterprise Software")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/AM-S">{t("A M & S")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/user-exprience">{t("User Experience")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Commercetools">{t("Commercetools")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/fluent-commerce">{t("Fluent Commerce")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ms-technology">{t("MS Technologies")}</Link>
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
                                    <h3>{t("Industries")}</h3>
                                    <ul>
                                        <li>
                                            <Link href="/Brand-owners-and-vertical-retail">{t("Brand Owners and Vertical Retailers")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/industries-retail">{t("Retail Industry")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/Distribution-and-supply-chain">{t("Distribution and Supply Chain")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/discrete-manufacturing">{t("Discrete Manufacturing")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/Automotive">{t("Automotive Industry")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/Engineering-Procurement-Construction-(EPC)">{t("Engineering Procurement and Construction")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/process-manufacturing">{t("Process Manufacturing")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/Private-Equity-Funding-Backed-Ventures">{t("Private Equity & Funding Backed Ventures")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/Cable-manufacturing">{t("Cable Manufacturing")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/interior-design">{t("Interior Design")}</Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* Footer Links end */}
                            </div>
                            <div className="col-lg-2 col-md-3 col-6">
                                {/* Footer Links start */}
                                <div className="footer-links">
                                    <h3>{t("Resources")}</h3>
                                    <ul>
                                        <li>
                                            <Link href="/Blog">{t("Blog")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/Case-study">{t("Case studies")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/webinars">{t("Webinars")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/collaterals">{t("Collaterals")}</Link>
                                        </li>
                                        <li>
                                            <Link href="/corporate-videos">Videos</Link>
                                        </li>
                                        <li>
                                            <Link href="/news-events">{t("News and Events")}</Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/Faq">FAQs</Link>
                                        </li> */}
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
                                                <h3>{t("About Us")}</h3>
                                                <ul>
                                                    <li>
                                                        <Link href="/about-us/overview">{t("Overview")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/about-us/leadership">{t("Leadership")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/about-us/customer-speak">{t("Customers Speak")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/about-us/success-stories">{t("Success Stories")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/careers">{t("Careers")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/contact-us">{t("Contact Us")}</Link>
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
                                            <h3>{t("Resources")}</h3>
                                            <ul>
                                                <li>
                                                    <Link href="/Blog">{t("Blog")}</Link>
                                                </li>
                                                {/* <li>
                                                    <Link href="/case-study-details">Case studies</Link>
                                                </li> */}
                                                <li>
                                                    <Link href="/webinars">{t("Webinars")}</Link>
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
                                                        <Link href="/our-solution">Our Solutions</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/CorusHR">CorusHR </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/MeRLIN-strategic-sourcing-software">MeRLIN – Strategic Sourcing Software</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/erp">Enterprise Solutions &amp; Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/epicor">Epicor</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/ms-dynamics">MS Dynamics</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/sap">SAP</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/sugar-crm">{t("Sugar CRM")}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ERP-customer-excellence">ERP Customer Excellence</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 col-6">
                                                <ul>
                                                    <li>
                                                        <Link href="/digital-services-and-solutions">Digital Solutions and Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/digital-solutions">Digital Solutions</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/business-intelligence">BI & Analytics</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/AI-ML">AI/ML </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Ecommerce">eCommerce</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/digital-services">Digital Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Architecture">Architecture &amp; App Modernisation</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/data-engineering-warehousing">Data Engineering and Warehousing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/erp">Enterprise Software</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/AM-S">A M &amp; S</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/user-exprience">User Experience</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Commercetools">Commercetools</Link>
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
                                                    <Link href="/Brand-owners-and-vertical-retail">
                                                        Brand Owners and Vertical Retailers{" "}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/industries-retail">Retail Industry </Link>
                                                </li>
                                                <li>
                                                    <Link href="/Distribution-and-supply-chain">Distribution and Supply Chain</Link>
                                                </li>
                                                <li>
                                                    <Link href="/discrete-manufacturing">Discrete Manufacturing </Link>
                                                </li>
                                                <li>
                                                    <Link href="/Automotive">Automotive Industry</Link>
                                                </li>
                                            </div>
                                            <div className=" col-6">
                                                <li>
                                                    <Link href="/Engineering-Procurement-Construction-(EPC)">Engineering Procurement and Construction </Link>
                                                </li>
                                                <li>
                                                    <Link href="/process-manufacturing">Process Manufacturing </Link>
                                                </li>
                                                <li>
                                                    <Link href="/Private-Equity-Funding-Backed-Ventures">
                                                        Private Equity &amp; Funding Backed Ventures{" "}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/Cable-manufacturing">Cable Manufacturing </Link>
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
                                                <Link href="/sitemap">Sitemap</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <Link href="/impressum">Impressum</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <Link href="/privacy">Privacy</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                {" "}
                                                <Link href="/terms">Terms</Link>
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
                                                <Link href="/sitemap">Sitemap</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <Link href="/impressum">Impressum</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                <Link href="/privacy">Privacy</Link>
                                            </li>
                                            <li>|</li>
                                            <li>
                                                {" "}
                                                <Link href="/terms">Terms</Link>
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