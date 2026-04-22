import { Accordion } from "@/components/shared/Accordion";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareCostsPageContent } from "@/types/care-costs";

type CareCostsFaqsProps = {
  section: CareCostsPageContent["faqs"];
};

export function CareCostsFaqs({ section }: CareCostsFaqsProps) {
  return (
    <section className="bg-stone-50/80 py-16 sm:py-20">
      <Container size="narrow">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          className="max-w-3xl"
        />
        <Accordion items={section.items} className="mt-10" />
        <div className="mt-8 flex justify-start">
          <Button href={section.cta.href} variant="secondary">
            {section.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
