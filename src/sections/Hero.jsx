import React, { Suspense } from "react";
import Button from "../components/Button.jsx";

import Carousel from "../components/Carousel.jsx";

const Hero = () => {
 
  return (
    <section
      className="min-h-screen w-full flex flex-col relative "
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
      <div className="w-full my-auto h-[80vh]">
      <Carousel/>
      </div>
      <div className="absolute bottom-7 left-0 mt-10 right-0 w-full z-10 c-space">
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

{/* <Canvas>
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
</Canvas> */}