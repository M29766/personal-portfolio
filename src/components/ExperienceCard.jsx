import {
    FaCalendarDays,
    FaCertificate,
} from "react-icons/fa6";

function ExperienceCard({
    experience,
}) {
    return (
        <article className="experience-card surface-card">
            <div className="experience-header">
                <div>
                    <span className="card-label">
                        Internship
                    </span>

                    <h3>{experience.role}</h3>

                    <h4>{experience.company}</h4>
                </div>

                <span className="experience-period">
                    <FaCalendarDays />
                    {experience.period}
                </span>
            </div>

            <p className="experience-description">
                {experience.description}
            </p>

            <ul className="experience-highlights">
                {experience.highlights.map(
                    (highlight) => (
                        <li key={highlight}>
                            {highlight}
                        </li>
                    ),
                )}
            </ul>

            <div className="tag-list">
                {experience.technologies.map(
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

            <a
                href={experience.certificate}
                target="_blank"
                rel="noreferrer"
                className="certificate-link"
            >
                <FaCertificate />
                View Internship Certificate
            </a>
        </article>
    );
}

export default ExperienceCard;