import NewCard from "@/components/elements/newCard";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/utils/posts";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <NewCard title="Blog" viewAll>
      {posts.length === 0 ? (
        <div className="my-6 flex justify-center">
          <h4 className="text-xl font-semibold">Coming Soon</h4>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Notes on shipping software — frontend, Web3, realtime media.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </NewCard>
  );
};

export default Blog;
