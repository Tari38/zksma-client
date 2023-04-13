import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from "../assets/photos/IMG_0104-144ea94b-1920w.jpeg";
import Slide2 from "../assets/photos/IMG_0614-2880w.webp";
import Slide3 from "../assets/photos/IMG_0614-b40c66e5-68d3a801-1920w.jpeg";
import "./components.css";

export default function LandingCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='landing-carousel'>
      <Carousel.Item>
        <img
          className="carousel-slide"
          src={Slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-slide"
          src={Slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-slide"
          src={Slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
