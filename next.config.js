const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  images: {
    // This project is exported as a static site. Disable Next.js image optimisation.
    unoptimized: true,
  },
});

module.exports = nextConfig;
