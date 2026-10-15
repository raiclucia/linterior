import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { projects, portfolioDownload } from "./projects";

describe("portfolio publication requirements", () => {
  it("never includes the excluded year in project facts or download names", () => {
    assert.equal(JSON.stringify({ projects, portfolioDownload }).includes("2024"), false);
  });
  it("has seven actual projects and their 65 extracted images", () => {
    assert.equal(projects.length, 7);
    assert.equal(projects.reduce((sum, project) => sum + project.gallery.length, 0), 65);
    assert.ok(projects.map(project => project.name).includes("Projekt Centar"));
  });
});