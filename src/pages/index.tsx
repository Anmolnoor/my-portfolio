import { ActionIcon, Card, Group, Stack, Text } from "@mantine/core";

import Hero from "./hero";
import { FunFacts, Interests } from "./other";
import { Link } from "react-router-dom";
import {
  IconArticle,
  IconBrandPocket,
  IconFileDownload,
  IconLink,
} from "@tabler/icons-react";

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
  return (
    <Card withBorder p={"sm"}>
      <Stack gap={"lg"}>
        <Hero />
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
