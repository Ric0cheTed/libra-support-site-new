import { CareCostsFaqs } from "@/components/care-costs/CareCostsFaqs";
import { CareCostsFactors } from "@/components/care-costs/CareCostsFactors";
import { CareCostsGuidance } from "@/components/care-costs/CareCostsGuidance";
import { CareCostsLocal } from "@/components/care-costs/CareCostsLocal";
import { CareCostsOverview } from "@/components/care-costs/CareCostsOverview";
import { CareCostsSupportOptions } from "@/components/care-costs/CareCostsSupportOptions";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { ServiceHero } from "@/components/services/ServiceHero";
import type { CareCostsPageContent } from "@/types/care-costs";

type CareCostsPageTemplateProps = {
  page: CareCostsPageContent;
};

export function CareCostsPageTemplate({ page }: CareCostsPageTemplateProps) {
  return (
    <div className="-mx-4 -mb-8 sm:-mx-6 lg:-mx-8">
      <ServiceHero hero={page.hero} />
      <CareCostsOverview section={page.overview} />
      <CareCostsFactors section={page.factors} />
      <CareCostsSupportOptions section={page.supportOptions} />
      <CareCostsGuidance section={page.guidance} />
      <CareCostsLocal section={page.local} />
      <CareCostsFaqs section={page.faqs} />
      <ServiceFinalCta section={page.finalCta} />
    </div>
  );
}
