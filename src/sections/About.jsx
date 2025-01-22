import React, { Suspense, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import HeroCamera from "../components/HeroCamera.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
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
              src="/assets/me-pat.png"
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

              <ul className="list-disc text-white-800 leading-loose">
                <li>
                  Integrity: We conduct our business with the highest ethical
                  standards, fostering trust and transparency in all our
                  engagements.
                </li>
                <li>
                  Excellence: We strive for superior quality in every project we
                  undertake, ensuring outcomes that not only meet but exceed
                  expectations.
                </li>
                <li>
                  Innovation: We embrace new technologies and methodologies to
                  deliver cutting-edge solutions that drive progress and
                  efficiency.
                </li>
                <li>
                  Collaboration: We believe in building strong relationships
                  with our clients, partners, and communities, working together
                  to achieve shared goals.
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
                      scale={isMobile ? 0.1 : 0.15}
                      position={[0, -1, 0]}
                      rotation={[0, -0.1, 0]}
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

              <ul className="list-disc text-white-800 leading-loose">
                <li>
                  <div>
                    <p className="grid-headtext">
                      Comprehensive Engineering Solutions Tailored to Your Needs
                    </p>
                    <p className="grid-subtext">
                      At PB Designs Limited, we offer a wide range of services
                      designed to meet the diverse needs of our clients. Our
                      expertise spans multiple disciplines, ensuring that we can
                      provide comprehensive solutions for any project.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="grid-headtext">
                      Automation and Control Systems Design and Implementation
                    </p>
                    <p className="grid-subtext">
                      In today's fast-paced industrial environment, automation
                      is key to maintaining competitiveness. Our team designs
                      and implements advanced control systems that streamline
                      operations, enhance productivity, and reduce costs. By
                      integrating the latest technologies, we create customized
                      solutions that align with your specific operational
                      requirements.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="grid-headtext">
                      Corrosion Control and Cathodic Protection
                    </p>
                    <p className="grid-subtext">
                      Corrosion can significantly impact the longevity and
                      safety of your assets. Our corrosion control strategies,
                      including cathodic protection, are designed to prevent
                      deterioration, ensuring the durability and reliability of
                      your infrastructure. We conduct thorough assessments to
                      develop tailored solutions that mitigate corrosion risks
                      effectively.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="grid-headtext">Pipeline Construction</p>
                    <p className="grid-subtext">
                      Pipelines are the lifelines of energy and resource
                      distribution. Our comprehensive pipeline construction
                      services encompass planning, design, procurement,
                      installation, and commissioning. We adhere to stringent
                      safety and environmental standards, delivering pipelines
                      that are efficient, reliable, and sustainable.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="grid-headtext">
                      Industrial Building Construction
                    </p>
                    <p className="grid-subtext">
                      The foundation of any successful industrial operation lies
                      in its infrastructure. We specialize in constructing
                      industrial buildings that meet international standards,
                      focusing on functionality, safety, and scalability. Our
                      designs are tailored to support your operational needs,
                      providing a conducive environment for productivity and
                      growth.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="grid-headtext">
                      Non-Destructive Testing Services
                    </p>
                    <p className="grid-subtext">
                      Ensuring the integrity of materials and structures is
                      crucial for safety and performance. Our non-destructive
                      testing services, including Ultrasonic Thickness Gauging,
                      Magnetic Particle Inspection (MPI), Positive Material
                      Identification (PMI), and Hardness Testing, provide
                      accurate assessments without causing damage. These
                      services help in early detection of potential issues,
                      allowing for proactive maintenance and prevention of
                      failures.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="grid-headtext">
                      Casing and Tubing Inspection
                    </p>
                    <p className="grid-subtext">
                      In the oil and gas industry, the integrity of casing and
                      tubing is vital for safe and efficient operations. Our
                      inspection services utilize advanced technologies to
                      detect defects, corrosion, or wear, ensuring compliance
                      with industry standards and preventing costly downtimes.
                    </p>
                  </div>
                </li>
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
                My passion for Cutting edge technology in Engineering{" "}
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
