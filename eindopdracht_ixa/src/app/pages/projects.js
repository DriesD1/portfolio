import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import { gql, useQuery } from "@apollo/client";

// graphql query
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
    }
  }
`;

export default function ProjectsPage() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  
  return (
    <>
    {loading && <p>Loading...</p>}
      {data && data.projects && data.projects.length > 0 && (
        <ul className="projects w-full flex flex-wrap justify-around mt-[4rem]">
          {data.projects.map(project => (
            <li className="mb-[2rem] bg-orange-400 rounded-[3rem]" key={project.id}>
              <Link className="relative flex flex-col w-[30rem] h-[32rem] block overflow-hidden" to={`${ROUTES.PROJECTS}/${project.slug}`} key={project.id}>
            <div className="flex flex-col p-[2rem]">
              {project.skills && project.skills.length > 0 && (
                  <div className="flex justify-end gap-2">
                    {project.skills.map(skill => (
                      <span key={skill.id} className="text-standard-grey text-end text-[10px]">{skill.title}</span>
                    ))}
                  </div>
                )}
                <span className="text-standard-grey text-end text-4xl">{project.title}</span>
            </div>
                <img className="rounded-[3rem] w-[30rem] h-[20rem] object-cover absolute bottom-[5rem] right-[-10rem]" src={project.projectPhoto.url} alt={project.title} />
              </Link>
            </li>
          ))}
        </ul>
      )}
      {error && <p>Error: {error.message}</p>}
    </>
  );
}
