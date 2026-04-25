import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Accordion } from "@/components/shared/Accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ServiceFaqsContent } from "@/types/services";

type ServiceFaqsProps = {
  section: ServiceFaqsContent;
};

export function ServiceFaqs({ section }: ServiceFaqsProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container size="narrow">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />
        <Accordion items={section.items} className="mt-10" />
        <div className="mt-8 flex justify-center">
          <Button href={section.cta.href} variant="secondary">
            {section.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
