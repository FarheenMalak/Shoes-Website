import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col justify-between pt-25 md:flex-row items-center h-screen px-6 md:px-12"> 
      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-8xl font-bold text-black leading-tight">
          Best In Style <br /> Collection <br /> For You
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          We craft the, we won’t say the best, <br /> But through 70 years of experience in the industry.
        </p>
        <button className="bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-base md:text-lg hover:bg-gray-800 transition">
          Pre-order Now
        </button>
      </div>
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
        <img
          src="shoe.PNG"
          alt="Running Shoe"
          className="w-54 md:w-[500px]"
        />
        <div className="absolute bottom-6 right-6 text-center bg-white p-2 rounded-md shadow-md">
          <p className="text-gray-500 text-xs md:text-sm">Best Quality</p>
          <p className="text-black text-lg md:text-xl font-bold">99%</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;