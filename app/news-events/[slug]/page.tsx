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

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables not set')
    // Return a placeholder to satisfy static export requirement
    // This will be handled gracefully by the page component
    return [{ slug: 'placeholder' }]
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    
    const { data: items, error } = await supabase
      .from('news_events')
      .select('slug')
      .eq('published', true)

    if (error) {
      console.error('Error fetching news/events for static params:', error)
      // Return a placeholder to satisfy static export requirement
      return [{ slug: 'placeholder' }]
    }

    const params = (items || []).map((item) => ({
      slug: item.slug,
    }))

    // Ensure we always return at least one param for static export
    return params.length > 0 ? params : [{ slug: 'placeholder' }]
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

  let item: NewsEvent | null = null

  if (supabaseUrl && supabaseAnonKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseAnonKey)
      
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
