import { Accordion } from "@/components/shared/Accordion";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { AboutFaqSection as AboutFaqSectionContent } from "@/types/about";

type AboutFaqSectionProps = {
  section: AboutFaqSectionContent;
};

export function AboutFaqSection({ section }: AboutFaqSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
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
