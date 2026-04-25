import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { BUSINESS_PROFILE } from "@/lib/business-profile";

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  description:
    "Terms of use for the Libra Support Services website, including acceptable use, content, links, and general website conditions.",
  path: "/terms",
});

const { emails, phones, address } = BUSINESS_PROFILE;

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="max-w-4xl mx-auto py-16 px-4 space-y-10">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Terms of Use</h1>
          <p className="text-lg text-gray-700">
            These terms explain the rules for using the Libra Support Services website.
          </p>
          <p className="text-sm text-gray-600">Last updated: 22 April 2026</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">About this website</h2>
          <p className="text-gray-700 leading-7">
            This website is operated by Libra Support Services. By using this website, you agree
            to these Terms of Use. If you do not agree, please do not use the website.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 leading-6">
            <p className="font-semibold text-gray-900">Contact details</p>
            <p>Libra Support Services</p>
            {address.lines.map((line, index) => (
              <p key={`${line}-${index}`}>{line}</p>
            ))}
            <p className="pt-2">
              Email:{" "}
              <a href={`mailto:${emails.admin}`} className="text-primary underline">
                {emails.admin}
              </a>
            </p>
            <p>
              Telephone:{" "}
              <a href={phones.primary.href} className="text-primary underline">
                {phones.primary.display}
              </a>
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Using this website</h2>
          <p className="text-gray-700 leading-7">
            You may use this website for lawful purposes only. You agree not to misuse the website,
            interfere with its operation, attempt unauthorised access, or use it in a way that may
            damage the site or affect other users.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-7">
            <li>use the site only in a lawful and respectful way;</li>
            <li>not introduce viruses, malicious code, or harmful material;</li>
            <li>not attempt to gain unauthorised access to the website, server, or connected systems;</li>
            <li>not use the website in a way that could disrupt or impair its availability.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Website content</h2>
          <p className="text-gray-700 leading-7">
            The information on this website is provided for general guidance about Libra Support
            Services and the support we offer. We aim to keep the content clear and up to date, but
            we do not guarantee that all information will always be complete, current, or free from
            error.
          </p>
          <p className="text-gray-700 leading-7">
            Content on this website should not be treated as medical advice, legal advice, or a
            guaranteed statement that a service will be available in every case. If you need advice
            about your specific situation, please contact us directly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Service enquiries and availability</h2>
          <p className="text-gray-700 leading-7">
            Information about services, support options, and coverage areas is provided to help
            users understand what Libra Support Services may be able to offer.
          </p>
          <p className="text-gray-700 leading-7">
            Any care arrangement, consultation, response time, or service availability will depend
            on individual circumstances, assessment, staffing, location, and operational capacity
            at the relevant time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Intellectual property</h2>
          <p className="text-gray-700 leading-7">
            Unless otherwise stated, the content of this website, including text, graphics, logos,
            layout, and design elements, belongs to Libra Support Services or is used with
            permission.
          </p>
          <p className="text-gray-700 leading-7">
            You may view, download, or print pages from this website for your own personal,
            non-commercial use. You must not reproduce, republish, distribute, modify, or exploit
            website content for commercial purposes without prior written permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Links to other websites</h2>
          <p className="text-gray-700 leading-7">
            This website may include links to third-party websites, including regulators,
            directories, or social platforms. These links are provided for convenience only.
          </p>
          <p className="text-gray-700 leading-7">
            We do not control third-party websites and are not responsible for their content,
            availability, or privacy practices.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Website availability</h2>
          <p className="text-gray-700 leading-7">
            We do not guarantee that this website will always be available, uninterrupted, secure,
            or free from bugs or errors. We may update, suspend, withdraw, or change any part of
            the website without notice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Liability</h2>
          <p className="text-gray-700 leading-7">
            To the fullest extent permitted by law, Libra Support Services excludes liability for
            loss or damage arising from use of, or reliance on, this website or its content.
          </p>
          <p className="text-gray-700 leading-7">
            Nothing in these Terms of Use excludes or limits liability where it would be unlawful
            to do so.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Privacy and cookies</h2>
          <p className="text-gray-700 leading-7">
            Use of this website is also subject to our Privacy Policy and Cookie Policy, which
            explain how personal information and website data may be handled.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Changes to these terms</h2>
          <p className="text-gray-700 leading-7">
            We may update these Terms of Use from time to time. Any updated version will be posted
            on this page with a revised last-updated date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Governing law</h2>
          <p className="text-gray-700 leading-7">
            These Terms of Use are governed by the laws of England and Wales, and any disputes
            relating to the website will be subject to the jurisdiction of the courts of England
            and Wales, unless applicable law provides otherwise.
          </p>
        </section>
      </div>
    </>
  );
}
