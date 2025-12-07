import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Force dynamic rendering for API routes (required when using API routes)
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    // Check environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Missing Supabase environment variables')
      return NextResponse.json(
        { 
          success: false, 
          message: 'Server configuration error. Please contact support.' 
        },
        { status: 500 }
      )
    }

    // Create Supabase client for API route
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    const body = await request.json()

    // Validate required fields
    const { fullName, countryCode, phone, email, companyName, selection, message } = body

    if (!fullName || !phone || !email || !companyName) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          full_name: fullName,
          country_code: countryCode || '+91',
          phone: phone,
          email: email,
          company_name: companyName,
          selection: selection || null,
          message: message || null,
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      })
      
      // Provide more specific error messages
      let errorMessage = 'Failed to submit form. Please try again.'
      if (error.code === '42P01') {
        errorMessage = 'Database table not found. Please run the SQL setup script in Supabase.'
      } else if (error.code === '42501') {
        errorMessage = 'Permission denied. Please check Row Level Security policies.'
      } else if (error.message) {
        errorMessage = `Database error: ${error.message}`
      }

      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your inquiry has been submitted successfully. We will contact you shortly.',
      data: data
    })
  } catch (error: any) {
    console.error('Contact form error:', error)
    console.error('Error stack:', error.stack)
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'An error occurred. Please try again.' 
      },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve contacts (admin only)
export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100)

    if (error) {
      console.error('GET error:', error)
      return NextResponse.json(
        { success: false, message: 'Failed to fetch contacts', error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: data,
      count: data?.length || 0
    })
  } catch (error: any) {
    console.error('GET endpoint error:', error)
    return NextResponse.json(
      { success: false, message: 'An error occurred', error: error.message },
      { status: 500 }
    )
  }
}
