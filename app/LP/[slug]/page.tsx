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

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const STORAGE_BUCKET = "case-study-images";

function resolveImageUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${value}`;
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

export default async function EbookLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const normalizedSlug = slug?.replace(/\/$/, '') || ''

  // ALWAYS pass null for initialData to force client-side fetch
  // This ensures new content created after build is always fetched from database
  return <EbookLandingClient initialData={null} slug={normalizedSlug} />
}
