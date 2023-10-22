import {
  Group,
  ActionIcon,
  useMantineColorScheme,
  Card,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconSun,
  IconMoonStars,
  IconHome,
  IconDeviceLaptop,
  IconHistory,
  IconJumpRope,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const NavBaroptions = [
  {
    title: "Home",
    link: "/",
    icon: <IconHome size="1rem" stroke={1} />,
  },
  {
    title: "Projects",
    link: "/projects",
    icon: <IconDeviceLaptop size="1rem" stroke={1} />,
  },
  {
    title: "Exp",
    link: "/experience",
    icon: <IconHistory size="1rem" stroke={1} />,
  },
  {
    title: "Skills",
    link: "/skills",
    icon: <IconJumpRope size="1rem" stroke={1} />,
  },
];

interface NavbarBtnProps {
  title: string;
  link: string;
  icon: React.ReactNode;
}

const NavbarBtn = ({ title, link, icon }: NavbarBtnProps) => {
  return (
    <Stack gap={5} align="center">
      <ActionIcon
        component={Link}
        to={link}
        variant="default"
        radius={"md"}
        title={title}
        size="md"
        color={"blue"}
      >
        {icon}
      </ActionIcon>
      <Group gap={"xs"} align="center">
        <Text ta={"center"} c={"dimmed"} size="xs">
          {title}
        </Text>
      </Group>
    </Stack>
  );
};

export function NabBar() {
  const isMobile = useMediaQuery("(max-width: 500px)");
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Card withBorder w={"100vw"} px={"xl"}>
      <Stack align="center">
        <Group justify="space-between" w={isMobile ? 300 : 450} align="center">
          {NavBaroptions.map((option) => (
            <NavbarBtn
              title={option.title}
              link={option.link}
              icon={option.icon}
            />
          ))}
          <Stack gap={5} align="center">
            <ActionIcon
              variant="default"
              radius={"md"}
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
              size="md"
            >
              {dark ? (
                <IconSun size="1rem" stroke={1} />
              ) : (
                <IconMoonStars size="1rem" stroke={1} />
              )}
            </ActionIcon>
            <Group gap={"xs"} align="center">
              <Text ta={"center"} c={"dimmed"} size="xs">
                {dark ? "Light" : "Dark"}
              </Text>
            </Group>
          </Stack>
        </Group>
      </Stack>
    </Card>
  );
}
