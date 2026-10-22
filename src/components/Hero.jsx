import React from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles, Terminal } from "lucide-react";
import { NeuralHeroCanvas } from "./NeuralHeroCanvas";

export function Hero({ scrollToSection }) {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-6 sm:px-10 overflow-hidden"
    >
      {/* GSAP Interactive Neural Mesh Canvas Background */}
      <NeuralHeroCanvas />

      {/* Subtle Central Glow Behind Headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/90 border border-surface-border text-xs font-mono text-body shadow-lg mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald" />
          </span>
          <span className="text-muted">status:</span>
          <span className="text-fg font-medium">Open to Summer / Fall 2026 AI Roles</span>
          <span className="hidden sm:inline text-muted">• Pune / Remote</span>
        </div>

        {/* Display Headline — High Contrast & Impressive */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-fg max-w-5xl leading-[1.05]">
          Engineering{" "}
          <span className="text-gradient-accent">Autonomous AI</span> &{" "}
          <span className="text-gradient-cyan">Data Pipelines.</span>
        </h1>

        {/* Human-Friendly, Highly Readable Subtitle */}
        <p className="mt-8 text-base sm:text-xl text-body max-w-2xl font-sans leading-relaxed">
          I'm <strong className="text-fg font-semibold">Krish Lodha</strong> — AI Product Developer & CS Engineering student at MIT-WPU. I build production-ready agentic workflows, high-throughput FastAPI backends, and full-stack intelligence tools that turn complex data into immediate clarity.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("work")}
            className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-accent text-bg hover:bg-accent-hover transition-all shadow-lg shadow-accent/25 flex items-center gap-2 group cursor-pointer"
          >
            <span>Explore Featured Systems</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("architecture")}
            className="px-6 py-3.5 rounded-xl text-sm font-medium bg-surface hover:bg-surface-hover text-fg border border-surface-border transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyber-cyan" />
            <span>Interactive Visx Topology</span>
          </button>

          <div className="flex items-center gap-2 pl-2">
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

        {/* Live Tech Capabilities Ribbon */}
        <div className="mt-16 pt-8 border-t border-surface-border w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-xs text-muted">
          <div className="flex items-center gap-2 text-body">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span>FastAPI • LangGraph • React 18</span>
          </div>
          <span className="text-surface-border">•</span>
          <div className="flex items-center gap-2 text-body">
            <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>Groq Llama-3 • Gemini API • Meta Ads API</span>
          </div>
          <span className="text-surface-border">•</span>
          <span className="text-muted">MIT World Peace University</span>
        </div>
      </div>
    </section>
  );
}
