import { BUSINESS_PROFILE, formatInlineList } from "@/lib/business-profile";
import type {
  ServicePageContent,
  ServicePageKey,
  ServicesHubContent,
} from "@/types/services";

const primaryPhone = BUSINESS_PROFILE.phones.primary;
const todmordenBranch = BUSINESS_PROFILE.branches.find((branch) => branch.name === "Todmorden");
const todmordenCoverage = todmordenBranch?.coverageAreas ?? [
  "Cornholme",
  "Todmorden",
  "Walsden",
  "Hebden Bridge",
  "Mytholmroyd",
];

const sharedCoverageAreas = todmordenCoverage.map((area) => ({
  label: area,
  href:
    area === "Hebden Bridge"
      ? "/areas/hebden-bridge"
      : area === "Mytholmroyd"
        ? "/areas/mytholmroyd"
        : "/areas/todmorden",
}));

const sharedProcessSteps = [
  {
    title: "Talk to our team",
    description:
      "Tell us about the situation, the support needed, and any immediate concerns so we can guide you clearly.",
  },
  {
    title: "Arrange a consultation",
    description:
      "We discuss needs in more detail and begin shaping the right level of care around the person and their routine.",
  },
  {
    title: "Build the right care plan",
    description:
      "Together, we create a tailored approach that reflects preferences, wellbeing goals, and practical day-to-day support.",
  },
  {
    title: "Care begins",
    description:
      "Support starts with a trusted team focused on comfort, dignity, continuity, and dependable communication.",
  },
];

