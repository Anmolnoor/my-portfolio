import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type BlogLayout = "grid" | "list";

export interface BlogPostListItem {
  cover?: string;
  date: string;
  readingMinutes: number;
  slug: string;
  summary: string;
  tags: string[];
  title: string;
}

interface BlogPostListProps {
  posts: BlogPostListItem[];
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const GridIcon = () => (
  <span
    aria-hidden="true"
    className="grid h-3.5 w-3.5 shrink-0 grid-cols-2 gap-0.5"
  >
    <span className="rounded-[1px] bg-current" />
    <span className="rounded-[1px] bg-current" />
    <span className="rounded-[1px] bg-current" />
    <span className="rounded-[1px] bg-current" />
  </span>
);

const ListIcon = () => (
  <span
    aria-hidden="true"
    className="flex h-3.5 w-3.5 shrink-0 flex-col justify-center gap-0.5"
  >
    <span className="h-0.5 rounded-full bg-current" />
    <span className="h-0.5 rounded-full bg-current" />
    <span className="h-0.5 rounded-full bg-current" />
  </span>
);

export default function BlogPostList({ posts }: BlogPostListProps) {
  const [layout, setLayout] = useState<BlogLayout>("grid");
  const [isSwitching, setIsSwitching] = useState(false);
  const animationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (animationTimer.current) {
        clearTimeout(animationTimer.current);
      }
    };
  }, []);

  const changeLayout = (nextLayout: BlogLayout) => {
    if (nextLayout === layout) {
      return;
    }

    setLayout(nextLayout);
    setIsSwitching(true);

    if (animationTimer.current) {
      clearTimeout(animationTimer.current);
    }

    animationTimer.current = setTimeout(() => {
      setIsSwitching(false);
    }, 260);
  };

  return (
    <div className="flex flex-col gap-6">
      <header className="mb-8 flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Writing / Blog
            </span>
          </div>

          <div
            aria-label="Blog layout"
            className="inline-flex w-fit items-center rounded-full border bg-card p-1"
            role="group"
          >
            <Button
              aria-pressed={layout === "grid"}
              className={cn(
                "h-8 rounded-full px-2.5 font-mono text-xs",
                layout === "grid"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                  : "text-muted-foreground"
              )}
              onClick={() => changeLayout("grid")}
              size="sm"
              type="button"
              variant="ghost"
            >
              <GridIcon />
              <span>Grid</span>
            </Button>
            <Button
              aria-pressed={layout === "list"}
              className={cn(
                "h-8 rounded-full px-2.5 font-mono text-xs",
                layout === "list"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                  : "text-muted-foreground"
              )}
              onClick={() => changeLayout("list")}
              size="sm"
              type="button"
              variant="ghost"
            >
              <ListIcon />
              <span>Rows</span>
            </Button>
          </div>
        </div>

        <h1 className="font-mono text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          Notes on shipping software
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Frontend, distributed systems, Web3, real-time media, and developer
          tooling — written as I learn.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-lg border bg-card p-12 text-center">
          <p className="font-mono text-lg font-semibold">Coming soon</p>
        </div>
      ) : (
        <div
          className={cn(
            "grid gap-4 transition-[grid-template-columns,opacity,transform] duration-300 ease-out motion-reduce:transition-none",
            layout === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1",
            isSwitching ? "scale-[0.99] opacity-90" : "scale-100 opacity-100"
          )}
        >
          {posts.map((post) => (
            <BlogPostCard key={post.slug} layout={layout} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

const BlogPostCard = ({
  layout,
  post,
}: {
  layout: BlogLayout;
  post: BlogPostListItem;
}) => {
  return (
    <a
      className="group h-full text-inherit no-underline"
      href={`/blog/${post.slug}`}
    >
      <Card
        className={cn(
          "h-full overflow-hidden transition-[background-color,box-shadow,transform] duration-300 ease-out group-hover:bg-muted/40 motion-reduce:transition-none",
          layout === "list" &&
            "grid grid-cols-1 sm:grid-cols-[minmax(12rem,16rem)_1fr]"
        )}
      >
        {post.cover && (
          <img
            alt={post.title}
            className={cn(
              "w-full object-cover transition-[height] duration-300 ease-out motion-reduce:transition-none",
              layout === "grid" ? "h-40" : "h-44 sm:h-full"
            )}
            src={post.cover}
          />
        )}
        <div
          className={cn(
            "space-y-2 p-4",
            layout === "list" && "flex flex-col justify-center p-5"
          )}
        >
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h4
            className={cn(
              "font-mono font-semibold tracking-tight",
              layout === "grid" ? "text-lg" : "text-xl"
            )}
          >
            {post.title}
          </h4>
          <p
            className={cn(
              "text-sm text-muted-foreground",
              layout === "grid" ? "line-clamp-3" : "line-clamp-2"
            )}
          >
            {post.summary}
          </p>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.tags.map((tag) => (
                <Badge
                  className="rounded-sm font-mono font-medium"
                  key={tag}
                  variant="neon"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Card>
    </a>
  );
};
