import Link from 'next/link';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { CallRequestCallbackCta } from '@/components/ui/call-request-callback-cta';
import { MobileStickyCallBar } from '@/components/ui/mobile-sticky-call-bar';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Areas We Cover',
  description:
    'Explore home care availability in Todmorden, Hebden Bridge, Mytholmroyd, and Burnley, with local support tailored to each area.',
  path: '/areas',
});

export default function AreasPage() {
  return (
    <>
      <Breadcrumbs />
      <div className="max-w-4xl mx-auto pb-24 sm:pb-0">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Areas we cover</h1>
        <p className="text-lg text-gray-700 mb-8">
          We provide care and support in <strong>Todmorden</strong>, <strong>Hebden Bridge</strong>, and{' '}
          <strong>Mytholmroyd</strong>, with an active Libra branch now also serving <strong>Burnley</strong>.
        </p>
        <p className="text-sm text-gray-600 mb-8">
          Burnley is now part of our active location story, alongside our established Calderdale coverage and our
          nearby Todmorden base.
        </p>
        <p className="text-sm text-gray-600 mb-8">
          Not sure which support fits?{' '}
          <Link href="/services" className="underline">
            Explore our services
          </Link>{' '}
          or{' '}
          <Link href="/faqs" className="underline">
            read the FAQs
          </Link>
          .
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/areas/burnley"
            className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">Burnley</h2>
            <p className="text-gray-700 mt-1">
              Local home care in Burnley with practical day-to-day support, a visible branch on Red Lion Street, and
              Burnley leadership from Nic.
            </p>
          </Link>

          <Link
            href="/areas/todmorden"
            className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">Todmorden</h2>
            <p className="text-gray-700 mt-1">
              Local home care visits, companionship, and practical day-to-day support across Todmorden.
            </p>
          </Link>

          <Link
            href="/areas/hebden-bridge"
            className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">Hebden Bridge</h2>
            <p className="text-gray-700 mt-1">
              Flexible domiciliary care in Hebden Bridge for personal care, wellbeing checks, and family support.
            </p>
          </Link>

          <Link
            href="/areas/mytholmroyd"
            className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">Mytholmroyd</h2>
            <p className="text-gray-700 mt-1">
              Person-centred home support in Mytholmroyd, with care that adapts as needs change.
            </p>
          </Link>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Need care in your area?</h2>
          <p className="text-gray-700 mt-2">
            Speak with our team about support options and we can arrange a call back at a time that suits you.
          </p>
          <CallRequestCallbackCta className="mt-4" />
        </div>

        <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-bold">Coming soon</h2>
          <p className="text-gray-800 mt-2">
            We're expanding and will soon offer services in <strong>Cliviger</strong>, <strong>Worsthorne</strong>, and{' '}
            <strong>Pike Hill</strong>.
          </p>
          <p className="text-gray-700 mt-2">
            Want to be first to know?{' '}
            <Link href="/contact" className="underline">
              Send us a message
            </Link>{' '}
            and we'll keep you updated.
          </p>
        </div>
      </div>

      <MobileStickyCallBar />
    </>
  );
}
