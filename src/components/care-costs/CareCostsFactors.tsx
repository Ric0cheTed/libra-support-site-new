import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrustItem } from "@/components/shared/TrustItem";
import type { CareCostsPageContent } from "@/types/care-costs";

type CareCostsFactorsProps = {
  section: CareCostsPageContent["factors"];
};

export function CareCostsFactors({ section }: CareCostsFactorsProps) {
  return (
    <section className="bg-stone-50/80 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          className="max-w-3xl"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {section.items.map((item) => (
            <TrustItem key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}
