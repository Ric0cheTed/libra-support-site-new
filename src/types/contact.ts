import type { CtaLink, FaqItem } from "@/types/homepage";
import type { ProcessStepItem } from "@/types/homepage";
import type {
  ServiceFinalCtaContent,
  ServiceHeroContent,
  ServicePageMetadata,
} from "@/types/services";

export type ContactMethodKind =
  | "call"
  | "email"
  | "enquiry"
  | "office"
  | "whatsapp"
  | "careers";

export type ContactMethodItem = {
  kind: ContactMethodKind;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  detail?: string;
  detailLines?: string[];
  ctaVariant?: "primary" | "secondary";
};

export type ContactContent = {
  metadata: ServicePageMetadata;
  hero: ServiceHeroContent;
  methods: {
    eyebrow: string;
    title: string;
    description: string;
    items: ContactMethodItem[];
  };
  support: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStepItem[];
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
    guidanceTitle: string;
    guidancePoints: string[];
    supportLinks: CtaLink[];
  };
  location: {
    eyebrow: string;
    title: string;
    description: string;
    officeLabel: string;
    addressLines: string[];
    openingHours: string;
    directionsCta: CtaLink;
    areasLabel: string;
    areas: string[];
    note: string;
    mapTitle: string;
  };
  faqs: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  finalCta: ServiceFinalCtaContent;
};
