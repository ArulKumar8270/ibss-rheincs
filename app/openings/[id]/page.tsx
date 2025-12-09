import { createClient } from '@supabase/supabase-js'
import JobDetailClient from './JobDetailClient'

// Generate static params for all published jobs
export const generateStaticParams = async (): Promise<{ id: string }[]> => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
        console.warn('Supabase environment variables not set, returning empty params')
        return []
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
            return []
        }

        // Return array of params objects
        return (jobs || []).map((job) => ({
            id: job.id,
        }))
    } catch (error) {
        console.error('Error in generateStaticParams:', error)
        return []
    }
}

// Server component that renders the client component
export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    
    return <JobDetailClient jobId={id} />
}
