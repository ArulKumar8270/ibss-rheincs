"use client";

import React, { useState, useEffect } from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import TestimonialandAward from "../Components/TestimonialandAward";
import Awards from "../Components/Awards";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";
import {useTranslation} from "../hooks/useTranslation";
import { NavArrowRight } from "../icons";

// Mapping of country codes (ISO 3166-1 alpha-2) to phone codes for location-based default
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
  'VI': '+1-340', 'WF': '+681', 'YE': '+967',   'ZM': '+260', 'ZW': '+263'
};

// Map display title (exact match) to PDF path under /Collateral/ for auto-download after form submit
const COLLATERAL_PDF_MAP: Record<string, string> = {
  // Whitepapers
  'Choosing the right ERP solution for your business': '/Collateral/Whitepaper/Choosing your ERP in 2024.pdf',
  'Future with Manufacturing Technology': '/Collateral/Whitepaper/Future with Manufacturing technology.pdf',
  'Finding the Perfect Candidate': '/Collateral/Whitepaper/Finding the perfect candidate.pdf',
  'The Need for Speed and Accurate Data': '/Collateral/Whitepaper/The need for speed and accurate data.pdf',
  "Top 6 Technologies Small And Midsize Manufacturers Can't Afford to Ignore": '/Collateral/Whitepaper/Top-6-Technologies-Small-and-Midsize-Manufacturers-Cant-Afford-to-Ignor....pdf',
  'ERP Guide 2023': '/Collateral/Whitepaper/ERP Guide 2023.pdf',
  'ERP and Digital transformation Outlook for 2023': '/Collateral/Whitepaper/ERP-and-Digital-Transformation-Outlook-for-2023 (1).pdf',
  'Four Quick Ways to Unlock Hidden Manufacturing Capacity': '/Collateral/Whitepaper/Future with Manufacturing technology.pdf',
  'The Future of ERP : Predictions and Trends for 2023': '/Collateral/Whitepaper/Future of ERP 2023 trends-Prediction and trends.pdf',
  'Choosing the Right ERP Solution to Support a Global Business': '/Collateral/Whitepaper/Choosing your ERP in 2024.pdf',
  'Best Practices for ERP Implementation Success': '/Collateral/Whitepaper/ERP Guide 2023.pdf',
  'Time to Rethink Accounting Software and switch to an ERP?': '/Collateral/Whitepaper/Time to rethink Accounting Software.pdf',
  'Transforming HR Made Easy': '/Collateral/Whitepaper/TransformingHRMadeEasy-version4.pdf',
  "Buyer's guide to choosing the right ERP": '/Collateral/Whitepaper/Buyer\'s Guide to Choosing ERP for Discrete Manufacturing Enterprise.pdf',
  'Choosing your ERP in 2024': '/Collateral/Whitepaper/Choosing your ERP in 2024.pdf',
  'ERP-in-2025-Your-Essential-Guide-to-the-Future': '/Collateral/Whitepaper/ERP Guide 2025 - Your essential guide to future.pdf',
  'Digital Solutions for Lasting Business Impact': '/Collateral/Whitepaper/Digital-Transformation.pdf',
  // Brochures
  'Corporate Brochure': '/Collateral/Brochure/RIC-Corporate-Brochure-ME.pdf',
  'Epicor ERP Brochure': '/Collateral/Brochure/RIC-Brochure-Epicor-ME.pdf',
  'Epicor for Oil and Gas Brochure': '/Collateral/Brochure/Oil field service brochure.pdf',
  'Epicor Copy Company Tool Overview': '/Collateral/Brochure/Copy company tool.pdf',
  'Epicor Payroll MEA Overview': '/Collateral/Brochure/RIC-Brochure-Epicor-Payroll-MEA.pdf',
  'Epicor HCM Overview': '/Collateral/Brochure/HCM & Epicor Payroll MEA-Case Study.pdf',
  'Epicor for Manufacturing Brochure': '/Collateral/Brochure/RIC-Brochure-EpicProcess-ME.pdf',
  'Epicor for EPC and Construction Brochure': '/Collateral/Brochure/RIC-Brochure-EpicBuild-ME.pdf',
  'Epicor for Distribution Brochure': '/Collateral/Brochure/Epicor - Distribution Industry-Brochure.pdf',
  'Epicor for Automotive Brochure': '/Collateral/Brochure/RIC-Brochure-Epicor-ME.pdf',
  "RheinBrücke's Power Plant Analytics Brochure": '/Collateral/Brochure/Power Plant Analysis -Brochure.pdf',
  'Epicor iScala for Hospitality Overview': '/Collateral/Brochure/Hospitality_Brochure.pdf',
  'Move to Epicor Cloud': '/Collateral/Brochure/Move to Epicor Cloud.pdf',
  // Factsheets
  'Choosing the right ERP Vendor': '/Collateral/Factsheet/Choosing the right erp vendor_Factsheet.pdf',
  'ROI Analysis Factsheet': '/Collateral/Factsheet/ROI Analysis - Business case for an ERP implementation.pdf',
  'Oilfield services Factsheet': '/Collateral/Factsheet/RIC-Factsheet-OilServ-ME.pdf',
  '3 Reasons why ERP software is a must for Financial Management': '/Collateral/Factsheet/RIC-Factsheet-3-Reasons-why-ERP-Software-is-must-for-Financial-Management.pdf',
  '20 Questions to ask before you choose your cloud ERP': '/Collateral/Factsheet/Factsheet-20 Questions to Ask Before you Choose your Cloud ERP-ME.pdf',
  'Warning Signs of A Growing business': '/Collateral/Factsheet/RIC-Factsheet-Warning-Signs-Of-A-Growing-Business-Thats-Outgrown-Its-Legacy-ERP-ME.pdf',
};

