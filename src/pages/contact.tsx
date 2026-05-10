import { Button, Card, Group, Stack, Text, Title } from "@mantine/core";
import { IconCalendarStats, IconSend } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Card withBorder radius="md" p="xl">
      <Stack gap="md">
        <Title order={2}>Contact</Title>
        <Text c="dimmed">
          The fastest way to reach me is email or by booking a call.
        </Text>
        <Group gap="sm">
          <Button
            component={Link}
            to="https://cal.com/anmolnoor"
            target="_blank"
            leftSection={<IconCalendarStats size="1rem" stroke={1.4} />}
          >
            Book a call
          </Button>
          <Button
            component="a"
            href="mailto:anmolnoor59@gmail.com"
            variant="default"
            leftSection={<IconSend size="1rem" stroke={1.4} />}
          >
            anmolnoor59@gmail.com
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};

export default Contact;
