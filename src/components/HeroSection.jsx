import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full relative">
      <div className="flex justify-center my-2 md:my-4 flex-wrap">
        <img src="/assets/heroImage.png" alt="Hero Image" />
        <div className=" md:absolute top-[25%] left-[22%] mt-3">
          <h1 className="md:text-6xl text-4xl">
            Let Your Home <br /> Be Unique
          </h1>
          <p className="py-4">
            There are many variations of the passages of <br /> lorem Ipsum
            fromavailable, majority.
          </p>
          <button className="bg-[#292F36] text-white p-4 rounded-2xl w-[180px] font-semibold hover:shadow-lg hover:scale-110 transition-all flex items-center gap-3">
            Get Started
            <FaArrowRight color="#CDA274" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
