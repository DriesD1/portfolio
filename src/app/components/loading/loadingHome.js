import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function LoadingHome() {
  const container = useRef(null);
  const text = useRef(null);
  const percentage = useRef(null);

  useGSAP(() => {
    const $loadingContainer = container.current;
    const $word = text.current;
    const $percentage = percentage.current;

    gsap.set($word, { y: 200 });

    const textTimeline = gsap.timeline({
      onComplete: () => {
        console.log("Text animation complete");
      },
    });

    textTimeline
      .to($word, {
        y: 0,
        duration: 1,
      })
      .to($word, {
        y: -200,
        duration: 1,
      });

    const percentageTimeline = gsap.timeline({
      onUpdate: () => {
        const progress = percentageTimeline.progress();
        const percentageValue = Math.round(progress * 100);
        $percentage.textContent = `${percentageValue}%`;
      },
      onComplete: () => {
        console.log("Percentage animation complete");
      },
    });

    percentageTimeline.to({}, {
      duration: 1,
      progress: 1, // Set progress to 1 to reach 100%
    });

    const mainTimeline = gsap.timeline({
      onComplete: () => {
        console.log("Main animation complete");
      },
    });

    mainTimeline
      .add(textTimeline)
      .add(percentageTimeline, "-=1")
      .to($loadingContainer, {
        x: 2000,
        duration: 1,
      });
  }, [container, text, percentage]);

  return (
    <>
      <div
        ref={container}
        className="z-[1000] h-screen w-screen top-0 bg-purple-800 fixed flex justify-center flex-col items-center"
      >
        <div className="overflow-hidden">
          <h1 ref={text} className="text-standard-beige text-[8rem] p-[2rem]">
            DD
          </h1>
        </div>
        <div ref={percentage} className="text-standard-beige mt-[2rem] absolute text-[6rem] left-2 bottom-0">
          0%
        </div>
      </div>
    </>
  );
}
