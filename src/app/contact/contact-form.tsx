'use client';

import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

import { buttonVariants } from "@/components/shared/Button";
import { BUSINESS_PROFILE } from "@/lib/business-profile";
import { trackEvent } from "@/lib/ga";
import { cn } from "@/lib/utils";
import { REVIEW_ONLY } from "@/lib/preview";
import { CONTACT_LIMITS, settleEmailRequest, validateContactValues, type ContactErrors, type ContactValues } from "@/lib/contact-safety";

const enquiryRoutes = {
  care: {
    label: "Care enquiry",
    email: BUSINESS_PROFILE.emails.careEnquiries,
  },
  general: {
    label: "General or admin enquiry",
    email: BUSINESS_PROFILE.emails.admin,
  },
  jobs: {
    label: "Job enquiry",
    email: BUSINESS_PROFILE.emails.jobs,
  },
} as const;

type EnquiryType = keyof typeof enquiryRoutes;

const DEFAULT_ENQUIRY_TYPE: EnquiryType = "care";

export function ContactForm() {
  const [hydrated, setHydrated] = useState(false);
  const [status, setStatus] = useState<'idle' | 'invalid' | 'sending' | 'accepted' | 'error' | 'uncertain'>('idle');
  const [errors, setErrors] = useState<ContactErrors>({});
  const feedbackRef = useRef<HTMLDivElement>(null);
  const inFlight = useRef(false);
  const mounted = useRef(false);
  const [enquiryType, setEnquiryType] = useState<EnquiryType>(DEFAULT_ENQUIRY_TYPE);

  const activeRoute = enquiryRoutes[enquiryType];
  const loading = status === 'sending';

  useEffect(() => {
    mounted.current = true;
    setHydrated(true);
    return () => { mounted.current = false; };
  }, []);

  useEffect(() => {
    if (['invalid', 'error', 'uncertain', 'accepted'].includes(status)) feedbackRef.current?.focus();
  }, [status, errors]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (REVIEW_ONLY || !hydrated || inFlight.current) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(['name', 'email', 'phone', 'message'].map(field => [field, String(data.get(field) ?? '')])) as ContactValues;
    const nextErrors = validateContactValues(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('invalid');
      return;
    }
    inFlight.current = true;
    setStatus('sending');
    trackEvent('enquiry_attempt', { form_name: 'contact' });
    const outcome = await settleEmailRequest(() => emailjs
      .sendForm(
        "service_j012een",
        "template_70ybm0f",
        form,
        "gtGWJApm-pHIxB18l"
      ));
    // The SDK cannot unsend a timed-out request. Do not automatically retry.
    inFlight.current = outcome !== 'error';
    if (!mounted.current) return;
    setStatus(outcome);
    trackEvent(outcome === 'accepted' ? 'enquiry_accepted' : outcome === 'uncertain' ? 'enquiry_uncertain' : 'enquiry_error', { form_name: 'contact' });
  };

  return (
    <div className="rounded-[2rem] border border-stone-200/80 bg-white p-6 shadow-[0_28px_70px_-52px_rgba(15,23,42,0.35)] sm:p-8">
      <div ref={feedbackRef} tabIndex={-1} aria-live="polite" aria-atomic="true" className="mb-5 space-y-3 rounded-xl focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-primary">
        {status === 'invalid' ? (
          <div className="rounded-[1.3rem] border border-red-200 bg-red-50 p-4 text-sm text-red-900">
            <p className="font-semibold">Please check these details before sending:</p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              {Object.entries(errors).map(([field, message]) => <li key={field}><a className="libra-link" href={`#${field}`} onClick={event => { event.preventDefault(); document.getElementById(field)?.focus(); }}>{message}</a></li>)}
            </ul>
          </div>
        ) : null}
        {status === 'accepted' ? (
          <div className="flex items-start gap-3 rounded-[1.3rem] border border-primary-200 bg-primary-50 px-4 py-3 text-sm text-primary-900">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" aria-hidden="true" />
            <p>Your enquiry has been accepted by the email service. This does not confirm inbox receipt. If you need to confirm it reached our team, please call or email us.</p>
          </div>
        ) : null}

        {status === 'error' || status === 'uncertain' ? (
          <div className="flex items-start gap-3 rounded-[1.3rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
            <p>{status === 'uncertain' ? 'We cannot confirm whether your enquiry was received. Your details are still here. Please call or email before sending again, to avoid a duplicate enquiry.' : 'The email service could not confirm your enquiry. Your details are still here. You can try again, or call or email our team.'}</p>
          </div>
        ) : null}
      </div>

      {REVIEW_ONLY ? <p role="status" className="mb-5 rounded-xl border border-primary-200 bg-primary-50 p-4 text-sm text-primary-900">Review preview only. No enquiries or messages will be sent. The online form is disabled.</p> : null}
      <p id="contact-help" className="mb-5 text-sm leading-7 text-slate-700">Please keep your message brief. Do not include detailed health, medical, financial or other sensitive information.</p>
      <p className="mb-5 text-sm leading-7 text-slate-700">You can also <a className="libra-link" href={BUSINESS_PROFILE.phones.primary.href}>call {BUSINESS_PROFILE.phones.primary.display}</a> or <a className="libra-link" href={`mailto:${BUSINESS_PROFILE.emails.careEnquiries}`}>email our team</a>.</p>
      <noscript><p className="mb-5 rounded-xl border border-stone-300 p-4 text-sm leading-7">Online enquiries need JavaScript. No details will be submitted from this form without it. Please use the phone or email links above instead.</p></noscript>
      <form method="post" noValidate onSubmit={sendEmail} className="space-y-5">
        <fieldset disabled={REVIEW_ONLY || !hydrated} className="min-w-0 space-y-5">
        <legend className="sr-only">Enquiry details</legend>
        <input type="hidden" name="enquiry_type" value={enquiryType} />
        <input type="hidden" name="to_email" value={activeRoute.email} />
        <input type="hidden" name="destination_email" value={activeRoute.email} />
        <input type="hidden" name="destination_label" value={activeRoute.label} />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              maxLength={CONTACT_LIMITS.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error contact-help' : 'contact-help'}
              className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
            {errors.name ? <p id="name-error" className="mt-2 text-sm text-red-700">{errors.name}</p> : null}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              maxLength={CONTACT_LIMITS.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error contact-help' : 'contact-help'}
              className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
            {errors.email ? <p id="email-error" className="mt-2 text-sm text-red-700">{errors.email}</p> : null}
          </div>
        </div>

        <div>
          <label htmlFor="enquiryType" className="mb-2 block text-sm font-semibold text-slate-900">
            Enquiry type
          </label>
          <select
            id="enquiryType"
            name="enquiry_type_label"
            value={enquiryType}
            onChange={(event) => setEnquiryType(event.target.value as EnquiryType)}
            className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          >
            <option value="care">Care enquiry</option>
            <option value="general">General or admin enquiry</option>
            <option value="jobs">Job enquiry</option>
          </select>
          <p className="mt-2 text-sm text-slate-600">
            This helps us send your message to the right inbox straight away.
          </p>
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-900">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            maxLength={CONTACT_LIMITS.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error contact-help' : 'contact-help'}
            className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
          {errors.phone ? <p id="phone-error" className="mt-2 text-sm text-red-700">{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            maxLength={CONTACT_LIMITS.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error contact-help' : 'contact-help'}
            placeholder="Tell us a little about the support you are exploring, your area, or the best way for us to get back to you."
            className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
          {errors.message ? <p id="message-error" className="mt-2 text-sm text-red-700">{errors.message}</p> : null}
        </div>

        <button
          type="submit"
          disabled={REVIEW_ONLY || !hydrated || loading || status === 'accepted' || status === 'uncertain'}
          aria-busy={loading}
          className={cn(buttonVariants({ variant: "primary" }), "w-full")}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin motion-reduce:animate-none" aria-hidden="true" />
              Sending enquiry...
            </>
          ) : (
            REVIEW_ONLY ? "Enquiries disabled in preview" : "Send enquiry"
          )}
        </button>
        </fieldset>
      </form>
    </div>
  );
}
