import { AreaPageTemplate } from "@/components/areas/AreaPageTemplate";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MobileStickyCallBar } from "@/components/ui/mobile-sticky-call-bar";
import { getAreaPageContent } from "@/content/areas";
import { buildPageMetadata } from "@/lib/seo";

const pageContent = getAreaPageContent("burnley");

export const metadata = buildPageMetadata(pageContent.metadata);

export default function BurnleyAreaPage() {
  return (
    <>
      <Breadcrumbs />
      <AreaPageTemplate page={pageContent} />
      <MobileStickyCallBar />
    </>
  );
}
