export type PhoneContact = {
  display: string;
  href: string;
};

export type Address = {
  line1: string;
  line2?: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  lines: string[];
};

export type OpeningHours = {
  days: string[];
  opens: string;
  closes: string;
  display: string;
};

export type BusinessProfile = {
  name: string;
  legalName?: string;
  phones: {
    primary: PhoneContact;
    secondary?: PhoneContact;
  };
  email: string;
  whatsapp: {
    display: string;
    href: string;
  };
  address: Address;
  openingHours: OpeningHours;
  areas: {
    current: string[];
    comingSoon: string[];
  };
  links: {
    companiesHouse: string;
    cqcProvider: string;
    cqcLocation: string;
    facebook?: string;
  };
  map: {
    embedUrl: string;
    directionsUrl: string;
  };
};

const directionsQuery =
  'Room 102, Todmorden Community College, Todmorden, West Yorkshire OL14 7BX, United Kingdom';

export const BUSINESS_PROFILE: BusinessProfile = {
  name: 'Libra Support Services',
  phones: {
    primary: {
      display: '01706 817 672',
      href: 'tel:01706817672',
    },
    secondary: {
      display: '07751 123 507',
      href: 'tel:07751123507',
    },
  },
  email: 'nicola@librasupport.co.uk',
  whatsapp: {
    display: 'Request a call back (WhatsApp)',
    href: 'https://wa.me/447943157855',
  },
  address: {
    line1: 'Room 102, Todmorden Community College',
    city: 'Todmorden',
    region: 'West Yorkshire',
    postalCode: 'OL14 7BX',
    country: 'United Kingdom',
    lines: [
      'Room 102, Todmorden Community College',
      'Todmorden',
      'West Yorkshire',
      'OL14 7BX',
      'United Kingdom',
    ],
  },
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
    display: 'Monday to Friday, 9am - 5pm',
  },
  areas: {
    current: ['Todmorden', 'Hebden Bridge', 'Mytholmroyd'],
    comingSoon: ['Cliviger', 'Worsthorne', 'Pike Hill'],
  },
  links: {
    companiesHouse: 'https://find-and-update.company-information.service.gov.uk/company/13185381',
    cqcProvider: 'https://www.cqc.org.uk/provider/1-10610346970',
    cqcLocation: 'https://www.cqc.org.uk/location/1-11688271981',
    facebook: 'https://www.facebook.com/LibraSupportCalderdale',
  },
  map: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.4129929293816!2d-2.1014253!3d53.7137928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bddf5f1265d1b%3A0x56ae2222483c8d62!2sTodmorden%20Community%20College!5e0!3m2!1sen!2suk!4v1716999999999!5m2!1sen!2suk',
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      directionsQuery
    )}`,
  },
};

export const BUSINESS_NAME = BUSINESS_PROFILE.name;

export function formatInlineList(items: readonly string[]) {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}
