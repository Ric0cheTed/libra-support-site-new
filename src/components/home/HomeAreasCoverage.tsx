import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AreaCard } from "@/components/shared/AreaCard";

export function HomeAreasCoverage() {
  const { areasCoverage } = homepageContent;

  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(244,241,232,0.9),_transparent_70%)]" aria-hidden="true" />
      <Container size="wide" className="relative space-y-10 sm:space-y-12">
        <SectionHeading
          eyebrow={areasCoverage.eyebrow}
          title={areasCoverage.title}
          description={areasCoverage.description}
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2 lg:gap-6">
          {areasCoverage.items.map((item) => (
            <AreaCard
              key={item.title}
              title={item.title}
              description={item.description}
              href={item.href}
              iconTone="primary"
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button href={areasCoverage.cta.href} className="w-full sm:w-auto">
            {areasCoverage.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
