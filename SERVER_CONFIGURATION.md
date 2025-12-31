# Server Configuration for Dynamic Routes

## Problem
With Next.js static export, routes that weren't generated at build time return 404. The custom `404.html` file contains client-side code to handle these routes, but the server needs to be configured to serve it.

## Solution

### For Apache Servers
Add this to your `.htaccess` file (already created in the root):

```apache
ErrorDocument 404 /404.html
```

### For Nginx Servers
Add this to your server block (see `nginx.conf` for full example):

```nginx
error_page 404 /404.html;
location / {
    try_files $uri $uri/ $uri.html /404.html;
}
```

### For Vercel
Vercel automatically handles this - no configuration needed.

### For Netlify
Netlify automatically serves `404.html` for 404 errors - no configuration needed.

### For Other Static Hosts
Ensure your hosting provider is configured to:
1. Serve `404.html` for all unmatched routes
2. Return HTTP 200 (not 404) when serving `404.html` (optional but recommended)

## How It Works

1. User visits `/blog-details/new-slug/`
2. Server doesn't find the static file
3. Server serves `404.html` (from `app/not-found.tsx`)
4. The `404.html` page reads the URL from `window.location.pathname`
5. It detects it's a blog detail route
6. It renders `BlogDetailsClient` which fetches from Supabase
7. The page displays the content

## Testing

After configuring your server:
1. Create a new blog post
2. Visit its detail page URL
3. It should load and fetch from the database

