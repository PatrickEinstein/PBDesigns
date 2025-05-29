import React, { Suspense } from "react";
import Button from "../components/Button.jsx";

import Carousel from "../components/Carousel.jsx";

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full pt-5 flex flex-col relative "
      id="home"
    >
      <div className="w-full my-auto h-[100vh] relative">
        <div className="px-2 absolute top-1/4 md:top-1/3 md:left-1/3 flex flex-col z-10 ">
          <p className="text-2xl md:text-4xl font-semibold text-center font-generalsans text-black">
            Welcome to PB Designs Limited{" "}
            <span className="animate-wave">👋</span>
          </p>
          <p className="mt-2 text-2xl md:text-xl font-light text-center font-generalsans text-black">
            Engineering Excellence Redefined
          </p>
        </div>
        <Carousel />
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

{
  /* <Canvas>
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
</Canvas> */
}
