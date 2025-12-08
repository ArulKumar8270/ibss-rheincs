import React from 'react'
import CommomLayout from '../Components/CommomLayout'
const page = () => {
    return (
        <CommomLayout>
            <>
                {/* Header Start */}
                {/*?php include "navbar.php" ?*/}
                {/* Header End */}
                <div className="collateralssec">
                    {/* <div class="parent2 retailparent2">
  <video src="videos/uiux.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
                    <div className="container">
                        <div className="row section-row1 align-items-center builtsec collat">
                            <div className="col-sm-12">
                                <div className="section-title text-center ">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        NEWS AND EVENTS
                                    </h2>
                                    {/* <p>In today’s digital-first world, great design is more than looks—it’s about creating seamless, intuitive experiences that drive engagement, satisfaction, and loyalty. </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="blog-main-waber newcollat">
                    <div className="container">
                        {/* <h2 class="blog-main-title"> Collaterals </h2> */}
                        <div className="row">
                            <div className="col-sm-7">
                                <div className="bolg-filter-waber collatpage">
                                    {/* 1. Filter Buttons (Controls) */}
                                    <ul
                                        className="nav nav-tabs filter-controls"
                                        id="myTab"
                                        role="tablist"
                                    >
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#home"
                                                type="button"
                                                role="tab"
                                                aria-controls="home"
                                                aria-selected="false"
                                                tabIndex={-1}
                                            >
                                                Responsibilities
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="profile-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#profile"
                                                type="button"
                                                role="tab"
                                                aria-controls="profile"
                                                aria-selected="false"
                                                tabIndex={-1}
                                            >
                                                Qualifications
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link "
                                                id="budget-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#budget"
                                                type="button"
                                                role="tab"
                                                aria-controls="budget"
                                                aria-selected="true"
                                            >
                                                Location
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="collattabsec mt-4">
                                    <div className="tab-content" id="myTabContent">
                                        {/* Supplier Relationship Pane */}
                                        <div
                                            className="tab-pane fade active show"
                                            id="home"
                                            role="tabpanel"
                                            aria-labelledby="home-tab"
                                        >
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="mey-fucher-tab-waber-content1">
                                                        {/* <h4>White Papers: Insightful Whitepapers from RheinBrücke </h4> */}
                                                        <div className="socialcont">
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    Design, develop and maintain test plans, test cases
                                                                    and test data for both manual and automated testing.{" "}
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    Lead and execute end-to-end functional, regression,
                                                                    integration, and exploratory testing.{" "}
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    Develop and maintain automation scripts using tools
                                                                    like Selenium, Postman, or similar frameworks.{" "}
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    Collaborate with developers and cross functional
                                                                    team to understand features, requirements, and
                                                                    acceptance criteria, ensuring complete test
                                                                    coverage.{" "}
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    {" "}
                                                                    Manage the defect lifecycle, ensuring accurate
                                                                    documentation, tracking, and timely resolution of
                                                                    bugs.
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    Mentor and guide junior QA engineers in best
                                                                    practices for both manual and automation testing.{" "}
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    {" "}
                                                                    Ensure all QA deliverables meet standards and
                                                                    support the team during critical release cycles.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* eProcurement Pane */}
                                        <div
                                            className="tab-pane fade"
                                            id="profile"
                                            role="tabpanel"
                                            aria-labelledby="profile-tab"
                                        >
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="mey-fucher-tab-waber-content1">
                                                        {/* <h4>White Papers: Insightful Whitepapers from RheinBrücke </h4> */}
                                                        <div className="socialcont">
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    Bachelor’s degree in Computer Science, Information
                                                                    Technology, or a related field.{" "}
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    {" "}
                                                                    8+ years of experience in software testing, with
                                                                    strong expertise in manual testing and solid
                                                                    exposure to test automation.
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    Strong understanding of SDLC, STLC, and defect
                                                                    management processes.{" "}
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    {" "}
                                                                    Hands-on experience with automation frameworks such
                                                                    as Selenium WebDriver or any automation frame for
                                                                    web testing.
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    {" "}
                                                                    Experience in API testing using tools like Postman.
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    {" "}
                                                                    Working knowledge of SQL for database validation.
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    {" "}
                                                                    Proficiency with bug tracking and test management
                                                                    tools (HP-Quality Center, JIRA, TestRail, Zephyr).
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    {" "}
                                                                    Excellent analytical, problem-solving, and
                                                                    communication skills set.
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    Ability to work independently, lead testing
                                                                    initiatives and collaborate with cross-functional
                                                                    teams.{" "}
                                                                </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>Preferred but not mandatory </p>
                                                            </div>
                                                            <div className="challenge-point-waber">
                                                                <img src="/images/socilapoint.svg" alt="" />
                                                                <p>
                                                                    Exposure to performance testing tools (JMeter).{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Budgeting & Planning Pane */}
                                        <div
                                            className="tab-pane fade"
                                            id="budget"
                                            role="tabpanel"
                                            aria-labelledby="budget-tab"
                                        >
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="mey-fucher-tab-waber-content1">
                                                        <div className="socialcont">
                                                            <div className="challenge-point-waber">
                                                                <img
                                                                    src="/new/map-locat.svg"
                                                                    style={{ width: 10 }}
                                                                    alt=""
                                                                />
                                                                <p>Chennai </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="mey-fucher-tab-waber-content1 job-advantage">
                                            <h4>The RheinBrücke Advantage </h4>
                                            <p>
                                                We offer you great opportunities within a dynamically growing
                                                company. You will elaborate and deliver best practice
                                                solutions and will be able to further develop your solution
                                                design, implementation and project management skills. At
                                                RheinBrücke you will discover a truly global culture, highly
                                                dedicated and motivated colleagues, a cooperative work
                                                environment and interesting training opportunities.
                                            </p>
                                            <p>
                                                If you are committed to taking over responsibility and
                                                mastering challenges in your daily work. We are looking
                                                forward to your application. Click here to apply:
                                            </p>
                                            <p>
                                                {" "}
                                                <a href="mailto:"> careers@rheincs.com </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="contect-enq-waber">
                                    <h2> Apply Now</h2>
                                    <form action="#" method="post" className="row g-3 pp-0">
                                        {/* Select Any One */}
                                        <div className="col-md-12">
                                            <select
                                                className="form-select custom-form-control"
                                                name="selection"
                                            >
                                                <option value="">
                                                    -- Select Job Title --
                                                </option>
                                                <option value="service1">Sr. Quality Assurance Engineer</option>
                                                <option value="service2">IT Support Analyst (Cloud)</option>
                                                <option value="other">Data Analyst</option>
                                                <option value="other">Sr ERP Consultant / Presales Consultant / Solution Architect</option>
                                                <option value="other">ERP Solution Architect</option>
                                                <option value="other">ERP Technical Consultant</option>
                                                <option value="other">EPICOR Consultant – Finance</option>
                                                <option value="other">Senior .NET Developer/Lead</option>
                                            </select>
                                        </div>
                                        {/* Full Name */}
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                className="form-control custom-form-control"
                                                name="fullName"
                                                placeholder="Your Name*"
                                            />
                                        </div>
                                        {/* Email Address */}
                                        <div className="col-md-12">
                                            <input
                                                type="email"
                                                className="form-control custom-form-control"
                                                name="email"
                                                placeholder="Your Email Address*"
                                            />
                                        </div>
                                        {/* Phone Number with Country Code */}
                                        <div className="col-md-12">
                                            <div className="input-group custom-form-control">
                                                <select
                                                    className="form-select"
                                                    name="countryCode"
                                                >
                                                    <option value={+91} >
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
                                                    placeholder="Your Phone No*"
                                                />
                                            </div>
                                        </div>
                                        {/* Email Address */}
                                        <div className="col-md-12">
                                            <input
                                                type="file"
                                                className="form-control custom-form-control"
                                                name="file"
                                            />
                                        </div>
                                        {/* Message */}
                                        <div className="col-12">
                                            <textarea
                                                className="form-control custom-form-control"
                                                name="message"
                                                placeholder="Covering lettter Message"
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