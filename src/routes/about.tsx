import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "About — L’Interior" },
      {
        name: "description",
        content:
          "Lucia Raić is the interior designer behind L’Interior in Zagreb, working on apartments, houses and small commercial spaces across Croatia.",
      },
      { property: "og:title", content: "About — L’Interior" },
      {
        property: "og:description",
        content:
          "Lucia Raić, founder of L’Interior in Zagreb: a small number of projects at a time, planned carefully before anyone picks up a tool.",
      },
    ],
  }),
  component: AboutPage,
});

const tools = ["AutoCAD", "SketchUp", "V-Ray", "Adobe Photoshop and InDesign"];

const services = [
  "Full interior design, measurement to documentation",
  "Floor plan and space planning only",
  "3D visualization for existing designs",
  "One-off consultation for a space you're designing yourself",
];

function AboutPage() {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <Reveal>
        <p className="label">About</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">Lucia Raić</h1>
      </Reveal>

      <Reveal className="mt-14 grid gap-6 md:grid-cols-12" delay={80}>
        <div className="space-y-6 text-muted-foreground md:col-span-7 md:col-start-6">
          <p className="max-w-prose">
            I'm an interior designer based in Zagreb. I started L’Interior after several years in a
            larger studio, where I learned that the difference between a good interior and a
            disappointing one is almost never the budget — it's how carefully the work was planned
            before anyone picked up a tool.
          </p>
          <p className="max-w-prose">
            I work on a small number of projects at a time, which means I'm the person who measures
            your space, draws it, renders it and answers your emails. I prefer materials that age
            well over materials that photograph well, and I'd rather spend an extra week on a floor
            plan than fix a layout after it's built.
          </p>
          <p className="max-w-prose">
            Most of my work is residential — apartments in Zagreb's older buildings, family houses,
            the occasional small café or office. I work across Croatia and remotely when the
            drawings allow it.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-24 grid gap-6 md:grid-cols-12">
        <h2 className="text-2xl md:col-span-5">How I work with clients</h2>
        <p className="max-w-prose text-muted-foreground md:col-span-6 md:col-start-7">
          I'm straightforward about what's possible within a budget and I'll tell you when something
          you want is a bad idea. You'll get answers within a day or two, drawings when I said
          they'd arrive, and no surprises in the final documentation.
        </p>
      </Reveal>

      <Reveal className="mt-20 grid gap-6 md:grid-cols-12">
        <h2 className="text-2xl md:col-span-5">Tools</h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-muted-foreground md:col-span-6 md:col-start-7">
          {tools.map((tool, index) => (
            <li key={tool}>
              {tool}
              {index < tools.length - 1 ? <span className="ml-4">·</span> : null}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-20 grid gap-6 md:grid-cols-12">
        <h2 className="text-2xl md:col-span-5">Services</h2>
        <ul className="space-y-3 text-muted-foreground md:col-span-6 md:col-start-7">
          {services.map((service) => (
            <li key={service} className="max-w-prose">
              {service}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
