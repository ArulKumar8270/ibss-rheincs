-- ============================================
-- ADD LANGUAGE COLUMN TO BLOGS TABLE
-- ============================================
-- Adds the language column for English/German content (matches site language selector).

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
    AND table_name = 'blogs'
    AND column_name = 'language'
  ) THEN
    ALTER TABLE public.blogs
    ADD COLUMN language TEXT DEFAULT 'English';

    COMMENT ON COLUMN public.blogs.language IS 'Content language: English or German (matches site language selector)';

    CREATE INDEX idx_blogs_language ON public.blogs(language);
  END IF;
END $$;
