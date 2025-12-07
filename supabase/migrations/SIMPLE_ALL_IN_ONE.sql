-- SIMPLE VERSION: All-in-one migration
-- Copy and paste this ENTIRE block into Supabase SQL Editor

-- Create table
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  country_code TEXT NOT NULL DEFAULT '+91',
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT NOT NULL,
  selection TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_contacts_email ON public.contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);

-- Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public insert on contacts"
  ON public.contacts FOR INSERT TO public
  WITH CHECK (true);

CREATE POLICY "Allow service role to read all contacts"
  ON public.contacts FOR SELECT TO service_role
  USING (true);

-- Grant permissions
GRANT INSERT ON public.contacts TO anon;
GRANT INSERT ON public.contacts TO authenticated;
GRANT SELECT ON public.contacts TO service_role;
GRANT SELECT ON public.contacts TO authenticated;
