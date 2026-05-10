import { Card, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { IconArticle, IconBroadcast, IconStack2 } from "@tabler/icons-react";
import { getAllPosts } from "../../utils/posts";
import IconTile from "./IconTile";
import SectionHeader from "./SectionHeader";

const blogIcons = [
  <IconArticle size={20} stroke={1.4} />,
  <IconStack2 size={20} stroke={1.4} />,
  <IconBroadcast size={20} stroke={1.4} />,
];

const formatDate = (iso: string) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const WritingList = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 900px)");
  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <div>
      <SectionHeader
        title="Writing / Blog"
        linkLabel="View all posts"
        linkTo="/blog"
      />
      <SimpleGrid cols={cols} spacing="md">
        {posts.map((post, i) => (
          <Card
            key={post.slug}
            withBorder
            radius="md"
            p="md"
            component={Link}
            to={`/blog/${post.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Group align="flex-start" gap="md" wrap="nowrap" mb="sm">
              <IconTile variant="blue">{blogIcons[i % blogIcons.length]}</IconTile>
              <Stack gap={2} style={{ flex: 1, minWidth: 0 }}>
                <Text fw={700} lineClamp={2}>
                  {post.title}
                </Text>
              </Stack>
            </Group>
            <Text size="sm" c="dimmed" lineClamp={2} mb="md">
              {post.excerpt}
            </Text>
            <Group gap="xs">
              <Text size="xs" c="dimmed">
                {formatDate(post.date)}
              </Text>
              <Text size="xs" c="dimmed">
                ·
              </Text>
              <Text size="xs" c="dimmed">
                {post.readingMinutes} min read
              </Text>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default WritingList;
