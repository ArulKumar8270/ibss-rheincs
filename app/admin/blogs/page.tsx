'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'

interface Blog {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  author: string
  featured_image: string | null
  published: boolean
  created_at: string
  updated_at: string
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    author: '',
    featured_image: '',
    published: false
  })
  const supabase = createClient()

  useEffect(() => {
    fetchBlogs()
  }, [])

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingBlog) {
        const { error } = await supabase
          .from('blogs')
          .update(formData)
          .eq('id', editingBlog.id)
        if (error) throw error
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert([formData])
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
        featured_image: '',
        published: false
      })
      fetchBlogs()
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

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog)
    setFormData({
      title: blog.title,
      slug: blog.slug,
      content: blog.content,
      excerpt: blog.excerpt,
      author: blog.author,
      featured_image: blog.featured_image || '',
      published: blog.published
    })
    setShowForm(true)
  }

  return (
    <div>
      <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>📝 Blogs Management</h1>
          <p style={{ color: '#666' }}>Total blogs: {blogs.length}</p>
        </div>
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
              featured_image: '',
              published: false
            })
          }}
          style={{
            padding: '12px 24px',
            background: '#667eea',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          ➕ Create New Blog
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
          <h2 style={{ marginBottom: '20px' }}>{editingBlog ? 'Edit Blog' : 'Create New Blog'}</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Slug *</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Excerpt</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={3}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Content *</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={10}
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Author</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Featured Image URL</label>
              <input
                type="url"
                value={formData.featured_image}
                onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
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

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Loading blogs...</p>
        </div>
      ) : (
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          {blogs.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
              No blogs yet. Create your first blog!
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Title</th>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Author</th>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Status</th>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Created</th>
                  <th style={{ padding: '15px', textAlign: 'left' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr key={blog.id} style={{ borderBottom: '1px solid #eee', background: index % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                    <td style={{ padding: '15px', fontWeight: '600' }}>{blog.title}</td>
                    <td style={{ padding: '15px' }}>{blog.author || '-'}</td>
                    <td style={{ padding: '15px' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        background: blog.published ? '#d4edda' : '#f8d7da',
                        color: blog.published ? '#155724' : '#721c24'
                      }}>
                        {blog.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td style={{ padding: '15px', fontSize: '14px' }}>
                      {new Date(blog.created_at).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '15px' }}>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                          onClick={() => handleEdit(blog)}
                          style={{
                            padding: '6px 12px',
                            background: '#667eea',
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
                          onClick={() => handleDelete(blog.id)}
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
