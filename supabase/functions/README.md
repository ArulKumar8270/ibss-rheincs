# Supabase Edge Functions

## send-contact-email

**URL (this project):** `https://fltdymhjpiwnwltazqse.supabase.co/functions/v1/send-contact-email`

Sends email via **Microsoft Graph API** (OAuth2 client credentials + certificate). The app calls `supabase.functions.invoke('send-contact-email', { body: { channel, ... } })`.

Channels:

- **contact** – Contact form (user + admin)
- **collaterals** – Collaterals request (user + admin)
- **job-application** – Job application (applicant + admin)
- **test** – Test email to a single address

### Deploy to Supabase

Deploy to your linked project (or specify `--project-ref`):

```bash
supabase functions deploy send-contact-email --project-ref fltdymhjpiwnwltazqse
```

You may be prompted for your database password, or use `SUPABASE_ACCESS_TOKEN`.

### Secrets: set in Supabase (required)

The function reads secrets from **Supabase Edge Function secrets only** (not from your app’s `.env`). Set them in the Dashboard for the project that runs the function.

**Dashboard**

1. Open: **Supabase Dashboard** → your project → **Edge Functions** → **send-contact-email** → **Secrets** (or **Settings**).
2. Add each secret below. For `PRIVATE_KEY`, paste the full PEM (including `-----BEGIN PRIVATE KEY-----` / `-----END PRIVATE KEY-----`); newlines can be real or `\n`.

**If your key is in a .pfx file**

The function needs the **private key in PEM format**, not the .pfx file. Extract it with OpenSSL (you will be prompted for the .pfx password):

```bash
openssl pkcs12 -in "path/to/your.pfx" -nocerts -nodes -out private-key.pem
```

Then open `private-key.pem`, copy the entire contents (including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`), and paste into the `PRIVATE_KEY` secret in Supabase. Do **not** put the .pfx file in `public/` or commit it—add `*.pfx` to `.gitignore` and store the file outside the repo.

**CLI**

```bash
# Example (replace with your values)
supabase secrets set CLIENT_ID=your-azure-app-client-id --project-ref fltdymhjpiwnwltazqse
supabase secrets set TENANT_ID=your-azure-tenant-id --project-ref fltdymhjpiwnwltazqse
supabase secrets set PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
MIIEvgIBA...
-----END PRIVATE KEY-----" --project-ref fltdymhjpiwnwltazqse
```

**Secrets reference**

| Secret | Required | Description |
|--------|----------|-------------|
| `CLIENT_ID` | Yes | Azure AD app (client) ID |
| `TENANT_ID` | Yes | Azure AD tenant ID |
| `PRIVATE_KEY` | Yes | PEM private key (certificate auth for Graph) |
| `CERT_THUMBPRINT` | No | Certificate thumbprint (hex, 40 chars). When set, added to JWT as `x5t` to match MSAL clientCertificate.thumbprint. |
| `FROM_USER` | No | Mailbox to send as (default: `noreply@rheincs.com`); must have SendAs in Exchange |
| `FROM_NAME` | No | Sender display name (default: RheinBrücke) |
| `ADMIN_EMAIL` | No | Contact form admin (default: marketing@rheincs.com) |
| `COLLATERALS_ADMIN_EMAIL` | No | Collaterals admin (default: same as ADMIN_EMAIL) |
| `JOB_APPLICATION_ADMIN_EMAIL` | No | Job applications admin (default: careers@rheincs.com) |

**Where to see the certificate thumbprint**

- **Azure Portal**: [Azure AD](https://portal.azure.com) → **App registrations** → your app → **Certificates & secrets**. After you upload a certificate, the **Thumbprint** column shows it (hex string, no colons).
- **From your .pfx locally** (SHA-1 fingerprint; remove colons to match Azure):
  ```bash
  openssl pkcs12 -in "path/to/your.pfx" -clcerts -nokeys -out cert.pem
  openssl x509 -in cert.pem -fingerprint -sha1 -noout
  ```
  Example output: `SHA1 Fingerprint=AA:BB:CC:...` → use `AABBCC...` (no colons) in Azure or as `CERT_THUMBPRINT` if needed.

**Azure setup**

- App registration with a **certificate** (upload the public key or .cer from your .pfx).
- **API permissions**: Microsoft Graph → Application → `Mail.Send` (admin consent).
- The mailbox in `FROM_USER` must have **SendAs** permission in Exchange Online for the app.

### Invoke from the app

The app already uses the same Supabase project (`NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`), so `supabase.functions.invoke` hits this function:

```ts
const supabase = createClient()
const { data, error } = await supabase.functions.invoke('send-contact-email', {
  body: { channel: 'contact', fullName, email, phone, countryCode, companyName, selection, message },
})
```

No email-related env vars are needed in the Next.js app for sending; all secrets live in Supabase.
