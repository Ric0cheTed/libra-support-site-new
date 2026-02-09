'use client';

import Link from 'next/link';

type FaqItem = {
  q: string;
  a: string;
};

const TEASER_FAQS: FaqItem[] = [
  {
    q: "What’s included in your hourly rate?",
    a: "Our rates include trained, DBS-checked care staff, managed rotas and continuity of care, cover for sickness/holidays, medication support, care planning, and management oversight with on-call support. We don’t add extra charges for administration or compliance.",
  },
  {
    q: 'How quickly can care start?',
    a: 'We’ll aim to start as quickly as possible once we’ve discussed your needs. The first step is a free needs assessment so we can confirm the right level of support and agree visit times.',
  },
  {
    q: 'Can I have the same carers regularly?',
    a: 'Where possible, yes. We plan rotas to support continuity so you can build a trusted relationship with familiar faces, while still ensuring reliable cover for holidays or sickness.',
  },
];

export default function FaqTeaserAccordion() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions</h2>
          <p className="mt-2 text-gray-700">
            Quick answers to common questions. For the full list, visit our FAQs page.
          </p>
        </div>

        <div className="space-y-4">
          {TEASER_FAQS.map((item) => (
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

        <div className="mt-8 text-center">
          <Link
            href="/faqs"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark"
          >
            View all FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
