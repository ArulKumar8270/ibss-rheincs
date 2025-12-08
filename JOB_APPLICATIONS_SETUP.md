# Job Applications Setup Guide

## ✅ What Has Been Created

1. **Updated `/app/openings/page.tsx`**
   - Converted form to React controlled component
   - Added Supabase integration for form submission
   - Added file upload functionality for resumes
   - Added form validation and error handling
   - Added success/error status messages

2. **Created `/app/admin/job-applications/page.tsx`**
   - Admin page to view all job applications
   - Search and filter functionality
   - Status management (pending, reviewed, shortlisted, rejected)
   - View application details modal
   - Download resumes
   - Export to CSV
   - Delete applications

3. **Created `/supabase-job-applications-table.sql`**
   - SQL script to create the `job_applications` table
   - Includes indexes for performance
   - Row Level Security (RLS) policies
   - Automatic timestamp updates

## 🚀 Setup Instructions

### Step 1: Create the Database Table

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `supabase-job-applications-table.sql`
4. Click **Run** to execute the SQL script

### Step 2: Create Storage Bucket for Resumes

1. In Supabase Dashboard, go to **Storage**
2. Click **New bucket**
3. Configure the bucket:
   - **Name**: `resumes`
   - **Public bucket**: ✅ **Enable** (so resumes can be downloaded)
   - **File size limit**: 10 MB (or your preferred limit)
   - **Allowed MIME types**: `application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document`
4. Click **Create bucket**

### Step 3: Set Storage Policies

After creating the bucket, set up policies:

1. Go to **Storage** → **Policies** → Select `resumes` bucket
2. Create a policy for uploads:
   - **Policy name**: `Allow public uploads`
   - **Allowed operation**: INSERT
   - **Target roles**: `public`
   - **Policy definition**: `true`
3. Create a policy for downloads:
   - **Policy name**: `Allow public downloads`
   - **Allowed operation**: SELECT
   - **Target roles**: `public`
   - **Policy definition**: `true`

Alternatively, you can run this SQL in the SQL Editor:

```sql
-- Allow public uploads to resumes bucket
CREATE POLICY "Allow public uploads" ON storage.objects
  FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'resumes');

-- Allow public downloads from resumes bucket
CREATE POLICY "Allow public downloads" ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'resumes');
```

### Step 4: Test the Form

1. Navigate to `/openings` page
2. Fill out the job application form
3. Upload a resume (PDF, DOC, or DOCX)
4. Submit the form
5. You should see a success message and be redirected to `/thanks`

### Step 5: Access Admin Page

1. Make sure you're logged in as an admin user
2. Navigate to `/admin/job-applications`
3. You should see all submitted applications
4. You can:
   - Search applications
   - Filter by status
   - View application details
   - Download resumes
   - Update application status
   - Delete applications
   - Export to CSV

## 📋 Table Structure

The `job_applications` table has the following columns:

- `id` (UUID) - Primary key
- `job_title` (TEXT) - Selected job position
- `full_name` (TEXT) - Applicant's full name
- `email` (TEXT) - Applicant's email address
- `country_code` (TEXT) - Phone country code (default: '+91')
- `phone` (TEXT) - Phone number
- `resume_url` (TEXT) - URL to uploaded resume in Supabase Storage
- `covering_letter` (TEXT) - Optional covering letter message
- `status` (TEXT) - Application status: 'pending', 'reviewed', 'shortlisted', 'rejected'
- `created_at` (TIMESTAMP) - When application was submitted
- `updated_at` (TIMESTAMP) - Last update timestamp

## 🔒 Security

- **Row Level Security (RLS)** is enabled
- Public users can only INSERT (submit applications)
- Authenticated users (admins) can SELECT, UPDATE, and DELETE
- Storage bucket policies control file access

## 🎨 Features

### Form Features:
- ✅ Required field validation
- ✅ Email format validation
- ✅ File upload with type restrictions (PDF, DOC, DOCX)
- ✅ Loading states
- ✅ Success/error messages
- ✅ Auto-redirect after successful submission

### Admin Features:
- ✅ View all applications in a table
- ✅ Search by name, email, job title, or phone
- ✅ Filter by status
- ✅ View detailed application information
- ✅ Download resumes
- ✅ Update application status
- ✅ Delete applications
- ✅ Export to CSV
- ✅ Responsive design

## 🐛 Troubleshooting

### Form submission fails:
1. Check browser console for errors
2. Verify Supabase credentials in `.env.local`
3. Ensure the `job_applications` table exists
4. Check RLS policies allow INSERT for public

### File upload fails:
1. Verify `resumes` bucket exists in Supabase Storage
2. Check bucket policies allow public uploads
3. Verify file size is within limits
4. Check file type is allowed (PDF, DOC, DOCX)

### Admin page shows no data:
1. Ensure you're logged in as an authenticated user
2. Check RLS policies allow SELECT for authenticated users
3. Verify the table has data (check in Supabase dashboard)

### Cannot download resumes:
1. Verify `resumes` bucket is set to public
2. Check storage policies allow SELECT for public/authenticated
3. Verify resume_url is correctly stored in database

## 📝 Notes

- Resume files are stored in Supabase Storage with unique filenames
- The form redirects to `/thanks` page after successful submission
- Application status defaults to 'pending'
- All timestamps are automatically managed by the database
