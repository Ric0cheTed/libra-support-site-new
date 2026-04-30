import { MapPin, PhoneCall } from "lucide-react";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { AreaPageContent } from "@/types/areas";

type AreaOfficeFinderProps = {
  section: NonNullable<AreaPageContent["officeFinder"]>;
};

export function AreaOfficeFinder({ section }: AreaOfficeFinderProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start lg:gap-12">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            className="max-w-xl"
          />

          <div className="grid gap-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="rounded-[2rem] border border-primary/10 bg-primary-50/50 p-6 shadow-[0_28px_70px_-52px_rgba(15,23,42,0.35)] sm:p-8">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-700">
                    {section.officeLabel}
                  </p>
                  <address className="mt-4 not-italic text-base leading-8 text-slate-800">
                    {section.addressLines.map((line, index) => (
                      <span key={`${line}-${index}`} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>

              <p className="mt-6 border-l-4 border-accent pl-4 text-sm leading-7 text-slate-700">
                {section.visitNote}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={section.directionsCta.href} variant="secondary">
                  {section.directionsCta.label}
                </Button>
                <Button href={section.callCta.href} aria-label={section.callCta.ariaLabel}>
                  <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />
                  {section.callCta.label}
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-primary/10 bg-white p-6 shadow-[0_28px_70px_-52px_rgba(15,23,42,0.35)] sm:p-8">
              <h3 className="text-2xl font-semibold leading-tight text-slate-950">
                {section.localTrustTitle}
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-[0.98rem]">
                {section.localTrustPoints.map((point) => (
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
          </div>
        </div>
      </Container>
    </section>
  );
}
