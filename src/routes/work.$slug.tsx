import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { ProjectGallery } from "@/components/site/ProjectGallery";
import { getNextProject, getProject } from "@/data/projects";

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
    const description = `${project.name}: interior design portfolio by Lucia Raić of L’Interior. Interior visualizations and project gallery.`;
    return {
      meta: [
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
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
        <p className="label mt-6">{project.type}</p>
      </Reveal>

      <Reveal className="mt-12">
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.alt}
            width={1400}
            height={1050}
            className="h-full w-full object-contain"
          />
        </div>
      </Reveal>

      <section className="mt-24">
        <Reveal>
          <h2 className="text-2xl">Gallery</h2>
        </Reveal>
        <div className="mt-10">
          <ProjectGallery images={project.gallery} name={project.name} />
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
