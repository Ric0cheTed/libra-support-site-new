import type { CtaLink, FaqItem, HeroVisual, TrustItem } from "@/types/homepage";
import type {
  ServiceFinalCtaContent,
  ServiceHeroContent,
  ServicePageMetadata,
} from "@/types/services";

export type AboutTextSection = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

export type AboutCardSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: TrustItem[];
  cta?: CtaLink;
};

export type AboutLocalSection = {
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

export type AboutTeamPreviewPerson = {
  name: string;
  role: string;
  description: string;
};

export type AboutTeamPreviewSection = {
  eyebrow: string;
  title: string;
  description: string;
  image: HeroVisual;
  people: AboutTeamPreviewPerson[];
  cta: CtaLink;
};

export type AboutFaqSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
  cta: CtaLink;
};

export type AboutPageContent = {
  metadata: ServicePageMetadata;
  hero: ServiceHeroContent;
  whoWeAre: AboutTextSection;
  approach: AboutTextSection;
  whyLibra: AboutCardSection;
  standards: AboutCardSection;
  localSupport: AboutLocalSection;
  teamPreview: AboutTeamPreviewSection;
  faqs: AboutFaqSection;
  finalCta: ServiceFinalCtaContent;
};
