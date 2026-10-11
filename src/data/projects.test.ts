import { describe, expect, it } from "vitest";
import { projects, portfolioDownload } from "./projects";

describe("portfolio publication requirements", () => {
  it("never includes the excluded year in project facts or download names", () => {
    expect(JSON.stringify({ projects, portfolioDownload })).not.toContain("2024");
  });
  it("has seven actual projects and their 65 extracted images", () => {
    expect(projects).toHaveLength(7);
    expect(projects.reduce((sum, project) => sum + project.gallery.length, 0)).toBe(65);
    expect(projects.map(project => project.name)).toContain("Projekt Knežija");
  });
});