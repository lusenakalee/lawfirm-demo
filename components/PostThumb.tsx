import { imageUrl } from "@/lib/imageUrl";
import { Post } from "@/sanity.types";
import Link from "next/link";

function PostThumb({ post }: { post: Post }) {

  return (


    

    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs">
        {post.mainImage && (
  <img
  src={imageUrl(post.mainImage).url()}
            alt={post.title || "post image"}
  className="h-56 w-full object-cover"
  />
        )}

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
      {post.title}
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    {post.body
            ?.map((block) =>
              block._type === "block"
                ? block.children?.map((child) => child.text).join("")
                : ""
            )
            .join(" ") || "No description available"}
    </p>

    <Link  href={`/blog/posts/${post.slug?.current}`} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-shadow-neutral-500">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link>
  </div>
</article>
















//     <Link
//       href={`/post/${post.slug?.current}`}
//       className={`group flex flex-col bg-white rounded-lg border
// border-gray-200 shadow-sm hover:shadow-md transition-all duration-200
// overflow-hidden `}
//     >
//       <div className="relative w-full h-full aspect-square overflow-hidden">
//         {post.mainImage && (
//             <Image
//             className="object-contain transition-transform duration-300 group-hover:scale-105"
//             src={imageUrl(post.mainImage).url()}
//             alt={post.title || "post image"}
//             fill
//             sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
//             />
//         )}
     
//       </div>
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-800 truncate">
//           {post.title}
//         </h2>

//         <p className="mt-2 text-sm text-gray-600 line-clamp-2">
        
//         </p>

//         <p className="mt-2 text-lg font-bold Otext-gray-900">
//           {/* Kes.{post.price?.toFixed(2)} */}
//         </p>
//       </div>
//     </Link>
  );
}

export default PostThumb;
