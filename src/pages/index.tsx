import {
  ActionIcon,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

import Hero from "./hero";
import { FunFacts, Interests } from "./other";
import { Link } from "react-router-dom";
import {
  IconArticle,
  IconBrandPocket,
  IconFileDownload,
  IconLink,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { projects } from "../assets/projects";
import NewCard from "../components/elements/newCard";

const navigationOptions = [
  {
    title: "Tech Pocket",
    link: "/pocket",
    icon: <IconBrandPocket size="1.2rem" stroke={1.1} />,
  },
  {
    title: "Blogs",
    link: "/blog",
    icon: <IconArticle size="1.2rem" stroke={1.1} />,
  },
  {
    title: "Résumé - CV",
    link: "/",
    icon: <IconFileDownload size="1.2rem" stroke={1.1} />,
  },
];

const HomePage = () => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  const latestProjects = projects.slice(0, 2);

  return (
    <Card withBorder p={"sm"}>
      <Stack gap={"lg"}>
        <Hero />
        <NewCard title={"Latest Projects"}>
          <SimpleGrid cols={isMobile ? 1 : 2} spacing={"md"}>
            {latestProjects.map((item) => (
              <Card
                component={Link}
                withBorder
                title={"Latest Projects"}
                to={item.link}
                target="_blank"
              >
                <Group gap={"xs"} align="center" justify="space-between">
                  <Text fw={700} ta={"left"}>
                    {item.title}
                  </Text>
                  <ActionIcon
                    component={Link}
                    to={item.link}
                    variant="default"
                    radius={"md"}
                    title={item.title}
                    size="sm"
                    color={"blue"}
                    target="_blank"
                  >
                    <IconLink size=".8rem" stroke={1} />
                  </ActionIcon>
                </Group>
                <Text size="sm" ta={"center"} c={"dimmed"}>
                  {item.description.slice(0, 40) + "..."}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </NewCard>
        <Interests />
        <FunFacts />
        {navigationOptions.map((option) => (
          <Card component={Link} to={option.link} withBorder px={"md"}>
            <Group gap={"lg"} align="center" justify="space-between">
              <Group gap={"xs"} align="center">
                {option.icon}
                <Text ta={"center"}>{option.title}</Text>
              </Group>
              <ActionIcon
                component={Link}
                to={option.link}
                variant="default"
                radius={"md"}
                title={option.title}
                size="lg"
                color={"blue"}
              >
                <IconLink size="1.2rem" stroke={1.1} />
              </ActionIcon>
            </Group>
          </Card>
        ))}
      </Stack>
    </Card>
  );
};

export default HomePage;
