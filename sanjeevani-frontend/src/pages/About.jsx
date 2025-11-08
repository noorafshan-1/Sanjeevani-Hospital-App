import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/autoplay";
import HospitalGallery from "../components/HospitalGallery";

const About = () => {
  // const departments = [
  //   "Emergency & ICU",
  //   "General Surgery",
  //   "Cardiology",
  //   "Orthopedics",
  //   "Pediatrics",
  //   "Urology",
  //   "Obstetrics & Gynecology",
  //   "Radiology",
  //   "Pathology / Lab",
  //   "Oncology",
  //   "Psychiatry",
  //   "Pharmacy",
  //   "Nephrology & Dialysis",
  //   "Gastroenterology",
  //   "General / Internal Medicine",
  //   "Dental",
  //   "Physiotherapy & Rehabilitation",
  // ];

  return (
    <>
      <section className="relative w-full h-[250px]">
        <img
          src="/banners/hospitalimage.jpg"
          alt="Sanjivani Multispeciality Hospital"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>{" "}
        {/* Optional dim overlay */}
      </section>

      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 items-center gap-10">
          {/* Doctor 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/dr.anwarAli.jpeg" // Place image inside public folder
              alt="Dr. Anwar Ali"
              className="w-60 md:w-72 object-cover rounded-xl shadow-lg"
            />
            <p className="mt-3 text-xl font-semibold text-gray-800">
              Dr. Anwar Ali
            </p>
            <p className="text-sm text-gray-600">
              (MBBS, MS, MCH (Urology) Ex – SMS hospital jaipur)
            </p>
          </div>
          {/* Center Text */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-blue-700">
              Meet Our Leading Experts
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Sanjivani multispeclist Hospital is a premier multispecialty
              healthcare facility dedicated to providing exceptional medical
              care with a patient-centric approach. Equipped with 100 beds, the
              hospital caters to a wide range of health needs through its
              advanced infrastructure and compassionate medical team. It offers
              expert emergency services, intensive care (ICU), and outpatient
              care (OPD), alongside specialties such as general surgery,
              cardiology, orthopedics, pediatrics, urology, obstetrics and
              gynecology, radiology, pathology, oncology, psychiatry,
              nephrology, dialysis, gastroenterology, internal medicine, dental,
              physiotherapy, and rehabilitation. Led by esteemed directors Dr.
              Anwar Ali and Dr. Satveer Choudhary, Sanjivani multispeclist
              Hospital is committed to excellence, innovation, and compassionate
              healing, ensuring the highest standards of treatment and patient
              well-being.
            </p>
          </div>

          {/* Doctor 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/dr.satveer.jpeg" // Place image inside public folder
              alt="Dr. Satveer Choudhary"
              className="w-60 md:w-72 object-cover rounded-xl shadow-lg"
            />
            <p className="mt-3 text-xl font-semibold text-gray-800">
              Dr. Satveer Choudhary
            </p>
            <p className="text-sm text-gray-600">(MBBS, MS Ortho)</p>
          </div>
        </div>
      </section>
      {/* <section className="w-full bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <img
            src="/banners/aboutusbanner.jpeg"
            alt="Sanjivani Multispeciality Hospital"
            className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section> */}
      
      
      <HospitalGallery />

      {/* Departments Slider Section */}
      <section className="w-full py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Our Hospital Departments
          </h2>

          {/* <Swiper
            slidesPerView={3}
            spaceBetween={20}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          > */}

          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            navigation={true} // <--- Enable arrows
            modules={[Autoplay, Pagination, Navigation]} // <--- Add Navigation module
            className="pb-20" // <--- More space for dots
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {[
              { name: "Emergency & ICU", img: "/departments/emergency.png" },
              {
                name: "General Surgery",
                img: "/departments/generalSurgery.png",
              },
              { name: "Cardiology", img: "/departments/cardiology.png" },
              { name: "Orthopedics", img: "/departments/orthopedic.png" },
              { name: "Pediatrics", img: "/departments/pediatrics.png" },
              { name: "Urology", img: "/departments/Urologist.png" },
              {
                name: "Obstetrics & Gynecology",
                img: "/departments/obstetrics&Gynecology.png",
              },
              { name: "Radiology", img: "/departments/radiology.png" },
              { name: "Pathology / Lab", img: "/departments/pathology.png" },
              { name: "Oncology", img: "/departments/oncology.png" },
              { name: "Psychiatry", img: "/departments/psychiatry.png" },
              { name: "Pharmacy", img: "/departments/pharmacy.png" },
              {
                name: "Nephrology & Dialysis",
                img: "/departments/nephrology.png",
              },
              { name: "Gastroenterology", img: "/departments/gastro.png" },
              {
                name: "General / Internal Medicine",
                img: "/departments/internalMed.png",
              },
              { name: "Dental", img: "/departments/dental.jpg" },
              {
                name: "Physiotherapy & Rehabilitation",
                img: "/departments/physio.png",
              },
            ].map((dept, index) => (
              <SwiperSlide key={index} className="text-center">
                {/* <img
                  src={dept.img}
                  alt={dept.name}
                  className="w-full h-48 object-cover rounded-lg shadow"
                /> */}
                <div className="w-full bg-white rounded-lg shadow p-2">
                  <img
                    src={dept.img}
                    alt={dept.name}
                    className="w-full h-[180px] md:h-[220px] object-contain rounded-md"
                  />
                </div>
                <p className="mt-3 font-semibold text-gray-800 text-sm md:text-base">
                  {dept.name}
                </p>
                {/* <p className="mt-2 font-medium">{dept.name}</p> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Hospital Facilities Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Hospital Facilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "100 Bedded Hospital",
                img: "/facilities/bededHospital.png",
              },
              {
                title: "Well Equipped Advanced ICU",
                img: "/facilities/wellEquippedAdvancedICU.png",
              },
              {
                title: "Modular Operation Theatres",
                img: "/facilities/ot.png",
              },
              {
                title: "24 × 7 Emergency & Trauma Care",
                img: "/facilities/emergency.png",
              },
              {
                title: "NICU & PICU",
                img: "/facilities/nicu&picu.png",
              },
              {
                title: "Radiology (CT, X-Ray, Sonography)",
                img: "/facilities/radiology-xray.png",
              },
              { title: "Dialysis Center", img: "/facilities/dialysis.png" },
              {
                title: "Advanced Laboratory Services",
                img: "/facilities/lab.png",
              },
              { title: "24/7 Pharmacy", img: "/facilities/pharmacy.png" },
              { title: "Ambulance Service", img: "/facilities/ambulance.png" },
              {
                title: "Centrally Air-Conditioned Rooms",
                img: "/facilities/rooms.png",
              },
              {
                title: "Labour & Delivery Room",
                img: "/facilities/labourRoom.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition border border-gray-200 overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
