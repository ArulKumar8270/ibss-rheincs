# Supabase Migrations

This directory contains database migration files for the Supabase project.

## 📋 How to Run Migrations

### Option 1: Using Supabase SQL Editor (Recommended for Quick Setup)

1. Go to your Supabase SQL Editor:
   ```
   https://zanyplwqnhqtpulywvgm.supabase.co/project/_/sql
   ```

2. Open the migration file: `supabase/migrations/20241206000000_create_contacts_table.sql`

3. **Copy ALL the SQL code** from the file

4. **Paste into Supabase SQL Editor**

5. Click **"RUN"** button

6. You should see: ✅ Success message

7. Verify table creation:
   - Go to Table Editor: https://zanyplwqnhqtpulywvgm.supabase.co/project/_/editor
   - You should see `contacts` table in the sidebar

### Option 2: Using Supabase CLI (Advanced)

If you have Supabase CLI installed:

```bash
# Install Supabase CLI (if not installed)
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref zanyplwqnhqtpulywvgm

# Run migrations
supabase db push
```

## 📁 Migration Files

### `20241206000000_create_contacts_table.sql`
- Creates the `contacts` table
- Sets up Row Level Security (RLS)
- Creates indexes for performance
- Sets up auto-updating timestamps
- Configures permissions

### `20241207000000_create_case_studies_table.sql`
- Creates the `case_studies` table
- Includes all case study fields (title, content, client info, sections)
- Sets up Row Level Security (RLS)
- Creates indexes for performance (slug, category, published, created_at)
- Sets up auto-updating timestamps
- Configures permissions (authenticated users can manage, public can read published)
- Supports industry array for filtering

## ✅ Verification

After running the migration, verify:

1. **Table exists:**
   ```sql
   SELECT * FROM public.contacts LIMIT 1;
   ```

2. **RLS is enabled:**
   ```sql
   SELECT tablename, rowsecurity 
   FROM pg_tables 
   WHERE schemaname = 'public' AND tablename = 'contacts';
   ```

3. **Policies exist:**
   ```sql
   SELECT * FROM pg_policies 
   WHERE tablename = 'contacts';
   ```

## 🔄 Rollback (If Needed)

To rollback this migration:

```sql
-- Drop trigger
DROP TRIGGER IF EXISTS update_contacts_updated_at ON public.contacts;

-- Drop function
DROP FUNCTION IF EXISTS public.update_updated_at_column();

-- Drop policies
DROP POLICY IF EXISTS "Allow public insert on contacts" ON public.contacts;
DROP POLICY IF EXISTS "Allow service role to read all contacts" ON public.contacts;
DROP POLICY IF EXISTS "Allow authenticated users to read contacts" ON public.contacts;

-- Drop table
DROP TABLE IF EXISTS public.contacts;
```

## 📝 Notes

- Migration files are named with timestamp prefix for ordering
- Always test migrations in a development environment first
- Keep migrations idempotent (use `IF NOT EXISTS` where possible)
- Document any breaking changes in migration comments
