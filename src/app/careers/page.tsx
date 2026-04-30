import { Breadcrumbs } from "@/components/ui/breadcrumbs";

import { BUSINESS_PROFILE } from "@/lib/business-profile";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Careers",
  description:
    "Join Libra Support Services as one of our Home Care Heroes and help make a Positive Impact through person-centred home care.",
  path: "/careers",
});

export default function CareersPage() {
  const { emails } = BUSINESS_PROFILE;

  return (
    <>
      <Breadcrumbs />

      <div className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Careers at Libra Support Services</h1>
        <p className="text-lg text-gray-600">
          Home care is about supporting people in the place they know best. It can include
          companionship, reassurance, practical help with routines, and respectful support that
          helps someone feel safe, valued, and more confident at home.
        </p>
        <p className="text-gray-600">
          We&apos;re interested in compassionate, reliable people who understand that care is built on
          trust, dignity, patience, and positive relationships. Our Home Care Heroes make a
          Positive Impact by helping people work towards positive outcomes and live life in a way
          that feels right for them.
        </p>
        <p className="text-gray-600">
          If that sounds like the kind of work you want to do, we&apos;d be glad to hear from you.
        </p>
        <p className="text-gray-600">
          If you&apos;d like to ask about roles or send an application, use{" "}
          <a href={`mailto:${emails.jobs}`} className="font-semibold text-primary underline">
            our jobs contact
          </a>
          .
        </p>

        <div className="mt-8 flex flex-col justify-center gap-6 sm:flex-row">
          <a
            href="/careers/meet-team"
            className="rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-[0_18px_42px_-26px_rgba(34,127,70,0.9)] transition hover:bg-primary-dark"
          >
            Meet Our Team
          </a>
          <a
            href="/careers/open-roles"
            className="rounded-full border border-primary/25 bg-white px-6 py-3 font-semibold text-primary-900 transition hover:border-primary/40 hover:bg-primary-50"
          >
            View Open Roles
          </a>
        </div>
      </div>
    </>
  );
}
