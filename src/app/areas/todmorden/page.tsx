import Link from 'next/link';

export const metadata = {
  title: 'Home Care in Todmorden',
  description:
    'Reliable home care and support in Todmorden. Flexible visits, companionship, personal care, and help at home. Call Libra Support Services today.',
};

export default function TodmordenAreaPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">Home care in Todmorden</h1>
      <p className="text-lg text-gray-700 mb-6">
        Libra Support Services provides compassionate, practical support in Todmorden, helping people stay safe, comfortable, and independent at home.
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
          <h2 className="text-xl font-semibold">Support we can provide</h2>
          <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
            <li>Personal care and daily routines</li>
            <li>Medication reminders and wellbeing checks</li>
            <li>Companionship and community support</li>
            <li>Meal preparation and light household tasks</li>
            <li>Respite support for families</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Why families choose us</h2>
          <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
            <li>Local, responsive service</li>
            <li>Clear communication and consistent care</li>
            <li>Flexible visit times to match routines</li>
            <li>Respectful, person-centred approach</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Talk to us about care in Todmorden</h2>
        <p className="text-gray-700 mt-2">
          If you’re unsure what level of support is needed, we’ll talk it through and help you plan next steps.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a
            href="tel:01706817672"
            className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded hover:bg-primary-dark transition"
          >
            Call: 01706 817 672
          </a>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded hover:bg-white transition"
          >
            View our services
          </Link>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-8">
        Also covered: <Link href="/areas/hebden-bridge" className="underline">Hebden Bridge</Link> and{' '}
        <Link href="/areas/mytholmroyd" className="underline">Mytholmroyd</Link>.
      </p>
    </div>
  );
}
