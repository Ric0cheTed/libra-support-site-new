import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Accordion } from "@/components/shared/Accordion";

export function HomeFaqTeaser() {
  const { faqTeaser } = homepageContent;

  return (
    <section className="bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)] py-20 sm:py-24">
      <Container size="default" className="space-y-9 sm:space-y-10">
        <SectionHeading
          eyebrow={faqTeaser.eyebrow}
          title={faqTeaser.title}
          align="center"
        />

        <Accordion items={faqTeaser.items} />

        <div className="flex justify-center">
          <Button href={faqTeaser.cta.href} className="w-full sm:w-auto">
            {faqTeaser.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
