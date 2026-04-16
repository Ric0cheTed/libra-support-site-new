import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CareFeaturesSection } from "@/components/sections/CareFeaturesSection";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import LazyClientCareFeatures from "@/components/sections/LazyClientCareFeatures";
import HeroShowcase from "@/components/sections/HeroShowcase";
import WhyChooseLibra from "@/components/sections/WhyChooseLibra";
import FaqTeaserAccordion from "@/components/sections/FaqTeaserAccordion";

export const metadata = buildPageMetadata({
  title: 'Home Care in Todmorden & West Yorkshire',
  description:
    'Local, CQC-regulated home care in Todmorden, Hebden Bridge, and Mytholmroyd, with flexible home care, live-in care, and respite support.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Breadcrumbs />

      <div className="space-y-16">
        {/* Hero Section */}
        <HeroShowcase />

        {/* Trust Signals Section */}
        <section className="bg-white py-8 border-t border-b">
          <div className="overflow-x-auto">
            <div className="flex gap-6 px-4 min-w-[640px] sm:min-w-full whitespace-nowrap text-sm sm:text-base text-gray-700 justify-start sm:justify-center">
              <div>
                ★ CQC Rated <strong>Good</strong> —{" "}
                <a
                  href="https://www.cqc.org.uk/location/1-11688271981"
                  className="text-green-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Report
                </a>
              </div>
              <div>Local, DBS-checked carers</div>
              <div>Managed rotas & continuity</div>
              <div>On-call support</div>
              <div>Established in <strong>2021</strong></div>
            </div>
          </div>
        </section>

        <WhyChooseLibra />

        <TestimonialsCarousel />

        <CareFeaturesSection />
        <LazyClientCareFeatures />
        <ServicesOverviewSection />

        {/* FAQ Teaser (collapsed accordion) */}
        <FaqTeaserAccordion />

        {/* Meet the Team Section */}
        <section className="py-20 bg-white animate-fade-slide-up">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">Meet Our Caring Team</h2>
            <p className="text-lg text-gray-700 mb-12">
              Dedicated, compassionate, and here to support your loved ones every step of the way.
            </p>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {/* Team Member 2 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <Image
                  src="/images/staff-2.webp"
                  alt="Kelly Carpenter"
                  width={128}
                  height={128}
                  placeholder="blur"
                  blurDataURL="/images/staff-2.webp"
                  className="rounded-full h-32 w-32 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">Kelly Carpenter</h3>
                <p className="text-gray-600 mb-4">Registered Manager</p>
                <p className="text-sm text-gray-500">
                  Kelly is an experienced care leader who supports the team in delivering safe, person-centred care across our local community. She is passionate about maintaining high standards, supporting staff development, and helping families feel confident in the care their loved ones receive.
                </p>
              </div>
			  
              {/* Team Member 1 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <Image
                  src="/images/staff-1.webp"
                  alt="Nicola Szymik-Walters"
                  width={128}
                  height={128}
                  placeholder="blur"
                  blurDataURL="/images/staff-1.webp"
                  className="rounded-full h-32 w-32 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">Nicola Szymik-Walters</h3>
                <p className="text-gray-600 mb-4">Registered Manager/Director</p>
                <p className="text-sm text-gray-500">
                  Nicola is dedicated to making Calderdale a better place for everyone and spends much of her spare time supporting community projects. Outside of work, she enjoys spending time with her family and visiting local music venues in Todmorden and Hebden Bridge.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <Image
                  src="/images/staff-3.webp"
                  alt="Jason Walters"
                  width={128}
                  height={128}
                  placeholder="blur"
                  blurDataURL="/images/staff-3.webp"
                  className="rounded-full h-32 w-32 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">Jason Walters</h3>
                <p className="text-gray-600 mb-4">Director</p>
                <p className="text-sm text-gray-500">
                  Jason is one of the directors at Libra Support Services. He is committed to supporting the organisation’s growth and helping the team provide dependable, high-quality care. Outside of work, he enjoys music, cooking, spending time with friends and family, and walking in the countryside.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <a href="/about" className="inline-block px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark">
                Meet the Full Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}