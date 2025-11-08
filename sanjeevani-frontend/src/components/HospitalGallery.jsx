import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HospitalGallery = () => {
  const slides = [
    "/banners/hospitalimage1.jpeg",
    // "/banners/hospitalImage2.jpg",
    // "/banners/hospitalImage3.jpg",
  ];

  return (
    <section className="w-full py-14 bg-white">
      <div className="text-center mb-6 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Our Hospital
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-3">
          We ensure a calm, clean, and technologically advanced space for faster
          recovery and better healthcare experience.
        </p>
      </div>

      {/* FULL WIDTH SLIDER WITHOUT BLACK GAPS */}
      <div className="w-full">
        <Swiper
          spaceBetween={0}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="rounded-none"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[380px] md:h-[600px]">
                <img
                  src={img}
                  alt={`Hospital view ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HospitalGallery;
