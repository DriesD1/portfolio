import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Title({ title = "Hello World" }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(titleRef.current, { opacity: 0, x: -100 });
      gsap.to(titleRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "20% 80%",
        },
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div ref={containerRef}>
      <h2
        ref={titleRef}
        className="text-standard-brokenWhite fade-up mt-[2rem] sm:text-[58px] font-bold text-center lg:text-[60px] max-w-full w-[63rem] mx-auto"
      >
        {title}
      </h2>
    </div>
  );
}
