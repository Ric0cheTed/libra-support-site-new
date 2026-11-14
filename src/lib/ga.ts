import { OPTIONAL_INTEGRATIONS } from './optional-integrations';

const CLICK_EVENTS = ['click_call', 'click_email', 'click_request_callback'] as const;
const ENQUIRY_EVENTS = ['enquiry_attempt', 'enquiry_accepted', 'enquiry_error', 'enquiry_uncertain'] as const;
export type AnalyticsEvent = typeof CLICK_EVENTS[number] | typeof ENQUIRY_EVENTS[number];
export type GaEventParams = { form_name?: 'contact' };

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function buildAnalyticsEvent(eventName: unknown, params: unknown = {}): { name: AnalyticsEvent; params: GaEventParams } | null {
  if (typeof eventName !== 'string' || !params || typeof params !== 'object' || Array.isArray(params)) return null;
  const descriptors = Object.getOwnPropertyDescriptors(params);
  if (Object.values(descriptors).some(value => value.get || value.set)) return null;
  const keys = Object.keys(descriptors);
  if ((CLICK_EVENTS as readonly string[]).includes(eventName)) {
    return keys.length === 0 ? { name: eventName as AnalyticsEvent, params: {} } : null;
  }
  if (!(ENQUIRY_EVENTS as readonly string[]).includes(eventName)) return null;
  if (keys.length !== 1 || keys[0] !== 'form_name' || descriptors.form_name.value !== 'contact') return null;
  return { name: eventName as AnalyticsEvent, params: { form_name: 'contact' } };
}

export function getContactClickEvent(href: string): typeof CLICK_EVENTS[number] | null {
  if (typeof href !== 'string') return null;
  const value = href.trim();
  if (value.startsWith('tel:')) return 'click_call';
  if (value.startsWith('mailto:')) return 'click_email';
  try {
    const url = new URL(value, 'https://libra-support.co.uk/');
    return url.origin === 'https://libra-support.co.uk' && url.pathname.replace(/\/+$/, '') === '/contact' ? 'click_request_callback' : null;
  } catch {
    return null;
  }
}

export function trackEvent(eventName: AnalyticsEvent, params: GaEventParams = {}) {
  if (!OPTIONAL_INTEGRATIONS.analytics || typeof window === 'undefined') return;
  const event = buildAnalyticsEvent(eventName, params);
  if (!event) return;

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event.name, event.params);
    }
  } catch {
    // no-op: analytics should never break the UI
  }
}
