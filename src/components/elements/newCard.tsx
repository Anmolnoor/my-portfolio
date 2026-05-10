import type { ReactNode } from "react";
import { Link, useMatches } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TitleWithDot from "./titleWithDot";
import type { links } from "../../router/routes";

interface NewCardProps {
  children: ReactNode;
  title: string;
  viewAll?: boolean;
  link?: links;
}

const NewCard = ({
  viewAll = false,
  link = "/",
  title,
  children,
}: NewCardProps) => {
  const route = useMatches();
  const isHome = route.at(-1)?.pathname === "/";
  const buttonLabel = isHome ? "View All" : "Back";
  const buttonTo = isHome ? link : "/";

  return (
    <Card>
      <div className="flex items-center justify-between p-4">
        <TitleWithDot title={title} />
        {viewAll && (
          <Button asChild variant="outline" size="sm">
            <Link to={buttonTo}>{buttonLabel}</Link>
          </Button>
        )}
      </div>
      <div className="p-4 pt-0">{children}</div>
    </Card>
  );
};

export default NewCard;