export const servicePageContent = {
  homeCare: {
    metadata: {
      title: "Home Care in the Todmorden Branch Area",
      description:
        "Flexible home care across the Todmorden branch area, with personalised support for routines, wellbeing, and independent living at home.",
      path: "/services/home-care",
    },
    hero: {
      eyebrow: "Flexible support at home",
      title: "Home care that helps people stay comfortable, independent, and well supported",
      description:
        "Our home care service offers thoughtful day-to-day support for adults who want to remain safe, comfortable, and confident at home. Care is shaped around the individual, with flexible visits, respectful support, and reassurance for families.",
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
        "Flexible visits built around daily routines",
        "Dignity, continuity, and person-centred support",
        "Practical help that supports independence at home",
        "CQC-regulated care from trained, DBS-checked carers",
      ],
      image: {
        src: "/images/home-care.webp",
        alt: "A carer supporting someone at home with calm, personalised day-to-day care",
      },
      supportCard: {
        eyebrow: "Tailored support",
        title: "Flexible home care shaped around real routines",
        description:
          "From a few visits a week to more regular support, we help people stay settled and well supported at home.",
      },
    },
    intro: {
      eyebrow: "What this service is",
      title: "Personalised support for everyday living at home",
      description:
        "Home care is designed around the person, not a fixed template. We focus on the practical and personal support that helps daily life feel more manageable and reassuring.",
      points: [
        "Support is tailored to the individual's routines, preferences, and level of independence.",
        "Visits can provide help with everyday tasks, wellbeing, and the parts of daily life that are becoming more difficult.",
        "Care is delivered with warmth, dignity, and the aim of helping people remain comfortable in familiar surroundings.",
      ],
    },
    idealFor: {
      eyebrow: "Who it is for",
      title: "Helpful when a little extra support can make home life feel safer and easier",
      description:
        "Home care can suit a wide range of situations, whether support is needed occasionally or as part of a more regular routine.",
      points: [
        "People who want support with routines, personal wellbeing, or day-to-day living while remaining at home.",
        "Individuals recovering from illness, experiencing reduced mobility, or finding certain daily tasks more tiring or difficult.",
        "Families who want dependable support in place for a loved one, together with clear communication and local reassurance.",
      ],
    },
    includes: {
      eyebrow: "What support can include",
      title: "Practical, respectful help tailored to the person",
      description:
        "Each care plan is different, but support often includes a combination of practical help, personal reassurance, and wellbeing-focused routines.",
      items: [
        "Help with day-to-day routines and general wellbeing checks",
        "Companionship and supportive social contact",
        "Meal preparation and help around daily living",
        "Personal support delivered with dignity and respect",
        "Medication prompts where appropriate within the care plan",
        "Flexible visits that fit around individual routines and preferences",
      ],
    },
    whyLibra: {
      eyebrow: "Why choose Libra",
      title: "A dependable, person-centred approach to home care",
      description:
        "Families need more than a provider. They need confidence that support will be thoughtful, well managed, and delivered properly every time.",
      items: [
        {
          title: "Person-centred support",
          description:
            "We take time to understand the person, what matters to them, and how support can feel comfortable, respectful, and right for their routine.",
        },
        {
          title: "Continuity where possible",
          description:
            "Familiar carers and dependable cover help make care feel more settled, reassuring, and consistent over time.",
        },
        {
          title: "Professional and accountable",
          description:
            "Our care is CQC-regulated and delivered by trained, DBS-checked carers with the oversight families expect.",
        },
        {
          title: "Local and responsive",
          description:
            "As a nearby team, we are easier to reach, quicker to respond, and more personally accountable to the families we support.",
        },
      ],
    },
    process: {
      eyebrow: "Getting started",
      title: "Starting home care should feel clear, calm, and supportive",
      description:
        "We guide families through the next steps without pressure, helping you understand what support may be right and how care can begin.",
      steps: sharedProcessSteps,
      cta: {
        label: "Book a Free Consultation",
        href: "/contact",
      },
    },
    coverage: {
      eyebrow: "Local coverage reassurance",
      title: "Home care across the Todmorden branch area",
      description:
        "We support families across the local area with a responsive team that understands the value of nearby, dependable care.",
      areas: [...sharedCoverageAreas],
      cta: {
        label: "Explore All Areas We Cover",
        href: "/areas",
      },
    },
    faqs: {
      eyebrow: "Home care FAQs",
      title: "A few common questions about arranging home care",
      description:
        "If you are weighing up options, these answers can help you understand how support is arranged and how flexible it can be.",
      items: [
        {
          question: "How quickly can home care start?",
          answer:
            "This depends on the support needed and current availability, but our team will always aim to guide you clearly and respond as quickly as possible.",
        },
        {
          question: "Is home care flexible?",
          answer:
            "Yes. Home care can often be arranged around the level of support needed, whether that is a few visits each week or more regular day-to-day support.",
        },
        {
          question: "Can support be tailored to individual routines?",
          answer:
            "Yes. We shape care around the person, their preferences, and the routines that help them feel comfortable, safe, and respected at home.",
        },
        {
          question: "Can home care include companionship and practical help?",
          answer:
            "It can. Support may include companionship, meal preparation, personal support, and other practical day-to-day help depending on the agreed care plan.",
        },
      ],
      cta: {
        label: "View All FAQs",
        href: "/faqs",
      },
    },
    finalCta: {
      title: "Talk to us about the right home care support",
      description:
        "If you are exploring care for yourself or a loved one, we can help you understand the options and take the next step with confidence.",
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
  liveInCare: {
    metadata: {
      title: "Live-in Care in Todmorden, Hebden Bridge & Mytholmroyd",
      description:
        "Reassuring live-in care in Todmorden, Hebden Bridge, and Mytholmroyd, with one-to-one support at home built around familiar routines, comfort, and day-to-day reassurance.",
      path: "/services/live-in-care",
    },
    hero: {
      eyebrow: "Continuous support at home",
      title: "Live-in care that offers reassurance, familiarity, and one-to-one support at home",
      description:
        "Live-in care provides a more continuous level of support for people who need greater day-to-day reassurance while remaining in the comfort of home. Care is shaped around familiar surroundings, personal routines, and the reassurance of having dedicated support close at hand.",
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
        "More continuous one-to-one support at home",
        "Care shaped around familiar routines and surroundings",
        "Reassurance, comfort, and day-to-day presence",
        "CQC-regulated care from trained, DBS-checked carers",
      ],
      image: {
        src: "/images/live-in-care.webp",
        alt: "A carer providing reassuring one-to-one support in a familiar home setting",
      },
      supportCard: {
        eyebrow: "Consistent reassurance",
        title: "Support that helps someone remain settled at home",
        description:
          "We focus on comfort, familiarity, and thoughtful one-to-one care that fits naturally around daily life.",
      },
    },
    intro: {
      eyebrow: "What this service is",
      title: "One-to-one live-in care built around comfort, continuity, and home life",
      description:
        "Live-in care is a more continuous form of support for people who need regular reassurance and day-to-day presence while staying in their own home. It is designed to help someone remain in familiar surroundings with dependable support that feels personal, settled, and thoughtfully managed.",
      points: [
        "Care is arranged around the person's daily routines, preferences, and the familiarity of home.",
        "Support offers reassurance with practical tasks, personal wellbeing, and the everyday rhythm of life at home.",
        "The focus is on helping someone remain comfortable, safe, and supported in the place they know best.",
      ],
    },
    idealFor: {
      eyebrow: "Who it is for",
      title: "Helpful when greater day-to-day presence and reassurance are needed",
      description:
        "Live-in care can be the right option when standard visits no longer feel like enough and a more continuous level of support would bring reassurance, comfort, and better day-to-day continuity.",
      points: [
        "People who need more consistent support, reassurance, and presence throughout the day at home.",
        "Individuals who feel more comfortable remaining in familiar surroundings rather than moving away from home.",
        "Families who want tailored one-to-one support in place for a loved one, together with calm, dependable communication.",
      ],
    },
    includes: {
      eyebrow: "What support can include",
      title: "Tailored live-in support shaped around everyday life",
      description:
        "The exact support depends on the person and their care plan, but live-in care is designed to bring practical help, reassurance, and continuity throughout the day.",
      items: [
        "Help with daily routines and maintaining a settled rhythm at home",
        "Meal preparation and support around everyday living",
        "Companionship and reassuring one-to-one presence",
        "Personal support delivered with warmth, dignity, and respect",
        "Medication prompts where appropriate within the care plan",
        "Support that adapts around individual preferences, comfort, and wellbeing",
      ],
    },
    whyLibra: {
      eyebrow: "Why choose Libra",
      title: "Live-in care delivered with calm professionalism and personal accountability",
      description:
        "When families are arranging live-in care, they need confidence in both the quality of support and the people responsible for delivering it well.",
      items: [
        {
          title: "Care shaped around the individual",
          description:
            "We build support around personal routines, preferences, and what helps someone feel comfortable and settled at home.",
        },
        {
          title: "Reassurance through consistency",
          description:
            "Thoughtful planning and dependable support help families feel confident that care is being delivered properly and consistently.",
        },
        {
          title: "Professional oversight",
          description:
            "Families benefit from CQC-regulated care, trained carers, and a service that is locally managed and accountable.",
        },
        {
          title: "Responsive local support",
          description:
            "Because we are a nearby team, families can expect clearer communication and a more personal, responsive experience.",
        },
      ],
    },
    process: {
      eyebrow: "Getting started",
      title: "Starting live-in care should feel steady, clear, and supportive",
      description:
        "We talk through the situation carefully, explain the process, and help families understand what tailored live-in support could look like without making the process feel overwhelming.",
      steps: sharedProcessSteps,
      cta: {
        label: "Book a Free Consultation",
        href: "/contact",
      },
    },
    coverage: {
      eyebrow: "Local coverage reassurance",
      title: "Live-in care across Todmorden, Hebden Bridge, Mytholmroyd, and nearby areas",
      description:
        "Our local team supports families across the area with live-in care that combines professional standards, one-to-one reassurance, and nearby accountability.",
      areas: [...sharedCoverageAreas],
      cta: {
        label: "Explore All Areas We Cover",
        href: "/areas",
      },
    },
    faqs: {
      eyebrow: "Live-in care FAQs",
      title: "A few common questions about arranging live-in care",
      description:
        "These answers cover some of the things families often want to understand when considering a more continuous level of support at home.",
      items: [
        {
          question: "How quickly can live-in care start?",
          answer:
            "Start times depend on the type of support needed and current availability, but we will always aim to respond quickly and explain the next steps clearly.",
        },
        {
          question: "How is live-in care arranged?",
          answer:
            "We begin by understanding the person's needs, routines, and circumstances, then shape a tailored plan so support starts in a calm and well-managed way.",
        },
        {
          question: "Is live-in care tailored to individual routines?",
          answer:
            "Yes. Live-in care should reflect how someone prefers to live, the routines that matter to them, and the support that helps them feel comfortable and reassured at home.",
        },
        {
          question: "What kind of support can be included?",
          answer:
            "Support can include companionship, practical help around daily living, meal preparation, personal support, and other agreed care needs depending on the individual.",
        },
      ],
      cta: {
        label: "View All FAQs",
        href: "/faqs",
      },
    },
    finalCta: {
      title: "Talk to us about tailored live-in care at home",
      description:
        "If you need a more consistent level of reassurance for yourself or a loved one, we can help you explore the right next step with clear advice and local support.",
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
  respiteCare: {
    metadata: {
      title: "Respite Care in the Todmorden Branch Area",
      description:
        "Flexible respite care across the Todmorden branch area, giving families short-term support and dependable cover while making sure care continues safely at home.",
      path: "/services/respite-care",
    },
    hero: {
      eyebrow: "Short-term support that helps families breathe",
      title: "Respite care that gives families breathing space while care continues safely at home",
      description:
        "Respite care provides short-term support when a family carer needs time to rest, step away, or manage other pressures while making sure the right care remains in place. It offers reassurance, continuity, and calm cover when extra help is needed for a short period or at short notice.",
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
        "Short-term support with dependable cover at home",
        "Helpful during planned breaks or changing circumstances",
        "Flexible care shaped around the person and routine",
        "CQC-regulated care from trained, DBS-checked carers",
      ],
      image: {
        src: "/images/respite-care.webp",
        alt: "A carer offering reassuring respite support in a calm home setting",
      },
      supportCard: {
        eyebrow: "Flexible reassurance",
        title: "Support that gives families time to pause and reset",
        description:
          "We provide short-term care that helps families step back when needed, while making sure a loved one continues to feel safe, supported, and cared for at home.",
      },
    },
    intro: {
      eyebrow: "What this service is",
      title: "Short-term care that helps families manage pressure without compromising support",
      description:
        "Respite care gives family carers the chance to rest, take a break, or manage other responsibilities while knowing the person they care for still has thoughtful, dependable support in place. It can be planned in advance or arranged when circumstances change and extra help is needed.",
      points: [
        "It gives family carers time to rest, recover, or focus on other responsibilities without leaving care needs unsupported.",
        "Support is built around the person’s existing routine so care feels as settled, respectful, and consistent as possible.",
        "The aim is to reduce pressure, protect wellbeing, and keep the right support in place during a temporary period of change.",
      ],
    },
    idealFor: {
      eyebrow: "Who it is for",
      title: "Helpful when a family needs short-term support or dependable cover",
      description:
        "Respite care can be the right option when caring responsibilities feel intense, a break is needed, or circumstances mean extra support is required for a period of time.",
      points: [
        "Family carers who need time to rest, recover, attend appointments, or take a planned break.",
        "Situations where a loved one still needs support at home while regular family care is temporarily unavailable.",
        "Families facing a period of change, pressure, or uncertainty and needing calm, flexible cover from a trusted local team.",
      ],
    },
    includes: {
      eyebrow: "What support can include",
      title: "Short-term support that still feels thoughtful and personal",
      description:
        "Respite care is tailored to the individual and the situation, helping daily life continue with reassurance and practical support while a family carer takes a step back.",
      items: [
        "Help with routines and general day-to-day support",
        "Companionship and reassuring social contact",
        "Meal preparation and practical help around daily living",
        "Personal care delivered with dignity and respect",
        "Medication prompts where appropriate within the care plan",
        "Flexible short-term support that fits around the person’s needs and family circumstances",
      ],
    },
    whyLibra: {
      eyebrow: "Why choose Libra",
      title: "Short-term care delivered with the same professionalism and compassion as ongoing support",
      description:
        "Even when care is temporary, families still need confidence that it will be handled well, communicated clearly, and delivered with warmth and professionalism.",
      items: [
        {
          title: "Flexible around changing situations",
          description:
            "We understand that respite care often happens when families need support quickly, calmly, and without unnecessary complexity.",
        },
        {
          title: "Respectful continuity",
          description:
            "We work to keep support settled and person-centred so temporary care still feels thoughtful and reassuring.",
        },
        {
          title: "Professional and accountable",
          description:
            "Families benefit from CQC-regulated care, trained carers, and support delivered with proper oversight and local accountability.",
        },
        {
          title: "A nearby team you can reach",
          description:
            "As a local provider, we can offer a more responsive and personally accountable experience when families need help.",
        },
      ],
    },
    process: {
      eyebrow: "Getting started",
      title: "Arranging respite care should feel clear and manageable",
      description:
        "We help families talk through what is needed, how long support may be required, and how care can be arranged in a calm and practical way.",
      steps: sharedProcessSteps,
      cta: {
        label: "Book a Free Consultation",
        href: "/contact",
      },
    },
    coverage: {
      eyebrow: "Local coverage reassurance",
      title: "Respite care across the Todmorden branch area",
      description:
        "Our local team supports families across the area with short-term care that brings reassurance, flexibility, and dependable support when it is needed most.",
      areas: [...sharedCoverageAreas],
      cta: {
        label: "Explore All Areas We Cover",
        href: "/areas",
      },
    },
    faqs: {
      eyebrow: "Respite care FAQs",
      title: "A few common questions about arranging respite care",
      description:
        "These answers cover some of the things families often want to understand when looking for short-term support or temporary cover at home.",
      items: [
        {
          question: "How quickly can respite care start?",
          answer:
            "This depends on the type of support needed and current availability, but our team will always aim to guide you clearly and respond as quickly as possible.",
        },
        {
          question: "Can respite care be arranged for a short period?",
          answer:
            "Yes. Respite care is designed to provide short-term support, whether that is planned in advance or needed because circumstances have changed.",
        },
        {
          question: "Will support still be tailored to the person?",
          answer:
            "Yes. Even when care is temporary, support should still reflect the person’s routines, preferences, and the help they need to feel comfortable and safe at home.",
        },
        {
          question: "What can respite care include?",
          answer:
            "Respite care can include companionship, practical support, help with daily routines, meal preparation, personal care, and other agreed support depending on the care plan.",
        },
      ],
      cta: {
        label: "View All FAQs",
        href: "/faqs",
      },
    },
    finalCta: {
      title: "Talk to us about respite care and short-term support",
      description:
        "If you need temporary care for yourself or a loved one, we can help you understand the options and arrange the right next step with confidence.",
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
  dementiaSupport: {
    metadata: {
      title: "Dementia Support at Home in the Todmorden Branch Area",
      description:
        "Thoughtful dementia support at home across the Todmorden branch area, shaped around routine, familiarity, reassurance, and individual needs.",
      path: "/services/dementia-support",
    },
    hero: {
      eyebrow: "Thoughtful dementia support at home",
      title: "Dementia support shaped around routine, familiarity, patience, and personal reassurance",
      description:
        "Our dementia support service is designed to help people remain safe, comfortable, and well supported at home through care that feels calm, respectful, and tailored to the individual. We focus on familiar routines, consistency where possible, and the reassurance families need day to day.",
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
        "Support shaped around familiar routines and preferences",
        "Warm, respectful care delivered with patience and dignity",
        "Reassurance for individuals and their families at home",
        "CQC-regulated care from trained, DBS-checked carers",
      ],
      image: {
        src: "/images/hero-3.webp",
        alt: "A carer offering calm and reassuring support to an older adult at home",
      },
      supportCard: {
        eyebrow: "Calm reassurance",
        title: "Personalised support that helps home feel familiar and settled",
        description:
          "We take time to understand what helps someone feel comfortable, respected, and reassured in their own surroundings.",
      },
    },
    intro: {
      eyebrow: "What this service is",
      title: "Home support shaped around the individual rather than a fixed routine",
      description:
        "Dementia support should feel thoughtful, steady, and personal. We focus on care that reflects the person, their familiar surroundings, and the routines that help daily life feel more settled.",
      points: [
        "Support is built around the individual, their preferences, and the pace that feels right for them.",
        "Care aims to reduce disruption by working with familiar routines and a calm, reassuring approach.",
        "The focus is on dignity, comfort, and helping someone remain supported in the place they know best.",
      ],
    },
    idealFor: {
      eyebrow: "Who it is for",
      title: "Helpful when familiarity, reassurance, and consistency matter more than ever",
      description:
        "Dementia support can help when everyday routines are becoming harder to manage and families want calm, dependable support at home.",
      points: [
        "People who benefit from a familiar daily rhythm, reassuring presence, and support delivered with patience and understanding.",
        "Individuals who want to remain at home with care shaped around what helps them feel comfortable and settled.",
        "Families who want thoughtful, personalised support in place together with clear communication and local reassurance.",
      ],
    },
    includes: {
      eyebrow: "What support can include",
      title: "Respectful help that supports comfort, routine, and wellbeing",
      description:
        "The exact care plan depends on the person, but dementia support is designed to provide calm, practical help that fits naturally around daily life.",
      items: [
        "Support with familiar daily routines and gentle day-to-day reassurance",
        "Companionship and a calm, supportive presence at home",
        "Meal preparation and practical help around daily living",
        "Personal support delivered with dignity, patience, and respect",
        "Wellbeing checks and prompts shaped around the agreed care plan",
        "Flexible care that reflects changing needs while keeping the person at the centre",
      ],
    },
    whyLibra: {
      eyebrow: "Why choose Libra",
      title: "Dementia support delivered with warmth, consistency, and local accountability",
      description:
        "Families need confidence that care will be delivered properly and with the right approach. We combine professionalism with a calm, person-centred understanding of what good support should feel like.",
      items: [
        {
          title: "Care that feels personal",
          description:
            "We take time to understand the individual, their routine, and what helps them feel comfortable, respected, and reassured.",
        },
        {
          title: "Consistency where possible",
          description:
            "Thoughtful planning supports familiar faces and a steadier experience, helping care feel calmer and more settled over time.",
        },
        {
          title: "Warm and respectful approach",
          description:
            "Good support is not only about tasks. It is about tone, patience, dignity, and how someone is treated each day.",
        },
        {
          title: "Professional local oversight",
          description:
            "Our care is CQC-regulated, delivered by trained, DBS-checked carers, and supported by a nearby management team families can reach.",
        },
      ],
    },
    process: {
      eyebrow: "Getting started",
      title: "Starting dementia support should feel calm, clear, and collaborative",
      description:
        "We talk through the situation carefully, understand the routines that matter, and help families shape support in a way that feels right for the person involved.",
      steps: sharedProcessSteps,
      cta: {
        label: "Book a Free Consultation",
        href: "/contact",
      },
    },
    coverage: {
      eyebrow: "Local coverage reassurance",
      title: "Dementia support across the Todmorden branch area",
      description:
        "Our local team supports families across the area with thoughtful home care that combines nearby responsiveness with dependable professional standards.",
      areas: [...sharedCoverageAreas],
      cta: {
        label: "Explore All Areas We Cover",
        href: "/areas",
      },
    },
    faqs: {
      eyebrow: "Dementia support FAQs",
      title: "A few common questions about arranging dementia support at home",
      description:
        "These answers cover some of the things families often want to understand when they are exploring more tailored support at home.",
      items: [
        {
          question: "How quickly can dementia support start?",
          answer:
            "This depends on the support needed and current availability, but we will always aim to guide you clearly and respond as quickly as possible.",
        },
        {
          question: "How is dementia support arranged?",
          answer:
            "We start by understanding the person, their routines, preferences, and current situation, then shape a care plan around the support that feels most appropriate and reassuring.",
        },
        {
          question: "Can support be tailored to familiar routines?",
          answer:
            "Yes. We build care around the routines, surroundings, and preferences that help someone feel more comfortable and settled at home.",
        },
        {
          question: "What can dementia support include?",
          answer:
            "Support may include companionship, practical day-to-day help, personal support, meal preparation, wellbeing checks, and other agreed care depending on the individual.",
        },
      ],
      cta: {
        label: "View All FAQs",
        href: "/faqs",
      },
    },
    finalCta: {
      title: "Talk to us about thoughtful dementia support at home",
      description:
        "If you are exploring the right support for a loved one, we can help you understand the options and take the next step with confidence.",
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
  companionship: {
    metadata: {
      title: "Companionship at Home in the Todmorden Branch Area",
      description:
        "Meaningful companionship at home across the Todmorden branch area, helping reduce loneliness and bring comfort, routine, and connection.",
      path: "/services/companionship",
    },
    hero: {
      eyebrow: "Meaningful companionship at home",
      title: "Companionship that brings comfort, connection, and reassuring support at home",
      description:
        "Our companionship service offers warm, thoughtful support for people who would benefit from regular company, conversation, and a reassuring presence at home. It is designed to help reduce loneliness, support routine, and make everyday life feel more connected and settled.",
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
        "Meaningful social support and regular companionship",
        "Comforting check-ins that help someone feel less alone",
        "Routine, reassurance, and a familiar friendly presence",
        "CQC-regulated care from trained, DBS-checked carers",
      ],
      image: {
        src: "/images/hero-1.webp",
        alt: "A carer sharing a warm companionship visit with an older adult at home",
      },
      supportCard: {
        eyebrow: "Human support",
        title: "Companionship is real care, not a lesser service",
        description:
          "We focus on genuine connection, reassuring visits, and support that helps everyday life feel warmer and more settled.",
      },
    },
    intro: {
      eyebrow: "What this service is",
      title: "Support centred on company, conversation, and feeling connected",
      description:
        "Companionship is about more than being present. It is meaningful support that helps someone feel seen, reassured, and less alone in day-to-day life at home.",
      points: [
        "Visits are shaped around the person, their interests, and the kind of social support that feels most helpful and natural to them.",
        "Companionship can bring comfort, a sense of routine, and reassuring contact for people who would benefit from regular check-ins.",
        "The focus is on connection, dignity, and helping everyday life feel calmer and more supported.",
      ],
    },
    idealFor: {
      eyebrow: "Who it is for",
      title: "Helpful when regular social support and reassuring contact can make a real difference",
      description:
        "Companionship can be a valuable option for people who are spending more time alone or would benefit from steady, meaningful contact at home.",
      points: [
        "People who would benefit from conversation, company, and regular supportive visits at home.",
        "Individuals who may be feeling isolated or who find reassurance in familiar check-ins and a steady routine.",
        "Families who want to know a loved one has meaningful contact, wellbeing support, and a trusted local point of connection.",
      ],
    },
    includes: {
      eyebrow: "What support can include",
      title: "Companionship shaped around comfort, routine, and everyday connection",
      description:
        "Support is tailored to the person, but companionship often combines social connection with gentle day-to-day reassurance.",
      items: [
        "Regular visits centred on conversation and meaningful social contact",
        "Wellbeing check-ins and a reassuring friendly presence at home",
        "Support around familiar routines and maintaining a comfortable daily rhythm",
        "Accompaniment to local outings or appointments where appropriate within the care plan",
        "Help enjoying interests, hobbies, and everyday activities that matter to the person",
        "Gentle practical support around daily living where agreed as part of the wider care plan",
      ],
    },
    whyLibra: {
      eyebrow: "Why choose Libra",
      title: "Companionship delivered with warmth, consistency, and genuine care",
      description:
        "Families need confidence that companionship will feel thoughtful, reliable, and genuinely supportive rather than token or rushed.",
      items: [
        {
          title: "Human connection that feels genuine",
          description:
            "We approach companionship as meaningful support, taking time to build trust, conversation, and a reassuring presence.",
        },
        {
          title: "Support shaped around the person",
          description:
            "Visits are tailored to routines, preferences, and the kind of interaction that helps someone feel most comfortable and connected.",
        },
        {
          title: "Consistency where possible",
          description:
            "Thoughtful planning supports familiar visits and dependable contact, helping companionship feel more settled and reassuring.",
        },
        {
          title: "Local and accountable",
          description:
            "Our care is CQC-regulated, delivered by trained, DBS-checked carers, and supported by a nearby team families can easily reach.",
        },
      ],
    },
    process: {
      eyebrow: "Getting started",
      title: "Arranging companionship should feel simple and supportive",
      description:
        "We talk through what kind of support would feel most helpful, how often visits may be needed, and the best way to start in a calm and practical way.",
      steps: sharedProcessSteps,
      cta: {
        label: "Book a Free Consultation",
        href: "/contact",
      },
    },
    coverage: {
      eyebrow: "Local coverage reassurance",
      title: "Companionship support across the Todmorden branch area",
      description:
        "Our local team provides companionship across the area, helping families access thoughtful support and reassuring contact close to home.",
      areas: [...sharedCoverageAreas],
      cta: {
        label: "Explore All Areas We Cover",
        href: "/areas",
      },
    },
    faqs: {
      eyebrow: "Companionship FAQs",
      title: "A few common questions about arranging companionship at home",
      description:
        "These answers cover some of the things families often want to understand when they are exploring companionship and social support.",
      items: [
        {
          question: "How quickly can companionship start?",
          answer:
            "This depends on the level of support needed and current availability, but we will always aim to guide you clearly and respond as quickly as possible.",
        },
        {
          question: "Is companionship only about social visits?",
          answer:
            "Companionship is centred on meaningful connection, but it can also include wellbeing check-ins, support around routine, and other agreed day-to-day reassurance depending on the care plan.",
        },
        {
          question: "Can companionship support routine and regular check-ins?",
          answer:
            "Yes. Many families choose companionship because regular visits and check-ins can help someone feel more connected, reassured, and supported at home.",
        },
        {
          question: "Can companionship include outings or appointments?",
          answer:
            "Where appropriate within the agreed care plan, companionship can include support with outings or appointments so someone feels more confident and less alone.",
        },
      ],
      cta: {
        label: "View All FAQs",
        href: "/faqs",
      },
    },
    finalCta: {
      title: "Talk to us about companionship that feels genuine and reassuring",
      description:
        "If you are exploring regular supportive visits for yourself or a loved one, we can help you understand the options and find the right next step.",
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
  personalCare: {
    metadata: {
      title: "Personal Care at Home in the Todmorden Branch Area",
      description:
        "Respectful personal care at home across the Todmorden branch area, with tailored support for daily personal routines delivered with dignity.",
      path: "/services/personal-care",
    },
    hero: {
      eyebrow: "Respectful personal support at home",
      title: "Personal care delivered with dignity, privacy, and reassuring support at home",
      description:
        "Our personal care service provides calm, respectful support with the more personal parts of daily living. Care is tailored to the individual, delivered with dignity, and shaped around the routines that help someone feel comfortable and well supported at home.",
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
        "Support with washing, dressing, and daily personal routines",
        "Care delivered with dignity, privacy, and respect",
        "Tailored support shaped around familiar routines and preferences",
        "CQC-regulated care from trained, DBS-checked carers",
      ],
      image: {
        src: "/images/hero-2.webp",
        alt: "A carer providing calm and respectful personal support at home",
      },
      supportCard: {
        eyebrow: "Dignity first",
        title: "Sensitive day-to-day support handled with warmth and respect",
        description:
          "We take a careful, personal approach so support with daily routines feels reassuring, private, and right for the individual.",
      },
    },
    intro: {
      eyebrow: "What this service is",
      title: "Personal care that supports comfort, confidence, and dignity at home",
      description:
        "Personal care is about helping someone with more personal daily routines in a way that feels respectful, calm, and tailored to them.",
      points: [
        "Support is shaped around the person's routines, preferences, and the level of assistance they feel comfortable receiving.",
        "Care focuses on personal hygiene, daily self-care routines, and the support that helps everyday life feel more manageable.",
        "The aim is to provide dignified help at home while protecting privacy, comfort, and trust.",
      ],
    },
    idealFor: {
      eyebrow: "Who it is for",
      title: "Helpful when personal routines are becoming more difficult to manage alone",
      description:
        "Personal care can help when someone would benefit from trusted support with more sensitive day-to-day tasks while remaining at home.",
      points: [
        "People who need support with washing, dressing, grooming, or other personal daily routines.",
        "Individuals who would benefit from help with morning and evening routines delivered in a calm and familiar way.",
        "Families who want reassurance that sensitive support is being delivered properly, respectfully, and by trusted carers.",
      ],
    },
    includes: {
      eyebrow: "What support can include",
      title: "Respectful help with daily personal routines",
      description:
        "The exact support depends on the person's needs and agreed care plan, but personal care is designed to make daily routines feel more manageable and dignified.",
      items: [
        "Support with washing, personal hygiene, and daily self-care routines",
        "Help with dressing, grooming, and getting ready for the day or for bed",
        "Assistance with morning and evening routines shaped around familiar preferences",
        "Support delivered at a pace that helps someone feel comfortable, respected, and at ease",
        "Wellbeing checks and agreed practical support around day-to-day living",
        "Flexible personal care that adapts around changing needs and routine",
      ],
    },
    whyLibra: {
      eyebrow: "Why choose Libra",
      title: "Personal care delivered with dignity, trust, and dependable oversight",
      description:
        "When families are arranging more personal support, they need confidence that care will be handled with sensitivity, professionalism, and real respect.",
      items: [
        {
          title: "Dignity in every interaction",
          description:
            "We understand that personal care should feel respectful and private, with support delivered in a way that protects comfort and confidence.",
        },
        {
          title: "Care shaped around routine",
          description:
            "Support is tailored to the individual's preferences, daily rhythm, and the approach that helps them feel most at ease.",
        },
        {
          title: "Trust and familiarity",
          description:
            "Thoughtful planning supports continuity where possible, helping personal care feel more settled, familiar, and reassuring.",
        },
        {
          title: "Professional local support",
          description:
            "Our care is CQC-regulated, delivered by trained, DBS-checked carers, and supported by a nearby team families can contact easily.",
        },
      ],
    },
    process: {
      eyebrow: "Getting started",
      title: "Arranging personal care should feel calm and respectful from the start",
      description:
        "We talk through the routines that need support, understand preferences carefully, and help families plan care in a way that feels appropriate and reassuring.",
      steps: sharedProcessSteps,
      cta: {
        label: "Book a Free Consultation",
        href: "/contact",
      },
    },
    coverage: {
      eyebrow: "Local coverage reassurance",
      title: "Personal care across the Todmorden branch area",
      description:
        "Our local team supports families across the area with personal care that combines nearby responsiveness with dependable professional standards.",
      areas: [...sharedCoverageAreas],
      cta: {
        label: "Explore All Areas We Cover",
        href: "/areas",
      },
    },
    faqs: {
      eyebrow: "Personal care FAQs",
      title: "A few common questions about arranging personal care at home",
      description:
        "These answers cover some of the things families often want to understand when more personal support is needed at home.",
      items: [
        {
          question: "How quickly can personal care start?",
          answer:
            "This depends on the support needed and current availability, but we will always aim to guide you clearly and respond as quickly as possible.",
        },
        {
          question: "Is personal care tailored to individual routines?",
          answer:
            "Yes. We build support around the person's preferences, their daily rhythm, and the approach that helps them feel most comfortable and respected.",
        },
        {
          question: "Can personal care be combined with other support?",
          answer:
            "Yes. Personal care can sit alongside other agreed support such as wellbeing checks, companionship, meal preparation, and broader day-to-day help depending on the care plan.",
        },
        {
          question: "How do you make personal care feel respectful and comfortable?",
          answer:
            "We take time to understand preferences, work at the right pace, and deliver support with dignity, privacy, and a calm, professional approach.",
        },
      ],
      cta: {
        label: "View All FAQs",
        href: "/faqs",
      },
    },
    finalCta: {
      title: "Talk to us about personal care delivered with dignity",
      description:
        "If you are exploring more personal support for yourself or a loved one, we can help you understand the options and plan the right next step.",
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
} satisfies Record<ServicePageKey, ServicePageContent>;

export function getServicePageContent(key: ServicePageKey) {
  return servicePageContent[key];
}

export const servicesHubContent: ServicesHubContent = {
  hero: {
    eyebrow: "Care services",
    title: "Support options designed around real lives, routines, and levels of care",
    description:
      "Choosing care can feel like a big step. Our services page is designed to help families understand the main types of support available, from flexible home care visits to more involved day-to-day reassurance at home.",
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
      "Home care, respite care, dementia support, companionship, and personal care",
      "Flexible support shaped around routines and individual needs",
      "CQC-regulated care from trained, DBS-checked carers",
      "A local team families can reach for clear guidance and reassurance",
    ],
    image: {
      src: "/images/hero.jpg",
      alt: "A warm home care moment showing supportive one-to-one care at home",
    },
    supportCard: {
      eyebrow: "A clearer starting point",
      title: "We help families understand which kind of support may be right",
      description:
        "If you are unsure where to begin, we will talk through your situation calmly and help you make sense of the options.",
    },
  },
  servicesSection: {
    eyebrow: "How we help",
    title: "Explore the main care options available at home",
    description:
      "Every family’s situation is different. These service categories give a clearer view of the support we can provide and where each option may fit best.",
    items: [
      {
        title: "Home Care",
        description:
          "Flexible support at home for day-to-day living, routines, wellbeing, and independence.",
        href: "/services/home-care",
      },
      {
        title: "Respite Care",
        description:
          "Short-term support that gives family carers breathing space while ensuring the right care continues.",
        href: "/services/respite-care",
      },
      {
        title: "Dementia Support",
        description:
          "Thoughtful care shaped around routine, familiarity, patience, and individual needs.",
        href: "/services/dementia-support",
      },
      {
        title: "Companionship",
        description:
          "Meaningful social support that helps reduce loneliness and brings comfort, routine, and connection.",
        href: "/services/companionship",
      },
      {
        title: "Personal Care",
        description:
          "Respectful support with the more personal parts of daily living, always delivered with dignity.",
        href: "/services/personal-care",
      },
    ],
    supportingNote:
      "If you are unsure whether companionship, personal care, or broader home care is the best fit, our team can talk it through and guide you clearly.",
    cta: {
      label: "Talk Through the Right Service",
      href: "/contact",
    },
  },
  whyLibra: {
    eyebrow: "Why families choose Libra",
    title: "A thoughtful approach built around people, trust, and Positive Impact",
    description:
      "Families are not only choosing a service category. They are choosing Home Care Heroes they can trust. Our approach centres on person-centred support, dignity, positive connections, and positive outcomes that help daily life feel better supported.",
    items: [
      {
        title: "Person-centred support",
        description:
          "Support is shaped around the individual, their routine, and what helps them feel comfortable, respected, and understood.",
      },
      {
        title: "Positive connections",
        description:
          "We value warm, consistent relationships that help care feel familiar and reassuring rather than rushed or impersonal.",
      },
      {
        title: "Trust and dignity",
        description:
          "Our care is CQC-regulated and delivered by trained, DBS-checked carers with respectful communication and thoughtful oversight.",
      },
      {
        title: "Positive Impact",
        description:
          "Good support should help people feel safer, more connected, and more able to live life in a way that feels right for them.",
      },
    ],
  },
  process: {
    eyebrow: "Getting started",
    title: "Choosing and arranging care should feel calm, not overwhelming",
    description:
      "We guide families through the next steps clearly, helping you understand the options, the level of support needed, and how care can begin.",
    steps: sharedProcessSteps,
    cta: {
      label: "Book a Free Consultation",
      href: "/contact",
    },
  },
  coverage: {
    eyebrow: "Local coverage reassurance",
    title: "Home care services across the Todmorden branch area",
    description:
      `Our Todmorden branch covers ${formatInlineList(
        todmordenCoverage
      )}, with rural support available where local availability allows. Burnley branch coverage is explained on our areas page.`,
    areas: [...sharedCoverageAreas],
    cta: {
      label: "Explore All Areas We Cover",
      href: "/areas",
    },
  },
  faqs: {
    eyebrow: "Common questions",
    title: "A few things families often want to know before choosing a service",
    description:
      "If you are comparing options, these answers can help make the next step feel clearer and more manageable.",
    items: [
      {
        question: "How do I know which type of care is right?",
        answer:
          "We talk through the situation with you, understand the support needed, and help you decide which service feels most suitable for the person involved.",
      },
      {
        question: "How quickly can care start?",
        answer:
          "Start times depend on the type of support needed and current availability, but we will always aim to guide you clearly and respond as quickly as possible.",
      },
      {
        question: "Can support be flexible?",
        answer:
          "Yes. Care can often be shaped around routines, changing needs, and the level of support required, whether that is lighter-touch visits or more involved day-to-day support.",
      },
      {
        question: "Will support be tailored to individual routines?",
        answer:
          "Yes. We build care around the person, their preferences, and the routines that help them feel comfortable, settled, and respected at home.",
      },
    ],
    cta: {
      label: "View All FAQs",
      href: "/faqs",
    },
  },
  finalCta: {
    title: "Looking for the right kind of care at home?",
    description:
      "Speak with our team and we will help you understand the options, answer your questions, and take the next step with confidence.",
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
};

export function getServicesHubContent() {
  return servicesHubContent;
}
