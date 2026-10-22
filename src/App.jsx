import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  const onLoadFinish = useCallback(() => setLoading(false), []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "work", "skills", "experience", "contact"];
      const header = document.querySelector("header");
      const navOffset = header ? header.offsetHeight + 20 : 80;
      const scrollPos = window.scrollY + navOffset;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos + 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const header = document.querySelector("header");
      const navOffset = header ? header.offsetHeight + 10 : 70;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-bg text-fg selection:bg-accent selection:text-bg">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onFinish={onLoadFinish} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
          <main>
            <Hero scrollToSection={scrollToSection} />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
          <Footer scrollToSection={scrollToSection} />
        </>
      )}
    </div>
  );
}
