# Dynamic Jobs Setup Guide

## ✅ What Has Been Created

1. **Created `/app/jobs/[id]/page.tsx`**
   - Dynamic job detail page that matches the openings page design
   - Fetches job data from Supabase based on job ID
   - Displays Responsibilities, Qualifications, and Location in tabs
   - Includes application form that pre-fills the job title
   - Only shows published jobs

2. **Updated `/app/admin/careers/page.tsx`**
   - Added `responsibilities` and `qualifications` fields
   - Admins can enter bullet points line by line
   - Data is stored as JSON arrays in the database
   - Links in admin table now point to `/jobs/[id]` instead of `/openings`

3. **Created `/supabase-careers-table-update.sql`**
   - SQL script to add `responsibilities` and `qualifications` columns to the careers table

## 🚀 Setup Instructions

### Step 1: Update Database Table

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `supabase-careers-table-update.sql`
4. Click **Run** to execute the SQL script

This will add two new columns:
- `responsibilities` (TEXT) - Stores JSON array of responsibility bullet points
- `qualifications` (TEXT) - Stores JSON array of qualification bullet points

### Step 2: Create Jobs in Admin Panel

1. Log in to the admin panel at `/admin`
2. Navigate to **Careers** section
3. Click **Post New Career**
4. Fill in the form:
   - **Job Title**: e.g., "Sr. Quality Assurance Engineer"
   - **Department**: e.g., "Quality Assurance"
   - **Location**: e.g., "Chennai"
   - **Job Type**: Select from dropdown
   - **Job Description**: General description
   - **Requirements**: General requirements text
   - **Responsibilities**: Enter each responsibility on a new line:
     ```
     Design, develop and maintain test plans, test cases and test data for both manual and automated testing.
     Lead and execute end-to-end functional, regression, integration, and exploratory testing.
     Develop and maintain automation scripts using tools like Selenium, Postman, or similar frameworks.
     ```
   - **Qualifications**: Enter each qualification on a new line:
     ```
     Bachelor's degree in Computer Science, Information Technology, or a related field.
     8+ years of experience in software testing, with strong expertise in manual testing.
     Strong understanding of SDLC, STLC, and defect management processes.
     ```
   - **Published**: Check to make the job visible on the website
5. Click **Create Posting**

### Step 3: Access Dynamic Job Pages

Once a job is created and published:

1. The job will be accessible at `/jobs/[job-id]`
2. You can find the job ID in the admin panel (it's the UUID in the table)
3. Or click the job title in the admin table to open it in a new tab

### Step 4: Link from Careers Page (Optional)

If you want to display a list of jobs on the careers page:

1. Update `/app/careers/page.tsx` to fetch jobs from Supabase
2. Display them in a list/grid format
3. Link each job to `/jobs/[id]`

Example code to add to careers page:

```tsx
'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'
import Link from 'next/link'

// Inside your component:
const [jobs, setJobs] = useState([])
const supabase = createClient()

useEffect(() => {
  async function fetchJobs() {
    const { data } = await supabase
      .from('careers')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
    setJobs(data || [])
  }
  fetchJobs()
}, [])

// Then render:
{jobs.map(job => (
  <Link key={job.id} href={`/jobs/${job.id}`}>
    {job.title} - {job.location}
  </Link>
))}
```

## 📋 Data Format

### Responsibilities and Qualifications Storage

The data is stored as JSON strings in the database:

**Responsibilities Example:**
```json
[
  "Design, develop and maintain test plans, test cases and test data for both manual and automated testing.",
  "Lead and execute end-to-end functional, regression, integration, and exploratory testing.",
  "Develop and maintain automation scripts using tools like Selenium, Postman, or similar frameworks."
]
```

**Qualifications Example:**
```json
[
  "Bachelor's degree in Computer Science, Information Technology, or a related field.",
  "8+ years of experience in software testing, with strong expertise in manual testing and solid exposure to test automation.",
  "Strong understanding of SDLC, STLC, and defect management processes."
]
```

### Admin Form Input

In the admin panel, you enter them as plain text, one per line:
```
Design, develop and maintain test plans
Lead and execute end-to-end functional testing
Develop and maintain automation scripts
```

The system automatically converts this to a JSON array when saving.

## 🎨 Features

### Dynamic Job Page Features:
- ✅ Fetches job data from database
- ✅ Displays job title as page header
- ✅ Three tabs: Responsibilities, Qualifications, Location
- ✅ Bullet points with icons (matching openings page design)
- ✅ Application form pre-filled with job title
- ✅ Only shows published jobs
- ✅ Redirects to careers page if job not found

### Admin Panel Features:
- ✅ Add responsibilities and qualifications as line-separated text
- ✅ Automatic conversion to JSON arrays
- ✅ Edit existing jobs with parsed data
- ✅ View job link in admin table
- ✅ All existing features (publish, delete, etc.) still work

## 🔗 URL Structure

- **Job Detail Page**: `/jobs/[job-id]`
  - Example: `/jobs/123e4567-e89b-12d3-a456-426614174000`
  
- **Admin Panel**: `/admin/careers`
  - View all jobs
  - Click job title to open job page in new tab

## 🐛 Troubleshooting

### Job page shows "Job not found":
1. Check if the job ID is correct
2. Verify the job is published (`published = true`)
3. Check browser console for errors
4. Verify RLS policies allow public SELECT for published jobs

### Responsibilities/Qualifications not showing:
1. Check if data is stored correctly in database
2. Verify JSON format is valid
3. Check browser console for parsing errors
4. Ensure data is not null or empty

### Admin form not saving:
1. Check browser console for errors
2. Verify you're logged in as admin
3. Check RLS policies allow authenticated users to INSERT/UPDATE
4. Verify all required fields are filled

## 📝 Notes

- Each line in the admin form becomes a separate bullet point
- Empty lines are automatically filtered out
- The job page design exactly matches the openings page
- Application form automatically uses the job title
- Jobs must be published to be visible on the public site
