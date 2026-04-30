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
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { buildPageMetadata, getHomePageStructuredData } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Home Care in Todmorden & West Yorkshire",
  description:
    "Local, CQC-regulated home care across the Todmorden and Burnley branch areas, with flexible home care, respite support, companionship, and person-centred help at home.",
  path: "/",
});

export default function HomePage() {
  const structuredData = getHomePageStructuredData();

  return (
    <>
      <StructuredDataScript data={structuredData} />
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
    </>
  );
}
