import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";

// import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

// import emergencyImg from "../assets/departments/emergency.jpg";
// import surgeryImg from "../assets/departments/surgery.jpg";
// import cardiologyImg from "../assets/departments/cardiology.jpg";
// import orthoImg from "../assets/departments/ortho.jpg";
// import pediatricsImg from "../assets/departments/pediatrics.jpg";
// import urologyImg from "../assets/departments/urology.jpg";
// import gynaeImg from "../assets/departments/gynae.jpg";
// import radiologyImg from "../assets/departments/radiology.jpg";
// import pathologyImg from "../assets/departments/pathology.jpg";
// import oncologyImg from "../assets/departments/oncology.jpg";
// import psychiatryImg from "../assets/departments/psychiatry.jpg";
// import pharmacyImg from "../assets/departments/pharmacy.jpg";
// import nephrologyImg from "../assets/departments/nephrology.jpg";
// import gastroImg from "../assets/departments/gastro.jpg";
// import internalMedImg from "../assets/departments/internalMed.jpg";
// import dentalImg from "../assets/departments/dental.jpg";
// import physioImg from "../assets/departments/physio.jpg";

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
            <p className="text-sm text-gray-600">(MBBS, MD)</p>
          </div>

          {/* Center Text */}
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
      {/* Departments Slider Section */}
      <section className="w-full py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Our Hospital Departments
          </h2>

          <Swiper
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
          >
            {[
              { name: "Emergency & ICU", img: "/departments/emergency.png" },
              { name: "General Surgery", img: "/departments/generalSurgery.png" },
              { name: "Cardiology", img: "/departments/cardiology.png" },
              { name: "Orthopedics", img: "/departments/orthopedic.png" },
              { name: "Pediatrics", img: "/departments/pediatrics.png" },
              { name: "Urology", img: "/departments/Urologist.png" },
              {
                name: "Obstetrics & Gynecology",
                img: "/departments/gynae.jpg",
              },
              { name: "Radiology", img: "/departments/radiology.jpg" },
              { name: "Pathology / Lab", img: "/departments/pathology.jpg" },
              { name: "Oncology", img: "/departments/oncology.jpg" },
              { name: "Psychiatry", img: "/departments/psychiatry.jpg" },
              { name: "Pharmacy", img: "/departments/pharmacy.jpg" },
              {
                name: "Nephrology & Dialysis",
                img: "/departments/nephrology.jpg",
              },
              { name: "Gastroenterology", img: "/departments/gastro.jpg" },
              {
                name: "General / Internal Medicine",
                img: "/departments/internalMed.jpg",
              },
              { name: "Dental", img: "/departments/dental.jpg" },
              {
                name: "Physiotherapy & Rehabilitation",
                img: "/departments/physio.jpg",
              },
            ].map((dept, index) => (
              <SwiperSlide key={index} className="text-center">
                <img
                  src={dept.img}
                  alt={dept.name}
                  className="w-full h-48 object-cover rounded-lg shadow"
                />
                <p className="mt-2 font-medium">{dept.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default About;
