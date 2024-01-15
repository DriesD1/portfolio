import { useGLTF } from "@react-three/drei";
import dragon from "../assets/dragon-animate.glb";
import React from "react";
import { Canvas } from "react-three-fiber";



export const RapierWorldDragon = () => {
  const { scene }: any = useGLTF(dragon, true);
  return (
    <Canvas>
    <group scale={1.5}>
        <primitive  scale={0.5} object={scene} />
        <ambientLight intensity={2} />
        <pointLight />
    </group>
    </Canvas>
  );
};
