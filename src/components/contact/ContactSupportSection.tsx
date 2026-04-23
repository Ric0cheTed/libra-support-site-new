import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { ProcessStep } from "@/components/shared/ProcessStep";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ContactContent } from "@/types/contact";

type ContactSupportSectionProps = {
  section: ContactContent["support"];
};

export function ContactSupportSection({ section }: ContactSupportSectionProps) {
  return (
    <section className="bg-stone-50/80 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {section.steps.map((step, index) => (
            <ProcessStep key={step.title} stepNumber={index + 1} {...step} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="#contact-form">Send an Enquiry</Button>
        </div>
      </Container>
    </section>
  );
}
