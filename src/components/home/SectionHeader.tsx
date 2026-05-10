import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  linkLabel?: string;
  linkTo?: string;
}

const SectionHeader = ({ title, linkLabel, linkTo }: SectionHeaderProps) => {
  return (
    <div className="mb-3 flex items-center justify-between">
      <span className="text-xs font-bold uppercase tracking-widest text-primary">
        {title}
      </span>
      {linkLabel && linkTo && (
        <Link
          to={linkTo}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {linkLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
