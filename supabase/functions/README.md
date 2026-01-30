# Supabase Edge Functions

## send-contact-email

**URL (this project):** `https://fltdymhjpiwnwltazqse.supabase.co/functions/v1/send-contact-email`

The app must use the **same** Supabase project: set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` so `supabase.functions.invoke('send-contact-email', ...)` calls this URL with the correct `Authorization: Bearer <anon_key>` header.

Sends email via SendGrid for:

- **contact** – Contact form (user + admin)
- **collaterals** – Collaterals request (user + admin)
- **job-application** – Job application (applicant + admin)
- **test** – Test email to a single address

### Deploy to live project (fltdymhjpiwnwltazqse)

The app uses the **live** Supabase project. Deploy the function there:

```bash
supabase functions deploy send-contact-email --project-ref fltdymhjpiwnwltazqse
```

You will be prompted for your database password (or use `SUPABASE_ACCESS_TOKEN`).  
Set function secrets in the **live** project dashboard: https://supabase.com/dashboard/project/fltdymhjpiwnwltazqse/functions/send-contact-email/settings

### Secrets (required to fix "Email service not configured")

The function reads `SENDGRID_API_KEY` from **Supabase Edge Function secrets** (not from your app’s `.env`). Set them on the **live** project.

**Option A – Dashboard (recommended)**

1. Open: **https://supabase.com/dashboard/project/fltdymhjpiwnwltazqse/functions/send-contact-email/settings**
2. Go to **Edge Function Secrets** (or **Secrets**).
3. Add:
   - **Name:** `SENDGRID_API_KEY`  
     **Value:** your SendGrid API key (starts with `SG.`)
4. (Optional) Add: `FROM_EMAIL`, `FROM_NAME`, `ADMIN_EMAIL`, `COLLATERALS_ADMIN_EMAIL`, `JOB_APPLICATION_ADMIN_EMAIL`.
5. Save. New invocations will use the new secrets.

**Option B – CLI**

```bash
supabase secrets set SENDGRID_API_KEY=SG.your_actual_key_here --project-ref fltdymhjpiwnwltazqse
```

**All supported secrets**

| Secret | Required | Default |
|--------|----------|---------|
| `SENDGRID_API_KEY` | Yes | — |
| `FROM_EMAIL` | No | noreply@rheincs.com |
| `FROM_NAME` | No | RheinBrücke |
| `ADMIN_EMAIL` | No | marketing@rheincs.com |
| `COLLATERALS_ADMIN_EMAIL` | No | same as ADMIN_EMAIL |
| `JOB_APPLICATION_ADMIN_EMAIL` | No | careers@rheincs.com |

### Invoke from the app

```ts
const supabase = createClient()
const { data, error } = await supabase.functions.invoke('send-contact-email', {
  body: { channel: 'contact', fullName, email, phone, countryCode, companyName, selection, message },
})
```
