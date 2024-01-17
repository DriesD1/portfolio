
import { ExperienceCard } from "../components/experiences";
import { HeroAbout } from "../components/heros";
import { Skills } from "../components/skills";

export default function AboutPage() {

  return (
    <>
      
      <section>
        <HeroAbout /> 
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <ExperienceCard />
      </section>
    </>
  );
}
