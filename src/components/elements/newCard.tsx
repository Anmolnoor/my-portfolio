import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TitleWithDot from "./titleWithDot";

interface NewCardProps {
  children: ReactNode;
  title: string;
  viewAll?: boolean;
}

const NewCard = ({ viewAll = false, title, children }: NewCardProps) => {
  return (
    <Card>
      <div className="flex items-center justify-between p-4">
        <TitleWithDot title={title} />
        {viewAll && (
          <Button asChild variant="outline" size="sm">
            <a href="/">Back</a>
          </Button>
        )}
      </div>
      <div className="p-4 pt-0">{children}</div>
    </Card>
  );
};

export default NewCard;
