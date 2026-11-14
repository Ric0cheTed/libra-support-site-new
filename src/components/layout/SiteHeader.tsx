'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, PhoneCall, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { homepageContent } from '@/content/homepage';
import { Button } from '@/components/shared/Button';
import { Container } from '@/components/shared/Container';
import { UtilityTrustStrip } from '@/components/layout/UtilityTrustStrip';
import { cn } from '@/lib/utils';

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const { header } = homepageContent;

  function closeMenu(restoreFocus = false) {
    setMenuOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    const topBar = topBarRef.current;
    if (!topBar) return;
    const updateMenuHeight = () => headerRef.current?.style.setProperty('--libra-header-height', `${topBar.getBoundingClientRect().height}px`);
    updateMenuHeight();
    const observer = new ResizeObserver(updateMenuHeight);
    observer.observe(topBar);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const openDetails = headerRef.current?.querySelector<HTMLDetailsElement>('details[open]');
      if (openDetails) {
        openDetails.open = false;
        openDetails.querySelector('summary')?.focus();
      } else if (menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (headerRef.current?.contains(event.target as Node)) return;
      setMenuOpen(false);
      headerRef.current?.querySelectorAll<HTMLDetailsElement>('details[open]').forEach((details) => { details.open = false; });
    };
    const desktop = window.matchMedia('(min-width: 1280px)');
    const resetAtBreakpoint = () => {
      setMenuOpen(false);
      headerRef.current?.querySelectorAll<HTMLDetailsElement>('details[open]').forEach((details) => { details.open = false; });
    };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', resetAtBreakpoint);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', resetAtBreakpoint);
    };
  }, [menuOpen]);

  function isActive(href: string) {
    return pathname.replace(/\/$/, '') === href.replace(/\/$/, '');
  }

  return (
    <header ref={headerRef} onBlur={(event) => { if (menuOpen && event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) closeMenu(); }} className="sticky top-0 z-50 border-b border-primary/15 bg-white shadow-sm">
      <div className="hidden xl:block"><UtilityTrustStrip /></div>
      <div ref={topBarRef}>
      <Container size="wide" className="flex min-h-[5.25rem] flex-wrap items-center justify-between gap-2 py-3 sm:gap-5">
        <Link href="/" className="shrink-0 rounded-md" onClick={() => closeMenu()}>
          <Image src="/images/libra-full-logo.webp" alt="Libra Support Services" width={517} height={131} priority className="h-auto w-[144px] sm:w-[200px]" />
        </Link>
        <p className="hidden max-w-[19rem] text-sm text-slate-600 md:block">Care that feels close to home.<br /><span className="text-primary-900">Todmorden · Calderdale · Burnley</span></p>
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <a href={header.secondaryCta.href} className="inline-flex min-h-11 items-center gap-2 rounded-full px-2 text-sm font-semibold text-primary-900">
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            <span className="sm:hidden">Call</span><span className="hidden sm:inline">{header.secondaryCta.label}</span>
          </a>
          <Button href={header.primaryCta.href} size="compact" className="hidden sm:inline-flex">Enquire about care</Button>
          <button ref={toggleRef} type="button" onClick={() => { if (menuOpen) closeMenu(true); else setMenuOpen(true); }} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-primary/25 text-primary-900 xl:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-site-menu">
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>
      </div>

      <nav className="hidden border-t border-primary/10 xl:block" aria-label="Primary navigation">
        <Container size="wide" className="flex flex-wrap items-center justify-between gap-2 py-1">
          {header.navItems.map((item) => item.subItems ? (
            <details key={item.href} className="group relative" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) event.currentTarget.open = false; }}>
              <summary className="cursor-pointer rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-primary-50">{item.title}</summary>
              <div className="absolute left-0 top-full w-64 rounded-xl border border-primary/15 bg-white p-2 shadow-lg">
                <Link href={item.href} className="block rounded-lg px-3 py-3 text-sm font-semibold text-primary-900" aria-current={isActive(item.href) ? 'page' : undefined} onClick={(event) => { event.currentTarget.closest('details')?.removeAttribute('open'); }}>Explore {item.title.toLowerCase()}</Link>
                {item.subItems.map((sub) => <Link key={sub.href} href={sub.href} className="block rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-primary-50" aria-current={isActive(sub.href) ? 'page' : undefined} onClick={(event) => { event.currentTarget.closest('details')?.removeAttribute('open'); }}>{sub.title}</Link>)}
              </div>
            </details>
          ) : <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={cn('rounded-lg px-3 py-3 text-sm font-medium hover:bg-primary-50', isActive(item.href) ? 'bg-primary-50 text-primary-900' : 'text-slate-700')}>{item.title}</Link>)}
        </Container>
      </nav>

      <div id="mobile-site-menu" hidden={!menuOpen} className="libra-menu border-t border-primary/15 bg-white xl:hidden">
        <Container size="wide" className="py-4">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1">
              {header.navItems.map((item) => <li key={item.href}>
                <Link href={item.href} onClick={() => closeMenu()} aria-current={isActive(item.href) ? 'page' : undefined} className="block rounded-lg px-3 py-3 font-medium text-primary-900 hover:bg-primary-50">{item.title}</Link>
                {item.subItems && <ul className="ml-3 border-l-2 border-accent-100 pl-2">{item.subItems.map((sub) => <li key={sub.href}><Link href={sub.href} onClick={() => closeMenu()} className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-primary-50" aria-current={isActive(sub.href) ? 'page' : undefined}>{sub.title}</Link></li>)}</ul>}
              </li>)}
            </ul>
          </nav>
          <div className="mt-4 grid gap-3 border-t border-primary/15 pt-4">
            <Button href={header.primaryCta.href} onClick={() => closeMenu()}>Enquire about care</Button>
            <Button href={header.secondaryCta.href} variant="secondary" onClick={() => closeMenu()}>{header.secondaryCta.label}</Button>
            <div className="flex flex-wrap gap-x-5 text-sm"><Link href="/care-fees" className="libra-link" onClick={() => closeMenu()}>Care costs</Link><Link href="/faqs" className="libra-link" onClick={() => closeMenu()}>FAQs</Link><Link href="/#why-libra" className="libra-link" onClick={() => closeMenu()}>Why Libra</Link></div>
          </div>
        </Container>
      </div>
    </header>
  );
}