import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { currentlyBuilding } from "@/assets/currentlyBuilding";
import IconTile from "./IconTile";
import { getIcon } from "./iconRegistry";

const CurrentlyBuilding = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {currentlyBuilding.map((item) => {
        const inner = (
          <Card className="p-4 transition-colors hover:bg-muted/40">
            <div className="flex items-center gap-4">
              <IconTile variant={item.iconKey === "code" ? "neutral" : "green"}>
                {getIcon(item.iconKey)}
              </IconTile>
              <div className="min-w-0 flex-1 space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                    {item.label}
                  </span>
                  <span className="truncate font-mono font-semibold">
                    {item.title}
                  </span>
                </div>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        );
        return item.link ? (
          <Link
            key={item.title}
            to={item.link}
            className="text-inherit no-underline"
          >
            {inner}
          </Link>
        ) : (
          <div key={item.title}>{inner}</div>
        );
      })}
    </div>
  );
};

export default CurrentlyBuilding;
