import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrustItem } from "@/components/shared/TrustItem";
import type { AboutCardSection } from "@/types/about";

type AboutTrustSectionProps = {
  section: AboutCardSection;
  background?: "white" | "stone";
};

export function AboutTrustSection({
  section,
  background = "white",
}: AboutTrustSectionProps) {
  return (
    <section className={background === "stone" ? "bg-stone-50/80 py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          className="max-w-3xl"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item) => (
            <TrustItem key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
        {section.cta ? (
          <div className="mt-8 flex justify-start">
            <Button href={section.cta.href} variant="secondary">
              {section.cta.label}
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
