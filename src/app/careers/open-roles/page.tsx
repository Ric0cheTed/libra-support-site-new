import { Breadcrumbs } from "@/components/ui/breadcrumbs";

import { BUSINESS_PROFILE } from "@/lib/business-profile";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Open Care Roles",
  description:
    "View current Home Care Heroes opportunities with Libra Support Services.",
  path: "/careers/open-roles",
});

export default function OpenRolesPage() {
  const { emails } = BUSINESS_PROFILE;

  return (
    <>
      <Breadcrumbs />

      <div className="space-y-6">
        <h1 className="mb-4 text-3xl font-bold">Join Our Home Care Heroes</h1>
        <p className="text-gray-600">
          We&apos;re looking for compassionate, reliable people who want to support adults at home
          with patience, dignity, and practical day-to-day care. Home care is relationship-led work:
          listening well, noticing the small things, and helping each person feel respected and
          more secure in their routine.
        </p>
        <p className="text-gray-600">
          The role is about making a Positive Impact in ordinary, important moments: helping
          someone feel valued, supporting confidence at home, and working towards positive
          outcomes at a pace that feels right for the person.
        </p>
        <p className="text-gray-600">
          For job enquiries, CVs, or application follow-up, use{" "}
          <a href={`mailto:${emails.jobs}`} className="font-semibold text-primary underline">
            our jobs contact
          </a>
          .
        </p>
      </div>
    </>
  );
}
