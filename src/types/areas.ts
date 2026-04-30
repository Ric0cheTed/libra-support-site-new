import type { CtaLink, ServiceCardItem } from "@/types/homepage";
import type {
  ServiceFaqsContent,
  ServiceFinalCtaContent,
  ServiceHeroContent,
  ServicePageMetadata,
  ServiceProcessContent,
  ServiceSplitSection,
  ServiceWhyLibraContent,
  ServiceCoverageContent,
} from "@/types/services";

export type AreaPageKey = "todmorden" | "hebdenBridge" | "burnley" | "calderdale";

export type AreaServicesContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceCardItem[];
  note?: string;
  cta: CtaLink;
};

export type AreaOfficeFinderContent = {
  eyebrow: string;
  title: string;
  description: string;
  officeLabel: string;
  addressLines: string[];
  directionsCta: CtaLink;
  callCta: CtaLink;
  visitNote: string;
  localTrustTitle: string;
  localTrustPoints: string[];
};

export type AreaPageContent = {
  areaName: string;
  metadata: ServicePageMetadata;
  hero: ServiceHeroContent;
  intro: ServiceSplitSection;
  officeFinder?: AreaOfficeFinderContent;
  services: AreaServicesContent;
  whyLibra: ServiceWhyLibraContent;
  process: ServiceProcessContent;
  coverage: ServiceCoverageContent;
  faqs: ServiceFaqsContent;
  finalCta: ServiceFinalCtaContent;
};
