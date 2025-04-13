import { Category, Post } from "@/sanity.types";
import { imageUrl } from "@/lib/imageUrl";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortableText } from "@portabletext/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import CategorySelectorComponent from "./CategorySelectorComponent";
import PostGrid from "./PostGrid";

interface BlogListProps {
  posts: Post[];
  categories: Category[];

}

export default function BlogList({ posts , categories}: BlogListProps) {
  return (
    <div className=" flex flex-col">
      {/* categories */}
      <div className=" w-full sm:w-[200px]">
         <CategorySelectorComponent categories={categories} />
      </div>

      {/* products */}
      <div className="flex-1">
        <div>
        <PostGrid posts={posts} /> 

          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
}
