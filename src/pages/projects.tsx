import PageHeader from "@/components/elements/PageHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/assets/projects";

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        description="A mix of products in production, side projects, and experiments — listed roughly recent-first."
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
            Everything else
          </span>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Projects;
