import React from "react";

import "../styles/Main.css";

import { FaRupeeSign } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ProjectCard = ({project}) => {
    return (
        // <div className="">
            // <div className=" shadow-md bg-slate-700 rounded-2xl flex flex-col text-left items-start rounded-b-lg  p-6 mb-4">
            //     <h2 className="text-xl text-teal-500 font-bold mb-2">{project.projectName}</h2>
            //     <p className="text-white text-lg"><strong>Location :</strong> {project.location}</p>
            //     <p className="text-white text-lg"><strong>Client :</strong> {project.client}</p>
            //     <p className="text-white text-lg"><strong>Cost of Project :</strong> {project.COP}</p>
            // </div>

            <div className=" shadow-md bg-gray-300 h-[300px] rounded-2xl text-black flex flex-col justify-center gap-2 px-3 text-left items-start rounded-b-lg mb-4">
                <div className="border-b-2 border-red-500 w-full font-semibold text-center lg:text-xl md:text-xl sm:text-lg xs:text-lg">
                        {project.projectName}
                </div>
                <div className="flex items-center gap-3">
                    <div>
                        <FaUserFriends className="fill-slate-600 lg:size-8 md:size-8 sm:size-5 xs:size-5"/>
                    </div>
                    <div>
                        {project.client}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div>
                        <FaLocationDot className="fill-green-800 lg:size-8 md:size-8 sm:size-5 xs:size-5"/>
                    </div>
                    <div>
                        {project.location}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div>
                        <FaRupeeSign className="fill-blue-900 lg:size-8 md:size-8 sm:size-5 xs:size-5"/>
                    </div>
                    <div>
                        {project.COP}
                    </div>
                </div>
            </div>
        
    )
}

export default ProjectCard
