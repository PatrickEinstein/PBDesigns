import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
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
      className="min-h-screen   w-full flex flex-col relative "
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
      <div className="w-full h-full absolute inset-0">
        {/*<Leva/>*/}
        <Canvas className="w-full h-full">
          {/* <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} /> */}
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 0]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={[-2.0, -4.7, -10.1]}
                rotation={[-1.2, -6.2, 6.6]}
                scale={0.08}
              />
            </HeroCamera>

            <ambientLight intensity={10} />
            <directionalLight position={[10, 10, 10]} intensity={10} />
          </Suspense>
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
