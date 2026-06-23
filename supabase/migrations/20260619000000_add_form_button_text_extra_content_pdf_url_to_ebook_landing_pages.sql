-- Add missing columns to ebook_landing_pages table
ALTER TABLE public.ebook_landing_pages 
ADD COLUMN IF NOT EXISTS form_button_text TEXT,
ADD COLUMN IF NOT EXISTS extra_content TEXT,
ADD COLUMN IF NOT EXISTS pdf_url TEXT;
