import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";

export function HomeServicesPreview() {
  const { servicesPreview } = homepageContent;

  return (
    <section className="bg-[linear-gradient(180deg,_#ffffff_0%,_#f7f4ec_100%)] py-20 sm:py-24">
      <Container size="wide" className="space-y-10 sm:space-y-12">
        <SectionHeading
          eyebrow={servicesPreview.eyebrow}
          title={servicesPreview.title}
          description={servicesPreview.description}
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {servicesPreview.items.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button href={servicesPreview.cta.href} className="w-full sm:w-auto">
            {servicesPreview.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
