import React from "react";
import { Teams } from "./Teams";
import OurValues from "./OurValues";

export default function TeamValues() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 ">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our leadership & Values
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
          At the heart of our firm is a commitment to integrity, professionalism, and client-focused service. Our team of dedicated legal professionals brings together a wealth of experience and a shared passion for justice. 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:flex gap-4 w-full ">
          <div className=" border-b-2 md:border-b-0 border-r-0 md:border-r-2 border-gray-400 w-full md:w-3/4">
            <Teams />
          </div>
          <div className=" w-full md:w-1/4   ">
            <OurValues />
          </div>
        </div>
      </div>
    </div>
  );
}
