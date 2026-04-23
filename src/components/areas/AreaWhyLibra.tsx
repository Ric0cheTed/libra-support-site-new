import { ServiceWhyLibra } from "@/components/services/ServiceWhyLibra";
import type { AreaPageContent } from "@/types/areas";

type AreaWhyLibraProps = {
  section: AreaPageContent["whyLibra"];
};

export function AreaWhyLibra({ section }: AreaWhyLibraProps) {
  return <ServiceWhyLibra section={section} />;
}
