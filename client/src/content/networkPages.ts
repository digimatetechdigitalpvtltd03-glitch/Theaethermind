export type NetworkPageSlug = "global-partners" | "leadership" | "advisory" | "team" | "key-management";

export type NetworkPageContent = {
  index: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  intro: string;
  perspective: string;
  cards: Array<{ label: string; title: string; copy: string }>;
  sourceNote: string;
};

export const networkPages: Record<NetworkPageSlug, NetworkPageContent> = {
  "global-partners": {
    index: "01", eyebrow: "Global ecosystem", title: "Partnerships that make", emphasis: "more possible.",
    intro: "AetherMind is building a connected education ecosystem across schooling, future skills, global exposure and learning technology. Our public platform identifies the organisations that contribute to specific parts of that route.",
    perspective: "We use a role-led ecosystem map rather than a logo wall. Every named organisation is shown only in the context publicly stated by AetherMind, so prospective partners can begin with clarity.",
    cards: [
      { label: "Skills / digital", title: "IBM ICE, delivered via TransNeuron", copy: "Shown on AetherMind’s public platform in relation to AI, digital and employability skills." },
      { label: "Human capability", title: "Maxme", copy: "Shown in relation to human skills, mindset and personal development." },
      { label: "Global schooling", title: "AOBA & Aether Learning", copy: "Shown in relation to international schooling and US High School Diploma pathway areas." },
      { label: "Global exposure", title: "Routes 2 Roots", copy: "Shown in relation to cultural exchange and global exposure skills." },
    ],
    sourceNote: "Partner roles are attributed to AetherMind’s public ecosystem page. A listing does not imply an unverified accreditation, exclusivity arrangement or current programme availability.",
  },
  leadership: {
    index: "02", eyebrow: "People & leadership", title: "Leading with the", emphasis: "learner in view.",
    intro: "AetherMind’s future is shaped at the intersection of education, technology, institutional strategy and global access. This page establishes the leadership architecture that holds those perspectives together.",
    perspective: "Named leadership biographies should be published only after individual approval. Until then, we make the operating lenses visible rather than inventing titles, histories or credentials.",
    cards: [
      { label: "01 / Education", title: "Learning architecture", copy: "Stewardship of learner pathways, curriculum context and the academic decisions that keep progression meaningful." },
      { label: "02 / Technology", title: "Learning intelligence", copy: "Responsible direction for the technology, insight and support systems that make individual learning more legible." },
      { label: "03 / Ecosystem", title: "Global connection", copy: "Partnership and institutional strategy that connects capabilities across education, skills and opportunity." },
    ],
    sourceNote: "Leadership profiles and biographies are intentionally withheld until verified and approved source material is available for publication.",
  },
  advisory: {
    index: "03", eyebrow: "People & perspective", title: "Advisory that keeps the", emphasis: "route honest.",
    intro: "AetherMind brings learning, institutional and access perspectives together so global education decisions remain grounded in the realities of learners, educators and communities.",
    perspective: "Advisor names, biographies, portraits and individual links are published only after written approval. Until then, the advisory route makes its areas of contribution clear without inventing profiles or credentials.",
    cards: [
      { label: "01 / Learning systems", title: "Curriculum & pedagogy", copy: "Perspective on curriculum, assessment, learning practice and the conditions that help every learner progress with confidence." },
      { label: "02 / Institutional change", title: "Education at scale", copy: "Insight into school, university and organisation change—connecting ambitious strategy with practical, context-aware implementation." },
      { label: "03 / Access & impact", title: "Opportunity in context", copy: "Guidance on equitable reach, local realities and responsible programme delivery across communities and geographies." },
    ],
    sourceNote: "This advisory route is intentionally source-ready. Named advisor profiles, photographs, LinkedIn links and individual email addresses require explicit approval before publication.",
  },
  team: {
    index: "03", eyebrow: "People & practice", title: "A team built around", emphasis: "learning in motion.",
    intro: "AetherMind’s team brings together learning design, learner support, technology, programme delivery and global collaboration around a shared educational purpose.",
    perspective: "Individual names, biographies and images will be added only when they have been approved for publication. Until then, this route makes the team’s contribution to the learner journey visible without inventing personal profiles.",
    cards: [
      { label: "01 / Learner care", title: "Support that stays present", copy: "The people and systems that help make the learner journey legible, responsive and connected to a real next step." },
      { label: "02 / Learning practice", title: "Faculty & design", copy: "Education practitioners who connect curriculum context, teaching craft and future-ready capability." },
      { label: "03 / Global delivery", title: "Programme collaboration", copy: "The operational coordination that helps learners, families, schools and partners work across geographies." },
    ],
    sourceNote: "This team route is a publication-ready framework. Named team members, biographies and photography require approved organisational information and individual consent.",
  },
  "key-management": {
    index: "03", eyebrow: "People & operations", title: "The management layer", emphasis: "behind the route.",
    intro: "A global learning ecosystem requires more than a vision. It depends on clear operational ownership across learners, institutions, programme delivery and ecosystem relationships.",
    perspective: "This public structure is designed to make accountability legible while AetherMind finalises the approved names, biographies and contact routes for its key-management directory.",
    cards: [
      { label: "01 / Learners", title: "Learner success", copy: "The operating rhythm for onboarding, support, progression conversations and the experience around each learner." },
      { label: "02 / Institutions", title: "Programme delivery", copy: "The bridge between institutional intent, implementation detail, educator context and a practical delivery plan." },
      { label: "03 / Network", title: "Partnership operations", copy: "The coordination layer that helps ecosystem contributions connect responsibly to a shared learner or institutional outcome." },
    ],
    sourceNote: "Key-management names, roles and biographies will be published only with approved organisation information and individual consent.",
  },
};

export function getNetworkPage(slug?: string) {
  return slug ? networkPages[slug as NetworkPageSlug] : undefined;
}
