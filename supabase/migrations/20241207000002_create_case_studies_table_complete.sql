-- ============================================
-- CASE STUDIES TABLE - Complete Setup
-- ============================================
-- This script creates the case_studies table with all necessary
-- indexes, RLS policies, and triggers.
-- Run this in Supabase SQL Editor

-- Create the table
CREATE TABLE IF NOT EXISTS public.case_studies (
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
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  -- Case study specific fields
  client_name TEXT,
  client_logo TEXT,
  client_description TEXT,
  client_location TEXT,
  overview TEXT,
  challenges TEXT,
  solution TEXT,
  benefits TEXT,
  implementation TEXT,
  download_url TEXT,
  industries TEXT[] -- Array of industry categories
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON public.case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_category ON public.case_studies(category);
CREATE INDEX IF NOT EXISTS idx_case_studies_published ON public.case_studies(published);
CREATE INDEX IF NOT EXISTS idx_case_studies_created_at ON public.case_studies(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow authenticated users to manage case_studies" ON public.case_studies;
DROP POLICY IF EXISTS "Allow public to read published case_studies" ON public.case_studies;

-- Policy: Allow authenticated users to manage (insert, update, delete) all case studies
CREATE POLICY "Allow authenticated users to manage case_studies"
  ON public.case_studies
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Allow public (including anonymous) to read only published case studies
CREATE POLICY "Allow public to read published case_studies"
  ON public.case_studies
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Create trigger for auto-updating updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_case_studies_updated_at 
  BEFORE UPDATE ON public.case_studies
  FOR EACH ROW 
  EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================
-- Comments for documentation
-- ============================================
COMMENT ON TABLE public.case_studies IS 'Case studies showcasing client implementations and success stories';
COMMENT ON COLUMN public.case_studies.industries IS 'Array of industry categories for filtering (e.g., {"our-solutions", "digital-services"})';
