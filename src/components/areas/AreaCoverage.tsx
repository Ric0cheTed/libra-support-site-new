import { ServiceCoverage } from "@/components/services/ServiceCoverage";
import type { AreaPageContent } from "@/types/areas";

type AreaCoverageProps = {
  section: AreaPageContent["coverage"];
};

export function AreaCoverage({ section }: AreaCoverageProps) {
  return <ServiceCoverage section={section} />;
}
