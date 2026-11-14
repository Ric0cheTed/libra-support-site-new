'use client';

import { useEffect } from 'react';

import { getContactClickEvent, trackEvent } from '@/lib/ga';
import { OPTIONAL_INTEGRATIONS } from '@/lib/optional-integrations';

export default function AnalyticsEvents() {
  useEffect(() => {
    if (!OPTIONAL_INTEGRATIONS.analytics) return;
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a') as HTMLAnchorElement | null;
      if (!anchor) return;

      const eventName = getContactClickEvent(anchor.getAttribute('href') ?? '');
      if (eventName) trackEvent(eventName);
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
