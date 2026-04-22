import Image from "next/image";
import { CheckCircle2, PhoneCall, ShieldCheck } from "lucide-react";

import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";

export function HomeHero() {
  const { hero } = homepageContent;

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(63,168,102,0.16),_transparent_35%),linear-gradient(180deg,_#f7f4ec_0%,_#ffffff_55%,_#f8fafc_100%)]">
      <Container size="wide" className="relative pb-20 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center xl:gap-14">
          <div className="max-w-[35rem]">
            <p className="inline-flex items-center rounded-full border border-stone-300 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700 shadow-sm">
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={hero.primaryCta.href} aria-label={hero.primaryCta.ariaLabel} className="w-full sm:w-auto">
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                aria-label={hero.secondaryCta.ariaLabel}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>

            <ul className="mt-8 grid gap-3 rounded-[1.75rem] border border-stone-200/80 bg-white/80 p-5 text-sm text-slate-700 shadow-[0_18px_45px_-38px_rgba(15,23,42,0.2)] sm:grid-cols-2 sm:p-6 sm:text-base">
              {hero.trustBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-12 hidden h-32 w-32 rounded-full bg-primary/15 blur-3xl lg:block" />
            <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-amber-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-slate-900 shadow-[0_30px_80px_-36px_rgba(15,23,42,0.5)]">
              <div className="relative h-[380px] sm:h-[500px] lg:h-[560px]">
                {hero.image ? (
                  <Image
                    src={hero.image.src}
                    alt={hero.image.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 42rem, 100vw"
                    className="object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-900/16 to-slate-900/10" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm backdrop-blur-sm">
                    <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                    CQC-regulated
                  </div>
                  <div className="hidden rounded-full border border-white/20 bg-slate-950/65 px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur sm:block">
                    Todmorden and Calderdale
                  </div>
                </div>

                {hero.supportCard ? (
				  <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-stone-200/80 bg-white/94 p-5 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.35)] sm:bottom-6 sm:left-auto sm:right-6 sm:w-[22rem] sm:p-6">
					{hero.supportCard.eyebrow ? (
					  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-amber-700">
						{hero.supportCard.eyebrow}
					  </p>
					) : null}
					<h2 className="mt-2 text-xl font-semibold leading-snug text-slate-950">
					  {hero.supportCard.title}
					</h2>
					<p className="mt-3 text-sm leading-7 text-slate-700">
					  {hero.supportCard.description}
					</p>
					{hero.supportCard.meta ? (
					  <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
						<PhoneCall className="h-4 w-4" aria-hidden="true" />
						{hero.supportCard.meta}
					  </p>
					) : null}
				  </div>
				) : null}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}