function getPdfPathForTitle(title: string): string | null {
  const normalized = title.trim();
  return COLLATERAL_PDF_MAP[normalized] ?? null;
}

// White paper items (rendered in reverse order: last in array = first on page)
const WHITEPAPER_ITEMS: { title: string; image: string; category: string }[] = [
  { title: 'Choosing the right ERP solution for your business', image: '/images/white1.png', category: 'erp cloud' },
  { title: 'Future with Manufacturing Technology', image: '/images/white2.png', category: 'cloud' },
  { title: 'Finding the Perfect Candidate', image: '/images/white3.png', category: 'hcm' },
  { title: 'The Need for Speed and Accurate Data', image: '/images/white4.png', category: 'erp' },
  { title: "Top 6 Technologies Small And Midsize Manufacturers Can't Afford to Ignore", image: '/images/white5.png', category: 'cloud' },
  { title: 'ERP Guide 2023', image: '/images/white6.jpg', category: 'erp cloud' },
  { title: 'ERP and Digital transformation Outlook for 2023', image: '/images/white7.jpg', category: 'erp cloud' },
  { title: 'Four Quick Ways to Unlock Hidden Manufacturing Capacity', image: '/images/white8.png', category: 'cloud' },
  { title: 'The Future of ERP : Predictions and Trends for 2023', image: '/images/white9.jpg', category: 'erp cloud' },
  { title: 'Choosing the Right ERP Solution to Support a Global Business', image: '/images/white10.png', category: 'erp cloud' },
  { title: 'Best Practices for ERP Implementation Success', image: '/images/white11.png', category: 'erp cloud' },
  { title: "Time to Rethink Accounting Software and switch to an ERP?", image: '/images/white12.jpg', category: 'erp cloud' },
  { title: 'Transforming HR Made Easy', image: '/images/white13.png', category: 'hcm' },
  { title: "Buyer's guide to choosing the right ERP", image: '/images/white14.jpg', category: 'erp cloud' },
  { title: 'Choosing your ERP in 2024', image: '/images/white15.png', category: 'erp cloud' },
  { title: 'ERP-in-2025-Your-Essential-Guide-to-the-Future', image: '/images/white16.png', category: 'erp cloud' },
  { title: 'Digital Solutions for Lasting Business Impact', image: '/images/newdigital.jpg', category: 'digital' },
];

