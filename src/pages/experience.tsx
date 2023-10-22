import { IconLink } from "@tabler/icons-react";
import NewCard from "../components/elements/newCard";
import { ActionIcon, Card, Group, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { GetTitle } from "../utils/title";
import { randomId } from "@mantine/hooks";

const internshipsAndExperience = [
  {
    position: "Founder",
    duration: "Present",
    company: "Dynamic Nexus Solutions",
    link: "https://www.dynamicnexussolutions.com/",
  },
  {
    position: "Frontend Engineer",
    duration: "2 Months (Full time)",
    company: "Huddle01",
    link: "https://huddle01.com/",
  },
  {
    position: "Frontend Engineer",
    duration: "3 Months (Part time)",
    company: "Huddle01",
    link: "https://huddle01.com/",
  },
  {
    position: "MERN Stack Training",
    duration: "6 Months",
    company: "Techlive Solutions, Mohali",
    link: "#",
  },
  {
    position: "React Native Internship",
    duration: "1 Month",
    company: "Fortec Solutions, Mohali",
    link: "#",
  },
  {
    position: "MERN Stack Internship",
    duration: "6 Months",
    company: "SWPL, Jaipur",
    link: "#",
  },
  {
    position: "Android Development Training",
    duration: "2 Months",
    company: "Solitaire Infosys, Mohali",
    link: "#",
  },
  {
    position: "Web Developer Internship",
    duration: "1 Month",
    company: "Autumn Leaves Solutions",
    link: "#",
  },
];

const Experience = () => {
  return (
    <NewCard title={"Experience"} viewAll link={"/experience"}>
      <Stack>
        {internshipsAndExperience.map((item) => (
          <Card withBorder p={"lg"} key={randomId()}>
            <Card.Section p={"xs"}>
              <Group justify="space-between">
                {GetTitle(item.company)}
                {item.link === "#" ? null : (
                  <ActionIcon
                    component={Link}
                    to={item.link}
                    variant="default"
                    radius={"10%"}
                    title={item.link}
                    size="lg"
                    color={"blue"}
                    target="_blank"
                  >
                    <IconLink size="1.2rem" stroke={1.1} />
                  </ActionIcon>
                )}
              </Group>
            </Card.Section>
            <Card.Section p="xs" pt={0}>
              <Group justify="left">
                <Text size={"md"} c="dimmed">
                  - {item.position} - {item.duration}
                </Text>
              </Group>
            </Card.Section>
          </Card>
        ))}
      </Stack>
    </NewCard>
  );
};

export default Experience;
