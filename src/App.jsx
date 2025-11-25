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
  ArrowUp,
  Code,
  Briefcase,
  User,
  FolderOpen,
  MessageCircle,
  Star,
  Sparkles,
  Atom,
  Code2,
  Cpu,
  Database,
  Layers,
} from "lucide-react";
import { LoadingScreen } from "./components/LoadingScreen";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBar } from "./components/SkillBar";
import { ContactForm } from "./components/ContactForm";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { experience, volunteering } from "./data/experience";
import { ExperienceCard } from "./components/ExperienceCard";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");

  const roles = [
    "Full Stack Developer",
    "Data Analyst",
    "Agentic AI Developer",
    "Generative AI Enthusiast",
  ];

  // Tech logo nodes for marquee
  const heroLogos = [
    { node: <Atom />, title: "React", href: "https://react.dev" },
    {
      node: <Code2 />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { node: <Cpu />, title: "AI/ML", href: "https://tensorflow.org" },
    {
      node: <Database />,
      title: "Databases",
      href: "https://www.postgresql.org",
    },
    {
      node: <Layers />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Smooth typewriter effect
  useEffect(() => {
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 1500;

    const type = () => {
      const currentRole = roles[currentRoleIndex];

      if (!isDeleting && typewriterText.length < currentRole.length) {
        setTypewriterText(currentRole.slice(0, typewriterText.length + 1));
      } else if (isDeleting && typewriterText.length > 0) {
        setTypewriterText(currentRole.slice(0, typewriterText.length - 1));
      } else if (!isDeleting && typewriterText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      } else if (isDeleting && typewriterText.length === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        return;
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, currentRoleIndex, roles]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = [
        "hero",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 relative overflow-x-hidden">
      {/* Optimized Background Animations - Reduced for Performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Reduced floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gray-300/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Simplified gradient orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${70 + Math.random() * 50}px`,
              height: `${70 + Math.random() * 50}px`,
              background: `radial-gradient(circle, rgba(156, 163, 175, 0.06) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.04, 0.12, 0.04],
            }}
            transition={{
              duration: Math.random() * 30 + 25,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Modern Professional Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          backgroundColor:
            scrollY > 50
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(255, 255, 255, 0.85)",
        }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b border-gray-200/50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("hero")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg lg:text-xl">
                  KL
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Krish Lodha
                </h1>
                <p className="text-sm text-gray-600 -mt-1">
                  Full Stack Developer
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Experience", id: "experience" },
                { name: "Skills", id: "skills" },
                { name: "Projects", id: "projects" },
                { name: "Contact", id: "contact" },
              ].map(({ name, id }, index) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === id
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {name}
                  {activeSection === id && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Social Links - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-2">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/Krish1342",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/krish-lodha-6b2b06343/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:lodhakrish11@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* Resume Download Button */}
              <motion.a
                href="/KrishLodhaResume.pdf"
                download="Krish_Lodha_Resume.pdf"
                className="hidden sm:flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <FileText size={16} className="mr-2" />
                Resume
              </motion.a>

              {/* Mobile Menu Toggle */}
              <motion.button
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Simple mobile menu toggle - you can enhance this later
                  const mobileMenu = document.getElementById("mobile-menu");
                  if (mobileMenu) {
                    mobileMenu.classList.toggle("hidden");
                  }
                }}
              >
                <Menu size={20} />
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            id="mobile-menu"
            className="lg:hidden hidden border-t border-gray-200/50 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-2">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Experience", id: "experience" },
                { name: "Skills", id: "skills" },
                { name: "Projects", id: "projects" },
                { name: "Contact", id: "contact" },
              ].map(({ name, id }) => (
                <motion.button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    document
                      .getElementById("mobile-menu")
                      .classList.add("hidden");
                  }}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === id
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {name}
                </motion.button>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200/50">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/Krish1342",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/krish-lodha-6b2b06343/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:lodhakrish11@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <motion.section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden pt-24 lg:pt-28 pb-16"
      >
        {/* Simplified animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-200/20 via-transparent to-gray-300/20"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Geometric Shapes - Reduced count */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${15 + i * 20}%`,
              top: `${25 + (i % 2) * 50}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            <div
              className={`w-6 h-6 ${
                i % 3 === 0
                  ? "bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full"
                  : i % 3 === 1
                  ? "bg-gradient-to-br from-gray-200/30 to-gray-300/30 rotate-45"
                  : "bg-gradient-to-br from-indigo-200/30 to-pink-200/30 rounded-sm rotate-12"
              } backdrop-blur-sm`}
            />
          </motion.div>
        ))}

        <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={heroInView && { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full blur-xl opacity-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative w-full h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl text-white">
                KL
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView && { opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-transparent bg-clip-text">
              Krish Lodha
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView && { opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-xl md:text-2xl text-gray-600 mb-4 h-10 flex items-center justify-center">
              <span className="mr-2">I'm a</span>
              <motion.span
                className="font-semibold text-gray-800 min-w-[250px] md:min-w-[300px] text-left relative"
                key={currentRoleIndex}
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {typewriterText}
                </motion.span>
                <motion.span
                  className="inline-block w-0.5 h-6 md:h-7 bg-gray-800 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView && { opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base md:text-lg text-gray-600 mb-6 max-w-3xl mx-auto px-4"
            >
              <p className="leading-relaxed">
                Computer Science Engineering Student at{" "}
                <span className="font-semibold text-gray-800">
                  MIT World Peace University
                </span>{" "}
                | AI Product Development Intern at{" "}
                <span className="font-semibold text-gray-800">LegitReach</span>{" "}
                | Passionate about creating intelligent solutions that make a
                difference
              </p>
            </motion.div>
            {/* Simplified Floating Code Elements Animation */}
            <div className="relative w-full max-w-4xl mx-auto h-24 overflow-hidden">
              {/* Animated Code Symbols - Reduced count */}
              {[
                { symbol: "</>", x: "15%", delay: 0.7 },
                { symbol: "AI", x: "35%", delay: 1.1 },
                { symbol: "ML", x: "50%", delay: 1.5 },
                { symbol: "⚡", x: "65%", delay: 1.9 },
                { symbol: "🚀", x: "85%", delay: 2.3 },
              ].map(({ symbol, x, delay }, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 transform -translate-y-1/2 text-gray-400 font-mono text-xl md:text-2xl select-none"
                  style={{ left: x }}
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0,
                  }}
                  animate={
                    heroInView && {
                      opacity: [0, 0.6, 0.3],
                      y: [30, -10, 10],
                      scale: [0, 1.2, 1],
                    }
                  }
                  transition={{
                    delay,
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.5,
                    color: "#374151",
                    transition: { duration: 0.2 },
                  }}
                >
                  {symbol}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView && { opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center space-x-4 md:space-x-8 mb-8"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Krish1342",
                label: "GitHub",
              },
              {
                icon: Mail,
                href: "mailto:lodhakrish11@gmail.com",
                label: "Email",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/krish-lodha-6b2b06343/",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 md:p-5 bg-white rounded-2xl transition-all duration-300 backdrop-blur-sm border border-gray-200 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  heroInView && {
                    opacity: 1,
                    y: 0,
                  }
                }
                transition={{
                  delay: 0.9 + index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon
                  size={24}
                  className="group-hover:text-gray-800 transition-colors duration-300 text-gray-600 md:w-7 md:h-7"
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView && { opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl text-base md:text-lg font-semibold hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.a
              href="/KrishLodhaResume.pdf"
              download="Krish_Lodha_Resume.pdf"
              className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-gray-700 rounded-xl text-base md:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center text-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20} className="mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown
            size={32}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
          />
        </motion.div>
      </motion.section>

      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        ref={aboutRef}
        className="min-h-screen py-20 px-6 relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mr-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <User className="text-gray-600" size={32} />
              </motion.div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 text-transparent bg-clip-text">
                About Me
              </h2>
            </div>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={aboutInView && { width: "6rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView && { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group justify-self-center"
            >
              <div className="aspect-square overflow-hidden rounded-3xl border-2 border-gray-200 relative bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-sm shadow-xl">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 to-gray-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.02 }}
                />
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="Image.jpg"
                    alt="Krish Lodha"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Krish Lodha
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Creative Technologist",
                      "AI Enthusiast",
                      "Problem Solver",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700/90 rounded-full text-sm backdrop-blur-sm text-white font-medium border border-gray-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView && { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 justify-self-center"
            >
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView && { opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="relative pl-6 border-l-4 border-gray-400 bg-gradient-to-r from-gray-50 to-transparent p-4 rounded-r-xl"
                >
                  Welcome to my digital universe! I'm a{" "}
                  <span className="text-gray-900 font-bold bg-gray-100 px-2 py-1 rounded">
                    Computer Science Engineering Student
                  </span>{" "}
                  and{" "}
                  <span className="text-gray-900 font-bold bg-gray-100 px-2 py-1 rounded">
                    AI Product Development Intern
                  </span>{" "}
                  at{" "}
                  <span className="text-gray-800 font-semibold">
                    LegitReach
                  </span>
                  , where I transform complex problems into elegant, intelligent
                  solutions through cutting-edge technology.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView && { opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="relative pl-6 border-l-4 border-gray-400 bg-gradient-to-r from-gray-50 to-transparent p-4 rounded-r-xl"
                >
                  Currently pursuing my B.Tech in{" "}
                  <span className="text-gray-900 font-bold">
                    Computer Science and Engineering
                  </span>{" "}
                  from{" "}
                  <span className="text-gray-800 font-semibold">
                    MIT World Peace University, Pune
                  </span>
                  . My expertise spans across{" "}
                  <span className="text-gray-900 font-bold">
                    Artificial Intelligence
                  </span>
                  ,{" "}
                  <span className="text-gray-900 font-bold">
                    Full-Stack Web Development
                  </span>
                  , and{" "}
                  <span className="text-gray-900 font-bold">Data Science</span>.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView && { opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="relative pl-6 border-l-4 border-gray-400 bg-gradient-to-r from-gray-50 to-transparent p-4 rounded-r-xl"
                >
                  With hands-on experience in{" "}
                  <span className="text-gray-800 font-semibold">
                    Machine Learning
                  </span>
                  ,{" "}
                  <span className="text-gray-800 font-semibold">
                    Computer Vision
                  </span>
                  , and{" "}
                  <span className="text-gray-800 font-semibold">
                    Generative AI
                  </span>
                  , I've built innovative projects including AI-powered
                  applications, data analysis tools, and full-stack web
                  solutions. I'm passionate about leveraging technology to
                  create meaningful impact and solve real-world challenges.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE SECTION */}
      <motion.section
        id="experience"
        ref={experienceRef}
        className="min-h-screen py-20 px-6 relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-transparent to-gray-200/50" />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mr-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Briefcase className="text-gray-600" size={32} />
              </motion.div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 text-transparent bg-clip-text">
                Experience
              </h2>
            </div>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={experienceInView && { width: "6rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              My professional experience and internships in technology
            </p>
          </motion.div>

          {/* Internships Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={experienceInView && { opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Internships
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 auto-rows-fr justify-items-center place-items-stretch">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={experienceInView && { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="w-full max-w-sm"
                >
                  <ExperienceCard project={exp} index={index} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Volunteering Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={experienceInView && { opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Volunteering
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 auto-rows-fr justify-items-center place-items-stretch">
              {volunteering.map((vol, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={experienceInView && { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: (experience.length + index) * 0.2,
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="w-full max-w-sm"
                >
                  <ExperienceCard project={vol} index={index} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SKILLS SECTION */}
      <motion.section
        id="skills"
        ref={skillsRef}
        className="min-h-screen py-20 px-6 relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-gray-200/50 via-transparent to-gray-100/50" />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mr-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Code className="text-gray-600" size={32} />
              </motion.div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 text-transparent bg-clip-text">
                Skills & Technologies
              </h2>
            </div>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={skillsInView && { width: "6rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Technologies I work with daily
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 auto-rows-fr justify-items-center place-items-stretch">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={skillsInView && { opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-sm"
              >
                <SkillBar
                  category={category}
                  inView={skillsInView}
                  delay={index * 0.2}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section
        id="projects"
        ref={projectsRef}
        className="min-h-screen py-20 px-6 relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 via-transparent to-gray-200/50" />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mr-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FolderOpen className="text-gray-600" size={32} />
              </motion.div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 text-transparent bg-clip-text">
                Projects
              </h2>
            </div>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={projectsInView && { width: "6rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Some of my recent work and creations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 mb-12 auto-rows-fr justify-items-center place-items-stretch">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView && { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="w-full max-w-sm"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>

          {projects.length >= 6 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView && { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <motion.a
                href="https://github.com/krish1342?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl border border-gray-200 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} className="mr-2" />
                View More Projects on GitHub
                <Star size={16} className="ml-2" />
              </motion.a>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section
        id="contact"
        ref={contactRef}
        className="min-h-screen py-20 px-6 relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-gray-100" />
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mr-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <MessageCircle className="text-gray-600" size={32} />
              </motion.div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 text-transparent bg-clip-text">
                Let's Connect
              </h2>
            </div>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={contactInView && { width: "6rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-20"
          >
            <motion.div
              className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"
              initial={{ scaleX: 0 }}
              animate={contactInView && { scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            />

            <div className="flex justify-center space-x-6 mb-8">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Krish1342",
                  label: "GitHub",
                  color: "hover:bg-gray-800",
                },
                {
                  icon: Mail,
                  href: "mailto:lodhakrish11@gmail.com",
                  label: "Email",
                  color: "hover:bg-gray-700",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/krish-lodha-6b2b06343/",
                  label: "LinkedIn",
                  color: "hover:bg-gray-600",
                },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 bg-white/90 ${color} rounded-2xl transition-all duration-300 backdrop-blur-sm border border-gray-200 hover:border-gray-300 card-shadow hover:card-shadow-hover overflow-hidden`}
                  whileHover={{ scale: 1.1, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contactInView && { opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon
                    size={28}
                    className="relative z-10 group-hover:text-white transition-colors duration-300 text-gray-600"
                  />

                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {label}
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.p
              className="text-gray-500 text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={contactInView && { opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              © {new Date().getFullYear()} Krish Lodha • Crafted with
              <span className="text-red-500 mx-1 animate-pulse">❤️</span>
              and lots of ☕
            </motion.p>

            <motion.p
              className="text-gray-400 text-sm mt-2"
              initial={{ opacity: 0 }}
              animate={contactInView && { opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Built with React • Framer Motion • Tailwind CSS
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* FLOATING SCROLL TO TOP BUTTON */}
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("hero")}
            className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
            aria-label="Scroll to Top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
