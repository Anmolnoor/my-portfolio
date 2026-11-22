import { useEffect, useMemo, useRef, useState } from "react";
import { FunnelSimple, X } from "@phosphor-icons/react";
import { formatDateUTC } from "@/lib/blog";
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

// "Coding Agents" and "coding-agents" are the same tag.
const normalizeTag = (tag: string) =>
  tag.trim().toLowerCase().replace(/\s+/g, "-");

const countTags = (posts: BlogPostListItem[]) => {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of new Set(post.tags.map(normalizeTag))) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
};

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
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [tagQuery, setTagQuery] = useState("");
  const animationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const filterContainerRef = useRef<HTMLDivElement | null>(null);
  const filterTriggerRef = useRef<HTMLButtonElement | null>(null);
  const tagSearchInputRef = useRef<HTMLInputElement | null>(null);

  const tagCounts = useMemo(() => countTags(posts), [posts]);
  const normalizedQuery = normalizeTag(tagQuery);
  const filteredTags = useMemo(
    () =>
      normalizedQuery
        ? tagCounts.filter(([tag]) => tag.includes(normalizedQuery))
        : tagCounts,
    [tagCounts, normalizedQuery]
  );
  const recurringTags = useMemo(
    () => filteredTags.filter(([, count]) => count >= 2),
    [filteredTags]
  );
  const singlePostTags = useMemo(
    () => filteredTags.filter(([, count]) => count === 1),
    [filteredTags]
  );

  const visiblePosts = activeTag
    ? posts.filter((post) => post.tags.map(normalizeTag).includes(activeTag))
    : posts;

  useEffect(() => {
    // Read ?tag= after hydration so the server and first client render match.
    const tag = new URLSearchParams(window.location.search).get("tag");
    if (tag) {
      setActiveTag(normalizeTag(tag));
    }

    return () => {
      if (animationTimer.current) {
        clearTimeout(animationTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!filterOpen) return;
    tagSearchInputRef.current?.focus();

    const handlePointerDown = (event: MouseEvent) => {
      if (
        filterContainerRef.current &&
        !filterContainerRef.current.contains(event.target as Node)
      ) {
        setFilterOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFilterOpen(false);
        filterTriggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [filterOpen]);

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

  const selectTag = (tag: string | null) => {
    setActiveTag(tag);
    setFilterOpen(false);
    setTagQuery("");
    const url = new URL(window.location.href);
    if (tag) {
      url.searchParams.set("tag", tag);
    } else {
      url.searchParams.delete("tag");
    }
    window.history.replaceState(window.history.state, "", url);
  };

  const clearTagAndFocusTrigger = () => {
    selectTag(null);
    filterTriggerRef.current?.focus();
  };

  const renderTagOption = ([tag, count]: [string, number]) => {
    const isSelected = activeTag === tag;
    return (
      <button
        aria-pressed={isSelected}
        className={cn(
          "flex w-full items-center justify-between rounded-sm px-2.5 py-1.5 text-left font-mono text-xs transition-colors",
          isSelected
            ? "bg-primary text-primary-foreground"
            : "text-foreground hover:bg-muted"
        )}
        key={tag}
        onClick={() => selectTag(tag)}
        type="button"
      >
        <span className="truncate">{tag}</span>
        <span
          className={cn(
            "ml-2 shrink-0",
            isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {count}
        </span>
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <header className="mb-2 flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Writing / Blog
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              className="font-mono text-xs text-muted-foreground no-underline hover:text-primary"
              href="/rss.xml"
              title="Subscribe via RSS"
            >
              RSS
            </a>

            {tagCounts.length > 0 && (
              <div className="relative" ref={filterContainerRef}>
                <Button
                  aria-controls="blog-tag-filter-popover"
                  aria-expanded={filterOpen}
                  aria-haspopup="dialog"
                  aria-label={
                    activeTag
                      ? `Filter posts by tag, active: ${activeTag}`
                      : "Filter posts by tag"
                  }
                  className={cn(
                    "h-10 rounded-full border px-3.5 font-mono text-xs",
                    activeTag
                      ? "border-primary/40 bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary"
                      : "bg-card text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setFilterOpen((open) => !open)}
                  ref={filterTriggerRef}
                  size="sm"
                  type="button"
                  variant="ghost"
                >
                  <FunnelSimple className="h-3.5 w-3.5 shrink-0" />
                  <span>{activeTag ? activeTag : "Filter"}</span>
                </Button>

                {filterOpen && (
                  <div
                    aria-label="Filter posts by tag"
                    className="absolute left-0 z-40 mt-2 w-64 rounded-md border bg-popover p-2.5 shadow-lg sm:left-auto sm:right-0"
                    id="blog-tag-filter-popover"
                    role="dialog"
                  >
                    <input
                      aria-label="Search tags"
                      className="mb-2 h-8 w-full rounded-sm border border-input bg-background px-2.5 font-mono text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      onChange={(e) => setTagQuery(e.target.value)}
                      placeholder="Search tags..."
                      ref={tagSearchInputRef}
                      type="search"
                      value={tagQuery}
                    />

                    <div className="max-h-72 space-y-1 overflow-y-auto pr-0.5">
                      {!normalizedQuery && (
                        <button
                          aria-pressed={activeTag === null}
                          className={cn(
                            "flex w-full items-center justify-between rounded-sm px-2.5 py-1.5 text-left font-mono text-xs transition-colors",
                            activeTag === null
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-muted"
                          )}
                          onClick={() => selectTag(null)}
                          type="button"
                        >
                          <span>All posts</span>
                          <span
                            className={cn(
                              "ml-2 shrink-0",
                              activeTag === null
                                ? "text-primary-foreground/80"
                                : "text-muted-foreground"
                            )}
                          >
                            {posts.length}
                          </span>
                        </button>
                      )}

                      {recurringTags.length > 0 && (
                        <div className="pt-1">
                          <p className="px-2.5 pb-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Topics
                          </p>
                          <div className="space-y-0.5">
                            {recurringTags.map(renderTagOption)}
                          </div>
                        </div>
                      )}

                      {singlePostTags.length > 0 && (
                        <div className="pt-2">
                          <p className="px-2.5 pb-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                            More tags
                          </p>
                          <div className="space-y-0.5">
                            {singlePostTags.map(renderTagOption)}
                          </div>
                        </div>
                      )}

                      {filteredTags.length === 0 && (
                        <p className="px-2.5 py-3 text-center font-mono text-xs text-muted-foreground">
                          No matching tags
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

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
        </div>

        <h1 className="font-mono text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          Notes on shipping software
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          AI agents, systems, homelab, and developer tooling — written as I
          learn.
        </p>

        {activeTag && (
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-muted-foreground">
            <span>
              {visiblePosts.length}{" "}
              {visiblePosts.length === 1 ? "post" : "posts"} tagged{" "}
              <span className="text-primary">{activeTag}</span>
            </span>
            <Button
              className="h-6 gap-1 rounded-full border px-2 font-mono text-xs text-muted-foreground hover:text-foreground"
              onClick={clearTagAndFocusTrigger}
              size="sm"
              type="button"
              variant="ghost"
            >
              <X className="h-3 w-3" />
              <span>Clear</span>
            </Button>
          </div>
        )}
      </header>

      {posts.length === 0 ? (
        <div className="rounded-lg border bg-card p-12 text-center">
          <p className="font-mono text-lg font-semibold">Coming soon</p>
        </div>
      ) : visiblePosts.length === 0 ? (
        <div className="rounded-lg border bg-card p-12 text-center">
          <p className="font-mono text-lg font-semibold">
            No posts tagged {activeTag}
          </p>
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
          {visiblePosts.map((post) => (
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
            alt=""
            className={cn(
              "w-full object-cover transition-[height] duration-300 ease-out motion-reduce:transition-none",
              layout === "grid" ? "h-40" : "h-44 sm:h-full"
            )}
            decoding="async"
            height={900}
            loading="lazy"
            src={post.cover}
            width={1600}
          />
        )}
        <div
          className={cn(
            "space-y-2 p-4",
            layout === "list" && "flex flex-col justify-center p-5"
          )}
        >
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
            <span>{formatDateUTC(post.date)}</span>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h2
            className={cn(
              "font-mono font-semibold tracking-tight",
              layout === "grid" ? "text-lg" : "text-xl"
            )}
          >
            {post.title}
          </h2>
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
