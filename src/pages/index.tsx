import { Stack } from "@mantine/core";
import HomeHero from "../components/home/HomeHero";
import CurrentlyBuilding from "../components/home/CurrentlyBuilding";
import SelectedProjects from "../components/home/SelectedProjects";
import WritingList from "../components/home/WritingList";
import AboutMe from "../components/home/AboutMe";

const HomePage = () => {
  return (
    <Stack gap="xl">
      <HomeHero />
      <CurrentlyBuilding />
      <SelectedProjects />
      <WritingList />
      <AboutMe />
    </Stack>
  );
};

export default HomePage;
