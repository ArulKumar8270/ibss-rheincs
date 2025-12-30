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
    // Use service role key if available to bypass RLS and fetch all blogs including drafts
    // This is safe because generateStaticParams only runs at build time, not at runtime
    const supabase = supabaseServiceKey 
      ? createClient(supabaseUrl, supabaseServiceKey)
      : createClient(supabaseUrl, supabaseAnonKey || '')
    
    console.log(`[generateStaticParams] Using ${supabaseServiceKey ? 'service role key' : 'anon key'}`)
    
    // Generate params for ALL blogs (published and unpublished)
    // Service role key bypasses RLS, allowing us to fetch draft blogs
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('slug, published')
      .order('created_at', { ascending: false })
      .limit(1000)

    if (error) {
      console.error('Error fetching blogs for static params:', error)
      console.error('This might be due to RLS policies blocking unpublished blogs')
      // Try fetching only published blogs as fallback
      const { data: publishedBlogs } = await supabase
        .from('blogs')
        .select('slug')
        .eq('published', true)
        .limit(1000)
      
      const fallbackParams = (publishedBlogs || []).map((blog) => ({
        slug: blog.slug,
      }))
      fallbackParams.push({ slug: 'placeholder' })
      return fallbackParams
    }

    console.log(`[generateStaticParams] Found ${blogs?.length || 0} blogs (including drafts)`)
    
    // Log each blog's slug and published status for debugging
    if (blogs && blogs.length > 0) {
      blogs.forEach((blog: any) => {
        console.log(`  - Slug: "${blog.slug}", Published: ${blog.published}`)
      })
    }
    
    const params = (blogs || []).map((blog) => ({
      slug: blog.slug,
    }))

    // Always include placeholder for fallback
    const allParams = params.length > 0 ? params : []
    allParams.push({ slug: 'placeholder' })

    console.log(`[generateStaticParams] Generated ${allParams.length} static params`)
    console.log(`[generateStaticParams] All slugs:`, allParams.map(p => `"${p.slug}"`).join(', '))
    
    // Check if the problematic slug is in the list
    const targetSlug = 'how-to-build-a-future-ready-digital-strategy'
    const hasTargetSlug = allParams.some(p => p.slug === targetSlug)
    console.log(`[generateStaticParams] Has target slug "${targetSlug}": ${hasTargetSlug}`)
    
    return allParams
  } catch (error) {
    console.error('Error in generateStaticParams:', error)
    // Return a placeholder to satisfy static export requirement
    return [{ slug: 'placeholder' }]
  }
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Debug: Log the requested slug
  console.log(`[BlogDetailsPage] Requested slug: "${slug}"`)
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  let blog: Blog | null = null
  let relatedBlogs: Blog[] = []

  if (supabaseUrl && supabaseAnonKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseAnonKey)
      
      // Fetch blog without published filter - access control handled in client component
      const { data: blogData, error: blogError } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .single()

      if (!blogError && blogData) {
        blog = blogData as Blog

        const { data: relatedData } = await supabase
          .from('blogs')
          .select('*')
          .eq('published', true)
          .neq('id', blog.id)
          .eq('category', blog.category || 'all')
          .order('created_at', { ascending: false })
          .limit(4)

        relatedBlogs = (relatedData || []) as Blog[]
      }
    } catch (error) {
      console.error('Error fetching blog in server component:', error)
    }
  }

  return (
    <BlogDetailsClient 
      initialBlog={blog}
      initialRelatedBlogs={relatedBlogs}
      slug={slug}
    />
  )
}
