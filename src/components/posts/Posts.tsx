import { getPosts } from "@/lib/data-servise";
import PostCard from "../PostCard";

async function Posts() {
  const posts = await getPosts();

  //error handling---------------------------
  if (!posts) {
    return <div>Error fetching posts</div>;
  }
  //loading state---------------------------
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
