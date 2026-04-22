import { CareCostsPageTemplate } from "@/components/care-costs/CareCostsPageTemplate";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MobileStickyCallBar } from "@/components/ui/mobile-sticky-call-bar";
import { careCostsContent } from "@/content/care-costs";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata(careCostsContent.metadata);

export default function CareFeesPage() {
  return (
    <>
      <Breadcrumbs />
      <CareCostsPageTemplate page={careCostsContent} />
      <MobileStickyCallBar />
    </>
  );
}
