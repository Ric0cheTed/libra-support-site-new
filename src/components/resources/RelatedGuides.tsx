import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { careGuides } from "@/content/guides";

export function RelatedGuides({ contextPath, title = "A little guidance for the next step" }: { contextPath: string; title?: string }) {
  const relevant = careGuides.filter(guide => guide.relatedServices.some(link => link.href === contextPath));
  const guides = (relevant.length ? relevant : careGuides.filter(guide => ["starting-home-care", "care-funding", "choosing-a-care-provider"].includes(guide.slug))).slice(0, 3);
  return <section className="libra-section bg-[#f8eee5]" aria-label="Related care guidance"><Container size="wide"><h2 className="max-w-3xl text-3xl font-semibold text-primary-900">{title}</h2><p className="mt-4 max-w-3xl leading-7 text-slate-700">General information for families in England, with sources and check dates. Individual care, costs and availability need a separate conversation.</p><div className="my-7 grid gap-5 md:grid-cols-3">{guides.map(guide => <article key={guide.slug} className="libra-card"><p className="text-xs font-medium text-accent-900">{guide.category}</p><h3 className="mt-3 text-xl font-semibold text-primary-900">{guide.title}</h3><p className="mt-3 text-sm leading-7 text-slate-700">{guide.summary}</p><Link href={`/resources/${guide.slug}`} className="libra-link mt-3">Read this guide</Link></article>)}</div><Button href="/resources" variant="secondary">All Resources & Advice</Button></Container></section>;
}
