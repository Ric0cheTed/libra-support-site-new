import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata = {
  title: "Care Fees | Libra Support Services",
  description:
    "Clear, transparent pricing for home care services. Urban and rural hourly rates, what’s included, and how to get in touch.",
  icons: {
    icon: "/favicon.ico",
  },
};

function formatGBP(amount: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  }).format(amount);
}

type CostRow = {
  label: string;
  minutes: number;
};

const COST_ROWS: CostRow[] = [
  { label: "30 minutes", minutes: 30 },
  { label: "45 minutes", minutes: 45 },
  { label: "1 hour", minutes: 60 },
  { label: "2 hours", minutes: 120 },
];

const URBAN_RATE = 24.28;
const RURAL_RATE = 25.46;

function costFor(rate: number, minutes: number) {
  return (rate / 60) * minutes;
}

export default function CareFeesPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="max-w-4xl mx-auto py-16 px-4 space-y-12">
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold">Our Care Fees</h1>
          <p className="text-lg text-gray-700">
            We offer clear, transparent pricing with no hidden costs.
          </p>
        </header>

        {/* Rates */}
        <section className="bg-white rounded-2xl border border-black/10 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Hourly Rates</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-black/10 p-5">
              <p className="text-sm text-black/60">Urban areas</p>
              <p className="text-3xl font-bold mt-1">{formatGBP(URBAN_RATE)} per hour</p>
            </div>

            <div className="rounded-xl border border-black/10 p-5">
              <p className="text-sm text-black/60">Rural areas</p>
              <p className="text-3xl font-bold mt-1">{formatGBP(RURAL_RATE)} per hour</p>
            </div>
          </div>

          <p className="text-gray-700">
            Rural rates reflect additional travel time and fuel costs, ensuring reliable visits and fair
            pay for carers.
          </p>
        </section>

        {/* Typical costs */}
        <section className="bg-white rounded-2xl border border-black/10 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">Typical Visit Costs</h2>
          <p className="text-gray-700">
            Examples below are based on our hourly rates. Exact costs depend on your care plan and location.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="py-3 pr-4 font-semibold">Visit length</th>
                  <th className="py-3 pr-4 font-semibold">Urban</th>
                  <th className="py-3 pr-4 font-semibold">Rural</th>
                </tr>
              </thead>
              <tbody>
                {COST_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-black/5">
                    <td className="py-3 pr-4">{row.label}</td>
                    <td className="py-3 pr-4">
                      {formatGBP(costFor(URBAN_RATE, row.minutes))}
                    </td>
                    <td className="py-3 pr-4">
                      {formatGBP(costFor(RURAL_RATE, row.minutes))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Included */}
        <section className="bg-white rounded-2xl border border-black/10 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-semibold">What’s Included</h2>
          <p className="text-gray-700">Our rates include:</p>

          <ul className="space-y-2 text-gray-800">
            <li>✔ CQC-regulated care</li>
            <li>✔ Trained, DBS-checked care staff</li>
            <li>✔ Managed rotas and continuity of care</li>
            <li>✔ Cover for sickness and holidays</li>
            <li>✔ Medication support and care planning</li>
            <li>✔ Management oversight and on-call support</li>
          </ul>

          <p className="text-gray-700">
            No extra charges for administration, emergency cover, or compliance.
          </p>
        </section>

        {/* Talk to us */}
        <section className="bg-white rounded-2xl border border-black/10 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">Talk to Us</h2>
          <p className="text-gray-700">
            If you’d like to discuss your care needs or funding options, we’re happy to help.
          </p>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">📞</span>{" "}
              <a className="underline" href="tel:01706817672">
                01706 817 672
              </a>
            </p>
            <p>
              <span className="font-semibold">📧</span>{" "}
              <a className="underline" href="mailto:nicola@librasupport.co.uk">
                nicola@librasupport.co.uk
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
