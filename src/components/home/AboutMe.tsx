import {
  Avatar,
  Box,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBolt,
  IconBriefcase,
  IconMapPin,
  IconTarget,
} from "@tabler/icons-react";
import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

const MetaRow = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) => (
  <Group gap="sm" wrap="nowrap" align="flex-start">
    <Box
      style={{
        color: "var(--mantine-color-dimmed)",
        marginTop: 2,
        flexShrink: 0,
      }}
    >
      {icon}
    </Box>
    <Stack gap={0}>
      <Text size="xs" c="dimmed">
        {label}
      </Text>
      <Text size="sm" fw={500}>
        {value}
      </Text>
    </Stack>
  </Group>
);

const AboutMe = () => {
  const isMobile = useMediaQuery("(max-width: 720px)");
  return (
    <div>
      <SectionHeader title="About Me" />
      <Card withBorder radius="md" p="lg">
        <SimpleGrid cols={isMobile ? 1 : 2} spacing="xl">
          <Group gap="md" align="flex-start" wrap="nowrap">
            <Avatar
              src="/anmol.jpg"
              alt="Anmol Noor"
              size={72}
              radius="50%"
              color="blue"
            >
              AN
            </Avatar>
            <Stack gap={4} style={{ flex: 1, minWidth: 0 }}>
              <Text fw={700} size="lg">
                Anmol Noor
              </Text>
              <Text size="sm" c="dimmed">
                I'm a software engineer and builder who loves turning ideas into
                robust products. I enjoy full-stack development, distributed
                systems, and developer tooling. Outside of code, you'll find me
                tinkering with infrastructure, reading, or exploring new
                technologies.
              </Text>
            </Stack>
          </Group>
          <SimpleGrid cols={2} spacing="md">
            <MetaRow
              icon={<IconMapPin size={16} stroke={1.4} />}
              label="Location"
              value="India"
            />
            <MetaRow
              icon={<IconTarget size={16} stroke={1.4} />}
              label="Focus"
              value="Software · Systems · AI Tools"
            />
            <MetaRow
              icon={<IconBriefcase size={16} stroke={1.4} />}
              label="Experience"
              value="5+ years"
            />
            <MetaRow
              icon={<IconBolt size={16} stroke={1.4} />}
              label="Currently"
              value="Building, learning, shipping"
            />
          </SimpleGrid>
        </SimpleGrid>
      </Card>
    </div>
  );
};

export default AboutMe;
