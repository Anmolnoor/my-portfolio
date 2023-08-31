import NewCard from "../elements/newCard";
import { Card, Stack, Text } from "@mantine/core";

export const Interests = () => {
  return (
    <NewCard title={"Interests"}>
      <Stack spacing={"md"}>
        <Card withBorder>
          <Text>Collaborating on Open Source Projects</Text>
        </Card>
        <Card withBorder>
          <Text>Continuous Integration/Continuous Deployment (CI/CD)</Text>
        </Card>
      </Stack>
    </NewCard>
  );
};

export const FunFacts = () => {
  return (
    <NewCard title={"Fun Facts"}>
      <Stack spacing={"md"}>
        <Card withBorder>
          <Text>I'm a big fan of VSCode.</Text>
        </Card>
        <Card withBorder>
          <Text>I love Linux.</Text>
        </Card>
      </Stack>
    </NewCard>
  );
};
