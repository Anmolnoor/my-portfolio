import { Card, Group, Stack, Text, Title } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import NewCard from "../components/elements/newCard";

const expertise = [
  {
    title: "Frontend",
    subTitles: ["React", "Next.js", "React Native"],
  },
  {
    title: "Backend",
    subTitles: ["Node.js", "Express.js"],
  },
  {
    title: "Web3 Development",
    subTitles: ["Solana"],
  },
  {
    title: "Real-Time Communication",
    subTitles: ["Socket.io", "WebRTC", "MediaSoup"],
  },
  {
    title: "Database",
    subTitles: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma"],
  },
  {
    title: "UI/UX Design",
    subTitles: ["Figma", "Adobe XD", "Adobe Photoshop"],
  },
  {
    title: "CSS Frameworks",
    subTitles: ["TailwindCSS", "Bootstrap", "Material UI", "Maintine"],
  },
  {
    title: "Version Control",
    subTitles: ["Git", "Github"],
  },
  {
    title: "Linux Enthusiast",
    subTitles: [
      "Ubuntu",
      "Debian",
      "Arch Linux",
      "Fedora",
      "CentOS",
      "Pop!_OS",
      "Kali Linux",
    ],
  },
];

interface ExpertiseProps {
  items: number;
}

const Expertise = (props: ExpertiseProps) => {
  return (
    <NewCard title={"Expertise"} viewAll>
      <Text size={"sm"} c="dimmed" ta="center" my={"lg"}>
        I specialize in a range of technologies and development areas
      </Text>
      <Stack w={"100%"} gap={"lg"} p={"lg"}>
        {expertise.map((item, index) => {
          return (
            index < props.items && (
              <Card shadow="sm" padding="md" withBorder radius={"md"}>
                <Card.Section inheritPadding p="xs" withBorder>
                  <Title order={3} c="dimmed">
                    {item.title}
                  </Title>
                </Card.Section>
                <Card.Section p="sm">
                  <Group gap={"sm"} justify="center" w={"100%"} p={"xs"}>
                    {item.subTitles.map((subTitle) => (
                      <Card withBorder shadow="sm" p={"xs"} key={randomId()}>
                        <Text c="dimmed">{subTitle}</Text>
                      </Card>
                    ))}
                  </Group>
                </Card.Section>
              </Card>
            )
          );
        })}
      </Stack>
    </NewCard>
  );
};

export default Expertise;
