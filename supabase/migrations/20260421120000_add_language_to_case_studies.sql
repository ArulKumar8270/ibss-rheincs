-- Add language to case_studies (English / German), aligned with blogs.language

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'case_studies'
      AND column_name = 'language'
  ) THEN
    ALTER TABLE public.case_studies
      ADD COLUMN language TEXT DEFAULT 'English';

    COMMENT ON COLUMN public.case_studies.language IS 'Content language: English or German (matches site language selector)';

    CREATE INDEX IF NOT EXISTS idx_case_studies_language ON public.case_studies(language);
  END IF;
END $$;
