import { createClient } from '@supabase/supabase-js'
import NewsEventDetailsClient from './NewsEventDetailsClient'

interface NewsEvent {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  type: 'news' | 'event';
  event_date: string | null;
  location: string | null;
  featured_image: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

// Note: With static export, we cannot use dynamicParams = true
// All routes must be pre-generated at build time via generateStaticParams
// For new content created after build, the page will still render the client component
// The client component will fetch data client-side and handle 404s gracefully

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  // Use service role key if available (bypasses RLS for build-time fetching)
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl) {
    console.warn('[generateStaticParams] Supabase URL not set')
    return [{ slug: 'placeholder' }]
  }

  try {
    // Use service role key if available to bypass RLS and fetch all news/events including drafts
    // This is safe because generateStaticParams only runs at build time, not at runtime
    const supabase = supabaseServiceKey 
      ? createClient(supabaseUrl, supabaseServiceKey)
      : createClient(supabaseUrl, supabaseAnonKey || '')
    
    console.log(`[generateStaticParams] Using ${supabaseServiceKey ? 'service role key' : 'anon key'}`)
    
    // Generate params for ALL news/events (published and unpublished)
    // Service role key bypasses RLS, allowing us to fetch draft items
    const { data: items, error } = await supabase
      .from('news_events')
      .select('slug, published')
      .order('created_at', { ascending: false })
      .limit(1000)

    if (error) {
      console.error('[generateStaticParams] Error fetching news/events:', error)
      console.error('[generateStaticParams] This might be due to RLS policies blocking unpublished items')
      // Try fetching only published items as fallback
      const { data: publishedItems, error: publishedError } = await supabase
        .from('news_events')
        .select('slug')
        .eq('published', true)
        .limit(1000)
      
      if (publishedError) {
        console.error('[generateStaticParams] Error fetching published news/events:', publishedError)
        return [{ slug: 'placeholder' }]
      }
      
      const fallbackParams = (publishedItems || [])
        .filter((item: any) => item.slug && typeof item.slug === 'string')
        .map((item: any) => ({
          slug: item.slug.trim(),
        }))
      
      if (fallbackParams.length === 0) {
        console.warn('[generateStaticParams] No published news/events found, returning placeholder')
        return [{ slug: 'placeholder' }]
      }
      
      fallbackParams.push({ slug: 'placeholder' })
      console.log(`[generateStaticParams] Generated ${fallbackParams.length} fallback params (published only)`)
      return fallbackParams
    }

    if (!items || items.length === 0) {
      console.warn('[generateStaticParams] No news/events found')
      return [{ slug: 'placeholder' }]
    }

    console.log(`[generateStaticParams] Found ${items.length} news/events (including drafts)`)
    
    // Filter out invalid slugs and ensure they're strings
    const validItems = items.filter((item: any) => 
      item.slug && 
      typeof item.slug === 'string' && 
      item.slug.trim().length > 0
    )
    
    if (validItems.length === 0) {
      console.warn('[generateStaticParams] No valid news/event slugs found')
      return [{ slug: 'placeholder' }]
    }
    
    // Log each item's slug and published status for debugging
    validItems.forEach((item: any) => {
      console.log(`  - Slug: "${item.slug}", Published: ${item.published}`)
    })
    
    // Use slug as requested by user
    const params = validItems.map((item: any) => ({
      slug: item.slug.trim(),
    }))

    // Always include placeholder for fallback
    const allParams = [...params, { slug: 'placeholder' }]

    console.log(`[generateStaticParams] Generated ${allParams.length} static params`)
    
    return allParams
  } catch (error) {
    console.error('[generateStaticParams] Error in generateStaticParams:', error)
    // Return a placeholder to satisfy static export requirement
    return [{ slug: 'placeholder' }]
  }
}

export default async function NewsEventDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Normalize slug - remove trailing slash if present (since trailingSlash is true in config)
  const normalizedSlug = slug?.replace(/\/$/, '') || ''
  
  // Debug: Log the requested slug
  console.log(`[NewsEventDetailsPage] Requested slug: "${normalizedSlug}"`)
  
  // ALWAYS pass null for initialItem to force client-side fetch
  // This ensures new content created after build is always fetched from database
  // The client component will ALWAYS fetch from Supabase, never rely on server-side data
  return (
    <NewsEventDetailsClient 
      initialItem={null}
      slug={normalizedSlug}
    />
  )
}
