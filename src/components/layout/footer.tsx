import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { BUSINESS_PROFILE, formatInlineList } from '@/lib/business-profile';
import { regulation } from '@/content/regulation';

export function Footer() {
  const { address, phones, links, emails, branches } = BUSINESS_PROFILE;
  return (
    <footer className="border-t border-primary/15 bg-white text-sm text-slate-700">
      <Container size="wide" className="grid gap-10 py-12 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <Link href="/" className="inline-block rounded-md"><Image src="/images/libra-full-logo.webp" alt="Libra Support Services" width={517} height={131} className="h-auto w-52" /></Link>
          <h2 className="mt-6 text-base font-semibold text-primary-900">Our local office</h2>
          <address className="mt-3 not-italic leading-7">{address.lines.map((line) => <span className="block" key={line}>{line}</span>)}</address>
          <a href={links.companiesHouse} className="libra-link mt-3">Company registration information</a>
        </div>
        <div>
          <h2 className="text-base font-semibold text-primary-900">A local team to talk to</h2>
          <ul className="mt-3 space-y-1">
            <li><a href={phones.primary.href} className="libra-link">Call {phones.primary.display}</a></li>
            <li><a href={phones.mobile.href} className="libra-link">Mobile {phones.mobile.display}</a></li>
            <li><a href={`mailto:${emails.careEnquiries}`} className="libra-link">Email our care team</a></li>
            <li><a href={`mailto:${emails.jobs}`} className="libra-link">Ask about jobs</a></li>
            <li><Link href="/contact" className="libra-link">All contact options</Link></li>
            {links.facebook && <li><a href={links.facebook} className="libra-link">Libra on Facebook</a></li>}
          </ul>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="text-base font-semibold text-primary-900">Explore Libra</h2>
          <ul className="mt-3 space-y-1">{[
            ['Care services', '/services'], ['About Libra', '/about'], ['Our People', '/about/team'], ['Areas', '/areas'], ['Care costs', '/care-fees'], ['FAQs', '/faqs'], ['Resources & Advice', '/resources'], ['Careers', '/careers'],
          ].map(([label, href]) => <li key={href}><Link href={href} className="libra-link">{label}</Link></li>)}</ul>
        </nav>
        <div>
          <h2 className="text-base font-semibold text-primary-900">Our branches</h2>
          <ul className="mt-4 space-y-5">{branches.map((branch) => <li key={branch.name}><h3 className="font-semibold text-primary-900">{branch.name}</h3><p className="mt-1 leading-6">{formatInlineList(branch.coverageAreas ?? [])}</p>{branch.coverageNote && <p className="mt-2 leading-6">{branch.coverageNote}</p>}</li>)}</ul>
          <h2 className="mt-6 text-base font-semibold text-primary-900">CQC information</h2>
          <a href={regulation.todmorden.reportUrl} className="libra-link">Todmorden: rated Good</a>
          <a href={regulation.burnley.url} className="libra-link">Burnley: not inspected yet</a>
          <a href={links.cqcProvider} className="libra-link">CQC provider registration</a>
        </div>
      </Container>
      <div className="border-t border-primary/10 py-5">
        <Container size="wide" className="flex flex-col justify-between gap-4 text-xs leading-6 text-slate-600 sm:flex-row sm:flex-wrap">
          <p>© {new Date().getFullYear()} Libra Support Services. All rights reserved.<br />Website by Szymik Digital</p>
          <nav aria-label="Policies" className="flex flex-wrap gap-5"><Link href="/privacy" className="inline-flex min-h-11 items-center underline underline-offset-4">Privacy policy</Link><Link href="/cookies" className="inline-flex min-h-11 items-center underline underline-offset-4">Cookie policy</Link><Link href="/terms" className="inline-flex min-h-11 items-center underline underline-offset-4">Terms of use</Link></nav>
        </Container>
      </div>
    </footer>
  );
}