import React from "react";

import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function Sample() {
  return (
    <div className="view flex flex-col gap-20 items-center justify-center h-auto w-screen bg-red-300 py-10">
      <Carousel className="w-[90%] ">
        <Carousel.Item interval={2000}>
            <img className="w-full brightness-50 lg:h-[600px] md:h-[600px] sm:h-[200px] xs:h-[200px]" src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559433/szhgrnynx5nyxyy109la.jpg" alt="" />
          {/* <ExampleCarouselImage text="First slide" /> */}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img className="w-full brightness-50 lg:h-[600px] md:h-[600px] sm:h-[200px] xs:h-[200px]" src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872850/zsuge1dt2qbpaq5zwokw.jpg" alt="image"/>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img className="w-full brightness-50 lg:h-[600px] md:h-[600px] sm:h-[200px] xs:h-[200px]" src="http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559333/dgmtpopyo6xcglksrxd5.jpg" alt="image"/>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img className="w-full brightness-50 lg:h-[600px] md:h-[600px] sm:h-[200px] xs:h-[200px]" src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872933/i7smrmcmhx9dfzptmdwg.jpg" alt="image"/>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <Carousel.Caption>
            <h3>fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* aaaaaaaaaaaaaaaaaaaaaaaaa */}
      <div className="carousel-item">
        <img
          src="http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559333/dgmtpopyo6xcglksrxd5.jpg"
          alt="..."
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>...</h5>
          <p>...</p>
        </div>
      </div>
    </div>
  );
}
export default Sample;
