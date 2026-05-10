import NewCard from "@/components/elements/newCard";
import { Card } from "@/components/ui/card";

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

const Skills = ({ items }: SkillsProps) => {
  return (
    <NewCard title="Skills" viewAll link="/skills">
      <div className="flex flex-col gap-2">
        {skills.slice(0, items).map((skill) => (
          <Card key={skill} className="p-4">
            <p>{skill}</p>
          </Card>
        ))}
      </div>
    </NewCard>
  );
};

export default Skills;
