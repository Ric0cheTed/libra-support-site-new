import Link from 'next/link';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { CallRequestCallbackCta } from '@/components/ui/call-request-callback-cta';
import { MobileStickyCallBar } from '@/components/ui/mobile-sticky-call-bar';
import { buildPageMetadata } from '@/lib/seo';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata = buildPageMetadata({
  title: 'Respite Care Services in Todmorden',
  description: 'Short-term and emergency respite care support for families needing reliable temporary assistance.',
  path: '/services/respite-care',
});

export default function RespiteCarePage() {
  return (
    <>
      <Breadcrumbs />

      <div className="space-y-10 max-w-4xl mx-auto py-10 px-4 pb-24 sm:pb-10">
        <h1 className="text-4xl font-bold mb-4">Respite Care Services</h1>
        <p className="text-lg text-gray-600">
          Short-term care that gives families trusted cover during illness, recovery periods, or planned breaks across
          Todmorden and nearby Calderdale areas.
        </p>
        <p className="text-sm text-gray-600">
          Serving <Link href="/areas/todmorden" className="underline">Todmorden</Link>,{' '}
          <Link href="/areas/hebden-bridge" className="underline">Hebden Bridge</Link>, and{' '}
          <Link href="/areas/mytholmroyd" className="underline">Mytholmroyd</Link>.{' '}
          <Link href="/areas" className="underline">See all areas we cover</Link>.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">When to Use Respite Care</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Emergency coverage or carer sickness</li>
            <li>Short breaks for family caregivers</li>
            <li>Transitional support post-hospital stay</li>
            <li>CQC-regulated support from trained, DBS-checked carers</li>
          </ul>
          <CallRequestCallbackCta className="pt-2" />
          <p className="text-sm text-gray-600">
            Want to compare options? <Link href="/care-fees" className="underline">View care fees</Link> or{' '}
            <Link href="/faqs" className="underline">read our FAQs</Link>.
          </p>
        </section>

        <TestimonialsSection />
      </div>

      <MobileStickyCallBar />
    </>
  );
}
