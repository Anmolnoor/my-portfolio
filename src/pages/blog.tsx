import PageHeader from "@/components/elements/PageHeader";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/utils/posts";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Writing / Blog"
        title="Notes on shipping software"
        description="Frontend, distributed systems, Web3, real-time media, and developer tooling — written as I learn."
      />

      {posts.length === 0 ? (
        <div className="rounded-lg border bg-card p-12 text-center">
          <p className="font-mono text-lg font-semibold">Coming soon</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
