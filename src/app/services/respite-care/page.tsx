import { Breadcrumbs } from "@/components/ui/breadcrumbs";
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

      <div className="space-y-10 max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Respite Care Services</h1>
        <p className="text-lg text-gray-600">
          Short-term care solutions offering flexible support to families and regular caregivers.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">When to Use Respite Care</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Emergency coverage or carer sickness</li>
            <li>Short breaks for family caregivers</li>
            <li>Transitional support post-hospital stay</li>
          </ul>
        </section>

        <TestimonialsSection />
      </div>
    </>
  )
}