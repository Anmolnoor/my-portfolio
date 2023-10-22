import NewCard from "../components/elements/newCard";
import { ActionIcon, Card, Group, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconLink } from "@tabler/icons-react";
import { GetTitle } from "../utils/title";
import { GetDescription } from "../utils/description";

const projects = [
  {
    title: "Vendro",
    description:
      "Developed a cost-effective and user-friendly retail store platform as an alternative to traditional ecommerce platforms, addressing the challenges faced by small businesses in setting up an online store.",
    link: "/vendro",
  },
  {
    title: "NFT Droper",
    description: "A Solana Chain NFT dropper.",
    link: "https://nft-drop-gold.vercel.app/",
  },
  {
    title: "D-twitter",
    description: "A decentralized Twitter platform.",
    link: "https://d-itter.netlify.app/#/",
  },
  {
    title: "wallet-dapp",
    description: "A Solana wallet playground.",
    link: "https://6205df9cef9c0122a08aba3a--sleepy-galileo-ce19c5.netlify.app/",
  },
  {
    title: "Image-Portal",
    description: "A Solana IMG Portal Project developed at buildspace.",
    link: "https://upbeat-bartik-f06847.netlify.app/",
  },
  {
    title: "solana-riptide-leader-board",
    description: "Leader board for the Solana riptide Hackathon.",
    link: "https://solana-riptide-leader-board.vercel.app/",
  },
  {
    title: "Flashback",
    description:
      "RealTime Social Media WebAPP built with MERN stack, featuring post management.",
    link: "https://github.com/Anmolnoor/flashback",
  },
  {
    title: "Next Events",
    description: "A Next.js application with all the benefits of Next.js.",
    link: "https://next-event-livid.vercel.app/",
  },
  {
    title: "Meetup",
    description: "A React application with all the benefits of React.js.",
    link: "https://meetup-smoky.vercel.app/",
  },
  {
    title: "Next Routing",
    description: "A Next.js application for testing routing.",
    link: "https://next-routing-ebon.vercel.app/",
  },
  {
    title: "natours",
    description: "A full backend for a secure tours website.",
    link: "https://github.com/Anmolnoor/natours",
  },
  {
    title: "Reservation System",
    description: "A reservation system implemented in TypeScript.",
    link: "https://reservation-system-ten.vercel.app/",
  },
  {
    title: "College Task Management System",
    description:
      "A system for managing college tasks developed using EJS, Node.js, and Express.",
    link: "https://github.com/Anmolnoor/bgiet",
  },
  {
    title: "Node Farm",
    description: "A website built with just Node.js.",
    link: "https://github.com/Anmolnoor/nodefarm",
  },
  {
    title: "Security",
    description:
      "A simple login and registration app implementing various encryptions like BcryptJS, OAuth, Hashing, etc.",
    link: "https://github.com/Anmolnoor/Security",
  },
  {
    title: "Todo List",
    description:
      "A todo list application with MongoDB database for storing states.",
    link: "https://github.com/Anmolnoor/todolist",
  },
  {
    title: "Daily Journal",
    description:
      "A blog application with a MongoDB database on the Express server.",
    link: "https://github.com/Anmolnoor/Blog-with-Database",
  },
  {
    title: "News letter",
    description: "A newsletter application integrated with Mailchimp.",
    link: "https://github.com/Anmolnoor/Newsletter-Singup",
  },
  {
    title: "Weather Project",
    description:
      "An app featuring weather data using an API from OpenWeatherMap.",
    link: "https://github.com/Anmolnoor/weather-project",
  },
  {
    title: "Simon Game",
    description: "An online version of the classic Simon game.",
    link: "https://anmolnoor.github.io/Simon-Game/",
  },
  {
    title: "Drum Kit",
    description: "An interactive drum kit implemented on a website.",
    link: "https://anmolnoor.github.io/Drum_Kit/",
  },
  {
    title: "Dice Roll",
    description: "A dice roller application.",
    link: "https://anmolnoor.github.io/Dice_Roller/",
  },
  {
    title: "Tindog",
    description: "A playful take on a 'tinder for dogs' application.",
    link: "https://tin-dog-roan.vercel.app/",
  },
  {
    title: "Vim Cheatsheet",
    description: "A reference guide for Vim commands.",
    link: "https://github.com/Anmolnoor/vimCS/blob/main/README.md",
  },
  {
    title: "Markdown Syntax Cheat Sheet",
    description: "A cheat sheet for Markdown syntax.",
    link: "https://github.com/Anmolnoor/markdownSCS/blob/main/README.md",
  },
];

const Projects = () => {
  return (
    <NewCard title={"Projects"} viewAll link={"/projects"}>
      <Stack>
        {projects.map((item) => (
          <Card withBorder p={"lg"}>
            <Card.Section p={"xs"}>
              <Group justify="space-between">
                {GetTitle(item.title)}
                <ActionIcon
                  component={Link}
                  to={item.link}
                  variant="default"
                  radius={"10%"}
                  title={item.title}
                  size="lg"
                  color={"blue"}
                  target="_blank"
                >
                  <IconLink size="1.2rem" stroke={1.1} />
                </ActionIcon>
              </Group>
            </Card.Section>
            <Card.Section p={"xs"}>
              <Text>{GetDescription({ text: item.description })}</Text>
            </Card.Section>
          </Card>
        ))}
      </Stack>
    </NewCard>
  );
};

export default Projects;
