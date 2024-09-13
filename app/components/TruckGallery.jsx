"use client";

import React, { useState, useRef } from "react";
import { FaWindowClose } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-16">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-8">
        Truck Gallery
      </h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={1} // 1 slide per view for mobile
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides for screens >= 640px
          },
          768: {
            slidesPerView: 3, // 3 slides for screens >= 768px
          },
          1024: {
            slidesPerView: 4, // 4 slides for screens >= 1024px
          },
        }}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {[
          { src: "/truck/foodtruck1.jpg", alt: "Food Truck 1" },
          { src: "/truck/foodtruck2.jpg", alt: "Food Truck 2" },
          { src: "/truck/foodtruck3.jpg", alt: "Food Truck 3" },
          { src: "/truck/foodtruck4.jpg", alt: "Food Truck 4" },
        ].map((truck, index) => (
          <SwiperSlide
            key={index}
            onClick={() => openModal(index)}
            className="cursor-pointer"
          >
            <img src={truck.src} alt={truck.alt} className="w-full h-auto" />
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl h-auto p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside it
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white p-2 rounded-full z-50"
            >
              <FaWindowClose className="text-black text-xl" />
            </button>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              modules={[Navigation, Pagination, Scrollbar]}
              initialSlide={activeIndex}
            >
              {[
                { src: "/truck/foodtruck1.jpg", alt: "Food Truck 1" },
                { src: "/truck/foodtruck2.jpg", alt: "Food Truck 2" },
                { src: "/truck/foodtruck3.jpg", alt: "Food Truck 3" },
                { src: "/truck/foodtruck4.jpg", alt: "Food Truck 4" },
              ].map((truck, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={truck.src}
                    alt={truck.alt}
                    className="w-full h-auto max-h-[90vh] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
