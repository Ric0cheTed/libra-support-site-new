import { ContactMethodCard } from "@/components/contact/ContactMethodCard";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ContactContent } from "@/types/contact";

type ContactMethodsSectionProps = {
  section: ContactContent["methods"];
};

export function ContactMethodsSection({ section }: ContactMethodsSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item) => (
            <ContactMethodCard key={`${item.kind}-${item.title}`} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
