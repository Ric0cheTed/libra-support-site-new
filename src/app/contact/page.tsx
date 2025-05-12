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
        <div className="bg-blue-50 p-6 rounded-xl shadow text-center space-y-2">
          <h2 className="text-xl font-semibold">Talk to us</h2>
          <p className="text-gray-700">Call us directly or message us via WhatsApp.</p>
          <div className="space-x-6">
            <a href="tel:+441706123456" className="text-blue-600 underline font-medium">Call 01706 123456</a>
            <a href="https://wa.me/441706123456" className="text-green-600 underline font-medium">WhatsApp Us</a>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="overflow-hidden rounded-xl shadow">
          <iframe
            title="Libra Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2362.818655144229!2d-2.100000!3d53.714000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b7f0abc12345%3A0xabc1234567890!2sTodmorden!5e0!3m2!1sen!2suk!4v1683123456789!5m2!1sen!2suk"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <ContactForm />
      </div>
    </>
  );
}