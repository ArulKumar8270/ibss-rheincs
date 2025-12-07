# 🎛️ Admin Dashboard Setup Guide

## ✅ What Has Been Created

### 1. **Login Page** (`/login`)
- Beautiful login interface
- Supabase authentication
- Redirects to admin dashboard after login

### 2. **Admin Dashboard** (`/admin`)
- Overview with statistics
- Protected by authentication
- Sidebar navigation menu

### 3. **Admin Pages**
- ✅ **Contact Enquiries** (`/admin/contacts`) - View form submissions
- ✅ **Blogs** (`/admin/blogs`) - Create, edit, delete blogs
- ✅ **News & Events** (`/admin/news-events`) - Manage news and events
- ✅ **Careers** (`/admin/careers`) - Manage job postings

### 4. **Database Tables**
- `blogs` - Blog posts
- `news_events` - News articles and events
- `careers` - Job postings

---

## 🚀 Setup Instructions

### Step 1: Enable Authentication in Supabase

1. Go to Supabase Dashboard:
   ```
   https://zanyplwqnhqtpulywvgm.supabase.co
   ```

2. Navigate to **Authentication** → **Providers**

3. Enable **Email** provider:
   - Click on "Email"
   - Toggle "Enable Email provider" to ON
   - Save

4. (Optional) Configure email settings:
   - Go to **Authentication** → **Email Templates**
   - Customize welcome email if needed

### Step 2: Create Database Tables

1. Go to Supabase SQL Editor:
   ```
   https://zanyplwqnhqtpulywvgm.supabase.co/project/_/sql
   ```

2. Open file: `supabase/migrations/create_admin_tables.sql`

3. **Copy ALL the SQL code**

4. **Paste into Supabase SQL Editor**

5. Click **"RUN"**

6. Should see: ✅ Success

### Step 3: Create Your First Admin User

**Option A: Via Supabase Dashboard (Recommended)**

1. Go to **Authentication** → **Users**

2. Click **"Add user"** → **"Create new user"**

3. Fill in:
   - **Email**: your-admin@example.com
   - **Password**: (choose a strong password)
   - **Auto Confirm User**: ✅ Check this

4. Click **"Create user"**

**Option B: Via Sign Up (If enabled)**

1. You can create a sign-up page later
2. For now, use Option A

### Step 4: Test the Login

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Visit login page:**
   ```
   http://localhost:3000/login
   ```

3. **Login with your admin credentials:**
   - Email: (the email you created)
   - Password: (the password you set)

4. **Should redirect to:** `/admin`

---

## 📋 Admin Dashboard Features

### Dashboard Overview (`/admin`)
- Statistics cards for each section
- Quick action buttons
- Total counts for contacts, blogs, news, careers

### Contact Enquiries (`/admin/contacts`)
- View all form submissions
- Search functionality
- Export to CSV
- View details (name, email, phone, company, message)

### Blogs (`/admin/blogs`)
- Create new blog posts
- Edit existing blogs
- Delete blogs
- Publish/Draft toggle
- Fields: Title, Slug, Content, Excerpt, Author, Featured Image

### News & Events (`/admin/news-events`)
- Create news articles
- Create events (with date and location)
- Edit/Delete items
- Publish/Draft toggle
- Type selector (News or Event)

### Careers (`/admin/careers`)
- Post job openings
- Edit/Delete postings
- Fields: Title, Department, Location, Type, Description, Requirements, Salary, Deadline
- Job types: Full-time, Part-time, Contract, Internship

---

## 🔐 Authentication Protection

All admin routes are protected:
- `/admin/*` - Requires authentication
- `/login` - Public (for login)
- Unauthenticated users are redirected to `/login`

### How It Works:
1. User visits `/admin`
2. Layout checks for authentication
3. If not logged in → redirect to `/login`
4. After login → redirect to `/admin`

---

## 🗄️ Database Schema

### `blogs` Table
- `id` (UUID)
- `title` (TEXT)
- `slug` (TEXT, UNIQUE)
- `content` (TEXT)
- `excerpt` (TEXT)
- `author` (TEXT)
- `featured_image` (TEXT)
- `published` (BOOLEAN)
- `created_at`, `updated_at` (TIMESTAMP)

### `news_events` Table
- `id` (UUID)
- `title` (TEXT)
- `slug` (TEXT, UNIQUE)
- `content` (TEXT)
- `excerpt` (TEXT)
- `type` (TEXT: 'news' or 'event')
- `event_date` (TIMESTAMP, nullable)
- `location` (TEXT, nullable)
- `featured_image` (TEXT)
- `published` (BOOLEAN)
- `created_at`, `updated_at` (TIMESTAMP)

### `careers` Table
- `id` (UUID)
- `title` (TEXT)
- `department` (TEXT)
- `location` (TEXT)
- `type` (TEXT: 'full-time', 'part-time', 'contract', 'internship')
- `description` (TEXT)
- `requirements` (TEXT)
- `salary_range` (TEXT, nullable)
- `application_deadline` (DATE, nullable)
- `published` (BOOLEAN)
- `created_at`, `updated_at` (TIMESTAMP)

---

## 🎨 UI Features

### Sidebar Navigation
- Dashboard icon
- Contact Enquiries icon
- Blogs icon
- News & Events icon
- Careers icon
- Logout button

### Responsive Design
- Works on desktop and tablet
- Clean, modern interface
- Color-coded sections

### Status Indicators
- Published/Draft badges
- Type badges (News/Event, Job Type)
- Visual feedback for actions

---

## 🧪 Testing Checklist

- [ ] Authentication enabled in Supabase
- [ ] Database tables created
- [ ] Admin user created
- [ ] Can login at `/login`
- [ ] Redirects to `/admin` after login
- [ ] Dashboard shows statistics
- [ ] Can view contact enquiries
- [ ] Can create/edit/delete blogs
- [ ] Can create/edit/delete news/events
- [ ] Can create/edit/delete careers
- [ ] Logout works correctly
- [ ] Unauthenticated access redirects to login

---

## 🔧 Troubleshooting

### "Cannot read properties of null"
- Make sure authentication is enabled in Supabase
- Check environment variables are set

### "Table doesn't exist"
- Run the migration SQL: `create_admin_tables.sql`
- Verify tables in Supabase Table Editor

### "Permission denied"
- Check RLS policies are created
- Verify user is authenticated

### Login not working
- Check email provider is enabled
- Verify user exists in Supabase Auth
- Check browser console for errors

---

## 📝 Next Steps

### Optional Enhancements:
1. **User Management** - Add user roles and permissions
2. **Image Upload** - Add file upload for featured images
3. **Rich Text Editor** - Add WYSIWYG editor for content
4. **Email Notifications** - Notify on new contact submissions
5. **Analytics** - Add dashboard analytics
6. **Search** - Global search across all content

---

## 🎉 You're All Set!

Your admin dashboard is ready to use!

**Access it at:**
- Login: http://localhost:3000/login
- Dashboard: http://localhost:3000/admin

**Remember:**
1. ✅ Enable authentication in Supabase
2. ✅ Run the database migration
3. ✅ Create an admin user
4. ✅ Login and start managing content!
