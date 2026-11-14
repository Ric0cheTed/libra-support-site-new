import { guidanceSources } from "@/content/guidance-sources";

export type StaffProfile = {
  id: string;
  name: string;
  role: string;
  group: "leadership" | "care-team";
  published: boolean;
  identityVerified: boolean;
  verifiedOn?: string;
  sourceKey?: string;
  image?: { src: string; alt: string; permission: "unconfirmed" | "approved" };
  bio?: string;
  biographyPermission?: "unconfirmed" | "approved";
  legacyRole?: string;
};

// Existing records are preserved, but old publication is not proof of current
// identity/role or permission. Only publicly corroborated professional roles
// are shown; optional biographies and images fail closed until approved.
export const staffProfiles: StaffProfile[] = [
  {
    id: "kelly-carpenter", name: "Kelly Carpenter", role: "Registered Manager — Todmorden", group: "leadership",
    published: true, identityVerified: true, verifiedOn: "2026-11-08", sourceKey: "cqc-todmorden", legacyRole: "Registered Manager",
    image: { src: "/images/team/staff-2.webp", alt: "Kelly Carpenter", permission: "unconfirmed" },
    bio: "Kelly is an experienced care leader who supports the team in delivering safe, person-centred care across our local community. She is passionate about maintaining high standards, supporting staff development, and helping families feel confident in the care their loved ones receive.", biographyPermission: "unconfirmed",
  },
  {
    id: "nicola-szymik-walters", name: "Nicola Szymik-Walters", role: "Registered Manager — Burnley", group: "leadership",
    published: true, identityVerified: true, verifiedOn: "2026-11-08", sourceKey: "cqc-burnley", legacyRole: "Registered Manager/Director",
    image: { src: "/images/team/staff-1.webp", alt: "Nicola Szymik-Walters", permission: "unconfirmed" },
    bio: "Nicola is dedicated to making Calderdale a better place for everyone and spends much of her spare time supporting community projects. Outside of work, she enjoys spending time with her family and visiting local music venues in Todmorden and Hebden Bridge.", biographyPermission: "unconfirmed",
  },
  {
    id: "jason-walters", name: "Jason Walters", role: "Director", legacyRole: "Director", group: "leadership",
    published: false, identityVerified: false,
    image: { src: "/images/team/staff-3.webp", alt: "Jason Walters", permission: "unconfirmed" },
    bio: "Jason is one of the directors at Libra Support Services. He is committed to supporting the organisation’s growth and helping the team provide dependable, high-quality care. Outside of work, he enjoys music, playing video games, cooking, spending time with friends and family, and walking in the countryside.", biographyPermission: "unconfirmed",
  },
];

export function getPublicStaff(records: readonly StaffProfile[] = staffProfiles) {
  return records.filter(profile => profile.published && profile.identityVerified && profile.sourceKey && guidanceSources[profile.sourceKey] && profile.verifiedOn).map(profile => ({
    id: profile.id, name: profile.name, role: profile.role, group: profile.group,
    sourceKey: profile.sourceKey!, verifiedOn: profile.verifiedOn!,
    image: profile.image?.permission === "approved" ? profile.image : undefined,
    bio: profile.biographyPermission === "approved" ? profile.bio : undefined,
  }));
}
