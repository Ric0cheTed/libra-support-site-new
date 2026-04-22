import { BUSINESS_PROFILE, formatInlineList } from "@/lib/business-profile";
import type { AboutPageContent } from "@/types/about";

const { areas, links } = BUSINESS_PROFILE;

export const aboutContent: AboutPageContent = {
  metadata: {
    title: "About Libra Support Services",
    description:
      "Learn more about Libra Support Services, our personalised approach to care, professional standards, and why families trust our local team.",
    path: "/about",
  },
  hero: {
    eyebrow: "About Libra",
    title: "A trusted local care provider built around dignity, reliability, and real human support",
    description:
      "Libra Support Services provides thoughtful home care for adults and families who want support that feels personal, dependable, and well led. We believe good care is about more than tasks. It is about how people are treated, how families are supported, and how confidently life can continue at home.",
    primaryCta: {
      label: "Talk to Our Team",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Our Services",
      href: "/services",
    },
    highlights: [
      "Personalised support shaped around the individual",
      "Dignity, reliability, and continuity where possible",
      "CQC-regulated care from trained, DBS-checked carers",
      `Local support across ${formatInlineList(areas.current)}`,
    ],
    supportCard: {
      eyebrow: "Why families choose Libra",
      title: "We combine warm personal care with calm professional accountability",
      description:
        "Families need confidence in both the support itself and the people leading it. Our approach is designed to provide both.",
    },
    image: {
      src: "/images/about-team.webp",
      alt: "The Libra Support Services team together in a welcoming setting",
    },
  },
  whoWeAre: {
    eyebrow: "Who we are",
    title: "A local service built to provide calm, accountable care at home",
    description:
      "Libra Support Services exists to provide compassionate, professional care in the comfort of home. We support people and families who want personalised care delivered with warmth, consistency, and a genuine understanding of what daily life at home should feel like.",
    points: [
      "We believe every person deserves care that protects dignity, comfort, and independence wherever possible.",
      "Our service is rooted in local community support, with a team that understands how important nearby communication and accountability are for families.",
      "We aim to make support feel clear and reassuring from the first conversation, not confusing, rushed, or impersonal.",
    ],
  },
  approach: {
    eyebrow: "Our approach to care",
    title: "We start with the person, their routine, and what helps home still feel like home",
    description:
      "Good care should fit around the individual rather than asking the individual to fit around the service. That means understanding routines, preferences, wellbeing, and the small details that help someone feel settled, respected, and supported.",
    points: [
      "Personalised support begins with listening properly and understanding what matters to the person and their family.",
      "Dignity matters in every interaction, from the way care is delivered to the way people are spoken to and supported.",
      "Reliability matters because families need confidence that care will be delivered properly, consistently, and with the right level of attention.",
      "Our focus is to help people stay as comfortable, independent, and well supported as possible in the place they know best.",
    ],
  },
  whyLibra: {
    eyebrow: "Why families choose Libra",
    title: "Families need more than a provider. They need people they can trust.",
    description:
      "Choosing care is deeply personal. Families are looking for professionalism, compassion, clear communication, and a service that feels accountable from the very start.",
    items: [
      {
        title: "Care that feels personal",
        description:
          "We take time to understand the individual, their preferences, and the routines that help them feel comfortable, safe, and respected.",
      },
      {
        title: "Continuity where possible",
        description:
          "Familiar carers and dependable planning help support feel more settled, reassuring, and easier to trust over time.",
      },
      {
        title: "Local and responsive support",
        description:
          "As a nearby team, we are easier to reach, quicker to respond, and more personally accountable to the families we support.",
      },
      {
        title: "Professionalism and respect",
        description:
          "Families can expect care that is delivered properly, managed thoughtfully, and grounded in clear standards and respectful communication.",
      },
      {
        title: "Calm guidance for families",
        description:
          "We know families do not always have all the answers at the start, so we guide the next step clearly and without pressure.",
      },
    ],
  },
  standards: {
    eyebrow: "Professionalism and trust",
    title: "Clear standards, thoughtful oversight, and care delivered properly",
    description:
      "Trust grows when families can see that support is not only kind, but also professionally led, carefully planned, and accountable.",
    items: [
      {
        title: "CQC-regulated care",
        description:
          "Our service is regulated, giving families the reassurance of professional standards and accountable oversight.",
      },
      {
        title: "Trained, DBS-checked carers",
        description:
          "Care is delivered by people who are trained for the role and supported to work to the standards families rightly expect.",
      },
      {
        title: "Thoughtful support planning",
        description:
          "We shape care around the individual and the agreed level of support, rather than relying on a one-size-fits-all approach.",
      },
      {
        title: "Reliable communication and oversight",
        description:
          "Families benefit from a service that is locally managed, easier to reach, and focused on dependable communication.",
      },
    ],
    cta: {
      label: "View CQC Profile",
      href: links.cqcProvider,
    },
  },
  localSupport: {
    eyebrow: "Local roots",
    title: "A nearby team with a personal stake in getting care right",
    description:
      "Being local makes a difference. Families are not left dealing with a distant provider. They are supported by a team that knows the area, understands the communities it serves, and can communicate more personally and clearly.",
    points: [
      "We are based locally and support families who want nearby, responsive communication rather than a remote service experience.",
      "Our team understands the value of local trust, practical reassurance, and being clear about what support may be available.",
      "We continue to grow thoughtfully, but our approach remains personal, grounded, and accountable to the communities we serve.",
    ],
    areasLabel: "Current core coverage",
    areas: areas.current,
    note: `We currently support families across ${formatInlineList(
      areas.current
    )} and can guide you clearly if you are nearby and want to talk through availability or next steps.`,
    primaryCta: {
      label: "Explore Areas We Cover",
      href: "/areas",
    },
    secondaryCta: {
      label: "Contact Our Team",
      href: "/contact",
    },
  },
  teamPreview: {
    eyebrow: "Meet the people behind the service",
    title: "Leadership and support that families can know, reach, and trust",
    description:
      "Behind every care plan is a team responsible for making sure support is thoughtful, well managed, and genuinely dependable. Families should feel confident in the people guiding the service, not distanced from them.",
    image: {
      src: "/images/about-team.webp",
      alt: "Libra Support Services team members together in a friendly professional setting",
    },
    people: [
      {
        name: "Kelly Carpenter",
        role: "Registered Manager",
        description:
          "Kelly is an experienced care leader focused on safe, person-centred support, strong standards, and helping families feel confident in the care being delivered.",
      },
      {
        name: "Nicola Szymik-Walters",
        role: "Registered Manager / Director",
        description:
          "Nicola brings leadership rooted in community care and a strong commitment to making support feel personal, thoughtful, and locally grounded.",
      },
      {
        name: "Jason Walters",
        role: "Director",
        description:
          "Jason supports the organisation's growth and helps ensure Libra continues to deliver dependable, high-quality care with a clear sense of accountability.",
      },
    ],
    cta: {
      label: "Meet the Libra Team",
      href: "/about/team",
    },
  },
  faqs: {
    eyebrow: "What families often want to know",
    title: "A few common questions about Libra and how we work",
    description:
      "These answers are here to make the next step feel clearer and more comfortable before you get in touch.",
    items: [
      {
        question: "How do we get started with Libra?",
        answer:
          "The first step is simply to contact our team. We will talk through the situation, the support you are exploring, and what the most suitable next step may be.",
      },
      {
        question: "How is care tailored to the individual?",
        answer:
          "We take time to understand the person's routines, preferences, wellbeing, and the support that may help them feel most comfortable and well supported at home.",
      },
      {
        question: "Can we talk through options before making a decision?",
        answer:
          "Yes. Many families contact us before they are ready to decide. We are happy to explain the options clearly and help you understand what may feel right.",
      },
      {
        question: "How can I learn more about the team behind the service?",
        answer:
          "You can explore our team page or speak with us directly if you would like to know more about the people leading and supporting the service.",
      },
    ],
    cta: {
      label: "Talk to Our Team",
      href: "/contact",
    },
  },
  finalCta: {
    title: "Talk to our team about the right support for your family",
    description:
      "If you are exploring care for yourself or a loved one, we can help you understand the options and take the next step with confidence.",
    primaryCta: {
      label: "Talk to Our Team",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Care Services",
      href: "/services",
    },
  },
};
