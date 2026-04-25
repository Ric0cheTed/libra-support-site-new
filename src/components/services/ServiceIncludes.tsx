import { Check } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ServiceIncludesContent } from "@/types/services";

type ServiceIncludesProps = {
  section: ServiceIncludesContent;
};

export function ServiceIncludes({ section }: ServiceIncludesProps) {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(250,248,244,0.75),rgba(255,255,255,0.98))] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <article
              key={item}
              className="rounded-[1.75rem] border border-stone-200/80 bg-white p-6 shadow-[0_24px_60px_-48px_rgba(15,23,42,0.34)] sm:p-7"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">{item}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
