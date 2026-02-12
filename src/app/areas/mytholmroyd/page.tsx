import Link from 'next/link';

export const metadata = {
  title: 'Home Care in Mytholmroyd',
  description:
    'Home care and support in Mytholmroyd. Flexible visits, companionship, personal care, and help at home. Contact Libra Support Services today.',
};

export default function MytholmroydAreaPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">Home care in Mytholmroyd</h1>
      <p className="text-lg text-gray-700 mb-6">
        Libra Support Services supports families in Mytholmroyd with kind, consistent care that helps people stay comfortable and independent at home.
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
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded hover:bg-primary-dark transition"
          >
            Contact us
          </Link>
          <a
            href="tel:01706817672"
            className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded hover:bg-white transition"
          >
            Call: 01706 817 672
          </a>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-8">
        Also covered: <Link href="/areas/todmorden" className="underline">Todmorden</Link> and{' '}
        <Link href="/areas/hebden-bridge" className="underline">Hebden Bridge</Link>.
      </p>
    </div>
  );
}
