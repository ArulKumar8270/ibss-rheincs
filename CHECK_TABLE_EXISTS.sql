-- Check if contacts table exists
-- Run this to verify the table was created

SELECT 
  table_name,
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_schema = 'public' 
  AND table_name = 'contacts'
ORDER BY ordinal_position;

-- If you see results, the table exists!
-- If you see "0 rows", the table doesn't exist yet.
