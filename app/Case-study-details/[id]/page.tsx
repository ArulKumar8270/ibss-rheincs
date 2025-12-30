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
// Generate static params for all case studies (published and unpublished)
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
        // Use service role key if available to bypass RLS and fetch all case studies including drafts
        // This is safe because generateStaticParams only runs at build time, not at runtime
        const supabase = supabaseServiceKey 
            ? createClient(supabaseUrl, supabaseServiceKey)
            : createClient(supabaseUrl, supabaseAnonKey || '')
        
        console.log(`[generateStaticParams] Using ${supabaseServiceKey ? 'service role key' : 'anon key'}`)
        
        // Generate params for ALL case studies (published and unpublished)
        // Service role key bypasses RLS, allowing us to fetch draft case studies
        const { data: caseStudies, error } = await supabase
            .from('case_studies')
            .select('id, published')
            .order('created_at', { ascending: false })
            .limit(1000)

        if (error) {
            console.error('Error fetching case studies for static params:', error)
            console.error('This might be due to RLS policies blocking unpublished case studies')
            // Try fetching only published case studies as fallback
            const { data: publishedCaseStudies } = await supabase
                .from('case_studies')
                .select('id')
                .eq('published', true)
                .limit(1000)
            
            const fallbackParams = (publishedCaseStudies || []).map((cs) => ({
                id: cs.id,
            }))
            fallbackParams.push({ id: 'placeholder' })
            return fallbackParams
        }

        console.log(`[generateStaticParams] Found ${caseStudies?.length || 0} case studies (including drafts)`)
        
        const params = (caseStudies || []).map((cs) => ({
            id: cs.id,
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
export default async function CaseStudyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    let initialCaseStudy: CaseStudy | null = null
    let relatedCaseStudies: CaseStudy[] = []

    // Pass null to client component - all data fetching will be done client-side
    // This ensures admin preview works correctly
    
    // Always render the client component - it will fetch data if needed
    return (
        <CaseStudyDetailsClient 
            initialCaseStudy={null}
            initialRelatedCaseStudies={[]}
            caseStudyId={id}
        />
    )
}
