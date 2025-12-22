-- ============================================
-- ADD INDUSTRIES COLUMN TO BLOGS TABLE
-- ============================================
-- This migration adds the industries column to the blogs table
-- to support industry categorization for blog posts.

-- Add industries column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'blogs' 
    AND column_name = 'industries'
  ) THEN
    ALTER TABLE public.blogs 
    ADD COLUMN industries TEXT[];
    
    -- Add comment
    COMMENT ON COLUMN public.blogs.industries IS 'Array of industry slugs for filtering (e.g., {"our-solutions", "digital-services"})';
  END IF;
END $$;

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_blogs_industries ON public.blogs USING GIN(industries);
