import { BUSINESS_PROFILE } from '@/lib/business-profile';

export function MobileStickyCallBar() {
  const phone = BUSINESS_PROFILE.phones.primary;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] sm:hidden">
      <a
        href={phone.href}
        data-cta="call"
        className="inline-flex w-full items-center justify-center rounded bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-dark"
      >
        Call now: {phone.display}
      </a>
    </div>
  );
}
