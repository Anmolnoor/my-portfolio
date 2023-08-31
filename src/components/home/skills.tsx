import { Card, Stack, Text } from "@mantine/core";
import NewCard from "../elements/newCard";

const skills = [
  "   Web3 Development",
  "Solana Web3 Development",
  "React Native Development",
  "Android Development",
  "MERN Stack Development",
  "UI/UX Designing",
  "Linux User & Git/GitHub",
  "Problem Solving & Interpersonal Skills",
];

interface SkillsProps {
  items: number;
}

const Skills = (props: SkillsProps) => {
  return (
    <NewCard title={"Skills"} viewAll>
      <Stack spacing={"xs"}>
        {skills.map((skill, index) => {
          return (
            index < props.items && (
              <Card withBorder>
                <Text>{skill}</Text>
              </Card>
            )
          );
        })}
      </Stack>
    </NewCard>
  );
};

export default Skills;
