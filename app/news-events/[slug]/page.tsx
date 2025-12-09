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

// Generate static params for all published news/events
export async function generateStaticParams() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables not set, returning empty params')
    return []
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    
    // Fetch all published news/event slugs
    const { data: items, error } = await supabase
      .from('news_events')
      .select('slug')
      .eq('published', true)

    if (error) {
      console.error('Error fetching news/events for static params:', error)
      return []
    }

    // Return array of params objects
    return (items || []).map((item) => ({
      slug: item.slug,
    }))
  } catch (error) {
    console.error('Error in generateStaticParams:', error)
    return []
  }
}

// Server component that fetches data and passes to client component
export default async function NewsEventDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  let item: NewsEvent | null = null

  if (supabaseUrl && supabaseAnonKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseAnonKey)
      
      // Fetch the current news/event
      const { data: itemData, error: itemError } = await supabase
        .from('news_events')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

      if (!itemError && itemData) {
        item = itemData as NewsEvent
      }
    } catch (error) {
      console.error('Error fetching news/event in server component:', error)
    }
  }

  return (
    <NewsEventDetailsClient 
      initialItem={item}
      slug={slug}
    />
  )
}
