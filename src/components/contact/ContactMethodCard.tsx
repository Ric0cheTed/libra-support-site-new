import {
  BriefcaseBusiness,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  Send,
} from "lucide-react";

import { Button } from "@/components/shared/Button";
import type { ContactMethodItem } from "@/types/contact";

const iconMap = {
  call: Phone,
  email: Mail,
  enquiry: Send,
  office: MapPin,
  whatsapp: MessageCircleMore,
  careers: BriefcaseBusiness,
} as const;

type ContactMethodCardProps = {
  item: ContactMethodItem;
};

export function ContactMethodCard({ item }: ContactMethodCardProps) {
  const Icon = iconMap[item.kind];

  return (
    <article className="flex h-full flex-col rounded-[1.85rem] border border-stone-200/80 bg-white p-6 shadow-[0_22px_55px_-42px_rgba(15,23,42,0.3)] sm:p-7">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[0.98rem]">{item.description}</p>

      {item.detail ? (
        <p className="mt-4 text-sm font-medium leading-6 text-slate-700">{item.detail}</p>
      ) : null}

      {item.detailLines?.length ? (
        <address className="mt-4 not-italic text-sm leading-6 text-slate-700">
          {item.detailLines.map((line, index) => (
            <span key={`${item.title}-${line}-${index}`} className="block">
              {line}
            </span>
          ))}
        </address>
      ) : null}

      <div className="mt-6">
        <Button href={item.href} variant={item.ctaVariant ?? "secondary"} className="w-full sm:w-auto">
          {item.ctaLabel}
        </Button>
      </div>
    </article>
  );
}
