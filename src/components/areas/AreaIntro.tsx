import { ServiceIntro } from "@/components/services/ServiceIntro";
import type { AreaPageContent } from "@/types/areas";

type AreaIntroProps = {
  section: AreaPageContent["intro"];
};

export function AreaIntro({ section }: AreaIntroProps) {
  return <ServiceIntro section={section} />;
}
