import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

/*
  No cards. Each project is a full-width horizontal strip.
  Giant ghost number in the background. Title on left, description on right.
  Hover → accent color bleed. Separated by thin dividers.
*/

export function Projects() {
  return (
    <section id="work" className="py-24 sm:py-36 relative">
      {/* Section label — flush left, raw */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 mb-20">
        <p className="font-mono text-xs text-muted uppercase tracking-[0.3em]">
          Selected Work
        </p>
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-fg mt-3 tracking-tight">
          Projects I've shipped.
        </h2>
      </div>

      {/* Project strips — full width, no containers */}
      <div>
        {projects.map((project, idx) => (
          <ProjectStrip key={idx} project={project} index={idx} />
        ))}
      </div>

      {/* GitHub link — just text */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 mt-20">
        <a
          href="https://github.com/Krish1342?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover font-mono text-sm text-muted hover:text-fg transition-colors"
        >
          More on GitHub ↗
        </a>
      </div>
    </section>
  );
}

function ProjectStrip({ project, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const num = String(index + 1).padStart(2, "0");

  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className="block group relative"
    >
      {/* Top divider */}
      <div className="divider" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-12 sm:py-16 relative overflow-hidden">
        {/* Giant ghost number */}
        <span className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 font-heading font-extrabold text-[8rem] sm:text-[12rem] md:text-[16rem] leading-none text-transparent select-none pointer-events-none transition-all duration-700 opacity-100"
          style={{ WebkitTextStroke: '1px #1a1a1a' }}
        >
          <span className="group-hover:opacity-100 opacity-100 transition-all duration-700"
            style={{ WebkitTextStroke: visible ? '1px #1a1a1a' : '1px transparent' }}
          >
            {num}
          </span>
        </span>

        <div className={`relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Left — Title */}
          <div className="md:col-span-5">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-fg group-hover:text-accent transition-colors duration-500 leading-tight">
              {project.title}
            </h3>

            {/* Tags as inline text, not pills */}
            <p className="font-mono text-xs text-muted mt-4 leading-relaxed">
              {project.tags.join(" · ")}
            </p>
          </div>

          {/* Right — Description + arrow */}
          <div className="md:col-span-5 md:col-start-7">
            <p className="font-body text-muted text-sm sm:text-base leading-relaxed group-hover:text-fg/70 transition-colors duration-500">
              {project.description}
            </p>
          </div>

          {/* Arrow indicator — appears on hover */}
          <div className="md:col-span-2 md:col-start-12 hidden md:flex items-start justify-end">
            <span className="font-heading text-3xl text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
              ↗
            </span>
          </div>
        </div>
      </div>

      {/* Bottom divider (last item) */}
      {index === projects.length - 1 && <div className="divider" />}
    </a>
  );
}
