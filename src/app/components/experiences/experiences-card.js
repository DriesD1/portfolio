import { gql, useQuery } from "@apollo/client";
import { Title } from "../shared";
import ExperiencesInfo from "./experiences-info";

const GET_JOBS = gql`
  query MyQuery {
    experiences {
      school
      stage
      title
      time
      about {
        text
      }
    }
  }
`;


export default function ExperienceCard() {
    const {loading: loadingJobs, error: errorJobs, data: dataJobs } = useQuery(GET_JOBS);

  return (
<>
    {loadingJobs && <p>Loading...</p>}
    <section className="max-w-[70rem] mx-auto m-[3rem]">
    {dataJobs &&
    dataJobs.experiences &&
    dataJobs.experiences.length > 0 &&
    dataJobs.experiences.some((experience) => experience.school) ? (
      <div>
        <Title title="Education" />
        <div className="bg-standard-blur rounded-[2rem] p-[4rem] mt-[2rem] opacity-65  grid grid-cols-1 md:grid-cols-2 ">
          {dataJobs.experiences.map((experience) =>
            experience.school ? (
                <ExperiencesInfo experience={experience} key={experience.title}/>
            ) : null
          )}
        </div>
      </div>
    ) : null}

    {dataJobs &&
    dataJobs.experiences &&
    dataJobs.experiences.length > 0 &&
    dataJobs.experiences.some((experience) => experience.school) ? (
      <div className="mx-auto">
        <Title title="Jobs" />
        <div className="bg-standard-blur mx-auto  w-full rounded-[2rem] grid grid-cols-1 md:grid-cols-2 p-[4rem] mt-[2rem] opacity-65">
          {dataJobs.experiences.map((experience) =>
            !experience.school ? (
                <ExperiencesInfo experience={experience} key={experience.title}/>
            ) : null
          )}
        </div>
      </div>
    ) : null}
  </section>
  </>
  );
}