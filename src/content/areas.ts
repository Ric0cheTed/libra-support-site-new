import { BUSINESS_PROFILE } from "@/lib/business-profile";
import type { AreaPageContent, AreaPageKey } from "@/types/areas";

const primaryPhone = BUSINESS_PROFILE.phones.primary;
const burnleyOfficeAddress = "3-5 Red Lion Street, Burnley, BB11 2AE";

const areaProcessSteps = [
  {
    title: "Talk to our team",
    description:
      "Tell us about the situation, where support is needed, and any immediate concerns so we can guide you clearly.",
  },
  {
    title: "Arrange a consultation",
    description:
      "We discuss needs in more detail, talk through routines and preferences, and begin shaping the right local support.",
  },
  {
    title: "Build the right care plan",
    description:
      "Together, we create a personalised approach built around the individual, their wellbeing, and the support needed at home.",
  },
  {
    title: "Care begins",
    description:
      "Support starts with a trusted local team focused on comfort, dignity, continuity, and dependable communication.",
  },
];

function createAreaServiceItems(areaLabel: string) {
  return [
    {
      title: "Home Care",
      description: `Flexible day-to-day home care in ${areaLabel} for routines, wellbeing, and independent living at home.`,
      href: "/services/home-care",
    },
    {
      title: "Companionship",
      description: `Meaningful companionship visits in ${areaLabel} that help bring comfort, connection, and reassuring check-ins.`,
      href: "/services/companionship",
    },
    {
      title: "Personal Care",
      description: `Respectful personal care in ${areaLabel}, delivered with dignity and shaped around daily routines.`,
      href: "/services/personal-care",
    },
    {
      title: "Respite Care",
      description: `Short-term respite support in ${areaLabel} that helps families create breathing space while care continues.`,
      href: "/services/respite-care",
    },
  ];
}

function createAreaFaqItems(areaLabel: string, supportSummary: string) {
  return [
    {
      question: `Do you provide care in ${areaLabel}?`,
      answer: `Yes. We support individuals and families in ${areaLabel}, and our team can talk you through local availability and the type of support that may be right.`,
    },
    {
      question: `How quickly can care start in ${areaLabel}?`,
      answer:
        "Start times depend on the level of support needed and current availability, but we will always aim to respond quickly and explain the next steps clearly.",
    },
    {
      question: `What types of support are available in ${areaLabel}?`,
      answer: supportSummary,
    },
    {
      question: "Is care tailored to the individual?",
      answer:
        "Yes. We shape care around the person, their routine, their preferences, and the level of reassurance or practical help that feels right for them.",
    },
  ];
}

