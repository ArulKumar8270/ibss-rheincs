-- ============================================
-- ADD AUTHOR_LINKEDIN COLUMN TO BLOGS TABLE
-- ============================================
-- This migration adds the author_linkedin column to the blogs table
-- to support LinkedIn profile links for blog authors.

-- Add author_linkedin column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'blogs' 
    AND column_name = 'author_linkedin'
  ) THEN
    ALTER TABLE public.blogs 
    ADD COLUMN author_linkedin TEXT;
    
    -- Add comment
    COMMENT ON COLUMN public.blogs.author_linkedin IS 'LinkedIn profile URL for the blog author (optional)';
  END IF;
END $$;

