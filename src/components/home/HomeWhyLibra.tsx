import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrustItem } from "@/components/shared/TrustItem";

export function HomeWhyLibra() {
  const { whyLibra } = homepageContent;

  return (
    <section
      id="why-libra"
      className="scroll-mt-28 bg-white py-20 sm:scroll-mt-32 sm:py-24"
      aria-labelledby="home-why-libra-title"
    >
      <Container
        size="wide"
        className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12"
      >
        <div className="rounded-[2rem] border border-primary/10 bg-primary-50/50 p-6 shadow-[0_22px_50px_-40px_rgba(15,23,42,0.22)] sm:p-8">
          <SectionHeading
            id="home-why-libra-title"
            eyebrow={whyLibra.eyebrow}
            title={whyLibra.title}
            description={whyLibra.description}
            className="max-w-xl"
            titleAs="h2"
          />
          <Button href={whyLibra.cta.href} className="mt-8 w-full sm:w-auto">
            {whyLibra.cta.label}
          </Button>
        </div>

        <div className="rounded-[2rem] border border-primary/10 bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfaf7_100%)] p-5 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.24)] sm:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {whyLibra.items.map((item, index) => (
              <TrustItem
                key={item.title}
                title={item.title}
                description={item.description}
                className={index % 2 === 0 ? "bg-primary-50/50" : "bg-white/95"}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
