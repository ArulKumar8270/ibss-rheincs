-- ============================================
-- Contact Form Table Setup for Supabase
-- ============================================

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
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

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form submission)
CREATE POLICY "Allow public insert on contacts" ON contacts
  FOR INSERT TO public
  WITH CHECK (true);

-- Create policy to allow service role to read all (for admin dashboard)
CREATE POLICY "Allow service role to read all contacts" ON contacts
  FOR SELECT TO service_role
  USING (true);

-- Create policy to allow authenticated users to read (optional)
CREATE POLICY "Allow authenticated users to read contacts" ON contacts
  FOR SELECT TO authenticated
  USING (true);

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contacts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Run this SQL in your Supabase SQL Editor:
-- https://zanyplwqnhqtpulywvgm.supabase.co/project/_/sql
-- ============================================

COMMENT ON TABLE contacts IS 'Contact form submissions from website';
COMMENT ON COLUMN contacts.full_name IS 'Full name of the person submitting';
COMMENT ON COLUMN contacts.phone IS 'Phone number with country code';
COMMENT ON COLUMN contacts.email IS 'Email address';
COMMENT ON COLUMN contacts.company_name IS 'Company name';
COMMENT ON COLUMN contacts.selection IS 'Service selection from dropdown';
COMMENT ON COLUMN contacts.message IS 'Message from contact form';
