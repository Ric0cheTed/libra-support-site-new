import { HomeAreasCoverage } from "@/components/home/HomeAreasCoverage";
import { HomeCareProcess } from "@/components/home/HomeCareProcess";
import { HomeCareCosts } from "@/components/home/HomeCareCosts";
import { HomeFaqTeaser } from "@/components/home/HomeFaqTeaser";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeServicesPreview } from "@/components/home/HomeServicesPreview";
import { HomeTeamSpotlight } from "@/components/home/HomeTeamSpotlight";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeTrustBar } from "@/components/home/HomeTrustBar";
import { HomeWhyLibra } from "@/components/home/HomeWhyLibra";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Home Care in Todmorden & West Yorkshire",
  description:
    "Local, CQC-regulated home care in Todmorden, Hebden Bridge, and Mytholmroyd, with flexible home care, live-in care, and respite support.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="-mx-4 -mt-8 sm:-mx-6 lg:-mx-8">
      <HomeHero />
      <HomeTrustBar />
      <HomeServicesPreview />
      <HomeWhyLibra />
      <HomeCareProcess />
      <HomeAreasCoverage />
      <HomeCareCosts />
      <HomeTeamSpotlight />
      <HomeTestimonials />
      <HomeFaqTeaser />
      <HomeFinalCta />
    </div>
  );
}
