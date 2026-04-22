import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import type { AreaPageContent } from "@/types/areas";

type AreaFinalCtaProps = {
  section: AreaPageContent["finalCta"];
};

export function AreaFinalCta({ section }: AreaFinalCtaProps) {
  return <ServiceFinalCta section={section} />;
}
