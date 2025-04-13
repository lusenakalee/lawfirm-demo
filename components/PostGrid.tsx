"use client";

import { AnimatePresence, motion } from "motion/react";
import PostThumb from "./PostThumb";
import { Post } from "@/sanity.types";

function PostGrid({ posts }: { posts: Post[] }) {

    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {posts?.map((post) => {
        return (
            <AnimatePresence key={post._id}>
          <motion.div
            layout
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center"
          >
               <PostThumb key={post._id} post={post} />
          </motion.div>
            </AnimatePresence>
        );
      })}
    </div>
  );
}
export default PostGrid;
