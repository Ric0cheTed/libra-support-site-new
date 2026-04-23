'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, PhoneCall, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { homepageContent } from '@/content/homepage';
import { Button } from '@/components/shared/Button';
import { Container } from '@/components/shared/Container';
import { cn } from '@/lib/utils';

function normalizeHref(href: string) {
  if (href === '/') {
    return href;
  }

  const [path] = href.split('#');
  return path.replace(/\/$/, '');
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const { header } = homepageContent;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);

    syncHash();
    window.addEventListener('hashchange', syncHash);

    return () => {
      window.removeEventListener('hashchange', syncHash);
    };
  }, [pathname]);

  const currentPath = useMemo(() => normalizeHref(pathname), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/92 shadow-[0_18px_35px_-28px_rgba(15,23,42,0.4)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/82">
      <Container
        size="wide"
        className="flex min-h-[4.875rem] items-center justify-between gap-4 py-3"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Libra Support Services home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/libra-full-logo.webp"
            alt="Libra Support Services"
            width={176}
            height={56}
            priority
            className="h-auto w-auto max-h-12 object-contain"
          />
          <span className="hidden text-xs font-medium uppercase tracking-[0.22em] text-slate-500 xl:inline">
            Home care in Todmorden and Burnley
          </span>
        </Link>

        <nav className="hidden items-center gap-1.5 text-sm font-medium text-slate-700 lg:flex" aria-label="Primary navigation">
          {header.navItems.map((item) => {
            const itemPath = normalizeHref(item.href);
            const itemHash = item.href.includes('#') ? `#${item.href.split('#')[1]}` : '';
            const isHomeRoute = currentPath === '/';
            const isActive = itemHash
              ? isHomeRoute && activeHash === itemHash
              : itemPath === currentPath && (itemPath !== '/' || !activeHash);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'rounded-full px-3.5 py-2 transition-colors hover:bg-stone-100/80 hover:text-primary',
                  isActive ? 'bg-stone-100 text-slate-950' : 'text-slate-700'
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={header.secondaryCta.href}
            aria-label={header.secondaryCta.ariaLabel}
            className="inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-primary"
          >
            <PhoneCall className="h-4 w-4 text-primary" aria-hidden="true" />
            {header.secondaryCta.label}
          </a>
          <Button href={header.primaryCta.href} size="compact">
            {header.primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full border border-stone-200 p-2.5 text-slate-700 transition hover:border-stone-300 hover:bg-stone-50 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-site-menu"
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </Container>

      <div
        id="mobile-site-menu"
        className={cn(
          'overflow-hidden border-t border-stone-200/80 bg-white/98 shadow-[0_24px_40px_-34px_rgba(15,23,42,0.4)] transition-[max-height,opacity] duration-200 lg:hidden',
          menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <Container size="wide" className="py-5">
          <nav className="space-y-2" aria-label="Mobile navigation">
            {header.navItems.map((item) => {
              const itemPath = normalizeHref(item.href);
              const itemHash = item.href.includes('#') ? `#${item.href.split('#')[1]}` : '';
              const isHomeRoute = currentPath === '/';
              const isActive = itemHash
                ? isHomeRoute && activeHash === itemHash
                : itemPath === currentPath && (itemPath !== '/' || !activeHash);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'block rounded-2xl px-4 py-3 text-base font-medium transition-colors',
                    isActive
                      ? 'bg-stone-100 text-slate-950'
                      : 'text-slate-700 hover:bg-stone-50 hover:text-primary'
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 space-y-3 border-t border-stone-200 pt-5">
            <Button
              href={header.primaryCta.href}
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              {header.primaryCta.label}
            </Button>
            <Button
              href={header.secondaryCta.href}
              aria-label={header.secondaryCta.ariaLabel}
              variant="secondary"
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              {header.secondaryCta.label}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
