import Link from "next/link";

import { getAllPosts } from "@/sanity/lib/posts/getAllPosts";
import BlogList from "@/components/BlogList";
import { getAllCategories } from "@/sanity/lib/posts/getAllCategories";

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  console.log("posts in bloglist", posts);
  if (!posts) { 
    return <div>Loading...</div>;
  }
  if (posts.length === 0) { 
    return <div>No posts found lee</div>;
  }


  return (
    <main className="">
      <hr className="border-gray-700 mb-10" />
      <div>
        <BlogList posts={posts} categories={categories} />
      </div>
    </main>
  );
}
