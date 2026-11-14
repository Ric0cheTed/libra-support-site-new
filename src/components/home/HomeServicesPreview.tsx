import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";

export function HomeServicesPreview() {
  const { servicesPreview } = homepageContent;

  return (
    <section id="care-services" className="libra-section bg-background">
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

        <p className="text-center text-sm leading-6 text-slate-600">Services and visit arrangements depend on individual needs, your local branch and current availability. Please ask our team what is available in your area.</p>
        <div className="flex justify-center">
          <Button href={servicesPreview.cta.href} className="w-full sm:w-auto">
            {servicesPreview.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
