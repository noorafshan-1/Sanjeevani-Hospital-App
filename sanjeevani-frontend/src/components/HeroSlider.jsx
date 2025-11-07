import React from "react";
import { Carousel } from "react-bootstrap";

const HeroSlider = () => {
  
  return (
    <Carousel fade interval={3000}>
      
      <Carousel.Item>
        <img
          className="w-full h-[550px] object-cover object-center"
          src="banner1.png"
          alt="First slide"
        />
        <Carousel.Caption className="bg-black/40 p-4 rounded">
          <h2 className="text-3xl md:text-4xl font-bold">Your Health is Our Priority</h2>
          <p className="text-sm md:text-lg">24/7 Multispeciality Healthcare with Trusted Doctors</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
         className="w-full h-[550px] object-cover object-center"
          src="banner2.png"
          alt="Second slide"
        />
        <Carousel.Caption className="bg-black/40 p-4 rounded">
          <h2 className="text-3xl md:text-4xl font-bold">Advanced Medical Facilities</h2>
          <p className="text-sm md:text-lg">Modern equipment & experienced specialists</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="w-full h-[550px] object-cover object-center"
          src="banner3.png"
          alt="Third slide"
        />
        <Carousel.Caption className="bg-black/40 p-4 rounded">
          <h2 className="text-3xl md:text-4xl font-bold">Compassionate Patient Care</h2>
          <p className="text-sm md:text-lg">We care for you like family</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default HeroSlider;
