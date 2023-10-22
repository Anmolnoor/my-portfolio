import NewCard from "../components/elements/newCard";
import { Card, Stack, Text } from "@mantine/core";

const interests = [
  "All about the music vibe, alongside my coding adventures.",
  "Tech articles are my guilty pleasure. I love reading them.",
  "TryHackME challenges? Count me in for some hacking fun!",
  "Like to get my hands dirty in the kitchen, cooking up tasty stuff.",
];

const funFacts = ["Totally hooked on VSCode.", "A Linux lover, no doubt."];

export const Interests = () => {
  return (
    <NewCard title={"Passions Beyond the Keyboard"}>
      <Stack gap={"md"}>
        {interests.map((interest) => {
          return (
            <Card withBorder>
              <Text size={"sm"} c={"dimmed"}>
                {interest}
              </Text>
            </Card>
          );
        })}
      </Stack>
    </NewCard>
  );
};

export const FunFacts = () => {
  return (
    <NewCard title={"Unusual Intel"}>
      <Stack gap={"md"}>
        {funFacts.map((fact) => (
          <Card withBorder>
            <Text size={"sm"} c={"dimmed"}>
              {fact}
            </Text>
          </Card>
        ))}
      </Stack>
    </NewCard>
  );
};
