import Link from 'next/link';

import { BUSINESS_PROFILE } from '@/lib/business-profile';

type CallRequestCallbackCtaProps = {
  className?: string;
};

export function CallRequestCallbackCta({ className = '' }: CallRequestCallbackCtaProps) {
  const phone = BUSINESS_PROFILE.phones.primary;
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`.trim()}>
      <a
        href={phone.href}
        data-cta="call"
        className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded hover:bg-primary-dark transition"
      >
        Call now: {phone.display}
      </a>
      <Link
        href="/contact"
        data-cta="request-callback"
        className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded hover:bg-white transition"
      >
        Request a call back
      </Link>
    </div>
  );
}
