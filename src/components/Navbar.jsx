import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Github, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Systems" },
  { id: "skills", label: "Stack & Topology" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ activeSection, scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  const resumeUrl = `${import.meta.env.BASE_URL}KrishLodhaResume.pdf`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "py-3 bg-bg/85 backdrop-blur-xl border-b border-surface-border" : "py-5"
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-surface border border-surface-border flex items-center justify-center group-hover:border-accent transition-colors shadow-md">
              <span className="font-display font-extrabold text-base text-fg">
                K<span className="text-accent">L</span>
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-bold text-sm text-fg leading-tight">
                Krish Lodha
              </p>
              <p className="font-mono text-[10px] text-muted">
                AI & Systems Engineer
              </p>
            </div>
          </button>

          {/* Desktop Nav Island */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/80 backdrop-blur-xl border border-surface-border px-3 py-1.5 rounded-full shadow-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                    isActive ? "text-accent font-semibold" : "text-muted hover:text-fg"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-accent/15 border border-accent/30 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/Krish1342"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-surface border border-surface-border text-muted hover:text-fg hover:border-accent transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={resumeUrl}
              download="Krish_Lodha_Resume.pdf"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-accent text-bg hover:bg-accent-hover transition-all shadow-md shadow-accent/20"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-surface border border-surface-border text-muted hover:text-fg focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 p-5 rounded-2xl bg-bg/95 backdrop-blur-2xl border border-surface-border shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? "bg-accent/15 text-accent border border-accent/20 font-semibold"
                      : "text-body hover:bg-surface"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 mt-2 border-t border-surface-border flex items-center gap-2">
                <a
                  href={resumeUrl}
                  download="Krish_Lodha_Resume.pdf"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-accent text-bg"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href="https://github.com/Krish1342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-surface border border-surface-border text-muted hover:text-fg"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
