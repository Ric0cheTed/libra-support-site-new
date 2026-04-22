import { metadata as aboutMetadata } from "./metadata";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MobileStickyCallBar } from "@/components/ui/mobile-sticky-call-bar";
import AboutContent from "./about-content";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs />
      <AboutContent />
      <MobileStickyCallBar />
    </>
  );
}
