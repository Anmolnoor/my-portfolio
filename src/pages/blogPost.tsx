import { ArrowLeft } from "lucide-react";
import { MDXProvider } from "@mdx-js/react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import mdxComponents from "@/components/blog/MdxComponents";
import { getPostBySlug } from "@/utils/posts";
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
    <Card className="p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Button asChild variant="outline" size="icon" title="Back to Blog">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </div>

        {post.cover && (
          <img
            src={post.cover}
            alt={post.title}
            className="w-full rounded-md"
          />
        )}

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {post.title}
          </h1>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-sm font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <MDXProvider components={mdxComponents}>
            <Component />
          </MDXProvider>
        </div>
      </div>
    </Card>
  );
};

export default BlogPost;
