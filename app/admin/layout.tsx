'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const supabase = createClient()

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/login')
        return
      }

      setUser(user)
      setLoading(false)
    }

    checkAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        router.push('/login')
      } else {
        setUser(session.user)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabase])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #667eea',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p style={{ color: '#666' }}>Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: '📊' },
    { href: '/admin/contacts', label: 'Contact Enquiries', icon: '📬' },
    { href: '/admin/deftech-bharat-2026', label: 'DefTech Enquiries', icon: '🛩️' },
    { href: '/admin/blogs', label: 'Blogs', icon: '📝' },
    { href: '/admin/news-events', label: 'News & Events', icon: '📰' },
    { href: '/admin/case-studies', label: 'Case Studies', icon: '📄' },
    { href: '/admin/careers', label: 'Careers', icon: '💼' },
    { href: '/admin/job-applications', label: 'Job Applications', icon: '💼' },
    { href: '/admin/industries', label: 'Industries', icon: '🔍' },
    { href: '/admin/ebook-landing', label: 'E-Book Landing', icon: '📖' },
    { href: '/admin/ebook-enquiries', label: 'E-Book Enquiries', icon: '📖' },
  ]

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        background: '#fff',
        borderRight: '1px solid #e0e0e0',
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto'
      }}>
        <div style={{ padding: '0 20px 30px 20px', borderBottom: '1px solid #e0e0e0' }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '5px'
          }}>
            🎛️ Admin Panel
          </h1>
          <p style={{ fontSize: '12px', color: '#999' }}>
            {user?.email}
          </p>
        </div>

        <nav style={{ padding: '20px 0' }}>
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 20px',
                  color: isActive ? '#667eea' : '#666',
                  background: isActive ? '#f0f4ff' : 'transparent',
                  borderLeft: isActive ? '3px solid #667eea' : '3px solid transparent',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: isActive ? '600' : '400',
                  transition: 'all 0.2s',
                  marginBottom: '5px'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = '#f8f9fa'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                <span style={{ marginRight: '12px', fontSize: '18px' }}>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div style={{ padding: '20px', borderTop: '1px solid #e0e0e0', marginTop: 'auto' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: '12px',
              background: '#fee',
              color: '#c33',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#fdd'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#fee'}
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{
        flex: 1,
        padding: '30px',
        overflowY: 'auto'
      }}>
        {children}
      </main>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
