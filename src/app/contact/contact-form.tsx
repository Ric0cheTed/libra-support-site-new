'use client';

import { useState } from "react";
import emailjs from "emailjs-com";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

import { buttonVariants } from "@/components/shared/Button";
import { BUSINESS_PROFILE } from "@/lib/business-profile";
import { trackEvent } from "@/lib/ga";
import { cn } from "@/lib/utils";

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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [enquiryType, setEnquiryType] = useState<EnquiryType>(DEFAULT_ENQUIRY_TYPE);

  const activeRoute = enquiryRoutes[enquiryType];

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setSuccess(false);
    setError(false);

    trackEvent("contact_form_submit_attempt", {
      enquiry_type: enquiryType,
      destination_label: activeRoute.label,
    });

    emailjs
      .sendForm(
        "service_j012een",
        "template_70ybm0f",
        e.currentTarget,
        "gtGWJApm-pHIxB18l"
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setEnquiryType(DEFAULT_ENQUIRY_TYPE);

        trackEvent("generate_lead", {
          form_name: "contact",
          enquiry_type: enquiryType,
          destination_email: activeRoute.email,
        });

        setTimeout(() => setSuccess(false), 6000);
        setTimeout(() => {
          form.reset();
        }, 100);
      })
      .catch((submissionError) => {
        console.error("FAILED:", submissionError);
        setError(true);
        setLoading(false);

        trackEvent("contact_form_submit_error");

        setTimeout(() => setError(false), 6000);
      });
  };

  return (
    <div className="rounded-[2rem] border border-stone-200/80 bg-white p-6 shadow-[0_28px_70px_-52px_rgba(15,23,42,0.35)] sm:p-8">
      <div aria-live="polite" className="mb-5 space-y-3">
        {success ? (
          <div className="flex items-start gap-3 rounded-[1.3rem] border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
            <p>Your message has been sent successfully. We will get back to you as soon as we can.</p>
          </div>
        ) : null}

        {error ? (
          <div className="flex items-start gap-3 rounded-[1.3rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
            <p>We could not send your message just now. Please try again or call our team instead.</p>
          </div>
        ) : null}
      </div>

      <form onSubmit={sendEmail} className="space-y-5">
        <input type="hidden" name="enquiry_type" value={enquiryType} />
        <input type="hidden" name="to_email" value={activeRoute.email} />
        <input type="hidden" name="destination_email" value={activeRoute.email} />
        <input type="hidden" name="destination_label" value={activeRoute.label} />

        <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50/80 px-4 py-4 text-sm leading-6 text-slate-700">
          Care enquiries route to{" "}
          <span className="font-semibold text-slate-900">
            {BUSINESS_PROFILE.emails.careEnquiries}
          </span>
          . Job enquiries route to{" "}
          <span className="font-semibold text-slate-900">
            {BUSINESS_PROFILE.emails.jobs}
          </span>
          .
        </div>

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
              className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
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
              className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
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
            className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
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
            placeholder="Tell us a little about the support you are exploring, your area, or the best way for us to get back to you."
            className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={cn(buttonVariants({ variant: "primary" }), "w-full")}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
              Sending enquiry...
            </>
          ) : (
            "Send enquiry"
          )}
        </button>
      </form>
    </div>
  );
}
