import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { ProcessStep } from "@/components/shared/ProcessStep";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function HomeCareProcess() {
  const { careProcess } = homepageContent;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,_#f7f4ec_0%,_#ffffff_100%)] py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(63,168,102,0.14),_transparent_65%)]" aria-hidden="true" />
      <Container size="wide" className="relative space-y-10 sm:space-y-12">
        <SectionHeading
          eyebrow={careProcess.eyebrow}
          title={careProcess.title}
          description={careProcess.description}
          align="center"
        />

        <div className="relative">
          <div className="absolute left-[8%] right-[8%] top-6 hidden h-px bg-stone-200 xl:block" aria-hidden="true" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {careProcess.steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button href={careProcess.cta.href} className="w-full sm:w-auto">
            {careProcess.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
