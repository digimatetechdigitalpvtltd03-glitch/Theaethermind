export const pathfinderPersonas = ["learner", "parent", "institution", "government"] as const;
export const pathfinderDestinations = ["global-schooling", "alternative-pathways", "international-curriculum", "ai-learning", "future-skills", "institutional-transformation"] as const;
export const pathfinderStages = ["exploring", "ready-to-start", "expanding-an-offering", "national-programme"] as const;

export type PathfinderPersona = (typeof pathfinderPersonas)[number];
export type PathfinderDestination = (typeof pathfinderDestinations)[number];
export type PathfinderStage = (typeof pathfinderStages)[number];

export type PathRecommendation = {
  title: string;
  route: string;
  summary: string;
};

const routeByDestination: Record<PathfinderDestination, PathRecommendation> = {
  "global-schooling": {
    title: "Global Schooling Pathway",
    route: "global-schooling",
    summary: "A borderless academic route that connects international curriculum options with a learner's next destination.",
  },
  "alternative-pathways": {
    title: "Alternative Pathways",
    route: "alternative-pathways",
    summary: "A more flexible route for learners building momentum outside one prescribed model.",
  },
  "international-curriculum": {
    title: "International Curriculum Route",
    route: "international-curriculum",
    summary: "A curriculum-led path designed to align academic choices with future university and career direction.",
  },
  "ai-learning": {
    title: "AI-Powered Learning Route",
    route: "ai-learning",
    summary: "An adaptive support route that helps identify the next useful learning intervention.",
  },
  "future-skills": {
    title: "Future Skills Route",
    route: "future-skills",
    summary: "A route that develops human, digital and career-relevant capabilities alongside academic learning.",
  },
  "institutional-transformation": {
    title: "Institutional Transformation Route",
    route: "institutional-transformation",
    summary: "A connected education infrastructure route for schools, networks, governments and mission-led organisations.",
  },
};

export function recommendPath(destination: PathfinderDestination, persona: PathfinderPersona): PathRecommendation {
  if (persona === "institution" || persona === "government") {
    return routeByDestination["institutional-transformation"];
  }

  return routeByDestination[destination];
}
