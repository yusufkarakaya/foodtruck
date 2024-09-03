"use client";
import React, { useState } from "react";
import { Amatic_SC, Gloria_Hallelujah } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use this hook in the App Router
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger and close button

const amatic = Amatic_SC({ subsets: ["latin"], weight: "700" });
const gloria = Gloria_Hallelujah({ subsets: ["latin"], weight: "400" });

const Header = () => {
  const pathname = usePathname(); // Get the current path
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for controlling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-center mt-12">
      <nav>
        <Link href="/">
          <h1 className={`text-7xl text-[#FFD700] ${amatic.className}`}>
            Temecula Treats
          </h1>
        </Link>
        <div className="md:hidden mt-6">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-[#FFD700] text-4xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex justify-center gap-10 mt-6`}
        >
          <li className="menu-item">
            <Link
              href="/"
              className={`${gloria.className} hover:text-[#FFD700] ${
                pathname === "/" ? "text-[#FFD700]" : ""
              } px-4 py-2 rounded-lg`}
            >
              HOME
            </Link>
          </li>

          <li className="menu-item">
            <Link
              href="/menu"
              className={`${gloria.className} hover:text-[#FFD700] ${
                pathname === "/menu" ? "text-[#FFD700]" : ""
              } px-4 py-2 rounded-lg`}
            >
              MENU
            </Link>
          </li>
          <li className="menu-item">
            <Link
              href="/about"
              className={`${gloria.className} hover:text-[#FFD700] ${
                pathname === "/about" ? "text-[#FFD700]" : ""
              } px-4 py-2 rounded-lg`}
            >
              ABOUT
            </Link>
          </li>
          <li className="menu-item">
            <Link
              href="/contact"
              className={`${gloria.className} hover:text-[#FFD700] ${
                pathname === "/contact" ? "text-[#FFD700]" : ""
              } px-4 py-2 rounded-lg`}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
