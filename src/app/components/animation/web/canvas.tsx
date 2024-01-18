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
      gsap.set(canvasRef.current, { y: -200, });
      gsap.to(canvasRef.current, {
        opacity: 1,
        duration: 1,
        y: 800,
        scrollTrigger: {
          trigger: canvasRef.current,
          start: "70% 60%",
         end: "140% 20%",
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
    <div   ref={canvasRef}>
    <Canvas style={{ height: '1500px', width: '100vw', zIndex: '-10' }}>
      <RapierWorldDragon />
    </Canvas>
    </div>
  );
}
