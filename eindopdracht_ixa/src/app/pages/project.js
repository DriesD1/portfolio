import { useState } from "react";
import { useParams } from "react-router-dom";

import projects from "../data/project.json";

export default function ProjectPage() {
    const routeParams = useParams();
    const projectId = routeParams.id;

    const [project, setProject] = useState(projects.find(project => project.id == projectId));
    return (
        <>
            {project && (
                <article>
                    <h2>{project.title}</h2>
                    <p>{project.slug}</p>
                </article>
            )}
        </>
    );
}