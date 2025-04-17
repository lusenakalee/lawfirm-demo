import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}




// import BlogList from "@/components/BlogList";
// import { getAllCategories } from "@/sanity/lib/posts/getAllCategories";
// import { getPostsByCategory } from "@/sanity/lib/posts/getPostsByCategory";


// async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const posts = await getPostsByCategory(slug);
//   const categories = await getAllCategories();


//     if (!posts || posts.length === 0) {
//         return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl text-center">
//             <h1 className="text-3xl font-bold mb-6">No posts found</h1>
//             <p className="text-gray-600">No posts available in this category.</p>
//             </div>
//         </div>
//         );
//     }

//   return (
//     <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
//         <h1 className="text-3xl font-bold mb-6 text-center">
//           {slug
//             .split("-")
//             .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(" ")}{" "}
//           Collection
//         </h1>
//         <BlogList posts={posts} categories={categories} />
//       </div>
//     </div>
//   );
// }

// export default CategoryPage;
