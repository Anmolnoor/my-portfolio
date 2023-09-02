import { IconLink } from "@tabler/icons-react";
import NewCard from "../components/elements/newCard";
import { ActionIcon, Card, Group, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

// const experience = [
//   {
//     title: "Frontend Engineer",
//     company: "Huddle01",
//     duration: "May 2021 - Present",
//     description:
//       "As a Frontend Engineer at Huddle01, I contributed to the development of the Huddle01 website, specializing in frontend development. During this role, I had the opportunity to work extensively with technologies such as webRTC, Mediasoup, and Sockets.",
//   },
//   {
//     title: "React Native Intern",
//     company: "Fortec Solution",
//     duration: "Jan 2021 - Feb 2021",
//     description:
//       "During my tenure as a React Native Intern at Fortec Solution, I was entrusted with the development of a Complaint Ticket Booking App for Protocol Solutions. This project entailed creating a fully automated Ticket Generator using React Native for the frontend and interfacing with a PHP-based API. Additionally, I played a pivotal role in enhancing the App's UI/UX.",
//   },
//   {
//     title: "Team Lead",
//     company: "SWPL",
//     duration: "Jan 2020 - Dec 2020",
//     description:
//       "As a Team Lead at SWPL, I successfully managed a team of five skilled developers. Together, we undertook the development of two significant projects, namely 'Rural Paisa' and 'Full Stop,' both executed within the MERN Stack.",
//   },
//   {
//     title: "Web Developer Internship",
//     company: "ALS",
//     duration: "Dec 2019 - Jan 2020",
//     description:
//       "During my one-month Web Developer Internship at ALS, I engaged in a diverse range of projects. This included the creation of a Single Page website (landing page), development of a College ERP system, and the establishment of an E-commerce platform utilizing ReactJS.",
//   },
// ];

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
        {/* {experience.map((item) => (
          <NewCard title={item.title} viewAll={false} link={"/experience"}>
            <Stack>
              <div>{item.company}</div>
              <div>{item.duration}</div>
              <div>{item.description}</div>
            </Stack>
          </NewCard>
        ))} */}

        {internshipsAndExperience.map((item) => (
          <Card withBorder p={"lg"}>
            <Card.Section p={"xs"}>
              <Group position="apart">
                <Title order={3}>{item.company}</Title>
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
              <Group position="left">
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
