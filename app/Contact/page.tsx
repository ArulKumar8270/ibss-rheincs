"use client";

import React, { useState } from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
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
      // Validate required fields
      const { fullName, countryCode, phone, email, companyName, selection, message } = formData;

      if (!fullName || !phone || !email || !companyName) {
        setStatus('error');
        setStatusMessage('Please fill in all required fields.');
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setStatus('error');
        setStatusMessage('Please enter a valid email address.');
        return;
      }

      // Use client-side Supabase call
      const supabase = createClient();
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            full_name: fullName,
            country_code: countryCode || '+91',
            phone: phone,
            email: email,
            company_name: companyName,
            selection: selection || null,
            message: message || null,
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        let errorMessage = 'Failed to submit form. Please try again.';
        if (error.code === '42P01') {
          errorMessage = 'Database table not found. Please contact support.';
        } else if (error.code === '42501') {
          errorMessage = 'Permission denied. Please contact support.';
        } else if (error.message) {
          errorMessage = `Error: ${error.message}`;
        }
        setStatus('error');
        setStatusMessage(errorMessage);
      } else {
        setStatus('success');
        setStatusMessage('Thank you! Your inquiry has been submitted successfully. We will contact you shortly.');
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
        router.push('/thanks');
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 5000);
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      setStatus('error');
      setStatusMessage(error.message || 'An error occurred. Please try again.');
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
                  <Link href="https://outlook.office365.com/book/RheinBruckeITConsulting@rheincs.com/?ismsaljsauthenabled=true" target="_blank" className="chat-btn-1">
                    <img src="/new/chat-3.svg" alt="" />
                    <p>Book a Meeting</p>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contect-enq-waber">
                  <h2> Let's Connect With Us</h2>
                  <p className="text-dark">
                  Submit your details and our team will get in touch with you shortly.
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
                          <option value="+93">+93 (Afghanistan)</option>
                          <option value="+355">+355 (Albania)</option>
                          <option value="+213">+213 (Algeria)</option>
                          <option value="+376">+376 (Andorra)</option>
                          <option value="+244">+244 (Angola)</option>
                          <option value="+1-268">+1-268 (Antigua and Barbuda)</option>
                          <option value="+54">+54 (Argentina)</option>
                          <option value="+374">+374 (Armenia)</option>
                          <option value="+61">+61 (Australia)</option>
                          <option value="+43">+43 (Austria)</option>
                          <option value="+994">+994 (Azerbaijan)</option>
                          <option value="+1-242">+1-242 (Bahamas)</option>
                          <option value="+973">+973 (Bahrain)</option>
                          <option value="+880">+880 (Bangladesh)</option>
                          <option value="+1-246">+1-246 (Barbados)</option>
                          <option value="+375">+375 (Belarus)</option>
                          <option value="+32">+32 (Belgium)</option>
                          <option value="+501">+501 (Belize)</option>
                          <option value="+229">+229 (Benin)</option>
                          <option value="+1-441">+1-441 (Bermuda)</option>
                          <option value="+975">+975 (Bhutan)</option>
                          <option value="+591">+591 (Bolivia)</option>
                          <option value="+387">+387 (Bosnia and Herzegovina)</option>
                          <option value="+267">+267 (Botswana)</option>
                          <option value="+55">+55 (Brazil)</option>
                          <option value="+673">+673 (Brunei)</option>
                          <option value="+359">+359 (Bulgaria)</option>
                          <option value="+226">+226 (Burkina Faso)</option>
                          <option value="+257">+257 (Burundi)</option>
                          <option value="+855">+855 (Cambodia)</option>
                          <option value="+237">+237 (Cameroon)</option>
                          <option value="+1">+1 (Canada)</option>
                          <option value="+238">+238 (Cape Verde)</option>
                          <option value="+1-345">+1-345 (Cayman Islands)</option>
                          <option value="+236">+236 (Central African Republic)</option>
                          <option value="+235">+235 (Chad)</option>
                          <option value="+56">+56 (Chile)</option>
                          <option value="+86">+86 (China)</option>
                          <option value="+57">+57 (Colombia)</option>
                          <option value="+269">+269 (Comoros)</option>
                          <option value="+242">+242 (Congo)</option>
                          <option value="+506">+506 (Costa Rica)</option>
                          <option value="+385">+385 (Croatia)</option>
                          <option value="+53">+53 (Cuba)</option>
                          <option value="+357">+357 (Cyprus)</option>
                          <option value="+420">+420 (Czech Republic)</option>
                          <option value="+45">+45 (Denmark)</option>
                          <option value="+253">+253 (Djibouti)</option>
                          <option value="+1-767">+1-767 (Dominica)</option>
                          <option value="+1-809">+1-809 (Dominican Republic)</option>
                          <option value="+593">+593 (Ecuador)</option>
                          <option value="+20">+20 (Egypt)</option>
                          <option value="+503">+503 (El Salvador)</option>
                          <option value="+240">+240 (Equatorial Guinea)</option>
                          <option value="+291">+291 (Eritrea)</option>
                          <option value="+372">+372 (Estonia)</option>
                          <option value="+251">+251 (Ethiopia)</option>
                          <option value="+500">+500 (Falkland Islands)</option>
                          <option value="+298">+298 (Faroe Islands)</option>
                          <option value="+679">+679 (Fiji)</option>
                          <option value="+358">+358 (Finland)</option>
                          <option value="+33">+33 (France)</option>
                          <option value="+594">+594 (French Guiana)</option>
                          <option value="+689">+689 (French Polynesia)</option>
                          <option value="+241">+241 (Gabon)</option>
                          <option value="+220">+220 (Gambia)</option>
                          <option value="+995">+995 (Georgia)</option>
                          <option value="+49">+49 (Germany)</option>
                          <option value="+233">+233 (Ghana)</option>
                          <option value="+350">+350 (Gibraltar)</option>
                          <option value="+30">+30 (Greece)</option>
                          <option value="+299">+299 (Greenland)</option>
                          <option value="+1-473">+1-473 (Grenada)</option>
                          <option value="+590">+590 (Guadeloupe)</option>
                          <option value="+1-671">+1-671 (Guam)</option>
                          <option value="+502">+502 (Guatemala)</option>
                          <option value="+224">+224 (Guinea)</option>
                          <option value="+245">+245 (Guinea-Bissau)</option>
                          <option value="+592">+592 (Guyana)</option>
                          <option value="+509">+509 (Haiti)</option>
                          <option value="+504">+504 (Honduras)</option>
                          <option value="+852">+852 (Hong Kong)</option>
                          <option value="+36">+36 (Hungary)</option>
                          <option value="+354">+354 (Iceland)</option>
                          <option value="+91">+91 (India)</option>
                          <option value="+62">+62 (Indonesia)</option>
                          <option value="+98">+98 (Iran)</option>
                          <option value="+964">+964 (Iraq)</option>
                          <option value="+353">+353 (Ireland)</option>
                          <option value="+972">+972 (Israel)</option>
                          <option value="+39">+39 (Italy)</option>
                          <option value="+1-876">+1-876 (Jamaica)</option>
                          <option value="+81">+81 (Japan)</option>
                          <option value="+962">+962 (Jordan)</option>
                          <option value="+7">+7 (Kazakhstan)</option>
                          <option value="+254">+254 (Kenya)</option>
                          <option value="+686">+686 (Kiribati)</option>
                          <option value="+965">+965 (Kuwait)</option>
                          <option value="+996">+996 (Kyrgyzstan)</option>
                          <option value="+856">+856 (Laos)</option>
                          <option value="+371">+371 (Latvia)</option>
                          <option value="+961">+961 (Lebanon)</option>
                          <option value="+266">+266 (Lesotho)</option>
                          <option value="+231">+231 (Liberia)</option>
                          <option value="+218">+218 (Libya)</option>
                          <option value="+423">+423 (Liechtenstein)</option>
                          <option value="+370">+370 (Lithuania)</option>
                          <option value="+352">+352 (Luxembourg)</option>
                          <option value="+853">+853 (Macau)</option>
                          <option value="+389">+389 (Macedonia)</option>
                          <option value="+261">+261 (Madagascar)</option>
                          <option value="+265">+265 (Malawi)</option>
                          <option value="+60">+60 (Malaysia)</option>
                          <option value="+960">+960 (Maldives)</option>
                          <option value="+223">+223 (Mali)</option>
                          <option value="+356">+356 (Malta)</option>
                          <option value="+692">+692 (Marshall Islands)</option>
                          <option value="+596">+596 (Martinique)</option>
                          <option value="+222">+222 (Mauritania)</option>
                          <option value="+230">+230 (Mauritius)</option>
                          <option value="+52">+52 (Mexico)</option>
                          <option value="+691">+691 (Micronesia)</option>
                          <option value="+373">+373 (Moldova)</option>
                          <option value="+377">+377 (Monaco)</option>
                          <option value="+976">+976 (Mongolia)</option>
                          <option value="+382">+382 (Montenegro)</option>
                          <option value="+1-664">+1-664 (Montserrat)</option>
                          <option value="+212">+212 (Morocco)</option>
                          <option value="+258">+258 (Mozambique)</option>
                          <option value="+95">+95 (Myanmar)</option>
                          <option value="+264">+264 (Namibia)</option>
                          <option value="+674">+674 (Nauru)</option>
                          <option value="+977">+977 (Nepal)</option>
                          <option value="+31">+31 (Netherlands)</option>
                          <option value="+687">+687 (New Caledonia)</option>
                          <option value="+64">+64 (New Zealand)</option>
                          <option value="+505">+505 (Nicaragua)</option>
                          <option value="+227">+227 (Niger)</option>
                          <option value="+234">+234 (Nigeria)</option>
                          <option value="+850">+850 (North Korea)</option>
                          <option value="+47">+47 (Norway)</option>
                          <option value="+968">+968 (Oman)</option>
                          <option value="+92">+92 (Pakistan)</option>
                          <option value="+680">+680 (Palau)</option>
                          <option value="+970">+970 (Palestine)</option>
                          <option value="+507">+507 (Panama)</option>
                          <option value="+675">+675 (Papua New Guinea)</option>
                          <option value="+595">+595 (Paraguay)</option>
                          <option value="+51">+51 (Peru)</option>
                          <option value="+63">+63 (Philippines)</option>
                          <option value="+48">+48 (Poland)</option>
                          <option value="+351">+351 (Portugal)</option>
                          <option value="+1-787">+1-787 (Puerto Rico)</option>
                          <option value="+974">+974 (Qatar)</option>
                          <option value="+262">+262 (Réunion)</option>
                          <option value="+40">+40 (Romania)</option>
                          <option value="+7">+7 (Russia)</option>
                          <option value="+250">+250 (Rwanda)</option>
                          <option value="+1-869">+1-869 (Saint Kitts and Nevis)</option>
                          <option value="+1-758">+1-758 (Saint Lucia)</option>
                          <option value="+1-784">+1-784 (Saint Vincent)</option>
                          <option value="+685">+685 (Samoa)</option>
                          <option value="+378">+378 (San Marino)</option>
                          <option value="+239">+239 (São Tomé and Príncipe)</option>
                          <option value="+966">+966 (Saudi Arabia)</option>
                          <option value="+221">+221 (Senegal)</option>
                          <option value="+381">+381 (Serbia)</option>
                          <option value="+248">+248 (Seychelles)</option>
                          <option value="+232">+232 (Sierra Leone)</option>
                          <option value="+65">+65 (Singapore)</option>
                          <option value="+421">+421 (Slovakia)</option>
                          <option value="+386">+386 (Slovenia)</option>
                          <option value="+677">+677 (Solomon Islands)</option>
                          <option value="+252">+252 (Somalia)</option>
                          <option value="+27">+27 (South Africa)</option>
                          <option value="+82">+82 (South Korea)</option>
                          <option value="+211">+211 (South Sudan)</option>
                          <option value="+34">+34 (Spain)</option>
                          <option value="+94">+94 (Sri Lanka)</option>
                          <option value="+249">+249 (Sudan)</option>
                          <option value="+597">+597 (Suriname)</option>
                          <option value="+268">+268 (Swaziland)</option>
                          <option value="+46">+46 (Sweden)</option>
                          <option value="+41">+41 (Switzerland)</option>
                          <option value="+963">+963 (Syria)</option>
                          <option value="+886">+886 (Taiwan)</option>
                          <option value="+992">+992 (Tajikistan)</option>
                          <option value="+255">+255 (Tanzania)</option>
                          <option value="+66">+66 (Thailand)</option>
                          <option value="+228">+228 (Togo)</option>
                          <option value="+676">+676 (Tonga)</option>
                          <option value="+1-868">+1-868 (Trinidad and Tobago)</option>
                          <option value="+216">+216 (Tunisia)</option>
                          <option value="+90">+90 (Turkey)</option>
                          <option value="+993">+993 (Turkmenistan)</option>
                          <option value="+1-649">+1-649 (Turks and Caicos)</option>
                          <option value="+688">+688 (Tuvalu)</option>
                          <option value="+256">+256 (Uganda)</option>
                          <option value="+380">+380 (Ukraine)</option>
                          <option value="+971">+971 (United Arab Emirates)</option>
                          <option value="+44">+44 (United Kingdom)</option>
                          <option value="+1">+1 (United States)</option>
                          <option value="+598">+598 (Uruguay)</option>
                          <option value="+998">+998 (Uzbekistan)</option>
                          <option value="+678">+678 (Vanuatu)</option>
                          <option value="+379">+379 (Vatican City)</option>
                          <option value="+58">+58 (Venezuela)</option>
                          <option value="+84">+84 (Vietnam)</option>
                          <option value="+1-284">+1-284 (Virgin Islands, British)</option>
                          <option value="+1-340">+1-340 (Virgin Islands, US)</option>
                          <option value="+681">+681 (Wallis and Futuna)</option>
                          <option value="+967">+967 (Yemen)</option>
                          <option value="+260">+260 (Zambia)</option>
                          <option value="+263">+263 (Zimbabwe)</option>
                        </select>
                        <input
                          type="number"
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
                      <div className="ser-btn2 contactsub">
                        <a><button
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
                        </button></a>
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
                <li>KSA</li>
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
                      <h4>USA</h4>
                      <p>
                          RheinBrücke IT Consulting,<br>
