import { Badge, Card, Group, Image, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import type { Post } from "../../utils/posts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card
      component={Link}
      to={`/blog/${post.slug}`}
      withBorder
      padding="md"
      radius="md"
      style={{ height: "100%" }}
    >
      {post.cover ? (
        <Card.Section mb="sm">
          <Image src={post.cover} alt={post.title} h={160} fit="cover" />
        </Card.Section>
      ) : null}
      <Stack gap="xs">
        <Group gap="xs" c="dimmed">
          <Text size="xs">{formatDate(post.date)}</Text>
          <Text size="xs">·</Text>
          <Text size="xs">{post.readingMinutes} min read</Text>
        </Group>
        <Title order={4}>{post.title}</Title>
        <Text size="sm" c="dimmed" lineClamp={3}>
          {post.excerpt}
        </Text>
        {post.tags.length > 0 ? (
          <Group gap={6} mt="xs">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="light" radius="sm" size="sm">
                {tag}
              </Badge>
            ))}
          </Group>
        ) : null}
      </Stack>
    </Card>
  );
};

export default PostCard;
