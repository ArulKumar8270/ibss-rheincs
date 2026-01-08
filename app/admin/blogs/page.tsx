'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import 'quill/dist/quill.snow.css'

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

interface Blog {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  author: string
  author_linkedin: string | null
  featured_image: string | null
  category: string
  published: boolean
  created_at: string
  updated_at: string
  industries: string[] | null
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    author: '',
    author_linkedin: '',
    featured_image: '',
    category: 'all',
    published: false,
    created_at: '',
    industries: [] as string[]
  })
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [quillEditor, setQuillEditor] = useState<any>(null)
  const [industries, setIndustries] = useState<Array<{ id: string; name: string; slug: string }>>([])
  const supabase = createClient()

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'our-solutions', label: 'Our Solutions' },
    { value: 'enterprise-solutions', label: 'Enterprise Solutions & Services' },
    { value: 'digital-solutions', label: 'Digital Solutions' },
    { value: 'digital-services', label: 'Digital Services' }
  ]

  useEffect(() => {
    fetchBlogs()
    fetchIndustries()
  }, [])

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
      // Fallback to empty array if table doesn't exist yet
      setIndustries([])
    }
  }

  const fetchBlogs = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setBlogs(data || [])
    } catch (err: any) {
      console.error('Error fetching blogs:', err)
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
    setFormData({ ...formData, title })
    // Auto-generate slug if not editing or if slug is empty
    if (!editingBlog || !formData.slug) {
      setFormData(prev => ({ ...prev, title, slug: generateSlug(title) }))
    } else {
      setFormData(prev => ({ ...prev, title }))
    }
  }

  const toggleIndustry = (industrySlug: string) => {
    setFormData(prev => ({
      ...prev,
      industries: prev.industries.includes(industrySlug)
        ? prev.industries.filter(i => i !== industrySlug)
        : [...prev.industries, industrySlug]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const submitData = {
        ...formData,
        author_linkedin: formData.author_linkedin.trim() || null,
        industries: formData.industries.length > 0 ? formData.industries : null,
        created_at: formData.created_at ? new Date(formData.created_at).toISOString() : new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
      
      if (editingBlog) {
        const { error } = await supabase
          .from('blogs')
          .update(submitData)
          .eq('id', editingBlog.id)
        if (error) throw error
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert([submitData])
        if (error) throw error
      }
      setShowForm(false)
      setEditingBlog(null)
      setFormData({
        title: '',
        slug: '',
        content: '',
        excerpt: '',
        author: '',
        author_linkedin: '',
        featured_image: '',
        category: 'all',
        published: false,
        created_at: '',
        industries: []
      })
      fetchBlogs()
      alert(editingBlog ? 'Blog updated successfully!' : 'Blog created successfully!')
    } catch (err: any) {
      alert('Error: ' + err.message)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id)
      if (error) throw error
      fetchBlogs()
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
      const filePath = `blog-images/${fileName}`

      // Upload to Supabase Storage
      const { error: uploadError, data } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) throw uploadError

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
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

  // Handle image upload in editor
  const handleEditorImageUpload = async () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) return

      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }

      setUploadingImage(true)

      try {
        const fileExt = file.name.split('.').pop()
        const fileName = `blog-content-${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
        const filePath = `blog-images/${fileName}`

        const { error: uploadError } = await supabase.storage
          .from('blog-images')
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false
          })

        if (uploadError) throw uploadError

        const { data: { publicUrl } } = supabase.storage
          .from('blog-images')
          .getPublicUrl(filePath)

        // Insert image into editor - get editor from DOM
        const editorElement = document.querySelector('.ql-editor') as any
        if (editorElement && editorElement.__quill) {
          const quill = editorElement.__quill
          const range = quill.getSelection(true)
          quill.insertEmbed(range ? range.index : 0, 'image', publicUrl)
          quill.setSelection((range ? range.index : 0) + 1)
        }
      } catch (error: any) {
        console.error('Upload error:', error)
        alert('Error uploading image: ' + error.message)
      } finally {
        setUploadingImage(false)
      }
    }
  }

  // Get Quill editor instance when component mounts or content changes
  useEffect(() => {
    if (showForm && !quillEditor) {
      const timer = setTimeout(() => {
        const editorElement = document.querySelector('.ql-editor') as any
        if (editorElement && editorElement.__quill) {
          setQuillEditor(editorElement.__quill)
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [showForm, quillEditor])

  // Add image resize functionality
  useEffect(() => {
    if (!showForm) return

    const initImageResize = () => {
      const editor = document.querySelector('.ql-editor') as HTMLElement
      if (!editor) {
        setTimeout(initImageResize, 200)
        return
      }

      // Make editor positioned relatively
      if (window.getComputedStyle(editor).position === 'static') {
        editor.style.position = 'relative'
      }

      const addResizeHandles = (img: HTMLImageElement) => {
        // Skip if already processed
        if ((img as any).__hasResizeHandle) return
        ;(img as any).__hasResizeHandle = true

        // Make image display block or inline-block for better control
        const imgStyle = window.getComputedStyle(img)
        if (imgStyle.display === 'inline') {
          img.style.display = 'inline-block'
        }
        
        // Ensure image has position relative for absolute positioning of handle
        if (imgStyle.position === 'static') {
          img.style.position = 'relative'
        }

        // Create wrapper
        const wrapper = document.createElement('div')
        wrapper.className = 'ql-image-resize-wrapper'
        wrapper.setAttribute('contenteditable', 'false')
        wrapper.setAttribute('data-quill-resize-wrapper', 'true')
        wrapper.style.cssText = `
          display: inline-block !important;
          position: relative !important;
          vertical-align: middle !important;
          margin: 5px !important;
        `

        // Wrap the image
        const parent = img.parentNode
        if (parent) {
          parent.insertBefore(wrapper, img)
          wrapper.appendChild(img)
        }
        
        // Create resize handle - make it very visible
        const handle = document.createElement('div')
        handle.className = 'ql-image-resize-handle'
        handle.innerHTML = '⋰'
        handle.setAttribute('contenteditable', 'false')
        handle.setAttribute('draggable', 'false')
        handle.setAttribute('data-resize-handle', 'true')
        handle.setAttribute('unselectable', 'on')
        handle.setAttribute('spellcheck', 'false')
        
        // Apply styles directly to element
        Object.assign(handle.style, {
          position: 'absolute',
          width: '32px',
          height: '32px',
          background: '#667eea',
          border: '3px solid white',
          borderRadius: '50%',
          cursor: 'nwse-resize',
          zIndex: '999999',
          boxShadow: '0 4px 12px rgba(0,0,0,0.7)',
          right: '-16px',
          bottom: '-16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '20px',
          fontWeight: 'bold',
          lineHeight: '1',
          pointerEvents: 'auto',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          touchAction: 'none',
          WebkitTouchCallout: 'none',
        })

        wrapper.appendChild(handle)

        // Resize state
        let isResizing = false
        let startX = 0
        let startWidth = 0
        let startHeight = 0
        let aspectRatio = 1

        const startResize = (e: MouseEvent | TouchEvent) => {
          console.log('Start resize triggered', e)
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          
          // Disable Quill's contenteditable during resize
          if (editor) {
            editor.setAttribute('contenteditable', 'false')
            editor.style.pointerEvents = 'none'
          }
          
          isResizing = true
          const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
          const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
          startX = clientX
          startWidth = img.offsetWidth || img.naturalWidth || 300
          startHeight = img.offsetHeight || img.naturalHeight || 200
          aspectRatio = startWidth / startHeight
          
          document.body.style.cursor = 'nwse-resize'
          document.body.style.userSelect = 'none'
          document.body.style.pointerEvents = 'none'
          handle.style.pointerEvents = 'auto'
          wrapper.style.pointerEvents = 'auto'
          
          const moveHandler = (e: MouseEvent | TouchEvent) => {
            e.preventDefault()
            e.stopPropagation()
            doResize(e)
          }
          const upHandler = (e: MouseEvent | TouchEvent) => {
            e.preventDefault()
            e.stopPropagation()
            stopResize()
          }
          
          // Use capture phase and make sure we catch events before Quill
          document.addEventListener('mousemove', moveHandler, { passive: false, capture: true })
          document.addEventListener('touchmove', moveHandler, { passive: false, capture: true })
          document.addEventListener('mouseup', upHandler, { capture: true })
          document.addEventListener('touchend', upHandler, { capture: true })
          document.addEventListener('mouseleave', upHandler, { capture: true })
          
          // Store handlers for cleanup
          ;(handle as any).__moveHandler = moveHandler
          ;(handle as any).__upHandler = upHandler
          
          console.log('Resize started', { startWidth, startHeight, aspectRatio })
        }

        const doResize = (e: MouseEvent | TouchEvent) => {
          if (!isResizing) return
          e.preventDefault()
          e.stopPropagation()
          
          const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
          const deltaX = clientX - startX
          const newWidth = Math.max(50, Math.min(2000, startWidth + deltaX))
          const newHeight = newWidth / aspectRatio
          
          // Apply width and height directly
          img.setAttribute('width', String(newWidth))
          img.setAttribute('height', String(newHeight))
          img.style.width = `${newWidth}px`
          img.style.height = `${newHeight}px`
          img.style.maxWidth = 'none'
          img.style.maxHeight = 'none'
          
          console.log('Resizing:', { newWidth, newHeight, deltaX })
        }

        const stopResize = () => {
          if (!isResizing) return
          console.log('Stop resize')
          isResizing = false
          
          // Re-enable Quill's contenteditable
          if (editor) {
            editor.setAttribute('contenteditable', 'true')
            editor.style.pointerEvents = ''
          }
          
          document.body.style.cursor = ''
          document.body.style.userSelect = ''
          document.body.style.pointerEvents = ''
          
          // Remove event listeners
          const moveHandler = (handle as any).__moveHandler
          const upHandler = (handle as any).__upHandler
          if (moveHandler) {
            document.removeEventListener('mousemove', moveHandler, { capture: true } as any)
            document.removeEventListener('touchmove', moveHandler, { capture: true } as any)
          }
          if (upHandler) {
            document.removeEventListener('mouseup', upHandler, { capture: true } as any)
            document.removeEventListener('touchend', upHandler, { capture: true } as any)
            document.removeEventListener('mouseleave', upHandler, { capture: true } as any)
          }
          
          // Clear handlers
          ;(handle as any).__moveHandler = null
          ;(handle as any).__upHandler = null
        }

        // Store resize handlers on the handle element for cleanup
        const handleMouseDown = (e: MouseEvent) => {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          startResize(e)
        }
        
        const handleTouchStart = (e: TouchEvent) => {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          startResize(e)
        }
        
        // Use capture phase and make handlers non-removable
        handle.addEventListener('mousedown', handleMouseDown, { capture: true, once: false })
        handle.addEventListener('touchstart', handleTouchStart, { capture: true, once: false })
        
        // Prevent all other interactions
        const preventAll = (e: Event) => {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
        }
        
        handle.addEventListener('click', preventAll, { capture: true })
        handle.addEventListener('dragstart', preventAll, { capture: true })
        handle.addEventListener('selectstart', preventAll)
        handle.addEventListener('contextmenu', preventAll)
        
        // Store handlers for cleanup
        ;(handle as any).__mouseDown = handleMouseDown
        ;(handle as any).__touchStart = handleTouchStart
        
        // Make sure handle is visible and positioned correctly
        const ensureVisible = () => {
          if (handle.parentElement === wrapper && img.parentElement === wrapper) {
            handle.style.display = 'flex'
            handle.style.visibility = 'visible'
            handle.style.opacity = '1'
            handle.style.pointerEvents = 'auto'
            
            // Force repaint
            void handle.offsetHeight
            
            // Verify handle is in the right position
            const rect = wrapper.getBoundingClientRect()
            const handleRect = handle.getBoundingClientRect()
            const isVisible = handleRect.width > 0 && handleRect.height > 0
            
            console.log('Resize handle status:', {
              visible: isVisible,
              display: window.getComputedStyle(handle).display,
              visibility: window.getComputedStyle(handle).visibility,
              zIndex: window.getComputedStyle(handle).zIndex,
              pointerEvents: window.getComputedStyle(handle).pointerEvents,
              wrapperRect: { width: rect.width, height: rect.height },
              handleRect: { left: handleRect.left, top: handleRect.top, width: handleRect.width, height: handleRect.height },
              imgSize: { width: img.offsetWidth, height: img.offsetHeight }
            })
            
            if (!isVisible) {
              console.warn('Handle is not visible, retrying...')
              setTimeout(ensureVisible, 100)
            }
          }
        }
        
        // Use multiple animation frames to ensure visibility
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            ensureVisible()
          })
        })

        // Cleanup when image is removed
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

      // Process existing images with retry mechanism
      const processImages = () => {
        const images = editor.querySelectorAll('img:not([data-resize-processed])')
        console.log(`[ImageResize] Found ${images.length} unprocessed images`)
        images.forEach((img) => {
          try {
            ;(img as HTMLImageElement).setAttribute('data-resize-processed', 'true')
            addResizeHandles(img as HTMLImageElement)
          } catch (err) {
            console.error('Error adding resize handle:', err)
          }
        })
      }
      
      // Process immediately and with delays to catch images loaded asynchronously
      processImages()
      setTimeout(processImages, 200)
      setTimeout(processImages, 500)
      setTimeout(processImages, 1000)

      // Watch for new images
      const imageObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              const element = node as Element
              if (element.tagName === 'IMG' && !element.hasAttribute('data-resize-processed')) {
                element.setAttribute('data-resize-processed', 'true')
                // Use multiple timeouts to ensure image is fully loaded
                setTimeout(() => addResizeHandles(element as HTMLImageElement), 50)
                setTimeout(() => addResizeHandles(element as HTMLImageElement), 200)
                setTimeout(() => addResizeHandles(element as HTMLImageElement), 500)
              }
              const imgs = element.querySelectorAll?.('img:not([data-resize-processed])')
              imgs?.forEach(img => {
                img.setAttribute('data-resize-processed', 'true')
                setTimeout(() => addResizeHandles(img as HTMLImageElement), 50)
                setTimeout(() => addResizeHandles(img as HTMLImageElement), 200)
                setTimeout(() => addResizeHandles(img as HTMLImageElement), 500)
              })
            }
          })
        })
      })

      imageObserver.observe(editor, { childList: true, subtree: true, attributes: true })
      
      // Also watch for image load events
      editor.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('data-resize-processed')) {
          img.addEventListener('load', () => {
            if (!img.hasAttribute('data-resize-processed')) {
              img.setAttribute('data-resize-processed', 'true')
              addResizeHandles(img as HTMLImageElement)
            }
          }, { once: true })
        }
      })

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

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog)
    // Convert ISO date to datetime-local format
    const createdDate = blog.created_at ? new Date(blog.created_at).toISOString().slice(0, 16) : ''
    setFormData({
      title: blog.title,
      slug: blog.slug,
      content: blog.content,
      excerpt: blog.excerpt || '',
      author: blog.author || '',
      author_linkedin: blog.author_linkedin || '',
      featured_image: blog.featured_image || '',
      category: blog.category || 'all',
      published: blog.published,
      created_at: createdDate,
      industries: blog.industries || []
    })
    setShowForm(true)
  }

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category?.toLowerCase().includes(searchTerm.toLowerCase())
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
    const headers = ['Date', 'Title', 'Category', 'Author', 'Status', 'Slug']
    const rows = filteredBlogs.map(b => [
      formatDate(b.created_at),
      b.title,
      categories.find(c => c.value === (b.category || 'all'))?.label || 'All',
      b.author || '',
      b.published ? 'Published' : 'Draft',
      b.slug
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `blogs_${new Date().toISOString().split('T')[0]}.csv`
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
          Loading blogs...
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
        background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
        borderRadius: '16px',
        color: '#fff',
        boxShadow: '0 4px 20px rgba(72, 187, 120, 0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#fff'
            }}>
               Blogs Management
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
              Create, edit, and manage all blog posts
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '20px 30px',
            borderRadius: '12px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '5px' }}>Total Blogs</div>
            <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{blogs.length}</div>
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
            placeholder="Search by title, author, or category..."
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
          <span style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '18px',
            color: '#94a3b8'
          }}></span>
        </div>
        <button
          onClick={exportToCSV}
          disabled={filteredBlogs.length === 0}
          style={{
            padding: '12px 24px',
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            cursor: filteredBlogs.length === 0 ? 'not-allowed' : 'pointer',
            fontWeight: '600',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: filteredBlogs.length === 0 ? 0.5 : 1,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            if (filteredBlogs.length > 0) e.currentTarget.style.background = '#2563eb'
          }}
          onMouseLeave={(e) => {
            if (filteredBlogs.length > 0) e.currentTarget.style.background = '#3b82f6'
          }}
        >
          <span></span> Export CSV
        </button>
        <button
          onClick={fetchBlogs}
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
          <span></span> Refresh
        </button>
        <button
          onClick={() => {
            setShowForm(true)
            setEditingBlog(null)
            setFormData({
              title: '',
              slug: '',
              content: '',
              excerpt: '',
              author: '',
              author_linkedin: '',
              featured_image: '',
              category: 'all',
              published: false,
              created_at: '',
              industries: []
            })
          }}
          style={{
            padding: '12px 24px',
            background: '#667eea',
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
          onMouseEnter={(e) => e.currentTarget.style.background = '#5568d3'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#667eea'}
        >
          Create New Blog
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
          <h2 style={{ marginBottom: '20px', color: '#333', fontWeight: 'bold' }}>{editingBlog ? 'Edit Blog' : 'Create New Blog'}</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                placeholder="Enter blog title"
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>
                Slug * 
                <span style={{ fontSize: '12px', color: '#666', marginLeft: '5px', fontWeight: '400' }}>
                  (Auto-generated from title, can be edited)
                </span>
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
                placeholder="blog-post-slug"
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontFamily: 'monospace', color: '#333', fontSize: '14px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Excerpt</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={3}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Content *</label>
              {uploadingImage && (
                <div style={{ marginBottom: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '6px', color: '#666', fontSize: '14px' }}>
                  Uploading image...
                </div>
              )}
              <div style={{ background: '#fff', borderRadius: '6px' }}>
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={(value: string) => setFormData({ ...formData, content: value })}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Write your blog content here..."
                />
                <style jsx global>{`
                  .ql-container {
                    min-height: 400px;
                    font-size: 14px;
                  }
                  .ql-editor {
                    min-height: 400px;
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
                    -moz-user-select: none !important;
                    display: flex !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    pointer-events: auto !important;
                    cursor: nwse-resize !important;
                    z-index: 999999 !important;
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
                    cursor: nwse-resize !important;
                  }
                  .ql-editor .ql-image-resize-wrapper {
                    position: relative !important;
                  }
                  .ql-editor img {
                    max-width: 100% !important;
                    height: auto !important;
                  }
                `}</style>
              </div>
              <small style={{ color: '#666', fontSize: '12px', display: 'block', marginTop: '5px' }}>
                Use the toolbar to format text, add images, links, and more
              </small>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Author</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Author LinkedIn Profile Link</label>
              <input
                type="url"
                value={formData.author_linkedin}
                onChange={(e) => setFormData({ ...formData, author_linkedin: e.target.value })}
                placeholder="https://www.linkedin.com/in/username"
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
              />
              <small style={{ color: '#666', fontSize: '12px', display: 'block', marginTop: '5px' }}>
                Optional: LinkedIn profile URL for the author
              </small>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Created Date</label>
              <input
                type="datetime-local"
                value={formData.created_at}
                onChange={(e) => setFormData({ ...formData, created_at: e.target.value })}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px' }}
              />
              <small style={{ color: '#666', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                Date when this blog was created (defaults to current date if not set)
              </small>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>
                Industries
                <Link href="/admin/industries" style={{ marginLeft: '10px', fontSize: '12px', color: '#667eea', textDecoration: 'none' }}>
                  (Manage Industries)
                </Link>
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', color: '#333' }}>
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
                  <div style={{ color: '#666', fontSize: '14px' }}>No industries available. <Link href="/admin/industries" style={{ color: '#667eea', textDecoration: 'none' }}>Create industries first</Link></div>
                )}
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', color: '#333', fontSize: '14px', background: '#fff' }}
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
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
                <small style={{ color: '#666', fontSize: '12px', display: 'block', marginTop: '5px' }}>
                  Upload an image file or paste an image URL (Recommended size: 268 x 447)
                </small>
              </div>
              {formData.featured_image && (
                <div style={{ marginTop: '10px' }}>
                  <img
                    src={formData.featured_image}
                    alt="Preview"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '200px',
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      objectFit: 'cover'
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
                  background: '#667eea',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                {editingBlog ? 'Update' : 'Create'} Blog
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setEditingBlog(null)
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
        {filteredBlogs.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#94a3b8' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}></div>
            <div style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px', color: '#64748b' }}>
              {searchTerm ? 'No blogs found matching your search' : 'No blogs yet'}
            </div>
            <div style={{ fontSize: '14px', color: '#94a3b8' }}>
              {searchTerm ? 'Try adjusting your search terms' : 'Create your first blog to get started'}
            </div>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>DATE & TIME</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TITLE</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CATEGORY</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>AUTHOR</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>STATUS</th>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: '#475569', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.map((blog, index) => (
                  <tr key={blog.id} style={{ 
                    borderBottom: '1px solid #f1f5f9',
                    background: index % 2 === 0 ? '#fff' : '#fafbfc',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.background = index % 2 === 0 ? '#fff' : '#fafbfc'}
                  >
                    <td style={{ padding: '18px 20px', color: '#64748b', fontSize: '14px' }}>
                      {formatDate(blog.created_at)}
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <Link 
                        href={`/blog-details/${blog.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          textDecoration: 'none', 
                          color: 'inherit',
                          display: 'block'
                        }}
                      >
                        <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '14px', marginBottom: '4px', cursor: 'pointer' }}>
                          {blog.title}
                        </div>
                        {blog.excerpt && (
                          <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>
                            {blog.excerpt.substring(0, 60)}...
                          </div>
                        )}
                      </Link>
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
                        {categories.find(c => c.value === (blog.category || 'all'))?.label || 'All'}
                      </span>
                    </td>
                    <td style={{ padding: '18px 20px', color: '#475569', fontSize: '14px' }}>
                      {blog.author || <span style={{ color: '#cbd5e1' }}>-</span>}
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <span style={{
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: blog.published ? '#d1fae5' : '#fee2e2',
                        color: blog.published ? '#065f46' : '#991b1b',
                        display: 'inline-block'
                      }}>
                        {blog.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td style={{ padding: '18px 20px' }}>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <button
                          onClick={() => handleEdit(blog)}
                          style={{
                            padding: '8px 16px',
                            background: '#667eea',
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
                            e.currentTarget.style.background = '#5568d3'
                            e.currentTarget.style.transform = 'translateY(-1px)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#667eea'
                            e.currentTarget.style.transform = 'translateY(0)'
                          }}
                        >
                           Edit
                        </button>
                        <button
                          onClick={async () => {
                            const newPublished = !blog.published
                            try {
                              const { error } = await supabase
                                .from('blogs')
                                .update({ published: newPublished })
                                .eq('id', blog.id)
                              if (error) throw error
                              fetchBlogs()
                              alert(`Blog ${newPublished ? 'published' : 'unpublished'} successfully!`)
                            } catch (err: any) {
                              alert('Error: ' + err.message)
                            }
                          }}
                          style={{
                            padding: '8px 16px',
                            background: blog.published ? '#f59e0b' : '#10b981',
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
                          {blog.published ? '✅ Unpublish' : '❌ Publish'}
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
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
        <span style={{ fontSize: '20px' }}></span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: '600', color: '#92400e', fontSize: '14px', marginBottom: '2px' }}>
            Security Note
          </div>
          <div style={{ color: '#78350f', fontSize: '13px' }}>
            This admin page is protected by authentication. Only authorized users can access and manage blog posts.
          </div>
        </div>
      </div>
    </div>
  )
}
