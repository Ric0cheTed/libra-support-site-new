import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";

export function HomeHero() {
  const { hero } = homepageContent;

  return (
    <section className="relative overflow-hidden bg-[#f5f4eb]" aria-labelledby="home-title">
      <Container size="wide" className="relative grid gap-9 py-10 sm:py-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12 lg:py-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase leading-6 tracking-[0.13em] text-primary-800">{hero.eyebrow}</p>
          <h1 id="home-title" className="mt-4 text-[2.5rem] font-semibold leading-[1.12] tracking-tight text-primary-900 sm:text-5xl lg:text-[3.5rem]">{hero.title}</h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">{hero.description}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={hero.primaryCta.href}>Enquire about care <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></Button>
            <Button href={hero.secondaryCta.href} variant="secondary">{hero.secondaryCta.label}</Button>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-primary-900">
            {hero.trustBullets.map((bullet) => <li key={bullet} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />{bullet}</li>)}
          </ul>
          <Link href="/#care-quality" className="libra-link mt-3 text-sm">See our branch-specific CQC information <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
        </div>
        <figure className="min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-8 border-white bg-primary-100 shadow-sm sm:aspect-[5/4]">
            {hero.image && <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="(min-width: 1280px) 640px, (min-width: 1024px) 48vw, (min-width: 640px) 90vw, 100vw" className="object-cover object-[42%_center]" />}
          </div>
          <figcaption className="mt-3 px-2 text-xs leading-5 text-slate-600">Illustrative care image, not a photograph of Libra staff or a person receiving Libra care.</figcaption>
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-accent-200 bg-white px-5 py-4">
            <span className="h-10 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <p className="text-sm leading-6 text-primary-900"><span className="block font-semibold">Care with a local connection</span>From the Calder Valley to our Burnley community.</p>
          </div>
        </figure>
      </Container>
    </section>
  );
}