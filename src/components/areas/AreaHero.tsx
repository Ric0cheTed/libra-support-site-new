import { ServiceHero } from "@/components/services/ServiceHero";
import type { AreaPageContent } from "@/types/areas";

type AreaHeroProps = {
  hero: AreaPageContent["hero"];
};

export function AreaHero({ hero }: AreaHeroProps) {
  return <ServiceHero hero={hero} />;
}
