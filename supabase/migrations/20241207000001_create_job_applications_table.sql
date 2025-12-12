-- Create job_applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  job_title TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country_code TEXT NOT NULL DEFAULT '+91',
  phone TEXT NOT NULL,
  resume_url TEXT,
  covering_letter TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'shortlisted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_job_applications_email ON job_applications(email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON job_applications(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON job_applications(created_at DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_job_applications_updated_at 
    BEFORE UPDATE ON job_applications 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for form submissions)
CREATE POLICY "Allow public inserts" ON job_applications
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Only authenticated users can read (for admin)
CREATE POLICY "Allow authenticated reads" ON job_applications
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only authenticated users can update (for admin)
CREATE POLICY "Allow authenticated updates" ON job_applications
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Only authenticated users can delete (for admin)
CREATE POLICY "Allow authenticated deletes" ON job_applications
  FOR DELETE
  TO authenticated
  USING (true);

-- Create storage bucket for resumes (run this in Supabase dashboard or via API)
-- The bucket should be created with public access for resume downloads
-- Bucket name: 'resumes'
-- Public: true

COMMENT ON TABLE job_applications IS 'Stores job application submissions from the careers page';
COMMENT ON COLUMN job_applications.status IS 'Application status: pending, reviewed, shortlisted, or rejected';
COMMENT ON COLUMN job_applications.resume_url IS 'URL to the uploaded resume file in Supabase Storage';
