import { ServiceCoverage } from "@/components/services/ServiceCoverage";
import { ServiceFaqs } from "@/components/services/ServiceFaqs";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceIncludes } from "@/components/services/ServiceIncludes";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceWhyLibra } from "@/components/services/ServiceWhyLibra";
import type { ServicePageContent } from "@/types/services";

type ServicePageTemplateProps = {
  page: ServicePageContent;
};

export function ServicePageTemplate({ page }: ServicePageTemplateProps) {
  return (
    <div className="-mx-4 -mb-8 sm:-mx-6 lg:-mx-8">
      <ServiceHero hero={page.hero} />
      <ServiceIntro section={page.intro} />
      <ServiceIntro section={page.idealFor} tone="warm" />
      <ServiceIncludes section={page.includes} />
      <ServiceWhyLibra section={page.whyLibra} />
      <ServiceProcess section={page.process} />
      <ServiceCoverage section={page.coverage} />
      <ServiceFaqs section={page.faqs} />
      <ServiceFinalCta section={page.finalCta} />
    </div>
  );
}
