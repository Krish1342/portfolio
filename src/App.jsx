import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Menu, ChevronDown, Github, Mail, Linkedin } from 'lucide-react';
import { LoadingScreen } from './components/LoadingScreen';
import { Sidebar } from './components/Sidebar';
import { ProjectCard } from './components/ProjectCard';
import { SkillBar } from './components/SkillBar';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { image } from "krishlodha.jpg";


function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
      setActiveSection(id);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text"
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
          onClick={() => scrollToSection('about')}
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
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-2xl border-2 border-emerald-500/20">
                <img
                  src={image}
                  alt="Krish Lodha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Krish Lodha</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-lg text-slate-300"
            >
              <p>
                I'm a passionate Full Stack Developer and Data Analyst with expertise in Python development.
                My journey in technology has led me to create various projects ranging from AI-powered
                applications to data analysis tools.
              </p>
              <p>
                With a strong foundation in both front-end and back-end development, I enjoy building
                complete solutions that solve real-world problems. My experience includes working with
                modern web technologies, machine learning, and database management systems.
              </p>
              <p>
                I'm constantly learning and exploring new technologies to stay at the forefront of
                technological advancement.
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={skillsInView ? "show" : "hidden"}
            className="grid gap-12"
          >
            {skills.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold mb-6 text-emerald-400">{category.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill}
                      inView={skillsInView}
                      delay={index * 0.2 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-8">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:lodhakrish11@gmail.com"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/krish-lodha-6b2b06343/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Krish1342"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;