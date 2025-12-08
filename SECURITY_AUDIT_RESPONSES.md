# Security & Infrastructure Audit - Responses

## 1. Tech Stack & Preferred Deployment Stack

### Current Tech Stack:
- **Framework**: Next.js 16.0.3 (React 19.2.0)
- **Language**: TypeScript 5
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage (for file uploads)
- **Styling**: Tailwind CSS 4, Bootstrap, Custom CSS
- **Build**: Static Export (`output: 'export'` in next.config.ts)
- **Deployment**: Currently configured for static site generation

### Preferred Deployment Stack:
- **Static Hosting**: Vercel, Netlify, or Azure Static Web Apps (compatible with static export)
- **Database**: Supabase (managed PostgreSQL)
- **CDN**: Built-in with hosting platform
- **File Storage**: Supabase Storage

**Note**: The app is configured with `output: 'export'` which means it generates static HTML files. This is suitable for static hosting but limits server-side features.

---

## 2. VAPT (Vulnerability Assessment & Penetration Testing)

**Status**: ❌ **NOT CONDUCTED**

**Recommendation**: 
- Conduct VAPT before production deployment
- Use tools like OWASP ZAP, Burp Suite, or engage a security firm
- Test for common vulnerabilities: SQL injection, XSS, CSRF, authentication bypass

---

## 3. Bot Activity Prevention

**Current Status**: ⚠️ **MINIMAL PROTECTION**

**What's Implemented**:
- Basic form validation (client-side)
- Email format validation

**What's Missing**:
- ❌ No reCAPTCHA (mentioned in docs but not implemented)
- ❌ No rate limiting
- ❌ No honeypot fields
- ❌ No IP-based blocking
- ❌ No CAPTCHA on contact form

**Recommendation**:
- Implement Google reCAPTCHA v3 on contact forms
- Add rate limiting (see question 14)
- Implement honeypot fields
- Consider Cloudflare Bot Management

---

## 4. Contact Form Acknowledgment Emails

**Status**: ❌ **NOT IMPLEMENTED**

**Current Behavior**:
- Form submissions are stored in Supabase database
- User sees success message: "Thank you! Your inquiry has been submitted successfully. We will contact you shortly."
- **NO automatic acknowledgment email is sent to the user**

**Code Location**: `app/contact/page.tsx` (lines 30-106)

**Recommendation**:
- Implement email service (see question 5)
- Send acknowledgment email immediately after form submission
- Include submission details and reference number
- Send notification email to admin team

---

## 5. Mail Server Configuration

**Status**: ❌ **NOT CONFIGURED**

**Current State**:
- No email service configured
- No SMTP settings found
- No email sending functionality implemented

**Recommendations** (in order of preference):

1. **Azure Communication Services Email** (Best for Azure PaaS)
   - Native Azure integration
   - Enterprise-grade reliability
   - Good deliverability
   - Pricing: Pay-as-you-go

2. **SendGrid** (Alternative)
   - Easy integration
   - Good API
   - Note: You mentioned preferring something more robust

3. **AWS SES** (Amazon Simple Email Service)
   - Very reliable
   - Cost-effective
   - Good deliverability

4. **Postmark**
   - Excellent deliverability
   - Transactional email focused
   - Good for acknowledgments

5. **Self-hosted SMTP** (if you have infrastructure)
   - Requires mail server setup
   - More control but more maintenance

**Implementation Required**:
- Configure email service in environment variables
- Create email templates for acknowledgments
- Implement email sending in contact form handler
- Set up Supabase Edge Functions or Next.js API routes for email

---

## 6. Content Update & Admin Panel Security

### Content Update:
- **Admin Panel**: Available at `/admin/*` routes
- **Features**: 
  - Blogs management (`/admin/blogs`)
  - News & Events (`/admin/news-events`)
  - Careers (`/admin/careers`)
  - Contact submissions (`/admin/contacts`)

### Admin Panel Security:

**Current Implementation**:
- ✅ Basic authentication via Supabase Auth
- ✅ Protected routes (redirects to `/login` if not authenticated)
- ✅ Session management

