import { Group, ActionIcon, useMantineColorScheme, Card } from "@mantine/core";
import {
  IconSun,
  IconMoonStars,
  IconHome,
  IconDeviceLaptop,
  IconHistory,
  IconJumpRope,
  IconFileDownload,
  IconBrandPocket,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function NabBar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Card withBorder>
      <Group position="apart" align="center">
        <Group spacing={"xs"} position="left" noWrap>
          <ActionIcon
            component={Link}
            to="/"
            variant="default"
            radius={"10%"}
            title="\"
            size="lg"
            color={"blue"}
          >
            <IconHome size="1.2rem" stroke={1.1} />
          </ActionIcon>
          <ActionIcon
            component={Link}
            to="/projects"
            variant="default"
            radius={"10%"}
            title="Projects"
            size="lg"
            color={"blue"}
          >
            <IconDeviceLaptop size="1.2rem" stroke={1.1} />
          </ActionIcon>
          <ActionIcon
            component={Link}
            to="/experience"
            variant="default"
            radius={"10%"}
            title="Experience"
            size="lg"
            color={"blue"}
          >
            <IconHistory size="1.2rem" stroke={1.1} />
          </ActionIcon>
          <ActionIcon
            component={Link}
            to="/skills"
            variant="default"
            radius={"10%"}
            title="Skills"
            size="lg"
            color={"blue"}
          >
            <IconJumpRope size="1.2rem" stroke={1.1} />
          </ActionIcon>

          <ActionIcon
            component={Link}
            to="/pocket"
            variant="default"
            radius={"10%"}
            title="Tech Pocket"
            size="lg"
            color={"blue"}
          >
            <IconBrandPocket size="1.2rem" stroke={1.1} />
          </ActionIcon>
          <ActionIcon
            component={Link}
            to="/"
            variant="default"
            radius={"10%"}
            title="Résumé"
            size="lg"
            color={"blue"}
          >
            <IconFileDownload size="1.2rem" stroke={1.1} />
          </ActionIcon>
        </Group>

        <ActionIcon
          variant="default"
          radius={"10%"}
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
          size="lg"
        >
          {dark ? (
            <IconSun size="1.2rem" stroke={1.1} />
          ) : (
            <IconMoonStars size="1.2rem" stroke={1.1} />
          )}
        </ActionIcon>
      </Group>
    </Card>
  );
}
