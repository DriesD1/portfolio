import { useState } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_PROJECT = gql`
  query GetProject($projectId: ID!) {
    project(where: { id: $projectId }) {
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

console.log(GET_PROJECT);

export default function ProjectPage() {
  const { id } = useParams();
  const projectId = id;

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { projectId },
  });

  const [project, setProject] = useState(null);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.project && (
        <article>
          <h2>{data.title}</h2>
          <p>{data.slug}</p>
        </article>
      )}
    </>
  );
}
