import { randomId, useMediaQuery } from "@mantine/hooks";
import NewCard from "../components/elements/newCard";
import { Card, Group, Image, SimpleGrid, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const pocketTech = [
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    logo: "typescript-logo.png",
  },
  {
    name: "React",
    link: "https://reactjs.org/",
    logo: "react-logo.png",
  },
  {
    name: "Vite",
    link: "https://vitejs.dev/",
    logo: "vite-logo.png",
  },
  {
    name: "EsLint",
    link: "https://eslint.org/",
    logo: "eslint-logo.png",
  },
  {
    name: "Prettier",
    link: "https://prettier.io/",
    logo: "prettier-logo.png",
  },
  {
    name: "Husky",
    link: "https://typicode.github.io/husky/#/",
    logo: "husky-logo.png",
  },
  {
    name: "Next.js",
    link: "https://nextjs.org/",
    logo: "next-js-logo.png",
  },
  {
    name: "zustand",
    link: "https://zustand-demo.pmnd.rs/",
    logo: "zustand-logo.png",
  },
  {
    name: "React Query",
    link: "https://tanstack.com/query/",
    logo: "react-query-logo.png",
  },
  {
    name: "redux",
    link: "https://redux.js.org/",
    logo: "redux-logo.png",
  },
  {
    name: "React Native",
    link: "https://reactnative.dev/",
    logo: "react-logo.png",
  },
  {
    name: "Node.js",
    link: "https://nodejs.org/",
    logo: "node-js-logo.png",
  },
  {
    name: "Express.js",
    link: "https://expressjs.com/",
    logo: "express-logo.png",
  },
  {
    name: "Solana",
    link: "https://solana.com/",
    logo: "sol-logo.png",
  },
  {
    name: "Socket.io",
    link: "https://socket.io/",
    logo: "socket-logo.svg",
  },
  {
    name: "WebRTC",
    link: "https://webrtc.org/",
    logo: "WebRTC-logo.png",
  },
  {
    name: "MediaSoup",
    link: "https://mediasoup.org/",
    logo: "mediasoup-banner.png",
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    logo: "mongodb-logo.png",
  },
  {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
    logo: "postgresql-logo.png",
  },
  {
    name: "MySQL",
    link: "https://www.mysql.com/",
    logo: "mysql-logo.png",
  },
  {
    name: "Firebase",
    link: "https://firebase.google.com/",
    logo: "firebase-logo.png",
  },
  {
    name: "Prisma",
    link: "https://www.prisma.io/",
    logo: "prisma-logo.png",
  },
  {
    name: "Figma",
    link: "https://www.figma.com/",
    logo: "figma-logo.png",
  },
  {
    name: "Adobe XD",
    link: "https://www.adobe.com/products/xd.html",
    logo: "adobe-xd-logo.png",
  },
  {
    name: "Photoshop",
    link: "https://www.adobe.com/products/photoshop.html",
    logo: "adobe-photoshop-logo.png",
  },
  {
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
    logo: "tailwindcss-logo.png",
  },
  {
    name: "Bootstrap",
    link: "https://getbootstrap.com/",
    logo: "bootstrap-logo.png",
  },
  {
    name: "Material UI",
    link: "https://material-ui.com/",
    logo: "material-ui-logo.png",
  },
  {
    name: "Mantine",
    link: "https://mantine.dev/",
    logo: "mantine-logo.png",
  },
  {
    name: "Git",
    link: "https://git-scm.com/",
    logo: "git-logo.png",
  },
  {
    name: "GitHub",
    link: "https://github.com/",
    logo: "github-logo.png",
  },
  {
    name: "Ubuntu",
    link: "https://ubuntu.com/",
    logo: "ubuntu-logo.png",
  },
  {
    name: "Debian",
    link: "https://www.debian.org/",
    logo: "debian-logo.png",
  },
  {
    name: "Arch Linux",
    link: "https://archlinux.org/",
    logo: "arch-logo.png",
  },
  {
    name: "Fedora",
    link: "https://getfedora.org/",
    logo: "fedora-logo.png",
  },
  {
    name: "VsCode",
    link: "https://code.visualstudio.com/",
    logo: "vscode-logo.png",
  },
];

const Pocket = () => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  return (
    <NewCard title={"Tech Pocket"} viewAll>
      <SimpleGrid cols={isMobile ? 2 : 3}>
        {pocketTech.map((tech) => (
          <Card
            component={Link}
            to={tech.link}
            target="_blank"
            withBorder
            p={"xs"}
            key={randomId()}
          >
            <Card.Section p={"xs"}>
              <Group justify="center" gap={"sm"}>
                <Image
                  fit="contain"
                  src={tech.logo}
                  alt={tech.name}
                  w={20}
                  h={20}
                />
                <Text size={"sm"}>{tech.name}</Text>
              </Group>
            </Card.Section>
          </Card>
        ))}
      </SimpleGrid>
    </NewCard>
  );
};

export default Pocket;
