import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Meet Our Care Team',
  description: 'Get to know the Home Care Heroes behind Libra Support Services.',
  path: '/careers/meet-team',
});

export default function MeetTeamPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-4">Meet Our Home Care Heroes</h1>
        <p className="text-gray-600">
          Our team is made up of experienced carers, support staff, coordinators, and
          managers: our Home Care Heroes, all dedicated to making a Positive Impact through
          kind, reliable, person-centred care.
        </p>
      </div>
    </>
  )
}
