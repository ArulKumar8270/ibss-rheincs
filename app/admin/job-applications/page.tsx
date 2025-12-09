'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'

interface JobApplication {
  id: string
  job_title: string
  full_name: string
  email: string
  country_code: string
  phone: string
  resume_url: string | null
  covering_letter: string | null
  created_at: string
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected'
}

export default function AdminJobApplicationsPage() {
  const [applications, setApplications] = useState<JobApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null)
  const supabase = createClient()

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('job_applications')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setApplications(data || [])
    } catch (err: any) {
      console.error('Error fetching applications:', err)
      alert('Error: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, newStatus: 'pending' | 'reviewed' | 'shortlisted' | 'rejected') => {
    try {
      const { error } = await supabase
        .from('job_applications')
        .update({ status: newStatus })
        .eq('id', id)

      if (error) throw error
      fetchApplications()
      alert('Status updated successfully!')
    } catch (err: any) {
      alert('Error: ' + err.message)
    }
  }

  const deleteApplication = async (id: string) => {
    if (!confirm('Are you sure you want to delete this application?')) return
    try {
      const { error } = await supabase
        .from('job_applications')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchApplications()
      alert('Application deleted successfully!')
    } catch (err: any) {
      alert('Error: ' + err.message)
    }
  }

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.phone.includes(searchTerm)
    
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const exportToCSV = () => {
    const headers = ['Date', 'Name', 'Email', 'Phone', 'Job Title', 'Status', 'Resume']
    const rows = filteredApplications.map(app => [
      formatDate(app.created_at),
      app.full_name,
      app.email,
      `${app.country_code} ${app.phone}`,
      app.job_title,
      app.status,
      app.resume_url || 'No resume'
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `job_applications_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return { bg: '#fef3c7', color: '#92400e' }
      case 'reviewed':
        return { bg: '#dbeafe', color: '#1e40af' }
      case 'shortlisted':
        return { bg: '#d1fae5', color: '#065f46' }
      case 'rejected':
        return { bg: '#fee2e2', color: '#991b1b' }
      default:
        return { bg: '#f3f4f6', color: '#374151' }
    }
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
          Loading applications...
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
    <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '20px' }}>
      {/* Header Section */}
      <div style={{
        marginBottom: '30px',
        padding: '25px',
        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        borderRadius: '16px',
        color: '#fff',
        boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#fff'
            }}>
              📋 Job Applications
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
              Manage and review job applications
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '20px 30px',
            borderRadius: '12px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '5px' }}>Total Applications</div>
            <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{applications.length}</div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
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
            placeholder="Search by name, email, job title, or phone..."
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
            onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
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
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: '12px 20px',
            border: '2px solid #e2e8f0',
            borderRadius: '12px',
            fontSize: '14px',
            color: '#333',
            background: '#fff',
            cursor: 'pointer',
            outline: 'none'
          }}
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="reviewed">Reviewed</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="rejected">Rejected</option>
        </select>
        <button
          onClick={exportToCSV}
          disabled={filteredApplications.length === 0}
          style={{
            padding: '12px 24px',
            background: '#10b981',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            cursor: filteredApplications.length === 0 ? 'not-allowed' : 'pointer',
            fontWeight: '600',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: filteredApplications.length === 0 ? 0.5 : 1,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            if (filteredApplications.length > 0) e.currentTarget.style.background = '#059669'
          }}
          onMouseLeave={(e) => {
            if (filteredApplications.length > 0) e.currentTarget.style.background = '#10b981'
          }}
        >
          <span>📥</span> Export CSV
        </button>
        <button
          onClick={fetchApplications}
          style={{
            padding: '12px 24px',
            background: '#6366f1',
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
          onMouseEnter={(e) => e.currentTarget.style.background = '#4f46e5'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#6366f1'}
        >
          <span>🔄</span> Refresh
        </button>
      </div>

      {/* Applications Table */}
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        marginBottom: '20px'
      }}>
        {filteredApplications.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#94a3b8' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>📋</div>
            <div style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px', color: '#64748b' }}>
              {searchTerm || statusFilter !== 'all' ? 'No applications found matching your filters' : 'No job applications yet'}
            </div>
            <div style={{ fontSize: '14px', color: '#94a3b8' }}>
              {searchTerm || statusFilter !== 'all' ? 'Try adjusting your search or filters' : 'Applications will appear here once candidates submit their forms'}
            </div>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>DATE</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>NAME</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>EMAIL</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>PHONE</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>JOB TITLE</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>STATUS</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((app, index) => {
                  const statusStyle = getStatusColor(app.status)
                  return (
                    <tr key={app.id} style={{ 
                      borderBottom: '1px solid #f1f5f9',
                      background: index % 2 === 0 ? '#fff' : '#fafbfc',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                    onMouseLeave={(e) => e.currentTarget.style.background = index % 2 === 0 ? '#fff' : '#fafbfc'}
                    >
                      <td style={{ padding: '18px 20px', color: '#64748b', fontSize: '14px' }}>
                        {formatDate(app.created_at)}
                      </td>
                      <td style={{ padding: '18px 20px', fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>
                        {app.full_name}
                      </td>
                      <td style={{ padding: '18px 20px', color: '#475569', fontSize: '14px' }}>
                        {app.email}
                      </td>
                      <td style={{ padding: '18px 20px', color: '#475569', fontSize: '14px' }}>
                        {app.country_code} {app.phone}
                      </td>
                      <td style={{ padding: '18px 20px', color: '#475569', fontSize: '14px' }}>
                        {app.job_title}
                      </td>
                      <td style={{ padding: '18px 20px' }}>
                        <span style={{
                          padding: '6px 14px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '600',
                          background: statusStyle.bg,
                          color: statusStyle.color,
                          display: 'inline-block',
                          textTransform: 'capitalize'
                        }}>
                          {app.status}
                        </span>
                      </td>
                      <td style={{ padding: '18px 20px' }}>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          <button
                            onClick={() => setSelectedApplication(app)}
                            style={{
                              padding: '8px 16px',
                              background: '#3b82f6',
                              color: '#fff',
                              border: 'none',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '13px',
                              fontWeight: '600',
                              transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#2563eb'
                              e.currentTarget.style.transform = 'translateY(-1px)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = '#3b82f6'
                              e.currentTarget.style.transform = 'translateY(0)'
                            }}
                          >
                            👁️ View
                          </button>
                          {app.resume_url && (
                            <a
                              href={app.resume_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                padding: '8px 16px',
                                background: '#10b981',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '13px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'all 0.2s'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#059669'
                                e.currentTarget.style.transform = 'translateY(-1px)'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#10b981'
                                e.currentTarget.style.transform = 'translateY(0)'
                              }}
                            >
                              📄 Resume
                            </a>
                          )}
                          <select
                            value={app.status}
                            onChange={(e) => updateStatus(app.id, e.target.value as any)}
                            style={{
                              padding: '8px 12px',
                              border: '1px solid #e2e8f0',
                              borderRadius: '8px',
                              fontSize: '13px',
                              cursor: 'pointer',
                              background: '#fff',
                              color: '#333',
                              outline: 'none'
                            }}
                          >
                            <option value="pending">Pending</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="shortlisted">Shortlisted</option>
                            <option value="rejected">Rejected</option>
                          </select>
                          <button
                            onClick={() => deleteApplication(app.id)}
                            style={{
                              padding: '8px 16px',
                              background: '#ef4444',
                              color: '#fff',
                              border: 'none',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '13px',
                              fontWeight: '600',
                              transition: 'all 0.2s'
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
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Application Detail Modal */}
      {selectedApplication && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}
        onClick={() => setSelectedApplication(null)}
        >
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '30px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, color: '#1e293b', fontSize: '24px', fontWeight: 'bold' }}>
                Application Details
              </h2>
              <button
                onClick={() => setSelectedApplication(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#64748b',
                  padding: '0',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <strong style={{ color: '#475569', fontSize: '14px' }}>Name:</strong>
                <div style={{ color: '#1e293b', fontSize: '16px', marginTop: '4px' }}>{selectedApplication.full_name}</div>
              </div>
              <div>
                <strong style={{ color: '#475569', fontSize: '14px' }}>Email:</strong>
                <div style={{ color: '#1e293b', fontSize: '16px', marginTop: '4px' }}>{selectedApplication.email}</div>
              </div>
              <div>
                <strong style={{ color: '#475569', fontSize: '14px' }}>Phone:</strong>
                <div style={{ color: '#1e293b', fontSize: '16px', marginTop: '4px' }}>{selectedApplication.country_code} {selectedApplication.phone}</div>
              </div>
              <div>
                <strong style={{ color: '#475569', fontSize: '14px' }}>Job Title:</strong>
                <div style={{ color: '#1e293b', fontSize: '16px', marginTop: '4px' }}>{selectedApplication.job_title}</div>
              </div>
              {selectedApplication.covering_letter && (
                <div>
                  <strong style={{ color: '#475569', fontSize: '14px' }}>Covering Letter:</strong>
                  <div style={{ color: '#1e293b', fontSize: '14px', marginTop: '4px', padding: '12px', background: '#f8fafc', borderRadius: '8px', whiteSpace: 'pre-wrap' }}>
                    {selectedApplication.covering_letter}
                  </div>
                </div>
              )}
              {selectedApplication.resume_url && (
                <div>
                  <strong style={{ color: '#475569', fontSize: '14px' }}>Resume:</strong>
                  <div style={{ marginTop: '8px' }}>
                    <a
                      href={selectedApplication.resume_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '10px 20px',
                        background: '#3b82f6',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        display: 'inline-block',
                        fontWeight: '600'
                      }}
                    >
                      📄 Download Resume
                    </a>
                  </div>
                </div>
              )}
              <div>
                <strong style={{ color: '#475569', fontSize: '14px' }}>Applied On:</strong>
                <div style={{ color: '#1e293b', fontSize: '16px', marginTop: '4px' }}>{formatDate(selectedApplication.created_at)}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
