import { Group, ActionIcon, useMantineColorScheme, Card } from "@mantine/core";
import {
  IconSun,
  IconMoonStars,
  IconHome,
  IconDeviceLaptop,
} from "@tabler/icons-react";

export function NabBar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Card withBorder>
      <Group position="apart" align="center">
        <Group spacing={"xs"} position="left" noWrap>
          <ActionIcon title="Home" size="lg" color={"blue"}>
            <IconHome size="1.5rem" stroke={1.5} />
          </ActionIcon>

          <ActionIcon title="Projects coming soon" size="lg" color={"blue"}>
            <IconDeviceLaptop size="1.5rem" stroke={1.5} />
          </ActionIcon>
        </Group>

        <ActionIcon
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
          size="lg"
        >
          {dark ? (
            <IconSun size="1.5rem" stroke={1.5} />
          ) : (
            <IconMoonStars size="1.5rem" stroke={1.5} />
          )}
        </ActionIcon>
      </Group>
    </Card>
  );
}
