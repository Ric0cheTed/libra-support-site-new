import { Breadcrumbs } from "@/components/ui/breadcrumbs";

import { BUSINESS_PROFILE } from "@/lib/business-profile";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Careers",
  description:
    "Join Libra Support Services and help deliver compassionate care across Todmorden, Burnley, and nearby communities.",
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
          We&apos;re always looking for compassionate, professional carers to join our growing
          family. At Libra Support Services, you&apos;ll make a real difference in the lives of
          families across Todmorden, Burnley, and nearby communities.
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
            className="rounded bg-primary px-6 py-3 text-white hover:bg-primary-dark"
          >
            Meet Our Team
          </a>
          <a
            href="/careers/open-roles"
            className="rounded border border-blue-600 px-6 py-3 text-primary hover:bg-accent"
          >
            View Open Roles
          </a>
        </div>
      </div>
    </>
  );
}
