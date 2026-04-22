import { BUSINESS_PROFILE, formatInlineList } from "@/lib/business-profile";
import type { ContactContent } from "@/types/contact";

const { phones, whatsapp, address, openingHours, areas, map, email } = BUSINESS_PROFILE;

const contactMethods: ContactContent["methods"]["items"] = [
  {
    kind: "call",
    title: "Call us",
    description:
      "Best if you want to talk something through straight away, ask about care options, or discuss the next step for yourself or a loved one.",
    href: phones.primary.href,
    ctaLabel: `Call ${phones.primary.display}`,
    detail: phones.secondary
      ? `Landline: ${phones.primary.display} | Mobile: ${phones.secondary.display} | Best for immediate questions during ${openingHours.display}.`
      : `Best for immediate questions during ${openingHours.display}.`,
    ctaVariant: "primary",
  },
  {
    kind: "email",
    title: "Email us",
    description:
      "Best if you want to send details in writing, ask a non-urgent question, or give us background information before we speak.",
    href: `mailto:${email}`,
    ctaLabel: "Email the team",
    detail: email,
    ctaVariant: "secondary",
  },
  {
    kind: "enquiry",
    title: "Enquire online",
    description:
      "Use the enquiry form if you want us to review your situation and come back to you, especially if it helps to explain things properly in writing.",
    href: "#contact-form",
    ctaLabel: "Send an enquiry",
    detail: "Useful for care enquiries, callback requests, general questions, and follow-up contact.",
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
      "We are based locally and support families across our current core coverage areas with responsive, nearby communication.",
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
      "Call, email, or send an enquiry to Libra Support Services about home care, next steps, local availability, or working with our team.",
    path: "/contact",
  },
  hero: {
    eyebrow: "Talk to our team",
    title: "Contact Libra Support Services for care enquiries, next steps, or general support",
    description:
      "If you are exploring care for yourself or a loved one, or you would like to ask about working with Libra, our local team is here to help. We keep the first conversation calm, clear, and focused on what support may be needed next.",
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
      "General enquiries and callback requests",
      `Local support across ${formatInlineList(areas.current)}`,
      `Available ${openingHours.display}`,
    ],
    supportCard: {
      eyebrow: "Care and general contact",
      title: "It should feel easy to ask questions and get clear guidance",
      description:
        "Whether you are ready to arrange support or simply want to understand the options, we will help you take the next step with confidence.",
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
      "Some people want to call straight away, others prefer to send a message first. However you contact us, we aim to make the process clear, reassuring, and easy to follow.",
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
          "If appropriate, we can guide you towards a consultation, a care conversation, or the right team for work-related enquiries.",
      },
    ],
  },
  form: {
    eyebrow: "Send an enquiry",
    title: "Share a little about your situation and we will get back to you",
    description:
      "If writing is easier, use the form below. Families often use this to outline care needs, ask about availability, or request a conversation at a better time.",
    guidanceTitle: "Helpful things to include",
    guidancePoints: [
      "Who support is for and the kind of help you are exploring",
      "Your area or the area where support is needed",
      "Whether the enquiry is general, urgent, or time-sensitive",
      "The best way and time for us to get back to you",
      "If your message is about working with Libra, mention the role or type of work you are interested in",
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
      "We are based in Todmorden and currently support families across our core local areas. If you are nearby and unsure about availability, get in touch and we will guide you clearly.",
    officeLabel: "Current contact base",
    addressLines: address.lines,
    openingHours: openingHours.display,
    directionsCta: {
      label: "Get directions",
      href: map.directionsUrl,
    },
    areasLabel: "Current core coverage",
    areas: areas.current,
    note:
      "We can also talk you through nearby availability without overpromising or pushing you into a decision before you are ready.",
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
        )}. If you are nearby and unsure about availability, get in touch and we will guide you clearly.`,
      },
      {
        question: "What if my enquiry is urgent or time-sensitive?",
        answer:
          "If your enquiry feels urgent, calling is usually the best option. If you send a message or enquiry form, mention clearly that it is urgent or time-sensitive so we can understand the situation properly.",
      },
      {
        question: "How do I ask about working with Libra?",
        answer:
          "You can view our open roles online or send us an enquiry if you would like to ask about joining the team or working with Libra more generally.",
      },
    ],
  },
  finalCta: {
    title: "Need to talk something through?",
    description:
      "Call our team or send an enquiry and we will help you take the next step in a calm, practical way.",
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