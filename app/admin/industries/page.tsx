'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'
import Link from 'next/link'

interface Industry {
  id: string
  name: string
  slug: string
  description: string | null
  display_order: number
  active: boolean
  created_at: string
  updated_at: string
}

export default function AdminIndustriesPage() {
  const [industries, setIndustries] = useState<Industry[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingIndustry, setEditingIndustry] = useState<Industry | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    display_order: 0,
    active: true
  })
  const supabase = createClient()

  useEffect(() => {
    fetchIndustries()
  }, [])

  const fetchIndustries = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('industries')
        .select('*')
        .order('display_order', { ascending: true })
        .order('name', { ascending: true })

      if (error) throw error
      setIndustries(data || [])
    } catch (err: any) {
      alert('Error fetching industries: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleNameChange = (name: string) => {
    setFormData({ 
      ...formData, 
      name,
      slug: editingIndustry ? formData.slug : generateSlug(name)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const submitData = {
        ...formData,
        updated_at: new Date().toISOString()
      }
      
      if (editingIndustry) {
        const { error } = await supabase
          .from('industries')
          .update(submitData)
          .eq('id', editingIndustry.id)

        if (error) throw error
        alert('Industry updated successfully!')
      } else {
        const { error } = await supabase
          .from('industries')
          .insert([submitData])

        if (error) throw error
        alert('Industry created successfully!')
      }

      fetchIndustries()
      resetForm()
    } catch (err: any) {
      alert('Error: ' + err.message)
    }
  }

  const handleEdit = (industry: Industry) => {
    setEditingIndustry(industry)
    setFormData({
      name: industry.name,
      slug: industry.slug,
      description: industry.description || '',
      display_order: industry.display_order,
      active: industry.active
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this industry?')) return

    try {
      const { error } = await supabase
        .from('industries')
        .delete()
        .eq('id', id)

      if (error) throw error
      alert('Industry deleted successfully!')
      fetchIndustries()
    } catch (err: any) {
      alert('Error: ' + err.message)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      slug: '',
      description: '',
      display_order: 0,
      active: true
    })
    setEditingIndustry(null)
    setShowForm(false)
  }

  const filteredIndustries = industries.filter(industry =>
    industry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    industry.slug.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#333', fontSize: '28px', margin: 0 }}>Manage Industries</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link href="/admin" style={{ padding: '10px 20px', background: '#667eea', color: 'white', textDecoration: 'none', borderRadius: '6px' }}>
            ← Back to Admin
          </Link>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              style={{ padding: '10px 20px', background: '#667eea', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
            >
              + Add Industry
            </button>
          )}
        </div>
      </div>

      {showForm && (
        <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '25px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ marginBottom: '20px', color: '#667eea', fontSize: '20px' }}>
            {editingIndustry ? 'Edit Industry' : 'Add New Industry'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleNameChange(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Slug *</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: generateSlug(e.target.value) })}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
              />
              <small style={{ color: '#666', fontSize: '12px', display: 'block', marginTop: '5px' }}>URL-friendly identifier (auto-generated from name)</small>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Display Order</label>
              <input
                type="number"
                value={formData.display_order}
                onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                min="0"
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
              />
              <small style={{ color: '#666', fontSize: '12px', display: 'block', marginTop: '5px' }}>Lower numbers appear first</small>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                />
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Active</span>
              </label>
              <small style={{ color: '#666', fontSize: '12px', display: 'block', marginTop: '5px' }}>Only active industries will be available for selection</small>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="submit"
                style={{ padding: '12px 24px', background: '#667eea', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
              >
                {editingIndustry ? 'Update Industry' : 'Create Industry'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                style={{ padding: '12px 24px', background: '#e2e8f0', color: '#333', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search industries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
          />
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>Loading industries...</div>
        ) : filteredIndustries.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            {searchTerm ? 'No industries found matching your search.' : 'No industries found. Create your first industry!'}
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#333', fontSize: '14px' }}>Order</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#333', fontSize: '14px' }}>Name</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#333', fontSize: '14px' }}>Slug</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#333', fontSize: '14px' }}>Description</th>
                  <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#333', fontSize: '14px' }}>Status</th>
                  <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#333', fontSize: '14px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredIndustries.map((industry) => (
                  <tr key={industry.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px', fontSize: '14px', color: '#333' }}>{industry.display_order}</td>
                    <td style={{ padding: '12px', fontSize: '14px', color: '#333', fontWeight: '500' }}>{industry.name}</td>
                    <td style={{ padding: '12px', fontSize: '14px', color: '#666', fontFamily: 'monospace' }}>{industry.slug}</td>
                    <td style={{ padding: '12px', fontSize: '14px', color: '#666', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {industry.description || '-'}
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: industry.active ? '#d4edda' : '#f8d7da',
                        color: industry.active ? '#155724' : '#721c24'
                      }}>
                        {industry.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <button
                          onClick={() => handleEdit(industry)}
                          style={{ padding: '6px 12px', background: '#667eea', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(industry.id)}
                          style={{ padding: '6px 12px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                        >
                          Delete
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
    </div>
  )
}
