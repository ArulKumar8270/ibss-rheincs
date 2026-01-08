"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {useTranslation} from "../hooks/useTranslation";
export default function Footer() {
    const { t } = useTranslation();
    const [showCookieBanner, setShowCookieBanner] = useState(false);
    const getCookie = (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(";");
        for (let c of ca) {
            const trimmed = c.trim();
            if (trimmed.indexOf(nameEQ) === 0) return trimmed.substring(nameEQ.length);
        }
        return null;
    };
    const setCookie = (name, value, days) => {
        const d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/`;
    };
    const acceptCookies = () => {
        try {
            localStorage.setItem("cookieConsent", "accepted");
        } catch {}
        setCookie("CookieConsent", "accepted", 365);
        try {
            window.dispatchEvent(new Event("cookieConsentAccepted"));
        } catch {}
        setShowCookieBanner(false);
    };
    const declineCookies = () => {
        try {
            localStorage.setItem("cookieConsent", "declined");
        } catch {}
        setCookie("CookieConsent", "declined", 365);
        setShowCookieBanner(false);
    };
    const manageCookies = () => {
        
        // Open cookie preferences or scroll to privacy policy
        // You can customize this behavior
        window.location.href = "/privacy#cookies";
    };
    useEffect(() => {
        let stored = null;
        try {
            stored = localStorage.getItem("cookieConsent");
        } catch {}
        const cookieVal = getCookie("CookieConsent");
        if (stored !== "accepted" && cookieVal !== "accepted") setShowCookieBanner(true);
    }, []);
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
                                        <li>KSA</li>
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
                                                        <Link href="/our-solution"><span>Our Solutions</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/CorusHR">CorusHR</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/MeRLIN-strategic-sourcing-software">MeRLIN – Strategic Sourcing Software</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/erp"><span>Enterprise Solutions & Services</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/epicor">Epicor</Link>
                                                    </li>

                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/sap">SAP</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/ms-dynamics">MS Dynamics</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/sugar-crm">Sugar CRM</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ERP-customer-excellence">ERP Customer Excellence</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul>
                                                <li>
                                                        <Link href="/solutions/digital-services-and-solutions/"><span>Digital Solutions and Services</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/digital-solutions">Digital Solutions</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/business-intelligence">BI & Analytics</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/AI-ML">AI/ML</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Ecommerce">eCommerce</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/digital-services">Digital Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/Architecture">Architecture & App Modernisation</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/data-engineering-warehousing">Data Engineering and Warehousing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/solutions/erp-enterprise-solutions-and-services/erp">Enterprise Software</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/AM-S">A M & S</Link>
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
                                                        <Link href="/ms-technology">MS Technologies</Link>
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
                                            <Link href="/Brand-owners-and-vertical-retail">Brand Owners and Vertical Retailers</Link>
                                        </li>
                                        <li>
                                            <Link href="/industries-retail">Retail Industry</Link>
                                        </li>
                                        <li>
                                            <Link href="/Distribution-and-supply-chain">Distribution and Supply Chain</Link>
                                        </li>
                                        <li>
                                            <Link href="/discrete-manufacturing">Discrete Manufacturing</Link>
                                        </li>
                                        <li>
                                            <Link href="/Automotive">Automotive Industry</Link>
                                        </li>
                                        <li>
                                            <Link href="/Engineering-Procurement-Construction-(EPC)">Engineering Procurement and Construction</Link>
                                        </li>
                                        <li>
                                            <Link href="/process-manufacturing">Process Manufacturing</Link>
                                        </li>
                                        <li>
                                            <Link href="/Private-Equity-Funding-Backed-Ventures">Private Equity & Funding Backed Ventures</Link>
                                        </li>
                                        <li>
                                            <Link href="/Cable-manufacturing">Cable Manufacturing</Link>
                                        </li>
                                        <li>
                                            <Link href="/interior-design">Interior Design</Link>
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
                                                <Link href="/Case-study">{t("Case Studies")}</Link>
                                            </li>
                                            <li>
                                                <Link href="/webinars">{t("Webinars")}</Link>
                                            </li>
                                            <li>
                                                <Link href="/collaterals">{t("Collaterals")}</Link>
                                            </li>
                                            <li>
                                                <Link href="/corporate-videos">{t("Videos")}</Link>
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
                                                <h3>About Us</h3>
                                                <ul>
                                                    <li>
                                                        <Link href="/about-us/overview">Overview</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/about-us/leadership">Leadership</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/about-us/customer-speak">Customers Speak</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/about-us/success-stories">Success Stories</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/careers">Careers</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/contact-us">Contact Us</Link>
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
                                                    <Link href="/Blog">Blog</Link>
                                                </li>
                                                {/* <li>
                                                    <Link href="/case-study-details">Case studies</Link>
                                                </li> */}
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
                                                        <Link href="/sugar-crm">Sugar CRM</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ERP-customer-excellence">ERP Customer Excellence</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 col-6">
                                                <ul>
                                                    <li>
                                                        <Link href="/solutions/digital-services-and-solutions/">Digital Solutions and Services</Link>
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
                                        <h3>{t("Industries")}</h3>
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
                                            {/* <li>
                                                <Link href="/sitemap">Sitemap</Link>
                                            </li>
                                            <li>|</li> */}
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
            {showCookieBanner && (
                <div
                    style={{
                        position: "fixed",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                        zIndex: 2147483647,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        backdropFilter: "blur(4px)",
                    }}
                    onClick={(e) => {
                        // Close if clicking outside the banner
                        if (e.target === e.currentTarget) {
                            // Optional: Don't close on outside click, or add this behavior
                        }
                    }}
                >
                    <div
                        style={{
                            maxWidth: 600,
                            width: "90%",
                            margin: "0 auto",
                            background: "#fff",
                            color: "#333",
                            borderRadius: 12,
                            padding: "24px 28px",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                            position: "relative",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3
                            style={{
                                fontSize: "20px",
                                fontWeight: 700,
                                color: "#1a1a1a",
                                marginBottom: "16px",
                                lineHeight: "1.4",
                            }}
                        >
                            How we use cookies and your consent
                        </h3>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "#4a4a4a",
                                lineHeight: "1.6",
                                marginBottom: "24px",
                            }}
                        >
                            We use cookies and similar technologies ('Cookies') on our websites to improve them, measure their performance, understand our audience and enhance the user experience. On some sites, we also use Cookies to show ads based on users' browsing activities and interests on the site and other sites. Click 'Manage Cookies' below to learn what Cookies we use on this site and why. You can always change your consent preferences using the 'Manage Cookies' tool at the bottom of the screen. This includes rejecting some or all Cookies, except those that are strictly necessary for the site to work.
                        </p>
                        <div
                            style={{
                                display: "flex",
                                gap: "12px",
                                flexWrap: "wrap",
                                justifyContent: "flex-end",
                            }}
                        >
                            <button
                                onClick={acceptCookies}
                                style={{
                                    background: "#082326",
                                    color: "#fff",
                                    border: 0,
                                    borderRadius: 6,
                                    padding: "8px 14px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#061a1c";
                                    e.currentTarget.style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "#082326";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                Accept cookies
                            </button>
                            <button
                                onClick={declineCookies}
                                style={{
                                    background: "#082326",
                                    color: "#fff",
                                    border: 0,
                                    borderRadius: 6,
                                    padding: "8px 14px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#061a1c";
                                    e.currentTarget.style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "#082326";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                Reject all
                            </button>
                            <button
                                onClick={manageCookies}
                                style={{
                                    background: "#082326",
                                    color: "#fff",
                                    border: 0,  
                                    borderRadius: 6,
                                    padding: "8px 14px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#061a1c";
                                    e.currentTarget.style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "#082326";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                Manage cookies
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
