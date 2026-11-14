export type ResourceTopic = {
  id: string;
  title: string;
  description: string;
  status: "planned";
  existingHref: string;
  linkLabel: string;
  reviewOwner: "registered-manager" | "pricing-owner" | "content-owner";
};

// Build 1 is a signposting catalogue, not reviewed guidance. Build 2 must add
// source references, reviewer approval, reviewedOn and reviewDue before articles
// can be published. Never turn a planned topic into a fake article link.
export const resourceTopics: readonly ResourceTopic[] = [
  { id: "starting-home-care", title: "Starting home care", description: "Finding your way through the first conversation and choosing support.", status: "planned", existingHref: "/services/home-care", linkLabel: "Explore our home care service", reviewOwner: "registered-manager" },
  { id: "care-fees-funding", title: "Care fees & funding", description: "Questions to discuss about costs and paying for care.", status: "planned", existingHref: "/care-fees", linkLabel: "Read existing care-cost information", reviewOwner: "pricing-owner" },
  { id: "dementia-support", title: "Dementia support", description: "A place for future guidance for people and families living with dementia.", status: "planned", existingHref: "/services/dementia-support", linkLabel: "Explore our dementia support service", reviewOwner: "registered-manager" },
  { id: "respite-care", title: "Respite care", description: "Finding out about support when a family carer needs a break.", status: "planned", existingHref: "/services/respite-care", linkLabel: "Explore our respite care service", reviewOwner: "registered-manager" },
  { id: "frequently-asked-questions", title: "Frequently asked questions", description: "A starting point for common questions about Libra and care at home.", status: "planned", existingHref: "/faqs", linkLabel: "Browse existing FAQs", reviewOwner: "content-owner" },
  { id: "family-support", title: "Support for families", description: "Future resources for conversations and decisions with the people close to you.", status: "planned", existingHref: "/contact", linkLabel: "Talk to the Libra team", reviewOwner: "registered-manager" },
  { id: "care-quality-regulation", title: "Care quality & regulation", description: "Where to find independent CQC information about each Libra branch.", status: "planned", existingHref: "/", linkLabel: "View our branch-specific CQC information", reviewOwner: "registered-manager" },
  { id: "local-availability", title: "Local service availability", description: "Find your local branch and ask about support in your area.", status: "planned", existingHref: "/areas", linkLabel: "Explore the areas we cover", reviewOwner: "registered-manager" },
];
