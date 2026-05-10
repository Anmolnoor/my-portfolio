import HomeHero from "@/components/home/HomeHero";
import CurrentlyBuilding from "@/components/home/CurrentlyBuilding";
import SelectedProjects from "@/components/home/SelectedProjects";
import WritingList from "@/components/home/WritingList";
import AboutMe from "@/components/home/AboutMe";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <HomeHero />
      <CurrentlyBuilding />
      <SelectedProjects />
      <WritingList />
      <AboutMe />
    </div>
  );
};

export default HomePage;
