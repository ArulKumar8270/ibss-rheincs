import { createClient } from '@supabase/supabase-js'
import BlogDetailsClient from './BlogDetailsClient'

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  featured_image: string | null;
  category: string;
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
    // Use service role key if available to bypass RLS and fetch all blogs including drafts
    // This is safe because generateStaticParams only runs at build time, not at runtime
    const supabase = supabaseServiceKey 
      ? createClient(supabaseUrl, supabaseServiceKey)
      : createClient(supabaseUrl, supabaseAnonKey || '')
    
    
    // Generate params for ALL blogs (published and unpublished)
    // Service role key bypasses RLS, allowing us to fetch draft blogs
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('slug, published')
      .order('created_at', { ascending: false })
      .limit(1000)

    if (error) {
      console.error('[generateStaticParams] Error fetching blogs:', error)
      console.error('[generateStaticParams] This might be due to RLS policies blocking unpublished blogs')
      // Try fetching only published blogs as fallback
      const { data: publishedBlogs, error: publishedError } = await supabase
        .from('blogs')
        .select('slug')
        .eq('published', true)
        .limit(1000)
      
      if (publishedError) {
        console.error('[generateStaticParams] Error fetching published blogs:', publishedError)
        return [{ slug: 'placeholder' }]
      }
      
      const fallbackParams = (publishedBlogs || [])
        .filter((blog: any) => blog.slug && typeof blog.slug === 'string')
        .map((blog: any) => ({
          slug: blog.slug.trim(),
        }))
      
      if (fallbackParams.length === 0) {
        console.warn('[generateStaticParams] No published blogs found, returning placeholder')
        return [{ slug: 'placeholder' }]
      }
      
      fallbackParams.push({ slug: 'placeholder' })
      return fallbackParams
    }

    if (!blogs || blogs.length === 0) {
      console.warn('[generateStaticParams] No blogs found')
      return [{ slug: 'placeholder' }]
    }

    
    // Filter out invalid slugs and ensure they're strings
    const validBlogs = blogs.filter((blog: any) => 
      blog.slug && 
      typeof blog.slug === 'string' && 
      blog.slug.trim().length > 0
    )
    
    if (validBlogs.length === 0) {
      console.warn('[generateStaticParams] No valid blog slugs found')
      return [{ slug: 'placeholder' }]
    }
    
    
    const params = validBlogs.map((blog: any) => ({
      slug: blog.slug.trim(),
    }))

    // Always include placeholder for fallback
    const allParams = [...params, { slug: 'placeholder' }]

    return allParams
  } catch (error) {
    console.error('[generateStaticParams] Error in generateStaticParams:', error)
    // Return a placeholder to satisfy static export requirement
    return [{ slug: 'placeholder' }]
  }
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Normalize slug - remove trailing slash if present (since trailingSlash is true in config)
  const normalizedSlug = slug?.replace(/\/$/, '') || ''
  
  // Debug: Log the requested slug
  
  // ALWAYS pass null for initialBlog to force client-side fetch
  // This ensures new content created after build is always fetched from database
  // The client component will ALWAYS fetch from Supabase, never rely on server-side data
 const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

let blog = null

try {
  const { data } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", normalizedSlug)
    .single()

  blog = data || null
} catch (err) {
  blog = null
}

return (
  <BlogDetailsClient
    initialBlog={blog}
    initialRelatedBlogs={[]}
    slug={normalizedSlug}
  />
)
}
