import {
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa6";

import { profile } from "../data/profile";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-content">
                <div>
                    <a href="#home" className="brand">
                        <span className="brand-icon">
                            MN
                        </span>

                        <span>Manas Nandanwar</span>
                    </a>

                    <p>
                        Built using React.js and Vite.
                    </p>
                </div>

                <div className="footer-socials">
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedinIn />
                        LinkedIn
                    </a>

                    <a
                        href={`mailto:${profile.email}`}
                    >
                        <FaEnvelope />
                        Email
                    </a>
                </div>

                <p className="copyright">
                    © {new Date().getFullYear()} Manas
                    Nandanwar. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;