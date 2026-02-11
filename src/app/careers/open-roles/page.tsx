import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Open Care Roles',
  description: 'View current care job opportunities at Libra Support Services.',
  path: '/careers/open-roles',
});

export default function OpenRolesPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-4">Join Our Team</h1>
        <p className="text-gray-600">
          We’re looking for compassionate carers! Check out our available positions and apply today to make a difference.
        </p>
      </div>
    </>
  )
}