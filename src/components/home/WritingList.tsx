import { Link } from "react-router-dom";
import { FileText, Layers, Radio } from "lucide-react";
import { Card } from "@/components/ui/card";
import { getAllPosts } from "@/utils/posts";
import IconTile from "./IconTile";
import SectionHeader from "./SectionHeader";

const blogIcons = [
  <FileText className="h-5 w-5" />,
  <Layers className="h-5 w-5" />,
  <Radio className="h-5 w-5" />,
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
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section>
      <SectionHeader
        title="Writing / Blog"
        linkLabel="View all posts"
        linkTo="/blog"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group text-inherit no-underline"
          >
            <Card className="h-full p-4 transition-colors group-hover:bg-muted/40">
              <div className="mb-3 flex items-start gap-3">
                <IconTile variant="blue">
                  {blogIcons[i % blogIcons.length]}
                </IconTile>
                <p className="line-clamp-2 font-bold">{post.title}</p>
              </div>
              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readingMinutes} min read</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WritingList;
