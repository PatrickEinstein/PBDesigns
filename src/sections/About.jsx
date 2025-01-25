import React, { Suspense, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import HeroCamera from "../components/HeroCamera.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes, Services } from "../constants/index.js";
import DemoComputer from "../components/DemoComputer.jsx";
import ModernHome1 from "../components/ModernHome1.jsx";
import ModernHome2 from "../components/ModernHome2.jsx";

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
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-3 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/pb-team.jpg"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Our Story</p>
              <p className="grid-subtext">
                Established over two decades ago, PB Designs Limited has evolved
                into a reputable engineering firm known for delivering
                high-quality services across various sectors. Our commitment to
                excellence and innovation has positioned us as a trusted partner
                for clients seeking reliable engineering solutions.
              </p>
            </div>
            <div>
              <p className="grid-headtext">Our Mission</p>
              <p className="grid-subtext">
                To provide innovative and sustainable engineering services that
                exceed client expectations, contributing to the development and
                advancement of the industries we serve.
              </p>
            </div>
            <div>
              <p className="grid-headtext">Our Vision</p>
              <p className="grid-subtext">
                To be a global leader in engineering services, recognized for
                our expertise, quality, and commitment to client success.
              </p>
            </div>
            <div>
              <p className="grid-headtext">Our Team</p>
              <p className="grid-subtext">
                Our team comprises seasoned professionals with diverse expertise
                in engineering, project management, and technical services.
                Their dedication and skill drive the success of our projects and
                the satisfaction of our clients.
              </p>
            </div>
            <div>
              <p className="grid-headtext">Our Values</p>

              <ul className=" flex flex-col gap-5 list-none text-white-800 leading-loose">
                <li>
                  <span className="font-bold">Integrity:</span> We conduct our
                  business with the highest ethical standards, fostering trust
                  and transparency in all our engagements.
                </li>
                <li>
                  <span className="font-bold">Excellence:</span> We strive for
                  superior quality in every project we undertake, ensuring
                  outcomes that not only meet but exceed expectations.
                </li>
                <li>
                  <span className="font-bold">Innovation:</span> We embrace new
                  technologies and methodologies to deliver cutting-edge
                  solutions that drive progress and efficiency.
                </li>
                <li>
                  <span className="font-bold">Collaboration: </span>We believe
                  in building strong relationships with our clients, partners,
                  and communities, working together to achieve shared goals.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cols-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="w-full h-[500px]">
              <Canvas>
                <ambientLight intensity={Math.PI} />
                <directionalLight position={[0, 10, 5]} />
                <Center>
                  <Suspense fallback={<CanvasLoader />}>
                    <group
                      scale={isMobile ? 0.13 : 0.15}
                      position={[0, -1, 0]}
                      rotation={[0.3, 1.3, 0.3]}
                    >
                      <ModernHome2 />
                      {/* <DemoComputer /> */}
                    </group>
                  </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI} enableZoom={true} />
              </Canvas>
            </div>
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
        </div>
        <div className="col-span-1 md:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full  flex justify-center items-center">
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
