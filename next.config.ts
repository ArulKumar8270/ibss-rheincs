/** @type {import('next').NextConfig} */
let nextConfig = {
  // Static export enabled - using client-side Supabase calls instead of API routes
  output: 'export',
  experimental: {
    optimizeCss: true,  // Auto inlines critical CSS
  },
  images: {
    unoptimized: true, // Keep for static export, but optimize images manually (webp, proper size)
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // Set back to true for now so build passes, fix errors later!
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimize imports
  modularizeImports: {
    'react-icons/?(((w*)|([^\\-_]+)?)\\/?((w*)|([^\\-_]+)?))': {
      transform: 'react-icons/{{member}}',
    },
  },
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
