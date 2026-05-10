import { Button, Card, Stack, Text, Title } from "@mantine/core";
import { IconFileDownload } from "@tabler/icons-react";

const Resume = () => {
  return (
    <Card withBorder radius="md" p="xl">
      <Stack gap="md">
        <Title order={2}>Resume</Title>
        <Text c="dimmed">
          A printable resume is on the way. In the meantime, my project list
          and writing reflect my current focus.
        </Text>
        <Button
          component="a"
          href="/resume.pdf"
          target="_blank"
          variant="default"
          leftSection={<IconFileDownload size="1rem" stroke={1.4} />}
          style={{ alignSelf: "flex-start" }}
        >
          Download PDF
        </Button>
      </Stack>
    </Card>
  );
};

export default Resume;
