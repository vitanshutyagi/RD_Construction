import React from "react"
// import {toast} from "react-hot-toast"
import { useEffect } from "react"

function About () {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className=" flex w-screen flex-col gap-6 min-h-screen pb-4">
            {/* image and about */}
            <div className="w-full lg:relative md:relative sm:flex sm:flex-col xs:flex xs:flex-col">
                {/* image */}
                <div className="w-full lg:relative sm:relative lg:z-10 md:z-10">
                    <img className="w-full lg:h-[600px] md:h-[600px] sm:h-[200px] xs:h-[200px]" src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1719559433/szhgrnynx5nyxyy109la.jpg" alt="image"/>
                </div>
                {/* about */}
                <div className="lg:h-[200px] md:h-[200px] sm:h-[100px] xs:h-[100px] lg:absolute flex items-center justify-center md:absolute lg:rounded-lg md:rounded-lg lg:top-64 md:top-5 lg:left-10 md:left-10 lg:opacity-90 md:opacity-90 bg-gray-800 text-white lg:w-[70%] md:w-[70%] sm:w-[100%] xs:w-[100%] lg:ml-10 md:ml-10 lg:z-20 md:z-20">
                    <p className=" lg:text-6xl md:text-6xl sm:text-xl xs:text-xl lg:mx-10 md:mx-10 sm:mx-6 xs:mx-6 font-semibold ">
                        About R.D. Construction
                    </p>
                </div>
            </div>

            {/* vision */}
            <div className="w-[90%] mx-auto  gap-10 bg-white">
                <div className="lg:h-[250px] md:h-[250px] rounded-lg px-2 flex lg:flex-row md:flex-row sm:flex-col xs:flex-col items-center lg:w-[70%] md:w-[70%] sm:w-full xs:w-full mx-auto bg-gray-200">
                    <div className="lg:text-5xl md:text-5xl sm:text-2xl xs:text-2xl font-semibold font-mono">our <span className="text-red-500">Vision</span> </div>
                    <div className="lg:text-xl md:text-xl sm:text-lg xs:text-lg font-semibold">Our Vision is to be Customer's first & best choice in the products and services we provide by consistently understanding and exceeding their expectations .</div>
                </div>
            </div>

            {/* overview & expertise */}
            <div className="w-[90%] flex flex-col gap-6 mx-auto">
                <p className="lg:text-6xl md:text-6xl sm:text-3xl xs:text-3xl font-semibold text-red-500 text-start">Overview</p>
                <div className="flex flex-col lg:gap-4 md:gap-4 sm:gap-2 xs:gap-2">
                    <p className="text-start lg:text-xl md:text-xl">
                        RDCC is a relatively young construction company, established in 2013, now specializing in a broad spectrum of civil construction services. With a forward-thinking approach, we specialize in delivering highquality construction projects especially those in Reinforced Soil Wall with associated civil works. Our projects span across vital sectors including Highways ,transportation & urban development.
                    </p>
                    <p className="text-start lg:text-2xl md:text-2xl sm:text-xl xs:text-xl font-semibold text-red-500">
                        Team Expertise
                    </p>
                    <p className="text-start lg:text-xl md:text-xl">
                    Ourteam is composed of industry veterans and young talents, including skilled engineers, Design engineers, experienced project managers, and dedicated construction workers. This blend of experience and innovation allows us to approach each project with fresh ideas underpinned by proven methodologies.
                    </p>
                </div>
            </div>

            {/* customers & geographical presence : flex */}
            <div className="w-[90%] mx-auto flex lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-4 ">
                <div className="lg:w-[45%] md:w-[45%] sm:w-full xs:w-full flex flex-col lg:gap-4 md:gap-4 sm:gap-2 xs:gap-2 text-left ">
                    <p className="lg:text-6xl md:text-6xl sm:text-3xl xs:text-3xl font-semibold text-red-500">Our Customers</p>
                    <ul className="list-disc lg:text-lg md:text-lg flex flex-col items-start gap-2 list-inside">
                        <li>UP State Bridge Corporation</li>
                        <li>State Public Works Departments</li>
                        <li>APCO Infratech Pvt. Ltd</li>
                        <li>Ganesh Garhia Construction Pvt. Ltd</li>
                        <li>Mathiyan Construction Pvt. Ltd.</li>    
                        <li>N G Constructions</li>
                        <li>Tomar Construction Company</li>
                        <li>P S Constructions</li>
                        <li>Raj Shyama Constructions Pvt. Ltd.</li>
                        <li>Agroh Infrastucture Projects Pvt. Ltd</li>
                        <li>Smart City</li>
                        <li>Irrigation department Uttarakhand</li>
                        <li>Subhash Infra Engineers Pvt. Ltd.</li>
                        <li>Vishwa Samudra Engineering</li>
                    </ul>
                </div>
                <div className="lg:w-[55%] md:w-[55%] sm:w-full xs:w-full ">
                    <img src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1719655424/kzqtxa0hhljcsfnd33lg.png" alt="image"/>
                </div>
            </div>

            {/* plant and machinery & growth trajectory : flex */}
            <div className="w-[90%] mx-auto flex justify-between items-center">
                <div className="w-[48%] xs:hidden sm:hidden lg:block md:block">
                    <img src="http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719655475/p2xjt81vreyxwwrnwxee.png"/>
                </div>
                <div className="lg:w-[51%] md:w-[51%] sm:w-full xs:w-full">
                    <img src="http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719655517/jymver9plfwqo7eowuwf.png"/>
                </div>
            </div>

            {/* future directions */}
            <div className="w-[90%] flex flex-col mx-auto lg:gap-6 md:gap-6 sm:gap-3 xs:gap-3 text-start">
                <p className="lg:text-6xl md:text-6xl sm:text-3xl xs:text-3xl font-semibold text-red-500 text-start">Future Directions</p>
                <p className="text-start lg:text-xl md:text-xl">
                    As we continue to grow, R D Construction Company remains dedicated to pushing the boundaries of what is possible in civil construction, with a firm eye on quality, sustainability, and innovation.
                </p>
                <p className="text-start lg:text-xl md:text-xl font-semibold">
                    We are excited about the future and committed to building infrastructure that lays the foundation for a better tomorrow...
                </p>
            </div>
        </div>
    )
}
export default About
