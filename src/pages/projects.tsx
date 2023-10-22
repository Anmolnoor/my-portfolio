import NewCard from "../components/elements/newCard";
import { ActionIcon, Card, Group, Stack } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconLink } from "@tabler/icons-react";
import { GetTitle } from "../utils/title";
import { GetDescription } from "../utils/description";
import { projects } from "../assets/projects";
import { randomId } from "@mantine/hooks";

const Projects = () => {
  return (
    <NewCard title={"Projects"} viewAll link={"/projects"}>
      <Stack>
        {projects.map((item) => (
          <Card key={randomId()} withBorder p={"lg"}>
            <Card.Section p={"xs"}>
              <Group justify="space-between">
                {GetTitle(item.title)}
                <ActionIcon
                  component={Link}
                  to={item.link}
                  variant="default"
                  radius={"10%"}
                  title={item.title}
                  size="lg"
                  color={"blue"}
                  target="_blank"
                >
                  <IconLink size="1.2rem" stroke={1.1} />
                </ActionIcon>
              </Group>
            </Card.Section>
            <Card.Section p={"xs"}>
              {GetDescription({ text: item.description })}
            </Card.Section>
          </Card>
        ))}
      </Stack>
    </NewCard>
  );
};

export default Projects;
