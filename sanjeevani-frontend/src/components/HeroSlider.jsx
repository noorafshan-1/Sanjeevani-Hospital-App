import React from "react";
import { Carousel } from "react-bootstrap";

const HeroSlider = () => {
  return (
    <Carousel fade interval={3000} controls indicators>
      <Carousel.Item>
        <div className="w-full h-[210px] md:h-[620px] overflow-hidden relative">
          <img
            // className="w-full md:h-[650px] h-[450px] object-cover"
            className="w-full h-full object-cover object-center"
            src="banner1.jpeg"
            alt="First slide"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="w-full h-[210px] md:h-[620px] overflow-hidden relative">
          <img
            className="w-full h-full object-cover object-center"
            src="banner2.jpeg"
            alt="Second slide"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="w-full h-[210px] md:h-[620px] overflow-hidden relative">
          <img
            className="w-full h-full object-cover object-center"
            src="banner3.jpeg"
            alt="Third slide"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="w-full h-[210px] md:h-[620px] overflow-hidden relative">
          <img
            className="w-full h-full object-cover object-center"
            src="banner4.jpeg"
            alt="Third slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSlider;
