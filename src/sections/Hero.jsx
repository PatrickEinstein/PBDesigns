import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import ModernHome1 from "../components/ModernHome1.jsx";

const Hero = () => {
  //   const x = useControls("HackerRoom", {
  //     positionX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 50,
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 50,
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 50,
  //     },
  //     rotationX: {
  //       value: 0,
  //       min: -10,
  //       max: 50,
  //     },
  //     rotationY: {
  //       value: 0,
  //       min: -10,
  //       max: 50,
  //     },
  //     rotationZ: {
  //       value: 0,
  //       min: -10,
  //       max: 50,
  //     },
  //     scale: {
  //       value: 1,
  //       min: 0.1,
  //       max: 10,
  //     },
  //   }); // I use this if i want to use LEVA to determine my position
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section
      className="h-[85vh] w-full flex flex-col relative "
      id="home"
    >
      <div className="w-full mx-auto flex flex-col mt-20 md:mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Welcome to PB Designs Limited <span className="waving-hand">👋</span>
        </p>
        <p className="text-xl md:text-xl font-light text-white text-center font-generalsans">
          Engineering Excellence Redefined
        </p>
      </div>
      <div className="w-full h-full absolute inset-0 ">
        <Canvas>
          <ambientLight intensity={Math.PI} />
          <directionalLight position={[0, 10, 5]} />
          <Center>
            <Suspense fallback={<CanvasLoader />}>
              <group scale={isMobile ? 1.3 : 2} position={[0, -1, 0]} rotation={[0, -0.1, 0]}>
                <ModernHome1 />
              </group>
            </Suspense>
          </Center>
          <OrbitControls maxPolarAngle={Math.PI} enableZoom={true} />
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
