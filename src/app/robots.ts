import type { MetadataRoute } from 'next';

import { absoluteUrl } from '@/lib/seo';
import { REVIEW_ONLY } from '@/lib/preview';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  if (REVIEW_ONLY) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/'),
  };
}
