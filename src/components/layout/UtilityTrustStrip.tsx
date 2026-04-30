import { homepageContent } from "@/content/homepage";
import { Container } from "@/components/shared/Container";

export function UtilityTrustStrip() {
  return (
    <div className="border-b border-slate-800 bg-slate-950 text-white">
      <Container size="wide" className="py-2">
        <p className="text-center text-[0.74rem] font-medium leading-5 tracking-[0.02em] text-white sm:text-[0.84rem]">
          {homepageContent.utilityTrustStripText}
        </p>
      </Container>
    </div>
  );
}
