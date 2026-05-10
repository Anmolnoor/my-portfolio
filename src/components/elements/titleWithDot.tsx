interface TitleWithDotProps {
  title: string;
}

const TitleWithDot = ({ title }: TitleWithDotProps) => {
  return (
    <h5 className="flex items-center gap-2 text-base font-semibold">
      <span className="h-2 w-2 rounded-full bg-muted-foreground" />
      {title}
    </h5>
  );
};

export default TitleWithDot;
