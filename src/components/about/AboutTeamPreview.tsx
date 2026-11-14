import Image from "next/image";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { AboutTeamPreviewSection } from "@/types/about";
import { getPublicStaff } from "@/content/people";
import { getHeroPresentation } from "@/content/presentation-assets";
import TeamCard from "@/components/ui/team-card";

type AboutTeamPreviewProps = {
  section: AboutTeamPreviewSection;
};

export function AboutTeamPreview({ section }: AboutTeamPreviewProps) {
  const people = getPublicStaff();
  const image = getHeroPresentation(section.image.src);
  return (
    <section className="bg-stone-50/80 py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(320px,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-12">
          <figure className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-stone-100 shadow-[0_30px_90px_-54px_rgba(15,23,42,0.42)]">
            <div className="relative min-h-[20rem] sm:min-h-[24rem]">
              <Image
                src={image.src}
                alt={image.alt}
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
              Our local roots
            </div>
            <figcaption className="bg-white p-4 text-sm leading-7 text-slate-600">{image.caption}</figcaption>
          </figure>

          <div className="space-y-6">
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
            <div className="space-y-4">
              {people.map(person => <TeamCard key={person.id} staffId={person.id} />)}
              {people.length === 0 && <p className="leading-8 text-slate-700">Speak to our local team to find out who would be involved in your care.</p>}
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
