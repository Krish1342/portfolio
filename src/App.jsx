import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Menu,
  ChevronDown,
  Github,
  Mail,
  Linkedin,
  FileText,
} from "lucide-react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Sidebar } from "./components/Sidebar";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBar } from "./components/SkillBar";
import { ContactForm } from "./components/ContactForm";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { experience } from "./data/experience";
import { ExperienceCard } from "./components/ExperienceCard";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setActiveSection(id);
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <button
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <Sidebar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <motion.section
        id="hero"
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView && { opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
          >
            Krish Lodha
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView && { opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-slate-300 mb-8"
          >
            Full Stack Developer | Data Analyst | Python Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView && { opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/Krish1342" target="_blank" rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-transform transform hover:scale-110 duration-200"
            >
              <Github size={24} />
            </a>
            <a href="mailto:lodhakrish11@gmail.com"
              className="text-slate-300 hover:text-white transition-transform transform hover:scale-110 duration-200"
            >
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/krish-lodha-6b2b06343/" target="_blank" rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-transform transform hover:scale-110 duration-200"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown size={32} className="text-slate-400" />
        </motion.div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-20 px-4 bg-slate-900"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView && { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="aspect-square overflow-hidden rounded-2xl border-2 border-purple-500/20 relative">
                <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src="Image.jpg"
                    alt="Krish Lodha"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Krish Lodha</h3>
                  <a
                    href="KrishLodhaResume.pdf"
                    download
                    className="inline-flex items-center px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-colors duration-300"
                  >
                    <FileText size={18} className="mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView && { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-lg text-slate-300"
            >
              <p>
                I'm a Full Stack Developer, Data Analyst and AI Enthusiast with expertise in Python development.
              </p>
              <p>
                I work with modern web technologies and enjoy building complete solutions from front-end interfaces to back-end systems.
              </p>
              <p>
                I'm always learning new technologies to stay current with the latest developments in web and data science.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        ref={experienceRef}
        initial={{ opacity: 0, y: 50 }}
        animate={experienceInView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} project={exp} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        ref={skillsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={skillsInView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-20 px-4 border-t-4 border-purple-400/40"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <SkillBar key={index} category={category} inView={skillsInView} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectsInView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 border-t-4 border-purple-400/40"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
            {projects.length >= 6 && (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 flex items-center justify-center">
                <a
                  href="https://github.com/krish1342?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-colors duration-300"
                >
                  <Github size={20} className="mr-2" />
                  View More on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        ref={contactRef}
        initial={{ opacity: 0, y: 50 }}
        animate={contactInView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-20 px-4 bg-slate-900"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <ContactForm />
        </div>
      </motion.section>

      {/* SCROLL TO TOP BUTTON */}
      {activeSection !== "hero" && (
        <button
          aria-label="Scroll to Top"
          onClick={() => scrollToSection("hero")}
          className="fixed bottom-8 right-6 z-40 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full shadow-lg transition"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
