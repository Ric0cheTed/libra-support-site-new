import { homepageContent } from "@/content/homepage";
import { Container } from "@/components/shared/Container";
import { TrustItem } from "@/components/shared/TrustItem";

export function HomeTrustBar() {
  return (
    <section className="relative bg-white pb-10 sm:pb-12">
      <Container size="wide" className="relative z-10 -mt-12 sm:-mt-16">
        <div className="grid gap-4 rounded-[2rem] border border-stone-200/80 bg-white p-4 shadow-[0_26px_60px_-38px_rgba(15,23,42,0.32)] sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
          {homepageContent.trustBarItems.map((item) => (
            <TrustItem key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}
