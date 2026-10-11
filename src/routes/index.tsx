import { createFileRoute, Link } from "@tanstack/react-router";

import logo from "@/assets/linterior-logo.png";
import { Reveal } from "@/components/site/Reveal";
import { processSteps, projects } from "@/data/projects";

const heroImage = projects[0]?.image;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "L’Interior — Interior design by Lucia Raić, Zagreb" },
      {
        name: "description",
        content:
          "L’Interior, the studio of Lucia Raić: interior design for apartments, houses and small commercial spaces in Zagreb and across Croatia.",
      },
      { property: "og:title", content: "L’Interior — Interior design by Lucia Raić, Zagreb" },
      {
        property: "og:description",
        content:
          "Rooms that hold up to daily life. Interior design by Lucia Raić — from the first measurement to the drawings your contractor builds from.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="relative">
        <img
          src={heroImage}
          alt="Projekt Knežija — vizualizacija dnevnog boravka"
          width={1920}
          height={1088}
          className="h-[68vh] min-h-[420px] w-full object-cover sm:h-[78vh]"
        />
        <div className="mx-auto max-w-[1500px] px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
          <Reveal>
            <img src={logo} alt="L’Interior" width={795} height={495} className="w-52 sm:w-72" />
            <p className="label mt-4">Interior design by Lucia Raić — Zagreb</p>
          </Reveal>
          <Reveal delay={120} className="mt-10 grid gap-8 md:grid-cols-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl md:col-span-7">
              Rooms that hold up to daily life.
            </h1>
            <div className="md:col-span-5">
              <p className="max-w-prose text-muted-foreground">
                I design apartments, houses and small commercial spaces in Croatia — from the first
                measurement to the drawings your contractor builds from.
              </p>
              <Link to="/work" className="btn-solid mt-8">
                See my work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pt-16 sm:px-10 sm:pt-24 lg:px-16">
        <Reveal className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="label">Selected work</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Recent projects</h2>
          </div>
          <p className="max-w-prose text-muted-foreground md:col-span-6 md:col-start-7">
            A few spaces from the last two years. Each one started with an empty room and a
            conversation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <Link
                to="/work/$slug"
                params={{ slug: project.slug }}
                className="group block"
                aria-label={project.name}
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
                <h3 className="mt-5 text-xl transition-colors group-hover:text-accent">
                  {project.name}
                </h3>
              <p className="label mt-2">{project.type}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <Link to="/work" className="btn-outline">
            View all projects
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pt-24 sm:px-10 sm:pt-36 lg:px-16">
        <Reveal className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="label">How it works</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Five steps, no surprises</h2>
          </div>
          <p className="max-w-prose text-muted-foreground md:col-span-6 md:col-start-7">
            You always know where the project stands and what happens next. Nothing gets built
            before you've seen it.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 80}>
              <p className="label">{step.number}</p>
              <h3 className="mt-3 text-2xl">
                {"shortTitle" in step ? step.shortTitle : step.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.short}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14">
          <Link to="/process" className="quiet-link text-sm">
            Read about the process
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pt-24 sm:px-10 sm:pt-36 lg:px-16">
        <Reveal className="grid gap-8 md:grid-cols-12">
          <h2 className="text-3xl sm:text-4xl md:col-span-5">Have a space in mind?</h2>
          <div className="md:col-span-6 md:col-start-7">
            <p className="max-w-prose text-muted-foreground">
              Send me the floor plan, a few photos, or just a description of what isn't working.
              I'll tell you honestly whether I'm the right fit.
            </p>
            <Link to="/contact" className="btn-solid mt-8">
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
