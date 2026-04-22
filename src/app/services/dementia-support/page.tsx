import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MobileStickyCallBar } from "@/components/ui/mobile-sticky-call-bar";
import { getServicePageContent } from "@/content/services";
import { buildPageMetadata } from "@/lib/seo";

const pageContent = getServicePageContent("dementiaSupport");

export const metadata = buildPageMetadata(pageContent.metadata);

export default function DementiaSupportPage() {
  return (
    <>
      <Breadcrumbs />
      <ServicePageTemplate page={pageContent} />
      <MobileStickyCallBar />
    </>
  );
}
