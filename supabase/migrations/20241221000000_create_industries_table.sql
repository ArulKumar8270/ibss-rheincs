-- ============================================
-- INDUSTRIES TABLE - Centralized Industry Management
-- ============================================
-- This script creates the industries table for centralized industry management
-- that can be used across case studies, blogs, and other pages.

-- Create the table
CREATE TABLE IF NOT EXISTS public.industries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_industries_slug ON public.industries(slug);
CREATE INDEX IF NOT EXISTS idx_industries_active ON public.industries(active);
CREATE INDEX IF NOT EXISTS idx_industries_display_order ON public.industries(display_order);

-- Enable Row Level Security (RLS)
ALTER TABLE public.industries ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow authenticated users to manage industries" ON public.industries;
DROP POLICY IF EXISTS "Allow public to read active industries" ON public.industries;

-- Policy: Allow authenticated users to manage (insert, update, delete) all industries
CREATE POLICY "Allow authenticated users to manage industries"
  ON public.industries
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Allow public (including anonymous) to read only active industries
CREATE POLICY "Allow public to read active industries"
  ON public.industries
  FOR SELECT
  TO public
  USING (active = true);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_industries_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_industries_updated_at ON public.industries;
CREATE TRIGGER trigger_update_industries_updated_at
  BEFORE UPDATE ON public.industries
  FOR EACH ROW
  EXECUTE FUNCTION update_industries_updated_at();

-- Insert default industries
INSERT INTO public.industries (name, slug, description, display_order, active) VALUES
  ('Our Solutions', 'our-solutions', 'General solutions category', 1, true),
  ('Enterprise Solutions & Services', 'enterprise-solutions', 'Enterprise-level solutions and services', 2, true),
  ('Digital Solutions', 'digital-solutions', 'Digital transformation solutions', 3, true),
  ('Digital Services', 'digital-services', 'Digital services and consulting', 4, true)
ON CONFLICT (slug) DO NOTHING;
