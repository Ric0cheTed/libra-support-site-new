import Link from 'next/link';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { CallRequestCallbackCta } from '@/components/ui/call-request-callback-cta';
import { MobileStickyCallBar } from '@/components/ui/mobile-sticky-call-bar';
import { absoluteUrl, buildPageMetadata, seo } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Home Care in Mytholmroyd | Libra Support Services',
  description:
    'Home care in Mytholmroyd from Libra Support Services, with person-centred support, companionship, and flexible visits at home.',
  path: '/areas/mytholmroyd',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Home care',
  areaServed: {
    '@type': 'Place',
    name: 'Mytholmroyd',
  },
  provider: {
    '@id': `${seo.siteUrl}/#localbusiness`,
    name: seo.siteName,
    url: seo.siteUrl,
  },
  url: absoluteUrl('/areas/mytholmroyd'),
};

export default function MytholmroydAreaPage() {
  return (
    <>
      <Breadcrumbs />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
      />

      <div className="max-w-4xl mx-auto pb-24 sm:pb-0">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Home care in Mytholmroyd</h1>
        <p className="text-lg text-gray-700 mb-6">
          Libra Support Services supports families in Mytholmroyd with kind, consistent care that helps people stay
          comfortable and independent at home.
        </p>

        <CallRequestCallbackCta className="mb-10" />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Everyday support</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
              <li>Personal care and morning/evening routines</li>
              <li>Meal preparation and light housework</li>
              <li>Companionship and wellbeing checks</li>
              <li>Medication reminders</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Flexible visits</h2>
            <p className="text-gray-700 mt-3">
              We’ll work around your schedule and routines, with support that can increase or reduce as needs change.
            </p>
            <div className="mt-4">
              <Link href="/services" className="underline">
                Explore services and support types
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Speak to our team</h2>
          <p className="text-gray-700 mt-2">
            If you’re exploring care in Mytholmroyd, we’re happy to chat and help you understand your options.
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
          <Link href="/areas/hebden-bridge" className="underline">Hebden Bridge</Link>.
        </p>
      </div>

      <MobileStickyCallBar />
    </>
  );
}