'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'

interface Career {
  id: string
  title: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  description: string
  requirements: string
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
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'full-time' as 'full-time' | 'part-time' | 'contract' | 'internship',
    description: '',
    requirements: '',
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
      const submitData = {
        ...formData,
        salary_range: formData.salary_range || null,
        application_deadline: formData.application_deadline || null
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
    setFormData({
      title: career.title,
      department: career.department,
      location: career.location,
      type: career.type,
      description: career.description,
      requirements: career.requirements,
      salary_range: career.salary_range || '',
      application_deadline: career.application_deadline || '',
      published: career.published
    })
    setShowForm(true)
  }

  return (
    <div>
      <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>💼 Careers Management</h1>
          <p style={{ color: '#666' }}>Total job postings: {careers.length}</p>
        </div>
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
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          ➕ Post New Career
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
          <h2 style={{ marginBottom: '20px' }}>{editingCareer ? 'Edit' : 'Create New'} Career Posting</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Job Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Department *</label>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
                />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Location *</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Job Type *</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
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
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Salary Range</label>
                <input
                  type="text"
                  value={formData.salary_range}
                  onChange={(e) => setFormData({ ...formData, salary_range: e.target.value })}
                  placeholder="e.g., $50,000 - $70,000"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Application Deadline</label>
                <input
                  type="date"
                  value={formData.application_deadline}
                  onChange={(e) => setFormData({ ...formData, application_deadline: e.target.value })}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Job Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={6}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Requirements *</label>
              <textarea
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                rows={6}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
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

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Loading careers...</p>
        </div>
      ) : (
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          {careers.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
              No career postings yet. Create your first posting!
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Title</th>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Department</th>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Location</th>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Type</th>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Status</th>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {careers.map((career, index) => (
                  <tr key={career.id} style={{ borderBottom: '1px solid #eee', background: index % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                    <td style={{ padding: '15px', fontWeight: '600' }}>{career.title}</td>
                    <td style={{ padding: '15px' }}>{career.department}</td>
                    <td style={{ padding: '15px' }}>{career.location}</td>
                    <td style={{ padding: '15px' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: '#e3f2fd',
                        color: '#1976d2',
                        textTransform: 'capitalize'
                      }}>
                        {career.type.replace('-', ' ')}
                      </span>
                    </td>
                    <td style={{ padding: '15px' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: career.published ? '#d4edda' : '#f8d7da',
                        color: career.published ? '#155724' : '#721c24'
                      }}>
                        {career.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td style={{ padding: '15px' }}>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                          onClick={() => handleEdit(career)}
                          style={{
                            padding: '6px 12px',
                            background: '#9f7aea',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '14px'
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(career.id)}
                          style={{
                            padding: '6px 12px',
                            background: '#dc3545',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '14px'
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  )
}
