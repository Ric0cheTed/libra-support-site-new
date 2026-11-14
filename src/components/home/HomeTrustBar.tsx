import { homepageContent } from "@/content/homepage";
import { Container } from "@/components/shared/Container";
import { TrustItem } from "@/components/shared/TrustItem";

export function HomeTrustBar() {
  return (
    <section className="relative border-b border-primary/10 bg-white py-6" aria-label="Our approach to care">
      <Container size="wide">
        <h2 className="sr-only">Our approach to care</h2>
        <div className="grid gap-4 rounded-[2rem] border border-primary/10 bg-white p-4 shadow-[0_26px_60px_-38px_rgba(15,23,42,0.32)] sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
          {homepageContent.trustBarItems.map((item) => (
            <TrustItem key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}
