'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'

interface EbookLandingPage {
  id: string
  slug: string
  title: string
  headline: string | null
  subheadline: string | null
  logo_text: string | null
  logo_image_url: string | null
  book_image_url: string | null
  learning_title: string | null
  learning_description: string | null
  benefits: string[]
  form_title: string | null
  author_heading: string | null
  author_name: string | null
  author_role: string | null
  author_bio: string | null
  author_avatar_url: string | null
  author_avatar_svg: string | null
  footer_color: string | null
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
    logo_text: 'Logo',
    logo_image_url: '',
    book_image_url: '',
    learning_title: '',
    learning_description: '',
    benefits: [] as string[],
    form_title: '',
    author_heading: '',
    author_name: '',
    author_role: '',
    author_bio: '',
    author_avatar_url: '',
    author_avatar_svg: '',
    footer_color: '#3aaee0',
  })
  const [newBenefit, setNewBenefit] = useState('')
  const supabase = createClient()

  useEffect(() => {
    fetchPages()
  }, [])

  const fetchPages = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('ebook_landing_pages')
        .select('*')
        .order('created_at', { ascending: false })

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
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      alert('Image size should be less than 2MB')
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      
      // Clean data: remove undefined/null values that might cause issues
      const payload = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [key, value === '' ? null : value])
      )

      if (editingPage) {
        const { error } = await supabase
          .from('ebook_landing_pages')
          .update({
            ...payload,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingPage.id)

        if (error) throw error
        alert('Page updated successfully!')
      } else {
        const { error } = await supabase
          .from('ebook_landing_pages')
          .insert([payload])

        if (error) throw error
        alert('Page created successfully!')
      }
      setShowForm(false)
      setEditingPage(null)
      fetchPages()
    } catch (error: any) {
      console.error('Error saving page:', error)
      const msg = error.message === 'Failed to fetch' 
        ? 'Network Error: Failed to fetch. Please ensure you have run the database migration in Supabase SQL Editor.'
        : error.message
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
      logo_text: page.logo_text || '',
      logo_image_url: page.logo_image_url || '',
      book_image_url: page.book_image_url || '',
      learning_title: page.learning_title || '',
      learning_description: page.learning_description || '',
      benefits: page.benefits || [],
      form_title: page.form_title || '',
      author_heading: page.author_heading || '',
      author_name: page.author_name || '',
      author_role: page.author_role || '',
      author_bio: page.author_bio || '',
      author_avatar_url: page.author_avatar_url || '',
      author_avatar_svg: page.author_avatar_svg || '',
      footer_color: page.footer_color || '',
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
          max-width: 1200px;
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
          font-weight: 600;
          color: #667eea;
        }

        .admin-ebook-title-cell {
          color: #333;
          font-weight: 500;
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
        <h1 className="admin-ebook-title">E-Book Landing Pages</h1>
        <button
          onClick={() => {
            setEditingPage(null)
            setFormData({
              slug: 'default',
              title: '',
              headline: '',
              subheadline: '',
              logo_text: 'Logo',
              logo_image_url: '',
              book_image_url: '',
              learning_title: '',
              learning_description: '',
              benefits: [],
              form_title: '',
              author_heading: '',
              author_name: '',
              author_role: '',
              author_bio: '',
              author_avatar_url: '',
              author_avatar_svg: '',
              footer_color: '#3aaee0',
            })
            setShowForm(true)
          }}
          className="admin-ebook-btn"
        >
          + Add New Page
        </button>
      </div>

      {showForm && (
        <div className="admin-ebook-form-card">
          <h2 className="admin-ebook-form-title">{editingPage ? 'Edit Page' : 'Create New Page'}</h2>
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
                  style={{ fontFamily: 'monospace', fontSize: '12px' }}
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
                <td className="admin-ebook-title-cell">{page.title}</td>
                <td className="admin-ebook-author-cell">{page.author_name}</td>
                <td>
                  <div className="admin-ebook-actions">
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
