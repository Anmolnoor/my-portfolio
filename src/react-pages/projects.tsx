import PageHeader from "@/components/elements/PageHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/assets/projects";

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured && !p.archived);
  const archived = projects.filter((p) => !p.featured && p.archived);

  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        description="Local-first agent tooling and products I'm building now, plus earlier work — listed roughly recent-first."
      />

      {featured.length > 0 && (
        <section className="flex flex-col gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Featured
          </span>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="flex flex-col gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
            More projects
          </span>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}

      {archived.length > 0 && (
        <details className="group rounded-xl border border-border bg-card/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
            <span className="flex flex-col gap-1">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Earlier experiments & learning archive
              </span>
              <span className="text-sm text-muted-foreground">
                Bootcamp builds, tutorials, and exercises from when I was
                learning the stack.
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-2">
              <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                {archived.length} earlier projects
              </span>
              <span
                aria-hidden="true"
                className="font-mono text-muted-foreground transition-transform group-open:rotate-90"
              >
                ›
              </span>
            </span>
          </summary>
          <div className="grid grid-cols-1 gap-4 border-t border-border p-5 sm:grid-cols-2 lg:grid-cols-3">
            {archived.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </details>
      )}
    </div>
  );
};

export default Projects;
