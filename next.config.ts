/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export enabled - using client-side Supabase calls instead of API routes
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
