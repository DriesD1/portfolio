import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_PROJECT = gql`
  query GetProject($slug: String = "") {
    project(where: { slug: $slug }) {
      id
      slug
      title
      skills {
        skillPhoto {
          url
        }
        title
      }
      projectPhoto {
        url
      }
    }
  }
`;

export default function ProjectPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { slug: id },
  });

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {loading && <p className="text-center">Loading...</p>}
      {error && (
        <p className="text-center text-red-500 font-semibold">
          Error: {error.message}
        </p>
      )}
      {data && data.project && (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          {/* Project Title */}
          <h2 className="text-4xl font-bold text-center p-4 bg-gray-800 text-white">
            {data.project.title}
          </h2>

          <div className="p-6">
            {/* Render project photo */}
            {data.project.projectPhoto && (
              <img
                src={data.project.projectPhoto.url}
                alt={data.project.title}
                className="w-full h-auto rounded-lg mb-6"
              />
            )}

            {/* Render skills */}
            {data.project.skills && data.project.skills.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <ul className="flex flex-wrap items-center">
                  {data.project.skills.map((skill) => (
                    <li
                      key={skill.id}
                      className="flex items-center space-x-2 bg-gray-200 rounded-full px-3 py-1 mb-2 mr-2"
                    >
                      {skill.skillPhoto && (
                        <img
                          src={skill.skillPhoto.url}
                          alt={skill.title}
                          className="w-6 h-6"
                        />
                      )}
                      <span>{skill.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
