import { Link } from "react-router-dom";
import project from "../data/project.json";
import { ROUTES } from "../routes";


export default function ProjectsPage() {
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