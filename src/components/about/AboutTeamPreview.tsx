import Image from "next/image";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { AboutTeamPreviewSection } from "@/types/about";

type AboutTeamPreviewProps = {
  section: AboutTeamPreviewSection;
};

export function AboutTeamPreview({ section }: AboutTeamPreviewProps) {
  return (
    <section className="bg-stone-50/80 py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(320px,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-stone-100 shadow-[0_30px_90px_-54px_rgba(15,23,42,0.42)]">
            <div className="relative min-h-[20rem] sm:min-h-[24rem]">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.38))]"
                aria-hidden="true"
              />
            </div>
            <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.45)] sm:left-6 sm:top-6">
              People behind the service
            </div>
          </div>

          <div className="space-y-6">
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
            <div className="space-y-4">
              {section.people.map((person) => (
                <article
                  key={person.name}
                  className="rounded-[1.6rem] border border-stone-200/80 bg-white p-5 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.22)] sm:p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[0.98rem]">
                    {person.description}
                  </p>
                </article>
              ))}
            </div>
            <Button href={section.cta.href} variant="secondary">
              {section.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
