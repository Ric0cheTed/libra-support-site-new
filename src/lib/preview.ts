// next.config.js derives this build-time value; missing/unknown values stay safe.
// URL parameters and browser storage cannot enable enquiry transmission.
export const REVIEW_ONLY = process.env.NEXT_PUBLIC_LIBRA_REVIEW_ONLY !== 'false';
