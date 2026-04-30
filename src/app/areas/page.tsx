import Link from 'next/link';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { StructuredDataScript } from '@/components/seo/StructuredDataScript';
import { CallRequestCallbackCta } from '@/components/ui/call-request-callback-cta';
import { MobileStickyCallBar } from '@/components/ui/mobile-sticky-call-bar';
import { BUSINESS_PROFILE, formatInlineList } from '@/lib/business-profile';
import { buildPageMetadata, getAreasPageStructuredData } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Areas We Cover',
  description:
    'Explore home care availability across the Todmorden and Burnley branch areas, with local support tailored to each community.',
  path: '/areas',
});

export default function AreasPage() {
  const structuredData = getAreasPageStructuredData();
  const todmordenBranch = BUSINESS_PROFILE.branches.find((branch) => branch.name === 'Todmorden');
  const burnleyBranch = BUSINESS_PROFILE.branches.find((branch) => branch.name === 'Burnley');
  const todmordenCoverage = todmordenBranch?.coverageAreas ?? [
    'Cornholme',
    'Todmorden',
    'Walsden',
    'Hebden Bridge',
    'Mytholmroyd',
  ];
  const burnleyCoverage = burnleyBranch?.coverageAreas ?? [
    'Burnley',
    'Cliviger',
    'Worsthorne',
    'Brunshaw',
  ];

  return (
    <>
      <StructuredDataScript data={structuredData} />
      <Breadcrumbs />
      <div className="max-w-4xl mx-auto pb-24 sm:pb-0">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Areas we cover</h1>
        <p className="text-lg text-gray-700 mb-8">
          Libra Support Services works from active branches in <strong>Todmorden</strong> and{' '}
          <strong>Burnley</strong>, with local coverage split clearly between each branch.
        </p>
        <p className="text-sm text-gray-600 mb-8">
          The Todmorden branch covers {formatInlineList(todmordenCoverage)}, with rural support available where local
          availability allows. The Burnley branch covers {formatInlineList(burnleyCoverage)}.
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
            href="/areas/todmorden"
            className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">Todmorden branch</h2>
            <p className="text-gray-700 mt-1">
              Covers {formatInlineList(todmordenCoverage)}, with rural support available where local availability
              allows.
            </p>
          </Link>

          <Link
            href="/areas/burnley"
            className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">Burnley branch</h2>
            <p className="text-gray-700 mt-1">
              Covers {formatInlineList(burnleyCoverage)}, with a visible office on Red Lion Street for local
              reassurance.
            </p>
          </Link>

          <Link
            href="/areas/todmorden"
            className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">Cornholme and Walsden</h2>
            <p className="text-gray-700 mt-1">
              Local support is guided through the Todmorden branch, alongside Todmorden, Hebden Bridge, Mytholmroyd,
              and rural support enquiries.
            </p>
          </Link>

          <Link
            href="/areas/hebden-bridge"
            className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">Hebden Bridge and Mytholmroyd</h2>
            <p className="text-gray-700 mt-1">
              Hebden Bridge and Mytholmroyd sit under the Todmorden branch coverage.
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

        <div className="mt-10 rounded-xl border border-primary-100 bg-primary-50 p-6">
          <h2 className="text-2xl font-bold">Need help checking the right branch?</h2>
          <p className="text-gray-800 mt-2">
            If your area is rural or close to the edge of one of our branch areas, contact us and we will give clear,
            honest guidance on current availability.
          </p>
        </div>
      </div>

      <MobileStickyCallBar />
    </>
  );
}
