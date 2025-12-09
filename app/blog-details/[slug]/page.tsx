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

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables not set')
    // Return a placeholder to satisfy static export requirement
    // This will be handled gracefully by the page component
    return [{ slug: 'placeholder' }]
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('slug')
      .eq('published', true)

    if (error) {
      console.error('Error fetching blogs for static params:', error)
      // Return a placeholder to satisfy static export requirement
      return [{ slug: 'placeholder' }]
    }

    const params = (blogs || []).map((blog) => ({
      slug: blog.slug,
    }))

    // Ensure we always return at least one param for static export
    return params.length > 0 ? params : [{ slug: 'placeholder' }]
  } catch (error) {
    console.error('Error in generateStaticParams:', error)
    // Return a placeholder to satisfy static export requirement
    return [{ slug: 'placeholder' }]
  }
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  let blog: Blog | null = null
  let relatedBlogs: Blog[] = []

  if (supabaseUrl && supabaseAnonKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseAnonKey)
      
      const { data: blogData, error: blogError } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
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
