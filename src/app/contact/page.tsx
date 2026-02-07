import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactForm } from "./contact-form";

export const metadata = {
  title: "Contact Us | Libra Support Services",
  description: "Reach out to Libra Support Services for compassionate home care solutions across West Yorkshire.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="space-y-10 max-w-5xl mx-auto py-10 px-4">

        {/* Contact CTA */}
        <div className="bg-blue-50 p-6 rounded-xl shadow text-center space-y-3">
		  <h2 className="text-xl font-semibold text-primary">Talk to us</h2>
		  <p className="text-gray-700">Call us directly or message us via WhatsApp – we’re happy to help.</p>
		  <div className="space-x-6 font-medium">
			<a href="tel:01706817672" className="text-blue-600 underline">Call (01706) 817672</a>
			<a href="tel:07751123507" className="text-blue-600 underline">Call 07751 123507</a>
			<a href="https://wa.me/447943157855" className="text-green-600 underline">WhatsApp Us</a>
		  </div>
		  <div className="flex justify-center items-center gap-2 mt-2 text-primary font-semibold text-sm sm:text-base">
			<svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
			  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14" />
			</svg>
			We’re available 9am – 5pm, Monday to Friday
		  </div>
		</div>

        {/* Map Embed */}
        <div className="overflow-hidden rounded-xl shadow">
          <iframe
            title="Libra Support Services Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.4129929293816!2d-2.1014253!3d53.7137928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bddf5f1265d1b%3A0x56ae2222483c8d62!2sTodmorden%20Community%20College!5e0!3m2!1sen!2suk!4v1716999999999!5m2!1sen!2suk"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </>
  );
}
