import {
  Anchor,
  Blockquote,
  Code,
  Divider,
  List,
  Table,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

const components: MDXComponents = {
  h1: ({ children }) => (
    <Title order={1} mt="xl" mb="md">
      {children}
    </Title>
  ),
  h2: ({ children }) => (
    <Title order={2} mt="xl" mb="md">
      {children}
    </Title>
  ),
  h3: ({ children }) => (
    <Title order={3} mt="lg" mb="sm">
      {children}
    </Title>
  ),
  h4: ({ children }) => (
    <Title order={4} mt="md" mb="sm">
      {children}
    </Title>
  ),
  p: ({ children }) => (
    <Text my="md" lh={1.7}>
      {children}
    </Text>
  ),
  a: ({ children, href }) => (
    <Anchor
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </Anchor>
  ),
  ul: ({ children }) => (
    <List my="md" spacing="xs">
      {children}
    </List>
  ),
  ol: ({ children }) => (
    <List type="ordered" my="md" spacing="xs">
      {children}
    </List>
  ),
  li: ({ children }) => <List.Item>{children}</List.Item>,
  blockquote: ({ children }) => (
    <Blockquote color="blue" my="md">
      {children}
    </Blockquote>
  ),
  hr: () => <Divider my="lg" />,
  code: ({ children, className }) => {
    if (className?.startsWith("hljs") || className?.startsWith("language-")) {
      return <code className={className}>{children}</code>;
    }
    return <Code>{children}</Code>;
  },
  pre: ({ children }) => (
    <TypographyStylesProvider my="md">
      <pre>{children as ReactNode}</pre>
    </TypographyStylesProvider>
  ),
  table: ({ children }) => (
    <Table withTableBorder withColumnBorders my="md">
      {children}
    </Table>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      style={{ maxWidth: "100%", height: "auto", display: "block" }}
    />
  ),
};

export default components;
