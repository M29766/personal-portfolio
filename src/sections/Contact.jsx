import { useState } from "react";

import {
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
    FaLocationDot,
    FaPaperPlane,
} from "react-icons/fa6";

import SectionTitle from "../components/SectionTitle";
import { profile } from "../data/profile";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } =
            event.target;

        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const subject = encodeURIComponent(
            `Portfolio enquiry from ${form.name}`,
        );

        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
        );

        window.location.href =
            `mailto:${profile.email}` +
            `?subject=${subject}` +
            `&body=${body}`;
    };

    return (
        <section
            className="section"
            id="contact"
        >
            <div className="container">
                <SectionTitle
                    eyebrow="Contact"
                    title="Let’s build something useful"
                    description="Reach out for internships, collaborations, project discussions or technology opportunities."
                />

                <div className="contact-grid">
                    <article className="contact-information surface-card">
                        <span className="card-label">
                            Get in Touch
                        </span>

                        <h3>
                            Have a project or
                            opportunity in mind?
                        </h3>

                        <p>
                            I am interested in software
                            development, full-stack,
                            Java, AI, IoT,
                            cybersecurity and
                            data-focused opportunities.
                        </p>

                        <div className="contact-list">
                            <a
                                href={`mailto:${profile.email}`}
                            >
                                <FaEnvelope />

                                <span>
                                    <small>Email</small>
                                    {profile.email}
                                </span>
                            </a>

                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />

                                <span>
                                    <small>GitHub</small>
                                    github.com/M29766
                                </span>
                            </a>

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn />

                                <span>
                                    <small>LinkedIn</small>
                                    Manas Nandanwar
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

                    <form
                        className="contact-form surface-card"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-row">
                            <label>
                                Name

                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                Email

                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <label>
                            Message

                            <textarea
                                required
                                rows="7"
                                name="message"
                                placeholder="Write your message..."
                                value={form.message}
                                onChange={handleChange}
                            />
                        </label>

                        <button
                            type="submit"
                            className="button button-primary"
                        >
                            <FaPaperPlane />
                            Send Message
                        </button>

                        <p className="form-note">
                            This button opens your
                            default email application.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;