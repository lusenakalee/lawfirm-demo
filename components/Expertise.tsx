import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { getAllExpertises } from "@/sanity/lib/expertise/getAllExpertise";

export async function Expertise() {
    const expertises = await getAllExpertises();
 
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

<div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-4">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Our Expertise </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                With a deep understanding of the law and a client-first approach, we provide strategic, effective solutions across a broad range of legal areas—always with integrity, precision, and unwavering commitment to protecting your rights.
                </p>
              </div>
            </div>
          </div>


      <InfiniteMovingCards
        expertises={expertises}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
