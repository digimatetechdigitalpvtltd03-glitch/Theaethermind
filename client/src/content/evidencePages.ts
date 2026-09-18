export type EvidencePageSlug = "affiliations" | "accreditation" | "university-pathways" | "university-acceptance" | "university-partnerships" | "impact-csr" | "case-studies" | "voices";

export type EvidencePageContent = {
  index: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  intro: string;
  perspective: string;
  cards: Array<{ label: string; title: string; copy: string }>;
  sourceNote: string;
  sources: Array<{ label: string; href: string }>;
};

export const evidencePages: Record<EvidencePageSlug, EvidencePageContent> = {
  affiliations: {
    index: "04", eyebrow: "Affiliations & ecosystem", title: "Connection is not", emphasis: "a vague claim.",
    intro: "AetherMind distinguishes between ecosystem relationships, programme routes and institutional affiliations so families and partners can understand what is being represented.",
    perspective: "This page records public ecosystem associations rather than treating every named organisation as an accreditation, endorsement or exclusive delivery partner.",
    cards: [{ label: "Education & skills", title: "Ecosystem contributors", copy: "AetherMind publicly identifies IBM ICE via TransNeuron, Maxme, AOBA, Aether Learning and Routes 2 Roots across distinct education and skills areas." }, { label: "Learning pathways", title: "Route options", copy: "IB, Cambridge, US Diploma, GED and NIOS are shown as pathway labels; families should confirm current availability and requirements before deciding." }, { label: "Public record", title: "A clear distinction", copy: "Affiliation, partnership, curriculum option and accredited programme are presented as different types of relationship." }],
    sourceNote: "The page reflects the named ecosystem and pathway information on AetherMind’s public website. It does not create additional affiliation, endorsement or accreditation claims.", sources: [{ label: "AetherMind ecosystem", href: "https://theaethermind.com/ecosystem/" }],
  },
  accreditation: {
    index: "05", eyebrow: "Accreditation & recognition", title: "Recognition should be", emphasis: "easy to verify.",
    intro: "AetherMind is committed to making the provider, route and recognition context clear before a learner or institution acts on an academic option.",
    perspective: "Accreditation belongs to the accredited institution, provider or programme—not automatically to an ecosystem platform. The proof record should therefore name the source, credential and verification route.",
    cards: [{ label: "Stated route", title: "US High School Diploma", copy: "AetherMind’s public site identifies this pathway as accredited through OnFire Academy. Prospective learners should verify current eligibility and recognition directly with the named provider." }, { label: "Curriculum options", title: "International pathway labels", copy: "IB, Cambridge, US Diploma, GED and NIOS appear as pathway options. Their availability and acceptance depend on the relevant provider and destination requirements." }, { label: "Future record", title: "Verification first", copy: "A dedicated evidence register can be populated with programme names, issuing bodies, links and validity dates once approved documentation is supplied." }],
    sourceNote: "No unverified accreditation, regulatory approval or institutional recognition is claimed on this page.", sources: [{ label: "AetherMind public website", href: "https://theaethermind.com/" }],
  },
  "university-pathways": {
    index: "06", eyebrow: "University pathways", title: "A future choice needs", emphasis: "a clearer route.",
    intro: "The university journey begins before an application. It starts with visible curriculum context, portable credentials, learner strengths and a considered next step.",
    perspective: "AetherMind can help learners connect education choices to future university direction. Any claim about university acceptance, progression or formal partnership will appear only after it is supported by approved, attributable evidence.",
    cards: [{ label: "01 / Readiness", title: "Curriculum context", copy: "Compare academic route options in the context of the learner’s goals and the requirements of intended destinations." }, { label: "02 / Direction", title: "A planned next step", copy: "Connect subject choice, skills development and learner evidence to a longer education or career conversation." }, { label: "03 / Proof", title: "Acceptance evidence", copy: "Verified university offers, acceptances or formal agreements can be published here with source, cohort and year once confirmed." }],
    sourceNote: "This page does not claim university acceptance rates, admissions outcomes or formal university partnerships without verifiable source material.", sources: [{ label: "AetherMind learning pathways", href: "https://theaethermind.com/learning-pathways/" }],
  },
  "university-acceptance": {
    index: "06A", eyebrow: "University acceptance", title: "Acceptance is a", emphasis: "recorded outcome.",
    intro: "AetherMind treats a university offer, acceptance or progression result as a specific learner record—not a broad marketing statistic.",
    perspective: "Where an approved learner outcome is published, it should identify the issuing institution, programme or cohort, year and the permitted level of attribution. Until that evidence is supplied, this route explains the publication standard rather than implying a result.",
    cards: [{ label: "01 / Evidence", title: "Source before statement", copy: "Acceptance information should be linked to an approved offer or outcome record and never inferred from a curriculum route alone." }, { label: "02 / Context", title: "Cohort & year matter", copy: "A useful outcome explains whose route it represents, when it occurred and which qualifications or pathway conditions applied." }, { label: "03 / Care", title: "Privacy protected", copy: "Learner identities and personal application information are shared only with documented consent and appropriate context." }],
    sourceNote: "No university offer, acceptance rate, destination list or admissions outcome has been added without verifiable, approved source material.", sources: [{ label: "AetherMind learning pathways", href: "https://theaethermind.com/learning-pathways/" }],
  },
  "university-partnerships": {
    index: "06B", eyebrow: "University partnerships", title: "A partnership needs", emphasis: "a clear role.",
    intro: "A university relationship may take many forms—from learner information and progression dialogue to a formal institutional agreement. Those relationships should never be collapsed into one generic claim.",
    perspective: "AetherMind will present university partnerships only with a named institution, defined relationship type, dated source and appropriate approval. This route creates the evidence structure for those disclosures.",
    cards: [{ label: "01 / Relationship", title: "Name the arrangement", copy: "Clarify whether a relationship is exploratory, informational, pathway-based, programme-specific or formal and contractual." }, { label: "02 / Scope", title: "Make the route legible", copy: "State the learners, programmes, geography and time period to which the documented relationship applies." }, { label: "03 / Verification", title: "Publish the source", copy: "Link to approved announcements, official university material or jointly confirmed statements before publicising a partnership." }],
    sourceNote: "This page does not claim an existing university partnership. It will publish named relationships only after approved source documentation is available.", sources: [{ label: "AetherMind learning pathways", href: "https://theaethermind.com/learning-pathways/" }],
  },
  "impact-csr": {
    index: "07", eyebrow: "Impact · CSR · NGOs", title: "Quality education should", emphasis: "reach further.",
    intro: "AetherMind publicly invites global organisations, CSR teams and NGOs to explore inclusive, equitable, digital-first learning and skills programmes aligned to UN Sustainable Development Goal 4.",
    perspective: "We frame this as alignment, not endorsement by the United Nations. Each project should establish its own scope, delivery partners, safeguarding, evidence and outcome-reporting approach.",
    cards: [{ label: "Priority access", title: "Girls’ education", copy: "AetherMind’s public impact page identifies priority access programmes, including Afghanistan, as an area of focus." }, { label: "Regional reach", title: "Emerging markets", copy: "The public impact page describes scalable reach ambitions across Africa and South Asia." }, { label: "Programme design", title: "CSR & NGO delivery", copy: "AetherMind describes turnkey education and skilling programmes for social impact, supported by an agreed delivery and reporting plan." }, { label: "Evidence", title: "Impact that can be reported", copy: "The public impact page describes verified credentials and transparent outcome reporting as a delivery intention; project-level evidence should be published case by case." }],
    sourceNote: "AetherMind’s SDG 4 and impact statements are attributed to its public Impact & CSR page. UN SDG 4 provides the independent global goal framing.", sources: [{ label: "AetherMind Impact & CSR", href: "https://theaethermind.com/impact-csr/" }, { label: "UN Sustainable Development Goal 4", href: "https://sdgs.un.org/goals/goal4" }],
  },
  "case-studies": {
    index: "08", eyebrow: "Evidence stories", title: "A case study should", emphasis: "show its working.",
    intro: "AetherMind will publish case studies as a traceable account of context, intervention, evidence and learning—not as a selective highlight reel.",
    perspective: "Until approved stories, measured outcomes and consented client attribution are available, this page presents the evidence standard used to prepare every published case study.",
    cards: [{ label: "01 / Context", title: "Start with the need", copy: "Name the learner, school, community or programme context and the specific challenge being addressed." }, { label: "02 / Delivery", title: "Describe the route", copy: "Make the programme model, contributors, timeline and delivery conditions transparent." }, { label: "03 / Evidence", title: "Separate signals from claims", copy: "Show the measurement source, date range, limitation and attributable outcome rather than inventing a headline result." }],
    sourceNote: "No fictional client, outcome statistic, quote or project result is included. Published case studies require approved source materials and attribution.", sources: [],
  },
  voices: {
    index: "09", eyebrow: "Community voices", title: "A real voice needs", emphasis: "a real record.",
    intro: "AetherMind will share learner, parent, educator, institution and partner perspectives only when the speaker has approved the wording, attribution and intended audience.",
    perspective: "We do not use composite, invented or anonymous testimonials. This ensures every published voice is useful to the reader and fair to the person or organisation represented.",
    cards: [{ label: "01 / Parents & guardians", title: "Reserved voice record", copy: "Publication hold: an approved parent or guardian perspective requires consented wording and attribution context." }, { label: "02 / Learners", title: "Reserved voice record", copy: "Publication hold: an approved learner perspective requires safeguarding, consented wording and appropriate context." }, { label: "03 / Teachers", title: "Reserved voice record", copy: "Publication hold: an approved educator perspective requires a confirmed role, wording and attribution." }, { label: "04 / Institutions", title: "Reserved voice record", copy: "Publication hold: an approved institutional perspective requires a named relationship and publication approval." }, { label: "05 / Partners", title: "Reserved voice record", copy: "Publication hold: an approved partner perspective requires an agreed account of its contribution and attribution." }],
    sourceNote: "This page is intentionally a publication-ready testimonial framework until real, approved testimonials and attributions are provided.", sources: [],
  },
};

export function getEvidencePage(slug?: string) { return slug ? evidencePages[slug as EvidencePageSlug] : undefined; }
