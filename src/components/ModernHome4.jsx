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

  return (
    <group ref={group} {...props} dispose={null}>
    <group scale={0.01}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line002_06_-_Default_0'].geometry}
        material={materials['06_-_Default']}
        position={[-226.343, 70, 1060.196]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line003_Solid_Glass_0.geometry}
        material={materials.Solid_Glass}
        position={[-354.418, 420, 842.403]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line004_23_-_Default_0'].geometry}
        material={materials['23_-_Default']}
        position={[-198.54, 50, 1119.026]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle002_05_-_Default_0'].geometry}
        material={materials['05_-_Default']}
        position={[-229.935, 0, 1162.549]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line005_01_-_Default_0'].geometry}
        material={materials['01_-_Default']}
        position={[-198.859, 50, 1976.807]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box002_03_-_Default_0'].geometry}
        material={materials['03_-_Default']}
        position={[-857.547, -324.762, 1813.668]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box003_02_-_Default_0'].geometry}
        material={materials['02_-_Default']}
        position={[-857.547, -323.93, 1813.668]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.972}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line006_Wall_Paint_0.geometry}
        material={materials.Wall_Paint}
        position={[-226.66, 70, 1050.196]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line007_12_-_Car_Paint_0'].geometry}
        material={materials['12_-_Car_Paint']}
        position={[-226.66, 390, 1050.196]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line008_Wall_Paint_0.geometry}
        material={materials.Wall_Paint}
        position={[-286.151, 420, 890.267]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line009_13_-_Brushed_Metal_#2_0'].geometry}
        material={materials['13_-_Brushed_Metal_2']}
        position={[-286.151, 730, 890.267]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line010_Metal_0.geometry}
        material={materials.Metal}
        position={[332.2, 470.015, 1883.884]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line011_Metal_0.geometry}
        material={materials.Metal}
        position={[-815.632, 470.015, 1062.352]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box004_04_-_Default_0'].geometry}
        material={materials['04_-_Default']}
        position={[-1129.243, 32.921, 1813.27]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line012_11_-_Default_0'].geometry}
        material={materials['11_-_Default']}
        position={[420.932, 0, 1180.626]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line013_11_-_Default_0'].geometry}
        material={materials['11_-_Default']}
        position={[221.243, 0, 640.603]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line014_11_-_Default_0'].geometry}
        material={materials['11_-_Default']}
        position={[-88.574, 0, 578.306]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line015_11_-_Default_0'].geometry}
        material={materials['11_-_Default']}
        position={[-716.083, 0, 600.992]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line016_11_-_Default_0'].geometry}
        material={materials['11_-_Default']}
        position={[420.932, 327.908, 1180.626]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line017_11_-_Default_0'].geometry}
        material={materials['11_-_Default']}
        position={[221.243, 327.908, 640.603]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line018_11_-_Default_0'].geometry}
        material={materials['11_-_Default']}
        position={[-88.574, 327.908, 578.306]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line019_11_-_Default_0'].geometry}
        material={materials['11_-_Default']}
        position={[-716.083, 327.908, 600.992]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line020_14_-_Polished_Aluminum_0'].geometry}
        material={materials['14_-_Polished_Aluminum']}
        position={[-294.533, 802.168, 886.497]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box005_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[-1033.696, 749.651, 112.052]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box006_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[-550.334, 749.651, 112.052]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box007_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[-550.334, 749.651, 289.689]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box008_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[18.753, 749.651, 289.689]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box009_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[595.393, 749.651, 289.689]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box010_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[595.393, 749.651, 1081.757]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box011_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[595.393, 749.651, 1960.062]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box012_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[70.428, 749.651, 1960.062]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box014_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[-551.115, 749.651, 929.411]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box015_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[-551.115, 749.651, 1141.375]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box016_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[-1036.436, 749.651, 1141.375]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box017_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[-1036.436, 749.651, 593.259]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line021_19_-_Glass_(Thin_wall)_0'].geometry}
        material={materials['19_-_Glass_Thin_wall']}
        position={[335.996, 485.483, 2001.28]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box049_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[103.603, 434.237, 1995.888]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box050_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[570.101, 434.237, 1995.888]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box051_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[-996.309, 434.237, 1173.215]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box052_15_-_Glossy_Plastic_0'].geometry}
        material={materials['15_-_Glossy_Plastic']}
        position={[-580.889, 434.237, 1173.215]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Line022_19_-_Glass_(Thin_wall)_0'].geometry}
        material={materials['19_-_Glass_Thin_wall']}
        position={[-814.993, 485.483, 1178.606]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box053_20_-_Polished_Aluminum_0'].geometry}
        material={materials['20_-_Polished_Aluminum']}
        position={[633.555, 700.054, 1465.13]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box054_20_-_Polished_Aluminum_0'].geometry}
        material={materials['20_-_Polished_Aluminum']}
        position={[635.227, 356.917, 1465.13]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box055_20_-_Polished_Aluminum_0'].geometry}
        material={materials['20_-_Polished_Aluminum']}
        position={[-1140.763, 356.917, 1465.13]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box056_20_-_Polished_Aluminum_0'].geometry}
        material={materials['20_-_Polished_Aluminum']}
        position={[-1135.503, 700.699, 1465.13]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box057_21_-_Default_0'].geometry}
        material={materials['21_-_Default']}
        position={[-1125.58, -308.633, 978.979]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box058_21_-_Default_0'].geometry}
        material={materials['21_-_Default']}
        position={[-1125.58, -308.633, 1047.249]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box059_21_-_Default_0'].geometry}
        material={materials['21_-_Default']}
        position={[-12.249, -308.633, 1790.817]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box061_21_-_Default_0'].geometry}
        material={materials['21_-_Default']}
        position={[-12.249, -308.633, 984.571]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box062_21_-_Default_0'].geometry}
        material={materials['21_-_Default']}
        position={[613.928, -308.633, 1790.817]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box063_21_-_Default_0'].geometry}
        material={materials['21_-_Default']}
        position={[613.928, -308.633, 1728.279]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box064_21_-_Default_0'].geometry}
        material={materials['21_-_Default']}
        position={[613.928, -308.633, 448.49]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box065_22_-_Default_0'].geometry}
        material={materials['22_-_Default']}
        position={[-232.25, 237.1, 317.755]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle067_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-232.921, 237.798, 318.757]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle068_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-232.921, 237.798, 318.757]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle003_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[36.716, 586.385, 1571.815]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box018_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[37.719, 585.686, 1572.486]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle004_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[36.716, 586.385, 1571.815]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box019_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[37.719, 237.1, 1520.347]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle005_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[36.716, 237.798, 1519.676]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle006_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[36.716, 237.798, 1519.676]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box020_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[37.719, 237.1, 1361.008]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle007_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[36.716, 237.798, 1360.337]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle008_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[36.716, 237.798, 1360.337]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box021_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[37.719, 237.1, 1201.134]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle009_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[36.716, 237.798, 1200.463]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle010_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[36.716, 237.798, 1200.463]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box022_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-72.849, 237.1, 958.361]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle011_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-73.52, 237.798, 959.363]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle012_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-73.52, 237.798, 959.363]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box023_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-232.25, 237.1, 958.361]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle013_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-232.921, 237.798, 959.363]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle014_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-232.921, 237.798, 959.363]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box024_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-391.279, 237.1, 958.361]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle015_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-391.951, 237.798, 959.363]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle016_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-391.951, 237.798, 959.363]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box025_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-638.687, 237.1, 1102.123]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle017_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-639.358, 237.798, 1103.126]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle018_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-639.358, 237.798, 1103.126]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box026_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-812.804, 237.1, 1102.123]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle019_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-813.475, 237.798, 1103.126]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle020_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-813.475, 237.798, 1103.126]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box027_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-1071.319, 237.1, 828.051]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle021_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-1072.322, 237.798, 827.38]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle022_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-1072.322, 237.798, 827.38]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box028_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-1071.319, 237.1, 513.466]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle023_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-1072.322, 237.798, 512.795]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle024_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-1072.322, 237.798, 512.795]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box029_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-669.52, 237.1, 329.558]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle025_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-668.849, 237.798, 328.555]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle026_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-668.849, 237.798, 328.555]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box030_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-432.113, 237.1, 329.558]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle027_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-431.441, 237.798, 328.555]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle028_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-431.441, 237.798, 328.555]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box031_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[91.378, 237.1, 329.558]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle029_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[92.05, 237.798, 328.555]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle030_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[92.05, 237.798, 328.555]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box032_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[440.031, 237.1, 329.558]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle031_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[440.702, 237.798, 328.555]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle032_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[440.702, 237.798, 328.555]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box033_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[632.525, 237.1, 626.729]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle033_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[633.528, 237.798, 627.4]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle034_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[633.528, 237.798, 627.4]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box034_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[632.525, 237.1, 1325.251]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle035_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[633.528, 237.798, 1325.922]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle036_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[633.528, 237.798, 1325.922]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box035_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[632.525, 237.1, 1573.659]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle037_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[633.528, 237.798, 1574.33]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle038_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[633.528, 237.798, 1574.33]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box036_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[296.426, 237.1, 1838.748]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle039_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[295.755, 237.798, 1839.751]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle040_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[295.755, 237.798, 1839.751]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box037_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[122.023, 237.1, 1838.748]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle041_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[121.352, 237.798, 1839.751]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle042_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[121.352, 237.798, 1839.751]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box038_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[37.719, 585.686, 1257.973]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle043_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[36.716, 586.385, 1257.302]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle044_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[36.716, 586.385, 1257.302]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box039_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-106.43, 585.686, 958.935]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle045_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-107.101, 586.385, 959.938]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle046_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-107.101, 586.385, 959.938]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box040_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-622.89, 585.686, 952.074]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle047_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-623.561, 586.385, 953.077]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle048_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-623.561, 586.385, 953.077]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box041_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-1071.421, 585.686, 527.695]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle049_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-1072.424, 586.385, 527.024]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle050_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-1072.424, 586.385, 527.024]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box042_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-813.253, 585.686, 74.926]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle051_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-812.581, 586.385, 73.923]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle052_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-812.581, 586.385, 73.923]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box043_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[-153.328, 585.686, 246.886]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle053_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[-152.657, 586.385, 245.883]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle054_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[-152.657, 586.385, 245.883]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box044_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[297.152, 585.686, 246.886]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle055_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[297.823, 586.385, 245.883]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle056_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[297.823, 586.385, 245.883]}
        rotation={[Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box045_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[632.123, 585.686, 734.644]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle057_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[633.126, 586.385, 735.315]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle058_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[633.126, 586.385, 735.315]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box046_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[632.123, 585.686, 1076.794]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle059_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[633.126, 586.385, 1077.465]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle060_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[633.126, 586.385, 1077.465]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box047_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[632.123, 585.686, 1417.299]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle061_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[633.126, 586.385, 1417.971]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle062_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[633.126, 586.385, 1417.971]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box048_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[438.391, 585.686, 1774.612]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle063_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[437.72, 586.385, 1775.615]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle064_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[437.72, 586.385, 1775.615]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Box060_18_-_Rubber_0'].geometry}
        material={materials['18_-_Rubber']}
        position={[37.719, 237.1, 1677.846]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle065_17_-_Old_Copper_#1_0'].geometry}
        material={materials['17_-_Old_Copper_1']}
        position={[36.716, 237.798, 1677.175]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Rectangle066_16_-_Matte_Plastic_0'].geometry}
        material={materials['16_-_Matte_Plastic']}
        position={[36.716, 237.798, 1677.175]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  </group>
  );
}

useGLTF.preload("/models/modernHome4.glb");
export default ModernHome4;