export const areaPageContent = {
  todmorden: {
    areaName: "Todmorden",
    metadata: {
      title: "Home Care in Todmorden",
      description:
        "Reliable home care in Todmorden with personal care, companionship, respite support, and flexible day-to-day support at home.",
      path: "/areas/todmorden",
    },
    hero: {
      eyebrow: "Local home care in Todmorden",
      title: "Trusted home care in Todmorden, with flexible support shaped around daily life",
      description:
        "Libra Support Services provides compassionate, practical support in Todmorden, helping people stay safe, comfortable, and independent at home. From personal care and companionship to respite support for families, care is tailored around the individual and delivered by a nearby team.",
      primaryCta: {
        label: "Book a Free Care Consultation",
        href: "/contact",
      },
      secondaryCta: {
        label: `Call ${primaryPhone.display}`,
        href: primaryPhone.href,
        ariaLabel: `Call Libra Support Services on ${primaryPhone.display}`,
      },
      highlights: [
        "Personal care and daily routines",
        "Companionship and community support",
        "Flexible visits to match routines",
        "CQC-regulated care from a nearby team",
      ],
      image: {
        src: "/images/hero.jpg",
        alt: "Warm and reliable home care support in Todmorden",
      },
      supportCard: {
        eyebrow: "Local reassurance",
        title: "Support from a team rooted in the Todmorden area",
        description:
          "We combine professional care with the reassurance of nearby, responsive support for local families.",
      },
    },
    intro: {
      eyebrow: "Home care in Todmorden",
      title: "Compassionate support from a team that understands the area",
      description:
        "For families in Todmorden, care needs to feel reliable, practical, and personal. We focus on helping people remain comfortable at home with support that fits naturally around daily life.",
      points: [
        "Support is tailored around routines, preferences, and what helps someone feel safe and respected at home.",
        "Care can include personal support, wellbeing checks, companionship, meal preparation, and wider day-to-day help.",
        "As a nearby team, we offer clear communication and a more responsive local experience from the start.",
      ],
    },
    services: {
      eyebrow: "Services available in Todmorden",
      title: "Local support shaped around what everyday life requires",
      description:
        "Families in Todmorden often need different kinds of help over time. These are some of the main ways we support people at home locally.",
      items: createAreaServiceItems("Todmorden"),
      note:
        "If you are unsure which service is the best fit, we can talk through the situation and help you decide what level of support may be right.",
      cta: {
        label: "Explore All Care Services",
        href: "/services",
      },
    },
    whyLibra: {
      eyebrow: "Why choose Libra in Todmorden",
      title: "A nearby team families can rely on for calm, dependable support",
      description:
        "Families in Todmorden need confidence that care will be delivered properly and with real attention to the person involved. That is where our local, person-centred approach matters most.",
      items: [
        {
          title: "Local and responsive",
          description:
            "Being nearby helps us offer clearer communication, quicker response, and a more personal level of accountability for local families.",
        },
        {
          title: "Support shaped around routines",
          description:
            "We tailor care around the individual, their daily rhythm, and what helps them feel comfortable and respected at home.",
        },
        {
          title: "Continuity where possible",
          description:
            "Thoughtful planning supports familiarity and dependable cover so care feels steadier and more reassuring over time.",
        },
        {
          title: "Professional standards with warmth",
          description:
            "Our care is CQC-regulated, delivered by trained, DBS-checked carers, and grounded in a respectful, person-centred approach.",
        },
      ],
    },
    process: {
      eyebrow: "How care starts",
      title: "Starting care in Todmorden should feel clear and supportive",
      description:
        "We guide families through the next steps calmly, helping you understand the options and how local support can begin in a practical way.",
      steps: areaProcessSteps,
      cta: {
        label: "Book a Free Consultation",
        href: "/contact",
      },
    },
    coverage: {
      eyebrow: "Nearby reassurance",
      title: "Supporting families in Todmorden and across nearby Calderdale communities",
      description:
        "Families in Todmorden often also ask about nearby areas. We can guide you clearly on support across neighbouring communities too.",
      areas: [
        { label: "Hebden Bridge", href: "/areas/hebden-bridge" },
        { label: "Mytholmroyd", href: "/areas/mytholmroyd" },
        { label: "Calderdale", href: "/areas/calderdale" },
      ],
      cta: {
        label: "Explore Areas We Cover",
        href: "/areas",
      },
    },
    faqs: {
      eyebrow: "Todmorden FAQs",
      title: "A few common questions about arranging care in Todmorden",
      description:
        "These answers can help make the first step feel clearer if you are exploring support in Todmorden.",
      items: createAreaFaqItems(
        "Todmorden",
        "Local support can include personal care, companionship, wellbeing checks, meal preparation, respite support, and broader home care tailored to the individual."
      ),
      cta: {
        label: "View All FAQs",
        href: "/faqs",
      },
    },
    finalCta: {
      title: "Talk to us about care in Todmorden",
      description:
        "If you are exploring support for yourself or a loved one in Todmorden, we can help you understand the options and plan the right next step.",
      primaryCta: {
        label: "Book a Free Care Consultation",
        href: "/contact",
      },
      secondaryCta: {
        label: "Call Our Team",
        href: primaryPhone.href,
        ariaLabel: `Call Libra Support Services on ${primaryPhone.display}`,
      },
    },
  },
  hebdenBridge: {
    areaName: "Hebden Bridge",
    metadata: {
      title: "Home Care in Hebden Bridge",
      description:
        "Home care in Hebden Bridge with flexible visits, companionship, personal care, and practical support for daily life.",
      path: "/areas/hebden-bridge",
    },
    hero: {
      eyebrow: "Local home care in Hebden Bridge",
      title: "Flexible home care in Hebden Bridge, with local support tailored around everyday life",
      description:
        "We provide reliable care and support for individuals and families in Hebden Bridge, helping people remain independent at home. Support is shaped around routines, preferences, and what matters most day to day, with a nearby team families can contact easily.",
      primaryCta: {
        label: "Book a Free Care Consultation",
        href: "/contact",
      },
      secondaryCta: {
        label: `Call ${primaryPhone.display}`,
        href: primaryPhone.href,
        ariaLabel: `Call Libra Support Services on ${primaryPhone.display}`,
      },
      highlights: [
        "Personal care and daily living support",
        "Companionship and wellbeing check-ins",
        "Meal preparation and medication reminders",
        "Responsive local support for families",
      ],
      image: {
        src: "/images/hero-2.webp",
        alt: "Tailored home care support in Hebden Bridge",
      },
      supportCard: {
        eyebrow: "Tailored support",
        title: "Care that fits around routines, preferences, and daily life",
        description:
          "We help families in Hebden Bridge access thoughtful support that feels practical, personal, and well managed.",
      },
    },
    intro: {
      eyebrow: "Home care in Hebden Bridge",
      title: "Support that adapts around routines, preferences, and local family life",
      description:
        "For families in Hebden Bridge, care often needs to feel flexible and calm from the start. We focus on practical support that helps day-to-day life remain more manageable and reassuring at home.",
      points: [
        "Care is shaped around the person, their routine, and what matters most in everyday life at home.",
        "Support can include personal care, companionship, medication reminders, meal preparation, and broader day-to-day help.",
        "Our nearby team gives families trusted local access, clearer communication, and a more personal experience from the outset.",
      ],
    },
    services: {
      eyebrow: "Services available in Hebden Bridge",
      title: "Local support that can flex as needs change",
      description:
        "The right care can look different from one family to the next. These are some of the main ways we support people living at home in Hebden Bridge.",
      items: createAreaServiceItems("Hebden Bridge"),
      note:
        "If you need a different level of support, we can talk through the situation and help you understand which service feels most suitable.",
      cta: {
        label: "Explore All Care Services",
        href: "/services",
      },
    },
    whyLibra: {
      eyebrow: "Why choose Libra in Hebden Bridge",
      title: "Trusted local access with a calmer, more personal approach to care",
      description:
        "Families in Hebden Bridge are often looking for support that feels both dependable and human. We combine professional standards with a person-centred local approach.",
      items: [
        {
          title: "Tailored around routines",
          description:
            "We shape care around routines, preferences, and the kind of support that helps someone feel most comfortable at home.",
        },
        {
          title: "Nearby and responsive",
          description:
            "Our local team is easier to reach, helping families feel better informed and more reassured from the first conversation onward.",
        },
        {
          title: "Dependable support",
          description:
            "Thoughtful planning helps visits feel consistent, well managed, and practical for both individuals and families.",
        },
        {
          title: "Respectful, person-centred care",
          description:
            "Our care is CQC-regulated, delivered by trained, DBS-checked carers, and grounded in warmth, dignity, and professionalism.",
        },
      ],
    },
    process: {
      eyebrow: "How care starts",
      title: "Starting care in Hebden Bridge should feel calm and straightforward",
      description:
        "We help families understand the options, the level of support needed, and how tailored local care can begin without pressure.",
      steps: areaProcessSteps,
      cta: {
        label: "Book a Free Consultation",
        href: "/contact",
      },
    },
    coverage: {
      eyebrow: "Nearby reassurance",
      title: "Supporting families in Hebden Bridge and across nearby Calderdale communities",
      description:
        "If you are looking at nearby options as well, we can guide you on support across neighbouring communities and the wider local area.",
      areas: [
        { label: "Todmorden", href: "/areas/todmorden" },
        { label: "Mytholmroyd", href: "/areas/mytholmroyd" },
        { label: "Calderdale", href: "/areas/calderdale" },
      ],
      cta: {
        label: "Explore Areas We Cover",
        href: "/areas",
      },
    },
    faqs: {
      eyebrow: "Hebden Bridge FAQs",
      title: "A few common questions about arranging care in Hebden Bridge",
      description:
        "These answers can help if you are exploring local support in Hebden Bridge and want a clearer idea of the next step.",
      items: createAreaFaqItems(
        "Hebden Bridge",
        "Local support can include personal care, companionship, meal preparation, medication reminders, respite support, and wider home care tailored to individual needs."
      ),
      cta: {
        label: "View All FAQs",
        href: "/faqs",
      },
    },
    finalCta: {
      title: "Talk to us about care in Hebden Bridge",
      description:
        "If you are exploring support for yourself or a loved one in Hebden Bridge, we can help you understand the options and take the next step with confidence.",
      primaryCta: {
        label: "Book a Free Care Consultation",
        href: "/contact",
      },
      secondaryCta: {
        label: "Call Our Team",
        href: primaryPhone.href,
        ariaLabel: `Call Libra Support Services on ${primaryPhone.display}`,
      },
    },
  },

  burnley: {
    areaName: "Burnley",
    metadata: {
      title: "Home Care in Burnley",
      description:
        "Thoughtful home care in Burnley with personal care, companionship, respite support, and flexible day-to-day help at home from Libra Support Services.",
      path: "/areas/burnley",
    },
    hero: {
      eyebrow: "Local home care in Burnley",
      title: "Trusted home care in Burnley, with flexible support shaped around daily life",
      description:
        "Libra Support Services provides practical, person-centred support in Burnley, helping people stay safe, comfortable, and as independent as possible at home. From personal care and companionship to respite support for families, care is tailored around the individual and backed by our growing Burnley branch.",
      primaryCta: {
        label: "Book a Free Care Consultation",
        href: "/contact",
      },
      secondaryCta: {
        label: `Call ${primaryPhone.display}`,
        href: primaryPhone.href,
        ariaLabel: `Call Libra Support Services on ${primaryPhone.display}`,
      },
      highlights: [
        "Personal care and daily routines",
        "Companionship and wellbeing support",
        "Flexible visits to match routines",
        "Local Burnley office presence",
      ],
      image: {
        src: "/images/burnley-office-frontage.png",
        alt: "Libra Support Services Burnley branch office",
      },
      supportCard: {
        eyebrow: "Burnley branch",
        title: "Local support from our Burnley team",
        description:
          `Our Burnley branch on ${burnleyOfficeAddress} helps families access dependable local care with clearer communication and nearby reassurance.`,
      },
    },
    intro: {
      eyebrow: "Home care in Burnley",
      title: "Compassionate support from a local branch growing in Burnley",
      description:
        "For families in Burnley, care should feel dependable, practical, and personal. We focus on helping people remain comfortable at home with support that fits around routines, wellbeing, and the reassurance families need.",
      points: [
        `Our Burnley branch has a local office at ${burnleyOfficeAddress}.`,
        "Support is tailored around routines, preferences, and what helps someone feel safe and respected at home.",
        "Care can include personal support, companionship, respite cover, and practical help with day-to-day living.",
        "Families comparing care in Burnley benefit from a real local branch presence that is easier to reach and more locally focused.",
      ],
    },
    services: {
      eyebrow: "Support available in Burnley",
      title: "Flexible support built around the person and their routine",
      description:
        "Our Burnley support offering is shaped around the individual, with practical care that helps daily life feel more settled, comfortable, and manageable at home.",
      items: createAreaServiceItems("Burnley"),
      note:
        "If you are comparing local care options in Burnley, we can help you understand the right support level, the services available, and what the next step could look like.",
      cta: {
        label: "Explore All Care Services",
        href: "/services",
      },
    },
    whyLibra: {
      eyebrow: "Why families choose Libra",
      title: "Local reassurance, person-centred support, and accountable care",
      description:
        "Families looking for care in Burnley need confidence that support will be thoughtful, well managed, and delivered by a team that understands the importance of clear communication and dependable follow-through.",
      items: [
        {
          title: "A visible Burnley branch",
          description:
            "Our Burnley branch gives local families a clearer point of trust as services grow in the area.",
        },
        {
          title: "Flexible, person-centred care",
          description:
            "Support is tailored around the individual, their routine, and the level of reassurance or practical help they need at home.",
        },
        {
          title: "Responsive communication",
          description:
            "A local branch presence helps make communication clearer and support feel more accessible for Burnley families.",
        },
        {
          title: "Professional and accountable",
          description:
            "Our care is CQC-regulated, delivered by trained, DBS-checked carers, and supported by dependable local oversight.",
        },
      ],
    },
    process: {
      eyebrow: "How care starts",
      title: "Starting care in Burnley should feel calm and manageable",
      description:
        "We guide families through the process clearly, helping you understand the options and how tailored local support can begin.",
      steps: areaProcessSteps,
      cta: {
        label: "Book a Free Consultation",
        href: "/contact",
      },
    },
    coverage: {
      eyebrow: "Nearby reassurance",
      title: "Supporting families in Burnley and surrounding areas",
      description:
        "If you are exploring care in or around Burnley, we can help you understand current availability and the kind of support that may be right.",
      areas: [
        { label: "Burnley", href: "/areas/burnley" },
        { label: "Calderdale", href: "/areas/calderdale" },
        { label: "Todmorden", href: "/areas/todmorden" },
        { label: "Hebden Bridge", href: "/areas/hebden-bridge" },
      ],
      cta: {
        label: "Explore Areas We Cover",
        href: "/areas",
      },
    },
    faqs: {
      eyebrow: "Burnley FAQs",
      title: "A few common questions about arranging care in Burnley",
      description:
        "These answers can help if you are exploring support in Burnley and want a clearer understanding of what is available.",
      items: createAreaFaqItems(
        "Burnley",
        "Support in Burnley can include personal care, companionship, wellbeing checks, respite support, meal preparation, and wider home care tailored to the individual."
      ),
      cta: {
        label: "View All FAQs",
        href: "/faqs",
      },
    },
    finalCta: {
      title: "Talk to us about care in Burnley",
      description:
        "If you are exploring support for yourself or a loved one in Burnley, we can help you understand the options and plan the right next step.",
      primaryCta: {
        label: "Book a Free Care Consultation",
        href: "/contact",
      },
      secondaryCta: {
        label: "See Care Fees",
        href: "/care-fees",
      },
    },
  },

  calderdale: {
    areaName: "Calderdale",
    metadata: {
      title: "Home Care in Calderdale",
      description:
        "Thoughtful home care across Calderdale with personal care, companionship, respite support, and flexible day-to-day visits at home.",
      path: "/areas/calderdale",
    },
    hero: {
      eyebrow: "Home care across Calderdale",
      title: "Trusted home care across Calderdale, with support tailored to local families",
      description:
        "Libra Support Services supports families across Calderdale with thoughtful home care that helps people stay safe, comfortable, and independent at home. From personal care and companionship to respite support and day-to-day practical help, care is shaped around the individual by a responsive nearby team.",
      primaryCta: {
        label: "Book a Free Care Consultation",
        href: "/contact",
      },
      secondaryCta: {
        label: `Call ${primaryPhone.display}`,
        href: primaryPhone.href,
        ariaLabel: `Call Libra Support Services on ${primaryPhone.display}`,
      },
      highlights: [
        "Support across local Calderdale communities",
        "Flexible visits built around routines and preferences",
        "Personal care, companionship, and respite support",
        "CQC-regulated care from a nearby team",
      ],
      image: {
        src: "/images/home-care.webp",
        alt: "Thoughtful home care support across Calderdale",
      },
      supportCard: {
        eyebrow: "Local coverage",
        title: "Responsive support across Calderdale and nearby communities",
        description:
          "We help families across the wider Calderdale area access practical, person-centred support that feels calm and dependable.",
      },
    },
    intro: {
      eyebrow: "Home care in Calderdale",
      title: "Support across Calderdale shaped around the person, not a one-size-fits-all plan",
      description:
        "Families across Calderdale need care that is both professional and personal. We focus on tailored support that fits everyday life and helps people remain settled at home.",
      points: [
        "Support is shaped around the individual, their preferences, and the routines that help them feel most comfortable at home.",
        "Care can include personal care, companionship, wellbeing checks, respite support, and other practical day-to-day help.",
        "Our nearby team offers the reassurance of local knowledge and responsive communication across the wider Calderdale area.",
      ],
    },
    services: {
      eyebrow: "Services available in Calderdale",
      title: "Practical care options for families across the district",
      description:
        "Families across Calderdale may need different types of support depending on the situation. These are some of the main services available locally.",
      items: createAreaServiceItems("Calderdale"),
      note:
        "If you are weighing up which option feels right, we can talk through the situation and help you understand the most suitable next step.",
      cta: {
        label: "Explore All Care Services",
        href: "/services",
      },
    },
    whyLibra: {
      eyebrow: "Why choose Libra in Calderdale",
      title: "Local reassurance with professional standards across the wider area",
      description:
        "Families across Calderdale need care that feels reliable, personal, and properly managed. Our approach combines local responsiveness with person-centred support.",
      items: [
        {
          title: "Support across local communities",
          description:
            "We help families across Calderdale access care that feels personal and grounded in a real understanding of the local area.",
        },
        {
          title: "Flexible, person-centred care",
          description:
            "Support is tailored around the individual, their routine, and the level of reassurance or practical help they need at home.",
        },
        {
          title: "Responsive communication",
          description:
            "Our nearby team offers clearer communication and a more personal experience for families across the district.",
        },
        {
          title: "Professional and accountable",
          description:
            "Our care is CQC-regulated, delivered by trained, DBS-checked carers, and supported by dependable local oversight.",
        },
      ],
    },
    process: {
      eyebrow: "How care starts",
      title: "Starting care across Calderdale should feel calm and manageable",
      description:
        "We guide families through the process clearly, helping you understand the options and how tailored local support can begin.",
      steps: areaProcessSteps,
      cta: {
        label: "Book a Free Consultation",
        href: "/contact",
      },
    },
    coverage: {
      eyebrow: "Nearby reassurance",
      title: "Supporting families across Calderdale and nearby communities",
      description:
        "If you are comparing support in different nearby places, we can help you understand current availability across the local area.",
      areas: [
        { label: "Todmorden", href: "/areas/todmorden" },
        { label: "Hebden Bridge", href: "/areas/hebden-bridge" },
        { label: "Mytholmroyd", href: "/areas/mytholmroyd" },
        { label: "Burnley", href: "/areas/burnley" },
      ],
      cta: {
        label: "Explore Areas We Cover",
        href: "/areas",
      },
    },
    faqs: {
      eyebrow: "Calderdale FAQs",
      title: "A few common questions about arranging care in Calderdale",
      description:
        "These answers can help if you are exploring support across Calderdale and want a clearer understanding of what is available.",
      items: createAreaFaqItems(
        "Calderdale",
        "Support across Calderdale can include personal care, companionship, wellbeing checks, respite support, meal preparation, and wider home care tailored to the individual."
      ),
      cta: {
        label: "View All FAQs",
        href: "/faqs",
      },
    },
    finalCta: {
      title: "Talk to us about care across Calderdale",
      description:
        "If you are exploring support for yourself or a loved one in Calderdale, we can help you understand the options and plan the right next step.",
      primaryCta: {
        label: "Book a Free Care Consultation",
        href: "/contact",
      },
      secondaryCta: {
        label: "Call Our Team",
        href: primaryPhone.href,
        ariaLabel: `Call Libra Support Services on ${primaryPhone.display}`,
      },
    },
  },
} satisfies Record<AreaPageKey, AreaPageContent>;

export function getAreaPageContent(key: AreaPageKey) {
  return areaPageContent[key];
}
