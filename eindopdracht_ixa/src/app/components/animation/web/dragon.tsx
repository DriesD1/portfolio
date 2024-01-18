import { useGLTF } from "@react-three/drei";
import dragon from "../assets/dragon-animate.glb";
import React, { useEffect, useMemo, useRef } from "react";
import { useFrame } from "react-three-fiber";
import { AnimationMixer } from "three";

export default function RapierWorldDragon() {
  const { animations, scene }: any = useGLTF(dragon, true);
  const animationClip = animations[0];
  const animationMixer = useMemo(() => new AnimationMixer(scene), [scene]);

  useEffect(() => {
    const animationAction = animationMixer.clipAction(animationClip);
    animationAction.play();

    // Cleanup function
    return () => {
      animationAction.stop();
    };
  }, [animationClip, animationMixer]);

  useFrame((state, delta) => {
    animationMixer.update(delta);
  });

  return (
    <group position={[0, 0, -4]} rotation={[0, 2 * Math.PI * (-150 / 360), 0]} scale={.5}>
      <primitive object={scene} />
      <ambientLight intensity={2} />
      <pointLight />
    </group>
  );
}
