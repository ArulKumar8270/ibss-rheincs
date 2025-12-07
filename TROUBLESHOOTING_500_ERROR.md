# 🔧 Troubleshooting 500 Internal Server Error

## 🚨 Issue: Contact Form Returns 500 Error

If you're seeing a **500 Internal Server Error** when submitting the contact form, follow these steps:

---

## ✅ Step 1: Check Database Table Exists

**The most common cause is the database table hasn't been created yet!**

### Run This Diagnostic:

1. Visit: **http://localhost:3000/api/contact/check**

2. This will tell you:
   - ✅ If environment variables are set
   - ✅ If the table exists
   - ✅ If there are permission issues
   - ✅ Specific error codes and solutions

### If Table Doesn't Exist:

1. Go to Supabase SQL Editor:
   ```
   https://zanyplwqnhqtpulywvgm.supabase.co/project/_/sql
   ```

2. Open the file: **`supabase-table-setup.sql`**

3. **Copy ALL the SQL code**

4. **Paste into Supabase SQL Editor**

5. Click **"RUN"** button

6. You should see: ✅ Success

7. Verify in Table Editor:
   ```
   https://zanyplwqnhqtpulywvgm.supabase.co/project/_/editor
   ```

---

## ✅ Step 2: Check Environment Variables

Make sure `.env.local` exists in your project root:

```bash
# Check if file exists
cat .env.local
```

Should contain:
```env
NEXT_PUBLIC_SUPABASE_URL=https://zanyplwqnhqtpulywvgm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=sb_secret_Hde6vXYQVOMDanaPA0q6Xw_JAdlV-9i
```

**IMPORTANT:** After adding/updating `.env.local`:
1. **Stop the dev server** (Ctrl+C)
2. **Restart it**: `npm run dev`

---

## ✅ Step 3: Check Server Logs

Look at your terminal where `npm run dev` is running. You should see error messages like:

```
Supabase error: { code: '42P01', message: 'relation "contacts" does not exist' }
```

This tells you exactly what's wrong!

---

## ✅ Step 4: Common Error Codes & Solutions

### Error Code: `42P01` - Table Not Found
**Solution:** Run the SQL setup script in Supabase

### Error Code: `42501` - Permission Denied
**Solution:** Check Row Level Security policies:
1. Go to Supabase Table Editor
2. Click on `contacts` table
3. Go to "Policies" tab
4. Make sure "Allow public insert" policy exists

### Error Code: `08006` - Connection Failed
**Solution:** 
- Check Supabase URL is correct
- Check internet connection
- Verify Supabase project is active

### Error: "Missing environment variables"
**Solution:**
- Create `.env.local` file
- Add all required variables
- **Restart dev server**

---

## ✅ Step 5: Test Database Connection

### Option A: Use Diagnostic Endpoint
```
http://localhost:3000/api/contact/check
```

### Option B: Test in Supabase Dashboard
1. Go to: https://zanyplwqnhqtpulywvgm.supabase.co/project/_/editor
2. Click on `contacts` table
3. Try inserting a test row manually
4. If it works, the issue is in the API route
5. If it fails, the issue is with RLS policies

---

## ✅ Step 6: Verify RLS Policies

1. Go to Supabase Table Editor:
   ```
   https://zanyplwqnhqtpulywvgm.supabase.co/project/_/editor
   ```

2. Click on `contacts` table

3. Go to "Policies" tab

4. You should see:
   - ✅ "Allow public insert on contacts" policy
   - ✅ Status: Active

5. If missing, run this SQL:
   ```sql
   CREATE POLICY "Allow public insert on contacts" ON contacts
     FOR INSERT TO public
     WITH CHECK (true);
   ```

---

## 🧪 Quick Test Commands

### Test API Endpoint:
```bash
curl http://localhost:3000/api/contact/check
```

### Test Form Submission:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "countryCode": "+1",
    "phone": "1234567890",
    "email": "test@example.com",
    "companyName": "Test Corp"
  }'
```

---

## 📋 Complete Checklist

- [ ] Database table `contacts` exists in Supabase
- [ ] `.env.local` file exists with correct values
- [ ] Dev server was restarted after creating `.env.local`
- [ ] RLS policies are set correctly
- [ ] Diagnostic endpoint shows success: `/api/contact/check`
- [ ] No errors in server terminal logs
- [ ] Supabase project is active and accessible

---

## 🔍 Debug Steps

1. **Check Diagnostic Endpoint:**
   ```
   http://localhost:3000/api/contact/check
   ```
   This will show you exactly what's wrong!

2. **Check Browser Console:**
   - Open DevTools (F12)
   - Go to "Network" tab
   - Submit the form
   - Click on the failed request
   - Check "Response" tab for error details

3. **Check Server Terminal:**
   - Look for error messages
   - Check for "Supabase error:" logs
   - Note the error code and message

4. **Check Supabase Dashboard:**
   - Verify table exists
   - Check RLS policies
   - Try manual insert

---

## 🆘 Still Not Working?

If you've completed all steps above and still getting 500 error:

1. **Share the diagnostic output:**
   - Visit: http://localhost:3000/api/contact/check
   - Copy the JSON response
   - Share it for debugging

2. **Check server logs:**
   - Copy the error from terminal
   - Share the full error message

3. **Verify Supabase:**
   - Go to: https://zanyplwqnhqtpulywvgm.supabase.co
   - Check if project is active
   - Verify API keys are correct

---

## ✅ Expected Success Response

When everything works, you should see:

**Diagnostic Endpoint:**
```json
{
  "success": true,
  "message": "Database connection successful! ✅",
  "details": {
    "tableExists": true,
    "recordCount": 0,
    "connectionStatus": "OK"
  }
}
```

**Form Submission:**
```json
{
  "success": true,
  "message": "Thank you! Your inquiry has been submitted successfully...",
  "data": [...]
}
```

---

## 🎯 Most Likely Fix

**90% of the time, the issue is:**

1. ❌ Database table doesn't exist
   - **Fix:** Run `supabase-table-setup.sql` in Supabase

2. ❌ Environment variables not loaded
   - **Fix:** Restart dev server after creating `.env.local`

3. ❌ RLS policies blocking insert
   - **Fix:** Create "Allow public insert" policy

**Start with the diagnostic endpoint to identify which one!**

---

## 🔗 Quick Links

- **Diagnostic:** http://localhost:3000/api/contact/check
- **Contact Form:** http://localhost:3000/contact
- **Supabase SQL:** https://zanyplwqnhqtpulywvgm.supabase.co/project/_/sql
- **Supabase Tables:** https://zanyplwqnhqtpulywvgm.supabase.co/project/_/editor
