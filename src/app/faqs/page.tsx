import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Home Care FAQs',
  description: 'Answers to frequently asked questions about home care, pricing and support from Libra Support Services.',
  path: '/faqs',
});

type FaqItem = {
  q: string;
  a: string;
};

type FaqGroup = {
  title: string;
  items: FaqItem[];
};

const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "Getting started",
    items: [
      {
        q: "How do we get started?",
        a: "The first step is a free needs assessment. We'll talk through your routine, preferences, and any specific support needed, then confirm visit times and the care plan.",
      },
      {
        q: "How quickly can care start?",
        a: "We’ll aim to start as quickly as possible once we understand your needs. Start times depend on availability and the type of support required, but we'll keep you updated throughout.",
      },
      {
        q: "Do you support hospital discharge?",
        a: "Yes. We can help plan a safe return home and provide practical support with personal care, medication prompts, meal preparation, and wellbeing checks.",
      },
    ],
  },
  {
    title: "Pricing & funding",
    items: [
      {
        q: "What’s included in your hourly rate?",
        a: "Our rates include trained, DBS-checked care staff, managed rotas and continuity of care, cover for sickness and holidays, medication support and care planning, plus management oversight with on-call support. We don’t add extra charges for administration or compliance.",
      },
      {
        q: "Why is there a rural rate?",
        a: "Rural rates reflect additional travel time and fuel costs. This helps ensure reliable visits and fair pay for carers across a wider service area.",
      },
      {
        q: "Do you offer a free quote?",
        a: "Yes. Once we’ve discussed your needs, we can provide clear pricing based on the level of support and visit schedule.",
      },
    ],
  },
  {
    title: "Care delivery & continuity",
    items: [
      {
        q: "Can I have the same carers regularly?",
        a: "Where possible, yes. We plan rotas to support continuity so you can build a trusted relationship with familiar faces, while still ensuring reliable cover for holidays or sickness.",
      },
      {
        q: "Do you provide cover for sickness and holidays?",
        a: "Yes. Our rota management includes cover planning so your visits remain reliable even when a regular carer is unavailable.",
      },
      {
        q: "Do you provide weekend or evening care?",
        a: "Yes. Care schedules are tailored to your needs and can include early mornings, evenings, and weekends.",
      },
    ],
  },
  {
    title: "Safety, training & support",
    items: [
      {
        q: "Are carers DBS-checked and trained?",
        a: "Yes. Our care staff are trained and DBS-checked, and we maintain ongoing training and supervision to ensure safe, high-quality support.",
      },
      {
        q: "Do you support medication?",
        a: "We can support medication prompts and assistance as appropriate within the agreed care plan.",
      },
      {
        q: "Is there management oversight and on-call support?",
        a: "Yes. Our team provides management oversight and on-call support so you always have a point of contact.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="max-w-4xl mx-auto py-16 px-4 space-y-10">
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold">FAQs</h1>
          <p className="text-lg text-gray-700">
            Clear answers to common questions about starting care, pricing, and how we support continuity.
          </p>
          <p className="text-sm text-gray-600">
            If you’d like to talk through your needs, call{' '}
            <a className="underline" href="tel:01706817672">
              01706 817 672
            </a>{' '}
            or{' '}
            <a className="underline" href="mailto:nicola@librasupport.co.uk">
              email us
            </a>.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition"
            >
              Contact Us
            </Link>
            <a
              href="tel:01706817672"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-black/15 bg-white text-black font-semibold hover:bg-black/5 transition"
            >
              Call Now: 01706 817 672
            </a>
          </div>
        </header>

        <div className="space-y-10">
          {FAQ_GROUPS.map((group) => (
            <section key={group.title} className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-4">{group.title}</h2>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-lg border border-gray-200 bg-gray-50 px-5 py-4"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-gray-900 flex items-start justify-between gap-4">
                      <span>{item.q}</span>
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-gray-500 transition-transform group-open:rotate-180"
                      >
                        ▾
                      </span>
                    </summary>
                    <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-700 mb-4">
            Still have questions? We’re happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01706817672"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark"
            >
              Call: 01706 817 672
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-primary rounded hover:bg-accent"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
