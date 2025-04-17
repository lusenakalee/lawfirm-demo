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
            We&apos;re a dynamic group of individuals who are passionate about
            what we do and dedicated to delivering the best results for our
            clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:flex gap-4 w-full ">
          <div className="team members border-r-2 border-gray-400 w-3/4">
            <Teams />
          </div>
          <div className="w-1/4   ">
            <OurValues />
          </div>
        </div>
      </div>
    </div>
  );
}
