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
                            "\n    .thankyou-wrapper {\n        position: relative;\n        height: 100vh;\n        overflow: hidden;\n    }\n\n\n    /* Main Content */\n    .thankyou-content {\n        position: relative;\n        z-index: 2;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        text-align: center;\n        padding: 20px;\n    }\n\n    .check-icon {\n        width: 50px;\n        height: 50px;\n        background: #1cb28b;\n        color: white;\n        border-radius: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 22px;\n        margin-bottom: 20px;\n    }\n\n    .thankyou-content h1 {\n        font-size: 42px;\n        margin-bottom: 10px;\n        color: #082326;\n    }\n\n    .thankyou-content p {\n        max-width: 600px;\n        color: #666;\n        font-size: 16px;\n        margin-bottom: 40px;\n    }\n\n    /* Mobile Responsive */\n    @media (max-width: 600px) {\n        .thankyou-content h1 {\n            font-size: 30px;\n        }\n\n        .card-wrapper {\n            flex-direction: column;\n        }\n    }\n"
                    }}
                />
                <div className="thankyou-wrapper">
                    {/* Main Content */}
                    <div className="thankyou-content">
                        <div className="check-icon">
                            <i className="fa-solid fa-check" />
                        </div>
                        <h1>Thank you!</h1>
                        <p>
                            Your request has been received and the email has been sent successfully.
                            Please check your inbox for further details.
                        </p>
                    </div>
                </div>
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
                                            <a href="/contact" className="animated-svg-link">
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
                        </div>
                    </div>
                </footer>
            </>

        </CommomLayout>
    )
}

export default page