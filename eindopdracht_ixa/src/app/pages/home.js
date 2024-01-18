import { LottieComponent } from "../components/animation/lottie/index.js";
import HeroHome from "../components/heros/hero-home.js";
import  { InProgress } from "../components/projects/index.js";
// import '@dotlottie/player-component/dist/dotlottie-player.css';
// import '@dotlottie/player-component';

export default function HomePage() {

  return (
    <>
      <HeroHome />
        <LottieComponent  />
      <InProgress />
    </>
  );
}
