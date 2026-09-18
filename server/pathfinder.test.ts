import { describe, expect, it } from "vitest";
import { recommendPath } from "./pathfinder";

describe("recommendPath", () => {
  it("maps a learner goal to its corresponding pathway", () => {
    expect(recommendPath("global-schooling", "learner")).toMatchObject({
      route: "global-schooling",
      title: "Global Schooling Pathway",
    });
  });

  it("prioritises the institutional route for institution and government personas", () => {
    expect(recommendPath("future-skills", "institution").route).toBe("institutional-transformation");
    expect(recommendPath("ai-learning", "government").route).toBe("institutional-transformation");
  });
});

