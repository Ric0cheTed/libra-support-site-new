import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import type { CareCostsPageContent } from "@/types/care-costs";

type CareCostsSupportOptionsProps = {
  section: CareCostsPageContent["supportOptions"];
};

export function CareCostsSupportOptions({ section }: CareCostsSupportOptionsProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          className="max-w-3xl"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {section.items.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {section.note ? (
            <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-[0.98rem]">{section.note}</p>
          ) : (
            <span />
          )}
          <Button href={section.cta.href} variant="secondary">
            {section.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
