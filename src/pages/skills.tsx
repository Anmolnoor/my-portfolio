import { Card, Stack, Text } from "@mantine/core";
import NewCard from "../components/elements/newCard";
import { randomId } from "@mantine/hooks";

const skills = [
  "Web3 Developer",
  "React Native Development",
  "Android Development",
  "MERN Development",
  "Front-End with React, Next",
  "Back-End with Node.js, Express, Axios",
  "Database Management (MongoDB, MySQL, Firebase)",
  "CSS Frameworks (Bootstrap, Tailwind, Material-UI, Mantine)",
  "UI/UX Designing (Figma, AdobeXD, Photoshop)",
  "Linux User & Git/GitHub",
  "Problem Solving & Interpersonal Skills",
];

interface SkillsProps {
  items: number;
}

const Skills = (props: SkillsProps) => {
  return (
    <NewCard title={"Skills"} viewAll link="/skills">
      <Stack gap={"xs"}>
        {skills.map((skill, index) => {
          return (
            index < props.items && (
              <Card withBorder key={randomId()}>
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
