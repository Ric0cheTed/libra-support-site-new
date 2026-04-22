import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import type { AreaPageContent } from "@/types/areas";

type AreaServicesProps = {
  section: AreaPageContent["services"];
};

export function AreaServices({ section }: AreaServicesProps) {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(250,248,244,0.82),rgba(255,255,255,1))] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {section.items.map((item) => (
            <ServiceCard key={`${item.title}-${item.href}`} {...item} />
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-[1.8rem] border border-stone-200/80 bg-white/90 px-6 py-7 text-center shadow-[0_24px_60px_-46px_rgba(15,23,42,0.3)] sm:px-8">
          {section.note ? (
            <p className="text-sm leading-7 text-slate-600 sm:text-base">{section.note}</p>
          ) : null}
          <div className="mt-6 flex justify-center">
            <Button href={section.cta.href} variant="secondary">
              {section.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
