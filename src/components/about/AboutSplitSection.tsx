import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { AboutTextSection } from "@/types/about";

type AboutSplitSectionProps = {
  section: AboutTextSection;
  tone?: "default" | "warm";
};

export function AboutSplitSection({
  section,
  tone = "default",
}: AboutSplitSectionProps) {
  return (
    <section className={tone === "warm" ? "bg-stone-50/80 py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
          <div
            className={
              tone === "warm"
                ? "rounded-[2rem] border border-stone-200/80 bg-[linear-gradient(180deg,rgba(247,244,239,0.92),rgba(255,255,255,0.98))] p-6 shadow-[0_24px_60px_-44px_rgba(15,23,42,0.24)] sm:p-8"
                : "rounded-[2rem] border border-stone-200/80 bg-stone-50/80 p-6 shadow-[0_24px_60px_-44px_rgba(15,23,42,0.18)] sm:p-8"
            }
          >
            <ul className="space-y-4 text-sm leading-7 text-slate-600 sm:text-[0.98rem]">
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
        </div>
      </Container>
    </section>
  );
}
