import { createClient } from '@supabase/supabase-js'
import JobDetailClient from './JobDetailClient'

// Generate static params for all published jobs
export const generateStaticParams = async (): Promise<{ id: string }[]> => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
        console.warn('Supabase environment variables not set')
        // Return a placeholder to satisfy static export requirement
        return [{ id: 'placeholder' }]
    }

    try {
        const supabase = createClient(supabaseUrl, supabaseAnonKey)
        
        // Fetch all published job IDs
        const { data: jobs, error } = await supabase
            .from('careers')
            .select('id')
            .eq('published', true)

        if (error) {
            console.error('Error fetching jobs for static params:', error)
            // Return a placeholder to satisfy static export requirement
            return [{ id: 'placeholder' }]
        }

        const params = (jobs || []).map((job) => ({
            id: job.id,
        }))

        // Ensure we always return at least one param for static export
        return params.length > 0 ? params : [{ id: 'placeholder' }]
    } catch (error) {
        console.error('Error in generateStaticParams:', error)
        // Return a placeholder to satisfy static export requirement
        return [{ id: 'placeholder' }]
    }
}

// Server component that renders the client component
export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    let initialJob = null

    if (supabaseUrl && supabaseAnonKey && id !== 'placeholder') {
        try {
            const supabase = createClient(supabaseUrl, supabaseAnonKey)
            
            const { data: jobData, error: jobError } = await supabase
                .from('careers')
                .select('*')
                .eq('id', id)
                .eq('published', true)
                .single()

            if (!jobError && jobData) {
                // Parse responsibilities and qualifications if they're JSON strings
                initialJob = {
                    ...jobData,
                    responsibilities: typeof jobData.responsibilities === 'string' 
                        ? JSON.parse(jobData.responsibilities || '[]') 
                        : jobData.responsibilities || [],
                    qualifications: typeof jobData.qualifications === 'string'
                        ? JSON.parse(jobData.qualifications || '[]')
                        : jobData.qualifications || []
                }
            }
        } catch (error) {
            console.error('Error fetching job in server component:', error)
        }
    }
    
    return <JobDetailClient jobId={id} initialJob={initialJob} />
}
