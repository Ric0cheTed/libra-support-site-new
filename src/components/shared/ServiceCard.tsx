import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ServiceCardItem } from "@/types/homepage";
import { cn } from "@/lib/utils";

type ServiceCardProps = ServiceCardItem & {
  className?: string;
};

export function ServiceCard({
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-[1.85rem] border border-stone-200/80 bg-white p-6 shadow-[0_22px_55px_-42px_rgba(15,23,42,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_30px_60px_-40px_rgba(15,23,42,0.32)] sm:p-7",
        className
      )}
    >
      <div className="mb-5 h-1.5 w-12 rounded-full bg-primary/70" aria-hidden="true" />
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-[0.98rem] sm:leading-7">
        {description}
      </p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
      >
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
