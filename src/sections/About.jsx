import {
    FaCertificate,
    FaCode,
    FaEnvelope,
    FaGraduationCap,
    FaLocationDot,
} from "react-icons/fa6";

import SectionTitle from "../components/SectionTitle";

import {
    education,
    profile,
} from "../data/profile";

import { projects } from "../data/projects";
import { certificates } from "../data/certificates";
import { experiences } from "../data/experience";

function About() {
    const statistics = [
        {
            icon: <FaCode />,
            value: `${projects.length}+`,
            label: "Featured Projects",
        },
        {
            icon: <FaCertificate />,
            value: `${certificates.length}+`,
            label: "Certificates",
        },
        {
            icon: <FaGraduationCap />,
            value: `${experiences.length}`,
            label: "Internships",
        },
    ];

    return (
        <section
            className="section"
            id="about"
        >
            <div className="container">
                <SectionTitle
                    eyebrow="About Me"
                    title="Curious, practical and always learning"
                    description="I enjoy turning ideas into useful digital products and continuously expanding my technical knowledge."
                />

                <div className="about-grid">
                    <article className="about-content surface-card">
                        <p>{profile.about}</p>

                        <p>{profile.aboutSecond}</p>

                        <div className="about-contact">
                            <a
                                href={`mailto:${profile.email}`}
                            >
                                <FaEnvelope />

                                <span>
                                    <small>Email</small>
                                    {profile.email}
                                </span>
                            </a>

                            <div>
                                <FaLocationDot />

                                <span>
                                    <small>Location</small>
                                    {profile.location}
                                </span>
                            </div>
                        </div>
                    </article>

                    <div className="about-statistics">
                        {statistics.map(
                            (statistic) => (
                                <article
                                    className="statistic-card surface-card"
                                    key={statistic.label}
                                >
                                    <div className="statistic-icon">
                                        {statistic.icon}
                                    </div>

                                    <strong>
                                        {statistic.value}
                                    </strong>

                                    <span>
                                        {statistic.label}
                                    </span>
                                </article>
                            ),
                        )}

                        <article className="graduation-card surface-card">
                            <FaGraduationCap />

                            <div>
                                <strong>
                                    {education.graduation}
                                </strong>

                                <span>
                                    B.Tech in Electronic and
                                    Computer Science
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;