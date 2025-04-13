import { imageUrl } from "@/lib/imageUrl";
import { Post } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";

function PostThumb({ post }: { post: Post }) {

  return (
    <Link
      href={`/post/${post.slug?.current}`}
      className={`group flex flex-col bg-white rounded-lg border
border-gray-200 shadow-sm hover:shadow-md transition-all duration-200
overflow-hidden `}
    >
      <div className="relative w-full h-full aspect-square overflow-hidden">
        {post.mainImage && (
            <Image
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            src={imageUrl(post.mainImage).url()}
            alt={post.title || "post image"}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
        )}
     
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {post.title}
        </h2>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {post.body
            ?.map((block) =>
              block._type === "block"
                ? block.children?.map((child) => child.text).join("")
                : ""
            )
            .join(" ") || "No description available"}
        </p>

        <p className="mt-2 text-lg font-bold Otext-gray-900">
          {/* Kes.{post.price?.toFixed(2)} */}
        </p>
      </div>
    </Link>
  );
}

export default PostThumb;
