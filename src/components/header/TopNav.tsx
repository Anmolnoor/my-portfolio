import {
  ActionIcon,
  Box,
  Burger,
  Container,
  Drawer,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

const Logo = () => (
  <Link to="/" style={{ textDecoration: "none" }}>
    <Group gap="xs">
      <Box
        w={32}
        h={32}
        style={{
          borderRadius: "var(--mantine-radius-md)",
          background:
            "linear-gradient(135deg, var(--mantine-color-blue-1), var(--mantine-color-blue-3))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid var(--mantine-color-blue-3)",
        }}
      >
        <Text fw={800} size="sm" c="blue.7">
          AN
        </Text>
      </Box>
      <Text fw={600} c="var(--mantine-color-text)">
        Anmol Noor
      </Text>
    </Group>
  </Link>
);

const NavLinkItem = ({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick?: () => void;
}) => (
  <NavLink
    to={to}
    onClick={onClick}
    style={({ isActive }) => ({
      textDecoration: "none",
      fontSize: 14,
      fontWeight: 500,
      color: isActive
        ? "var(--mantine-color-blue-6)"
        : "var(--mantine-color-dimmed)",
      transition: "color 120ms ease",
    })}
  >
    {label}
  </NavLink>
);

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <ActionIcon
      variant="default"
      size="lg"
      radius="md"
      onClick={() => toggleColorScheme()}
      aria-label="Toggle color scheme"
    >
      {dark ? (
        <IconSun size="1.1rem" stroke={1.4} />
      ) : (
        <IconMoonStars size="1.1rem" stroke={1.4} />
      )}
    </ActionIcon>
  );
};

const TopNav = () => {
  const isMobile = useMediaQuery("(max-width: 720px)");
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Box
      component="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(8px)",
        background:
          "color-mix(in srgb, var(--mantine-color-body) 80%, transparent)",
        borderBottom: "1px solid var(--mantine-color-default-border)",
      }}
    >
      <Container size="lg" py="md">
        <Group justify="space-between" align="center">
          <Logo />
          {isMobile ? (
            <Group gap="xs">
              <ThemeToggle />
              <Burger opened={opened} onClick={toggle} size="sm" />
            </Group>
          ) : (
            <Group gap="xl" align="center">
              {navItems.map((item) => (
                <NavLinkItem key={item.to} to={item.to} label={item.label} />
              ))}
              <ThemeToggle />
            </Group>
          )}
        </Group>
      </Container>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="xs"
        title="Menu"
      >
        <Stack gap="md">
          {navItems.map((item) => (
            <NavLinkItem
              key={item.to}
              to={item.to}
              label={item.label}
              onClick={close}
            />
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
};

export default TopNav;
