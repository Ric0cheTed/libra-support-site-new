import { BUSINESS_PROFILE } from "@/lib/business-profile";
import type { HomepageContent } from "@/types/homepage";

const primaryPhone = BUSINESS_PROFILE.phones.primary;

export const homepageContent: HomepageContent = {
  utilityTrustStripText:
    "CQC-regulated home care from a trusted local team with active Libra branches in Todmorden and Burnley, supporting families across Todmorden, Hebden Bridge, Mytholmroyd and surrounding areas.",
  header: {
    navItems: [
      { title: "Home", href: "/" },
      {
        title: "Care Services",
        href: "/services",
        subItems: [
          { title: "Home Care", href: "/services/home-care" },
          { title: "Live-in Care", href: "/services/live-in-care" },
          { title: "Respite Care", href: "/services/respite-care" },
        ],
      },
      { title: "Why Libra", href: "/#why-libra" },
      {
        title: "Areas We Cover",
        href: "/areas",
        subItems: [
          { title: "Todmorden", href: "/areas/todmorden" },
          { title: "Hebden Bridge", href: "/areas/hebden-bridge" },
          { title: "Mytholmroyd", href: "/areas/mytholmroyd" },
        ],
      },
      { title: "Care Costs", href: "/care-fees" },
      { title: "FAQs", href: "/faqs" },
      {
        title: "Careers",
        href: "/careers",
        subItems: [
          { title: "Meet the Team", href: "/careers/meet-team" },
          { title: "Open Roles", href: "/careers/open-roles" },
        ],
      },
      { title: "Contact", href: "/contact" },
    ],
    primaryCta: {
      label: "Book a Free Care Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: `Call ${primaryPhone.display}`,
      href: primaryPhone.href,
      ariaLabel: `Call Libra Support Services on ${primaryPhone.display}`,
    },
  },
  hero: {
    eyebrow: "CQC-regulated local home care",
    title: "Home care in Todmorden and Calderdale, delivered with warmth, dignity, and reliability",
    description:
      "Libra Support Services provides dependable home care, live-in care, and respite support for adults and families across Todmorden, Hebden Bridge, Mytholmroyd, and surrounding Calderdale areas. We help people stay safe, supported, and as independent as possible in the place they know best.",
    primaryCta: {
      label: "Book a Free Care Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: `Call ${primaryPhone.display}`,
      href: primaryPhone.href,
      ariaLabel: `Call the Libra Support Services team on ${primaryPhone.display}`,
    },
    trustBullets: [
      "CQC-regulated care",
      "DBS-checked, trained carers",
      "Local management team",
      "Flexible support tailored to individual needs",
    ],
    supportCard: {
      eyebrow: "Personalised support",
      title: "Trusted care shaped around real routines and real family needs",
      description:
        "From the first conversation to ongoing visits, we build support around the individual, their preferences, and the reassurance families need.",
      meta: "Free consultation and responsive local guidance",
    },
    image: {
      src: "/images/hero.jpg",
      alt: "Libra Support Services delivering warm home care support in a comfortable home setting",
    },
  },
  trustBarItems: [
    {
      title: "CQC-regulated",
      description: "Professional standards with accountable care delivery",
    },
    {
      title: "Local and responsive",
      description: "A nearby team families can reach quickly",
    },
    {
      title: "Personalised support",
      description: "Care shaped around real needs, routines, and preferences",
    },
    {
      title: "Reliable continuity",
      description: "Familiar carers where possible and dependable cover",
    },
  ],
  servicesPreview: {
    eyebrow: "How we help",
    title: "Home care, live-in care, and flexible support built around the individual",
    description:
      "Whether support is needed for a few visits a week or more involved ongoing care, we provide flexible services designed around the person, their routine, and their wellbeing.",
    items: [
      {
        title: "Home Care",
        description:
          "Flexible support at home for day-to-day living, routines, wellbeing, and independence.",
        href: "/services/home-care",
      },
      {
        title: "Live-in Care",
        description:
          "Dedicated one-to-one support at home for people who need more consistent, around-the-clock reassurance.",
        href: "/services/live-in-care",
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
    cta: {
      label: "View All Care Services",
      href: "/services",
    },
  },
  whyLibra: {
    eyebrow: "Why Libra",
    title: "Why families choose Libra for care at home",
    description:
      "Choosing care is a big decision. Families want reassurance, reliability, and people they can trust with something deeply important. Our approach combines professionalism, compassion, and local accountability.",
    items: [
      {
        title: "Care that feels personal",
        description:
          "We take time to understand the individual, their preferences, and what helps them feel comfortable, safe, and respected.",
      },
      {
        title: "Reliability you can count on",
        description:
          "Families need confidence that care will be delivered properly, consistently, and with the right level of attention.",
      },
      {
        title: "Local leadership and support",
        description:
          "Our team is rooted in the local area, giving families a more responsive and personal experience from the very start.",
      },
      {
        title: "Dignity in every interaction",
        description:
          "Good care is not just about tasks. It is about how someone is spoken to, supported, and treated every single day.",
      },
    ],
    cta: {
      label: "Learn More About Our Approach",
      href: "/about",
    },
  },
  careProcess: {
    eyebrow: "Getting started",
    title: "Starting care with Libra is simple and supportive",
    description:
      "We guide families through the process clearly, calmly, and without pressure so you know what happens next.",
    steps: [
      {
        title: "Talk to our team",
        description:
          "Tell us about the situation, the support needed, and any immediate concerns.",
      },
      {
        title: "Arrange a consultation",
        description:
          "We discuss needs in more detail and begin shaping the right level of care.",
      },
      {
        title: "Build the right support plan",
        description:
          "We create a care approach tailored to the individual, their routine, and their preferences.",
      },
      {
        title: "Care begins",
        description:
          "Support starts with a trusted team focused on comfort, dignity, and reliability.",
      },
    ],
    cta: {
      label: "Book a Free Consultation",
      href: "/contact",
    },
  },
  areasCoverage: {
    eyebrow: "Areas we cover",
    title: "Local home care guided from our Todmorden and Burnley branches",
    description:
      "Libra now has active operational bases in Todmorden and Burnley, helping families get clear local guidance while we continue growing carefully and responsibly.",
    items: [
      {
        title: "Todmorden",
        description:
          "Our Todmorden branch offers trusted home care and day-to-day support across our established local base.",
        href: "/areas/todmorden",
      },
      {
        title: "Burnley",
        description:
          "Our Burnley branch has a visible local presence and a dedicated Burnley page for families exploring support.",
        href: "/areas/burnley",
      },
      {
        title: "Hebden Bridge",
        description:
          "Flexible home care tailored to individuals and families across Hebden Bridge.",
        href: "/areas/hebden-bridge",
      },
      {
        title: "Mytholmroyd",
        description:
          "Responsive local care for people and families needing reliable support at home.",
        href: "/areas/mytholmroyd",
      },
    ],
    cta: {
      label: "Explore All Areas We Cover",
      href: "/areas",
    },
  },
  careCosts: {
    eyebrow: "Care costs",
    title: "Clear guidance to help you understand the cost of care",
    description:
      "The right care depends on the level of support needed, how often care is provided, and the type of help involved. We can talk you through the options clearly and help you understand what may be right for your situation.",
    supportPoints: [
      "Understand what affects cost",
      "Explore suitable support levels",
      "Speak with our team about funding and next steps",
    ],
    primaryCta: {
      label: "View Care Costs",
      href: "/care-fees",
    },
    secondaryCta: {
      label: "Talk to Us About Your Situation",
      href: "/contact",
    },
  },
  teamSpotlight: {
    eyebrow: "Meet the team",
    title: "Local leadership, personal accountability, and care delivered with heart",
    description:
      "Behind every care plan is a team responsible for making sure support is thoughtful, well-managed, and genuinely reliable. We believe families should know who is behind the service and feel confident in the people guiding it.",
    cta: {
      label: "Meet the Libra Team",
      href: "/about/team",
    },
    image: {
      src: "/images/about-team.webp",
      alt: "Libra Support Services team members together in a welcoming setting",
    },
  },
  testimonials: {
    eyebrow: "Family reassurance",
    title: "Trusted by people who want care delivered properly and personally",
    description:
      "Good care is measured in the everyday moments: feeling safe, feeling respected, and knowing someone dependable is there when needed.",
    items: [
      {
        quote:
          "One phone call and Nicola answered straight away. Within three days I had the equipment I needed to shower independently, and the support made a real difference when I was struggling.",
        name: "Sharon",
        location: "Client",
      },
      {
        quote:
          "They have always engaged with our family member in such a positive way, and it is clear he enjoys the time he spends with them. The respite it gives us as a family has genuinely improved all our lives.",
        name: "Amy",
        location: "Family member",
      },
      {
        quote:
          "Nicola was only too happy to help and supported me through a very difficult time. She is extremely kind, caring, helpful, professional and trustworthy, and I can't thank her enough.",
        name: "Emily",
        location: "Client",
      },
    ],
  },
  faqTeaser: {
    eyebrow: "Common questions",
    title: "A few things families often want to know",
    items: [
      {
        question: "How quickly can care start?",
        answer:
          "This depends on the type of support needed and current availability, but our team will always aim to guide you clearly and respond as quickly as possible.",
      },
      {
        question: "What types of care do you provide?",
        answer:
          "We provide a range of support including home care, live-in care, respite care, companionship, personal care, and more tailored support depending on individual needs.",
      },
      {
        question: "How do I know what level of care is right?",
        answer:
          "We talk through the situation with you, understand what support is needed, and help you decide on the most suitable next step.",
      },
    ],
    cta: {
      label: "View All FAQs",
      href: "/faqs",
    },
  },
  finalCta: {
    title: "Looking for trusted home care for yourself or a loved one?",
    description:
      "Speak with our team today and take the first step towards thoughtful, personalised support at home.",
    primaryCta: {
      label: "Book a Free Care Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: `Call ${primaryPhone.display}`,
      href: primaryPhone.href,
      ariaLabel: `Call Libra Support Services on ${primaryPhone.display}`,
    },
  },
};
