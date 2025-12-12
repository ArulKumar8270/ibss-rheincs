-- Add responsibilities and qualifications columns to careers table
-- These will store JSON arrays of bullet points
-- 
-- IMPORTANT: If you get an error that the careers table doesn't exist,
-- run the complete script: supabase-careers-table-complete.sql first

-- Check if table exists before adding columns
DO $$
BEGIN
    -- Add responsibilities column (JSONB for better querying, or TEXT for JSON string)
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'careers') THEN
        ALTER TABLE public.careers 
        ADD COLUMN IF NOT EXISTS responsibilities TEXT;

        -- Add qualifications column (JSONB for better querying, or TEXT for JSON string)
        ALTER TABLE public.careers 
        ADD COLUMN IF NOT EXISTS qualifications TEXT;

        -- Add comment to explain the format
        COMMENT ON COLUMN public.careers.responsibilities IS 'JSON array of responsibility bullet points, stored as JSON string. Example: ["Responsibility 1", "Responsibility 2"]';
        COMMENT ON COLUMN public.careers.qualifications IS 'JSON array of qualification bullet points, stored as JSON string. Example: ["Qualification 1", "Qualification 2"]';
    ELSE
        RAISE EXCEPTION 'Table public.careers does not exist. Please run supabase-careers-table-complete.sql first to create the table.';
    END IF;
END $$;

-- Example of how data should be stored:
-- responsibilities: '["Design, develop and maintain test plans", "Lead and execute end-to-end functional testing"]'
-- qualifications: '["Bachelor''s degree in Computer Science", "8+ years of experience in software testing"]'
