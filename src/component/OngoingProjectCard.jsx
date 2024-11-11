import React from "react";
import { useState,useEffect } from "react";

const OngoingProjectCard = ({project}) => {
    const [text,setText] = useState(project.project.slice(0,90))
    const [showMore,setShowMore] = useState(false)

    function textHandler()
    {
        if(showMore)
        {
            // pura text dikh rha h
            setText(project.project.slice(0,90))
            setShowMore(false)
        }
        else
        {
            setText(project.project)
            setShowMore(true)
        }
    }

    return (
        
            <div className="shadow-md bg-gray-300  rounded-2xl text-black flex flex-col justify-center gap-2 px-3 text-left items-start rounded-b-lg mb-4 h-auto">
                <h2 className="border-b-2 border-red-500 w-full font-semibold text-center lg:text-xl md:text-xl sm:text-lg xs:text-lg">
                    {text} {showMore ? 
                        <span onClick={textHandler} className="text-blue-700 text-sm hover:cursor-pointer">
                            ...show less
                        </span> : 
                        <span onClick={textHandler} className="text-blue-700 text-sm hover:cursor-pointer">
                            ...show more
                        </span>}
                </h2>
                <p className="text-lg"><strong>Contractor :</strong> {project.contractor}</p>
                <p className=" text-lg"><strong>Year Of Award :</strong> {project.YOA}</p>
                <p className="text-lg"><strong>Value :</strong> {project.value} Lacs</p>
            </div>
        // shadow-md bg-slate-700 h-[300px] rounded-2xl text-white flex flex-col justify-center gap-2 px-3 text-left items-start rounded-b-lg mb-4
        // <span className="text-cyan-300 text-sm hover:cursor-pointer">...show more</span>
    )
}
export default OngoingProjectCard
