import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CareFeaturesSection } from "@/components/sections/CareFeaturesSection";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import LazyClientCareFeatures from "@/components/sections/LazyClientCareFeatures";
import HeroShowcase from "@/components/sections/HeroShowcase";
import SocialsButton from '@/components/ui/SocialsButton';

export const metadata = {
  title: "Home | Libra Support Services",
  description:
    "Compassionate, professional home care services across West Yorkshire. Contact Libra Support Services for trusted support today.",
};

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
                ★ CQC Rated <strong>Good</strong> — <a href="#" className="text-primary underline">See Report</a>
              </div>
              <div>Local, DBS-checked Carers</div>
              <div>24/7 Live-in and Respite Care</div>
              <div>Established in <strong>2021</strong></div>
            </div>
          </div>
        </section>
		<TestimonialsCarousel />

        <CareFeaturesSection />
        <LazyClientCareFeatures />
        <ServicesOverviewSection />

        {/* Meet the Team Section */}
        <section className="py-20 bg-white animate-fade-slide-up">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">Meet Our Caring Team</h2>
            <p className="text-lg text-gray-700 mb-12">
              Dedicated, compassionate, and here to support your loved ones every step of the way.
            </p>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {/* Team Member 1 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <Image
                  src="/images/staff-1.webp"
                  alt="Emma Smith"
                  width={128}
                  height={128}
                  placeholder="blur"
                  blurDataURL="/images/staff-1.webp"
                  className="rounded-full h-32 w-32 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">Nicola Szymik-Walters</h3>
                <p className="text-gray-600 mb-4">Registered Care Manager</p>
                <p className="text-sm text-gray-500">
                  Passionate about delivering the highest standards of person-centered care.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <Image
                  src="/images/staff-2.webp"
                  alt="David Johnson"
                  width={128}
                  height={128}
                  placeholder="blur"
                  blurDataURL="/images/staff-2.webp"
                  className="rounded-full h-32 w-32 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">David Johnson</h3>
                <p className="text-gray-600 mb-4">Senior Support Worker</p>
                <p className="text-sm text-gray-500">
                  Building trust and comfort for every family we support.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <Image
                  src="/images/staff-3.webp"
                  alt="Olivia Davis"
                  width={128}
                  height={128}
                  placeholder="blur"
                  blurDataURL="/images/staff-3.webp"
                  className="rounded-full h-32 w-32 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">Olivia Davis</h3>
                <p className="text-gray-600 mb-4">Care Coordinator</p>
                <p className="text-sm text-gray-500">
                  Ensuring smooth, effective care coordination tailored to individual needs.
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
