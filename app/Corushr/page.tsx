"use client";

import React, { useState } from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import TestimonialandAward from "../Components/TestimonialandAward";
import Awards from "../Components/Awards";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

export default function Corushr() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        countryCode: '+91',
        phone: '',
        email: '',
        companyName: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');
    const [isCountryCodeFocused, setIsCountryCodeFocused] = useState(false);

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
        setStatusMessage('Submitting your request...');

        try {
            // Validate required fields
            const { fullName, countryCode, phone, email, companyName } = formData;

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
                        selection: 'CorusHR Brochure Request',
                        message: null,
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
                setStatusMessage('Thank you! Your request has been submitted successfully. We will contact you shortly.');
                // Reset form
                setFormData({
                    fullName: '',
                    countryCode: '+91',
                    phone: '',
                    email: '',
                    companyName: ''
                });
                // Redirect to thanks page after 2 seconds
                setTimeout(() => {
                    router.push('/thanks');
                }, 2000);
            }
        } catch (error: any) {
            console.error('Form submission error:', error);
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
                <div className="hero brainsec enter retailsection corushrbanner systemview pdb0">
                    {/* <div class="parent2 retailparent2">
  <video src="/videos/equity.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
                    <div className="container">
                        <div className="row section-row1 align-items-center builtsec">
                            <div className="col-sm-5">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Revolutionizing HR Management with Smart, Scalable Solutions
                                    </h2>
                                    <p>
                                        Ready to elevate your global workforce experience with an
                                        intuitive HRMS?
                                    </p>
                                    <p>
                                        CorusHR provides powerful self-service and end-to-end HR coverage,
                                        keeping your teams supported from recruitment to retirement on any
                                        device.
                                    </p>
                                    <div className="ser-btn ">
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
                            <div className="col-sm-7"></div>
                        </div>
                    </div>
                </div>
                <div className=" retailsection1 mobileturn mobileview dnone  corushrbanner1  pdb0">
                    {/* <div class="parent2 retailparent2">
  <video src="/videos/equity.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
                    <div className="container">
                        <div className="row section-row1 align-items-center builtsec">
                            <div className="col-sm-5">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Revolutionizing HR Management with Smart, Scalable Solutions
                                    </h2>
                                    <p>
                                        Are you looking for an intuitive and streamlined Human Resource
                                        Management Solution (HRMS) designed to enhance global workforce
                                        management? CorusHR offers you an intuitive, user-friendly
                                        self-service portal for organisation-wide collaboration offering
                                        HR services, Employee Self Service and Manager Self Service. From
                                        recruitment to retirement, we have comprehensive functional
                                        coverage that is available on mobile and desktop.
                                    </p>
                                    <div className="ser-btn mt-5">
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
                            <div className="col-sm-7 mobileapproach1">
                                <img src="/images/chorus.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Testimonial Section Start */}
                <div className="our-testimonial partner corussecond pd-50">
                    <div className="container">
                        <div className="row section-row1 align-items-center">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        What Makes CorusHR Stand Out
                                    </h2>
                                    <p className="mt-5">
                                        We provide a holistic approach to streamlining and automating
                                        various aspects of Human Resource Management, that is integrated
                                        with your ERP. CorusHR addresses key challenges faced by
                                        businesses, including time-consuming manual onboarding processes,
                                        lengthy HR solution implementation timelines, complex and
                                        difficult-to-use systems, limited region-specific functionality,
                                        and poor integration with existing ERP platforms.
                                    </p>
                                    <div className="corimg mt-5">
                                        <img src="/images/makescorus.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Testimonial Section End */}
                <section className="mds-section dynamics features1 mobilefeatures pd50">
                    <div className="container">
                        <div className="content text-left">
                            <div className="section-title ">
                                <div className="hero-video-content1 wow fadeInUp mt-4">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Main Features
                                    </h2>
                                    <p>
                                        CorusHR is a complete Human Capital Management (HCM) solution that
                                        handles many aspects of talent management. Here are some of its
                                        main features:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="CorusHR-slider">
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/images/fe1.svg" alt="" />
                                            <h6> Recruitment and Onboarding</h6>
                                            <p>
                                                Make better hiring decisions through structured and
                                                configurable workflows
                                            </p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/images/fe2.svg" alt="" />
                                            <h6> Probation</h6>
                                            <p>Automated probation evaluations with workflows</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/images/fe3.svg" alt="" />
                                            <h6> Time and Attendance </h6>
                                            <p>
                                                Capture daily attendance and work times and process them to
                                                reflect in the Employee dashboard
                                            </p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/images/fe4.svg" alt="" />
                                            <h6> Performance Management</h6>
                                            <p>
                                                Inspire your team to reach their full potential, sync their
                                                efforts with company goals, and foster a thriving, positive
                                                workplace
                                            </p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            <img src="/images/fe5.svg" alt="" />
                                            <h6> Training Management</h6>
                                            <p>
                                                Ensure employees have necessary skills and knowledge to
                                                perform their jobs effectively and efficiently
                                            </p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            {/*<img src="/images/fe1.svg" alt="">*/}
                                            <svg
                                                width={79}
                                                height={79}
                                                viewBox="0 0 79 79"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.625 45.5317C16.625 46.8255 17.15 47.9974 17.9984 48.8458L6.95 59.8942C3.27344 56.2192 1 51.1411 1 45.5317C1 34.313 10.0937 25.2192 21.3125 25.2192V40.8442C18.7234 40.8442 16.625 42.9427 16.625 45.5317Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M41.625 45.5317C41.625 51.1411 39.3516 56.2192 35.675 59.8942L24.6266 48.8458C25.475 47.9974 26 46.8255 26 45.5317C26 42.9427 23.9016 40.8442 21.3125 40.8442V25.2192C32.5313 25.2192 41.625 34.313 41.625 45.5317Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M35.6742 59.8941C31.9992 63.5707 26.9211 65.8441 21.3117 65.8441C15.7023 65.8441 10.6242 63.5707 6.94922 59.8941L17.9977 48.8457C18.8461 49.6941 20.018 50.2191 21.3117 50.2191C22.6055 50.2191 23.7773 49.6941 24.6258 48.8457L35.6742 59.8941Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M21.3125 50.2188C23.9013 50.2188 26 48.1201 26 45.5312C26 42.9424 23.9013 40.8438 21.3125 40.8438C18.7237 40.8438 16.625 42.9424 16.625 45.5312C16.625 48.1201 18.7237 50.2188 21.3125 50.2188Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M21.3125 65.8438C23.0384 65.8438 24.4375 64.4446 24.4375 62.7188C24.4375 60.9929 23.0384 59.5938 21.3125 59.5938C19.5866 59.5938 18.1875 60.9929 18.1875 62.7188C18.1875 64.4446 19.5866 65.8438 21.3125 65.8438Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M77.875 77.875H49.75V76.3125C49.75 69.8405 54.9967 64.5938 61.4688 64.5938H66.1562C72.6283 64.5938 77.875 69.8405 77.875 76.3125V77.875Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M63.8125 64.5938C67.6958 64.5938 70.8438 61.4458 70.8438 57.5625C70.8438 53.6792 67.6958 50.5312 63.8125 50.5312C59.9292 50.5312 56.7812 53.6792 56.7812 57.5625C56.7812 61.4458 59.9292 64.5938 63.8125 64.5938Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M70.5312 28.3438H42.4062V26.7812C42.4062 20.3092 47.653 15.0625 54.125 15.0625H58.8125C65.2845 15.0625 70.5312 20.3092 70.5312 26.7812V28.3438Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M56.4688 15.0625C60.352 15.0625 63.5 11.9145 63.5 8.03125C63.5 4.148 60.352 1 56.4688 1C52.5855 1 49.4375 4.148 49.4375 8.03125C49.4375 11.9145 52.5855 15.0625 56.4688 15.0625Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M25.3848 43.208L32.3159 39.4055"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M44.7852 72.0938H50.5328"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M21.3125 65.8438V72.0938H30.638"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <circle cx="37.7734" cy="72.0938" r="1.5625" fill="#499A9A" />
                                                <path
                                                    d="M56.4687 28.3438V34.5938H38.4316"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <h6> Shift Roster </h6>
                                            <p>Operate 24/7 with round-the-clock business support</p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            {/*<img src="/images/fe2.svg" alt="">*/}
                                            <svg
                                                width={66}
                                                height={79}
                                                viewBox="0 0 66 79"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.4347 65.6882C7.91004 65.6882 5.05286 62.831 5.05286 59.3063V57.3399C5.05286 53.8154 7.91004 50.958 11.4347 50.958C14.9593 50.958 17.8166 53.8152 17.8166 57.3399V59.3063C17.8166 62.8308 14.9594 65.6882 11.4347 65.6882Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M19.9491 77.5625H1V76.1239C1 70.3604 5.67219 65.6882 11.4356 65.6882C15.3795 65.6882 18.8123 67.876 20.5869 71.1042"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M54.3294 65.6882C57.8541 65.6882 60.7113 62.831 60.7113 59.3063V57.3399C60.7113 53.8154 57.8541 50.958 54.3294 50.958C50.8049 50.958 47.9475 53.8152 47.9475 57.3399V59.3063C47.9475 62.8308 50.8047 65.6882 54.3294 65.6882Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M45.8177 77.5625H64.767V76.1239C64.767 70.3604 60.0948 65.6882 54.3313 65.6882C50.4046 65.6882 46.9845 67.857 45.2034 71.062"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M32.8824 62.8456C28.5142 62.8456 24.9729 59.3044 24.9729 54.9361V52.4989C24.9729 48.1306 28.5142 44.5894 32.8824 44.5894C37.2507 44.5894 40.792 48.1306 40.792 52.4989V54.9361C40.792 59.3044 37.2507 62.8456 32.8824 62.8456Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M19.9495 77.5624V75.7795C19.9495 68.6363 25.7401 62.8457 32.8832 62.8457C40.0263 62.8457 45.817 68.6363 45.817 75.7795V77.5624H19.9495Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M45.8852 19.4634L32.8822 1L19.8793 19.4634H26.506V34.4914H39.2585V19.4634H45.8852Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M20.2136 34.4914L11.4351 22.0264L2.65662 34.4914H7.13037V43.1818H15.7399V34.4914H20.2136Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M63.1082 34.4914L54.3297 22.0264L45.5511 34.4914H50.0249V43.1818H58.6344V34.4914H63.1082Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <h6> Leadership Development</h6>
                                            <p>
                                                Identify and nurture employees for leadership roles in the
                                                organisation
                                            </p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            {/*<img src="/images/fe3.svg" alt="">*/}
                                            <svg
                                                width={70}
                                                height={70}
                                                viewBox="0 0 70 70"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M69 1H1V69H69V1Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <circle
                                                    cx="8.77067"
                                                    cy="7.10612"
                                                    r="1.52653"
                                                    fill="#499A9A"
                                                />
                                                <circle
                                                    cx="15.9875"
                                                    cy="7.10612"
                                                    r="1.52653"
                                                    fill="#499A9A"
                                                />
                                                <circle cx="23.204" cy="7.10612" r="1.52653" fill="#499A9A" />
                                                <path
                                                    d="M61.2286 7.1062H35"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M15.7101 30.004C18.0094 30.004 19.8734 28.1401 19.8734 25.8408C19.8734 23.5414 18.0094 21.6775 15.7101 21.6775C13.4108 21.6775 11.5469 23.5414 11.5469 25.8408C11.5469 28.1401 13.4108 30.004 15.7101 30.004Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M15.7109 30.0039C20.0029 30.0039 23.4823 33.4833 23.4823 37.7753H7.93945C7.93945 33.4833 11.4188 30.0039 15.7109 30.0039Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M15.7101 52.7633C18.0094 52.7633 19.8734 50.8993 19.8734 48.6C19.8734 46.3007 18.0094 44.4368 15.7101 44.4368C13.4108 44.4368 11.5469 46.3007 11.5469 48.6C11.5469 50.8993 13.4108 52.7633 15.7101 52.7633Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M15.7109 52.7632C20.0029 52.7632 23.4823 56.2426 23.4823 60.5346H7.93945C7.93945 56.2426 11.4188 52.7632 15.7109 52.7632Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M37.1319 27.2605L32.1998 32.1926L29.5876 29.5805"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M37.1319 50.0195L32.1998 54.9516L29.5876 52.3396"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M69 13.2122H1"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M62.0602 21.6775H43.2378V37.7754H62.0602V21.6775Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M62.0602 44.4368H43.2378V60.5347H62.0602V44.4368Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <h6> Employee Engagement Surveys </h6>
                                            <p>
                                                Manage organisational engagement effectively through surveys
                                            </p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="mds-waber">
                                            {/*<img src="/images/fe5.svg" alt="">*/}
                                            <svg
                                                width={72}
                                                height={72}
                                                viewBox="0 0 72 72"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M25.9662 31.9799C22.5699 31.9799 19.8166 29.2265 19.8166 25.8302C19.8166 22.4337 22.5699 19.6805 25.9662 19.6805C29.3626 19.6805 32.1159 22.4337 32.1159 25.8302C32.1159 29.2265 29.3626 31.9799 25.9662 31.9799ZM39.7317 28.866C38.0981 27.1712 38.0981 24.4875 39.7317 22.7942L40.5208 21.9769C41.0687 21.4077 41.1751 20.5461 40.7806 19.862L38.541 15.9847C38.1464 15.3005 37.3474 14.9614 36.5809 15.1516L35.4782 15.4254C33.1946 15.9945 30.8698 14.6519 30.2198 12.391L29.9061 11.2981C29.689 10.5403 28.995 10.0167 28.2044 10.0167H23.7281C22.9389 10.0167 22.2449 10.5403 22.0264 11.2981L21.7127 12.391C21.0627 14.6519 18.7379 15.9945 16.4543 15.4254L15.353 15.1516C14.5866 14.9614 13.7861 15.3005 13.3915 15.9847L11.1533 19.862C10.7588 20.5461 10.8638 21.4077 11.4116 21.9769L12.2008 22.7942C13.8343 24.4875 13.8343 27.1712 12.2008 28.866L11.4116 29.6833C10.8638 30.251 10.7588 31.114 11.1533 31.7982L13.3915 35.6741C13.7861 36.3583 14.5866 36.6989 15.353 36.5072L16.4543 36.2334C18.7379 35.6657 21.0627 37.0069 21.7127 39.2691L22.0264 40.3606C22.2449 41.1198 22.9389 41.6421 23.7281 41.6421H28.2044C28.995 41.6421 29.689 41.1198 29.9061 40.3606L30.2198 39.2691C30.8698 37.0069 33.1946 35.6657 35.4782 36.2334L36.5809 36.5072C37.3474 36.6989 38.1464 36.3583 38.541 35.6741L40.7806 31.7982C41.1751 31.114 41.0687 30.251 40.5208 29.6833L39.7317 28.866Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M27.4441 54.4521L30.8492 50.4054L26.7559 46.9613"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M61.5362 40.2984C66.9856 42.9132 70.828 48.6009 70.828 54.8247C70.828 63.655 63.6696 70.8135 54.8391 70.8135C46.0087 70.8135 38.8503 63.655 38.8503 54.8247C38.8503 50.2192 40.613 46.258 43.7289 43.3406C48.2295 38.8325 50.8355 32.7912 50.8355 25.9179C50.8355 12.1563 39.6795 1.00012 25.9178 1.00012C12.156 1.00012 1 12.1563 1 25.9179C1 39.6796 12.156 50.8356 25.9178 50.8356C28.4255 50.8356 30.8499 50.4055 30.8499 50.4055"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M63.6766 54.8765C63.6766 59.7885 59.6947 63.7705 54.7827 63.7705C49.8707 63.7705 45.8887 59.7885 45.8887 54.8765C45.8887 49.9644 49.8707 45.9825 54.7827 45.9825C59.6947 45.9825 63.6766 49.9644 63.6766 54.8765Z"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M51.0059 55.3023L53.448 57.7444L58.4955 52.697"
                                                    stroke="#499A9A"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <h6>Exit Initiation &amp; Approval Process</h6>
                                            <p>
                                                Gather feedback through exit interview and identify areas for
                                                improvement and help with the final settlement
                                            </p>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                </div>
                                <div className="testimonial-btn rtyElement">
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
                                    <span className="testspace">1/6</span>
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
                        {/* Testimonial Slider End */}
                    </div>
                </section>
                {/* Hero Section Start*/}
                <div className="hero digi2 self1 mobileself">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 order2">
                                <div className="hero-bg-video buildsec">
                                    <video autoPlay={true} muted={true} loop={true} id="myVideo" height={800}>
                                        <source src="/videos/selfservice.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero-content buildsecont mblself pd50">
                                    <div className="section-title">
                                        <div className="hero-video-content wow fadeInUp mt-4">
                                            <h2
                                                className="text-anime-style-2 text-dark"
                                                data-cursor="-opaque"
                                            >
                                                Employee Self-Service
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-sm-6 col-6">
                                            <div className="challenge-point-waber self-service">
                                                <img src="/images/ss1.svg" alt="" />
                                                <p>Employee Information Management</p>
                                            </div>
                                            <div className="challenge-point-waber self-service">
                                                <img src="/images/ss2.svg" alt="" />
                                                <p>Travel Requests</p>
                                            </div>
                                            <div className="challenge-point-waber self-service">
                                                <img src="/images/ss3.svg" alt="" />
                                                <p>Leave Management</p>
                                            </div>
                                            <div className="challenge-point-waber self-service">
                                                <img src="/images/ss4.svg" alt="" />
                                                <p>Timesheets &amp; Attendance</p>
                                            </div>
                                            <div className="challenge-point-waber self-service">
                                                <img src="/images/ss5.svg" alt="" />
                                                <p>Miscellaneous Reimbursement Request</p>
                                            </div>
                                            <div className="challenge-point-waber self-service">
                                                <img src="/images/ss6.svg" alt="" />
                                                <p>Grievances Management</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-6">
                                            <div className="challenge-point-waber self-service">
                                                <img src="/images/ss7.svg" alt="" />
                                                <p>Training &amp; Development</p>
                                            </div>
                                            <div className="challenge-point-waber self-service">
                                                <img src="/images/ss8.svg" alt="" />
                                                <p>Performance Management</p>
                                            </div>
                                            <div className="challenge-point-waber self-service">
                                                <img src="/images/ss9.svg" alt="" />
                                                <p>Work Permit Process</p>
                                            </div>
                                            <div className="challenge-point-waber self-service">
                                                <img src="/images/ss10.svg" alt="" />
                                                <p>Loan Management</p>
                                            </div>
                                            <div className="challenge-point-waber self-service">
                                                <img src="/images/ss11.svg" alt="" />
                                                <p>User Dashboard</p>
                                            </div>
                                            <div className="challenge-point-waber self-service">
                                                <img src="/images/ss12.svg" alt="" />
                                                <p>Approval &amp; Delegation Process</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section End*/}
                <div className="advantage additional1 mobileaddit pd-50">
                    <div className="container">
                        <div className="row section-row1 align-items-center">
                            <div className="col-sm-12">
                                <div className="section-title text-center text-black">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Additional Features of CorusHR
                                    </h2>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="service-item-body1 light-bg-1 imgadd w80">
                                            <h3>Seamless Integration</h3>
                                            <p>
                                                The seamless integration of CorusHR with Epicor ERP ensures
                                                that these two systems operate together in real-time, enabling
                                                effective communication, and functioning as a unified platform
                                                without any disruptions or complications.
                                            </p>
                                            <img src="/images/af1.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="service-item-body1 light-bg-1 imgadd1 w80 systemview">
                                            <h3>Configurable</h3>
                                            <p>
                                                The solution is adaptable, quick to respond, and highly
                                                configurable, aimed at improving operational efficiencies. It
                                                facilitates streamlined HR operations, improves efficiency by
                                                eliminating paper and email trails with digital workflows and
                                                enhances user satisfaction.
                                            </p>
                                            <p>
                                                The solution is adaptable, quick to respond, and highly
                                                customisable, aimed at improving operational efficiencies. It
                                                facilitates streamlined HR operations, improves efficiency by
                                                eliminating paper and email trails with digital workflows and
                                                enhances user satisfaction.
                                            </p>
                                            <img src="/images/af2.svg" alt="" />
                                        </div>
                                        <div className="service-item-body1 light-bg-1 imgadd1 mobileimgadd mobileview w80">
                                            <h3>Configurable</h3>
                                            <p>
                                                The solution is adaptable, quick to respond, and highly
                                                configurable, aimed at improving operational efficiencies. It
                                                facilitates streamlined HR operations, improves efficiency by
                                                eliminating paper and email trails with digital workflows and
                                                enhances user satisfaction.
                                            </p>
                                            <p>
                                                The solution is adaptable, quick to respond, and highly
                                                customisable, aimed at improving operational efficiencies. It
                                                facilitates streamlined HR operations, improves efficiency by
                                                eliminating paper and email trails with digital workflows and
                                                enhances user satisfaction.
                                            </p>
                                            <img src="/images/corusim.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="service-item-body1 light-bg-1 imgadd">
                                            <h3>Reporting and Analytics</h3>
                                            <p>
                                                Get insights on regular and overtime hours, transaction,
                                                performance assessment, requirements fulfilment, and exit
                                                process enabling informed decision-making and planning.
                                            </p>
                                            <img src="/images/af3.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="service-item-body1 light-bg-1 imgadd2">
                                            <h3>Mobile Accessibility</h3>
                                            <p>
                                                With our solution, employees can stay connected around the
                                                clock through a user-friendly mobile application, ensuring
                                                seamless access to vital information and better collaboration.
                                            </p>
                                            <div className="text-center">
                                                <img src="/images/af4.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="service-item-body1 light-bg-1 imgadd">
                                            <h3>Effective Data Management</h3>
                                            <p>
                                                Updating and retrieval of employee data, including personal
                                                information, employment history, performance evaluations, and
                                                benefits enrolment, reducing data loss and errors and improved
                                                data integrity.
                                            </p>
                                            <img src="/images/af5.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section Start*/}
                <div className="hero brainsec routes benefitssec corusolsec systemview">
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
                                        <source src="/videos/benefits.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                {/* Section Title Start */}
                                <div className="section-title corusolution">
                                    {/* <h3 class="wow fadeInUp">key benefits</h3> */}
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Benefits
                                    </h2>
                                    <p className="posrelative">
                                        CorusHR provides a comprehensive solution for talent management
                                        for employees, managers and HR department. With CorusHR, you can
                                        enjoy:
                                    </p>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-lg-6 col-md-6">
                                        {/* Benefits Steps Item Start */}
                                        <div className="benefits-steps-item wow fadeInUp">
                                            <div className="icon-box">
                                                <img src="/images/be1.svg" alt="" />
                                            </div>
                                            <div className="benefits-steps-content">
                                                <h3>Easy Implementation</h3>
                                                <p>Designed for seamless deployment</p>
                                            </div>
                                        </div>
                                        {/* Benefits Steps Item End */}
                                        {/* Benefits Steps Item Start */}
                                        <div
                                            className="benefits-steps-item wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <div className="icon-box">
                                                <img src="/images/be2.svg" alt="" />
                                            </div>
                                            <div className="benefits-steps-content">
                                                <h3>Easy Usage</h3>
                                                <p>Intuitive, user-friendly interface</p>
                                            </div>
                                        </div>
                                        {/* Benefits Steps Item End */}
                                        {/* Benefits Steps Item Start */}
                                        <div
                                            className="benefits-steps-item wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <div className="icon-box">
                                                <img src="/images/be3.svg" alt="" />
                                            </div>
                                            <div className="benefits-steps-content">
                                                <h3>Seamless Integration</h3>
                                                <p>Out-of-the-box Epicor integration</p>
                                            </div>
                                        </div>
                                        {/* Benefits Steps Item End */}
                                        {/* Benefits Steps Item Start */}
                                        <div
                                            className="benefits-steps-item wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <div className="icon-box">
                                                <img src="/images/be4.svg" alt="" />
                                            </div>
                                            <div className="benefits-steps-content">
                                                <h3>Mobile Interface</h3>
                                                <p>Access anytime, anywhere</p>
                                            </div>
                                        </div>
                                        {/* Benefits Steps Item End */}
                                    </div>
                                    <div className="col-lg-6 col-md-6 ">
                                        {/* Benefits Steps Item Start */}
                                        <div
                                            className="benefits-steps-item wow fadeInUp"
                                            data-wow-delay="0.2s"
                                        >
                                            <div className="icon-box">
                                                <img src="/images/be5.svg" alt="" />
                                            </div>
                                            <div className="benefits-steps-content">
                                                <h3>Rich Functionalities</h3>
                                                <p>Complete Hire to Retire features</p>
                                            </div>
                                        </div>
                                        {/* Benefits Steps Item End */}
                                        {/* Benefits Steps Item Start */}
                                        <div
                                            className="benefits-steps-item wow fadeInUp"
                                            data-wow-delay="0.6s"
                                        >
                                            <div className="icon-box">
                                                <img src="/images/be6.svg" alt="" />
                                            </div>
                                            <div className="benefits-steps-content">
                                                <h3>Comprehensive Reporting</h3>
                                                <p>Robust reporting capabilities</p>
                                            </div>
                                        </div>
                                        {/* Benefits Steps Item End */}
                                        {/* Benefits Steps Item Start */}
                                        <div
                                            className="benefits-steps-item wow fadeInUp"
                                            data-wow-delay="0.6s"
                                        >
                                            <div className="icon-box">
                                                <img src="/images/be7.svg" alt="" />
                                            </div>
                                            <div className="benefits-steps-content">
                                                <h3>Multisite Capabilities</h3>
                                                <p>Manage multiple locations</p>
                                            </div>
                                        </div>
                                        {/* Benefits Steps Item End */}
                                        {/* Benefits Steps Item Start */}
                                        <div
                                            className="benefits-steps-item wow fadeInUp"
                                            data-wow-delay="0.6s"
                                        >
                                            <div className="icon-box">
                                                <img src="/images/be8.svg" alt="" />
                                            </div>
                                            <div className="benefits-steps-content">
                                                <h3>Configurable Setup &amp; Fluid Workflows</h3>
                                                <p>Flexible configurations and workflows</p>
                                            </div>
                                        </div>
                                        {/* Benefits Steps Item End */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Testimonial Section Start */}
                <div className="our-testimonial partner pd-50">
                    <div className="container">
                        <div className="row section-row align-items-center">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Customers
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* Agency Support Start */}
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
                {/* Hero Section Start*/}
                <div className=" bluebg brouchure">
                    <div className="container">
                        <div className="row section-row align-items-center builtsec">
                            <div className="col-sm-6">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Download Our Brochure
                                    </h2>
                                    <p>
                                        Download Our Brochure now to know more about our CorusHR Solution!
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

                                    <form onSubmit={handleSubmit}>
                                        <div className="w100">
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
                                        <div className="w100">
                                            <div className="phone-input">
                                                <div className="country-code codeSelect" style={{ position: 'relative' }}>
                                                    <select
                                                        className="form-select"
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
                                                    <span className="arrow">
                                                        <i className="fa fa-angle-down" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="number"
                                                    name="phone"
                                                    placeholder="Enter Your Phone Number*"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required={true}
                                                    disabled={status === 'loading'}
                                                />
                                            </div>
                                        </div>
                                        <div className="w100">
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
                                        <div className="w100">
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
                                        <div className="ser-btn mt-3">
                                            <a>
                                                <button
                                                    type="submit"
                                                    className="animated-svg-link"
                                                    disabled={status === 'loading'}
                                                    style={{
                                                        opacity: status === 'loading' ? 0.6 : 1,
                                                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                                                        background: 'transparent',
                                                        border: 'none',
                                                        width: '100%',
                                                        textAlign: 'left',
                                                        padding: 0
                                                    }}
                                                >
                                                    {status === 'loading' ? 'Submitting...' : 'Submit'}
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
                                                </button>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="parentban mtt50">
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 886 754"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="442.75"
                                            cy="444.75"
                                            r={252}
                                            fill="url(#paint0_linear_1699_17987)"
                                        />
                                        <ellipse
                                            opacity="0.6"
                                            cx="442.75"
                                            cy="442.25"
                                            rx={295}
                                            ry="294.5"
                                            stroke="url(#paint1_linear_1699_17987)"
                                            strokeWidth="1.5"
                                        />
                                        <ellipse
                                            opacity="0.3"
                                            cx="442.75"
                                            cy="442.25"
                                            rx={345}
                                            ry="344.5"
                                            stroke="url(#paint2_linear_1699_17987)"
                                            strokeWidth="1.5"
                                        />
                                        <ellipse
                                            opacity="0.2"
                                            cx="442.75"
                                            cy="442.25"
                                            rx={392}
                                            ry="392.5"
                                            stroke="url(#paint3_linear_1699_17987)"
                                            strokeWidth="1.5"
                                        />
                                        <circle
                                            opacity="0.1"
                                            cx="442.75"
                                            cy="442.75"
                                            r={442}
                                            stroke="url(#paint4_linear_1699_17987)"
                                            strokeWidth="1.5"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_1699_17987"
                                                x1="442.75"
                                                y1="192.75"
                                                x2="442.75"
                                                y2="696.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#008080" />
                                                <stop offset="0.67478" stopColor="#082326" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint1_linear_1699_17987"
                                                x1="442.75"
                                                y1="147.75"
                                                x2="442.75"
                                                y2="736.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint2_linear_1699_17987"
                                                x1="442.75"
                                                y1="97.75"
                                                x2="442.75"
                                                y2="786.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint3_linear_1699_17987"
                                                x1="442.75"
                                                y1="49.75"
                                                x2="442.75"
                                                y2="834.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint4_linear_1699_17987"
                                                x1="442.75"
                                                y1="0.75"
                                                x2="442.75"
                                                y2="884.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <img src="/images/broch.png" width={379} height={542} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section End*/}
                <TestimonialandAward />

                <Awards />
                {/* Footer Start */}
                <footer className="main-footer pd0">
                    {/* Footer Main Start */}
                    <div className="footer-main">
                        <div className="container">
                            <div className="firstrow">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <h2>
                                            Ready to accelerate value creation <br /> across your portfolio?
                                        </h2>
                                        <p>
                                            Contact us today to learn how we can help modernise operations,
                                            de-risk integrations, and improve commercial outcomes.
                                        </p>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="ser-btn text-right">
                                            <Link href="#" className="animated-svg-link">
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