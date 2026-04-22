import { AreaPageTemplate } from "@/components/areas/AreaPageTemplate";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MobileStickyCallBar } from "@/components/ui/mobile-sticky-call-bar";
import { getAreaPageContent } from "@/content/areas";
import { buildPageMetadata } from "@/lib/seo";

const pageContent = getAreaPageContent("hebdenBridge");

export const metadata = buildPageMetadata(pageContent.metadata);

export default function HebdenBridgeAreaPage() {
  return (
    <>
      <Breadcrumbs />
      <AreaPageTemplate page={pageContent} />
      <MobileStickyCallBar />
    </>
  );
}
