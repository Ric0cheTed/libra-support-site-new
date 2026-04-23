'use client';

import Link from 'next/link';

export default function WhyChooseLibra() {
  const reasons = [
    {
      title: 'Safe, regulated care',
      body:
        'CQC-regulated support with trained, DBS-checked carers, care planning, medication support, and management oversight for peace of mind.',
    },
    {
      title: 'Continuity families can trust',
      body:
        'Managed rotas help maintain consistency wherever possible, with reliable cover for sickness and holidays so visits stay dependable.',
    },
    {
      title: 'Local, person-centred support',
      body:
        'We focus on practical, compassionate care that helps people stay safe, independent, and supported at home in the way that suits them best.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Talk to our team',
      body:
        'Call us or request a care call so we can understand your situation, answer questions, and guide you through the next steps.',
    },
    {
      number: '2',
      title: 'Free needs assessment',
      body:
        'We’ll discuss routines, preferences, care needs, visit times, and the type of support that would work best at home.',
    },
    {
      number: '3',
      title: 'Start care with confidence',
      body:
        'Once the plan is agreed, we’ll confirm your support and help you begin with clear communication and ongoing oversight.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Why families choose Libra</h2>
          <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
            Choosing care is a big decision. We aim to make the process clear, supportive, and
            reassuring from the first conversation through to ongoing care at home.
          </p>
          <p className="mt-3 text-sm text-gray-600">
            Want more detail?{' '}
            <Link href="/faqs" className="underline">
              Read our FAQs
            </Link>{' '}
            or{' '}
            <Link href="/care-fees" className="underline">
              see care fees
            </Link>
            .
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-14">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/10 bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-black/10 bg-primary-50 p-8 sm:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">How to get support</h3>
            <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
              We keep the process straightforward so families know what happens next.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-white p-6 border border-black/10 shadow-sm text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-700 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              Request a care call
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-6 py-3 text-black font-semibold hover:bg-black/5 transition"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}