**Missing Security Features**:
- ❌ **NO 2FA (Two-Factor Authentication)**
- ❌ **NO IP-based restrictions**
- ❌ **NO role-based access control (RBAC)**
- ❌ **NO audit logging**

**Code Location**: `app/admin/layout.tsx` (lines 19-47)

**Recommendations**:
1. **Enable 2FA**:
   - Supabase supports TOTP-based 2FA
   - Configure in Supabase Dashboard → Authentication → Providers
   - Require 2FA for all admin users

2. **IP Whitelisting**:
   - Implement middleware to check IP addresses
   - Create `middleware.ts` to restrict `/admin/*` routes
   - Maintain whitelist of allowed IPs

3. **Additional Security**:
   - Implement session timeout
   - Add CSRF protection
   - Enable audit logging for admin actions
   - Consider VPN requirement for admin access

---

## 7. Azure PaaS Compatibility

**Status**: ✅ **COMPATIBLE** (with modifications)

**Current Configuration**:
- Next.js static export (`output: 'export'`)
- Client-side Supabase calls
- No server-side API routes (due to static export)

**Azure PaaS Options**:

1. **Azure Static Web Apps** (Recommended for current setup)
   - ✅ Fully compatible with static export
   - ✅ Built-in CDN
   - ✅ Free SSL
   - ✅ Custom domains
   - ✅ Serverless API support (if needed later)

2. **Azure App Service** (If you need server-side features)
   - Requires removing `output: 'export'`
   - Supports Node.js runtime
   - Can use API routes

3. **Azure Container Apps** (For containerized deployment)
   - More complex setup
   - Better for microservices

**Migration Considerations**:
- Current static export works with Azure Static Web Apps
- If you need server-side features, remove static export
- Supabase works from any platform (cloud-agnostic)
- Environment variables need to be configured in Azure

**Recommendation**: Use **Azure Static Web Apps** for current setup, or **Azure App Service** if you need server-side features.

---

## 8. Regular Security Patching

**Status**: ⚠️ **NEEDS ATTENTION**

**Current Dependencies** (from `package.json`):
- Next.js: 16.0.3 (Latest: 15.x - **OUTDATED**)
- React: 19.2.0 (Latest: 19.x - ✅ Current)
- Supabase: @supabase/ssr@0.8.0, @supabase/supabase-js@2.86.2
- Other dependencies: Various versions

**Issues Found**:
- Next.js version appears outdated (16.0.3 vs current 15.x)
- No automated dependency updates configured
- No security scanning in CI/CD

**Recommendations**:
1. **Set up automated dependency updates**:
   - Use Dependabot (GitHub) or Renovate
   - Configure weekly security updates

2. **Regular security audits**:
   ```bash
   npm audit
   npm audit fix
   ```

3. **Update dependencies regularly**:
   - Review and update monthly
   - Test updates in staging environment
   - Keep Next.js and React updated

4. **Monitor for vulnerabilities**:
   - Use Snyk or GitHub Security Advisories
   - Set up alerts for critical vulnerabilities

