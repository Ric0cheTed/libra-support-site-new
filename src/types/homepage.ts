export type CtaLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type HeaderNavItem = {
  title: string;
  href: string;
  subItems?: HeaderNavItem[];
};

export type TrustItem = {
  title: string;
  description: string;
};

export type ServiceCardItem = {
  title: string;
  description: string;
  href: string;
};

export type WhyLibraItem = TrustItem;

export type ProcessStepItem = {
  title: string;
  description: string;
};

export type AreaCardItem = {
  title: string;
  description: string;
  href: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  location: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CareCostsContent = {
  eyebrow: string;
  title: string;
  description: string;
  supportPoints: string[];
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export type FinalCtaContent = {
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export type TeamSpotlightContent = {
  eyebrow: string;
  title: string;
  description: string;
  cta: CtaLink;
  image: HeroVisual;
};

export type HeroSupportCard = {
  eyebrow?: string;
  title: string;
  description: string;
  meta?: string;
};

export type HeroVisual = {
  src: string;
  alt: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  trustBullets: string[];
  supportCard?: HeroSupportCard;
  image?: HeroVisual;
};

export type HomepageContent = {
  utilityTrustStripText: string;
  header: {
    navItems: HeaderNavItem[];
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  hero: HeroContent;
  trustBarItems: TrustItem[];
  servicesPreview: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceCardItem[];
    cta: CtaLink;
  };
  whyLibra: {
    eyebrow: string;
    title: string;
    description: string;
    items: WhyLibraItem[];
    cta: CtaLink;
  };
  careProcess: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStepItem[];
    cta: CtaLink;
  };
  areasCoverage: {
    eyebrow: string;
    title: string;
    description: string;
    items: AreaCardItem[];
    cta: CtaLink;
  };
  careCosts: CareCostsContent;
  teamSpotlight: TeamSpotlightContent;
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: TestimonialItem[];
  };
  faqTeaser: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
    cta: CtaLink;
  };
  finalCta: FinalCtaContent;
};
