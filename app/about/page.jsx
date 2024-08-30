"use client";
import React from "react";
import { Amatic_SC, Gloria_Hallelujah } from "next/font/google";
import Header from "../components/Header";

const amatic = Amatic_SC({ subsets: ["latin"], weight: "700" });
const gloria = Gloria_Hallelujah({ subsets: ["latin"], weight: "400" });

const About = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <h2 className={`text-6xl text-[#FFD700] ${amatic.className} mb-8`}>
          About Us
        </h2>
        <p
          className={`text-xl text-gray-200 ${gloria.className} max-w-3xl text-center mb-6`}
        >
          Welcome to Temecula Treats! We are a family-owned and operated food
          truck business located in the heart of Temecula, California. Our
          mission is to bring you the most delicious and freshly made treats,
          ranging from mouth-watering cupcakes and cookies to hearty burgers and
          pizzas. We use only the highest quality ingredients to ensure every
          bite is a memorable experience.
        </p>
        <p
          className={`text-xl text-gray-200 ${gloria.className} max-w-3xl text-center mb-6`}
        >
          Since our inception, we’ve been committed to offering not just great
          food, but also an exceptional customer experience. Our food truck is
          more than just a place to grab a quick bite – it’s a place where
          communities come together. Whether you're a local resident or just
          visiting Temecula, we invite you to stop by and enjoy a taste of our
          delightful offerings.
        </p>
        <p
          className={`text-xl text-gray-200 ${gloria.className} max-w-3xl text-center`}
        >
          Thank you for supporting our small business. We look forward to
          serving you soon!
        </p>
      </main>
    </div>
  );
};

export default About;
