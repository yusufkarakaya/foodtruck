import React from "react";
import { Amatic_SC, Gloria_Hallelujah } from "next/font/google";

const amatic = Amatic_SC({ subsets: ["latin"], weight: "700" });
const gloria = Gloria_Hallelujah({ subsets: ["latin"], weight: "400" });

const Header = () => {
  return (
    <header className="text-center mt-12">
      <nav>
        <h1 className={`text-7xl text-[#FFD700] ${amatic.className}`}>
          Temecula Treats
        </h1>
        <ul className="flex justify-center gap-10 mt-10">
          <li className="menu-item ">
            <a className={gloria.className} href="/home">
              HOME
            </a>
          </li>
          <li className="menu-item">
            <a className={gloria.className} href="/specials">
              TRUCK LOCATOR
            </a>
          </li>
          <li className="menu-item">
            <a className={gloria.className} href="/menu">
              MENU
            </a>
          </li>
          <li className="menu-item">
            <a className={gloria.className} href="/about">
              ABOUT
            </a>
          </li>
          <li className="menu-item">
            <a className={gloria.className} href="/contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
