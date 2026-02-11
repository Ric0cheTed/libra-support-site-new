'use client';

import Image from 'next/image';

export default function ServicesPage() {
  return (
    <>
      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50 animate-fade-slide-up">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6 text-primary">Our Care Services</h1>
          <p className="text-lg text-gray-700 mb-12">
            Libra Support Services offers compassionate, flexible care solutions to fit your family's needs across Todmorden and West Yorkshire.
          </p>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <Image
                width={600}
                height={160}
                src="/images/home-care.webp"
                alt="Home Care"
                className="rounded mb-4 h-40 object-cover w-full"
              />
              <h3 className="text-xl font-semibold mb-2">Home Care</h3>
              <p className="text-gray-600 mb-4">
                Flexible, daily support to help you or your loved one live safely and comfortably at home.
              </p>
              <a href="/services/home-care" className="mt-auto inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark">
                Learn More
              </a>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <Image
                width={600}
                height={160}
                src="/images/live-in-care.webp"
                alt="Live-in Care"
                className="rounded mb-4 h-40 object-cover w-full"
              />
              <h3 className="text-xl font-semibold mb-2">Live-in Care</h3>
              <p className="text-gray-600 mb-4">
                24/7 live-in carers offering companionship, personal care, and complete support.
              </p>
              <a href="/services/live-in-care" className="mt-auto inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark">
                Learn More
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <Image
                width={600}
                height={160}
                src="/images/respite-care.webp"
                alt="Respite Care"
                className="rounded mb-4 h-40 object-cover w-full"
              />
              <h3 className="text-xl font-semibold mb-2">Respite Care</h3>
              <p className="text-gray-600 mb-4">
                Short-term and emergency care to give family caregivers a break and peace of mind.
              </p>
              <a href="/services/respite-care" className="mt-auto inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
