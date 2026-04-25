import Image from "next/image";
import { MapPin, Clock3 } from "lucide-react";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ContactContent } from "@/types/contact";

type ContactLocationSectionProps = {
  section: ContactContent["location"];
  mapEmbedUrl: string;
};

export function ContactLocationSection({
  section,
  mapEmbedUrl,
}: ContactLocationSectionProps) {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(250,248,244,0.82),rgba(255,255,255,1))] py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-12">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
              className="max-w-xl"
            />
            <div className="rounded-[2rem] border border-stone-200/80 bg-white p-6 shadow-[0_28px_70px_-52px_rgba(15,23,42,0.35)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                {section.officeLabel}
              </p>
              <address className="mt-4 not-italic text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
                {section.addressLines.map((line, index) => (
                  <span key={`${line}-${index}`} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <div className="mt-5 flex items-start gap-3 text-sm text-slate-700 sm:text-[0.98rem]">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{section.openingHours}</span>
              </div>
              <div className="mt-5 flex items-start gap-3 text-sm text-slate-700 sm:text-[0.98rem]">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  {section.areasLabel}: {section.areas.join(", ")}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[0.98rem]">{section.note}</p>
              {section.branches?.length ? (
                <div className="mt-6 border-t border-stone-200 pt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {section.branchesTitle ?? "Branches"}
                  </p>
                  <div className="mt-4 grid gap-3">
                    {section.branches.map((branch) => (
                      <div
                        key={branch.name}
                        className="rounded-[1.4rem] border border-stone-200/80 bg-stone-50/80 p-4"
                      >
                        <p className="text-sm font-semibold text-slate-900">{branch.name}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {branch.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="mt-6">
                <Button href={section.directionsCta.href} variant="secondary">
                  {section.directionsCta.label}
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {section.trustImage ? (
              <div className="overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white shadow-[0_28px_70px_-52px_rgba(15,23,42,0.35)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={section.trustImage.src}
                    alt={section.trustImage.alt}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                {section.trustImage.caption ? (
                  <div className="border-t border-stone-200/80 px-5 py-4">
                    <p className="text-sm leading-6 text-slate-600">
                      {section.trustImage.caption}
                    </p>
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white shadow-[0_28px_70px_-52px_rgba(15,23,42,0.35)]">
              <iframe
                title={section.mapTitle}
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                className="min-h-[22rem] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
