import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconTileProps {
  children: ReactNode;
  variant?: "neutral" | "blue" | "green";
  className?: string;
}

const variantClasses: Record<NonNullable<IconTileProps["variant"]>, string> = {
  neutral: "border-border bg-muted text-foreground",
  blue: "border-primary/20 bg-primary/10 text-primary",
  green:
    "border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-400",
};

const IconTile = ({
  children,
  variant = "neutral",
  className,
}: IconTileProps) => (
  <div
    className={cn(
      "flex h-11 w-11 shrink-0 items-center justify-center rounded-md border",
      variantClasses[variant],
      className
    )}
  >
    {children}
  </div>
);

export default IconTile;
