"use client";

import { TeamCard } from "@/components/ui/team-card";

export default function TeamPage() {
  return (
    <>

      <section className="py-20 bg-white animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6 text-primary">
            Meet the Libra Support Team
          </h1>
          <p className="text-lg text-gray-700 mb-12">
            Our carers and support staff are passionate professionals committed to dignity, independence, and personal wellbeing.
          </p>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <TeamCard
              name="Jane Walker"
              role="Registered Manager"
              image="/images/team/jane.webp"
              bio="Jane brings over 15 years of experience in adult social care and is dedicated to creating personalised care solutions for every family."
            />
            <TeamCard
              name="Thomas Gray"
              role="Care Coordinator"
              image="/images/team/thomas.webp"
              bio="Thomas ensures every client receives consistent, high-quality support with empathy, efficiency, and attention to detail."
            />
            <TeamCard
              name="Ayesha Patel"
              role="Lead Support Worker"
              image="/images/team/ayesha.webp"
              bio="Ayesha is a compassionate leader who trains and supports carers across West Yorkshire with hands-on mentoring and guidance."
            />
          </div>
        </div>
      </section>
    </>
  )
}