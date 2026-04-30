import Link from "next/link";
import { MapPin } from "lucide-react";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ServiceCoverageContent } from "@/types/services";

type ServiceCoverageProps = {
  section: ServiceCoverageContent;
};

export function ServiceCoverage({ section }: ServiceCoverageProps) {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(250,248,244,0.82),rgba(255,255,255,1))] py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            className="max-w-xl"
          />
          <div className="rounded-[2rem] border border-stone-200/80 bg-white p-6 shadow-[0_28px_70px_-52px_rgba(15,23,42,0.35)] sm:p-8">
            <div className="flex flex-wrap gap-3">
              {section.areas.map((area) => (
                <Link
                  key={area.label}
                  href={area.href}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-accent/60 hover:bg-accent-50"
                >
                  <MapPin className="h-4 w-4 text-accent-700" aria-hidden="true" />
                  {area.label}
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[0.98rem]">
              If you are nearby and unsure whether we cover your location, speak with our team and we will guide you
              clearly on current availability.
            </p>
            <div className="mt-6">
              <Button href={section.cta.href} variant="secondary">
                {section.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
