import { Breadcrumbs } from "@/components/ui/breadcrumbs";

import { BUSINESS_PROFILE } from "@/lib/business-profile";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Open Care Roles",
  description: "View current care job opportunities at Libra Support Services.",
  path: "/careers/open-roles",
});

export default function OpenRolesPage() {
  const { emails } = BUSINESS_PROFILE;

  return (
    <>
      <Breadcrumbs />

      <div className="space-y-6">
        <h1 className="mb-4 text-3xl font-bold">Join Our Team</h1>
        <p className="text-gray-600">
          We&apos;re looking for compassionate carers. Check out our available positions and apply
          today to make a difference for families across Todmorden, Burnley, and nearby
          communities.
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
