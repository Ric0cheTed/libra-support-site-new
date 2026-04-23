import { BUSINESS_PROFILE, formatInlineList } from "@/lib/business-profile";
import type { ContactContent } from "@/types/contact";

const { phones, whatsapp, address, openingHours, areas, map, emails, branches } = BUSINESS_PROFILE;
const fallbackTodmordenBranch: (typeof branches)[number] = {
  name: "Todmorden",
  lead: "Kelly",
  summary: "Todmorden branch led by Kelly.",
};
const fallbackBurnleyBranch: (typeof branches)[number] = {
  name: "Burnley",
  lead: "Nic",
  summary: "Burnley branch led by Nic.",
};
const todmordenBranch =
  branches.find((branch) => branch.name === "Todmorden") ?? fallbackTodmordenBranch;
const burnleyBranch =
  branches.find((branch) => branch.name === "Burnley") ?? fallbackBurnleyBranch;

const contactMethods: ContactContent["methods"]["items"] = [
  {
    kind: "call",
    title: "Call us",
    description:
      "Best if you want to talk something through straight away, ask about care options, or discuss the next step for yourself or a loved one.",
    href: phones.primary.href,
    ctaLabel: `Call ${phones.primary.display}`,
    detail: `Landline: ${phones.primary.display} | Mobile: ${phones.mobile.display} | Best for immediate questions during ${openingHours.display}.`,
    ctaVariant: "primary",
  },
  {
    kind: "email",
    title: "Care enquiries",
    description:
      "If you are asking about support for yourself or a loved one, this is the simplest way to send a care enquiry and receive the right follow-up.",
    href: `mailto:${emails.careEnquiries}`,
    ctaLabel: "Send a care enquiry",
    detail: "Best for care questions, support options, and next-step guidance.",
    ctaVariant: "secondary",
  },
  {
    kind: "careers",
    title: "Jobs and admin enquiries",
    description:
      "If you are asking about vacancies, applications, or general office matters, we will make sure your message reaches the right team.",
    href: `mailto:${emails.jobs}`,
    ctaLabel: "Ask about jobs",
    detail: "Helpful for vacancies, applications, CVs, and general office queries.",
    ctaVariant: "secondary",
  },
  {
    kind: "enquiry",
    title: "Enquire online",
    description:
      "Use the enquiry form if you want us to review your situation and come back to you, especially if it helps to explain things properly in writing.",
    href: "#contact-form",
    ctaLabel: "Send an enquiry",
    detail:
      "Choose care, general/admin, or job enquiry in the form so we can direct it to the right person as cleanly as possible.",
    ctaVariant: "secondary",
  },
  {
    kind: "whatsapp",
    title: "Request a callback",
    description:
      "If messaging is easier, request a callback and we will aim to get back to you at a suitable time.",
    href: whatsapp.href,
    ctaLabel: whatsapp.display,
    detail: "Helpful if you would prefer us to call you back rather than speak straight away.",
    ctaVariant: "secondary",
  },
  {
    kind: "office",
    title: "Office and local support",
    description:
      "We have active Libra branches in Todmorden and Burnley, helping families reach a nearby team while we keep local availability clear and realistic.",
    href: map.directionsUrl,
    ctaLabel: "Get directions",
    detailLines: address.lines,
    detail: openingHours.display,
    ctaVariant: "secondary",
  },
];

