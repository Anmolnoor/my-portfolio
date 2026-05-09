import { SimpleGrid, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import NewCard from "../components/elements/newCard";
import PostCard from "../components/blog/PostCard";
import { GetTitle } from "../utils/title";
import { getAllPosts } from "../utils/posts";

const Blog = () => {
  const posts = getAllPosts();
  const isMobile = useMediaQuery("(max-width: 500px)");
  const isTablet = useMediaQuery("(max-width: 720px)");
  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <NewCard title={"Blog"} viewAll>
      {posts.length === 0 ? (
        <Stack align="center" gap={"lg"} my={"lg"}>
          {GetTitle("Coming Soon")}
        </Stack>
      ) : (
        <Stack gap="md">
          <Text c="dimmed" size="sm">
            Notes on shipping software — frontend, Web3, realtime media.
          </Text>
          <SimpleGrid cols={cols} spacing="md">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </SimpleGrid>
        </Stack>
      )}
    </NewCard>
  );
};

export default Blog;
