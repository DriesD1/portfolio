// CanvasSelector.js
import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import RapierWorldDragon from "./dragon.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useScroll } from "./scroll-context";

gsap.registerPlugin(ScrollTrigger);

export default function CanvasSelector() {
  const canvasRef = useRef(null);
  const { updateScrollProgress } = useScroll();

  useGSAP(() => {
    gsap.set(canvasRef.current, {  y: -200 });
    gsap.to(canvasRef.current, {
      opacity: 1,
      duration: 1,
      y: 400,
      scrollTrigger: {
        trigger: canvasRef.current,
        start: "40% 40%",
        end: "bottom 80%", // Updated to last for the full duration
        scrub: 1.3,
        onUpdate: (scrollTrigger) => {
          const progress = scrollTrigger.progress;
          updateScrollProgress(progress);
        },
      },
    });
  }, {
    trigger: canvasRef.current,
  });

  return (
    <div ref={canvasRef}>
      <Canvas style={{ height: '1500px', width: '100vw', zIndex: '-10' }}>
        <RapierWorldDragon />
      </Canvas>
    </div>
  );
}
