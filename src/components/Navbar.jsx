import { useState } from "react";

import {
  FaBars,
  FaMoon,
  FaSun,
  FaXmark,
} from "react-icons/fa6";

const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  {
    id: "certificates",
    label: "Certificates",
  },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function Navbar({
  theme,
  activeSection,
  onThemeToggle,
}) {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const handleNavigation = (
    event,
    sectionId,
  ) => {
    event.preventDefault();

    const section =
      document.getElementById(sectionId);

    if (!section) {
      console.error(
        `Section "${sectionId}" was not found.`,
      );

      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      `#${sectionId}`,
    );

    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav
        className="navbar container"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="brand"
          onClick={(event) =>
            handleNavigation(event, "home")
          }
        >
          <span className="brand-icon">
            MN
          </span>

          <span>Manas</span>
        </a>

        <div
          className={`nav-links ${
            menuOpen ? "nav-open" : ""
          }`}
        >
          {navigation.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              className={
                activeSection === item.id
                  ? "active"
                  : ""
              }
              onClick={(event) =>
                handleNavigation(
                  event,
                  item.id,
                )
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-button"
            aria-label="Change theme"
            onClick={onThemeToggle}
          >
            {theme === "dark" ? (
              <FaSun />
            ) : (
              <FaMoon />
            )}
          </button>

          <button
            type="button"
            className="icon-button menu-button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen(
                (current) => !current,
              )
            }
          >
            {menuOpen ? (
              <FaXmark />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;