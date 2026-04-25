import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { HeroMediaSupportCard } from "@/components/shared/HeroMediaSupportCard";
import type { ServiceHeroContent } from "@/types/services";

type ServiceHeroProps = {
  hero: ServiceHeroContent;
};

export function ServiceHero({ hero }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(247,244,239,0.88),rgba(255,255,255,0.98))] pb-16 pt-10 sm:pb-20 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-px bg-stone-200/80" aria-hidden="true" />
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-slate-600 sm:text-xs">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 max-w-[16ch] text-4xl font-semibold leading-[1.03] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.7rem]">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {hero.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {hero.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-[1.5rem] border border-stone-200/80 bg-white/90 px-4 py-4 shadow-[0_20px_48px_-40px_rgba(15,23,42,0.35)]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm font-medium leading-6 text-slate-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(34,127,70,0.15),transparent_58%)] blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-stone-100 shadow-[0_30px_90px_-54px_rgba(15,23,42,0.42)]">
              <div className="relative min-h-[21rem] sm:min-h-[27rem]">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  priority
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.46))]"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/96 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-800 shadow-[0_24px_45px_-30px_rgba(15,23,42,0.5)] backdrop-blur-md sm:left-6 sm:top-6">
                Local, CQC-regulated support
              </div>
              {hero.supportCard ? (
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                  <HeroMediaSupportCard
                    eyebrow={hero.supportCard.eyebrow}
                    title={hero.supportCard.title}
                    description={hero.supportCard.description}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
