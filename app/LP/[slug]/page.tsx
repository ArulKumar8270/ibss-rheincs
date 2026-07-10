import { createClient } from '@supabase/supabase-js'
import EbookLandingClient from './EbookLandingClient'

interface FormField {
  id: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select';
  label?: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

interface EbookLandingData {
  id: string;
  slug: string;
  title: string;
  headline: string | null;
  subheadline: string | null;
  additional_paragraph: string | null;
  extra_content: string | null;
  logo_text: string | null;
  logo_image_url: string | null;
  book_image_url: string | null;
  learning_title: string | null;
  learning_description: string | null;
  benefits_heading: string | null;
  benefits: string[];
  form_title: string | null;
  form_button_text: string | null;
  form_fields: FormField[];
  author_heading: string | null;
  author_name: string | null;
  author_role: string | null;
  author_bio: string | null;
  author_avatar_url: string | null;
  author_avatar_svg: string | null;
  footer_color: string | null;
  pdf_url: string | null;
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const STORAGE_BUCKET = "case-study-images";

function resolveImageUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${value}`;
}

function emptyToNull(value: any) {
  if (typeof value === 'string') {
    // Strip HTML tags first
    const stripped = value.replace(/<[^>]*>/g, '').trim();
    if (stripped === '') {
      return null;
    }
  }
  return value;
}

function getDefaultFormFields(): FormField[] {
  return [
    { id: 'fullName', type: 'text', placeholder: 'Name *', required: true },
  ];
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl) {
    console.warn('[generateStaticParams] Supabase URL not set')
    return [{ slug: 'placeholder' }]
  }

  try {
    const supabase = supabaseServiceKey 
      ? createClient(supabaseUrl, supabaseServiceKey)
      : createClient(supabaseUrl, supabaseAnonKey || '')
    
    const { data: pages, error } = await supabase
      .from('ebook_landing_pages')
      .select('slug')
      .limit(1000)

    if (error) {
      console.error('[generateStaticParams] Error fetching ebook landing pages:', error)
      return [{ slug: 'placeholder' }]
    }

    if (!pages || pages.length === 0) {
      console.warn('[generateStaticParams] No ebook landing pages found')
      return [{ slug: 'placeholder' }]
    }
    
    const validPages = pages.filter((page: any) => 
      page.slug && 
      typeof page.slug === 'string' && 
      page.slug.trim().length > 0
    )
    
    if (validPages.length === 0) {
      console.warn('[generateStaticParams] No valid ebook landing page slugs found')
      return [{ slug: 'placeholder' }]
    }
    
    const params = validPages.map((page: any) => ({
      slug: page.slug.trim(),
    }))

    const allParams = [...params, { slug: 'placeholder' }]
    return allParams
  } catch (error) {
    console.error('[generateStaticParams] Error in generateStaticParams:', error)
    return [{ slug: 'placeholder' }]
  }
}

async function getPageData(slug: string): Promise<EbookLandingData | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl) {
    console.warn("[getPageData] Supabase URL not set")
    return null
  }

  try {
    const supabase = supabaseServiceKey 
      ? createClient(supabaseUrl, supabaseServiceKey)
      : createClient(supabaseUrl, supabaseAnonKey || "")
    
    const { data: page, error } = await supabase
      .from("ebook_landing_pages")
      .select("*")
      .eq("slug", slug)
      .single()

    if (error) {
      console.error("[getPageData] Error fetching ebook landing page:", error)
      return null
    }

    if (!page) {
          console.warn("[getPageData] No page found for slug:", slug);
          return null;
        }

        const resolvedData: EbookLandingData = {
          ...page,
          logo_image_url: resolveImageUrl(page.logo_image_url),
          book_image_url: resolveImageUrl(page.book_image_url),
          author_heading: emptyToNull(page.author_heading),
          author_name: emptyToNull(page.author_name),
          author_role: emptyToNull(page.author_role),
          author_bio: emptyToNull(page.author_bio),
          author_avatar_url: resolveImageUrl(page.author_avatar_url),
          author_avatar_svg: emptyToNull(page.author_avatar_svg),
          form_fields: page.form_fields || [],
        };

    return resolvedData
  } catch (error) {
    console.error("[getPageData] Error in getPageData:", error)
    return null
  }
}

export default async function EbookLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const normalizedSlug = slug?.replace(/\/$/, '') || ''
  const initialData = await getPageData(normalizedSlug)

  return <EbookLandingClient initialData={initialData} slug={normalizedSlug} />
}
