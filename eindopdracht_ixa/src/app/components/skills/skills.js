import { gql, useQuery } from "@apollo/client";
import { Title } from "../shared";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import Skillbar from "./skillbar"; 
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const GET_SKILLS = gql`
  query MyQuery {
    skills {
      percentage: percentage
      title
    }
  }
`;

export default function Skills() {
    const containerRef = useRef(null);
    const skillRef = useRef(null);
  
    const { error: errorSkills, loading: loadingSkills, data: dataSkills } = useQuery(GET_SKILLS);

    const sortedSkills =
      dataSkills && dataSkills.skills
        ? dataSkills.skills
            .slice()
            .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage))
        : [];

        useGSAP(() => {
            gsap.set(skillRef.current, { opacity: 0, x: -100 });
      
                gsap.to(skillRef.current, {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: skillRef.current,
                        start: "-20% 50%",
                        end: "top 50%",
                        markers: true,
                    },
                });
        }, {
            scope: containerRef,
        });   
  
    return (
    <>
      {loadingSkills && <p>Loading...</p>}
      <div>
        <section className="max-w-[70rem] mx-auto m-[3rem]">
          <Title title="Skills" />
          <div ref={containerRef}>
          {sortedSkills.map((skill, index, skillRef) => (
            <div ref={skillRef} >
                <Skillbar skill={skill} key={skill.title} id={`skill-${index}`} />
            </div>
          ))}
          </div>
        </section>
      </div>
    </>
    );
}
