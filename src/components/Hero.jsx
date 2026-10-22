import React from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Terminal, Workflow, Code2 } from "lucide-react";
import { NeuralHeroCanvas } from "./NeuralHeroCanvas";

export function Hero({ scrollToSection }) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-14 px-6 sm:px-10 overflow-hidden"
    >
      {/* GSAP Interactive Neural Mesh Canvas Background */}
      <NeuralHeroCanvas />

      {/* Subtle Central Glow Behind Headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Availability / Current Role Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/90 border border-surface-border text-xs font-mono text-body shadow-lg mb-7 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-muted">status:</span>
          <span className="text-fg font-medium">Software Intern @ bizAmica</span>
          <span className="hidden sm:inline text-muted">• AI & Full-Stack Engineer</span>
        </div>

        {/* Display Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-fg max-w-5xl leading-[1.05]">
          Engineering{" "}
          <span className="text-gradient-accent">Autonomous AI</span> &{" "}
          <span className="relative inline-block text-fg">
            Scalable Systems.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-body max-w-2xl font-sans leading-relaxed">
          I'm <strong className="text-fg font-semibold">Krish Lodha</strong> — AI Engineer & CS (AI & Data Science) student at MIT-WPU. Currently interning at <strong className="text-fg font-semibold">bizAmica</strong> building computer vision models, previously at <strong className="text-fg font-semibold">LegitReach</strong> automating generative ad intelligence.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={() => scrollToSection("work")}
            className="px-6 py-3 rounded-xl text-sm font-semibold bg-accent text-bg hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 flex items-center gap-2 group cursor-pointer"
          >
            <span>Explore Live Systems</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("architecture")}
            className="px-6 py-3 rounded-xl text-sm font-medium bg-surface hover:bg-surface-hover text-fg border border-surface-border transition-all flex items-center gap-2 cursor-pointer"
          >
            <Workflow className="w-4 h-4 text-accent" />
            <span>Architecture Topology</span>
          </button>

          <div className="flex items-center gap-2 pl-1">
            <a
              href="https://github.com/Krish1342"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-surface border border-surface-border text-muted hover:text-fg hover:border-accent transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/krish-lodha-6b2b06343/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-surface border border-surface-border text-muted hover:text-accent hover:border-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Live Tech Stack Strip */}
        <div className="mt-14 pt-6 border-t border-surface-border w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 font-mono text-xs text-muted">
          <div className="flex items-center gap-2 text-body">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span>FastAPI • Next.js • React • TypeScript</span>
          </div>
          <span className="text-surface-border">•</span>
          <div className="flex items-center gap-2 text-body">
            <Code2 className="w-3.5 h-3.5 text-accent" />
            <span>LangGraph • LangChain • ChromaDB • Groq</span>
          </div>
          <span className="text-surface-border">•</span>
          <span className="text-muted">MIT-WPU (CGPA: 8.94)</span>
        </div>
      </div>
    </section>
  );
}
