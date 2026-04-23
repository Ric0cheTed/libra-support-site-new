import type { TestimonialItem } from "@/types/homepage";
import { cn } from "@/lib/utils";

type TestimonialCardProps = TestimonialItem & {
  className?: string;
};

export function TestimonialCard({
  quote,
  name,
  location,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-[1.85rem] border border-stone-200/80 bg-[linear-gradient(180deg,_#ffffff_0%,_#fafaf9_100%)] p-6 shadow-[0_22px_55px_-42px_rgba(15,23,42,0.32)] sm:p-7",
        className
      )}
    >
      <blockquote className="flex-1">
        <p className="text-base leading-7 text-slate-700">
          "{quote}"
        </p>
      </blockquote>
      <figcaption className="mt-6 border-t border-stone-200 pt-4">
        <p className="font-semibold text-slate-950">{name}</p>
        <p className="text-sm text-slate-500">{location}</p>
      </figcaption>
    </figure>
  );
}
