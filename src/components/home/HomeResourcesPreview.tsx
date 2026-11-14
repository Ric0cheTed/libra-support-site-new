import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { careGuides } from "@/content/guides";

export function HomeResourcesPreview() {
  return (
    <section className="libra-section bg-[#f8eee5]" aria-labelledby="resources-preview-title">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
          <div>
            <BookOpen className="mb-5 h-8 w-8 text-accent-900" aria-hidden="true" />
            <SectionHeading id="resources-preview-title" eyebrow="A little clarity, when it matters" title="You don’t have to work it all out alone" description="Practical guidance about starting care, fees, funding and family support. Explore clear answers with primary sources and source-check dates." />
            <Button href="/resources" className="mt-6">Resources & Advice <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {careGuides.slice(0, 4).map((guide) => <article key={guide.slug} className="libra-card"><h3 className="text-lg font-semibold text-primary-900">{guide.title}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{guide.summary}</p><Link href={`/resources/${guide.slug}`} className="libra-link mt-3 text-sm">Read this guide</Link></article>)}
          </div>
        </div>
      </Container>
    </section>
  );
}
