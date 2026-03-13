import { createClient } from '@supabase/supabase-js'
import { slugToUrl, slugToUrlWithEnDash, slugToUrlEncodedEnDash } from '@/lib/slug'
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

// Note: With static export, we cannot use dynamicParams = true
// All routes must be pre-generated at build time via generateStaticParams
// For new content created after build, the page will still render the client component
// The client component will fetch data client-side and handle 404s gracefully

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
        // Use service role key if available to bypass RLS and fetch all case studies including drafts
        // This is safe because generateStaticParams only runs at build time, not at runtime
        const supabase = supabaseServiceKey 
            ? createClient(supabaseUrl, supabaseServiceKey)
            : createClient(supabaseUrl, supabaseAnonKey || '')
        
        
        // Generate params for ALL case studies (published and unpublished)
        // Service role key bypasses RLS, allowing us to fetch draft case studies
        const { data: caseStudies, error } = await supabase
            .from('case_studies')
            .select('id, slug, published')
            .order('created_at', { ascending: false })
            .limit(1000)

        if (error) {
            console.error('[generateStaticParams] Error fetching case studies:', error)
            console.error('[generateStaticParams] This might be due to RLS policies blocking unpublished case studies')
            // Try fetching only published case studies as fallback
            const { data: publishedCaseStudies, error: publishedError } = await supabase
                .from('case_studies')
                .select('id, slug')
                .eq('published', true)
                .limit(1000)
            
            if (publishedError) {
                console.error('[generateStaticParams] Error fetching published case studies:', publishedError)
                return [{ id: 'placeholder' }]
            }
            
            const seen = new Set<string>()
            const fallbackParams: { id: string }[] = []
            for (const cs of publishedCaseStudies || []) {
                const idVal = cs.id && typeof cs.id === 'string' ? cs.id.trim() : ''
                const slugVal = cs.slug && typeof cs.slug === 'string' ? cs.slug.trim() : ''
                if (idVal && !seen.has(idVal)) { seen.add(idVal); fallbackParams.push({ id: idVal }) }
                if (slugVal && slugVal !== idVal && !seen.has(slugVal)) { seen.add(slugVal); fallbackParams.push({ id: slugVal }) }
                const urlSlug = slugVal ? slugToUrl(slugVal) : ''
                if (urlSlug && urlSlug !== idVal && !seen.has(urlSlug)) { seen.add(urlSlug); fallbackParams.push({ id: urlSlug }) }
                const urlSlugEnDash = slugVal ? slugToUrlWithEnDash(slugVal) : ''
                if (urlSlugEnDash && urlSlugEnDash !== idVal && !seen.has(urlSlugEnDash)) { seen.add(urlSlugEnDash); fallbackParams.push({ id: urlSlugEnDash }) }
                const urlSlugEncoded = slugVal ? slugToUrlEncodedEnDash(slugVal) : ''
                if (urlSlugEncoded && urlSlugEncoded !== idVal && !seen.has(urlSlugEncoded)) { seen.add(urlSlugEncoded); fallbackParams.push({ id: urlSlugEncoded }) }
            }
            if (fallbackParams.length === 0) {
                console.warn('[generateStaticParams] No published case studies found, returning placeholder')
                return [{ id: 'placeholder' }]
            }
            fallbackParams.push({ id: 'placeholder' })
            return fallbackParams
        }

        if (!caseStudies || caseStudies.length === 0) {
            console.warn('[generateStaticParams] No case studies found')
            return [{ id: 'placeholder' }]
        }

        
        // With output: export, every requested path must be pre-generated.
        // Return id, raw slug, and normalized (hyphen) slug for each case study.
        const validCaseStudies = (caseStudies || []).filter((cs: any) =>
            (cs.slug && typeof cs.slug === 'string' && cs.slug.trim().length > 0) ||
            (cs.id && typeof cs.id === 'string' && cs.id.trim().length > 0)
        )
        if (validCaseStudies.length === 0) {
            console.warn('[generateStaticParams] No valid case study IDs found')
            return [{ id: 'placeholder' }]
        }
        const seen = new Set<string>()
        const params: { id: string }[] = []
        for (const cs of validCaseStudies) {
            const idVal = cs.id && typeof cs.id === 'string' ? cs.id.trim() : ''
            const slugVal = cs.slug && typeof cs.slug === 'string' ? cs.slug.trim() : ''
            if (idVal && !seen.has(idVal)) { seen.add(idVal); params.push({ id: idVal }) }
            if (slugVal && slugVal !== idVal && !seen.has(slugVal)) { seen.add(slugVal); params.push({ id: slugVal }) }
            const urlSlug = slugVal ? slugToUrl(slugVal) : ''
            if (urlSlug && urlSlug !== idVal && !seen.has(urlSlug)) { seen.add(urlSlug); params.push({ id: urlSlug }) }
            const urlSlugEnDash = slugVal ? slugToUrlWithEnDash(slugVal) : ''
            if (urlSlugEnDash && urlSlugEnDash !== idVal && !seen.has(urlSlugEnDash)) { seen.add(urlSlugEnDash); params.push({ id: urlSlugEnDash }) }
            const urlSlugEncoded = slugVal ? slugToUrlEncodedEnDash(slugVal) : ''
            if (urlSlugEncoded && urlSlugEncoded !== idVal && !seen.has(urlSlugEncoded)) { seen.add(urlSlugEncoded); params.push({ id: urlSlugEncoded }) }
        }
        return [...params, { id: 'placeholder' }]
    } catch (error) {
        console.error('[generateStaticParams] Error in generateStaticParams:', error)
        // Return a placeholder to satisfy static export requirement
        return [{ id: 'placeholder' }]
    }
}

// Server component that renders the client component
export default async function CaseStudyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    
    // Normalize ID - remove trailing slash if present (since trailingSlash is true in config)
    const normalizedId = id?.replace(/\/$/, '') || ''
    
    // Debug: Log the requested ID
    console.log(`[CaseStudyDetailsPage] Requested ID: "${normalizedId}"`)
    
    // ALWAYS pass null for initialCaseStudy to force client-side fetch
    // This ensures new content created after build is always fetched from database
    // The client component will ALWAYS fetch from Supabase, never rely on server-side data
    return (
        <CaseStudyDetailsClient 
            initialCaseStudy={null}
            initialRelatedCaseStudies={[]}
            caseStudyId={normalizedId}
        />
    )
}
