'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'
import Link from 'next/link'

interface Career {
  id: string
  title: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  description: string
  requirements: string
  responsibilities?: string[] | string | null
  qualifications?: string[] | string | null
  salary_range: string | null
  application_deadline: string | null
  published: boolean
  created_at: string
  updated_at: string
}

export default function AdminCareersPage() {
  const [careers, setCareers] = useState<Career[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingCareer, setEditingCareer] = useState<Career | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'full-time' as 'full-time' | 'part-time' | 'contract' | 'internship',
    description: '',
    requirements: '',
    responsibilities: '',
    qualifications: '',
    salary_range: '',
    application_deadline: '',
    published: false
  })
  const supabase = createClient()

  useEffect(() => {
    fetchCareers()
  }, [])

  const fetchCareers = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setCareers(data || [])
    } catch (err: any) {
      console.error('Error fetching careers:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Convert responsibilities and qualifications from text (line-separated) to JSON arrays
      const responsibilitiesArray = formData.responsibilities
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
      
      const qualificationsArray = formData.qualifications
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)

      const submitData = {
        title: formData.title,
        department: formData.department,
        location: formData.location,
        type: formData.type,
        description: formData.description,
        requirements: formData.requirements,
        responsibilities: responsibilitiesArray.length > 0 ? JSON.stringify(responsibilitiesArray) : null,
        qualifications: qualificationsArray.length > 0 ? JSON.stringify(qualificationsArray) : null,
        salary_range: formData.salary_range || null,
        application_deadline: formData.application_deadline || null,
        published: formData.published
      }
      if (editingCareer) {
        const { error } = await supabase
          .from('careers')
          .update(submitData)
          .eq('id', editingCareer.id)
        if (error) throw error
      } else {
        const { error } = await supabase
          .from('careers')
          .insert([submitData])
        if (error) throw error
      }
      setShowForm(false)
      setEditingCareer(null)
      setFormData({
        title: '',
        department: '',
        location: '',
        type: 'full-time',
        description: '',
        requirements: '',
        responsibilities: '',
        qualifications: '',
        salary_range: '',
        application_deadline: '',
        published: false
      })
      fetchCareers()
    } catch (err: any) {
      alert('Error: ' + err.message)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this career posting?')) return
    try {
      const { error } = await supabase
        .from('careers')
        .delete()
        .eq('id', id)
      if (error) throw error
      fetchCareers()
    } catch (err: any) {
      alert('Error: ' + err.message)
    }
  }

  const handleEdit = (career: Career) => {
    setEditingCareer(career)
    
    // Parse responsibilities and qualifications if they're JSON strings
    let responsibilitiesText = ''
    let qualificationsText = ''
    
    if (career.responsibilities) {
      if (typeof career.responsibilities === 'string') {
        try {
          const parsed = JSON.parse(career.responsibilities)
          responsibilitiesText = Array.isArray(parsed) ? parsed.join('\n') : career.responsibilities
        } catch {
          responsibilitiesText = career.responsibilities
        }
      } else if (Array.isArray(career.responsibilities)) {
        responsibilitiesText = career.responsibilities.join('\n')
      }
    }
    
    if (career.qualifications) {
      if (typeof career.qualifications === 'string') {
        try {
          const parsed = JSON.parse(career.qualifications)
          qualificationsText = Array.isArray(parsed) ? parsed.join('\n') : career.qualifications
        } catch {
          qualificationsText = career.qualifications
        }
      } else if (Array.isArray(career.qualifications)) {
        qualificationsText = career.qualifications.join('\n')
      }
    }
    
    setFormData({
      title: career.title,
      department: career.department,
      location: career.location,
      type: career.type,
      description: career.description,
      requirements: career.requirements,
      responsibilities: responsibilitiesText,
      qualifications: qualificationsText,
      salary_range: career.salary_range || '',
      application_deadline: career.application_deadline || '',
      published: career.published
    })
    setShowForm(true)
  }

  const filteredCareers = careers.filter(career =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const exportToCSV = () => {
    const headers = ['Date', 'Title', 'Department', 'Location', 'Type', 'Salary', 'Deadline', 'Status']
    const rows = filteredCareers.map(c => [
      formatDate(c.created_at),
      c.title,
      c.department,
      c.location,
      c.type.replace('-', ' '),
      c.salary_range || '',
      c.application_deadline ? formatDate(c.application_deadline) : '',
      c.published ? 'Published' : 'Draft'
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `careers_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        gap: '20px'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #9f7aea',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <div style={{
          fontSize: '18px',
          color: '#495057',
          fontWeight: '500'
        }}>
          Loading careers...
        </div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
      {/* Header Section */}
      <div style={{
        marginBottom: '30px',
        padding: '25px',
        background: 'linear-gradient(135deg, #9f7aea 0%, #805ad5 100%)',
        borderRadius: '16px',
        color: '#fff',
        boxShadow: '0 4px 20px rgba(159, 122, 234, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#fff'
            }}>
              💼 Careers Management
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
              Manage job postings and career opportunities
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '20px 30px',
            borderRadius: '12px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '5px' }}>Total Postings</div>
            <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{careers.length}</div>
          </div>
        </div>
      </div>

      {/* Search and Action Bar */}
      <div style={{
        display: 'flex',
        gap: '15px',
        marginBottom: '20px',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        <div style={{ flex: '1', minWidth: '300px', position: 'relative' }}>
          <input
            type="text"
            placeholder="Search by title, department, location, or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 45px 12px 15px',
              border: '2px solid #e2e8f0',
              borderRadius: '12px',
              fontSize: '14px',
              color: '#333',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#9f7aea'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
          />
          <span style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '18px',
            color: '#94a3b8'
          }}>🔍</span>
        </div>
        <button
          onClick={exportToCSV}
          disabled={filteredCareers.length === 0}
          style={{
            padding: '12px 24px',
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            cursor: filteredCareers.length === 0 ? 'not-allowed' : 'pointer',
            fontWeight: '600',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: filteredCareers.length === 0 ? 0.5 : 1,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            if (filteredCareers.length > 0) e.currentTarget.style.background = '#2563eb'
          }}
          onMouseLeave={(e) => {
            if (filteredCareers.length > 0) e.currentTarget.style.background = '#3b82f6'
          }}
        >
          <span>📥</span> Export CSV
        </button>
        <button
          onClick={fetchCareers}
          style={{
            padding: '12px 24px',
            background: '#10b981',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#059669'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#10b981'}
        >
          <span>🔄</span> Refresh
        </button>
        <button
          onClick={() => {
            setShowForm(true)
            setEditingCareer(null)
            setFormData({
              title: '',
              department: '',
              location: '',
              type: 'full-time',
              description: '',
              requirements: '',
              responsibilities: '',
              qualifications: '',
              salary_range: '',
              application_deadline: '',
              published: false
            })
          }}
          style={{
            padding: '12px 24px',
            background: '#9f7aea',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#805ad5'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#9f7aea'}
        >
          <span>➕</span> Post New Career
        </button>
      </div>

      {showForm && (
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '25px',
          marginBottom: '30px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '20px', color: '#333', fontWeight: 'bold' }}>{editingCareer ? 'Edit' : 'Create New'} Career Posting</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Job Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Department *</label>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
                />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Location *</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Job Type *</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px', background: '#fff' }}
                >
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Salary Range</label>
                <input
                  type="text"
                  value={formData.salary_range}
                  onChange={(e) => setFormData({ ...formData, salary_range: e.target.value })}
                  placeholder="e.g., $50,000 - $70,000"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Application Deadline</label>
                <input
                  type="date"
                  value={formData.application_deadline}
                  onChange={(e) => setFormData({ ...formData, application_deadline: e.target.value })}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Job Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={6}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Requirements *</label>
              <textarea
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                rows={6}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>
                Responsibilities (One per line) *
              </label>
              <textarea
                value={formData.responsibilities}
                onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                rows={8}
                placeholder="Enter each responsibility on a new line. Example:&#10;Design, develop and maintain test plans&#10;Lead and execute end-to-end functional testing&#10;Develop and maintain automation scripts"
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px', fontFamily: 'monospace' }}
              />
              <small style={{ color: '#666', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                Each line will become a bullet point in the Responsibilities tab
              </small>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>
                Qualifications (One per line) *
              </label>
              <textarea
                value={formData.qualifications}
                onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                rows={8}
                placeholder="Enter each qualification on a new line. Example:&#10;Bachelor's degree in Computer Science&#10;8+ years of experience in software testing&#10;Strong understanding of SDLC, STLC"
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px', fontFamily: 'monospace' }}
              />
              <small style={{ color: '#666', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                Each line will become a bullet point in the Qualifications tab
              </small>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', color: '#333', fontSize: '14px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  style={{ cursor: 'pointer' }}
                />
                Published
              </label>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="submit"
                style={{
                  padding: '12px 24px',
                  background: '#9f7aea',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                {editingCareer ? 'Update' : 'Create'} Posting
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setEditingCareer(null)
                }}
                style={{
                  padding: '12px 24px',
                  background: '#ccc',
                  color: '#333',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table Section */}
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        marginBottom: '20px'
      }}>
        {filteredCareers.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#94a3b8' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>💼</div>
            <div style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px', color: '#64748b' }}>
              {searchTerm ? 'No careers found matching your search' : 'No career postings yet'}
            </div>
            <div style={{ fontSize: '14px', color: '#94a3b8' }}>
              {searchTerm ? 'Try adjusting your search terms' : 'Create your first job posting to get started'}
            </div>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>DATE & TIME</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>JOB TITLE</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>DEPARTMENT</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>LOCATION</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>JOB TYPE</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>STATUS</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredCareers.map((career, index) => (
                  <tr key={career.id} style={{ 
                    borderBottom: '1px solid #f1f5f9',
                    background: index % 2 === 0 ? '#fff' : '#fafbfc',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.background = index % 2 === 0 ? '#fff' : '#fafbfc'}
                  >
                    <td style={{ padding: '18px 20px', color: '#64748b', fontSize: '14px' }}>
                      {formatDate(career.created_at)}
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <Link 
                        href={`/jobs/${career.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          textDecoration: 'none', 
                          color: 'inherit',
                          display: 'block'
                        }}
                      >
                        <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '14px', marginBottom: '4px', cursor: 'pointer' }}>
                          {career.title}
                        </div>
                        {career.salary_range && (
                          <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>
                            💰 {career.salary_range}
                          </div>
                        )}
                      </Link>
                    </td>
                    <td style={{ padding: '18px 20px', color: '#475569', fontSize: '14px' }}>
                      {career.department}
                    </td>
                    <td style={{ padding: '18px 20px', color: '#475569', fontSize: '14px' }}>
                      📍 {career.location}
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <span style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: '#e0f2fe',
                        color: '#0369a1',
                        display: 'inline-block',
                        textTransform: 'capitalize'
                      }}>
                        {career.type.replace('-', ' ')}
                      </span>
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <span style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: career.published ? '#d1fae5' : '#fee2e2',
                        color: career.published ? '#065f46' : '#991b1b',
                        display: 'inline-block'
                      }}>
                        {career.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <button
                          onClick={() => handleEdit(career)}
                          style={{
                            padding: '8px 16px',
                            background: '#9f7aea',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#805ad5'
                            e.currentTarget.style.transform = 'translateY(-1px)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#9f7aea'
                            e.currentTarget.style.transform = 'translateY(0)'
                          }}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={async () => {
                            const newPublished = !career.published
                            try {
                              const { error } = await supabase
                                .from('careers')
                                .update({ published: newPublished })
                                .eq('id', career.id)
                              if (error) throw error
                              fetchCareers()
                              alert(`Career ${newPublished ? 'published' : 'unpublished'} successfully!`)
                            } catch (err: any) {
                              alert('Error: ' + err.message)
                            }
                          }}
                          style={{
                            padding: '8px 16px',
                            background: career.published ? '#f59e0b' : '#10b981',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-1px)'
                            e.currentTarget.style.opacity = '0.9'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.opacity = '1'
                          }}
                        >
                          {career.published ? '👁️ Unpublish' : '✅ Publish'}
                        </button>
                        <button
                          onClick={() => handleDelete(career.id)}
                          style={{
                            padding: '8px 16px',
                            background: '#ef4444',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#dc2626'
                            e.currentTarget.style.transform = 'translateY(-1px)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ef4444'
                            e.currentTarget.style.transform = 'translateY(0)'
                          }}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Security Note */}
      <div style={{
        background: '#fef3c7',
        border: '1px solid #fcd34d',
        borderRadius: '12px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginTop: '20px'
      }}>
        <span style={{ fontSize: '20px' }}>🔒</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: '600', color: '#92400e', fontSize: '14px', marginBottom: '2px' }}>
            Security Note
          </div>
          <div style={{ color: '#78350f', fontSize: '13px' }}>
            This admin page is protected by authentication. Only authorized users can access and manage career postings.
          </div>
        </div>
      </div>
    </div>
  )
}
