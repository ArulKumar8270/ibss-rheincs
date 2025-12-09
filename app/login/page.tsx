'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      if (data.user) {
        // Redirect to admin dashboard
        router.push('/admin')
        router.refresh()
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during login')
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        padding: '40px',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px'
          }}>
            🔐 Admin Login
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Sign in to access the admin dashboard
          </p>
        </div>

        {error && (
          <div style={{
            padding: '12px',
            background: '#fee',
            color: '#c33',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            ❌ {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '16px',
                transition: 'border-color 0.3s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              placeholder="admin@example.com"
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '16px',
                transition: 'border-color 0.3s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              background: loading ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'opacity 0.3s',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: '#f8f9fa',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#666',
          textAlign: 'center'
        }}>
          <strong>Note:</strong> This is a protected admin area. Only authorized users can access.
        </div>
      </div>
    </div>
  )
}
