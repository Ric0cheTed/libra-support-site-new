import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import CqcRatingCard from "@/components/sections/CqcRatingCard";

export const metadata = {
  title: "Care Fees | Libra Support Services",
  description:
    "Transparent care fees for Libra Support Services, including urban and rural hourly rates and what's included.",
};

const URBAN_RATE = 24.28;
const RURAL_RATE = 25.46;

type ExampleRow = {
  label: string;
  hours: number;
};

const EXAMPLES: ExampleRow[] = [
  { label: "30 minutes", hours: 0.5 },
  { label: "45 minutes", hours: 0.75 },
  { label: "1 hour", hours: 1 },
  { label: "2 hours", hours: 2 },
];

function money(value: number) {
  return `£${value.toFixed(2)}`;
}

export default function CareFeesPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="max-w-4xl mx-auto py-16 px-4 space-y-10">
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold">Our Care Fees</h1>
          <p className="text-lg text-gray-700">
            We offer clear, transparent pricing with no hidden costs.
          </p>
          <p className="text-sm text-gray-600">
            Rural rates reflect additional travel time and fuel costs, ensuring reliable visits and fair pay for carers.
          </p>
        </header>

        {/* Rates */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Hourly Rate (Urban)</h2>
            <p className="text-3xl font-bold text-primary">{money(URBAN_RATE)}</p>
            <p className="text-gray-600 mt-2">Per hour – Urban areas</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Hourly Rate (Rural)</h2>
            <p className="text-3xl font-bold text-primary">{money(RURAL_RATE)}</p>
            <p className="text-gray-600 mt-2">Per hour – Rural areas</p>
          </div>
        </section>

        {/* Examples */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Typical Visit Costs (Examples)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4">Visit length</th>
                  <th className="py-3 pr-4">Urban</th>
                  <th className="py-3">Rural</th>
                </tr>
              </thead>
              <tbody>
                {EXAMPLES.map((row) => (
                  <tr key={row.label} className="border-b last:border-b-0">
                    <td className="py-3 pr-4 text-gray-800">{row.label}</td>
                    <td className="py-3 pr-4 text-gray-800">{money(URBAN_RATE * row.hours)}</td>
                    <td className="py-3 text-gray-800">{money(RURAL_RATE * row.hours)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            These examples are for guidance only. We’ll confirm your exact care plan and visit schedule during a free needs assessment.
          </p>
        </section>

        {/* What's included */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-4">What’s Included</h2>
          <p className="text-gray-700 mb-4">Our rates include:</p>
          <ul className="space-y-2 text-gray-800">
            <li>✔ CQC-regulated care</li>
            <li>✔ Trained, DBS-checked care staff</li>
            <li>✔ Managed rotas and continuity of care</li>
            <li>✔ Cover for sickness and holidays</li>
            <li>✔ Medication support and care planning</li>
            <li>✔ Management oversight and on-call support</li>
          </ul>
          <p className="text-gray-700 mt-5">
            No extra charges for administration, emergency cover, or compliance.
          </p>
        </section>

        {/* Talk to us */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Talk to Us</h2>
          <p className="text-gray-700 mb-6">
            If you’d like to discuss your care needs or funding options, we’re happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01706817672"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark"
            >
              Call: 01706 817 672
            </a>
            <a
              href="mailto:nicola@librasupport.co.uk"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-primary rounded hover:bg-accent"
            >
              Email Nicola
            </a>
          </div>
        </section>

        {/* CQC widget */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <h2 className="text-2xl font-bold mb-3">CQC Rating</h2>
          <p className="text-gray-700 mb-6">
            Official Care Quality Commission rating widget for Libra Support Services.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-md border border-gray-200 rounded-lg bg-gray-50 p-4">
              <CqcRatingCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
