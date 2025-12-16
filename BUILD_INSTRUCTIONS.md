# Build Instructions for Case Study Details

## Issue: 404 Errors for Case Study Details Pages

When building for production with static export, all dynamic routes must be generated at build time.

### Solution

1. **Ensure Environment Variables are Set During Build:**
   ```bash
   export NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   export NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

2. **Build the Application:**
   ```bash
   npm run build
   ```

3. **Verify Generated Pages:**
   After building, check the `.next/static` directory to see which case study pages were generated.

### Important Notes

- **All case study IDs must exist in the database at build time** for their pages to be generated
- If a new case study is added after the build, you need to rebuild the application
- The URL format should include a trailing slash: `/Case-study-details/[id]/` (due to `trailingSlash: true`)

### Troubleshooting

If you're getting 404 errors for specific case study IDs:

1. Check if the case study exists in the database and is published
2. Verify the build logs show the ID was included in `generateStaticParams`
3. Ensure the URL includes a trailing slash
4. Rebuild the application after adding new case studies

### Alternative Solution (If Rebuilding is Not Possible)

If you can't rebuild frequently, consider:
- Using a server-side rendering setup instead of static export
- Implementing a catch-all route that fetches data client-side (limited support in static export)
- Using a different routing strategy
