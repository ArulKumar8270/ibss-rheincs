-- ============================================
-- ADD CATEGORY COLUMN TO BLOGS TABLE
-- ============================================
-- Run this in Supabase SQL Editor to add category support to existing blogs table

-- Add category column
ALTER TABLE public.blogs 
ADD COLUMN IF NOT EXISTS category TEXT DEFAULT 'all';

-- Create index for category filtering
CREATE INDEX IF NOT EXISTS idx_blogs_category ON public.blogs(category);

-- Update comment
COMMENT ON COLUMN public.blogs.category IS 'Blog category: all, our-solutions, enterprise-solutions, digital-solutions, digital-services';

-- ============================================
-- ✅ Migration Complete!
-- ============================================
-- Category field has been added to blogs table.
-- Categories available:
-- - all (default)
-- - our-solutions
-- - enterprise-solutions
-- - digital-solutions
-- - digital-services
