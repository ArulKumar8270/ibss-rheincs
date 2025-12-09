'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'

interface Contact {
  id: string
  full_name: string
  country_code: string
  phone: string
  email: string
  company_name: string
  selection: string | null
  message: string | null
  created_at: string
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const supabase = createClient()

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setContacts(data || [])
      setError('')
    } catch (err: any) {
      setError('Failed to load contacts: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const filteredContacts = contacts.filter(contact =>
    contact.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company_name.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
    const headers = ['Date', 'Name', 'Email', 'Phone', 'Company', 'Selection', 'Message']
    const rows = filteredContacts.map(c => [
      formatDate(c.created_at),
      c.full_name,
      c.email,
      `${c.country_code} ${c.phone}`,
      c.company_name,
      c.selection || '',
      c.message || ''
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `contacts_${new Date().toISOString().split('T')[0]}.csv`
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
          borderTop: '4px solid #667eea',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <div style={{
          fontSize: '18px',
          color: '#495057',
          fontWeight: '500'
        }}>
          Loading contact submissions...
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '16px',
        color: '#fff',
        boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#fff'
            }}>
              📬 Contact Enquiries
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
              Manage and view all contact form submissions
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '12px 20px',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>Total Submissions</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{contacts.length}</div>
          </div>
        </div>
      </div>

      {error && (
        <div style={{
          padding: '16px 20px',
          background: '#fee',
          color: '#c33',
          borderRadius: '12px',
          marginBottom: '20px',
          border: '1px solid #fcc',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '15px',
          fontWeight: '500'
        }}>
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {/* Search and Actions Bar */}
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
          <input
            type="text"
            placeholder="🔍 Search by name, email, or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px 14px 45px',
              border: '2px solid #e0e0e0',
              borderRadius: '10px',
              fontSize: '15px',
              transition: 'all 0.3s',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#667eea'
              e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e0e0e0'
              e.target.style.boxShadow = 'none'
            }}
          />
        </div>
        <button
          onClick={exportToCSV}
          style={{
            padding: '14px 24px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)'
          }}
        >
          📥 Export CSV
        </button>
        <button
          onClick={fetchContacts}
          style={{
            padding: '14px 24px',
            background: '#48bb78',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 2px 8px rgba(72, 187, 120, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(72, 187, 120, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(72, 187, 120, 0.3)'
          }}
        >
          🔄 Refresh
        </button>
      </div>

      {/* Table Container */}
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        border: '1px solid #e8e8e8'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                borderBottom: '2px solid #dee2e6'
              }}>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontWeight: '700',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#495057'
                }}>Date & Time</th>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontWeight: '700',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#495057'
                }}>Name</th>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontWeight: '700',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#495057'
                }}>Contact Information</th>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontWeight: '700',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#495057'
                }}>Company</th>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontWeight: '700',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#495057'
                }}>Service Interest</th>
                <th style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontWeight: '700',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#495057'
                }}>Message</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{
                    padding: '60px 20px',
                    textAlign: 'center',
                    color: '#6c757d',
                    fontSize: '16px'
                  }}>
                    <div style={{ fontSize: '48px', marginBottom: '15px' }}>📭</div>
                    <div style={{ fontWeight: '600', marginBottom: '8px' }}>
                      {searchTerm ? 'No matches found' : 'No contact submissions yet'}
                    </div>
                    <div style={{ fontSize: '14px', color: '#adb5bd' }}>
                      {searchTerm ? 'Try adjusting your search terms' : 'Submissions will appear here once users submit the contact form'}
                    </div>
                  </td>
                </tr>
              ) : (
                filteredContacts.map((contact, index) => (
                  <tr
                    key={contact.id}
                    style={{
                      borderBottom: '1px solid #f0f0f0',
                      background: index % 2 === 0 ? '#fff' : '#fafafa',
                      transition: 'background 0.2s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f8f9ff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = index % 2 === 0 ? '#fff' : '#fafafa'
                    }}
                  >
                    <td style={{
                      padding: '18px 20px',
                      fontSize: '14px',
                      color: '#495057',
                      fontWeight: '500',
                      whiteSpace: 'nowrap'
                    }}>
                      <div style={{ color: '#212529', fontWeight: '600' }}>
                        {formatDate(contact.created_at).split(',')[0]}
                      </div>
                      <div style={{ color: '#6c757d', fontSize: '13px', marginTop: '4px' }}>
                        {formatDate(contact.created_at).split(',')[1]?.trim()}
                      </div>
                    </td>
                    <td style={{
                      padding: '18px 20px',
                      fontWeight: '600',
                      color: '#212529',
                      fontSize: '15px'
                    }}>
                      {contact.full_name}
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <div style={{
                        color: '#212529',
                        fontWeight: '500',
                        marginBottom: '6px',
                        fontSize: '14px'
                      }}>
                        📧 {contact.email}
                      </div>
                      <div style={{
                        color: '#6c757d',
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        📞 {contact.country_code} {contact.phone}
                      </div>
                    </td>
                    <td style={{
                      padding: '18px 20px',
                      color: '#495057',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      {contact.company_name}
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      {contact.selection ? (
                        <span style={{
                          display: 'inline-block',
                          padding: '6px 12px',
                          background: '#e7f3ff',
                          color: '#0066cc',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: '600'
                        }}>
                          {contact.selection}
                        </span>
                      ) : (
                        <span style={{ color: '#adb5bd', fontSize: '14px' }}>-</span>
                      )}
                    </td>
                    <td style={{
                      padding: '18px 20px',
                      fontSize: '14px',
                      color: '#495057',
                      maxWidth: '350px'
                    }}>
                      {contact.message ? (
                        <div style={{
                          maxHeight: '60px',
                          overflow: 'auto',
                          wordBreak: 'break-word',
                          lineHeight: '1.5',
                          color: '#495057'
                        }}>
                          {contact.message}
                        </div>
                      ) : (
                        <span style={{ color: '#adb5bd', fontStyle: 'italic' }}>No message</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Banner */}
      {filteredContacts.length > 0 && (
        <div style={{
          marginTop: '20px',
          padding: '16px 20px',
          background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
          borderRadius: '12px',
          border: '1px solid #ffc107',
          fontSize: '14px',
          color: '#856404',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{ fontSize: '20px' }}>ℹ️</span>
          <div>
            <strong>Security Note:</strong> This admin page is protected by authentication. 
            Only authorized users can access contact form submissions.
          </div>
        </div>
      )}
    </div>
  )
}
