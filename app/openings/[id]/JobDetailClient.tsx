"use client";

import React, { useState, useEffect } from 'react'
import CommomLayout from '../../Components/CommomLayout'
import { createClient } from '@/lib/supabase-browser'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Job {
    id: string
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
}

interface JobDetailClientProps {
    jobId: string
    initialJob?: Job | null
}

export default function JobDetailClient({ jobId, initialJob }: JobDetailClientProps) {
    const router = useRouter()

    const [job, setJob] = useState<Job | null>(initialJob || null)
    const [loading, setLoading] = useState(!initialJob && !job)
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
    const supabase = createClient()

    useEffect(() => {
        if (jobId === 'placeholder' && !initialJob) {
            // Handle placeholder case - redirect to careers list
            router.push('/careers')
            return
        }

        // Always fetch fresh data on client side to get latest updates
        // This ensures updated content appears immediately without needing a rebuild
        if (jobId && jobId !== 'placeholder') {
            fetchJob()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jobId]) // Only depend on jobId, not initialJob

    const fetchJob = async () => {
        try {
            // Only show loading spinner if we don't have any job data yet
            // This prevents flash of loading when we have initialJob
            const shouldShowLoading = !job && !initialJob
            if (shouldShowLoading) {
                setLoading(true)
            }

            const { data, error } = await supabase
                .from('careers')
                .select('*')
                .eq('id', jobId)
                .eq('published', true)
                .single()

            if (error) {
                console.error('Supabase error:', error)
                throw error
            }

            if (data) {
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
            } else {
                // If no data found and we have no job data at all, redirect
                if (!initialJob && !job) {
                    console.warn('Job not found, redirecting to careers')
                    router.push('/careers')
                    return
                }
                // Otherwise keep existing job data (initialJob or current job state)
                console.log('No data found but keeping existing job data')
            }
        } catch (err: any) {
            console.error('Error fetching job:', err)
            // If fetch fails but we have job data (initial or current), keep showing it
            if (!initialJob && !job) {
                console.warn('Fetch failed and no job data, redirecting to careers')
                router.push('/careers')
            } else {
                console.log('Fetch failed but keeping existing job data')
            }
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setStatusMessage('Submitting your application...')

        try {
            const { fullName, email, phone, selection } = formData

            if (!fullName || !email || !phone || !selection) {
                setStatus('error')
                setStatusMessage('Please fill in all required fields.')
                return
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) {
                setStatus('error')
                setStatusMessage('Please enter a valid email address.')
                return
            }

            let resumeUrl = null

            if (file) {
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

            const { data, error } = await supabase
                .from('job_applications')
                .insert([
                    {
                        job_title: selection,
                        full_name: fullName,
                        email: email,
                        country_code: formData.countryCode,
                        phone: phone,
                        resume_url: resumeUrl,
                        covering_letter: formData.message || null,
                    }
                ])
                .select()

            if (error) {
                console.error('Supabase error:', error)
                setStatus('error')
                setStatusMessage('Failed to submit application. Please try again.')
            } else {
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
    // This prevents flash of loading state when we have cached data
    if (loading && !job) {
        return (
            <CommomLayout>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '400px'
                }}>
                    <div>Loading job details...</div>
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
                                <p className='text-black'>{job.description}</p>
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
                                                                        <p>{resp}</p>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <div className="challenge-point-waber">
                                                                    <img src="/images/socilapoint.svg" alt="" />
                                                                    <p>{job.description}</p>
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
                                                                        <p>{qual}</p>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <div className="challenge-point-waber">
                                                                    <img src="/images/socilapoint.svg" alt="" />
                                                                    <p>{job.requirements}</p>
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
                                                                <p>{job.location}</p>
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
                                                className="form-control custom-form-control"
                                                name="fullName"
                                                placeholder="Your Name*"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <input
                                                type="email"
                                                className="form-control custom-form-control"
                                                name="email"
                                                placeholder="Your Email Address*"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
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
                                                    placeholder="Your Phone No*"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <input
                                                type="file"
                                                className="form-control custom-form-control"
                                                name="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                            />
                                            <small className="text-muted">Accepted formats: PDF, DOC, DOCX</small>
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                className="form-control custom-form-control"
                                                name="message"
                                                placeholder="Covering letter Message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                            />
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
