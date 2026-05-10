import {
  Badge,
  Box,
  Button,
  Group,
  Indicator,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCalendarStats, IconSend } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import RadarVisual from "./RadarVisual";

const HomeHero = () => {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  return (
    <Box py="lg">
      <Group justify="flex-end" mb="md">
        <Badge
          color="green"
          variant="light"
          size="lg"
          leftSection={
            <Indicator size={8} color="green" position="middle-start" />
          }
          pl="md"
        >
          available
        </Badge>
      </Group>
      <SimpleGrid cols={isDesktop ? 2 : 1} spacing="xl">
        <Stack gap="lg" justify="center">
          <Group gap={6} align="center">
            <Box
              w={6}
              h={6}
              style={{ background: "var(--mantine-color-blue-6)", borderRadius: 999 }}
            />
            <Text
              size="xs"
              fw={700}
              c="blue.6"
              style={{ letterSpacing: 1.4, textTransform: "uppercase" }}
            >
              Software Engineer
            </Text>
          </Group>
          <Title
            order={1}
            fw={800}
            lh={1.05}
            style={{
              fontSize: isDesktop ? "clamp(2.5rem, 4.5vw, 3.5rem)" : "2rem",
            }}
          >
            In the world of 0s and 1s,
            <br />
            I'm the one who{" "}
            <Text
              component="span"
              inherit
              c="blue.6"
              style={{ whiteSpace: "nowrap" }}
            >
              bridges the gap
            </Text>
            .
          </Title>
          <Text c="dimmed" size="md" maw={520}>
            I build full-stack applications, real-time systems, and developer
            tools. I care about clean architecture, performance, and great
            developer experience — and I love to experiment.
          </Text>
          <Group gap="sm">
            <Button
              component={Link}
              to="https://cal.com/anmolnoor"
              target="_blank"
              size="md"
              leftSection={<IconCalendarStats size="1rem" stroke={1.4} />}
            >
              Book a call
            </Button>
            <Button
              component="a"
              href="mailto:anmolnoor59@gmail.com"
              size="md"
              variant="default"
              leftSection={<IconSend size="1rem" stroke={1.4} />}
            >
              E-Mail
            </Button>
          </Group>
        </Stack>
        {isDesktop && (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RadarVisual size={320} />
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default HomeHero;
