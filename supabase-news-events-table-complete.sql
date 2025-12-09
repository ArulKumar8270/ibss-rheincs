-- ============================================
-- NEWS & EVENTS TABLE - Complete Setup
-- ============================================
-- This script creates the news_events table with all necessary
-- indexes, RLS policies, and triggers.
-- Run this in Supabase SQL Editor

-- Create the table
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

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_news_events_slug ON public.news_events(slug);
CREATE INDEX IF NOT EXISTS idx_news_events_type ON public.news_events(type);
CREATE INDEX IF NOT EXISTS idx_news_events_published ON public.news_events(published);
CREATE INDEX IF NOT EXISTS idx_news_events_event_date ON public.news_events(event_date);
CREATE INDEX IF NOT EXISTS idx_news_events_created_at ON public.news_events(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.news_events ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow authenticated users to manage news_events" ON public.news_events;
DROP POLICY IF EXISTS "Allow public to read published news_events" ON public.news_events;

-- Policy: Allow authenticated users to manage (insert, update, delete) all news/events
CREATE POLICY "Allow authenticated users to manage news_events"
  ON public.news_events
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Allow public (including anonymous) to read only published news/events
CREATE POLICY "Allow public to read published news_events"
  ON public.news_events
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Create or replace function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS update_news_events_updated_at ON public.news_events;

-- Create trigger to automatically update updated_at on row update
CREATE TRIGGER update_news_events_updated_at
  BEFORE UPDATE ON public.news_events
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- VERIFICATION
-- ============================================
-- Run these queries to verify the table was created correctly:

-- Check table structure
-- SELECT column_name, data_type, is_nullable, column_default
-- FROM information_schema.columns
-- WHERE table_schema = 'public' AND table_name = 'news_events'
-- ORDER BY ordinal_position;

-- Check indexes
-- SELECT indexname, indexdef
-- FROM pg_indexes
-- WHERE tablename = 'news_events';

-- Check policies
-- SELECT policyname, permissive, roles, cmd, qual
-- FROM pg_policies
-- WHERE tablename = 'news_events';
