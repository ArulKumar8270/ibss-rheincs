"use client";

import React, { useState, useEffect } from 'react'
import CommomLayout from '../../Components/CommomLayout'
import { createClient } from '@/lib/supabase-browser'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Job {
    id: string
    slug?: string | null
    title: string
    department: string
    location: string
    type: string
    description: string
    requirements: string
    responsibilities?: string[] | null
    qualifications?: string[] | null
    salary_range?: string | null
    application_deadline?: string | null
    published?: boolean
}

// Mapping of location names to phone codes
// Maps common location strings to exact values in the select dropdown
const locationToPhoneCode: Record<string, string> = {
    // Countries
    'Afghanistan': '+93', 'Albania': '+355', 'Algeria': '+213', 'Andorra': '+376', 'Angola': '+244',
    'Antigua and Barbuda': '+1-268', 'Argentina': '+54', 'Armenia': '+374', 'Australia': '+61', 'Austria': '+43',
    'Azerbaijan': '+994', 'Bahamas': '+1-242', 'Bahrain': '+973', 'Bangladesh': '+880', 'Barbados': '+1-246',
    'Belarus': '+375', 'Belgium': '+32', 'Belize': '+501', 'Benin': '+229', 'Bermuda': '+1-441',
    'Bhutan': '+975', 'Bolivia': '+591', 'Bosnia and Herzegovina': '+387', 'Botswana': '+267', 'Brazil': '+55',
    'Brunei': '+673', 'Bulgaria': '+359', 'Burkina Faso': '+226', 'Burundi': '+257', 'Cambodia': '+855',
    'Cameroon': '+237', 'Canada': '+1', 'Cape Verde': '+238', 'Cayman Islands': '+1-345', 'Central African Republic': '+236',
    'Chad': '+235', 'Chile': '+56', 'China': '+86', 'Colombia': '+57', 'Comoros': '+269',
    'Congo': '+242', 'Costa Rica': '+506', 'Croatia': '+385', 'Cuba': '+53', 'Cyprus': '+357',
    'Czech Republic': '+420', 'Denmark': '+45', 'Djibouti': '+253', 'Dominica': '+1-767', 'Dominican Republic': '+1-809',
    'Ecuador': '+593', 'Egypt': '+20', 'El Salvador': '+503', 'Equatorial Guinea': '+240', 'Eritrea': '+291',
    'Estonia': '+372', 'Ethiopia': '+251', 'Falkland Islands': '+500', 'Faroe Islands': '+298', 'Fiji': '+679',
    'Finland': '+358', 'France': '+33', 'French Guiana': '+594', 'French Polynesia': '+689', 'Gabon': '+241',
    'Gambia': '+220', 'Georgia': '+995', 'Germany': '+49', 'Ghana': '+233', 'Gibraltar': '+350',
    'Greece': '+30', 'Greenland': '+299', 'Grenada': '+1-473', 'Guadeloupe': '+590', 'Guam': '+1-671',
    'Guatemala': '+502', 'Guinea': '+224', 'Guinea-Bissau': '+245', 'Guyana': '+592', 'Haiti': '+509',
    'Honduras': '+504', 'Hong Kong': '+852', 'Hungary': '+36', 'Iceland': '+354', 'India': '+91',
    'Indonesia': '+62', 'Iran': '+98', 'Iraq': '+964', 'Ireland': '+353', 'Israel': '+972',
    'Italy': '+39', 'Jamaica': '+1-876', 'Japan': '+81', 'Jordan': '+962', 'Kazakhstan': '+7',
    'Kenya': '+254', 'Kiribati': '+686', 'Kuwait': '+965', 'Kyrgyzstan': '+996', 'Laos': '+856',
    'Latvia': '+371', 'Lebanon': '+961', 'Lesotho': '+266', 'Liberia': '+231', 'Libya': '+218',
    'Liechtenstein': '+423', 'Lithuania': '+370', 'Luxembourg': '+352', 'Macau': '+853', 'North Macedonia': '+389',
    'Macedonia': '+389', 'Madagascar': '+261', 'Malawi': '+265', 'Malaysia': '+60', 'Maldives': '+960',
    'Mali': '+223', 'Malta': '+356', 'Marshall Islands': '+692', 'Martinique': '+596', 'Mauritania': '+222',
    'Mauritius': '+230', 'Mexico': '+52', 'Micronesia': '+691', 'Moldova': '+373', 'Monaco': '+377',
    'Mongolia': '+976', 'Montenegro': '+382', 'Montserrat': '+1-664', 'Morocco': '+212', 'Mozambique': '+258',
    'Myanmar': '+95', 'Namibia': '+264', 'Nauru': '+674', 'Nepal': '+977', 'Netherlands': '+31',
    'New Caledonia': '+687', 'New Zealand': '+64', 'Nicaragua': '+505', 'Niger': '+227', 'Nigeria': '+234',
    'North Korea': '+850', 'Norway': '+47', 'Oman': '+968', 'Pakistan': '+92', 'Palau': '+680',
    'Palestine': '+970', 'Panama': '+507', 'Papua New Guinea': '+675', 'Paraguay': '+595', 'Peru': '+51',
    'Philippines': '+63', 'Poland': '+48', 'Portugal': '+351', 'Puerto Rico': '+1-787', 'Qatar': '+974',
    'Réunion': '+262', 'Romania': '+40', 'Russia': '+7', 'Rwanda': '+250', 'Saint Kitts and Nevis': '+1-869',
    'Saint Lucia': '+1-758', 'Saint Vincent': '+1-784', 'Samoa': '+685', 'San Marino': '+378', 'São Tomé and Príncipe': '+239',
    'Saudi Arabia': '+966', 'Senegal': '+221', 'Serbia': '+381', 'Seychelles': '+248', 'Sierra Leone': '+232',
    'Singapore': '+65', 'Slovakia': '+421', 'Slovenia': '+386', 'Solomon Islands': '+677', 'Somalia': '+252',
    'South Africa': '+27', 'South Korea': '+82', 'South Sudan': '+211', 'Spain': '+34', 'Sri Lanka': '+94',
    'Sudan': '+249', 'Suriname': '+597', 'Eswatini': '+268', 'Sweden': '+46', 'Switzerland': '+41',
    'Syria': '+963', 'Taiwan': '+886', 'Tajikistan': '+992', 'Tanzania': '+255', 'Thailand': '+66',
    'Togo': '+228', 'Tonga': '+676', 'Trinidad and Tobago': '+1-868', 'Tunisia': '+216', 'Turkey': '+90',
    'Turkmenistan': '+993', 'Turks and Caicos': '+1-649', 'Tuvalu': '+688', 'Uganda': '+256', 'Ukraine': '+380',
    'United Arab Emirates': '+971', 'UAE': '+971', 'United Kingdom': '+44', 'UK': '+44', 'United States': '+1',
    'USA': '+1', 'US': '+1', 'Uruguay': '+598', 'Uzbekistan': '+998', 'Vanuatu': '+678',
    'Vatican City': '+379', 'Venezuela': '+58', 'Vietnam': '+84', 'British Virgin Islands': '+1-284', 'US Virgin Islands': '+1-340',
    'Wallis and Futuna': '+681', 'Yemen': '+967', 'Zambia': '+260', 'Zimbabwe': '+263',
    // Common city/country combinations
    'Dubai': '+971', 'Abu Dhabi': '+971', 'London': '+44', 'New York': '+1', 'Toronto': '+1',
    'Mumbai': '+91', 'Delhi': '+91', 'Bangalore': '+91', 'Chennai': '+91', 'Hyderabad': '+91',
    'Kolkata': '+91', 'Pune': '+91', 'Berlin': '+49', 'Munich': '+49', 'Frankfurt': '+49',
    'Paris': '+33', 'Amsterdam': '+31', 'Brussels': '+32', 'Madrid': '+34', 'Rome': '+39',
    'Milan': '+39', 'Vienna': '+43', 'Zurich': '+41', 'Stockholm': '+46', 'Oslo': '+47',
    'Copenhagen': '+45', 'Helsinki': '+358', 'Warsaw': '+48', 'Prague': '+420', 'Budapest': '+36',
    'Athens': '+30', 'Lisbon': '+351', 'Dublin': '+353', 'Sydney': '+61', 'Melbourne': '+61',
    'Tokyo': '+81', 'Seoul': '+82', 'Bangkok': '+66',
    'Kuala Lumpur': '+60', 'Jakarta': '+62', 'Manila': '+63', 'Beijing': '+86', 'Shanghai': '+86',
    'Sao Paulo': '+55', 'Buenos Aires': '+54', 'Mexico City': '+52', 'Johannesburg': '+27',
    'Cairo': '+20', 'Riyadh': '+966', 'Doha': '+974', 'Kuwait City': '+965', 'Tel Aviv': '+972',
    'Istanbul': '+90', 'Moscow': '+7'
};