3815 Chippenham Road,<br>
Mechanicsburg,<br>
PA 17050, United States<br>
                      </p>
                      <div class="contect-call2">
                            <img src="/new/contect-call.svg" alt=""> <Link href=""> +1 717 265 3937</Link>
                      </div>
                      <div class="contect-call2">
                            <img src="/new/c-mail.svg" alt=""> <Link href=""> info@rheincs.com</Link>
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
              <h4> Germany</h4>
              <p>
                  RheinBrücke IT Consulting GmbH <br>
                  44139 Dortmund,
Ruhrallee 9,<br>
Germany<br>
              </p>
              <div class="contect-call2">
                    <img src="/new/contect-call.svg" alt=""> <Link href=""> +49 231 292 95619</Link>
              </div>
              <div class="contect-call2">
                    <img src="/new/c-mail.svg" alt=""> <Link href=""> info@rheincs.com</Link>
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
              <h4>UAE- Office 1</h4>
                      <p>
                          RheinBrücke IT Consulting EMEA FZE<br>
                          2-234-235 – Techno Hub 2,<br> 
                          P.O Box : 342060<br>
                          Dubai Silicon Oasis, Dubai<br>
                          United Arab Emirates<br>
                      </p>
                      <div class="contect-call2">
                            <img src="/new/contect-call.svg" alt=""> <Link href=""> +971 43 330 366</Link>
                      </div>
                      <div class="contect-call2">
                            <img src="/new/c-mail.svg" alt=""> <Link href=""> info@rheincs.com</Link>
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
              <h4> India</h4>
              <p>
                  RheinBrücke IT Consulting Pvt Ltd <br>
                  Bharati Vilas, 1st Floor,<br>
                  26B Jawaharlal Nehru Salai,<br>
                  Ekkatuthangal, Guindy Industrial Estate,<br>
                  Chennai,<br>
                  Tamil Nadu, India 600 032<br>
              </p>
              <div class="contect-call2">
                    <img src="/new/contect-call.svg" alt=""> <Link href=""> +91 44 6671 7555</Link>
              </div>
              <div class="contect-call2">
                    <img src="/new/c-mail.svg" alt=""> <Link href="">info@rheincs.com</Link>
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
