export interface PostFrontmatter {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  readingMinutes?: number;
  tags?: string[];
  cover?: string;
}

declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const frontmatter: PostFrontmatter;
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
