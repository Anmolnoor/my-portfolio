import { Button, Card, Group } from "@mantine/core";
import React from "react";
import TitleWithDot from "./titleWithDot";
import { links } from "../../router/routes";
import { Link, useMatches } from "react-router-dom";

interface NewCardProps {
  children: React.ReactNode;
  title: string;
  viewAll?: boolean;
  link?: links;
}

const NewCard = ({ viewAll = false, link = "/", ...props }: NewCardProps) => {
  const route = useMatches();
  return (
    <Card withBorder>
      <Card.Section p="sm">
        <Group justify="space-between">
          <TitleWithDot title={props.title} />
          {viewAll ? (
            <Button
              component={Link}
              to={route.at(-1)?.pathname === "/" ? link : "/"}
              variant="default"
              radius={"md"}
              title={route.at(-1)?.pathname === "/" ? "View All" : "Back"}
              size="sm"
              color={"blue"}
            >
              {route.at(-1)?.pathname === "/" ? "View All" : "Back"}
            </Button>
          ) : null}
        </Group>
      </Card.Section>
      <Card.Section p="sm">{props.children}</Card.Section>
    </Card>
  );
};

export default NewCard;
