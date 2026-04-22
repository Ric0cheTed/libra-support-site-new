import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleAs?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleAs = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  const HeadingTag = titleAs;

  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto max-w-[42rem] text-center" : "max-w-[40rem]",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-slate-600 sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="text-3xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-[2.45rem]">
        {title}
      </HeadingTag>
      {description ? (
        <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p>
      ) : null}
    </div>
  );
}
