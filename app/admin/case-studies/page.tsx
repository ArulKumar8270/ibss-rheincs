'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import 'quill/dist/quill.snow.css'

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

interface CaseStudy {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  author: string | null
  featured_image: string | null
  category: string
  published: boolean
  created_at: string
  updated_at: string
  client_name: string | null
  client_logo: string | null
  client_description: string | null
  client_location: string | null
  overview: string | null
  challenges: string | null
  solution: string | null
  benefits: string | null
  implementation: string | null
  download_url: string | null
  meta_title: string | null
  meta_description: string | null
  industries: string[] | null
}

interface Faq {
  id?: string
  question: string
  answer: string
}

export default function AdminCaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingCaseStudy, setEditingCaseStudy] = useState<CaseStudy | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    author: '',
    featured_image: '',
    category: 'all',
    published: false,
    client_name: '',
    client_logo: '',
    client_description: '',
    client_location: '',
    overview: '',
    challenges: '',
    solution: '',
    benefits: '',
    implementation: '',
    download_url: '',
    created_at: '',
    industries: [] as string[],
    meta_title: '',
    meta_description: ''
  })
  const [faqs, setFaqs] = useState<Faq[]>([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [industries, setIndustries] = useState<Array<{ id: string; name: string; slug: string }>>([])
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
        const fileName = `case-study-content-${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
        const filePath = `case-studies/${fileName}`

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

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'our-solutions', label: 'Our Solutions' },
    { value: 'enterprise-solutions', label: 'Enterprise Solutions & Services' },
    { value: 'digital-solutions', label: 'Digital Solutions' },
    { value: 'digital-services', label: 'Digital Services' }
  ]

  useEffect(() => {
    fetchCaseStudies()
    fetchIndustries()
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

  const fetchIndustries = async () => {
    try {
      const { data, error } = await supabase
        .from('industries')
        .select('id, name, slug')
        .eq('active', true)
        .order('display_order', { ascending: true })
        .order('name', { ascending: true })

      if (error) throw error
      setIndustries(data || [])
    } catch (err: any) {
      // Fallback to hardcoded options if table doesn't exist yet
      setIndustries([
        { id: '1', name: 'Our Solutions', slug: 'our-solutions' },
        { id: '2', name: 'Enterprise Solutions & Services', slug: 'enterprise-solutions' },
        { id: '3', name: 'Digital Solutions', slug: 'digital-solutions' },
        { id: '4', name: 'Digital Services', slug: 'digital-services' }
      ])
    }
  }

  const fetchCaseStudies = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setCaseStudies(data || [])
    } catch (err: any) {
      console.error('Error fetching case studies:', err)
    } finally {
      setLoading(false)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleTitleChange = (title: string) => {
    if (!editingCaseStudy || !formData.slug) {
      setFormData(prev => ({ ...prev, title, slug: generateSlug(title) }))
    } else {
      setFormData(prev => ({ ...prev, title }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const submitData = {
        ...formData,
        industries: formData.industries.length > 0 ? formData.industries : null,
        created_at: formData.created_at ? new Date(formData.created_at).toISOString() : new Date().toISOString(),
        updated_at: new Date().toISOString(),
        meta_title: formData.meta_title.trim() || null,
        meta_description: formData.meta_description.trim() || null
      }
      
      let caseStudyId = editingCaseStudy?.id
      if (editingCaseStudy) {
        const { error } = await supabase
          .from('case_studies')
          .update(submitData)
          .eq('id', editingCaseStudy.id)
        if (error) throw error
      } else {
        const { data, error } = await supabase
          .from('case_studies')
          .insert([submitData])
          .select()
        if (error) throw error
        if (data && data.length > 0) {
          caseStudyId = data[0].id
        }
      }

      // Save FAQs
      if (caseStudyId) {
        // Delete existing FAQs first
        await supabase
          .from('case_study_faqs')
          .delete()
          .eq('case_study_id', caseStudyId)
        
        // Insert new FAQs
        if (faqs.length > 0) {
          const faqsToInsert = faqs
            .filter(faq => faq.question.trim() && faq.answer.trim())
            .map(faq => ({
              case_study_id: caseStudyId,
              question: faq.question.trim(),
              answer: faq.answer.trim()
            }))
          
          if (faqsToInsert.length > 0) {
            const { error: faqError } = await supabase
              .from('case_study_faqs')
              .insert(faqsToInsert)
            if (faqError) throw faqError
          }
        }
      }

      setShowForm(false)
      setEditingCaseStudy(null)
      setFaqs([])
      resetForm()
      fetchCaseStudies()
      alert(editingCaseStudy ? 'Case study updated successfully!' : 'Case study created successfully!')
    } catch (err: any) {
      alert('Error: ' + err.message)
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      author: '',
      featured_image: '',
      category: 'all',
      published: false,
      client_name: '',
      client_logo: '',
      client_description: '',
      client_location: '',
      overview: '',
      challenges: '',
      solution: '',
      benefits: '',
      implementation: '',
      download_url: '',
      created_at: '',
      industries: [],
      meta_title: '',
      meta_description: ''
    })
    setFaqs([])
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this case study?')) return
    try {
      const { error } = await supabase
        .from('case_studies')
        .delete()
        .eq('id', id)
      if (error) throw error
      fetchCaseStudies()
    } catch (err: any) {
      alert('Error: ' + err.message)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB')
      return
    }

    setUploading(true)
    setUploadProgress(0)

    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
      const filePath = `case-study-images/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('case-study-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('case-study-images')
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

  const handleClientLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      alert('Logo size should be less than 5MB')
      return
    }

    setUploading(true)
    setUploadProgress(0)

    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `client-logo-${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
      const filePath = `case-study-images/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('case-study-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('case-study-images')
        .getPublicUrl(filePath)

      setFormData({ ...formData, client_logo: publicUrl })
      setUploadProgress(100)
      alert('Client logo uploaded successfully!')
    } catch (error: any) {
      console.error('Upload error:', error)
      alert('Error uploading client logo: ' + error.message)
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  const handleEdit = async (caseStudy: CaseStudy) => {
    setEditingCaseStudy(caseStudy)
    // Convert ISO date to datetime-local format
    const createdDate = caseStudy.created_at ? new Date(caseStudy.created_at).toISOString().slice(0, 16) : ''
    setFormData({
      title: caseStudy.title,
      slug: caseStudy.slug,
      content: caseStudy.content,
      excerpt: caseStudy.excerpt || '',
      author: caseStudy.author || '',
      featured_image: caseStudy.featured_image || '',
      category: caseStudy.category || 'all',
      published: caseStudy.published,
      client_name: caseStudy.client_name || '',
      client_logo: caseStudy.client_logo || '',
      client_description: caseStudy.client_description || '',
      client_location: caseStudy.client_location || '',
      overview: caseStudy.overview || '',
      challenges: caseStudy.challenges || '',
      solution: caseStudy.solution || '',
      benefits: caseStudy.benefits || '',
      implementation: caseStudy.implementation || '',
      download_url: caseStudy.download_url || '',
      created_at: createdDate,
      industries: caseStudy.industries || [],
      meta_title: caseStudy.meta_title || '',
      meta_description: caseStudy.meta_description || ''
    })

    // Fetch FAQs for this case study
    try {
      const { data, error } = await supabase
        .from('case_study_faqs')
        .select('*')
        .eq('case_study_id', caseStudy.id)
        .order('created_at', { ascending: true })
      
      if (error) throw error
      setFaqs(data || [])
    } catch (err) {
      console.error('Error fetching FAQs:', err)
      setFaqs([])
    }

    setShowForm(true)
  }

  const toggleIndustry = (industry: string) => {
    setFormData(prev => ({
      ...prev,
      industries: prev.industries.includes(industry)
        ? prev.industries.filter(i => i !== industry)
        : [...prev.industries, industry]
    }))
  }

  const filteredCaseStudies = caseStudies.filter(cs =>
    cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cs.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cs.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cs.client_name?.toLowerCase().includes(searchTerm.toLowerCase())
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
    const headers = ['Date', 'Title', 'Client', 'Category', 'Status', 'ID']
    const rows = filteredCaseStudies.map(cs => [
      formatDate(cs.created_at),
      cs.title,
      cs.client_name || '',
      categories.find(c => c.value === (cs.category || 'all'))?.label || 'All',
      cs.published ? 'Published' : 'Draft',
      cs.id
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `case_studies_${new Date().toISOString().split('T')[0]}.csv`
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
          Loading case studies...
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
        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
        borderRadius: '16px',
        color: '#fff',
        boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#fff'
            }}>
              Case Studies Management
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
              Create, edit, and manage all case studies
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '20px 30px',
            borderRadius: '12px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '5px' }}>Total Case Studies</div>
            <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{caseStudies.length}</div>
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
            placeholder="Search by title, author, client, or category..."
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
            onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
          />
        </div>
        <button
          onClick={exportToCSV}
          disabled={filteredCaseStudies.length === 0}
          style={{
            padding: '12px 24px',
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            cursor: filteredCaseStudies.length === 0 ? 'not-allowed' : 'pointer',
            fontWeight: '600',
            fontSize: '14px',
            opacity: filteredCaseStudies.length === 0 ? 0.5 : 1
          }}
        >
          Export CSV
        </button>
        <button
          onClick={fetchCaseStudies}
          style={{
            padding: '12px 24px',
            background: '#10b981',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '14px'
          }}
        >
          Refresh
        </button>
        <button
          onClick={() => {
            setShowForm(true)
            setEditingCaseStudy(null)
            resetForm()
          }}
          style={{
            padding: '12px 24px',
            background: '#667eea',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '14px'
          }}
        >
          Create New Case Study
        </button>
      </div>

      {showForm && (
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '25px',
          marginBottom: '30px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          maxHeight: '80vh',
          overflowY: 'auto'
        }}>
          <h2 style={{ marginBottom: '20px', color: '#333', fontWeight: 'bold' }}>
            {editingCaseStudy ? 'Edit Case Study' : 'Create New Case Study'}
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '2px solid #e2e8f0' }}>
              <h3 style={{ marginBottom: '15px', color: '#667eea', fontSize: '18px' }}>Basic Information</h3>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  required
                  placeholder="Enter case study title"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Slug *</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                  placeholder="case-study-slug"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontFamily: 'monospace', fontSize: '14px' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Excerpt</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Author</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Created Date</label>
                <input
                  type="datetime-local"
                  value={formData.created_at}
                  onChange={(e) => setFormData({ ...formData, created_at: e.target.value })}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
                />
                <small style={{ color: '#666', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                  Date when this case study was created (defaults to current date if not set)
                </small>
              </div>

              <div style={{ marginBottom: '15px', padding: '15px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #eee' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '15px', color: '#333' }}>SEO Meta Tags</h3>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Meta Title</label>
                  <input
                    type="text"
                    value={formData.meta_title}
                    onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                    placeholder="Enter SEO title (max 60 chars recommended)"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
                  />
                </div>
                <div style={{ marginBottom: '0' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Meta Description</label>
                  <textarea
                    value={formData.meta_description}
                    onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                    rows={2}
                    placeholder="Enter SEO description (max 160 chars recommended)"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '25px', padding: '15px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #eee' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '15px', color: '#333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  Frequently Asked Questions (FAQs)
                  <button
                    type="button"
                    onClick={() => setFaqs([...faqs, { question: '', answer: '' }])}
                    style={{ padding: '6px 12px', background: '#667eea', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}
                  >
                    + Add FAQ
                  </button>
                </h3>
                
                {faqs.length === 0 ? (
                  <p style={{ fontSize: '14px', color: '#999', textAlign: 'center', padding: '10px' }}>No FAQs added yet.</p>
                ) : (
                  faqs.map((faq, index) => (
                    <div key={index} style={{ marginBottom: '15px', padding: '15px', background: '#fff', border: '1px solid #ddd', borderRadius: '6px', position: 'relative' }}>
                      <button
                        type="button"
                        onClick={() => setFaqs(faqs.filter((_, i) => i !== index))}
                        style={{ position: 'absolute', top: '5px', right: '5px', background: 'none', border: 'none', color: '#ff4d4d', fontSize: '18px', cursor: 'pointer' }}
                        title="Remove FAQ"
                      >
                        &times;
                      </button>
                      <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '13px' }}>Question {index + 1}</label>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => {
                            const newFaqs = [...faqs]
                            newFaqs[index].question = e.target.value
                            setFaqs(newFaqs)
                          }}
                          placeholder="Enter question"
                          style={{ width: '100%', padding: '8px', border: '1px solid #eee', borderRadius: '4px', color: '#333', fontSize: '14px' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '13px' }}>Answer {index + 1}</label>
                        <textarea
                          value={faq.answer}
                          onChange={(e) => {
                            const newFaqs = [...faqs]
                            newFaqs[index].answer = e.target.value
                            setFaqs(newFaqs)
                          }}
                          rows={2}
                          placeholder="Enter answer"
                          style={{ width: '100%', padding: '8px', border: '1px solid #eee', borderRadius: '4px', color: '#333', fontSize: '14px' }}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '15px' }} className="text-black">
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>
                  Industries
                  <Link href="/admin/industries" style={{ marginLeft: '10px', fontSize: '12px', color: '#667eea', textDecoration: 'none' }}>
                    (Manage Industries)
                  </Link>
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {industries.length > 0 ? (
                    industries.map((industry) => (
                      <label key={industry.id} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          checked={formData.industries.includes(industry.slug)}
                          onChange={() => toggleIndustry(industry.slug)}
                        />
                        <span style={{ fontSize: '14px' }}>
                          {industry.name}
                        </span>
                      </label>
                    ))
                  ) : (
                    <div style={{ color: '#666', fontSize: '14px' }}>Loading industries...</div>
                  )}
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Featured Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px', marginBottom: '10px' }}
                />
                {uploading && (
                  <div style={{ marginTop: '10px' }}>
                    <div style={{ width: '100%', background: '#f0f0f0', borderRadius: '4px', height: '20px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ width: `${uploadProgress}%`, background: '#667eea', height: '100%', transition: 'width 0.3s' }}></div>
                    </div>
                  </div>
                )}
                <input
                  type="url"
                  value={formData.featured_image}
                  onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                  placeholder="Or enter image URL"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px', marginTop: '10px' }}
                />
                {formData.featured_image && (
                  <img
                    src={formData.featured_image}
                    alt="Preview"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                    style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px', marginTop: '10px' }}
                  />
                )}
              </div>
            </div>

            {/* Client Information */}
            <div style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '2px solid #e2e8f0' }}>
              <h3 style={{ marginBottom: '15px', color: '#667eea', fontSize: '18px' }}>Client Information</h3>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Client Name</label>
                <input
                  type="text"
                  value={formData.client_name}
                  onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Client Logo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleClientLogoUpload}
                  disabled={uploading}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px', marginBottom: '10px' }}
                />
                {uploading && (
                  <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <div style={{ width: '100%', background: '#f0f0f0', borderRadius: '4px', height: '20px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ width: `${uploadProgress}%`, background: '#667eea', height: '100%', transition: 'width 0.3s' }}></div>
                    </div>
                  </div>
                )}
                <input
                  type="url"
                  value={formData.client_logo}
                  onChange={(e) => setFormData({ ...formData, client_logo: e.target.value })}
                  placeholder="Or enter logo URL"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px', marginTop: '10px' }}
                />
                {formData.client_logo && (
                  <img
                    src={formData.client_logo}
                    alt="Client Logo Preview"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                    style={{ maxWidth: '200px', maxHeight: '100px', borderRadius: '8px', marginTop: '10px', objectFit: 'contain' }}
                  />
                )}
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Client Description</label>
                <div style={{ background: 'white', borderRadius: '6px' }}>
                  <ReactQuill
                    theme="snow"
                    value={formData.client_description}
                    onChange={(value: string) => setFormData({ ...formData, client_description: value })}
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Client description"
                    style={{ minHeight: '150px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Client Location</label>
                <input
                  type="text"
                  value={formData.client_location}
                  onChange={(e) => setFormData({ ...formData, client_location: e.target.value })}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>
            </div>

            {/* Content Sections */}
            <div style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '2px solid #e2e8f0' }}>
              <h3 style={{ marginBottom: '15px', color: '#667eea', fontSize: '18px' }}>Content Sections</h3>
              
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
                    min-height: 300px;
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
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Overview</label>
                <div style={{ background: 'white', borderRadius: '6px' }}>
                  <ReactQuill
                    theme="snow"
                    value={formData.overview}
                    onChange={(value: string) => setFormData({ ...formData, overview: value })}
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Overview section"
                    style={{ minHeight: '200px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Challenges</label>
                <div style={{ background: 'white', borderRadius: '6px' }}>
                  <ReactQuill
                    theme="snow"
                    value={formData.challenges}
                    onChange={(value: string) => setFormData({ ...formData, challenges: value })}
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Challenges section"
                    style={{ minHeight: '200px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Solution</label>
                <div style={{ background: 'white', borderRadius: '6px' }}>
                  <ReactQuill
                    theme="snow"
                    value={formData.solution}
                    onChange={(value: string) => setFormData({ ...formData, solution: value })}
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Solution section"
                    style={{ minHeight: '200px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Business Impact</label>
                <div style={{ background: 'white', borderRadius: '6px' }}>
                  <ReactQuill
                    theme="snow"
                    value={formData.benefits}
                    onChange={(value: string) => setFormData({ ...formData, benefits: value })}
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Benefits section"
                    style={{ minHeight: '200px' }}
                  />
                </div>
              </div>

              {/* <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Implementation</label>
                <div style={{ background: 'white', borderRadius: '6px' }}>
                  <ReactQuill
                    theme="snow"
                    value={formData.implementation}
                    onChange={(value: string) => setFormData({ ...formData, implementation: value })}
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Implementation section"
                    style={{ minHeight: '200px' }}
                  />
                </div>
              </div> */}

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Download URL</label>
                <input
                  type="url"
                  value={formData.download_url}
                  onChange={(e) => setFormData({ ...formData, download_url: e.target.value })}
                  placeholder="URL to download case study PDF/document"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
                />
              </div>
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
                  background: '#667eea',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                {editingCaseStudy ? 'Update' : 'Create'} Case Study
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setEditingCaseStudy(null)
                  resetForm()
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
        overflow: 'hidden'
      }}>
        {filteredCaseStudies.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#94a3b8' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>📄</div>
            <div style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px', color: '#64748b' }}>
              {searchTerm ? 'No case studies found matching your search' : 'No case studies yet'}
            </div>
            <div style={{ fontSize: '14px', color: '#94a3b8' }}>
              {searchTerm ? 'Try adjusting your search terms' : 'Create your first case study to get started'}
            </div>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase' }}>DATE</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase' }}>TITLE</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase' }}>CLIENT</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase' }}>CATEGORY</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase' }}>STATUS</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredCaseStudies.map((cs, index) => (
                  <tr key={cs.id} style={{ 
                    borderBottom: '1px solid #f1f5f9',
                    background: index % 2 === 0 ? '#fff' : '#fafbfc'
                  }}>
                    <td style={{ padding: '18px 20px', color: '#64748b', fontSize: '14px' }}>
                      {formatDate(cs.created_at)}
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <Link 
                        href={`/Case-study-details/${cs.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '14px', marginBottom: '4px', cursor: 'pointer' }}>
                          {cs.title}
                        </div>
                        {cs.excerpt && (
                          <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                            {cs.excerpt.substring(0, 60)}...
                          </div>
                        )}
                      </Link>
                    </td>
                    <td style={{ padding: '18px 20px', color: '#475569', fontSize: '14px' }}>
                      {cs.client_name || <span style={{ color: '#cbd5e1' }}>-</span>}
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <span style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: '#e0f2fe',
                        color: '#0369a1',
                        display: 'inline-block'
                      }}>
                        {categories.find(c => c.value === (cs.category || 'all'))?.label || 'All'}
                      </span>
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <span style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: cs.published ? '#d1fae5' : '#fee2e2',
                        color: cs.published ? '#065f46' : '#991b1b',
                        display: 'inline-block'
                      }}>
                        {cs.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <button
                          onClick={() => handleEdit(cs)}
                          style={{
                            padding: '8px 16px',
                            background: '#667eea',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600'
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={async () => {
                            const newPublished = !cs.published
                            try {
                              const { error } = await supabase
                                .from('case_studies')
                                .update({ published: newPublished })
                                .eq('id', cs.id)
                              if (error) throw error
                              fetchCaseStudies()
                              alert(`Case study ${newPublished ? 'published' : 'unpublished'} successfully!`)
                            } catch (err: any) {
                              alert('Error: ' + err.message)
                            }
                          }}
                          style={{
                            padding: '8px 16px',
                            background: cs.published ? '#f59e0b' : '#10b981',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600'
                          }}
                        >
                          {cs.published ? 'Unpublish' : 'Publish'}
                        </button>
                        <button
                          onClick={() => handleDelete(cs.id)}
                          style={{
                            padding: '8px 16px',
                            background: '#ef4444',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600'
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
          </div>
        )}
      </div>
    </div>
  )
}
