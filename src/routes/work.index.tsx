import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { projects, type ProjectType } from "@/data/projects";
import { cn } from "@/lib/utils";

const filters = ["All", "Apartment", "House", "Commercial"] as const;
type Filter = (typeof filters)[number];

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — L’Interior" },
      {
        name: "description",
        content:
          "Residential and commercial interiors by Lucia Raić of L’Interior — apartments, houses and small commercial spaces across Croatia.",
      },
      { property: "og:title", content: "Work — L’Interior" },
      {
        property: "og:description",
        content:
          "Selected interior design projects by Lucia Raić, L’Interior: apartments, houses and commercial spaces in Zagreb and across Croatia.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [active, setActive] = useState<Filter>("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.type === (active as ProjectType));

  return (
    <section className="mx-auto max-w-[1500px] px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <Reveal className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="label">Work</p>
          <h1 className="mt-4 text-4xl sm:text-5xl">Projects</h1>
        </div>
        <p className="max-w-prose text-muted-foreground md:col-span-5 md:col-start-8">
          Residential and commercial interiors across Croatia. Filter by type or scroll through
          everything.
        </p>
      </Reveal>

      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3" role="group" aria-label="Filter projects by type">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={cn(
              "label transition-colors hover:text-accent",
              active === filter && "text-accent",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 100}>
            <Link
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="group block"
              aria-label={`${project.name}, ${project.location}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.alt}
                  width={1400}
                  height={1050}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h2 className="mt-5 text-2xl transition-colors group-hover:text-accent">
                {project.name}
              </h2>
              <p className="label mt-2">
                {project.location} — {project.year} — {project.type} — {project.size}
              </p>
              <p className="mt-3 max-w-prose text-sm text-muted-foreground">
                {project.description}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
