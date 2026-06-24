import { useState } from "react";

import {
    FaChevronRight,
    FaDownload,
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
    FaLocationDot,
} from "react-icons/fa6";

import { profile } from "../data/profile";

function Hero() {
    const [photoError, setPhotoError] =
        useState(false);

    const scrollToProjects = (event) => {
        event.preventDefault();

        document
            .getElementById("projects")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    return (
        <section
            className="hero-section"
            id="home"
        >
            <div className="container hero-grid">
                <div className="hero-content">
                    <div className="availability">
                        <span />
                        Open to internships and
                        opportunities
                    </div>

                    <p className="hero-greeting">
                        Hello, I&apos;m
                    </p>

                    <h1>{profile.name}</h1>

                    <h2>{profile.title}</h2>

                    <p className="hero-description">
                        {profile.shortDescription}
                    </p>

                    <div className="hero-buttons">
                        <a
                            href="#projects"
                            className="button button-primary"
                            onClick={scrollToProjects}
                        >
                            View Projects
                            <FaChevronRight />
                        </a>

                        <a
                            href={profile.resume}
                            target="_blank"
                            rel="noreferrer"
                            className="button button-secondary"
                        >
                            <FaDownload />
                            View Resume
                        </a>
                    </div>

                    <div className="social-links">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href={`mailto:${profile.email}`}
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="hero-image-area">
                    <div className="profile-frame">
                        {!photoError ? (
                            <img
                                src={profile.photo}
                                alt={profile.name}
                                onError={() =>
                                    setPhotoError(true)
                                }
                            />
                        ) : (
                            <div className="photo-fallback">
                                {profile.initials}
                            </div>
                        )}

                        <div className="floating-location">
                            <FaLocationDot />

                            <div>
                                <strong>Nagpur, India</strong>

                                <span>
                                    Available for opportunities
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;