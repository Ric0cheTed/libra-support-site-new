import { guidanceSources } from "@/content/guidance-sources";

export type CareGuide = {
  slug: string;
  title: string;
  summary: string;
  category: "Planning care" | "Costs & funding" | "Supporting someone" | "Care quality";
  scope: "England";
  sourcesCheckedOn: string;
  quickAnswer: string;
  quickSourceKeys: string[];
  sections: { id: string; heading: string; paragraphs: string[]; bullets?: string[]; sourceKeys: string[] }[];
  faqs: { question: string; answer: string; sourceKeys: string[] }[];
  relatedServices: { label: string; href: string }[];
  relatedSlugs: string[];
};

// General, source-checked editorial content. This date is a source check, not
// clinical review, approval of Libra policy or a claim of production publication.
const checked = "2026-11-08";
export const careGuides: CareGuide[] = [
  {
    slug: "starting-home-care", title: "Getting started with home care", category: "Planning care", scope: "England", sourcesCheckedOn: checked,
    summary: "A calm first step: understand the help needed, explore an assessment and prepare for a conversation.",
    quickAnswer: "Start with what everyday life is like now and what the person would like help with. A council needs assessment can identify support needs; a separate conversation with a care provider can explore whether its services are suitable.", quickSourceKeys: ["nhs-homecare", "nhs-assessment"],
    sections: [
      { id: "everyday-life", heading: "Begin with the person, not a package", paragraphs: ["Home care can include help with everyday activities at home. Before comparing providers, make a short list of what is difficult, what already works and what the person wants to keep doing for themselves. The aim is to describe a real day, rather than choose a service label too early."], bullets: ["Which morning, daytime or evening routines need support?", "What matters most to the person about privacy, independence and familiar routines?", "Who is helping already, and where are the gaps?"], sourceKeys: ["nhs-homecare"] },
      { id: "assessment", heading: "Ask about a needs assessment", paragraphs: ["In England, you can ask the local council for a needs assessment. The assessment itself is free and considers how someone is managing everyday tasks. It is different from the financial assessment used to work out a contribution to eligible care costs. You can ask about a needs assessment even if you expect to pay for care yourself."], sourceKeys: ["nhs-assessment", "nhs-council-funding"] },
      { id: "first-conversation", heading: "Prepare a few questions for the provider", paragraphs: ["Describe the support you are looking for, your area and any timing preferences. Ask what the provider can and cannot offer, how it would assess suitability, what visits would involve and how charges work. Do not assume an enquiry confirms a start date or a particular visit pattern."], bullets: ["Ask for a clear explanation of the next steps and who to contact.", "Discuss how the person will be involved in planning their support.", "Request written information about costs and the proposed arrangement."], sourceKeys: ["nhs-homecare", "cqc-choosing"] },
    ],
    faqs: [
      { question: "Do I need to know exactly which service to ask for?", answer: "It can help to start by describing the everyday tasks that are difficult and the person's priorities. An assessment and a provider conversation can then explore appropriate support; they do not commit you to a particular package.", sourceKeys: ["nhs-assessment", "nhs-homecare"] },
      { question: "Is an assessment the same as free care?", answer: "No. The needs assessment itself is free. Whether the council contributes towards ongoing care is a separate question involving eligibility and a financial assessment.", sourceKeys: ["nhs-assessment", "nhs-council-funding"] },
    ], relatedServices: [{ label: "Explore home care", href: "/services/home-care" }, { label: "Find your local branch", href: "/areas" }], relatedSlugs: ["understanding-care-fees", "choosing-a-care-provider"],
  },
  {
    slug: "understanding-care-fees", title: "Understanding care fees", category: "Costs & funding", scope: "England", sourcesCheckedOn: checked,
    summary: "Questions to ask about the price, what is included and how to compare a proposed care arrangement.",
    quickAnswer: "Ask for a written, current breakdown based on the support actually being proposed. The price of a visit is only useful when you also know its length, what is included and which circumstances could change the charge.", quickSourceKeys: ["nhs-homecare"],
    sections: [
      { id: "written-costs", heading: "Get a clear written explanation", paragraphs: ["If you are arranging and paying for home care yourself, ask the agency for a clear price list and a contract to read before deciding. Keep the information with your notes so you can compare like-for-like arrangements. A general information page is not a personalised quote."], bullets: ["What support and visit length does the price cover?", "Are there minimum visit lengths, extra charges or different rates at particular times?", "How are cancellations, changes and future price reviews handled?"], sourceKeys: ["nhs-homecare"] },
      { id: "compare", heading: "Compare the arrangement, not just the headline", paragraphs: ["Two proposals may describe different support. Ask each provider how carers are selected, how timing is agreed, what happens if a visit is delayed and how to raise a concern. These questions can help you understand the service alongside its cost; they are not promises that every provider offers the same arrangements."], sourceKeys: ["nhs-homecare", "cqc-choosing"] },
      { id: "paying", heading: "Keep fees and funding as separate questions", paragraphs: ["The provider's charge and a council decision about financial help are not the same thing. If you want to explore council support, ask about a needs assessment and financial assessment. If you are discussing Libra care, request confirmation of current fees and availability for your circumstances rather than relying on an example or an undated figure."], sourceKeys: ["nhs-council-funding", "nhs-homecare"] },
    ], faqs: [
      { question: "Does this guide quote Libra's current hourly rate?", answer: "No. It explains questions to ask. Please request a current written quote for the support, location and visit arrangements you are considering; existing care-cost information is background rather than an individual quotation.", sourceKeys: ["nhs-homecare"] },
      { question: "Should I ask about charges beyond the visit price?", answer: "Yes. Ask what is included, which services or circumstances may cost extra and where these terms appear in the written agreement.", sourceKeys: ["nhs-homecare"] },
    ], relatedServices: [{ label: "Existing care-cost information", href: "/care-fees" }, { label: "Ask about your circumstances", href: "/contact" }], relatedSlugs: ["care-funding", "starting-home-care"],
  },
  {
    slug: "care-funding", title: "Care funding and financial support", category: "Costs & funding", scope: "England", sourcesCheckedOn: checked,
    summary: "Understand the difference between needs, financial and NHS assessments, with separate local council signposts.",
    quickAnswer: "In England, financial help with social care depends on an assessment of needs and, for council funding, financial circumstances. NHS continuing healthcare is a different assessment route. An enquiry with a care provider does not determine your entitlement.", quickSourceKeys: ["nhs-council-funding", "nhs-continuing"],
    sections: [
      { id: "two-assessments", heading: "Needs first, then the financial assessment", paragraphs: ["A needs assessment considers what support is required. If the council identifies eligible needs, a financial assessment considers what you may need to pay towards care. Depending on the outcome, you might pay all of the cost or receive a contribution. Do not assume that having a diagnosis, being older or contacting an agency automatically secures funding."], sourceKeys: ["nhs-assessment", "nhs-council-funding"] },
      { id: "local-arrangements", heading: "National guidance, local arrangements", paragraphs: ["The NHS pages explain the general process in England. Councils publish their own practical information about assessments, charging and how to apply. Calderdale Council provides a care-cost calculator and financial-assessment information; an estimate is not the final assessment. Lancashire County Council provides a separate paying-for-care information route. Follow the council responsible for the person needing care, rather than assuming the Libra branch decides funding."], bullets: ["For Calderdale, start with the council's paying-for-care and support information linked below.", "For enquiries around Burnley, check Lancashire County Council's adult social care information and confirm the responsible authority.", "Use the council's own secure process for financial documents; do not put financial records in a general care enquiry."], sourceKeys: ["calderdale-costs", "lancashire", "nhs-council-funding"] },
      { id: "nhs-route", heading: "NHS continuing healthcare is a separate route", paragraphs: ["Some adults with complex ongoing health needs may qualify for NHS continuing healthcare. Eligibility is assessed by healthcare professionals looking at the overall needs, not simply the name of a condition. If you think it may be relevant, ask an appropriate health professional about the assessment route. This guide cannot decide eligibility or give individual financial advice."], sourceKeys: ["nhs-continuing"] },
    ], faqs: [
      { question: "Can Libra tell me that the council will pay?", answer: "A provider discussion is not a council funding decision. The relevant council explains its needs and financial assessment process. Ask for individual guidance from that authority or an appropriate independent adviser.", sourceKeys: ["nhs-council-funding"] },
      { question: "Are Calderdale and Lancashire arrangements identical?", answer: "They have separate council information and application routes. Read the current information from the authority responsible for the person needing care; do not carry an estimate or process from one council into another.", sourceKeys: ["calderdale-costs", "lancashire"] },
    ], relatedServices: [{ label: "Discuss care needs with Libra", href: "/contact" }, { label: "Explore our existing care-cost page", href: "/care-fees" }], relatedSlugs: ["understanding-care-fees", "support-for-relatives"],
  },
  {
    slug: "dementia-support", title: "Dementia support at home", category: "Supporting someone", scope: "England", sourcesCheckedOn: checked,
    summary: "Prepare a person-centred conversation about daily routines, communication and support for family carers.",
    quickAnswer: "Support should begin with the person's preferences, abilities and everyday life, rather than a diagnosis alone. Describe what helps them feel comfortable and ask how a provider would respond to their individual needs. Health questions belong with the appropriate healthcare professional.", quickSourceKeys: ["nhs-dementia", "cqc-choosing"],
    sections: [
      { id: "person-first", heading: "Keep the person involved", paragraphs: ["Dementia affects people in different ways. The NHS encourages supporting the person's existing skills, everyday activities and connections. When planning support, ask what they enjoy, what they want to keep doing and how they prefer to communicate. Take time to listen rather than assuming that one routine will suit everyone."], sourceKeys: ["nhs-dementia"] },
      { id: "share-what-helps", heading: "Prepare useful information for an assessment", paragraphs: ["It can help to note familiar routines, activities and ways of offering reassurance. Explain which daily tasks are becoming difficult and ask the provider about its experience of comparable support needs. Discuss health or medicine concerns with an appropriate professional; this guide is not an assessment, diagnosis or treatment plan."], bullets: ["What does a good day look like for the person?", "Which communication approaches help, and what causes distress?", "What practical support is needed, and who already provides it?"], sourceKeys: ["nhs-dementia", "nhs-homecare"] },
      { id: "family-support", heading: "The family carer's needs matter too", paragraphs: ["Caring can affect your own health, work and relationships. A carer's assessment can explore support for you separately from the care needs assessment of the person you support. You can also discuss support with your GP and explore respite options. Asking for help is a sensible part of planning sustainable care."], sourceKeys: ["nhs-carers", "nhs-dementia", "nhs-respite"] },
    ], faqs: [
      { question: "Does a dementia diagnosis tell us exactly which care to arrange?", answer: "No. Focus on the person's current needs, preferences and circumstances. An individual assessment and the relevant health professionals can help clarify what support is appropriate.", sourceKeys: ["nhs-dementia", "nhs-assessment"] },
      { question: "Can a relative ask for their own support assessment?", answer: "An adult who regularly cares for someone can ask the council about a carer's assessment. It considers the effect of caring on their own life, separately from the person's care needs assessment.", sourceKeys: ["nhs-carers"] },
    ], relatedServices: [{ label: "Explore dementia support", href: "/services/dementia-support" }, { label: "Explore respite care", href: "/services/respite-care" }], relatedSlugs: ["respite-care", "support-for-relatives"],
  },
  {
    slug: "respite-care", title: "Planning respite care", category: "Supporting someone", scope: "England", sourcesCheckedOn: checked,
    summary: "Plan a break from caring while keeping the person's needs, routines and support arrangements clear.",
    quickAnswer: "Respite means a break from caring while someone else looks after the person you support. Options can include support at home or other arrangements. The right choice depends on both people's needs, suitability, funding and actual availability.", quickSourceKeys: ["nhs-respite"],
    sections: [
      { id: "the-break", heading: "Describe the break you need", paragraphs: ["Respite can take different forms, from help at home to a short stay elsewhere. Think about the time you need, what support must continue and what the person receiving care would feel comfortable with. These are general options, not a list of services or hours that Libra has confirmed it can provide."], sourceKeys: ["nhs-respite"] },
      { id: "handover", heading: "Prepare the handover together", paragraphs: ["Before a break, agree who will provide support and how information will be shared safely. Useful notes can explain routines, essential contacts and the person's preferences. Discuss specialist care or medicine requirements directly through the appropriate assessment and professional channels rather than relying on informal instructions."], bullets: ["What help is needed while you are away?", "Who should be contacted if plans change?", "What is the backup plan if the usual carer cannot attend?"], sourceKeys: ["nhs-respite"] },
      { id: "assessment-and-cost", heading: "Check assessment, cost and dates", paragraphs: ["If you want the council to fund respite, ask about a care needs assessment for the person receiving support and a carer's assessment for you. A financial assessment may follow. If arranging privately, ask for written costs and confirmation that the proposed support and dates are suitable before making commitments."], sourceKeys: ["nhs-respite", "nhs-homecare"] },
    ], faqs: [
      { question: "Is respite only a stay in a care home?", answer: "No. National guidance describes several options, including help at home and other forms of support. Ask the relevant organisation which options are suitable and actually available locally.", sourceKeys: ["nhs-respite"] },
      { question: "Will respite automatically be paid for by the council?", answer: "No. Council-funded respite depends on assessed needs and the relevant funding process. Ask the council about the assessments and any contribution; a provider enquiry is not funding approval.", sourceKeys: ["nhs-respite"] },
    ], relatedServices: [{ label: "Explore Libra respite care", href: "/services/respite-care" }, { label: "Ask about local availability", href: "/contact" }], relatedSlugs: ["care-funding", "support-for-relatives"],
  },
  {
    slug: "choosing-a-care-provider", title: "Choosing a home care provider", category: "Planning care", scope: "England", sourcesCheckedOn: checked,
    summary: "A practical checklist for checking the right service, asking questions and comparing care arrangements.",
    quickAnswer: "Check the provider's relevant CQC location record, read the report rather than only the headline rating, and ask how the service would meet the person's particular needs. Combine independent information with clear questions about visits, costs and communication.", quickSourceKeys: ["cqc-choosing", "nhs-homecare"],
    sections: [
      { id: "right-record", heading: "Find the right service record", paragraphs: ["CQC information can help you compare services. Match the record to the service or location you are considering, rather than assuming a rating for another branch applies. Read what the report says about the service and when it was published. A rating is useful evidence, not a substitute for checking individual suitability."], sourceKeys: ["cqc-choosing", "cqc-ratings"] },
      { id: "ask-questions", heading: "Ask how care would work in practice", paragraphs: ["The NHS suggests asking about carers' experience and training, how a suitable carer is chosen, visit times, delays, extra charges and the agreement you would sign. Ask how to contact the agency and how to raise concerns. Look for explanations you understand rather than accepting a slogan as evidence."], bullets: ["How will the person and family be involved in planning?", "What can the service support, and what falls outside its scope?", "How are changes, missed visits and concerns handled?"], sourceKeys: ["nhs-homecare", "cqc-choosing"] },
      { id: "compare-notes", heading: "Keep notes before deciding", paragraphs: ["Write down the proposed support, costs, contact arrangements and questions still unanswered. Involve the person receiving care as much as possible. Ask for clarification when two providers describe different arrangements; their prices may not cover the same service. Confirm suitability and availability directly before relying on a plan."], sourceKeys: ["nhs-homecare", "cqc-choosing"] },
    ], faqs: [
      { question: "Is a Good rating all I need to check?", answer: "It is one piece of independent information. Read the relevant service report and ask how the provider would meet the person's specific needs, preferences and practical arrangements.", sourceKeys: ["cqc-choosing", "cqc-ratings"] },
      { question: "What should I ask about before agreeing to care?", answer: "Ask about suitability, carers, visits, communication, costs, extra charges and the written agreement. Keep the answers so the person and family can consider them together.", sourceKeys: ["nhs-homecare"] },
    ], relatedServices: [{ label: "Understand Libra's approach", href: "/about" }, { label: "Explore care services", href: "/services" }], relatedSlugs: ["care-quality-regulation", "understanding-care-fees"],
  },
  {
    slug: "care-quality-regulation", title: "CQC ratings and care quality", category: "Care quality", scope: "England", sourcesCheckedOn: checked,
    summary: "What a rating tells you, why the correct location matters and where to read independent information.",
    quickAnswer: "CQC publishes ratings and reports to help people understand care services in England. Check the exact registered service, the scope and date of its report, and the detailed findings. Registration and a published inspection rating are different things.", quickSourceKeys: ["cqc-ratings", "cqc-todmorden", "cqc-burnley"],
    sections: [
      { id: "ratings", heading: "Understand the rating in context", paragraphs: ["CQC uses four rating levels: Outstanding, Good, Requires improvement and Inadequate. Many reports include an overall rating, alongside information about different aspects of care. Read the explanation and findings, not only the badge. The current official record is the place to check for later changes."], sourceKeys: ["cqc-ratings"] },
      { id: "location", heading: "A location's rating is not every branch's rating", paragraphs: ["A provider may operate more than one registered location. Libra's Todmorden and Burnley services have separate CQC records. Check the record for the service you are considering; do not transfer a rating from one location to another or treat a registration date as an inspection outcome. Our homepage links to both official records separately."], sourceKeys: ["cqc-todmorden", "cqc-burnley", "cqc-ratings"] },
      { id: "your-questions", heading: "Use the report to start a conversation", paragraphs: ["CQC's care-choice guidance asks whether services are safe, effective, caring, responsive and well-led. Ask the provider how the report relates to the person's needs and how concerns can be raised. Independent reports and your own practical questions are useful together; neither confirms current visit availability."], sourceKeys: ["cqc-choosing"] },
    ], faqs: [
      { question: "Does registration mean a service has been rated Good?", answer: "No. Registration and a published assessment rating are distinct. Look for an explicit rating on the correct official record and read the associated report.", sourceKeys: ["cqc-burnley", "cqc-ratings"] },
      { question: "Where should I check Libra's current CQC information?", answer: "Follow the separate Todmorden and Burnley location links in the sources below or the branch-specific section on our homepage. The official records are the source for current regulatory status.", sourceKeys: ["cqc-todmorden", "cqc-burnley"] },
    ], relatedServices: [{ label: "Find your local branch", href: "/areas" }, { label: "Ask the Libra team", href: "/contact" }], relatedSlugs: ["choosing-a-care-provider", "starting-home-care"],
  },
  {
    slug: "support-for-relatives", title: "Support and guidance for relatives", category: "Supporting someone", scope: "England", sourcesCheckedOn: checked,
    summary: "Help with family conversations, shared planning and looking after yourself while supporting someone else.",
    quickAnswer: "Begin by listening to what matters to the person receiving support, then make the practical responsibilities clear. If you regularly care for someone, ask about a carer's assessment for your own needs as well as a needs assessment for theirs.", quickSourceKeys: ["cqc-choosing", "nhs-carers"],
    sections: [
      { id: "conversation", heading: "Make space for the person's voice", paragraphs: ["Care-choice guidance emphasises involving the person and treating them with dignity and respect. Ask what help they would welcome and which parts of daily life they want to manage themselves. Family members can bring useful observations, but the conversation should not become only a discussion about the person without their involvement."], sourceKeys: ["cqc-choosing"] },
      { id: "shared-plan", heading: "Write down who is doing what", paragraphs: ["A short shared plan can help when several relatives or other carers are involved. Include essential contacts, agreed responsibilities and what should happen if the usual person is unavailable. Keep personal information secure and share it through appropriate channels. For an initial website enquiry, give a broad outline rather than sending detailed medical or financial records."], bullets: ["Who is the main contact for routine arrangements?", "Which tasks are already covered and where is extra help needed?", "Who can step in if a family carer becomes unavailable?"], sourceKeys: ["nhs-respite", "nhs-homecare"] },
      { id: "your-support", heading: "Ask for support for yourself", paragraphs: ["A carer's assessment looks at how caring affects your health, work, free time and relationships. It is separate from the assessment of the person you support and can be requested from the council. You can ask about both assessments together. Support for relatives might also include a planned break or information about local services."], sourceKeys: ["nhs-carers", "nhs-respite"] },
    ], faqs: [
      { question: "Do I have to call myself a carer to ask for help?", answer: "You may think of yourself primarily as a partner, relative or friend. If you regularly support someone because they are ill, older or disabled, ask the council whether a carer's assessment would help clarify support for you.", sourceKeys: ["nhs-carers", "nhs-dementia"] },
      { question: "Should I send a full medical history in a first enquiry?", answer: "Start with a broad outline of the support you are looking for and your area. Ask how any information needed for an assessment should be shared securely; do not send detailed medical or financial records in a general enquiry.", sourceKeys: ["nhs-homecare", "nhs-respite"] },
    ], relatedServices: [{ label: "Explore companionship", href: "/services/companionship" }, { label: "Talk about care needs", href: "/contact" }], relatedSlugs: ["respite-care", "dementia-support"],
  },
];

export function findGuide(slug: string) { return careGuides.find(guide => guide.slug === slug); }
export function getGuideSources(guide: CareGuide) {
  const keys = new Set([...guide.quickSourceKeys, ...guide.sections.flatMap(section => section.sourceKeys), ...guide.faqs.flatMap(faq => faq.sourceKeys)]);
  return [...keys].map(key => guidanceSources[key]).sort((a, b) => a.id - b.id);
}
