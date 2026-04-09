import Link from 'next/link';

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buildPageMetadata } from '@/lib/seo';
import { BUSINESS_PROFILE } from '@/lib/business-profile';
import { ContactForm } from "./contact-form";

export const metadata = buildPageMetadata({
  title: 'Contact Libra Support Services',
  description: 'Speak with Libra Support Services about home care in Todmorden, Hebden Bridge and nearby areas. Book a free needs assessment.',
  path: '/contact',
});

export default function ContactPage() {
  const { phones, whatsapp, address, openingHours, map } = BUSINESS_PROFILE;

  return (
    <>
      <Breadcrumbs />

      <div className="space-y-10 max-w-5xl mx-auto py-10 px-4">
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold">Contact Libra Support Services</h1>
          <p className="text-lg text-gray-700">
            Talk to our local team about safe, CQC-regulated home care in Todmorden, Calderdale and surrounding West Yorkshire areas.
          </p>
        </header>

        {/* Contact CTA */}
        <div className="bg-blue-50 p-6 rounded-xl shadow text-center space-y-3">
          <h2 className="text-xl font-semibold text-primary">Call now or request a call back</h2>
          <p className="text-gray-700">We’ll guide you through options for home care, live-in care or respite support.</p>
          <ul className="text-sm sm:text-base text-gray-700 space-y-1">
            <li>• CQC-regulated care with trained, DBS-checked carers</li>
            <li>• Safeguarding-focused support and managed continuity</li>
            <li>• Flexible care plans tailored to your routine</li>
          </ul>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 font-medium">
            <a href={phones.primary.href} className="text-blue-600 underline">Call now: {phones.primary.display}</a>
            {phones.secondary ? (
              <a href={phones.secondary.href} className="text-blue-600 underline">Call now: {phones.secondary.display}</a>
            ) : null}
            <a href={whatsapp.href} className="text-green-600 underline">{whatsapp.display}</a>
          </div>

          <div className="text-sm sm:text-base text-gray-700">
            <p className="font-semibold text-primary">Address</p>
            <address className="not-italic">
              {address.lines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <a href={map.directionsUrl} className="text-blue-600 underline">Get directions</a>
          </div>

          <div className="flex justify-center items-center gap-2 mt-2 text-primary font-semibold text-sm sm:text-base">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14" />
            </svg>
            We’re available {openingHours.display}
          </div>
        </div>

        {/* Map Embed */}
        <div className="overflow-hidden rounded-xl shadow">
          <iframe
            title="Libra Support Services Office"
            src={map.embedUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="text-center text-sm text-gray-600">
          Prefer to explore first?{' '}
          <Link href="/services" className="underline">
            View services
          </Link>
          ,{' '}
          <Link href="/care-fees" className="underline">
            care fees
          </Link>
          , or{' '}
          <Link href="/faqs" className="underline">
            FAQs
          </Link>
          .
        </p>

        {/* Form */}
        <ContactForm />
      </div>
    </>
  );
}
