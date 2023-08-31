import { Card, Stack } from "@mantine/core";

import Hero from "./hero";
import Expertise from "./expertise";
import FollowMe from "./follow";
import Skills from "./skills";
import { FunFacts, Interests } from "./other";
import NewCard from "../elements/newCard";

const HomePage = () => {
  return (
    <Card withBorder p={"sm"}>
      <Stack spacing={"lg"}>
        <Hero />
        <Skills items={2} />
        <NewCard title={"Project"} viewAll>
          <Card withBorder>Coming soon...</Card>
        </NewCard>
        <NewCard title={"Experience"} viewAll>
          <Card withBorder>Coming soon...</Card>
        </NewCard>

        <Expertise items={2} />
        <Interests />
        <FunFacts />
        <FollowMe />
      </Stack>
    </Card>
  );
};

export default HomePage;
