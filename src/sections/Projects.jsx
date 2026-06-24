import { FaGithub } from "react-icons/fa6";

import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

import { projects } from "../data/projects";
import { profile } from "../data/profile";

function Projects() {
    return (
        <section
            className="section muted-section"
            id="projects"
        >
            <div className="container">
                <SectionTitle
                    eyebrow="Projects"
                    title="Selected work from my GitHub"
                    description="Projects across full-stack development, Java desktop systems, frontend development and IoT."
                />

                <div className="projects-grid">
                    {projects.map(
                        (project, index) => (
                            <ProjectCard
                                project={project}
                                index={index}
                                key={project.title}
                            />
                        ),
                    )}
                </div>

                <div className="center-button">
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        className="button button-secondary"
                    >
                        <FaGithub />
                        View All GitHub Repositories
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;