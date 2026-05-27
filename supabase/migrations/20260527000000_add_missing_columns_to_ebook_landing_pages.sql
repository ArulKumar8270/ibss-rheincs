-- Add missing columns to ebook_landing_pages table
ALTER TABLE public.ebook_landing_pages 
ADD COLUMN IF NOT EXISTS additional_paragraph TEXT,
ADD COLUMN IF NOT EXISTS form_fields JSONB DEFAULT '[]'::jsonb;
