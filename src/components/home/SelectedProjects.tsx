import { projects } from "@/assets/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeader from "./SectionHeader";

const SelectedProjects = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section>
      <SectionHeader
        title="Selected Projects"
        linkLabel="View all projects"
        linkTo="/projects"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default SelectedProjects;
