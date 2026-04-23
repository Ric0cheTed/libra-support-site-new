import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrustItem } from "@/components/shared/TrustItem";
import type { ServiceWhyLibraContent } from "@/types/services";

type ServiceWhyLibraProps = {
  section: ServiceWhyLibraContent;
};

export function ServiceWhyLibra({ section }: ServiceWhyLibraProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {section.items.map((item) => (
            <TrustItem key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
