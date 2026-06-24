import {
    FaGraduationCap,
    FaLocationDot,
} from "react-icons/fa6";

import SectionTitle from "../components/SectionTitle";
import { education } from "../data/profile";

function Education() {
    return (
        <section
            className="section muted-section"
            id="education"
        >
            <div className="container">
                <SectionTitle
                    eyebrow="Education"
                    title="Academic foundation"
                    description="Building a strong foundation in computer science, electronics, software development and problem-solving."
                />

                <article className="education-card surface-card">
                    <div className="education-icon">
                        <FaGraduationCap />
                    </div>

                    <div className="education-details">
                        <span className="card-label">
                            Undergraduate Degree
                        </span>

                        <h3>{education.degree}</h3>

                        <h4>{education.major}</h4>

                        <p>{education.university}</p>

                        <p className="education-location">
                            <FaLocationDot />
                            {education.location}
                        </p>
                    </div>

                    <div className="education-coursework">
                        <span className="graduation-label">
                            {education.graduation}
                        </span>

                        <h4>
                            Relevant Coursework
                        </h4>

                        <div className="tag-list">
                            {education.coursework.map(
                                (course) => (
                                    <span
                                        className="tag"
                                        key={course}
                                    >
                                        {course}
                                    </span>
                                ),
                            )}
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Education;