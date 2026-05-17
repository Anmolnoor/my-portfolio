import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  linkLabel?: string;
  linkTo?: string;
}

const SectionHeader = ({ title, linkLabel, linkTo }: SectionHeaderProps) => {
  return (
    <div className="mb-3 flex items-center justify-between">
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
        {title}
      </span>
      {linkLabel && linkTo && (
        <a
          href={linkTo}
          className="inline-flex items-center gap-1 font-mono text-sm font-medium text-primary hover:underline"
        >
          {linkLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
