import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Title({ title = "Hello World" }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(titleRef.current, { opacity: 0, y: 200 });
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 100%",
          toggleActions: "restart none restart none",
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
        className="text-standard-brokenWhite fade-up sm:text-[58px] font-bold text-center lg:text-[60px] max-w-full w-[63rem] mx-auto"
      >
        {title}
      </h2>
    </div>
  );
}
