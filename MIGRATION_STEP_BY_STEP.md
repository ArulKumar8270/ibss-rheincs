# 🔧 Step-by-Step Migration Guide

## ⚠️ If the full migration failed, run these steps one by one:

---

## ✅ STEP 1: Create the Table

1. Go to: https://zanyplwqnhqtpulywvgm.supabase.co/project/_/sql

2. Copy this SQL:

```sql
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
```

3. Paste and click **RUN**

4. Should see: ✅ Success

---

## ✅ STEP 2: Create Indexes

1. In the same SQL Editor, clear the previous SQL

2. Copy this SQL:

```sql
CREATE INDEX IF NOT EXISTS idx_contacts_email ON public.contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_company_name ON public.contacts(company_name);
```

3. Paste and click **RUN**

---

## ✅ STEP 3: Enable RLS and Policies

1. Clear previous SQL

2. Copy this SQL:

```sql
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on contacts"
  ON public.contacts FOR INSERT TO public
  WITH CHECK (true);

CREATE POLICY "Allow service role to read all contacts"
  ON public.contacts FOR SELECT TO service_role
  USING (true);
```

3. Paste and click **RUN**

---

## ✅ STEP 4: Grant Permissions

1. Clear previous SQL

2. Copy this SQL:

```sql
GRANT INSERT ON public.contacts TO anon;
GRANT INSERT ON public.contacts TO authenticated;
GRANT SELECT ON public.contacts TO service_role;
GRANT SELECT ON public.contacts TO authenticated;
```

3. Paste and click **RUN**

---

## ✅ STEP 5: Verify Table Exists

1. Go to Table Editor:
   ```
   https://zanyplwqnhqtpulywvgm.supabase.co/project/_/editor
   ```

2. Look for **"contacts"** in the left sidebar

3. Click on it to see the structure

---

## 🚀 OR: Use the Simple All-in-One Version

If you prefer to run everything at once, use:

**File:** `supabase/migrations/SIMPLE_ALL_IN_ONE.sql`

This is a simplified version without comments and triggers - just the essentials!

---

## 🧪 Test After Migration

1. **Check diagnostic endpoint:**
   ```
   http://localhost:3000/api/contact/check
   ```
   Should show: `"tableExists": true`

2. **Test form submission:**
   - Visit: http://localhost:3000/contact
   - Fill and submit form
   - Should work! ✅

---

## 🆘 Troubleshooting

### Error: "relation already exists"
- Table already created
- Skip Step 1, continue with other steps

### Error: "permission denied"
- Make sure you're logged into Supabase
- Check you have admin access

### Error: "policy already exists"
- Policy already created
- Skip that policy, continue with others

### Still not working?
- Check each step individually
- Use the SIMPLE_ALL_IN_ONE.sql file
- Verify table exists in Table Editor

---

## 📋 Quick Checklist

- [ ] Step 1: Table created
- [ ] Step 2: Indexes created
- [ ] Step 3: RLS enabled and policies created
- [ ] Step 4: Permissions granted
- [ ] Step 5: Table visible in Table Editor
- [ ] Diagnostic endpoint shows success
- [ ] Form submission works

---

## 🎯 What Each Step Does

- **Step 1**: Creates the table structure
- **Step 2**: Adds indexes for faster queries
- **Step 3**: Enables security and allows form submissions
- **Step 4**: Grants necessary permissions
- **Step 5**: Verification

**Run each step one by one and check for errors!** 🔧
