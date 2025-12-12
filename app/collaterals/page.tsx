"use client";

import React, { useState } from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import TestimonialandAward from "../Components/TestimonialandAward";
import Awards from "../Components/Awards";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";
import { NavArrowRight } from "../icons";

export default function Collaterals() {
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
                        selection: 'Collaterals Request',
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
                // Close modal and redirect after 2 seconds
                setTimeout(() => {
                    // Close Bootstrap modal
                    const modalElement = document.getElementById('myModal');
                    if (modalElement) {
                        const modal = (window as any).bootstrap?.Modal?.getInstance(modalElement);
                        if (modal) {
                            modal.hide();
                        }
                    }
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
                {/* Hero Section Start*/}
                <div className="hero89 success-main1 systemview pdb0">
                    {/* <div class="parent2 retailparent2">
  <video src="/videos/equity.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
                    <div className="baner-img1 ssbimg">
                        <img src="/images/colletrals.jpg" alt="" />
                    </div>
                    <div className="container">
                        <div className="row section-row1 align-items-center builtsec">
                            <div className="col-sm-5">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Collaterals
                                    </h2>
                                </div>
                            </div>
                            <div className="col-sm-7"></div>
                        </div>
                    </div>
                </div>
                {/* Hero Section End*/}
                {/* Hero Section Start*/}
                <div className="hero89 success-main1 webhero mobileview pdb0">
                    {/* <div class="parent2 retailparent2">
  <video src="/videos/equity.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
                    <div className="container">
                        <div className="row section-row1 align-items-center builtsec">
                            <div className="col-sm-5">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        Collaterals
                                    </h2>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="baner-img1 ssbimg webinarimg1">
                                    <img src="/images/colletrals.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Section End*/}
                <section className="blog-main-waber newcollat">
                    <div className="container">
                        {/* <h2 class="blog-main-title"> Collaterals </h2> */}
                        <div className="row">
                            <div className="col-sm-12">
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
                                                aria-selected="true"
                                            >
                                                White Papers
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
                                            >
                                                Brochures
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="budget-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#budget"
                                                type="button"
                                                role="tab"
                                                aria-controls="budget"
                                                aria-selected="false"
                                            >
                                                Factsheets
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="collattabsec">
                                    <div className="tab-content" id="myTabContent">
                                        {/* Supplier Relationship Pane */}
                                        <div
                                            className="tab-pane fade show active"
                                            id="home"
                                            role="tabpanel"
                                            aria-labelledby="home-tab"
                                        >
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <div className="mobileview">
                                                        <div className="mobile-blog-top ">
                                                            <div className="filtermbl search-row">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search"
                                                                    className="search-input"
                                                                />
                                                                <button className="filter-btn1" id="openFilterBtn">
                                                                    <svg
                                                                        width={20}
                                                                        height={23}
                                                                        viewBox="0 0 20 23"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M2.87667 0.75H16.9383C18.1117 0.75 19.065 1.70333 19.065 2.87667V5.22333C19.065 6.085 18.5333 7.14833 18.0017 7.68L13.4183 11.7317C12.7767 12.2633 12.355 13.3267 12.355 14.1883V18.7717C12.355 19.4133 11.9333 20.2567 11.4017 20.5867L9.91667 21.5217C8.52333 22.3833 6.61667 21.4117 6.61667 19.7067V14.06C6.61667 13.3083 6.195 12.355 5.755 11.8233L1.70333 7.55167C1.17167 7.03833 0.75 6.06667 0.75 5.425V2.98667C0.75 1.70333 1.70333 0.75 2.87667 0.75Z"
                                                                            stroke="#499A9A"
                                                                            strokeWidth="1.5"
                                                                            strokeMiterlimit={10}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* Filter Content */}
                                                        <div className="mobile-filter" id="mobileFilter">
                                                            <Link href="#demo3"
                                                                data-bs-toggle="collapse"
                                                                className="arrow-toggle"
                                                                aria-expanded="true"
                                                            ></Link>
                                                            <div
                                                                id="demo3"
                                                                className="collapse content-box collapse show"
                                                            >
                                                                <div className="col-sm-12 width100">
                                                                    <h6 className="fome-filter-title">White Papers</h6>
                                                                    <div className="filter-check-box-waber">
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor ERP
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                HCM
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Iscala
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Manufacturing
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mey-fucher-tab-waber-content1">
                                                        <h4>
                                                            White Papers: Insightful Whitepapers from RheinBrücke{" "}
                                                        </h4>
                                                        <div className="bolg-filter-waber webinarbtn collatfilter brofilter">
                                                            <div className="row">
                                                                {/* Item 1: Our Solutions & Digital Services */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white1.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            Choosing the right ERP solution for your
                                                                            business
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 2: Enterprise Solutions & Digital Services */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white2.png" alt="" />
                                                                        </figure>
                                                                        <h4>Future with Manufacturing Technology</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 3: Digital Solutions */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="1 2"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white3.png" alt="" />
                                                                        </figure>
                                                                        <h4>Finding the Perfect Candidate</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 4: Our Solutions & Digital Solutions */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="3  4"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white4.png" alt="" />
                                                                        </figure>
                                                                        <h4>The Need for Speed and Accurate Data</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 5: Enterprise Solutions (Takes full width if only 5 items in col-sm-3) */}
                                                                <div className="col-sm-4 mb-4 item" data-category={2}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white5.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            Top 6 Technologies Small And Midsize
                                                                            Manufacturers Can't Afford to Ignore
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 3: Digital Solutions */}
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white6.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>ERP Guide 2023</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white7.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            ERP and Digital transfornation Outlook for 2023
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="solution popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white8.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            Four Quick Ways to Unlock Hidden Manufacturing
                                                                            Capacity
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white9.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            The Future of ERP : Predictions and Trends for
                                                                            2023
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white10.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            Choosing the Right ERP Solution to Support a
                                                                            Global Business
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white11.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            Best Practices for ERP Implementation Success
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white12.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            Time to Rethink Accounting Software and switch
                                                                            to an ERP?
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white13.png" alt="" />
                                                                        </figure>
                                                                        <h4>Transforming HR Made Easy</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white14.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>Buyer's guide to choosing the right ERP</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white15.png" alt="" />
                                                                        </figure>
                                                                        <h4>Choosing your ERP in 2024</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/white16.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            ERP-in-2025-Your-Essential-Guide-to-the-Future
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 systemview">
                                                    <form action="" method="post">
                                                        <div className="blog-serch">
                                                            <input type="text" placeholder="Search" />
                                                            <button type="submit">
                                                                <img src="/new/ser-blog.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <h6 className="fome-filter-title">White Papers</h6>
                                                    <div className="filter-check-box-waber">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor ERP
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                HCM
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Iscala
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Manufacturing
                                                            </label>
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
                                                <div className="col-sm-9">
                                                    <div className="mobileview">
                                                        <div className="mobile-blog-top ">
                                                            <div className="filtermbl search-row">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search"
                                                                    className="search-input"
                                                                />
                                                                <button className="filter-btn1" id="openFilterBtn">
                                                                    <svg
                                                                        width={20}
                                                                        height={23}
                                                                        viewBox="0 0 20 23"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M2.87667 0.75H16.9383C18.1117 0.75 19.065 1.70333 19.065 2.87667V5.22333C19.065 6.085 18.5333 7.14833 18.0017 7.68L13.4183 11.7317C12.7767 12.2633 12.355 13.3267 12.355 14.1883V18.7717C12.355 19.4133 11.9333 20.2567 11.4017 20.5867L9.91667 21.5217C8.52333 22.3833 6.61667 21.4117 6.61667 19.7067V14.06C6.61667 13.3083 6.195 12.355 5.755 11.8233L1.70333 7.55167C1.17167 7.03833 0.75 6.06667 0.75 5.425V2.98667C0.75 1.70333 1.70333 0.75 2.87667 0.75Z"
                                                                            stroke="#499A9A"
                                                                            strokeWidth="1.5"
                                                                            strokeMiterlimit={10}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* Filter Content */}
                                                        <div className="mobile-filter" id="mobileFilter">
                                                            <Link href="#demo4"
                                                                data-bs-toggle="collapse"
                                                                className="arrow-toggle"
                                                                aria-expanded="true"
                                                            ></Link>
                                                            <div
                                                                id="demo4"
                                                                className="collapse content-box collapse show"
                                                            >
                                                                <div className="col-sm-12 width100">
                                                                    <h6 className="fome-filter-title">Brochures</h6>
                                                                    <div className="filter-check-box-waber">
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Corporate Brochure
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                EPICOR
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor iScala for Hospitality
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor HCM
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor Payroll MEA
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor Copy Company Tool
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Power Plant Analytics
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor for Manufacturing
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor for EPC and Construction
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor for Automotive
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor for Distribution
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mey-fucher-tab-waber-content1">
                                                        <h4>
                                                            Brochures: Epicor Solutions for Various Industries
                                                        </h4>
                                                        <div className="bolg-filter-waber webinarbtn collatfilter brofilter">
                                                            <div className="row">
                                                                {/* Item 1: Our Solutions & Digital Services */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro1.png" alt="" />
                                                                        </figure>
                                                                        <h4>Corporate Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 2: Enterprise Solutions & Digital Services */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro2.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor ERP Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 3: Digital Solutions */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="1 2"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro3.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor for Oil and Gas Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 4: Our Solutions & Digital Solutions */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="3  4"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro4.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor Copy Company Tool Overview</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 5: Enterprise Solutions (Takes full width if only 5 items in col-sm-3) */}
                                                                <div className="col-sm-4 mb-4 item" data-category={2}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro5.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor Payroll MEA Overview</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 3: Digital Solutions */}
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro6.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor HCM Overview</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro7.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor for Manufacturing Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="solution popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro8.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor for EPC and Construction Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro9.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor for Distribution Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro10.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor for Automotive Brochure</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro11.png" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            RheinBrücke's Power Plant Analytics Brochure
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro12.png" alt="" />
                                                                        </figure>
                                                                        <h4>Epicor iScala for Hospitality Overview</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/bro13.jpg" alt="" />
                                                                        </figure>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 systemview">
                                                    <form action="" method="post">
                                                        <div className="blog-serch">
                                                            <input type="text" placeholder="Search" />
                                                            <button type="submit">
                                                                <img src="/new/ser-blog.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <h6 className="fome-filter-title">Brochures</h6>
                                                    <div className="filter-check-box-waber">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Corporate Brochure
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                EPICOR
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor iScala for Hospitality
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor HCM
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor Payroll MEA
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor Copy Company Tool
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Power Plant Analytics
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor for Manufacturing
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor for EPC and Construction
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor for Automotive
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor for Distribution
                                                            </label>
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
                                                <div className="col-sm-9">
                                                    <div className="mobileview">
                                                        <div className="mobile-blog-top ">
                                                            <div className="filtermbl search-row">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search"
                                                                    className="search-input"
                                                                />
                                                                <button className="filter-btn1" id="openFilterBtn">
                                                                    <svg
                                                                        width={20}
                                                                        height={23}
                                                                        viewBox="0 0 20 23"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M2.87667 0.75H16.9383C18.1117 0.75 19.065 1.70333 19.065 2.87667V5.22333C19.065 6.085 18.5333 7.14833 18.0017 7.68L13.4183 11.7317C12.7767 12.2633 12.355 13.3267 12.355 14.1883V18.7717C12.355 19.4133 11.9333 20.2567 11.4017 20.5867L9.91667 21.5217C8.52333 22.3833 6.61667 21.4117 6.61667 19.7067V14.06C6.61667 13.3083 6.195 12.355 5.755 11.8233L1.70333 7.55167C1.17167 7.03833 0.75 6.06667 0.75 5.425V2.98667C0.75 1.70333 1.70333 0.75 2.87667 0.75Z"
                                                                            stroke="#499A9A"
                                                                            strokeWidth="1.5"
                                                                            strokeMiterlimit={10}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {/* Filter Content */}
                                                        <div className="mobile-filter" id="mobileFilter">
                                                            <Link href="#demo5"
                                                                data-bs-toggle="collapse"
                                                                className="arrow-toggle"
                                                                aria-expanded="true"
                                                            ></Link>
                                                            <div
                                                                id="demo5"
                                                                className="collapse content-box collapse show"
                                                            >
                                                                <div className="col-sm-12 width100">
                                                                    <h6 className="fome-filter-title">Factsheets</h6>
                                                                    <div className="filter-check-box-waber">
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Epicor ERP
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                HCM
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Iscala
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                defaultValue=""
                                                                                id="flexCheckDefault"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                htmlFor="flexCheckDefault"
                                                                            >
                                                                                Manufacturing
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mey-fucher-tab-waber-content1">
                                                        <h4>
                                                            Epicor Factsheets: ERP, HCM, iScala, Manufacturing
                                                        </h4>
                                                        <div className="bolg-filter-waber webinarbtn collatfilter brofilter">
                                                            <div className="row">
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/fact1.png" alt="" />
                                                                        </figure>
                                                                        <h4>Choosing the right ERP Vendor</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 2: Enterprise Solutions & Digital Services */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="product popular"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/fact2.png" alt="" />
                                                                        </figure>
                                                                        <h4>ROI Analysis Factsheet</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 3: Digital Solutions */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="1 2"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/fact3.png" alt="" />
                                                                        </figure>
                                                                        <h4>Oilfield services Factsheet</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 4: Our Solutions & Digital Solutions */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="3  4"
                                                                >
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/fact4.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            3 Reasons why ERP software is a must for
                                                                            Financial Management
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 5: Enterprise Solutions (Takes full width if only 5 items in col-sm-3) */}
                                                                <div className="col-sm-4 mb-4 item" data-category={2}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/fact5.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>
                                                                            20 Questions to ask before you choose your cloud
                                                                            ERP
                                                                        </h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item 3: Digital Solutions */}
                                                                <div className="col-sm-4 mb-4 item" data-category={3}>
                                                                    <div className="video-gallery-image wow fadeInUp">
                                                                        <figure>
                                                                            <img src="/images/fact6.png" alt="" />
                                                                        </figure>
                                                                        <h4>Warning Signs of A Growing business</h4>
                                                                        <div className="ser-btn">
                                                                            <Link className="animated-svg-link"
                                                                                href="#!"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#myModal"
                                                                            >
                                                                                Read More
                                                                                <NavArrowRight />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 systemview">
                                                    <form action="" method="post">
                                                        <div className="blog-serch">
                                                            <input type="text" placeholder="Search blogs" />
                                                            <button type="submit">
                                                                <img src="/new/ser-blog.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <h6 className="fome-filter-title">Factsheets</h6>
                                                    <div className="filter-check-box-waber">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Epicor ERP
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                HCM
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Iscala
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Manufacturing
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="page-nate-waber">
                                        <Link href="#" className="animated-svg-link left-arrow">
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
                                        <span className="active">1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                        <span>6</span>
                                        <span>7</span>
                                        <span className="dark">...</span>
                                        <span>20</span>
                                        <Link href="#" className="animated-svg-link">
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
                    </div>
                </section>
                <div className="container">
                    <p className="lines" />
                </div>
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
                            <div className="modal collatmodal" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        {/* Modal Header */}
                                        <div className="modal-header">
                                            <h4 className="modal-title">Let’s Connect With Us</h4>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                            />
                                        </div>
                                        {/* Modal body */}
                                        <div className="modal-body">
                                            <div className="contect-enq-waber">
                                                {/* <h2> Let’s Connect With Us</h2> */}
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
                                                    <div className="col-md-12">
                                                        <div className="input-group custom-form-control">
                                                            <select
                                                                className="form-select"
                                                                name="countryCode"
                                                                value={formData.countryCode}
                                                                onChange={handleInputChange}
                                                                required={true}
                                                                disabled={status === 'loading'}
                                                            >
                                                                <option value="+93">+93</option>
                                                                <option value="+355">+355</option>
                                                                <option value="+213">+213</option>
                                                                <option value="+376">+376</option>
                                                                <option value="+244">+244</option>
                                                                <option value="+1-268">+1-268</option>
                                                                <option value="+54">+54</option>
                                                                <option value="+374">+374</option>
                                                                <option value="+61">+61</option>
                                                                <option value="+43">+43</option>
                                                                <option value="+994">+994</option>
                                                                <option value="+1-242">+1-242</option>
                                                                <option value="+973">+973</option>
                                                                <option value="+880">+880</option>
                                                                <option value="+1-246">+1-246</option>
                                                                <option value="+375">+375</option>
                                                                <option value="+32">+32</option>
                                                                <option value="+501">+501</option>
                                                                <option value="+229">+229</option>
                                                                <option value="+1-441">+1-441</option>
                                                                <option value="+975">+975</option>
                                                                <option value="+591">+591</option>
                                                                <option value="+387">+387</option>
                                                                <option value="+267">+267</option>
                                                                <option value="+55">+55</option>
                                                                <option value="+673">+673</option>
                                                                <option value="+359">+359</option>
                                                                <option value="+226">+226</option>
                                                                <option value="+257">+257</option>
                                                                <option value="+855">+855</option>
                                                                <option value="+237">+237</option>
                                                                <option value="+1">+1</option>
                                                                <option value="+238">+238</option>
                                                                <option value="+1-345">+1-345</option>
                                                                <option value="+236">+236</option>
                                                                <option value="+235">+235</option>
                                                                <option value="+56">+56</option>
                                                                <option value="+86">+86</option>
                                                                <option value="+57">+57</option>
                                                                <option value="+269">+269</option>
                                                                <option value="+242">+242</option>
                                                                <option value="+506">+506</option>
                                                                <option value="+385">+385</option>
                                                                <option value="+53">+53</option>
                                                                <option value="+357">+357</option>
                                                                <option value="+420">+420</option>
                                                                <option value="+45">+45</option>
                                                                <option value="+253">+253</option>
                                                                <option value="+1-767">+1-767</option>
                                                                <option value="+1-809">+1-809</option>
                                                                <option value="+593">+593</option>
                                                                <option value="+20">+20</option>
                                                                <option value="+503">+503</option>
                                                                <option value="+240">+240</option>
                                                                <option value="+291">+291</option>
                                                                <option value="+372">+372</option>
                                                                <option value="+251">+251</option>
                                                                <option value="+500">+500</option>
                                                                <option value="+298">+298</option>
                                                                <option value="+679">+679</option>
                                                                <option value="+358">+358</option>
                                                                <option value="+33">+33</option>
                                                                <option value="+594">+594</option>
                                                                <option value="+689">+689</option>
                                                                <option value="+241">+241</option>
                                                                <option value="+220">+220</option>
                                                                <option value="+995">+995</option>
                                                                <option value="+49">+49</option>
                                                                <option value="+233">+233</option>
                                                                <option value="+350">+350</option>
                                                                <option value="+30">+30</option>
                                                                <option value="+299">+299</option>
                                                                <option value="+1-473">+1-473</option>
                                                                <option value="+590">+590</option>
                                                                <option value="+1-671">+1-671</option>
                                                                <option value="+502">+502</option>
                                                                <option value="+224">+224</option>
                                                                <option value="+245">+245</option>
                                                                <option value="+592">+592</option>
                                                                <option value="+509">+509</option>
                                                                <option value="+504">+504</option>
                                                                <option value="+852">+852</option>
                                                                <option value="+36">+36</option>
                                                                <option value="+354">+354</option>
                                                                <option value="+91">+91</option>
                                                                <option value="+62">+62</option>
                                                                <option value="+98">+98</option>
                                                                <option value="+964">+964</option>
                                                                <option value="+353">+353</option>
                                                                <option value="+972">+972</option>
                                                                <option value="+39">+39</option>
                                                                <option value="+1-876">+1-876</option>
                                                                <option value="+81">+81</option>
                                                                <option value="+962">+962</option>
                                                                <option value="+7">+7</option>
                                                                <option value="+254">+254</option>
                                                                <option value="+686">+686</option>
                                                                <option value="+965">+965</option>
                                                                <option value="+996">+996</option>
                                                                <option value="+856">+856</option>
                                                                <option value="+371">+371</option>
                                                                <option value="+961">+961</option>
                                                                <option value="+266">+266</option>
                                                                <option value="+231">+231</option>
                                                                <option value="+218">+218</option>
                                                                <option value="+423">+423</option>
                                                                <option value="+370">+370</option>
                                                                <option value="+352">+352</option>
                                                                <option value="+853">+853</option>
                                                                <option value="+389">+389</option>
                                                                <option value="+261">+261</option>
                                                                <option value="+265">+265</option>
                                                                <option value="+60">+60</option>
                                                                <option value="+960">+960</option>
                                                                <option value="+223">+223</option>
                                                                <option value="+356">+356</option>
                                                                <option value="+692">+692</option>
                                                                <option value="+596">+596</option>
                                                                <option value="+222">+222</option>
                                                                <option value="+230">+230</option>
                                                                <option value="+52">+52</option>
                                                                <option value="+691">+691</option>
                                                                <option value="+373">+373</option>
                                                                <option value="+377">+377</option>
                                                                <option value="+976">+976</option>
                                                                <option value="+382">+382</option>
                                                                <option value="+1-664">+1-664</option>
                                                                <option value="+212">+212</option>
                                                                <option value="+258">+258</option>
                                                                <option value="+95">+95</option>
                                                                <option value="+264">+264</option>
                                                                <option value="+674">+674</option>
                                                                <option value="+977">+977</option>
                                                                <option value="+31">+31</option>
                                                                <option value="+687">+687</option>
                                                                <option value="+64">+64</option>
                                                                <option value="+505">+505</option>
                                                                <option value="+227">+227</option>
                                                                <option value="+234">+234</option>
                                                                <option value="+850">+850</option>
                                                                <option value="+47">+47</option>
                                                                <option value="+968">+968</option>
                                                                <option value="+92">+92</option>
                                                                <option value="+680">+680</option>
                                                                <option value="+970">+970</option>
                                                                <option value="+507">+507</option>
                                                                <option value="+675">+675</option>
                                                                <option value="+595">+595</option>
                                                                <option value="+51">+51</option>
                                                                <option value="+63">+63</option>
                                                                <option value="+48">+48</option>
                                                                <option value="+351">+351</option>
                                                                <option value="+1-787">+1-787</option>
                                                                <option value="+974">+974</option>
                                                                <option value="+262">+262</option>
                                                                <option value="+40">+40</option>
                                                                <option value="+7">+7</option>
                                                                <option value="+250">+250</option>
                                                                <option value="+1-869">+1-869</option>
                                                                <option value="+1-758">+1-758</option>
                                                                <option value="+1-784">+1-784</option>
                                                                <option value="+685">+685</option>
                                                                <option value="+378">+378</option>
                                                                <option value="+239">+239</option>
                                                                <option value="+966">+966</option>
                                                                <option value="+221">+221</option>
                                                                <option value="+381">+381</option>
                                                                <option value="+248">+248</option>
                                                                <option value="+232">+232</option>
                                                                <option value="+65">+65</option>
                                                                <option value="+421">+421</option>
                                                                <option value="+386">+386</option>
                                                                <option value="+677">+677</option>
                                                                <option value="+252">+252</option>
                                                                <option value="+27">+27</option>
                                                                <option value="+82">+82</option>
                                                                <option value="+211">+211</option>
                                                                <option value="+34">+34</option>
                                                                <option value="+94">+94</option>
                                                                <option value="+249">+249</option>
                                                                <option value="+597">+597</option>
                                                                <option value="+268">+268</option>
                                                                <option value="+46">+46</option>
                                                                <option value="+41">+41</option>
                                                                <option value="+963">+963</option>
                                                                <option value="+886">+886</option>
                                                                <option value="+992">+992</option>
                                                                <option value="+255">+255</option>
                                                                <option value="+66">+66</option>
                                                                <option value="+228">+228</option>
                                                                <option value="+676">+676</option>
                                                                <option value="+1-868">+1-868</option>
                                                                <option value="+216">+216</option>
                                                                <option value="+90">+90</option>
                                                                <option value="+993">+993</option>
                                                                <option value="+1-649">+1-649</option>
                                                                <option value="+688">+688</option>
                                                                <option value="+256">+256</option>
                                                                <option value="+380">+380</option>
                                                                <option value="+971">+971</option>
                                                                <option value="+44">+44</option>
                                                                <option value="+1">+1</option>
                                                                <option value="+598">+598</option>
                                                                <option value="+998">+998</option>
                                                                <option value="+678">+678</option>
                                                                <option value="+379">+379</option>
                                                                <option value="+58">+58</option>
                                                                <option value="+84">+84</option>
                                                                <option value="+1-284">+1-284</option>
                                                                <option value="+1-340">+1-340</option>
                                                                <option value="+681">+681</option>
                                                                <option value="+967">+967</option>
                                                                <option value="+260">+260</option>
                                                                <option value="+263">+263</option>
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
                                                    <div className="col-md-12">
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
                                                    <div className="col-md-12">
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
                                                    {/* Submit Button */}
                                                    <div className="col-12">
                                                        <div className="ser-btn2">
                                                            <a>
                                                                <button
                                                                    type="submit"
                                                                    className="animated-svg-link1 btn-style-3 text-white"
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
                                                            </a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
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