import type { MetadataRoute } from 'next';

import { absoluteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

const routes = [
  '/',
  '/about',
  '/about/team',
  '/services',
  '/services/home-care',
  '/services/live-in-care',
  '/services/respite-care',
  '/care-fees',
  '/faqs',
  '/careers',
  '/careers/meet-team',
  '/careers/open-roles',
  '/contact',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/services') ? 0.9 : 0.7,
  }));
}
