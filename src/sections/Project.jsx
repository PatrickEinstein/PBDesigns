import React, { Suspense, useState } from "react";
import { myProjects } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";


const projectCount = myProjects.length;
const Project = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };


  return (
    <section className="c-space my-20 " id="work">
      <p className="head-text">Our Projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full bg-blue-800">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="flex flex-col gap-5 text-white-600 my-5 ">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText text-white-800">{currentProject.desc}</p>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left-arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 m:h-full">
        <img src={currentProject.logo} alt={currentProject.logo} className="h-full w-full object-cover"/>
        </div>
      </div>
    </section>
  );
};
export default Project;


{/* <Canvas>
<ambientLight intensity={Math.PI} />
<directionalLight position={[0, 10, 5]} />
<Center>
  <Suspense fallback={<CanvasLoader />}>
    <group
      scale={isMobile ? 0.2 : 0.3}
      position={[0, -1, 0]}
      rotation={[0, -0.1, 0]}
    >
      {renderModel()}
    </group>
  </Suspense>
</Center>
<OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={true} />
</Canvas> */}