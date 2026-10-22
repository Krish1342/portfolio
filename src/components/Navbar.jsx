import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ activeSection, scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => { scrollToSection(id); setMenuOpen(false); };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "py-4" : "py-6"}`}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Name as logo — no boxes, no icons */}
          <button onClick={() => go("hero")} className="font-heading font-bold text-lg text-fg tracking-tight hover:text-accent transition-colors">
            KL<span className="text-accent">.</span>
          </button>

          {/* Desktop links — raw text, no pills */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`link-hover font-body text-sm tracking-wide transition-colors ${
                  activeSection === l.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {l.label}
              </button>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}KrishLodhaResume.pdf`}
              download
              className="font-mono text-xs text-accent hover:text-fg transition-colors"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile — minimal toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-fg text-sm font-mono">
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-bg flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 font-mono text-sm text-muted hover:text-fg">
              Close
            </button>
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => go(l.id)}
                className="font-heading font-bold text-4xl text-fg hover:text-accent transition-colors"
              >
                {l.label}
              </motion.button>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}KrishLodhaResume.pdf`}
              download
              className="font-mono text-sm text-accent mt-4"
            >
              Download Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
