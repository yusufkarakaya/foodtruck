"use client";
import React from "react";
import { Amatic_SC, Gloria_Hallelujah } from "next/font/google";
import Header from "../components/Header";

const amatic = Amatic_SC({ subsets: ["latin"], weight: "700" });
const gloria = Gloria_Hallelujah({ subsets: ["latin"], weight: "400" });

const Contact = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <h2 className={`text-6xl text-[#FFD700] ${amatic.className} mb-8`}>
          Contact Us
        </h2>
        <p
          className={`text-xl text-gray-200 ${gloria.className} max-w-3xl text-center mb-6`}
        >
          We’d love to hear from you! Whether you have a question, a special
          request, or just want to say hello, feel free to reach out to us.
        </p>

        <form className="w-full max-w-lg bg-[#2C3E50] p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label
              className="block text-gray-200 text-lg font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-200 text-lg font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-200 text-lg font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#FFD700] text-black font-bold rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Send Message
            </button>
          </div>
        </form>

        <p
          className={`text-xl text-gray-200 ${gloria.className} max-w-3xl text-center mt-10`}
        >
          Or reach us directly at: <br />
          <span className="font-bold">Phone:</span> (555) 123-4567 <br />
          <span className="font-bold">Email:</span> info@temeculatreats.com
        </p>
      </main>
    </div>
  );
};

export default Contact;
