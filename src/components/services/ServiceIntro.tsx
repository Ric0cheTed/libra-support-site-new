import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ServiceSplitSection } from "@/types/services";

type ServiceIntroProps = {
  section: ServiceSplitSection;
  tone?: "plain" | "warm";
};

export function ServiceIntro({ section, tone = "plain" }: ServiceIntroProps) {
  return (
    <section className={tone === "warm" ? "bg-stone-50/80 py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            className="max-w-xl"
          />
          <div className="rounded-[2rem] border border-stone-200/80 bg-white p-6 shadow-[0_28px_70px_-52px_rgba(15,23,42,0.35)] sm:p-8">
            <div className="space-y-5">
              {section.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm leading-7 text-slate-600 sm:text-[0.98rem]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
