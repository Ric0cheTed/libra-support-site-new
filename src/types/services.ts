import type {
  CtaLink,
  FaqItem,
  HeroVisual,
  ProcessStepItem,
  ServiceCardItem,
  TrustItem,
} from "@/types/homepage";

export type ServicePageKey =
  | "homeCare"
  | "liveInCare"
  | "respiteCare"
  | "dementiaSupport"
  | "companionship"
  | "personalCare";

export type ServicePageMetadata = {
  title: string;
  description: string;
  path: string;
};

export type ServiceHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  highlights: string[];
  image: HeroVisual;
  showMedia?: boolean;
  supportCard?: {
    eyebrow?: string;
    title: string;
    description: string;
  };
};

export type ServiceSplitSection = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

export type ServiceIncludesContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
};

export type ServiceWhyLibraContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: TrustItem[];
};

export type ServiceProcessContent = {
  eyebrow: string;
  title: string;
  description: string;
  steps: ProcessStepItem[];
  cta: CtaLink;
};

export type ServiceCoverageContent = {
  eyebrow: string;
  title: string;
  description: string;
  areas: CtaLink[];
  cta: CtaLink;
};

export type ServiceFaqsContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
  cta: CtaLink;
};

export type ServiceFinalCtaContent = {
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export type ServicePageContent = {
  metadata: ServicePageMetadata;
  hero: ServiceHeroContent;
  intro: ServiceSplitSection;
  idealFor: ServiceSplitSection;
  includes: ServiceIncludesContent;
  whyLibra: ServiceWhyLibraContent;
  process: ServiceProcessContent;
  coverage: ServiceCoverageContent;
  faqs: ServiceFaqsContent;
  finalCta: ServiceFinalCtaContent;
};

export type ServicesHubContent = {
  hero: ServiceHeroContent;
  servicesSection: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceCardItem[];
    supportingNote?: string;
    cta: CtaLink;
  };
  whyLibra: ServiceWhyLibraContent;
  process: ServiceProcessContent;
  coverage: ServiceCoverageContent;
  faqs: ServiceFaqsContent;
  finalCta: ServiceFinalCtaContent;
};
