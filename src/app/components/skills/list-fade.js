import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const listFader = () => {
  // Select the elements you want to animate
  const $list = document.querySelectorAll(".list__items__about");
  const $stagger = document.querySelectorAll(".list__expertises");

  // Set initial properties
  gsap.set($list, { opacity: 0, x: -100 });

  $stagger.forEach((element) => {
    const $fadeElements = element.querySelectorAll(".list__items__about");

    gsap.to($fadeElements, {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "restart none restart none",
        // markers: true,
      },
    });
  });
};

export default listFader;
