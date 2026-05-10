import { Box, Container, Group, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/anmolnoor",
    Icon: IconBrandGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anmolnoor/",
    Icon: IconBrandLinkedin,
    external: true,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/noor_anmol",
    Icon: IconBrandX,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:anmolnoor59@gmail.com",
    Icon: IconMail,
    external: false,
  },
];

const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      component="footer"
      style={{
        borderTop: "1px solid var(--mantine-color-default-border)",
        marginTop: 48,
      }}
    >
      <Container size="lg" py="xl">
        <Group justify="space-between" align="center" wrap="wrap" gap="md">
          <Text size="sm" c="dimmed">
            © {year} Anmol Noor. All rights reserved.
          </Text>
          <Group gap="xl">
            {socials.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                  color: "var(--mantine-color-dimmed)",
                  fontSize: 14,
                }}
              >
                <Icon size="1rem" stroke={1.4} />
                {label}
              </a>
            ))}
          </Group>
        </Group>
      </Container>
    </Box>
  );
};

export default SiteFooter;
