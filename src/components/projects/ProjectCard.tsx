import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import IconTile from "@/components/home/IconTile";
import { getIcon } from "@/components/home/iconRegistry";
import type { Project } from "@/assets/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isExternal = project.link.startsWith("http");
  return (
    <a
      href={project.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group text-inherit no-underline"
    >
      <Card className="h-full p-4 transition-colors group-hover:bg-muted/40">
        <div className="mb-3 flex items-start gap-3">
          <IconTile>{getIcon(project.iconKey)}</IconTile>
          <div className="min-w-0 flex-1 space-y-0.5">
            <p className="font-mono font-bold">{project.title}</p>
            {project.tagline && (
              <p className="font-mono text-sm text-primary">
                {project.tagline}
              </p>
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
                variant="neon"
                className="rounded-sm font-mono font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </Card>
    </a>
  );
};

export default ProjectCard;
