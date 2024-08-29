import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-yellow-500 text-gray-800 p-10 max-w-[1200px] m-auto">
      <div className="max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-3xl font-bold flex items-center">
            <span role="img" aria-label="food" className="mr-2">
              🍴
            </span>
            ABOUT THE FOOD TRUCK
          </h3>
          <p className="mt-6 text-xl">
            The Food Truck rolled onto the streets of Sonoma in December, 2012.
            And with it, they took Sonoma by storm with everyone’s favorite
            comfort food; grilled cheese sandwiches, tacos – only not quite as
            innocent as mom used to make!
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold flex items-center">
            <span role="img" aria-label="clock" className="mr-2">
              ⏰
            </span>
            OPENING HOURS
          </h3>
          <ul className="mt-6 text-xl">
            <li>Monday: 8am-10pm</li>
            <li>Tuesday: 8am-10pm</li>
            <li>Wednesday: 8am-10pm</li>
            <li>Thursday: 8am-10pm</li>
            <li>Friday: 11am-12pm</li>
            <li>Saturday: 11am-12pm</li>
            <li>Sunday: 11am-12pm</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold flex items-center">
            <span role="img" aria-label="megaphone" className="mr-2">
              📣
            </span>
            CONNECT WITH US
          </h3>
          <ul className="mt-6 text-xl">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              435 Wandering Ct, Sonoma, CA
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              Reservations: (123) 456-7890
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              Catering: (123) 456-7890
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              contact@the-food-truck.com
            </li>
          </ul>
          <div className="flex mt-6 space-x-6 text-2xl">
            <FaFacebookF className="cursor-pointer hover:text-gray-700" />
            <FaTwitter className="cursor-pointer hover:text-gray-700" />
            <FaInstagram className="cursor-pointer hover:text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
