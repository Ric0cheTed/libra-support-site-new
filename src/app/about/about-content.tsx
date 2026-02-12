"use client";

import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <section className="py-20 bg-gray-50 animate-fade-slide-up">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6 text-primary">About Libra Support Services</h1>
          <p className="text-lg text-gray-700 mb-12">
            At Libra Support Services, we believe everyone deserves compassionate, professional care in the comfort of their own home.
            Our team proudly supports families across Todmorden and West Yorkshire with tailored solutions to meet each individual’s needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white animate-fade-slide-up">
        <div className="max-w-5xl mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-gray-700">
              To provide outstanding, person-centered home care that empowers independence, dignity, and comfort for every client.
            </p>
            <p className="text-gray-700">
              With years of experience and a heartfelt commitment to our community, Libra Support Services is a name families trust.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/about-team.webp"
              alt="Our Team"
              width={768}
              height={512}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="text-center mt-12">
        <p className="text-gray-600 text-lg mb-4">Want to learn more about the people behind Libra?</p>
        <a
          href="/about/team"
          className="inline-block px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark transition"
        >
          Meet the Team
        </a>
      </section>
    </>
  );
}
