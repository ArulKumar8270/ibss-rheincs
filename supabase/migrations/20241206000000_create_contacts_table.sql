-- Migration: Create contacts table
-- Description: Table to store contact form submissions
-- Created: 2024-12-06

-- Create contacts table
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

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contacts_email ON public.contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_company_name ON public.contacts(company_name);

-- Add comments for documentation
COMMENT ON TABLE public.contacts IS 'Contact form submissions from website';
COMMENT ON COLUMN public.contacts.id IS 'Primary key - UUID';
COMMENT ON COLUMN public.contacts.full_name IS 'Full name of the person submitting the form';
COMMENT ON COLUMN public.contacts.country_code IS 'Phone country code (e.g., +91, +1, +44)';
COMMENT ON COLUMN public.contacts.phone IS 'Phone number';
COMMENT ON COLUMN public.contacts.email IS 'Email address';
COMMENT ON COLUMN public.contacts.company_name IS 'Company name';
COMMENT ON COLUMN public.contacts.selection IS 'Service selection from dropdown (optional)';
COMMENT ON COLUMN public.contacts.message IS 'Message/inquiry from contact form (optional)';
COMMENT ON COLUMN public.contacts.created_at IS 'Timestamp when record was created';
COMMENT ON COLUMN public.contacts.updated_at IS 'Timestamp when record was last updated';

-- Enable Row Level Security (RLS)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public insert (for form submissions)
CREATE POLICY "Allow public insert on contacts"
  ON public.contacts
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow service role to read all (for admin access)
CREATE POLICY "Allow service role to read all contacts"
  ON public.contacts
  FOR SELECT
  TO service_role
  USING (true);

-- Create policy to allow authenticated users to read (optional - for admin dashboard)
CREATE POLICY "Allow authenticated users to read contacts"
  ON public.contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update updated_at on row update
CREATE TRIGGER update_contacts_updated_at
  BEFORE UPDATE ON public.contacts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Grant necessary permissions
GRANT INSERT ON public.contacts TO anon;
GRANT INSERT ON public.contacts TO authenticated;
GRANT SELECT ON public.contacts TO service_role;
GRANT SELECT ON public.contacts TO authenticated;
