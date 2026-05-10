import { cn } from "@/lib/utils";

interface TitleWithSubTitleProps {
  title: string;
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  subTitle: string;
}

const headingClasses: Record<number, string> = {
  1: "text-4xl md:text-5xl font-bold",
  2: "text-3xl md:text-4xl font-bold",
  3: "text-2xl md:text-3xl font-semibold",
  4: "text-xl md:text-2xl font-semibold",
  5: "text-lg font-semibold",
  6: "text-base font-semibold",
};

const TitleWithSubTitle = ({
  order = 2,
  title,
  subTitle,
}: TitleWithSubTitleProps) => {
  const Tag = `h${order}` as keyof JSX.IntrinsicElements;
  return (
    <div className="flex flex-col items-center gap-3">
      <Tag className={cn("tracking-tight", headingClasses[order])}>{title}</Tag>
      <p className="w-3/4 text-center text-lg text-muted-foreground">
        {subTitle}
      </p>
    </div>
  );
};

export default TitleWithSubTitle;
