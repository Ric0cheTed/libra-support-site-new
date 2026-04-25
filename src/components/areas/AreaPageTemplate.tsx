import { AreaCoverage } from "@/components/areas/AreaCoverage";
import { AreaFaqs } from "@/components/areas/AreaFaqs";
import { AreaFinalCta } from "@/components/areas/AreaFinalCta";
import { AreaHero } from "@/components/areas/AreaHero";
import { AreaIntro } from "@/components/areas/AreaIntro";
import { AreaProcess } from "@/components/areas/AreaProcess";
import { AreaServices } from "@/components/areas/AreaServices";
import { AreaWhyLibra } from "@/components/areas/AreaWhyLibra";
import { absoluteUrl, seo } from "@/lib/seo";
import type { AreaPageContent } from "@/types/areas";

type AreaPageTemplateProps = {
  page: AreaPageContent;
};

export function AreaPageTemplate({ page }: AreaPageTemplateProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Home care",
    areaServed: {
      "@type": "Place",
      name: page.areaName,
    },
    provider: {
      "@id": `${seo.siteUrl}/#localbusiness`,
      name: seo.siteName,
      url: seo.siteUrl,
    },
    url: absoluteUrl(page.metadata.path),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
      />
      <div className="-mx-4 -mb-8 sm:-mx-6 lg:-mx-8">
        <AreaHero hero={page.hero} />
        <AreaIntro section={page.intro} />
        <AreaServices section={page.services} />
        <AreaWhyLibra section={page.whyLibra} />
        <AreaProcess section={page.process} />
        <AreaCoverage section={page.coverage} />
        <AreaFaqs section={page.faqs} />
        <AreaFinalCta section={page.finalCta} />
      </div>
    </>
  );
}
