import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import image1 from "../../images/banner1.jpg"
import image2 from "../../images/banner2.jpg"
import image3 from "../../images/banner3.jpg"
import "./Banner.css"

const Banner = () => {
    return (
        <Carousel controls={true} indicators={false} interval={3000}>
  <Carousel.Item className="drk">
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption className="ccd bgDark">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="drk">
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption className="ccd bgDark">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="drk">
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption className="ccd bgDark">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;