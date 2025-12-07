-- Create tables for Admin Dashboard
-- Run this in Supabase SQL Editor after creating the contacts table

-- ============================================
-- BLOGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT,
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blogs_slug ON public.blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON public.blogs(published);
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON public.blogs(created_at DESC);

-- Enable RLS
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Policies for blogs
CREATE POLICY "Allow authenticated users to manage blogs"
  ON public.blogs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public to read published blogs"
  ON public.blogs
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- ============================================
-- NEWS & EVENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.news_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  type TEXT NOT NULL CHECK (type IN ('news', 'event')),
  event_date TIMESTAMP WITH TIME ZONE,
  location TEXT,
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_news_events_slug ON public.news_events(slug);
CREATE INDEX IF NOT EXISTS idx_news_events_type ON public.news_events(type);
CREATE INDEX IF NOT EXISTS idx_news_events_published ON public.news_events(published);
CREATE INDEX IF NOT EXISTS idx_news_events_event_date ON public.news_events(event_date);

-- Enable RLS
ALTER TABLE public.news_events ENABLE ROW LEVEL SECURITY;

-- Policies for news_events
CREATE POLICY "Allow authenticated users to manage news_events"
  ON public.news_events
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public to read published news_events"
  ON public.news_events
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

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
  salary_range TEXT,
  application_deadline DATE,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_careers_department ON public.careers(department);
CREATE INDEX IF NOT EXISTS idx_careers_type ON public.careers(type);
CREATE INDEX IF NOT EXISTS idx_careers_published ON public.careers(published);
CREATE INDEX IF NOT EXISTS idx_careers_location ON public.careers(location);

-- Enable RLS
ALTER TABLE public.careers ENABLE ROW LEVEL SECURITY;

-- Policies for careers
CREATE POLICY "Allow authenticated users to manage careers"
  ON public.careers
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public to read published careers"
  ON public.careers
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- ============================================
-- TRIGGERS FOR UPDATED_AT
-- ============================================
CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_news_events_updated_at
  BEFORE UPDATE ON public.news_events
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_careers_updated_at
  BEFORE UPDATE ON public.careers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================
-- GRANT PERMISSIONS
-- ============================================
GRANT ALL ON public.blogs TO authenticated;
GRANT SELECT ON public.blogs TO anon, authenticated;

GRANT ALL ON public.news_events TO authenticated;
GRANT SELECT ON public.news_events TO anon, authenticated;

GRANT ALL ON public.careers TO authenticated;
GRANT SELECT ON public.careers TO anon, authenticated;
