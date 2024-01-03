import { Link } from "react-router-dom";
import project from "../data/project.json";
import { ROUTES } from "../routes";
import { gql, useQuery } from "@apollo/client";

//graphql query
const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            id
            title
            slug
            description
            projectPhoto
            content
            tags {
                id
                title
            }
        }
    }
`;


export default function ProjectsPage() {
    const {loading, error, data} = useQuery(GET_PROJECTS);
    return (
        <>
            {project && project.length > 0 && (
                <ul className="flex flex-col">
                    {project.map((project) => (
                        <li key={project.id}>
                            <Link to={`${ROUTES.PROJECTS}/${project.id}`} key={project.id}>{project.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}