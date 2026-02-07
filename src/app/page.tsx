import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CareFeaturesSection } from "@/components/sections/CareFeaturesSection";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import LazyClientCareFeatures from "@/components/sections/LazyClientCareFeatures";
import HeroShowcase from "@/components/sections/HeroShowcase";
import CqcRatingCard from "@/components/sections/CqcRatingCard";

export const metadata = {
  title: "Home | Libra Support Services",
  description:
    "Compassionate, professional home care services across West Yorkshire. Contact Libra Support Services for trusted support today.",
	icons: {
    icon: "/favicon.ico",
  },
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
                ★ CQC Rated <strong>Good</strong> — <a
				  href="https://www.cqc.org.uk/location/1-11688271981"
				  className="text-green-700 underline"
				  target="_blank"
				  rel="noopener noreferrer"
				>
				  See Report
				</a>
              </div>
              <div>Local, DBS-checked Carers</div>
			  <div>Regulated Care at Home</div>
              <div>24/7 Live-in and Respite Care</div>
              <div>Established in <strong>2021</strong></div>
            </div>
          </div>
        </section>

        {/* Official CQC Widget */}
        <section className="bg-white py-10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">CQC Rating</h2>
            <p className="text-gray-700 mb-6">
              Official Care Quality Commission rating widget for Libra Support Services.
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-md border border-gray-200 rounded-lg bg-gray-50 p-4">
                <CqcRatingCard />
              </div>
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
                <p className="text-gray-600 mb-4">Registered Manager/Director</p>
                <p className="text-sm text-gray-500">
                  I am dedicated to making Calderdale a better place for everyone, and spend my spare time engaging in community projects. When I'm not at work I like to spend time with my family, and go to local gigs - mainly at the Golden Lion in Todmorden and the Hebden Bridge Trades Club.
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
                <h3 className="text-xl font-semibold text-primary mb-2">Kelly Carpenter</h3>
                <p className="text-gray-600 mb-4">Deputy Manager</p>
                <p className="text-sm text-gray-500">
                  I am a mum to 4 beautiful and cheeky boys. We live at home with my partner Allen and out dog Bella. I live a busy life but wouldn't have it any other way!
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
                <h3 className="text-xl font-semibold text-primary mb-2">Jason Walters</h3>
                <p className="text-gray-600 mb-4">Director</p>
                <p className="text-sm text-gray-500">
                  I am one of the directors at Libra support Services. In my free time I enjoy playing music, going to gigs, and socialising with friends by playing videos games and poker. I spend time at home cooking and walking in the countryside.
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
