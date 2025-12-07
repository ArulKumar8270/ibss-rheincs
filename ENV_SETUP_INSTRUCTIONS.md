# Supabase Database Setup Instructions

## ✅ Step 1: Create Environment Variables File

Create a file named `.env.local` in the root of your project with the following content:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://zanyplwqnhqtpulywvgm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphbnlwbHdxbmhxdHB1bHl3dmdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5MzIwMzAsImV4cCI6MjA4MDUwODAzMH0.zug8eqoIlw6C9U014ag_vvBrwK9oXjQ8ki_c6JrKgZA
SUPABASE_SERVICE_ROLE_KEY=sb_secret_Hde6vXYQVOMDanaPA0q6Xw_JAdlV-9i
```

**IMPORTANT:** Make sure `.env.local` is in your `.gitignore` file!

## ✅ Step 2: Packages Installed

The following packages have been installed:
- ✅ `@supabase/supabase-js` - Supabase JavaScript client

## ✅ Step 3: Supabase Client Files Created

Three Supabase client files have been created in `/lib`:

1. **`lib/supabase.ts`** - Basic Supabase clients
   - Use for general browser-side operations
   - Includes admin client for server-side operations

2. **`lib/supabase-browser.ts`** - Browser client (Client Components)
   - Use in 'use client' components
   - Handles cookie-based authentication

3. **`lib/supabase-server.ts`** - Server client (Server Components)
   - Use in Server Components
   - Handles server-side cookie authentication

## 📖 Usage Examples

### In Client Components (Browser)

```tsx
'use client'

import { createClient } from '@/lib/supabase-browser'
import { useEffect, useState } from 'react'

export default function MyComponent() {
  const [data, setData] = useState([])
  const supabase = createClient()

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('your_table')
        .select('*')
      
      if (data) setData(data)
    }
    
    fetchData()
  }, [])

  return <div>{/* Your UI */}</div>
}
```

### In Server Components

```tsx
import { createClient } from '@/lib/supabase-server'

export default async function ServerComponent() {
  const supabase = createClient()
  
  const { data } = await supabase
    .from('your_table')
    .select('*')

  return <div>{/* Your UI */}</div>
}
```

### In API Routes

```tsx
import { createClient } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await supabase
    .from('your_table')
    .select('*')

  return Response.json({ data, error })
}
```

## 🔐 Security Notes

1. **NEVER** commit `.env.local` to git
2. **NEVER** expose `SUPABASE_SERVICE_ROLE_KEY` to the client
3. Use the anon key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`) for client-side operations
4. Use the service role key only for server-side admin operations
5. Set up Row Level Security (RLS) policies in your Supabase dashboard

## 🚀 Next Steps

1. ✅ Create `.env.local` file with your credentials
2. ✅ Restart your development server: `npm run dev`
3. 📊 Set up your database tables in Supabase dashboard
4. 🔒 Configure Row Level Security policies
5. 💻 Start using Supabase in your components!

## 🔗 Useful Links

- Supabase Dashboard: https://zanyplwqnhqtpulywvgm.supabase.co
- Supabase Docs: https://supabase.com/docs
- Next.js Integration: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
