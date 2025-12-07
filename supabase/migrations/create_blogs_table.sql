-- ============================================
-- BLOGS TABLE MIGRATION
-- ============================================
-- Run this in Supabase SQL Editor
-- This creates the blogs table with all necessary indexes, RLS policies, and triggers

-- Step 1: Create the update_updated_at_column function (if it doesn't exist)
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- Step 2: Create BLOGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT,
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- Step 3: Create Indexes for Performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON public.blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON public.blogs(published);
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON public.blogs(created_at DESC);

-- ============================================
-- Step 4: Enable Row Level Security (RLS)
-- ============================================
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- ============================================
-- Step 5: Create RLS Policies
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
-- Step 6: Create Trigger for Auto-updating updated_at
-- ============================================
CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================
-- Step 7: Grant Permissions
-- ============================================
GRANT ALL ON public.blogs TO authenticated;
GRANT SELECT ON public.blogs TO anon, authenticated;

-- ============================================
-- ✅ Migration Complete!
-- ============================================
-- The blogs table is now ready to use.
-- 
-- Table Structure:
-- - id: UUID (Primary Key, Auto-generated)
-- - title: TEXT (Required)
-- - slug: TEXT (Required, Unique - for SEO-friendly URLs)
-- - content: TEXT (Required - blog post content, supports HTML)
-- - excerpt: TEXT (Optional - short description)
-- - author: TEXT (Optional - author name)
-- - featured_image: TEXT (Optional - URL to featured image)
-- - published: BOOLEAN (Default: false - controls visibility)
-- - created_at: TIMESTAMP (Auto-set on creation)
-- - updated_at: TIMESTAMP (Auto-updated on modification)
--
-- Security:
-- - Only authenticated users can create/edit/delete blogs
-- - Public can only read published blogs
-- - Unpublished blogs are hidden from public view
--
-- Usage:
-- 1. Create blogs via admin dashboard: /admin/blogs
-- 2. View published blogs on: /blog
-- 3. Blog details page: /blog-details/{slug}
