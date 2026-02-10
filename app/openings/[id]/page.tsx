import { createClient } from '@supabase/supabase-js'
import JobDetailClient from './JobDetailClient'

// Note: With static export, we cannot use dynamicParams = true
// All routes must be pre-generated at build time via generateStaticParams
// For new content created after build, the page will still render the client component
// The client component will fetch data client-side and handle 404s gracefully

// Generate static params for all jobs (published and unpublished)
export const generateStaticParams = async (): Promise<{ id: string }[]> => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    // Use service role key if available (bypasses RLS for build-time fetching)
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl) {
        console.warn('[generateStaticParams] Supabase URL not set')
        return [{ id: 'placeholder' }]
    }

    try {
        // Use service role key if available to bypass RLS and fetch all jobs including drafts
        // This is safe because generateStaticParams only runs at build time, not at runtime
        const supabase = supabaseServiceKey 
            ? createClient(supabaseUrl, supabaseServiceKey)
            : createClient(supabaseUrl, supabaseAnonKey || '')
        
        
        // Generate params for ALL jobs (published and unpublished)
        // Service role key bypasses RLS, allowing us to fetch draft jobs
        const { data: jobs, error } = await supabase
            .from('careers')
            .select('id, published')
            .order('created_at', { ascending: false })
            .limit(1000)

        if (error) {
            console.error('[generateStaticParams] Error fetching jobs:', error)
            console.error('[generateStaticParams] This might be due to RLS policies blocking unpublished jobs')
            // Try fetching only published jobs as fallback
            const { data: publishedJobs, error: publishedError } = await supabase
                .from('careers')
                .select('id')
                .eq('published', true)
                .limit(1000)
            
            if (publishedError) {
                console.error('[generateStaticParams] Error fetching published jobs:', publishedError)
                return [{ id: 'placeholder' }]
            }
            
            const fallbackParams = (publishedJobs || [])
                .filter((job: any) => job.id && typeof job.id === 'string')
                .map((job: any) => ({
                    id: job.id.trim(),
                }))
            
            if (fallbackParams.length === 0) {
                console.warn('[generateStaticParams] No published jobs found, returning placeholder')
                return [{ id: 'placeholder' }]
            }
            
            fallbackParams.push({ id: 'placeholder' })
            return fallbackParams
        }

        if (!jobs || jobs.length === 0) {
            console.warn('[generateStaticParams] No jobs found')
            return [{ id: 'placeholder' }]
        }

        console.log(`[generateStaticParams] Found ${jobs.length} jobs (including drafts)`)
        
        // Filter out invalid IDs and ensure they're strings
        const validJobs = jobs.filter((job: any) => 
            job.id && 
            typeof job.id === 'string' && 
            job.id.trim().length > 0
        )
        
        if (validJobs.length === 0) {
            console.warn('[generateStaticParams] No valid job IDs found')
            return [{ id: 'placeholder' }]
        }
        
        const params = validJobs.map((job: any) => ({
            id: job.id.trim(),
        }))

        // Always include placeholder for fallback
        const allParams = [...params, { id: 'placeholder' }]
        
        console.log(`[generateStaticParams] Generated ${allParams.length} static params`)
        
        return allParams
    } catch (error) {
        console.error('[generateStaticParams] Error in generateStaticParams:', error)
        // Return a placeholder to satisfy static export requirement
        return [{ id: 'placeholder' }]
    }
}

// Server component that renders the client component
export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    
    // Normalize ID - remove trailing slash if present (since trailingSlash is true in config)
    const normalizedId = id?.replace(/\/$/, '') || ''
    
    // Debug: Log the requested ID
    
    // ALWAYS pass null for initialJob to force client-side fetch
    // This ensures new content created after build is always fetched from database
    // The client component will ALWAYS fetch from Supabase, never rely on server-side data
    return <JobDetailClient jobId={normalizedId} initialJob={null} />
}
