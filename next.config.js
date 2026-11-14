const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// Review builds fail closed. Public variables cannot enable the live transport.
// A later, explicitly selected non-Vercel Hostinger build retains the original path.
const onVercel = ['VERCEL', 'VERCEL_ENV', 'VERCEL_PROJECT_ID'].some(key => Object.hasOwn(process.env, key));
const productionSelected = process.env.LIBRA_BUILD_TARGET === 'hostinger-production' && !onVercel;

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  env: { NEXT_PUBLIC_LIBRA_REVIEW_ONLY: productionSelected ? 'false' : 'true' },
  images: {
    // This project is exported as a static site. Disable Next.js image optimisation.
    unoptimized: true,
  },
});

module.exports = nextConfig;
