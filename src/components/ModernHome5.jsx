import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ModernHome4(props) {
  const { nodes, materials } = useGLTF("/models/modernHome4.glb");
  const group = useRef() // this was on he very first line or ---line 11
  useGSAP(() => {
      gsap.from(group.current.rotation, {
          y: Math.PI / 2,
          duration: 1,
          ease: "power3.out"
      })
  }, [])

 
}

useGLTF.preload("/models/modernHome4.glb");
export default ModernHome4;
