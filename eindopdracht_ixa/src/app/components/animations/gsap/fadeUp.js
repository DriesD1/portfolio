import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


export const fadeUp = () => {
  // Select the elements you want to animate
  const $fade = document.querySelectorAll(".fade-up");
  
  // Set initial properties
  gsap.set($fade, { opacity: 0, y: 200 });
  
  // Create the fade-in-up animation for each element
  $fade.forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 100%",
        toggleActions: "restart none restart none",
      },
    });
  });
}

export default fadeUp;