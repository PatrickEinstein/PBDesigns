import React, { Suspense, useState } from "react";
import Globe from "react-globe.gl";

import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { useMediaQuery } from "react-responsive";
import { calculateSizes, Services } from "../constants/index.js";

const About = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("mohammedola1234@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="flex flex-col justify-between gap-20">
        {/* MISSION AND VISISON */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <img
            src="/assets/pb-team.jpg"
            alt="grid-1"
            className=" w-full md:w-1/3 h-fit object-contain"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 md:justify-between md:gap-8 text-left">
            <div data-aos="fade-right">
              <div className="mb-4 bg-[#0077B6] bg-opacity-50 p-5 transition hover:scale-105 hover:shadow-lg duration-300 ease-in-out data-aos=fade-right">
                <p className="grid-headtext">Our Story</p>
                <p className="grid-subtext">
                  Established over two decades ago, PB Designs Limited has
                  evolved into a reputable engineering firm known for delivering
                  high-quality services across various sectors. Our commitment
                  to excellence and innovation has positioned us as a trusted
                  partner for clients seeking reliable engineering solutions.
                </p>
              </div>
            </div>
            <div data-aos="fade-right">
              <div className="mb-4 bg-[#0077B6] bg-opacity-50 p-5 transition hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                <p className="grid-headtext">Our Mission</p>
                <p className="grid-subtext">
                  To provide innovative and sustainable engineering services
                  that exceed client expectations, contributing to the
                  development and advancement of the industries we serve.
                </p>
              </div>
            </div>
            <div data-aos="fade-right">
              <div className="mb-4 bg-[#0077B6] bg-opacity-50 p-5 transition hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                <p className="grid-headtext">Our Vision</p>
                <p className="grid-subtext">
                  To be a global leader in engineering services, recognized for
                  our expertise, quality, and commitment to client success.
                </p>
              </div>
            </div>
            <div data-aos="fade-right">
              <div className="mb-4 bg-[#0077B6] bg-opacity-50 p-5 transition hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                <p className="grid-headtext">Our Team</p>
                <p className="grid-subtext">
                  Our team comprises seasoned professionals with diverse
                  expertise in engineering, project management, and technical
                  services. Their dedication and skill drive the success of our
                  projects and the satisfaction of our clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES */}

        <div className="flex flex-col  gap-5 md:flex-row w-full">
          <div className="flex flex-col gap-6 w-full md:w-1/3">
            <img
              src="/assets/Gallery/PB1.jpg"
              alt="/assets/Gallery/PB1.jpg"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="w-full">
            <h2 className="text-2xl font-semibold text-white mb-6">Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              {Services.map((item, index) => (
                <div key={index} data-aos="fade-up">
                  <li key={index} className="h-full">
                    <div className="bg-black-300 bg-opacity-50 h-full flex flex-col rounded-xl shadow-md p-6 transition hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                      <h3 className="text-xl font-bold mb-2">
                        {item.headtext}
                      </h3>
                      <p className="text-sm text-gray-300">{item.subtext}</p>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8 mb-8 items-center">
          <div className="justify-between gap-5">
            <p className="grid-headtext">Locate Us</p>
            <p className="text-white">
              Suite 21, Block A, Alausa Shopping Mall, Alausa Ikeja, Lagos,
              Nigeria
            </p>
            <p className="text-white">+234 803 474 0048</p>
            <p className="text-white">info@pbdesignsltd.com</p>
            <p className="text-white">Monday - Friday, 8:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>

      <div className="grid  xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="md:col-span-2 md:row-span-1">
          <div className="bg-[#03045E] bg-opacity-50  md:px-10">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="h-full sm:h-[266px] object-contain"
            />
            <div>
              <p className="grid-headtext">
                Our passion for Cutting edge technology in Engineering{" "}
              </p>
              <p className="grid-subtext">
                At PB Designs Limited, we are committed to delivering
                innovative, sustainable, and high-quality engineering solutions
                tailored to meet the unique needs of our clients. With a legacy
                of excellence and a forward-thinking approach, we have
                established ourselves as a leader in the engineering and
                construction industry in Nigeria and beyond.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Us </p>
              <div className="px-5 copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-xl font-medium text-gray-50">
                  info@pbdesignsltd.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
