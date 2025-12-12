-- STEP 3: Enable Row Level Security and create policies
-- Run this AFTER Step 2

-- Enable Row Level Security
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

-- Create policy to allow authenticated users to read
CREATE POLICY "Allow authenticated users to read contacts"
  ON public.contacts
  FOR SELECT
  TO authenticated
  USING (true);
