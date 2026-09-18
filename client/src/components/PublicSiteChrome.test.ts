import { describe, expect, it } from "vitest";
import { publicFooterGroups, publicNavigationGroups } from "./PublicSiteChrome";

describe("public navigation architecture", () => {
  it("uses a concise primary navigation with one destination per labelled link", () => {
    expect(publicNavigationGroups).toHaveLength(4);
    expect(publicNavigationGroups.every((group) => group.links.length === 4)).toBe(true);
    const labels = publicNavigationGroups.flatMap((group) => group.links.map((link) => link.label));
    expect(new Set(labels).size).toBe(labels.length);
  });

  it("keeps duplicate people and evidence subroutes out of the global footer taxonomy", () => {
    const routes = publicFooterGroups.flatMap((group) => group.links.map((link) => link.href));
    expect(routes).not.toContain("/network/leadership");
    expect(routes).not.toContain("/network/team");
    expect(routes).not.toContain("/network/key-management");
    expect(routes).not.toContain("/evidence/university-acceptance");
    expect(routes).not.toContain("/evidence/university-partnerships");
  });
});
