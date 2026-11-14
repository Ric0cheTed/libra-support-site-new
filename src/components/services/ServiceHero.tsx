import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { HeroMediaSupportCard } from "@/components/shared/HeroMediaSupportCard";
import type { ServiceHeroContent } from "@/types/services";
import { getHeroPresentation } from "@/content/presentation-assets";

export function ServiceHero({ hero }: { hero: ServiceHeroContent }) {
  const showMedia = hero.showMedia !== false;
  const image = getHeroPresentation(hero.image.src);
  return <section className="border-y border-primary/10 bg-[#f5f4eb] py-10 sm:py-14">
    <Container size="wide"><div className={showMedia ? "grid items-start gap-8 lg:grid-cols-2 lg:gap-12" : "mx-auto max-w-4xl"}>
      <div className="min-w-0"><p className="text-xs font-semibold uppercase leading-6 tracking-[0.14em] text-primary-800">{hero.eyebrow}</p><h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-primary-900 sm:text-5xl">{hero.title}</h1><p className="mt-5 max-w-3xl leading-8 text-slate-700 sm:text-lg">{hero.description}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button><Button href={hero.secondaryCta.href} variant="secondary">{hero.secondaryCta.label}</Button></div>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">{hero.highlights.map(highlight => <li key={highlight} className="flex min-w-0 items-start gap-3 rounded-xl border border-primary/10 bg-white p-4"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary-800" aria-hidden="true" /><span className="min-w-0 text-sm leading-7 text-slate-700">{highlight}</span></li>)}</ul>
      </div>
      {showMedia && <figure className="min-w-0"><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-8 border-white bg-primary-100"><Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1280px) 640px, (min-width: 1024px) 48vw, 100vw" priority /></div><figcaption className="mt-3 text-xs leading-6 text-slate-600">{image.caption}</figcaption>{hero.supportCard && <div className="mt-4"><HeroMediaSupportCard eyebrow={hero.supportCard.eyebrow} title={hero.supportCard.title} description={hero.supportCard.description} /></div>}</figure>}
    </div></Container>
  </section>;
}