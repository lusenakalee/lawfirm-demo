"use client";
import { LayoutGrid } from "./ui/layout-grid";

export function OurSection() {
  return (
    <div className="h-screen py-2 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Our value proposition
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Our teams understand you and your business and we are structured according to the industries you operate in. Our focus is on helping you identify and mitigate risk while enabling your business to thrive. We care about the impact of investment and business on environment and operating ethically at the intersection of innovation, profitability and regulation.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Our History
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Over the years, we have built a reputation for excellence and have established ourselves as a trusted legal resource in our community. Our team of experienced lawyers has helped countless clients to achieve their legal goals, and we are proud of the positive impact we have had on our clients&apos; lives.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Our Vision
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      As a forward-thinking law firm that has undoubtedly stood the test of time, we strive to become the go-to corporate attorneys not only in Zimbabwe but across the globe.
      To maintain our status as the leading full-service and future- facing commercial law firm.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Our Profile
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      If you are in need of legal representation, we encourage you to learn more about our firm and how we can help you. We are here to provide the legal support and guidance you need to achieve a successful outcome.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/gavel.jpg",
    title: " Our value proposition",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:"/images/grid3.webp",
    title: "Our History ",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/grid4.webp",
    title: "Our Vision ",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/lawbook.jpg",
    title: "  Our Profile",
  },
];
