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

          <div>
            <div className="mb-4">
              <p className="grid-headtext">Our Story</p>
              <p className="grid-subtext">
                Established over two decades ago, PB Designs Limited has evolved
                into a reputable engineering firm known for delivering
                high-quality services across various sectors. Our commitment to
                excellence and innovation has positioned us as a trusted partner
                for clients seeking reliable engineering solutions.
              </p>
            </div>
            <div className="mb-4">
              <p className="grid-headtext">Our Mission</p>
              <p className="grid-subtext">
                To provide innovative and sustainable engineering services that
                exceed client expectations, contributing to the development and
                advancement of the industries we serve.
              </p>
            </div>
            <div className="mb-4">
              <p className="grid-headtext">Our Vision</p>
              <p className="grid-subtext">
                To be a global leader in engineering services, recognized for
                our expertise, quality, and commitment to client success.
              </p>
            </div>
            <div className="mb-4">
              <p className="grid-headtext">Our Team</p>
              <p className="grid-subtext">
                Our team comprises seasoned professionals with diverse expertise
                in engineering, project management, and technical services.
                Their dedication and skill drive the success of our projects and
                the satisfaction of our clients.
              </p>
            </div>
          </div>
        </div>

        {/* SERVICES */}

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <img
            src="/assets/Gallery/PB1.jpg"
            alt="/assets/Gallery/PB1.jpg"
            className=" w-full md:w-1/3 h-fit object-contain"
          />

          <div>
            <p className="grid-headtext">Services</p>

            <ul className="flex flex-col gap-5 list-none text-white-800 leading-loose">
              {Services.map((item, index) => (
                <li key={index}>
                  <div>
                    <p className="grid-headtext">{item.headtext}</p>
                    <p className="grid-subtext">{item.subtext}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GLOBE */}
        <div className="flex flex-col md:flex-row gap-8 mt-8 mb-8 items-center">
          <div className=" w-full md:w-1/3 h-fit object-contain">
            <Globe
              height={326}
              width={326}
              backgroundColor="rgba(0,0,0,0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[
                {
                  lat: 6.5244,
                  lng: 3.3792,
                  text: "I'm here",
                  color: "white",
                  size: 100,
                },
              ]}
            />
          </div>
          <div className="justify-between gap-5">
            <p className="grid-headtext">Locate Us</p>
            <p className="grid-subtext">
              Suite 21, Block A, Alausa Shopping Mall, Alausa Ikeja, Lagos,
              Nigeria
            </p>
            <p className="grid-subtext">+234 803 474 0048</p>
            <p className="grid-subtext">info@pbdesignsltd.com</p>
            <p className="grid-subtext">Monday - Friday, 8:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>

      <div className="grid  xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="md:col-span-2 md:row-span-1">
          <div className="grid-container">
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
