import { homepageContent } from "@/content/homepage";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

export function HomeTestimonials() {
  const { testimonials } = homepageContent;

  return (
    <section className="bg-[linear-gradient(180deg,_#ffffff_0%,_#f7f4ec_100%)] py-20 sm:py-24">
      <Container size="wide" className="space-y-10 sm:space-y-12">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          description={testimonials.description}
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.items.map((item) => (
            <TestimonialCard
              key={`${item.name}-${item.quote.slice(0, 24)}`}
              quote={item.quote}
              name={item.name}
              location={item.location}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
