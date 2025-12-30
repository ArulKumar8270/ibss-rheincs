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

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  // Use service role key if available (bypasses RLS for build-time fetching)
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl) {
    console.warn('Supabase URL not set')
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
      console.error('Error fetching news/events for static params:', error)
      console.error('This might be due to RLS policies blocking unpublished items')
      // Try fetching only published items as fallback
      const { data: publishedItems } = await supabase
        .from('news_events')
        .select('slug')
        .eq('published', true)
        .limit(1000)
      
      const fallbackParams = (publishedItems || []).map((item) => ({
        slug: item.slug,
      }))
      fallbackParams.push({ slug: 'placeholder' })
      return fallbackParams
    }

    console.log(`[generateStaticParams] Found ${items?.length || 0} news/events (including drafts)`)
    
    // Log each item's slug and published status for debugging
    if (items && items.length > 0) {
      items.forEach((item: any) => {
        console.log(`  - Slug: "${item.slug}", Published: ${item.published}`)
      })
    }
    
    // Use slug as requested by user
    const params = (items || []).map((item) => ({
      slug: item.slug,
    }))

    // Always include placeholder for fallback
    const allParams = params.length > 0 ? params : []
    allParams.push({ slug: 'placeholder' })

    console.log(`[generateStaticParams] Generated ${allParams.length} static params`)
    
    return allParams
  } catch (error) {
    console.error('Error in generateStaticParams:', error)
    // Return a placeholder to satisfy static export requirement
    return [{ slug: 'placeholder' }]
  }
}

export default async function NewsEventDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Pass null to client component - all data fetching will be done client-side
  // This ensures admin preview works correctly
  return (
    <NewsEventDetailsClient 
      initialItem={null}
      slug={slug}
    />
  )
}
