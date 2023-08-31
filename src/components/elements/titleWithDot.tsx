import { Indicator, Text } from "@mantine/core";

interface TitleWithDotProps {
  title: string;
  size?: number;
  color?: string;
}

const TitleWithDot = ({
  title,
  size = 10,
  color = "gray",
}: TitleWithDotProps) => {
  return (
    <Text pl={"lg"}>
      <Indicator
        size={size}
        position="middle-start"
        offset={-15}
        color={color}
        withBorder
      >
        {title}
      </Indicator>
    </Text>
  );
};

export default TitleWithDot;
