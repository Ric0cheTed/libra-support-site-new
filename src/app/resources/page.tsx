import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { GuidanceFaqs } from "@/components/resources/GuidanceFaqs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { careGuides } from "@/content/guides";
import { buildPageMetadata, canonicalUrl } from "@/lib/seo";

export const metadata = buildPageMetadata({ title: "Resources & Advice", description: "Practical, source-checked guidance for families arranging care in England: getting started, fees, funding, dementia, respite and choosing care.", path: "/resources" });
const categories = ["Planning care", "Costs & funding", "Supporting someone", "Care quality"] as const;

export default function ResourcesPage() {
  return <Container size="default" className="py-6 sm:py-10">
    <StructuredDataScript data={{ "@context": "https://schema.org", "@type": "CollectionPage", url: canonicalUrl("/resources"), name: "Resources & Advice", mainEntity: { "@type": "ItemList", itemListElement: careGuides.map((guide, index) => ({ "@type": "ListItem", position: index + 1, name: guide.title, url: canonicalUrl(`/resources/${guide.slug}`) })) } }} />
    <nav aria-label="Breadcrumb" className="mb-6 text-sm"><Link href="/" className="libra-link">Home</Link><span className="mx-2" aria-hidden="true">/</span><span aria-current="page">Resources & Advice</span></nav>
    <header className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-800">A little clarity, when it matters</p><h1 className="mt-3 text-4xl font-semibold tracking-tight text-primary-900 sm:text-5xl">Resources & Advice</h1><p className="mt-5 text-lg leading-8 text-slate-700">Practical guides to help you ask questions, understand your options and plan the next conversation about care at home.</p><p className="mt-5 rounded-xl border border-accent-200 bg-accent-50 p-5 text-sm leading-7 text-slate-700">General guidance for adults and families in England, not personalised medical, legal or financial advice. Each guide links to its primary sources and records when they were checked. National guidance and local council arrangements are clearly distinguished.</p></header>
    <nav aria-label="Browse advice topics" className="my-7 flex flex-wrap gap-x-6 gap-y-2">{categories.map((category, index) => <a key={category} href={`#topic-${index}`} className="libra-link">{category}</a>)}<a href="#frequently-asked-questions" className="libra-link">Questions families ask</a></nav>
    <div className="space-y-10">{categories.map((category, index) => <section key={category} id={`topic-${index}`} className="scroll-mt-52" aria-labelledby={`topic-title-${index}`}>
      {category === "Costs & funding" && <span id="care-fees-funding" className="scroll-mt-52" />}{category === "Supporting someone" && <span id="family-support" className="scroll-mt-52" />}
      <h2 id={`topic-title-${index}`} className="mb-5 text-2xl font-semibold text-primary-900 sm:text-3xl">{category}</h2><div className="grid gap-5 md:grid-cols-2">{careGuides.filter(guide => guide.category === category).map(guide => <article key={guide.slug} id={guide.slug} className="libra-card flex scroll-mt-52 flex-col"><h3 className="text-xl font-semibold text-primary-900">{guide.title}</h3><p className="mt-3 flex-1 leading-7 text-slate-700">{guide.summary}</p><p className="mt-4 text-xs text-slate-600">Sources checked {guide.sourcesCheckedOn}</p><Link href={`/resources/${guide.slug}`} className="libra-link mt-3">Read this guide</Link></article>)}</div>
    </section>)}</div>
    <section id="frequently-asked-questions" className="mt-12 scroll-mt-52"><h2 className="mb-7 text-3xl font-semibold text-primary-900">Questions by topic</h2><div className="grid gap-7 lg:grid-cols-2">{careGuides.map(guide => <GuidanceFaqs key={guide.slug} id={`faq-${guide.slug}`} title={guide.title} level={3} externalSources items={guide.faqs.slice(0, 1)} />)}</div><Link href="/faqs" className="libra-link mt-5">More questions about Libra</Link></section>
    <section id="local-availability" className="mt-12 scroll-mt-52 rounded-2xl bg-primary-50 p-6 sm:p-8"><h2 className="text-2xl font-semibold text-primary-900">A conversation about your own situation</h2><p className="mt-3 max-w-3xl leading-8 text-slate-700">Guidance is a starting point, not confirmation of eligibility, a price or a care package. Speak to our team about suitability and current local availability.</p><div className="mt-5 flex flex-wrap gap-4"><Button href="/contact">Talk to our team</Button><Button href="/areas" variant="secondary">Find your local branch</Button></div></section>
  </Container>;
}