import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MobileStickyCallBar } from "@/components/ui/mobile-sticky-call-bar";
import { getServicePageContent } from "@/content/services";
import { buildPageMetadata } from "@/lib/seo";

const pageContent = getServicePageContent("liveInCare");

export const metadata = buildPageMetadata(pageContent.metadata);

export default function LiveInCarePage() {
  return (
    <>
      <Breadcrumbs />
      <ServicePageTemplate page={pageContent} />
      <MobileStickyCallBar />
    </>
  );
}
