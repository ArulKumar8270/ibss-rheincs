-- SIMPLE FIX: Just fix the RLS policy
-- Run this in Supabase SQL Editor

-- Drop old policy if exists
DROP POLICY IF EXISTS "Allow public insert on contacts" ON public.contacts;

-- Create new policy that works
CREATE POLICY "contacts_insert_policy"
  ON public.contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Make sure RLS is enabled
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Grant permissions
GRANT INSERT ON public.contacts TO anon;
GRANT INSERT ON public.contacts TO authenticated;
