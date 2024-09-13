import React from "react";
import Image from "next/image";

const FoodGallery = () => {
  return (
    <div className="max-w-[1200px] bg-white m-auto ">
      <h1 className="text-center text-7xl pt-16">The Food</h1>
      <p className="text-center text-3xl mt-4">
        Check out some of the delicious food we serve!
      </p>
      <div className="mt-10 pb-20">
        <div className="sm:flex sm:flex-row flex flex-col items-center gap-10 justify-center text-center">
          <div className="border  p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/foods/burger.webp"
                alt="Burger"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-2xl font-semibold">Burger</p>
            <p className="text-xl">$5.99</p>
          </div>
          <div className="border  p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/foods/cake.webp"
                alt="Cake"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-2xl font-semibold">Cake</p>
            <p className="text-xl">$9.99</p>
          </div>
          <div className="border  p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/foods/pasta.webp"
                alt="Pasta"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-2xl font-semibold">Pasta</p>
            <p className="text-xl">$7.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodGallery;
