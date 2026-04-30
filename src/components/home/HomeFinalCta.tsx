import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";

export function HomeFinalCta() {
  const { finalCta } = homepageContent;

  return (
    <section className="relative overflow-hidden bg-primary-900 py-20 text-white sm:py-24">
      <div
        className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(63,168,102,0.28),_transparent_65%)]"
        aria-hidden="true"
      />
      <Container size="wide" className="relative">
        <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(63,168,102,0.24),rgba(28,102,58,0.88))] px-6 py-12 text-white shadow-[0_30px_80px_-50px_rgba(0,0,0,0.65)] sm:px-10 lg:px-14 lg:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {finalCta.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              {finalCta.description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button href={finalCta.primaryCta.href} variant="inverse" className="w-full sm:w-auto">
                {finalCta.primaryCta.label}
              </Button>
              <Button
                href={finalCta.secondaryCta.href}
                aria-label={finalCta.secondaryCta.ariaLabel}
                variant="inverseSecondary"
                className="w-full sm:w-auto"
              >
                {finalCta.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
