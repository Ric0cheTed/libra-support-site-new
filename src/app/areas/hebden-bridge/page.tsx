import Link from 'next/link';

export const metadata = {
  title: 'Home Care in Hebden Bridge',
  description:
    'Home care and support in Hebden Bridge. Flexible visits, companionship, personal care, and help at home. Contact Libra Support Services today.',
};

export default function HebdenBridgeAreaPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">Home care in Hebden Bridge</h1>
      <p className="text-lg text-gray-700 mb-6">
        We provide reliable care and support for individuals and families in Hebden Bridge, helping people remain independent at home.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <a
          href="tel:01706817672"
          className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded hover:bg-primary-dark transition"
        >
          Call now: 01706 817 672
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded hover:bg-white transition"
        >
          Request a call back
        </Link>
      </div>

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
        <h2 className="text-2xl font-bold">Next steps</h2>
        <p className="text-gray-700 mt-2">
          Tell us a little about your situation and we’ll recommend the most suitable support.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded hover:bg-primary-dark transition"
          >
            Contact us
          </Link>
          <Link
            href="/areas"
            className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded hover:bg-white transition"
          >
            View all areas
          </Link>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-8">
        Also covered: <Link href="/areas/todmorden" className="underline">Todmorden</Link> and{' '}
        <Link href="/areas/mytholmroyd" className="underline">Mytholmroyd</Link>.
      </p>
    </div>
  );
}
