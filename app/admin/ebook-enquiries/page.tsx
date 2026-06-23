'use client'

import { useEffect, useMemo, useState } from 'react'
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

export default function AdminEbookEnquiriesPage() {
  const supabase = useMemo(() => createClient(), [])
  const [rows, setRows] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    void fetchRows()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchRows = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .ilike('selection', '%E-Book Download%')
        .order('created_at', { ascending: false })

      if (error) throw error
      setRows(data || [])
      setError('')
    } catch (err: any) {
      setError('Failed to load E-Book enquiries: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const filtered = rows.filter((r) => {
    const q = search.trim().toLowerCase()
    if (!q) return true
    return (
      r.full_name?.toLowerCase().includes(q) ||
      r.email?.toLowerCase().includes(q) ||
      r.company_name?.toLowerCase().includes(q) ||
      (r.selection ?? '').toLowerCase().includes(q)
    )
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return
    const { error } = await supabase.from('contacts').delete().match({ id })
    if (error) {
      setError('Failed to delete enquiry: ' + error.message)
      return
    }
    setRows((prev) => prev.filter((r) => r.id !== id))
  }

  const exportToCSV = () => {
    // Define CSV headers
    const headers = ['Date', 'Name', 'Email', 'Phone', 'Company', 'Selection', 'Message']
    
    // Create CSV rows from filtered data
    const csvRows = filtered.map((row) => [
      formatDate(row.created_at),
      row.full_name,
      row.email,
      `${row.country_code || ''} ${row.phone || ''}`.trim(),
      row.company_name,
      row.selection || '',
      (row.message || '').replace(/"/g, '""') // Escape double quotes
    ])
    
    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...csvRows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')
    
    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    
    // Create a download link
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    const date = new Date().toISOString().split('T')[0]
    link.setAttribute('href', url)
    link.setAttribute('download', `ebook-enquiries-${date}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <h2 style={{ margin: 0 }}>📖 E-Book Enquiries</h2>
        <button
          onClick={fetchRows}
          style={{
            padding: '8px 12px',
            borderRadius: 8,
            border: '1px solid #ddd',
            background: '#fff',
            cursor: 'pointer',
          }}
        >
          Refresh
        </button>
        <button
          onClick={exportToCSV}
          style={{
            padding: '8px 16px',
            borderRadius: 8,
            border: '1px solid #3aaee0',
            background: '#3aaee0',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Export to CSV
        </button>
        <div style={{ marginLeft: 'auto' }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name/email/company..."
            style={{
              padding: '10px 12px',
              borderRadius: 10,
              border: '1px solid #ddd',
              width: 320,
              maxWidth: '100%',
            }}
          />
        </div>
      </div>

      {error && (
        <div style={{ marginTop: 14, padding: 12, borderRadius: 10, background: '#fff5f5', color: '#b91c1c' }}>
          {error}
        </div>
      )}

      <div style={{ marginTop: 16, background: '#fff', border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ padding: 14, borderBottom: '1px solid #eee', display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ fontWeight: 600,color:'#111' }}>Total: {filtered.length}</div>
          {loading && <div style={{ color: '#666' }}>Loading…</div>}
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 1200 }}>
            <thead>
              <tr style={{ background: '#fafafa' }}>
                {['Date', 'Name', 'Email', 'Company', 'Selection', 'Message', 'Actions'].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'left',
                      padding: '14px 16px',
                      borderBottom: '1px solid #eee',
                      fontSize: 13,
                      color: '#555',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ padding: 16, color: '#666' }}>
                    No E-Book enquiries found.
                  </td>
                </tr>
              ) : (
                filtered.map((r) => (
                  <tr key={r.id}>
                    <td style={{ padding: '16px', borderBottom: '1px solid #f1f1f1', fontSize: 13, color: '#111', opacity: 1, width: 220 }}>
                      {formatDate(r.created_at)}
                    </td>
                    <td style={{ padding: '16px', borderBottom: '1px solid #f1f1f1', color: '#111', opacity: 1, width: 140 }}>
                      {r.full_name}
                    </td>
                    <td style={{ padding: '16px', borderBottom: '1px solid #f1f1f1', color: '#111', opacity: 1, width: 220 }}>
                      {r.email}
                    </td>
                    <td style={{ padding: '16px', borderBottom: '1px solid #f1f1f1', color: '#111', opacity: 1, width: 170 }}>
                      {r.company_name}
                    </td>
                    <td style={{ padding: '16px', borderBottom: '1px solid #f1f1f1', color: '#111', opacity: 1, width: 280 }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: 999,
                          background: '#eef2ff',
                          color: '#3730a3',
                          fontSize: 12,
                          fontWeight: 600,
                          maxWidth: 260,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                        title={r.selection ?? ''}
                      >
                        {r.selection ?? ''}
                      </span>
                    </td>
                    <td style={{ padding: '16px', borderBottom: '1px solid #f1f1f1', color: '#111', opacity: 1, width: 520, maxWidth: 520 }}>
                      <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: 1.4 }}>
                      {r.message}
                      </div>
                    </td>
                    <td style={{ padding: '16px', borderBottom: '1px solid #f1f1f1', width: 110 }}>
                      <button
                        onClick={() => handleDelete(r.id)}
                        style={{
                          padding: '8px 10px',
                          borderRadius: 10,
                          border: '1px solid #fecaca',
                          background: '#fff5f5',
                          color: '#b91c1c',
                          cursor: 'pointer',
                          fontWeight: 600,
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
