import type { ReactNode } from "react";

import { ContactFaqSection } from "@/components/contact/ContactFaqSection";
import { ContactLocationSection } from "@/components/contact/ContactLocationSection";
import { ContactMethodsSection } from "@/components/contact/ContactMethodsSection";
import { ContactSupportSection } from "@/components/contact/ContactSupportSection";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ContactContent } from "@/types/contact";

type ContactPageTemplateProps = {
  content: ContactContent;
  mapEmbedUrl: string;
  form: ReactNode;
};

export function ContactPageTemplate({
  content,
  mapEmbedUrl,
  form,
}: ContactPageTemplateProps) {
  return (
    <div className="-mx-4 -mb-8 sm:-mx-6 lg:-mx-8">
      <ServiceHero hero={content.hero} />
      <ContactMethodsSection section={content.methods} />
      <ContactSupportSection section={content.support} />

      <section id="contact-form" className="scroll-mt-28 bg-stone-50/80 py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-12">
            <div className="space-y-6">
              <SectionHeading
                eyebrow={content.form.eyebrow}
                title={content.form.title}
                description={content.form.description}
                className="max-w-xl"
              />
              <div className="rounded-[2rem] border border-stone-200/80 bg-white p-6 shadow-[0_28px_70px_-52px_rgba(15,23,42,0.35)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {content.form.guidanceTitle}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-[0.98rem]">
                  {content.form.guidancePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary/80"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {content.form.supportLinks.map((link) => (
                    <Button key={link.href} href={link.href} variant="secondary" size="compact">
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div>{form}</div>
          </div>
        </Container>
      </section>

      <ContactLocationSection section={content.location} mapEmbedUrl={mapEmbedUrl} />
      <ContactFaqSection section={content.faqs} />
      <ServiceFinalCta section={content.finalCta} />
    </div>
  );
}
