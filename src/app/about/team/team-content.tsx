"use client";

import TeamCard from "@/components/ui/team-card";

export default function TeamPage() {
  return (
    <>
      <section className="py-20 bg-white animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6 text-primary">
            Meet the Libra Support Team
          </h1>
          <p className="text-lg text-gray-700 mb-12">
            Our carers and support staff are passionate professionals committed to dignity,
            independence, and personal wellbeing.
          </p>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <TeamCard
              name="Kelly Carpenter"
              role="Registered Manager"
              image="/images/team/staff-2.webp"
              bio="Kelly is an experienced care leader who supports the team in delivering safe, person-centred care across our local community. She is passionate about maintaining high standards, supporting staff development, and helping families feel confident in the care their loved ones receive."
            />			
            <TeamCard
              name="Nicola Szymik-Walters"
              role="Registered Manager/Director"
              image="/images/team/staff-1.webp"
              bio="Nicola is dedicated to making Calderdale a better place for everyone and spends much of her spare time supporting community projects. Outside of work, she enjoys spending time with her family and visiting local music venues in Todmorden and Hebden Bridge."
            />
            <TeamCard
              name="Jason Walters"
              role="Director"
              image="/images/team/staff-3.webp"
              bio="Jason is one of the directors at Libra Support Services. He is committed to supporting the organisation’s growth and helping the team provide dependable, high-quality care. Outside of work, he enjoys music, playing video games, cooking, spending time with friends and family, and walking in the countryside."
            />
          </div>
        </div>
      </section>
    </>
  );
}