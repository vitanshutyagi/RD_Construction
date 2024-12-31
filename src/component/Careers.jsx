import React, { useState } from "react";

import { Toaster, toast } from "react-hot-toast";

import axios from "axios";

import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import Navbar from "./Navbar";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [sending,setSending] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // update the form field based on input name
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.name.trim() == "") {
        toast.error("Name is required.");
        return;
      }
      if (formData.email.trim() == "") {
        toast.error("Email is required.");
        return;
      }
      if (formData.number.trim() == "") {
        toast.error("Number is required.");
        return;
      }
      //   console.log("formdata = ", formData);
      const response = await axios.post(`http://localhost:4000/sendMail`, {
        formData,
      });
      if (response.data.success) {
        toast.success("Thank You for contacting us!");
      } else {
        toast.error("Error in sending mail !");
      }
      //   console.log("success res = ", response);
    } catch (error) {
      //   console.log("error = ", error);
      return;
    }

    // clear the form after submission
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "+919528125887";
    const message = encodeURIComponent("Hello!");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };
  return (
    <div className=" w-screen flex flex-col xs:gap-0 sm:gap-0 md:gap-6 lg:gap-6 xl:gap-6 items-center justify-center h-auto pb-20 bg-slate-200">

        <Navbar/>

        {/* contact details & form */}
        <div className="flex justify-evenly xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row xs:gap-5 sm:gap-5 md:gap-0 lg:gap-0 xl:gap-0 w-full ">
          {/* details */}
          <div className="xs:w-[100%] rounded-xl sm:w-[100%] md:w-[35%] lg:w-[35%] xl:w-[35%] flex flex-col gap-6 bg-white xs:pl-8 sm:pl-8 md:pl-16 lg:pl-16 xl:pl-16 xs:pr-3 sm:pr-3 md:pr-0 lg:pr-0 xl:pr-0 pt-10 pb-7">
            {/* email */}
            <div className="flex gap-4 items-center ">
              <div className="text-2xl">
                <IoIosMail className="size-8 " />
              </div>
              <div className=" xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl">
                <a
                  className="text-blue-400 hover:text-blue-600 hover:shadow-md underline-offset-4"
                  href="mailto:info@rdcc0139@gmail.com"
                >
                  info@rdcc0139@gmail.com
                </a>
              </div>
            </div>

            {/* location */}
            <div className="flex items-center ">
              <div className="text-2xl">
                <FaLocationDot className="size-8 " />
              </div>
              <div className="text-slate-400 xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl">
                7th Floor , Royal Kapsons A-118 , Sector 136, Noida , Bajidpur ,
                Uttar Pradesh 201301
              </div>
            </div>
            {/* mobile */}
            <div className="flex items-center gap-4  ">
              <div className="text-2xl">
                <IoIosCall className="size-8 " />
              </div>
              <div className=" xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl">
                <a
                  href="tel:+918595031668"
                  className="text-blue-400 hover:text-blue-600 hover:shadow-md underline-offset-4"
                >
                  +919528125887
                </a>
              </div>
            </div>
            {/* mobile */}
            <div className="flex items-center gap-4 ">
              <div className="text-2xl">
                <IoLogoWhatsapp className="size-8" />
              </div>
              <div
                onClick={openWhatsApp}
                className=" xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl"
              >
                <a
                  href="tel:+918595031668"
                  className="text-blue-400 hover:text-blue-600 hover:shadow-md underline-offset-4"
                >
                  +919528125887
                </a>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="bg-white rounded-xl flex flex-col pt-8 pb-10 gap-6 items-center xs:w-[100%] sm:w-[100%] md:w-[60%] lg:w-[60%] xl:w-[60%]">
            {/* name & email  */}
            <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly p-2 gap-0 w-full">
              {/* name */}
              <div className="flex flex-col gap-3 xs:w-[100%] sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                <div className="text-xl">Full Name</div>
                <div>
                  <input
                    onChange={handleInputChange}
                    value={formData.name}
                    name="name"
                    className="h-12 text-center border-2 xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-60 rounded-lg"
                    type="text"
                    placeholder="Enter your name."
                  />
                </div>
              </div>

              {/* email */}
              <div className="flex flex-col gap-3 xs:w-[100%] sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                <div className="text-xl">Email</div>
                <div>
                  <input
                    onChange={handleInputChange}
                    value={formData.email}
                    name="email"
                    className="h-12 border-2 text-center xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-60 rounded-lg"
                    type="email"
                    placeholder="Example@gmail.com"
                  />
                </div>
              </div>
            </div>

            {/* number & subject */}
            <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly p-2 gap-0 w-full">
              {/* number */}
              <div className="flex flex-col gap-3 xs:w-[100%] sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                <div className="text-xl">Phone Number</div>
                <div>
                  <input
                    onChange={handleInputChange}
                    value={formData.number}
                    name="number"
                    className="h-12 border-2 text-center xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-60 rounded-lg"
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* sub */}
              <div className="flex flex-col gap-3 xs:w-[100%] sm:w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
                <div className="text-xl">Subject</div>
                <div>
                  <input
                    onChange={handleInputChange}
                    value={formData.subject}
                    name="subject"
                    className="h-12 border-2 text-center xs:w-52 sm:w-52 md:w-60 lg:w-60 xl:w-60 rounded-lg"
                    type="email"
                    placeholder="Type your Subject"
                  />
                </div>
              </div>
            </div>

            {/* message */}
            <div className="flex flex-col gap-3 w-[65%] xs:items-center sm:items-center md:items-start lg:items-start">
              <div className="text-xl">Message</div>
              <div className="w-full">
                <textarea
                  onChange={handleInputChange}
                  value={formData.message}
                  name="message"
                  className="w-full border-2 h-36 rounded-lg p-4 "
                ></textarea>
              </div>
            </div>

            {/* button */}
            <div className="">
              <button
                onClick={handleSubmit}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Careers;
