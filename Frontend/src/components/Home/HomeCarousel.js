import React from 'react';
import ExampleCarouselImage from '../Cards/ExampleCarouselImage';
import './HomeCarousel.css'
import { Carousel } from 'react-bootstrap';
import image1 from '../images/carousal1.JPG';
import image3 from '../images/carousal3.JPG';

const HomeCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage src={image1}/>
          <Carousel.Caption className="text-center">
            <h1 className="fw-bold fs-lg-1 fs-sm-3 shadow-text">ENJOY WITH YOUR FAMILY</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={image3} />
          <Carousel.Caption className="text-center">
            <h1 className="fw-bold fs-lg-1 fs-sm-5 shadow-text">HAPPY KIDS MAKE YOU HAPPY</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
