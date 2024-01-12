import { gql, useQuery } from "@apollo/client";
import { Title } from "../shared";

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
    const { error: errorJobs, data: dataJobs } = useQuery(GET_JOBS);

  return (
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
              <div
                className={`rounded-[10rem] w-[50%] flex flex-wrap w-full mt-[2rem]`}
                key={experience.title}
              >
                <div className="ml-[3rem]  mb-[3rem] w-[70%] text-standard-spotify">
                  <p className="text-[3rem] opacity-50 mb-[2rem]">
                    {experience.time}
                  </p>
                  <p className="opacity-100 font-semibold mb-[1rem] text-[2rem]">
                    {experience.title}
                  </p>
                  <p className="opacity-100">{experience.about.text}</p>
                </div>
              </div>
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
        <h2 className="fade-up text-standard-brokenWhite sm:text-[58px] font-bold mt-[3rem] text-center lg:text-[60px] max-w-full w-[63rem] mx-auto">
          Jobs
        </h2>
        <div className="bg-standard-blur mx-auto  w-full rounded-[2rem] grid grid-cols-1 md:grid-cols-2 p-[4rem] mt-[2rem] opacity-65">
          {dataJobs.experiences.map((experience) =>
            !experience.school ? (
              <div
                className="rounded-[10rem] w-full w-[50%] mt-[2rem]"
                key={experience.title}
              >
                <div className="ml-[3rem] mb-[3rem] w-full md:w-[70%] text-standard-spotify">
                  <p className="text-[3rem] opacity-50 mb-[2rem]">
                    {experience.time}
                  </p>
                  <p className="opacity-100 font-semibold mb-[1rem] text-[2rem]">
                    {experience.title}
                  </p>
                  <p className="opacity-100">{experience.about.text}</p>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    ) : null}
  </section>
  );
}