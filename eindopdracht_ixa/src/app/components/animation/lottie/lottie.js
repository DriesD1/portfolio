import lottie from "lottie-web";
import animationData from "../assets/animation.json";
import animationData2 from "../assets/animation2.json";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LottieComponent() {
  const container = useRef(null);
  const container2 = useRef(null);

  useEffect(() => {
    // Load the first animation once when the component mounts
    const animation = lottie.loadAnimation({
      animationData: animationData,
      autoplay: true,
      loop: true,
      container: container.current,
      renderer: "svg",
    });

    // Cleanup function to stop the first animation and remove the DOM element
    return () => {
      animation.stop();
      animation.destroy();
    };
  }, []);

  useEffect(() => {
    // Load the second animation once when the component mounts
    const animation2 = lottie.loadAnimation({
      animationData: animationData2,
      autoplay: true,
      loop: true,
      container: container2.current,
      renderer: "svg",
    });

    // Cleanup function to stop the second animation when the component unmounts
    return () => {
      animation2.stop();
      animation2.destroy();
    };
  }, []);

  const containerRef = useRef(null);

  useGSAP(() => {
    // Set the initial state of the containers
    gsap.set(container.current, { opacity: 0, x: -100 });
    gsap.set(container2.current, { opacity: 0, x: 100 });

    // Animate the containers to their final states
    gsap.to(container.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "20% 80%",
      },
    });

    gsap.to(container2.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container2.current,
        start: "20% 80%",
      },
    });
  },
  {
    scope: containerRef.current,
  });

  return (
    <>
      <div ref={containerRef} className="flex items-center justify-center h-[60vh]">
        <div ref={container} className="relative h-[30rem] w-[35rem] z-50"></div>
        <div ref={container2} className="relative h-[30rem] w-[30rem] z-50"></div>
      </div>
    </>
  );
}
