'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import Link from 'next/link'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    contacts: 0,
    blogs: 0,
    news: 0,
    careers: 0
  })
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      // Fetch counts from each table
      const [contactsRes, blogsRes, newsRes, careersRes] = await Promise.all([
        supabase.from('contacts').select('*', { count: 'exact', head: true }),
        supabase.from('blogs').select('*', { count: 'exact', head: true }),
        supabase.from('news_events').select('*', { count: 'exact', head: true }),
        supabase.from('careers').select('*', { count: 'exact', head: true })
      ])

      setStats({
        contacts: contactsRes.count || 0,
        blogs: blogsRes.count || 0,
        news: newsRes.count || 0,
        careers: careersRes.count || 0
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      title: 'Contact Enquiries',
      count: stats.contacts,
      icon: '📬',
      color: '#667eea',
      href: '/admin/contacts'
    },
    {
      title: 'Blogs',
      count: stats.blogs,
      icon: '📝',
      color: '#48bb78',
      href: '/admin/blogs'
    },
    {
      title: 'News & Events',
      count: stats.news,
      icon: '📰',
      color: '#ed8936',
      href: '/admin/news-events'
    },
    {
      title: 'Careers',
      count: stats.careers,
      icon: '💼',
      color: '#9f7aea',
      href: '/admin/careers'
    }
  ]

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '10px'
        }}>
          Dashboard Overview
        </h1>
        <p style={{ color: '#666', fontSize: '16px' }}>
          Welcome to the admin panel. Manage your content and enquiries.
        </p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ color: '#999' }}>Loading statistics...</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {statCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s',
                border: `2px solid ${card.color}20`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <span style={{ fontSize: '32px', marginRight: '15px' }}>{card.icon}</span>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#333',
                    margin: 0
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: card.color,
                    margin: '5px 0 0 0'
                  }}>
                    {card.count}
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '13px',
                color: '#999',
                margin: 0
              }}>
                Click to manage →
              </p>
            </Link>
          ))}
        </div>
      )}

      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '25px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#333',
          marginBottom: '15px'
        }}>
          Quick Actions
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          <Link
            href="/admin/blogs?action=create"
            style={{
              padding: '15px',
              background: '#f0f4ff',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#667eea',
              fontWeight: '500',
              textAlign: 'center',
              border: '2px solid #667eea20'
            }}
          >
            ➕ Create New Blog
          </Link>
          <Link
            href="/admin/news-events?action=create"
            style={{
              padding: '15px',
              background: '#fff5e6',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#ed8936',
              fontWeight: '500',
              textAlign: 'center',
              border: '2px solid #ed893620'
            }}
          >
            ➕ Create News/Event
          </Link>
          <Link
            href="/admin/careers?action=create"
            style={{
              padding: '15px',
              background: '#f5f0ff',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#9f7aea',
              fontWeight: '500',
              textAlign: 'center',
              border: '2px solid #9f7aea20'
            }}
          >
            ➕ Post New Career
          </Link>
        </div>
      </div>
    </div>
  )
}
