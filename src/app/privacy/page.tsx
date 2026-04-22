import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";
import { BUSINESS_PROFILE } from "@/lib/business-profile";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How Libra Support Services collects, uses, stores, and protects personal information submitted through this website.",
  path: "/privacy",
});

const { email, phones, address } = BUSINESS_PROFILE;

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="max-w-4xl mx-auto py-16 px-4 space-y-10">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-lg text-gray-700">
            This policy explains how Libra Support Services uses personal information collected
            through this website.
          </p>
          <p className="text-sm text-gray-600">Last updated: 22 April 2026</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Who we are</h2>
          <p className="text-gray-700 leading-7">
            Libra Support Services is the organisation responsible for this website and for the
            personal information submitted through it.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 leading-6">
            <p className="font-semibold text-gray-900">Contact details</p>
            <p>Libra Support Services</p>
            {address.lines.map((line, index) => (
              <p key={`${line}-${index}`}>{line}</p>
            ))}
            <p className="pt-2">
              Email:{" "}
              <a href={`mailto:${email}`} className="text-primary underline">
                {email}
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
          <h2 className="text-2xl font-semibold">What information we may collect</h2>
          <p className="text-gray-700 leading-7">
            If you contact us through this website, we may collect personal information such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-7">
            <li>Your name</li>
            <li>Your phone number</li>
            <li>Your email address</li>
            <li>Your postcode or area</li>
            <li>Details you include in an enquiry or callback request</li>
            <li>
              Limited website usage information, such as technical data or analytics information,
              depending on the tools active on the website
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How we use your information</h2>
          <p className="text-gray-700 leading-7">We may use your information to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-7">
            <li>Respond to your enquiry</li>
            <li>Arrange a callback or consultation</li>
            <li>Provide information about our care services</li>
            <li>Assess whether we may be able to support you or your loved one</li>
            <li>Respond to recruitment or careers-related enquiries</li>
            <li>Improve the website and understand how people use it</li>
            <li>Keep records of enquiries and communications</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Lawful bases we rely on</h2>
          <p className="text-gray-700 leading-7">
            Depending on the nature of your contact with us, we may use your information because:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-7">
            <li>
              it is necessary to take steps at your request before providing a service or responding
              to an enquiry;
            </li>
            <li>
              it is in our legitimate interests to respond to enquiries, run the website, and manage
              communications effectively; or
            </li>
            <li>
              you have given consent, where consent is the appropriate basis for a specific activity.
            </li>
          </ul>
          <p className="text-gray-700 leading-7">
            If we rely on consent, you can withdraw it at any time by contacting us.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How long we keep your information</h2>
          <p className="text-gray-700 leading-7">
            We only keep personal information for as long as reasonably necessary for the purpose it
            was collected, including responding to enquiries, keeping appropriate records, and
            meeting legal, regulatory, or operational requirements.
          </p>
          <p className="text-gray-700 leading-7">
            Enquiry information that does not lead to ongoing service provision is normally retained
            only for a limited period, unless there is a good reason to keep it longer.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Who we may share your information with</h2>
          <p className="text-gray-700 leading-7">
            We do not sell personal information. We may share information where necessary with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-7">
            <li>Website, hosting, or IT service providers</li>
            <li>Email, forms, or communications providers</li>
            <li>Professional advisers where needed</li>
            <li>Regulators, authorities, or law enforcement where required by law</li>
          </ul>
          <p className="text-gray-700 leading-7">
            Where third parties process data on our behalf, we expect them to handle it securely and
            only for appropriate purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your rights</h2>
          <p className="text-gray-700 leading-7">
            Depending on the circumstances, you may have rights to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-7">
            <li>access the personal information we hold about you;</li>
            <li>ask us to correct inaccurate information;</li>
            <li>ask us to erase your information in some circumstances;</li>
            <li>ask us to restrict how we use it;</li>
            <li>object to certain uses of your information;</li>
            <li>ask for a copy of information you provided to us in a portable format, where applicable;</li>
            <li>withdraw consent where consent is the basis we rely on.</li>
          </ul>
          <p className="text-gray-700 leading-7">
            To ask about any of these rights, contact us using the details above.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cookies and website data</h2>
          <p className="text-gray-700 leading-7">
            This website may use cookies or similar technologies for essential functionality,
            security, and website performance. If non-essential cookies or analytics are used, they
            should only be set in line with the website’s cookie settings and policy.
          </p>
          <p className="text-gray-700 leading-7">
            Please also see our Cookie Policy for more detail.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Links to other websites</h2>
          <p className="text-gray-700 leading-7">
            This website may link to third-party websites. Those websites have their own privacy
            policies, and we are not responsible for how they handle personal information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How to complain</h2>
          <p className="text-gray-700 leading-7">
            If you have concerns about how we use your personal information, please contact us first
            and we will try to resolve the issue.
          </p>
          <p className="text-gray-700 leading-7">
            You also have the right to complain to the Information Commissioner’s Office (ICO).
          </p>
        </section>
      </div>
    </>
  );
}