import { AreaPageTemplate } from "@/components/areas/AreaPageTemplate";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MobileStickyCallBar } from "@/components/ui/mobile-sticky-call-bar";
import { getAreaPageContent } from "@/content/areas";
import { buildPageMetadata, getBranchAreaStructuredData } from "@/lib/seo";

const pageContent = getAreaPageContent("burnley");

export const metadata = buildPageMetadata(pageContent.metadata);

export default function BurnleyAreaPage() {
  const structuredData = getBranchAreaStructuredData("Burnley");

  return (
    <>
      <StructuredDataScript data={structuredData} />
      <Breadcrumbs />
      <AreaPageTemplate page={pageContent} />
      <MobileStickyCallBar />
    </>
  );
}
