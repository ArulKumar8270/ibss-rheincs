import { createClient } from '@supabase/supabase-js'
import JobDetailClient from './JobDetailClient'

// Generate static params for all jobs (published and unpublished)
export const generateStaticParams = async (): Promise<{ id: string }[]> => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    // Use service role key if available (bypasses RLS for build-time fetching)
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl) {
        console.warn('Supabase URL not set')
        return [{ id: 'placeholder' }]
    }

    try {
        // Use service role key if available to bypass RLS and fetch all jobs including drafts
        // This is safe because generateStaticParams only runs at build time, not at runtime
        const supabase = supabaseServiceKey 
            ? createClient(supabaseUrl, supabaseServiceKey)
            : createClient(supabaseUrl, supabaseAnonKey || '')
        
        console.log(`[generateStaticParams] Using ${supabaseServiceKey ? 'service role key' : 'anon key'}`)
        
        // Generate params for ALL jobs (published and unpublished)
        // Service role key bypasses RLS, allowing us to fetch draft jobs
        const { data: jobs, error } = await supabase
            .from('careers')
            .select('id, published')
            .order('created_at', { ascending: false })
            .limit(1000)

        if (error) {
            console.error('Error fetching jobs for static params:', error)
            console.error('This might be due to RLS policies blocking unpublished jobs')
            // Try fetching only published jobs as fallback
            const { data: publishedJobs } = await supabase
                .from('careers')
                .select('id')
                .eq('published', true)
                .limit(1000)
            
            const fallbackParams = (publishedJobs || []).map((job) => ({
                id: job.id,
            }))
            fallbackParams.push({ id: 'placeholder' })
            return fallbackParams
        }

        console.log(`[generateStaticParams] Found ${jobs?.length || 0} jobs (including drafts)`)
        
        const params = (jobs || []).map((job) => ({
            id: job.id,
        }))

        // Always include placeholder for fallback
        const allParams = params.length > 0 ? params : []
        allParams.push({ id: 'placeholder' })
        
        return allParams
    } catch (error) {
        console.error('Error in generateStaticParams:', error)
        // Return a placeholder to satisfy static export requirement
        return [{ id: 'placeholder' }]
    }
}

// Server component that renders the client component
export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    
    // Pass null to client component - all data fetching will be done client-side
    // This ensures admin preview works correctly
    return <JobDetailClient jobId={id} initialJob={null} />
}
