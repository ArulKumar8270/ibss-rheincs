import { createClient } from '@supabase/supabase-js'
import CaseStudyDetailsClient from './CaseStudyDetailsClient'

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  author: string | null;
  featured_image: string | null;
  category: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  client_name: string | null;
  client_logo: string | null;
  client_description: string | null;
  client_location: string | null;
  overview: string | null;
  challenges: string | null;
  solution: string | null;
  benefits: string | null;
  implementation: string | null;
  download_url: string | null;
  industries: string[] | null;
}

// Note: With static export, all routes must be generated at build time
// The client component will fetch data for any ID, even if not pre-generated
// Generate static params for all published case studies
export const generateStaticParams = async (): Promise<{ id: string }[]> => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
        console.warn('Supabase environment variables not set during build')
        // Return a placeholder to satisfy static export requirement
        // The client component will handle fetching for any ID
        return [{ id: 'placeholder' }]
    }

    try {
        const supabase = createClient(supabaseUrl, supabaseAnonKey)
        
        // Fetch all published case study IDs
        // Increase limit to ensure we get all case studies
        const { data: caseStudies, error } = await supabase
            .from('case_studies')
            .select('id')
            .eq('published', true)
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching case studies for static params:', error)
            // Return a placeholder to satisfy static export requirement
            return [{ id: 'placeholder' }]
        }

        if (!caseStudies || caseStudies.length === 0) {
            console.warn('No published case studies found during build')
            return [{ id: 'placeholder' }]
        }

        const params = caseStudies.map((cs) => ({
            id: cs.id,
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
export default async function CaseStudyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    let initialCaseStudy: CaseStudy | null = null
    let relatedCaseStudies: CaseStudy[] = []

    // Try to fetch data at build time, but don't fail if it doesn't exist
    // The client component will handle fetching for any ID
    if (supabaseUrl && supabaseAnonKey && id && id !== 'placeholder') {
        try {
            const supabase = createClient(supabaseUrl, supabaseAnonKey)
            
            const { data: caseStudyData, error: caseStudyError } = await supabase
                .from('case_studies')
                .select('*')
                .eq('id', id)
                .eq('published', true)
                .single()

            if (!caseStudyError && caseStudyData) {
                initialCaseStudy = caseStudyData as CaseStudy

                // Fetch related case studies (same category, excluding current)
                const { data: relatedData } = await supabase
                    .from('case_studies')
                    .select('*')
                    .eq('published', true)
                    .neq('id', caseStudyData.id)
                    .eq('category', caseStudyData.category || 'all')
                    .order('created_at', { ascending: false })
                    .limit(4)

                relatedCaseStudies = (relatedData || []) as CaseStudy[]
            } else {
                // If not found at build time, client will fetch it
            }
        } catch (error) {
            // Don't fail the build if there's an error
            // The client component will handle fetching
        }
    }
    
    // Always render the client component - it will fetch data if needed
    return (
        <CaseStudyDetailsClient 
            initialCaseStudy={initialCaseStudy}
            initialRelatedCaseStudies={relatedCaseStudies}
            caseStudyId={id}
        />
    )
}
