import Image from "next/image";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const teamMembers = [
  {
    name: "Kelly Carpenter",
    role: "Registered Manager",
    image: "/images/staff-2.webp",
    description:
      "Kelly is an experienced care leader who supports the team in delivering safe, person-centred care across our local community. She is passionate about maintaining high standards, supporting staff development, and helping families feel confident in the care their loved ones receive.",
  },
  {
    name: "Nicola Szymik-Walters",
    role: "Registered Manager/Director",
    image: "/images/staff-1.webp",
    description:
      "Nicola is dedicated to making Calderdale a better place for everyone and spends much of her spare time supporting community projects. Outside of work, she enjoys spending time with her family and visiting local music venues in Todmorden and Hebden Bridge.",
  },
  {
    name: "Jason Walters",
    role: "Director",
    image: "/images/staff-3.webp",
    description:
      "Jason is one of the directors at Libra Support Services. He is committed to supporting the organisation's growth and helping the team provide dependable, high-quality care. Outside of work, he enjoys music, cooking, spending time with friends and family, and walking in the countryside.",
  },
];

export function HomeTeamPreview() {
  return (
    <section className="bg-white py-20">
      <Container className="space-y-12 text-center">
        <SectionHeading
          align="center"
          title="Meet Our Caring Team"
          description="Dedicated, compassionate, and here to support your loved ones every step of the way."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center rounded-3xl border border-stone-200 bg-stone-50 p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                sizes="128px"
                className="mb-4 h-32 w-32 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-slate-950">{member.name}</h3>
              <p className="mt-2 text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{member.description}</p>
            </article>
          ))}
        </div>

        <div>
          <Button href="/about">Meet the Full Team</Button>
        </div>
      </Container>
    </section>
  );
}
