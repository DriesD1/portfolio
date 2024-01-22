// RapierWorldDragon.js
import { useGLTF } from "@react-three/drei";
import dragon from "../assets/dragon-animate.glb";
import React, { useEffect, useMemo } from "react";
import { useFrame } from "react-three-fiber";
import { AnimationMixer } from "three";
import { useScroll } from "./scroll-context";


export default function RapierWorldDragon() {
  const { animations, scene }: any = useGLTF(dragon, true);
  const animationClip = animations[0];
  const animationMixer = useMemo(() => new AnimationMixer(scene), [scene]);
  const { scrollProgress } = useScroll();

  useEffect(() => {
    const animationAction = animationMixer.clipAction(animationClip);
    animationAction.play();

    // Cleanup function
    return () => {
      animationAction.stop();
    };
  }, [animationClip, animationMixer]);

  useFrame((state, delta) => {
    const initialRotation = Math.PI + Math.PI / 4; // 225 degrees
    const totalRotation = Math.PI * 2; // 360 degrees
    const rotationValue = initialRotation + scrollProgress * totalRotation;
    
    scene.rotation.y = rotationValue;
    animationMixer.update(delta);
  });

  return (
    <group position={[0, 0, -4]} rotation={[0, 0, 0]} scale={0.5}>
      <primitive object={scene} />
      <ambientLight intensity={2} />
      <pointLight />
    </group>
  );
}

