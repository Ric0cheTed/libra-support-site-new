import type { CtaLink, FaqItem, ServiceCardItem, TrustItem } from "@/types/homepage";
import type {
  ServiceFinalCtaContent,
  ServiceHeroContent,
  ServicePageMetadata,
} from "@/types/services";

export type CareCostsRateCard = {
  title: string;
  amount: string;
  description: string;
  note?: string;
};

export type CareCostsExample = {
  label: string;
  urban: string;
  rural: string;
};

export type CareCostsPageContent = {
  metadata: ServicePageMetadata;
  hero: ServiceHeroContent;
  overview: {
    eyebrow: string;
    title: string;
    description: string;
    rateCards: CareCostsRateCard[];
    examplesTitle: string;
    examples: CareCostsExample[];
    examplesNote: string;
    includedTitle: string;
    includedDescription: string;
    inclusions: string[];
    note?: string;
  };
  factors: {
    eyebrow: string;
    title: string;
    description: string;
    items: TrustItem[];
  };
  supportOptions: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceCardItem[];
    note?: string;
    cta: CtaLink;
  };
  guidance: {
    eyebrow: string;
    title: string;
    description: string;
    items: TrustItem[];
    cta: CtaLink;
  };
  local: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
    areasLabel: string;
    areas: string[];
    note: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  faqs: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
    cta: CtaLink;
  };
  finalCta: ServiceFinalCtaContent;
};
