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
      <h2 className="text-6xl font-bold text-center mb-8">Truck Gallery</h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
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
            style={{ cursor: "pointer" }}
          >
            <img src={truck.src} alt={truck.alt} width={350} height={350} />
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal} // Close modal on clicking outside the Swiper
        >
          <div
            style={{ position: "relative", width: "800px", height: "800px" }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside it
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "white",
                border: "none",
                cursor: "pointer",
                padding: "10px",
                zIndex: 1001,
              }}
            >
              <FaWindowClose style={{ color: "black" }} />
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
                    style={{
                      width: "800px",
                      height: "800px",
                      objectFit: "cover",
                    }}
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
