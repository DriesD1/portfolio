import React, { useRef } from "react";
import { gql, useQuery } from "@apollo/client";
import { Title } from "../shared";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skillbar from "./skillbar";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GET_SKILLS = gql`
  query MyQuery {
    skills {
      percentage: percentage
      title
    }
  }
`;

const animateSkills = (containerRef, dataSkills, loadingSkills) => {
  if (!loadingSkills && dataSkills) {
    containerRef.current.childNodes.forEach((skillRef, index) => {
      gsap.set(skillRef, { opacity: 0, x: -100 });

      gsap.to(skillRef, {
        opacity: 1,
        x: 0,
        duration: .1,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: skillRef,
          start: "-20% 100%",
          end: "top 50%",
          markers: true,
        },
      });
    });
  }
};

const Skills = () => {
  const containerRef = useRef(null);
  const { error: errorSkills, loading: loadingSkills, data: dataSkills } = useQuery(GET_SKILLS);

  const sortedSkills =
    dataSkills && dataSkills.skills
      ? dataSkills.skills.slice().sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage))
      : [];

  useGSAP(() => animateSkills(containerRef, dataSkills, loadingSkills), [
    loadingSkills,
    dataSkills,
  ], { scope: containerRef });

  return (
    <>
      {loadingSkills ? <p>Loading...</p> : null}
      <div>
        <section className="max-w-[70rem] mx-auto m-[3rem]">
          <Title title="Skills" />
          <div ref={containerRef}>
            {sortedSkills.map((skill, index) => (
              <div key={skill.title}>
                <Skillbar skill={skill} id={`skill-${index}`} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
