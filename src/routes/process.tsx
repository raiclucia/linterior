import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { processSteps } from "@/data/projects";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — L’Interior" },
      {
        name: "description",
        content:
          "How Lucia Raić of L’Interior works: measuring, floor plan, moodboard, 3D visualization and full documentation handoff.",
      },
      { property: "og:title", content: "Process — L’Interior" },
      {
        property: "og:description",
        content:
          "Five steps, no surprises — the interior design process at L’Interior, the Zagreb studio of Lucia Raić.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <Reveal className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="label">Process</p>
          <h1 className="mt-4 text-4xl sm:text-5xl">How I work</h1>
        </div>
        <p className="max-w-prose text-muted-foreground md:col-span-5 md:col-start-8">
          Interior design goes wrong in predictable ways — decisions made too late, drawings the
          contractor can't build from, a result nobody pictured. These five steps exist to prevent
          that. Each one finishes before the next one starts.
        </p>
      </Reveal>

      <ol className="mt-20 space-y-20">
        {processSteps.map((step) => (
          <Reveal as="li" key={step.number} className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="label">{step.number}</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">{step.title}</h2>
            </div>
            <p className="max-w-prose text-muted-foreground md:col-span-6 md:col-start-7">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-28 grid gap-8 md:grid-cols-12">
        <h2 className="text-3xl sm:text-4xl md:col-span-5">What it costs and how long it takes</h2>
        <div className="md:col-span-6 md:col-start-7">
          <p className="max-w-prose text-muted-foreground">
            Scope varies too much for a fixed price list. A small apartment typically runs six to
            ten weeks from first measurement to final documentation; larger projects take longer.
            After a first conversation I'll send you a written proposal with a fixed fee and a
            schedule, so you know both before committing to anything.
          </p>
          <Link to="/contact" className="btn-solid mt-8">
            Start a project
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
