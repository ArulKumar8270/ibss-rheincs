-- FIX: Row Level Security Policy Issue
-- This fixes the "new row violates row-level security policy" error

-- First, drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public insert on contacts" ON public.contacts;
DROP POLICY IF EXISTS "Allow authenticated users to read contacts" ON public.contacts;
DROP POLICY IF EXISTS "Allow service role to read all contacts" ON public.contacts;

-- Create a simple INSERT policy that allows anyone (anon role) to insert
-- This is what the contact form needs
CREATE POLICY "contacts_insert_policy"
  ON public.contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create SELECT policy for service role (for admin access)
CREATE POLICY "contacts_select_service_role"
  ON public.contacts
  FOR SELECT
  TO service_role
  USING (true);

-- Create SELECT policy for authenticated users (for admin dashboard)
CREATE POLICY "contacts_select_authenticated"
  ON public.contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Verify RLS is enabled
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Grant explicit permissions
GRANT INSERT ON public.contacts TO anon;
GRANT INSERT ON public.contacts TO authenticated;
GRANT SELECT ON public.contacts TO service_role;
GRANT SELECT ON public.contacts TO authenticated;
