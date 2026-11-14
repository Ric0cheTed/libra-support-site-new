export const CONTACT_LIMITS = Object.freeze({ name: 100, email: 254, phone: 40, message: 2000 });
export const SUBMISSION_TIMEOUT_MS = 15_000;
export type ContactValues = Record<keyof typeof CONTACT_LIMITS, string>;
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
export type SubmissionOutcome = 'accepted' | 'error' | 'uncertain';

export function validateContactValues(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of ['name', 'email', 'phone', 'message'] as const) {
    const value = values[field];
    if (typeof value !== 'string') {
      errors[field] = 'Please check this field.';
      continue;
    }
    if (field !== 'phone' && !value.trim()) {
      errors[field] = `Please enter your ${field === 'message' ? 'brief message' : field}.`;
    } else if (value.length > CONTACT_LIMITS[field]) {
      errors[field] = `Please use ${CONTACT_LIMITS[field]} characters or fewer.`;
    } else if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value) || (field !== 'message' && /[\r\n]/.test(value))) {
      errors[field] = 'Please remove unsupported control characters.';
    }
  }
  if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  return errors;
}

// A timeout is uncertainty, not evidence that a request was cancelled or undelivered.
// This function never retries, exposes provider payloads or reacts to a late settlement.
export function settleEmailRequest(send: () => Promise<unknown>, timeoutMs = SUBMISSION_TIMEOUT_MS): Promise<SubmissionOutcome> {
  return new Promise((resolve) => {
    let finished = false;
    const finish = (outcome: SubmissionOutcome) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      resolve(outcome);
    };
    const timer = setTimeout(() => finish('uncertain'), timeoutMs);
    try {
      Promise.resolve(send()).then(() => finish('accepted'), () => finish('error'));
    } catch {
      finish('error');
    }
  });
}
