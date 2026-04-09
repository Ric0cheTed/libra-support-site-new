import Link from 'next/link';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { absoluteUrl, buildPageMetadata, seo } from '@/lib/seo';
import { CallRequestCallbackCta } from '@/components/ui/call-request-callback-cta';
import { MobileStickyCallBar } from '@/components/ui/mobile-sticky-call-bar';

export const metadata = buildPageMetadata({
  title: 'Home Care in Hebden Bridge | Libra Support Services',
  description:
    'Home care in Hebden Bridge from Libra Support Services, with flexible visits, companionship, and practical support for daily life.',
  path: '/areas/hebden-bridge',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Home care',
  areaServed: {
    '@type': 'Place',
    name: 'Hebden Bridge',
  },
  provider: {
    '@id': `${seo.siteUrl}/#localbusiness`,
    name: seo.siteName,
    url: seo.siteUrl,
  },
  url: absoluteUrl('/areas/hebden-bridge'),
};

export default function HebdenBridgeAreaPage() {
  return (
    <>
      <Breadcrumbs />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
      />

      <div className="max-w-4xl mx-auto pb-24 sm:pb-0">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Home care in Hebden Bridge</h1>
        <p className="text-lg text-gray-700 mb-6">
          We provide reliable care and support for individuals and families in Hebden Bridge, helping people remain
          independent at home.
        </p>

        <CallRequestCallbackCta className="mb-10" />

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">How we can help</h2>
          <p className="text-gray-700 mt-2">
            Support is tailored around routines, preferences, and what matters most day-to-day.
          </p>
          <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
            <li>Personal care and daily living support</li>
            <li>Companionship and wellbeing check-ins</li>
            <li>Meal preparation and medication reminders</li>
            <li>Respite support for families and carers</li>
          </ul>
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Talk to us about care in Hebden Bridge</h2>
          <p className="text-gray-700 mt-2">
            Tell us a little about your situation and we’ll recommend the most suitable support.
          </p>
          <CallRequestCallbackCta className="mt-4" />

          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded hover:bg-white transition"
            >
              View our services
            </Link>
            <Link
              href="/care-fees"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded hover:bg-white transition"
            >
              See care fees
            </Link>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-8">
          Also covered: <Link href="/areas/todmorden" className="underline">Todmorden</Link> and{' '}
          <Link href="/areas/mytholmroyd" className="underline">Mytholmroyd</Link>.
        </p>
      </div>

      <MobileStickyCallBar />
    </>
  );
}
