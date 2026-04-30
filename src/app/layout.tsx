import '@/styles/globals.css';

import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Lexend } from 'next/font/google';

import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { UtilityTrustStrip } from '@/components/layout/UtilityTrustStrip';
import { StructuredDataScript } from '@/components/seo/StructuredDataScript';
import SocialsButton from '@/components/ui/SocialsButton';
import AnalyticsEvents from '@/components/analytics/AnalyticsEvents';
import { canonicalUrl, getOrganizationStructuredData, seo } from '@/lib/seo';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
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

        <UtilityTrustStrip />
        <SiteHeader />
        <AnalyticsEvents />

        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">{children}</main>

        <SocialsButton />
        <SiteFooter />
        <GoogleAnalytics gaId="G-2VETK5Z1DT" />
      </body>
    </html>
  );
}
