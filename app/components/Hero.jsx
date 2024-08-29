import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="flex justify-center mt-6 max-w-[1200px] min">
        <div className="background-hero min-w-[1200px] min-h-[550px] p-4 flex flex-col justify-center items-center">
          <div className="flex flex-col ">
            <h1 className="text-7xl font-bold text-white text-center">
              Visit The Food Truck Today
            </h1>
            <p className="mt-4 text-white text-center text-2xl">
              Made from locally sourced & fresh ingredients
            </p>
          </div>
          <button className="text-white border py-4 px-8 mt-5 hover:animate-pulse hover:text-[#FFD700]">
            Contact with us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
