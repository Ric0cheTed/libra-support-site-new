import Link from 'next/link';

type CallRequestCallbackCtaProps = {
  className?: string;
};

const PHONE_HREF = 'tel:01706817672';
const PHONE_LABEL = '01706 817 672';

export function CallRequestCallbackCta({ className = '' }: CallRequestCallbackCtaProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`.trim()}>
      <a
        href={PHONE_HREF}
        data-cta="call"
        className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded hover:bg-primary-dark transition"
      >
        Call now: {PHONE_LABEL}
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
