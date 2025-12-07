'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'

export default function SupabaseTest() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const testConnection = async () => {
    setStatus('loading')
    setMessage('Testing Supabase connection...')

    try {
      const response = await fetch('/api/test-supabase')
      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setMessage(data.message)
      } else {
        setStatus('error')
        setMessage(data.message || 'Connection failed')
      }
    } catch (error: any) {
      setStatus('error')
      setMessage('Error: ' + error.message)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '20px',
      background: '#fff',
      border: '2px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 9999,
      maxWidth: '400px'
    }}>
      <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', fontWeight: 'bold' }}>
        🗄️ Supabase Connection Test
      </h3>
      
      <button
        onClick={testConnection}
        disabled={status === 'loading'}
        style={{
          padding: '10px 20px',
          background: status === 'loading' ? '#ccc' : '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          width: '100%',
          marginBottom: '10px'
        }}
      >
        {status === 'loading' ? 'Testing...' : 'Test Connection'}
      </button>

      {message && (
        <div style={{
          padding: '10px',
          background: status === 'success' ? '#d4edda' : status === 'error' ? '#f8d7da' : '#e7f3ff',
          color: status === 'success' ? '#155724' : status === 'error' ? '#721c24' : '#004085',
          borderRadius: '5px',
          fontSize: '14px',
          wordBreak: 'break-word'
        }}>
          {message}
        </div>
      )}
    </div>
  )
}
