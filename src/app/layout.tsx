import '@/styles/globals.css';

import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Lexend } from 'next/font/google';

import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

import { StructuredDataScript } from '@/components/seo/StructuredDataScript';

import AnalyticsEvents from '@/components/analytics/AnalyticsEvents';
import { OPTIONAL_INTEGRATIONS } from '@/lib/optional-integrations';
import { REVIEW_ONLY } from '@/lib/preview';
import { canonicalUrl, getOrganizationStructuredData, seo } from '@/lib/seo';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  robots: REVIEW_ONLY ? { index: false, follow: false } : undefined,
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.defaultTitle,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.defaultDescription,
  alternates: {
    canonical: canonicalUrl('/'),
  },
  openGraph: {
    type: 'website',
    locale: seo.locale,
    url: canonicalUrl('/'),
    siteName: seo.siteName,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [
      {
        url: seo.defaultImage,
        width: 1200,
        height: 630,
        alt: `${seo.siteName} home care services`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [seo.defaultImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = getOrganizationStructuredData();

  return (
    <html lang="en" className={`${lexend.variable} font-sans`}>
      <body className="min-h-screen flex flex-col bg-background text-gray-900 text-[1.05rem] leading-relaxed">
        <StructuredDataScript data={structuredData} />

        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {REVIEW_ONLY ? <aside aria-label="Website review notice" className="border-b border-primary-200 bg-primary-50 px-4 py-3 text-center text-sm text-primary-900">Website review preview — online enquiries are disabled. No enquiry will be sent.</aside> : null}
        {OPTIONAL_INTEGRATIONS.analytics ? <AnalyticsEvents /> : null}

        <main id="main-content" tabIndex={-1} className="flex-1 px-4 sm:px-6 lg:px-8 py-8">{children}</main>


        <SiteFooter />
        {OPTIONAL_INTEGRATIONS.analytics ? <GoogleAnalytics gaId="G-2VETK5Z1DT" /> : null}
      </body>
    </html>
  );
}
