import { SourceRefs } from "@/components/resources/SourceRefs";
import type { CareGuide } from "@/content/guides";

export function GuidanceFaqs({ items, id = "guide-questions", title = "Questions families ask", level = 2, externalSources = false }: { items: CareGuide["faqs"]; id?: string; title?: string; level?: 2 | 3; externalSources?: boolean }) {
  const Heading = level === 3 ? "h3" : "h2";
  return <section id={id} className="scroll-mt-52" aria-labelledby={`${id}-title`}>
    <Heading id={`${id}-title`} className="mb-5 text-2xl font-semibold text-primary-900">{title}</Heading>
    <div className="space-y-3">{items.map(faq => <details key={faq.question} className="rounded-xl border border-primary/15 bg-white p-4 sm:p-5"><summary className="min-h-11 cursor-pointer py-2 font-medium text-primary-900">{faq.question}</summary><div className="mt-3 border-t border-primary/10 pt-4"><p className="leading-8 text-slate-700">{faq.answer}</p><SourceRefs sourceKeys={faq.sourceKeys} external={externalSources} /></div></details>)}</div>
  </section>;
}
