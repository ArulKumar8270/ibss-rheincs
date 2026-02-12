"use client";

import React, { useState, useEffect } from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";
import {useTranslation} from "../hooks/useTranslation";

// Mapping of country codes (ISO 3166-1 alpha-2) to phone codes
// Maps to exact values in the select dropdown
const countryToPhoneCode: Record<string, string> = {
  'AF': '+93', 'AL': '+355', 'DZ': '+213', 'AD': '+376', 'AO': '+244',
  'AG': '+1-268', 'AR': '+54', 'AM': '+374', 'AU': '+61', 'AT': '+43',
  'AZ': '+994', 'BS': '+1-242', 'BH': '+973', 'BD': '+880', 'BB': '+1-246',
  'BY': '+375', 'BE': '+32', 'BZ': '+501', 'BJ': '+229', 'BM': '+1-441',
  'BT': '+975', 'BO': '+591', 'BA': '+387', 'BW': '+267', 'BR': '+55',
  'BN': '+673', 'BG': '+359', 'BF': '+226', 'BI': '+257', 'KH': '+855',
  'CM': '+237', 'CA': '+1', 'CV': '+238', 'KY': '+1-345', 'CF': '+236',
  'TD': '+235', 'CL': '+56', 'CN': '+86', 'CO': '+57', 'KM': '+269',
  'CG': '+242', 'CR': '+506', 'HR': '+385', 'CU': '+53', 'CY': '+357',
  'CZ': '+420', 'DK': '+45', 'DJ': '+253', 'DM': '+1-767', 'DO': '+1-809',
  'EC': '+593', 'EG': '+20', 'SV': '+503', 'GQ': '+240', 'ER': '+291',
  'EE': '+372', 'ET': '+251', 'FK': '+500', 'FO': '+298', 'FJ': '+679',
  'FI': '+358', 'FR': '+33', 'GF': '+594', 'PF': '+689', 'GA': '+241',
  'GM': '+220', 'GE': '+995', 'DE': '+49', 'GH': '+233', 'GI': '+350',
  'GR': '+30', 'GL': '+299', 'GD': '+1-473', 'GP': '+590', 'GU': '+1-671',
  'GT': '+502', 'GN': '+224', 'GW': '+245', 'GY': '+592', 'HT': '+509',
  'HN': '+504', 'HK': '+852', 'HU': '+36', 'IS': '+354', 'IN': '+91',
  'ID': '+62', 'IR': '+98', 'IQ': '+964', 'IE': '+353', 'IL': '+972',
  'IT': '+39', 'JM': '+1-876', 'JP': '+81', 'JO': '+962', 'KZ': '+7',
  'KE': '+254', 'KI': '+686', 'KW': '+965', 'KG': '+996', 'LA': '+856',
  'LV': '+371', 'LB': '+961', 'LS': '+266', 'LR': '+231', 'LY': '+218',
  'LI': '+423', 'LT': '+370', 'LU': '+352', 'MO': '+853', 'MK': '+389',
  'MG': '+261', 'MW': '+265', 'MY': '+60', 'MV': '+960', 'ML': '+223',
  'MT': '+356', 'MH': '+692', 'MQ': '+596', 'MR': '+222', 'MU': '+230',
  'MX': '+52', 'FM': '+691', 'MD': '+373', 'MC': '+377', 'MN': '+976',
  'ME': '+382', 'MS': '+1-664', 'MA': '+212', 'MZ': '+258', 'MM': '+95',
  'NA': '+264', 'NR': '+674', 'NP': '+977', 'NL': '+31', 'NC': '+687',
  'NZ': '+64', 'NI': '+505', 'NE': '+227', 'NG': '+234', 'KP': '+850',
  'NO': '+47', 'OM': '+968', 'PK': '+92', 'PW': '+680', 'PS': '+970',
  'PA': '+507', 'PG': '+675', 'PY': '+595', 'PE': '+51', 'PH': '+63',
  'PL': '+48', 'PT': '+351', 'PR': '+1-787', 'QA': '+974', 'RE': '+262',
  'RO': '+40', 'RU': '+7', 'RW': '+250', 'KN': '+1-869', 'LC': '+1-758',
  'VC': '+1-784', 'WS': '+685', 'SM': '+378', 'ST': '+239', 'SA': '+966',
  'SN': '+221', 'RS': '+381', 'SC': '+248', 'SL': '+232', 'SG': '+65',
  'SK': '+421', 'SI': '+386', 'SB': '+677', 'SO': '+252', 'ZA': '+27',
  'KR': '+82', 'SS': '+211', 'ES': '+34', 'LK': '+94', 'SD': '+249',
  'SR': '+597', 'SZ': '+268', 'SE': '+46', 'CH': '+41', 'SY': '+963',
  'TW': '+886', 'TJ': '+992', 'TZ': '+255', 'TH': '+66', 'TL': '+670',
  'TG': '+228', 'TO': '+676', 'TT': '+1-868', 'TN': '+216', 'TR': '+90',
  'TM': '+993', 'TC': '+1-649', 'TV': '+688', 'UG': '+256', 'UA': '+380',
  'AE': '+971', 'GB': '+44', 'US': '+1', 'UY': '+598', 'UZ': '+998',
  'VU': '+678', 'VA': '+379', 'VE': '+58', 'VN': '+84', 'VG': '+1-284',
  'VI': '+1-340', 'WF': '+681', 'YE': '+967', 'ZM': '+260', 'ZW': '+263'
};

