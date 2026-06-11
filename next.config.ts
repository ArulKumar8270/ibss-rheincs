/** @type {import('next').NextConfig} */
let nextConfig = {
  // Static export enabled - using client-side Supabase calls instead of API routes
  output: 'export', // Commented out for development mode
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

// Only add bundle analyzer if it's installed and ANALYZE is true
if (process.env.ANALYZE === 'true') {
  try {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: true,
    });
    nextConfig = withBundleAnalyzer(nextConfig);
  } catch (e) {
    console.log('@next/bundle-analyzer not installed, skipping bundle analysis');
  }
}

module.exports = nextConfig;
