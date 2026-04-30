import type { Metadata } from 'next';

import {
  BUSINESS_PROFILE,
  formatInlineList,
  type Address,
  type BranchProfile,
} from './business-profile';

const SITE_URL = 'https://libra-support.co.uk';
const SITE_NAME = BUSINESS_PROFILE.name;
const DEFAULT_DESCRIPTION =
  'CQC-regulated home care from Libra Support Services, with active branches in Todmorden and Burnley and clear local coverage across their branch areas.';
const GENERAL_CONTACT_EMAIL = BUSINESS_PROFILE.emails.admin;

const activeAreaNames = Array.from(
  new Set([
    ...BUSINESS_PROFILE.areas.current,
    ...BUSINESS_PROFILE.branches.map((branch) => branch.name),
  ])
);

const branchPagePaths: Record<string, string> = {
  Todmorden: '/areas/todmorden',
  Burnley: '/areas/burnley',
};

const branchServiceDefinitions = [
  {
    name: 'Home Care',
    serviceType: 'Home care support',
    url: '/services/home-care',
    branches: ['Todmorden', 'Burnley'],
  },
  {
    name: 'Respite Care',
    serviceType: 'Short-term respite care',
    url: '/services/respite-care',
    branches: ['Todmorden', 'Burnley'],
  },
  {
    name: 'Companionship',
    serviceType: 'Companionship at home',
    url: '/services/companionship',
    branches: ['Todmorden', 'Burnley'],
  },
  {
    name: 'Dementia Support',
    serviceType: 'Dementia support at home',
    url: '/services/dementia-support',
    branches: ['Todmorden'],
  },
  {
    name: 'Personal Care',
    serviceType: 'Personal care at home',
    url: '/services/personal-care',
    branches: ['Todmorden'],
  },
] as const;

export const seo = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  defaultTitle: `${SITE_NAME} | Home Care in Todmorden, Burnley & Calderdale`,
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

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function localBusinessId() {
  return `${seo.siteUrl}/#localbusiness`;
}

function websiteId() {
  return `${seo.siteUrl}/#website`;
}

function branchId(branchName: string) {
  return `${seo.siteUrl}/#${slugify(branchName)}-branch`;
}

function serviceId(serviceName: string) {
  return `${seo.siteUrl}/#service-${slugify(serviceName)}`;
}

function getBranch(branchName: string) {
  return BUSINESS_PROFILE.branches.find((branch) => branch.name === branchName);
}

function buildPostalAddress(address: Address) {
  return {
    '@type': 'PostalAddress',
    streetAddress: [address.line1, address.line2].filter(Boolean).join(', '),
    addressLocality: address.city,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: address.country,
  };
}

function buildAreaServed(areaNames: readonly string[]) {
  return areaNames.map((areaName) => ({
    '@type': 'AdministrativeArea',
    name: areaName,
  }));
}

function uniqueAreaNamesForBranches(branchNames: readonly string[]) {
  return Array.from(
    new Set(
      branchNames.flatMap((branchName) => getBranch(branchName)?.coverageAreas ?? [])
    )
  );
}

function buildOpeningHoursSpecification() {
  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: BUSINESS_PROFILE.openingHours.days,
      opens: BUSINESS_PROFILE.openingHours.opens,
      closes: BUSINESS_PROFILE.openingHours.closes,
    },
  ];
}

function buildBranchStructuredData(branch: BranchProfile) {
  const pagePath = branchPagePaths[branch.name] ?? '/areas';
  const coverage = branch.coverageAreas ?? [];
  const description = [branch.summary, branch.coverageNote].filter(Boolean).join(' ');

  return {
    '@type': 'LocalBusiness',
    '@id': branchId(branch.name),
    name: `${seo.siteName} ${branch.name} Branch`,
    url: canonicalUrl(pagePath),
    image: absoluteUrl(branch.image?.src ?? seo.defaultImage),
    description,
    telephone: BUSINESS_PROFILE.phones.primary.display,
    ...(branch.address ? { address: buildPostalAddress(branch.address) } : {}),
    areaServed: buildAreaServed(coverage),
    ...(branch.directionsUrl ? { hasMap: branch.directionsUrl } : {}),
    openingHoursSpecification: buildOpeningHoursSpecification(),
    parentOrganization: {
      '@id': localBusinessId(),
      name: seo.siteName,
    },
    branchOf: {
      '@id': localBusinessId(),
      name: seo.siteName,
    },
  };
}

