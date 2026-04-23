import type { AnchorHTMLAttributes, ReactNode } from "react";

import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold tracking-[0.01em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-[0_20px_46px_-24px_rgba(34,127,70,0.9)] hover:bg-primary-dark",
        secondary:
          "border border-stone-300 bg-white/95 text-slate-900 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.28)] hover:border-stone-400 hover:bg-stone-50",
      },
      size: {
        default: "min-h-[3.25rem] px-6 py-3 text-sm sm:text-base",
        compact: "min-h-[2.875rem] px-[1.125rem] py-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    className?: string;
    children: ReactNode;
  };

function isInternalHref(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

function isExternalWebHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function Button({
  href,
  children,
  className,
  variant,
  size,
  rel,
  target,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const externalRel = isExternalWebHref(href) ? rel ?? "noreferrer noopener" : rel;
  const externalTarget = isExternalWebHref(href) ? target ?? "_blank" : target;

  if (isInternalHref(href)) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      rel={externalRel}
      target={externalTarget}
      {...props}
    >
      {children}
    </a>
  );
}

export { buttonVariants };
