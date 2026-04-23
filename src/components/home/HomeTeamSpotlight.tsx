import Image from "next/image";

import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function HomeTeamSpotlight() {
  const { teamSpotlight } = homepageContent;

  return (
    <section className="bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfbf8_100%)] py-20 sm:py-24">
      <Container
        size="wide"
        className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12"
      >
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-primary/10 blur-2xl lg:block" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-stone-200/80 bg-stone-100 shadow-[0_28px_70px_-45px_rgba(15,23,42,0.3)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={teamSpotlight.image.src}
                alt={teamSpotlight.image.alt}
                fill
                sizes="(min-width: 1024px) 42rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow={teamSpotlight.eyebrow}
            title={teamSpotlight.title}
            description={teamSpotlight.description}
            className="max-w-xl"
          />
          <Button href={teamSpotlight.cta.href} className="mt-8 w-full sm:w-auto">
            {teamSpotlight.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
