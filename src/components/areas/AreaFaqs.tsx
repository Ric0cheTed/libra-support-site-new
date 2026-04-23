import { ServiceFaqs } from "@/components/services/ServiceFaqs";
import type { AreaPageContent } from "@/types/areas";

type AreaFaqsProps = {
  section: AreaPageContent["faqs"];
};

export function AreaFaqs({ section }: AreaFaqsProps) {
  return <ServiceFaqs section={section} />;
}
