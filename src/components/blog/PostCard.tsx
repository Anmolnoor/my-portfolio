import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Post } from "@/utils/posts";

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
    <Link
      to={`/blog/${post.slug}`}
      className="group h-full text-inherit no-underline"
    >
      <Card className="h-full overflow-hidden transition-colors group-hover:bg-muted/40">
        {post.cover && (
          <img
            src={post.cover}
            alt={post.title}
            className="h-40 w-full object-cover"
          />
        )}
        <div className="space-y-2 p-4">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h4 className="font-mono text-lg font-semibold tracking-tight">
            {post.title}
          </h4>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {post.excerpt}
          </p>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="neon"
                  className="rounded-sm font-mono font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default PostCard;
