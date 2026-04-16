"use client";

import CommomLayout from "./Components/CommomLayout";
import Link from "next/link";
import TestimonialandAward from "./Components/TestimonialandAward";
import Awards from "./Components/Awards";
import {useTranslation} from "./hooks/useTranslation";
import Script from "next/script";




export default function Home() {
  const { t, language } = useTranslation();
   if (!language) return null;
  return (
    <>

      <Script
        id="schema-ldjson"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.rheincs.com/#organization",
                name: "RheinBrücke IT Consulting",
                alternateName: ["RheinCS", "RheinBrucke"],
                url: "https://www.rheincs.com/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.rheincs.com/images/rlogo.png",
                  width: 200,
                  height: 60,
                },
                description:
                  "RheinBrücke IT Consulting is a global enterprise digital transformation and ERP solutions partner serving 45+ countries.",
                foundingDate: "2013",
                slogan: "Analyse. Integrate. Transform.",
                email: "info@rheincs.com",
                telephone: "+49 231 292 95619",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  bestRating: "5",
                  ratingCount: "87",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+49 231 292 95619",
                  contactType: "customer service",
                  areaServed: ["DE", "NL", "UAE", "SA", "IN", "US", "GB"],
                  availableLanguage: ["English", "German", "Arabic"],
                },
                sameAs: [
                  "https://www.linkedin.com/company/rheinbrucke-it-consulting",
                  "https://twitter.com/rheinbrucke",
                  "https://www.facebook.com/RheinBruckeIT",
                  "https://www.youtube.com/c/RheinBrucke",
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://www.rheincs.com/#website",
                url: "https://www.rheincs.com/",
                name: "RheinBrücke IT Consulting",
                publisher: { "@id": "https://www.rheincs.com/#organization" },
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://www.rheincs.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "WebPage",
                "@id": "https://www.rheincs.com/#webpage",
                url: "https://www.rheincs.com/",
                name: "Enterprise Digital Transformation & ERP Solutions | RheinBrücke",
                isPartOf: { "@id": "https://www.rheincs.com/#website" },
                about: { "@id": "https://www.rheincs.com/#organization" },
                description:
                  "ERP implementation & digital transformation services across 45+ countries.",
                inLanguage: "en",
              },
              {
                "@type": "ItemList",
                name: "RheinBrücke IT Consulting Global Offices",
                itemListOrder: "https://schema.org/ItemListOrderAscending",
                numberOfItems: 4,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@type": "ProfessionalService",
                      name: "RheinBrücke IT Consulting - UAE",
                      url: "https://www.rheincs.com/contact-us/#uae",
                      image: "https://www.rheincs.com/images/rlogo.png",
                      priceRange: "$$$",
                      address: {
                        "@type": "PostalAddress",
                        addressLocality: "Dubai",
                        addressCountry: "AE",
                      },
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                      "@type": "ProfessionalService",
                      name: "RheinBrücke IT Consulting - Saudi Arabia",
                      url: "https://www.rheincs.com/contact-us/#saudi",
                      image: "https://www.rheincs.com/images/rlogo.png",
                      priceRange: "$$$",
                      address: {
                        "@type": "PostalAddress",
                        addressLocality: "Riyadh",
                        addressCountry: "SA",
                      },
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                      "@type": "ProfessionalService",
                      name: "RheinBrücke IT Consulting - Germany",
                      url: "https://www.rheincs.com/contact-us/#germany",
                      image: "https://www.rheincs.com/images/rlogo.png",
                      priceRange: "$$$",
                      address: {
                        "@type": "PostalAddress",
                        addressLocality: "Dortmund",
                        addressCountry: "DE",
                      },
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    item: {
                      "@type": "ProfessionalService",
                      name: "RheinBrücke IT Consulting - India Development Centre",
                      url: "https://www.rheincs.com/contact-us/#india",
                      image: "https://www.rheincs.com/images/rlogo.png",
                      priceRange: "$$$",
                      address: {
                        "@type": "PostalAddress",
                        addressLocality: "Chennai",
                        addressRegion: "Tamil Nadu",
                        addressCountry: "IN",
                      },
                    },
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What ERP systems does RheinBrücke implement?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "RheinBrücke implements Epicor Kinetic, SAP and Microsoft Dynamics ERP solutions.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does RheinBrücke offer ERP services in the Middle East?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. RheinBrücke delivers ERP projects across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />


      <CommomLayout>
        <>
      <div  className={`${language === 'German' ? 'bodyindex' : ''}`}>
          {/* Header Start */}
          {/*?php include "navbar.php" ?*/}
          {/* Header End */}
          {/* Hero Section Start*/}
          <div className="hero banner indexbanner">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="hero-content ">
                    <div className="section-title">
                      <h1 className=" mainbannerh1">
                        <div className="topbar_text_slider1">
                          <ul className="vertical-reveal">
                            <li>{t("Analyse")}</li>
                            <li>{t("Integrate")}</li>
                            <li>{t("Transform")}</li>
                          </ul>
                        </div>
                      </h1>
                      <div className="hero-video-content wow fadeInUp mt-3">
                        <p>
                          {t("Empowering businesses to operate smart, adapt faster, and unlock new opportunity through enterprise systems in a technology - driven economy  ")}
                        </p>
                      </div>
                    </div>
                    <div className="hero-content-body">
                      <div className="hero-content-video">
                        {/* Play Button */}
                        <div className="video-play-button" data-cursor-text="play">
                          <Link href="#" id="playVideo">
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
                          </Link>
                        </div>
                        {/* Video Popup */}
                        <div className="video-popup" id="videoPopup">
                          <iframe id="youtubeVideo" src="https://www.youtube.com/embed/molnWIax5DU" title="Rheinbrücke IT Consulting   Corporate Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                          <button className="close-popup" id="closePopup">
                            ✕
                          </button>
                        </div>
                        <div className="learn-more-circle">
                          <Link href="/contact-us">
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
                            <img src="/images/Contact us1.svg" alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="hero-bg-video">
                    <video autoPlay={true} muted={true} loop={true} id="myVideo" height={800}>
                      <source src="/videos/banner.mov" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Section End*/}
          {/* Our Services Section Start */}
          <div className={`our-services thepath pd30 ${language === 'German' ? 'germanpath' : ''}`}>
            <div className="container">
              <div className="row section-row text-center">
                <div className="col-lg-12">
                  {/* Section Title Start */}
                  <div className="section-title text-center">
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      {t("The Path to Enterprise Transformation")}
                    </h2>
                    <p>
                      {t("Every successful ERP transformation starts with clarity and ends with measurable impact. Our approach takes you from insights to execution, unlocking real value at every stage of your digital journey.")}
                    </p>
                    <div className="ser-btn">
                      <Link href="/solutions/erp-enterprise-solutions-and-services/erp" className="animated-svg-link">
                        <span>
                          {t("Know More")}
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
                      </Link>
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
                          {/*<img src="/images/a1.svg" alt="">*/}
                          <svg
                            width={100}
                            height={100}
                            viewBox="0 0 100 100"
                            fill="none"
  role="img"
  aria-label="Digital analytics icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1699_18121)">
                              <path
                                d="M91.5402 100C89.8482 100 88.2985 99.2568 86.7805 97.7546L65.5914 76.2492C64.5794 75.3637 64.4054 73.8298 65.1803 72.802L65.5123 72.3593L61.0373 67.8842L59.1714 69.7502C58.2068 70.7147 56.8944 71.2524 55.487 71.2524C53.9216 71.2524 52.3719 70.5882 51.2176 69.4339L49.0196 67.2359L48.6243 67.4099C44.4497 69.26 39.9114 70.1929 35.1202 70.1929C15.7495 70.2087 0 54.4592 0 35.1044C0 15.7495 15.7495 0 35.1044 0C54.4592 0 70.2087 15.6705 70.2087 34.9462C70.2087 39.2948 69.2441 43.9753 67.4099 48.4662L67.2517 48.8615L69.4497 51.0595C71.7268 53.4788 71.8691 56.9102 69.766 59.0133L67.9001 60.8792L72.3435 65.3226L72.7704 65.0538C73.1815 64.8008 73.7034 64.6584 74.241 64.6584C75.0316 64.6584 75.759 64.9431 76.2492 65.4491L97.7546 86.7963C100.664 89.7059 100.648 94.5604 97.7546 97.6123C95.3194 99.2094 93.3112 100 91.556 100H91.5402ZM73.8773 66.6034L66.5718 73.9089V74.747L88.2669 96.4421C89.2947 97.47 90.7021 98.0234 92.2201 98.0234C93.8172 98.0234 95.3194 97.4067 96.4421 96.284C98.5452 93.9911 98.6243 90.5123 96.6319 88.1562L74.9051 66.4295H74.3833L73.8773 66.6192V66.6034ZM62.1917 66.5718L66.7299 71.1101L71.1101 66.7299L66.5718 62.1917L62.1917 66.5718ZM66.1765 51.5655C62.7609 57.7641 57.7641 62.7609 51.7236 66.0183L50.9804 66.4295L52.53 67.9791C53.2891 68.833 54.3327 69.339 55.3763 69.339C56.2777 69.339 57.1157 68.9595 57.7166 68.2637L68.4377 57.5427C69.766 56.1986 69.6237 53.8899 68.1214 52.3719L66.5718 50.8223L66.1607 51.5655H66.1765ZM35.1044 1.89753C16.7932 1.89753 1.89753 16.7932 1.89753 35.1044C1.89753 53.4156 16.7932 68.3112 35.1044 68.3112C53.4156 68.3112 68.3112 53.4156 68.3112 35.1044C68.3112 16.7932 53.4156 1.89753 35.1044 1.89753Z"
                                fill="#008080"
                              />
                              <path
                                d="M13.1245 50.9172C12.5237 50.9172 12.1758 50.5693 12.1758 49.9684C12.1758 49.3675 12.5237 49.0196 13.1245 49.0196H14.864V31.1512C14.864 30.5503 15.2118 30.2024 15.8127 30.2024H22.9285C23.5294 30.2024 23.8772 30.5503 23.8772 31.1512V49.0196H30.6767V23.2448C30.6767 22.6439 31.0246 22.2961 31.6255 22.2961H38.7412C39.3421 22.2961 39.69 22.6439 39.69 23.2448V49.0196H46.4895V16.9197C46.4895 16.3188 46.8374 15.9709 47.4383 15.9709H54.554C55.1549 15.9709 55.5028 16.3188 55.5028 16.9197V49.0196H57.0841C57.6849 49.0196 58.0328 49.3675 58.0328 49.9684C58.0328 50.5693 57.5426 50.9172 57.0841 50.9172H13.1245ZM48.2289 49.0196H53.4471V17.8685H48.2289V49.0196ZM32.4161 49.0196H37.6343V24.1936H32.4161V49.0196ZM16.6034 49.0196H21.8216V32.1H16.6034V49.0196Z"
                                fill="#008080"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1699_18121">
                                <rect width="99.9209" height={100} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div className="service-item-body">
                        <h3>{t("Analyse")}</h3>
                        <p>{t("We start by understanding your business, its core your operating model, value drivers, and constraints. Using data-led diagnostics and performance benchmarking, we identify the real levers for impact whether it's efficiency, margin growth, agility, or customer experience.")}</p>
                        {/*<div class="ser-btn1">*/}
                        {/*    <Link href="#" class="animated-svg-link1 btn-style-3">*/}
                        {/*        Know More*/}
                        {/*        <span class="svg-container ">*/}
                        {/*            <span class=" left">*/}
                        {/*                <svg width="24" height="23" viewBox="0 0 24 23" fill="none"*/}
                        {/*                    xmlns="http://www.w3.org/2000/svg">*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="4.79995" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="12.7992" cy="1.6" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="22.4008" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="1.6" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="6.40078" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="11.1996" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="19.1996" cy="14.4" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="17.6" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="12.7992" cy="20.8" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="19.1996" cy="8.00002" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                </svg>*/}
                        {/*            </span>*/}
                        {/*        </span>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
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
                          {/*<img src="/images/i1.svg" alt="">*/}
                          <svg
                            width={100}
                            height={100}
                            viewBox="0 0 100 100"
                            fill="none"
  role="img"
  aria-label="ERP and digital platform integration icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M89.9907 61.8141C88.7944 60.6821 87.2342 60.0559 85.5951 60.0055C85.555 60.002 85.5135 60.0003 85.4705 60.001C85.4253 60.0005 85.382 60.0027 85.3397 60.0068C84.9252 60.0216 84.5235 60.0731 84.1305 60.1589C84.1305 57.5564 84.1305 54.9541 84.1305 52.3517C84.1305 51.6249 84.1057 50.9239 83.696 50.2804C83.6306 50.1778 83.5601 50.083 83.4856 49.9933C83.9255 49.4382 84.1303 48.7281 84.1303 47.9843C84.1303 46.342 84.1303 44.6997 84.1303 43.0574C84.1303 41.9804 84.1303 40.9034 84.1303 39.8263C85.3629 40.0897 86.6445 40.0199 87.851 39.5374C89.3243 38.9482 90.5934 37.8445 91.3029 36.413C92.8292 33.3338 91.7285 29.4949 88.7235 27.7724C87.298 26.9554 85.6811 26.7477 84.1303 27.0722C84.1303 24.4661 84.1303 21.8599 84.1303 19.2538C84.1303 18.5353 84.1072 17.8434 83.7101 17.2034C83.1308 16.2696 82.1447 15.8621 81.0824 15.8621C79.4401 15.8621 77.7979 15.8621 76.1556 15.8621C75.0773 15.8621 73.9991 15.8621 72.9208 15.8621C73.2014 14.5239 73.0789 13.1454 72.5057 11.8403C71.8586 10.367 70.6242 9.1627 69.1499 8.52648C66.0695 7.1972 62.3196 8.46073 60.7598 11.4642C60.0373 12.8553 59.8617 14.3856 60.1712 15.8621C57.5649 15.8621 54.9587 15.8621 52.3526 15.8621C51.6242 15.8621 50.9219 15.8871 50.2775 16.299C50.1761 16.3639 50.082 16.4344 49.9929 16.5085C49.438 16.0666 48.7318 15.8623 47.9843 15.8623C46.3421 15.8623 44.6998 15.8623 43.0574 15.8623C41.9791 15.8623 40.9008 15.8623 39.8225 15.8623C40.1031 14.5241 39.9807 13.1456 39.4073 11.8405C38.7602 10.3672 37.5258 9.16288 36.0515 8.52667C32.9711 7.19738 29.2212 8.46092 27.6615 11.4644C26.939 12.8557 26.7635 14.3858 27.073 15.8623C24.4667 15.8623 21.8604 15.8623 19.2544 15.8623C18.5358 15.8623 17.8442 15.8854 17.2041 16.2825C16.2705 16.8619 15.863 17.848 15.863 18.9104V23.8375V28.4791C15.863 29.3198 16.7263 29.689 17.4171 29.3709C19.6939 28.3228 22.4898 29.4452 23.4271 31.765C24.2765 33.8674 23.3725 36.3015 21.4024 37.3867C20.1882 38.0555 18.6769 38.1044 17.4171 37.5245C16.7263 37.2066 15.863 37.5756 15.863 38.4163V47.6413C15.863 48.3597 15.8862 49.0517 16.2833 49.6916C16.3518 49.802 16.4264 49.9044 16.5057 50.0004C16.0599 50.5575 15.8565 51.2672 15.8565 52.0155V56.9424V60.1735C14.624 59.9101 13.3423 59.9799 12.1359 60.4624C10.6626 61.0516 9.3935 62.1551 8.68397 63.5868C7.15766 66.666 8.25836 70.505 11.2634 72.2275C12.6889 73.0444 14.3058 73.2521 15.8565 72.9276V80.7462C15.8565 81.4647 15.8797 82.1566 16.2768 82.7966C16.8561 83.7304 17.8422 84.1379 18.9045 84.1379H23.8312H27.0661C26.7855 85.4759 26.9079 86.8546 27.4813 88.1596C28.1285 89.633 29.3629 90.8373 30.8371 91.4735C33.9175 92.8028 37.6674 91.5393 39.2271 88.5358C39.9496 87.1447 40.1253 85.6144 39.8157 84.1379H47.6343C48.3529 84.1379 49.0444 84.1147 49.6845 83.7176C49.7982 83.6471 49.9038 83.5704 50.002 83.4883C50.5578 83.9297 51.2645 84.1309 52.0091 84.1309H56.9358H60.1668C59.9034 85.3636 59.9734 86.6451 60.4557 87.8516C61.0448 89.325 62.1483 90.5941 63.5798 91.3037C66.6589 92.8298 70.4979 91.7293 72.2201 88.7242C73.0371 87.2988 73.2449 85.6817 72.9204 84.1309H80.7388C81.4574 84.1309 82.1492 84.1077 82.789 83.7106C83.7227 83.1312 84.1301 82.1452 84.1301 81.0828C84.1301 79.4405 84.1301 77.7982 84.1301 76.1557C84.1301 75.074 84.1301 73.9922 84.1301 72.9105C86.8014 73.4432 89.5982 72.3575 91.0836 69.9062C92.6408 67.3361 92.1723 63.8785 89.9907 61.8141ZM51.0962 18.3532C51.3162 17.8928 51.7774 17.9278 52.2074 17.9278H57.2432H61.5773C62.4181 17.9278 62.7869 17.0645 62.4691 16.3737C61.4506 14.1602 62.4528 11.6057 64.5634 10.5033C66.592 9.44367 69.1946 10.2666 70.3656 12.191C71.1307 13.4482 71.2407 15.0301 70.6223 16.3737C70.3043 17.0645 70.6735 17.9278 71.5141 17.9278H80.4867C80.8118 17.9278 81.2853 17.8613 81.5748 17.9684C82.0882 18.1582 82.0643 18.6455 82.0643 19.1086V24.1444V28.4786C82.0643 29.3193 82.9276 29.6884 83.6184 29.3704C85.8952 28.3223 88.6915 29.4447 89.6286 31.7647C90.478 33.867 89.574 36.3011 87.6037 37.3863C86.3895 38.0551 84.8782 38.1038 83.6184 37.5241C82.9276 37.2061 82.0643 37.5752 82.0643 38.4159V47.419C82.0643 47.7428 82.1323 48.1903 82.0145 48.4953C81.8512 48.918 81.4674 48.9634 81.0844 48.9669H81.0822C81.0085 48.9669 80.9346 48.9669 80.8607 48.9669C79.2927 48.9669 77.7249 48.9669 76.1569 48.9669C76.0375 48.9669 75.9182 48.9669 75.7987 48.9669C74.3715 48.9669 72.9441 48.9669 71.5169 48.9669H71.5139C70.6714 48.9669 70.3062 49.83 70.6221 50.521C70.7946 50.8987 70.9146 51.3058 70.9752 51.7188L70.9796 51.7453C70.9829 51.7686 70.9848 51.792 70.9877 51.8153C71.0024 51.9329 71.0131 52.0507 71.0179 52.1681C71.022 52.2726 71.022 52.3769 71.0205 52.4813C71.0198 52.5236 71.0192 52.5656 71.0174 52.6078C71.0163 52.6304 71.0148 52.6528 71.0133 52.6754C71.0015 52.7993 70.9655 53.0859 70.9813 53.017L70.9811 53.0197L70.9783 53.0351C70.9657 53.0998 70.9459 53.2063 70.9342 53.2653C70.927 53.2987 70.9187 53.3318 70.9107 53.365C70.8963 53.4263 70.8816 53.4874 70.8651 53.548C70.8575 53.5759 70.8488 53.6037 70.8409 53.6317C70.825 53.6871 70.8083 53.7425 70.7905 53.7973C70.7649 53.8754 70.734 53.9512 70.704 54.0273C70.6833 54.0807 70.6644 54.1349 70.6416 54.1872C70.5988 54.2844 70.5505 54.3787 70.5006 54.472C70.4856 54.5004 70.4723 54.5296 70.4568 54.5576C70.4034 54.6524 70.3447 54.7439 70.2845 54.8345C70.2667 54.8611 70.2508 54.8889 70.2325 54.9152C70.176 54.9964 70.1147 55.0736 70.053 55.1506C70.0256 55.1849 70 55.2205 69.9717 55.2538C69.9176 55.3177 69.8593 55.3777 69.8017 55.4385C69.7607 55.4814 69.7215 55.5259 69.6789 55.5674C69.6289 55.6163 69.5755 55.6615 69.5233 55.708C69.4692 55.7559 69.4164 55.8052 69.3601 55.8508C69.3105 55.8909 69.2583 55.9274 69.207 55.9656C69.1455 56.0113 69.0849 56.058 69.0214 56.1006C68.9614 56.1408 68.8988 56.1769 68.8367 56.2143C68.778 56.2499 68.7202 56.2871 68.66 56.3201C68.6071 56.349 68.5537 56.3769 68.5 56.4033L68.4778 56.4146C67.1445 57.06 65.631 56.9485 64.4038 56.274L64.3795 56.261C64.3317 56.2343 64.2851 56.2062 64.2382 56.1778C64.2204 56.1671 64.2023 56.1569 64.1845 56.146C64.1478 56.123 64.1117 56.0988 64.0756 56.0747C64.0491 56.0571 64.0221 56.0402 63.9959 56.0221C63.9685 56.0032 63.942 55.9828 63.915 55.9634C63.8813 55.9389 63.8472 55.915 63.8143 55.8895C63.795 55.8748 63.7767 55.8591 63.7576 55.8441C63.7179 55.8126 63.6781 55.7813 63.6394 55.7487L63.602 55.7155C63.5581 55.6776 63.5144 55.6394 63.472 55.5996L63.4479 55.5761C63.4018 55.5324 63.3562 55.4883 63.3118 55.4425L63.296 55.4257C63.2497 55.3773 63.204 55.3284 63.1595 55.2779L63.1349 55.2486C63.0942 55.2016 63.0538 55.1542 63.0151 55.1054C62.9762 55.0565 62.9386 55.0062 62.9017 54.9554L62.8791 54.9254C62.7454 54.7389 62.6245 54.5405 62.5185 54.3309C62.4483 54.1922 62.397 54.0786 62.3504 53.9514L62.35 53.9503C62.3439 53.9334 62.338 53.9154 62.3318 53.898C62.3031 53.8119 62.2735 53.7119 62.2357 53.5772C62.1846 53.3954 62.1522 53.214 62.1151 53.0303L62.107 52.9831C62.1205 53.0455 62.0842 52.7697 62.0761 52.6558C62.074 52.6152 62.0737 52.5747 62.0726 52.5343C62.0711 52.4843 62.0692 52.4343 62.0692 52.3843C62.0694 52.3274 62.0718 52.2707 62.074 52.2141C62.0753 52.1809 62.0755 52.1477 62.0775 52.1148C62.082 52.0411 62.0888 51.9677 62.0968 51.8946L62.1013 51.8457C62.1552 51.3895 62.2763 50.9424 62.4693 50.5212C62.7858 49.8302 62.4193 48.9671 61.5775 48.9671H61.5745C58.1902 48.9671 54.8055 48.9671 51.4212 48.9671H51.3864C51.2666 48.9671 51.1469 48.9671 51.0271 48.9671C51.0271 45.9358 51.0271 42.9046 51.0271 39.8734V39.8252C51.1158 39.8443 51.2047 39.8608 51.294 39.8763C51.319 39.8808 51.344 39.8856 51.369 39.8899C51.4231 39.8987 51.4773 39.9062 51.5318 39.9137C51.602 39.9237 51.6722 39.9332 51.7425 39.941L51.7837 39.945C52.7112 40.0423 53.6526 39.9488 54.5599 39.6118C54.6216 39.5889 54.6822 39.5639 54.7431 39.5392L54.7498 39.5368L54.7561 39.5342C54.8253 39.5061 54.8939 39.4768 54.962 39.4466C54.9963 39.4316 55.0304 39.4164 55.0644 39.4009C55.1082 39.3807 55.1515 39.3598 55.1948 39.3385C55.2484 39.3125 55.3015 39.2861 55.3545 39.2588C55.3821 39.2446 55.4093 39.2297 55.4367 39.2151C55.5014 39.1805 55.5654 39.1451 55.629 39.1086C55.6477 39.0979 55.6662 39.0868 55.6849 39.0756C55.7542 39.0347 55.8229 38.9929 55.8907 38.9495L55.9342 38.9214C56.0042 38.8758 56.0735 38.8293 56.1418 38.7812L56.1809 38.7534C56.2492 38.7047 56.3166 38.6548 56.3831 38.6035L56.4226 38.5728C56.4876 38.5219 56.5519 38.4698 56.615 38.4165L56.6571 38.3805C56.7185 38.3278 56.7789 38.274 56.8384 38.219L56.8817 38.1783C56.9399 38.1236 56.9969 38.0679 57.0528 38.0112L57.096 37.967C57.151 37.9101 57.2049 37.8525 57.2579 37.7936L57.3003 37.7458C57.3521 37.6869 57.4029 37.6273 57.4525 37.5665C57.4664 37.5495 57.4803 37.5323 57.4942 37.515C57.5425 37.4545 57.5899 37.3932 57.6361 37.3309C57.65 37.3122 57.6638 37.2933 57.6776 37.2743C57.7218 37.2131 57.765 37.1511 57.807 37.0883C57.8218 37.0663 57.8365 37.0442 57.8509 37.0218C57.8896 36.9623 57.9272 36.9022 57.9639 36.8412C57.9809 36.8131 57.9978 36.7847 58.0143 36.7562C58.0456 36.7023 58.0759 36.6479 58.1056 36.5928C58.1165 36.5727 58.1283 36.5532 58.1391 36.533C58.1491 36.5138 58.158 36.4943 58.1678 36.475C58.1785 36.4541 58.1902 36.4337 58.2006 36.4128C58.2121 36.3897 58.2219 36.3661 58.2332 36.343C58.265 36.2774 58.2958 36.2117 58.3252 36.1454C58.3328 36.128 58.3404 36.1105 58.3478 36.0929C58.8929 34.8363 59.0129 33.4685 58.756 32.1801L58.7482 32.1442C58.7306 32.0588 58.7123 31.9734 58.6914 31.8888C58.6819 31.8502 58.671 31.8123 58.6608 31.7739C58.6455 31.7158 58.6306 31.6576 58.6138 31.5998C58.5921 31.5257 58.5682 31.4524 58.544 31.379C58.5367 31.3572 58.5304 31.3351 58.523 31.3135C58.2217 30.4315 57.7361 29.6125 57.0832 28.9235L57.0717 28.9116C57.0041 28.8407 56.9351 28.771 56.8639 28.7029L56.8156 28.6584C56.7556 28.6021 56.6952 28.5464 56.6328 28.4923C56.6078 28.4704 56.5815 28.4497 56.5561 28.4284C56.5011 28.3823 56.4461 28.336 56.3894 28.2915C56.3581 28.2669 56.3257 28.2435 56.2939 28.2196C56.2409 28.1796 56.1879 28.1395 56.1335 28.1009C56.099 28.0767 56.0635 28.0535 56.0285 28.0296C55.974 27.9928 55.9197 27.9559 55.864 27.9205C55.8301 27.899 55.7951 27.8789 55.7608 27.8579C55.7142 27.8296 55.6684 27.8003 55.6208 27.7729L55.5858 27.7542L55.5591 27.7385C55.5225 27.7179 55.4851 27.7007 55.4482 27.681C55.3712 27.6399 55.2941 27.5986 55.2161 27.561C55.1732 27.5403 55.1296 27.5219 55.0865 27.5023C55.007 27.4662 54.9278 27.4299 54.8474 27.3971C54.8026 27.379 54.7574 27.3632 54.7124 27.346C54.6324 27.3156 54.5523 27.2849 54.4714 27.2578C54.4314 27.2445 54.391 27.2332 54.351 27.2208C54.2627 27.1932 54.1745 27.1658 54.0854 27.1423C54.0628 27.1363 54.0402 27.1317 54.0176 27.126C53.0386 26.8774 52.0202 26.8657 51.0276 27.0741C51.0276 24.5515 51.0276 22.0287 51.0276 19.506C51.0276 19.4221 51.0276 19.338 51.0276 19.2541C51.0276 19.0617 51.026 18.8713 51.0169 18.6829C51.0278 18.5622 51.0506 18.4486 51.0962 18.3532ZM17.9287 47.7861C17.9287 46.1075 17.9287 44.4289 17.9287 42.7503C17.9287 41.7757 17.9287 40.8011 17.9287 39.8265C19.1614 40.0899 20.4429 40.0201 21.6493 39.5376C23.1226 38.9484 24.3917 37.8447 25.1012 36.4132C26.6273 33.334 25.5266 29.4949 22.5216 27.7725C21.0961 26.9556 19.4792 26.7479 17.9285 27.0724C17.9285 24.5502 17.9285 22.0279 17.9285 19.5057C17.9285 19.1806 17.862 18.707 17.969 18.4173C18.1589 17.9041 18.6462 17.9278 19.1092 17.9278H24.145H28.4791C29.3199 17.9278 29.6887 17.0645 29.3708 16.3737C28.3524 14.1602 29.3545 11.6057 31.4652 10.5033C33.4936 9.44367 36.0961 10.2666 37.2674 12.191C38.0325 13.4482 38.1427 15.0301 37.5241 16.3737C37.2061 17.0645 37.5752 17.9278 38.4159 17.9278H47.3887C47.7165 17.9278 48.1889 17.8532 48.4982 17.9795C48.9183 18.1508 48.9585 18.5246 48.9611 18.9048V18.9102V19.1086V23.8371V24.1444V28.4788C48.9611 28.5277 48.9648 28.5743 48.9702 28.6197L48.9759 28.6564C48.9811 28.6903 48.9876 28.7231 48.9957 28.7547L49.0046 28.7883C49.0154 28.8247 49.0276 28.8599 49.0418 28.8936L49.0465 28.9059C49.0633 28.9442 49.0826 28.9805 49.1039 29.015L49.117 29.0346C49.1341 29.0605 49.152 29.0855 49.1711 29.109L49.1961 29.1387L49.2269 29.1722C49.4874 29.465 49.8647 29.5413 50.2357 29.4606C50.332 29.4421 50.4278 29.4128 50.5205 29.3702C50.5535 29.355 50.587 29.3419 50.6204 29.3276C51.9083 28.8049 53.3302 28.9114 54.4916 29.5237C55.2467 29.9277 55.8921 30.5419 56.3155 31.3214C56.3933 31.4659 56.4644 31.6161 56.527 31.7723L56.5411 31.8099C56.5787 31.9062 56.6122 32.003 56.6426 32.1006C56.6524 32.1325 56.6632 32.1642 56.6722 32.196C56.7024 32.3009 56.7278 32.4064 56.7498 32.512C56.7554 32.5381 56.7615 32.5644 56.7665 32.5905C56.788 32.7043 56.8045 32.8183 56.8169 32.9326C56.8191 32.9523 56.8217 32.9721 56.8236 32.9917C56.8349 33.1108 56.841 33.2301 56.8426 33.3492L56.8434 33.3946C56.8437 33.5146 56.8389 33.6344 56.8297 33.7537L56.826 33.8015C56.816 33.9157 56.8008 34.0295 56.7821 34.1423C56.778 34.1663 56.7741 34.1902 56.7697 34.2143C56.7511 34.3154 56.7285 34.4156 56.7034 34.5153C56.6934 34.5544 56.683 34.5934 56.6721 34.6323C56.6491 34.7137 56.6233 34.794 56.5961 34.8741C56.2624 35.8372 55.6049 36.6879 54.7072 37.2592L54.6625 37.2867C54.5786 37.3387 54.4927 37.388 54.4047 37.435C53.7528 37.7727 53.0227 37.9369 52.2939 37.9242L52.2491 37.9232C52.198 37.9218 52.1469 37.9186 52.0959 37.9155C52.0481 37.9123 52.0002 37.9094 51.9526 37.9045L51.9031 37.8992C51.5092 37.8562 51.121 37.7634 50.7526 37.6225C50.6744 37.5919 50.597 37.5593 50.5205 37.5241C50.26 37.4041 49.9747 37.3822 49.7206 37.4463C49.2985 37.5489 48.9611 37.8868 48.9611 38.4159V48.6061V48.9669C45.92 48.9669 42.8788 48.9669 39.8377 48.9669H39.816C39.9035 48.5503 39.9529 48.1301 39.9605 47.7089C39.9616 47.6574 39.9598 47.6059 39.9598 47.5544C39.9594 47.4918 39.9599 47.429 39.9577 47.3664C39.9253 46.2387 39.6075 45.124 38.9689 44.1328L38.9378 44.0874C38.2431 43.0083 37.2202 42.1385 36.0437 41.6311C35.5422 41.4147 35.0228 41.2682 34.4981 41.1858C34.3713 41.1628 34.2435 41.143 34.1144 41.1265C34.0735 41.1191 34.032 41.113 33.9898 41.1095C32.6461 40.9969 31.3216 41.3129 30.1843 41.9685L30.1802 41.9709C30.1191 42.0063 30.0581 42.0419 29.998 42.0793C29.0282 42.6684 28.2048 43.5103 27.6547 44.5697C27.2276 45.3922 26.9844 46.2748 26.9133 47.1981C26.87 47.7606 26.9218 48.3258 27.0231 48.8798C27.0285 48.9091 27.0365 48.9378 27.0424 48.9671C24.5302 48.9671 22.0179 48.9671 19.5057 48.9671L19.4964 48.9672C19.4137 48.9672 19.3309 48.9672 19.2479 48.9672C19.0581 48.9672 18.8703 48.9695 18.6847 48.9791C18.5869 48.9708 18.4956 48.955 18.418 48.9263C17.9048 48.7363 17.9287 48.249 17.9287 47.7861ZM48.9196 81.5823C48.7298 82.0957 48.2425 82.0718 47.7796 82.0718C46.1011 82.0718 44.4226 82.0718 42.744 82.0718C41.2992 82.0718 39.8546 82.0718 38.4098 82.0718C37.5689 82.0718 37.2 82.9351 37.518 83.626C38.5364 85.8393 37.5343 88.394 35.4236 89.4963C33.3951 90.556 30.7925 89.7331 29.6212 87.8087C28.8561 86.5516 28.7459 84.9695 29.3645 83.626C29.6827 82.9351 29.3134 82.0718 28.4728 82.0718C25.4818 82.0718 22.4911 82.0718 19.5 82.0718C19.1749 82.0718 18.7015 82.1383 18.4119 82.0313C17.8985 81.8414 17.9224 81.3541 17.9224 80.8911C17.9224 79.2125 17.9224 77.5339 17.9224 75.8553C17.9224 74.4106 17.9224 72.9657 17.9224 71.521C17.9224 70.6804 17.0591 70.3112 16.3681 70.6292C14.0913 71.6774 11.2952 70.5548 10.3581 68.235C9.5087 66.1326 10.4127 63.6985 12.383 62.6133C13.5972 61.9445 15.1085 61.8956 16.3683 62.4755C17.0591 62.7934 17.9225 62.4244 17.9225 61.5837C17.9225 58.5927 17.9225 55.6016 17.9225 52.6106C17.9225 52.2855 17.8561 51.812 17.9631 51.5223C18.1528 51.0089 18.6402 51.0328 19.1032 51.0328H24.1389H28.4729C28.5031 51.0328 28.5331 51.0298 28.5633 51.0266C28.8754 51.0024 29.1156 50.8557 29.2712 50.644C29.4914 50.394 29.6011 50.0556 29.4688 49.7253C29.0234 48.6122 28.8267 47.5439 29.1349 46.4057C29.1515 46.3459 29.1677 46.2861 29.1869 46.227L29.1984 46.1925C29.2249 46.1129 29.254 46.034 29.2849 45.9558C29.2971 45.9243 29.311 45.8936 29.324 45.8625C29.3838 45.7208 29.4512 45.5823 29.5257 45.4472C29.5401 45.4213 29.5529 45.3946 29.5681 45.3689C29.5946 45.3231 29.6238 45.2791 29.652 45.2342C29.6985 45.1614 29.7455 45.089 29.7963 45.0192C29.8102 44.9997 29.824 44.9805 29.8383 44.9612C30.1552 44.5391 30.5475 44.1728 30.9883 43.8818C31.0312 43.8542 31.0755 43.8288 31.1194 43.8029C31.1533 43.782 31.1874 43.7616 31.2218 43.7416C31.938 43.3423 32.7577 43.1493 33.603 43.1585C34.6 43.2024 35.5755 43.5758 36.3452 44.2261C37.6398 45.37 38.2533 47.247 37.7145 48.9682C37.7061 48.9945 37.6961 49.0202 37.6874 49.0463C37.6676 49.1054 37.6482 49.1647 37.6256 49.2234C37.5926 49.3093 37.5569 49.3943 37.518 49.4786C37.4722 49.5779 37.4424 49.6809 37.4244 49.7842C37.3902 49.9407 37.387 50.1076 37.4204 50.2743V50.2745L37.4352 50.255C37.5341 50.6853 37.8767 51.0328 38.4098 51.0328H38.4162H48.5358H48.9602V60.1772C47.6083 59.8938 46.2167 60.0224 44.8978 60.6076C44.8096 60.6467 44.7224 60.6882 44.6361 60.7315C44.6015 60.7489 44.5679 60.768 44.5337 60.7862C44.4824 60.8132 44.4307 60.8397 44.3801 60.8682C44.3414 60.8901 44.3036 60.9138 44.2653 60.9364C44.2203 60.9631 44.1749 60.9892 44.1305 61.017C44.0925 61.0408 44.0555 61.0664 44.0181 61.091C43.9743 61.1199 43.9301 61.1481 43.8869 61.1781C43.8523 61.2022 43.8188 61.2275 43.7847 61.2524C43.7399 61.285 43.6945 61.317 43.6504 61.3507C43.6202 61.3739 43.591 61.3981 43.5613 61.4216C43.5141 61.4591 43.4669 61.4961 43.4208 61.5348C43.3959 61.5556 43.372 61.5774 43.3476 61.5985C43.2976 61.6417 43.2476 61.6848 43.1991 61.7297C43.1794 61.7478 43.1605 61.7665 43.1411 61.7849C43.0885 61.8343 43.0363 61.8841 42.9853 61.9353L42.9433 61.979C42.8881 62.0355 42.8336 62.0925 42.7805 62.1508L42.7529 62.1821C42.696 62.2457 42.6399 62.3098 42.5857 62.3753L42.5695 62.3955C42.5121 62.4651 42.456 62.5359 42.4017 62.608L42.3927 62.6204C42.3365 62.695 42.2821 62.7706 42.2293 62.8472L42.2228 62.8571C42.1699 62.9345 42.1187 63.0128 42.0691 63.0925L42.0611 63.1058C42.013 63.1836 41.9665 63.2623 41.9219 63.342L41.9078 63.3679C41.8665 63.4423 41.8267 63.5175 41.7885 63.5935C41.7798 63.6111 41.7715 63.6287 41.763 63.6463C41.7394 63.6944 41.715 63.7422 41.6928 63.7909C41.6844 63.8093 41.6772 63.828 41.6691 63.8465L41.6568 63.8726C41.6465 63.8961 41.6376 63.92 41.6274 63.9437C41.6015 64.0043 41.5759 64.065 41.552 64.1262C41.5335 64.1734 41.5164 64.2208 41.499 64.2682C41.4833 64.3117 41.467 64.3551 41.4522 64.3986C41.4261 64.4744 41.4022 64.5505 41.379 64.6268L41.3672 64.6655C40.7893 66.6125 41.1462 68.6889 42.286 70.311C42.3006 70.332 42.3152 70.3527 42.3301 70.3736C42.3603 70.4157 42.391 70.4574 42.4223 70.4988C42.4673 70.559 42.5136 70.6185 42.561 70.6772L42.569 70.687C43.0414 71.2723 43.6206 71.7833 44.2999 72.1839C44.3359 72.2052 44.3729 72.2232 44.409 72.2436C44.4281 72.2551 44.4463 72.2669 44.4666 72.2777C44.4842 72.2877 44.5018 72.2952 44.5194 72.304C45.4369 72.7979 46.4298 73.0459 47.4311 73.0652C47.9413 73.0787 48.4531 73.0322 48.9605 72.927V80.494C48.9605 80.511 48.9613 80.5299 48.9616 80.5477V80.739C48.9616 80.9287 48.9639 81.1163 48.9735 81.3017C48.9652 81.4045 48.9496 81.501 48.9196 81.5823ZM89.9225 67.1037C89.5673 70.043 86.3091 71.8607 83.619 70.6222C82.9281 70.3042 82.0649 70.6733 82.0649 71.514V80.4871C82.0649 80.8122 82.1314 81.2858 82.0243 81.5754C81.8347 82.0889 81.3472 82.065 80.8842 82.065C79.2056 82.065 77.5271 82.065 75.8485 82.065C74.4037 82.065 72.9591 82.065 71.5145 82.065C70.6738 82.065 70.3045 82.9283 70.6227 83.6191C71.6708 85.896 70.5484 88.6921 68.2287 89.6295C66.1264 90.4789 63.6924 89.5747 62.6072 87.6046C61.9385 86.3903 61.8896 84.8789 62.4693 83.6191C62.7873 82.9283 62.4182 82.065 61.5775 82.065C58.5866 82.065 55.5956 82.065 52.6049 82.065C52.2798 82.065 51.8063 82.1315 51.5166 82.0244C51.0034 81.8346 51.0271 81.3473 51.0271 80.8842C51.0271 79.2056 51.0271 77.527 51.0271 75.8484C51.0271 74.4035 51.0271 72.9589 51.0271 71.5142C51.0271 70.6735 50.1638 70.3044 49.4728 70.6224C47.4965 71.532 45.2865 70.798 44.071 69.2381C44.0523 69.2135 44.0325 69.1898 44.0144 69.1647C43.9888 69.1305 43.9645 69.0951 43.9399 69.0601C43.4306 68.3172 43.1502 67.4413 43.1446 66.5432C43.145 66.4575 43.1468 66.3723 43.152 66.2878L43.1526 66.2772C43.282 64.2293 44.8072 62.6202 46.6621 62.1884C46.6939 62.1812 46.7258 62.1744 46.7578 62.1679C46.7921 62.1607 46.8266 62.1544 46.861 62.1481C47.4883 62.036 48.1425 62.0555 48.7798 62.2262C48.7992 62.2316 48.8187 62.2364 48.8379 62.242C48.8883 62.2562 48.9385 62.272 48.9885 62.2881C49.0315 62.3022 49.0744 62.317 49.1174 62.3324C49.1533 62.3451 49.1893 62.3579 49.225 62.3716C49.3074 62.4038 49.3897 62.4376 49.4715 62.4753C50.077 62.7539 50.8147 62.5048 50.9878 61.8732C51.013 61.7824 51.0267 61.6835 51.0267 61.5767C51.0267 58.1915 51.0267 54.8065 51.0267 51.4213C51.0267 51.2917 51.0267 51.162 51.0267 51.0324H60.1173H60.1527H60.1666C60.068 51.4934 60.0156 51.9611 60.0143 52.4291V52.43C60.0141 52.5413 60.0167 52.6525 60.0223 52.7638L60.0228 52.7721C60.0284 52.8806 60.0367 52.9892 60.048 53.0975L60.0503 53.1151C60.0616 53.2201 60.0751 53.325 60.0917 53.4296L60.0969 53.4585C60.1134 53.5595 60.1321 53.66 60.154 53.7604L60.1629 53.7978C60.1845 53.8953 60.2082 53.9923 60.2349 54.089L60.2482 54.1338C60.2751 54.2281 60.3036 54.3222 60.3353 54.4159L60.352 54.4626C60.3779 54.5372 60.4033 54.612 60.4323 54.6861C60.9446 55.9943 61.8492 57.1336 63.0349 57.8874L63.0436 57.8927C63.1216 57.9422 63.2007 57.99 63.281 58.0361L63.3216 58.0587C63.3733 58.0878 63.4244 58.1174 63.477 58.145C63.494 58.1539 63.5112 58.1615 63.5283 58.1702L63.5538 58.1841C63.5818 58.1984 63.6103 58.2106 63.6385 58.2243C63.7046 58.2567 63.7709 58.2891 63.8376 58.3191C63.8769 58.3367 63.9167 58.3528 63.9563 58.3697C64.0222 58.3976 64.088 58.4258 64.1543 58.4514C64.1902 58.4653 64.2265 58.4777 64.2626 58.4908C64.3343 58.5171 64.4062 58.5432 64.4784 58.5667C64.5047 58.5753 64.531 58.5827 64.5575 58.5908C64.6407 58.6168 64.7238 58.6419 64.8073 58.6645L64.8418 58.6731C65.6784 58.8929 66.5385 58.9403 67.3734 58.8301C69.5446 58.548 71.5521 57.215 72.4939 55.0851C72.5079 55.0534 72.5196 55.0214 72.5331 54.9895L72.5459 54.9617C72.5596 54.9299 72.5709 54.8976 72.5841 54.8656C72.6059 54.811 72.6285 54.7565 72.6489 54.7017C73.0352 53.6815 73.1454 52.6247 73.0126 51.5832L73.01 51.5599C72.9978 51.4665 72.9828 51.3734 72.9667 51.2802C72.9621 51.253 72.9584 51.2257 72.9534 51.1985C72.943 51.143 72.9306 51.0876 72.9191 51.0322H80.4875H80.7131C80.9197 51.0322 81.124 51.03 81.3263 51.0191C81.4454 51.0307 81.557 51.0533 81.6487 51.0983C82.0956 51.318 82.0651 51.7795 82.0651 52.2063V57.2421V61.5763C82.0651 62.417 82.9283 62.7861 83.6192 62.4681C84.2033 62.1994 84.8308 62.0769 85.4707 62.0664C88.1281 62.1008 90.2448 64.4357 89.9225 67.1037Z"
                              fill="#008080"
                            />
                          </svg>
                        </div>
                        {/* <div class="service-arrow">
                                  <Link href="#!"><img src="/images/arrow-accent.svg" alt=""></Link>
                              </div> */}
                      </div>
                      <div className="service-item-body">
                        <h3>{t("Integrate")}</h3>
                        <p>
                          {t("Next, we bring together the systems, tools, and workflows that drive your operations. We align technology with your strategic goals – implementing and integrating ERP software and digital platforms including Epicor, Microsoft Dynamics, SAP, and others, tailored to your unique needs. Our focus: speed, reliability, and scalability")}
                        </p>
                        {/*<div class="ser-btn1">*/}
                        {/*    <Link href="#" class="animated-svg-link1 btn-style-3">*/}
                        {/*        Know More*/}
                        {/*        <span class="svg-container ">*/}
                        {/*            <span class=" left">*/}
                        {/*                <svg width="24" height="23" viewBox="0 0 24 23" fill="none"*/}
                        {/*                    xmlns="http://www.w3.org/2000/svg">*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="4.79995" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="12.7992" cy="1.6" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="22.4008" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="1.6" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="6.40078" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="11.1996" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="19.1996" cy="14.4" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="17.6" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="12.7992" cy="20.8" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="19.1996" cy="8.00002" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                </svg>*/}
                        {/*            </span>*/}
                        {/*        </span>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
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
                          {/*<img src="/images/t1.svg" alt="">*/}
                          <svg
                            width={100}
                            height={100}
                            viewBox="0 0 100 100"
                            fill="none"
  role="img"
  aria-label="Digital transformation Icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.54494 51.1966C0.514981 51.1966 0 50.5866 0 50.1173C0 22.6185 22.3315 0.234619 49.7659 0.234619C50.7959 0.234619 51.3109 0.844661 51.3109 1.31392C51.3109 2.29938 50.7491 2.86249 49.7659 2.86249C23.7828 2.86249 2.62172 24.0732 2.62172 50.1173C2.62172 50.6335 2.05993 51.1966 1.54494 51.1966Z"
                              fill="#008080"
                            />
                            <path
                              d="M49.7656 100C48.7825 100 48.2207 99.4369 48.2207 98.4514C48.2207 97.8883 48.8761 96.9029 49.7656 96.9029C75.7488 96.9029 96.9098 75.6922 96.9098 49.6481C96.9098 48.6626 97.4716 48.0995 98.4548 48.0995C99.4379 48.0995 99.9997 48.6626 99.9997 49.6481C99.5316 77.4284 77.0128 100 49.7656 100Z"
                              fill="#008080"
                            />
                            <path
                              d="M43.8211 9.19756C43.8211 9.19756 43.3529 8.96293 43.2124 8.96293C42.7443 8.96293 42.6038 8.96293 42.3697 8.7283C41.9484 8.30596 41.8548 7.8367 41.9016 7.55514H41.9952L42.3229 7.03895L48.9241 0.469263C49.205 0.187705 49.5795 0 49.954 0C50.1413 0 50.3754 0 50.469 0.281558C50.9372 0.844674 51.1244 1.26701 51.0776 1.64242H50.984L50.6563 2.15861L43.8679 8.96293V9.19756H43.8211Z"
                              fill="#008080"
                            />
                            <path
                              d="M49.4863 99.9531C49.2054 99.9531 49.0649 99.9062 48.9245 99.7654C48.5968 99.4369 48.4095 98.9677 48.4563 98.5923H48.55L48.8777 98.0761L55.432 91.5064C55.7597 91.1779 56.0406 91.0371 56.2747 91.0371C56.5088 91.0371 56.7897 91.1779 57.1174 91.5064C57.726 92.1164 57.726 93.0549 57.1174 93.665L50.9844 99.8123H50.8908C50.6567 99.8123 50.3758 99.8123 50.1417 99.9062C49.8608 99.9062 49.6267 99.9062 49.4863 99.9062V99.9531Z"
                              fill="#008080"
                            />
                            <path
                              d="M46.0201 81.2295C44.2879 81.2295 43.0238 80.3379 42.0407 78.367L41.0575 73.909L40.6362 73.7682C37.9676 72.8766 35.7204 71.5157 33.9414 69.7325L33.6137 69.4041L28.9789 70.4364C28.6043 70.5303 28.2298 70.5772 27.8553 70.5772C27.0126 70.5772 25.4676 70.3426 24.7654 68.5594L20.9732 62.3182C20.271 60.9573 20.0837 58.9395 21.7223 57.7194L24.9058 54.5284V54.1061C24.3909 51.3843 24.3909 48.6157 24.859 45.9409V45.5186L21.8159 42.4214C20.5987 41.2013 20.271 39.2304 21.0201 37.7288L24.7654 31.206C25.7953 29.8452 27.0594 29.1413 28.5107 29.1413C28.8384 29.1413 29.1661 29.1413 29.5407 29.2351L34.1287 30.7837L34.4564 30.4552C35.3459 29.5636 36.6568 28.672 37.5463 28.2497C38.2485 28.015 38.8571 27.6396 39.4658 27.2642C40.0276 26.9357 40.5425 26.6072 41.198 26.4195L41.6193 26.2788L42.6493 21.6331C43.0238 20.0845 44.6624 18.9583 46.535 18.9583H54.0257C56.4601 18.9583 57.2092 20.6476 57.4433 21.6331L58.4732 26.2788L58.8946 26.4195C61.5631 27.3111 63.8103 28.672 65.5893 30.4552L65.9171 30.7837L70.5987 29.2351C70.5987 29.2351 71.0669 29.1413 71.3478 29.1413C72.7991 29.1413 74.2036 29.9859 74.7654 31.1591L78.5107 37.7757C79.2598 39.2304 78.932 41.2483 77.7148 42.4683L74.1568 45.5186L74.2504 45.9409C74.7186 48.6626 74.7186 51.4313 74.2504 54.1061L74.1568 54.5284L77.7616 57.6255C78.932 58.7987 79.2598 60.7696 78.5107 62.3182L74.8122 68.3717C74.2036 69.6387 72.7523 70.4364 71.3478 70.4364C71.0669 70.4364 70.786 70.4364 70.5519 70.3426L65.8702 69.3102L65.5425 69.6387C64.653 70.5303 63.3422 71.4219 62.4526 71.8442C62.1717 71.985 61.844 72.1727 61.4695 72.3604C60.6736 72.7827 59.7373 73.3459 58.801 73.6743L58.4264 73.8151L56.8815 77.9446C56.8347 80.291 55.1025 81.1826 53.4171 81.1826H45.9264L46.0201 81.2295ZM33.8478 66.4008C34.3159 66.4008 34.4564 66.4008 34.6905 66.6354C36.9845 68.4655 39.2785 69.9202 42.3684 71.4688C42.3684 71.5627 42.6961 71.7034 42.9302 71.8442C43.3047 72.0319 43.3047 72.0789 43.3047 72.1727L44.756 77.5223C44.756 77.9446 45.1774 78.6016 45.9732 78.6016H53.4639C54.0725 78.6016 54.7279 78.1793 54.7279 77.3346L56.0856 72.4073C56.0856 71.7504 56.6006 71.6096 56.741 71.6096C57.7242 71.328 58.4732 70.9526 59.1755 70.5772C59.8309 70.2487 60.5332 69.9202 61.1886 69.6856C62.0781 69.1225 62.6867 68.6532 63.2953 68.137C63.8571 67.6678 64.4189 67.2454 65.1212 66.7762C65.4957 66.4008 65.8702 66.26 66.0575 66.26L71.6287 67.8555H72.6586L76.638 60.8635L76.7317 60.0188V59.6903L72.7523 55.7016C72.4714 55.42 72.2841 54.9977 72.3309 54.9038C72.9864 51.619 72.9864 48.2872 72.5182 45.3778C72.5182 45.237 72.5182 44.4392 72.7523 44.2046L76.7317 40.2159V39.6528L76.638 38.9958L72.6586 32.0038H71.535L66.3852 33.4585C65.683 33.4585 65.4957 33.4585 65.2616 33.1769C62.8272 31.206 60.3927 29.282 57.4433 28.2966C57.0688 28.2027 56.6474 27.7335 56.5538 27.5458L54.962 21.68H44.8497L43.3047 27.4519C43.3047 27.7804 43.0706 28.2497 42.6493 28.2497H42.3216L42.0875 28.4843C41.6193 28.9536 40.9171 29.329 40.168 29.7513C39.6062 30.0329 39.0444 30.3614 38.4826 30.7368C37.1249 31.1591 36.1418 32.1446 34.7841 33.4585H34.5032H34.4096H33.4732L28.3234 32.0038H27.1998L23.1268 39.1366V40.122L27.1062 44.1108C27.3871 44.3923 27.5744 44.8147 27.5276 44.9085C26.8721 48.1934 26.8721 51.5251 27.3403 54.4346C27.3403 55.2323 27.3403 55.42 27.1062 55.6077L23.1268 59.5965V60.3942L27.1998 67.7616H28.1362L33.3796 66.3538H33.7541L33.8478 66.4008Z"
                              fill="#008080"
                            />
                            <path
                              d="M49.7657 65.7438C41.2919 65.7438 34.1758 58.5641 34.1758 50.1173C34.1758 41.6706 41.2919 34.4908 49.7657 34.4908C58.2395 34.4908 65.3556 41.6236 65.3556 50.1173C65.3556 58.611 58.1926 65.7438 49.7657 65.7438ZM49.7657 37.1187C42.7432 37.1187 36.7975 43.0784 36.7975 50.1173C36.7975 57.1563 42.7432 63.1159 49.7657 63.1159C56.7881 63.1159 62.7338 57.1563 62.7338 50.1173C62.7338 42.6091 57.2563 37.1187 49.7657 37.1187Z"
                              fill="#008080"
                            />
                            <path
                              d="M49.7673 51.1966V50.7274L49.2523 50.8212L37.08 43.7823C36.7991 43.6415 36.565 43.36 36.4246 42.9845C36.2841 42.6091 36.3309 42.2806 36.4246 41.9991C36.6118 41.6237 37.1736 41.2952 37.6886 41.2952C37.8759 41.2952 38.0163 41.2952 38.1568 41.389L49.7673 48.1464L61.4246 41.3421C61.4246 41.3421 61.8927 41.1544 62.1736 41.1544C62.6418 41.1544 62.9227 41.389 63.0632 41.8114C63.2972 42.3276 63.3441 42.7968 63.2504 43.1253C63.1568 43.36 62.9695 43.5007 62.6418 43.6415L50.5163 51.1028H49.8141L49.7673 51.1966Z"
                              fill="#008080"
                            />
                            <path
                              d="M49.7656 65.7438C48.7825 65.7438 48.2207 65.1807 48.2207 64.1952V49.6481C48.2207 48.6626 48.7825 48.0995 49.7656 48.0995C50.7488 48.0995 51.3106 48.6626 51.3106 49.6481V64.1952C51.3106 65.1807 50.7488 65.7438 49.7656 65.7438Z"
                              fill="#008080"
                            />
                          </svg>
                        </div>
                        {/* <div class="service-arrow">
                                  <Link href="#!"><img src="/images/arrow-accent.svg" alt=""></Link>
                              </div> */}
                      </div>
                      <div className="service-item-body">
                        <h3>{t("Transform")}</h3>
                        <p>
                          {t("Digital transformation becomes reality. From digitised supply chains to intelligent forecasting and AI-enabled ERP solutions, we deploy systems that unlock new revenue, simplify complexity, and accelerate time-to-value.")}
                        </p>
                        {/*<div class="ser-btn1">*/}
                        {/*    <Link href="#" class="animated-svg-link1 btn-style-3">*/}
                        {/*        Know More*/}
                        {/*        <span class="svg-container ">*/}
                        {/*            <span class=" left">*/}
                        {/*                <svg width="24" height="23" viewBox="0 0 24 23" fill="none"*/}
                        {/*                    xmlns="http://www.w3.org/2000/svg">*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="4.79995" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="12.7992" cy="1.6" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="22.4008" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="1.6" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="6.40078" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="11.1996" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="11.2" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="19.1996" cy="14.4" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="17.6" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="12.7992" cy="20.8" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                    <circle class="dot" opacity="0.5" cx="19.1996" cy="8.00002" r="1.6"*/}
                        {/*                        fill="#535353" />*/}
                        {/*                </svg>*/}
                        {/*            </span>*/}
                        {/*        </span>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                      </div>
                    </div>
                    {/* Service Item End */}
                  </div>
                  {/* <div class="col-lg-12">
              <div class="service-footer wow fadeInUp" data-wow-delay="0.25s">
                  <p>Let's make something great work together. <Link href="#!">get free quote</Link></p>
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
                              <img src="/images/a1.svg" alt="Digital analytics icon" />
                            </div>
                          </div>
                          <div className="service-item-body">
                            <h3>{t("Analyse")}</h3>
                            <p>{t("We start by understanding your business, its core your operating model, value drivers, and constraints. Using data-led diagnostics and performance benchmarking, we identify the real levers for impact whether it's efficiency, margin growth, agility, or customer experience.")}</p>
                            {/*<div class="ser-btn1">*/}
                            {/*    <Link href="#" class="animated-svg-link1 btn-style-3">*/}
                            {/*        Know More*/}
                            {/*        <span class="svg-container ">*/}
                            {/*            <span class=" left">*/}
                            {/*                <svg width="24" height="23" viewBox="0 0 24 23" fill="none"*/}
                            {/*                    xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="4.79995"*/}
                            {/*                        r="1.6" fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="12.7992" cy="1.6" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="22.4008" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="1.6" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="6.40078" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="11.1996" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="19.1996" cy="14.4" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="17.6" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="12.7992" cy="20.8" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="19.1996" cy="8.00002"*/}
                            {/*                        r="1.6" fill="#535353" />*/}
                            {/*                </svg>*/}
                            {/*            </span>*/}
                            {/*        </span>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
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
                              <img src="/images/i1.svg" alt="ERP and digital platform integration icon" />
                            </div>
                            {/* <div class="service-arrow">
                                  <Link href="#!"><img src="/images/arrow-accent.svg" alt=""></Link>
                              </div> */}
                          </div>
                          <div className="service-item-body">
                            <h3>{t("Integrate")}</h3>
                        <p>
                          {t("Next, we bring together the systems, tools, and workflows that drive your operations. We align technology with your strategic goals – implementing and integrating ERP software and digital platforms including Epicor, Microsoft Dynamics, SAP, and others, tailored to your unique needs. Our focus: speed, reliability, and scalability")}
                        </p>
                            {/*<div class="ser-btn1">*/}
                            {/*    <Link href="#" class="animated-svg-link1 btn-style-3">*/}
                            {/*        Know More*/}
                            {/*        <span class="svg-container ">*/}
                            {/*            <span class=" left">*/}
                            {/*                <svg width="24" height="23" viewBox="0 0 24 23" fill="none"*/}
                            {/*                    xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="4.79995"*/}
                            {/*                        r="1.6" fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="12.7992" cy="1.6" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="22.4008" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="1.6" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="6.40078" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="11.1996" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="19.1996" cy="14.4" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="17.6" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="12.7992" cy="20.8" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="19.1996" cy="8.00002"*/}
                            {/*                        r="1.6" fill="#535353" />*/}
                            {/*                </svg>*/}
                            {/*            </span>*/}
                            {/*        </span>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
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
                              <img src="/images/t1.svg" alt="Digital analytics icon" />
                            </div>
                            {/* <div class="service-arrow">
                                  <Link href="#!"><img src="/images/arrow-accent.svg" alt=""></Link>
                              </div> */}
                          </div>
                          <div className="service-item-body">
                            <h3>{t("Transform")}</h3>
                            <p>
                              {t("Digital transformation becomes reality. From digitised supply chains to intelligent forecasting and AI-enabled ERP solutions, we deploy systems that unlock new revenue, simplify complexity, and accelerate time-to-value.")}
                            </p>
                            {/*<div class="ser-btn1">*/}
                            {/*    <Link href="#" class="animated-svg-link1 btn-style-3">*/}
                            {/*        Know More*/}
                            {/*        <span class="svg-container ">*/}
                            {/*            <span class=" left">*/}
                            {/*                <svg width="24" height="23" viewBox="0 0 24 23" fill="none"*/}
                            {/*                    xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="4.79995"*/}
                            {/*                        r="1.6" fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="12.7992" cy="1.6" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="22.4008" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="1.6" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="6.40078" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="11.1996" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="11.2" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="19.1996" cy="14.4" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="16.0004" cy="17.6" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="12.7992" cy="20.8" r="1.6"*/}
                            {/*                        fill="#535353" />*/}
                            {/*                    <circle class="dot" opacity="0.5" cx="19.1996" cy="8.00002"*/}
                            {/*                        r="1.6" fill="#535353" />*/}
                            {/*                </svg>*/}
                            {/*            </span>*/}
                            {/*        </span>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
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
                  <source src="/videos/globe1.mp4" type="video/mp4" />
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
                        {t("Powering Enterprise Growth Through Digital Transformation")}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-agency-list">
                    <div className="about-agency-item wow fadeInUp">
                      <div className="agency-item-content">
                        <p>
                          {t("At RheinBrücke, we believe transformation is not just about technology, it’s about unlocking new business models, new ways of working, and new value for your customers.")}
                        </p>
                        <p>
                          {t("We help enterprises go beyond incremental change. Whether you’re modernizing your ERP landscape or seeking a certified ERP implementation partner, we enable rapid, meaningful transformation across your organization -powered by enterprise technology, real-world insight, and strategic execution.")}
                        </p>
                        <div className="ser-btn2">
                          <Link href="/about-us/overview"
                            className="animated-svg-link1 btn-style-3"
                          >
                            {t("Learn More About Our Story")}
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
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`row countingss mt-5 ${language === 'German' ? 'gercounts' : ''}`} id="counter-section">
              <div className="col-sm-2" />
              <div className="col-sm-2 col-6">
                <div className="success-counter-box1 firstbox">
                  <div className="success-counter-item">
                    <h2>
                      <span className="counter" data-target="10">10</span>+
                    </h2>
                    <p>{t("Years of Experience")}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 col-6">
                <div className="success-counter-box1">
                  <div className="success-counter-item">
                    <h2>
                      <span className="counter" data-target="45">45</span>+
                    </h2>
                    <p>{t("Countries Served")}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 col-6">
                <div className="success-counter-box1">
                  <div className="success-counter-item">
                    <h2>
                      <span className="counter" data-target="300">300</span>+
                    </h2>
                    <p>{t("Projects Delivered")}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 col-6">
                <div className="success-counter-box1">
                  <div className="success-counter-item">
                    <h2>
                      <span className="counter" data-target="8">8</span>+
                    </h2>
                    <p>{t("Industries Covered")}</p>
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
                        {t("Powering Enterprise Growth Through Digital Transformation")}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-agency-list">
                    <div className="about-agency-item wow fadeInUp">
                      <div className="agency-item-content">
                        <p>
                          {t("At RheinBrücke, we believe transformation is not just about technology, it’s about unlocking new business models, new ways of working, and new value for your customers.")}
                        </p>
                        <p>
                          {t("We help enterprises go beyond incremental change. Whether you’re modernizing your ERP landscape or seeking a certified ERP implementation partner, we enable rapid, meaningful transformation across your organization -powered by enterprise technology, real-world insight, and strategic execution.")}
                        </p>
                        <div className="ser-btn2">
                          <Link href="/about-us/overview"
                            className="animated-svg-link1 btn-style-3"
                          >
                            {t("Learn More About Our Story")}
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
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`row countingss mt-2 ${language === 'German' ? 'gercounts' : ''}`}>
                <div className="col-sm-2" />
                <div className="col-sm-2 col-6">
                  <div className="success-counter-box1 firstbox">
                    <div className="success-counter-item">
                      <h2>
                        <span className="counter" data-target="10">10</span>+
                      </h2>
                      <p>{t("Years of Experience")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 col-6">
                  <div className="success-counter-box1 firstbox1">
                    <div className="success-counter-item">
                      <h2>
                        <span className="counter" data-target="45">45</span>+
                      </h2>
                      <p>{t("Countries Served")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 col-6">
                  <div className="success-counter-box1 firstbox2">
                    <div className="success-counter-item">
                      <h2>
                        <span className="counter" data-target="300">300</span>+
                      </h2>
                      <p>{t("Projects Delivered")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 col-6">
                  <div className="success-counter-box1 firstbox3">
                    <div className="success-counter-item">
                      <h2>
                        <span className="counter" data-target="8">8</span>+
                      </h2>
                      <p>{t("Industries Covered")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2" />
              </div>
            </div>
          </div>
          {/* About Us Section End */}
          {/* Hero Section Start*/}
          <div className="hero brainbgsec brine-waper-padding1">
            <div className="container">
              <div className="row section-row align-items-center">
                <div className="col-sm-7">
                  {/* Section Title Start */}
                  <div className="prine-title">
                    <h2 data-cursor="-opaque">
                      {t("Built for Enterprises that Want to Scale")}
                    </h2>
                    <p className="brin-p-tag m-0">
                      {t("Scaling successfully means balancing agility with execution. We design solutions that are digital at the core, powered by trusted platforms, and tailored for growth. Every digital engagement or cloud ERP solution is focused on measurable outcomes with lasting business value.")}
                    </p>
                    <div className="ser-btn m-0">
                      <Link href="/solutions/digital-services-and-solutions"
                        className="animated-svg-link"
                      >
                        {t("Know More")}
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
                  <div className="row mt-5">
                    <div className="col-lg-6 col-md-6 col-6">
                      {/* Benefits Steps Item Start */}
                      <div className="benefits-steps-item wow fadeInUp">
                        <div className="icon-box">
                          {/*<img src="/images/brr1.svg" alt="">*/}
                          <svg
                            width={80}
                            height={80}
                            viewBox="0 0 80 80"
                            fill="none"
                            role="img" aria-label="Cloud native digital transformation icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1699_19219)">
                              <path
                                d="M73.2738 46.5896C72.7544 46.5896 72.3319 46.1672 72.3319 45.6478V39.865C72.3319 39.3456 72.7544 38.9232 73.2738 38.9232H75.0653L75.0542 38.5944C74.754 30.2323 71.4505 22.2323 65.7503 16.0683C60.0818 9.93925 52.4249 6.02104 44.1882 5.03633L43.8324 4.99345V6.72781C43.8324 7.24717 43.41 7.66964 42.8906 7.66964H37.1078C36.5884 7.66964 36.166 7.24717 36.166 6.72781V4.9998L35.8102 5.04268C27.5736 6.0274 19.9166 9.9456 14.2482 16.0715C8.54636 22.2339 5.2428 30.2323 4.94262 38.5944L4.93151 38.9232H6.86123C7.38058 38.9232 7.80306 39.3456 7.80306 39.865V45.6478C7.80306 46.1672 7.38058 46.5896 6.86123 46.5896H1.07842C0.559063 46.5896 0.136589 46.1672 0.136589 45.6478V39.865C0.136589 39.3456 0.559063 38.9232 1.07842 38.9232H3.04785L3.05738 38.6166C3.30355 31.2742 5.70657 24.243 10.0075 18.2823C14.2212 12.4423 19.9801 7.98412 26.6619 5.3921L26.5475 4.77904H7.66806V6.7294C7.66806 7.24876 7.24558 7.67123 6.72623 7.67123H0.94183C0.422474 7.67123 0 7.24876 0 6.7294V0.94183C0 0.422474 0.422474 0 0.94183 0H6.72464C7.24399 0 7.66647 0.422474 7.66647 0.94183V2.89061H36.1644V0.94183C36.1644 0.422474 36.5869 0 37.1062 0H42.889C43.4084 0 43.8309 0.422474 43.8309 0.94183V2.89061H72.3288V0.94183C72.3288 0.422474 72.7512 0 73.2706 0H79.0534C79.5728 0 79.9952 0.422474 79.9952 0.94183V6.72464C79.9952 7.24399 79.5728 7.66647 79.0534 7.66647H73.2706C72.7512 7.66647 72.3288 7.24399 72.3288 6.72464V4.77427H53.4477L53.3333 5.38733C60.0151 7.98094 65.7725 12.4376 69.9861 18.2775C74.2871 24.2382 76.6901 31.2694 76.9347 38.6119L76.9442 38.9184H79.0518C79.5712 38.9184 79.9936 39.3409 79.9936 39.8602V45.643C79.9936 46.1624 79.5712 46.5849 79.0518 46.5849H73.269L73.2738 46.5896ZM74.2156 44.7044H78.1147V40.8068H74.2156V44.7044ZM2.02025 44.7044H5.9194V40.8068H2.02025V44.7044ZM74.2156 5.7844H78.1147V1.88525H74.2156V5.7844ZM38.0512 5.7844H41.9504V1.88525H38.0512V5.7844ZM1.88525 5.7844H5.7844V1.88525H1.88525V5.7844Z"
                                fill="#499A9A"
                              />
                              <path
                                d="M28.2567 80C27.7373 80 27.3148 79.5775 27.3148 79.0581V72.9243L27.0321 72.8926C24.8451 72.6527 23.1965 70.8231 23.1965 68.6392V63.5695C23.1965 61.1967 25.1262 59.267 27.4991 59.267H28.5251L20.622 38.372C20.5076 38.0702 20.5552 37.7367 20.7458 37.4778L39.214 12.5312C39.2362 12.5153 39.2648 12.4931 39.2902 12.4629C39.3696 12.3676 39.4601 12.2962 39.5681 12.239L39.5936 12.2263L39.6015 12.2199C39.7508 12.1485 39.8747 12.1167 40.0002 12.1167C40.2733 12.1167 40.5275 12.2438 40.7149 12.4725C40.7371 12.4995 40.7593 12.5201 40.7784 12.5344L59.2545 37.4794C59.4466 37.7383 59.4927 38.0734 59.3783 38.3736L51.4752 59.2686H52.5012C54.8741 59.2686 56.8038 61.1983 56.8038 63.5711V68.6408C56.8038 70.8247 55.1552 72.6543 52.9682 72.8941L52.6855 72.9259V79.0597C52.6855 79.5791 52.263 80.0015 51.7437 80.0015H28.2582L28.2567 80ZM29.2001 78.1147H50.8018V72.9418H29.2001V78.1147ZM27.4991 61.1522C26.1665 61.1522 25.0817 62.237 25.0817 63.5695V68.6392C25.0817 69.9718 26.1665 71.0565 27.4991 71.0565H52.5012C53.8338 71.0565 54.9186 69.9718 54.9186 68.6392V63.5695C54.9186 62.237 53.8338 61.1522 52.5012 61.1522H27.4991ZM22.566 38.1862L30.539 59.267H49.4598L57.4327 38.1862L40.942 15.9206V33.8439L41.1532 33.9186C42.5493 34.4125 43.4879 35.7292 43.4879 37.1935C43.4879 39.1169 41.9235 40.6813 40.0002 40.6813C38.0768 40.6813 36.5124 39.1169 36.5124 37.1935C36.5124 35.7276 37.451 34.4125 38.8471 33.9186L39.0583 33.8439V15.9078L22.5676 38.1862H22.566ZM40.0002 35.5894C39.1155 35.5894 38.396 36.3089 38.396 37.1935C38.396 38.0782 39.1155 38.7977 40.0002 38.7977C40.8848 38.7977 41.6043 38.0782 41.6043 37.1935C41.6043 36.3089 40.8848 35.5894 40.0002 35.5894Z"
                                fill="#499A9A"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1699_19219">
                                <rect width={80} height={80} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="benefits-steps-content">
                          <h3>{t("Digital by Design")}</h3>
                          <p>{t("Cloud native, mobile first, AI-ready ERP solutions for agility and growth.")}</p>
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
                          {/*<img src="/images/brr2.svg" alt="">*/}
                          <svg
                            width={80}
                            height={80}
                            viewBox="0 0 80 80"
                            fill="none"
                            role="img" aria-label="ERP system ROI icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M69.8151 58.9892H10.1836C7.35627 58.9892 5.05469 56.6892 5.05469 53.8603V15.1289C5.05469 12.3016 7.35627 10 10.1836 10H69.8151C72.6424 10 74.944 12.3016 74.944 15.1289V53.8619C74.944 56.6892 72.644 58.9892 69.8151 58.9892ZM10.1836 11.5884C8.23147 11.5884 6.64308 13.1768 6.64308 15.1289V53.8619C6.64308 55.814 8.23147 57.4024 10.1836 57.4024H69.8151C71.7672 57.4024 73.3556 55.814 73.3556 53.8619V15.1289C73.3556 13.1768 71.7672 11.5884 69.8151 11.5884H10.1836Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M74.1498 50.45H5.84888C5.41049 50.45 5.05469 50.0942 5.05469 49.6558C5.05469 49.2174 5.41049 48.8616 5.84888 48.8616H74.1498C74.5882 48.8616 74.944 49.2174 74.944 49.6558C74.944 50.0942 74.5882 50.45 74.1498 50.45Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M31.4641 70C31.0257 70 30.6699 69.6442 30.6699 69.2058V58.1951C30.6699 57.7567 31.0257 57.4009 31.4641 57.4009C31.9025 57.4009 32.2583 57.7567 32.2583 58.1951V69.2058C32.2583 69.6442 31.9025 70 31.4641 70Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M48.5325 70C48.0941 70 47.7383 69.6442 47.7383 69.2058V58.1951C47.7383 57.7567 48.0941 57.4009 48.5325 57.4009C48.9709 57.4009 49.3267 57.7567 49.3267 58.1951V69.2058C49.3267 69.6442 48.9709 70 48.5325 70Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M56.0487 70H23.9504C23.5121 70 23.1562 69.6442 23.1562 69.2058C23.1562 68.7674 23.5121 68.4116 23.9504 68.4116H56.0487C56.4871 68.4116 56.8429 68.7674 56.8429 69.2058C56.8429 69.6442 56.4871 70 56.0487 70Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M35.2374 40.2303H16.9661C16.5277 40.2303 16.1719 39.8745 16.1719 39.4361C16.1719 34.4803 20.2032 30.449 25.159 30.449H27.046C32.0018 30.449 36.0331 34.4803 36.0331 39.4361C36.0316 39.8745 35.6773 40.2303 35.2374 40.2303ZM17.8016 38.6419H34.4003C34.0032 34.9346 30.855 32.0374 27.0444 32.0374H25.1574C21.3469 32.0374 18.1987 34.933 17.8016 38.6419Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M26.1022 32.0374C22.8444 32.0374 20.1934 29.3863 20.1934 26.1285C20.1934 22.8708 22.8444 20.2197 26.1022 20.2197C29.36 20.2197 32.011 22.8708 32.011 26.1285C32.011 29.3863 29.36 32.0374 26.1022 32.0374ZM26.1022 21.8081C23.7196 21.8081 21.7818 23.746 21.7818 26.1285C21.7818 28.5111 23.7196 30.449 26.1022 30.449C28.4848 30.449 30.4226 28.5111 30.4226 26.1285C30.4226 23.746 28.4832 21.8081 26.1022 21.8081Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M63.0325 42.5161C62.5941 42.5161 62.2383 42.1603 62.2383 41.7219V24.4878C62.2383 24.0494 62.5941 23.6936 63.0325 23.6936C63.4709 23.6936 63.8267 24.0494 63.8267 24.4878V41.7219C63.8267 42.1619 63.4709 42.5161 63.0325 42.5161Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M56.4348 42.5159C55.9964 42.5159 55.6406 42.1601 55.6406 41.7217V30.4822C55.6406 30.0438 55.9964 29.688 56.4348 29.688C56.8732 29.688 57.229 30.0438 57.229 30.4822V41.7217C57.229 42.1616 56.8732 42.5159 56.4348 42.5159Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M49.8333 42.5158C49.3949 42.5158 49.0391 42.16 49.0391 41.7216V28.7969C49.0391 28.3585 49.3949 28.0027 49.8333 28.0027C50.2717 28.0027 50.6275 28.3585 50.6275 28.7969V41.7216C50.6275 42.1616 50.2732 42.5158 49.8333 42.5158Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M43.2317 42.5158C42.7933 42.5158 42.4375 42.16 42.4375 41.7216V33.7908C42.4375 33.3524 42.7933 32.9966 43.2317 32.9966C43.6701 32.9966 44.0259 33.3524 44.0259 33.7908V41.7216C44.0259 42.1616 43.6701 42.5158 43.2317 42.5158Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M43.2327 29.3099C43.004 29.3099 42.7768 29.2114 42.6196 29.0208C42.34 28.6825 42.3877 28.1822 42.726 27.9026L49.3274 22.4544C49.5434 22.2749 49.8404 22.2241 50.1041 22.321L56.2242 24.5463L62.4666 18.1721C62.7731 17.8592 63.2766 17.8528 63.5896 18.161C63.9025 18.4675 63.9088 18.9711 63.6007 19.284L57.0009 26.0251C56.7833 26.2475 56.4545 26.3221 56.1622 26.2157L49.9881 23.9697L43.7378 29.1288C43.5901 29.2496 43.4106 29.3099 43.2327 29.3099Z"
                              fill="#499A9A"
                            />
                          </svg>
                        </div>
                        <div className="benefits-steps-content">
                          <h3>{t("Outcomes-Driven")}</h3>
                          <p>{t("Quantified cost savings across ERP systems, operational KPIs & customer lifetime value.")}</p>
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
                          {/*<img src="/images/brr3.svg" alt="">*/}
                          <svg
                            width={80}
                            height={80}
                            viewBox="0 0 80 80"
                            fill="none"
                            role="img" aria-label="Epicor ERP, SAP and Microsoft partner icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1699_19228)">
                              <path
                                d="M18.8306 75C13.5383 75 9.23387 70.6956 9.23387 65.4032C9.23387 64.7823 9.74194 64.2742 10.3629 64.2742H13.4677V37.1774C13.4677 35.004 15.246 33.2258 17.4194 33.2258H23.0645C23.6855 33.2258 24.1936 33.7339 24.1936 34.3548C24.1936 34.9758 23.6855 35.4839 23.0645 35.4839H17.4194C16.4879 35.4839 15.7258 36.246 15.7258 37.1774V64.2742H27.8488C28.6391 64.2742 29.3871 64.5 30.0363 64.9375L32.8448 66.8145C33.127 66.998 33.4516 67.0968 33.7903 67.0968H46.1956C46.5343 67.0968 46.8589 66.998 47.1411 66.8145L49.9496 64.9375C50.5988 64.5 51.3609 64.2742 52.1371 64.2742H64.2601V37.1774C64.2601 36.246 63.498 35.4839 62.5665 35.4839H56.9214C56.3004 35.4839 55.7923 34.9758 55.7923 34.3548C55.7923 33.7339 56.3004 33.2258 56.9214 33.2258H62.5665C64.7399 33.2258 66.5182 35.004 66.5182 37.1774V64.2742H69.623C70.244 64.2742 70.752 64.7823 70.752 65.4032C70.752 70.6956 66.4476 75 61.1552 75H18.8306ZM11.6331 66.871C12.3246 70.2722 15.3448 72.7419 18.8306 72.7419H61.1694C64.6411 72.7419 67.6613 70.2722 68.3669 66.871L68.4375 66.5323H52.1512C51.8125 66.5323 51.4879 66.6311 51.2057 66.8145L48.3972 68.6915C47.748 69.129 46.9859 69.3548 46.2097 69.3548H33.8044C33.0141 69.3548 32.2661 69.129 31.6169 68.6915L28.8085 66.8145C28.5262 66.6311 28.2016 66.5323 27.8629 66.5323H11.5766L11.6472 66.871H11.6331ZM40 58.0645C39.9012 58.0645 39.8165 58.0645 39.7319 58.0363C32.5766 56.244 27.5806 49.8508 27.5806 42.4839V34.369C27.5806 33.9315 27.8206 33.5504 28.2016 33.3528L39.4919 27.7077C39.6472 27.623 39.8165 27.5948 40 27.5948C40.1835 27.5948 40.3528 27.6371 40.5081 27.7077L51.7984 33.3528C52.1794 33.5504 52.4194 33.9315 52.4194 34.369V42.4839C52.4194 49.8508 47.4234 56.244 40.2823 58.0363C40.1976 58.0645 40.0988 58.0645 40.0141 58.0645H40ZM29.8387 35.0464V42.4698C29.8387 48.6371 33.9879 54.0988 39.9294 55.7359L40 55.7641L40.0706 55.7359C46.0121 54.0847 50.1613 48.6371 50.1613 42.4698V35.0464L40 29.9657L29.8387 35.0464ZM38.5887 46.7742C38.2923 46.7742 38.0101 46.6613 37.7843 46.4496L33.5504 42.2157C33.3387 42.004 33.2258 41.7218 33.2258 41.4113C33.2258 41.1008 33.3387 40.8327 33.5504 40.6069C33.7621 40.3952 34.0444 40.2823 34.3548 40.2823C34.6653 40.2823 34.9335 40.3952 35.1593 40.6069L38.5887 44.0363L44.8407 37.7843C45.0524 37.5726 45.3347 37.4597 45.6452 37.4597C45.9556 37.4597 46.2238 37.5726 46.4496 37.7843C46.6613 37.996 46.7742 38.2782 46.7742 38.5887C46.7742 38.8992 46.6613 39.1673 46.4496 39.3931L39.3931 46.4496C39.1815 46.6613 38.8992 46.7742 38.5887 46.7742ZM10.3629 39.9153C10.0665 39.9153 9.78427 39.8024 9.57258 39.5907C6.62298 36.6976 5 32.8306 5 28.7097C5 20.2984 11.8306 13.4677 20.2419 13.4677C21.8085 13.4677 23.3609 13.7077 24.8427 14.1875L25.0686 14.2581L25.1815 14.0464C28.0464 8.47177 33.7198 5 40 5C46.2802 5 51.9536 8.47177 54.8186 14.0464L54.9315 14.2581L55.1573 14.1875C56.6391 13.7077 58.1915 13.4677 59.7581 13.4677C68.1694 13.4677 75 20.2984 75 28.7097C75 32.7742 73.4194 36.6129 70.5403 39.4919C70.3286 39.7036 70.0464 39.8165 69.7359 39.8165C69.4254 39.8165 69.1573 39.7036 68.9315 39.4919C68.494 39.0544 68.494 38.3347 68.9315 37.8972C71.3871 35.4415 72.7419 32.1815 72.7419 28.7238C72.7419 21.5685 66.9133 15.7399 59.7581 15.7399C58.0222 15.7399 56.3427 16.0786 54.7762 16.7419C52.6311 17.631 50.7681 19.0847 49.3992 20.9335C49.1875 21.2298 48.8488 21.3992 48.496 21.3992C48.2561 21.3992 48.0161 21.3286 47.8327 21.1734C47.3387 20.8065 47.2258 20.1008 47.5927 19.5927C48.8911 17.8427 50.5706 16.4032 52.5746 15.3306L52.8145 15.2036L52.6875 14.9496C50.1754 10.2218 45.3206 7.28629 40 7.28629C34.6794 7.28629 29.8105 10.2218 27.3125 14.9496L27.1855 15.2036L27.4395 15.3306C29.4436 16.4032 31.123 17.8427 32.4214 19.5927C32.7883 20.0867 32.6895 20.8065 32.1815 21.1734C31.9839 21.3145 31.7581 21.3992 31.504 21.3992C31.1371 21.3992 30.8125 21.2298 30.6008 20.9476C29.2319 19.0988 27.3831 17.6593 25.2379 16.756C23.6714 16.0927 21.9919 15.754 20.2561 15.754C13.0867 15.7258 7.25806 21.5544 7.25806 28.7097C7.25806 32.2097 8.64113 35.5121 11.1532 37.9819C11.3649 38.1936 11.4919 38.4758 11.4919 38.7722C11.4919 39.0686 11.379 39.3649 11.1673 39.5766C10.9556 39.7883 10.6734 39.9153 10.3629 39.9153Z"
                                fill="#499A9A"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1699_19228">
                                <rect
                                  width={70}
                                  height={70}
                                  fill="white"
                                  transform="translate(5 5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="benefits-steps-content">
                          <h3>{t("Trusted Enterprise Platforms")}</h3>
                          <p>{t("Epicor Premium Partner, Microsoft ISV Partner, Microsoft AI Cloud Partner, SAP certified -we bring deep expertise in platforms that run the world’s leading businesses.")}</p>
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
                          {/*<img src="/images/brr4.svg" alt="">*/}
                          <svg
                            width={80}
                            height={80}
                            viewBox="0 0 80 80"
                            fill="none"
                            role="img" aria-label="Global ERP transformation icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1699_19211)">
                              <path
                                d="M45.4593 0.94165H34.5388C32.9818 0.94165 31.7151 2.20837 31.7151 3.7654V9.39649C20.8779 12.3345 12.353 20.8802 9.4132 31.716H3.76711C2.21008 31.716 0.943359 32.9827 0.943359 34.5398V45.4638C0.943359 47.019 2.21008 48.2838 3.76711 48.2838H9.39617C12.3351 59.1226 20.8751 67.6654 31.7154 70.6038V76.2382C31.7154 77.7934 32.9821 79.0582 34.5391 79.0582H45.4596C46.9965 79.0582 48.2505 77.8257 48.2826 76.2988C48.2834 76.287 48.2834 76.2754 48.2834 76.2635V70.6084C53.222 69.2756 57.803 66.7717 61.6293 63.2101C62.0148 62.8518 62.0363 62.2488 61.6777 61.8637C61.319 61.4782 60.7154 61.4577 60.3313 61.8152C56.8634 65.0431 52.7351 67.3424 48.2834 68.6265V65.314C48.2834 63.757 47.0166 62.4902 45.4596 62.4902H34.5391C32.9821 62.4902 31.7154 63.757 31.7154 65.314V68.6321C21.9259 65.7946 14.2054 58.0729 11.3684 48.2837H14.6877C16.2246 48.2837 17.4787 47.0512 17.5107 45.5243C17.5115 45.5124 17.5115 45.5009 17.5115 45.489V34.5396C17.5115 32.9826 16.2448 31.7159 14.6877 31.7159H11.3877C14.2262 21.9299 21.929 14.2049 31.7152 11.3677V14.6892C31.7152 16.2443 32.982 17.5091 34.539 17.5091H45.4595C46.9963 17.5091 48.2504 16.2767 48.2824 14.7498C48.2832 14.7379 48.2832 14.7263 48.2832 14.7145V11.3752C58.0698 14.2121 65.7818 21.9306 68.6196 31.716H65.311C63.754 31.716 62.4873 32.9827 62.4873 34.5398V45.4638C62.4873 47.019 63.754 48.2838 65.311 48.2838H68.6395C68.1205 50.0873 67.4406 51.8487 66.5718 53.552C66.3329 54.0204 66.519 54.5943 66.9871 54.8332C67.456 55.0732 68.0298 54.8857 68.2687 54.4176C69.2777 52.4398 70.0443 50.3877 70.6087 48.2838H76.2313C77.7884 48.2838 79.0551 47.019 79.0551 45.4638V34.5398C79.0551 32.9827 77.7884 31.716 76.2313 31.716H70.5926C67.6534 20.8799 59.1212 12.3402 48.2832 9.40212V3.76524C48.283 2.20837 47.0163 0.94165 45.4593 0.94165ZM33.6205 65.3141C33.6205 64.8077 34.0329 64.3957 34.539 64.3957H39.047V67.5748C39.047 68.101 39.4734 68.5274 39.9996 68.5274C40.5259 68.5274 40.9523 68.101 40.9523 67.5748V64.3957H45.4595C45.9655 64.3957 46.3779 64.8076 46.3779 65.3141V76.2382C46.3779 76.7424 45.9655 77.1529 45.4595 77.1529H34.539C34.0329 77.1529 33.6205 76.7424 33.6205 76.2382V65.3141ZM15.6059 34.5398V45.4638C15.6059 45.9681 15.1935 46.3785 14.6874 46.3785H3.76711C3.26102 46.3785 2.84867 45.9681 2.84867 45.4638V34.5398C2.84867 34.0334 3.26102 33.6213 3.76711 33.6213H8.54664V36.8004C8.54664 37.3266 8.97305 37.7531 9.4993 37.7531C10.0255 37.7531 10.452 37.3266 10.452 36.8004V33.6213H14.6874C15.1935 33.6213 15.6059 34.0332 15.6059 34.5398ZM77.1496 34.5398V45.4638C77.1496 45.9681 76.7373 46.3785 76.2312 46.3785H65.3107C64.8046 46.3785 64.3923 45.9681 64.3923 45.4638V34.5398C64.3923 34.0334 64.8046 33.6213 65.3107 33.6213H69.8187V36.8004C69.8187 37.3266 70.2451 37.7531 70.7713 37.7531C71.2976 37.7531 71.724 37.3266 71.724 36.8004V33.6213H76.2312C76.7373 33.6213 77.1496 34.0332 77.1496 34.5398ZM46.3777 14.6895C46.3777 15.1937 45.9654 15.6041 45.4593 15.6041H34.5388C34.0327 15.6041 33.6204 15.1937 33.6204 14.6895V3.76524C33.6204 3.25884 34.0327 2.84681 34.5388 2.84681H39.0468V6.02446C39.0468 6.55071 39.4732 6.97712 39.9995 6.97712C40.5257 6.97712 40.9521 6.55071 40.9521 6.02446V2.84681H45.4593C45.9654 2.84681 46.3777 3.25868 46.3777 3.76524V14.6895Z"
                                fill="#499A9A"
                              />
                              <path
                                d="M39.9998 20.7993C29.5674 20.7993 20.7988 29.2217 20.7988 40.0059C20.7988 50.669 29.4643 59.2006 39.9998 59.2006C50.5868 59.2006 59.1999 50.5899 59.1999 40.0059C59.2001 29.3848 50.5918 20.7993 39.9998 20.7993ZM49.399 25.4999C51.1298 26.6223 52.3899 27.769 53.717 29.5074C53.6409 29.579 53.5646 29.647 53.4865 29.7096C52.8449 30.2232 52.4237 30.1349 51.5329 29.8882C49.187 29.2392 48.672 29.9593 47.476 30.299C47.2371 30.3671 46.9276 30.417 46.8121 30.2745C46.3879 29.7528 46.6409 27.9218 46.9557 27.3176C47.3785 26.4917 48.3884 25.9799 49.399 25.4999ZM31.3884 25.0048C31.4082 24.9934 31.4288 24.9829 31.4487 24.9715C31.4902 25.0174 31.5318 25.0637 31.5726 25.1101C32.8757 26.619 33.4787 27.0006 33.9177 27.2792C34.1335 27.4154 34.252 27.4906 34.4505 27.7101C35.0309 28.3446 35.4498 29.7548 34.4387 30.2637C34.4387 30.264 34.4379 30.2645 34.4371 30.2648L33.2574 30.859C31.6066 31.6873 31.163 31.9099 30.7113 32.4793C30.4948 32.7535 30.3577 33.1063 30.2127 33.4796C29.7068 34.7865 29.5088 35.0481 28.2687 34.2971C26.7243 33.3668 25.9087 32.9537 25.1376 32.9537C24.8049 32.9537 24.4798 33.0312 24.1093 33.1767C25.6312 29.6459 28.2463 26.8099 31.3884 25.0048ZM30.6163 42.9449C30.4757 42.3507 30.0559 41.9104 29.6496 41.4851C28.8562 40.6537 28.7274 40.416 29.1696 39.7848C29.4629 39.3695 30.6812 39.3837 32.0691 39.8187C33.9782 40.4163 34.674 40.4331 35.4488 40.3951C35.7898 40.3768 36.0605 40.3639 36.6523 40.4904C36.9485 40.554 37.0512 40.6334 37.0616 40.6334H37.0624C37.1018 40.7312 37.157 41.0081 37.1971 41.2124C37.407 42.2678 37.7977 44.2323 39.8459 44.716C39.9977 44.7529 40.1599 44.7801 40.3237 44.806C40.4271 44.8224 40.5663 44.8443 40.6668 44.8685C40.6526 45.1799 40.5551 45.3221 40.2552 45.7207C39.793 46.3332 39.1612 47.1724 38.8843 49.0735C38.694 49.7049 36.4298 52.1865 32.5809 55.6054C28.9429 53.8764 26.2352 51.1479 24.5166 47.677C24.981 47.0068 26.321 46.6723 27.1854 46.4332C28.7765 45.9939 31.1804 45.3299 30.6163 42.9449ZM39.9998 57.2953C38.1216 57.2953 36.2924 56.9951 34.5401 56.4095C37.4963 53.7457 40.571 50.6964 40.7634 49.3812C40.9755 47.9299 41.3826 47.3899 41.7763 46.8674C42.1402 46.3845 42.5534 45.8367 42.5734 44.8606C42.6113 43.2396 41.166 43.0104 40.622 42.924C40.5104 42.9062 40.3995 42.8898 40.2901 42.8634C39.4893 42.674 39.2771 41.9056 39.0659 40.8409C38.9654 40.3363 38.879 39.9001 38.6349 39.5585C38.303 39.0953 37.7709 38.782 37.052 38.6271C36.214 38.4481 35.7548 38.4715 35.3529 38.492C34.8446 38.5187 34.369 38.5418 32.6387 38.0004C31.247 37.5646 28.7455 37.0757 27.6105 38.6903C26.2291 40.6614 27.5577 42.0528 28.2715 42.8004C28.4516 42.989 28.724 43.2742 28.7627 43.3835C28.8632 43.8088 28.7032 44.0373 26.678 44.5967C25.6649 44.8767 24.5504 45.1867 23.712 45.8123C23.0465 43.9571 22.7045 42.0117 22.7045 40.0059C22.7045 38.5337 22.8965 37.0862 23.2574 35.6912C23.618 35.5246 23.9185 35.3728 24.1759 35.2418C25.2468 34.6993 25.2462 34.7004 27.2846 35.9284C29.3766 37.1943 30.9787 36.7739 31.9898 34.169C32.062 33.9826 32.161 33.727 32.2063 33.661C32.3879 33.4318 32.6946 33.2732 34.1124 32.5618L35.298 31.9649C37.5082 30.8487 37.3115 28.0187 35.8607 26.4273C35.4893 26.0187 35.2095 25.8412 34.9379 25.6696C34.6035 25.4576 34.1852 25.186 33.2168 24.0928C35.3524 23.1745 37.6274 22.7045 40.0004 22.7045C42.5752 22.7045 45.1024 23.286 47.4104 24.3799C46.5518 24.8703 45.7502 25.4923 45.2638 26.4424C44.8165 27.3003 44.1802 30.0573 45.3338 31.4762C45.9873 32.2781 46.9785 32.4192 47.9976 32.1315C49.4463 31.7187 49.3391 31.2587 51.0245 31.724C51.9637 31.9842 53.2505 32.3395 54.678 31.1963C54.7235 31.1599 54.7651 31.1148 54.8096 31.0768C56.4363 33.7613 57.2955 36.8229 57.2955 40.0057C57.2948 49.5393 49.5359 57.2953 39.9998 57.2953Z"
                                fill="#499A9A"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1699_19211">
                                <rect width={80} height={80} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="benefits-steps-content">
                          <h3>{t("Deep Execution Capability")}</h3>
                          <p>{t("Global delivery with local expertise to execute ERP implementation and digital transformation programs at speed and scale.")}</p>
                        </div>
                      </div>
                      {/* Benefits Steps Item End */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="parent1">
                    <video
                      src="/videos/brain.mov"
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      className="bg-image"
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Section End*/}
          {/* Our Testimonial Section Start */}
          <div className={`our-testimonial indexwhatdo pd0 pd30 ${language === 'German' ? 'geranim' : ''}`}>
            <div className="container">
              <div className="row section-row align-items-center">
                <div className="col-lg-6">
                  <div className="section-title testidescription">
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      {t("ERP & Digital Solutions to Drive Enterprise Transformation")}
                    </h2>
                    <p>{t("We help enterprises modernise systems, build digital capabilities, and unlock growth. From ERP transformation to automation and data strategy, our solutions simplify complexity and create future-ready enterprises with cross-platform system integration.")}</p>
                    <div className="ser-btn2">
                      <Link href="/solutions/erp-enterprise-solutions-and-services/erp" className="animated-svg-link1 btn-style-3">
                        {t("Read more")}
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  {/* Testimonial Slider Start */}
                  <div className="testimonial-slider testianimdot">
                    <div className="swiper">
                      <div className="swiper-wrapper">
                        {/* Testimonial Slide Start */}
                        <div className="swiper-slide">
                          <div className="service-item flip-card ">
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
                                        role="img" aria-label="Business Model Transformation icon"
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
                                <h3>{t("Business Model Transformation")}</h3>
                                <p>{t("We help businesses rethink their operating models, uncover new revenue streams, and deliver innovative services that drive sustainable growth.")}</p>
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
                                        role="img" aria-label="ERP Modernisation icon"
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
                                <h3>{t("ERP Modernisation")}</h3>
                                <p>{t("We modernise legacy ERP systems to unlock agility, reduce complexity, supporting faster decisions and scalable operations.")}</p>
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
                                        role="img" aria-label="Digital Supply Chain implement icon"
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
                                  <h3>{t("Digital Supply Chain Enablement")}</h3>
                                  <p>{t("We connect your supply chain through cloud and analytics solutions, providing real-time visibility and seamless collaboration with partners.")}</p>
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
                                        role="img" aria-label="ERP Data Analytics icon"
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
                                <h3>{t("Data & Analytics Strategy")}</h3>
                                <p>{t("We turn data into a strategic asset, with analytics frameworks that deliver actionable insights, improve decision-making and unlock opportunities.")}</p>
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
                                        role="img" aria-label="AI ERP implementation icon"
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
                                <h3>{t("Intelligent Automation")}</h3>
                                <p>{t("We deploy RPA and AI-driven automation solutions that streamline operations, reduce manual effort and improve accuracy.")}</p>
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
                                        role="img" aria-label="Cross-Platform Integration icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <line
                                          opacity="0.3"
                                          x1="84.4379"
                                          y1="60.6539"
                                          x2="0.999733"
                                          y2="60.6539"
                                          stroke="#082326"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M1.42139 2L34.7826 2C46.3806 2 55.7826 11.402 55.7826 23V39.5752C55.7826 51.1732 65.1846 60.5752 76.7826 60.5752H84.8595"
                                          stroke="#082326"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M1.42139 119.15L34.7826 119.15C46.3806 119.15 55.7826 109.748 55.7826 98.1505V81.5752C55.7826 69.9772 65.1846 60.5752 76.7826 60.5752H84.8595"
                                          stroke="#082326"
                                        />
                                        <line
                                          opacity="0.3"
                                          y1="-0.5"
                                          x2="83.4381"
                                          y2="-0.5"
                                          transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1539)"
                                          stroke="#082326"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M249.577 2L216.216 2C204.618 2 195.216 11.402 195.216 23V39.5752C195.216 51.1732 185.814 60.5752 174.216 60.5752H166.139"
                                          stroke="#082326"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M249.577 119.15L216.216 119.15C204.618 119.15 195.216 109.748 195.216 98.1505V81.5752C195.216 69.9772 185.814 60.5752 174.216 60.5752H166.139"
                                          stroke="#082326"
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
                                          d="M138.05 46.6327L140.755 45.9597L138.72 43.9133L138.05 46.6327ZM139.99 48.4181L136.834 49.201C136.015 49.407 135.305 48.6791 135.496 47.8825L137.053 41.5784C137.108 41.3449 137.176 41.1664 137.354 40.9878L142.763 35.5353H132.832V53.3488H147.052V43.927L143.678 47.3194C143.514 47.4842 143.309 47.5941 143.091 47.6216L139.99 48.4181ZM152.066 35.7825L153.049 34.7936C154.442 33.3927 151.219 30.1377 149.825 31.5523L148.842 32.5412L152.066 35.7825ZM146.52 31.7721L148.282 30.0003C150.03 28.2423 152.516 29.0389 154.033 30.5634C155.563 32.1017 156.355 34.5876 154.606 36.3456L149.238 41.7432V54.4613C149.238 55.0656 148.746 55.56 148.145 55.56H131.739C131.138 55.56 130.646 55.0656 130.646 54.4613V43.1853H115.893C114.09 43.1853 112.601 44.6824 112.601 46.4953V47.9649C112.601 48.5692 112.11 49.0637 111.509 49.0637C110.907 49.0637 110.416 48.5692 110.416 47.9649V46.4953C110.416 43.46 112.875 40.9878 115.893 40.9878H130.633V34.4503C130.633 33.846 131.125 33.3515 131.726 33.3515H144.935L146.52 31.7721ZM150.522 37.3345L147.298 34.0932L139.676 41.757L142.9 44.9983L150.522 37.3345ZM143.186 81.4082C142.585 81.4082 142.094 80.9137 142.094 80.3094C142.094 79.7051 142.585 79.2107 143.186 79.2107H145.946C147.749 79.2107 149.238 77.7136 149.238 75.9007V65.6136C149.238 63.8007 147.749 62.3036 145.946 62.3036H130.264C129.663 62.3036 129.171 61.8092 129.171 61.2049C129.171 60.6006 129.663 60.1061 130.264 60.1061H145.946C148.965 60.1061 151.424 62.5783 151.424 65.6136V75.9007C151.424 78.936 148.965 81.4082 145.946 81.4082H143.186ZM126.18 72.0138C129.963 72.0138 133.023 75.0904 133.023 78.8948C133.023 82.6855 129.963 85.7757 126.18 85.7757C122.409 85.7757 119.336 82.6992 119.336 78.8948C119.336 75.0904 122.409 72.0138 126.18 72.0138ZM129.472 75.5848C127.655 73.7581 124.704 73.7581 122.887 75.5848C121.071 77.4115 121.071 80.3781 122.887 82.2048C124.704 84.0314 127.655 84.0314 129.472 82.2048C131.288 80.3644 131.288 77.4115 129.472 75.5848ZM127.546 68.5253L126.972 66.9733H125.387L124.814 68.5253C124.677 68.8961 124.363 69.1434 124.008 69.212C122.942 69.4455 121.822 69.9262 120.907 70.5168C120.565 70.7365 120.155 70.7365 119.828 70.5717L118.366 69.9125L117.246 71.0387L117.929 72.5495C118.093 72.9066 118.052 73.2911 117.861 73.5933C117.246 74.5547 116.809 75.626 116.563 76.7385C116.481 77.1093 116.208 77.3977 115.88 77.5351L114.336 78.1257V79.7188L115.88 80.3094C116.249 80.4468 116.494 80.7627 116.563 81.1197C116.795 82.191 117.273 83.3173 117.861 84.2375C118.079 84.5808 118.079 84.9929 117.915 85.3225L117.246 86.7921L118.366 87.9183L119.882 87.2316C120.237 87.0805 120.62 87.1079 120.92 87.3002C121.877 87.9183 122.942 88.3578 124.049 88.605C124.417 88.6874 124.704 88.9621 124.827 89.2917L125.415 90.8437H126.972L127.546 89.2917C127.682 88.9209 127.996 88.6737 128.352 88.605C129.417 88.3715 130.537 87.8908 131.452 87.3002C131.794 87.0805 132.204 87.0805 132.532 87.2453L133.993 87.9045L135.113 86.7783L134.43 85.2675C134.266 84.9104 134.307 84.5259 134.499 84.2237C135.113 83.2623 135.55 82.191 135.796 81.0785C135.878 80.7077 136.151 80.4193 136.479 80.282L138.023 79.6914V78.0982L136.479 77.5076C136.11 77.3703 135.865 77.0544 135.796 76.6973C135.564 75.626 135.086 74.4998 134.499 73.5658C134.28 73.2225 134.28 72.8104 134.444 72.4808L135.113 71.0112L133.993 69.885L132.477 70.5717C132.122 70.7228 131.739 70.6953 131.439 70.5031C130.483 69.885 129.417 69.4455 128.311 69.1983C127.969 69.1296 127.682 68.8687 127.546 68.5253ZM128.748 65.49L129.39 67.2205C130.346 67.4815 131.261 67.8661 132.122 68.3468L133.734 67.6051C134.143 67.3854 134.676 67.454 135.018 67.7974L137.203 69.9949C137.517 70.3108 137.613 70.7915 137.422 71.2172L136.657 72.9066C137.149 73.7718 137.517 74.6783 137.777 75.6535L139.416 76.2715C139.881 76.3951 140.222 76.8346 140.222 77.3291V80.4468C140.222 80.8863 139.949 81.312 139.512 81.4768L137.791 82.1224C137.531 83.0838 137.149 84.004 136.671 84.8692L137.408 86.4899C137.627 86.9019 137.558 87.4376 137.217 87.7809L135.031 89.9784C134.717 90.2943 134.239 90.3905 133.816 90.1982L132.135 89.4291C131.275 89.9098 130.36 90.2943 129.403 90.5553L128.789 92.1897C128.666 92.6566 128.242 93 127.737 93H124.65C124.212 93 123.789 92.7253 123.625 92.2858L122.983 90.5553C122.027 90.2943 121.112 89.9098 120.251 89.4291L118.639 90.1707C118.229 90.3905 117.697 90.3218 117.355 89.9784L115.169 87.7809C114.855 87.465 114.746 86.9843 114.951 86.5586L115.716 84.8692C115.224 84.004 114.855 83.0975 114.582 82.1224L112.957 81.5043C112.492 81.3807 112.151 80.9412 112.151 80.4468V79.9935H101.946C98.9002 79.9935 96.4004 77.4939 96.4004 74.4174V55.7661C96.4004 52.7033 98.9002 50.1899 101.946 50.1899H121.74C124.786 50.1899 127.286 52.7033 127.286 55.7661V64.7758H127.737C128.174 64.7758 128.584 65.0505 128.748 65.49ZM112.151 77.796V77.3428C112.151 76.9033 112.424 76.4775 112.861 76.3127L114.582 75.6672C114.842 74.7058 115.224 73.7856 115.702 72.9203L114.965 71.2997C114.746 70.8876 114.814 70.352 115.156 70.0086L117.341 67.8111C117.656 67.4952 118.134 67.3991 118.557 67.5914L120.237 68.3605C121.098 67.8798 122.013 67.4952 122.969 67.2343L123.584 65.5999C123.707 65.1329 124.131 64.7896 124.636 64.7896H125.087V55.7798C125.087 53.9256 123.57 52.4149 121.74 52.4149H117.888V64.3775H117.874C117.874 65.3252 116.727 65.8334 116.03 65.1741L111.823 61.1362L107.725 65.0642C106.946 65.8883 105.799 65.284 105.799 64.35V52.3874H101.946C100.102 52.3874 98.5997 53.9119 98.5997 55.7523V74.4036C98.5997 76.2578 100.116 77.7823 101.946 77.7823H112.151V77.796ZM107.984 52.3874V61.7817L111.099 58.7876C111.522 58.3893 112.178 58.3893 112.601 58.7876L115.716 61.7817V52.3874H107.984Z"
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
                                <h3>{t("Cross-Platform Integration")}</h3>
                                <p>{t("We integrate diverse enterprise applications into a connected digital ecosystem, ensuring consistent data flow and seamless process execution.")}</p>
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
                                        role="img" aria-label="ERP and digital transformation design and delivery icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <line
                                          opacity="0.3"
                                          x1="84.438"
                                          y1="60.6539"
                                          x2="0.999855"
                                          y2="60.6539"
                                          stroke="#082326"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M1.42139 2L34.7826 2C46.3806 2 55.7826 11.402 55.7826 23V39.5752C55.7826 51.1732 65.1846 60.5752 76.7826 60.5752H84.8595"
                                          stroke="#082326"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M1.42139 119.15L34.7826 119.15C46.3806 119.15 55.7826 109.748 55.7826 98.1505V81.5752C55.7826 69.9772 65.1846 60.5752 76.7826 60.5752H84.8595"
                                          stroke="#082326"
                                        />
                                        <line
                                          opacity="0.3"
                                          y1="-0.5"
                                          x2="83.4381"
                                          y2="-0.5"
                                          transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1539)"
                                          stroke="#082326"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M249.577 2L216.216 2C204.618 2 195.216 11.402 195.216 23V39.5752C195.216 51.1732 185.814 60.5752 174.216 60.5752H166.139"
                                          stroke="#082326"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M249.577 119.15L216.216 119.15C204.618 119.15 195.216 109.748 195.216 98.1505V81.5752C195.216 69.9772 185.814 60.5752 174.216 60.5752H166.139"
                                          stroke="#082326"
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
                                          d="M146.801 74.2C146.828 75.8001 149.174 75.7999 149.201 74.2C149.174 72.5999 146.827 72.6001 146.801 74.2Z"
                                          fill="#499A9A"
                                        />
                                        <path
                                          className="icns"
                                          d="M152.115 90.5999H140.363C138.883 90.5999 137.679 89.3898 137.679 87.9024V66.9053C137.679 65.4179 138.883 64.2078 140.363 64.2078H146.166V62.3122C146.166 60.9053 145.027 59.7605 143.627 59.7605H108.371C106.971 59.7605 105.832 60.9053 105.832 62.3122V64.2078H111.635C113.116 64.2078 114.32 65.4179 114.32 66.9053V87.9024C114.32 89.3898 113.116 90.5999 111.635 90.5999H99.8833C98.4033 90.5999 97.1992 89.3898 97.1992 87.9024V66.9053C97.1992 65.4179 98.4033 64.2078 99.8833 64.2078H104.381V62.3122C104.381 60.1011 106.171 58.3024 108.371 58.3024H125.274V53.8551H114.247C112.767 53.8551 111.563 52.645 111.563 51.1575V44.596C111.563 43.8202 111.89 43.12 112.414 42.6275C111.89 42.1349 111.563 41.4347 111.563 40.659V34.0974C111.563 32.61 112.767 31.3999 114.247 31.3999H137.751C139.231 31.3999 140.435 32.61 140.435 34.0974V40.659C140.435 41.4347 140.108 42.1349 139.585 42.6275C140.108 43.12 140.435 43.8202 140.435 44.596V51.1575C140.435 52.645 139.231 53.8551 137.751 53.8551H126.725V58.3024H143.627C145.827 58.3024 147.617 60.1011 147.617 62.3122V64.2078H152.115C153.595 64.2078 154.799 65.4179 154.799 66.9053V87.9024C154.799 89.3898 153.595 90.5999 152.115 90.5999ZM139.13 86.0068V87.9024C139.13 88.5858 139.683 89.1418 140.363 89.1418H152.115C152.795 89.1418 153.348 88.5858 153.348 87.9024V86.0068H139.13ZM98.6501 86.0068V87.9024C98.6501 88.5858 99.2033 89.1418 99.8833 89.1418H111.635C112.316 89.1418 112.869 88.5858 112.869 87.9024V86.0068H98.6501ZM139.13 84.5487H153.348V71.5713H139.13V84.5487ZM98.6501 84.5487H112.869V71.5713H98.6501V84.5487ZM139.13 70.1132H153.348V66.9053C153.348 66.2219 152.795 65.6659 152.115 65.6659H140.363C139.683 65.6659 139.13 66.2219 139.13 66.9053V70.1132ZM98.6501 70.1132H112.869V66.9053C112.869 66.2219 112.316 65.6659 111.635 65.6659H99.8833C99.2033 65.6659 98.6501 66.2219 98.6501 66.9053V70.1132ZM125.999 52.3969H137.751C138.431 52.3969 138.985 51.841 138.985 51.1575V44.596C138.985 43.9125 138.431 43.3566 137.751 43.3566H114.247C113.567 43.3566 113.014 43.9125 113.014 44.596V51.1575C113.014 51.841 113.567 52.3969 114.247 52.3969H125.999ZM114.247 41.8984H137.751C138.431 41.8984 138.985 41.3424 138.985 40.659V34.0974C138.985 33.414 138.431 32.858 137.751 32.858H114.247C113.567 32.858 113.014 33.414 113.014 34.0974V40.659C113.014 41.3424 113.567 41.8984 114.247 41.8984ZM118.164 51.2304C116.324 51.2304 114.827 49.7259 114.827 47.8767C114.827 46.0276 116.324 44.5231 118.164 44.5231C120.004 44.5231 121.501 46.0276 121.501 47.8767C121.501 49.7259 120.004 51.2304 118.164 51.2304ZM118.164 45.9812C117.124 45.9812 116.278 46.8316 116.278 47.8767C116.278 48.9219 117.124 49.7723 118.164 49.7723C119.204 49.7723 120.051 48.9219 120.051 47.8767C120.051 46.8316 119.204 45.9812 118.164 45.9812ZM136.446 48.6058H135.14C134.739 48.6058 134.414 48.2793 134.414 47.8767C134.414 47.4742 134.739 47.1477 135.14 47.1477H136.446C136.846 47.1477 137.171 47.4742 137.171 47.8767C137.171 48.2793 136.846 48.6058 136.446 48.6058ZM131.875 48.6058H130.569C130.169 48.6058 129.844 48.2793 129.844 47.8767C129.844 47.4742 130.169 47.1477 130.569 47.1477H131.875C132.276 47.1477 132.601 47.4742 132.601 47.8767C132.601 48.2793 132.276 48.6058 131.875 48.6058ZM127.305 48.6058H125.999C125.599 48.6058 125.274 48.2793 125.274 47.8767C125.274 47.4742 125.599 47.1477 125.999 47.1477H127.305C127.706 47.1477 128.03 47.4742 128.03 47.8767C128.03 48.2793 127.706 48.6058 127.305 48.6058ZM118.164 40.7319C116.324 40.7319 114.827 39.2274 114.827 37.3782C114.827 35.529 116.324 34.0245 118.164 34.0245C120.004 34.0245 121.501 35.529 121.501 37.3782C121.501 39.2274 120.004 40.7319 118.164 40.7319ZM118.164 35.4827C117.124 35.4827 116.278 36.333 116.278 37.3782C116.278 38.4234 117.124 39.2738 118.164 39.2738C119.204 39.2738 120.051 38.4234 120.051 37.3782C120.051 36.333 119.204 35.4827 118.164 35.4827ZM136.446 38.1073H135.14C134.739 38.1073 134.414 37.7808 134.414 37.3782C134.414 36.9756 134.739 36.6492 135.14 36.6492H136.446C136.846 36.6492 137.171 36.9756 137.171 37.3782C137.171 37.7808 136.846 38.1073 136.446 38.1073ZM131.875 38.1073H130.569C130.169 38.1073 129.844 37.7808 129.844 37.3782C129.844 36.9756 130.169 36.6492 130.569 36.6492H131.875C132.276 36.6492 132.601 36.9756 132.601 37.3782C132.601 37.7808 132.276 38.1073 131.875 38.1073ZM127.305 38.1073H125.999C125.599 38.1073 125.274 37.7808 125.274 37.3782C125.274 36.9756 125.599 36.6492 125.999 36.6492H127.305C127.706 36.6492 128.03 36.9756 128.03 37.3782C128.03 37.7808 127.706 38.1073 127.305 38.1073Z"
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
                                  <h3>{t("Strategic System Design & Delivery")}</h3>
                                  <p>
                                    {t("We design and deliver systems that are built for speed, reliability, and business impact, helping you move from strategy to measurable results.")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Testimonial Slide End */}
                      </div>
                      <div className="testimonial-btn rtyElement" style={{ display: 'flex', justifyContent: 'center' }}>
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
                          1 / 6
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
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      id="myVideo"
                      height={700}
                      width="100%"
                    >
                      <source src="/videos/way.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="col-sm-6">
                  {/* Section Title Start */}
                  <div className="section-title">
                    {/* <h3 class="wow fadeInUp">key benefits</h3> */}
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      {t("Our Edge in Driving Transformation")}
                    </h2>
                  </div>
                  <div className="row mt-5 index-benefit">
                    <div className="col-lg-6 col-md-6">
                      {/* Benefits Steps Item Start */}
                      <div className="benefits-steps-item wow fadeInUp">
                        <div className="icon-box">
                          {/*<img src="/images/r1.svg" alt="">*/}
                          <svg
                            width={80}
                            height={80}
                            viewBox="0 0 80 80"
                            fill="none"
                            role="img" aria-label="Analyse Integrate Transform methodology icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M34.3175 16.8092C34.3175 17.365 33.8643 17.8183 33.3025 17.8183H22.115C21.5548 17.8183 21.1009 17.365 21.1009 16.8092C21.1009 16.2448 21.555 15.7916 22.115 15.7916H33.3025C33.8643 15.7916 34.3175 16.2448 34.3175 16.8092ZM61.7345 6.53076H45.3903C42.9244 6.80788 41.0081 8.7474 41.0081 11.0972V26.0874C41.0081 26.968 42.0606 27.4373 42.7107 26.8314L46.203 23.6076C47.0342 22.8464 48.0219 22.4703 49.2249 22.4703H61.1263C63.879 22.4703 66.1167 20.4095 66.1167 17.8698V11.097C66.1167 8.74724 64.201 6.80772 61.7345 6.53076ZM34.6103 6.53076H18.266C15.7999 6.80788 13.8828 8.7474 13.8828 11.0972V17.8696C13.8828 20.4093 16.1223 22.4701 18.8742 22.4701H30.7766C31.9788 22.4701 32.9673 22.8463 33.7977 23.6074L37.29 26.8312C37.9406 27.4378 38.9926 26.9672 38.9926 26.0872V11.097C38.9924 8.74724 37.0769 6.80772 34.6103 6.53076ZM18.5595 12.1573C18.5595 11.6015 19.0127 11.1397 19.5737 11.1397H33.3025C33.8643 11.1397 34.3175 11.6015 34.3175 12.1573C34.3175 12.7218 33.8643 13.1749 33.3025 13.1749H19.5737C19.0127 13.1749 18.5595 12.7218 18.5595 12.1573ZM15.9129 11.097V17.8695C15.9129 19.289 17.2417 20.4434 18.8742 20.4434H30.7766C32.4894 20.4434 33.9687 21.0077 35.1735 22.1194L36.9633 23.7698V11.097C36.9633 9.67748 35.6353 8.52308 34.002 8.52308H18.8742C17.2417 8.52308 15.9129 9.67748 15.9129 11.097ZM47.2982 69.3903C47.3868 69.7629 47.2718 70.1063 47.0177 70.3652L44.2231 73.17C43.8294 73.5711 43.1783 73.5656 42.7875 73.1784C42.3899 72.785 42.3881 72.1437 42.7841 71.7418L43.251 71.2716C27.9508 73.2783 14.2103 61.3938 14.2103 45.7976C14.2103 38.9311 16.8843 32.4749 21.7379 27.6264C22.6913 26.6687 23.7251 25.7879 24.8119 24.9927C25.2652 24.6677 25.8996 24.7618 26.2297 25.2149C26.559 25.6682 26.4588 26.3095 26.0057 26.6344C19.863 31.0677 16.2403 38.2112 16.2403 45.7976C16.2403 52.117 18.703 58.06 23.1718 62.5322C28.3966 67.7484 35.7745 70.2026 43.0052 69.2535L42.2638 68.92C41.7524 68.6892 41.5249 68.0906 41.7567 67.5775C41.9868 67.073 42.587 66.8421 43.0985 67.073L46.855 68.7746H46.8559C46.8559 68.7831 46.8577 68.7831 46.8577 68.7831C47.0681 68.9106 47.2337 69.1336 47.2982 69.3903ZM58.0777 27.6264C68.1231 37.6612 68.1188 53.9194 58.0777 63.9602C56.3606 65.6789 54.4187 67.1412 52.3083 68.3042C51.8158 68.5752 51.1979 68.4004 50.9289 67.9108C50.6587 67.4148 50.8374 66.7991 51.3275 66.5255C58.8847 62.3389 63.5753 54.4978 63.5753 45.7975C63.5753 39.4696 61.1126 33.5266 56.6438 29.0543C56.5951 29.0116 56.5463 28.9602 56.4975 28.9175L56.6788 29.5845C56.8233 30.1319 56.5027 30.6876 55.9614 30.833C55.4219 30.9784 54.8643 30.6535 54.718 30.1148C54.5892 29.6381 53.6569 26.2748 53.65 26.0701C53.6355 25.8564 53.6937 25.6255 53.8279 25.4288H53.8287C53.8415 25.4117 53.8535 25.3946 53.8655 25.3775H53.8673C54.1028 25.0847 54.4236 24.96 54.7788 25.0013L58.7243 25.3775C59.2819 25.4288 59.6905 25.9248 59.6375 26.4892C59.5838 27.045 59.0886 27.4554 58.5302 27.3956L57.7759 27.3272C57.8777 27.4212 57.9777 27.5237 58.0777 27.6264ZM58.9004 16.8092C58.9004 17.365 58.4455 17.8183 57.8854 17.8183H46.6979C46.1369 17.8183 45.6836 17.365 45.6836 16.8092C45.6836 16.2448 46.1369 15.7916 46.6979 15.7916H57.8854C58.4454 15.7916 58.9004 16.2448 58.9004 16.8092ZM61.4419 12.1573C61.4419 12.7218 60.9886 13.1749 60.4268 13.1749H46.698C46.1371 13.1749 45.6838 12.7216 45.6838 12.1573C45.6838 11.6015 46.1371 11.1397 46.698 11.1397H60.4268C60.9886 11.1397 61.4419 11.6015 61.4419 12.1573ZM64.0867 17.8695C64.0867 19.289 62.7594 20.4434 61.1262 20.4434H49.2247C47.5119 20.4434 46.0326 21.0077 44.827 22.1194L43.038 23.7698V11.097C43.038 9.67748 44.366 8.52308 45.9983 8.52308H61.1262C62.7594 8.52308 64.0867 9.67748 64.0867 11.097V17.8695ZM49.1255 59.1887C51.2641 59.1887 52.3295 56.5807 50.787 55.084C50.1831 54.4981 50.5107 53.4613 51.3566 53.3482C55.1156 52.8437 57.9503 49.5943 57.9503 45.7975C57.9503 41.9922 55.1156 38.7512 51.3566 38.2383C50.5055 38.1236 50.1868 37.0848 50.787 36.5024C51.2582 36.0492 51.5164 35.4421 51.5164 34.7837C51.5164 32.6359 48.8937 31.6135 47.4289 33.0991C46.7615 33.776 45.6234 33.2408 45.6974 32.3124C45.8063 30.9434 44.7084 29.7384 43.3124 29.7384C41.9947 29.7384 40.9215 30.8159 40.9215 32.1328V38.2469C44.3129 38.7002 47.0031 41.3852 47.4563 44.78H50.5492C50.9161 43.258 52.0867 42.018 53.6422 41.5991C54.1835 41.4536 54.7411 41.7786 54.8855 42.3173C55.03 42.8647 54.7094 43.4204 54.1689 43.5658C53.1615 43.8309 52.4587 44.746 52.4587 45.7976C52.4587 46.8408 53.1615 47.7559 54.1689 48.0295C54.7094 48.1749 55.03 48.7308 54.8855 49.2695C54.7369 49.8239 54.1611 50.1325 53.6422 49.9877C52.0867 49.5687 50.9161 48.3288 50.5492 46.8066H47.4563C47.003 50.2013 44.3129 52.8864 40.9215 53.3397V59.4538C40.9215 60.7792 41.9947 61.848 43.3124 61.848C44.7108 61.848 45.8078 60.6476 45.6974 59.2741C45.6234 58.3543 46.7569 57.8058 47.4289 58.4874C47.8822 58.9407 48.4843 59.1887 49.1255 59.1887ZM39.9075 51.3815C42.9894 51.3815 45.4956 48.876 45.4956 45.7976C45.4956 42.7106 42.9892 40.2052 39.9075 40.2052C36.8257 40.2052 34.3201 42.7106 34.3201 45.7976C34.3201 48.876 36.8255 51.3815 39.9075 51.3815ZM38.8924 59.4538V53.3397C35.5028 52.8864 32.8126 50.2015 32.3593 46.8066H29.2663C28.9012 48.3287 27.7297 49.5687 26.1734 49.9877C26.0852 50.0133 25.9964 50.022 25.9092 50.022C24.7414 50.022 24.5031 48.3384 25.6467 48.0295C26.6532 47.7559 27.3569 46.8408 27.3569 45.7976C27.3569 44.7458 26.6532 43.8309 25.6467 43.5658C25.1054 43.4204 24.7847 42.8647 24.93 42.3173C25.0745 41.7786 25.6321 41.4536 26.1734 41.5991C27.7297 42.0181 28.9012 43.258 29.2663 44.78H32.3593C32.8126 41.3852 35.5027 38.7002 38.8924 38.2469V32.1328C38.8924 30.8159 37.8209 29.7384 36.5023 29.7384C35.1084 29.7384 34.0078 30.9421 34.1183 32.3124C34.1924 33.23 33.0599 33.7818 32.3867 33.0991C31.9334 32.6458 31.3315 32.3978 30.6902 32.3978C28.5479 32.3978 27.4891 35.0103 29.0279 36.5024C29.6284 37.0847 29.3113 38.1234 28.4583 38.2383C24.7001 38.7514 21.8646 41.9922 21.8646 45.7975C21.8646 49.5941 24.7001 52.8436 28.4583 53.3482C29.3068 53.4616 29.6316 54.4988 29.0279 55.084C28.5575 55.5373 28.2995 56.1444 28.2995 56.8028C28.2995 58.9506 30.9222 59.9728 32.3868 58.4874C33.0601 57.8047 34.1924 58.3565 34.1185 59.2741C34.0075 60.6509 35.1071 61.848 36.5025 61.848C37.8209 61.848 38.8924 60.7792 38.8924 59.4538ZM53.5465 56.8029C53.5465 59.9264 50.3836 62.0632 47.4889 60.9074C46.358 64.1474 42.1115 64.9231 39.9075 62.2756C37.706 64.9228 33.4563 64.1477 32.3268 60.9074C31.8129 61.1127 31.2596 61.2237 30.6902 61.2237C27.4788 61.2237 25.3713 57.912 26.6412 55.0156C22.67 53.7927 19.8353 50.0645 19.8353 45.7975C19.8353 41.5218 22.67 37.7936 26.6412 36.5708C26.3975 36.0149 26.2692 35.4079 26.2692 34.7836C26.2692 31.6594 29.4327 29.5232 32.3268 30.6789C33.4561 27.4384 37.706 26.6636 39.9075 29.3108C42.1115 26.6631 46.3582 27.4389 47.4889 30.6789C48.0028 30.4736 48.5561 30.3626 49.1255 30.3626C52.3411 30.3626 54.4451 33.6816 53.1737 36.5708C57.1457 37.7936 59.9804 41.5218 59.9804 45.7975C59.9804 50.0645 57.1457 53.7928 53.1737 55.0156C53.4182 55.5716 53.5465 56.1788 53.5465 56.8029Z"
                              fill="#499A9A"
                            />
                          </svg>
                        </div>
                        <div className="benefits-steps-content">
                          <h3>{t("Proven Methodology (AIT) - Analyse. Integrate. Transform.")}</h3>
                          <p>{t("Achieve measurable transformation across your business.")}</p>
                        </div>
                      </div>
                      {/* Benefits Steps Item End */}</div>
                    <div className="col-lg-6 col-md-6">
                      {/* Benefits Steps Item Start */}
                      <div
                        className="benefits-steps-item wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div className="icon-box">
                          {/*<img src="/images/r2.svg" alt="">*/}
                          <svg
                            width={80}
                            height={80}
                            viewBox="0 0 80 80"
                            fill="none"
                            role="img" aria-label="ERP in manufacturing icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M72 15.8306C72.0003 13.0576 70.9317 10.3902 69.0145 8.37801C67.0973 6.36582 64.4776 5.16222 61.6951 5.01524C58.9127 4.86826 56.1796 5.7891 54.0592 7.58801C51.9387 9.38691 50.5924 11.9268 50.2978 14.6842C44.5349 12.1481 38.1178 11.4747 31.9502 12.7588C25.7825 14.043 20.1749 17.22 15.9169 21.8426C11.6589 26.4652 8.96495 32.3004 8.21443 38.5268C7.46391 44.7531 8.69458 51.0569 11.7332 56.5506C11.3246 56.7212 10.9756 57.008 10.7301 57.3751C10.4846 57.7422 10.3533 58.1733 10.3529 58.6143V61.129C10.3535 61.7222 10.5906 62.291 11.0121 62.7105C11.4336 63.13 12.0052 63.3659 12.6013 63.3666H13.2176C13.4867 64.3123 13.8658 65.2236 14.3471 66.0819L13.9106 66.5163C13.4898 66.9364 13.2536 67.5054 13.2536 68.0985C13.2536 68.6916 13.4898 69.2606 13.9106 69.6807L15.6972 71.4587C16.1194 71.8774 16.6911 72.1125 17.2871 72.1125C17.8831 72.1125 18.4548 71.8774 18.877 71.4587L19.3135 71.0241C20.1759 71.5035 21.0915 71.8811 22.0419 72.1492V72.7624C22.0425 73.3556 22.2796 73.9243 22.7011 74.3438C23.1226 74.7633 23.694 74.9993 24.2901 75H26.8169C27.413 74.9993 27.9846 74.7634 28.4061 74.3439C28.8276 73.9244 29.0647 73.3556 29.0653 72.7624V72.1492C30.0156 71.8811 30.9313 71.5035 31.7937 71.0243L32.2301 71.4587C32.5641 71.7901 32.9942 72.0086 33.4598 72.0836C33.9253 72.1586 34.4027 72.0861 34.8247 71.8765C35.9154 71.9945 37.0117 72.054 38.1089 72.0548C43.2051 72.0536 48.2177 70.7653 52.6774 68.3107C57.137 65.856 60.8978 62.3152 63.6077 58.0198C66.3175 53.7244 67.8878 48.8149 68.1715 43.7509C68.4552 38.687 67.443 33.6342 65.2297 29.0656C68.389 24.7669 72 19.4913 72 15.8306ZM38.1086 70.1912C37.6714 70.1905 37.2352 70.1496 36.8055 70.069L37.1962 69.6801C37.6172 69.2602 37.8537 68.6912 37.8537 68.0979C37.8537 67.5047 37.6172 66.9357 37.1962 66.5157L36.7596 66.0812C37.2412 65.2231 37.6205 64.3121 37.89 63.3666H38.507C39.103 63.3659 39.6745 63.1299 40.096 62.7104C40.5175 62.2909 40.7546 61.7222 40.7552 61.129V58.6143C40.7545 58.021 40.5174 57.4523 40.0959 57.0329C39.6745 56.6134 39.103 56.3775 38.507 56.3768H37.89C37.804 56.0755 37.7059 55.7782 37.5982 55.4854C37.7684 55.4838 37.939 55.481 38.1086 55.481C42.1682 55.4655 46.2158 55.9237 50.1682 56.8462C49.5944 58.6869 48.8621 60.4748 47.9794 62.1901C45.2893 67.3497 41.7839 70.1912 38.1086 70.1912ZM38.1086 53.618C37.6685 53.618 37.2273 53.6248 36.7869 53.6348L37.1962 53.2276C37.6172 52.8076 37.8536 52.2386 37.8536 51.6454C37.8536 51.0521 37.6172 50.4831 37.1962 50.0631L35.4095 48.2851C34.9874 47.8663 34.4157 47.6312 33.8197 47.6312C33.2237 47.6312 32.6519 47.8663 32.2298 48.2851L31.7933 48.7195C30.9308 48.2403 30.0152 47.8628 29.0649 47.5946V46.9805C29.0642 46.3873 28.8271 45.8186 28.4056 45.3991C27.9841 44.9797 27.4126 44.7437 26.8165 44.7431H24.2903C24.1858 44.7439 24.0815 44.7519 23.9781 44.7671C23.9497 44.1778 23.9301 43.5864 23.9194 42.993L52.2968 43.0488C52.2475 47.1018 51.7076 51.1342 50.6888 55.0587C46.5671 54.0866 42.3444 53.603 38.1086 53.618ZM13.9113 53.2276L14.3479 53.6621C13.9767 54.3243 13.6662 55.0184 13.4201 55.736C11.2341 51.8212 10.0223 47.4421 9.88611 42.9654L22.0479 42.9894C22.0647 44.0638 22.1121 45.1368 22.1887 46.1937C22.0924 46.445 22.0426 46.7116 22.042 46.9805V47.5946C21.0918 47.8625 20.1761 48.2397 19.3136 48.7186L18.8771 48.2842C18.455 47.8655 17.8833 47.6304 17.2873 47.6304C16.6913 47.6304 16.1197 47.8655 15.6975 48.2842L13.9107 50.0623C13.4895 50.4823 13.253 51.0516 13.2531 51.6451C13.2533 52.2385 13.49 52.8077 13.9113 53.2276ZM38.1086 13.9873C41.7839 13.9873 45.2893 16.8289 47.9788 21.9884C48.8614 23.7031 49.5937 25.4904 50.1676 27.3303C46.216 28.2569 42.1683 28.7158 38.1086 28.6975C34.0488 28.7129 30.0013 28.2547 26.0487 27.3324C26.6228 25.4917 27.3554 23.7037 28.2383 21.9884C30.9277 16.8292 34.433 13.9876 38.1086 13.9876V13.9873ZM38.1086 30.5606C42.3447 30.5791 46.5679 30.0957 50.6893 29.1207C51.7124 33.063 52.2526 37.114 52.298 41.1855L23.9202 41.1295C23.9695 37.0766 24.5094 33.0443 25.528 29.1199C29.6498 30.0922 33.8726 30.5759 38.1086 30.5609V30.5606ZM22.0479 41.1262L9.89065 41.1024C10.0875 35.3511 12.0634 29.8004 15.5485 25.2085C17.8994 26.6141 20.6667 27.7716 23.7189 28.6453C22.6596 32.7236 22.0985 36.9142 22.0479 41.1262ZM54.1695 43.0517L66.3268 43.0756C66.13 48.8269 64.1541 54.3776 60.6691 58.9696C58.3181 57.5639 55.5509 56.4065 52.4986 55.5328C53.5581 51.4545 54.1191 47.2638 54.1695 43.0517ZM54.1709 41.1887C54.1247 36.9553 53.5632 32.7431 52.4986 28.6442C53.6646 28.309 54.7914 27.9309 55.8792 27.5099C56.6704 28.6173 57.4634 29.684 58.1968 30.671C59.0463 31.8141 59.7799 32.801 60.3462 33.6266C60.4321 33.7518 60.5474 33.8543 60.6822 33.9251C60.8169 33.996 60.9669 34.033 61.1193 34.033C61.2717 34.033 61.4218 33.996 61.5565 33.9251C61.6912 33.8543 61.8065 33.7518 61.8924 33.6266C62.4412 32.8266 63.1484 31.8733 63.9647 30.7748C65.4273 34.0681 66.2318 37.6133 66.3331 41.2126L54.1709 41.1887ZM61.1181 6.86404C63.5068 6.86671 65.7969 7.81226 67.486 9.49324C69.1751 11.1742 70.1252 13.4534 70.1278 15.8306C70.1278 19.3488 65.559 25.4957 62.5356 29.5637C62.0177 30.2605 61.5424 30.9001 61.1181 31.4853C60.6939 30.9002 60.2186 30.2605 59.7008 29.5639C56.6773 25.4959 52.1083 19.3481 52.1083 15.8306C52.111 13.4534 53.0611 11.1743 54.7502 9.49328C56.4393 7.81231 58.7294 6.86675 61.1181 6.86404ZM50.306 16.7401C50.6852 19.4215 52.6135 22.7663 54.7776 25.936C53.8735 26.2721 52.9406 26.5784 51.9789 26.8549C51.3686 24.8826 50.5861 22.9673 49.6405 21.1307C48.2314 18.4275 46.5907 16.2903 44.7948 14.7771C46.6959 15.2375 48.5431 15.8955 50.306 16.7401ZM31.4082 14.7893C29.6179 16.3019 27.9819 18.4348 26.5765 21.131C25.6303 22.9686 24.8475 24.8851 24.237 26.8585C21.4406 26.0582 18.9028 25.0105 16.7356 23.7444C20.5726 19.3144 25.7011 16.1844 31.4082 14.7893ZM33.5537 70.1411L32.6015 69.1937C32.4508 69.0436 32.2531 68.9493 32.0413 68.9263C31.8294 68.9033 31.6159 68.953 31.4362 69.0671C30.3611 69.7508 29.1734 70.2405 27.9275 70.5139C27.7195 70.5599 27.5334 70.675 27.4001 70.8404C27.2667 71.0058 27.1941 71.2115 27.1941 71.4236V72.7629C27.1928 72.8619 27.1527 72.9564 27.0824 73.0264C27.0122 73.0963 26.9172 73.1362 26.8178 73.1375H24.2903C24.1909 73.1362 24.0959 73.0963 24.0256 73.0264C23.9554 72.9564 23.9153 72.8619 23.914 72.7629V71.4236C23.9141 71.2115 23.8414 71.0058 23.708 70.8404C23.5747 70.675 23.3886 70.5598 23.1806 70.5139C21.9347 70.2406 20.747 69.7507 19.672 69.0669C19.4923 68.9529 19.2788 68.9033 19.067 68.9263C18.8551 68.9494 18.6574 69.0437 18.5067 69.1937L17.5547 70.1411C17.4837 70.2104 17.3881 70.2493 17.2886 70.2493C17.1891 70.2493 17.0936 70.2104 17.0225 70.1411L15.2358 68.363C15.1662 68.2923 15.1272 68.1972 15.1272 68.0982C15.1272 67.9992 15.1662 67.9041 15.2358 67.8334L16.1879 66.886C16.3386 66.7359 16.4334 66.5392 16.4565 66.3283C16.4796 66.1174 16.4297 65.905 16.3151 65.7261C15.6278 64.6562 15.1354 63.474 14.8605 62.2339C14.8144 62.0269 14.6987 61.8417 14.5325 61.709C14.3663 61.5763 14.1596 61.5039 13.9465 61.504H12.6007C12.5013 61.5027 12.4063 61.4628 12.336 61.3929C12.2657 61.323 12.2256 61.2285 12.2243 61.1295V58.6143C12.2256 58.5153 12.2657 58.4208 12.336 58.3509C12.4063 58.2809 12.5013 58.2411 12.6007 58.2398H13.9465C14.1596 58.2398 14.3663 58.1675 14.5325 58.0348C14.6987 57.9021 14.8144 57.7169 14.8605 57.5099C15.1353 56.27 15.6275 55.0879 16.3145 54.018C16.4291 53.8391 16.479 53.6267 16.4558 53.4158C16.4327 53.205 16.3379 53.0083 16.1872 52.8583L15.2352 51.9107C15.1658 51.8398 15.127 51.7448 15.127 51.6459C15.127 51.547 15.1658 51.4519 15.2352 51.3811L17.022 49.6028C17.093 49.5336 17.1885 49.4949 17.288 49.4949C17.3874 49.4949 17.4829 49.5336 17.554 49.6028L18.506 50.5503C18.6567 50.7003 18.8544 50.7946 19.0663 50.8176C19.2782 50.8406 19.4917 50.791 19.6714 50.6768C20.7465 49.9933 21.9342 49.5035 23.18 49.23C23.388 49.1841 23.5741 49.069 23.7074 48.9036C23.8408 48.7382 23.9135 48.5324 23.9134 48.3204V46.981C23.9148 46.8821 23.9548 46.7876 24.0251 46.7177C24.0954 46.6477 24.1903 46.6079 24.2897 46.6065H26.8165C26.9159 46.6079 27.0108 46.6477 27.0811 46.7177C27.1514 46.7876 27.1914 46.8821 27.1927 46.981V48.3204C27.1927 48.5324 27.2654 48.7382 27.3987 48.9036C27.5321 49.069 27.7181 49.1841 27.9262 49.23C29.1721 49.5036 30.3598 49.9934 31.4349 50.677C31.6146 50.7911 31.8281 50.8407 32.04 50.8177C32.2519 50.7946 32.4495 50.7003 32.6002 50.5503L33.5522 49.6028C33.6233 49.5336 33.7188 49.4948 33.8183 49.4948C33.9178 49.4948 34.0133 49.5336 34.0844 49.6028L35.871 51.3809C35.9404 51.4518 35.9792 51.5468 35.9792 51.6457C35.9792 51.7447 35.9404 51.8397 35.871 51.9106L34.919 52.8581C34.7683 53.0081 34.6736 53.2048 34.6504 53.4157C34.6273 53.6266 34.6772 53.839 34.7918 54.0178C35.4788 55.0878 35.971 56.2698 36.2458 57.5097C36.2919 57.7167 36.4076 57.9019 36.5738 58.0346C36.7399 58.1673 36.9466 58.2397 37.1596 58.2397H38.5056C38.605 58.241 38.6999 58.2809 38.7702 58.3508C38.8405 58.4207 38.8806 58.5152 38.8819 58.6141V61.1288C38.8806 61.2277 38.8405 61.3222 38.7702 61.3921C38.6999 61.4621 38.605 61.5019 38.5056 61.5033H37.1596C36.9466 61.5033 36.7399 61.5756 36.5738 61.7083C36.4076 61.841 36.2919 62.0262 36.2458 62.2332C35.971 63.4731 35.4788 64.6551 34.7918 65.7249C34.6772 65.9038 34.6273 66.1163 34.6505 66.3272C34.6736 66.5381 34.7684 66.7348 34.9192 66.8848L35.8712 67.8321C35.9405 67.903 35.9794 67.998 35.9794 68.097C35.9794 68.1959 35.9405 68.291 35.8712 68.3618L34.0845 70.1399C34.0135 70.2087 33.9183 70.2472 33.8193 70.2474C33.7202 70.2475 33.6249 70.2093 33.5537 70.1408V70.1411ZM44.8088 69.39C46.5983 67.8775 48.2351 65.7447 49.6405 63.0483C50.5867 61.2108 51.3695 59.2943 51.9801 57.321C54.7765 58.1213 57.3142 59.1688 59.4813 60.4351C55.6444 64.8649 50.5158 67.9948 44.8088 69.3897V69.39ZM65.1248 13.2037C65.1249 12.4151 64.8899 11.6442 64.4498 10.9884C64.0096 10.3327 63.3839 9.82159 62.6518 9.51975C61.9198 9.21791 61.1142 9.13889 60.337 9.29268C59.5598 9.44648 58.8459 9.82617 58.2856 10.3838C57.7252 10.9413 57.3436 11.6518 57.189 12.4252C57.0343 13.1986 57.1136 14.0004 57.4168 14.729C57.72 15.4575 58.2334 16.0803 58.8923 16.5185C59.5511 16.9567 60.3257 17.1906 61.1181 17.1906C62.1803 17.1895 63.1987 16.769 63.9498 16.0215C64.7009 15.274 65.1233 14.2605 65.1245 13.2034L65.1248 13.2037ZM58.9841 13.2037C58.9841 12.7836 59.1093 12.3729 59.3438 12.0236C59.5784 11.6744 59.9117 11.4021 60.3017 11.2414C60.6917 11.0807 61.1208 11.0386 61.5348 11.1206C61.9488 11.2026 62.3291 11.4049 62.6276 11.7019C62.9261 11.999 63.1293 12.3775 63.2117 12.7895C63.294 13.2015 63.2517 13.6286 63.0902 14.0167C62.9286 14.4048 62.6551 14.7365 62.3041 14.9699C61.9531 15.2033 61.5405 15.3279 61.1184 15.3279C60.5524 15.3273 60.0098 15.1033 59.6096 14.705C59.2094 14.3067 58.9843 13.7666 58.9838 13.2034L58.9841 13.2037ZM25.5543 51.793C23.9487 51.793 22.3792 52.2668 21.0443 53.1546C19.7093 54.0423 18.6689 55.304 18.0544 56.7802C17.44 58.2564 17.2792 59.8808 17.5925 61.448C17.9057 63.0151 18.6788 64.4546 19.8141 65.5845C20.9494 66.7143 22.3958 67.4838 23.9705 67.7955C25.5452 68.1073 27.1774 67.9473 28.6607 67.3358C30.144 66.7244 31.4119 65.6889 32.3039 64.3604C33.1959 63.0318 33.672 61.4699 33.672 59.872C33.6699 57.7299 32.8138 55.6762 31.2918 54.1615C29.7698 52.6468 27.7061 51.7949 25.5537 51.7927L25.5543 51.793ZM28.5685 54.4302C27.5369 54.6114 26.5237 54.8213 25.5355 55.0606C25.4137 54.6028 25.2962 54.1399 25.187 53.6679C25.3086 53.6607 25.4309 53.6562 25.5537 53.6562C26.6082 53.655 27.6456 53.9213 28.5679 54.4299L28.5685 54.4302ZM23.3554 54.055C23.4715 54.5577 23.5966 55.0509 23.7267 55.5388C22.4897 55.893 21.2983 56.2917 20.1665 56.7337C20.8914 55.5051 22.0163 54.5599 23.3548 54.0548L23.3554 54.055ZM19.3081 59.8717C19.3086 59.6116 19.3256 59.3517 19.3588 59.0937C20.9429 58.3902 22.5755 57.8004 24.2442 57.3289C25.234 60.4846 26.5256 63.2721 28.0657 65.5612C27.1153 65.9775 26.0755 66.1513 25.0406 66.0669C24.0057 65.9824 23.0083 65.6424 22.1387 65.0775C21.2692 64.5126 20.5549 63.7408 20.0607 62.8319C19.5666 61.923 19.308 60.9058 19.3085 59.8723L19.3081 59.8717ZM29.6456 64.5616C28.2058 62.4319 26.9925 59.8209 26.055 56.8511C27.4712 56.5109 28.9417 56.2322 30.4479 56.0169C31.4473 57.2692 31.9219 58.8574 31.7724 60.4497C31.6229 62.042 30.8609 63.5153 29.6456 64.5616Z"
                              fill="#499A9A"
                            />
                          </svg>
                        </div>
                        <div className="benefits-steps-content">
                          <h3>{t("Industry Expertise Across Verticals")}</h3>
                          <p>{t("Deep experience in manufacturing, retail, automotive and private equity.")}</p>
                        </div>
                      </div>
                      {/* Benefits Steps Item End */}
                    </div>
                    </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 ">
                      {/* Benefits Steps Item Start */}
                      <div
                        className="benefits-steps-item wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <div className="icon-box">
                          {/*<img src="/images/r3.svg" alt="">*/}
                          <svg
                            width={80}
                            height={80}
                            viewBox="0 0 80 80"
                            fill="none"
                            role="img" aria-label="Global ERP delivery icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M76.25 33.75H73.17C72.3056 29.1703 70.5028 24.8191 67.875 20.97L70.0575 18.7863C70.2918 18.5518 70.4235 18.234 70.4235 17.9025C70.4235 17.571 70.2918 17.2532 70.0575 17.0187L62.9812 9.9475C62.7468 9.71316 62.429 9.58152 62.0975 9.58152C61.766 9.58152 61.4482 9.71316 61.2138 9.9475L59.03 12.125C55.1809 9.49722 50.8297 7.69442 46.25 6.83V3.75C46.25 3.41848 46.1183 3.10054 45.8839 2.86612C45.6495 2.6317 45.3315 2.5 45 2.5H35C34.6685 2.5 34.3505 2.6317 34.1161 2.86612C33.8817 3.10054 33.75 3.41848 33.75 3.75V6.83C29.1703 7.69442 24.8191 9.49722 20.97 12.125L18.7863 9.9475C18.5518 9.71316 18.234 9.58152 17.9025 9.58152C17.571 9.58152 17.2532 9.71316 17.0187 9.9475L9.9475 17.0187C9.71316 17.2532 9.58152 17.571 9.58152 17.9025C9.58152 18.234 9.71316 18.5518 9.9475 18.7863L12.125 20.97C9.49722 24.8191 7.69442 29.1703 6.83 33.75H3.75C3.41848 33.75 3.10054 33.8817 2.86612 34.1161C2.6317 34.3505 2.5 34.6685 2.5 35V45C2.5 45.3315 2.6317 45.6495 2.86612 45.8839C3.10054 46.1183 3.41848 46.25 3.75 46.25H6.83C7.69442 50.8297 9.49722 55.1809 12.125 59.03L9.9475 61.2138C9.71316 61.4482 9.58152 61.766 9.58152 62.0975C9.58152 62.429 9.71316 62.7468 9.9475 62.9812L17.0187 70.0525C17.2532 70.2868 17.571 70.4185 17.9025 70.4185C18.234 70.4185 18.5518 70.2868 18.7863 70.0525L20.97 67.875C24.8191 70.5028 29.1703 72.3056 33.75 73.17V76.25C33.75 76.5815 33.8817 76.8995 34.1161 77.1339C34.3505 77.3683 34.6685 77.5 35 77.5H45C45.3315 77.5 45.6495 77.3683 45.8839 77.1339C46.1183 76.8995 46.25 76.5815 46.25 76.25V73.17C50.8297 72.3056 55.1809 70.5028 59.03 67.875L61.2138 70.0575C61.4482 70.2918 61.766 70.4235 62.0975 70.4235C62.429 70.4235 62.7468 70.2918 62.9812 70.0575L70.0525 62.9863C70.2868 62.7518 70.4185 62.434 70.4185 62.1025C70.4185 61.771 70.2868 61.4532 70.0525 61.2188L67.875 59.03C70.5028 55.1809 72.3056 50.8297 73.17 46.25H76.25C76.5815 46.25 76.8995 46.1183 77.1339 45.8839C77.3683 45.6495 77.5 45.3315 77.5 45V35C77.5 34.6685 77.3683 34.3505 77.1339 34.1161C76.8995 33.8817 76.5815 33.75 76.25 33.75ZM75 43.75H72.1162C71.8177 43.7501 71.5291 43.8571 71.3026 44.0515C71.0761 44.2459 70.9266 44.515 70.8813 44.81C70.1125 49.7373 68.1756 54.4091 65.2325 58.435C65.0555 58.676 64.9708 58.9725 64.9937 59.2707C65.0167 59.5688 65.1457 59.8489 65.3575 60.06L67.4025 62.105L62.0988 67.4087L60.0537 65.3638C59.8426 65.152 59.5626 65.0229 59.2644 65C58.9663 64.9771 58.6698 65.0618 58.4287 65.2388C54.4029 68.1818 49.7311 70.1187 44.8037 70.8875C44.5087 70.9329 44.2396 71.0823 44.0452 71.3089C43.8508 71.5354 43.7439 71.824 43.7437 72.1225V75H36.25V72.1162C36.2499 71.8177 36.1429 71.5291 35.9485 71.3026C35.7541 71.0761 35.485 70.9266 35.19 70.8813C30.2627 70.1125 25.5909 68.1756 21.565 65.2325C21.324 65.0555 21.0275 64.9708 20.7293 64.9937C20.4312 65.0167 20.1511 65.1457 19.94 65.3575L17.895 67.4025L12.5912 62.0988L14.6362 60.0537C14.848 59.8426 14.9771 59.5626 15 59.2644C15.0229 58.9663 14.9382 58.6698 14.7612 58.4287C11.8235 54.4035 9.89102 49.734 9.125 44.81C9.07947 44.5139 8.9291 44.244 8.70128 44.0494C8.47345 43.8549 8.18334 43.7486 7.88375 43.75H5V36.25H7.88375C8.18226 36.2499 8.47088 36.1429 8.6974 35.9485C8.92391 35.7541 9.07338 35.485 9.11875 35.19C9.88754 30.2627 11.8244 25.5909 14.7675 21.565C14.9445 21.324 15.0292 21.0275 15.0063 20.7293C14.9833 20.4312 14.8543 20.1511 14.6425 19.94L12.5975 17.895L17.9012 12.5912L19.9462 14.6362C20.1574 14.848 20.4374 14.9771 20.7356 15C21.0337 15.0229 21.3302 14.9382 21.5713 14.7612C25.5965 11.8235 30.266 9.89102 35.19 9.125C35.4861 9.07947 35.756 8.9291 35.9506 8.70128C36.1451 8.47345 36.2514 8.18334 36.25 7.88375V5H43.75V7.88375C43.7501 8.18226 43.8571 8.47088 44.0515 8.6974C44.2459 8.92391 44.515 9.07338 44.81 9.11875C49.7373 9.88754 54.4091 11.8244 58.435 14.7675C58.676 14.9445 58.9725 15.0292 59.2707 15.0063C59.5688 14.9833 59.8489 14.8543 60.06 14.6425L62.105 12.5975L67.4087 17.9012L65.3638 19.9462C65.152 20.1574 65.0229 20.4374 65 20.7356C64.9771 21.0337 65.0618 21.3302 65.2388 21.5713C68.1818 25.5971 70.1187 30.2689 70.8875 35.1963C70.9329 35.4913 71.0823 35.7604 71.3089 35.9548C71.5354 36.1492 71.824 36.2561 72.1225 36.2562H75V43.75Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M52.6891 33.3139L45.0004 32.1351V32.0226L46.8091 31.1189C47.0169 31.0151 47.1917 30.8554 47.3138 30.6578C47.4359 30.4602 47.5005 30.2324 47.5004 30.0001V27.5001C47.4996 26.1583 47.1389 24.8413 46.4557 23.6863C45.7726 22.5314 44.7922 21.5809 43.6166 20.9339C44.2928 20.2258 44.7461 19.3347 44.9205 18.3713C45.0948 17.4079 44.9825 16.4145 44.5974 15.5143C44.2123 14.6142 43.5714 13.8469 42.7542 13.3076C41.937 12.7684 40.9795 12.481 40.0004 12.481C39.0213 12.481 38.0638 12.7684 37.2466 13.3076C36.4294 13.8469 35.7885 14.6142 35.4034 15.5143C35.0183 16.4145 34.906 17.4079 35.0803 18.3713C35.2546 19.3347 35.708 20.2258 36.3841 20.9339C35.2086 21.5809 34.2281 22.5314 33.545 23.6863C32.8619 24.8413 32.5012 26.1583 32.5004 27.5001V30.0001C32.5003 30.2324 32.5649 30.4602 32.687 30.6578C32.8091 30.8554 32.9838 31.0151 33.1916 31.1189L35.0004 32.0226V32.1351L27.3116 33.3139C27.0844 33.3485 26.8711 33.4451 26.6953 33.5931C26.5194 33.7411 26.3877 33.9347 26.3147 34.1526C26.2417 34.3706 26.2302 34.6045 26.2815 34.8285C26.3328 35.0526 26.4449 35.2581 26.6054 35.4226L32.4154 41.3726L31.0404 49.7989C31.0025 50.0306 31.0306 50.2684 31.1215 50.4849C31.2124 50.7014 31.3625 50.8879 31.5545 51.023C31.7466 51.1582 31.9728 51.2365 32.2073 51.2491C32.4418 51.2616 32.675 51.2078 32.8804 51.0939L40.0004 47.1539L47.1254 51.0939C47.3307 51.2078 47.564 51.2616 47.7985 51.2491C48.033 51.2365 48.2592 51.1582 48.4512 51.023C48.6433 50.8879 48.7934 50.7014 48.8843 50.4849C48.9752 50.2684 49.0033 50.0306 48.9654 49.7989L47.5904 41.3726L53.4004 35.4226C53.5609 35.2581 53.673 35.0526 53.7243 34.8285C53.7755 34.6045 53.7641 34.3706 53.6911 34.1526C53.6181 33.9347 53.4864 33.7411 53.3105 33.5931C53.1346 33.4451 52.9214 33.3485 52.6941 33.3139H52.6891ZM40.0004 15.0001C40.4948 15.0001 40.9782 15.1468 41.3893 15.4215C41.8004 15.6962 42.1209 16.0866 42.3101 16.5434C42.4993 17.0002 42.5488 17.5029 42.4524 17.9879C42.3559 18.4728 42.1178 18.9183 41.7682 19.2679C41.4185 19.6175 40.9731 19.8556 40.4881 19.9521C40.0032 20.0486 39.5005 19.9991 39.0437 19.8098C38.5869 19.6206 38.1964 19.3002 37.9217 18.8891C37.647 18.4779 37.5004 17.9946 37.5004 17.5001C37.5004 16.8371 37.7638 16.2012 38.2326 15.7324C38.7015 15.2635 39.3373 15.0001 40.0004 15.0001ZM35.0004 27.5001C35.0004 26.1741 35.5272 24.9023 36.4649 23.9646C37.4025 23.0269 38.6743 22.5001 40.0004 22.5001C41.3265 22.5001 42.5982 23.0269 43.5359 23.9646C44.4736 24.9023 45.0004 26.1741 45.0004 27.5001V29.2276L43.1916 30.1314C42.9838 30.2352 42.8091 30.3949 42.687 30.5925C42.5649 30.7901 42.5003 31.0178 42.5004 31.2501V35.0001H37.5004V31.2501C37.5005 31.0178 37.4359 30.7901 37.3138 30.5925C37.1917 30.3949 37.0169 30.2352 36.8091 30.1314L35.0004 29.2276V27.5001ZM45.3554 40.0776C45.2189 40.2176 45.1171 40.3877 45.0583 40.5742C44.9994 40.7607 44.9852 40.9584 45.0166 41.1514L46.0766 47.6601L40.6054 44.6314C40.4202 44.529 40.212 44.4752 40.0004 44.4752C39.7888 44.4752 39.5806 44.529 39.3954 44.6314L33.9241 47.6601L34.9841 41.1514C35.0156 40.9584 35.0013 40.7607 34.9425 40.5742C34.8837 40.3877 34.7819 40.2176 34.6454 40.0776L30.0941 35.4164L35.0004 34.6664V36.2501C35.0004 36.5817 35.1321 36.8996 35.3665 37.134C35.6009 37.3684 35.9189 37.5001 36.2504 37.5001H43.7504C44.0819 37.5001 44.3999 37.3684 44.6343 37.134C44.8687 36.8996 45.0004 36.5817 45.0004 36.2501V34.6639L49.9066 35.4139L45.3554 40.0776Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M41.2509 59.4825V52.5H38.7509V59.4825L35.8847 56.6162L34.1172 58.3838L39.1172 63.3838C39.3516 63.6181 39.6695 63.7497 40.0009 63.7497C40.3324 63.7497 40.6503 63.6181 40.8847 63.3838L45.8847 58.3838L44.1172 56.6162L41.2509 59.4825Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M60.8838 34.1162L59.1162 35.8837L61.9825 38.75H55V41.25H61.9825L59.1162 44.1162L60.8838 45.8837L65.8838 40.8837C66.1181 40.6493 66.2497 40.3314 66.2497 40C66.2497 39.6685 66.1181 39.3506 65.8838 39.1162L60.8838 34.1162Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M20.8835 35.8837L19.116 34.1162L14.116 39.1162C13.8816 39.3506 13.75 39.6685 13.75 40C13.75 40.3314 13.8816 40.6493 14.116 40.8837L19.116 45.8837L20.8835 44.1162L18.0172 41.25H24.9997V38.75H18.0172L20.8835 35.8837Z"
                              fill="#499A9A"
                            />
                          </svg>
                        </div>
                        <div className="benefits-steps-content">
                          <h3>{t("Global Delivery. Local Execution.")}</h3>
                          <p>{t("Efficient, rapidly executed cost-effective transformation programs.")}</p>
                        </div>
                      </div>
                      {/* Benefits Steps Item End */}
                      {/* Benefits Steps Item End */}</div>
                    <div className="col-lg-6 col-md-6">
                      {/* Benefits Steps Item Start */}
                      <div
                        className="benefits-steps-item wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <div className="icon-box">
                          {/*<img src="/images/r4.svg" alt="">*/}
                          <svg
                            width={80}
                            height={80}
                            viewBox="0 0 80 80"
                            fill="none"
                            role="img" aria-label="ERP ROI icon"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50.235 2.40576C41.0304 2.40576 33.5684 9.86776 33.5684 19.0724C33.5684 28.2771 41.0304 35.7391 50.235 35.7391C59.4397 35.7391 66.9017 28.2771 66.9017 19.0724C66.9017 9.86776 59.4397 2.40576 50.235 2.40576ZM50.235 33.3582C42.3452 33.3582 35.9492 26.9622 35.9492 19.0724C35.9492 11.1827 42.3452 4.78665 50.235 4.78665C58.1248 4.78665 64.5208 11.1827 64.5208 19.0724C64.5208 26.9622 58.1248 33.3582 50.235 33.3582Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M50.2359 28.2985C45.0786 28.2985 40.8959 24.0447 41.0121 18.8614C41.1279 13.7023 45.5224 9.61563 50.6772 9.8563C52.3332 9.93363 53.9121 10.4461 55.293 11.3539C55.5306 11.5101 55.5828 11.8307 55.4137 12.0594L54.8224 12.859C54.6675 13.0685 54.3761 13.1234 54.1572 12.9819C52.4675 11.8894 50.4046 11.5467 48.325 12.071C45.879 12.6874 43.9472 14.5947 43.2761 17.0263C41.9324 21.893 45.5777 26.3141 50.2361 26.3141C52.3026 26.3141 54.2364 25.4496 55.6101 23.927C55.7846 23.7336 56.0804 23.7112 56.2841 23.8734L57.0626 24.4921C57.2852 24.6692 57.3181 24.9925 57.129 25.2052C55.3761 27.1776 52.8924 28.2985 50.2359 28.2985Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M57.6748 18.4775C56.1979 18.4775 54.9961 17.2759 54.9961 15.7988C54.9961 14.3219 56.1977 13.1201 57.6748 13.1201C59.1517 13.1201 60.3534 14.3217 60.3534 15.7988C60.3534 17.2759 59.1517 18.4775 57.6748 18.4775ZM57.6748 14.7077C57.073 14.7077 56.5834 15.1972 56.5834 15.799C56.5834 16.4008 57.073 16.8903 57.6748 16.8903C58.2765 16.8903 58.7661 16.4008 58.7661 15.799C58.7661 15.1972 58.2765 14.7077 57.6748 14.7077Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M68.8891 77.111H11.1113C6.69999 77.111 3.11133 73.5223 3.11133 69.111V34.6665C3.11133 30.2552 6.69999 26.6665 11.1113 26.6665H31.8462C32.5824 26.6665 33.1796 27.2634 33.1796 27.9998C33.1796 28.7363 32.5824 29.3332 31.8462 29.3332H11.1113C8.17044 29.3332 5.77799 31.7256 5.77799 34.6665V69.111C5.77799 72.0516 8.17044 74.4443 11.1113 74.4443H68.8891C71.8298 74.4443 74.2224 72.0516 74.2224 69.111V34.6665C74.2224 31.7256 71.8298 29.3332 68.8891 29.3332C68.1529 29.3332 67.5558 28.7363 67.5558 27.9998C67.5558 27.2634 68.1529 26.6665 68.8891 26.6665C73.3004 26.6665 76.8891 30.2552 76.8891 34.6665V69.111C76.8891 73.5223 73.3004 77.111 68.8891 77.111Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M21.7782 69.3334C21.042 69.3334 20.4449 68.7363 20.4449 68.0001V54.4445H14.8893V68.0001C14.8893 68.7363 14.2922 69.3334 13.556 69.3334C12.8198 69.3334 12.2227 68.7363 12.2227 68.0001V53.1112C12.2227 52.3749 12.8198 51.7778 13.556 51.7778H21.7782C22.5144 51.7778 23.1115 52.3749 23.1115 53.1112V68.0001C23.1115 68.7363 22.5144 69.3334 21.7782 69.3334Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M36.6669 69.3332C35.9307 69.3332 35.3336 68.7361 35.3336 67.9999V51.111H29.778V67.9999C29.778 68.7361 29.1809 69.3332 28.4447 69.3332C27.7084 69.3332 27.1113 68.7361 27.1113 67.9999V49.7777C27.1113 49.0414 27.7084 48.4443 28.4447 48.4443H36.6669C37.4031 48.4443 38.0002 49.0414 38.0002 49.7777V67.9999C38.0002 68.7361 37.4031 69.3332 36.6669 69.3332Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M51.5556 69.3333C50.8193 69.3333 50.2222 68.7362 50.2222 68V46.6667H44.6667V68C44.6667 68.7362 44.0696 69.3333 43.3333 69.3333C42.5971 69.3333 42 68.7362 42 68V45.3333C42 44.5971 42.5971 44 43.3333 44H51.5556C52.2918 44 52.8889 44.5971 52.8889 45.3333V68C52.8889 68.7362 52.2918 69.3333 51.5556 69.3333Z"
                              fill="#499A9A"
                            />
                            <path
                              d="M66.4442 69.3334C65.708 69.3334 65.1109 68.7363 65.1109 68.0001V42.4445H59.5553V68.0001C59.5553 68.7363 58.9582 69.3334 58.222 69.3334C57.4858 69.3334 56.8887 68.7363 56.8887 68.0001V41.1112C56.8887 40.3749 57.4858 39.7778 58.222 39.7778H66.4442C67.1804 39.7778 67.7776 40.3749 67.7776 41.1112V68.0001C67.7776 68.7363 67.1804 69.3334 66.4442 69.3334Z"
                              fill="#499A9A"
                            />
                          </svg>
                        </div>
                        <div className="benefits-steps-content">
                          <h3>{t("Clear ROI, Quantified Results")}</h3>
                          <p>{t("Enhanced operational performance and customer value.")}</p>
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
                      {t("Our Edge in Driving Transformation")}
                    </h2>
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-6 col-md-6 col-6">
                      {/* Benefits Steps Item Start */}
                      <div className="benefits-steps-item wow fadeInUp">
                        <div className="icon-box">
                          <img src="/images/r1.svg" alt="" />
                        </div>
                        <div className="benefits-steps-content">
                          <h3>{t("Proven Methodology (AIT) - Analyse. Integrate. Transform.")}</h3>
                          <p>{t("Achieve measurable transformation across your business.")}</p>
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
                          <img src="/images/r2.svg" alt="" />
                        </div>
                        <div className="benefits-steps-content">
                          <h3>{t("Industry Expertise Across Verticals")}</h3>
                          <p>{t("Deep experience in manufacturing, retail, automotive and private equity.")}</p>
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
                          <img src="/images/r3.svg" alt="" />
                        </div>
                        <div className="benefits-steps-content">
                          <h3>{t("Global Delivery. Local Execution.")}</h3>
                          <p>{t("Efficient, rapidly executed cost-effective transformation programs.")}</p>
                        </div>
                      </div>
                      {/* Benefits Steps Item End */}
                      {/* Benefits Steps Item Start */}
                      </div>
                  <div className="col-lg-6 col-md-6 col-6">
                      <div
                        className="benefits-steps-item wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <div className="icon-box">
                          <img src="/images/r4.svg" alt="" />
                        </div>
                        <div className="benefits-steps-content">
                          <h3>{t("Clear ROI, Quantified Results")}</h3>
                          <p>{t("Enhanced operational performance and customer value.")}</p>
                        </div>
                      </div>
                      {/* Benefits Steps Item End */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="hero-bg-video2">
                    <video
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      id="myVideo"
                      height={700}
                      width="100%"
                    >
                      <source src="/videos/way.mp4" type="video/mp4" />
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
                      {t("Partnering with Business Worldwide")}
                    </h2>
                    <p>{t("We partner with businesses in over 40 countries to deliver high-impact transformation across key sectors including brand owners and vertical retailers, the retail industry, distribution and supply chain, discrete and process manufacturing, the automotive industry, engineering, procurement and construction as well as the private equity and funding backed ventures.")}</p>
                    <p>{t("Whether you are mid-sized and scaling, or enterprise-level and rethinking your model, we help you unlock growth with Cloud ERP and Digital solutions.")}</p>
                    <div className="ser-btn2 mt-4">
                      <Link href="/solutions/erp-enterprise-solutions-and-services/erp" className="animated-svg-link1 btn-style-3">
                        {t("Know more")}
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="digital-features-item agency-supports mt-5">
                <div className="logo-marquee">
                  {/* Row 1 */}
                  <div className="logo-slider ltr">
                    <div className="logos">
                      <img src="/images/clients1/1-American-golf.png" alt="logo" />
                      <img src="/images/clients1/2-cold-chain-tech.png" alt="logo" />
                      <img src="/images/clients1/10-bond.png" alt="logo" />
                      <img src="/images/clients1/11-sembcorp.png" alt="logo" />
                      <img src="/images/clients1/12-cellcentric.png" alt="logo" />
                      {/* repeat for smooth scrolling */}
                      <img src="/images/clients1/13-ecolean.png" alt="logo" />
                      <img src="/images/clients1/14-ceco.png" alt="logo" />
                      <img src="/images/clients1/15-TRW.png" alt="logo" />
                      <img src="/images/clients1/16-kraft.png" alt="logo" />
                      <img src="/images/clients1/17-eccbc.png" alt="logo" />
                      <img src="/images/clients1/18-oman-fiber.png" alt="logo" />
                      <img src="/images/clients1/19-kern.png" alt="logo" />
                      <img src="/images/clients1/20-flsmidth.png" alt="logo" />
                      <img src="/images/clients1/21-kone.png" alt="logo" />
                      <img src="/images/clients1/22-tadco.png" alt="logo" />
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="logo-slider rtl">
                    <div className="logos">
                      <img src="/images/clients1/23-rsp.png" alt="logo" />
                      <img src="/images/clients1/24-kempi.png" alt="logo" />
                      <img src="/images/clients1/25-nucor.png" alt="logo" />
                      <img src="/images/clients1/26-rfa.png" alt="logo" />
                      <img src="/images/clients1/27-schalke.png" alt="logo" />
                      <img src="/images/clients1/28-gemaco.png" alt="logo" />
                      <img src="/images/clients1/29-talents.png" alt="logo" />
                      <img src="/images/clients1/30-tialoc.png" alt="logo" />
                      <img src="/images/clients1/31-zamil.png" alt="logo" />
                      <img src="/images/clients1/32-eva.png" alt="logo" />
                      <img src="/images/clients1/33-nasco.png" alt="logo" />
                      <img src="/images/clients1/34-global-industries.png" alt="logo" />
                      <img src="/images/clients1/35-ghassan.png" alt="logo" />
                      <img src="/images/clients1/36-glaze.png" alt="logo" />
                      <img src="/images/clients1/37-greentech.png" alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Our Testimonial Section End */}
          {/* Our Services Section Start */}
          <div className={`our-services projects systemview ${language === 'German' ? 'gerprojects' : ''}`}>
            <div className="container">
              <div className="row section-row text-center">
                <div className="col-lg-12">
                  {/* Section Title Start */}
                  <div className="section-title text-center">
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      {t("Projects that made a difference.")}
                    </h2>
                    <p>{t("At RheinBrücke, every project is a purposeful collaboration – driven by innovation, and focused on real-world impact. From streamlining automation system to accelerating embedded development, our solutions have helped the businesses overcome complexity , improve efficiency, and scale with confidence.These are the projects that truly made a difference.")}</p>
                    <div className="ser-btn">
                      <Link href="/about-us/success-stories" className="animated-svg-link">
                        {t("Explore more")}
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
                  {/* Section Title End */}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="service-item-body secondser">
                    <h3>
                      <span>{t("Case Study")}</span>
                    </h3>
                    <p>
                      {t("Implementation of Epicor 10 ERP in Oman Fibre Optic – Oman, A leading Manufacturer of world class fibre cable products")}
                    </p>
                    <div className="ser-btn1">
                      <Link href="/Casestudy/implementation-of-epicor-10-erp-in-oman-fibre-optic-oman-a-leading-manufacturer-of-world-class-fibre-cable-products/"
                        className="animated-svg-link1 btn-style-3"
                      >
                       {t("Read More")}
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
                      </Link>
                    </div>
                  </div>
                  {/* Service Item End */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="service-item-body">
                    <h3>
                      <span>{t("Case Study")}</span>
                    </h3>
                    <p>
                      {t("Standardising global operations across 21+ countries with a scalable two-tier ERP and unified analytics.")}
                    </p>
                    <div className="ser-btn1">
                      <Link href="/Casestudy/standardising-global-operations-across-21-countries-with-a-scalable-two-tier-erp-and-unified-analytics/"
                        className="animated-svg-link1 btn-style-3"
                      >
                        
                        {t("Read More")}
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
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="service-item-body thirdser">
                    <h3>
                      <span>Blog</span>
                    </h3>
                    <p>{t("How External Forces Are Reshaping ERP Strategy in 2026")}</p>
                    <div className="ser-btn1">
                      <Link href="/Blogs/how-external-forces-are-reshaping-erp-strategy-in-2026/"
                        className="animated-svg-link1 btn-style-3"
                      >
                        {t("Read More")}
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
                      </Link>
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
                      <Link href="/Blogs/10-must-have-features-in-a-modern-erp-system/"
                        className="animated-svg-link1 btn-style-3"
                      >
                        {t("Read More")}
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
                      </Link>
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
                      {t("Projects that made a difference.")}
                    </h2>
                    <p>{t("At RheinBrücke, every project is a purposeful collaboration – driven by innovation, and focused on real-world impact. From streamlining automation system to accelerating embedded development, our solutions have helped the businesses overcome complexity , improve efficiency, and scale with confidence.These are the projects that truly made a difference.")}</p>
                    <div className="ser-btn">
                      <Link href="/about-us/success-stories" className="animated-svg-link">
                        {t("Explore more")}
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
                      </Link>
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
                            <span>{t("Case Study")}</span>
                          </h3>
                          <p>
                            {t("How an Engineering Procurement Construction Company overcame their challenge by implementing Epicor ERP?")}
                          </p>
                          <div className="ser-btn1">
                            <Link href="/Case-study" className="animated-svg-link1">
                              {t("Read More")}
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
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="service-item-body secondser">
                          <h3>
                            <span>{t("Case Study")}</span>
                          </h3>
                          <p>
                            Welding Equipment Manufacturer Implements Epicor Country
                            Specific Functionality
                          </p>
                          <div className="ser-btn1">
                            <Link href="/Case-study" className="animated-svg-link1">
                              {t("Read More")}
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
                            </Link>
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
                            <Link href="/Blog" className="animated-svg-link1">
                              {t("Read More")}
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
                            </Link>
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
                            <Link href="/Blog" className="animated-svg-link1">
                              {t("Read More")}
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
                            </Link>
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
                      <h2>{t("Ready to start your next project?")}</h2>
                      <p>{t("From ERP modernization to AI – Driven innovation, we enable enterprise to move faster and smarter.")}</p>
                      <p>{t("Together, we design the future of your business.")}</p>
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
          </div>
        </>

      </CommomLayout>

    </>
  );
}
