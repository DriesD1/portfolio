import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/index.js";
import CanvasSelector from "../animation/web/canvas.tsx";

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      slug
      skills {
        id
        title
      }
      projectPhoto {
        url
      }
      inProgress
    }
  }
`;

export default function InProgress() {
    const { loading, error, data } = useQuery(GET_PROJECTS);

  return (
    <>
      <section className="max-w-[80rem] mx-auto">
        <div className="flex flex-col p-[2rem] mb-[2rem]">
          <h2 className="text-standard-brokenWhite sm:text-[58px] font-bold text-center lg:text-[60px] max-w-full w-[63rem] mx-auto">
            In progress
          </h2>
        </div>
        <div className="flex flex-col gap-[2rem]">
          <div className="absolute w-full">
            <CanvasSelector />
          </div>
          {data && data.projects && data.projects.length > 0 && (
            <ul className="projects flex flex-col w-[full] ml-[2rem] mr-[2rem] mt-[4rem]">
              {data.projects.map(
                (project) =>
                  // Check if the project is in progress
                  project.inProgress && (
                    <li
                      className="mb-[2rem] in-progress w-fit bg-lightBlue-400 rounded-[3rem]"
                      key={project.id}
                    >
                      <Link
                        className="relative flex flex-col w-[30rem] h-[32rem] block overflow-hidden"
                        to={`${ROUTES.PROJECTS}/${project.slug}`}
                        key={project.id}
                      >
                        <div className="flex flex-col p-[2rem]">
                          {project.skills && project.skills.length > 0 && (
                            <div className="flex justify-end gap-2">
                              {project.skills.map((skill) => (
                                <span
                                  key={skill.id}
                                  className="text-standard-grey text-end text-[10px]"
                                >
                                  {skill.title}
                                </span>
                              ))}
                            </div>
                          )}
                          <span className="text-standard-grey text-end text-4xl">
                            {project.title}
                          </span>
                        </div>
                        <img
                          className="rounded-[3rem] w-[30rem] h-[20rem] object-cover absolute bottom-[5rem] right-[-10rem]"
                          src={project.projectPhoto.url}
                          alt={project.title}
                        />
                      </Link>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
