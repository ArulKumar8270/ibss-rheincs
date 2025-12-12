-- Complete Careers Table Creation Script
-- This script creates the careers table with all columns including responsibilities and qualifications
-- Run this if the careers table doesn't exist yet

-- ============================================
-- CAREERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.careers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('full-time', 'part-time', 'contract', 'internship')),
  description TEXT NOT NULL,
  requirements TEXT NOT NULL,
  responsibilities TEXT,
  qualifications TEXT,
  salary_range TEXT,
  application_deadline DATE,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_careers_department ON public.careers(department);
CREATE INDEX IF NOT EXISTS idx_careers_type ON public.careers(type);
CREATE INDEX IF NOT EXISTS idx_careers_published ON public.careers(published);
CREATE INDEX IF NOT EXISTS idx_careers_location ON public.careers(location);
CREATE INDEX IF NOT EXISTS idx_careers_created_at ON public.careers(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.careers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow authenticated users to manage careers" ON public.careers;
DROP POLICY IF EXISTS "Allow public to read published careers" ON public.careers;

-- Policies for careers
-- Allow authenticated users (admins) to manage all careers
CREATE POLICY "Allow authenticated users to manage careers"
  ON public.careers
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow public to read only published careers
CREATE POLICY "Allow public to read published careers"
  ON public.careers
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_careers_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_careers_updated_at ON public.careers;
CREATE TRIGGER update_careers_updated_at
    BEFORE UPDATE ON public.careers
    FOR EACH ROW
    EXECUTE FUNCTION update_careers_updated_at();

-- Add comments to explain the columns
COMMENT ON TABLE public.careers IS 'Stores job postings/career opportunities';
COMMENT ON COLUMN public.careers.responsibilities IS 'JSON array of responsibility bullet points, stored as JSON string. Example: ["Responsibility 1", "Responsibility 2"]';
COMMENT ON COLUMN public.careers.qualifications IS 'JSON array of qualification bullet points, stored as JSON string. Example: ["Qualification 1", "Qualification 2"]';
COMMENT ON COLUMN public.careers.published IS 'If true, job is visible on public website. If false, it is a draft.';

-- Example of how responsibilities and qualifications should be stored:
-- responsibilities: '["Design, develop and maintain test plans", "Lead and execute end-to-end functional testing"]'
-- qualifications: '["Bachelor''s degree in Computer Science", "8+ years of experience in software testing"]'
