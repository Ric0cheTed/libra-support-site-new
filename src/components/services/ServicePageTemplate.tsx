import { ServiceCoverage } from "@/components/services/ServiceCoverage";
import { ServiceFaqs } from "@/components/services/ServiceFaqs";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceIncludes } from "@/components/services/ServiceIncludes";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceWhyLibra } from "@/components/services/ServiceWhyLibra";
import type { ServicePageContent } from "@/types/services";
import { RelatedGuides } from "@/components/resources/RelatedGuides";
import { Container } from "@/components/shared/Container";

type ServicePageTemplateProps = {
  page: ServicePageContent;
};

export function ServicePageTemplate({ page }: ServicePageTemplateProps) {
  return (
    <div className="-mx-4 -mb-8 sm:-mx-6 lg:-mx-8">
      <ServiceHero hero={page.hero} />
      <Container size="wide" className="py-5"><nav aria-label="Service page sections" className="flex flex-wrap gap-x-6"><a href="#service-overview" className="libra-link">About this support</a><a href="#service-questions" className="libra-link">Common questions</a><a href="/resources/" className="libra-link">Resources & Advice</a></nav><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">Suitability, visit arrangements and availability depend on individual needs and your local branch. Please confirm what support is currently available before making plans.</p></Container>
      <div id="service-overview" className="scroll-mt-52">
      <ServiceIntro section={page.intro} />
      </div>
      <ServiceIntro section={page.idealFor} tone="warm" />
      <ServiceIncludes section={page.includes} />
      <ServiceWhyLibra section={page.whyLibra} />
      <ServiceProcess section={page.process} />
      <ServiceCoverage section={page.coverage} />
      <div id="service-questions" className="scroll-mt-52"><ServiceFaqs section={page.faqs} /></div>
      <RelatedGuides contextPath={page.metadata.path} />
      <ServiceFinalCta section={page.finalCta} />
    </div>
  );
}
