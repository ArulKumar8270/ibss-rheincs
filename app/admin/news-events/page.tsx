'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import 'quill/dist/quill.snow.css'

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

interface NewsEvent {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  type: 'news' | 'event'
  event_date: string | null
  location: string | null
  featured_image: string | null
  published: boolean
  created_at: string
  updated_at: string
}

export default function AdminNewsEventsPage() {
  const [items, setItems] = useState<NewsEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState<NewsEvent | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    type: 'news' as 'news' | 'event',
    event_date: '',
    location: '',
    featured_image: '',
    created_at: '',
    published: false
  })
  const supabase = createClient()

  // Handle image upload in editor
  const handleEditorImageUpload = async () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) return

      try {
        setUploading(true)
        const fileExt = file.name.split('.').pop()
        const fileName = `news-event-content-${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
        const filePath = `news-events/${fileName}`

        const { error: uploadError } = await supabase.storage
          .from('uploads')
          .upload(filePath, file)

        if (uploadError) throw uploadError

        const { data } = supabase.storage.from('uploads').getPublicUrl(filePath)
        const publicUrl = data.publicUrl

        // Insert image into editor
        const editorElement = document.querySelector('.ql-editor') as any
        if (editorElement && editorElement.__quill) {
          const quill = editorElement.__quill
          const range = quill.getSelection(true)
          quill.insertEmbed(range ? range.index : 0, 'image', publicUrl)
          quill.setSelection((range ? range.index : 0) + 1)
        }
      } catch (error: any) {
        console.error('Error uploading image:', error)
        alert('Error uploading image: ' + error.message)
      } finally {
        setUploading(false)
      }
    }
  }

  // Quill editor modules configuration
  const quillModules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: {
        image: handleEditorImageUpload
      }
    },
    clipboard: {
      matchVisual: false
    }
  }

  const quillFormats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'indent',
    'color', 'background',
    'align',
    'link', 'image', 'video'
  ]

  useEffect(() => {
    fetchItems()
  }, [])

  // Add image resize functionality
  useEffect(() => {
    if (!showForm) return

    const initImageResize = () => {
      const editor = document.querySelector('.ql-editor') as HTMLElement
      if (!editor) {
        setTimeout(initImageResize, 200)
        return
      }

      if (window.getComputedStyle(editor).position === 'static') {
        editor.style.position = 'relative'
      }

      const addResizeHandles = (img: HTMLImageElement) => {
        if ((img as any).__hasResizeHandle) return
        ;(img as any).__hasResizeHandle = true

        if (window.getComputedStyle(img).display === 'inline') {
          img.style.display = 'inline-block'
        }

        const wrapper = document.createElement('span')
        wrapper.className = 'ql-image-resize-wrapper'
        wrapper.style.cssText = `
          display: inline-block;
          position: relative;
          vertical-align: middle;
        `

        img.parentNode?.insertBefore(wrapper, img)
        wrapper.appendChild(img)

        const handle = document.createElement('div')
        handle.className = 'ql-image-resize-handle'
        handle.innerHTML = '⋰'
        handle.style.cssText = `
          position: absolute;
          width: 20px;
          height: 20px;
          background: #667eea;
          border: 2px solid white;
          border-radius: 4px;
          cursor: nwse-resize;
          z-index: 10000;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
          right: -10px;
          bottom: -10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: bold;
          line-height: 1;
          pointer-events: auto;
        `

        wrapper.appendChild(handle)

        let isResizing = false
        let startX = 0
        let startWidth = 0
        let startHeight = 0
        let aspectRatio = 1

        const startResize = (e: MouseEvent) => {
          e.preventDefault()
          e.stopPropagation()
          isResizing = true
          startX = e.clientX
          startWidth = img.offsetWidth || img.naturalWidth || 300
          startHeight = img.offsetHeight || img.naturalHeight || 200
          aspectRatio = startWidth / startHeight
          
          document.body.style.cursor = 'nwse-resize'
          document.body.style.userSelect = 'none'
          document.addEventListener('mousemove', doResize, { passive: false })
          document.addEventListener('mouseup', stopResize)
        }

        const doResize = (e: MouseEvent) => {
          if (!isResizing) return
          e.preventDefault()
          e.stopPropagation()
          
          const deltaX = e.clientX - startX
          const newWidth = Math.max(50, Math.min(2000, startWidth + deltaX))
          const newHeight = newWidth / aspectRatio
          
          img.style.width = `${newWidth}px`
          img.style.height = `${newHeight}px`
          img.style.maxWidth = 'none'
          img.style.maxHeight = 'none'
        }

        const stopResize = () => {
          if (!isResizing) return
          isResizing = false
          document.body.style.cursor = ''
          document.body.style.userSelect = ''
          document.removeEventListener('mousemove', doResize)
          document.removeEventListener('mouseup', stopResize)
        }

        handle.addEventListener('mousedown', startResize)
        handle.addEventListener('click', (e) => {
          e.preventDefault()
          e.stopPropagation()
        })

        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            mutation.removedNodes.forEach((node) => {
              if (node === wrapper || (node as Element)?.contains?.(wrapper)) {
                observer.disconnect()
                ;(img as any).__hasResizeHandle = false
              }
            })
          })
        })
        observer.observe(editor, { childList: true, subtree: true })
      }

      const images = editor.querySelectorAll('img:not([data-resize-processed])')
      images.forEach((img) => {
        ;(img as HTMLImageElement).setAttribute('data-resize-processed', 'true')
        addResizeHandles(img as HTMLImageElement)
      })

      const imageObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              const element = node as Element
              if (element.tagName === 'IMG' && !element.hasAttribute('data-resize-processed')) {
                element.setAttribute('data-resize-processed', 'true')
                setTimeout(() => addResizeHandles(element as HTMLImageElement), 100)
              }
              const imgs = element.querySelectorAll?.('img:not([data-resize-processed])')
              imgs?.forEach(img => {
                img.setAttribute('data-resize-processed', 'true')
                setTimeout(() => addResizeHandles(img as HTMLImageElement), 100)
              })
            }
          })
        })
      })

      imageObserver.observe(editor, { childList: true, subtree: true })

      return () => {
        imageObserver.disconnect()
        editor.querySelectorAll('.ql-image-resize-handle').forEach(h => h.remove())
        editor.querySelectorAll('.ql-image-resize-wrapper').forEach(w => {
          const img = w.querySelector('img')
          if (img && w.parentNode) {
            w.parentNode.insertBefore(img, w)
            w.remove()
          }
        })
      }
    }

    const timer = setTimeout(initImageResize, 300)
    return () => clearTimeout(timer)
  }, [showForm])

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleTitleChange = (title: string) => {
    // Auto-generate slug if not editing or if slug is empty
    if (!editingItem || !formData.slug) {
      setFormData(prev => ({ ...prev, title, slug: generateSlug(title) }))
    } else {
      setFormData(prev => ({ ...prev, title }))
    }
  }

  const fetchItems = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('news_events')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setItems(data || [])
    } catch (err: any) {
      console.error('Error fetching news/events:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const submitData = {
        ...formData,
        event_date: formData.event_date || null,
        location: formData.location || null,
        featured_image: formData.featured_image || null
      }
      if (editingItem) {
        const { error } = await supabase
          .from('news_events')
          .update(submitData)
          .eq('id', editingItem.id)
        if (error) throw error
      } else {
        const { error } = await supabase
          .from('news_events')
          .insert([submitData])
        if (error) throw error
      }
      setShowForm(false)
      setEditingItem(null)
      setFormData({
        title: '',
        slug: '',
        content: '',
        excerpt: '',
        type: 'news',
        event_date: '',
        location: '',
        featured_image: '',
        created_at: '',
        published: false
      })
      fetchItems()
    } catch (err: any) {
      alert('Error: ' + err.message)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB')
      return
    }

    setUploading(true)
    setUploadProgress(0)

    try {
      // Create unique filename
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
      const filePath = `news-event-images/${fileName}`

      // Upload to Supabase Storage
      const { error: uploadError, data } = await supabase.storage
        .from('news-event-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) throw uploadError

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('news-event-images')
        .getPublicUrl(filePath)

      setFormData({ ...formData, featured_image: publicUrl })
      setUploadProgress(100)
      alert('Image uploaded successfully!')
    } catch (error: any) {
      console.error('Upload error:', error)
      alert('Error uploading image: ' + error.message)
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return
    try {
      const { error } = await supabase
        .from('news_events')
        .delete()
        .eq('id', id)
      if (error) throw error
      fetchItems()
    } catch (err: any) {
      alert('Error: ' + err.message)
    }
  }

  const handleEdit = (item: NewsEvent) => {
    setEditingItem(item)
    // Convert ISO date to datetime-local format
    const createdDate = item.created_at ? new Date(item.created_at).toISOString().slice(0, 16) : ''
    setFormData({
      title: item.title,
      slug: item.slug,
      content: item.content,
      excerpt: item.excerpt,
      type: item.type,
      event_date: item.event_date || '',
      location: item.location || '',
      featured_image: item.featured_image || '',
      created_at: createdDate,
      published: item.published
    })
    setShowForm(true)
  }

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location?.toLowerCase().includes(searchTerm.toLowerCase())
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
    const headers = ['Date', 'Type', 'Title', 'Event Date', 'Location', 'Status']
    const rows = filteredItems.map(i => [
      formatDate(i.created_at),
      i.type === 'news' ? 'News' : 'Event',
      i.title,
      i.event_date ? formatDate(i.event_date) : '',
      i.location || '',
      i.published ? 'Published' : 'Draft'
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `news-events_${new Date().toISOString().split('T')[0]}.csv`
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
          borderTop: '4px solid #ed8936',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <div style={{
          fontSize: '18px',
          color: '#495057',
          fontWeight: '500'
        }}>
          Loading news & events...
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
        background: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)',
        borderRadius: '16px',
        color: '#fff',
        boxShadow: '0 4px 20px rgba(237, 137, 54, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#fff'
            }}>
              📰 News & Events
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
              Manage news articles and events
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '20px 30px',
            borderRadius: '12px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '5px' }}>Total Items</div>
            <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{items.length}</div>
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
            placeholder="Search by title, type, or location..."
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
            onFocus={(e) => e.currentTarget.style.borderColor = '#ed8936'}
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
          disabled={filteredItems.length === 0}
          style={{
            padding: '12px 24px',
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            cursor: filteredItems.length === 0 ? 'not-allowed' : 'pointer',
            fontWeight: '600',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: filteredItems.length === 0 ? 0.5 : 1,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            if (filteredItems.length > 0) e.currentTarget.style.background = '#2563eb'
          }}
          onMouseLeave={(e) => {
            if (filteredItems.length > 0) e.currentTarget.style.background = '#3b82f6'
          }}
        >
          <span>📥</span> Export CSV
        </button>
        <button
          onClick={fetchItems}
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
            setEditingItem(null)
            setFormData({
              title: '',
              slug: '',
              content: '',
              excerpt: '',
              type: 'news',
              event_date: '',
              location: '',
              featured_image: '',
              created_at: '',
              published: false
            })
          }}
          style={{
            padding: '12px 24px',
            background: '#ed8936',
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
          onMouseEnter={(e) => e.currentTarget.style.background = '#dd6b20'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#ed8936'}
        >
          <span>➕</span> Create New
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
          <h2 style={{ marginBottom: '20px', color: '#333', fontWeight: 'bold' }}>{editingItem ? 'Edit' : 'Create'} {formData.type === 'news' ? 'News' : 'Event'}</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Type *</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as 'news' | 'event' })}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px', background: '#fff' }}
              >
                <option value="news">News</option>
                <option value="event">Event</option>
              </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>
                Slug * 
                <small style={{ fontWeight: 'normal', color: '#666', marginLeft: '8px', fontSize: '12px' }}>
                  (Auto-generated from title, can be edited)
                </small>
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
                placeholder="URL-friendly identifier"
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
              />
            </div>
            {formData.type === 'event' && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Event Date</label>
                  <input
                    type="datetime-local"
                    value={formData.event_date}
                    onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
                  />
                </div>
              </>
            )}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Excerpt</label>
              <div style={{ background: 'white', borderRadius: '6px', marginBottom: '15px' }}>
                <ReactQuill
                  theme="snow"
                  value={formData.excerpt}
                  onChange={(value: string) => setFormData({ ...formData, excerpt: value })}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Short excerpt/summary"
                  style={{ minHeight: '150px' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Content *</label>
              <div style={{ background: 'white', borderRadius: '6px' }}>
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={(value: string) => setFormData({ ...formData, content: value })}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Main content"
                  style={{ minHeight: '300px' }}
                />
              </div>
              <style jsx global>{`
                .ql-editor {
                  min-height: 150px;
                }
                .ql-editor img {
                  cursor: pointer;
                  max-width: 100%;
                  height: auto;
                }
                .ql-editor img:hover {
                  outline: 2px dashed #667eea;
                  outline-offset: 2px;
                }
                  .ql-image-resize-wrapper {
                    display: inline-block !important;
                    position: relative !important;
                    vertical-align: middle !important;
                  }
                  .ql-image-resize-handle {
                    transition: transform 0.1s, background 0.1s !important;
                    user-select: none !important;
                    -webkit-user-select: none !important;
                    display: flex !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    pointer-events: auto !important;
                  }
                  .ql-image-resize-handle:hover {
                    transform: scale(1.15) !important;
                    background: #5568d3 !important;
                  }
                  .ql-image-resize-handle:active {
                    transform: scale(0.95) !important;
                    background: #4c5fd0 !important;
                  }
                  .ql-editor .ql-image-resize-handle {
                    display: flex !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    pointer-events: auto !important;
                  }
              `}</style>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>
                Featured Image
              </label>
              <div style={{ marginBottom: '10px' }}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
                />
                {uploading && (
                  <div style={{ marginTop: '10px' }}>
                    <div style={{
                      width: '100%',
                      background: '#f0f0f0',
                      borderRadius: '4px',
                      height: '20px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${uploadProgress}%`,
                        background: '#667eea',
                        height: '100%',
                        transition: 'width 0.3s'
                      }}></div>
                    </div>
                    <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                      Uploading... {uploadProgress}%
                    </p>
                  </div>
                )}
              </div>
              <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <input
                  type="url"
                  value={formData.featured_image}
                  onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                  placeholder="Or enter image URL: https://example.com/image.jpg"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
                />
              </div>
              {formData.featured_image && (
                <div style={{ marginTop: '10px' }}>
                  <img
                    src={formData.featured_image}
                    alt="Preview"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '200px',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              )}
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
                  background: '#ed8936',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                {editingItem ? 'Update' : 'Create'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setEditingItem(null)
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
        {filteredItems.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#94a3b8' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>📰</div>
            <div style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px', color: '#64748b' }}>
              {searchTerm ? 'No items found matching your search' : 'No news or events yet'}
            </div>
            <div style={{ fontSize: '14px', color: '#94a3b8' }}>
              {searchTerm ? 'Try adjusting your search terms' : 'Create your first news or event to get started'}
            </div>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>DATE & TIME</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TYPE</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TITLE</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>EVENT DETAILS</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>STATUS</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, index) => (
                  <tr key={item.id} style={{ 
                    borderBottom: '1px solid #f1f5f9',
                    background: index % 2 === 0 ? '#fff' : '#fafbfc',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.background = index % 2 === 0 ? '#fff' : '#fafbfc'}
                  >
                    <td style={{ padding: '18px 20px', color: '#64748b', fontSize: '14px' }}>
                      {formatDate(item.created_at)}
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <span style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: item.type === 'news' ? '#e0f2fe' : '#fef3c7',
                        color: item.type === 'news' ? '#0369a1' : '#92400e',
                        display: 'inline-block'
                      }}>
                        {item.type === 'news' ? '📰 News' : '🎉 Event'}
                      </span>
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <Link 
                        href={item.type === 'news' ? `/news-events#${item.slug}` : `/events#${item.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          textDecoration: 'none', 
                          color: 'inherit',
                          display: 'block'
                        }}
                      >
                        <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '14px', marginBottom: '4px', cursor: 'pointer' }}>
                          {item.title}
                        </div>
                        {item.excerpt && (
                          <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>
                            {item.excerpt.substring(0, 60)}...
                          </div>
                        )}
                      </Link>
                    </td>
                    <td style={{ padding: '18px 20px', fontSize: '14px', color: '#475569' }}>
                      {item.type === 'event' ? (
                        <>
                          {item.event_date && (
                            <div style={{ marginBottom: '4px' }}>
                              📅 {formatDate(item.event_date)}
                            </div>
                          )}
                          {item.location && (
                            <div style={{ color: '#64748b' }}>
                              📍 {item.location}
                            </div>
                          )}
                          {!item.event_date && !item.location && <span style={{ color: '#cbd5e1' }}>-</span>}
                        </>
                      ) : (
                        <span style={{ color: '#cbd5e1' }}>-</span>
                      )}
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <span style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: item.published ? '#d1fae5' : '#fee2e2',
                        color: item.published ? '#065f46' : '#991b1b',
                        display: 'inline-block'
                      }}>
                        {item.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <button
                          onClick={() => handleEdit(item)}
                          style={{
                            padding: '8px 16px',
                            background: '#ed8936',
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
                            e.currentTarget.style.background = '#dd6b20'
                            e.currentTarget.style.transform = 'translateY(-1px)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ed8936'
                            e.currentTarget.style.transform = 'translateY(0)'
                          }}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={async () => {
                            const newPublished = !item.published
                            try {
                              const { error } = await supabase
                                .from('news_events')
                                .update({ published: newPublished })
                                .eq('id', item.id)
                              if (error) throw error
                              fetchItems()
                              alert(`Item ${newPublished ? 'published' : 'unpublished'} successfully!`)
                            } catch (err: any) {
                              alert('Error: ' + err.message)
                            }
                          }}
                          style={{
                            padding: '8px 16px',
                            background: item.published ? '#f59e0b' : '#10b981',
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
                          {item.published ? '👁️ Unpublish' : '✅ Publish'}
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
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
            This admin page is protected by authentication. Only authorized users can access and manage news & events.
          </div>
        </div>
      </div>
    </div>
  )
}
