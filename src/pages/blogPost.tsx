import {
  ActionIcon,
  Badge,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { MDXProvider } from "@mdx-js/react";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, Navigate, useParams } from "react-router-dom";
import mdxComponents from "../components/blog/MdxComponents";
import { getPostBySlug } from "../utils/posts";
import "highlight.js/styles/github-dark.css";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const { Component } = post;

  return (
    <Card withBorder p="md">
      <Stack gap="lg">
        <Group justify="space-between">
          <ActionIcon
            component={Link}
            to="/blog"
            variant="default"
            radius="md"
            size="lg"
            title="Back to Blog"
          >
            <IconArrowLeft size="1.1rem" stroke={1.2} />
          </ActionIcon>
          <Group gap="xs" c="dimmed">
            <Text size="xs">{formatDate(post.date)}</Text>
            <Text size="xs">·</Text>
            <Text size="xs">{post.readingMinutes} min read</Text>
          </Group>
        </Group>

        {post.cover ? (
          <Image src={post.cover} alt={post.title} radius="md" />
        ) : null}

        <Stack gap="xs">
          <Title order={1}>{post.title}</Title>
          {post.tags.length > 0 ? (
            <Group gap={6}>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="light" radius="sm" size="sm">
                  {tag}
                </Badge>
              ))}
            </Group>
          ) : null}
        </Stack>

        <MDXProvider components={mdxComponents}>
          <Component />
        </MDXProvider>
      </Stack>
    </Card>
  );
};

export default BlogPost;