// Helper function to find phone code from location string
const getPhoneCodeFromLocation = (location: string): string | null => {
    if (!location) return null;
    
    // Normalize location string
    const normalizedLocation = location.trim();
    
    // Direct match
    if (locationToPhoneCode[normalizedLocation]) {
        return locationToPhoneCode[normalizedLocation];
    }
    
    // Case-insensitive match
    const locationLower = normalizedLocation.toLowerCase();
    for (const [key, value] of Object.entries(locationToPhoneCode)) {
        if (key.toLowerCase() === locationLower) {
            return value;
        }
    }
    
    // Partial match (e.g., "Mumbai, India" -> "+91")
    for (const [key, value] of Object.entries(locationToPhoneCode)) {
        if (locationLower.includes(key.toLowerCase()) || key.toLowerCase().includes(locationLower)) {
            return value;
        }
    }
    
    return null;
};

interface JobDetailClientProps {
    jobId: string
    initialJob?: Job | null
}

export default function JobDetailClient({ jobId, initialJob }: JobDetailClientProps) {
    const router = useRouter()

    const [job, setJob] = useState<Job | null>(initialJob || null)
    const [loading, setLoading] = useState(!initialJob && !job)
    const [isAdmin, setIsAdmin] = useState(false)
    const [formData, setFormData] = useState({
        selection: initialJob?.title || '',
        fullName: '',
        email: '',
        countryCode: '+91',
        phone: '',
        message: ''
    })
    const [file, setFile] = useState<File | null>(null)
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [statusMessage, setStatusMessage] = useState('')
    const [isCountryCodeFocused, setIsCountryCodeFocused] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    const supabase = createClient()

    const checkAdminStatus = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            setIsAdmin(!!user);
        } catch (err) {
            setIsAdmin(false);
        }
    };

    // Replace &nbsp; with regular spaces in text content to allow proper word breaking
    const processContent = (text: string | null | undefined): string => {
        if (!text) return '';
        // Replace &nbsp; with regular spaces
        // This allows words to break naturally at word boundaries
        return text.replace(/&nbsp;/g, ' ');
    };

    useEffect(() => {
        // ALWAYS fetch from database - never rely on initialJob
        // This ensures new content created after build is always accessible
        if (jobId && jobId !== 'placeholder') {
            fetchJob()
        } else if (jobId === 'placeholder') {
            router.push('/careers')
            return
        } else {
            router.push('/careers')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jobId]) // Only depend on jobId, not initialJob

    const fetchJob = async () => {
        try {
            setLoading(true);

            // Check admin status
            await checkAdminStatus();

            // ALWAYS fetch from database - never use cached/initial data
            // URL segment can be slug or id (support both for slug-based and legacy links)
            const { data, error } = await supabase
                .from('careers')
                .select('*')
                .or(`slug.eq.${jobId},id.eq.${jobId}`)
                .maybeSingle()

            if (error) {
                console.error(`[JobDetailClient] Supabase error:`, error);
                router.push('/careers');
                return;
            }
            if (!data) {
                router.push('/careers');
                return;
            }


            // Check if job is published or user is admin
            const { data: { user } } = await supabase.auth.getUser();
            const userIsAdmin = !!user;

            if (!data.published && !userIsAdmin) {
                router.push('/careers');
                return;
            }

            // Parse responsibilities and qualifications if they're JSON strings
            const parsedJob = {
                ...data,
                responsibilities: typeof data.responsibilities === 'string'
                    ? JSON.parse(data.responsibilities || '[]')
                    : data.responsibilities || [],
                qualifications: typeof data.qualifications === 'string'
                    ? JSON.parse(data.qualifications || '[]')
                    : data.qualifications || []
            }
            setJob(parsedJob)
            setFormData(prev => ({ ...prev, selection: data.title }))
            // If URL used id (UUID) but job has a slug, switch URL to slug for SEO and consistency
            if (data.slug && jobId === data.id) {
                const slugPath = `/openings/${data.slug}`
                if (typeof window !== 'undefined' && window.location.pathname !== slugPath) {
                    window.history.replaceState(null, '', slugPath)
                }
            }
        } catch (err: any) {
            console.error('[JobDetailClient] Error fetching job:', err);
            // Always redirect on error - never show stale data
            router.push('/careers');
        } finally {
            setLoading(false);
        }
    }

    // Auto-detect country code based on job location
    useEffect(() => {
        if (job && job.location) {
            const phoneCode = getPhoneCodeFromLocation(job.location);
            if (phoneCode) {
                setFormData(prev => ({
                    ...prev,
                    countryCode: phoneCode
                }));
            }
        }
    }, [job]);

    const checkEmailExists = async (email: string, jobTitle: string): Promise<boolean> => {
        if (!email || !jobTitle) return false
        
        try {
            const { data, error } = await supabase
                .from('job_applications')
                .select('id')
                .eq('email', email.toLowerCase().trim())
                .eq('job_title', jobTitle)
                .limit(1)
            
            if (error) {
                console.error('Error checking email:', error)
                return false
            }
            
            return data && data.length > 0
        } catch (err) {
            console.error('Error checking email existence:', err)
            return false
        }
    }

    const validateField = async (name: string, value: string | File | null): Promise<string> => {
        switch (name) {
            case 'fullName':
                if (!value || typeof value !== 'string' || !value.trim()) {
                    return 'Name is required'
                }
                if (value.trim().length < 2) {
                    return 'Name must be at least 2 characters'
                }
                if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
                    return 'Name can only contain letters, spaces, hyphens, and apostrophes'
                }
                return ''
            case 'email':
                if (!value || typeof value !== 'string' || !value.trim()) {
                    return 'Email is required'
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(value)) {
                    return 'Please enter a valid email address'
                }
                // Check if email already applied for this job
                if (job && formData.selection) {
                    const emailExists = await checkEmailExists(value.trim(), formData.selection)
                    if (emailExists) {
                        return 'You have already applied for this role with this email address'
                    }
                }
                return ''
            case 'phone':
                if (!value || typeof value !== 'string' || !value.trim()) {
                    return 'Phone number is required'
                }
                // Remove any non-digit characters for validation
                const phoneDigits = value.replace(/\D/g, '')
                if (phoneDigits.length < 7) {
                    return 'Phone number must be at least 7 digits'
                }
                if (phoneDigits.length > 15) {
                    return 'Phone number is too long'
                }
                return ''
            case 'message':
                if (value && typeof value === 'string' && value.length > 5000) {
                    return 'Covering letter must be less than 5000 characters'
                }
                return ''
            case 'file':
                // File validation
                const maxSize = 5 * 1024 * 1024 // 5MB
                const allowedTypes = [
                    'application/pdf',
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                ]
                const allowedExtensions = ['.pdf', '.doc', '.docx']

                // File is required
                if (value === null || value === undefined) {
                    return 'Resume is required. Please upload a PDF, DOC, or DOCX file'
                }

                if (!(value instanceof File)) {
                    return 'Invalid file type'
                }

                const file = value as File

                // Validate file type by MIME type
                if (!allowedTypes.includes(file.type)) {
                    // Fallback: validate by file extension
                    const fileName = file.name.toLowerCase()
                    const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext))
                    
                    if (!hasValidExtension) {
                        return 'Please upload a PDF, DOC, or DOCX file'
                    }
                }

                // Validate file size
                if (file.size > maxSize) {
                    return 'File size must be less than 5MB'
                }

                // Additional validation: check if file is empty
                if (file.size === 0) {
                    return 'File is empty. Please select a valid file'
                }

                return ''
            default:
                return ''
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target

        // For phone, only allow digits, spaces, hyphens, and parentheses
        if (name === 'phone') {
            const phoneValue = value.replace(/[^\d\s\-()]/g, '')
            setFormData(prev => ({
                ...prev,
                [name]: phoneValue
            }))
            // Validate after change (phone doesn't need async validation)
            if (touched[name]) {
                const phoneDigits = phoneValue.replace(/\D/g, '')
                const error = !phoneValue.trim() 
                    ? 'Phone number is required'
                    : phoneDigits.length < 7 
                    ? 'Phone number must be at least 7 digits'
                    : phoneDigits.length > 15 
                    ? 'Phone number is too long'
                    : ''
                setErrors(prev => ({
                    ...prev,
                    [name]: error
                }))
            }
            return
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        // Clear error when user starts typing
        if (errors[name]) {
            // For email, clear the "already applied" error when user starts typing
            if (name === 'email' && errors[name].includes('already applied')) {
                setErrors(prev => {
                    const newErrors = { ...prev }
                    delete newErrors[name]
                    return newErrors
                })
            } else if (name !== 'email') {
                // For non-email fields, validate synchronously (they don't need async checks)
                const error = name === 'fullName' 
                    ? (!value.trim() ? 'Name is required' : value.trim().length < 2 ? 'Name must be at least 2 characters' : !/^[a-zA-Z\s'-]+$/.test(value.trim()) ? 'Name can only contain letters, spaces, hyphens, and apostrophes' : '')
                    : name === 'phone'
                    ? (!value.trim() ? 'Phone number is required' : (() => { const phoneDigits = value.replace(/\D/g, ''); return phoneDigits.length < 7 ? 'Phone number must be at least 7 digits' : phoneDigits.length > 15 ? 'Phone number is too long' : ''; })())
                    : name === 'message'
                    ? (value.length > 5000 ? 'Covering letter must be less than 5000 characters' : '')
                    : ''
                setErrors(prev => ({
                    ...prev,
                    [name]: error
                }))
            }
        }
    }

    const handleBlur = async (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setTouched(prev => ({ ...prev, [name]: true }))
        const error = await validateField(name, value)
        setErrors(prev => ({
            ...prev,
            [name]: error
        }))
    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0]
            
            // Use validateField for consistent validation
            const error = await validateField('file', selectedFile)
            
            if (error) {
                setErrors(prev => ({
                    ...prev,
                    file: error
                }))
                e.target.value = ''
                setFile(null)
                return
            }

            // Clear any previous errors
            setErrors(prev => {
                const newErrors = { ...prev }
                delete newErrors.file
                return newErrors
            })
            setFile(selectedFile)
        } else {
            setFile(null)
            // Validate if field has been touched (file is required)
            if (touched.file) {
                const error = await validateField('file', null)
                setErrors(prev => ({
                    ...prev,
                    file: error
                }))
            } else {
                // Clear file error when file is removed and field not touched
                setErrors(prev => {
                    const newErrors = { ...prev }
                    delete newErrors.file
                    return newErrors
                })
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Mark all fields as touched
        const allTouched = {
            fullName: true,
            email: true,
            phone: true,
            file: true,
        }
        setTouched(allTouched)

        // Validate all fields (async)
        const validationErrors: Record<string, string> = {}
        validationErrors.fullName = await validateField('fullName', formData.fullName)
        validationErrors.email = await validateField('email', formData.email)
        validationErrors.phone = await validateField('phone', formData.phone)

        if (formData.message) {
            validationErrors.message = await validateField('message', formData.message)
        }

        // Validate file (required)
        validationErrors.file = await validateField('file', file)

        setErrors(validationErrors)

        // Check if there are any errors
        const hasErrors = Object.values(validationErrors).some(error => error !== '')
        if (hasErrors) {
            setStatus('error')
            if (validationErrors.email && validationErrors.email.includes('already applied')) {
                setStatusMessage(validationErrors.email)
            } else {
                setStatusMessage('Please fix the errors in the form before submitting.')
            }
            return
        }

        setStatus('loading')
        setStatusMessage('Submitting your application...')

        try {
            const { fullName, email, phone, selection } = formData

            if (!fullName || !email || !phone || !selection || !file) {
                setStatus('error')
                setStatusMessage('Please fill in all required fields including resume.')
                return
            }

            let resumeUrl = null

            // File is required, so this should always execute
            if (file) {
                // Double-check file validation before upload
                const maxSize = 5 * 1024 * 1024 // 5MB
                const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']

                if (!allowedTypes.includes(file.type)) {
                    setStatus('error')
                    setStatusMessage('Invalid file type. Please upload a PDF, DOC, or DOCX file.')
                    return
                }

                if (file.size > maxSize) {
                    setStatus('error')
                    setStatusMessage('File size exceeds 5MB limit. Please upload a smaller file.')
                    return
                }

                const fileExt = file.name.split('.').pop()
                const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`
                const filePath = `job-applications/${fileName}`

                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('resumes')
                    .upload(filePath, file, {
                        cacheControl: '3600',
                        upsert: false
                    })

                if (uploadError) {
                    console.error('Upload error:', uploadError)
                    setStatus('error')
                    setStatusMessage('Failed to upload resume. Please try again.')
                    return
                }

                const { data: urlData } = supabase.storage
                    .from('resumes')
                    .getPublicUrl(filePath)

                resumeUrl = urlData.publicUrl
            }

            // Double-check email hasn't been applied (race condition protection)
            const emailAlreadyApplied = await checkEmailExists(email.trim(), selection)
            if (emailAlreadyApplied) {
                setStatus('error')
                setStatusMessage('You have already applied for this role with this email address.')
                setErrors(prev => ({
                    ...prev,
                    email: 'You have already applied for this role with this email address'
                }))
                return
            }

            const { data, error } = await supabase
                .from('job_applications')
                .insert([
                    {
                        job_title: selection,
                        full_name: fullName,
                        email: email.toLowerCase().trim(),
                        country_code: formData.countryCode,
                        phone: phone,
                        resume_url: resumeUrl,
                        covering_letter: formData.message || null,
                    }
                ])
                .select()

            if (error) {
                console.error('Supabase error:', error)
                // Check if error is due to duplicate email (if there's a unique constraint)
                if (error.message && error.message.includes('duplicate') || error.message && error.message.includes('unique')) {
                    setStatus('error')
                    setStatusMessage('You have already applied for this role with this email address.')
                    setErrors(prev => ({
                        ...prev,
                        email: 'You have already applied for this role with this email address'
                    }))
                } else {
                    setStatus('error')
                    setStatusMessage('Failed to submit application. Please try again.')
                }
            } else {
                // Send emails via Supabase Edge Function (SendGrid)
                try {
                    const supabase = createClient()
                    const { data: emailResult, error: emailError } = await supabase.functions.invoke('send-contact-email', {
                        body: {
                            channel: 'job-application',
                            fullName,
                            email: email.toLowerCase().trim(),
                            phone,
                            countryCode: formData.countryCode || '+91',
                            jobTitle: selection,
                            resumeUrl: resumeUrl || null,
                            coveringLetter: formData.message || null,
                        },
                    })

                    if (emailError) {
                        console.warn('Email sending failed:', emailError.message)
                    } else if (emailResult && !emailResult.success) {
                        console.warn('Email sending failed:', emailResult.error)
                    }
                } catch (emailError: any) {
                    console.error('Email sending error:', emailError)
                }

                setStatus('success')
                setStatusMessage('Thank you! Your application has been submitted successfully.')
                setFormData({
                    selection: job?.title || '',
                    fullName: '',
                    email: '',
                    countryCode: '+91',
                    phone: '',
                    message: ''
                })
                setFile(null)
                setErrors({})
                setTouched({})
                const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
                if (fileInput) {
                    fileInput.value = ''
                }
                setTimeout(() => {
                    router.push('/thanks')
                }, 2000)
            }
        } catch (error) {
            console.error('Unexpected error:', error)
            setStatus('error')
            setStatusMessage('An unexpected error occurred. Please try again.')
        }
    }

    // Only show loading if we don't have initial job data
    if (loading && !job) {
        return (
            <CommomLayout>
                <style>{`
                    @keyframes job-detail-spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '60vh',
                    gap: '20px'
                }}>
                    <div style={{
                        width: '56px',
                        height: '56px',
                        border: '4px solid #e2e8f0',
                        borderTop: '4px solid #499A9A',
                        borderRadius: '50%',
                        animation: 'job-detail-spin 0.9s linear infinite'
                    }} />
                    <p style={{ margin: 0, fontSize: '16px', color: '#64748b', fontWeight: 500 }}>
                        Loading job details...
                    </p>
                </div>
            </CommomLayout>
        )
    }

    if (!job) {
        return (
            <CommomLayout>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '400px'
                }}>
                    <div>Job not found</div>
                </div>
            </CommomLayout>
        )
    }

    // Ensure responsibilities and qualifications are always arrays
    const responsibilities = Array.isArray(job.responsibilities) ? job.responsibilities : []
    const qualifications = Array.isArray(job.qualifications) ? job.qualifications : []

    return (
        <CommomLayout>
            <>
                <div className="collateralssec">
                    <div className="container">
                        <div className="row section-row1 align-items-center builtsec collat">
                            <div className="col-sm-12">
                                <div className="section-title text-center ">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        {job.title}
                                        {!job.published && isAdmin && (
                                            <span style={{
                                                marginLeft: '15px',
                                                padding: '5px 10px',
                                                backgroundColor: '#f97316',
                                                color: 'white',
                                                borderRadius: '5px',
                                                fontSize: '0.7em',
                                                fontWeight: 'bold',
                                                verticalAlign: 'middle',
                                            }}>
                                                DRAFT
                                            </span>
                                        )}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="blog-main-waber newcollat">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7">
                                <h4 className='mb-3 text-black'>Purpose of the Role</h4>
                                <div
                                    className='text-black'
                                    style={{
                                        wordBreak: 'normal',
                                        overflowWrap: 'normal',
                                        whiteSpace: 'normal',
                                        display: 'block'
                                    }}
                                >
                                    <div dangerouslySetInnerHTML={{ __html: processContent(job.description) }} />
                                </div>
                                <div className="bolg-filter-waber collatpage">
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
                                            >
                                                Qualifications
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
                                                Location
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="collattabsec mt-4">
                                    <div className="tab-content" id="myTabContent">
                                        {/* Responsibilities Tab */}
                                        <div
                                            className="tab-pane fade active show"
                                            id="home"
                                            role="tabpanel"
                                            aria-labelledby="home-tab"
                                        >
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="mey-fucher-tab-waber-content1">
                                                        <div className="socialcont">
                                                            {responsibilities.length > 0 ? (
                                                                responsibilities.map((resp, index) => (
                                                                    <div key={index} className="challenge-point-waber">
                                                                        <img src="/images/socilapoint.svg" alt="" />
                                                                        <p style={{
                                                                            wordBreak: 'normal',
                                                                            overflowWrap: 'normal',
                                                                            whiteSpace: 'normal'
                                                                        }}>
                                                                            {processContent(resp)}
                                                                        </p>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <div className="challenge-point-waber">
                                                                    <img src="/images/socilapoint.svg" alt="" />
                                                                    <div style={{
                                                                        wordBreak: 'normal',
                                                                        overflowWrap: 'normal',
                                                                        whiteSpace: 'normal',
                                                                        display: 'block'
                                                                    }}>
                                                                        <div dangerouslySetInnerHTML={{ __html: processContent(job.description) }} />
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Qualifications Tab */}
                                        <div
                                            className="tab-pane fade"
                                            id="profile"
                                            role="tabpanel"
                                            aria-labelledby="profile-tab"
                                        >
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="mey-fucher-tab-waber-content1">
                                                        <div className="socialcont">
                                                            {qualifications.length > 0 ? (
                                                                qualifications.map((qual, index) => (
                                                                    <div key={index} className="challenge-point-waber">
                                                                        <img src="/images/socilapoint.svg" alt="" />
                                                                        <p style={{
                                                                            wordBreak: 'normal',
                                                                            overflowWrap: 'normal',
                                                                            whiteSpace: 'normal'
                                                                        }}>
                                                                            {processContent(qual)}
                                                                        </p>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <div className="challenge-point-waber">
                                                                    <img src="/images/socilapoint.svg" alt="" />
                                                                    <p style={{
                                                                        wordBreak: 'normal',
                                                                        overflowWrap: 'normal',
                                                                        whiteSpace: 'normal'
                                                                    }}>
                                                                        {processContent(job.requirements)}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Location Tab */}
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
                                                                <p style={{
                                                                    wordBreak: 'normal',
                                                                    overflowWrap: 'normal',
                                                                    whiteSpace: 'normal'
                                                                }}>
                                                                    {processContent(job.location)}
                                                                </p>
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
                                            <h4>The RheinBrücke Advantage</h4>
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
                                                <a href="mailto:careers@rheincs.com">careers@rheincs.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="contect-enq-waber">
                                    <h2>Apply Now</h2>
                                    {status === 'success' && (
                                        <div className="alert alert-success" role="alert">
                                            {statusMessage}
                                        </div>
                                    )}
                                    {status === 'error' && (
                                        <div className="alert alert-danger" role="alert">
                                            {statusMessage}
                                        </div>
                                    )}
                                    {status === 'loading' && (
                                        <div className="alert alert-info" role="alert">
                                            {statusMessage}
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} className="row g-3 pp-0">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                className="form-control custom-form-control"
                                                name="selection"
                                                value={formData.selection}
                                                readOnly
                                                style={{ background: '#f5f5f5' }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                className={`form-control custom-form-control ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
                                                name="fullName"
                                                placeholder="Your Name*"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                required
                                            />
                                            {touched.fullName && errors.fullName && (
                                                <div className="invalid-feedback" style={{ display: 'block', color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                                    {errors.fullName}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-12">
                                            <input
                                                type="email"
                                                className={`form-control custom-form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                                name="email"
                                                placeholder="Your Email Address*"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                required
                                            />
                                            {touched.email && errors.email && (
                                                <div className="invalid-feedback" style={{ display: 'block', color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
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
                                                    placeholder="Your Phone No*"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    required
                                                    disabled={status === 'loading'}
                                                />
                                            </div>
                                            {touched.phone && errors.phone && (
                                                <div className="invalid-feedback" style={{ display: 'block', color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                                    {errors.phone}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-12">
                                            <input
                                                type="file"
                                                className={`form-control custom-form-control ${touched.file && errors.file ? 'is-invalid' : ''}`}
                                                name="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                                disabled={status === 'loading'}
                                                required
                                            />
                                            {file && (
                                                <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#28a745' }}>
                                                    <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>
                                                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                                </div>
                                            )}
                                            {touched.file && errors.file && (
                                                <div className="invalid-feedback" style={{ display: 'block', color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                                    {errors.file}
                                                </div>
                                            )}
                                            <small className="text-muted">Accepted formats: PDF, DOC, DOCX (Max 5MB) *Required</small>
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                className={`form-control custom-form-control ${touched.message && errors.message ? 'is-invalid' : ''}`}
                                                name="message"
                                                placeholder="Covering letter Message"
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
                                        <div className="col-12">
                                            <div className="ser-btn2">
                                                <a className=''>
                                                    <button
                                                        type="submit"
                                                        className="animated-svg-link1 btn-style-3 text-white"
                                                        disabled={status === 'loading'}
                                                        style={{
                                                            background: 'none',
                                                            border: 'none',
                                                            padding: 0,
                                                            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                                                            width: '100%',
                                                            textAlign: 'left'
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
                </section>
            </>
        </CommomLayout>
    )
}
