import { Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import NewCard from "@/components/elements/newCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/assets/projects";
import { GetTitle } from "@/utils/title";
import { GetDescription } from "@/utils/description";

const Projects = () => {
  return (
    <NewCard title="Projects" viewAll link="/projects">
      <div className="flex flex-col gap-4">
        {projects.map((item, idx) => {
          const isExternal = item.link.startsWith("http");
          return (
            <Card key={`${item.title}-${idx}`} className="p-6">
              <div className="flex items-center justify-between gap-4 pb-2">
                {GetTitle(item.title)}
                <Button asChild variant="outline" size="icon">
                  <Link
                    to={item.link}
                    target={isExternal ? "_blank" : undefined}
                    title={item.title}
                  >
                    <LinkIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="pt-2">
                <GetDescription text={item.description} />
              </div>
            </Card>
          );
        })}
      </div>
    </NewCard>
  );
};

export default Projects;
