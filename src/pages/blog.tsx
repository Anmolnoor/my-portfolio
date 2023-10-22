import NewCard from "../components/elements/newCard";
import { Stack } from "@mantine/core";
import { GetTitle } from "../utils/title";

const Blog = () => {
  return (
    <NewCard title={"Blog"} viewAll>
      {/* msg : coming soon */}
      <Stack align="center" gap={"lg"} my={"lg"}>
        {GetTitle("Coming Soon")}
      </Stack>
    </NewCard>
  );
};

export default Blog;
