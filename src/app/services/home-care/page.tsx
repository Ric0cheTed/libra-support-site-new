import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { CallRequestCallbackCta } from '@/components/ui/call-request-callback-cta';
import { MobileStickyCallBar } from '@/components/ui/mobile-sticky-call-bar';
import { buildPageMetadata } from '@/lib/seo';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata = buildPageMetadata({
  title: 'Home Care Services in Todmorden',
  description:
    'Flexible and compassionate in-home care tailored to daily living needs in Todmorden and surrounding communities.',
  path: '/services/home-care',
});

export default function HomeCarePage() {
  return (
    <>
      <Breadcrumbs />

      <div className="space-y-10 max-w-4xl mx-auto py-10 px-4 pb-24 sm:pb-10">
        <h1 className="text-4xl font-bold mb-4">Home Care Services</h1>
        <p className="text-lg text-gray-600">
          Practical day-to-day support that helps people stay safe and independent at home across Todmorden,
          Calderdale and nearby West Yorkshire communities.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Help with bathing, dressing, mobility, and hygiene</li>
            <li>Household chores, medication support, and meals</li>
            <li>Friendly companionship and wellness checks</li>
            <li>CQC-regulated care from trained, DBS-checked carers</li>
          </ul>
          <CallRequestCallbackCta className="pt-2" />
        </section>

        <TestimonialsSection />
      </div>

      <MobileStickyCallBar />
    </>
  );
}
