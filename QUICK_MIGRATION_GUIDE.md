# ⚡ Quick Migration Guide

## 🚀 Run Migration in 3 Steps

### Step 1: Open Supabase SQL Editor

Click this link or copy-paste:
```
https://zanyplwqnhqtpulywvgm.supabase.co/project/_/sql
```

### Step 2: Copy the Migration SQL

**Option A: Use the Helper Script**
```bash
node scripts/run-migration-helper.js
```
This will display the SQL and open the browser for you!

**Option B: Manual Copy**
1. Open file: `supabase/migrations/20241206000000_create_contacts_table.sql`
2. Select ALL (Ctrl+A / Cmd+A)
3. Copy (Ctrl+C / Cmd+C)

### Step 3: Paste and Run

1. In Supabase SQL Editor, paste the SQL
2. Click **"RUN"** button (or press Ctrl+Enter)
3. Wait for ✅ Success message

---

## ✅ Verify Migration Worked

1. Go to Table Editor:
   ```
   https://zanyplwqnhqtpulywvgm.supabase.co/project/_/editor
   ```

2. Look for **"contacts"** table in left sidebar

3. Click on it to see structure:
   - ✅ id (uuid)
   - ✅ full_name (text)
   - ✅ country_code (text)
   - ✅ phone (text)
   - ✅ email (text)
   - ✅ company_name (text)
   - ✅ selection (text)
   - ✅ message (text)
   - ✅ created_at (timestamp)
   - ✅ updated_at (timestamp)

---

## 🧪 Test After Migration

1. **Restart dev server:**
   ```bash
   npm run dev
   ```

2. **Test contact form:**
   - Visit: http://localhost:3000/contact
   - Fill and submit form
   - Should work! ✅

3. **Check admin dashboard:**
   - Visit: http://localhost:3000/admin/contacts
   - See your submission

---

## 📋 Complete Migration SQL

If you need to see the SQL again, it's in:
```
supabase/migrations/20241206000000_create_contacts_table.sql
```

Or run:
```bash
cat supabase/migrations/20241206000000_create_contacts_table.sql
```

---

## 🆘 Troubleshooting

### Error: "relation already exists"
- Table already created
- You can skip or drop table first

### Error: "permission denied"
- Make sure you're logged into Supabase
- Check you have admin access

### Error: "syntax error"
- Make sure you copied the ENTIRE file
- Check for missing semicolons

---

## 🎯 What Gets Created

✅ `contacts` table with all fields
✅ Indexes for performance
✅ Row Level Security enabled
✅ Public insert policy (form submissions)
✅ Admin read policies
✅ Auto-updating timestamps
✅ Proper permissions

---

## ✨ After Migration

Your contact form will:
- ✅ Store submissions in database
- ✅ Show data in admin dashboard
- ✅ Work without errors
- ✅ Be fully functional!

**Run the migration now and test your form!** 🚀
