import { Accordion } from "@/components/shared/Accordion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ContactContent } from "@/types/contact";

type ContactFaqSectionProps = {
  section: ContactContent["faqs"];
};

export function ContactFaqSection({ section }: ContactFaqSectionProps) {
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
      </Container>
    </section>
  );
}
