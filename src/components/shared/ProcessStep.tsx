import type { ProcessStepItem } from "@/types/homepage";
import { cn } from "@/lib/utils";

type ProcessStepProps = ProcessStepItem & {
  stepNumber: number;
  className?: string;
};

export function ProcessStep({
  stepNumber,
  title,
  description,
  className,
}: ProcessStepProps) {
  return (
    <article
      className={cn(
        "relative rounded-[1.85rem] border border-stone-200/80 bg-white p-6 shadow-[0_22px_55px_-42px_rgba(15,23,42,0.32)] sm:p-7",
        className
      )}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-base font-semibold text-white shadow-sm">
        <span className="sr-only">Step </span>
        {stepNumber}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[0.98rem] sm:leading-7">
        {description}
      </p>
    </article>
  );
}
