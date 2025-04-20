import { getAllPosts } from "@/sanity/lib/posts/getAllPosts";
import BlogList from "@/components/BlogList";
// import { getAllCategories } from "@/sanity/lib/posts/getAllCategories";
// import { Category, Post } from "@/sanity.types";




export default async function IndexPage() {
  const posts = await getAllPosts();
  // const categories = await getAllCategories();

  if (!posts) { 
    return <div>Loading...</div>;
  }
  if (posts.length === 0) { 
    return <div>No posts found </div>;
  }


  return (
    <main className="p-8">
      <hr className="border-gray-700 mb-10" />
      <div>
      {/* categories={categories} */}
        <BlogList posts={posts}  />
      </div>
    </main>
  );
}
