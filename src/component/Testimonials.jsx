import React from "react";

import Navbar from "./Navbar";

const Testimonials = () => {

    const images = [
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719831793/ejqj9nk5svinpbb0necs.png',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719831826/w5lvyldkmegw6tm7t7vt.png',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719831853/egdo47gwyslstknmdjyu.png',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719831878/dgtmtihasqibgfb3rtrb.png',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719831909/ygbmirfc9ofmmtujdv57.png',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719831933/vp3fz90dwbjmkqvikgnq.png',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719831960/myyw09rmqytlzzjnn2jl.png',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719831986/vptr4sahj0jdunbhkgcr.png',
        'http://res.cloudinary.com/dnlsjmsfa/image/upload/v1719832027/eowqricfrcrrnxif4swa.png',
        // 'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872850/zsuge1dt2qbpaq5zwokw.jpg',
        // 'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872897/fjayssvfslm0htu68yu5.jpg',
        // 'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872933/i7smrmcmhx9dfzptmdwg.jpg',
        // 'https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872999/wex3sgwkihdsefh6jxja.jpg',
    ]

    return (
        <div  className="flex w-screen flex-col min-h-screen pb-4 ">
            <Navbar/>
            {/* image and testimonial */}
            <div className="w-full lg:relative md:relative sm:flex sm:flex-col xs:flex xs:flex-col">
                <div className="w-full lg:relative sm:relative lg:z-10 md:z-10">
                    <img className="w-full lg:h-[600px] md:h-[600px] sm:h-[200px] xs:h-[200px]" src="https://res.cloudinary.com/dnlsjmsfa/image/upload/v1725872850/zsuge1dt2qbpaq5zwokw.jpg" alt="image"/>
                </div>
                {/* our testimonials */}
                <div className="lg:h-[200px] md:h-[200px] sm:h-[100px] xs:h-[100px] lg:absolute flex items-center justify-center md:absolute lg:rounded-lg md:rounded-lg lg:top-64 md:top-5 lg:left-10 md:left-10 lg:opacity-90 md:opacity-90 bg-gray-800 text-white lg:w-[70%] md:w-[70%] sm:w-[100%] xs:w-[100%] lg:ml-10 md:ml-10 lg:z-20 md:z-20">
                    <p className=" lg:text-6xl md:text-6xl sm:text-xl xs:text-xl lg:mx-10 md:mx-10 sm:mx-6 xs:mx-6 font-semibold ">
                        Our Testimonials
                    </p>
                </div>
            </div>

            {/* testimonial overview */}
            <div className="w-[90%] mx-auto mt-6 gap-10 bg-white">
                <div className="lg:h-[250px] md:h-[250px] rounded-lg px-2 flex lg:flex-row md:flex-row sm:flex-col xs:flex-col items-center lg:w-[70%] md:w-[70%] sm:w-full xs:w-full mx-auto bg-gray-200">
                    <div className="lg:text-2xl md:text-2xl sm:text-lg xs:text-lg font-semibold">
                        Our <span className="font-bold text-red-500 lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl">Testimonials</span> are assurance and a promise from our side to everybody about our legitimacy and discipline towards our work.
                    </div>
                </div>
            </div>

            {/* testimonials */}
            <div className="w-[80%] grayscale mt-6 hover:grayscale-0 mx-auto lg:grid md:grid sm:flex xs:flex sm:flex-col xs:flex-col lg:grid-cols-3 md:grid-cols-3  gap-8 ">
            {images.map((src,index) => (
                        <img key={index} src={src} className=" lg:h-96 grayscale hover:grayscale-0 hover:scale-110 hover:shadow-2xl transition-all md:h-96 sm:h-64 xs:h-64 w-80 rounded-2xl"/>
                    ))}

            </div>
        </div>
    )
}

export default Testimonials