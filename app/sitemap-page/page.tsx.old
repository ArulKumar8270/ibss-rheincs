import React from "react";
import CommomLayout from "../Components/CommomLayout";

const page = () => {
  return (
    <CommomLayout>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .sitemap-container ,  .sitemap-container a{\n        color:black;\n    }\n     \n        /* Main Page Title */\n        .page-header {\n            border-bottom: 2px solid #e0e0e0;\n            padding-bottom: 20px;\n            margin-bottom: 50px;\n            font-weight: 800;\n            color: var(--brand-color);\n            /* Brand Color */\n            text-transform: uppercase;\n            letter-spacing: 0.5px;\n            position: relative;\n        }\n\n        /* Decorative line under title */\n        .page-header::after {\n            content: '';\n            position: absolute;\n            bottom: -2px;\n            left: 0;\n            width: 80px;\n            height: 2px;\n            background-color: var(--brand-color);\n        }\n\n        /* Section Styling */\n        .sitemap-section {\n            padding-bottom: 40px;\n            margin-bottom: 10px;\n        }\n\n        /* Left Column Header */\n        .category-header {\n            font-size: 1.25rem;\n            font-weight: 700;\n            color: var(--brand-color);\n            /* Brand Color */\n        }\n\n        /* List Styling */\n        ul {\n            list-style: none;\n            padding-left: 0;\n            margin-bottom: 0;\n        }\n\n        a {\n            text-decoration: none;\n            color: var(--text-color);\n            transition: all 0.3s ease;\n            display: inline-block;\n        }\n\n        a:hover {\n            color: var(--brand-color);\n            /* Brand Color on Hover */\n            font-weight: 600;\n            transform: translateX(5px);\n        }\n\n        /* LEVEL 1: Main Topics (Dot ●) */\n        ul.level-1>li {\n            position: relative;\n            padding-left: 25px;\n            margin-bottom: 15px;\n            font-weight: 600;\n            font-size: 16px;\n        }\n\n        ul.level-1>li::before {\n            content: '●';\n            position: absolute;\n            left: 0;\n            top: 1px;\n            color: var(--brand-color);\n            /* Brand Color */\n            font-size: 10px;\n        }\n\n        /* LEVEL 2: Sub Topics (Arrow ») */\n        ul.level-2 {\n            margin-top: 10px;\n            margin-bottom: 20px;\n        }\n\n        ul.level-2>li {\n            position: relative;\n            padding-left: 25px;\n            margin-bottom: 8px;\n            font-weight: 400;\n            font-size: 14px;\n        }\n\n        ul.level-2>li::before {\n            content: '»';\n            position: absolute;\n            left: 0;\n            top: -1px;\n            color: #ccc;\n            /* Grey by default */\n            font-size: 16px;\n            font-weight: bold;\n            transition: color 0.3s;\n        }\n\n        ul.level-2>li:hover::before {\n            color: var(--brand-color);\n            /* Brand Color on Hover */\n        }\n\n        /* LEVEL 3: Deep Sub Topics */\n        ul.level-3 {\n            margin-left: 10px;\n            padding-left: 15px;\n            border-left: 2px solid #eee;\n        }\n\n        ul.level-3 li {\n            font-size: 13px;\n            margin-bottom: 5px;\n        }\n\n        /* Mobile Adjustments */\n        @media (max-width: 768px) {\n            .category-header {\n                margin-bottom: 20px;\n                padding-bottom: 10px;\n                border-bottom: 1px dashed #ccc;\n            }\n\n            .sitemap-container {\n                padding: 30px 20px;\n            }\n        }\n    ",
        }}
      />
      <div className="collateralssec ">
        {/* <div class="parent2 retailparent2">
  <video src="videos/uiux.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
        <div className="container">
          <div className="row section-row1 align-items-center builtsec collat">
            <div className="col-sm-12">
              <div className="section-title text-center ">
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Sitemap
                </h2>
                {/* <p>In today’s digital-first world, great design is more than looks—it’s about creating seamless, intuitive experiences that drive engagement, satisfaction, and loyalty. </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="sitemap-container">
            <div className="row sitemap-section">
              <div className="col-md-3">
                <a href="/">
                  <div className="category-header">Home</div>
                </a>
              </div>
            </div>
            <hr className="d-md-none" />
            {/* SECTION 1: GENERAL & ABOUT */}
            <div className="row sitemap-section">
              <div className="col-md-3">
                <div className="category-header">About Us</div>
              </div>
              <div className="col-md-9">
                <ul className="level-1">
                  <li>
                    <a href="#">About Us</a>
                    <ul className="level-2">
                      <li>
                        <a href="/about-us/overview">Overview</a>
                      </li>
                      <li>
                        <a href="/about-us/leadership">Leadership</a>
                      </li>
                      <li>
                        <a href="/about-us/customer-speak">Customers Speak</a>
                      </li>
                      <li>
                        <a href="/about-us/success-stories">Success Stories</a>
                      </li>
                      <li>
                        <a href="/careers">Careers</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="d-md-none" /> {/* Divider only for mobile */}
            {/* SECTION 2: SOLUTIONS */}
            <div className="row sitemap-section">
              <div className="col-md-3">
                <div className="category-header">Solutions</div>
              </div>
              <div className="col-md-9">
                <ul className="level-1">
                  {/* Our Solutions */}
                  <li>
                    <a href="/our-solution">Our Solutions</a>
                    <ul className="level-2">
                      <li>
                        <a href="/solutions/CorusHR">Corus HR</a>
                      </li>
                      <li>
                        <a href="/MeRLIN-strategic-sourcing-software">MeRLIN Sourcing</a>
                      </li>
                    </ul>
                  </li>
                  {/* Enterprise Solutions */}
                  <li>
                    <a href="/solutions/erp-enterprise-solutions-and-services/erp">Enterprise Solutions</a>
                    <ul className="level-2">
                      <li>
                        <a href="/solutions/erp-enterprise-solutions-and-services/epicor">Epicor ERP</a>
                        {/* Level 3 nested */}
                        <ul className="level-3">
                          <li>
                            <a href="/Epicor-kinetic">Epicor Kinetic</a>
                          </li>
                          <li>
                            <a href="/Epicor-iscala">Epicor iScala</a>
                          </li>
                          <li>
                            <a href="/Epicor-companion">
                              Companion Products
                            </a>
                          </li>
                          <li>
                            <a href="/Epicor-epicpay">EpicPay</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/solutions/erp-enterprise-solutions-and-services/sap">SAP</a>
                      </li>
                      <li>
                        <a href="/solutions/erp-enterprise-solutions-and-services/ms-dynamics">
                          MS Dynamics
                        </a>
                      </li>
                      <li>
                        <a href="/solutions/erp-enterprise-solutions-and-services/sugar-crm">Sugar CRM</a>
                      </li>
                    </ul>
                  </li>
                  {/* Digital Solutions */}
                  <li>
                    <a href="/solutions/digital-services-and-solutions">
                      Digital Solutions & Services
                    </a>
                    <ul className="level-2">
                      <li>
                        <a href="/business-intelligence">
                          BI & Analytics
                        </a>
                      </li>
                      <li>
                        <a href="/AI-ML">AI / ML</a>
                      </li>
                      <li>
                        <a href="/Ecommerce">eCommerce</a>
                      </li>
                      <li>
                        <a href="/Architecture">
                          Architecture & App Modernisation
                        </a>
                      </li>
                      <li>
                        <a href="/data-engineering-warehousing">
                          Data Engineering
                        </a>
                      </li>
                      <li>
                        <a href="/Commercetools">Commercetools</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* SECTION 3: INDUSTRIES */}
            <div className="row sitemap-section">
              <div className="col-md-3">
                <div className="category-header">Industries</div>
              </div>
              <div className="col-md-9">
                <div className="row">
                  {/* Split long lists into 2 columns for better look */}
                  <div className="col-md-6">
                    <ul className="level-1">
                      <li>
                        <a href="/Brand-owners-and-vertical-retail">
                          Brand Owners & Retailers
                        </a>
                      </li>
                      <li>
                        <a href="/industries-retail">Retail Industry</a>
                      </li>
                      <li>
                        <a href="/Distribution-and-supply-chain">
                          Distribution & Supply Chain
                        </a>
                      </li>
                      <li>
                        <a href="/discrete-manufacturing">
                          Discrete Manufacturing
                        </a>
                      </li>
                      <li>
                        <a href="/Automotive">Automotive Industry</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="level-1">
                      <li>
                        <a href="/Engineering-Procurement-Construction">
                          EPC (Engineering & Construction)
                        </a>
                      </li>
                      <li>
                        <a href="/process-manufacturing">
                          Process Manufacturing
                        </a>
                      </li>
                      <li>
                        <a href="/Private-Equity-Funding-Backed-Ventures">Private Equity Ventures</a>
                      </li>
                      <li>
                        <a href="/Cable-manufacturing">
                          Cable Manufacturing
                        </a>
                      </li>
                      <li>
                        <a href="/interior-design">Interior Design</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* SECTION 4: RESOURCES */}
            <div className="row sitemap-section">
              <div className="col-md-3">
                <div className="category-header">Resources</div>
              </div>
              <div className="col-md-9">
                <ul className="level-1">
                  <li>
                    <a href="/Blog">Blog</a>
                  </li>
                  <li>
                    <a href="/Case-study">Case Studies</a>
                  </li>
                  <li>
                    <a href="/webinars">Webinars</a>
                  </li>
                  <li>
                    <a href="/collaterals">Collaterals</a>
                  </li>
                  <li>
                    <a href="/news-events">News and Events</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row sitemap-section">
              <div className="col-md-3">
                <a href="/contact-us">
                  <div className="category-header">Contect Us</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Start */}
      <footer className="main-footer pd0">
        {/* Footer Main Start */}
        <div className="footer-main">
          <div className="container">
            <div className="firstrow">
              <div className="row">
                <div className="col-sm-8">
                  <h2>
                    Ready to accelerate value creation across your portfolio?
                  </h2>
                  <p>
                    Contact us today to learn how we can help modernise
                    operations, de-risk integrations, and improve commercial
                    outcomes.
                  </p>
                </div>
                <div className="col-sm-4">
                  <div className="ser-btn text-right">
                    <a href="#" className="animated-svg-link">
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
            {/*?php include "footer.php" ?*/}
          </div>
        </div>
      </footer>
    </CommomLayout>
  );
};

export default page;