export const contactContent: ContactContent = {
  metadata: {
    title: "Contact Our Care Team",
    description:
      "Call, email, or send an enquiry to Libra Support Services about home care, local availability, Burnley and Todmorden branch support, or working with our team.",
    path: "/contact",
  },
  hero: {
    eyebrow: "Talk to our team",
    title: "Contact Libra Support Services for care enquiries, next steps, or general support",
    description:
      "If you are exploring care for yourself or a loved one, or you would like to ask about working with Libra, our team is here to help. We keep the first conversation calm, clear, and focused on what support may be needed next.",
    primaryCta: {
      label: "Call Our Team",
      href: phones.primary.href,
      ariaLabel: `Call Libra Support Services on ${phones.primary.display}`,
    },
    secondaryCta: {
      label: "Send an Enquiry",
      href: "#contact-form",
    },
    highlights: [
      "Talk through care needs and next steps",
      "Send a care enquiry online or by email",
      "Ask about jobs or office queries separately",
      `${todmordenBranch.name} and ${burnleyBranch.name} branches with clear local guidance`,
      `Available ${openingHours.display}`,
    ],
    supportCard: {
      eyebrow: "Care and branch contact",
      title: "It should feel easy to ask questions and get clear guidance",
      description:
        "Whether you are ready to arrange support, want to ask about Burnley availability, or need to speak about working with Libra, we will help you take the next step with confidence.",
    },
    image: {
      src: "/images/hero-2.webp",
      alt: "A calm conversation between a carer and an older adult at home",
    },
  },
  methods: {
    eyebrow: "Contact options",
    title: "Choose the simplest way to get in touch",
    description:
      "Some people want to call straight away, others prefer to send a message first. However you contact us, we aim to make care enquiries, job enquiries, and local branch contact feel clear, reassuring, and easy to follow.",
    items: contactMethods,
  },
  support: {
    eyebrow: "What happens next",
    title: "A simple, supportive process from first contact",
    description:
      "Getting in touch does not commit you to anything. We use the first conversation to understand the situation, answer questions, and help you decide what the right next step may be.",
    steps: [
      {
        title: "Tell us about the situation",
        description:
          "Share what support is being explored, who care is for, and any immediate questions or concerns you would like help with.",
      },
      {
        title: "We talk through the options",
        description:
          "We help you understand what kind of support may be suitable, whether we currently cover your area, and what the next step could look like.",
      },
      {
        title: "We arrange the right follow-up",
        description:
          "If appropriate, we can guide you towards a consultation, the right care follow-up, or the right team for work-related enquiries.",
      },
    ],
  },
  form: {
    eyebrow: "Send an enquiry",
    title: "Share a little about your situation and we will get back to you",
    description:
      "If writing is easier, use the form below. Families often use this to outline care needs, ask about Burnley or Todmorden availability, or request a conversation at a better time.",
    guidanceTitle: "Helpful things to include",
    guidancePoints: [
      "Who support is for and the kind of help you are exploring",
      "Your area or the area where support is needed",
      "Whether the enquiry is general, urgent, or time-sensitive",
      "The best way and time for us to get back to you",
      "If your message is about working with Libra, choose job enquiry so it reaches the right team quickly",
    ],
    supportLinks: [
      {
        label: "View Care Services",
        href: "/services",
      },
      {
        label: "See Open Roles",
        href: "/careers/open-roles",
      },
    ],
  },
  location: {
    eyebrow: "Local reassurance",
    title: "A nearby team families can reach and trust",
    description:
      "We now have active Libra branches in Todmorden and Burnley. That gives families two clear local bases while keeping our current coverage and availability guidance grounded and honest.",
    officeLabel: "Todmorden contact base",
    addressLines: address.lines,
    openingHours: openingHours.display,
    directionsCta: {
      label: "Get directions",
      href: map.directionsUrl,
    },
    areasLabel: "Current Calderdale coverage",
    areas: areas.current,
    note:
      "Todmorden branch led by Kelly. Burnley branch led by Nic. If you are in or around Burnley and unsure about availability, get in touch and we will guide you clearly without overpromising.",
    branchesTitle: "Active Libra branches",
    branches: [
      {
        name: `${todmordenBranch.name} branch`,
        lead: todmordenBranch.lead,
        description:
          "Our established Todmorden base remains the main day-to-day contact point for families across our current Calderdale coverage.",
      },
      {
        name: `${burnleyBranch.name} branch`,
        lead: burnleyBranch.lead,
        description:
          "Our active Burnley base gives Libra a second trusted local presence as we continue expanding carefully and responsibly.",
      },
    ],
    trustImage: burnleyBranch.image
      ? {
          ...burnleyBranch.image,
          caption:
            "Burnley branch led by Nic, adding a visible Libra office presence alongside our Todmorden base.",
        }
      : undefined,
    mapTitle: "Libra Support Services contact location",
  },
  faqs: {
    eyebrow: "Contact questions",
    title: "A few common questions before you get in touch",
    description:
      "These answers are here to reduce uncertainty and help you feel more comfortable about making contact.",
    items: [
      {
        question: "How quickly will someone get back to me?",
        answer:
          "We aim to respond as quickly as possible during our opening hours. If you get in touch outside those times, we will come back to you as soon as we can on the next working day.",
      },
      {
        question: "Should I call or use the enquiry form?",
        answer:
          "Call if you want to talk something through straight away. Use the enquiry form if you would prefer to send details in writing, request a callback, or explain your situation before speaking to us.",
      },
      {
        question: "What should I include in my message?",
        answer:
          "It helps to tell us who support is for, what kind of help you are exploring, the area where support is needed, and the best way for us to contact you back.",
      },
      {
        question: "Can I talk to someone about care needs before making a decision?",
        answer:
          "Yes. Many families contact us before they are ready to make a decision. We are happy to talk things through and help you understand the options first.",
      },
      {
        question: "Do you support people in my area?",
        answer: `We currently support families across ${formatInlineList(
          areas.current
        )}. We also have an active Burnley branch, so if you are nearby and unsure about availability, get in touch and we will guide you clearly.`,
      },
      {
        question: "What if my enquiry is urgent or time-sensitive?",
        answer:
          "If your enquiry feels urgent, calling is usually the best option. If you send a message or enquiry form, mention clearly that it is urgent or time-sensitive so we can understand the situation properly.",
      },
      {
        question: "How do I ask about working with Libra?",
        answer:
          "You can view our open roles online, use the jobs contact option, or send a job enquiry through the contact form. If your question is about care, use the care enquiry option and we will route it appropriately.",
      },
    ],
  },
  finalCta: {
    title: "Need to talk something through?",
    description:
      "Call our team or send an enquiry and we will direct your message to the right person in a calm, practical way.",
    primaryCta: {
      label: "Call Our Team",
      href: phones.primary.href,
      ariaLabel: `Call Libra Support Services on ${phones.primary.display}`,
    },
    secondaryCta: {
      label: "Send an Enquiry",
      href: "#contact-form",
    },
  },
};
