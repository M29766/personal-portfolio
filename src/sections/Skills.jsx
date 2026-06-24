import SectionTitle from "../components/SectionTitle";
import { skillGroups } from "../data/skills";

function Skills() {
    return (
        <section
            className="section muted-section"
            id="skills"
        >
            <div className="container">
                <SectionTitle
                    eyebrow="Technical Skills"
                    title="Technologies and tools I use"
                    description="My skills cover programming, frontend and backend development, databases, IoT, cybersecurity and business intelligence."
                />

                <div className="skills-grid">
                    {skillGroups.map(
                        (group, index) => (
                            <article
                                className="skill-card surface-card"
                                key={group.title}
                            >
                                <span className="skill-number">
                                    {String(index + 1).padStart(
                                        2,
                                        "0",
                                    )}
                                </span>

                                <h3>{group.title}</h3>

                                <div className="tag-list">
                                    {group.skills.map(
                                        (skill) => (
                                            <span
                                                className="tag"
                                                key={skill}
                                            >
                                                {skill}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </article>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

export default Skills;