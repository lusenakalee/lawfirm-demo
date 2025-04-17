import {  Post } from "@/sanity.types";
import PostGrid from "./PostGrid";

interface BlogListProps {
  posts: Post[];
  // categories: Category[];

}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className=" flex flex-col">
      {/* categories */}
      {/* <div className=" w-full sm:w-[200px]">
         <CategorySelectorComponent categories={categories} />
      </div> */}

      {/* posts */}
      <div className="flex-1">
        <div>
        <PostGrid posts={posts} /> 

          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
}
