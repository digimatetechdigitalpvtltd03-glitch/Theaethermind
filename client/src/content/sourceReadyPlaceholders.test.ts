import { describe, expect, it } from "vitest";
import { evidencePages } from "./evidencePages";
import { advisoryProfileSlots, routeGuildProfileSlots } from "./people";

describe("source-ready placeholder content", () => {
  it("keeps every community-voice audience as an approval-pending slot", () => {
    const voices = evidencePages.voices.cards;

    expect(voices).toHaveLength(5);
    expect(voices.map((card) => card.label)).toEqual([
      "01 / Parents & guardians",
      "02 / Learners",
      "03 / Teachers",
      "04 / Institutions",
      "05 / Partners",
    ]);
    expect(voices.every((card) => card.title === "Reserved voice record")).toBe(true);
    expect(voices.every((card) => /approved|consent|attribution|publication hold/i.test(card.copy))).toBe(true);
  });

  it("does not invent people records for advisory or Route Guild profile cards", () => {
    const profileSlots = [...advisoryProfileSlots, ...routeGuildProfileSlots];

    expect(profileSlots).toHaveLength(6);
    expect(profileSlots.every((profile) => /Reserved (advisor|practice) record/.test(profile.name))).toBe(true);
    expect(profileSlots.every((profile) => /approval|attribution/i.test(profile.summary))).toBe(true);
  });
});
