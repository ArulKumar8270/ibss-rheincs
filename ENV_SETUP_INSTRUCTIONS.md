# Supabase Database Setup Instructions

## ✅ Step 1: Create Environment Variables File

Create a file named `.env.local` in the root of your project with the following content:

```env
# Supabase Configuration (use your project URL and keys from Supabase Dashboard)
NEXT_PUBLIC_SUPABASE_URL=https://fltdymhjpiwnwltazqse.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key-from-dashboard>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key-from-dashboard>
```

The app and Edge Function `send-contact-email` use this URL; the function is invoked at:
`https://fltdymhjpiwnwltazqse.supabase.co/functions/v1/send-contact-email`

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

## 📧 Email via Supabase Edge Function (send-contact-email)

Contact, collaterals, and job-application forms send email via the **Supabase Edge Function** `send-contact-email`, which uses SendGrid. The app calls `supabase.functions.invoke('send-contact-email', { body: { channel, ... } })`.

### Deploy the function

```bash
supabase functions deploy send-contact-email
```

### Set Edge Function secrets (Supabase Dashboard → Edge Functions → send-contact-email → Secrets)

| Secret | Description |
|--------|-------------|
| `SENDGRID_API_KEY` | SendGrid API key (required) |
| `FROM_EMAIL` | Sender email (default: noreply@rheincs.com) |
| `FROM_NAME` | Sender name (default: RheinBrücke) |
| `ADMIN_EMAIL` | Contact form admin (default: marketing@rheincs.com) |
| `COLLATERALS_ADMIN_EMAIL` | Collaterals admin (optional; falls back to ADMIN_EMAIL) |
| `JOB_APPLICATION_ADMIN_EMAIL` | Job applications admin (optional; default: careers@rheincs.com) |

### Request body (channel)

- **contact** – `{ channel: 'contact', fullName, email, phone, countryCode?, companyName, selection?, message? }`
- **collaterals** – `{ channel: 'collaterals', fullName, email, phone, countryCode?, companyName, selection?, message? }`
- **job-application** – `{ channel: 'job-application', fullName, email, phone, countryCode?, jobTitle, resumeUrl?, coveringLetter? }`
- **test** – `{ channel: 'test', testEmail }`

No `.env.local` SendGrid vars are needed for the app; secrets live in Supabase.

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

- Supabase Dashboard: https://fltdymhjpiwnwltazqse.supabase.co
- Supabase Docs: https://supabase.com/docs
- Next.js Integration: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
