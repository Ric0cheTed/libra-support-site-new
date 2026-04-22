'use client';

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

import type { FaqItem } from "@/types/homepage";
import { cn } from "@/lib/utils";

type AccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();

  return (
    <div className={cn("space-y-4 sm:space-y-5", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${id}-panel-${index}`;
        const buttonId = `${id}-button-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[1.6rem] border border-stone-200/80 bg-white shadow-[0_20px_48px_-38px_rgba(15,23,42,0.28)]"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-slate-950 transition-colors hover:bg-stone-50 sm:px-6 sm:py-5"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "mt-0.5 h-5 w-5 shrink-0 text-slate-500 transition-transform",
                    isOpen ? "rotate-180" : ""
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 sm:px-6 sm:pb-6"
            >
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
