import React, { Suspense, useRef } from "react";
import Button from "../components/Button.jsx";

import Carousel from "../components/Carousel.jsx";
const vid = "/";

const Hero = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const handleVideoEnd = (endedVideoRef, nextVideoRef) => {
    endedVideoRef.current.style.display = "none";
    nextVideoRef.current.style.display = "block";
    nextVideoRef.current.play();
  };
  return (
    <section
      className="min-h-screen w-full pt-5 flex flex-col relative"
      id="home"
    >
      {/* Main content container */}
      <div className="w-full h-[100vh] relative my-auto">
        {/* Background video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={video1Ref}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => handleVideoEnd(video1Ref, video2Ref)}
          >
            <source src="assets/Gallery/vid1.mp4" type="video/mp4" />
          </video>

          <video
            ref={video2Ref}
            muted
            playsInline
            className="w-full h-full object-cover hidden"
            onEnded={() => handleVideoEnd(video2Ref, video1Ref)}
          >
            <source src="assets/Gallery/vid2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Text overlay */}
        <div className="relative text-white-800 z-10 px-2 text-center transform -translate-y-1/2 top-1/4 md:top-1/3 md:left-1/3 md:-translate-x-1/3">
          <h1 className="text-2xl md:text-4xl font-semibold  font-generalsans">
            Welcome to PB Designs Limited{" "}
            <span className="animate-wave">👋</span>
          </h1>
          <p className="mt-2 text-xl md:text-2xl font-light  font-generalsans">
            Engineering Excellence Redefined
          </p>
        </div>

        {/* CTA button */}
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center c-space">
          <a href="#about" className="w-full sm:w-auto">
            <Button
              name="Let's work together"
              isBeam
              className="sm:min-w-96 w-full sm:w-auto"
            />
          </a>
        </div>
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
