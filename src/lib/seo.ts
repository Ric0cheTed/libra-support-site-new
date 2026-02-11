import type { Metadata } from 'next';

const SITE_URL = 'https://libra-support.co.uk';
const SITE_NAME = 'Libra Support Services';
const DEFAULT_DESCRIPTION =
  'CQC-regulated home care in Todmorden, Hebden Bridge, Mytholmroyd and nearby areas. Compassionate support for home care, live-in care and respite care.';

export const seo = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  defaultTitle: `${SITE_NAME} | Home Care in Todmorden, UK`,
  defaultDescription: DEFAULT_DESCRIPTION,
  defaultImage: '/images/default.webp',
  locale: 'en_GB',
};

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalizedPath, seo.siteUrl).toString();
}

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({ title, description, path }: BuildPageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: seo.siteName,
      locale: seo.locale,
      images: [
        {
          url: absoluteUrl(seo.defaultImage),
          width: 1200,
          height: 630,
          alt: `${seo.siteName} home care services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(seo.defaultImage)],
    },
  };
}

export function getOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${seo.siteUrl}/#localbusiness`,
        name: seo.siteName,
        url: seo.siteUrl,
        image: absoluteUrl(seo.defaultImage),
        description: seo.defaultDescription,
        telephone: '+44 1706 817672',
        email: 'nicola@librasupport.co.uk',
        areaServed: ['Todmorden', 'Hebden Bridge', 'Mytholmroyd', 'Burnley'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Todmorden',
          addressRegion: 'West Yorkshire',
          addressCountry: 'GB',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
      },
      {
        '@type': 'Service',
        name: 'Home Care',
        serviceType: 'Home care support',
        provider: {
          '@id': `${seo.siteUrl}/#localbusiness`,
        },
        areaServed: 'Todmorden, West Yorkshire, UK',
        url: absoluteUrl('/services/home-care'),
      },
      {
        '@type': 'Service',
        name: 'Live-in Care',
        serviceType: '24/7 live-in care',
        provider: {
          '@id': `${seo.siteUrl}/#localbusiness`,
        },
        areaServed: 'Todmorden, West Yorkshire, UK',
        url: absoluteUrl('/services/live-in-care'),
      },
      {
        '@type': 'Service',
        name: 'Respite Care',
        serviceType: 'Short-term respite care',
        provider: {
          '@id': `${seo.siteUrl}/#localbusiness`,
        },
        areaServed: 'Todmorden, West Yorkshire, UK',
        url: absoluteUrl('/services/respite-care'),
      },
    ],
  };
}