export default function Collaterals() {
  const { t, language } = useTranslation();
    const router = useRouter();
    const leadSquaredPageName = (() => {
        try {
            if (typeof window === 'undefined') return 'Collaterals';
            const segments = window.location.pathname.split('/').filter(Boolean);
            const raw = segments.length ? segments[segments.length - 1] : 'Home';
            return decodeURIComponent(raw)
                .replace(/[-_]+/g, ' ')
                .trim()
                .replace(/\s+/g, ' ')
                .split(' ')
                .filter(Boolean)
                .map((word) =>
                    word.length <= 3 && /^[a-z]+$/i.test(word)
                        ? word.toUpperCase()
                        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(' ');
        } catch {
            return 'Collaterals';
        }
    })();
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
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    // Auto-detect country code based on user's location (IP geolocation)
    useEffect(() => {
        const detectCountryCode = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/', {
                    method: 'GET',
                    headers: { Accept: 'application/json' },
                });
                if (response.ok) {
                    const data = await response.json();
                    const countryCode = data.country_code;
                    if (countryCode && countryToPhoneCode[countryCode]) {
                        setFormData(prev => ({
                            ...prev,
                            countryCode: countryToPhoneCode[countryCode]
                        }));
                        return;
                    }
                }
            } catch {
                // ignore
            }
            try {
                const fallbackResponse = await fetch('https://ip-api.com/json/?fields=countryCode', {
                    method: 'GET',
                    headers: { Accept: 'application/json' },
                });
                if (fallbackResponse.ok) {
                    const fallbackData = await fallbackResponse.json();
                    const countryCode = fallbackData.countryCode;
                    if (countryCode && countryToPhoneCode[countryCode]) {
                        setFormData(prev => ({
                            ...prev,
                            countryCode: countryToPhoneCode[countryCode]
                        }));
                    }
                }
            } catch {
                // keep default +91
            }
        };
        detectCountryCode();
    }, []);

    // When "Read More" is clicked, capture the collateral title from the card's h4 for later PDF download
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest?.('a[data-bs-target="#myModal"]');
            if (!link) return;
            const item = link.closest?.('.col-sm-4.mb-4.item');
            if (!item) return;
            const h4 = item.querySelector?.('h4');
            const title = h4?.textContent?.replace(/\s+/g, ' ').trim();
            if (title) setSelectedCollateral({ title });
        };
        document.addEventListener('click', handler, true);
        return () => document.removeEventListener('click', handler, true);
    }, []);

    // Clear thank you message when modal is closed (X or backdrop) so next open is clean
    useEffect(() => {
        const modalEl = document.getElementById('myModal');
        if (!modalEl) return;
        const onHidden = () => {
            setStatus('idle');
            setStatusMessage('');
            setSelectedCollateral(null);
        };
        modalEl.addEventListener('hidden.bs.modal', onHidden);
        return () => modalEl.removeEventListener('hidden.bs.modal', onHidden);
    }, []);

    const [searchTerm, setSearchTerm] = useState({
        whitePapers: '',
        brochures: '',
        factsheets: ''
    });

    const [selectedCollateral, setSelectedCollateral] = useState<{ title: string } | null>(null);

    // Category filter for White Papers and Factsheets: Digital Transformation, ERP, Cloud, HCM
    const [selectedCategoriesWP, setSelectedCategoriesWP] = useState<string[]>([]);
    const [selectedCategoriesFS, setSelectedCategoriesFS] = useState<string[]>([]);
    // Category filter for Brochures (by title)
    const [selectedCategoriesBrochure, setSelectedCategoriesBrochure] = useState<string[]>([]);

    const CATEGORY_OPTIONS = [
        { value: 'digital', label: 'Digital Transformation' },
        { value: 'erp', label: 'ERP' },
        { value: 'cloud', label: 'Cloud' },
        { value: 'hcm', label: 'HCM' },
    ] as const;

    const BROCHURE_CATEGORY_OPTIONS = [
        { value: 'corporate-brochure', label: 'Corporate Brochure' },
        { value: 'epicor', label: 'EPICOR' },
        { value: 'epicor-iscala-hospitality', label: 'Epicor iScala for Hospitality' },
        { value: 'epicor-hcm', label: 'Epicor HCM' },
        { value: 'epicor-payroll-mea', label: 'Epicor Payroll MEA' },
        { value: 'epicor-copy-company-tool', label: 'Epicor Copy Company Tool' },
        { value: 'power-plant-analytics', label: 'Power Plant Analytics' },
        { value: 'epicor-manufacturing', label: 'Epicor for Manufacturing' },
        { value: 'epicor-epc-construction', label: 'Epicor for EPC and Construction' },
        { value: 'epicor-automotive', label: 'Epicor for Automotive' },
        { value: 'epicor-distribution', label: 'Epicor for Distribution' },
    ] as const;

    const toggleCategory = (tab: 'wp' | 'fs' | 'brochure', value: string) => {
        if (tab === 'wp') {
            setSelectedCategoriesWP((prev) =>
                prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
            );
        } else if (tab === 'fs') {
            setSelectedCategoriesFS((prev) =>
                prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
            );
        } else {
            setSelectedCategoriesBrochure((prev) =>
                prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
            );
        }
    };

    const showByCategory = (itemCategory: string, selectedCategories: string[]): boolean => {
        if (selectedCategories.length === 0) return true;
        const itemCats = itemCategory.trim().split(/\s+/);
        return itemCats.some((c) => selectedCategories.includes(c));
    };

    // Brochure filter: when "epicor" is selected, show all EPICOR work (epicor + epicor-*)
    const showByCategoryBrochure = (itemCategory: string, selectedCategories: string[]): boolean => {
        if (selectedCategories.length === 0) return true;
        if (selectedCategories.includes(itemCategory)) return true;
        if (selectedCategories.includes('epicor') && (itemCategory === 'epicor' || itemCategory.startsWith('epicor-'))) return true;
        return false;
    };

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

    const handleSearchChange = (tab: 'whitePapers' | 'brochures' | 'factsheets', value: string) => {
        setSearchTerm(prev => ({
            ...prev,
            [tab]: value
        }));
    };

	    const filterItems = (itemTitle: string, searchValue: string): boolean => {
	        if (!searchValue.trim()) return true;
	        return itemTitle.toLowerCase().includes(searchValue.toLowerCase());
	    };
	
	    const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
	
	    const waitFor = async (
	        predicate: () => boolean,
	        { timeoutMs, intervalMs }: { timeoutMs: number; intervalMs: number },
	    ) => {
	        const start = Date.now();
	        while (Date.now() - start < timeoutMs) {
	            if (predicate()) return true;
	            await sleep(intervalMs);
	        }
	        return false;
	    };
	
	    const captureLeadSquared = async () => {
	        if (typeof window === 'undefined') return;
	
	        await waitFor(() => typeof (window as any).saveleadlan === 'function', {
	            timeoutMs: 1000,
	            intervalMs: 50,
	        });
	
	        await waitFor(() => typeof (window as any).LSQForm !== 'undefined', {
	            timeoutMs: 1200,
	            intervalMs: 100,
	        });
	
	        const saveLead = (window as any).saveleadlan;
	        if (typeof saveLead !== 'function') {
	            console.warn('LeadSquared: saveleadlan not available');
	            return;
	        }
	
	        try {
	            const form = document.getElementById('form1') as HTMLFormElement | null;
	            let messageField = form?.querySelector('[name="message"]') as HTMLInputElement | HTMLTextAreaElement | null;
	            let createdMessageField = false;
	
	            if (form && !messageField) {
	                const input = document.createElement('input');
	                input.type = 'hidden';
	                input.name = 'message';
	                form.appendChild(input);
	                messageField = input;
	                createdMessageField = true;
	            }

	            await Promise.resolve(saveLead());
	
	            if (createdMessageField && messageField) {
	                messageField.remove();
	            }
	            await sleep(400);
	        } catch (error) {
	            console.warn('LeadSquared: capture failed', error);
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

        setErrors(validationErrors);

        // Check if there are any errors
        const hasErrors = Object.values(validationErrors).some(error => error !== '');
        if (hasErrors) {
            setStatus('error');
            setStatusMessage('Please fix the errors in the form before submitting.');
            return;
        }

        setStatus('loading');
        setStatusMessage('Submitting your request...');

        try {
            // Determine collateral category from the PDF path
            let selection = 'Collaterals Request';
            if (selectedCollateral?.title) {
                const pdfPath = getPdfPathForTitle(selectedCollateral.title);
                if (pdfPath) {
                    if (pdfPath.includes('/Whitepaper/')) selection = 'Whitepaper - Collaterals Request';
                    else if (pdfPath.includes('/Brochure/')) selection = 'Brochure - Collaterals Request';
                    else if (pdfPath.includes('/Factsheet/')) selection = 'Factsheet - Collaterals Request';
                }
            }

            // Validate required fields
            const { fullName, countryCode, phone, email, companyName } = formData;

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
                        selection: selection,
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
                // Send emails via Supabase Edge Function (SendGrid)
                try {
                    const supabase = createClient();
                    const { data: emailResult, error: emailError } = await supabase.functions.invoke('send-contact-email', {
                        body: {
                            channel: 'collaterals',
                            fullName,
                            email,
                            phone,
                            countryCode: countryCode || '+91',
                            companyName,
                            selection: selection,
                            message: null,
                        },
                    });

                    if (emailError) {
                        console.warn('Email sending failed:', emailError.message);
                    } else if (emailResult && !emailResult.success) {
                        console.warn('Email sending failed:', emailResult.error);
                    }
                } catch (emailError: any) {
                    console.error('Email sending error:', emailError);
                }

	                setStatus('success');
	                setStatusMessage('Thank you for downloading our collateral. If you require any additional information or assistance, please do not hesitate to reach out to <a href="mailto:info@rheincs.com" class="text-blue-600 hover:underline">info@rheincs.com</a>');
	
	                // ✅ LeadSquared (best-effort, before reset/close)
	                await captureLeadSquared();
	                // Auto-download PDF matching the selected collateral title
	                if (selectedCollateral?.title) {
	                    const pdfPath = getPdfPathForTitle(selectedCollateral.title);
	                    if (pdfPath) {
                        try {
                            const link = document.createElement('a');
                            link.href = pdfPath;
                            link.download = pdfPath.split('/').pop() || 'collateral.pdf';
                            link.target = '_blank';
                            link.rel = 'noopener noreferrer';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        } catch (err) {
                            console.warn('PDF download failed:', err);
                        }
                    }
                }
                // Reset form values
                setFormData({
                    fullName: '',
                    countryCode: '+91',
                    phone: '',
                    email: '',
                    companyName: ''
                });
                setErrors({});
                setTouched({});
                // Close modal after 2 seconds and clear thank you message so next open is clean
                setTimeout(() => {
                    const modalElement = document.getElementById('myModal');
                    if (modalElement) {
                        const modal = (window as any).bootstrap?.Modal?.getInstance(modalElement);
                        if (modal) {
                            modal.hide();
                        }
                    }
                    setStatus('idle');
                    setStatusMessage('');
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
                                    <h2 className="text-anime-style-21" data-cursor="-opaque">
                                        {t("Collaterals")}
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
                                        {t("Collaterals")}
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
                                                                    value={searchTerm.whitePapers}
                                                                    onChange={(e) => handleSearchChange('whitePapers', e.target.value)}
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
                                                                    <h6 className="fome-filter-title">Category</h6>
                                                                    <div className="filter-check-box-waber">
                                                                        {CATEGORY_OPTIONS.map((opt) => (
                                                                            <div key={opt.value} className="form-check">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    checked={selectedCategoriesWP.includes(opt.value)}
                                                                                    onChange={() => toggleCategory('wp', opt.value)}
                                                                                    id={`wp-mob-${opt.value}`}
                                                                                />
                                                                                <label className="form-check-label" htmlFor={`wp-mob-${opt.value}`}>
                                                                                    {opt.label}
                                                                                </label>
                                                                            </div>
                                                                        ))}
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
                                                                {[...WHITEPAPER_ITEMS].reverse().map((item) => (
                                                                    <div
                                                                        key={item.title}
                                                                        className="col-sm-4 mb-4 item"
                                                                        data-category={item.category}
                                                                        style={{ display: (filterItems(item.title, searchTerm.whitePapers) && showByCategory(item.category, selectedCategoriesWP)) ? 'block' : 'none' }}
                                                                    >
                                                                        <div className="video-gallery-image ">
                                                                            <figure>
                                                                                <img src={item.image} alt="" />
                                                                            </figure>
                                                                            <h4>{item.title}</h4>
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
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 systemview">
                                                    <form action="" method="post" onSubmit={(e) => e.preventDefault()}>
                                                        <div className="blog-serch">
                                                            <input 
                                                                type="text" 
                                                                placeholder="Search" 
                                                                value={searchTerm.whitePapers}
                                                                onChange={(e) => handleSearchChange('whitePapers', e.target.value)}
                                                            />
                                                            <button type="submit">
                                                                <img src="/new/ser-blog.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <h6 className="fome-filter-title">Category</h6>
                                                    <div className="filter-check-box-waber">
                                                        {CATEGORY_OPTIONS.map((opt) => (
                                                            <div key={opt.value} className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    checked={selectedCategoriesWP.includes(opt.value)}
                                                                    onChange={() => toggleCategory('wp', opt.value)}
                                                                    id={`wp-desk-${opt.value}`}
                                                                />
                                                                <label className="form-check-label" htmlFor={`wp-desk-${opt.value}`}>
                                                                    {opt.label}
                                                                </label>
                                                            </div>
                                                        ))}
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
                                                                    value={searchTerm.brochures}
                                                                    onChange={(e) => handleSearchChange('brochures', e.target.value)}
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
                                                                    <h6 className="fome-filter-title">Category</h6>
                                                                    <div className="filter-check-box-waber">
                                                                        {BROCHURE_CATEGORY_OPTIONS.map((opt) => (
                                                                            <div key={opt.value} className="form-check">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    checked={selectedCategoriesBrochure.includes(opt.value)}
                                                                                    onChange={() => toggleCategory('brochure', opt.value)}
                                                                                    id={`bro-mob-${opt.value}`}
                                                                                />
                                                                                <label className="form-check-label" htmlFor={`bro-mob-${opt.value}`}>
                                                                                    {opt.label}
                                                                                </label>
                                                                            </div>
                                                                        ))}
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
                                                                {/* Item 1: Corporate Brochure */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="corporate-brochure"
                                                                    style={{ display: (filterItems('Corporate Brochure', searchTerm.brochures) && showByCategoryBrochure('corporate-brochure', selectedCategoriesBrochure)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
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
                                                                {/* Item 2: EPICOR */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="epicor"
                                                                    style={{ display: (filterItems('Epicor ERP Brochure', searchTerm.brochures) && showByCategoryBrochure('epicor', selectedCategoriesBrochure)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
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
                                                                {/* Item 3: EPICOR (Oil and Gas) */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="epicor"
                                                                    style={{ display: (filterItems('Epicor for Oil and Gas Brochure', searchTerm.brochures) && showByCategoryBrochure('epicor', selectedCategoriesBrochure)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
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
                                                                {/* Item 4: Epicor Copy Company Tool */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="epicor-copy-company-tool"
                                                                    style={{ display: (filterItems('Epicor Copy Company Tool Overview', searchTerm.brochures) && showByCategoryBrochure('epicor-copy-company-tool', selectedCategoriesBrochure)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
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
                                                                {/* Item 5: Epicor Payroll MEA */}
                                                                <div className="col-sm-4 mb-4 item" data-category="epicor-payroll-mea" style={{ display: (filterItems('Epicor Payroll MEA Overview', searchTerm.brochures) && showByCategoryBrochure('epicor-payroll-mea', selectedCategoriesBrochure)) ? 'block' : 'none' }}>
                                                                    <div className="video-gallery-image ">
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
                                                                {/* Item 6: Epicor HCM */}
                                                                <div className="col-sm-4 mb-4 item" data-category="epicor-hcm" style={{ display: (filterItems('Epicor HCM Overview', searchTerm.brochures) && showByCategoryBrochure('epicor-hcm', selectedCategoriesBrochure)) ? 'block' : 'none' }}>
                                                                    <div className="video-gallery-image ">
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
                                                                <div className="col-sm-4 mb-4 item" data-category="epicor-manufacturing" style={{ display: (filterItems('Epicor for Manufacturing Brochure', searchTerm.brochures) && showByCategoryBrochure('epicor-manufacturing', selectedCategoriesBrochure)) ? 'block' : 'none' }}>
                                                                    <div className="video-gallery-image ">
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
                                                                    data-category="epicor-epc-construction"
                                                                    style={{ display: (filterItems('Epicor for EPC and Construction Brochure', searchTerm.brochures) && showByCategoryBrochure('epicor-epc-construction', selectedCategoriesBrochure)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
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
                                                                    data-category="epicor-distribution"
                                                                    style={{ display: (filterItems('Epicor for Distribution Brochure', searchTerm.brochures) && showByCategoryBrochure('epicor-distribution', selectedCategoriesBrochure)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
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
                                                                <div className="col-sm-4 mb-4 item" data-category="epicor-automotive" style={{ display: (filterItems('Epicor for Automotive Brochure', searchTerm.brochures) && showByCategoryBrochure('epicor-automotive', selectedCategoriesBrochure)) ? 'block' : 'none' }}>
                                                                    <div className="video-gallery-image ">
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
                                                                    data-category="power-plant-analytics"
                                                                    style={{ display: (filterItems("RheinBrücke's Power Plant Analytics Brochure", searchTerm.brochures) && showByCategoryBrochure('power-plant-analytics', selectedCategoriesBrochure)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
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
                                                                    data-category="epicor-iscala-hospitality"
                                                                    style={{ display: (filterItems('Epicor iScala for Hospitality Overview', searchTerm.brochures) && showByCategoryBrochure('epicor-iscala-hospitality', selectedCategoriesBrochure)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
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
                                                                    data-category="epicor"
                                                                    style={{ display: (filterItems('Move to Epicor Cloud', searchTerm.brochures) && showByCategoryBrochure('epicor', selectedCategoriesBrochure)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
                                                                        <figure>
                                                                            <img src="/images/bro13.jpg" alt="" />
                                                                        </figure>
                                                                        <h4>Move to Epicor Cloud</h4>
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
                                                    <form action="" method="post" onSubmit={(e) => e.preventDefault()}>
                                                        <div className="blog-serch">
                                                            <input 
                                                                type="text" 
                                                                placeholder="Search" 
                                                                value={searchTerm.brochures}
                                                                onChange={(e) => handleSearchChange('brochures', e.target.value)}
                                                            />
                                                            <button type="submit">
                                                                <img src="/new/ser-blog.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <h6 className="fome-filter-title">Category</h6>
                                                    <div className="filter-check-box-waber">
                                                        {BROCHURE_CATEGORY_OPTIONS.map((opt) => (
                                                            <div key={opt.value} className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    checked={selectedCategoriesBrochure.includes(opt.value)}
                                                                    onChange={() => toggleCategory('brochure', opt.value)}
                                                                    id={`bro-desk-${opt.value}`}
                                                                />
                                                                <label className="form-check-label" htmlFor={`bro-desk-${opt.value}`}>
                                                                    {opt.label}
                                                                </label>
                                                            </div>
                                                        ))}
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
                                                                    value={searchTerm.factsheets}
                                                                    onChange={(e) => handleSearchChange('factsheets', e.target.value)}
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
                                                                    <h6 className="fome-filter-title">Category</h6>
                                                                    <div className="filter-check-box-waber">
                                                                        {CATEGORY_OPTIONS.map((opt) => (
                                                                            <div key={opt.value} className="form-check">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    checked={selectedCategoriesFS.includes(opt.value)}
                                                                                    onChange={() => toggleCategory('fs', opt.value)}
                                                                                    id={`fs-mob-${opt.value}`}
                                                                                />
                                                                                <label className="form-check-label" htmlFor={`fs-mob-${opt.value}`}>
                                                                                    {opt.label}
                                                                                </label>
                                                                            </div>
                                                                        ))}
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
                                                                    data-category="erp"
                                                                    style={{ display: (filterItems('Choosing the right ERP Vendor', searchTerm.factsheets) && showByCategory('erp', selectedCategoriesFS)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
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
                                                                {/* Item 2: ERP */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="erp"
                                                                    style={{ display: (filterItems('ROI Analysis Factsheet', searchTerm.factsheets) && showByCategory('erp', selectedCategoriesFS)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
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
                                                                {/* Item 3: ERP */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="erp"
                                                                    style={{ display: (filterItems('Oilfield services Factsheet', searchTerm.factsheets) && showByCategory('erp', selectedCategoriesFS)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
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
                                                                {/* Item 4: ERP */}
                                                                <div
                                                                    className="col-sm-4 mb-4 item"
                                                                    data-category="erp"
                                                                    style={{ display: (filterItems('3 Reasons why ERP software is a must for Financial Management', searchTerm.factsheets) && showByCategory('erp', selectedCategoriesFS)) ? 'block' : 'none' }}
                                                                >
                                                                    <div className="video-gallery-image ">
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
                                                                <div className="col-sm-4 mb-4 item" data-category="erp cloud" style={{ display: (filterItems('20 Questions to ask before you choose your cloud ERP', searchTerm.factsheets) && showByCategory('erp cloud', selectedCategoriesFS)) ? 'block' : 'none' }}>
                                                                    <div className="video-gallery-image ">
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
                                                                <div className="col-sm-4 mb-4 item" data-category="erp cloud" style={{ display: (filterItems('Warning Signs of A Growing business', searchTerm.factsheets) && showByCategory('erp cloud', selectedCategoriesFS)) ? 'block' : 'none' }}>
                                                                    <div className="video-gallery-image ">
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
                                                    <form action="" method="post" onSubmit={(e) => e.preventDefault()}>
                                                        <div className="blog-serch">
                                                            <input 
                                                                type="text" 
                                                                placeholder="Search blogs" 
                                                                value={searchTerm.factsheets}
                                                                onChange={(e) => handleSearchChange('factsheets', e.target.value)}
                                                            />
                                                            <button type="submit">
                                                                <img src="/new/ser-blog.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <h6 className="fome-filter-title">Category</h6>
                                                    <div className="filter-check-box-waber">
                                                        {CATEGORY_OPTIONS.map((opt) => (
                                                            <div key={opt.value} className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    checked={selectedCategoriesFS.includes(opt.value)}
                                                                    onChange={() => toggleCategory('fs', opt.value)}
                                                                    id={`fs-desk-${opt.value}`}
                                                                />
                                                                <label className="form-check-label" htmlFor={`fs-desk-${opt.value}`}>
                                                                    {opt.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="page-nate-waber">
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
                                    </div> */}
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
                                        <h2>{t("Ready to accelerate value creation across your portfolio?")}</h2>
                                        <p>
                                            {t("Contact us today to learn how we can help modernise operations, de-risk integrations, and improve commercial outcomes.")}
                                        </p>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="ser-btn text-right">
                                            <Link href="/contact-us" className="animated-svg-link">
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
                                            <h4 className="modal-title">Download a copy now!</h4>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                            />
                                        </div>
                                        {/* Modal body */}
                                        <div className="modal-body">
                                            <div className="contect-enq-waber">
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
                                                        <div dangerouslySetInnerHTML={{ __html: statusMessage }} />
                                                    </div>
                                                )}

	                                                <form onSubmit={handleSubmit} id="form1" className="row g-3 pp-0">
                                                    {/* Hidden Fields for LeadSquared Tracking */}
                                                    {/* <input type="hidden" name="Search" value={leadSquaredPageName} /> */}
                                                    <input type="hidden" name="pageName" value={selectedCollateral?.title ? `Selection: Collateral: ${selectedCollateral.title}` : "Selection: Collaterals Request"} />

                                                     {/* <input type="hidden" name="pageName" value="Collateral Request" /> */}
<input
  type="hidden"
  name="Page_URL"
  value={typeof window !== "undefined" ? window.location.href : ""}
/>

                                                    {/* Full Name */}
                                                    <div className="col-12">
                                                        <input
                                                            type="text"
                                                            className={`form-control custom-form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
                                                            name="fullName"
                                                            placeholder="Enter Your Full Name*"
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
                                                    <div className="col-md-12">
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
                                                                        <path d="M6 9L1 4H11L6 9Z" fill="#666" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <input
                                                                type="tel"
                                                                className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                                                                name="phone"
                                                                placeholder="Enter Your Phone No*"
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
                                                    <div className="col-md-12">
                                                        <input
                                                            type="email"
                                                            className={`form-control custom-form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                                            name="email"
                                                            placeholder="Enter Your Email Address*"
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
                                                    <div className="col-md-12">
                                                        <input
                                                            type="text"
                                                            className={`form-control custom-form-control ${touched.companyName && errors.companyName ? 'is-invalid' : ''}`}
                                                            name="companyName"
                                                            placeholder="Enter Your Company Name*"
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
