import { ServiceCoverage } from "@/components/services/ServiceCoverage";
import { ServiceFaqs } from "@/components/services/ServiceFaqs";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceWhyLibra } from "@/components/services/ServiceWhyLibra";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { getServicesHubContent } from "@/content/services";

export default function ServicesContent() {
  const content = getServicesHubContent();

  return (
    <div className="-mx-4 -mb-8 sm:-mx-6 lg:-mx-8">
      <ServiceHero hero={content.hero} />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={content.servicesSection.eyebrow}
            title={content.servicesSection.title}
            description={content.servicesSection.description}
            align="center"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.servicesSection.items.map((service) => (
              <ServiceCard key={`${service.title}-${service.href}`} {...service} />
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-[1.8rem] border border-stone-200/80 bg-stone-50/85 px-6 py-7 text-center shadow-[0_24px_60px_-44px_rgba(15,23,42,0.28)] sm:px-8">
            {content.servicesSection.supportingNote ? (
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {content.servicesSection.supportingNote}
              </p>
            ) : null}
            <div className="mt-6 flex justify-center">
              <Button href={content.servicesSection.cta.href} variant="secondary">
                {content.servicesSection.cta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <ServiceWhyLibra section={content.whyLibra} />
      <ServiceProcess section={content.process} />
      <ServiceCoverage section={content.coverage} />
      <ServiceFaqs section={content.faqs} />
      <ServiceFinalCta section={content.finalCta} />
    </div>
  );
}
