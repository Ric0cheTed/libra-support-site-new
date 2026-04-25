import { CheckCircle2 } from "lucide-react";

import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function HomeCareCosts() {
  const { careCosts } = homepageContent;

  return (
    <section className="bg-[linear-gradient(180deg,_#f7f4ec_0%,_#ffffff_100%)] py-20 sm:py-24">
      <Container
        size="wide"
        className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12"
      >
        <div>
          <SectionHeading
            eyebrow={careCosts.eyebrow}
            title={careCosts.title}
            description={careCosts.description}
            className="max-w-xl"
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={careCosts.primaryCta.href} className="w-full sm:w-auto">
              {careCosts.primaryCta.label}
            </Button>
            <Button href={careCosts.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
              {careCosts.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-stone-200/80 bg-white/80 p-4 shadow-[0_24px_55px_-42px_rgba(15,23,42,0.22)] sm:p-5">
          {careCosts.supportPoints.map((point) => (
            <article
              key={point}
              className="flex items-start gap-4 rounded-[1.6rem] border border-stone-200/80 bg-white px-5 py-5 shadow-[0_18px_42px_-35px_rgba(15,23,42,0.22)]"
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <p className="text-sm font-medium leading-7 text-slate-700 sm:text-base">
                {point}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
