-- Create ebook_landing_pages table
CREATE TABLE IF NOT EXISTS public.ebook_landing_pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    headline TEXT,
    subheadline TEXT,
    logo_text TEXT,
    logo_image_url TEXT,
    book_image_url TEXT,
    learning_title TEXT,
    learning_description TEXT,
    benefits JSONB DEFAULT '[]'::jsonb,
    form_title TEXT,
    author_heading TEXT,
    author_name TEXT,
    author_role TEXT,
    author_bio TEXT,
    author_avatar_url TEXT,
    author_avatar_svg TEXT,
    footer_color TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.ebook_landing_pages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow public read access to ebook_landing_pages" ON public.ebook_landing_pages;
DROP POLICY IF EXISTS "Allow authenticated users to insert ebook_landing_pages" ON public.ebook_landing_pages;
DROP POLICY IF EXISTS "Allow authenticated users to update ebook_landing_pages" ON public.ebook_landing_pages;
DROP POLICY IF EXISTS "Allow authenticated users to delete ebook_landing_pages" ON public.ebook_landing_pages;
DROP POLICY IF EXISTS "Allow authenticated users to manage ebook_landing_pages" ON public.ebook_landing_pages;

-- Create robust policies
CREATE POLICY "Allow public read access to ebook_landing_pages" 
    ON public.ebook_landing_pages
    FOR SELECT 
    TO anon, authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to manage ebook_landing_pages" 
    ON public.ebook_landing_pages
    FOR ALL 
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Grant explicit permissions
GRANT ALL ON public.ebook_landing_pages TO authenticated;
GRANT SELECT ON public.ebook_landing_pages TO anon;
