import React from "react";
import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";
import OngoingProjectCard from "./OngoingProjectCard";

import './ImageGallery.css';

import Navbar from "./Navbar";

import { FaCheckCircle } from "react-icons/fa";
import { BsConeStriped } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    let projects = [
        {
            "projectName" : "Bridge Construction ChhatraPul, Saharanpur",
            "location" : "Saharanpur",
            "client" : "Saharanpur Smart Cities Ltd.",
            "COP" : "152.45Lacs (2020-21)"
        },
    
        {
            "projectName" : "BalanceworkNH-72 (RE Wall , Crash Barrier withDrawing , Design Materials Road Furnishing and Protection work)",
            "location" : "Haridwar, Uttrakhand",
            "client" : "UP State Bridge Corporation Limited",
            "COP" : "793.68Lacs (2019-20)"
        },
    
        {
            "projectName" : "NH-91 Aligarh to Kanpur (RS Wall Construction )",
            "location" : "Mainpuri U.P.",
            "client" : "APCO Infratech PVt.Ltd.",
            "COP" :"180.00Lacs(2019-20)"
        },
    
        {
            "projectName" : "RohtaK Road, Meerut",
            "location" : "Meerut",
            "client" : "UP State Bridge Corporation Limited",
            "COP" : "75.00 Lacs (2013-14)"
        },
    
        {
            "projectName" : "Saharanpur 2&3 With Drawing& Designand Material",
            "location" : "Saharanpur",
            "client" : "Smart CitiesLimited",
            "COP" :"248.87Lacs(2020-21)"
        },
    
        {
            "projectName" : "ROB 10 A Mirzapur With Drawing& Design and Material",
            "location" : "Mirzapur",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" :"158.42Lacs(2021-22)"
        },
    
        {
            "projectName" : "ROB 29B & 27C , Allahabad Design , Drawings & Material",
            "location" : "Allahabad",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "371.92 Lacs(2020-21)"
        },
    
        {
            "projectName" :" 6 Laning of Thaliparambha-Muzahapilangad Section of NH-66(ProjectLength29.948KM)",
            "location" : "Kerala",
            "client" : "Vishwa Samudra Eng . pvt. Ltd.",
            "COP" : "359.10 Lacs (2020-21)"
        },
    
        {
            "projectName" : "ROB 65 , Firozabad , Design , Drawings & Material",
            "location" : "Firozabad",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "80 Lacs(2015-16)"
        },
    
        {
            "projectName" : "ROB Dadri Design , Drawings & Material",
            "location" : "Dadri",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "75 Lacs (2015-16)"
        },
    
        {
            "projectName" : "ROB Firozabad Design , Drawings & Material",
            "location" : "Firozabad",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "100.00 Lacs(2016-17)"
        },
    
        {
            "projectName" : "ROB 78A , Bakshi Bandh Design , Drawings & Material",
            "location" : "Allahabad",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "75 Lacs(2021-22)"
        },
    
        {
            "projectName" : "ROB Kuberpur , Design , Drawings & Material",
            "location" : "Kuberpur",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "200 Lacs(2016 -17 )"
        },
    
        {
            "projectName" : "ROB Murga Phatak , Design , Drawings & Material along with Crash Barrier",
            "location" : "Mathura",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "130.00 Lacs(2016-17 )"
        }
        ,
        {
            "projectName" : "ROB T1/B, Design , Drawings & Material along with Crash Barrier",
            "location" : "Allahabad",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "112.00 Lacs(2017-18 )"
        },
    
        {
            "projectName" : "ROB 38D , Design , Drawings & Material along with Crash Barrier",
            "location" : "Allahabad",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "129.00 Lacs(2018-19 )"
        },
    
        {
            "projectName" : "ROB 16B , Design , Drawings & Material along with Crash Barrier",
            "location" : "Bulandshehar",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "80.00 Lacs(2018-19 )"
        },
    
        {
            "projectName" : "ROB 35B , Design , Drawings & Material along with Crash Barrier",
            "location" : "Allahabad",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "129.00 Lacs(2018-19 )"
        },
    
        {
            "projectName" : "ROB 543, Design , Drawings & Material along with Crash Barrier",
            "location" : "Mathura",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "170.00 Lacs(2019-20 )"
        },
    
        {
            "projectName" : "ROB 68B , Design , Drawings & Material along with Crash Barrier",
            "location" : "Agra",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "250.00 Lacs(2019-20 )"
        },
    
        {
            "projectName" : "Alaknanda Gram Upalada , Shrinagar ( Supply , Drilling , Installation of Anchor Bolts for Protection works",
            "location" : "Uttarakhand",
            "client" :" Mathiyan Construction Pvt. Ltd",
            "COP" : "950 .00 Lacs(2019-20 )"
        },
    
        {
            "projectName" : "4 laning of Kodinar-Veeraval Project NH 8E (Supply , Design , Drawing , Crash Barrier)",
            "location" : "Distt. Gir, Somnath , Gujarat",
            "client" : "Agroh Infrastucture Projects Pvt. Ltd",
            "COP" : "720.50 Lacs(2022-23)"
        },
    
        {
            "projectName" : "Balance Works NH 72 , Railway Underpass ( Supply , Drilling , Installation of AnchorBolts for Protection works )",
            "location" : "Motichur Haridwar",
            "client" : "UP State Bridge Corporation Ltd",
            "COP" : "250.00 Lacs(2020-21 )"
        }
    ]

    let ongoing = [
        {
            "project" : "Drawing & Design , Supply & Construction of Reinforced Soil walls for Construction of Four/Six lane km 515+000 to 528+300 (Kunjwani to Sidhra section of NH-44) Section in J & K ",
            "contractor" : "APCO Infratech Pvt Ltd",
            "YOA" : "2023-24",
            "value" : "506"
        },
        {
            "project" : "Drawing & Design , Supply & Construction of Reinforced Soil walls for Four/Six lane from km 550+900 to 566+520 (Domel to Katra Section) J &K",
            "contractor" : "APCO Infratech Pvt Ltd",
            "YOA" : "2023-24",
            "value" : "1042"
        },
        {
            "project" : "Crash Barrier Works Construction of Four/ Size Lane Km 515+000 to 528+000 (Kuniwani to Sidhra Section of NH-44 & from km 550+900 to 566+520 (Domel to Katra Section)in the state of J&K",
            "contractor" : "APCO Infratech Pvt Ltd ",
            "YOA" : "2023-24",
            "value" : "328"
        },
        {
            "project" : "Crash Barrier Works for Construction of 4-Laining of Jadhri Tejewala Yamuna Nagar NH-907 in State of Haryana ",
            "contractor" : "RajShyamaConstructions Pvt. Ltd.",
            "YOA" : "2023-24",
            "value" : "425"
        },
        {
            "project" : "Construction &Upgradation Chattroo section of NH244 slobe stabilization & protection work in the union Territory of Jammu &Kashmir",
            "contractor" : "Mathiyan Construction Pvt. Ltd.",
            "YOA" : "2023-24",
            "value" : "835"
        },
        {
            "project" : "Drawing & Design , Supply & Construction of Reinforced Soil walls for Upgradation of Bijnor to Kotwali Section ofNH-709AD from Km.153.660 to Km175.280 on EPC mode under NH(O) in UttarPradesh ",
            "contractor" : "MathiyanConstructionPvt.Ltd",
            "YOA" : "2022-23",
            "value" : "927.5"
        },
        {
            "project" : "Drawing & Design , Supply & Construction of Reinforced Soil walls for Rehabilitation and Augmentation of New NH 354 Section Amritsar (Airport Junction) State of Punjab - Drawing & Design , Supply & Construction",
            "contractor" : "P.S.Constructions",
            "YOA" : "2022-23",
            "value" : "320"
        },
        {
            "project" : "Drawing & Design , Supply & Construction of Reinforced Soil walls for Construction of 4-lane BeasBatala-Dera Baba Nanak Highway (NH503-D) Jalandhar Amritsar National Highway in State of Punjab ",
            "contractor" : "Ganesh Garhia Construction Pvt.Ltd. ",
            "YOA" : "2022-23",
            "value" : "528"
        },
        {
            "project" : "Drawing & Design , Supply & Construction of Reinforced Soil walls for Construction of 4-Laining of Jagdhri Tejewala YamunaNagarNH-907 State of Haryana",
            "contractor" : "RajShyamaConstructions Pvt. Ltd",
            "YOA" : "2022-23",
            "value" : "857"
        },
        {
            "project" : "Drawing & Design , Supply & Construction of Reinforced Soil walls for Construction of Two Lane with Paved Shoulder for Fatehpur Bypass, Mandawa Bypass & Jhunhuu Bypass in State of Rajasthan",
            "contractor" : "NGC-TCC JV",
            "YOA" : "2022-23",
            "value" : "784"
        },
        {
            "project" : "Drawing & Design , Supply & Construction of Reinforced Soil walls for Construction Work KM 31+600 t o KM 28+120 Meerut Gharmukteswar State of Uttar Pradesh ",
            "contractor" : "Mathiyan Construction Pvt. Ltd.",
            "YOA" : "2022-23",
            "value" : "1350"
        },
        {
            "project" : "Construction of Reinforced Soil walls for Khevat No. 92/96, Kila Number 21 &22 Near Gagli Farm, Village Khatiavas Tehsil Pataudig, Gurgaon, Haryana",
            "contractor" : "Subhash Infra Engineers Pvt. Ltd.",
            "YOA" : "2021-22",
            "value" : "169.45"
        },
        {
            "project" : "Drawing & Design , Supply & Construction of Reinforced Soil walls with Crash Barrier for ROB 143 & 141 Greater Noida ",
            "contractor" : "UP State Bridge Corporation Ltd .",
            "YOA" : "2020-21",
            "value" : "443.67"
        },
        {
            "project" : "Crash Barrier Works Construction of Four/ Size Lane Km 515+000 to 528+000 (Kuniwani to Sidhra) Section of NH-44 & from km 550+900 to 566+520 (Domel to Katra Section)in the state of J&K",
            "contractor" : "APCO Infratech Pvt Ltd",
            "YOA" : "2023-24",
            "value" : "328"
        },
        {
            "project" : "Slobe stabilization & protection work in the state of mizoram for Construction of Hnathial bypass (Package-2) on Aizawl-Tuipang section of NH-54",
            "contractor" : "Mathiyan Construction Pvt. Ltd.",
            "YOA" : "2023-24",
            "value" : "425"
        },
        {
            "project" : "Construction & Upgradation Chattroo section of NH244 slobe stabilization & protection work in the union Territory of Jammu &Kashmir ",
            "contractor" : "Mathiyan Construction Pvt. Ltd.",
            "YOA" : "2023-24",
            "value" : "835"
        }
    ]

    const images = [
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559226/c01fxksdawobhqirswfs.jpg',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559269/kfc3gw2tw5fwinkxfb6a.jpg',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559333/dgmtpopyo6xcglksrxd5.jpg',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559362/gyk9y0wkmxxvcuhgwzmf.jpg',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559391/ikmrxpujh14ooycxfetj.jpg',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559433/szhgrnynx5nyxyy109la.jpg',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559470/gcf6gzvfvmvwh0sldmaz.jpg',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559500/btfqlhsxiwkbngz0kvef.jpg',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872850/zsuge1dt2qbpaq5zwokw.jpg',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872897/fjayssvfslm0htu68yu5.jpg',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872933/i7smrmcmhx9dfzptmdwg.jpg',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872999/wex3sgwkihdsefh6jxja.jpg',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876604/augco1vpvr5kbctdfopo.png',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876671/ibclk9kirne8jxcfithj.png',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876731/itqgnbm22tc1hgqz7u6g.png',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876754/s4khgw62d5nbuofnzvpu.png',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876780/tjcjyhgmmnf8crvsj0pm.png',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876805/wsq7yn47g9rykewbeyci.png',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876838/xzxnlghuehe3jo38prye.png',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876867/yv4v7mkbwgkzj3p6u0yl.png',
        'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876893/nzzhb8atmzzf64pcrd39.png',
      ]

      const [showProjects,setShowProjects] = useState(false)
      const [ongoingProjects,setOngoingProjects] = useState(false)

      function handleProjects()
      {
        setOngoingProjects(false)
        setShowProjects(!showProjects)
      }

      function handleOngoingProjects()
      {
        setShowProjects(false)
        setOngoingProjects(!ongoingProjects)
      }
    

    return (
        <div className="min-h-screen pb-6 flex flex-col w-screen ">

            <Navbar/>

            {/* img and text */}
            <div className="w-full lg:relative md:relative  sm:flex sm:flex-col xs:flex xs:flex-col">
                    {/* image */}
                    <div className="w-full lg:relative sm:relative lg:z-10 md:z-10">
                    <img className="w-full lg:h-[600px] md:h-[600px] sm:h-[200px] xs:h-[200px]" src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872933/i7smrmcmhx9dfzptmdwg.jpg" alt="image"/>
                    {/* src = {image[4]} */}
                </div>

                <div className="lg:h-[200px] md:h-[200px] sm:h-[100px] xs:h-[100px] lg:absolute flex items-center justify-center md:absolute lg:rounded-lg md:rounded-lg lg:top-64 md:top-5 lg:left-10 md:left-10 lg:opacity-90 md:opacity-90 bg-gray-800 text-white lg:w-[70%] md:w-[70%] sm:w-[100%] xs:w-[100%] lg:ml-10 md:ml-10 lg:z-20 md:z-20">
                    <p className=" lg:text-6xl md:text-6xl sm:text-xl xs:text-xl lg:mx-10 md:mx-10 sm:mx-6 xs:mx-6 font-semibold ">
                        Our Projects
                    </p>
                </div>
            </div>

            {/* intro */}
            <div className="h-auto w-[90%] flex flex-col pt-6 mx-auto items-start gap-4">
                <p className=" lg:text-3xl md:text-3xl sm:text-xl xs:text-xl font-semibold">
                    RD Construction Company offers a comprehensive range of services tailored to the diverse needs of our clients, including:
                </p>
                <div className="text-start"> 
                    <ul className="list-disc lg:text-lg flex flex-col items-start gap-3 list-inside">
                        <li>
                            Design and Build Mechanically Stabilized Earth wall projects in EPC mode with Leveling pad and Crash-barrier Complete with Comprehensive oversight from conception through completion.
                        </li>
                        <li>
                            Construction of Vehicular Underpass , Culverts , Passenger Underpass and other associated structures in a Roadway Project

                        </li>
                        <li>
                            Road works including laying and finishing
                        </li>
                        <li>
                            Irrigation & River Training Works
                        </li>
                        <li>
                            Slope Protection works
                        </li>
                        <li>
                            Dismantling work
                        </li>
                        
                    </ul>
                </div>
            </div>

            {/* project cards */}
            <div className="pt-6 flex flex-col self-center w-[70%] xs:h-[400px] sm:h-[400px] md:h-[660px] lg:h-[660px]">

                {/* yamuna nagar bypass */}
                <div className="flex flex-col w-[100%] xs:h-[35%] sm:h-[35%] md:h-[50%] lg:h-[50%] relative z-10 ">
                    {/* images */}
                    <div className="flex gap-0 w-full justify-between relative brightness-50 h-full">
                        <div className="w-[50%]">
                            <img src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876867/yv4v7mkbwgkzj3p6u0yl.png" className="w-full h-full"/>
                        </div>
                        <div className="w-[50%] ">
                            <img src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876893/nzzhb8atmzzf64pcrd39.png" className=" w-full h-full"/>
                        </div>
                    </div>
                    {/* name */}
                    <div className=" text-white lg:text-2xl md:text-2xl absolute z-20 top-[85%] lg:left-[40%] md:left-[40%] sm:left-[20%] xs:left-[20%] ">
                        Yamuna Nagar Bypass, Haryana
                    </div>
                </div>

                {/* jhunjhunu & fatehpur */}
                <div className="  w-full xs:flex-col sm:flex-col md:flex-row lg:flex-row flex xs:h-[65%] sm:h-[65%] md:h-[50%] lg:h-[50%] ">
                    {/* jhunjhunu */}
                    <div className="flex flex-col xs:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xs:h-[50%] sm:h-[50%] md:h-full lg:h-full relative z-10">
                        {/* image */}
                        <div className="w-full h-[100%] brightness-50">
                            <img src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876805/wsq7yn47g9rykewbeyci.png" className=" w-full h-full"/>
                        </div>
                        {/* name */}
                        <div className=" text-white md:text-xl lg:text-xl brightness-100 absolute z-20 bottom-[15%] lg:left-[40%] md:left-[40%] sm:left-[20%] xs:left-[20%] ">
                            Jhunjhunu, Rajasthan
                        </div>
                    </div>

                    {/* fatehpur */}
                    <div className="flex flex-col xs:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] xs:h-[50%] sm:h-[50%] md:h-full lg:h-full relative z-10">
                        {/* image */}
                        <div className="w-full h-[100%]">
                            <img src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725876754/s4khgw62d5nbuofnzvpu.png" className="object-cover w-full h-full brightness-50"/>
                        </div>
                        {/* name */}
                        <div className=" text-white md:text-xl lg:text-xl brightness-100 absolute z-20 bottom-[15%] lg:left-[40%] md:left-[40%] sm:left-[20%] xs:left-[20%]">
                            Fatehpur
                        </div>
                    </div>
                </div>

            </div>

            {/* see all projects */}
            <div className="pt-6 flex xs:flex-col sm:flex-col  md:flex-row lg:flex-row gap-1 self-center w-[70%]">

                {/* show completed projects */}
                <div onClick={handleProjects} className="xs:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] bg-slate-700 p-3 text-white rounded-3xl flex justify-evenly items-center hover:cursor-pointer">

                    <div className="hover:text-cyan-400 bottom-28 top-10">
                        <div className=" xs:text-sm sm:text-sm md:text-lg lg:text-lg text-start">
                            click here to see
                        </div>
                        <div className="lg:text-3xl md:text-3xl sm:text-xl xs:text-xl font-semibold">
                            Completed projects
                        </div>
                    </div>

                    <div className=" flex justify-end items-center pt-2 pb-2">
                        <FaCheckCircle className=" xs:size-16 sm:size-16 md:size-36 lg:size-36 opacity-50 fill-white"/>
                    </div>
                    
                </div>

                {/* show ongoing projects */}
                <div onClick={handleOngoingProjects} className="xs:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] bg-slate-700 text-white p-3 rounded-3xl flex justify-evenly items-center hover:cursor-pointer">

                    <div className=" hover:text-cyan-400 bottom-28 top-10">
                        <div className="xs:text-sm sm:text-sm md:text-lg lg:text-lg text-start">
                            click here to see
                        </div>
                        <div className="lg:text-3xl md:text-3xl sm:text-xl xs:text-xl font-semibold">
                            Ongoing projects
                        </div>
                    </div>

                    <div className=" flex justify-end items-center pt-2 pb-2">
                        <BsConeStriped className=" xs:size-16 sm:size-16 md:size-36 lg:size-36 opacity-50 fill-white" />
                    </div>
                </div>
            </div>
            
            {/* completed projects */}

            { showProjects ? 
            
            <div className=" xs:h-screen sm:h-screen md:h-auto lg:h-auto rounded-lg flex flex-col gap-4 w-[90%] mx-auto ">
                <div className="text-3xl font-semibold text-start  text-red-500 flex justify-between items-center">
                   <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl">
                        Here are the projects which we have completed so far.
                   </div>
                   <div className="hover:cursor-pointer">
                        <IoMdCloseCircleOutline onClick={() => setShowProjects(false)} className="fill-slate-600 size-14"/>
                   </div>
                </div>
                <div className=" lg:h-auto md:h-auto sm:h-screen xs:h-screen sm:overflow-y-auto xs:overflow-y-auto lg:grid md:grid sm:flex sm:flex-col xs:flex xs:flex-col lg:grid-cols-4 md:grid-cols-4 lg:gap-4 md:gap-4 sm:gap-2 xs:gap-1">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))}
                </div>
            </div>

            : 
            <div></div>
            }

            { ongoingProjects ? 
            <div className=" xs:h-screen sm:h-screen md:h-auto lg:h-auto rounded-lg flex flex-col gap-4 w-[90%] mx-auto ">
            
                <div className=" font-semibold text-start  text-red-500 flex justify-between items-center">
                    <div className="xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl">
                        Our ongoing projects
                    </div>
                    <div className="hover:cursor-pointer">
                        <IoMdCloseCircleOutline onClick={() => setOngoingProjects(false)} className="fill-slate-600 size-14"/>
                   </div>
                </div>
                <div className=" lg:h-auto md:h-auto sm:h-screen xs:h-screen sm:overflow-y-auto xs:overflow-y-auto lg:grid md:grid sm:flex sm:flex-col xs:flex xs:flex-col lg:grid-cols-4 md:grid-cols-4 lg:gap-4 md:gap-4 sm:gap-2 xs:gap-1">
                    {ongoing.map((project, index) => (
                        <OngoingProjectCard key={index} project={project}/> 
                    ))}
                </div>
            </div>
            :
            <div></div>

            }

        </div>
    )
}

export default Projects