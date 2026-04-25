import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Cookie Policy",
  description:
    "How Libra Support Services uses cookies and similar technologies on this website.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="max-w-4xl mx-auto py-16 px-4 space-y-10">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Cookie Policy</h1>
          <p className="text-lg text-gray-700">
            This policy explains how Libra Support Services uses cookies and similar technologies on this website.
          </p>
          <p className="text-sm text-gray-600">Last updated: 22 April 2026</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What are cookies?</h2>
          <p className="text-gray-700 leading-7">
            Cookies are small text files placed on your device when you visit a website.
            Similar technologies can also store information on, or access information from,
            your browser or device.
          </p>
          <p className="text-gray-700 leading-7">
            These technologies can help a website work properly, remember settings, measure
            performance, or support other functions depending on how the website is configured.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How we use cookies</h2>
          <p className="text-gray-700 leading-7">
            We may use cookies or similar technologies for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-7">
            <li>to make the website function properly;</li>
            <li>to support security and website stability;</li>
            <li>to remember preferences or settings where appropriate;</li>
            <li>to understand how the website is used and improve performance;</li>
            <li>to support embedded content or third-party services where those are active.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Types of cookies we may use</h2>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-lg font-semibold">Strictly necessary cookies</h3>
              <p className="mt-2 text-gray-700 leading-7">
                These are used to make the website work properly and securely. They are
                generally essential for core site functions and do not usually require consent.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-lg font-semibold">Analytics or performance cookies</h3>
              <p className="mt-2 text-gray-700 leading-7">
                These may help us understand how visitors use the website so we can improve
                content, navigation, and overall performance.
              </p>
              <p className="mt-2 text-gray-700 leading-7">
                Where analytics cookies are not strictly necessary, they should only be used
                where appropriate consent has been given.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-lg font-semibold">Functionality cookies</h3>
              <p className="mt-2 text-gray-700 leading-7">
                These may remember choices or preferences to improve your experience on the site.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-lg font-semibold">Third-party cookies or similar technologies</h3>
              <p className="mt-2 text-gray-700 leading-7">
                Some third-party services, embedded content, or external tools may place cookies
                or use similar technologies when active on the site.
              </p>
              <p className="mt-2 text-gray-700 leading-7">
                We do not control third-party cookies directly, and their use is subject to the
                relevant third party’s own policies and settings.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Consent and your choices</h2>
          <p className="text-gray-700 leading-7">
            Where cookies or similar technologies are not strictly necessary, they should only be
            set when you have given the appropriate consent.
          </p>
          <p className="text-gray-700 leading-7">
            If a cookie banner or cookie settings tool is in use on this website, you should be
            able to use it to manage your choices.
          </p>
          <p className="text-gray-700 leading-7">
            You can also manage cookies through your browser settings. Please note that blocking
            some cookies may affect how parts of the website function.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Browser controls</h2>
          <p className="text-gray-700 leading-7">
            Most web browsers allow you to manage cookies through their settings. Depending on your
            browser, you may be able to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-7">
            <li>view which cookies are stored;</li>
            <li>delete cookies;</li>
            <li>block cookies altogether;</li>
            <li>block cookies from specific websites only.</li>
          </ul>
          <p className="text-gray-700 leading-7">
            If you choose to block all cookies, some website features may not work as intended.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Updates to this policy</h2>
          <p className="text-gray-700 leading-7">
            We may update this Cookie Policy from time to time to reflect changes in the website,
            the technologies we use, or legal and regulatory requirements.
          </p>
        </section>
      </div>
    </>
  );
}