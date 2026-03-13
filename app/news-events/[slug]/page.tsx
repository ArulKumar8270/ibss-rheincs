import { createClient } from '@supabase/supabase-js'
import { slugToUrl } from '@/lib/slug'
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

const FETCH_TIMEOUT_MS = 30000
const FETCH_RETRIES = 2

/** Fetch with timeout to avoid ConnectTimeoutError during build (e.g. 10s default is too short). */
function fetchWithTimeout(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
  return fetch(input, {
    ...init,
    signal: init?.signal ?? controller.signal,
  }).finally(() => clearTimeout(timeoutId))
}

// Note: With static export, we cannot use dynamicParams = true
// All routes must be pre-generated at build time via generateStaticParams
// For new content created after build, the page will still render the client component
// The client component will fetch data client-side and handle 404s gracefully

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl) {
    console.warn('[generateStaticParams] Supabase URL not set')
    return [{ slug: 'placeholder' }]
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey || '', {
    global: { fetch: fetchWithTimeout },
  })

  const fetchSlugs = async (): Promise<{ slug: string }[]> => {
    const { data: items, error } = await supabase
      .from('news_events')
      .select('id, slug, published')
      .order('created_at', { ascending: false })
      .limit(1000)

    if (error) {
      console.error('[generateStaticParams] Error fetching news/events:', error)
      const { data: publishedItems, error: publishedError } = await supabase
        .from('news_events')
        .select('id, slug')
        .eq('published', true)
        .limit(1000)
      if (publishedError) {
        throw publishedError
      }
      const list = (publishedItems || []).filter((item: any) => (item.slug && typeof item.slug === 'string') || (item.id && typeof item.id === 'string'))
      const seen = new Set<string>()
      const params: { slug: string }[] = []
      for (const item of list) {
        const idVal = item.id && typeof item.id === 'string' ? item.id.trim() : ''
        if (idVal && !seen.has(idVal)) {
          seen.add(idVal)
          params.push({ slug: idVal })
        }
        const slugVal = item.slug && typeof item.slug === 'string' ? item.slug.trim() : ''
        if (slugVal && slugVal !== idVal && !seen.has(slugVal)) {
          seen.add(slugVal)
          params.push({ slug: slugVal })
        }
        const urlSlug = slugVal ? slugToUrl(slugVal) : ''
        if (urlSlug && urlSlug !== idVal && !seen.has(urlSlug)) {
          seen.add(urlSlug)
          params.push({ slug: urlSlug })
        }
      }
      return params
    }

    if (!items || items.length === 0) {
      return []
    }

    // With output: export, every requested path must be pre-generated.
    // Return id, raw slug, and normalized (hyphen) slug so all URL forms work.
    const seen = new Set<string>()
    const params: { slug: string }[] = []
    for (const item of items) {
      const idVal = item.id && typeof item.id === 'string' ? item.id.trim() : ''
      if (idVal && !seen.has(idVal)) {
        seen.add(idVal)
        params.push({ slug: idVal })
      }
      const slugVal = item.slug && typeof item.slug === 'string' ? item.slug.trim() : ''
      if (slugVal && slugVal !== idVal && !seen.has(slugVal)) {
        seen.add(slugVal)
        params.push({ slug: slugVal })
      }
      const urlSlug = slugVal ? slugToUrl(slugVal) : ''
      if (urlSlug && urlSlug !== idVal && !seen.has(urlSlug)) {
        seen.add(urlSlug)
        params.push({ slug: urlSlug })
      }
    }
    return params
  }

  for (let attempt = 1; attempt <= FETCH_RETRIES; attempt++) {
    try {
      const params = await fetchSlugs()
      if (params.length === 0) {
        console.warn('[generateStaticParams] No news/events found')
        return [{ slug: 'placeholder' }]
      }
      return [...params, { slug: 'placeholder' }]
    } catch (error) {
      const isLast = attempt === FETCH_RETRIES
      console.error(`[generateStaticParams] Attempt ${attempt}/${FETCH_RETRIES} failed:`, error)
      if (isLast) {
        console.warn('[generateStaticParams] All retries failed; returning placeholder. Build may have network/timeout issues.')
        return [{ slug: 'placeholder' }]
      }
      await new Promise((r) => setTimeout(r, 2000))
    }
  }

  return [{ slug: 'placeholder' }]
}

export default async function NewsEventDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Normalize slug - remove trailing slash if present (since trailingSlash is true in config)
  const normalizedSlug = slug?.replace(/\/$/, '') || ''
  
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
