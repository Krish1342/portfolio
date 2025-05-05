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

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
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

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <button
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

      <motion.section
        id="hero"
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
          >
            Krish Lodha
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-slate-300 mb-8"
          >
            Full Stack Developer | Data Analyst | Python Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/Krish1342"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:lodhakrish11@gmail.com"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/krish-lodha-6b2b06343/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
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

      <motion.section
        id="about"
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-20 px-4 bg-slate-900"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="aspect-square overflow-hidden rounded-2xl border-2 border-purple-500/20 relative">
                <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src="public/Image.jpg"
                    alt="Krish Lodha"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Krish Lodha
                  </h3>
                  <a
                    href="public/KrishLodhaResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-colors duration-300"
                  >
                    <FileText size={18} className="mr-2" />
                    View Resume
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-lg text-slate-300"
            >
              <p>
                I'm a Full Stack Developer and Data Analyst with expertise in
                Python development. I create web applications and analyze data
                to solve real problems.
              </p>
              <p>
                I work with modern web technologies and enjoy building complete
                solutions from front-end interfaces to back-end systems.
              </p>
              <p>
                I'm always learning new technologies to stay current with the
                latest developments in web and data science.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        ref={skillsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <SkillBar
                key={index}
                category={category}
                inView={skillsInView}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-20 px-4 bg-slate-900"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <ContactForm />
        </div>
      </motion.section>
    </div>
  );
}

export default App;
