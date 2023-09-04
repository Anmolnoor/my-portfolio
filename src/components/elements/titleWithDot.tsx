import { Indicator, Title } from "@mantine/core";

interface TitleWithDotProps {
  title: string;
  size?: number;
  color?: string;
}

const TitleWithDot = ({
  title,
  size = 11,
  color = "gray",
}: TitleWithDotProps) => {
  return (
    <Title order={5} pl={"lg"}>
      <Indicator
        size={size}
        position="middle-start"
        offset={-15}
        color={color}
        withBorder
      >
        {title}
      </Indicator>
    </Title>
  );
};

export default TitleWithDot;
