import React from "react";
import TruckGallery from "./TruckGallery";

const Schedule = () => {
  return (
    <div className="flex justify-center max-w-[1200px] mx-auto">
      <div className="bg-[#2C3E50] text-white p-8 shadow-md w-full">
        <h2 className="text-6xl font-bold text-center mb-8">Truck Schedule</h2>
        <p className="text-center text-gray-300 mb-8 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-between">
          <div className="w-1/2">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-6">
              Today, February 14th
            </h3>
            <ul className="space-y-8">
              <li className="flex justify-start gap-16">
                <span className="text-2xl">09:00 - 11:00</span>
                <div>
                  <span className="font-semibold text-yellow-400 text-2xl">
                    Koreatown, Los Angeles
                  </span>
                  <p className="text-lg text-gray-400">
                    3624 Wilshire Blvd, 90010
                  </p>
                </div>
              </li>
              <li className="flex justify-start gap-16">
                <span className="text-2xl">11:30 - 15:00</span>
                <div>
                  <span className="font-semibold text-yellow-400 text-2xl">
                    Woodland Hills
                  </span>
                  <p className="text-lg text-gray-400">
                    6345 Variel Ave, 91367
                  </p>
                </div>
              </li>
              <li className="flex justify-start gap-16">
                <span className="text-2xl">15:30 - 18:00</span>
                <div>
                  <span className="font-semibold text-yellow-400 text-2xl">
                    Granada Hills
                  </span>
                  <p className="text-lg text-gray-400">
                    Zelzah Ave. and Chatsworth Street, 91344
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-6">
              Saturday, February 15th
            </h3>
            <ul className="space-y-8">
              <li className="flex justify-start gap-16">
                <span className="text-2xl">09:00 - 11:00</span>
                <div>
                  <span className="font-semibold text-yellow-400 text-2xl">
                    Koreatown, Los Angeles
                  </span>
                  <p className="text-lg text-gray-400">
                    3624 Wilshire Blvd, 90010
                  </p>
                </div>
              </li>
              <li className="flex justify-start gap-16">
                <span className="text-2xl">11:30 - 15:00</span>
                <div>
                  <span className="font-semibold text-yellow-400 text-2xl">
                    Woodland Hills
                  </span>
                  <p className="text-lg text-gray-400">
                    6345 Variel Ave, 91367
                  </p>
                </div>
              </li>
              <li className="flex justify-start gap-16">
                <span className="text-2xl">15:30 - 18:00</span>
                <div>
                  <span className="font-semibold text-yellow-400 text-2xl">
                    Granada Hills
                  </span>
                  <p className="text-lg text-gray-400">
                    Zelzah Ave. and Chatsworth Street, 91344
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <TruckGallery />
      </div>
    </div>
  );
};

export default Schedule;
