'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'
import Link from 'next/link'
import { color } from 'framer-motion'

interface FormField {
  id: string
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select'
  label?: string
  placeholder?: string
  required?: boolean
  options?: string[]
}

interface EbookLandingPage {
  id: string
  slug: string
  title: string
  headline: string | null
  subheadline: string | null
  additional_paragraph: string | null
  extra_content: string | null
  logo_text: string | null
  logo_image_url: string | null
  book_image_url: string | null
  learning_title: string | null
  learning_description: string | null
  benefits_heading: string | null
  benefits: string[]
  form_title: string | null
  form_fields: FormField[]
  author_heading: string | null
  author_name: string | null
  author_role: string | null
  author_bio: string | null
  author_avatar_url: string | null
  author_avatar_svg: string | null
  footer_color: string | null
  pdf_url: string | null
  created_at: string
  updated_at: string
}

export default function AdminEbookLandingPage() {
  const [pages, setPages] = useState<EbookLandingPage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingPage, setEditingPage] = useState<EbookLandingPage | null>(null)
  const [formData, setFormData] = useState({
    slug: 'default',
    title: '',
    headline: '',
    subheadline: '',
    additional_paragraph: '',
    extra_content: '',
    logo_text: 'Logo',
    logo_image_url: '',
    book_image_url: '',
    learning_title: '',
    learning_description: '',
    benefits_heading: '',
    benefits: [] as string[],
    form_title: '',
    form_fields: [] as FormField[],
    author_heading: '',
    author_name: '',
    author_role: '',
    author_bio: '',
    author_avatar_url: '',
    author_avatar_svg: '',
    footer_color: '#3aaee0',
    pdf_url: '',
  })
  const [newBenefit, setNewBenefit] = useState('')
  const [newFormField, setNewFormField] = useState<FormField>({
    id: '',
    type: 'text',
    label: '',
    placeholder: '',
    required: true,
    options: [],
  })
  const supabase = createClient()

  useEffect(() => {
    fetchPages()
  }, [])

  const fetchPages = async () => {
    try {
      setLoading(true)
      console.log("Admin: fetchPages() called!")
      const { data, error } = await supabase
        .from('ebook_landing_pages')
        .select('*')
        .order('created_at', { ascending: false })

      console.log("Admin: fetched pages data:", data)
      if (error) throw error
      setPages(data || [])
    } catch (error: any) {
      console.error('Error fetching pages:', error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const updatedData = { [name]: value }
    
    // Auto-generate slug from title when title changes and not editing
    if (name === 'title' && !editingPage) {
      const slug = value
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim()
      updatedData.slug = slug
    }
    
    setFormData(prev => ({ ...prev, ...updatedData }))
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0]
    if (!file) return

    const isPdf = fieldName === 'pdf_url'
    if (isPdf) {
      if (file.type !== 'application/pdf') {
        alert('Please select a PDF file')
        return
      }
    } else if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) { // Increased limit to 5MB for PDF
      alert('File size should be less than 5MB')
      return
    }

    setUploading(true)

    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${fieldName}-${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
      const filePath = `ebook-landing/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('case-study-images') // Reusing existing bucket for now, or create new one if preferred
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('case-study-images')
        .getPublicUrl(filePath)

      setFormData(prev => ({ ...prev, [fieldName]: publicUrl }))
      alert('Image uploaded successfully!')
    } catch (error: any) {
      console.error('Upload error:', error)
      alert('Error uploading image: ' + error.message)
    } finally {
      setUploading(false)
    }
  }

  const handleAddBenefit = () => {
    if (newBenefit.trim()) {
      setFormData(prev => ({
        ...prev,
        benefits: [...prev.benefits, newBenefit.trim()]
      }))
      setNewBenefit('')
    }
  }

  const handleRemoveBenefit = (index: number) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index)
    }))
  }

  const handleAddFormField = () => {
    if (newFormField.id.trim()) {
      setFormData(prev => ({
        ...prev,
        form_fields: [...prev.form_fields, { ...newFormField }]
      }))
      setNewFormField({
        id: '',
        type: 'text',
        label: '',
        placeholder: '',
        required: true,
        options: [],
      })
    }
  }

  const handleRemoveFormField = (index: number) => {
    setFormData(prev => ({
      ...prev,
      form_fields: prev.form_fields.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      
      // Clean data: only include fields that might already exist in database
      // Start with core fields that definitely exist
      const payload: any = {
        slug: formData.slug,
        title: formData.title,
        headline: formData.headline || null,
        subheadline: formData.subheadline || null,
        logo_text: formData.logo_text || null,
        logo_image_url: formData.logo_image_url || null,
        book_image_url: formData.book_image_url || null,
        learning_title: formData.learning_title || null,
        learning_description: formData.learning_description || null,
        benefits_heading: formData.benefits_heading || null,
        benefits: formData.benefits,
        form_title: formData.form_title || null,
        author_heading: formData.author_heading || null,
        author_name: formData.author_name || null,
        author_role: formData.author_role || null,
        author_bio: formData.author_bio || null,
        author_avatar_url: formData.author_avatar_url || null,
        author_avatar_svg: formData.author_avatar_svg || null,
        footer_color: formData.footer_color || null,
        pdf_url: formData.pdf_url || null,
        updated_at: new Date().toISOString(),
      }

      // Try to add new columns, but they might not exist yet
      try {
        payload.additional_paragraph = formData.additional_paragraph || null
        payload.extra_content = formData.extra_content || null
        payload.form_fields = formData.form_fields
      } catch (err) {
        // Ignore if these fields don't exist yet
      }

      console.log("Admin handleSubmit - payload being sent:", payload);

      if (editingPage) {
        try {
          const { error } = await supabase
            .from('ebook_landing_pages')
            .update(payload)
            .eq('id', editingPage.id)

          if (error) throw error
        } catch (updateErr: any) {
          // If update failed because of new columns, try without them
          if (updateErr.message && (updateErr.message.includes('additional_paragraph') || updateErr.message.includes('form_fields') || updateErr.message.includes('extra_content'))) {
            console.warn('Retrying update without new columns...')
            const fallbackPayload = { ...payload }
            delete fallbackPayload.additional_paragraph
            delete fallbackPayload.extra_content
            delete fallbackPayload.form_fields
            const { error } = await supabase
              .from('ebook_landing_pages')
              .update(fallbackPayload)
              .eq('id', editingPage.id)
            if (error) throw error
          } else {
            throw updateErr
          }
        }
        alert('Page updated successfully!')
      } else {
        // For insert, we might need to be more careful
        try {
          const { error } = await supabase
            .from('ebook_landing_pages')
            .insert([payload])

          if (error) throw error
        } catch (insertErr: any) {
          // If insert failed because of new columns, try without them
          if (insertErr.message && (insertErr.message.includes('additional_paragraph') || insertErr.message.includes('form_fields') || insertErr.message.includes('extra_content'))) {
            console.warn('Retrying insert without new columns...')
            const fallbackPayload = { ...payload }
            delete fallbackPayload.additional_paragraph
            delete fallbackPayload.extra_content
            delete fallbackPayload.form_fields
            const { error } = await supabase
              .from('ebook_landing_pages')
              .insert([fallbackPayload])
            if (error) throw error
          } else {
            throw insertErr
          }
        }
        alert('Page created successfully!')
      }
      setShowForm(false)
      setEditingPage(null)
      fetchPages()
    } catch (error: any) {
      console.error('Error saving page:', error)
      let msg = error.message
      
      if (error.code === '23505') {
        msg = `The slug "${formData.slug}" is already in use. Please use a unique slug or edit the existing page.`
      } else if (error.message === 'Failed to fetch') {
        msg = 'Network Error: Failed to fetch. Please ensure you have run the database migration in Supabase SQL Editor.'
      }
      
      alert('Error saving page: ' + msg)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (page: EbookLandingPage) => {
    setEditingPage(page)
    setFormData({
      slug: page.slug,
      title: page.title,
      headline: page.headline || '',
      subheadline: page.subheadline || '',
      additional_paragraph: page.additional_paragraph || '',
      extra_content: page.extra_content || '',
      logo_text: page.logo_text || '',
      logo_image_url: page.logo_image_url || '',
      book_image_url: page.book_image_url || '',
      learning_title: page.learning_title || '',
      learning_description: page.learning_description || '',
      benefits_heading: page.benefits_heading || '',
      benefits: page.benefits || [],
      form_title: page.form_title || '',
      form_fields: page.form_fields || [],
      author_heading: page.author_heading || '',
      author_name: page.author_name || '',
      author_role: page.author_role || '',
      author_bio: page.author_bio || '',
      author_avatar_url: page.author_avatar_url || '',
      author_avatar_svg: page.author_avatar_svg || '',
      footer_color: page.footer_color || '',
      pdf_url: page.pdf_url || '',
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this page?')) {
      try {
        setLoading(true)
        const { error } = await supabase
          .from('ebook_landing_pages')
          .delete()
          .eq('id', id)

        if (error) throw error
        fetchPages()
      } catch (error: any) {
        alert('Error deleting page: ' + error.message)
      } finally {
        setLoading(false)
      }
    }
  }

  if (loading && pages.length === 0) {
    return <div className="admin-ebook-loading">Loading...</div>
  }

  return (
    <div className="admin-ebook-root">
      <style>{`
        .admin-ebook-root {
          padding: 30px;
          max-width: 1400px;
          margin: 0 auto;
          background: #f5f5f5;
          min-height: 100vh;
        }

        .admin-ebook-loading {
          padding: 40px;
          text-align: center;
          color: #666;
          font-size: 16px;
        }

        .admin-ebook-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #e0e0e0;
        }

        .admin-ebook-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0;
        }

        .admin-ebook-btn {
          padding: 12px 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          text-decoration: none;
        }

        .admin-ebook-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .admin-ebook-form-card {
          background: #fff;
          padding: 32px;
          border-radius: 16px;
          margin-bottom: 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #e8e8e8;
        }

        .admin-ebook-form-card p {
          color: #000;
        }

        .admin-ebook-form-title {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid #eee;
        }

        .admin-ebook-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .admin-ebook-grid-full {
          grid-column: span 2;
        }

        .admin-ebook-field {
          margin-bottom: 16px;
        }

        .admin-ebook-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #444;
          margin-bottom: 6px;
        }

        .admin-ebook-input {
          width: 100%;
          padding: 10px 14px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s ease;
          background: #fafafa;
        }

        .admin-ebook-input:focus {
          outline: none;
          border-color: #667eea;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .admin-ebook-input::placeholder {
          color: #aaa;
        }

        .admin-ebook-textarea {
          width: 100%;
          padding: 10px 14px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 14px;
          resize: vertical;
          min-height: 80px;
          font-family: inherit;
          transition: all 0.2s ease;
          background: #fafafa;
        }

        .admin-ebook-textarea:focus {
          outline: none;
          border-color: #667eea;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .admin-ebook-section-title {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a2e;
          margin: 24px 0 16px;
          padding-top: 20px;
          border-top: 2px solid #eee;
        }

        .admin-ebook-benefits-box {
          background: #f8f9ff;
          border: 2px dashed #d0d7ff;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 16px;
        }

        .admin-ebook-benefits-header {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }

        .admin-ebook-benefits-input {
          flex: 1;
          padding: 10px 14px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 14px;
          background: #fff;
        }

        .admin-ebook-benefits-input:focus {
          outline: none;
          border-color: #667eea;
        }

        .admin-ebook-btn-add {
          padding: 10px 20px;
          background: #22c55e;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .admin-ebook-btn-add:hover {
          background: #16a34a;
        }

        .admin-ebook-benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .admin-ebook-benefits-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          margin-bottom: 8px;
        }

        .admin-ebook-benefits-text {
          font-size: 14px;
          color: #333;
        }

        .admin-ebook-btn-remove {
          padding: 6px 12px;
          background: #fee;
          color: #dc2626;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .admin-ebook-btn-remove:hover {
          background: #fdd;
        }

        .admin-ebook-form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }

        .admin-ebook-btn-cancel {
          padding: 12px 24px;
          background: #f5f5f5;
          color: #666;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .admin-ebook-btn-cancel:hover {
          background: #eee;
        }

        .admin-ebook-btn-submit {
          padding: 12px 28px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .admin-ebook-btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .admin-ebook-btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .admin-ebook-table-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #e8e8e8;
        }

        .admin-ebook-table {
          width: 100%;
          border-collapse: collapse;
        }

        .admin-ebook-table thead {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .admin-ebook-table th {
          padding: 16px 20px;
          text-align: left;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .admin-ebook-table td {
          padding: 16px 20px;
          border-bottom: 1px solid #f0f0f0;
          font-size: 14px;
        }

        .admin-ebook-table tbody tr {
          transition: background 0.2s ease;
        }

        .admin-ebook-table tbody tr:hover {
          background: #f8f9ff;
        }

        .admin-ebook-table tbody tr:last-child td {
          border-bottom: none;
        }

        .admin-ebook-slug {
          color: #000;
        }

        .admin-ebook-title-cell {
          color: #333;
          font-weight: 500;
        }

        .admin-ebook-title-cell a {
          color: #667eea;
          text-decoration: none;
        }

        .admin-ebook-title-cell a:hover {
          text-decoration: underline;
        }

        .admin-ebook-author-cell {
          color: #666;
        }

        .admin-ebook-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
        }

        .admin-ebook-btn-edit {
          padding: 8px 16px;
          background: #e8f0ff;
          color: #667eea;
          border: none;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .admin-ebook-btn-edit:hover {
          background: #d0e0ff;
        }

        .admin-ebook-btn-delete {
          padding: 8px 16px;
          background: #fee;
          color: #dc2626;
          border: none;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .admin-ebook-btn-delete:hover {
          background: #fdd;
        }

        .admin-ebook-btn-preview {
          padding: 8px 16px;
          background: #3aaee0;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .admin-ebook-btn-preview:hover {
          background: #2d8fbf;
        }

        .admin-ebook-empty {
          text-align: center;
          padding: 60px 20px;
          color: #888;
          font-style: italic;
          font-size: 15px;
        }

        .admin-ebook-color-preview {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 4px;
          vertical-align: middle;
          margin-left: 8px;
          border: 1px solid #ddd;
        }

        .admin-ebook-form-fields-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .admin-ebook-form-field-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 16px;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .admin-ebook-form-field-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .admin-ebook-form-field-type {
          font-size: 12px;
          font-weight: 400;
          background: #f0f0f0;
          padding: 2px 8px;
          border-radius: 6px;
          color: #555;
        }

        @media (max-width: 768px) {
          .admin-ebook-grid {
            grid-template-columns: 1fr;
          }

          .admin-ebook-grid-full {
            grid-column: span 1;
          }

          .admin-ebook-header {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }

          .admin-ebook-form-card {
            padding: 20px;
          }
        }
      `}</style>

      <div className="admin-ebook-header">
        <h1 className="admin-ebook-title">📖 E-Book Landing Pages</h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Link href="/admin/ebook-enquiries" className="admin-ebook-btn" style={{ background: '#48bb78', boxShadow: '0 4px 15px rgba(72, 187, 120, 0.4)' }}>
            📊 View Enquiries
          </Link>
          <button className="admin-ebook-btn" onClick={() => {
            setEditingPage(null)
            setFormData({
              slug: '',
              title: '',
              headline: '',
              subheadline: '',
              additional_paragraph: '',
              extra_content: '',
              logo_text: 'Logo',
              logo_image_url: '',
              book_image_url: '',
              learning_title: '',
              learning_description: '',
              benefits_heading: '',
              benefits: [],
              form_title: '',
              form_fields: [
                { id: 'name', type: 'text', label: '', placeholder: 'Name', required: true }
              ],
              author_heading: '',
              author_name: '',
              author_role: '',
              author_bio: '',
              author_avatar_url: '',
              author_avatar_svg: '',
              footer_color: '#3aaee0',
              pdf_url: '',
            })
            setShowForm(true)
          }}>
            ➕ Create New Page
          </button>
        </div>
      </div>

      {showForm && (
        <div className="admin-ebook-form-card">
          <h2 className="admin-ebook-form-title">{editingPage ? 'Edit Page' : 'Create New Page'}</h2>
          {!editingPage && (
            <p style={{ color: '#666', fontSize: '13px', marginBottom: '15px', background: '#fff9c4', padding: '10px', borderRadius: '6px', border: '1px solid #fbc02d' }}>
              <strong>Note:</strong> To update the existing default page, please click the <strong>Edit</strong> button in the table below instead of "Add New Page".
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="admin-ebook-grid">
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Slug (Unique ID)</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  required
                />
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Page Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  required
                />
              </div>
              <div className="admin-ebook-field admin-ebook-grid-full">
                <label className="admin-ebook-label">Headline</label>
                <input
                  type="text"
                  name="headline"
                  value={formData.headline}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="Main headline for the hero section"
                />
              </div>
              <div className="admin-ebook-field admin-ebook-grid-full">
                <label className="admin-ebook-label">Sub-headline</label>
                <input
                  type="text"
                  name="subheadline"
                  value={formData.subheadline}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="Supporting text below headline"
                />
              </div>
              <div className="admin-ebook-field admin-ebook-grid-full">
                <label className="admin-ebook-label">Additional Paragraph (Optional)</label>
                <textarea
                  name="additional_paragraph"
                  value={formData.additional_paragraph}
                  onChange={handleInputChange}
                  className="admin-ebook-textarea"
                  placeholder="Extra paragraph to display below sub-headline"
                  rows={2}
                />
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Logo Text</label>
                <input
                  type="text"
                  name="logo_text"
                  value={formData.logo_text}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="Text inside logo circle"
                />
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Logo Image (Optional - overrides text)</label>
                <input
                  type="file"
                  onChange={(e) => handleFileUpload(e, 'logo_image_url')}
                  className="admin-ebook-input"
                  accept="image/*"
                />
                {formData.logo_image_url && <p className="text-xs text-green-600 mt-1">Uploaded: {formData.logo_image_url.split('/').pop()}</p>}
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Book Image URL</label>
                <input
                  type="text"
                  name="book_image_url"
                  value={formData.book_image_url}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="/images/book.png"
                />
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Upload Book Cover</label>
                <input
                  type="file"
                  onChange={(e) => handleFileUpload(e, 'book_image_url')}
                  className="admin-ebook-input"
                  accept="image/*"
                />
                {formData.book_image_url && <p className="text-xs text-green-600 mt-1">Uploaded: {formData.book_image_url.split('/').pop()}</p>}
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">E-Book PDF URL</label>
                <input
                  type="text"
                  name="pdf_url"
                  value={formData.pdf_url}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="https://.../ebook.pdf"
                />
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Upload E-Book PDF</label>
                <input
                  type="file"
                  onChange={(e) => handleFileUpload(e, 'pdf_url')}
                  className="admin-ebook-input"
                  accept=".pdf"
                />
                {formData.pdf_url && <p className="text-xs text-green-600 mt-1">Uploaded: {formData.pdf_url.split('/').pop()}</p>}
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Learning Title</label>
                <input
                  type="text"
                  name="learning_title"
                  value={formData.learning_title}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="Title for what they'll learn section"
                />
              </div>
              <div className="admin-ebook-field admin-ebook-grid-full">
                <label className="admin-ebook-label">Learning Description</label>
                <textarea
                  name="learning_description"
                  value={formData.learning_description}
                  onChange={handleInputChange}
                  className="admin-ebook-textarea"
                  rows={3}
                  placeholder="Description text for the learning section"
                />
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Benefits Heading</label>
                <input
                  type="text"
                  name="benefits_heading"
                  value={formData.benefits_heading}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="Heading for the benefits list"
                />
              </div>
            </div>

            <h3 className="admin-ebook-section-title">Benefits List</h3>
            <div className="admin-ebook-benefits-box">
              <div className="admin-ebook-benefits-header">
                <input
                  type="text"
                  value={newBenefit}
                  onChange={(e) => setNewBenefit(e.target.value)}
                  className="admin-ebook-benefits-input"
                  placeholder="Enter a benefit item..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      handleAddBenefit()
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={handleAddBenefit}
                  className="admin-ebook-btn-add"
                >
                  Add
                </button>
              </div>
              <ul className="admin-ebook-benefits-list">
                {formData.benefits.map((benefit, index) => (
                  <li key={index} className="admin-ebook-benefits-item">
                    <span className="admin-ebook-benefits-text">{benefit}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveBenefit(index)}
                      className="admin-ebook-btn-remove"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="admin-ebook-grid">
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Form Title</label>
                <input
                  type="text"
                  name="form_title"
                  value={formData.form_title}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="Title above the download form"
                />
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">
                  Footer Color (Hex)
                  <span className="admin-ebook-color-preview" style={{ backgroundColor: formData.footer_color }}></span>
                </label>
                <input
                  type="text"
                  name="footer_color"
                  value={formData.footer_color}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="#3aaee0"
                />
              </div>
            </div>

            <h3 className="admin-ebook-section-title">Form Fields (Dynamic)</h3>
            <div className="admin-ebook-benefits-box">
              <div className="admin-ebook-benefits-header">
                <input
                  type="text"
                  value={newFormField.id}
                  onChange={(e) => setNewFormField(prev => ({ ...prev, id: e.target.value }))}
                  className="admin-ebook-benefits-input"
                  placeholder="Field ID (e.g., 'name')"
                  style={{ flex: '0.5' }}
                />
                <select
                  value={newFormField.type}
                  onChange={(e) => setNewFormField(prev => ({
                    ...prev,
                    type: e.target.value as any
                  }))}
                  className="admin-ebook-input"
                  style={{ flex: '0.3' }}
                >
                  <option value="text">Text</option>
                  <option value="email">Email</option>
                  <option value="tel">Phone</option>
                  <option value="number">Number</option>
                  <option value="textarea">Textarea</option>
                  <option value="select">Dropdown</option>
                </select>
                <button
                  type="button"
                  onClick={handleAddFormField}
                  className="admin-ebook-btn-add"
                >
                  Add
                </button>
              </div>
              <ul className="admin-ebook-form-fields-list">
                {formData.form_fields.map((field, index) => (
                  <li key={index} className="admin-ebook-form-field-item">
                    <div className="admin-ebook-form-field-header">
                      <div>
                        <span style={{ color: '#666' }}> {field.id} </span>
                        <span className="admin-ebook-form-field-type"> {field.type}</span>
                        {field.required && <span style={{ color: '#dc2626', fontSize: '12px', marginLeft: '8px' }}>* Required</span>}
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveFormField(index)}
                        className="admin-ebook-btn-remove"
                      >
                        Remove
                      </button>
                    </div>
                    {field.label && <div><span style={{ color: '#6666' }}>Label:</span> {field.label}</div>}
                    {field.placeholder && <div><span style={{ color: '#666' }}>Placeholder : </span> <span style={{ color: '#666' }}>{field.placeholder}</span></div>}
                    {field.options && field.options.length > 0 && (
                      <div><span style={{ color: '#666' }}>Options:</span> {field.options.join(', ')}</div>
                    )}
                  </li>
                ))}
              </ul>
            </div>


            
              <div className="admin-ebook-field admin-ebook-grid-full">
                <label className="admin-ebook-label">Extra Content (Optional)</label>
                <textarea
                  name="extra_content"
                  value={formData.extra_content}
                  onChange={handleInputChange}
                  className="admin-ebook-textarea"
                  placeholder="Extra HTML or text content to display in a content box"
                  rows={5}
                />
              </div>

            <h3 className="admin-ebook-section-title">Author Information</h3>
            <div className="admin-ebook-grid">
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Author Heading</label>
                <input
                  type="text"
                  name="author_heading"
                  value={formData.author_heading}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="e.g., About the Author"
                />
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Author Name</label>
                <input
                  type="text"
                  name="author_name"
                  value={formData.author_name}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="Author's full name"
                />
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Author Role</label>
                <input
                  type="text"
                  name="author_role"
                  value={formData.author_role}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="e.g., Senior Consultant, RheinBrücke"
                />
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Author Avatar URL</label>
                <input
                  type="text"
                  name="author_avatar_url"
                  value={formData.author_avatar_url}
                  onChange={handleInputChange}
                  className="admin-ebook-input"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              <div className="admin-ebook-field">
                <label className="admin-ebook-label">Upload Author Avatar</label>
                <input
                  type="file"
                  onChange={(e) => handleFileUpload(e, 'author_avatar_url')}
                  className="admin-ebook-input"
                  accept="image/*"
                />
                {formData.author_avatar_url && <p className="text-xs text-green-600 mt-1">Uploaded: {formData.author_avatar_url.split('/').pop()}</p>}
              </div>
              <div className="admin-ebook-field admin-ebook-grid-full">
                <label className="admin-ebook-label">Author Bio</label>
                <textarea
                  name="author_bio"
                  value={formData.author_bio}
                  onChange={handleInputChange}
                  className="admin-ebook-textarea"
                  rows={3}
                  placeholder="Short biography of the author"
                />
              </div>
              <div className="admin-ebook-field admin-ebook-grid-full">
                <label className="admin-ebook-label">Author Avatar SVG (Optional - overrides URL)</label>
                <textarea
                  name="author_avatar_svg"
                  value={formData.author_avatar_svg}
                  onChange={handleInputChange}
                  className="admin-ebook-textarea"
                  rows={4}
                  placeholder="<svg>...</svg>"
                  style={{ fontFamily: 'helvetica-neue-lt-pro', fontSize: '12px' }}
                />
              </div>
            </div>

            <div className="admin-ebook-form-actions">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setEditingPage(null)
                }}
                className="admin-ebook-btn-cancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="admin-ebook-btn-submit"
              >
                {loading ? 'Saving...' : (editingPage ? 'Update Page' : 'Create Page')}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="admin-ebook-table-card">
        <table className="admin-ebook-table">
          <thead>
            <tr>
              <th>Slug</th>
              <th>Title</th>
              <th>Author</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.id}>
                <td className="admin-ebook-slug">{page.slug}</td>
                <td className="admin-ebook-title-cell">
                  <Link href={`/LP/${page.slug}`} target="_blank">
                    {page.title}
                  </Link>
                </td>
                <td className="admin-ebook-author-cell">{page.author_name}</td>
                <td>
                  <div className="admin-ebook-actions">
                    <Link
                      href={`/LP/${page.slug}`}
                      target="_blank"
                      className="admin-ebook-btn-preview"
                      style={{ textDecoration: 'none' }}
                    >
                      Preview
                    </Link>
                    <button
                      onClick={() => handleEdit(page)}
                      className="admin-ebook-btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(page.id)}
                      className="admin-ebook-btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {pages.length === 0 && (
              <tr>
                <td colSpan={4} className="admin-ebook-empty">
                  No e-book landing pages found. Create your first one above!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
