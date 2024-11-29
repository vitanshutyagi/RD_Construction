import React, { useEffect, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";

import "../styles/Main.css";

import ProjectCard from "./ProjectCard";
import OngoingProjectCard from "./OngoingProjectCard";
import { PiWhatsappLogo } from "react-icons/pi";
import { FaWhatsappSquare } from "react-icons/fa";

function Main() {
  const navigate = useNavigate();

  const [showProjects, setShowProjects] = useState(false);
  const [ongoingProjects, setOngoingProjects] = useState(false);

  let projects = [
    {
      projectName: "Bridge Construction ChhatraPul, Saharanpur",
      location: "Saharanpur",
      client: "Saharanpur Smart Cities Ltd.",
      COP: "152.45Lacs (2020-21)",
    },

    {
      projectName:
        "BalanceworkNH-72 (RE Wall , Crash Barrier withDrawing , Design Materials Road Furnishing and Protection work)",
      location: "Haridwar, Uttrakhand",
      client: "UP State Bridge Corporation Limited",
      COP: "793.68Lacs (2019-20)",
    },

    {
      projectName: "NH-91 Aligarh to Kanpur (RS Wall Construction )",
      location: "Mainpuri U.P.",
      client: "APCO Infratech PVt.Ltd.",
      COP: "180.00Lacs(2019-20)",
    },

    {
      projectName: "RohtaK Road, Meerut",
      location: "Meerut",
      client: "UP State Bridge Corporation Limited",
      COP: "75.00 Lacs (2013-14)",
    },

    {
      projectName: "Saharanpur 2&3 With Drawing& Designand Material",
      location: "Saharanpur",
      client: "Smart CitiesLimited",
      COP: "248.87Lacs(2020-21)",
    },

    {
      projectName: "ROB 10 A Mirzapur With Drawing& Design and Material",
      location: "Mirzapur",
      client: "UP State Bridge Corporation Ltd",
      COP: "158.42Lacs(2021-22)",
    },

    {
      projectName: "ROB 29B & 27C , Allahabad Design , Drawings & Material",
      location: "Allahabad",
      client: "UP State Bridge Corporation Ltd",
      COP: "371.92 Lacs(2020-21)",
    },

    {
      projectName:
        " 6 Laning of Thaliparambha-Muzahapilangad Section of NH-66(ProjectLength29.948KM)",
      location: "Kerala",
      client: "Vishwa Samudra Eng . pvt. Ltd.",
      COP: "359.10 Lacs (2020-21)",
    },

    {
      projectName: "ROB 65 , Firozabad , Design , Drawings & Material",
      location: "Firozabad",
      client: "UP State Bridge Corporation Ltd",
      COP: "80 Lacs(2015-16)",
    },

    {
      projectName: "ROB Dadri Design , Drawings & Material",
      location: "Dadri",
      client: "UP State Bridge Corporation Ltd",
      COP: "75 Lacs (2015-16)",
    },

    {
      projectName: "ROB Firozabad Design , Drawings & Material",
      location: "Firozabad",
      client: "UP State Bridge Corporation Ltd",
      COP: "100.00 Lacs(2016-17)",
    },

    {
      projectName: "ROB 78A , Bakshi Bandh Design , Drawings & Material",
      location: "Allahabad",
      client: "UP State Bridge Corporation Ltd",
      COP: "75 Lacs(2021-22)",
    },

    {
      projectName: "ROB Kuberpur , Design , Drawings & Material",
      location: "Kuberpur",
      client: "UP State Bridge Corporation Ltd",
      COP: "200 Lacs(2016 -17 )",
    },

    {
      projectName:
        "ROB Murga Phatak , Design , Drawings & Material along with Crash Barrier",
      location: "Mathura",
      client: "UP State Bridge Corporation Ltd",
      COP: "130.00 Lacs(2016-17 )",
    },
    {
      projectName:
        "ROB T1/B, Design , Drawings & Material along with Crash Barrier",
      location: "Allahabad",
      client: "UP State Bridge Corporation Ltd",
      COP: "112.00 Lacs(2017-18 )",
    },

    {
      projectName:
        "ROB 38D , Design , Drawings & Material along with Crash Barrier",
      location: "Allahabad",
      client: "UP State Bridge Corporation Ltd",
      COP: "129.00 Lacs(2018-19 )",
    },

    {
      projectName:
        "ROB 16B , Design , Drawings & Material along with Crash Barrier",
      location: "Bulandshehar",
      client: "UP State Bridge Corporation Ltd",
      COP: "80.00 Lacs(2018-19 )",
    },

    {
      projectName:
        "ROB 35B , Design , Drawings & Material along with Crash Barrier",
      location: "Allahabad",
      client: "UP State Bridge Corporation Ltd",
      COP: "129.00 Lacs(2018-19 )",
    },

    {
      projectName:
        "ROB 543, Design , Drawings & Material along with Crash Barrier",
      location: "Mathura",
      client: "UP State Bridge Corporation Ltd",
      COP: "170.00 Lacs(2019-20 )",
    },

    {
      projectName:
        "ROB 68B , Design , Drawings & Material along with Crash Barrier",
      location: "Agra",
      client: "UP State Bridge Corporation Ltd",
      COP: "250.00 Lacs(2019-20 )",
    },

    {
      projectName:
        "Alaknanda Gram Upalada , Shrinagar ( Supply , Drilling , Installation of Anchor Bolts for Protection works",
      location: "Uttarakhand",
      client: " Mathiyan Construction Pvt. Ltd",
      COP: "950 .00 Lacs(2019-20 )",
    },

    {
      projectName:
        "4 laning of Kodinar-Veeraval Project NH 8E (Supply , Design , Drawing , Crash Barrier)",
      location: "Distt. Gir, Somnath , Gujarat",
      client: "Agroh Infrastucture Projects Pvt. Ltd",
      COP: "720.50 Lacs(2022-23)",
    },

    {
      projectName:
        "Balance Works NH 72 , Railway Underpass ( Supply , Drilling , Installation of AnchorBolts for Protection works )",
      location: "Motichur Haridwar",
      client: "UP State Bridge Corporation Ltd",
      COP: "250.00 Lacs(2020-21 )",
    },
  ];

  let ongoing = [
    {
      project:
        "Drawing & Design , Supply & Construction of Reinforced Soil walls for Construction of Four/Six lane km 515+000 to 528+300 (Kunjwani to Sidhra section of NH-44) Section in J & K ",
      contractor: "APCO Infratech Pvt Ltd",
      YOA: "2023-24",
      value: "506",
    },
    {
      project:
        "Drawing & Design , Supply & Construction of Reinforced Soil walls for Four/Six lane from km 550+900 to 566+520 (Domel to Katra Section) J &K",
      contractor: "APCO Infratech Pvt Ltd",
      YOA: "2023-24",
      value: "1042",
    },
    {
      project:
        "Crash Barrier Works Construction of Four/ Size Lane Km 515+000 to 528+000 (Kuniwani to Sidhra Section of NH-44 & from km 550+900 to 566+520 (Domel to Katra Section)in the state of J&K",
      contractor: "APCO Infratech Pvt Ltd ",
      YOA: "2023-24",
      value: "328",
    },
    {
      project:
        "Crash Barrier Works for Construction of 4-Laining of Jadhri Tejewala Yamuna Nagar NH-907 in State of Haryana ",
      contractor: "RajShyamaConstructions Pvt. Ltd.",
      YOA: "2023-24",
      value: "425",
    },
    {
      project:
        "Construction &Upgradation Chattroo section of NH244 slobe stabilization & protection work in the union Territory of Jammu &Kashmir",
      contractor: "Mathiyan Construction Pvt. Ltd.",
      YOA: "2023-24",
      value: "835",
    },
    {
      project:
        "Drawing & Design , Supply & Construction of Reinforced Soil walls for Upgradation of Bijnor to Kotwali Section ofNH-709AD from Km.153.660 to Km175.280 on EPC mode under NH(O) in UttarPradesh ",
      contractor: "MathiyanConstructionPvt.Ltd",
      YOA: "2022-23",
      value: "927.5",
    },
    {
      project:
        "Drawing & Design , Supply & Construction of Reinforced Soil walls for Rehabilitation and Augmentation of New NH 354 Section Amritsar (Airport Junction) State of Punjab - Drawing & Design , Supply & Construction",
      contractor: "P.S.Constructions",
      YOA: "2022-23",
      value: "320",
    },
    {
      project:
        "Drawing & Design , Supply & Construction of Reinforced Soil walls for Construction of 4-lane BeasBatala-Dera Baba Nanak Highway (NH503-D) Jalandhar Amritsar National Highway in State of Punjab ",
      contractor: "Ganesh Garhia Construction Pvt.Ltd. ",
      YOA: "2022-23",
      value: "528",
    },
    {
      project:
        "Drawing & Design , Supply & Construction of Reinforced Soil walls for Construction of 4-Laining of Jagdhri Tejewala YamunaNagarNH-907 State of Haryana",
      contractor: "RajShyamaConstructions Pvt. Ltd",
      YOA: "2022-23",
      value: "857",
    },
    {
      project:
        "Drawing & Design , Supply & Construction of Reinforced Soil walls for Construction of Two Lane with Paved Shoulder for Fatehpur Bypass, Mandawa Bypass & Jhunhuu Bypass in State of Rajasthan",
      contractor: "NGC-TCC JV",
      YOA: "2022-23",
      value: "784",
    },
    {
      project:
        "Drawing & Design , Supply & Construction of Reinforced Soil walls for Construction Work KM 31+600 t o KM 28+120 Meerut Gharmukteswar State of Uttar Pradesh ",
      contractor: "Mathiyan Construction Pvt. Ltd.",
      YOA: "2022-23",
      value: "1350",
    },
    {
      project:
        "Construction of Reinforced Soil walls for Khevat No. 92/96, Kila Number 21 &22 Near Gagli Farm, Village Khatiavas Tehsil Pataudig, Gurgaon, Haryana",
      contractor: "Subhash Infra Engineers Pvt. Ltd.",
      YOA: "2021-22",
      value: "169.45",
    },
    {
      project:
        "Drawing & Design , Supply & Construction of Reinforced Soil walls with Crash Barrier for ROB 143 & 141 Greater Noida ",
      contractor: "UP State Bridge Corporation Ltd .",
      YOA: "2020-21",
      value: "443.67",
    },
    {
      project:
        "Crash Barrier Works Construction of Four/ Size Lane Km 515+000 to 528+000 (Kuniwani to Sidhra) Section of NH-44 & from km 550+900 to 566+520 (Domel to Katra Section)in the state of J&K",
      contractor: "APCO Infratech Pvt Ltd",
      YOA: "2023-24",
      value: "328",
    },
    {
      project:
        "Slobe stabilization & protection work in the state of mizoram for Construction of Hnathial bypass (Package-2) on Aizawl-Tuipang section of NH-54",
      contractor: "Mathiyan Construction Pvt. Ltd.",
      YOA: "2023-24",
      value: "425",
    },
    {
      project:
        "Construction & Upgradation Chattroo section of NH244 slobe stabilization & protection work in the union Territory of Jammu &Kashmir ",
      contractor: "Mathiyan Construction Pvt. Ltd.",
      YOA: "2023-24",
      value: "835",
    },
  ];

  function handleProjects() {
    setOngoingProjects(false);
    setShowProjects(!showProjects);
  }

  function handleOngoingProjects() {
    setShowProjects(false);
    setOngoingProjects(!ongoingProjects);
  }

  //   function OpenWhatsAppButton() {
  const openWhatsApp = () => {
    const phoneNumber = "+919528125887"; // Replace with your desired phone number
    const message = encodeURIComponent("Hello!"); // Customize your message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  const images = [
    "/utils/client-logos/agroh-infra.jpg",
    "/utils/client-logos/apco.png",
    "/utils/client-logos/NG.png",
    "/utils/client-logos/pwd.jpg",
    "/utils/client-logos/SIPL.png",
    "/utils/client-logos/smart-city.png",
    "/utils/client-logos/tomar-const.png",
    "/utils/client-logos/UK-irrigation.png",
    "/utils/client-logos/UP-bridge-corp.jpg",
    "/utils/client-logos/vishwa-samudra.png",
    "/utils/client-logos/SP-const.png",
  ];

  return (
    <div className="h-auto flex flex-col items-center justify-center lg:gap-6 md:gap-6 sm:gap-2 xs:gap-1 w-screen ">
      {/* intro */}
      <Carousel className="w-full">
        <Carousel.Item interval={2000} className="">
          <img
            className="w-full brightness-50 lg:h-[600px] md:h-[600px] sm:h-[350px] xs:h-[350px] object-cover"
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
            className="w-full brightness-50 lg:h-[600px] md:h-[600px] sm:h-[350px] xs:h-[350px] object-cover"
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
            className="w-full brightness-50 lg:h-[600px] md:h-[600px] sm:h-[350px] xs:h-[350px] object-cover"
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
            className="w-full brightness-50 lg:h-[600px] md:h-[600px] sm:h-[350px] xs:h-[350px] object-cover "
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

      {/* vision */}
      <div className="w-[90%] mx-auto  gap-10 ">
        <div className="lg:h-[250px] md:h-[250px] rounded-lg px-2 flex lg:flex-row md:flex-row sm:flex-col xs:flex-col items-center lg:w-[90%] md:w-[90%] sm:w-[100%] xs:w-[100%] mx-auto bg-gray-200">
          <div className="lg:text-5xl md:text-5xl sm:text-2xl xs:text-2xl font-semibold font-mono">
            our <span className="text-red-500">Vision</span>{" "}
          </div>
          <div className="lg:text-xl md:text-xl sm:text-lg xs:text-lg font-semibold">
            Our Vision is to be Customer's first & best choice in the products
            and services we provide by consistently understanding and exceeding
            their expectations .
          </div>
        </div>
      </div>

      {/* customer slider */}
      <div
        data-aos="fade-right"
        className="client-slider-container bg-gry-700 flex flex-col gap-10 w-screen overflow-hidden p-6 h-auto"
      >
        <div className="flex flex-col gap-5 w-full">
          <div className="text-4xl font-semibold text-red-500">
            Our Customers
          </div>
          <div className="text-2xl font-semibold text-whit">
            RD Construction Co. in a short span of time has acquired Government
            and Private Customers .
            <br />
            <span className="text-xl font-medium">
              To name among many are :
            </span>
          </div>
        </div>
        {/* slider-track flex gap-5 w-[90%] */}
        <div className=" slider-track flex gap-5 w-[90%]">
          {images.concat(images).map((image, index) => (
            // Duplicating images array to create seamless animation
            <div className="slider-item object-cover bg-white" key={index}>
              <img
                src={image}
                alt={`Client Logo ${index}`}
                className="w-[100%] object-cover"
              />
            </div>
          ))}

          {images.map((image, index) => (
            <div className="slider-item" key={`duplicate-${index}`}>
              <img src={image} alt={`Duplicate Logo ${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* numbers : projects, states...  */}
      <div className={` w-full flex flex-col gap-8 items-center mt-4`}>
        {/* heading */}
        <div className="w-[92%] text-center flex flex-col gap-4">
          <p className="lg:text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-red-500 font-semibold">
            Since 2013
          </p>
          <p className="text-2xl font-medium">
            Helping our customers create a better infrastructure !!!
          </p>
        </div>

        {/* data */}
        <div className="w-[100%] h-auto flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:gap-6 md:gap-6 sm:gap-1 xs:gap-1 bg-slate-600">
          {/* projects */}
          <div
            data-aos="fade-right"
            className="lg:w-[33%] xs:border-b-[1px] sm:border-b-[1px] lg:border-r-[1px] md:border-r-[1px] border-white md:w-[33%] hover:cursor-pointer sm:w-full xs:w-full flex bg-slate-600 text-white lg:h-52 md:h-52 sm:h-44 xs:h-44 rounded-3xl items-center justify-around"
          >
            <div className="flex flex-col gap-2 items-start">
              <p className="lg:text-5xl md:text-5xl sm:text-2xl xs:text-2xl font-bold">
                25+ projects
              </p>
              <p className="lg:text-xl md:text-xl sm:text-lg xs:text-lg font-semibold">
                Completed
              </p>
            </div>
            <div>
              <FaBuildingCircleCheck className="fill-white lg:size-24 md:size-24 sm:size-20 xs:size-14" />
            </div>
          </div>
          {/* map presence */}
          <div
            data-aos="fade-left"
            className="lg:w-[33%] xs:border-b-[1px] sm:border-b-[1px] lg:border-r-[1px] md:border-r-[1px] border-white hover:cursor-pointer md:w-[33%] sm:w-full xs:w-full flex bg-slate-600 text-white lg:h-52 md:h-52 sm:h-44 xs:h-44 rounded-3xl items-center justify-around"
          >
            <div className="flex flex-col gap-2 items-start">
              <p className="lg:text-xl md:text-xl sm:text-lg xs:text-lg font-semibold">
                Worked in
              </p>
              <p className="lg:text-5xl md:text-5xl sm:text-2xl xs:text-2xl font-bold">
                7+ States
              </p>
            </div>
            <div>
              <FaLocationDot className="fill-white lg:size-24 md:size-24 sm:size-20 xs:size-14" />
            </div>
          </div>
          {/* clients */}
          <div
            data-aos="fade-up"
            className="lg:w-[33%]  hover:cursor-pointer md:w-[33%] sm:w-full xs:w-full flex bg-slate-600 text-white lg:h-52 md:h-52 sm:h-44 xs:h-44 rounded-2xl items-center justify-around"
          >
            <div className="flex flex-col gap-2 items-start">
              <p className="lg:text-5xl md:text-5xl sm:text-2xl xs:text-2xl font-bold">
                13+
              </p>
              <p className="lg:text-xl md:text-xl sm:text-lg xs:text-lg font-semibold">
                Construction clients
              </p>
            </div>
            <div>
              <HiUserGroup className="fill-white lg:size-24 md:size-24 sm:size-20 xs:size-14" />
            </div>
          </div>
        </div>
      </div>

      {/* exprtise & map : flex */}
      <div className="w-[100%] mx-auto flex lg:flex-row md:flex-row sm:flex-col items-center xs:flex-col gap-4 ">
        {/* left  */}
        <div className="lg:w-[45%] md:w-[45%] sm:w-[90%] xs:w-[90%] flex flex-col items-center justify-center lg:gap-8 md:gap-8 sm:gap-2 xs:gap-2  ">
          <div className="lg:text-6xl md:text-6xl sm:text-3xl xs:text-3xl font-semibold text-red-500">
            Our Expertise
          </div>
          <div className="font-semibold lg:text-xl md:text-xl w-full text-center">
            Ourteam is composed of industry veterans and young talents,
            including skilled engineers, Design engineers, experienced project
            managers, and dedicated construction workers. This blend of
            experience and innovation allows us to approach each project with
            fresh ideas underpinned by proven methodologies.
          </div>
        </div>
        {/* right, map of india  */}
        <div
          data-aos="fade-right"
          className="lg:w-[55%] md:w-[55%] sm:w-full xs:w-full "
        >
          <img
            src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1719655424/kzqtxa0hhljcsfnd33lg.png"
            alt="image"
          />
        </div>
      </div>

      {/* plant and machinery & growth trajectory : flex */}
      {/* <div className="w-[90%] mx-auto flex justify-between items-center bg-slate-200">
        <div className="w-[48%] xs:hidden sm:hidden lg:block md:block">
          <img src="http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719655475/p2xjt81vreyxwwrnwxee.png" className="object-cover"/>
        </div>
        <div className="lg:w-[51%] md:w-[51%] sm:w-full xs:w-full object-cover h-full">
          <img src="http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719655517/jymver9plfwqo7eowuwf.png" className="object-cover h-full"/>
        </div>
      </div> */}

      {/* projects intro */}
      {/* <div
        data-aos="fade-down-right"
        className="h-auto w-[100%] flex flex-col items-center mx-auto gap-4"
      >
        <p className="text-red-500 w-[80%] lg:text-3xl md:text-3xl sm:text-xl xs:text-xl font-semibold">
          RD Construction Company offers a comprehensive range of services
          tailored to the diverse needs of our clients, including:
        </p>
        <div className="text-start flex items-center justify-center w-full bg-slate-700 py-8 text-white">
          <ul className="list-disc w-[90%] font-semibold lg:text-lg flex flex-col items-start gap-3 list-inside">
            <li>
              Design and Build Mechanically Stabilized Earth wall projects in
              EPC mode with Leveling pad and Crash-barrier Complete with
              Comprehensive oversight from conception through completion.
            </li>
            <li>
              Construction of Vehicular Underpass , Culverts , Passenger
              Underpass and other associated structures in a Roadway Project
            </li>
            <li>Road works including laying and finishing</li>
            <li>Irrigation & River Training Works</li>
            <li>Slope Protection works</li>
            <li>Dismantling work</li>
          </ul>
        </div>
      </div> */}

      {/* basic info */}
      <div className="flex flex-col items-center gap-4 w-full bg-green-10">
        {/* first  */}
        <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row gap-0 w-[95%] bg-neutral-200">
          {/* left image */}
          <div
            data-aos="fade-up-right"
            className="xs:w-full sm:w-full md:w-[50%] lg:w-[50%]"
          >
            <img
              src="http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719655475/p2xjt81vreyxwwrnwxee.png"
              className="w-full"
            />
          </div>

          {/* right para  */}
          <div className="xs:w-full sm:w-full md:w-[50%] lg:w-[50%] flex items-center justify-center xs:text:lg sm:text-lg md:text-2xl lg:text-2xl ">
            The construction world is rapidly changing. New technology and tools
            provide significant benefits to age-old techniques. Our skilled
            craft will always be the hands behind our finished project.
            Combining their efforts with today's technology streamlines the
            construction process and brings powerful benefits and efficiencies
            in the field.
          </div>
        </div>

        {/* second  */}
        <div className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row gap-0 w-[95%] bg-neutral-200">
          {/* left para  */}
          <div className="xs:w-full sm:w-full md:w-[50%] lg:w-[50%] flex  items-center justify-center  xs:text:lg sm:text-lg md:text-2xl lg:text-2xl ">
            <p>
              <span className="text-red-500">"</span> From humble beginnings to
              industry leadership, our construction company has grown by
              delivering excellence in every project. Through innovative
              designs, sustainable practices, and unwavering commitment to
              quality, we have transformed skylines and built lasting
              relationships. Today, we stand as a trusted partner, shaping the
              future one foundation at a time.{" "}
              <span className="text-red-500 ">"</span>
            </p>
          </div>

          {/* right image  */}
          <div
            data-aos="fade-up-left"
            className="xs:w-full sm:w-full md:w-[50%] lg:w-[50%]"
          >
            <img
              src="http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719655517/jymver9plfwqo7eowuwf.png"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* contact us */}
      <div className="bg-slate-700 pt-2 flex flex-col gap-4 w-full pb-10">
        {/* heading */}
        <div className="w-[92%] mx-auto flex flex-col gap-6">
          <p className="lg:text-5xl md:text-5xl sm:text-xl xs:text-2xl text-white text-left">
            Contact Us
          </p>
          <div className="bg-white h-[1px]"></div>
        </div>
        {/* data */}
        <div className=" w-[92%] mx-auto text-white">
          <div className="w-[96%] mx-auto justify-center items-center flex flex-col gap-8 mb-4">
            {/* location */}
            <div className="flex items-center lg:gap-5 md:gap-5 sm:gap-1 xs:gap-1">
              <FaLocationDot className="fill-white lg:size-10 md:size-10 lg:block md:block sm:hidden xs:hidden" />
              <div className="flex flex-col gap-2 items-start">
                <p>
                  <span className=" font-semibold lg:text-lg md:text-lg">
                    Registered Office -{" "}
                  </span>
                  Village & Post Bhadaula , Hapur Road , Modinagar , Uttar
                  Pradesh -201204
                </p>
                <p id="add2" className="">
                  <span className=" font-semibold lg:text-lg md:text-lg">
                    Branch Office -{" "}
                  </span>
                  Flat No. S-6, 2nd Floor Ratan Furniture and Electronics
                  Building Near Modinagar South Rapid Station
                </p>
                <p id="add3" className="">
                  <span className=" font-semibold lg:text-lg md:text-lg">
                    Corporate Office -{" "}
                  </span>
                  7<sup>th</sup> Floor , Royal Kapsons , A-118 , Sector 136,
                  Noida , Bajidpur , Uttar Pradesh 201301
                </p>
              </div>
            </div>
            {/* mobile,email,whatsapp : flex row */} 
            {/* lg:gap-8 md:gap-8 sm:gap-1 xs:gap-1 */}
            {/* lg:gap-8 md:gap-8 sm:gap-1 xs:gap-1 */}
            <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-between w-[50%]">
              {/* mobile */}
              <div className="flex items-center justify-center gap-3 md:gap-3 sm:gap-1 xs:gap-1">
                <div>
                  <IoIosCall className="fill-white lg:size-10 md:size-10 sm:size-6 xs:size-6" />
                </div>
                <a href="tel:+919528125887" className="lg:text-xl md:text-xl text-blue-300 ">
                  9528125887
                </a>
              </div>
              {/* email */}
              <div className="flex items-center lg:gap-3 md:gap-3 sm:gap-1 xs:gap-1">
                <IoIosMail className="fill-white lg:size-10 md:size-10 sm:size-6 xs:size-6" />
                <a
                  href="mailto:info@rdcc013.com"
                  className="lg:text-xl md:text-xl text-blue-300 "
                >
                  info@rdcc013.com
                </a>
              </div>

              {/* whatsapp */}
              <div onClick={openWhatsApp} className="flex items-center justify-center lg:gap-3 md:gap-3 sm:gap-1 xs:gap-1 hover:cursor-pointer">
                <div>
                  <IoLogoWhatsapp className="fill-white lg:size-10 md:size-10 sm:size-6 xs:size-6" />
                </div>
                <div className="lg:text-xl md:text-xl underline text-blue-300">9528125887</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* completed projects */}
      {/* <div className="w-full bg-red-50"></div> */}
    </div>
  );
}
export default Main;
