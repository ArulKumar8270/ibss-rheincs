"use client";

import React, { useState } from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+91',
    phone: '',
    email: '',
    companyName: '',
    selection: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('Submitting your inquiry...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setStatusMessage(result.message);
        // Reset form
        setFormData({
          fullName: '',
          countryCode: '+91',
          phone: '',
          email: '',
          companyName: '',
          selection: '',
          message: ''
        });
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }
  };

    return (
        <CommomLayout>
<>
  {/* Header Start */}
  {/*?php include "navbar.php" ?*/}
  {/* Header End */}
  <div className="contect-waber">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="section-title">
            <h2
              className="text-anime-style-2 text-white "
              data-cursor="-opaque"
            >
              Talk to Our Experts
            </h2>
            <p className="">
              {" "}
              Thank you for your interest in RheinBrücke. Please contact us by
              either visiting our office at the locations provided or write to
              us for more information on how RheinBrücke can help you stay ahead
              of competition. For additional information on our IT consulting
              services, solutions or industry expertise, please visit the
              relevant pages on our website.{" "}
            </p>
          </div>
          <div className="contect-call">
            <img src="/new/contect-call.svg" alt="" />{" "}
                  <Link href=""> +49 231 292 95619</Link>
          </div>
          <div className="contect-call">
                  <img src="/new/c-mail.svg" alt="" /> <Link href=""> info@rheincs.com</Link>
          </div>
          <div className="contect-call sos">
            <li>
                    <Link href="https://www.linkedin.com/company/rheinbr%C3%BCcke-it-consulting"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin" />
                    </Link>
            </li>
            <li>
                    <Link href="https://x.com/RheinBruckeIT" target="_blank">
                <i className="fa-brands fa-x-twitter" />
                    </Link>
            </li>
            <li>
                    <Link href="https://www.instagram.com/rheinbrucke_itconsulting/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram" />
                    </Link>
            </li>
            <li>
                    <Link href="https://www.facebook.com/RheinBrucke" target="_blank">
                <i className="fa-brands fa-facebook" />
                    </Link>
            </li>
          </div>
          <div className="chat-main-waber">
            <div className="chat-btn-1">
              <img src="/new/chat-btn.svg" alt="" />
              <p>Chat With Us</p>
            </div>
            <div className="chat-btn-1">
              <img src="/new/chat-3.svg" alt="" />
              <p>Become a Partner</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="contect-enq-waber">
                  <h2> Let's Connect With Us</h2>
            <p className="text-dark">
              Complete the two-step process and submit your requirements — our
              team will get in touch with you shortly.
            </p>

                  {/* Status Message */}
                  {statusMessage && (
                    <div 
                      className={`alert ${status === 'success' ? 'alert-success' : status === 'error' ? 'alert-danger' : 'alert-info'}`}
                      style={{
                        padding: '15px',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        animation: 'slideIn 0.3s ease-in-out'
                      }}
                    >
                      {status === 'success' && '✅ '}
                      {status === 'error' && '❌ '}
                      {status === 'loading' && '⏳ '}
                      {statusMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="row g-3 pp-0">
              {/* Full Name */}
              <div className="col-12">
                <input
                  type="text"
                  className="form-control custom-form-control"
                  name="fullName"
                  placeholder="Enter Your Full Name*"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required={true}
                        disabled={status === 'loading'}
                />
              </div>
              {/* Phone Number with Country Code */}
              <div className="col-md-6">
                <div className="input-group custom-form-control">
                  <select
                    className="form-select"
                    name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          required={true}
                          disabled={status === 'loading'}
                  >
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+49">+49</option>
                          <option value="+971">+971</option>
                  </select>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Enter Your Phone No*"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required={true}
                          disabled={status === 'loading'}
                  />
                </div>
              </div>
              {/* Email Address */}
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control custom-form-control"
                  name="email"
                  placeholder="Enter Your Email Address*"
                        value={formData.email}
                        onChange={handleInputChange}
                        required={true}
                        disabled={status === 'loading'}
                />
              </div>
              {/* Company Name */}
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control custom-form-control"
                  name="companyName"
                  placeholder="Enter Your Company Name*"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required={true}
                        disabled={status === 'loading'}
                />
              </div>
              {/* Select Any One */}
              <div className="col-md-6">
                <select
                  className="form-select custom-form-control"
                  name="selection"
                        value={formData.selection}
                        onChange={handleInputChange}
                        required={false}
                        disabled={status === 'loading'}
                >
                        <option value="" disabled>
                    Select Any One
                  </option>
                        <option value="SAP Solutions">SAP Solutions</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="Cloud Services">Cloud Services</option>
                        <option value="AI & ML">AI & ML</option>
                        <option value="Enterprise Solutions">Enterprise Solutions</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Other">Other</option>
                </select>
              </div>
              {/* Message */}
              <div className="col-12">
                <textarea
                  className="form-control custom-form-control"
                  name="message"
                  placeholder="Message"
                  rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={status === 'loading'}
                />
              </div>
                    {/* Submit Button */}
              <div className="col-12">
                <div className="ser-btn2">
                        <button 
                          type="submit"
                          className="animated-svg-link1 btn-style-3"
                          disabled={status === 'loading'}
                          style={{
                            opacity: status === 'loading' ? 0.6 : 1,
                            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                            background: 'transparent',
                            border: 'none',
                            width: '100%'
                          }}
                        >
                          {status === 'loading' ? 'Submitting...' : 'Submit'}
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
                        </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="map-waber">
    <div className="container">
      <div className="section-title">
        <h2
          className="text-anime-style-2 text-center text-dark "
          data-cursor="-opaque"
        >
          Talk to Our Experts
        </h2>
        <ul className="contres-15">
          <li> Netherlands</li>
          <li>Germany</li>
          <li>USA</li>
          <li>India</li>
          <li>UAE</li>
        </ul>
      </div>
      <div className="map-img-waber">
        <img src="/new/map.svg" alt="" />
        <div className="locat-icon location-1">
          <button
            id="myPopover"
            type="button"
            className="unstyld-btn"
            data-bs-toggle="popover"
            data-bs-placement="left"
            data-bs-content='<div class="too-con-waber">
              <h4> Netherlands</h4>
              <p>
                  Netherlands <br>
                  RheinBrücke IT Consulting BV, <br>Wim Duisenbergplantsoen 31,<br> 6221 SE Maastricht,
              </p>
              <div class="contect-call2">
                    <img src="/new/contect-call.svg" alt=""> <Link href=""> +49 231 292 95619</Link>
              </div>
              <div class="contect-call2">
                    <img src="/new/c-mail.svg" alt=""> <Link href=""> info@rheincs.com9</Link>
              </div>
          </div>'
          >
            <img src="/new/map-locat.svg" alt="" />
          </button>
        </div>
        <div className="locat-icon location-2">
          <button
            id="myPopover2"
            type="button"
            className="unstyld-btn"
            data-bs-toggle="popover"
            data-bs-placement="left"
            data-bs-content='<div class="too-con-waber">
              <h4> Netherlands</h4>
              <p>
                  Netherlands <br>
                  RheinBrücke IT Consulting BV, <br>Wim Duisenbergplantsoen 31,<br> 6221 SE Maastricht,
              </p>
              <div class="contect-call2">
                    <img src="/new/contect-call.svg" alt=""> <Link href=""> +49 231 292 95619</Link>
              </div>
              <div class="contect-call2">
                    <img src="/new/c-mail.svg" alt=""> <Link href=""> info@rheincs.com9</Link>
              </div>
          </div>'
          >
            <img src="/new/map-locat.svg" alt="" />
          </button>
        </div>
        <div className="locat-icon location-3">
          <button
            id="myPopover3"
            type="button"
            className="unstyld-btn"
            data-bs-toggle="popover"
            data-bs-placement="left"
            data-bs-content='<div class="too-con-waber">
              <h4> Netherlands</h4>
              <p>
                  Netherlands <br>
                  RheinBrücke IT Consulting BV, <br>Wim Duisenbergplantsoen 31,<br> 6221 SE Maastricht,
              </p>
              <div class="contect-call2">
                    <img src="/new/contect-call.svg" alt=""> <Link href=""> +49 231 292 95619</Link>
              </div>
              <div class="contect-call2">
                    <img src="/new/c-mail.svg" alt=""> <Link href=""> info@rheincs.com9</Link>
              </div>
          </div>'
          >
            <img src="/new/map-locat.svg" alt="" />
          </button>
        </div>
        <div className="locat-icon location-4">
          <button
            id="myPopover4"
            type="button"
            className="unstyld-btn"
            data-bs-toggle="popover"
            data-bs-placement="left"
            data-bs-content='<div class="too-con-waber">
              <h4> Netherlands</h4>
              <p>
                  Netherlands <br>
                  RheinBrücke IT Consulting BV, <br>Wim Duisenbergplantsoen 31,<br> 6221 SE Maastricht,
              </p>
              <div class="contect-call2">
                    <img src="/new/contect-call.svg" alt=""> <Link href=""> +49 231 292 95619</Link>
              </div>
              <div class="contect-call2">
                    <img src="/new/c-mail.svg" alt=""> <Link href=""> info@rheincs.com9</Link>
              </div>
          </div>'
          >
            <img src="/new/map-locat.svg" alt="" />
          </button>
        </div>
        <div className="locat-icon location-5">
          <button
            id="myPopover5"
            type="button"
            className="unstyld-btn"
            data-bs-toggle="popover"
            data-bs-placement="left"
            data-bs-content='<div class="too-con-waber">
              <h4> Netherlands</h4>
              <p>
                  Netherlands <br>
                  RheinBrücke IT Consulting BV, <br>Wim Duisenbergplantsoen 31,<br> 6221 SE Maastricht,
              </p>
              <div class="contect-call2">
                    <img src="/new/contect-call.svg" alt=""> <Link href=""> +49 231 292 95619</Link>
              </div>
              <div class="contect-call2">
                    <img src="/new/c-mail.svg" alt=""> <Link href=""> info@rheincs.com9</Link>
              </div>
          </div>'
          >
            <img src="/new/map-locat.svg" alt="" />
          </button>
        </div>
      </div>
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
                      <Link href="/contact" className="animated-svg-link">
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
                      </Link>
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

<style jsx>{`
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .alert-success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .alert-danger {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  .alert-info {
    background-color: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
  }
`}</style>
