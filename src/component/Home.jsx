import React from "react";
import { useNavigate } from "react-router-dom";
import { PiBridgeBold } from "react-icons/pi";
import { TbCarCrane } from "react-icons/tb";
import { FaRoad } from "react-icons/fa";
import { FaTractor } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect, useRef } from "react";

const Home = () => {

    const navigate = useNavigate()
    const myDivRef = useRef(null);

    function contact()
    {
        let contactNeeded = sessionStorage.getItem('goToContact');
        console.log("contactNeeded 1 = ",contactNeeded);
        if(contactNeeded == 'true')
        {
            if(myDivRef.current)
            {
                myDivRef.current.scrollIntoView({ behavior: 'smooth' });
            }
            sessionStorage.setItem('goToContact', JSON.stringify(false));
            console.log("contactNeeded 2 ",contactNeeded);
        }
        
    }
    useEffect(() => {
        contact()
    },[])


    // https://media.istockphoto.com/id/509636590/photo/misty-summer-mountain-hills-landscape.jpg?s=612x612&w=0&k=20&c=yJov4hf_1jkZcBWj4ZmXGPS8tkk27vh0dM3usxOswng=

    return (
        <div className=" h-auto flex flex-col lg:gap-6 md:gap-6 sm:gap-2 xs:gap-1 pb-10 w-screen ">

            {/* intro upon/with image */}
            <div className="w-full lg:relative md:relative sm:flex sm:flex-col xs:flex xs:flex-col">

                {/* image */}
                <div className="w-full lg:relative sm:relative lg:z-10 md:z-10">
                    <img className="w-full lg:h-[600px] md:h-[600px] sm:h-[200px] xs:h-[200px]" src="http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559333/dgmtpopyo6xcglksrxd5.jpg" alt="image"/>
                    {/* src = {image[4]} */}
                </div>

                {/*  paragraph and btn*/}
                <div className=" lg:absolute md:absolute lg:rounded-lg md:rounded-lg lg:top-40 md:top-5 lg:left-10 md:left-10 lg:opacity-90 md:opacity-90 bg-gray-800 text-white lg:w-[70%] md:w-[70%] sm:w-[100%] xs:w-[100%] lg:ml-10 md:ml-10 lg:z-20 md:z-20">

                    {/* para  */}
                    <p className=" lg:text-6xl md:text-6xl sm:text-xl xs:text-xl lg:mx-10 md:mx-10 sm:mx-6 xs:mx-6 font-semibold lg:mt-10 md:mt-10 sm:mt-6 xs:mt-6">
                        RD Construction Company offers a comprehensive range of services tailored to the diverse needs of our clients
                    </p>
                    {/* btn */}
                    <button onClick={() => navigate('/about')} className="lg:h-auto md:h-auto sm:h-16 xs:h-16 rounded-md opacity-100 lg:text-3xl md:text-3xl sm:text-xl xs:text-xl lg:mt-6 md:mt-6 sm:mt-3 xs:mt-3 bg-red-600 lg:mb-10 md:mb-10 sm:mb-6 xs:mb-6 transition-all hover:bg-red-700">
                        <p className="lg:mx-2 md:mx-2 sm:mx-1 xs:mx-1">
                            Learn more about us and our <span className=" font-mono font-semibold">Vision</span>
                        </p>
                    </button>
                </div>
            </div>

            {/* overview */}

            {/* heading above paragraph on left side upon z index of an icon */}
            {/* at right an image , hidden at sm and xs screen size */}
            <div className="flex mx-10 gap-2 mt-5">
                {/* overview  */}
                <div className="flex lg:relative md:relative flex-col lg:w-[60%] md:w-[60%] sm:w-full xs:w-full">
                    {/* icons */}
                    <div className="lg:relative md:relative sm:hidden xs:hidden lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 px-10 lg:grid-rows-2 md:grid-rows-2 lg:z-10 md:z-10">
                        <PiBridgeBold className="  rotate-6 size-48 opacity-10"/>
                        <FaTractor  className=" rotate-45 size-44 opacity-10"/>
                        <TbCarCrane className=" rotate-6 size-52 opacity-10"/>
                        <FaRoad className=" rotate rotate-45 size-64 opacity-10"/>
                    </div>

                    {/* heading and para  */}
                    <div className=" flex flex-col gap-4 lg:absolute md:absolute lg:z-20 md:z-20">
                        {/* heading */}
                        <div>
                            <p className="lg:text-5xl md:text-5xl sm:text-2xl xs:text-2xl font-semibold text-red-500">
                                Our Commitment to Quality and Client Satisfaction
                            </p>
                        </div>
                        {/* para */}
                        <div className="lg:w-[70%] md:w-[70%] sm:w-[90%] xs:w-[95%] mx-auto">
                            <p className="lg:text-2xl md:text-xl sm:text-base xs:text-base text-slate-900 font-medium">
                                At R D Construction Co. , our commitment to quality and client satisfaction is unwavering. We understand that our success is measured not only by the projects we complete but by the relationships we build. Our approach is client-centric, ensuring open communication, transparency, and collaboration from the initial consultation to the final handover. We strive to exceed expectations, delivering projects on time, within budget, and above industry standards
                            </p>
                        </div>
                    </div>
                </div>

                {/* image  */}
                <div className=" lg:w-[40%] md:w-[40%] lg:block md:block sm:hidden xs:hidden">
                    <img className="w-full h-full rounded-2xl" src="http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559391/ikmrxpujh14ooycxfetj.jpg"/>
                </div>
            </div>

            {/* numbers : projects, states...  */}
            <div className="w-full flex flex-col gap-8 items-center mt-4">
                {/* heading */}
                <div className="w-[92%] text-left flex flex-col gap-4">
                    <p className="lg:text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-red-500 font-semibold">
                        Since 2013
                    </p>
                    <p className="text-xl font-medium">
                        Helping our customers create a better infrastructure !!!
                    </p>
                </div>

                {/* data */}
                <div className="w-[92%] h-auto flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:gap-6 md:gap-6 sm:gap-1 xs:gap-1 ">
                    {/* projects */}
                    <div onClick={() => navigate('/projects')} className="lg:w-[33%] border-black border-2 md:w-[33%] hover:cursor-pointer sm:w-full xs:w-full flex bg-slate-600 text-white lg:h-52 md:h-52 sm:h-44 xs:h-44 rounded-2xl items-center justify-around">
                        <div className="flex flex-col gap-2 items-start">
                            <p className="lg:text-5xl md:text-5xl sm:text-2xl xs:text-2xl font-bold">
                                25+ projects
                            </p>
                            <p className="lg:text-xl md:text-xl sm:text-lg xs:text-lg font-semibold">
                                Completed
                            </p>
                        </div>
                        <div>
                            <FaBuildingCircleCheck className="fill-white lg:size-24 md:size-24 sm:size-20 xs:size-14"/>
                        </div>
                    </div>
                    {/* map presence */}
                    <div onClick={() => navigate('/about')} className="lg:w-[33%] border-black border-2 hover:cursor-pointer md:w-[33%] sm:w-full xs:w-full flex bg-slate-600 text-white lg:h-52 md:h-52 sm:h-44 xs:h-44 rounded-2xl items-center justify-around">
                        <div className="flex flex-col gap-2 items-start">
                            <p className="lg:text-xl md:text-xl sm:text-lg xs:text-lg font-semibold">
                                Worked in
                            </p>
                            <p className="lg:text-5xl md:text-5xl sm:text-2xl xs:text-2xl font-bold">
                                7+ States
                            </p>
                        </div>
                        <div>
                            <FaLocationDot className="fill-white lg:size-24 md:size-24 sm:size-20 xs:size-14"/>
                        </div>
                    </div>
                    {/* clients */}
                    <div onClick={() => navigate('/about')} className="lg:w-[33%] border-black border-2 hover:cursor-pointer md:w-[33%] sm:w-full xs:w-full flex bg-slate-600 text-white lg:h-52 md:h-52 sm:h-44 xs:h-44 rounded-2xl items-center justify-around">
                        <div className="flex flex-col gap-2 items-start">
                            <p className="lg:text-5xl md:text-5xl sm:text-2xl xs:text-2xl font-bold">
                                13+
                            </p>
                            <p className="lg:text-xl md:text-xl sm:text-lg xs:text-lg font-semibold">
                                Construction clients
                            </p>
                        </div>
                        <div>
                            <HiUserGroup className="fill-white lg:size-24 md:size-24 sm:size-20 xs:size-14"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact us */}
            <div ref={myDivRef} className="bg-slate-700 pt-2 flex flex-col gap-4 w-full">
                {/* heading */}
                <div className="w-[92%] mx-auto flex flex-col gap-6">
                    <p className="lg:text-5xl md:text-5xl sm:text-xl xs:text-2xl text-white text-left">
                        Contact Us
                    </p>
                    <div className="bg-white h-[1px]"></div>
                </div>
                {/* data */}
                <div className=" w-[92%] mx-auto text-white">
                    <div className="w-[96%] mx-auto justify-center flex flex-col gap-8 mb-4">
                        {/* <div className="flex gap-6 items-center">
                            <img className="size-16 rounded-full" src={logo}/>
                            <p className="text-3xl border-b-2 border-white">
                                RD Construction Company
                            </p>
                        </div> */}
                        {/* location */}
                        <div className="flex items-center lg:gap-3 md:gap-3 sm:gap-1 xs:gap-1">
                            <FaLocationDot className="fill-white lg:size-10 md:size-10 lg:block md:block sm:hidden xs:hidden"/>
                            <div className="flex flex-col gap-2 items-start">
                                <p>
                                    <span className=" font-semibold lg:text-lg md:text-lg">Registered Office - </span>
                                    Village & Post Bhadaula , Hapur Road , Modinagar , Uttar Pradesh -201204
                                </p>
                                <p id="add2" className="">
                                    <span className=" font-semibold lg:text-lg md:text-lg">Branch Office - </span>
                                    Flat No. S-6, 2nd Floor Ratan Furniture and Electronics Building Near Modinagar South Rapid Station 
                                </p>
                                <p id="add3" className="">
                                    <span className=" font-semibold lg:text-lg md:text-lg">Corporate Office - </span>
                                    7<sup>th</sup> Floor , Royal Kapsons , A-118 , Sector 136, Noida , Bajidpur , Uttar Pradesh 201301
                                </p>
                            </div>
                        </div>
                        {/* mobile */}
                        <div className="flex items-center lg:gap-3 md:gap-3 sm:gap-1 xs:gap-1">
                            <IoLogoWhatsapp className="fill-white lg:size-10 md:size-10 sm:size-6 xs:size-6"/>
                            <p className="lg:text-lg md:text-lg ">
                                9528125887
                            </p>
                        </div>
                        {/* email */}
                        <div className="flex items-center lg:gap-3 md:gap-3 sm:gap-1 xs:gap-1">
                            <IoIosMail className="fill-white lg:size-10 md:size-10 sm:size-6 xs:size-6"/>
                            <p className="lg:text-lg md:text-lg ">
                                 info@rdcc013.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home