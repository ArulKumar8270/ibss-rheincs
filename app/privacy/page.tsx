"use client";
import React from 'react'
import CommomLayout from '../Components/CommomLayout';
import {useTranslation} from "../hooks/useTranslation";

const page = () => {
  const { t, language } = useTranslation();

    return (
        <CommomLayout>
           <>
  {/* Header Start */}
  {/*?php include "navbar.php" ?*/}
  {/* Header End */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n       /* Banner Styling */\n        .rhein-banner-heading-h2 {\n            font-size: 2rem;\n            color: #002b49;\n            text-align: center;\n            margin-bottom: 30px;\n            font-weight: 300;\n        }\n\n        /* Headings (H4 as requested) */\n        h4.text-dark {\n            font-weight: 700;\n            margin-top: 25px;\n            margin-bottom: 15px;\n            color: #212529 !important;\n        }\n\n        /* Paragraphs */\n        p {\n            margin-bottom: 15px;\n            text-align: justify;\n            font-size: 0.95rem;\n        }\n\n        /* Link Styling */\n        a {\n            color: #0d6efd;\n            text-decoration: none;\n        }\n\n        a:hover {\n            text-decoration: underline;\n        }\n\n        /* List & Bullet Styling */\n        ul {\n            list-style: none;\n            padding-left: 0;\n            margin-top: 10px;\n        }\n\n        li {\n            display: flex;\n            align-items: flex-start;\n            margin-bottom: 10px;\n        }\n\n        /* The Red Box Bullet */\n        .redBullets,\n        .redBullets-epicor {\n            width: 10px;\n            height: 10px;\n            background-color:#082326; /* Red */\n            margin-right: 15px;\n            margin-top: 7px;\n            flex-shrink: 0;\n        }\n\n        .bulletContent,\n        .bulletContent-epicor-black {\n            margin: 0;\n            color: #555;\n            font-size: 0.95rem;\n        }\n\n        /* Table Styling for Cookies */\n        table.cookies {\n            width: 100%;\n            border-collapse: collapse;\n            margin: 20px 0;\n            font-size: 0.9rem;\n        }\n\n        table.cookies th {\n            background-color: #f1f1f1;\n            font-weight: bold;\n            text-align: left;\n            padding: 12px;\n            border: 1px solid #ddd;\n            color: #000;\n        }\n\n        table.cookies td {\n            padding: 10px;\n            border: 1px solid #ddd;\n            vertical-align: top;\n        }\n\n        table.cookies tr:nth-child(even) {\n            background-color: #fcfcfc;\n        }\n"
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
              {t("Rheincs's Privacy Policy")}
            </h2>
            {/* <p>In today’s digital-first world, great design is more than looks—it’s about creating seamless, intuitive experiences that drive engagement, satisfaction, and loyalty. </p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="text-dark py-5">
    <div className="container" id="container-top">
      <div className="wrappernew main-container">
        {/* H4 Heading added */}
        <h4 className="text-dark">{t("Privacy and Cookies")}</h4>
        <p>{t("Please read this privacy policy, which describes the collection, use, disclosure, retention and protection of your personal information carefully.")}</p>
        <p>{t("This website is administered by RheinBrücke IT Consulting B.V. As administrator of this website RheinBrücke IT Consulting B.V. gathers, analyses and processes information regarding the visitors and usage of this website for its general business purposes and for the development of web statistics as described below.")}</p>
        <p>{t('This Privacy Policy applies to all websites, applications and services referred to in this Privacy Policy. If you provide us with your personal information as described in the section \"How we obtain information\", you agree that we: (a) fulfil our contractual obligations to you; (b) in accordance with our legitimate interests (e.g. for internal administrative purposes, data analysis, back-up and benchmarking, direct marketing or for the purpose of clarifying or preventing crime) or (c) in accordance with your consent, which you may revoke, collect, store and use at any time as described in this Privacy Policy.')}</p>
        <h4 className="text-dark">{t("Who we are")}</h4>
        <p>{t("This Privacy Policy applies to all products, applications and services offered by RheinBrücke IT Consulting B.V. (Sales tax identification number DE293866616 and registered office in Stationsplein 8K NL-6221BT, Maastricht, Netherlands), and excludes all product applications or services that are subject to separate privacy policies that are independent of this Privacy Policy.")}</p>
        <h4 className="text-dark">{t("How we obtain information")}</h4>
        <p>{t("To the extent permitted under applicable law, we collect information about you and any other party about whom you provide us with information as soon as you:")}</p>
        {/* Lists Consolidated for cleaner HTML */}
        <ul>
          <li>
            <div className="redBullets-epicor" />
            <p className="bulletContent-epicor-black">
              {t("Register to use our websites, applications or services (including free trial versions); this may include your name (including your company name), your address, e-mail address and telephone number. We may ask you to provide additional information about your business and preferences;")}
            </p>
          </li>
          <li>
            <div className="redBullets-epicor" />
            <p className="bulletContent-epicor-black">
              {t("Fill out online forms, post on our message boards, post to any blog, download information (e.g. white papers or other publications), or in other interactive areas of our websites or within our applications or services;")}
            </p>
          </li>
          <li>
            <div className="redBullets-epicor" />
            <p className="bulletContent-epicor-black">{t("Interact with us through social media;")}</p>
          </li>
          <li>
            <div className="redBullets-epicor" />
            <p className="bulletContent-epicor-black">
              {t("Provide us with your contact information while you register to use or access all the websites, applications or services that we provide, or when you update this information;")}
            </p>
          </li>
          <li>
            <div className="redBullets-epicor" />
            <p className="bulletContent-epicor-black">
              {t("Contact us offline, e.g. by phone, fax, SMS, e-mail or by mail.")}
            </p>
          </li>
        </ul>
        <p>{t("We also collect information about your devices (including mobile devices) and applications that you or your users use to access our websites, applications or services.")}</p>
        <p>{t("We may supplement the personal information obtained about you with information obtained from third parties entitled to disclose it.")}</p>
        <h4 className="text-dark">
          {t("Provide personal information about others to us")}
        </h4>
        <p>{t("If you provide us with personal information about others, you are responsible for ensuring that you comply with all applicable duties and regulations...")}</p>
        <h4 className="text-dark">{t("How we use your information")}</h4>
        <p>{t("We use your information in accordance with applicable law to:")}</p>
        <ul>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("Provide information and services or applications or services that you have requested or shown interest;")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("To check information for accuracy and to compare / verify this information with third parties;")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("To provide, manage, protect and improve the applications, products, services and information you have requested from us;")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("Manage your use of the applications, products and services you wish to receive from us;")}
            </p>
          </li>
          {/* Simplified listing for brevity, add all items here */}
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("Manage our business relationship with you (e.g. for customer service and support activities);")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("Monitor, measure, improve and protect our content, websites, applications and services...")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("To internally test our website, applications, systems and services...")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("To provide you with all the information we need to send you...")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("Detect, prevent, investigate or combat criminal, unlawful or unauthorized activities...")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <div className="d-block">
              <p className="bulletContent mb-2">
                {t("You can manage your privacy settings in your browser or within our applications...")}
              </p>
              <p className="bulletContent">
                {t("In addition to the purposes described in this section...")}
              </p>
            </div>
          </li>
        </ul>
        <h4 className="text-dark">{t("Data analysis and benchmarking")}</h4>
        <p>{t("We use information generated and stored during your use of our services for legitimate business purposes...")}</p>
        <ul>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("Communicating advertising, marketing content...")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("Conducting research and development activities...")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("Developing and providing new and existing functionalities...")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <div className="d-block">
              <p className="bulletContent mb-2">
                {t("Provide location-based services...")}
              </p>
              <p className="bulletContent">
                {t("When using your information for legitimate business purposes...")}
              </p>
            </div>
          </li>
        </ul>
        <h4 className="text-dark">{t("Sharing your information")}</h4>
        <p>{t("We share your information:")}</p>
        <ul>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("Within the company for purposes set forth in this Privacy Policy...")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">{t("Our service providers and agents...")}</p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("Partners, including system implementation partners...")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("Third parties that we engage to process payment transactions...")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("Third parties for marketing purposes...")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">{t("Credit rating agencies...")}</p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">{t("Regulators...")}</p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">{t("Law enforcement agencies...")}</p>
          </li>
        </ul>
        <h4 className="text-dark">{t("Marketing")}</h4>
        <p>{t("From time to time we will use your information to contact you...")}</p>
        <p>{t("We may also share the information we collect about you with carefully selected companies...")}</p>
        <h4 className="text-dark">{t("Third-party advertising platforms")}</h4>
        <p>{t("When you reply to posts posted on third-party platforms (such as Facebook, Google, and Twitter)...")}</p>
        <h4 className="text-dark">{t("Your information and your rights")}</h4>
        <p>{t("If you are a resident of the EEA or any other jurisdiction with similar privacy laws...")}</p>
        <ul>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("The right to know how we use and obtain your information;")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("The right to request us to correct or delete your information...")}
            </p>
          </li>
          <li>
            <div className="redBullets" />
            <p className="bulletContent">
              {t("The right to oppose the processing of your data...")}
            </p>
          </li>
        </ul>
        <h4 className="text-dark">{t("Modification of this Privacy Policy")}</h4>
        <p>{t("We may update this privacy policy from time to time...")}</p>
        <h4 className="text-dark">{t("Backup and storage of information")}</h4>
        <p>{t("Your information is safe as we take reasonable technical and organizational measures...")}</p>
        <h4 className="text-dark">
          {t("Transfers outside the European Economic Area")}
        </h4>
        <p>{t("Personal data in the European Union are protected by data protection laws...")}</p>
        <h4 className="text-dark">{t("Other websites and social media")}</h4>
        <p>{t("If you follow a link from our website, our application or our service...")}</p>
        <h4 className="text-dark">{t("Cookies, analysis and data traffic")}</h4>
        <p>{t("Cookies are small text files that are transmitted by our websites...")}</p>
        <p>{t("If you allow us to use cookies through your browser settings or consent, the following cookies may be used on our websites:")}</p>
        <p>
          <strong>{t("Necessary Cookies: 6")}</strong>
        </p>
        <table className="cookies">
          <tbody>
            <tr>
              <th>{t("Name")}</th>
              <th>{t("Purpose")}</th>
              <th>{t("Expiry Date")}</th>
            </tr>
            <tr>
              <td>__cfduid [x2]</td>
              <td>{t("Used by the content network, Cloudflare...")}</td>
              <td>{t("1 year")}</td>
            </tr>
            <tr>
              <td>ASP.NET_SessionId (x2)</td>
              <td>{t("This cookie preserves the visitor’s session...")}</td>
              <td>{t("end session")}</td>
            </tr>
            <tr>
              <td>_RequestVerificationToken</td>
              <td>{t("Helps prevent Cross-Site Request Forgery...")}</td>
              <td>{t("end session")}</td>
            </tr>
            <tr>
              <td>ASPXAUTH</td>
              <td>{t("Identifies the user and allows authentication...")}</td>
              <td>{t("end session")}</td>
            </tr>
            <tr>
              <td>CookieConsent</td>
              <td>{t("Stores the user's cookie consent state...")}</td>
              <td>{t("1 year")}</td>
            </tr>
            <tr>
              <td>ZD-suid</td>
              <td>{t("Unique id that identifies the user’s session.")}</td>
              <td>{t("Persistent")}</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>{t("Preferences: 3")}</strong>
        </p>
        <table className="cookies">
          <tbody>
            <tr>
              <th>{t("Name")}</th>
              <th>{t("Purpose")}</th>
              <th>{t("Expiry Date")}</th>
            </tr>
            <tr>
              <td>userlang</td>
              <td>{t("Remembers the user's selected language...")}</td>
              <td>{t("1 year")}</td>
            </tr>
            <tr>
              <td>ZD-settings</td>
              <td>{t("Arbitrary and anonymous settings...")}</td>
              <td>{t("Persistent")}</td>
            </tr>
            <tr>
              <td>ZD-store</td>
              <td>{t("Registers whether the self-service assistant...")}</td>
              <td>{t("Persistent")}</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>{t("Statistics: 5")}</strong>
        </p>
        <table className="cookies">
          <tbody>
            <tr>
              <th>{t("Name")}</th>
              <th>{t("Purpose")}</th>
              <th>{t("Expiry Date")}</th>
            </tr>
            <tr>
              <td>_ga</td>
              <td>{t("Registers a unique ID...")}</td>
              <td>{t("2 year")}</td>
            </tr>
            <tr>
              <td>_gid</td>
              <td>{t("Registers a unique ID...")}</td>
              <td>{t("end session")}</td>
            </tr>
            <tr>
              <td>collect</td>
              <td>{t("Used to send data to Google Analytics...")}</td>
              <td>{t("end session")}</td>
            </tr>
          </tbody>
        </table>
        <h4 className="text-dark">{t("Web beacons and parameter tracking")}</h4>
        <p>{t("We use cookies and similar software known as web beacons...")}</p>
        <h4 className="text-dark">{t("IP address and traffic data")}</h4>
        <p>{t("We retain a record of traffic data automatically logged by our servers...")}</p>
        <h4 className="text-dark">{t("Tools")}</h4>
        <p>
          <u>{t("We use the following tools that use cookies on our website:")}</u>
        </p>
        <h4 className="text-dark">{t("Google Analytics")}</h4>
        <p>{t('Google Analytics uses "cookies" to see how users\' websites...')}</p>
        <h4 className="text-dark">{t("Google Tag Manager")}</h4>
        <p>{t("This website uses Google Tag Manager...")}</p>
        <h4 className="text-dark">{t("Facebook plugins (like button)")}</h4>
        <p>{t("Facebook, provider Facebook Inc., 1 Hacker Way, Menlo Park...")}</p>
        <h4 className="text-dark">{t("Twitter")}</h4>
        <p>{t("These features are available through Twitter Inc...")}</p>
        <h4 className="text-dark">{t("LinkedIn")}</h4>
        <p>{t("The provider is LinkedIn Corporation...")}</p>
        <h4 className="text-dark">{t("XING")}</h4>
        <p>{t("The provider is the XING AG...")}</p>
        <h4 className="text-dark">{t("LeadSquared")}</h4>
        <p>{t("We use LeadSquared to design our landing pages...")}</p>
        <h4 className="text-dark">{t("FactorsAI")}</h4>
        <p>{t("FactorsAI is a website visitor tracking software...")}</p>
        <h4 className="text-dark">{t("How to disable cookies")}</h4>
        <p>{t("You may be able to configure your browser...")}</p>
        <h4 className="text-dark">{t("Deleting cookies")}</h4>
        <p>{t("You can use your browser settings to delete individual cookies...")}</p>
        <h4 className="text-dark">{t("Further information")}</h4>
        <p>{t("The Legal basis: The legal basis for these processing is your consent...")}</p>
        <h4 className="text-dark">{t("Which data protection rights do you have?")}</h4>
        <p>{t("16 DSGVO, the right to cancellation under Art. 17 GDPR...")}</p>
        <p>{t("If you have any questions about how we should handle your information...")}</p>
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
              <h2>{t("Ready to accelerate value creation across your portfolio?")}</h2>
              <p>
                {t("Contact us today to learn how we can help modernise operations, de-risk integrations, and improve commercial outcomes.")}
              </p>
            </div>
            <div className="col-sm-4">
              <div className="ser-btn text-right">
                <a href="#" className="animated-svg-link">
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
                </a>
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
