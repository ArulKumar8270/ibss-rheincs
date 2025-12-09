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
    const [loading, setLoading] = useState(!initialJob)
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
        if (!initialJob && jobId) {
            fetchJob()
        }
    }, [jobId, initialJob])

    const fetchJob = async () => {
        try {
            const { data, error } = await supabase
                .from('careers')
                .select('*')
                .eq('id', jobId)
                .eq('published', true)
                .single()

            if (error) throw error
            
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
                router.push('/careers')
            }
        } catch (err: any) {
            console.error('Error fetching job:', err)
            router.push('/careers')
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

    if (loading) {
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

    const responsibilities = job.responsibilities || []
    const qualifications = job.qualifications || []

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
                                                >
                                                    <option value="+91">+91</option>
                                                    <option value="+1">+1</option>
                                                    <option value="+44">+44</option>
                                                    <option value="+971">+971</option>
                                                </select>
                                                <input
                                                    type="tel"
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
