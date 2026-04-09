import type { Metadata } from 'next';

import { BUSINESS_PROFILE } from './business-profile';

const SITE_URL = 'https://libra-support.co.uk';
const SITE_NAME = BUSINESS_PROFILE.name;
const DEFAULT_DESCRIPTION =
  'CQC-regulated home care in Todmorden, Hebden Bridge, and Mytholmroyd, with flexible support for home care, live-in care, and respite care.';

export const seo = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  defaultTitle: `${SITE_NAME} | Home Care in Todmorden & West Yorkshire`,
  defaultDescription: DEFAULT_DESCRIPTION,
  defaultImage: '/images/default.webp',
  locale: 'en_GB',
};

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalizedPath, seo.siteUrl).toString();
}

export function canonicalUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const withTrailingSlash = normalizedPath === '/' ? '/' : `${normalizedPath.replace(/\/$/, '')}/`;
  return new URL(withTrailingSlash, seo.siteUrl).toString();
}

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({ title, description, path }: BuildPageMetadataInput): Metadata {
  const canonical = canonicalUrl(path);

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
  const sameAs = [
    BUSINESS_PROFILE.links.facebook,
    BUSINESS_PROFILE.links.companiesHouse,
    BUSINESS_PROFILE.links.cqcProvider,
    BUSINESS_PROFILE.links.cqcLocation,
  ].filter((link): link is string => Boolean(link));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${seo.siteUrl}/#localbusiness`,
        name: seo.siteName,
        ...(BUSINESS_PROFILE.legalName ? { legalName: BUSINESS_PROFILE.legalName } : {}),
        url: seo.siteUrl,
        image: absoluteUrl(seo.defaultImage),
        description: seo.defaultDescription,
        telephone: BUSINESS_PROFILE.phones.primary.display,
        email: BUSINESS_PROFILE.email,
        areaServed: BUSINESS_PROFILE.areas.current,
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS_PROFILE.address.line1,
          addressLocality: BUSINESS_PROFILE.address.city,
          addressRegion: BUSINESS_PROFILE.address.region,
          postalCode: BUSINESS_PROFILE.address.postalCode,
          addressCountry: BUSINESS_PROFILE.address.country,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: BUSINESS_PROFILE.openingHours.days,
            opens: BUSINESS_PROFILE.openingHours.opens,
            closes: BUSINESS_PROFILE.openingHours.closes,
          },
        ],
        ...(sameAs.length ? { sameAs } : {}),
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
