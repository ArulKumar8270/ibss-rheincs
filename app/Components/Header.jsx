"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NavArrowLeft, NavArrowRight } from "../icons";
import {useTranslation} from "../hooks/useTranslation";
import Loading from "./Loading";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(' ');
    const [epicorCollapsed, setEpicorCollapsed] = useState(false);
    const [digitalSolutionsCollapsed, setDigitalSolutionsCollapsed] = useState(false);
    const [digitalServicesCollapsed, setDigitalServicesCollapsed] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isNavigating, setIsNavigating] = useState(false);
    const selectRef = useRef(null);
    const dropdownRef = useRef(null);
    const { t, language: currentLanguage, changeLanguage: setCurrentLanguage } = useTranslation();

    // Get the current page name (e.g., 'leadership' from '/leadership')
    const currentPage = pathname.split('/').pop() || 'index';

    // Handle route changes for loading state
    useEffect(() => {
        setIsNavigating(false);
    }, [pathname]);

    // Intercept link clicks to show loading (skip when link opens in new tab)
    useEffect(() => {
        const handleLinkClick = (e) => {
            const target = e.target;
            const link = target.closest('a');
            
            if (link && link.href) {
                // Don't show loading if link opens in new tab - current page stays
                if (link.target === '_blank' || link.getAttribute('target') === '_blank') {
                    return;
                }
                const url = new URL(link.href);
                const currentUrl = new URL(window.location.href);
                
                // Only show loading for internal navigation
                if (url.origin === currentUrl.origin && url.pathname !== currentUrl.pathname) {
                    setIsNavigating(true);
                }
            }
        };

        document.addEventListener('click', handleLinkClick);
        return () => {
            document.removeEventListener('click', handleLinkClick);
        };
    }, []);

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
        'MeRLIN-strategic-sourcing-software',
        'erp',
        'epicor',
        'epicor-kinetic',
        'Epicor-kinetic',
        'epicor-iscala',
        'Epicor-iscala',
        'epicor-companion',
        'Epicor-companion',
        'epicor-epicpay',
        'Epicor-epicpay',
        'sap',
        'ms-dynamics',
        'sugar-crm',
        'ERP-customer-excellence',
        'digital-solutions',
        'digital-services-and-solutions',
        'business-intelligence',
        'AI-ML',
        'Ecommerce',
        'Architecture',
        'data-engineering-warehousing',
        'AM-S',
        'user-exprience',
        'Commercetools',
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
        'Epc',
        'process-manufacturing',
        'Private-quity',
        'Cable-manufacturing',
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
                menu.addEventListener('mouseenter', function () {
                    this.classList.add('is-hovered');
                });
                menu.addEventListener('mouseleave', function () {
                    this.classList.remove('is-hovered');
                });
            });
        };

        // Small delay to ensure DOM is ready
        const timeoutId = setTimeout(() => {
            initializeTabs();
            ensureMegaMenuHover();
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
        // About Uscareers
        { url: '/about-us/overview', title: 'Overview', keywords: 'about company overview ibb information business solutions' },
        { url: '/about-us/leadership', title: 'Leadership', keywords: 'leadership team management executives directors' },
        { url: '/about-us/customer-speak', title: 'Customer Speak', keywords: 'customer testimonials reviews feedback clients' },
        { url: '/about-us/success-stories', title: 'Success Stories', keywords: 'case studies success stories achievements results' },
        { url: '/careers', title: 'Careers', keywords: 'careers jobs opportunities employment work' },

        // Solutions & Services
        { url: '/solutions/CorusHR', title: 'CorusHR', keywords: 'corus hr human resources management' },
        { url: '/MeRLIN-strategic-sourcing-software', title: 'MeRLIN', keywords: 'merlin solution platform' },
        { url: '/solutions/erp-enterprise-solutions-and-services/erp', title: 'Enterprise Solutions', keywords: 'enterprise solutions erp business' },
        { url: '/solutions/erp-enterprise-solutions-and-services/epicor', title: 'Epicor', keywords: 'epicor erp enterprise resource planning' },
        { url: '/Epicor-kinetic', title: 'Epicor Kinetic', keywords: 'epicor kinetic erp cloud' },
        { url: '/Epicor-iscala', title: 'Epicor iScala', keywords: 'epicor iscala erp' },
        { url: '/Epicor-companion', title: 'Epicor Companion', keywords: 'epicor companion mobile' },
        { url: '/Epicor-epicpay', title: 'Epicor EpicPay', keywords: 'epicor epicpay payment' },
        { url: '/solutions/erp-enterprise-solutions-and-services/sap', title: 'SAP', keywords: 'sap erp enterprise' },
        { url: '/solutions/erp-enterprise-solutions-and-services/ms-dynamics', title: 'Microsoft Dynamics Solutions', keywords: 'microsoft dynamics erp crm' },
        { url: '/solutions/erp-enterprise-solutions-and-services/sugar-crm', title: 'Sugar CRM', keywords: 'sugar crm customer relationship management' },
        { url: '/ERP-customer-excellence', title: 'ERP Customer Excellence', keywords: 'erp customer excellence service' },
        { url: '/digital-solutions', title: 'Digital Solutions', keywords: 'digital solutions technology innovation' },
        { url: '/solutions/digital-services-and-solutions', title: 'Digital Solutions Services', keywords: 'digital services technology solutions' },
        { url: '/business-intelligence', title: 'Business Intelligence', keywords: 'business intelligence analytics data bi' },
        { url: '/AI-ML', title: 'AI & ML', keywords: 'artificial intelligence machine learning ai ml' },
        { url: '/Ecommerce', title: 'E-Commerce', keywords: 'ecommerce online store retail digital commerce' },
        { url: '/Architecture', title: 'Architecture', keywords: 'architecture design system' },
        { url: '/data-engineering-warehousing', title: 'Data Engineering & Warehousing', keywords: 'data engineering warehousing etl' },
        { url: '/AM-S', title: 'AMS', keywords: 'application management support ams' },
        { url: '/user-exprience', title: 'User Experience', keywords: 'user experience ux design interface' },
        { url: '/Commercetools', title: 'Commercetools', keywords: 'commercetools commerce platform' },
        { url: '/fluent-commerce', title: 'Fluent Commerce', keywords: 'fluent commerce order management' },
        { url: '/ms-technology', title: 'MS Technology', keywords: 'microsoft technology solutions' },
        { url: '/digital-services', title: 'Digital Services', keywords: 'digital services technology consulting' },

        // Industries
        { url: '/vertical-retail', title: 'Vertical Retail', keywords: 'retail vertical industry solutions' },
        { url: '/industries-retail', title: 'Industries Retail', keywords: 'retail industry solutions' },
        { url: '/supply-chain', title: 'Supply Chain', keywords: 'supply chain logistics management' },
        { url: '/discrete-manufacturing', title: 'Discrete Manufacturing', keywords: 'discrete manufacturing production' },
        { url: '/Automotive', title: 'Automotive', keywords: 'automotive industry vehicles' },
        { url: '/Engineering-Procurement-Construction-(EPC)', title: 'EPC', keywords: 'epc engineering procurement construction' },
        { url: '/process-manufacturing', title: 'Process Manufacturing', keywords: 'process manufacturing production' },
        { url: '/Private-Equity-Funding-Backed-Ventures', title: 'Private Equity', keywords: 'private equity investment finance' },
        { url: '/Cable-manufacturing', title: 'Cable Manufacturing', keywords: 'cable manufacturing production' },
        { url: '/interior-design', title: 'Interior Design', keywords: 'interior design furniture' },

        // Resources
        { url: '/Blog', title: 'Blog', keywords: 'blog articles news updates' },
        { url: '/Case-study', title: 'Case Studies', keywords: 'case studies examples success' },
        { url: '/webinars', title: 'Webinars', keywords: 'webinars online events training' },
        { url: '/collaterals', title: 'Collaterals', keywords: 'collaterals documents resources' },
        { url: '/corporate-videos', title: 'Corporate Videos', keywords: 'videos corporate media' },
        { url: '/news-events', title: 'News & Events', keywords: 'news events announcements' },
        { url: '/faq', title: 'FAQ', keywords: 'faq questions answers help' },

        // Contact
        { url: '/contact-us', title: 'Contact Us', keywords: 'contact us reach support help' },
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
        // Desktop search elements
        const searchBtn = document.getElementById('searchBtn');
        const searchClose = document.getElementById('searchClose');
        const searchFull = document.getElementById('searchFull');

        // Mobile search elements
        const mobileSearchBtn = document.getElementById('mobileSearchBtn');
        const mobileSearchClose = document.getElementById('mobileSearchClose');
        const mobileSearchFull = document.getElementById('mobileSearchFull');

        // Desktop search button handler
        const handleDesktopSearchClick = (e) => {
            e.preventDefault();
            setIsSearchOpen(true);
            if (searchFull) {
                searchFull.classList.add('active');
            }
            setTimeout(() => {
                const searchInput = searchFull?.querySelector('input');
                if (searchInput) searchInput.focus();
            }, 100);
        };

        // Desktop close button handler
        const handleDesktopCloseClick = (e) => {
            e.preventDefault();
            setIsSearchOpen(false);
            setSearchQuery('');
            setSearchResults([]);
            if (searchFull) {
                searchFull.classList.remove('active');
            }
        };

        // Mobile search button handler
        const handleMobileSearchClick = (e) => {
            e.preventDefault();
            setIsSearchOpen(true);
            if (mobileSearchFull) {
                mobileSearchFull.classList.add('active');
            }
            setTimeout(() => {
                const mobileSearchInput = mobileSearchFull?.querySelector('input');
                if (mobileSearchInput) mobileSearchInput.focus();
            }, 100);
        };

        // Mobile close button handler (also used by inline onClick for reliability on mobile)
        const handleMobileCloseClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsSearchOpen(false);
            setSearchQuery('');
            setSearchResults([]);
            if (mobileSearchFull) {
                mobileSearchFull.classList.remove('active');
            }
            const mobileSearchBox = document.getElementById('mobileSearchBox');
            if (mobileSearchBox) {
                mobileSearchBox.classList.remove('active', 'search-active');
            }
        };

        // Escape key handler
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsSearchOpen(prevIsSearchOpen => {
                    if (prevIsSearchOpen) {
                        setSearchQuery('');
                        setSearchResults([]);
                        if (searchFull) {
                            searchFull.classList.remove('active');
                        }
                        if (mobileSearchFull) {
                            mobileSearchFull.classList.remove('active');
                        }
                        return false;
                    }
                    return prevIsSearchOpen;
                });
            }
        };

        // Attach event listeners
        if (searchBtn) {
            searchBtn.addEventListener('click', handleDesktopSearchClick);
        }
        if (searchClose) {
            searchClose.addEventListener('click', handleDesktopCloseClick);
        }
        if (mobileSearchBtn) {
            mobileSearchBtn.addEventListener('click', handleMobileSearchClick);
        }
        if (mobileSearchClose) {
            mobileSearchClose.addEventListener('click', handleMobileCloseClick);
        }
        document.addEventListener('keydown', handleEscape);

        // Cleanup function
        return () => {
            if (searchBtn) {
                searchBtn.removeEventListener('click', handleDesktopSearchClick);
            }
            if (searchClose) {
                searchClose.removeEventListener('click', handleDesktopCloseClick);
            }
            if (mobileSearchBtn) {
                mobileSearchBtn.removeEventListener('click', handleMobileSearchClick);
            }
            if (mobileSearchClose) {
                mobileSearchClose.removeEventListener('click', handleMobileCloseClick);
            }
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    // Handle clicks outside the custom dropdown to close it
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <>
            {isNavigating && <Loading message="Loading page..." fullScreen={true} size="large" />}
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
                                                stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white"
                                                strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <Link href="mailto:info@rheincs.com"> info@rheincs.com</Link>
                                </li>
                                 {/* <li>
                                     <div className="custom-select top-icon-gap" style={{ position: 'relative' }} ref={dropdownRef}>
                                        <select
                                            ref={selectRef}
                                            name="lang"
                                            id="lang"
                                            value={currentLanguage || 'English'}
                                            onChange={(e) => {
                                                const selectedLang = e.target.value;
                                                if (selectedLang && (selectedLang === 'English' || selectedLang === 'German')) {
                                                    setCurrentLanguage(selectedLang);
                                                }
                                            }}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                opacity: 0,
                                                cursor: 'pointer',
                                                zIndex: 1, // Ensure it's clickable if needed for accessibility
                                            }}
                                            aria-hidden="true" // Hide from screen readers, as we'll have a custom visible element
                                            tabIndex="-1" // Prevent tabbing to it directly
                                        >
                                            <option value="English">English</option>
                                            <option value="German">German</option>
                                        </select>
                                        <div
                                            className="custom-dropdown-trigger"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            style={{
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span>{currentLanguage || 'English'}</span>
                                            <label htmlFor="lang" className="ml-4" style={{ marginLeft: '5px' }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_5511_10679)">
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
                                        {isDropdownOpen && (
                                            <div
                                                className="custom-dropdown-options"
                                                style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: 0,
                                                    backgroundColor: '#fff',
                                                    border: '1px solid #ccc',
                                                    borderRadius: '4px',
                                                    zIndex: 10,
                                                    minWidth: '100%',
                                                    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                                                }}
                                            >
                                                <div
                                                    onClick={() => {
                                                        setCurrentLanguage('English');
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    style={{ padding: '8px 10px', cursor: 'pointer', '&:hover': { backgroundColor: '#f1f1f1' } }}
                                                >
                                                    English
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        setCurrentLanguage('German');
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    style={{ padding: '8px 10px', cursor: 'pointer', '&:hover': { backgroundColor: '#f1f1f1' } }}
                                                >
                                                    German
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </li>  */}
                                {/* <li>
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
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`desktop-nav ${currentLanguage === 'German' ? 'gerdesktopnav' : ''}`}>
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
                                            <li class="nav-item submenu1"><Link class="nav-link" href="/"><i class="fa fa-home"></i></Link> </li>
                                            <li className={`nav-item submenu mega-menu ${isPageInArray(aboutPages) ? 'active' : ''}`}>
                                                <Link className="nav-link drop-1" href="#">
                                                    <span> {t("About Us")}</span>
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
                                                <div className={`mega-menu-content full-width ${currentLanguage === 'German' ? 'germegamenu' : ''}`}>
                                                    <div className="container">
                                                        {/* <h1>About Us</h1> */}
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="tab-contents aboutnav">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="tabcont1">
                                                                                <h1>{t("About Us")}</h1>
                                                                                <ul>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/about-us/overview"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            {t("Overview")}
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/about-us/leadership"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            {t("Leadership")}
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/about-us/customer-speak"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            {t("Customers Speak")}
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/about-us/success-stories"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            {t("Success Stories")}
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/careers"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            {t("Careers")}
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
                                                                                                <span>{t("News and events")}</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                RheinBrücke’s Kinetic ERP MEA Cloud Receives Green Certificate from Moro Hub for Sustainable Cloud Adoption
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="/news-events/867965e8-5dc5-4419-bf84-b7877b7036f1"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    {t("Read More")}
                                                                                                    <NavArrowLeft />
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body">
                                                                                            <h3>
                                                                                                <span>{t("News and events")}</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                Grand Opening of India Development Centre (IDC) in RheinBrücke
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="/news-events/0aa57254-d987-4474-a229-0bd66716acb6"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    {t("Read More")}
                                                                                                    <NavArrowLeft />
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-4 col-md-4">
                                                                                        <div className="service-item-body secondser">
                                                                                            <h3>
                                                                                                <span>{t("Blog")}</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                How to Build a Future-Ready Digital Strategy
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="/blog-details/how-to-build-a-future-ready-digital-strategy/"
                                                                                                    className="animated-svg-link1 btn-style-3"
                                                                                                >
                                                                                                    {t("Read More")}
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
                                                    <span> {t("Solutions & Services")} </span>
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
                                                        <h1>{t("Solutions & Services")}</h1>
                                                        {/* Vertical tabs */}
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <div className="tab-buttons">
                                                                    <button
                                                                        className={`tab-link ${activeTab === 'tab1' ? 'active' : ''}`}
                                                                        data-tab="tab1"
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            setActiveTab('tab1');
                                                                            const button = e.currentTarget;
                                                                            const menu = button.closest('.mega-menu-content');
                                                                            if (menu) {
                                                                                const tabs = menu.querySelectorAll('.tab-link');
                                                                                const contents = menu.querySelectorAll('.tab-content');
                                                                                // tabs.forEach(t => t.classList.remove('active'));
                                                                                // contents.forEach(c => c.classList.remove('active'));
                                                                                // button.classList.add('active');
                                                                                const target = menu.querySelector('#tab1');
                                                                                if (target) target.classList.add('active');
                                                                            }
                                                                        }}
                                                                    >
                                                                        {t("Our Solutions")}
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
                                                                        {t("Enterprise Solutions & Services")}
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
                                                                        {t("Digital Solutions & Services")}
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
                                                                                            {t("Our Solutions")}
                                                                                            <NavArrowLeft />
                                                                                        </Link>
                                                                                    </h3>
                                                                                    <ul>
                                                                                        <li className="ser-btn">
                                                                                            <Link href="/solutions/CorusHR"
                                                                                                className="animated-svg-link"
                                                                                            >
                                                                                                Corus HR
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <Link href="/MeRLIN-strategic-sourcing-software"
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
                                                                                                    <span>{t("News and events")}</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    RheinBrücke’s Kinetic ERP MEA Cloud Receives Green Certificate from Moro Hub for Sustainable Cloud Adoption
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <Link href="/news-events/867965e8-5dc5-4419-bf84-b7877b7036f1"
                                                                                                        className="animated-svg-link1 btn-style-3"
                                                                                                    >
                                                                                                        {t("Read More")}
                                                                                                        <NavArrowLeft />
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body secondser">
                                                                                                <h3>
                                                                                                    <span>Blog</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    How to Build a Future-Ready Digital Strategy
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <Link href="/blog-details/how-to-build-a-future-ready-digital-strategy/"
                                                                                                        className="animated-svg-link1 btn-style-3"
                                                                                                    >
                                                                                                        {t("Read More")}
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
                                                                                            href="/solutions/erp-enterprise-solutions-and-services/erp"
                                                                                        >
                                                                                            {t("Enterprise Solutions & Services")}
                                                                                            <NavArrowLeft />
                                                                                        </Link>
                                                                                    </h3>
                                                                                    <ul>
                                                                                        <li className="ser-btn">
                                                                                            <div className="menu-item">
                                                                                                <Link href="/solutions/erp-enterprise-solutions-and-services/epicor"
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
                                                                                                <Link href="/Epicor-kinetic">
                                                                                                    {" "}
                                                                                                    Epicor Kinetic
                                                                                                </Link>
                                                                                                <Link href="/Epicor-iscala">
                                                                                                    {" "}
                                                                                                    Epicor iScala
                                                                                                </Link>
                                                                                                <Link href="/Epicor-companion">
                                                                                                    {" "}
                                                                                                    Epicor Companion Products
                                                                                                </Link>
                                                                                                <Link href="/Epicor-epicpay">
                                                                                                    {" "}
                                                                                                    EpicPay
                                                                                                </Link>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <Link href="/solutions/erp-enterprise-solutions-and-services/sap" className="">
                                                                                                SAP
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <Link href="/solutions/erp-enterprise-solutions-and-services/ms-dynamics"
                                                                                                className=""
                                                                                            >
                                                                                                MS Dynamics
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li className="ser-btn">
                                                                                            <Link href="/solutions/erp-enterprise-solutions-and-services/sugar-crm" className="">
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
                                                                                                    <span>{t("News and events")}</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    RheinBrücke’s Kinetic ERP MEA Cloud Receives Green Certificate from Moro Hub for Sustainable Cloud Adoption
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <Link href="/news-events/867965e8-5dc5-4419-bf84-b7877b7036f1"
                                                                                                        className="animated-svg-link1 btn-style-3"
                                                                                                    >
                                                                                                        {t("Read More")}
                                                                                                        <NavArrowLeft />
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body secondser">
                                                                                                <h3>
                                                                                                    <span>Blog</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    How to Build a Future-Ready Digital Strategy
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <Link href="/blog-details/how-to-build-a-future-ready-digital-strategy/"
                                                                                                        className="animated-svg-link1 btn-style-3"
                                                                                                    >
                                                                                                        {t("Read More")}
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
                                                                                            href="/solutions/digital-services-and-solutions"
                                                                                        >
                                                                                            {t("Digital Solutions & Services")}
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
                                                                                                    BI & Analytics
                                                                                                </Link>
                                                                                                <Link href="/AI-ML">
                                                                                                    AI/ML
                                                                                                </Link>
                                                                                                <Link href="/Ecommerce">
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
                                                                                                    Architecture & App Modernisation
                                                                                                </Link>
                                                                                                <Link href="/data-engineering-warehousing">
                                                                                                    Data Engineering and Warehousing
                                                                                                </Link>
                                                                                                <Link href="/solutions/erp-enterprise-solutions-and-services/erp">
                                                                                                    Enterprise Software
                                                                                                </Link>
                                                                                                <Link href="/AM-S">
                                                                                                    A M & S
                                                                                                </Link>
                                                                                                <Link href="/user-exprience">
                                                                                                    User Experience
                                                                                                </Link>
                                                                                                <Link href="/Commercetools">
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
                                                                                                    <span>{t("News and events")}</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    RheinBrücke’s Kinetic ERP MEA Cloud Receives Green Certificate from Moro Hub for Sustainable Cloud Adoption
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <Link href="/news-events/867965e8-5dc5-4419-bf84-b7877b7036f1"
                                                                                                        className="animated-svg-link1 btn-style-3"
                                                                                                    >
                                                                                                        {t("Read More")}
                                                                                                        <NavArrowLeft />
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-md-6">
                                                                                            <div className="service-item-body secondser">
                                                                                                <h3>
                                                                                                    <span>Blog</span>
                                                                                                </h3>
                                                                                                <p>
                                                                                                    How to Build a Future-Ready Digital Strategy
                                                                                                </p>
                                                                                                <div className="ser-btn1">
                                                                                                    <Link href="/blog-details/how-to-build-a-future-ready-digital-strategy/"
                                                                                                        className="animated-svg-link1 btn-style-3"
                                                                                                    >
                                                                                                        {t("Read More")}
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
                                                    <span>{t("Industries")}</span>
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
                                                                                <h1>{t("Industries")}</h1>
                                                                                <div className="row">
                                                                                    <div className="col-sm-6">
                                                                                        <ul className="verline">
                                                                                            <li className="ser-btn">
                                                                                                <Link href="/Brand-owners-and-vertical-retail"
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
                                                                                                <Link href="/Distribution-and-supply-chain"
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
                                                                                                <Link href="/Automotive"
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
                                                                                                <Link href="/Engineering-Procurement-Construction-(EPC)"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Engineering Procurement and Construction
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
                                                                                                <Link href="/Private-Equity-Funding-Backed-Ventures"
                                                                                                    className="animated-svg-link"
                                                                                                >
                                                                                                    Private Equity & Funding Backed Ventures
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li className="ser-btn">
                                                                                                <Link href="/Cable-manufacturing"
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
                                                                                                <span>{t("News and events")}</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                RheinBrücke’s Kinetic ERP MEA Cloud Receives Green Certificate from Moro Hub for Sustainable Cloud Adoption
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="/news-events/867965e8-5dc5-4419-bf84-b7877b7036f1"
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
                                                                                                <span>{t("Blog")}</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                How to Build a Future-Ready Digital Strategy
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="/blog-details/how-to-build-a-future-ready-digital-strategy/"
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
                                                    <span>{t("Resources")} </span>{" "}
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
                                                                                <h1>{t("Resources")}</h1>
                                                                                <ul>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/Blog"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            {t("Blog")}
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/Case-study"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            {t("Case Studies")}
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/webinars"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            {t("Webinars")}
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/collaterals"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            {t("Collaterals")}
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/corporate-videos"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            {t("Videos")}
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li className="ser-btn">
                                                                                        <Link href="/news-events"
                                                                                            className="animated-svg-link"
                                                                                        >
                                                                                            {t("News and Events")}
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
                                                                                                <span>{t("News and events")}</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                RheinBrücke’s Kinetic ERP MEA Cloud Receives Green Certificate from Moro Hub for Sustainable Cloud Adoption
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="/news-events/867965e8-5dc5-4419-bf84-b7877b7036f1"
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
                                                                                                <span>{t("News and events")}</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                Grand Opening of India Development Centre (IDC) in RheinBrücke
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="/news-events/0aa57254-d987-4474-a229-0bd66716acb6"
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
                                                                                                <span>{t("Blog")}</span>
                                                                                            </h3>
                                                                                            <p>
                                                                                                How to Build a Future-Ready Digital Strategy
                                                                                            </p>
                                                                                            <div className="ser-btn1">
                                                                                                <Link href="/blog-details/how-to-build-a-future-ready-digital-strategy"
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
                                            <li className={`nav-item ${pathname === '/contact-us' || currentPage === 'contact-us' ? 'active' : ''}`}>
                                                <Link className="nav-link" href="/contact-us">
                                                    {t("Contact Us")}
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
                                                        <div className="search-full" id="searchFull">
                                                            <div className="search-bar" style={{ display: 'flex', alignItems: 'center' }}>
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
                                                                <span className="icon-close" id="searchClose">
                                                                    ✕
                                                                </span>
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
                                                                                            target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                            onClick={() => {
                                                                                                setIsSearchOpen(false);
                                                                                                setSearchQuery('');
                                                                                                setSearchResults([]);
                                                                                                const searchFull = document.getElementById('searchFull');
                                                                                                const searchBox = document.getElementById('searchBox');
                                                                                                if (searchFull) searchFull.classList.remove('active');
                                                                                                if (searchBox) {
                                                                                                    searchBox.classList.remove('active', 'search-active');
                                                                                                }
                                                                                            }}
                                                                                        >
                                                                                            <div className="result-title">{result.title}</div>
                                                                                            {/* <div className="result-url">{result.url}</div>/ */}
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
                                                    </button>
                                                    <div
                                                        className="search-full"
                                                        id="searchFull"
                                                        role="dialog"
                                                        aria-hidden="true"
                                                    >
                                                        <div className="container">
                                                            <div className="search-bar" style={{ display: 'flex', alignItems: 'center' }}>
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

                                <div
                                    className="search-full mobile-search-overlay"
                                    id="mobileSearchFull"
                                >
                                    <div className="search-bar" style={{ display: 'flex', alignItems: 'center' }}>
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
                                        <span
                                            className="icon-close"
                                            id="mobileSearchClose"
                                            role="button"
                                            tabIndex={0}
                                            aria-label="Close search"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setIsSearchOpen(false);
                                                setSearchQuery('');
                                                setSearchResults([]);
                                                const mobileSearchFullEl = document.getElementById('mobileSearchFull');
                                                const mobileSearchBoxEl = document.getElementById('mobileSearchBox');
                                                if (mobileSearchFullEl) mobileSearchFullEl.classList.remove('active');
                                                if (mobileSearchBoxEl) mobileSearchBoxEl.classList.remove('active', 'search-active');
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    setIsSearchOpen(false);
                                                    setSearchQuery('');
                                                    setSearchResults([]);
                                                    const mobileSearchFullEl = document.getElementById('mobileSearchFull');
                                                    const mobileSearchBoxEl = document.getElementById('mobileSearchBox');
                                                    if (mobileSearchFullEl) mobileSearchFullEl.classList.remove('active');
                                                    if (mobileSearchBoxEl) mobileSearchBoxEl.classList.remove('active', 'search-active');
                                                }
                                            }}
                                        >
                                            ✕
                                        </span>
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
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    onClick={() => {
                                                                        setIsSearchOpen(false);
                                                                        setSearchQuery('');
                                                                        setSearchResults([]);
                                                                        const mobileSearchFull = document.getElementById('mobileSearchFull');
                                                                        const mobileSearchBox = document.getElementById('mobileSearchBox');
                                                                        if (mobileSearchFull) mobileSearchFull.classList.remove('active');
                                                                        if (mobileSearchBox) {
                                                                            mobileSearchBox.classList.remove('active', 'search-active');
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
                                <Link href="#">{t("About Us")}</Link>
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
                                    <Link href="/about-us/overview">{t("Overview")}</Link>
                                </li>
                                <li>
                                    <Link href="/about-us/leadership">{t("Leadership")}</Link>
                                </li>
                                <li>
                                    <Link href="/about-us/customer-speak">{t("Customers Speak")}</Link>
                                </li>
                                <li>
                                    <Link href="/about-us/success-stories">{t("Success Stories")}</Link>
                                </li>
                                <li>
                                    <Link href="/careers">{t("Careers")}</Link>
                                </li>
                            </ul>
                        </li>
                        {/* Solutions & Services */}
                        <li>
                            <div className="menu-item">
                                <Link href="#">{t("Solutions & Services")}</Link>
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
                                        <Link href="#">{t("Our Solutions")}</Link>
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
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="19.1999"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 19.1999 8.40001)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx={12}
                                                        cy="15.6"
                                                        r="1.2"
                                                        transform="rotate(90 12 15.6)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="9.60005"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 9.60005 13.2)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="7.1999"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 7.1999 10.8)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="4.8"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 4.8 8.40001)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="14.4001"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 14.4001 13.2)"
                                                        fill="#000"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5511_10679">
                                                        <rect
                                                            width={24}
                                                            height={24}
                                                            fill="#000"
                                                            transform="translate(24 1.04907e-06) rotate(90)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                    <ul className="submenu">
                                        <li>
                                            <Link href="/solutions/CorusHR">Corus HR</Link>
                                        </li>
                                        <li>
                                            <Link href="/MeRLIN-strategic-sourcing-software">MeRLIN Sourcing</Link>
                                        </li>
                                    </ul>
                                </li>
                                {/* Enterprise Solutions & Services (Tab 2) */}
                                <li>
                                    <div className="menu-item">
                                        <Link href="/solutions/erp-enterprise-solutions-and-services/erp">{t("Enterprise Solutions & Services")}</Link>
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
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="19.1999"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 19.1999 8.40001)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx={12}
                                                        cy="15.6"
                                                        r="1.2"
                                                        transform="rotate(90 12 15.6)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="9.60005"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 9.60005 13.2)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="7.1999"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 7.1999 10.8)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="4.8"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 4.8 8.40001)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="14.4001"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 14.4001 13.2)"
                                                        fill="#000"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5511_10679">
                                                        <rect
                                                            width={24}
                                                            height={24}
                                                            fill="#000"
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
                                                <Link href="/solutions/erp-enterprise-solutions-and-services/epicor"> Epicor</Link>
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
                                                    <Link href="/Epicor-kinetic">Epicor Kinetic</Link>
                                                </li>
                                                <li>
                                                    <Link href="/Epicor-iscala">Epicor iScala</Link>
                                                </li>
                                                <li>
                                                    <Link href="/Epicor-companion">Epicor Companion Products</Link>
                                                </li>
                                                <li>
                                                    <Link href="/Epicor-epicpay">EpicPay</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/solutions/erp-enterprise-solutions-and-services/ms-dynamics">MS Dynamics</Link>
                                        </li>
                                        <li>
                                            <Link href="/solutions/erp-enterprise-solutions-and-services/sap">SAP</Link>
                                        </li>
                                        <li>
                                            <Link href="/solutions/erp-enterprise-solutions-and-services/sugar-crm">Sugar CRM</Link>
                                        </li>
                                        <li>
                                            <Link href="/ERP-customer-excellence">
                                                ERP Customer Excellence
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                {/* Digital Solutions & Services (Tab 3) */}
                                {/* Tab 3: Digital Solutions & Services */}
                                <li>
                                    <div className="menu-item">
                                        <Link href="/solutions/digital-services-and-solutions">
                                            {t("Digital Solutions & Services")}
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
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="19.1999"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 19.1999 8.40001)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx={12}
                                                        cy="15.6"
                                                        r="1.2"
                                                        transform="rotate(90 12 15.6)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="9.60005"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 9.60005 13.2)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="7.1999"
                                                        cy="10.8"
                                                        r="1.2"
                                                        transform="rotate(90 7.1999 10.8)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="4.8"
                                                        cy="8.40001"
                                                        r="1.2"
                                                        transform="rotate(90 4.8 8.40001)"
                                                        fill="#000"
                                                    />
                                                    <circle
                                                        cx="14.4001"
                                                        cy="13.2"
                                                        r="1.2"
                                                        transform="rotate(90 14.4001 13.2)"
                                                        fill="#000"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5511_10679">
                                                        <rect
                                                            width={24}
                                                            height={24}
                                                            fill="#000"
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
                                                    <Link href="/Ecommerce">eCommerce</Link>
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
                                                    <Link href="/solutions/erp-enterprise-solutions-and-services/erp">Enterprise Software</Link>
                                                </li>
                                                <li>
                                                    <Link href="/AM-S">A M &amp; S</Link>
                                                </li>
                                                <li>
                                                    <Link href="/user-exprience">User Experience</Link>
                                                </li>
                                                <li>
                                                    <Link href="/Commercetools">Commercetools</Link>
                                                </li>
                                                <li>
                                                    <Link href="/fluent-commerce">Fluent Commerce</Link>
                                                </li>
                                                <li>
                                                    <Link href="/ms-technology">MS Technologies</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/* Industries */}
                        <li>
                            <div className="menu-item">
                                <Link href="#">{t("Industries")}</Link>
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
                                    <Link href="/Brand-owners-and-vertical-retail">
                                        Brand Owners and Vertical Retailers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries-retail">Retail Industry</Link>
                                </li>
                                <li>
                                    <Link href="/Distribution-and-supply-chain">Distribution and Supply Chain</Link>
                                </li>
                                <li>
                                    <Link href="/discrete-manufacturing">Discrete Manufacturing</Link>
                                </li>
                                <li>
                                    <Link href="/Automotive">Automotive Industry</Link>
                                </li>
                                <li>
                                    <Link href="/Engineering-Procurement-Construction-(EPC)">Engineering Procurement and Construction</Link>
                                </li>
                                <li>
                                    <Link href="/process-manufacturing">Process Manufacturing</Link>
                                </li>
                                <li>
                                    <Link href="/Private-Equity-Funding-Backed-Ventures">
                                        Private Equity &amp; Funding Backed Ventures
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/Cable-manufacturing">Cable Manufacturing</Link>
                                </li>
                                <li>
                                    <Link href="/interior-design">Interior Design</Link>
                                </li>
                            </ul>
                        </li>
                        {/* Resources */}
                        <li>
                            <div className="menu-item">
                                <Link href="#">{t("Resources")}</Link>
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
                                    <Link href="/Blog">{t("Blog")}</Link>
                                </li>
                                {/* <li>
                                    <Link href="/Case-study">{t("Case Studies")}</Link>
                                </li> */}
                                <li>
                                    <Link href="/webinars">{t("Webinars")}</Link>
                                </li>
                                <li>
                                    <Link href="/collaterals">{t("Collaterals")}</Link>
                                </li>
                                <li>
                                    <Link href="/corporate-videos">{t("Videos")}</Link>
                                </li>
                                <li>
                                    <Link href="/news-events">{t("News and Events")}</Link>
                                </li>
                            </ul>
                        </li>
                        {/* Contact Us */}
                        <li>
                            <div className="menu-item">
                                <Link href="/contact-us">{t("Contact Us")}</Link>
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