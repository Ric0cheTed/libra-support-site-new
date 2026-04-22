import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareCostsPageContent } from "@/types/care-costs";

type CareCostsLocalProps = {
  section: CareCostsPageContent["local"];
};

export function CareCostsLocal({ section }: CareCostsLocalProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
            <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-[0.98rem]">
              {section.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary/80"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-stone-200/80 bg-[linear-gradient(180deg,rgba(247,244,239,0.88),rgba(255,255,255,0.98))] p-6 shadow-[0_28px_70px_-48px_rgba(15,23,42,0.28)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              {section.areasLabel}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {section.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.18)]"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-[0.98rem]">{section.note}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={section.primaryCta.href}>{section.primaryCta.label}</Button>
              <Button href={section.secondaryCta.href} variant="secondary">
                {section.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
