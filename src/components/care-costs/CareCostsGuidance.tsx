import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrustItem } from "@/components/shared/TrustItem";
import type { CareCostsPageContent } from "@/types/care-costs";

type CareCostsGuidanceProps = {
  section: CareCostsPageContent["guidance"];
};

export function CareCostsGuidance({ section }: CareCostsGuidanceProps) {
  return (
    <section className="bg-stone-50/80 py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
            <Button href={section.cta.href}>{section.cta.label}</Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {section.items.map((item) => (
              <TrustItem key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
