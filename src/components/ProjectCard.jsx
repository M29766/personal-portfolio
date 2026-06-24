import {
    FaArrowUpRightFromSquare,
    FaCode,
    FaGithub,
} from "react-icons/fa6";

function ProjectCard({
    project,
    index,
}) {
    return (
        <article className="project-card surface-card">
            <div
                className="project-cover"
                style={{
                    background: project.gradient,
                }}
            >
                <span className="project-number">
                    {String(index + 1).padStart(
                        2,
                        "0",
                    )}
                </span>

                <FaCode />

                <p>{project.type}</p>
            </div>

            <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tag-list">
                    {project.technologies.map(
                        (technology) => (
                            <span
                                className="tag"
                                key={technology}
                            >
                                {technology}
                            </span>
                        ),
                    )}
                </div>

                <div className="project-buttons">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="button button-secondary button-small"
                    >
                        <FaGithub />
                        Source Code
                    </a>

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="button button-primary button-small"
                        >
                            Live Demo
                            <FaArrowUpRightFromSquare />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;