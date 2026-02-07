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
            Our carers and support staff are passionate professionals committed to dignity, independence, and personal wellbeing.
          </p>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <TeamCard
              name="Nicola Szymik-Walters"
              role="Registered Manager/Director"
              image="/images/team/staff-1.webp"
              bio="I am dedicated to making Calderdale a better place for everyone, and spend my spare time engaging in community projects. When I'm not at work I like to spend time with my family, and go to local gigs - mainly at the Golden Lion in Todmorden and the Hebden Bridge Trades Club."
            />
            <TeamCard
              name="Kelly Carpenter"
              role="Deputy Manager"
              image="/images/team/staff-2.webp"
              bio="I am a mum to 4 beautiful and cheeky boys. We live at home with my partner Allen and out dog Bella. I live a busy life but wouldn't have it any other way!"
            />
            <TeamCard
              name="Jason Walters"
              role="Director"
              image="/images/team/staff-3.webp"
              bio="I am one of the directors at Libra support Services. In my free time I enjoy playing music, going to gigs, and socialising with friends by playing videos games and poker. I spend time at home cooking and walking in the countryside."
            />
          </div>
        </div>
      </section>
    </>
  )
}