import React from "react";
import { Container, Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const doctors = [
  // {
  //   name: "Dr. Anwar Ali",
  //   specialty:"MBBS,MS,MCH (Urology) Ex –  SMS Hospital jaipur",
  //   image: "/doctors/anwarali.jpeg",
  // },
  {
    name: "Dr. Anwar Ali",
    specialty: "MBBS ,MS,MCH (Urology)  Ex – SMS Hospital Jaipur",
    image: "/doctors/anwarali.jpeg",
  },

  {
    name: "Dr. Satveer Choudhary",
    specialty: "MBBS, DNB Orthopedic Specialist Ex – RML Hospital Delhi",
    image: "/doctors/satveerchaudhary.jpeg",
  },
  {
    name: "Dr. Anil Khyaliya",
    specialty: "MBBS, MS, MCh (Neurosurgeon) Ex – SMS Jaipur & MDM Jodhpur",
    image: "/doctors/anilkhyaliya.jpeg",
  },
  {
    name: "Dr. Aslam (PT)",
    specialty: " BPT (Physiotherapist) Ex – SMS Hospital",
    image: "/doctors/aslam.jpeg",
  },
];

const Doctors = () => {
  return (
    <>
      {/* Doctors Page Hero Slider */}
      <section className="w-full relative">
        <Swiper
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination]}
          className="h-[380px] md:h-[550px] w-full"
        >
          {[
            "/banners/ourdoctors1.jpg",
            "/banners/ourdoctors2.jpg",
            "/banners/ourdoctors3.jpg",
          ].map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full relative">
                <img
                  src={img}
                  alt="Hospital Banner"
                  className="w-full h-full object-cover object-center"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Center Hero Text */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
                      Our Doctors
                    </h1>
                    <p className="mt-3 text-lg md:text-xl font-light">
                      Meet Our Highly Experienced & Compassionate Medical
                      Professionals
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Doctors</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-xl transition"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border border-gray-300"
              />
              <h3 className="text-xl font-semibold">{doc.name}</h3>
              <p className="text-gray-600">{doc.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;
