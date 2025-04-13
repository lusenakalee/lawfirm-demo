import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { getAllExpertises } from "@/sanity/lib/expertise/getAllExpertise";

export async function Expertise() {
    const expertises = await getAllExpertises();
 
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        expertises={expertises}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
