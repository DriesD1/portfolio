import React, { useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import RapierWorldDragon from "./dragon.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function CanvasSelector() {
  const canvasRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(canvasRef.current.rotation, { y: 2 * Math.PI * (-150 / 360) });
      gsap.to(canvasRef.current.rotation, {
        duration: 1,
        y: 5 * Math.PI * (-150 / 360),
        scrollTrigger: {
          trigger: canvasRef.current,
          start: "50% 60%",
          end: "160% 20%",
          scrub: 1.3,
          markers: true,
        },
      });
    },
    {
      scope: canvasRef.current,
    }
  );

  return (
    <div ref={canvasRef}>
      <Canvas style={{ height: '1500px', width: '100vw', zIndex: '-10' }}>
        <RapierWorldDragon />
      </Canvas>
    </div>
  );
}
