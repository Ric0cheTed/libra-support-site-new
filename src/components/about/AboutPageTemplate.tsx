import { AboutFaqSection } from "@/components/about/AboutFaqSection";
import { AboutLocalSupport } from "@/components/about/AboutLocalSupport";
import { AboutSplitSection } from "@/components/about/AboutSplitSection";
import { AboutTeamPreview } from "@/components/about/AboutTeamPreview";
import { AboutTrustSection } from "@/components/about/AboutTrustSection";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { ServiceHero } from "@/components/services/ServiceHero";
import type { AboutPageContent } from "@/types/about";

type AboutPageTemplateProps = {
  page: AboutPageContent;
};

export function AboutPageTemplate({ page }: AboutPageTemplateProps) {
  return (
    <div className="-mx-4 -mb-8 sm:-mx-6 lg:-mx-8">
      <ServiceHero hero={page.hero} />
      <AboutSplitSection section={page.whoWeAre} />
      <AboutSplitSection section={page.approach} tone="warm" />
      <AboutTrustSection section={page.whyLibra} />
      <AboutTrustSection section={page.standards} background="stone" />
      <AboutLocalSupport section={page.localSupport} />
      <AboutTeamPreview section={page.teamPreview} />
      <AboutFaqSection section={page.faqs} />
      <ServiceFinalCta section={page.finalCta} />
    </div>
  );
}
