import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

const PageHeader = ({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) => {
  return (
    <header className={cn("mb-8 flex flex-col gap-3", className)}>
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      </div>
      <h1 className="font-mono text-3xl font-bold leading-tight tracking-tight md:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl text-muted-foreground">{description}</p>
      )}
    </header>
  );
};

export default PageHeader;
