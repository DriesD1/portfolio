import lottie from "lottie-web";
import animationData from "../assets/animation.json";
import animationData2 from "../assets/animation2.json";
import { useEffect, useRef } from "react";

export default function LottieComponent() {
  const container = useRef(null);
  const container2 = useRef(null);

  useEffect(() => {
    // Load the animation once when the component mounts
    const animation = lottie.loadAnimation({
      animationData: animationData,
      autoplay: true,
      loop: true,
      container: container.current,
      renderer: "svg",
    });

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      animation.stop();
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
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-[60vh]">
        <div ref={container} className="relative h-[30rem] w-[35rem] z-50"></div>
        <div ref={container2} className="relative h-[30rem] w-[30rem] z-50"></div>
      </div>
    </>
  );
}