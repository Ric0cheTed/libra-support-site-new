import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { ProcessStep } from "@/components/shared/ProcessStep";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ServiceProcessContent } from "@/types/services";

type ServiceProcessProps = {
  section: ServiceProcessContent;
};

export function ServiceProcess({ section }: ServiceProcessProps) {
  return (
    <section className="bg-stone-50/80 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {section.steps.map((step, index) => (
            <ProcessStep key={step.title} stepNumber={index + 1} {...step} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href={section.cta.href}>{section.cta.label}</Button>
        </div>
      </Container>
    </section>
  );
}
