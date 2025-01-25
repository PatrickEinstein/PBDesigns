import React from "react";
import { useGLTF } from "@react-three/drei";

function HackerRoom(props) {

  const { nodes, materials } = useGLTF("/models/vianney_house_2.glb");

  const meshes = [
    {
      geometry: nodes.Object001_Object001_mtl_0.geometry,
      material: materials.Object001_mtl,
    },
    {
      geometry: nodes.Object002_Object002_mtl_0.geometry,
      material: materials.Object002_mtl,
    },
    {
      geometry: nodes.Object003_Object003_mtl_0.geometry,
      material: materials.Object003_mtl,
    },
    {
      geometry: nodes.Object004_Object004_mtl_0.geometry,
      material: materials.Object004_mtl,
    },
    {
      geometry: nodes.vitre_BATIMENUISERIE_VITRE_0.geometry,
      material: materials["BATI.MENUISERIE_VITRE"],
    },
  ];


  return (
    <group {...props} dispose={null}>
      {meshes.map(({ geometry, material }, index) => (
        <group key={index} >
          <mesh
            castShadow
            receiveShadow
            geometry={geometry}
            material={material}
            position={[-735.366, -715.867, 1.254]}
          />
        </group>
      ))}
    </group>
  );
}

useGLTF.preload("/models/vianney_house_2.glb");
export default HackerRoom;
