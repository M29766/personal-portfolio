import ExperienceCard from "../components/ExperienceCard";
import SectionTitle from "../components/SectionTitle";
import { experiences } from "../data/experience";

function Experience() {
    return (
        <section
            className="section"
            id="experience"
        >
            <div className="container">
                <SectionTitle
                    eyebrow="Experience"
                    title="Internships and practical learning"
                    description="Hands-on experience applying Java and modern web-development technologies through practical projects."
                />

                <div className="experience-list">
                    {experiences.map(
                        (experience, index) => (
                            <div
                                className="experience-row"
                                key={`${experience.company}-${experience.role}`}
                            >
                                <div className="timeline-number">
                                    {index + 1}
                                </div>

                                <ExperienceCard
                                    experience={experience}
                                />
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

export default Experience;