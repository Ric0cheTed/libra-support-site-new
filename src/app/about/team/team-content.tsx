import Link from "next/link";
import TeamCard from "@/components/ui/team-card";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { getPublicStaff } from "@/content/people";


export default function TeamPage() {
  const people = getPublicStaff();
  return <Container size="default" className="py-6 sm:py-10"><header className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-800">Our People</p><h1 className="mt-4 text-4xl font-semibold leading-tight text-primary-900 sm:text-5xl">People at the heart of local care</h1><p className="mt-5 text-lg leading-8 text-slate-700">Choosing care is also choosing who to talk to. Get to know the registered managers behind our two local services and explore the people-centred approach that guides Libra.</p></header>
    <section className="my-10" aria-labelledby="registered-managers"><h2 id="registered-managers" className="mb-5 text-3xl font-semibold text-primary-900">Our registered managers</h2><div className="grid gap-5 md:grid-cols-2">{people.filter(person => person.group === "leadership").map(person => <TeamCard key={person.id} staffId={person.id} />)}</div>{people.length === 0 && <p className="leading-8 text-slate-700">For information about the people involved in your care, please speak to your local team.</p>}</section>
    <section className="libra-card bg-primary-50" aria-labelledby="care-team"><h2 id="care-team" className="text-2xl font-semibold text-primary-900">Our wider care team</h2><p className="mt-4 max-w-3xl leading-8 text-slate-700">Care at home involves listening, planning and practical day-to-day support. To find out who would be involved in your care and how arrangements would work, speak with the local team about your individual needs.</p><div className="mt-5 flex flex-wrap gap-4"><Button href="/contact">Talk to the local team</Button><Button href="/about" variant="secondary">Our approach to care</Button></div></section>
    <section className="my-10 rounded-2xl border border-accent-200 bg-accent-50 p-6 sm:p-8"><h2 className="text-2xl font-semibold text-primary-900">Thinking about joining Libra?</h2><p className="mt-3 max-w-3xl leading-8 text-slate-700">Explore our careers information and the existing route for employment enquiries. Care enquiries and recruitment have separate destinations.</p><Link href="/careers" className="libra-link mt-3">Explore careers</Link><Link href="/careers/open-roles" className="libra-link ml-0 mt-3 sm:ml-6">Employment enquiries</Link></section>
  </Container>;
}