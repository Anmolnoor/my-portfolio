import { Card, Stack } from "@mantine/core";

import Hero from "./hero";
import { FunFacts, Interests } from "./other";

const HomePage = () => {
  return (
    <Card withBorder p={"sm"}>
      <Stack spacing={"lg"}>
        <Hero />
        <Interests />
        <FunFacts />
      </Stack>
    </Card>
  );
};

export default HomePage;
