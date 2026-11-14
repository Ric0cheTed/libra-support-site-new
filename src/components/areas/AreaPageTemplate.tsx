import { AreaCoverage } from "@/components/areas/AreaCoverage";
import { AreaFaqs } from "@/components/areas/AreaFaqs";
import { AreaFinalCta } from "@/components/areas/AreaFinalCta";
import { AreaHero } from "@/components/areas/AreaHero";
import { AreaIntro } from "@/components/areas/AreaIntro";
import { AreaOfficeFinder } from "@/components/areas/AreaOfficeFinder";
import { AreaProcess } from "@/components/areas/AreaProcess";
import { AreaServices } from "@/components/areas/AreaServices";
import { AreaWhyLibra } from "@/components/areas/AreaWhyLibra";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { absoluteUrl, seo } from "@/lib/seo";
import type { AreaPageContent } from "@/types/areas";
import { RelatedGuides } from "@/components/resources/RelatedGuides";
import { Container } from "@/components/shared/Container";

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
      <StructuredDataScript data={structuredData} />
      <div className="-mx-4 -mb-8 sm:-mx-6 lg:-mx-8">
        <AreaHero hero={page.hero} />
        <Container size="wide" className="py-5"><nav aria-label="Area page sections" className="flex flex-wrap gap-x-6"><a href="#local-support" className="libra-link">Local support</a><a href="#local-questions" className="libra-link">Common questions</a><a href="/areas/" className="libra-link">All areas</a></nav><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">Our existing branch coverage is a starting point, not confirmation of capacity for a particular care package. Ask the team about your needs, postcode and current availability.</p></Container>
        <div id="local-support" className="scroll-mt-52">
        <AreaIntro section={page.intro} />
        </div>
        {page.officeFinder ? <AreaOfficeFinder section={page.officeFinder} /> : null}
        <AreaServices section={page.services} />
        <AreaWhyLibra section={page.whyLibra} />
        <AreaProcess section={page.process} />
        <AreaCoverage section={page.coverage} />
        <div id="local-questions" className="scroll-mt-52"><AreaFaqs section={page.faqs} /></div>
        <RelatedGuides contextPath={page.metadata.path} title={`Planning care around ${page.areaName}`} />
        <AreaFinalCta section={page.finalCta} />
      </div>
    </>
  );
}
