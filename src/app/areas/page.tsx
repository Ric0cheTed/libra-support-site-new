import Link from 'next/link';

import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Areas we cover | Libra Support Services',
  description:
    'Home care and support in Todmorden, Hebden Bridge, and Mytholmroyd. Coming soon to Cliviger, Worsthorne, and Pike Hill.',
  path: '/areas',
});

export default function AreasPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">Areas we cover</h1>
      <p className="text-lg text-gray-700 mb-8">
        We provide care and support in <strong>Todmorden</strong>, <strong>Hebden Bridge</strong>, and{' '}
        <strong>Mytholmroyd</strong>.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/areas/todmorden"
          className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">Todmorden</h2>
          <p className="text-gray-700 mt-1">
            Home care in Todmorden and nearby villages — personal care, companionship, and flexible visits.
          </p>
        </Link>

        <Link
          href="/areas/hebden-bridge"
          className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">Hebden Bridge</h2>
          <p className="text-gray-700 mt-1">
            Home care in Hebden Bridge — reliable support to stay independent at home, with visits that fit your routine.
          </p>
        </Link>

        <Link
          href="/areas/mytholmroyd"
          className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">Mytholmroyd</h2>
          <p className="text-gray-700 mt-1">
            Home care in Mytholmroyd — tailored support for families, including respite, daily help, and wellbeing checks.
          </p>
        </Link>
      </div>

      <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-2xl font-bold">Coming soon</h2>
        <p className="text-gray-800 mt-2">
          We’re expanding and will soon offer services in <strong>Cliviger</strong>, <strong>Worsthorne</strong>, and{' '}
          <strong>Pike Hill</strong>.
        </p>
        <p className="text-gray-700 mt-2">
          Want to be first to know?{' '}
          <Link href="/contact" className="underline">
            Send us a message
          </Link>{' '}
          and we’ll keep you updated.
        </p>
      </div>
    </div>
  );
}
