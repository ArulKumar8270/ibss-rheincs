import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Test API route to verify Supabase connection
export async function GET() {
  try {
    // Test connection by checking Supabase service status
    const { data, error } = await supabase
      .from('_test')
      .select('*')
      .limit(1)

    if (error && error.code !== '42P01') {
      // 42P01 is "table doesn't exist" which is fine for testing connection
      return NextResponse.json(
        { 
          success: false, 
          message: 'Supabase connection failed', 
          error: error.message 
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Supabase is connected successfully! ✅',
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      timestamp: new Date().toISOString()
    })
  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error testing Supabase connection', 
        error: error.message 
      },
      { status: 500 }
    )
  }
}
