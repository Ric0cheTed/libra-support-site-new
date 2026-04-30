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

export type EmailContacts = {
  careEnquiries: string;
  admin: string;
  jobs: string;
};

export type BranchImage = {
  src: string;
  alt: string;
};

export type BranchProfile = {
  name: string;
  lead: string;
  summary: string;
  coverageAreas?: string[];
  coverageNote?: string;
  address?: Address;
  directionsUrl?: string;
  visitingNote?: string;
  image?: BranchImage;
};

export type BusinessProfile = {
  name: string;
  legalName?: string;
  phones: {
    primary: PhoneContact;
    mobile: PhoneContact;
  };
  emails: EmailContacts;
  whatsapp: {
    display: string;
    href: string;
  };
  address: Address;
  openingHours: OpeningHours;
  branches: BranchProfile[];
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

const todmordenOfficeAddress: Address = {
  line1: "44 Burnley Road",
  line2: "Room 102, Todmorden Community College",
  city: "Todmorden",
  region: "West Yorkshire",
  postalCode: "OL14 7BX",
  country: "United Kingdom",
  lines: [
    "44 Burnley Road",
    "Room 102, Todmorden Community College",
    "Todmorden",
    "West Yorkshire",
    "OL14 7BX",
    "United Kingdom",
  ],
};

const burnleyOfficeAddress: Address = {
  line1: "3-5 Red Lion Street",
  city: "Burnley",
  region: "Lancashire",
  postalCode: "BB11 2AE",
  country: "United Kingdom",
  lines: [
    "3-5 Red Lion Street",
    "Burnley",
    "BB11 2AE",
    "United Kingdom",
  ],
};

const todmordenBranchCoverage = [
  "Cornholme",
  "Todmorden",
  "Walsden",
  "Hebden Bridge",
  "Mytholmroyd",
] as const;

const burnleyBranchCoverage = [
  "Burnley",
  "Cliviger",
  "Worsthorne",
  "Brunshaw",
] as const;

export function formatAddressInline(lines: readonly string[]) {
  return lines.join(", ");
}

export function createGoogleDirectionsUrl(lines: readonly string[]) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    formatAddressInline(lines)
  )}`;
}

export const BUSINESS_PROFILE: BusinessProfile = {
  name: "Libra Support Services",
  phones: {
    primary: {
      display: "01706 817 672",
      href: "tel:01706817672",
    },
    mobile: {
      display: "07777 157530",
      href: "tel:07777157530",
    },
  },
  emails: {
    careEnquiries: "kelly@librasupport.co.uk",
    admin: "admin@librasupport.co.uk",
    jobs: "admin@librasupport.co.uk",
  },
  whatsapp: {
    display: "Request a call back (WhatsApp)",
    href: "https://wa.me/447943157855",
  },
  address: todmordenOfficeAddress,
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
    display: "Monday to Friday, 9am - 5pm",
  },
  branches: [
    {
      name: "Todmorden",
      lead: "Kelly",
      summary:
        "Our Todmorden branch provides Libra's established local contact base and day-to-day Calderdale support.",
      coverageAreas: [...todmordenBranchCoverage],
      coverageNote: "Rural support is available from the Todmorden branch where local availability allows.",
      address: todmordenOfficeAddress,
      directionsUrl: createGoogleDirectionsUrl(todmordenOfficeAddress.lines),
    },
    {
      name: "Burnley",
      lead: "Nic",
      summary:
        "Our Burnley branch gives Libra an active second base as local availability and trusted support continue to expand carefully.",
      coverageAreas: [...burnleyBranchCoverage],
      address: burnleyOfficeAddress,
      directionsUrl: createGoogleDirectionsUrl(burnleyOfficeAddress.lines),
      visitingNote:
        "Please contact us before visiting so we can make sure the right person is available to help.",
      image: {
        src: "/images/burnley-office-frontage.png",
        alt: "Frontage of the Libra Support Services Burnley office",
      },
    },
  ],
  areas: {
    current: [
      ...todmordenBranchCoverage,
      ...burnleyBranchCoverage,
    ],
    comingSoon: [],
  },
  links: {
    companiesHouse:
      "https://find-and-update.company-information.service.gov.uk/company/13185381",
    cqcProvider: "https://www.cqc.org.uk/provider/1-10610346970",
    cqcLocation: "https://www.cqc.org.uk/location/1-11688271981",
    facebook: "https://www.facebook.com/LibraSupportCalderdale",
  },
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.4129929293816!2d-2.1014253!3d53.7137928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bddf5f1265d1b%3A0x56ae2222483c8d62!2sTodmorden%20Community%20College!5e0!3m2!1sen!2suk!4v1716999999999!5m2!1sen!2suk",
    directionsUrl: createGoogleDirectionsUrl(todmordenOfficeAddress.lines),
  },
};

export const BUSINESS_NAME = BUSINESS_PROFILE.name;

export function formatInlineList(items: readonly string[]) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}
