import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects } from "@/assets/projects";
import IconTile from "./IconTile";
import SectionHeader from "./SectionHeader";
import { getIcon } from "./iconRegistry";

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
        {featured.map((project) => {
          const isExternal = project.link.startsWith("http");
          return (
            <Link
              key={project.title}
              to={project.link}
              target={isExternal ? "_blank" : undefined}
              className="group text-inherit no-underline"
            >
              <Card className="h-full p-4 transition-colors group-hover:bg-muted/40">
                <div className="mb-3 flex items-start gap-3">
                  <IconTile>{getIcon(project.iconKey)}</IconTile>
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <p className="font-bold">{project.title}</p>
                    {project.tagline && (
                      <p className="text-sm text-primary">{project.tagline}</p>
                    )}
                  </div>
                </div>
                <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                  {project.description}
                </p>
                {project.techTags && project.techTags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.techTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-sm font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SelectedProjects;
