export const publicLeadership = {
  name: "Amit Sharma",
  role: "Founder & CEO",
  summary: "Publicly listed as Founder & CEO of AetherMind in a professional profile. The public directory links to that source and routes direct enquiries through AetherMind’s organisation-level contact channel.",
  linkedin: "https://in.linkedin.com/in/amitsharma3979",
  email: "mailto:info@theaethermind.com?subject=Leadership%20enquiry%20for%20AetherMind",
  sourceLabel: "Public professional profile",
};

export const expertiseRoutes = [
  {
    index: "01",
    label: "K–12 discovery",
    title: "Learning starts with possibility.",
    copy: "Teaching, learner support and family context meet at the point where a child’s curiosity becomes a path forward.",
    image: "/manus-storage/aethermind-k12-global-discovery_8c433089.jpg",
    alt: "Globally diverse young children collaborating in a classroom learning activity",
  },
  {
    index: "02",
    label: "Higher education studio",
    title: "Ideas become a direction.",
    copy: "Academic exploration, portfolio evidence and future-facing skills bring university-age learners closer to the work they want to do.",
    image: "/manus-storage/aethermind-higher-ed-global-studio_62768db0.jpg",
    alt: "Globally diverse university-age learners collaborating in a design studio",
  },
  {
    index: "03",
    label: "Corporate learning lab",
    title: "Capability keeps moving.",
    copy: "Practical upskilling connects organisations and professionals to changing tools, roles and opportunities across the world.",
    image: "/manus-storage/aethermind-corporate-learning-lab_886683f1.jpg",
    alt: "Globally diverse professionals participating in a collaborative learning workshop",
  },
] as const;

export const advisoryLenses = [
  { index: "01", title: "Learning systems", copy: "Curriculum, pedagogy and assessment context that keeps a learner route meaningful." },
  { index: "02", title: "Institutional change", copy: "School, university and organisation insight for practical implementation at scale." },
  { index: "03", title: "Access & impact", copy: "Perspective on equitable reach, community context and responsible programme delivery." },
] as const;

/**
 * These are intentionally role-led profile slots, not fictional people records.
 * Names, photos, LinkedIn URLs and individual email addresses activate only with approval.
 */
export const advisoryProfileSlots = [
  { index: "01", focus: "Learning systems", role: "Learning Systems Advisor", name: "Reserved advisor record", summary: "Curriculum, pedagogy and assessment insight held for profile, portrait and attribution approval." },
  { index: "02", focus: "Institutional change", role: "Institutional Change Advisor", name: "Reserved advisor record", summary: "School, university and organisation insight held for profile, portrait and attribution approval." },
  { index: "03", focus: "Access & impact", role: "Access & Impact Advisor", name: "Reserved advisor record", summary: "Equity, community context and responsible delivery insight held for profile, portrait and attribution approval." },
] as const;

export const routeGuildProfileSlots = [
  { index: "01", focus: "K–12 discovery", role: "Learning Practice", name: "Reserved practice record", summary: "A profile record held for approval before a named practitioner, portrait or direct connection is published." },
  { index: "02", focus: "Higher education", role: "Pathway Practice", name: "Reserved practice record", summary: "A profile record held for approval before a named practitioner, portrait or direct connection is published." },
  { index: "03", focus: "Corporate learning", role: "Capability Practice", name: "Reserved practice record", summary: "A profile record held for approval before a named practitioner, portrait or direct connection is published." },
] as const;
