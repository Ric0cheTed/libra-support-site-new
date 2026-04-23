import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import type { ServiceFinalCtaContent } from "@/types/services";

type ServiceFinalCtaProps = {
  section: ServiceFinalCtaContent;
};

export function ServiceFinalCta({ section }: ServiceFinalCtaProps) {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,127,70,0.22),rgba(15,23,42,0.92))] px-6 py-10 shadow-[0_32px_90px_-54px_rgba(15,23,42,0.72)] sm:px-8 sm:py-12 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-[2.6rem]">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">{section.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Button href={section.primaryCta.href}>{section.primaryCta.label}</Button>
              <Button href={section.secondaryCta.href} variant="secondary">
                {section.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