export default function Contact() {
  const { t, language } = useTranslation();
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
  const [isCountryCodeFocused, setIsCountryCodeFocused] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Auto-detect country code based on user's location
  useEffect(() => {
    const detectCountryCode = async () => {
      try {
        // Try to get country from IP geolocation using ipapi.co
        const response = await fetch('https://ipapi.co/json/', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          const countryCode = data.country_code;
          
          if (countryCode && countryToPhoneCode[countryCode]) {
            const phoneCode = countryToPhoneCode[countryCode];
            setFormData(prev => ({
              ...prev,
              countryCode: phoneCode
            }));
          }
        }
      } catch (error) {
        // Fallback: Try alternative geolocation service
        try {
          const fallbackResponse = await fetch('https://ip-api.com/json/?fields=countryCode', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          });

          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            const countryCode = fallbackData.countryCode;
            
            if (countryCode && countryToPhoneCode[countryCode]) {
              const phoneCode = countryToPhoneCode[countryCode];
              setFormData(prev => ({
                ...prev,
                countryCode: phoneCode
              }));
            }
          }
        } catch (fallbackError) {
          // Silently fail - keep default country code (+91)
          console.log('Could not detect country, using default');
        }
      }
    };

    detectCountryCode();
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          return 'Name is required';
        }
        if (value.trim().length < 2) {
          return 'Name must be at least 2 characters';
        }
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          return 'Name can only contain letters, spaces, hyphens, and apostrophes';
        }
        return '';
      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address';
        }
        return '';
      case 'phone':
        if (!value.trim()) {
          return 'Phone number is required';
        }
        const phoneDigits = value.replace(/\D/g, '');
        if (phoneDigits.length < 7) {
          return 'Phone number must be at least 7 digits';
        }
        if (phoneDigits.length > 15) {
          return 'Phone number is too long';
        }
        return '';
      case 'companyName':
        if (!value.trim()) {
          return 'Company name is required';
        }
        if (value.trim().length < 2) {
          return 'Company name must be at least 2 characters';
        }
        return '';
      case 'message':
        if (value.length > 5000) {
          return 'Message must be less than 5000 characters';
        }
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // For phone, only allow digits, spaces, hyphens, and parentheses
    if (name === 'phone') {
      const phoneValue = value.replace(/[^\d\s\-()]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: phoneValue
      }));
      // Validate after change
      if (touched[name]) {
        const error = validateField(name, phoneValue);
        setErrors(prev => ({
          ...prev,
          [name]: error
        }));
      }
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Handle opening LiveChat widget
  const handleOpenLiveChat = () => {
    try {
      // Check if LiveChat widget is available
      if (typeof window !== 'undefined' && (window as any).LiveChatWidget) {
        const LiveChatWidget = (window as any).LiveChatWidget;
        
        // Try to maximize/open the chat widget
        if (LiveChatWidget.call) {
          LiveChatWidget.call('maximize');
        } else if (LiveChatWidget.get) {
          // Alternative method if call doesn't work
          LiveChatWidget.get('state', (state: any) => {
            if (state && state.visibility && state.visibility.hidden) {
              LiveChatWidget.call('maximize');
            }
          });
        }
      } else {
        // If widget is not loaded yet, wait a bit and try again
        setTimeout(() => {
          if ((window as any).LiveChatWidget && (window as any).LiveChatWidget.call) {
            (window as any).LiveChatWidget.call('maximize');
          }
        }, 500);
      }
    } catch (error) {
      console.error('Error opening LiveChat:', error);
      // Fallback: open LiveChat in a new window
      window.open('https://www.livechat.com/chat-with/14850255/', '_blank');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all required fields as touched
    const allTouched = {
      fullName: true,
      email: true,
      phone: true,
      companyName: true,
    };
    setTouched(allTouched);

    // Validate all fields
    const validationErrors: Record<string, string> = {};
    validationErrors.fullName = validateField('fullName', formData.fullName);
    validationErrors.email = validateField('email', formData.email);
    validationErrors.phone = validateField('phone', formData.phone);
    validationErrors.companyName = validateField('companyName', formData.companyName);

    if (formData.message) {
      validationErrors.message = validateField('message', formData.message);
    }

    setErrors(validationErrors);

    // Check if there are any errors
    const hasErrors = Object.values(validationErrors).some(error => error !== '');
    if (hasErrors) {
      setStatus('error');
      setStatusMessage('Please fix the errors in the form before submitting.');
      return;
    }

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
        // Send emails via Supabase Edge Function (SendGrid)
        try {
          const supabase = createClient();
          const { data: emailResult, error: emailError } = await supabase.functions.invoke('send-contact-email', {
            body: {
              channel: 'contact',
              fullName,
              email,
              phone,
              countryCode: countryCode || '+91',
              companyName,
              selection: selection || null,
              message: message || null,
            },
          });

          if (emailError) {
            console.warn('Email sending failed:', emailError.message);
            // Still show success since form was saved to database
          } else if (emailResult && !emailResult.success) {
            console.warn('Email sending failed:', emailResult.error);
            // Still show success since form was saved to database
          }
        } catch (emailError: any) {
          console.error('Email sending error:', emailError);
          // Still show success since form was saved to database
        }

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
        setErrors({});
        setTouched({});
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
                    className="text-anime-style-21 text-white "
                    data-cursor="-opaque"
                  >
                    {t("Talk to Our Experts")}
                  </h2>
                  <p className="">
                    {" "}
                        {t("Thank you for your interest in RheinBrücke. Please contact us by either visiting our office at the locations provided or write to us for more information on how RheinBrücke can help you stay ahead of competition. For additional information on our IT consulting services, solutions or industry expertise, please visit the relevant pages on our website.")}
                  </p>
                </div>
                <div className="contect-call">
                  <Link href="tel:+49 231 292 95619"> <img src="/new/contect-call.svg" alt="" />
                   +49 231 292 95619</Link>
                </div>
                <div className="contect-call">
                  <Link href="mailto:info@rheincs.com"><img src="/new/c-mail.svg" alt="" />  info@rheincs.com</Link>
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
                  <li>
                    <Link href="https://www.youtube.com/@rheinbruckeitconsulting" target="_blank">
                      <i className="fa-brands fa-youtube" />
                    </Link>
                  </li>
                </div>
                <div className="chat-main-waber">
                  <div 
                    className="chat-btn-1" 
                    onClick={handleOpenLiveChat}
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleOpenLiveChat();
                      }
                    }}
                  >
                    <img src="/new/chat-btn.svg" alt="" />
                    <p>{t("Chat With Us")}</p>
                  </div>
                  <Link href="https://outlook.office365.com/book/RheinBruckeITConsulting@rheincs.com/?ismsaljsauthenabled=true" target="_blank" className="chat-btn-1">
                    <img src="/new/chat-3.svg" alt="" />
                    <p>{t("Book a Meeting")}</p>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contect-enq-waber">
                  <h2> {t("Let's Connect With Us")}</h2>
                  <p className="text-dark">
                    {t("Submit your details and our team will get in touch with you shortly.")}
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
                        className={`form-control custom-form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
                        name="fullName"
                        placeholder={t("Enter your full name")}
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required={true}
                        disabled={status === 'loading'}
                      />
                      {touched.fullName && errors.fullName && (
                        <div className="invalid-feedback" style={{ display: 'block', color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                          {errors.fullName}
                        </div>
                      )}
                    </div>
                    {/* Phone Number with Country Code */}
                    <div className="col-md-6">
                      <div className="input-group custom-form-control">
                        <div className="country-code-select">
                        <select
                            className="form-select country-code-select"
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                            onFocus={() => setIsCountryCodeFocused(true)}
                            onBlur={() => setIsCountryCodeFocused(false)}
                          required={true}
                          disabled={status === 'loading'}
                            style={{
                              appearance: 'none',
                              paddingRight: '35px',
                              color: 'transparent'
                            }}
                        >
                          <option value="+93">Afghanistan (+93)</option>
                          <option value="+355">Albania (+355)</option>
                          <option value="+213">Algeria (+213)</option>
                          <option value="+376">Andorra (+376)</option>
                          <option value="+244">Angola (+244)</option>
                          <option value="+1-268">Antigua and Barbuda (+1-268)</option>
                          <option value="+54">Argentina (+54)</option>
                          <option value="+374">Armenia (+374)</option>
                          <option value="+61">Australia (+61)</option>
                          <option value="+43">Austria (+43)</option>
                          <option value="+994">Azerbaijan (+994)</option>
                          <option value="+1-242">Bahamas (+1-242)</option>
                          <option value="+973">Bahrain (+973)</option>
                          <option value="+880">Bangladesh (+880)</option>
                          <option value="+1-246">Barbados (+1-246)</option>
                          <option value="+375">Belarus (+375)</option>
                          <option value="+32">Belgium (+32)</option>
                          <option value="+501">Belize (+501)</option>
                          <option value="+229">Benin (+229)</option>
                          <option value="+1-441">Bermuda (+1-441)</option>
                          <option value="+975">Bhutan (+975)</option>
                          <option value="+591">Bolivia (+591)</option>
                          <option value="+387">Bosnia and Herzegovina (+387)</option>
                          <option value="+267">Botswana (+267)</option>
                          <option value="+55">Brazil (+55)</option>
                          <option value="+673">Brunei (+673)</option>
                          <option value="+359">Bulgaria (+359)</option>
                          <option value="+226">Burkina Faso (+226)</option>
                          <option value="+257">Burundi (+257)</option>
                          <option value="+855">Cambodia (+855)</option>
                          <option value="+237">Cameroon (+237)</option>
                          <option value="+1">Canada/USA (+1)</option>
                          <option value="+238">Cape Verde (+238)</option>
                          <option value="+1-345">Cayman Islands (+1-345)</option>
                          <option value="+236">Central African Republic (+236)</option>
                          <option value="+235">Chad (+235)</option>
                          <option value="+56">Chile (+56)</option>
                          <option value="+86">China (+86)</option>
                          <option value="+57">Colombia (+57)</option>
                          <option value="+269">Comoros (+269)</option>
                          <option value="+242">Congo (+242)</option>
                          <option value="+506">Costa Rica (+506)</option>
                          <option value="+385">Croatia (+385)</option>
                          <option value="+53">Cuba (+53)</option>
                          <option value="+357">Cyprus (+357)</option>
                          <option value="+420">Czech Republic (+420)</option>
                          <option value="+45">Denmark (+45)</option>
                          <option value="+253">Djibouti (+253)</option>
                          <option value="+1-767">Dominica (+1-767)</option>
                          <option value="+1-809">Dominican Republic (+1-809)</option>
                          <option value="+593">Ecuador (+593)</option>
                          <option value="+20">Egypt (+20)</option>
                          <option value="+503">El Salvador (+503)</option>
                          <option value="+240">Equatorial Guinea (+240)</option>
                          <option value="+291">Eritrea (+291)</option>
                          <option value="+372">Estonia (+372)</option>
                          <option value="+251">Ethiopia (+251)</option>
                          <option value="+500">Falkland Islands (+500)</option>
                          <option value="+298">Faroe Islands (+298)</option>
                          <option value="+679">Fiji (+679)</option>
                          <option value="+358">Finland (+358)</option>
                          <option value="+33">France (+33)</option>
                          <option value="+594">French Guiana (+594)</option>
                          <option value="+689">French Polynesia (+689)</option>
                          <option value="+241">Gabon (+241)</option>
                          <option value="+220">Gambia (+220)</option>
                          <option value="+995">Georgia (+995)</option>
                          <option value="+49">Germany (+49)</option>
                          <option value="+233">Ghana (+233)</option>
                          <option value="+350">Gibraltar (+350)</option>
                          <option value="+30">Greece (+30)</option>
                          <option value="+299">Greenland (+299)</option>
                          <option value="+1-473">Grenada (+1-473)</option>
                          <option value="+590">Guadeloupe (+590)</option>
                          <option value="+1-671">Guam (+1-671)</option>
                          <option value="+502">Guatemala (+502)</option>
                          <option value="+224">Guinea (+224)</option>
                          <option value="+245">Guinea-Bissau (+245)</option>
                          <option value="+592">Guyana (+592)</option>
                          <option value="+509">Haiti (+509)</option>
                          <option value="+504">Honduras (+504)</option>
                          <option value="+852">Hong Kong (+852)</option>
                          <option value="+36">Hungary (+36)</option>
                          <option value="+354">Iceland (+354)</option>
                          <option value="+91">India (+91)</option>
                          <option value="+62">Indonesia (+62)</option>
                          <option value="+98">Iran (+98)</option>
                          <option value="+964">Iraq (+964)</option>
                          <option value="+353">Ireland (+353)</option>
                          <option value="+972">Israel (+972)</option>
                          <option value="+39">Italy (+39)</option>
                          <option value="+1-876">Jamaica (+1-876)</option>
                          <option value="+81">Japan (+81)</option>
                          <option value="+962">Jordan (+962)</option>
                          <option value="+7">Kazakhstan (+7)</option>
                          <option value="+254">Kenya (+254)</option>
                          <option value="+686">Kiribati (+686)</option>
                          <option value="+965">Kuwait (+965)</option>
                          <option value="+996">Kyrgyzstan (+996)</option>
                          <option value="+856">Laos (+856)</option>
                          <option value="+371">Latvia (+371)</option>
                          <option value="+961">Lebanon (+961)</option>
                          <option value="+266">Lesotho (+266)</option>
                          <option value="+231">Liberia (+231)</option>
                          <option value="+218">Libya (+218)</option>
                          <option value="+423">Liechtenstein (+423)</option>
                          <option value="+370">Lithuania (+370)</option>
                          <option value="+352">Luxembourg (+352)</option>
                          <option value="+853">Macau (+853)</option>
                          <option value="+389">North Macedonia (+389)</option>
                          <option value="+261">Madagascar (+261)</option>
                          <option value="+265">Malawi (+265)</option>
                          <option value="+60">Malaysia (+60)</option>
                          <option value="+960">Maldives (+960)</option>
                          <option value="+223">Mali (+223)</option>
                          <option value="+356">Malta (+356)</option>
                          <option value="+692">Marshall Islands (+692)</option>
                          <option value="+596">Martinique (+596)</option>
                          <option value="+222">Mauritania (+222)</option>
                          <option value="+230">Mauritius (+230)</option>
                          <option value="+52">Mexico (+52)</option>
                          <option value="+691">Micronesia (+691)</option>
                          <option value="+373">Moldova (+373)</option>
                          <option value="+377">Monaco (+377)</option>
                          <option value="+976">Mongolia (+976)</option>
                          <option value="+382">Montenegro (+382)</option>
                          <option value="+1-664">Montserrat (+1-664)</option>
                          <option value="+212">Morocco (+212)</option>
                          <option value="+258">Mozambique (+258)</option>
                          <option value="+95">Myanmar (+95)</option>
                          <option value="+264">Namibia (+264)</option>
                          <option value="+674">Nauru (+674)</option>
                          <option value="+977">Nepal (+977)</option>
                          <option value="+31">Netherlands (+31)</option>
                          <option value="+687">New Caledonia (+687)</option>
                          <option value="+64">New Zealand (+64)</option>
                          <option value="+505">Nicaragua (+505)</option>
                          <option value="+227">Niger (+227)</option>
                          <option value="+234">Nigeria (+234)</option>
                          <option value="+850">North Korea (+850)</option>
                          <option value="+47">Norway (+47)</option>
                          <option value="+968">Oman (+968)</option>
                          <option value="+92">Pakistan (+92)</option>
                          <option value="+680">Palau (+680)</option>
                          <option value="+970">Palestine (+970)</option>
                          <option value="+507">Panama (+507)</option>
                          <option value="+675">Papua New Guinea (+675)</option>
                          <option value="+595">Paraguay (+595)</option>
                          <option value="+51">Peru (+51)</option>
                          <option value="+63">Philippines (+63)</option>
                          <option value="+48">Poland (+48)</option>
                          <option value="+351">Portugal (+351)</option>
                          <option value="+1-787">Puerto Rico (+1-787)</option>
                          <option value="+974">Qatar (+974)</option>
                          <option value="+262">Réunion (+262)</option>
                          <option value="+40">Romania (+40)</option>
                          <option value="+7">Russia (+7)</option>
                          <option value="+250">Rwanda (+250)</option>
                          <option value="+1-869">Saint Kitts and Nevis (+1-869)</option>
                          <option value="+1-758">Saint Lucia (+1-758)</option>
                          <option value="+1-784">Saint Vincent (+1-784)</option>
                          <option value="+685">Samoa (+685)</option>
                          <option value="+378">San Marino (+378)</option>
                          <option value="+239">São Tomé and Príncipe (+239)</option>
                          <option value="+966">Saudi Arabia (+966)</option>
                          <option value="+221">Senegal (+221)</option>
                          <option value="+381">Serbia (+381)</option>
                          <option value="+248">Seychelles (+248)</option>
                          <option value="+232">Sierra Leone (+232)</option>
                          <option value="+65">Singapore (+65)</option>
                          <option value="+421">Slovakia (+421)</option>
                          <option value="+386">Slovenia (+386)</option>
                          <option value="+677">Solomon Islands (+677)</option>
                          <option value="+252">Somalia (+252)</option>
                          <option value="+27">South Africa (+27)</option>
                          <option value="+82">South Korea (+82)</option>
                          <option value="+211">South Sudan (+211)</option>
                          <option value="+34">Spain (+34)</option>
                          <option value="+94">Sri Lanka (+94)</option>
                          <option value="+249">Sudan (+249)</option>
                          <option value="+597">Suriname (+597)</option>
                          <option value="+268">Eswatini (+268)</option>
                          <option value="+46">Sweden (+46)</option>
                          <option value="+41">Switzerland (+41)</option>
                          <option value="+963">Syria (+963)</option>
                          <option value="+886">Taiwan (+886)</option>
                          <option value="+992">Tajikistan (+992)</option>
                          <option value="+255">Tanzania (+255)</option>
                          <option value="+66">Thailand (+66)</option>
                          <option value="+228">Togo (+228)</option>
                          <option value="+676">Tonga (+676)</option>
                          <option value="+1-868">Trinidad and Tobago (+1-868)</option>
                          <option value="+216">Tunisia (+216)</option>
                          <option value="+90">Turkey (+90)</option>
                          <option value="+993">Turkmenistan (+993)</option>
                          <option value="+1-649">Turks and Caicos (+1-649)</option>
                          <option value="+688">Tuvalu (+688)</option>
                          <option value="+256">Uganda (+256)</option>
                          <option value="+380">Ukraine (+380)</option>
                          <option value="+971">United Arab Emirates (+971)</option>
                          <option value="+44">United Kingdom (+44)</option>
                          <option value="+1">United States (+1)</option>
                          <option value="+598">Uruguay (+598)</option>
                          <option value="+998">Uzbekistan (+998)</option>
                          <option value="+678">Vanuatu (+678)</option>
                          <option value="+379">Vatican City (+379)</option>
                          <option value="+58">Venezuela (+58)</option>
                          <option value="+84">Vietnam (+84)</option>
                          <option value="+1-284">British Virgin Islands (+1-284)</option>
                          <option value="+1-340">US Virgin Islands (+1-340)</option>
                          <option value="+681">Wallis and Futuna (+681)</option>
                          <option value="+967">Yemen (+967)</option>
                          <option value="+260">Zambia (+260)</option>
                          <option value="+263">Zimbabwe (+263)</option>
                        </select>
                        {!isCountryCodeFocused && (
                          <div 
                            className="country-code-display"
                            style={{
                              position: 'absolute',
                              left: '12px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              pointerEvents: 'none',
                              color: '#333',
                              fontWeight: '500',
                              zIndex: 1,
                              backgroundColor: 'transparent'
                            }}
                          >
                            {formData.countryCode}
                          </div>
                        )}
                        <div style={{
                          position: 'absolute',
                          right: '12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none',
                          zIndex: 1
                        }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L1 4H11L6 9Z" fill="#666"/>
                          </svg>
                        </div>
                        </div>
                        <input
                          type="tel"
                          className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                          name="phone"
                          placeholder={t("Enter your phone number")}
                          value={formData.phone}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          onKeyDown={(e) => {
                            // Prevent minus, plus, and 'e' keys (scientific notation)
                            if (e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E') {
                              e.preventDefault();
                            }
                          }}
                          min="0"
                          required={true}
                          disabled={status === 'loading'}
                        />
                      </div>
                      {touched.phone && errors.phone && (
                        <div className="invalid-feedback" style={{ display: 'block', color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                          {errors.phone}
                        </div>
                      )}
                    </div>
                    {/* Email Address */}
                    <div className="col-md-6">
                      <input
                        type="email"
                        className={`form-control custom-form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                        name="email"
                        placeholder={t("Enter your email address")}
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required={true}
                        disabled={status === 'loading'}
                      />
                      {touched.email && errors.email && (
                        <div className="invalid-feedback" style={{ display: 'block', color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                          {errors.email}
                        </div>
                      )}
                    </div>
                    {/* Company Name */}
                    <div className="col-md-6">
                      <input
                        type="text"
                        className={`form-control custom-form-control ${touched.companyName && errors.companyName ? 'is-invalid' : ''}`}
                        name="companyName"
                        placeholder={t("Enter your company name")}
                        value={formData.companyName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required={true}
                        disabled={status === 'loading'}
                      />
                      {touched.companyName && errors.companyName && (
                        <div className="invalid-feedback" style={{ display: 'block', color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                          {errors.companyName}
                        </div>
                      )}
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
                          {t("Select Any One")}
                        </option>
                        <option value="SAP Solutions">{t("SAP Solution")}</option>
                        <option value="Digital Transformation">{t("Digital transformation")}</option>
                        <option value="Cloud Services">{t("Cloud services")}</option>
                        <option value="AI & ML">{t("AI / ML")}</option>
                        <option value="Enterprise Solutions">{t("Enterprise solution")}</option>
                        <option value="Consulting">{t("Consulting")}</option>
                        <option value="Other">{t("Other")}</option>
                      </select>
                    </div>
                    {/* Message */}
                    <div className="col-12">
                      <textarea
                        className={`form-control custom-form-control ${touched.message && errors.message ? 'is-invalid' : ''}`}
                        name="message"
                        placeholder={t("Message")}
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        maxLength={5000}
                        disabled={status === 'loading'}
                      />
                      {touched.message && errors.message && (
                        <div className="invalid-feedback" style={{ display: 'block', color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                          {errors.message}
                        </div>
                      )}
                      <small className="text-muted">
                        {formData.message.length}/5000 characters
                      </small>
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
                          {status === 'loading' ? t('Submitting...') : t('Submit')}
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
                {t("Talk to Our Experts")}
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
                            <img src="/new/contect-call.svg" alt=""> <a href="tel:+4923129295619"> +49 231 292 95619</a>
                      </div>
                      <div class="contect-call2">
                            <img src="/new/c-mail.svg" alt=""> <a href="mailto:info@rheincs.com"> info@rheincs.com</a>
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
                            <img src="/new/contect-call.svg" alt=""> <a href="tel:+17172653937"> +1 717 265 3937</a>
                      </div>
                      <div class="contect-call2">
                            <img src="/new/c-mail.svg" alt=""> <a href="mailto:info@rheincs.com"> info@rheincs.com</a>
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
                    <img src="/new/contect-call.svg" alt=""> <a href="tel:+4923129295619"> +49 231 292 95619</a>
              </div>
              <div class="contect-call2">
                    <img src="/new/c-mail.svg" alt=""> <a href="mailto:info@rheincs.com"> info@rheincs.com</a>
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
                            <img src="/new/contect-call.svg" alt=""> <a href="tel:+97143330366"> +971 43 330 366</a>
                      </div>
                      <div class="contect-call2">
                            <img src="/new/c-mail.svg" alt=""> <a href="mailto:info@rheincs.com"> info@rheincs.com</a>
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
                    <img src="/new/contect-call.svg" alt=""> <a href="tel:+914466717555"> +91 44 6671 7555</a>
              </div>
              <div class="contect-call2">
                    <img src="/new/c-mail.svg" alt=""> <a href="mailto:info@rheincs.com">info@rheincs.com</a>
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
                    <h2>{t("Ready to accelerate value creation across your portfolio?")}</h2>
                    <p>
                      {t("Contact us today to learn how we can help modernise operations, de-risk integrations, and improve commercial outcomes.")}
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <div className="ser-btn text-right">
                      <Link href="/contact" className="animated-svg-link">
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
