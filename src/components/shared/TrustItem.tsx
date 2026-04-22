import type { TrustItem as TrustItemContent } from "@/types/homepage";

import { cn } from "@/lib/utils";

type TrustItemProps = TrustItemContent & {
  className?: string;
};

export function TrustItem({ title, description, className }: TrustItemProps) {
  return (
    <article
      className={cn(
        "rounded-[1.75rem] border border-stone-200/80 bg-stone-50/80 p-6 shadow-[0_22px_50px_-40px_rgba(15,23,42,0.28)] sm:p-7",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-2.5 text-sm leading-6 text-slate-600 sm:text-[0.96rem] sm:leading-7">{description}</p>
    </article>
  );
}
