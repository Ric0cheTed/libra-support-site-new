import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { CallRequestCallbackCta } from '@/components/ui/call-request-callback-cta';
import { MobileStickyCallBar } from '@/components/ui/mobile-sticky-call-bar';
import { buildPageMetadata } from '@/lib/seo';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata = buildPageMetadata({
  title: 'Live-in Care Services in Todmorden',
  description: '24-hour live-in care providing professional and compassionate support in the comfort of your home.',
  path: '/services/live-in-care',
});

export default function LiveInCarePage() {
  return (
    <>
      <Breadcrumbs />

      <div className="space-y-10 max-w-4xl mx-auto py-10 px-4 pb-24 sm:pb-10">
        <h1 className="text-4xl font-bold mb-4">Live-in Care Services</h1>
        <p className="text-lg text-gray-600">
          24/7 one-to-one care at home for families in Todmorden and surrounding areas who need reliable daily and
          overnight support.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Live-in Support Includes</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Continuous day/night support from trained professionals</li>
            <li>Help with medication, mobility, and meal prep</li>
            <li>Emotional reassurance and tailored routines</li>
            <li>CQC-regulated care with safeguarding-focused oversight</li>
          </ul>
          <CallRequestCallbackCta className="pt-2" />
        </section>

        <TestimonialsSection />
      </div>

      <MobileStickyCallBar />
    </>
  );
}