5. **No plugins used** (Next.js doesn't use WordPress-style plugins)
   - All dependencies are npm packages
   - Same update process applies

---

## 9. DDoS Protection

**Status**: ❌ **NOT CONFIGURED**

**Current State**:
- No DDoS protection at application level
- Relies on hosting provider's basic protection

**Recommendations**:

1. **Cloudflare** (Recommended)
   - Free tier includes basic DDoS protection
   - Advanced protection on paid plans
   - WAF (Web Application Firewall)
   - Rate limiting
   - Bot management

2. **Azure DDoS Protection** (If using Azure)
   - Standard tier: $2,944/month (covers all resources)
   - Basic tier: Free (limited protection)
   - Automatic mitigation

3. **AWS Shield** (If using AWS)
   - Standard: Free
   - Advanced: $3,000/month

4. **Application-Level**:
   - Implement rate limiting (see question 14)
   - Use CDN for static assets
   - Implement request throttling

**Implementation Priority**:
1. Use Cloudflare (free tier) for basic protection
2. Implement rate limiting in application
3. Consider Azure DDoS Protection Standard for production

---

## 10. Data Privacy Compliance (GDPR)

**Status**: ⚠️ **PARTIALLY COMPLIANT**

**What's Implemented**:
- ✅ Row Level Security (RLS) in Supabase
- ✅ Secure data storage (Supabase PostgreSQL)
- ✅ Authentication for admin access

**What's Missing**:
- ❌ **NO Privacy Policy page**
- ❌ **NO Cookie Consent banner**
- ❌ **NO Data Processing Agreement (DPA)**
- ❌ **NO User data export functionality**
- ❌ **NO Right to be forgotten (data deletion)**
- ❌ **NO Data retention policies**
- ❌ **NO Consent management for contact forms**

**GDPR Requirements Checklist**:

1. **Privacy Policy** ❌
   - Must explain what data is collected
   - How it's used
   - User rights

2. **Cookie Consent** ❌
   - Required for EU visitors
   - Must allow opt-out

3. **Data Subject Rights** ❌
   - Right to access
   - Right to rectification
   - Right to erasure
   - Right to data portability

4. **Data Processing Agreement** ❌
   - Required with Supabase (if processing EU data)
   - Supabase offers DPA for enterprise plans

5. **Data Breach Notification** ❌
   - Must notify within 72 hours
   - Need process in place

**Recommendations**:
1. Add Privacy Policy page (`/privacy-policy`)
2. Implement cookie consent banner (use OneTrust, Cookiebot, or custom)
3. Create data export/deletion functionality in admin panel
4. Sign Supabase DPA (if processing EU data)
5. Document data retention policies
6. Add consent checkbox to contact form
7. Implement data anonymization for old records (see question 11)

---

## 11. Data Obfuscation/Masking for Old Data

**Status**: ❌ **NOT IMPLEMENTED**

**Current State**:
- No data obfuscation functionality
- No data masking for old records
- No automatic anonymization

**Recommendations**:

1. **Implement Data Anonymization Function**:
   ```sql
   -- Example: Anonymize contacts older than 2 years
   UPDATE contacts 
   SET 
     full_name = 'Anonymous',
     email = 'anonymous_' || id || '@anonymized.local',
     phone = '***-***-****',
     company_name = 'Anonymous Company'
   WHERE created_at < NOW() - INTERVAL '2 years';
   ```

2. **Create Admin Function**:
   - Add "Anonymize Old Data" button in admin panel
   - Allow selection of date threshold
   - Preview before anonymization

3. **Automated Process**:
   - Set up Supabase Edge Function or cron job
   - Automatically anonymize data after retention period
   - Log anonymization actions

4. **Data Masking for Display**:
   - Mask sensitive data in admin panel (show only last 4 digits)
   - Implement "View Full" with additional authentication

5. **Compliance**:
   - Align with GDPR retention requirements
   - Document anonymization process
   - Maintain audit log

**Implementation Location**: Create new admin page `/admin/data-management` or add to existing admin dashboard.

---

## 12. Secure File Uploads

**Status**: ⚠️ **BASIC VALIDATION ONLY**

**Current Implementation** (in `app/admin/blogs/page.tsx`):
- ✅ File type validation (images only)
- ✅ File size limit (5MB)
- ✅ Upload to Supabase Storage

**What's Missing**:
- ❌ **NO malware scanning**
- ❌ **NO file content validation (only MIME type)**
- ❌ **NO virus scanning**
- ❌ **NO file extension whitelist validation**
- ❌ **NO sanitization of file names**
- ❌ **NO quarantine for suspicious files**

**Security Gaps**:
1. **File Type Validation**: Only checks `file.type` (can be spoofed)
2. **No Content Validation**: Doesn't verify actual file content
3. **No Malware Scanning**: Files uploaded without scanning
4. **File Naming**: Uses timestamp + random (good) but no sanitization

**Recommendations**:

1. **Enhanced File Validation**:
   ```typescript
   // Validate actual file content, not just MIME type
   // Use file-type library to check magic bytes
   import { fileTypeFromBuffer } from 'file-type';
   
   const buffer = await file.arrayBuffer();
   const fileType = await fileTypeFromBuffer(buffer);
   // Verify it's actually an image
   ```

2. **Malware Scanning**:
   - **ClamAV** (open-source, self-hosted)
   - **VirusTotal API** (for small files)
   - **Azure Security Center** (if using Azure)
   - **AWS GuardDuty** (if using AWS)

3. **File Upload Best Practices**:
   - Whitelist specific file extensions
   - Validate file content (magic bytes)
   - Scan for malware before storing
   - Store files outside web root
   - Use unique, sanitized filenames
   - Implement file size limits per type
   - Consider image processing/optimization

4. **Supabase Storage Security**:
   - Configure bucket policies
   - Set up CORS restrictions
   - Enable virus scanning (if available)
   - Use signed URLs for access

**Implementation Priority**:
1. Add file content validation (magic bytes)
2. Implement malware scanning service
3. Add file name sanitization
4. Configure Supabase Storage security policies

---

## 13. Security Headers

**Status**: ❌ **NOT IMPLEMENTED**

**Current State**:
- No security headers configured
- No Content Security Policy (CSP)
- No security headers in `next.config.ts` or `app/layout.tsx`

**Missing Headers**:
- ❌ Content-Security-Policy (CSP)
- ❌ X-Frame-Options
- ❌ X-Content-Type-Options
- ❌ Strict-Transport-Security (HSTS)
- ❌ Referrer-Policy
- ❌ Permissions-Policy
- ❌ X-XSS-Protection

**Recommendations**:

1. **Add to `next.config.ts`**:
   ```typescript
   const nextConfig = {
     async headers() {
       return [
         {
           source: '/:path*',
           headers: [
             {
               key: 'X-DNS-Prefetch-Control',
               value: 'on'
             },
             {
               key: 'Strict-Transport-Security',
               value: 'max-age=63072000; includeSubDomains; preload'
             },
             {
               key: 'X-Frame-Options',
               value: 'SAMEORIGIN'
             },
             {
               key: 'X-Content-Type-Options',
               value: 'nosniff'
             },
             {
               key: 'X-XSS-Protection',
               value: '1; mode=block'
             },
             {
               key: 'Referrer-Policy',
               value: 'origin-when-cross-origin'
             },
             {
               key: 'Permissions-Policy',
               value: 'camera=(), microphone=(), geolocation=()'
             },
             {
               key: 'Content-Security-Policy',
               value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://use.typekit.net https://fonts.cdnfonts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://use.typekit.net https://fonts.cdnfonts.com; font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com data:; img-src 'self' data: https:; connect-src 'self' https://*.supabase.co;"
             }
           ]
         }
       ]
     }
   }
   ```

2. **CSP Considerations**:
   - Current site uses many external CDNs (fonts, scripts)
   - Need to carefully configure CSP to allow necessary resources
   - Consider moving to self-hosted assets for better security

3. **Testing**:
   - Use securityheaders.com to test
   - Verify CSP doesn't break functionality
   - Test in staging before production

**Note**: With `output: 'export'`, headers need to be configured at hosting level (Vercel, Netlify, Azure Static Web Apps) or via `_headers` file.

---

## 14. Rate Limiting

**Status**: ❌ **NOT IMPLEMENTED**

**Current State**:
- No rate limiting on contact form
- No rate limiting on API endpoints
- No protection against brute force attacks
- No protection against form spam

**Recommendations**:

1. **Application-Level Rate Limiting**:

   **Option A: Next.js Middleware** (if not using static export):
   ```typescript
   // middleware.ts
   import { NextResponse } from 'next/server'
   import type { NextRequest } from 'next/server'
   
   // Simple in-memory store (use Redis in production)
   const rateLimitMap = new Map()
   
   export function middleware(request: NextRequest) {
     const ip = request.ip || 'unknown'
     const limit = 10 // requests
     const window = 60000 // 1 minute
     
     const key = `${ip}:${request.nextUrl.pathname}`
     const now = Date.now()
     const windowStart = now - window
     
     const requests = rateLimitMap.get(key) || []
     const validRequests = requests.filter((time: number) => time > windowStart)
     
     if (validRequests.length >= limit) {
       return new NextResponse('Too Many Requests', { status: 429 })
     }
     
     validRequests.push(now)
     rateLimitMap.set(key, validRequests)
     
     return NextResponse.next()
   }
   
   export const config = {
     matcher: '/api/:path*'
   }
   ```

   **Option B: Supabase Rate Limiting**:
   - Use Supabase Edge Functions with rate limiting
   - Configure in Supabase dashboard

2. **Third-Party Solutions**:
   - **Upstash Redis** (serverless Redis for rate limiting)
   - **Vercel Edge Config** (if using Vercel)
   - **Cloudflare Rate Limiting** (if using Cloudflare)

3. **Contact Form Specific**:
   - Limit submissions per IP: 5 per hour
   - Limit submissions per email: 3 per day
   - Implement exponential backoff

4. **Admin Login Protection**:
   - Limit login attempts: 5 per 15 minutes
   - Implement account lockout
   - Add CAPTCHA after failed attempts

**Implementation Priority**:
1. Add rate limiting to contact form
2. Add rate limiting to admin login
3. Implement IP-based blocking for repeated violations
4. Add monitoring and alerting

---

## 15. Old Website Server Decommissioning

**Status**: ⚠️ **REQUIRES PLANNING**

**Recommendation Process**:

1. **Pre-Decommission Checklist**:
   - ✅ Verify new site is fully functional
   - ✅ Confirm all data migrated
   - ✅ Test all critical functionality
   - ✅ Update DNS records
   - ✅ Monitor new site for issues (1-2 weeks)

2. **Data Backup**:
   - Create full backup of old server
   - Export all databases
   - Download all files
   - Store backups securely (retain for 6-12 months)

3. **DNS Transition**:
   - Update DNS to point to new hosting
   - Set TTL to low value (300 seconds) before change
   - Monitor DNS propagation
   - Keep old server running during transition (1-2 weeks)

4. **Traffic Monitoring**:
   - Monitor for any traffic still hitting old server
   - Check analytics for any missed pages
   - Verify no critical links pointing to old server

5. **Decommission Steps**:
   - **Week 1-2**: Keep old server running, monitor
   - **Week 3**: Put old server in maintenance mode (redirect to new site)
   - **Week 4**: Take final backup, shut down server
   - **Month 2-3**: Delete server resources (after confirming no issues)

6. **Security Considerations**:
   - Remove old server from monitoring
   - Revoke old server credentials
   - Update firewall rules
   - Remove from inventory
   - Document decommission date

7. **Compliance**:
   - Document data retention period
   - Ensure backups are accessible if needed
   - Update disaster recovery plans

**Timeline Recommendation**:
- **Immediate**: Start monitoring new site
- **Week 1-2**: Keep old server as backup
- **Week 3**: Maintenance mode (redirects)
- **Week 4**: Final backup and shutdown
- **Month 2-3**: Complete decommission

---

## Summary & Priority Actions

### Critical (Do Before Production):
1. ✅ Implement security headers (CSP, HSTS, etc.)
2. ✅ Add rate limiting to contact form
3. ✅ Enable 2FA for admin panel
4. ✅ Implement email acknowledgment system
5. ✅ Add reCAPTCHA to contact form
6. ✅ Conduct VAPT

### High Priority:
7. ✅ GDPR compliance (Privacy Policy, Cookie Consent)
8. ✅ Enhanced file upload security (malware scanning)
9. ✅ DDoS protection (Cloudflare)
10. ✅ IP whitelisting for admin panel

### Medium Priority:
11. ✅ Data obfuscation functionality
12. ✅ Security dependency updates
13. ✅ Audit logging for admin actions
14. ✅ Old server decommission planning

### Low Priority:
15. ✅ Advanced bot protection
16. ✅ Enhanced monitoring and alerting

---

**Document Generated**: Based on codebase analysis
**Last Updated**: Current date
**Next Review**: After implementing critical items
