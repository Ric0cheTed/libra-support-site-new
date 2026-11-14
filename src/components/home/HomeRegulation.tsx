import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { regulation } from "@/content/regulation";

export function HomeRegulation() {
  const { todmorden, burnley } = regulation;
  return (
    <section id="care-quality" className="libra-section border-y border-primary/15 bg-primary-50" aria-labelledby="care-quality-title">
      <Container size="wide">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-800">Care quality, clearly explained</p>
          <h2 id="care-quality-title" className="mt-3 text-3xl font-semibold tracking-tight text-primary-900 sm:text-4xl">Independent regulation. Local accountability.</h2>
          <p className="mt-4 leading-7 text-slate-700">The Care Quality Commission (CQC) regulates our registered services. Each location has its own record: a rating for one branch is not a rating for every Libra service.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
          <article className="libra-card border-primary/20">
            <div className="flex items-start gap-3"><ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-primary-800" aria-hidden="true" /><div className="min-w-0"><h3 className="text-xl font-semibold text-primary-900">Todmorden</h3><p className="mt-1 text-sm text-slate-600">{todmorden.name}</p></div></div>
            <p className="mt-5 text-2xl font-semibold text-primary-900">CQC overall rating: {todmorden.rating}</p>
            <a href={todmorden.url} className="mt-4 inline-block">
              <Image src="/images/cqc-official-good.jpg" alt="Care Quality Commission inspected and rated Good — Todmorden service" width={1184} height={821} className="h-auto w-[200px]" />
            </a>
            <p className="mt-3 text-sm leading-6 text-slate-700">Safe, effective, caring, responsive and well-led: all rated Good.</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">Assessment: {todmorden.assessmentPeriod}.<br />Report published: {todmorden.reportPublished}.</p>
            <a href={todmorden.reportUrl} className="libra-link mt-4">Read Todmorden’s official CQC report <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a>
          </article>
          <article className="libra-card">
            <h3 className="text-xl font-semibold text-primary-900">Burnley</h3>
            <p className="mt-1 text-sm text-slate-600">{burnley.name}</p>
            <p className="mt-5 text-xl font-semibold text-primary-900">{burnley.status}</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">Registered with CQC on {burnley.registeredOn}. Burnley has not independently received Todmorden’s Good rating.</p>
            <a href={burnley.url} className="libra-link mt-4">View Burnley’s official CQC record <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a>
          </article>
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-600">Official records checked {regulation.checkedOn}. Follow the CQC links for the latest information.</p>
      </Container>
    </section>
  );
}
