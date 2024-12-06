import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from '../assets/logo.png'

import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";

import Carousel from "react-bootstrap/Carousel";

const Navbar = () => {

    const navigate = useNavigate()

    const [barShow,setBarShow] = useState(false)
    function aboutClicked () 
    {
        navigate('/')
        scrollToDiv("about-section")
        setBarShow(false)
    }
    function projectsClicked () 
    {
        navigate('/projects')
        setBarShow(false)
    }
    function testimonialsClicked () 
    {
        navigate('/testimonials')
        setBarShow(false)
    }
    function contactClicked () 
    {
        sessionStorage.setItem('goToContact', JSON.stringify(true));
        // console.log("contactNeeded = ",sessionStorage.getItem('goToContact'));
        navigate('/')
        setBarShow(false)
    }
    function homeClicked () 
    {
        navigate('/')
        setBarShow(false)
    }

      // scroll to div
    const scrollToDiv = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setBarShow(false);
        // setOptionBar(!optionBar)
    };


    return (
      <div className="w-screen flex flex-col gap-0 ">
        <div className=" flex justify-around items-center lg:gap-36 xs:px-2 sm:px-2 md:px-10 lg:px-10 py-2 w-[100%] h[50%] bg-gray-800 text-white">
          <div className="lg:w-[30%] md:w-[35%] sm:w-[40%] xs:w-[60%] gap-4 flex items-center">
            <img
              onClick={() => navigate("/")}
              className=" rounded-full lg:h-20 md:h-20 sm:h-16 xs:h-16 hover:cursor-pointer"
              src={logo}
            />
            <div className="lg:text-4xl md:text-4xl sm:text-lg xs:text-lg  font-semibold">
              RD Construction CO.
            </div>
          </div>
          <div className=" flex items-center xs:hidden sm:block md:block lg:block visible">
            <p
              onClick={aboutClicked}
              className="text-2xl select-none font-medium hover:cursor-pointer"
            >
              About
            </p>
            {/* <div className="h-2 rounded-lg bg-red-500"></div> */}
          </div>
          <div className=" flex items-center  xs:hidden sm:block md:block lg:block">
            <p
              onClick={() => scrollToDiv("projects-section")}
              className="text-2xl select-none font-medium hover:cursor-pointer"
            >
              Projects
            </p>
            {/* <div className="h-2 rounded-lg bg-red-500"></div> */}
          </div>
          <div className=" flex items-center   xs:hidden sm:block md:block lg:block">
            <p
              onClick={() => navigate("/testimonials")}
              className="text-2xl select-none font-medium hover:cursor-pointer"
            >
              Testimonials
            </p>
            {/* <div className="h-2 rounded-lg bg-red-500"></div> */}
          </div>
          <div className=" flex items-center   xs:hidden sm:block md:block lg:block">
            <p
              onClick={() => scrollToDiv("contact-section")}
              className="text-2xl select-none font-medium hover:cursor-pointer"
            >
              Contact Us
            </p>
            {/* <div className="h-2 rounded-lg bg-red-500"></div> */}
          </div>
          {/* <div className=" flex items-center   xs:hidden sm:block md:block lg:block">
                    <p onClick={() => navigate('/contact')} className="text-xl select-none font-medium hover:cursor-pointer">
                        Contact Us
                    </p> 
                </div> */}
          <div className=" flex static items-center xs:block sm:hidden md:hidden lg:hidden">
            <FaBarsStaggered
              onClick={() => setBarShow(true)}
              className="hover:cursor-pointer"
              size="2em"
            />
            {barShow ? (
              <div className="font-semibold z-10 flex flex-col items-start gap-4 pl-4 pt-2 absolute bg-gray-800 text-white left-0 right-10 w-[95%] top-2 h-screen">
                <div className="border-b-2 hover:cursor-pointer static border-white ">
                  {/* <span className="" onClick={homeClicked}>
                    Home
                  </span> */}
                  <div className="absolute right-1 top-1">
                    <RiCloseFill
                      onClick={() => setBarShow(false)}
                      className="size-10 fill-white border border-white rounded-lg hover:cursor-pointer"
                    />
                  </div>
                </div>
                <div
                  onClick={() => navigate('/')}
                  className="border-b-2 hover:cursor-pointer border-white "
                >
                  Home
                </div>
                <div
                  onClick={aboutClicked}
                  className="border-b-2 hover:cursor-pointer border-white "
                >
                  About
                </div>
                <div
                  onClick={() => scrollToDiv("projects-section")}
                  className="border-b-2 block hover:cursor-pointer border-white "
                >
                  Projects
                </div>
                <div
                  onClick={testimonialsClicked}
                  className="border-b-2 hover:cursor-pointer border-white "
                >
                  Testimonials
                </div>
                {/* <div onClick={(contactClicked)} className="border-b-2 hover:cursor-pointer border-white ">
                                Contact Us
                            </div> */}

                <div
                  onClick={() => scrollToDiv("contact-section")}
                  className="border-b-2 hover:cursor-pointer border-white "
                >
                  Contact Us
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        {/* intro */}
        <Carousel className="w-full">
          <Carousel.Item interval={2000} className="">
            <img
              className="w-full brightness-50 lg:h-[600px] md:h-[600px] sm:h-[450px] xs:h-[450px] object-cover"
              src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559433/szhgrnynx5nyxyy109la.jpg"
              alt=""
            />
            {/* <ExampleCarouselImage text="First slide" /> */}
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="w-full brightness-50 lg:h-[600px] md:h-[600px] sm:h-[450px] xs:h-[450px] object-cover"
              src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872850/zsuge1dt2qbpaq5zwokw.jpg"
              alt="image"
            />
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="w-full brightness-50 lg:h-[600px] md:h-[600px] sm:h-[450px] xs:h-[450px] object-cover"
              src="http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559333/dgmtpopyo6xcglksrxd5.jpg"
              alt="image"
            />
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="w-full brightness-50 lg:h-[600px] md:h-[600px] sm:h-[450px] xs:h-[450px] object-cover "
              src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872933/i7smrmcmhx9dfzptmdwg.jpg"
              alt="image"
            />
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <Carousel.Caption>
              <h3>fourth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
}

export default Navbar