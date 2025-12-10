import React from 'react'
import CommomLayout from '../Components/CommomLayout'

const page = () => {
    return (
        <CommomLayout>
            <>
                {/* Header Start */}
                {/*?php include "navbar.php" ?*/}
                {/* Header End */}
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    \n       h4.text-dark {\n            font-weight: 700; /* Bold */\n            margin-bottom:20px;\n            margin-top: 10px;\n            font-size: 1.25rem;\n            color: #212529 !important; /* Bootstrap Dark */\n        }\n"
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
                                        Understanding Our Terms of Use
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
                            <p>
                                RheinBrücke IT Consulting B.V. (“RheinBrücke”) operates each website
                                (“Site”) that links to these Terms of Use to provide online access to
                                information about RheinBrücke and the products, services, and
                                opportunities we provide.
                            </p>
                        </div>
                        <div className="wrappernew main-container">
                            <p>
                                <b>
                                    By accessing and using the Site, you agree to these Terms of Use.
                                </b>
                            </p>
                            <p>
                                RheinBrücke reserves the right to modify these Terms of Use at any
                                time without giving you prior notice. Your use of the Site following
                                any such modification constitutes your agreement to follow and be
                                bound by these Terms of Use as modified. The last date these Terms of
                                Use were revised is set forth below.
                            </p>
                        </div>
                        {/* Section 1 */}
                        <div className="wrappernew main-container">
                            {/* Changed p to h4 as requested */}
                            <h4 className="text-dark">1. Permitted Use of the Site</h4>
                            <p className="bulletContent-terms">
                                RheinBrücke reserves the right to modify these Terms of Use at any
                                time without giving you prior notice. Your use of the Site following
                                any such modification constitutes your agreement to follow and be
                                bound by these Terms of Use as modified. The last date these Terms of
                                Use were revised is set forth below.
                            </p>
                        </div>
                        {/* Section 2 */}
                        <div className="wrappernewbullet main-container">
                            <h4 className="text-dark">2. Prohibited Use of the Site</h4>
                            <p className="bulletContent-terms">
                                By accessing the Site, you agree that you will not:
                            </p>
                            <div className="col-lg-12">
                                <ul>
                                    <li>
                                        <div className="redBullets-epicor" />
                                        <p className="bulletContent-epicor-black">
                                            Use the Site in violation of these Terms of Use
                                        </p>
                                    </li>
                                    <li>
                                        <div className="redBullets-terms" />
                                        <div className="bulletContent">
                                            Modify, create a derivative work from, reverse engineer or
                                            reverse assemble the Site, or otherwise attempt to discover any
                                            source code, or allow any third party to do so
                                        </div>
                                    </li>
                                    <li>
                                        <div className="redBullets-terms" />
                                        <div className="bulletContent">
                                            Sell, assign, sublicense, distribute, commercially exploit,
                                            grant a security interest in or otherwise transfer any right in,
                                            or make available to a third party, the Content or Service in
                                            any way
                                        </div>
                                    </li>
                                    <li>
                                        <div className="redBullets-terms" />
                                        <div className="bulletContent">
                                            Use or launch any automated system, including without
                                            limitation, “robots,” “spiders,” or “offline readers,” that
                                            accesses the Site in a manner that sends more request messages
                                            to the RheinBrücke servers in a given period of time than a
                                            human can reasonably produce in the same period by using a
                                            conventional on-line web browser
                                        </div>
                                    </li>
                                    <li>
                                        <div className="redBullets-epicor" />
                                        <p className="bulletContent-epicor-black">
                                            Mirror or frame the Site or any part of it on any other web site
                                            or web page
                                        </p>
                                    </li>
                                    <li>
                                        <div className="redBullets-epicor" />
                                        <p className="bulletContent-epicor-black">
                                            Attempt to gain unauthorized access to the Site
                                        </p>
                                    </li>
                                    <li>
                                        <div className="redBullets-epicor" />
                                        <p className="bulletContent-epicor-black">
                                            Access the Site by any means other than through the interface
                                            that is provided by RheinBrücke for use in accessing the Site
                                        </p>
                                    </li>
                                    <li>
                                        <div className="redBullets-epicor" />
                                        <p className="bulletContent-epicor-black">
                                            Use the Site for any purpose or in any manner that is unlawful
                                            or prohibited by this Agreement
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <p className="mt-3">
                                Any unauthorized use of any Content or the Site may violate patent,
                                copyright, trademark, and other laws.
                            </p>
                        </div>
                        {/* Section 3 */}
                        <div className="wrappernew main-container">
                            <h4 className="text-dark">3. Copyrights and Trademarks</h4>
                            <p className="bulletContent-terms">
                                The Site is based upon proprietary RheinBrücke technology and includes
                                the Content. The Site is protected by applicable intellectual property
                                and other laws, including trademark and copyright laws. The Site,
                                including all intellectual property rights in the Site, belongs to and
                                is the property of RheinBrücke or its licensors (if any). RheinBrücke
                                owns and retains all copyrights in the Content. Except as specifically
                                permitted on the Site as to certain Content, the Content may not be
                                copied, reproduced, modified, published, uploaded, posted,
                                transmitted, performed, or distributed in any way, and you agree not
                                to modify, rent, lease, loan, sell, distribute, transmit, broadcast,
                                or create derivative works based on the Content or the Site, in whole
                                or in part, by any means. RheinBrücke, the RheinBrücke logos, and
                                other marks used by RheinBrücke from time to time are trademarks and
                                the property of RheinBrücke. The appearance, layout, color scheme, and
                                design of the RheinBrücke.com site are protected trade dress. Customer
                                does not receive any right or license to use the foregoing.
                                RheinBrücke may use and incorporate into the Site or the RheinBrücke
                                Service any suggestions or other feedback you provide, without payment
                                or condition.
                            </p>
                        </div>
                        {/* Section 4 */}
                        <div className="wrappernew main-container">
                            <h4 className="text-dark">
                                4. Information and Materials You Post or Provide
                            </h4>
                            <p className="bulletContent-terms">
                                You represent that you have all right, title, and interest to
                                materials you post on the Site or provide to RheinBrücke
                                (“Materials”), including but not limited to any consent,
                                authorization, release, clearance or license from any third party
                                (such as, but not limited to, any release related to rights of privacy
                                or publicity) necessary for you to provide, post, upload, input or
                                submit the Materials, and that posting such Materials does not violate
                                or constitute the infringement of any patent, copyright, trademark,
                                trade secret, right of privacy, right of publicity, moral rights, or
                                other intellectual property right recognized by any applicable
                                jurisdiction of any person or entity, or otherwise constitute the
                                breach of any agreement with any other person or entity. You further
                                represent and warrant that you are who you say you are, that you have
                                not submitted fictitious, false or inaccurate information about
                                yourself, and that all information contained in the posted Materials
                                is true and your own work or work you are authorized to submit, and
                                that the posted Materials do not contain any threatening, harassing,
                                libelous, false, defamatory, offensive, obscene, or pornographic,
                                material, or other material that would violate any other applicable
                                law or regulation. You agree that you will not knowingly and with
                                intent to defraud provide material and misleading information. You
                                represent and warrant that the Materials you supply do not violate
                                these Terms of Use.
                            </p>
                        </div>
                        {/* Section 5 */}
                        <div className="wrappernew main-container">
                            <h4 className="text-dark">5. Links to Third-Party Web Sites</h4>
                            <p className="bulletContent-terms">
                                {" "}
                                Links on the Site to third party web sites or information are provided
                                solely as a convenience to you. If you use these links, you will leave
                                the Site. Such links do not constitute or imply an endorsement,
                                sponsorship, or recommendation by RheinBrücke of the third party, the
                                third-party web site, or the information there. RheinBrücke is not
                                responsible for the availability of any such web sites. RheinBrücke is
                                not responsible or liable for any such web sites or the content
                                thereon. If you use the links to the web sites of RheinBrücke
                                affiliates or service providers, you will leave the Site and will be
                                subject to the terms of use and privacy policy applicable to those web
                                sites.
                            </p>
                        </div>
                        {/* Section 6 */}
                        <div className="wrappernew main-container">
                            <h4 className="text-dark">6. Downloading Files</h4>
                            <p className="bulletContent-terms">
                                RheinBrücke cannot and does not guarantee or warrant that files
                                available for downloading through the Site will be free of infection
                                by software viruses or other harmful computer code, files or programs.
                            </p>
                        </div>
                        {/* Section 7 */}
                        <div className="wrappernew main-container">
                            <h4 className="text-dark">7. Disclaimers; Limitations of Liability</h4>
                            <p className="bulletContent-terms">
                                {" "}
                                RheinBrücke and its service providers, licensors and suppliers make no
                                representations about the suitability, reliability, availability,
                                timeliness, security or accuracy of the site or the content for any
                                purpose. To the maximum extent permitted by applicable law, all such
                                information, software, products, service and related graphics are
                                provided “as is” without warranty or condition of any kind.
                                RheinBrücke and its service providers, licensors and suppliers hereby
                                disclaim all warranties and conditions of any kind with regard to the
                                site and the content, including all implied warranties or conditions
                                of merchantability, fitness for a particular purpose, title and
                                non-infringement. No statement or information, whether oral or
                                written, obtained from RheinBrücke in any means or fashion shall
                                create any warranty not expressly and explicitly set forth in this
                                agreement. The content may include inaccuracies or typographical
                                errors.
                            </p>
                            <p className="bulletContent-terms">
                                {" "}
                                To the maximum extent permitted by applicable law, in no event shall
                                RheinBrücke and its service providers, licensors or suppliers be
                                liable for any direct, indirect, punitive, incidental, special,
                                consequential, exemplary or other type of damages, including without
                                limitation damages for cover or loss of use, data, revenue or profits,
                                arising out of or in any way connected with the use or performance of
                                the site, with the delay or inability to use the site, or for any
                                content, or otherwise arising out of the use of the site, whether
                                based on contract, tort, negligence, strict liability, the failure of
                                any limited remedy to achieve its essential purpose, or otherwise,
                                even if RheinBrücke or any of RheinBrücke’s suppliers has been advised
                                of the possibility of damages. Because some states/jurisdictions do
                                not allow the exclusion or limitation of liability for consequential
                                or incidental damages, the above limitation may not apply to you.
                            </p>
                            <p className="bulletContent-terms">
                                If, notwithstanding the other terms of this agreement, RheinBrücke is
                                determined to have any liability to you or any third party for any
                                loss, harm or damage, you agree that the aggregate liability of
                                RheinBrücke and its officers, directors, managers, employees,
                                affiliates, agents, contractors, service providers, licensors or
                                suppliers shall in all cases be limited to One Hundred Euros.
                            </p>
                        </div>
                        {/* Section 8 */}
                        <div className="wrappernew main-container">
                            <h4 className="text-dark">8. Indemnification</h4>
                            <p className="bulletContent-terms">
                                You understand and agree that you are personally responsible for your
                                behavior on the Site. You agree to indemnify, defend and hold harmless
                                RheinBrücke, its parent companies, subsidiaries, affiliated companies,
                                joint ventures, business partners, licensors, employees, agents, and
                                any third-party information providers from and against all claims,
                                losses, expenses, damages and costs (including, but not limited to,
                                direct, incidental, consequential, exemplary and indirect damages),
                                and reasonable attorneys’ fees, resulting from or arising out of your
                                use, misuse, or inability to use the Site or the Content, or any
                                violation by you of these Terms of Use.
                            </p>
                        </div>
                        {/* Section 9 */}
                        <div className="wrappernew main-container">
                            <h4 className="text-dark">9. Privacy</h4>
                            <p className="bulletContent-terms">
                                Your use of the Site is subject to RheinBrücke’s Privacy Policy,
                                available at www.rheincs.com
                            </p>
                        </div>
                        {/* Section 10 */}
                        <div className="wrappernew main-container">
                            <h4 className="text-dark">10. General Provisions</h4>
                            <p className="bulletContent-terms">
                                a. Entire Agreement/No Waiver. These Terms of Use constitute the
                                entire agreement of the parties with respect to the subject matter
                                hereof. No waiver by RheinBrücke of any breach or default hereunder
                                shall be deemed to be a waiver of any preceding or subsequent breach
                                or default.
                            </p>
                            <p className="bulletContent-terms">
                                b. Correction of Errors and Inaccuracies. The Content may contain
                                typographical errors or other errors or inaccuracies and may not be
                                complete or current. RheinBrücke therefore reserves the right to
                                correct any errors, inaccuracies or omissions and to change or update
                                the Content at any time without prior notice. RheinBrücke does not,
                                however, guarantee that any errors, inaccuracies or omissions will be
                                corrected.
                            </p>
                            <p className="bulletContent-terms">
                                c. Enforcement/ Choice of Law/ Choice of Forum. If any part of these
                                Terms of Use is determined by a court of competent jurisdiction to be
                                invalid or unenforceable, it will not impact any other provision of
                                these Terms of Use, all of which will remain in full force and effect.
                                Any and all disputes relating to these Terms of Use, RheinBrücke’s
                                Privacy Policy, your use of the Site, any other RheinBrücke web site
                                or the Content are governed by, and will be interpreted in accordance
                                with, Indian laws, without regard to any conflict of laws provisions.
                                You agree to the sole and exclusive jurisdiction and venue of the
                                courts in Chennai, India in the event of any dispute of any kind
                                arising from or relating to these Terms of Use, RheinBrücke’s Privacy
                                Policy, your use of the Site, any other RheinBrücke web site or the
                                Content.
                            </p>
                            <div className="wrappernew main-container mt-5 text-muted small">
                                <p className="mb-0">Last Revised: May 7, 2014</p>
                                <p>Copyright 2014 RheinBrücke. All rights reserved</p>
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
                                        <h2>Ready to accelerate value creation across your portfolio?</h2>
                                        <p>
                                            Contact us today to learn how we can help modernise operations,
                                            de-risk integrations, and improve commercial outcomes.
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
            </>

        </CommomLayout>
    )
}
export default page