"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavArrowLeft, NavArrowRight } from "../icons";

export default function Header() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState('tab1');
    const [epicorCollapsed, setEpicorCollapsed] = useState(false);
    const [digitalSolutionsCollapsed, setDigitalSolutionsCollapsed] = useState(false);
    const [digitalServicesCollapsed, setDigitalServicesCollapsed] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Get the current page name (e.g., 'leadership' from '/leadership')
    const currentPage = pathname.split('/').pop() || 'index';

    // Define lists of pages for each Main Menu (without .php extension for Next.js)
    // Pages under "About Us"
    const aboutPages = [
        'overview',
        'leadership',
        'customer-speak',
        'success-stories',
        'careers'
    ];

    // Pages under "Solutions & Services"
    const solutionsPages = [
        'corushr',
        'MeRLIN',
        'enterprise-solutions',
        'epicor',
        'epicor-kinetic',
        'Epicore-kinetic',
        'epicor-iscala',
        'Epicore-iscala',
        'epicor-companion',
        'Epicore-companion',
        'epicor-epicpay',
        'Epicore-epicpay',
        'SAP',
        'microsoft-dynamics-solutions',
        'sugar-CRM',
        'ERP-customer-excellence',
        'digital-solutions',
        'digital-solutions-services',
        'business-intelligence',
        'AI-ML',
        'ecommerce',
        'Architecture',
        'data-engineering-warehousing',
        'AM-S',
        'user-exprience',
        'commercetools',
        'fluent-commerce',
        'ms-technology',
        'digital-services'
    ];

    // Pages under "Industries"
    const industryPages = [
        'vertical-retail',
        'industries-retail',
        'supply-chain',
        'discrete-manufacturing',
        'automotive',
        'epc',
        'process-manufacturing',
        'private-quity',
        'cable-manufacturing',
        'interior-design'
    ];

    // Pages under "Resources"
    const resourcePages = [
        'blog',
        'case-study-details',
        'webinars',
        'collaterals',
        'corporate-videos',
        'news-events',
        'faq'
    ];

    // Helper function to check if current page is in a page array
    const isPageInArray = (pageArray) => {
        // Normalize current page (remove leading slash, handle empty)
        const normalizedPage = currentPage.toLowerCase();
        return pageArray.some(page => page.toLowerCase() === normalizedPage);
    };

    // Initialize mega menu on mount and route change
    useEffect(() => {
        console.log('🔄 [Header] Initializing mega-menu for pathname:', pathname);
        
        // Ensure first tab is active by default
        const initializeTabs = () => {
            document.querySelectorAll(".mega-menu-content").forEach((menu) => {
                const tabs = menu.querySelectorAll(".tab-link");
                const contents = menu.querySelectorAll(".tab-content");

                if (tabs.length && contents.length) {
                    // Set first tab as active if none are active
                    const hasActive = Array.from(tabs).some(tab => tab.classList.contains('active'));
                    if (!hasActive && tabs[0]) {
                        tabs[0].classList.add('active');
                        const firstTabId = tabs[0].getAttribute('data-tab');
                        if (firstTabId) {
                            const firstContent = menu.querySelector(`#${firstTabId}`);
                            if (firstContent) {
                                firstContent.classList.add('active');
                            }
                        }
                    }
                    
                    tabs.forEach((tab) => {
                        // Only add listener if it doesn't have React onClick
                        if (!tab.getAttribute('data-react-handled')) {
                            tab.addEventListener("click", function (e) {
                                e.preventDefault();
                                e.stopPropagation();

                                const allTabs = menu.querySelectorAll(".tab-link");
                                const allContents = menu.querySelectorAll(".tab-content");

                                allTabs.forEach((t) => t.classList.remove("active"));
                                allContents.forEach((c) => c.classList.remove("active"));

                                tab.classList.add("active");
                                const targetId = tab.getAttribute("data-tab");
                                if (targetId) {
                                    setActiveTab(targetId);
                                    const target = menu.querySelector(`#${targetId}`);
                                    if (target) {
                                        target.classList.add("active");
                                    }
                                }
                            });
                        }
                    });
                }
            });
        };

        // Ensure mega-menu hover works properly
        const ensureMegaMenuHover = () => {
            const megaMenus = document.querySelectorAll('.mega-menu');
            megaMenus.forEach(menu => {
                // Add explicit hover class for better control
                menu.addEventListener('mouseenter', function() {
                    this.classList.add('is-hovered');
                });
                menu.addEventListener('mouseleave', function() {
                    this.classList.remove('is-hovered');
                });
            });
        };

        // Small delay to ensure DOM is ready
        const timeoutId = setTimeout(() => {
            initializeTabs();
            ensureMegaMenuHover();
            console.log('✅ [Header] Mega-menu initialized successfully');
        }, 100);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [pathname]);

    // Handle sticky header on scroll
    useEffect(() => {
        let lastScrollTop = 0;
        const scrollThreshold = 100; // Pixels to scroll before adding sticky class

        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add sticky class when scrolled down past threshold
            if (currentScrollTop > scrollThreshold) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
            
            lastScrollTop = currentScrollTop;
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Check initial scroll position
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // All searchable pages with their titles and keywords
    const allPages = [
        // About Us
        { url: '/overview', title: 'Overview', keywords: 'about company overview ibb information business solutions' },
        { url: '/leadership', title: 'Leadership', keywords: 'leadership team management executives directors' },
        { url: '/customer-speak', title: 'Customer Speak', keywords: 'customer testimonials reviews feedback clients' },
        { url: '/success-stories', title: 'Success Stories', keywords: 'case studies success stories achievements results' },
        { url: '/careers', title: 'Careers', keywords: 'careers jobs opportunities employment work' },
        
        // Solutions & Services
        { url: '/corushr', title: 'CorusHR', keywords: 'corus hr human resources management' },
        { url: '/MeRLIN', title: 'MeRLIN', keywords: 'merlin solution platform' },
        { url: '/enterprise-solutions', title: 'Enterprise Solutions', keywords: 'enterprise solutions erp business' },
        { url: '/epicor', title: 'Epicor', keywords: 'epicor erp enterprise resource planning' },
        { url: '/epicor-kinetic', title: 'Epicor Kinetic', keywords: 'epicor kinetic erp cloud' },
        { url: '/epicor-iscala', title: 'Epicor iScala', keywords: 'epicor iscala erp' },
        { url: '/epicor-companion', title: 'Epicor Companion', keywords: 'epicor companion mobile' },
        { url: '/epicor-epicpay', title: 'Epicor EpicPay', keywords: 'epicor epicpay payment' },
        { url: '/SAP', title: 'SAP', keywords: 'sap erp enterprise' },
        { url: '/microsoft-dynamics-solutions', title: 'Microsoft Dynamics Solutions', keywords: 'microsoft dynamics erp crm' },
        { url: '/sugar-CRM', title: 'Sugar CRM', keywords: 'sugar crm customer relationship management' },
        { url: '/ERP-customer-excellence', title: 'ERP Customer Excellence', keywords: 'erp customer excellence service' },
        { url: '/digital-solutions', title: 'Digital Solutions', keywords: 'digital solutions technology innovation' },
        { url: '/digital-solutions-services', title: 'Digital Solutions Services', keywords: 'digital services technology solutions' },
        { url: '/business-intelligence', title: 'Business Intelligence', keywords: 'business intelligence analytics data bi' },
        { url: '/AI-ML', title: 'AI & ML', keywords: 'artificial intelligence machine learning ai ml' },
        { url: '/ecommerce', title: 'E-Commerce', keywords: 'ecommerce online store retail digital commerce' },
        { url: '/Architecture', title: 'Architecture', keywords: 'architecture design system' },
        { url: '/data-engineering-warehousing', title: 'Data Engineering & Warehousing', keywords: 'data engineering warehousing etl' },
        { url: '/AM-S', title: 'AMS', keywords: 'application management support ams' },
        { url: '/user-exprience', title: 'User Experience', keywords: 'user experience ux design interface' },
        { url: '/commercetools', title: 'Commercetools', keywords: 'commercetools commerce platform' },
        { url: '/fluent-commerce', title: 'Fluent Commerce', keywords: 'fluent commerce order management' },
        { url: '/ms-technology', title: 'MS Technology', keywords: 'microsoft technology solutions' },
        { url: '/digital-services', title: 'Digital Services', keywords: 'digital services technology consulting' },
        
        // Industries
        { url: '/vertical-retail', title: 'Vertical Retail', keywords: 'retail vertical industry solutions' },
        { url: '/industries-retail', title: 'Industries Retail', keywords: 'retail industry solutions' },
        { url: '/supply-chain', title: 'Supply Chain', keywords: 'supply chain logistics management' },
        { url: '/discrete-manufacturing', title: 'Discrete Manufacturing', keywords: 'discrete manufacturing production' },
        { url: '/automotive', title: 'Automotive', keywords: 'automotive industry vehicles' },
        { url: '/epc', title: 'EPC', keywords: 'epc engineering procurement construction' },
        { url: '/process-manufacturing', title: 'Process Manufacturing', keywords: 'process manufacturing production' },
        { url: '/private-quity', title: 'Private Equity', keywords: 'private equity investment finance' },
        { url: '/cable-manufacturing', title: 'Cable Manufacturing', keywords: 'cable manufacturing production' },
        { url: '/interior-design', title: 'Interior Design', keywords: 'interior design furniture' },
        
        // Resources
        { url: '/blog', title: 'Blog', keywords: 'blog articles news updates' },
        { url: '/case-study-details', title: 'Case Studies', keywords: 'case studies examples success' },
        { url: '/webinars', title: 'Webinars', keywords: 'webinars online events training' },
        { url: '/collaterals', title: 'Collaterals', keywords: 'collaterals documents resources' },
        { url: '/corporate-videos', title: 'Corporate Videos', keywords: 'videos corporate media' },
        { url: '/news-events', title: 'News & Events', keywords: 'news events announcements' },
        { url: '/faq', title: 'FAQ', keywords: 'faq questions answers help' },
        
        // Contact
        { url: '/contact', title: 'Contact Us', keywords: 'contact us reach support help' },
    ];

    // Search handler
    const handleSearch = (query) => {
        setSearchQuery(query);
        
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        const searchTerm = query.toLowerCase();
        const results = allPages.filter(page => 
            page.title.toLowerCase().includes(searchTerm) || 
            page.keywords.toLowerCase().includes(searchTerm)
        );
        
        setSearchResults(results);
    };

    // Handle search box open/close
    useEffect(() => {
        const handleSearchEvents = () => {
            // Desktop search
            const searchBtn = document.getElementById('searchBtn');
            const searchClose = document.getElementById('searchClose');
            const searchFull = document.getElementById('searchFull');
            
            // Mobile search
            const mobileSearchBtn = document.getElementById('mobileSearchBtn');
            const mobileSearchClose = document.getElementById('mobileSearchClose');
            const mobileSearchFull = document.getElementById('mobileSearchFull');

            // Desktop search button
            if (searchBtn) {
                searchBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    setIsSearchOpen(true);
                    if (searchFull) {
                        searchFull.classList.add('active');
                    }
                    // Focus on input after opening
                    setTimeout(() => {
                        const searchInput = searchFull?.querySelector('input');
                        if (searchInput) searchInput.focus();
                    }, 100);
                });
            }

            // Desktop close button
            if (searchClose) {
                searchClose.addEventListener('click', (e) => {
                    e.preventDefault();
                    setIsSearchOpen(false);
                    setSearchQuery('');
                    setSearchResults([]);
                    if (searchFull) {
                        searchFull.classList.remove('active');
                    }
                });
            }

            // Mobile search button
            if (mobileSearchBtn) {
                mobileSearchBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    setIsSearchOpen(true);
                    if (mobileSearchFull) {
                        mobileSearchFull.classList.add('active');
                    }
                    // Focus on input after opening
                    setTimeout(() => {
                        const mobileSearchInput = mobileSearchFull?.querySelector('input');
                        if (mobileSearchInput) mobileSearchInput.focus();
                    }, 100);
                });
            }

            // Mobile close button
            if (mobileSearchClose) {
                mobileSearchClose.addEventListener('click', (e) => {
                    e.preventDefault();
                    setIsSearchOpen(false);
                    setSearchQuery('');
                    setSearchResults([]);
                    if (mobileSearchFull) {
                        mobileSearchFull.classList.remove('active');
                    }
                });
            }

            // Close search on Escape key
            const handleEscape = (e) => {
                if (e.key === 'Escape' && isSearchOpen) {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                    setSearchResults([]);
                    if (searchFull) {
                        searchFull.classList.remove('active');
                    }
                    if (mobileSearchFull) {
                        mobileSearchFull.classList.remove('active');
                    }
                }
            };

            document.addEventListener('keydown', handleEscape);

            return () => {
                document.removeEventListener('keydown', handleEscape);
            };
        };

        handleSearchEvents();
    }, [isSearchOpen]);

    return (
        <>
            <div className="topheader text-right">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 col-0" />
                        <div className="col-sm-7 col-12">
                            <ul className="top-in">
                                <li className="top-icon-gap">
                                    <span className="fa fa-envelope1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                                                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white"
                                                stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <Link href="mailto:info@rheincs.com"> info@rheincs.com</Link>
                                </li>
                                <li>
                                    <div className="custom-select top-icon-gap">
                                        <select name="lang" id="lang">
                                            <option value="German">German</option>
                                            <option value="English">English</option>
                                        </select>
                                        <label htmlFor="lang" className="ml-4" style={{ marginLeft: '5px' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_5511_10679)">
                                                    <circle cx="16.8" cy="10.8" r="1.2" transform="rotate(90 16.8 10.8)" fill="white" />
                                                    <circle cx="19.1999" cy="8.40001" r="1.2" transform="rotate(90 19.1999 8.40001)" fill="white" />
                                                    <circle cx="12" cy="15.6" r="1.2" transform="rotate(90 12 15.6)" fill="white" />
                                                    <circle cx="9.60005" cy="13.2" r="1.2" transform="rotate(90 9.60005 13.2)" fill="white" />
                                                    <circle cx="7.1999" cy="10.8" r="1.2" transform="rotate(90 7.1999 10.8)" fill="white" />
                                                    <circle cx="4.8" cy="8.40001" r="1.2" transform="rotate(90 4.8 8.40001)" fill="white" />
                                                    <circle cx="14.4001" cy="13.2" r="1.2" transform="rotate(90 14.4001 13.2)" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5511_10679">
                                                        <rect width="24" height="24" fill="white" transform="translate(24 1.04907e-06) rotate(90)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div id="chcp_font_size" className="input-group">
                                        <span className="input-group-btn font-increase-waber">
                                            <button
                                                id="btn-decrease"
                                                className="btn btn-default"
                                                type="button"
                                            >
                                                Aa&nbsp;-
                                            </button>
                                            <button
                                                id="btn-increase"
                                                className="btn btn-default"
                                                type="button"
                                            >
                                                Aa&nbsp;+
                                            </button>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="desktop-nav">
                <header className={`main-header boxshadow ${isSticky ? 'is-sticky' : ''}`} id="mainHeader">
                    <div className="header-sticky">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                {/* Logo Start */}
                                <Link className="navbar-brand" href="/">
                                    <img src="/images/rlogo.png" alt="Logo" />
                                </Link>
                                {/* Logo End */}
                                {/* Main Menu Start */}
                                <div className="collapse navbar-collapse main-menu">
                                    <div className="nav-menu-wrapper">
                                        <ul className="navbar-nav mr-auto" id="menu">
                                            {/* <li class="nav-item submenu1"><Link class="nav-link" href="index.php">Home</Link> </li> */}
                                            <li className={`nav-item submenu mega-menu ${isPageInArray(aboutPages) ? 'active' : ''}`}>
                                                <Link className="nav-link drop-1" href="#">
                                                    <span> About Us</span>
                                                    <span style={{ marginLeft: '5px' }}>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_5511_10679)">
                                                                <circle
                                                                    cx="16.8"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 16.8 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="19.1999"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 19.1999 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="15.6"
                                                                    r="1.2"
                                                                    transform="rotate(90 12 15.6)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="9.60005"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 9.60005 13.2)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="7.1999"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 7.1999 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="4.8"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 4.8 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="14.4001"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 14.4001 13.2)"
                                                                    fill="white"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_5511_10679">
                                                                    <rect
                                                                        width={24}
                                                                        height={24}
                                                                        fill="white"
                                                                        transform="translate(24 1.04907e-06) rotate(90)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </Link>
                                                <div className="mega-menu-content full-width">
                                                    <div className="container">
                                                        {/* <h1>About Us</h1> */}
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="tab-contents aboutnav">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="tabcont1">
                                                                                <h1>About Us</h1>
                                                                                <ul>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/overview"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Overview
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/leadership"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Leadership
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/customer-speak"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Customers Speak
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/success-stories"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Success Stories
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/careers"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Careers
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="our-services projects pd0">
                                                                                <div className="row">
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body">
                                                                                            <h3>
                                                                                                <span>News and events</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                RheinBrücke’s Kinetic ERP MEA Cloud Receives Green Certificate from Moro Hub for Sustainable Cloud Adoption
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="https://www.rheincs.com/news-events/rheinBr%C3%BCcke%E2%80%99s-kinetic-erp-mea-cloud-receives-green-certificate-from-moro-hub-for-sustainable-cloud-adoption "
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                10 Must-Have Features in a Modern ERP
                                                                                                System
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body secondser">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                The Top 8 ERP Systems for Financial
                                                                                                Management
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                        {/* Service Item End */}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={`nav-item submenu mega-menu ${isPageInArray(solutionsPages) ? 'active' : ''}`}>
                                                <Link className="nav-link darp-1" href="#">
                                                    {" "}
                                                    <span> Solutions &amp; Services </span>
                                                    <span>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_5511_10679)">
                                                                <circle
                                                                    cx="16.8"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 16.8 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="19.1999"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 19.1999 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="15.6"
                                                                    r="1.2"
                                                                    transform="rotate(90 12 15.6)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="9.60005"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 9.60005 13.2)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="7.1999"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 7.1999 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="4.8"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 4.8 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="14.4001"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 14.4001 13.2)"
                                                                    fill="white"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_5511_10679">
                                                                    <rect
                                                                        width={24}
                                                                        height={24}
                                                                        fill="white"
                                                                        transform="translate(24 1.04907e-06) rotate(90)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </Link>
                                                <div className="mega-menu-content full-width">
                                                    <div className="container">
                                                        <h1>Solutions &amp; Services</h1>
                                                        {/* Vertical tabs */}
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <div className="tab-buttons">
                                                                    <button
                                                                        className={`tab-link`}
                                                                        data-tab="tab1"
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            setActiveTab('tab1');
                                                                            const button = e.currentTarget;
                                                                            const menu = button.closest('.mega-menu-content');
                                                                            if (menu) {
                                                                                const tabs = menu.querySelectorAll('.tab-link');
                                                                                const contents = menu.querySelectorAll('.tab-content');
                                                                                tabs.forEach(t => t.classList.remove('active'));
                                                                                contents.forEach(c => c.classList.remove('active'));
                                                                                button.classList.add('active');
                                                                                const target = menu.querySelector('#tab1');
                                                                                if (target) target.classList.add('active');
                                                                            }
                                                                        }}
                                                                    >
                                                                        Our Solutions
                                                                    </button>
                                                                    <button
                                                                        className={`tab-link ${activeTab === 'tab2' ? 'active' : ''}`}
                                                                        data-tab="tab2"
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            setActiveTab('tab2');
                                                                            const button = e.currentTarget;
                                                                            const menu = button.closest('.mega-menu-content');
                                                                            if (menu) {
                                                                                const tabs = menu.querySelectorAll('.tab-link');
                                                                                const contents = menu.querySelectorAll('.tab-content');
                                                                                tabs.forEach(t => t.classList.remove('active'));
                                                                                contents.forEach(c => c.classList.remove('active'));
                                                                                button.classList.add('active');
                                                                                const target = menu.querySelector('#tab2');
                                                                                if (target) target.classList.add('active');
                                                                            }
                                                                        }}
                                                                    >
                                                                        Enterprise Solutions &amp; Services
                                                                    </button>
                                                                    <button
                                                                        className={`tab-link ${activeTab === 'tab3' ? 'active' : ''}`}
                                                                        data-tab="tab3"
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            setActiveTab('tab3');
                                                                            const button = e.currentTarget;
                                                                            const menu = button.closest('.mega-menu-content');
                                                                            if (menu) {
                                                                                const tabs = menu.querySelectorAll('.tab-link');
                                                                                const contents = menu.querySelectorAll('.tab-content');
                                                                                tabs.forEach(t => t.classList.remove('active'));
                                                                                contents.forEach(c => c.classList.remove('active'));
                                                                                button.classList.add('active');
                                                                                const target = menu.querySelector('#tab3');
                                                                                if (target) target.classList.add('active');
                                                                            }
                                                                        }}
                                                                    >
                                                                        Digital Solutions &amp; Services
                                                                    </button>
                                                                    {/*<button class="tab-link" data-tab="tab4">Digital*/}
                                                                    {/*    Services</button>*/}
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                {/* Tab content */}
                                                                <div className="tab-contents">
                                                                    <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}>
                                                                        <div className="row">
                                                                            <div className="col-sm-5 pr0">
                                                                                <div className="tabcont">
                                                                                    <h3 className="ser-btn">
                                                                                        <Link className="animated-svg-link"
                                                                                            href="/our-solution"
                                                                                        >
                                                                                            Our Solutions
                                                                                            <NavArrowLeft />
                                                                                        </Link>
                                                                                    </h3>
                                                                                    <ul>
                                                                                        <li className="ser-btn">
                                                                                            <Link href="/corushr"
                                                                                                className="animated-svg-link"
                                                                                            >
                                                                                                Corus HR
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <Link href="/MeRLIN"
                                                                                                className="animated-svg-link"
                                                                                            >
                                                                                                MeRLIN Sourcing
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-7">
                                                                                <div className="our-services projects pd0">
                                                                                    <div className="row">
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body">
                                                                                                <h3>
                                                                                                    <span>Case Study</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    10 Must-Have Features in a Modern
                                                                                                    ERP System
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                        className="animated-svg-link1 btn-style-3"
                                                                                                    >
                                                                                                        Read More
                                                                                                        <NavArrowLeft />
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body secondser">
                                                                                                <h3>
                                                                                                    <span>Case Study</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    The Top 8 ERP Systems for Financial
                                                                                                    Management
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <Link href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                                                                                                        className="animated-svg-link1 btn-style-3"
                                                                                                    >
                                                                                                        Read More
                                                                                                        <NavArrowLeft />
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                            {/* Service Item End */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}>
                                                                        <div className="row">
                                                                            <div className="col-sm-5 pr0">
                                                                                <div className="tabcont">
                                                                                    <h3 className="ser-btn">
                                                                                        <Link className="animated-svg-link"
                                                                                            href="/enterprise-solutions"
                                                                                        >
                                                                                            Enterprise Solutions and Services
                                                                                            <NavArrowLeft />
                                                                                        </Link>
                                                                                    </h3>
                                                                                    <ul>
                                                                                        <li className="ser-btn">
                                                                                            <div className="menu-item">
                                                                                                <Link href="/epicor"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Epicor
                                                                                                </Link>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    onClick={(e) => {
                                                                                                        e.preventDefault();
                                                                                                        setEpicorCollapsed(!epicorCollapsed);
                                                                                                    }}
                                                                                                    className="arrow-toggle animated-svg-link"
                                                                                                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                                                                                                >
                                                                                                    <NavArrowRight />
                                                                                                </button>
                                                                                            </div>
                                                                                            <div
                                                                                                id="demo"
                                                                                                className={`${epicorCollapsed ? 'show' : 'collapse'} content-box`}
                                                                                                style={{ display: epicorCollapsed ? 'block' : 'none' }}
                                                                                            >
                                                                                                <Link href="/Epicore-kinetic">
                                                                                                    {" "}
                                                                                                    Epicor Kinetic
                                                                                                </Link>
                                                                                                <Link href="/Epicore-iscala">
                                                                                                    {" "}
                                                                                                    Epicor iScala
                                                                                                </Link>
                                                                                                <Link href="/Epicore-companion">
                                                                                                    {" "}
                                                                                                    Epicor Companion Products
                                                                                                </Link>
                                                                                                <Link href="/Epicore-epicpay">
                                                                                                    {" "}
                                                                                                    EpicPay
                                                                                                </Link>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <Link href="/microsoft-dynamics-solutions"
                                                                                                className=""
                                                                                            >
                                                                                                MS Dynamics
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <Link href="/SAP" className="">
                                                                                                SAP
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <Link href="/sugar-CRM" className="">
                                                                                                Sugar CRM
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <Link
                                                                                                href="/ERP-customer-excellence"
                                                                                                className=""
                                                                                            >
                                                                                                ERP Customer Excellence
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-7">
                                                                                <div className="our-services projects pd0">
                                                                                    <div className="row">
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body">
                                                                                                <h3>
                                                                                                    <span>Case Study</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    10 Must-Have Features in a Modern
                                                                                                    ERP System 1
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                        className="animated-svg-link1
                                                      btn-style-3"
                                                                                                    >
                                                                                                        Read More
                                                                                                        <NavArrowLeft />
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body secondser">
                                                                                                <h3>
                                                                                                    <span>Case Study</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    The Top 8 ERP Systems for Financial
                                                                                                    Management 1
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <Link href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                                                                                                        className="animated-svg-link1 btn-style-3"
                                                                                                    >
                                                                                                        Read More
                                                                                                        <NavArrowLeft />
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                            {/* Service Item End */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="tab3" className={`tab-content ${activeTab === 'tab3' ? 'active' : ''}`}>
                                                                        <div className="row">
                                                                            <div className="col-sm-5 pr0">

                                                                                <div className="tabcont">
                                                                                    <h3 className="ser-btn">
                                                                                        <Link className="animated-svg-link"
                                                                                            href="/digital-solution-service"
                                                                                        >
                                                                                            Digital Solutions
                                                                                            and Services
                                                                                            <NavArrowRight />
                                                                                        </Link>
                                                                                    </h3>
                                                                                    <ul>
                                                                                        <li className="ser-btn ">
                                                                                            <div className="menu-item">
                                                                                                <Link href="/digital-solutions"
                                                                                                    className="animated-svg-link">Digital Solutions
                                                                                                </Link>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    onClick={(e) => {
                                                                                                        e.preventDefault();
                                                                                                        setDigitalSolutionsCollapsed(!digitalSolutionsCollapsed);
                                                                                                    }}
                                                                                                    className="arrow-toggle animated-svg-link"
                                                                                                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                                                                                                >
                                                                                                    <NavArrowRight />
                                                                                                </button>
                                                                                            </div>
                                                                                            <div id="demo1"
                                                                                                className={`${digitalSolutionsCollapsed ? 'show' : 'collapse'} content-box`}
                                                                                                style={{ display: digitalSolutionsCollapsed ? 'block' : 'none' }}
                                                                                            >
                                                                                                <Link href="/business-intelligence">
                                                                                                    BI &amp; Analytics
                                                                                                </Link>
                                                                                                <Link href="/AI-ML">
                                                                                                    AI/ML
                                                                                                </Link>
                                                                                                <Link href="/ecommerce">
                                                                                                    eCommerce
                                                                                                </Link>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li className="ser-btn ">
                                                                                            <div className="menu-item">
                                                                                                <Link href="/digital-services"
                                                                                                    className="animated-svg-link">Digital Services
                                                                                                </Link>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    onClick={(e) => {
                                                                                                        e.preventDefault();
                                                                                                        setDigitalServicesCollapsed(!digitalServicesCollapsed);
                                                                                                    }}
                                                                                                    className="arrow-toggle animated-svg-link"
                                                                                                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                                                                                                >
                                                                                                    <NavArrowRight />
                                                                                                </button>
                                                                                            </div>
                                                                                            <div id="demo2"
                                                                                                className={`${digitalServicesCollapsed ? 'show' : 'collapse'} content-box`}
                                                                                                style={{ display: digitalServicesCollapsed ? 'block' : 'none' }}
                                                                                            >
                                                                                                <Link href="/Architecture">
                                                                                                    Architecture &amp; App Modernisation
                                                                                                </Link>
                                                                                                <Link href="/data-engineering-warehousing">
                                                                                                    Data Engineering and Warehousing
                                                                                                </Link>
                                                                                                <Link href="/enterprise-solutions">
                                                                                                    Enterprise Software
                                                                                                </Link>
                                                                                                <Link href="/AM-S">
                                                                                                    A M &amp; S
                                                                                                </Link>
                                                                                                <Link href="/user-exprience">
                                                                                                    User Experience
                                                                                                </Link>
                                                                                                <Link href="/commercetools">
                                                                                                    Commercetools
                                                                                                </Link>
                                                                                                <Link href="/fluent-commerce">
                                                                                                    Fluent Commerce
                                                                                                </Link>
                                                                                                <Link href="/ms-technology">
                                                                                                    MS Technologies
                                                                                                </Link>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-7">
                                                                                <div className="our-services projects pd0">
                                                                                    <div className="row">
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body">
                                                                                                <h3>
                                                                                                    <span>Case Study</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    10 Must-Have Features in a Modern
                                                                                                    ERP System 2
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                        className="animated-svg-link1
                                                      btn-style-3"
                                                                                                    >
                                                                                                        Read More
                                                                                                        <NavArrowLeft />
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body secondser">
                                                                                                <h3>
                                                                                                    <span>Case Study</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    The Top 8 ERP Systems for Financial
                                                                                                    Management 2
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <Link href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                                                                                                        className="animated-svg-link1
                                                      btn-style-3"
                                                                                                    >
                                                                                                        Read More
                                                                                                        <NavArrowLeft />
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                            {/* Service Item End */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={`nav-item submenu mega-menu ${isPageInArray(industryPages) ? 'active' : ''}`}>
                                                <Link className="nav-link darp-1" href="#">
                                                    {" "}
                                                    <span>Industries</span>
                                                    <span>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_5511_10679)">
                                                                <circle
                                                                    cx="16.8"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 16.8 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="19.1999"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 19.1999 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="15.6"
                                                                    r="1.2"
                                                                    transform="rotate(90 12 15.6)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="9.60005"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 9.60005 13.2)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="7.1999"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 7.1999 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="4.8"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 4.8 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="14.4001"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 14.4001 13.2)"
                                                                    fill="white"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_5511_10679">
                                                                    <rect
                                                                        width={24}
                                                                        height={24}
                                                                        fill="white"
                                                                        transform="translate(24 1.04907e-06) rotate(90)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </Link>
                                                <div className="mega-menu-content full-width">
                                                    <div className="container">
                                                        {/* <h1>About Us</h1> */}
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="tab-contents aboutnav1">
                                                                    <div className="row">
                                                                        <div className="width60">
                                                                            <div className="tabcont1">
                                                                                <h1>Industries</h1>
                                                                                <div className="row">
                                                                                    <div className="col-sm-6">
                                                                                        <ul className="verline">
                                                                                            <li className="ser-btn">
                                                                                                <Link href="/vertical-retail"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Brand Owners and Vertical Retailers
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <Link href="/industries-retail"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Retail Industry
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <Link href="/supply-chain"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Distribution and Supply Chain
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <Link href="/discrete-manufacturing"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Discrete Manufacturing
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <Link href="/automotive"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Automotive Industry
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="col-sm-6 pdl0">
                                                                                        <ul>
                                                                                            <li className="ser-btn">
                                                                                                <Link href="/epc"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Engineering Procurement and
                                                                                                    Construction
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <Link href="/process-manufacturing"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Process Manufacturing
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <Link href="/private-quity"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Private Equity &amp; Funding Backed
                                                                                                    Ventures
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <Link href="/cable-manufacturing"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Cable Manufacturing
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <Link href="/interior-design"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Interior Design
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="width40">
                                                                            <div className="our-services projects pd0">
                                                                                <div className="row">
                                                                                    <div className="col-lg-6 col-md-6">
                                                                                        <div className="service-item-body">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                10 Must-Have Features in a Modern ERP
                                                                                                System
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6">
                                                                                        <div className="service-item-body secondser">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                The Top 8 ERP Systems for Financial
                                                                                                Management
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                        {/* Service Item End */}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={`nav-item submenu mega-menu ${isPageInArray(resourcePages) ? 'active' : ''}`}>
                                                <Link className="nav-link darp-1" href="#">
                                                    {" "}
                                                    <span>Resources </span>{" "}
                                                    <span>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_5511_10679)">
                                                                <circle
                                                                    cx="16.8"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 16.8 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="19.1999"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 19.1999 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx={12}
                                                                    cy="15.6"
                                                                    r="1.2"
                                                                    transform="rotate(90 12 15.6)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="9.60005"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 9.60005 13.2)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="7.1999"
                                                                    cy="10.8"
                                                                    r="1.2"
                                                                    transform="rotate(90 7.1999 10.8)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="4.8"
                                                                    cy="8.40001"
                                                                    r="1.2"
                                                                    transform="rotate(90 4.8 8.40001)"
                                                                    fill="white"
                                                                />
                                                                <circle
                                                                    cx="14.4001"
                                                                    cy="13.2"
                                                                    r="1.2"
                                                                    transform="rotate(90 14.4001 13.2)"
                                                                    fill="white"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_5511_10679">
                                                                    <rect
                                                                        width={24}
                                                                        height={24}
                                                                        fill="white"
                                                                        transform="translate(24 1.04907e-06) rotate(90)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </Link>
                                                <div className="mega-menu-content full-width">
                                                    <div className="container">
                                                        {/* <h1>About Us</h1> */}
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="tab-contents aboutnav">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="tabcont1">
                                                                                <h1>Resources</h1>
                                                                                <ul>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/blog"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Blog
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/case-study-details"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Case Studies
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/webinars"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Webinars
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/collaterals"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Collaterals
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/corporate-videos"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            Videos
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/news-events"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            News and Events
                                                                                        </Link>
                                                                                    </li>
                                                                                    {/*<li class="ser-btn">*/}
                                                                                    {/*    <Link href="faq.php" class="animated-svg-link">*/}
                                                                                    {/*        FAQs*/}
                                                                                    {/*    </Link>*/}
                                                                                    {/*</li>*/}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="our-services projects pd0">
                                                                                <div className="row">
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                10 Must-Have Features in a Modern ERP
                                                                                                System
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                    className="animated-svg-link1
                                              btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                10 Must-Have Features in a Modern ERP
                                                                                                System
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body secondser">
                                                                                            <h3>
                                                                                                <span>Case Study</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                The Top 8 ERP Systems for Financial
                                                                                                Management
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="https://casestudy.rheincs.com/casestudies/welding-equipment-manufacturer-implements-epicor-country-specific-functionality/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    Read More
                                                                                                    <NavArrowLeft />
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                        {/* Service Item End */}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={`nav-item ${pathname === '/contact' || currentPage === 'contact' ? 'active' : ''}`}>
                                                <Link className="nav-link" href="/contact">
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Header Social Box Start */}
                                    <div className="header-social-box d-inline-flex">
                                        {/* Header Social Links Start */}
                                        <div className="header-social-links">
                                            <ul>
                                                <li className="search-icon">
                                                    <div className="search-box" id="searchBox">
                                                        <button className="btn-search" id="searchBtn">
                                                            <svg
                                                                className="icon-search"
                                                                width={32}
                                                                height={32}
                                                                viewBox="0 0 32 32"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M14.667 26.676C21.2944 26.676 26.667 21.3034 26.667 14.676C26.667 8.04855 21.2944 2.67596 14.667 2.67596C8.03958 2.67596 2.66699 8.04855 2.66699 14.676C2.66699 21.3034 8.03958 26.676 14.667 26.676Z"
                                                                    stroke="white"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M25.2402 27.5957C25.9469 29.729 27.5602 29.9424 28.8002 28.0757C29.9336 26.369 29.1869 24.969 27.1336 24.969C25.6136 24.9557 24.7602 26.1424 25.2402 27.5957Z"
                                                                    stroke="white"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <span className="icon-close" id="searchClose">
                                                            ✕
                                                        </span>
                                                        <div className="search-full" id="searchFull">
                                                            <div className="search-bar">
                                                                <span className="search-icon-left ">
                                                                    <svg
                                                                        className="icon-search1"
                                                                        width={25}
                                                                        height={25}
                                                                        viewBox="0 0 32 32"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M14.667 26.676C21.2944 26.676 26.667 21.3034 26.667 14.676C26.667 8.04855 21.2944 2.67596 14.667 2.67596C8.03958 2.67596 2.66699 8.04855 2.66699 14.676C2.66699 21.3034 8.03958 26.676 14.667 26.676Z"
                                                                            stroke="#B9B9B9"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                        <path
                                                                            d="M25.2402 27.5957C25.9469 29.729 27.5602 29.9424 28.8002 28.0757C29.9336 26.369 29.1869 24.969 27.1336 24.969C25.6136 24.9557 24.7602 26.1424 25.2402 27.5957Z"
                                                                            stroke="#B9B9B9"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    placeholder="What are you looking for ?"
                                                                    value={searchQuery}
                                                                    onChange={(e) => handleSearch(e.target.value)}
                                                                />
                                                            </div>
                                                            {searchQuery && (
                                                                <div className="search-results">
                                                                    {searchResults.length > 0 ? (
                                                                        <>
                                                                            <div className="search-results-header">
                                                                                Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}
                                                                            </div>
                                                                            <ul className="search-results-list">
                                                                                {searchResults.map((result, index) => (
                                                                                    <li key={index}>
                                                                                        <Link 
                                                                                            href={result.url}
                                                                                            onClick={() => {
                                                                                                setIsSearchOpen(false);
                                                                                                setSearchQuery('');
                                                                                                setSearchResults([]);
                                                                                                const searchFull = document.getElementById('searchFull');
                                                                                                if (searchFull) {
                                                                                                    searchFull.classList.remove('active');
                                                                                                }
                                                                                            }}
                                                                                        >
                                                                                            <div className="result-title">{result.title}</div>
                                                                                            <div className="result-url">{result.url}</div>
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </>
                                                                    ) : (
                                                                        <div className="no-results">
                                                                            No results found for "{searchQuery}"
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Header Social Links End */}
                                    </div>
                                    {/* Header Social Box End */}
                                </div>
                                {/* Main Menu End */}
                                <div className="navbar-toggle">
                                    <div className="header-social-links">
                                        <ul>
                                            <li>
                                                <div className="search-wrapper">
                                                    <button
                                                        id="searchBtn"
                                                        className="btn-search"
                                                        aria-label="Open search"
                                                    >
                                                        {/* 🔍 Search Icon */}
                                                        <svg
                                                            className="icon-search"
                                                            width={32}
                                                            height={32}
                                                            viewBox="0 0 32 32"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M14.667 26.676C21.2944 26.676 26.667 21.3034 26.667 14.676C26.667 8.04855 21.2944 2.67596 14.667 2.67596C8.03958 2.67596 2.66699 8.04855 2.66699 14.676C2.66699 21.3034 8.03958 26.676 14.667 26.676Z"
                                                                stroke="white"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M25.2402 27.5957C25.9469 29.729 27.5602 29.9424 28.8002 28.0757C29.9336 26.369 29.1869 24.969 27.1336 24.969C25.6136 24.9557 24.7602 26.1424 25.2402 27.5957Z"
                                                                stroke="white"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        {/* ✕ Close Icon */}
                                                        <span className="icon-close">✕</span>
                                                    </button>
                                                    <div
                                                        className="search-full"
                                                        id="searchFull"
                                                        role="dialog"
                                                        aria-hidden="true"
                                                    >
                                                        <div className="container">
                                                            <div className="search-bar">
                                                                <span className="search-icon-left">
                                                                    <svg
                                                                        className="icon-search"
                                                                        width={25}
                                                                        height={25}
                                                                        viewBox="0 0 32 32"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M14.667 26.676C21.2944 26.676 26.667 21.3034 26.667 14.676C26.667 8.04855 21.2944 2.67596 14.667 2.67596C8.03958 2.67596 2.66699 8.04855 2.66699 14.676C2.66699 21.3034 8.03958 26.676 14.667 26.676Z"
                                                                            stroke="#082326"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                        <path
                                                                            d="M25.2402 27.5957C25.9469 29.729 27.5602 29.9424 28.8002 28.0757C29.9336 26.369 29.1869 24.969 27.1336 24.969C25.6136 24.9557 24.7602 26.1424 25.2402 27.5957Z"
                                                                            stroke="#082326"
                                                                            strokeWidth="1.5"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    placeholder="What are you looking for ?"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="#"
                                        aria-haspopup="true"
                                        role="button"
                                        tabIndex={0}
                                        className="slicknav_btn slicknav_collapsed"
                                    >
                                        <span className="slicknav_menutxt" />
                                        {/* Replace slicknav_icon with custom SVG */}
                                        <span className="custom-menu-icon">
                                            <svg
                                                width={26}
                                                height={18}
                                                viewBox="0 0 26 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M25 9H1M25 17H1M25 1H9"
                                                    stroke="white"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                        <div className="responsive-menu" />
                    </div>
                </header>
            </div>
            <div className="mobile-nav">
                {/* The visible header bar on mobile */}
                <header className="mobile-header">
                    <div className="container">
                        <Link className="mobile-logo" href="/">
                            <img src="/images/rlogo.png" alt="Logo" />
                        </Link>
                        <div>
                            <div className="search-box" id="mobileSearchBox">
                                <button className="btn-search" id="mobileSearchBtn">
                                    <svg
                                        className="icon-search"
                                        width={28}
                                        height={32}
                                        viewBox="0 0 32 32"
                                        fill="none"
                                    >
                                        <path
                                            d="M14.667 26.676C21.2944 26.676 26.667 21.3034 26.667 14.676C26.667 8.04855 21.2944 2.67596 14.667 2.67596C8.03958 2.67596 2.66699 8.04855 2.66699 14.676C2.66699 21.3034 8.03958 26.676 14.667 26.676Z"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M25.2402 27.5957C25.9469 29.729 27.5602 29.9424 28.8002 28.0757C29.9336 26.369 29.1869 24.969 27.1336 24.969C25.6136 24.9557 24.7602 26.1424 25.2402 27.5957Z"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <span className="icon-close" id="mobileSearchClose">
                                    ✕
                                </span>
                                <div
                                    className="search-full mobile-search-overlay"
                                    id="mobileSearchFull"
                                >
                                    <div className="search-bar">
                                        <span className="search-icon-left ">
                                            <svg
                                                className="icon-search1"
                                                width={25}
                                                height={25}
                                                viewBox="0 0 32 32"
                                                fill="none"
                                            >
                                                <path
                                                    d="M14.667 26.676C21.2944 26.676 26.667 21.3034 26.667 14.676C26.667 8.04855 21.2944 2.67596 14.667 2.67596C8.03958 2.67596 2.66699 8.04855 2.66699 14.676C2.66699 21.3034 8.03958 26.676 14.667 26.676Z"
                                                    stroke="#B9B9B9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M25.2402 27.5957C25.9469 29.729 27.5602 29.9424 28.8002 28.0757C29.9336 26.369 29.1869 24.969 27.1336 24.969C25.6136 24.9557 24.7602 26.1424 25.2402 27.5957Z"
                                                    stroke="#B9B9B9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <input 
                                            type="text" 
                                            placeholder="What are you looking for ?"
                                            value={searchQuery}
                                            onChange={(e) => handleSearch(e.target.value)}
                                        />
                                    </div>
                                    {searchQuery && (
                                        <div className="search-results">
                                            {searchResults.length > 0 ? (
                                                <>
                                                    <div className="search-results-header">
                                                        Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}
                                                    </div>
                                                    <ul className="search-results-list">
                                                        {searchResults.map((result, index) => (
                                                            <li key={index}>
                                                                <Link 
                                                                    href={result.url}
                                                                    onClick={() => {
                                                                        setIsSearchOpen(false);
                                                                        setSearchQuery('');
                                                                        setSearchResults([]);
                                                                        const mobileSearchFull = document.getElementById('mobileSearchFull');
                                                                        if (mobileSearchFull) {
                                                                            mobileSearchFull.classList.remove('active');
                                                                        }
                                                                    }}
                                                                >
                                                                    <div className="result-title">{result.title}</div>
                                                                    <div className="result-url">{result.url}</div>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            ) : (
                                                <div className="no-results">
                                                    No results found for "{searchQuery}"
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button
                                id="hamburger-btn"
                                className="hamburger-btn"
                                aria-label="Open Menu"
                            >
                                <svg
                                    width={26}
                                    height={18}
                                    viewBox="0 0 26 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M25 9H1M25 17H1M25 1H9"
                                        stroke="white"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>
                {/* The slide-in (off-canvas) navigation panel */}
                <nav id="mobileNavPanel" className="mobile-nav-panel">
                    <div className="tag-logo">
                        <Link className="" href="/">
                            <img src="/images/rlogo.png" alt="Logo" />
                        </Link>
                    </div>
                    <button id="close-btn" className="close-btn" aria-label="Close Menu">
                        ×
                    </button>
                    <ul>
                        {/* About Us */}
                        <li>
                            <div className="menu-item">
                                <Link href="#">About Us</Link>
                                <span className="submenu-toggle">
                                    <svg
                                        className="submenu-arrow"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_5511_10679)">
                                            <circle
                                                cx="16.8"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 16.8 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="19.1999"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 19.1999 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx={12}
                                                cy="15.6"
                                                r="1.2"
                                                transform="rotate(90 12 15.6)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="9.60005"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 9.60005 13.2)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="7.1999"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 7.1999 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="4.8"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 4.8 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="14.4001"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 14.4001 13.2)"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5511_10679">
                                                <rect
                                                    width={24}
                                                    height={24}
                                                    fill="white"
                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <ul className="submenu">
                                <li>
                                    <Link href="/overview">Overview</Link>
                                </li>
                                <li>
                                    <Link href="/leadership">Leadership</Link>
                                </li>
                                <li>
                                    <Link href="/customer-speak">Customers Speak</Link>
                                </li>
                                <li>
                                    <Link href="/success-stories">Success Stories</Link>
                                </li>
                                <li>
                                    <Link href="/careers">Careers</Link>
                                </li>
                                {/* Card Slider for About Us */}
                                {/*<li class="submenu-card-item">*/}
                                {/*    <div class="swiper submenu-swiper">*/}
                                {/*        <div class="swiper-wrapper">*/}
                                {/*            <div class="swiper-slide">*/}
                                {/*                <div class="service-item-body">*/}
                                {/*                    <div class="nave-bar-card-waber">*/}
                                {/*                        <div class="nave-bar-card-content-waber">*/}
                                {/*                            <div>*/}
                                {/*                                <span>Case Study</span>*/}
                                {/*                            </div>*/}
                                {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                {/*                            <div class="ser-btn1">*/}
                                {/*                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                {/*                                    Read*/}
                                {/*                                    More*/}
                                {/*                                    <?php include "navarrowleft.php" ?>*/}
                                {/*                                </Link>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div class="swiper-slide">*/}
                                {/*                <div class="service-item-body">*/}
                                {/*                    <div class="nave-bar-card-waber">*/}
                                {/*                        <div class="nave-bar-card-content-waber">*/}
                                {/*                            <div>*/}
                                {/*                                <span>Case Study</span>*/}
                                {/*                            </div>*/}
                                {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                {/*                            <div class="ser-btn1">*/}
                                {/*                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                {/*                                    Read*/}
                                {/*                                    More*/}
                                {/*                                    <?php include "navarrowleft.php" ?>*/}
                                {/*                                </Link>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div class="swiper-pagination"></div>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                            </ul>
                        </li>
                        {/* Solutions & Services */}
                        <li>
                            <div className="menu-item">
                                <Link href="#">Solutions &amp; Services</Link>
                                <span className="submenu-toggle">
                                    <svg
                                        className="submenu-arrow"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_5511_10679)">
                                            <circle
                                                cx="16.8"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 16.8 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="19.1999"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 19.1999 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx={12}
                                                cy="15.6"
                                                r="1.2"
                                                transform="rotate(90 12 15.6)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="9.60005"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 9.60005 13.2)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="7.1999"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 7.1999 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="4.8"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 4.8 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="14.4001"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 14.4001 13.2)"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5511_10679">
                                                <rect
                                                    width={24}
                                                    height={24}
                                                    fill="white"
                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <ul className="submenu">
                                {/* Our Solutions (Tab 1) */}
                                <li>
                                    <div className="menu-item">
                                        <Link href="#">Our Solutions</Link>
                                        <span className="submenu-toggle">
                                            <svg
                                                className="submenu-arrow"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_5511_10679)">
                                                    <circle
                                                        cx="16.8"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 16.8 10.8)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="19.1999"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 19.1999 8.40001)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx={12}
                                                        cy="15.6"
                                                        r="1.2"
                                                        transform="rotate(90 12 15.6)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="9.60005"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 9.60005 13.2)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="7.1999"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 7.1999 10.8)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="4.8"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 4.8 8.40001)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="14.4001"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 14.4001 13.2)"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5511_10679">
                                                        <rect
                                                            width={24}
                                                            height={24}
                                                            fill="white"
                                                            transform="translate(24 1.04907e-06) rotate(90)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                    <ul className="submenu">
                                        <li>
                                            <Link href="/corushr">Corus HR</Link>
                                        </li>
                                        <li>
                                            <Link href="/MeRLIN">MeRLIN Sourcing</Link>
                                        </li>
                                        {/*<li class="submenu-card-item">*/}
                                        {/*    <div class="swiper submenu-swiper">*/}
                                        {/*        <div class="swiper-wrapper">*/}
                                        {/*            <div class="swiper-slide">*/}
                                        {/*                <div class="service-item-body">*/}
                                        {/*                    <div class="nave-bar-card-waber">*/}
                                        {/*                        <div class="nave-bar-card-content-waber">*/}
                                        {/*                            <div>*/}
                                        {/*                                <span>Case Study</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                        {/*                            <div class="ser-btn1">*/}
                                        {/*                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                        {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                        {/*                                    Read*/}
                                        {/*                                    More*/}
                                        {/*                                    <?php include "navarrowleft.php" ?>*/}
                                        {/*                                </Link>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*            <div class="swiper-slide">*/}
                                        {/*                <div class="service-item-body">*/}
                                        {/*                    <div class="nave-bar-card-waber">*/}
                                        {/*                        <div class="nave-bar-card-content-waber">*/}
                                        {/*                            <div>*/}
                                        {/*                                <span>Case Study</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                        {/*                            <div class="ser-btn1">*/}
                                        {/*                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                        {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                        {/*                                    Read*/}
                                        {/*                                    More*/}
                                        {/*                                    <?php include "navarrowleft.php" ?>*/}
                                        {/*                                </Link>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div class="swiper-pagination"></div>*/}
                                        {/*    </div>*/}
                                        {/*</li>*/}
                                    </ul>
                                </li>
                                {/* Enterprise Solutions & Services (Tab 2) */}
                                <li>
                                    <div className="menu-item">
                                        <Link href="/enterprise-solutions">Enterprise Solutions</Link>
                                        <span className="submenu-toggle">
                                            <svg
                                                className="submenu-arrow"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_5511_10679)">
                                                    <circle
                                                        cx="16.8"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 16.8 10.8)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="19.1999"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 19.1999 8.40001)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx={12}
                                                        cy="15.6"
                                                        r="1.2"
                                                        transform="rotate(90 12 15.6)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="9.60005"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 9.60005 13.2)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="7.1999"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 7.1999 10.8)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="4.8"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 4.8 8.40001)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="14.4001"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 14.4001 13.2)"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5511_10679">
                                                        <rect
                                                            width={24}
                                                            height={24}
                                                            fill="white"
                                                            transform="translate(24 1.04907e-06) rotate(90)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                    <ul className="submenu">
                                        <li>
                                            <div className="menu-item">
                                                <Link href="/epicor"> Epicor</Link>
                                                <span className="submenu-toggle">
                                                    <svg
                                                        className="submenu-arrow"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_5511_10679)">
                                                            <circle
                                                                cx="16.8"
                                                                cy="10.8"
                                                                r="1.2"
                                                                transform="rotate(90 16.8 10.8)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="19.1999"
                                                                cy="8.40001"
                                                                r="1.2"
                                                                transform="rotate(90 19.1999 8.40001)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx={12}
                                                                cy="15.6"
                                                                r="1.2"
                                                                transform="rotate(90 12 15.6)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="9.60005"
                                                                cy="13.2"
                                                                r="1.2"
                                                                transform="rotate(90 9.60005 13.2)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="7.1999"
                                                                cy="10.8"
                                                                r="1.2"
                                                                transform="rotate(90 7.1999 10.8)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="4.8"
                                                                cy="8.40001"
                                                                r="1.2"
                                                                transform="rotate(90 4.8 8.40001)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="14.4001"
                                                                cy="13.2"
                                                                r="1.2"
                                                                transform="rotate(90 14.4001 13.2)"
                                                                fill="white"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_5511_10679">
                                                                <rect
                                                                    width={24}
                                                                    height={24}
                                                                    fill="white"
                                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <ul className="submenu sup-li-pading">
                                                <li>
                                                    <Link href="/Epicore-kinetic">Epicor Kinetic</Link>
                                                </li>
                                                <li>
                                                    <Link href="/Epicore-iscala">Epicor iScala</Link>
                                                </li>
                                                <li>
                                                    <Link href="/Epicore-companion">Epicor Companion Products</Link>
                                                </li>
                                                <li>
                                                    <Link href="/Epicore-epicpay">EpicPay</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/microsoft-dynamics-solutions">MS Dynamics</Link>
                                        </li>
                                        <li>
                                            <Link href="/SAP">SAP</Link>
                                        </li>
                                        <li>
                                            <Link href="/sugar-CRM">Sugar CRM</Link>
                                        </li>
                                        <li>
                                            <Link href="/ERP-customer-excellence">
                                                ERP Customer Excellence
                                            </Link>
                                        </li>
                                        {/*<li class="submenu-card-item">*/}
                                        {/*    <div class="swiper submenu-swiper">*/}
                                        {/*        <div class="swiper-wrapper">*/}
                                        {/*            <div class="swiper-slide">*/}
                                        {/*                <div class="service-item-body">*/}
                                        {/*                    <div class="nave-bar-card-waber">*/}
                                        {/*                        <div class="nave-bar-card-content-waber">*/}
                                        {/*                            <div>*/}
                                        {/*                                <span>Case Study</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                        {/*                            <div class="ser-btn1">*/}
                                        {/*                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                        {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                        {/*                                    Read*/}
                                        {/*                                    More*/}
                                        {/*                                    <?php include "navarrowleft.php" ?>*/}
                                        {/*                                </Link>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*            <div class="swiper-slide">*/}
                                        {/*                <div class="service-item-body">*/}
                                        {/*                    <div class="nave-bar-card-waber">*/}
                                        {/*                        <div class="nave-bar-card-content-waber">*/}
                                        {/*                            <div>*/}
                                        {/*                                <span>Case Study</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                        {/*                            <div class="ser-btn1">*/}
                                        {/*                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                        {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                        {/*                                    Read*/}
                                        {/*                                    More*/}
                                        {/*                                    <?php include "navarrowleft.php" ?>*/}
                                        {/*                                </Link>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div class="swiper-pagination"></div>*/}
                                        {/*    </div>*/}
                                        {/*</li>*/}
                                    </ul>
                                </li>
                                {/* Digital Solutions & Services (Tab 3) */}
                                {/* Tab 3: Digital Solutions & Services */}
                                <li>
                                    <div className="menu-item">
                                        <Link href="/digital-solutions-services">
                                            Digital Solutions &amp; Services
                                        </Link>
                                        <span className="submenu-toggle">
                                            <svg
                                                className="submenu-arrow"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_5511_10679)">
                                                    <circle
                                                        cx="16.8"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 16.8 10.8)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="19.1999"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 19.1999 8.40001)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx={12}
                                                        cy="15.6"
                                                        r="1.2"
                                                        transform="rotate(90 12 15.6)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="9.60005"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 9.60005 13.2)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="7.1999"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 7.1999 10.8)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="4.8"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 4.8 8.40001)"
                                                        fill="white"
                                                    />
                                                    <circle
                                                        cx="14.4001"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 14.4001 13.2)"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5511_10679">
                                                        <rect
                                                            width={24}
                                                            height={24}
                                                            fill="white"
                                                            transform="translate(24 1.04907e-06) rotate(90)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                    <ul className="submenu">
                                        <li>
                                            <div className="menu-item">
                                                <Link href="/digital-solutions"> Solutions</Link>
                                                <span className="submenu-toggle">
                                                    <svg
                                                        className="submenu-arrow"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_5511_10679)">
                                                            <circle
                                                                cx="16.8"
                                                                cy="10.8"
                                                                r="1.2"
                                                                transform="rotate(90 16.8 10.8)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="19.1999"
                                                                cy="8.40001"
                                                                r="1.2"
                                                                transform="rotate(90 19.1999 8.40001)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx={12}
                                                                cy="15.6"
                                                                r="1.2"
                                                                transform="rotate(90 12 15.6)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="9.60005"
                                                                cy="13.2"
                                                                r="1.2"
                                                                transform="rotate(90 9.60005 13.2)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="7.1999"
                                                                cy="10.8"
                                                                r="1.2"
                                                                transform="rotate(90 7.1999 10.8)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="4.8"
                                                                cy="8.40001"
                                                                r="1.2"
                                                                transform="rotate(90 4.8 8.40001)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="14.4001"
                                                                cy="13.2"
                                                                r="1.2"
                                                                transform="rotate(90 14.4001 13.2)"
                                                                fill="white"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_5511_10679">
                                                                <rect
                                                                    width={24}
                                                                    height={24}
                                                                    fill="white"
                                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <ul className="submenu sup-li-pading">
                                                <li>
                                                    <Link href="/business-intelligence">BI &amp; Analytics</Link>
                                                </li>
                                                <li>
                                                    <Link href="/AI-ML">AI/ML</Link>
                                                </li>
                                                <li>
                                                    <Link href="/ecommerce">eCommerce</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <Link href="/digital-services"> Services</Link>
                                                <span className="submenu-toggle">
                                                    <svg
                                                        className="submenu-arrow"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_5511_10679)">
                                                            <circle
                                                                cx="16.8"
                                                                cy="10.8"
                                                                r="1.2"
                                                                transform="rotate(90 16.8 10.8)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="19.1999"
                                                                cy="8.40001"
                                                                r="1.2"
                                                                transform="rotate(90 19.1999 8.40001)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx={12}
                                                                cy="15.6"
                                                                r="1.2"
                                                                transform="rotate(90 12 15.6)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="9.60005"
                                                                cy="13.2"
                                                                r="1.2"
                                                                transform="rotate(90 9.60005 13.2)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="7.1999"
                                                                cy="10.8"
                                                                r="1.2"
                                                                transform="rotate(90 7.1999 10.8)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="4.8"
                                                                cy="8.40001"
                                                                r="1.2"
                                                                transform="rotate(90 4.8 8.40001)"
                                                                fill="white"
                                                            />
                                                            <circle
                                                                cx="14.4001"
                                                                cy="13.2"
                                                                r="1.2"
                                                                transform="rotate(90 14.4001 13.2)"
                                                                fill="white"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_5511_10679">
                                                                <rect
                                                                    width={24}
                                                                    height={24}
                                                                    fill="white"
                                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                            <ul className="submenu sup-li-pading">
                                                <li>
                                                    <Link href="/Architecture">
                                                        Architecture &amp; App Modernisation
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/data-engineering-warehousing">
                                                        Data Engineering and Warehousing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/enterprise-solutions">Enterprise Software</Link>
                                                </li>
                                                <li>
                                                    <Link href="/AM-S">A M &amp; S</Link>
                                                </li>
                                                <li>
                                                    <Link href="/user-exprience">User Experience</Link>
                                                </li>
                                                <li>
                                                    <Link href="/commercetools">Commercetools</Link>
                                                </li>
                                                <li>
                                                    <Link href="/fluent-commerce">Fluent Commerce</Link>
                                                </li>
                                                <li>
                                                    <Link href="/ms-technology">MS Technologies</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {/*<li class="submenu-card-item">*/}
                                        {/*    <div class="swiper submenu-swiper">*/}
                                        {/*        <div class="swiper-wrapper">*/}
                                        {/*            <div class="swiper-slide">*/}
                                        {/*                <div class="service-item-body">*/}
                                        {/*                    <div class="nave-bar-card-waber">*/}
                                        {/*                        <div class="nave-bar-card-content-waber">*/}
                                        {/*                            <div>*/}
                                        {/*                                <span>Case Study</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                        {/*                            <div class="ser-btn1">*/}
                                        {/*                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                        {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                        {/*                                    Read*/}
                                        {/*                                    More*/}
                                        {/*                                    <?php include "navarrowleft.php" ?>*/}
                                        {/*                                </Link>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*            <div class="swiper-slide">*/}
                                        {/*                <div class="service-item-body">*/}
                                        {/*                    <div class="nave-bar-card-waber">*/}
                                        {/*                        <div class="nave-bar-card-content-waber">*/}
                                        {/*                            <div>*/}
                                        {/*                                <span>Case Study</span>*/}
                                        {/*                            </div>*/}
                                        {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                        {/*                            <div class="ser-btn1">*/}
                                        {/*                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                        {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                        {/*                                    Read*/}
                                        {/*                                    More*/}
                                        {/*                                    <?php include "navarrowleft.php" ?>*/}
                                        {/*                                </Link>*/}
                                        {/*                            </div>*/}
                                        {/*                        </div>*/}
                                        {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                        {/*                    </div>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div class="swiper-pagination"></div>*/}
                                        {/*    </div>*/}
                                        {/*</li>*/}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/* Industries */}
                        <li>
                            <div className="menu-item">
                                <Link href="#">Industries</Link>
                                <span className="submenu-toggle">
                                    <svg
                                        className="submenu-arrow"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_5511_10679)">
                                            <circle
                                                cx="16.8"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 16.8 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="19.1999"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 19.1999 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx={12}
                                                cy="15.6"
                                                r="1.2"
                                                transform="rotate(90 12 15.6)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="9.60005"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 9.60005 13.2)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="7.1999"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 7.1999 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="4.8"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 4.8 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="14.4001"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 14.4001 13.2)"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5511_10679">
                                                <rect
                                                    width={24}
                                                    height={24}
                                                    fill="white"
                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <ul className="submenu">
                                <li>
                                    <Link href="/vertical-retail">
                                        Brand Owners and Vertical Retailers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries-retail">Retail Industry</Link>
                                </li>
                                <li>
                                    <Link href="/supply-chain">Distribution and Supply Chain</Link>
                                </li>
                                <li>
                                    <Link href="/discrete-manufacturing">Discrete Manufacturing</Link>
                                </li>
                                <li>
                                    <Link href="/automotive">Automotive Industry</Link>
                                </li>
                                <li>
                                    <Link href="/epc">Engineering Procurement and Construction</Link>
                                </li>
                                <li>
                                    <Link href="/process-manufacturing">Process Manufacturing</Link>
                                </li>
                                <li>
                                    <Link href="/private-quity">
                                        Private Equity &amp; Funding Backed Ventures
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cable-manufacturing">Cable Manufacturing</Link>
                                </li>
                                <li>
                                    <Link href="/interior-design">Interior Design</Link>
                                </li>
                                {/* Card Slider for Industries */}
                                {/*<li class="submenu-card-item">*/}
                                {/*    <div class="swiper submenu-swiper">*/}
                                {/*        <div class="swiper-wrapper">*/}
                                {/*            <div class="swiper-slide">*/}
                                {/*                <div class="service-item-body">*/}
                                {/*                    <div class="nave-bar-card-waber">*/}
                                {/*                        <div class="nave-bar-card-content-waber">*/}
                                {/*                            <div>*/}
                                {/*                                <span>Case Study</span>*/}
                                {/*                            </div>*/}
                                {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                {/*                            <div class="ser-btn1">*/}
                                {/*                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                {/*                                    Read*/}
                                {/*                                    More*/}
                                {/*                                    <?php include "navarrowleft.php" ?>*/}
                                {/*                                </Link>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div class="swiper-slide">*/}
                                {/*                <div class="service-item-body">*/}
                                {/*                    <div class="nave-bar-card-waber">*/}
                                {/*                        <div class="nave-bar-card-content-waber">*/}
                                {/*                            <div>*/}
                                {/*                                <span>Case Study</span>*/}
                                {/*                            </div>*/}
                                {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                {/*                            <div class="ser-btn1">*/}
                                {/*                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                {/*                                    Read*/}
                                {/*                                    More*/}
                                {/*                                    <?php include "navarrowleft.php" ?>*/}
                                {/*                                </Link>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div class="swiper-pagination"></div>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                            </ul>
                        </li>
                        {/* Resources */}
                        <li>
                            <div className="menu-item">
                                <Link href="#">Resources</Link>
                                <span className="submenu-toggle">
                                    <svg
                                        className="submenu-arrow"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_5511_10679)">
                                            <circle
                                                cx="16.8"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 16.8 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="19.1999"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 19.1999 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx={12}
                                                cy="15.6"
                                                r="1.2"
                                                transform="rotate(90 12 15.6)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="9.60005"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 9.60005 13.2)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="7.1999"
                                                cy="10.8"
                                                r="1.2"
                                                transform="rotate(90 7.1999 10.8)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="4.8"
                                                cy="8.40001"
                                                r="1.2"
                                                transform="rotate(90 4.8 8.40001)"
                                                fill="white"
                                            />
                                            <circle
                                                cx="14.4001"
                                                cy="13.2"
                                                r="1.2"
                                                transform="rotate(90 14.4001 13.2)"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5511_10679">
                                                <rect
                                                    width={24}
                                                    height={24}
                                                    fill="white"
                                                    transform="translate(24 1.04907e-06) rotate(90)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <ul className="submenu">
                                <li>
                                    <Link href="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/case-study-details">Case Studies</Link>
                                </li>
                                <li>
                                    <Link href="/webinars">Webinars</Link>
                                </li>
                                <li>
                                    <Link href="/collaterals">Collaterals</Link>
                                </li>
                                <li>
                                    <Link href="/corporate-videos">Videos</Link>
                                </li>
                                <li>
                                    <Link href="/news-events">News and Events</Link>
                                </li>
                                {/* Card Slider for Resources */}
                                {/*<li class="submenu-card-item">*/}
                                {/*    <div class="swiper submenu-swiper">*/}
                                {/*        <div class="swiper-wrapper">*/}
                                {/*            <div class="swiper-slide">*/}
                                {/*                <div class="service-item-body">*/}
                                {/*                    <div class="nave-bar-card-waber">*/}
                                {/*                        <div class="nave-bar-card-content-waber">*/}
                                {/*                            <div>*/}
                                {/*                                <span>Case Study</span>*/}
                                {/*                            </div>*/}
                                {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                {/*                            <div class="ser-btn1">*/}
                                {/*                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                {/*                                    Read*/}
                                {/*                                    More*/}
                                {/*                                    <?php include "navarrowleft.php" ?>*/}
                                {/*                                </Link>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div class="swiper-slide">*/}
                                {/*                <div class="service-item-body">*/}
                                {/*                    <div class="nave-bar-card-waber">*/}
                                {/*                        <div class="nave-bar-card-content-waber">*/}
                                {/*                            <div>*/}
                                {/*                                <span>Case Study</span>*/}
                                {/*                            </div>*/}
                                {/*                            <p>10 Must-Have Features in a Modern ERP System</p>*/}
                                {/*                            <div class="ser-btn1">*/}
                                {/*                                <Link href="https://casestudy.rheincs.com/casestudies/how-an-engineering-procurement/"*/}
                                {/*                                    class="animated-svg-link1 btn-style-3">*/}
                                {/*                                    Read*/}
                                {/*                                    More*/}
                                {/*                                    <?php include "navarrowleft.php" ?>*/}
                                {/*                                </Link>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <img src="/images/pr1.jpg" alt="">*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div class="swiper-pagination"></div>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                            </ul>
                        </li>
                        {/* Contact Us */}
                        <li>
                            <div className="menu-item">
                                <Link href="/contact">Contact Us</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
                {/* Dark overlay for when the menu is open */}
                <div id="menuOverlay" className="menu-overlay" />
            </div>

        </>
    );
}