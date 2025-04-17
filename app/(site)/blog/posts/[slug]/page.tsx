import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}





// import { imageUrl } from "@/lib/imageUrl";
// import { getPostBySlug } from "@/sanity/lib/posts/getPostBySlug";
// import { PortableText } from "next-sanity";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// async function PostPage({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   const post = await getPostBySlug(slug);

//   if (!post) return notFound();

//   return (
//     <article className="px-10 pb-28">
//       <section className="space-y-2 border border-emphasize">
//         <div className="min-h-56 relative flex flex-col justify-between md:flex-row">
//           <div className="absolute top-0 h-full w-full p-10 opacity-20 blur-sm">
//             {post.mainImage && (
//               <Image
//                 className="mx-auto object-cover object-center"
//                 src={imageUrl(post.mainImage).url()}
//                 alt={ "post image"}
//                 fill
//               />
//             )}
//           </div>

//           <section className="w-full bg-emphasize p-5">
//             <div className="flex flex-col justify-between gap-y-5 md:flex-row">
//               <div>
//                 <h1 className="text-4xl font-extrabold">{post.title}</h1>
//                 <p>
//                   {new Date(post._createdAt).toLocaleDateString("en-US", {
//                     day: "numeric",
//                     month: "long",
//                     year: "numeric",
//                   })}
//                 </p>
//               </div>

//               {post.authors && post.authors.length > 0 && (
//                 <div className="flex items-center space-x-2">
//                   {post.authors[0]?.image && (
//                     <Image
//                       className="h-10 w-10 rounded-full"
//                       src={imageUrl(post.authors[0].image).url()}
//                       alt={post.authors[0].name || "Author"}
//                       width={40}
//                       height={40}
//                     />
//                   )}
//                   <div className="w-64">
//                     <h3 className="text-lg font-bold">
//                       {post.authors[0]?.name || "Unknown Author"}
//                     </h3>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div>
//               {post.body && (
//                 <div className="pt-10 italic">
//                   <PortableText  value={post.body} />
//                 </div>
//               )}

//               <div className="mt-auto flex items-center justify-end space-x-2 flex-wrap">
//                 {post.categories?.map((category, index) =>
//                   category?.title ? (
//                     <p
//                       key={index}
//                       className="mt-4 rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-white"
//                     >
//                       {category.title}
//                     </p>
//                   ) : null
//                 )}
//               </div>
//             </div>
//           </section>
//         </div>
//       </section>

//       <div className="prose max-w-none mb-6">
//         {Array.isArray(post.body) && (
//           <PortableText  value={post.body} />
//         )}
//       </div>
//     </article>
//   );
// }

// export default PostPage;
