import { Stack, Text, Title, TitleOrder } from "@mantine/core";

interface TitleWithSubTitleProps {
  title: string;
  order?: TitleOrder;
  subTitle: string;
}

const TitleWithSubTitle = ({ order = 2, ...props }: TitleWithSubTitleProps) => {
  return (
    <Stack align="center">
      <Title order={order}>{props.title}</Title>

      <Stack p={0} w={"77%"}>
        <Text size="lg" c="dimmed" ta="center">
          {props.subTitle}
        </Text>
      </Stack>
    </Stack>
  );
};

export default TitleWithSubTitle;
