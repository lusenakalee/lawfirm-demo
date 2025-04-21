import React from "react";
import { imageUrl } from "@/lib/imageUrl";
import { getPostBySlug } from "@/sanity/lib/posts/getPostBySlug";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main post image */}
      <div className="relative w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
        {post.mainImage && (
          <Image
            src={imageUrl(post.mainImage).url()}
            alt={"post image"}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Post metadata and author */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        {post.authors && post.authors.length > 0 && (
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            {post.authors[0]?.image && (
              <Avatar className="h-12 w-12 border-2 border-background">
                <AvatarImage
                  src={imageUrl(post.authors[0].image).url()}
                  alt="Author"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            )}
            <div>
              <h3 className="font-medium">
                {" "}
                {post.authors[0]?.name || "Unknown Author"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {" "}
                {post.authors[0]?.position || "Unknown Author"}
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-1 h-4 w-4" />
            <span>
              {" "}
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      {/* expertises */}
      <div className="flex flex-wrap gap-2 mb-6">
        {post.expertises?.map((expertise, index) =>
          expertise?.title ? (
            <Badge key={index} variant="secondary">{expertise.title}</Badge>
          ) : null
        )}
      </div>


        {/* Post title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
       {post.title}
      </h1>

       {/* Post content */}
       <div className="prose prose-slate max-w-none">
        {Array.isArray(post.body) && (
          <PortableText value={post.body} />
        )}
        </div>





    </div>
  );
}
