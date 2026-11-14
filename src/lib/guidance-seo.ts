import { getGuideSources, type CareGuide } from "@/content/guides";
import { buildPageMetadata, canonicalUrl, seo } from "@/lib/seo";

export function getGuideMetadata(guide: CareGuide) {
  return buildPageMetadata({ title: guide.title, description: guide.summary, path: `/resources/${guide.slug}` });
}

export function getGuideStructuredData(guide: CareGuide) {
  const url = canonicalUrl(`/resources/${guide.slug}`);
  return {
    "@context": "https://schema.org", "@type": "Article", "@id": `${url}#article`, url,
    headline: guide.title, description: guide.summary, inLanguage: "en-GB",
    dateModified: guide.sourcesCheckedOn,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    publisher: { "@id": `${seo.siteUrl}/#localbusiness`, name: seo.siteName },
    citation: getGuideSources(guide).map(source => source.url),
    isPartOf: { "@type": "CollectionPage", "@id": canonicalUrl("/resources"), name: "Resources & Advice" },
  };
}

export function getGuideBreadcrumbs(guide: CareGuide) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/") },
    { "@type": "ListItem", position: 2, name: "Resources & Advice", item: canonicalUrl("/resources") },
    { "@type": "ListItem", position: 3, name: guide.title, item: canonicalUrl(`/resources/${guide.slug}`) },
  ] };
}
