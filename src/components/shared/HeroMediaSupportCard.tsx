import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeroMediaSupportCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  footer?: ReactNode;
  className?: string;
};

export function HeroMediaSupportCard({
  eyebrow,
  title,
  description,
  footer,
  className,
}: HeroMediaSupportCardProps) {
  return (
    <div
      className={cn(
        "rounded-[1.6rem] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.985),rgba(248,250,252,0.97))] p-5 shadow-[0_30px_70px_-38px_rgba(15,23,42,0.58)] ring-1 ring-slate-950/5 backdrop-blur-md sm:p-6",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-lg font-semibold leading-snug text-slate-950 sm:text-xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-[0.98rem]">
        {description}
      </p>
      {footer ? <div className="mt-4">{footer}</div> : null}
    </div>
  );
}
