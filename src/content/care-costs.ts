import { BUSINESS_PROFILE, formatInlineList } from "@/lib/business-profile";
import type { CareCostsPageContent } from "@/types/care-costs";

const urbanRate = 25.13;
const ruralRate = 26.35;

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

function money(value: number) {
  return currencyFormatter.format(value);
}

const { phones, areas, openingHours } = BUSINESS_PROFILE;

export const careCostsContent: CareCostsPageContent = {
  metadata: {
    title: "Care Costs Guidance for Home Care",
    description:
      "Understand how care costs work with clear guidance on home care pricing, support levels, and the next steps for arranging care at home.",
    path: "/care-fees",
  },
  hero: {
    eyebrow: "Care costs guidance",
    title: "Clear, reassuring guidance to help you understand the cost of care at home",
    description:
      "The cost of care depends on the kind of support needed, how often care is provided, and the level of reassurance involved. This page is designed to help families understand the basics clearly, without pressure and without turning an important decision into a cold pricing exercise.",
    primaryCta: {
      label: "Talk to Our Team",
      href: "/contact",
    },
    secondaryCta: {
      label: `Call ${phones.primary.display}`,
      href: phones.primary.href,
      ariaLabel: `Call Libra Support Services on ${phones.primary.display}`,
    },
    highlights: [
      "Current hourly guidance for urban and rural visits",
      "Support costs shaped by needs, routines, and frequency of care",
      "Clear explanation of the main care options and likely next steps",
      `Local guidance across ${formatInlineList(areas.current)}`,
    ],
    supportCard: {
      eyebrow: "Clearer next steps",
      title: "The right care plan starts with understanding the situation properly",
      description:
        "We help families understand the likely level of support needed, what may affect cost, and the next step that feels right for them.",
    },
    image: {
      src: "/images/home-care.webp",
      alt: "A reassuring home care conversation taking place in a calm home setting",
    },
  },
  overview: {
    eyebrow: "How care costs work",
    title: "Care costs should feel understandable, not overwhelming",
    description:
      "There is rarely a one-size-fits-all answer because care is tailored to the individual. The type of support, how often visits are needed, and whether care is more occasional or more involved all shape the final cost. We keep this process clear and transparent so families can understand what is likely to be right for their situation.",
    rateCards: [
      {
        title: "Urban hourly rate",
        amount: money(urbanRate),
        description: "Current hourly guidance for home care visits in urban areas.",
      },
      {
        title: "Rural hourly rate",
        amount: money(ruralRate),
        description: "Current hourly guidance for rural visits where travel time and fuel costs are higher.",
        note: "Rural rates reflect additional travel time and fuel costs, helping us provide reliable visits and fair pay for carers.",
      },
    ],
    examplesTitle: "Current visit examples for guidance",
    examples: [
      {
        label: "30-minute visit",
        urban: money(urbanRate * 0.5),
        rural: money(ruralRate * 0.5),
      },
      {
        label: "45-minute visit",
        urban: money(urbanRate * 0.75),
        rural: money(ruralRate * 0.75),
      },
      {
        label: "1-hour visit",
        urban: money(urbanRate),
        rural: money(ruralRate),
      },
      {
        label: "2-hour visit",
        urban: money(urbanRate * 2),
        rural: money(ruralRate * 2),
      },
    ],
    examplesNote:
      "These examples are for guidance only. We will confirm the exact care plan, visit schedule, and support approach during a free needs assessment.",
    includedTitle: "What our rates are designed to include",
    includedDescription:
      "Clear pricing matters, but so does understanding what sits behind it. Our rates are built around safe, well-managed care rather than just time on a rota.",
    inclusions: [
      "CQC-regulated care delivered by trained, DBS-checked carers",
      "Managed rotas and continuity of care where possible",
      "Cover for sickness, holidays, and day-to-day service continuity",
      "Medication support and care planning where appropriate",
      "Management oversight and on-call support",
    ],
    note: "No extra charges for administration, emergency cover, or compliance.",
  },
  factors: {
    eyebrow: "What can affect the cost",
    title: "A few of the main things that shape care costs",
    description:
      "The cost of care is usually driven by the level of support involved rather than a simple fixed package. These are some of the main factors that families often need help understanding.",
    items: [
      {
        title: "Type of support needed",
        description:
          "Practical visits, more personal care, companionship, respite support, or a more continuous level of reassurance can all shape the cost differently.",
      },
      {
        title: "How often care is provided",
        description:
          "Some people need a few visits each week, while others need support every day or across a more regular routine.",
      },
      {
        title: "Visit length or ongoing presence",
        description:
          "Shorter visits, longer visits, or more continuous day-to-day support will naturally affect the overall cost of care.",
      },
      {
        title: "Complexity of support and routine",
        description:
          "The more tailored or involved the routine, the more important it is to understand the right level of planning, communication, and care delivery.",
      },
    ],
  },
  supportOptions: {
    eyebrow: "Support options and pricing context",
    title: "Different types of care can affect costs in different ways",
    description:
      "Understanding the kind of care that may be needed is often the clearest route to understanding likely costs. These service types give families a better sense of the options available.",
    items: [
      {
        title: "Home Care",
        description:
          "Flexible visits at home can vary in cost depending on frequency, visit length, and the type of day-to-day support involved.",
        href: "/services/home-care",
      },
      {
        title: "Live-in Care",
        description:
          "A more continuous level of one-to-one support at home usually involves a different care structure and a different pricing conversation.",
        href: "/services/live-in-care",
      },
      {
        title: "Respite Care",
        description:
          "Short-term support can be shaped around a planned break, changing circumstances, or temporary cover for a family carer.",
        href: "/services/respite-care",
      },
      {
        title: "Dementia Support",
        description:
          "Thoughtful dementia support at home may involve routines, reassurance, familiarity, and a more tailored level of day-to-day planning.",
        href: "/services/dementia-support",
      },
    ],
    note:
      "Companionship, personal care, and other tailored support can also be discussed with our team if they are part of the overall care picture.",
    cta: {
      label: "Explore All Care Services",
      href: "/services",
    },
  },
  guidance: {
    eyebrow: "Why speaking to Libra helps",
    title: "The clearest way to understand cost is to talk through the situation properly",
    description:
      "Families do not always know exactly what kind of support is needed at the start. That is normal. A conversation with our team can make the likely level of care, the right next step, and the cost picture much easier to understand.",
    items: [
      {
        title: "Talk through what is needed",
        description:
          "We listen to the situation carefully so the guidance is based on the person, their routine, and the kind of support that may actually help.",
      },
      {
        title: "Understand likely support levels",
        description:
          "We help you think through whether lighter-touch visits, more regular care, or a different service type may be the better fit.",
      },
      {
        title: "Get clear next-step guidance",
        description:
          "If care is appropriate, we explain the likely next steps clearly and calmly, without expecting you to have everything decided already.",
      },
      {
        title: "Speak to a local team",
        description:
          "Nearby communication and personal accountability help families feel more confident when asking practical questions about cost and support.",
      },
    ],
    cta: {
      label: "Contact Us About Care Costs",
      href: "/contact",
    },
  },
  local: {
    eyebrow: "Local reassurance",
    title: "Tailored local guidance matters when families are weighing up care costs",
    description:
      "Good guidance is not just about a number. It is about understanding the person, the support that may be right, and how that fits into day-to-day life at home. Our approach stays personal, local, and clear.",
    points: [
      "Support is shaped around the individual rather than a generic package.",
      "We work with families to understand routines, concerns, and the level of reassurance that may be needed.",
      "Talking to a nearby team can make decisions feel clearer, calmer, and more grounded in real local availability.",
    ],
    areasLabel: "Current core coverage",
    areas: areas.current,
    note: `We currently support families across ${formatInlineList(
      areas.current
    )} and can guide you clearly if you are nearby and unsure about availability.`,
    primaryCta: {
      label: "See Areas We Cover",
      href: "/areas",
    },
    secondaryCta: {
      label: `Available ${openingHours.display}`,
      href: phones.primary.href,
      ariaLabel: `Call Libra Support Services during ${openingHours.display}`,
    },
  },
  faqs: {
    eyebrow: "Care-cost FAQs",
    title: "A few common questions families often ask about care costs",
    description:
      "These answers are here to reduce uncertainty and help you feel more comfortable about starting the conversation.",
    items: [
      {
        question: "How do I know what type of care is right?",
        answer:
          "We talk through the situation with you, understand the support that may be needed, and help you work out which kind of care feels most suitable for the person involved.",
      },
      {
        question: "Can support be tailored to my situation?",
        answer:
          "Yes. Care is shaped around the individual, their routine, the level of support needed, and the way they prefer to live at home.",
      },
      {
        question: "Do I need to know exactly what care is needed before getting in touch?",
        answer:
          "No. Many families contact us while they are still trying to understand the right level of support. We can help you think through the options first.",
      },
      {
        question: "Can I talk to someone before making a decision?",
        answer:
          "Yes. Speaking to our team does not commit you to anything. It is often the simplest way to understand likely support levels, next steps, and the cost picture.",
      },
      {
        question: "Why are rural rates slightly different?",
        answer:
          "Our rural rates reflect additional travel time and fuel costs so that visits can still be delivered reliably and carers are paid fairly for the time involved.",
      },
    ],
    cta: {
      label: "Contact Our Team",
      href: "/contact",
    },
  },
  finalCta: {
    title: "Talk through care costs with a local team that will guide you clearly",
    description:
      "If you are exploring support for yourself or a loved one, we can help you understand the likely options, answer your questions, and explain the next step in a calm, practical way.",
    primaryCta: {
      label: "Contact Us About Care Costs",
      href: "/contact",
    },
    secondaryCta: {
      label: "Call Our Team",
      href: phones.primary.href,
      ariaLabel: `Call Libra Support Services on ${phones.primary.display}`,
    },
  },
};
