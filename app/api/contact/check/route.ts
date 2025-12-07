import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Force dynamic rendering for API routes
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Diagnostic endpoint to check database setup
export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json({
        success: false,
        message: 'Missing environment variables',
        details: {
          hasUrl: !!supabaseUrl,
          hasKey: !!supabaseAnonKey
        }
      }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    // Try to query the contacts table
    const { data, error } = await supabase
      .from('contacts')
      .select('count')
      .limit(1)

    if (error) {
      return NextResponse.json({
        success: false,
        message: 'Database connection issue',
        error: {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint
        },
        troubleshooting: {
          tableNotFound: error.code === '42P01' ? 'Run the SQL setup script in Supabase SQL Editor' : false,
          permissionDenied: error.code === '42501' ? 'Check Row Level Security policies' : false,
          connectionIssue: error.code === '08006' ? 'Check Supabase URL and network connection' : false
        }
      }, { status: 500 })
    }

    // Try to get count
    const { count, error: countError } = await supabase
      .from('contacts')
      .select('*', { count: 'exact', head: true })

    return NextResponse.json({
      success: true,
      message: 'Database connection successful! ✅',
      details: {
        tableExists: true,
        recordCount: count || 0,
        supabaseUrl: supabaseUrl,
        connectionStatus: 'OK'
      }
    })
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: 'Unexpected error',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 })
  }
}
