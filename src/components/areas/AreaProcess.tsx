import { ServiceProcess } from "@/components/services/ServiceProcess";
import type { AreaPageContent } from "@/types/areas";

type AreaProcessProps = {
  section: AreaPageContent["process"];
};

export function AreaProcess({ section }: AreaProcessProps) {
  return <ServiceProcess section={section} />;
}
