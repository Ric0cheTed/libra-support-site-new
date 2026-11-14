import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buildPageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/shared/Button';

export const metadata = buildPageMetadata({
  title: 'Meet Our Care Team',
  description: 'Get to know the Home Care Heroes behind Libra Support Services.',
  path: '/careers/meet-team',
});

export default function MeetTeamPage() {
  return (
    <>
      <Breadcrumbs />

      <Container className="space-y-6 py-8">
        <h1 className="text-4xl font-semibold text-primary-900 mb-4">Meet Our Home Care Heroes</h1>
        <p className="text-gray-600">
          Our team is made up of experienced carers, support staff, coordinators, and
          managers: our Home Care Heroes, all dedicated to making a Positive Impact through
          kind, reliable, person-centred care.
        </p>
        <div className="libra-card bg-primary-50"><h2 className="text-2xl font-semibold text-primary-900">People, purpose and local care</h2><p className="mt-4 leading-8 text-slate-700">Find our registered managers and an introduction to the wider team on Our People. Individual profiles and photographs are included only when their details and permissions are confirmed.</p><Link href="/about/team" className="libra-link mt-3">Explore Our People</Link><div className="mt-4"><Button href="/careers/open-roles">Employment enquiries</Button></div></div>
      </Container>
    </>
  )
}
