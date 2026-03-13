-- Migration to fix blog_faqs table RLS policies
-- Ensure the table exists and public can read FAQs

CREATE TABLE IF NOT EXISTS public.blog_faqs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_id UUID NOT NULL REFERENCES public.blogs(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.blog_faqs ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow public select on blog_faqs" ON public.blog_faqs;
DROP POLICY IF EXISTS "Allow authenticated manage on blog_faqs" ON public.blog_faqs;

-- Policy: Allow public to read FAQs
CREATE POLICY "Allow public select on blog_faqs"
  ON public.blog_faqs
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy: Allow authenticated users (admins) to manage all FAQs
CREATE POLICY "Allow authenticated manage on blog_faqs"
  ON public.blog_faqs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Grant permissions
GRANT SELECT ON public.blog_faqs TO anon, authenticated;
GRANT ALL ON public.blog_faqs TO authenticated;
