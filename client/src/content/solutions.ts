export type SolutionKind = "pathways" | "institutions" | "schools";

export type Solution = {
  kind: SolutionKind;
  slug: string;
  index: string;
  route: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  intro: string;
  audienceLabel: string;
  audience: string[];
  components: Array<{ title: string; detail: string }>;
  outcome: string;
};

export const solutions: Solution[] = [
  {
    kind: "pathways", slug: "global-schooling", index: "01", route: "Borderless academic route", eyebrow: "Learning pathway", title: "Global schooling", emphasis: "without a fixed border.",
    intro: "An academic route that gives learners more flexibility in how, where and at what pace they progress, while keeping future destinations in view.",
    audienceLabel: "Designed for", audience: ["Learners seeking internationally recognised options", "Families balancing geography, continuity and academic ambition", "Educators building more flexible school models"],
    components: [{ title: "Curriculum fit", detail: "Explore international curriculum options and align them to the learner’s intended next step." }, { title: "Continuity", detail: "Create a route that can travel across relocations, life changes and different learning contexts." }, { title: "Progression", detail: "Keep university, career and lifelong-learning decisions connected to academic planning." }],
    outcome: "A considered path from current context to a more mobile academic future.",
  },
  {
    kind: "pathways", slug: "alternative-pathways", index: "02", route: "Flexible progression route", eyebrow: "Learning pathway", title: "Alternative pathways", emphasis: "built around momentum.",
    intro: "A more flexible route for learners whose goals, pace or context do not fit a single prescribed education model.",
    audienceLabel: "Designed for", audience: ["Learners returning to learning in a new context", "Families seeking a more flexible progression model", "Advisers supporting non-linear learner journeys"],
    components: [{ title: "Route design", detail: "Start from the learner’s destination and work backwards through viable education options." }, { title: "Pace with purpose", detail: "Balance flexibility with clear milestones, supported decisions and meaningful progression." }, { title: "Portable next steps", detail: "Keep skills, credentials and future options visible throughout the journey." }],
    outcome: "A route that respects different starting points without lowering the horizon.",
  },
  {
    kind: "pathways", slug: "international-curriculum", index: "03", route: "Recognised curriculum route", eyebrow: "Learning pathway", title: "International curriculum", emphasis: "with a destination in mind.",
    intro: "A curriculum-led planning route that connects academic choices to the learner’s intended university, career and global-mobility future.",
    audienceLabel: "Designed for", audience: ["Learners comparing internationally recognised curriculum options", "Parents seeking clarity before a school transition", "Institutions broadening programme choice"],
    components: [{ title: "Academic direction", detail: "Clarify how a curriculum option fits the learner’s strengths, interests and next academic transition." }, { title: "Global context", detail: "Consider pathway portability, future destinations and local or international learning environments." }, { title: "Informed decisions", detail: "Make programme choice part of an ongoing plan rather than a one-time administrative decision." }],
    outcome: "A curriculum choice made in the context of a longer learning journey.",
  },
  {
    kind: "pathways", slug: "ai-learning", index: "04", route: "Adaptive learning route", eyebrow: "Learning pathway", title: "AI-powered learning", emphasis: "with the human in view.",
    intro: "A support route that uses adaptive learning signals to identify the next helpful moment of guidance, practice or extension.",
    audienceLabel: "Designed for", audience: ["Learners who need responsive support", "Families seeking visibility into learning progress", "Schools extending personalised learning beyond the classroom"],
    components: [{ title: "Responsive support", detail: "Use learning patterns to surface an appropriate next action instead of a generic sequence." }, { title: "Educator context", detail: "Keep educator insight and learner agency central to every adaptive recommendation." }, { title: "Progress signals", detail: "Make progress more visible through connected milestones, skill development and reflection." }],
    outcome: "Technology that makes learning support more timely, legible and personal.",
  },
  {
    kind: "pathways", slug: "future-skills", index: "05", route: "Human + digital capability route", eyebrow: "Learning pathway", title: "Future skills", emphasis: "connected to real life.",
    intro: "A route that develops human, digital and career-relevant capabilities alongside academic learning rather than after it.",
    audienceLabel: "Designed for", audience: ["Learners preparing for a changing world of work", "Schools integrating employability with academic progress", "Organisations building future-ready capability"],
    components: [{ title: "Digital fluency", detail: "Build confidence with the tools, approaches and habits needed for contemporary work and learning." }, { title: "Human capabilities", detail: "Develop communication, mindset, collaboration and self-direction as visible parts of progress." }, { title: "Career relevance", detail: "Connect skill development to meaningful projects, credentials and future opportunity." }],
    outcome: "A fuller definition of readiness—academic, human and digital.",
  },
  {
    kind: "institutions", slug: "digital-school-infrastructure", index: "01", route: "Institutional solution", eyebrow: "For institutions", title: "Digital school infrastructure", emphasis: "without starting from zero.",
    intro: "A considered route for organisations creating a connected learning experience across campus, virtual delivery, curriculum and learner support.",
    audienceLabel: "Built for", audience: ["Schools expanding beyond physical capacity", "Education groups unifying delivery models", "Mission-led organisations extending access"],
    components: [{ title: "Connected delivery", detail: "Bring learning environments, academic routes and student support into one coherent operating model." }, { title: "Flexible reach", detail: "Extend high-quality learning beyond a single location while maintaining intentional learner journeys." }, { title: "Implementation rhythm", detail: "Move from strategic design to practical deployment with clear workstreams and shared milestones." }],
    outcome: "A stronger education model that can serve more learners without losing coherence.",
  },
  {
    kind: "institutions", slug: "ai-learning-deployment", index: "02", route: "Institutional solution", eyebrow: "For institutions", title: "AI learning deployment", emphasis: "designed for educators.",
    intro: "A strategic way to introduce adaptive learning capability that amplifies educator insight and makes support more responsive at scale.",
    audienceLabel: "Built for", audience: ["Schools seeking more personalised learner support", "Networks building shared learning intelligence", "Public programmes planning digital-first access"],
    components: [{ title: "Learning design", detail: "Define the teaching, assessment and learner-experience moments where adaptive capability adds value." }, { title: "Human governance", detail: "Keep educators and institutional context central to how learning insights are understood and acted upon." }, { title: "Scalable support", detail: "Create a repeatable support model that can grow with a school, group or wider programme." }],
    outcome: "More responsive learning support with educator agency intact.",
  },
  {
    kind: "institutions", slug: "national-education-programmes", index: "03", route: "Institutional solution", eyebrow: "For institutions", title: "National education programmes", emphasis: "built for reach.",
    intro: "An education and skills infrastructure route for governments, NGOs and public-interest organisations working across regions and populations.",
    audienceLabel: "Built for", audience: ["Government education initiatives", "NGO and development programmes", "Large-scale public learning deployments"],
    components: [{ title: "Programme architecture", detail: "Connect curriculum, delivery, learner support and credential pathways around an agreed public purpose." }, { title: "Regional context", detail: "Design for the needs, constraints and opportunity structures of specific communities and geographies." }, { title: "Measurable delivery", detail: "Create a shared framework for implementation milestones, access signals and programme learning." }],
    outcome: "A more connected way to deliver education and skills opportunity at scale.",
  },
  {
    kind: "institutions", slug: "skills-development-initiatives", index: "04", route: "Institutional solution", eyebrow: "For institutions", title: "Skills development initiatives", emphasis: "with opportunity attached.",
    intro: "A route for organisations that want employability, human capability and digital skills to be designed as a connected learning system.",
    audienceLabel: "Built for", audience: ["Education groups strengthening learner outcomes", "Employers and social-impact programmes", "Institutions linking learning to career mobility"],
    components: [{ title: "Capability map", detail: "Identify the human, digital and job-relevant capabilities learners need to build over time." }, { title: "Partner-enabled delivery", detail: "Structure skills experiences around relevant education and workforce ecosystem contributions." }, { title: "Progression pathways", detail: "Connect learning activity to recognised milestones and a clearer next step for participants." }],
    outcome: "Skills provision designed as a bridge to opportunity, not a disconnected add-on.",
  },
  {
    kind: "schools", slug: "global-ecole", index: "01", route: "Global Ecole / hybrid K–12 route", eyebrow: "Global Ecole", title: "A school for a", emphasis: "world in motion.",
    intro: "Global Ecole is AetherMind’s proposed global hybrid K–12 school model: a future-facing learning ecosystem designed to connect flexible curriculum pathways, faculty-led learning, live support and learning intelligence across geographies.",
    audienceLabel: "Designed around", audience: ["Learners seeking a more flexible, globally connected school experience", "Families balancing continuity, mobility and future readiness", "Education partners exploring a hybrid-school model for their communities"],
    components: [{ title: "Hybrid learning rhythm", detail: "A planned blend of live learning, self-directed study and human support designed to give each learner a clearer weekly rhythm." }, { title: "Curriculum pathways", detail: "A future multi-curriculum environment that can help families compare and select appropriate K–12 options, subject to programme availability and required approvals." }, { title: "Learning Intelligence System", detail: "A learner-centred intelligence layer intended to make progress, support needs and next-step conversations more visible to learners, families and educators." }],
    outcome: "A proposed K–12 school ecosystem designed to help learning travel further while keeping human support in view.",
  },
];

export function getSolution(kind: SolutionKind, slug?: string) {
  return solutions.find((solution) => solution.kind === kind && solution.slug === slug);
}
