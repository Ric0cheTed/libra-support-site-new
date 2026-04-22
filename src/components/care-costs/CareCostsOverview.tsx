import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareCostsPageContent } from "@/types/care-costs";

type CareCostsOverviewProps = {
  section: CareCostsPageContent["overview"];
};

export function CareCostsOverview({ section }: CareCostsOverviewProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
            <div className="rounded-[1.85rem] border border-stone-200/80 bg-stone-50/80 p-6 shadow-[0_22px_55px_-42px_rgba(15,23,42,0.22)] sm:p-7">
              <p className="text-sm leading-7 text-slate-600 sm:text-[0.98rem]">
                {section.includedDescription}
              </p>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{section.includedTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-[0.98rem]">
                {section.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary/80"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {section.note ? (
                <p className="mt-5 rounded-[1.4rem] bg-white px-4 py-4 text-sm font-medium leading-6 text-slate-700 shadow-[0_18px_42px_-36px_rgba(15,23,42,0.22)]">
                  {section.note}
                </p>
              ) : null}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {section.rateCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[1.85rem] border border-stone-200/80 bg-[linear-gradient(180deg,rgba(247,244,239,0.88),rgba(255,255,255,0.98))] p-6 shadow-[0_24px_60px_-44px_rgba(15,23,42,0.28)] sm:p-7"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {card.title}
                  </p>
                  <p className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
                    {card.amount}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[0.98rem]">
                    {card.description}
                  </p>
                  {card.note ? (
                    <p className="mt-4 text-xs leading-6 text-slate-500 sm:text-sm">{card.note}</p>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="rounded-[1.85rem] border border-stone-200/80 bg-white p-6 shadow-[0_24px_60px_-44px_rgba(15,23,42,0.24)] sm:p-7">
              <h3 className="text-lg font-semibold text-slate-950">{section.examplesTitle}</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {section.examples.map((example) => (
                  <article
                    key={example.label}
                    className="rounded-[1.5rem] border border-stone-200/80 bg-stone-50/80 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-950">{example.label}</p>
                    <dl className="mt-3 space-y-2 text-sm text-slate-600">
                      <div className="flex items-center justify-between gap-4">
                        <dt>Urban</dt>
                        <dd className="font-semibold text-slate-900">{example.urban}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt>Rural</dt>
                        <dd className="font-semibold text-slate-900">{example.rural}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[0.98rem]">
                {section.examplesNote}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