function buildServiceStructuredData(service: (typeof branchServiceDefinitions)[number]) {
  const branchNames = service.branches;
  const areaNames = uniqueAreaNamesForBranches(branchNames);

  return {
    '@type': 'Service',
    '@id': serviceId(service.name),
    name: service.name,
    serviceType: service.serviceType,
    provider: {
      '@id': localBusinessId(),
    },
    areaServed: buildAreaServed(areaNames),
    availableAtOrFrom: branchNames.map((branchName) => ({
      '@id': branchId(branchName),
    })),
    url: absoluteUrl(service.url),
  };
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
        '@type': 'WebSite',
        '@id': websiteId(),
        name: seo.siteName,
        url: seo.siteUrl,
        publisher: {
          '@id': localBusinessId(),
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': localBusinessId(),
        name: seo.siteName,
        ...(BUSINESS_PROFILE.legalName ? { legalName: BUSINESS_PROFILE.legalName } : {}),
        url: seo.siteUrl,
        image: absoluteUrl(seo.defaultImage),
        logo: absoluteUrl('/images/libra-full-logo.webp'),
        description: seo.defaultDescription,
        telephone: BUSINESS_PROFILE.phones.primary.display,
        email: GENERAL_CONTACT_EMAIL,
        areaServed: buildAreaServed(activeAreaNames),
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'care enquiries',
            telephone: BUSINESS_PROFILE.phones.primary.display,
            email: BUSINESS_PROFILE.emails.careEnquiries,
          },
          {
            '@type': 'ContactPoint',
            contactType: 'administration',
            telephone: BUSINESS_PROFILE.phones.primary.display,
            email: BUSINESS_PROFILE.emails.admin,
          },
          {
            '@type': 'ContactPoint',
            contactType: 'recruitment',
            telephone: BUSINESS_PROFILE.phones.primary.display,
            email: BUSINESS_PROFILE.emails.jobs,
          },
        ],
        department: BUSINESS_PROFILE.branches.map((branch) => ({
          '@id': branchId(branch.name),
        })),
        address: buildPostalAddress(BUSINESS_PROFILE.address),
        openingHoursSpecification: buildOpeningHoursSpecification(),
        ...(sameAs.length ? { sameAs } : {}),
      },
      ...BUSINESS_PROFILE.branches.map(buildBranchStructuredData),
      ...branchServiceDefinitions.map(buildServiceStructuredData),
    ],
  };
}

export function getHomePageStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl('/')}#webpage`,
    url: canonicalUrl('/'),
    name: seo.defaultTitle,
    description: seo.defaultDescription,
    isPartOf: {
      '@id': websiteId(),
    },
    about: {
      '@id': localBusinessId(),
    },
    mainEntity: {
      '@id': localBusinessId(),
    },
  };
}

export function getAreasPageStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${canonicalUrl('/areas')}#webpage`,
    url: canonicalUrl('/areas'),
    name: 'Areas We Cover',
    description:
      'Branch coverage for Libra Support Services across the Todmorden and Burnley branch areas.',
    isPartOf: {
      '@id': websiteId(),
    },
    about: {
      '@id': localBusinessId(),
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: BUSINESS_PROFILE.branches.map((branch, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: `${branch.name} branch`,
        item: {
          '@id': branchId(branch.name),
          name: `${seo.siteName} ${branch.name} Branch`,
          areaServed: buildAreaServed(branch.coverageAreas ?? []),
          ...(branch.coverageNote ? { description: branch.coverageNote } : {}),
        },
      })),
    },
  };
}

export function getBranchAreaStructuredData(branchName: string) {
  const branch = getBranch(branchName);
  const pagePath = branchPagePaths[branchName] ?? '/areas';

  if (!branch) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl(pagePath)}#webpage`,
    url: canonicalUrl(pagePath),
    name: `${branch.name} branch coverage`,
    description: [
      branch.summary,
      branch.coverageAreas?.length
        ? `The ${branch.name} branch covers ${formatInlineList(branch.coverageAreas)}.`
        : undefined,
      branch.coverageNote,
    ].filter(Boolean).join(' '),
    isPartOf: {
      '@id': websiteId(),
    },
    about: {
      '@id': branchId(branch.name),
    },
    mainEntity: {
      '@id': branchId(branch.name),
    },
  };
}

export function getContactPageStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${canonicalUrl('/contact')}#webpage`,
    url: canonicalUrl('/contact'),
    name: 'Contact Libra Support Services',
    description:
      'Contact Libra Support Services about care enquiries, branch coverage, and local home care support.',
    isPartOf: {
      '@id': websiteId(),
    },
    about: {
      '@id': localBusinessId(),
    },
    mainEntity: {
      '@id': localBusinessId(),
    },
  };
}
