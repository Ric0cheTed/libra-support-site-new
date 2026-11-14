import { notFound } from "next/navigation";
import { careGuides, findGuide } from "@/content/guides";
import { GuideArticle } from "@/components/resources/GuideArticle";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { getGuideMetadata, getGuideStructuredData, getGuideBreadcrumbs } from "@/lib/guidance-seo";

export const dynamicParams = false;
export function generateStaticParams() { return careGuides.map(guide => ({ slug: guide.slug })); }
type GuideParams = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: GuideParams) {
  const guide = findGuide((await params).slug);
  if (!guide) notFound();
  return getGuideMetadata(guide);
}
export default async function GuidePage({ params }: GuideParams) {
  const guide = findGuide((await params).slug);
  if (!guide) notFound();
  return <><StructuredDataScript data={getGuideStructuredData(guide)} /><StructuredDataScript data={getGuideBreadcrumbs(guide)} /><GuideArticle guide={guide} /></>;
}
