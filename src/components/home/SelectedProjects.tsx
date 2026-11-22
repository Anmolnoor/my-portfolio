import { projects, type Project } from "@/assets/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeader from "./SectionHeader";

// Pinned so the homepage backs the hero line, whatever order /projects uses.
const HOMEPAGE_TITLES = ["skep", "Foundation CLI", "Beekeeper"];

const pinned = HOMEPAGE_TITLES.map((t) =>
  projects.find((p) => p.title === t),
).filter((p): p is Project => Boolean(p));

const featured =
  pinned.length === HOMEPAGE_TITLES.length
    ? pinned
    : projects.filter((p) => p.featured).slice(0, 3);

const SelectedProjects = () => {

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
