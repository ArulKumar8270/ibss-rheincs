/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' because API routes require server-side rendering
  // If you need static export, you'll need to use Supabase Edge Functions or external API
  // output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
