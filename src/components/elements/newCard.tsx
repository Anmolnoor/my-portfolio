import { Card, Group } from "@mantine/core";
import React from "react";
import TitleWithDot from "./titleWithDot";

interface NewCardProps {
  children: React.ReactNode;
  title: string;
  viewAll?: boolean;
}

const NewCard = ({ viewAll = false, ...props }: NewCardProps) => {
  return (
    <Card withBorder>
      <Card.Section p="sm">
        <Group position="apart">
          <TitleWithDot title={props.title} />
          {viewAll ? (
            <Card sx={{ cursor: "pointer" }} withBorder p={"xs"}>
              View All
            </Card>
          ) : (
            <Card p={"xl"}> </Card>
          )}
        </Group>
      </Card.Section>
      <Card.Section p="sm">{props.children}</Card.Section>
    </Card>
  );
};

export default NewCard;
