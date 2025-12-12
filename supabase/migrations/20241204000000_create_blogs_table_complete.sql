-- Complete Blogs Table Creation Script
-- This script creates the blogs table with all columns including category
-- Run this in Supabase SQL Editor if the blogs table doesn't exist yet

-- ============================================
-- BLOGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT,
  featured_image TEXT,
  category TEXT DEFAULT 'all',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON public.blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON public.blogs(published);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON public.blogs(category);
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON public.blogs(created_at DESC);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS POLICIES
-- ============================================

-- Policy: Allow authenticated users (admins) to manage all blogs
CREATE POLICY "Allow authenticated users to manage blogs"
  ON public.blogs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Allow public to read only published blogs
CREATE POLICY "Allow public to read published blogs"
  ON public.blogs
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- ============================================
-- TRIGGER FOR AUTO-UPDATING updated_at
-- ============================================

-- Create the update_updated_at_column function if it doesn't exist
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at on row update
CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================
-- GRANT PERMISSIONS
-- ============================================
GRANT ALL ON public.blogs TO authenticated;
GRANT SELECT ON public.blogs TO anon, authenticated;

-- ============================================
-- COMMENTS
-- ============================================
COMMENT ON TABLE public.blogs IS 'Blog posts table for managing blog content';
COMMENT ON COLUMN public.blogs.slug IS 'URL-friendly unique identifier for the blog post';
COMMENT ON COLUMN public.blogs.category IS 'Blog category: all, our-solutions, enterprise-solutions, digital-solutions, digital-services';
COMMENT ON COLUMN public.blogs.published IS 'Whether the blog post is published and visible to the public';

-- ============================================
-- ✅ SETUP COMPLETE!
-- ============================================
-- The blogs table has been created with:
-- - All required columns (id, title, slug, content, excerpt, author, featured_image, category, published)
-- - Unique constraint on slug for SEO-friendly URLs
-- - Indexes for performance (slug, published, category, created_at)
-- - Row Level Security enabled
-- - Policies: authenticated users can manage, public can read published blogs
-- - Auto-updating updated_at trigger
-- - Proper permissions granted
--
-- Next Steps:
-- 1. Access the admin panel at /admin/blogs to create blog posts
-- 2. Published blogs will be visible on /blog page
-- 3. Individual blog pages available at /blog-details/{slug}
