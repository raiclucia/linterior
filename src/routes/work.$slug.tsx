import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { getNextProject, getProject, stageCaptions } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project, next: getNextProject(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — L’Interior" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — L’Interior`;
    const description = `${project.description} An interior design project by Lucia Raić of L’Interior in ${project.location}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project, next } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-[1500px] px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <Reveal>
        <p className="label">Work</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">{project.name}</h1>
        <p className="label mt-6">{project.metaLine}</p>
      </Reveal>

      <Reveal className="mt-12">
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.alt}
            width={1400}
            height={1050}
            className="h-full w-full object-cover"
          />
        </div>
      </Reveal>

      <div className="mt-20 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <h2 className="text-2xl">The brief</h2>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
          <p className="max-w-prose text-muted-foreground">{project.brief}</p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <h2 className="text-2xl">What we did</h2>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
          <p className="max-w-prose text-muted-foreground">{project.did}</p>
        </Reveal>
      </div>

      <section className="mt-24">
        <Reveal>
          <h2 className="text-2xl">Stages</h2>
        </Reveal>
        <div className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2">
          {stageCaptions.map((caption, index) => (
            <Reveal key={caption} delay={(index % 2) * 100}>
              <figure>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={`${project.name} — ${caption}`}
                    width={1400}
                    height={1050}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="label mt-4">{caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="mt-24">
        <p className="label">Next project</p>
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="mt-3 inline-block text-3xl transition-colors hover:text-accent sm:text-4xl"
        >
          {next.name} →
        </Link>
      </Reveal>
    </article>
  );
}
