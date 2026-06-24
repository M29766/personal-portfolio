import {
  useEffect,
  useState,
} from "react";

import { FaArrowUp } from "react-icons/fa6";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

const sectionIds = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "certificates",
  "education",
  "contact",
];

function App() {
  const [theme, setTheme] = useState(
    () =>
      localStorage.getItem(
        "portfolio-theme",
      ) || "light",
  );

  const [
    activeSection,
    setActiveSection,
  ] = useState("home");

  const [
    showBackToTop,
    setShowBackToTop,
  ] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme,
    );

    localStorage.setItem(
      "portfolio-theme",
      theme,
    );
  }, [theme]);

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleEntry =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting,
              )
              .sort(
                (first, second) =>
                  second.intersectionRatio -
                  first.intersectionRatio,
              )[0];

          if (visibleEntry) {
            setActiveSection(
              visibleEntry.target.id,
            );
          }
        },
        {
          rootMargin:
            "-25% 0px -60% 0px",

          threshold: [
            0.05,
            0.2,
            0.5,
          ],
        },
      );

    sectionIds.forEach(
      (sectionId) => {
        const section =
          document.getElementById(
            sectionId,
          );

        if (section) {
          observer.observe(section);
        }
      },
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(
        window.scrollY > 600,
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  return (
    <>
      <Navbar
        theme={theme}
        activeSection={activeSection}
        onThemeToggle={() =>
          setTheme((currentTheme) =>
            currentTheme === "dark"
              ? "light"
              : "dark",
          )
        }
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />

      <button
        type="button"
        className={`back-to-top ${showBackToTop
            ? "back-to-top-visible"
            : ""
          }`}
        aria-label="Back to top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default App;