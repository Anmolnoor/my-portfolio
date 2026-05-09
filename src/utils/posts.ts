import type { ComponentType } from "react";
import type { PostFrontmatter } from "../types/mdx";

interface PostModule {
  default: ComponentType;
  frontmatter: PostFrontmatter;
}

const modules = import.meta.glob<PostModule>("../content/blog/*.mdx", {
  eager: true,
});

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  cover?: string;
  readingMinutes: number;
  Component: ComponentType;
}

const posts: Post[] = Object.values(modules)
  .map((mod) => {
    const fm = mod.frontmatter;
    return {
      slug: fm.slug,
      title: fm.title,
      date: fm.date,
      excerpt: fm.excerpt,
      tags: fm.tags ?? [],
      cover: fm.cover,
      readingMinutes: fm.readingMinutes ?? 3,
      Component: mod.default,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getAllPosts = (): Post[] => posts;

export const getPostBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);
