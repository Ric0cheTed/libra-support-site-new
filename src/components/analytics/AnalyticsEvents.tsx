'use client';

import { useEffect } from 'react';

import { trackEvent } from '@/lib/ga';

function normalizeHref(href: string) {
  return href.trim();
}

function isRequestCallbackLink(href: string) {
  return href === '/contact' || href.startsWith('/contact?') || href.startsWith('/contact#');
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = normalizeHref(anchor.getAttribute('href') ?? '');
      if (!href) return;

      if (href.startsWith('tel:')) {
        trackEvent('click_call', {
          link_url: href,
          link_text: anchor.textContent?.trim() ?? '',
        });
        return;
      }

      const ctaType = anchor.dataset.cta ?? '';
      if (ctaType === 'request-callback' || isRequestCallbackLink(href)) {
        trackEvent('click_request_callback', {
          link_url: href,
          link_text: anchor.textContent?.trim() ?? '',
        });
        return;
      }

      if (href.startsWith('mailto:')) {
        trackEvent('click_email', {
          link_url: href,
          link_text: anchor.textContent?.trim() ?? '',
        });
      }
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true } as any);
  }, []);

  return null;
}
