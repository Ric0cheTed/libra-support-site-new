// Fail closed until the owner approves an applicable privacy model.
// Browser state, URL parameters and public environment variables cannot enable this.
export const OPTIONAL_INTEGRATIONS = Object.freeze({
  analytics: false,
  embeddedMaps: false,
} as const);
