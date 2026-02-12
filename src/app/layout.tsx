import '@/styles/globals.css';

import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import SiteHeader from '@/components/layout/SiteHeader';
import SocialsButton from '@/components/ui/SocialsButton';
import { Footer } from '@/components/layout/footer';
import { getOrganizationStructuredData, seo } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.defaultTitle,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.defaultDescription,
  alternates: {
    canonical: seo.siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: seo.locale,
    url: seo.siteUrl,
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
    <html lang="en" className="font-sans">
      <body className="min-h-screen flex flex-col text-gray-900 bg-gray-50 text-[1.05rem] leading-relaxed">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <SiteHeader />

        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">{children}</main>

        <SocialsButton />
        <Footer />
        <GoogleAnalytics gaId="G-2VETK5Z1DT" />
      </body>
    </html>
  );
}
