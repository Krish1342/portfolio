import React from "react";
import { GraduationCap, Briefcase, Code2, MapPin, Award, CheckCircle2 } from "lucide-react";

export function About() {
  const photoUrl = `${import.meta.env.BASE_URL}Image.jpg`;

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28 px-6 sm:px-10 relative">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Label */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Background & Engineering Philosophy
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-fg tracking-tight">
            Behind the systems.
          </h2>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Full Photo (No clip-path crop!) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-surface-border bg-surface p-2 shadow-2xl">
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-cyber-cyan/15 rounded-3xl blur-2xl -z-10 pointer-events-none" />

              <div className="rounded-2xl overflow-hidden bg-bg relative">
                <img
                  src={photoUrl}
                  alt="Krish Lodha"
                  className="w-full h-auto object-cover object-top max-h-[520px] rounded-2xl block"
                  loading="eager"
                />

                {/* Status Overlay Badge */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-bg/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-fg font-medium">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>Pune, Maharashtra, India</span>
                  </div>
                  <span className="font-mono text-[11px] text-cyber-emerald font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
                    IST (UTC+5:30)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Context Chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-surface-border text-muted flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-accent" />
                B.Tech CSE '26 @ MIT-WPU
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-surface-border text-muted flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-cyber-cyan" />
                Ex-AI Intern @ LegitReach
              </span>
            </div>
          </div>

          {/* Right Column: Clear, High-Contrast Readable Story */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-fg leading-snug">
              I build production AI and data software — not just notebooks that gather dust.
            </h3>

            <div className="space-y-4 font-sans text-base sm:text-lg text-body leading-relaxed">
              <p>
                I am a third-year Computer Science Engineering student at <strong className="text-fg font-semibold">MIT World Peace University, Pune</strong> with a focus on Applied Machine Learning, LLM Orchestration, and High-Throughput Backends.
              </p>
              <p>
                During my 6-month industry internship as an <strong className="text-fg font-semibold">AI Developer at LegitReach</strong>, I engineered an automated generative ad engine utilizing state-of-the-art vision and language models, integrating directly with the Meta Ads API for continuous creative scoring and campaign automation.
              </p>
              <p>
                As a Core Technical Lead for <strong className="text-fg font-semibold">TEDxMITWPU</strong>, I directed the end-to-end development and deployment of the official platform, maintaining 100% uptime for hundreds of attendees and speakers.
              </p>
            </div>

            {/* Core Values / Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="p-4 rounded-xl bg-surface border border-surface-border">
                <div className="flex items-center gap-2 text-accent font-display font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Sub-Second Inference</span>
                </div>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  Optimized FastAPI endpoints and Groq Llama-3 pipelines delivering sub-50ms analytics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-surface-border">
                <div className="flex items-center gap-2 text-cyber-cyan font-display font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Agentic Workflows</span>
                </div>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  Multi-agent state machines with LangGraph for dynamic tool calling and structured reasoning.
                </p>
              </div>
            </div>

            {/* Real Verified Metrics */}
            <div className="pt-6 border-t border-surface-border grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-fg">6+</p>
                <p className="font-mono text-xs text-muted mt-1">Full-Stack Systems</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-accent">6 Mo.</p>
                <p className="font-mono text-xs text-muted mt-1">AI Industry Intern</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-cyber-cyan">100%</p>
                <p className="font-mono text-xs text-muted mt-1">TEDx Platform Uptime</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-fg">2026</p>
                <p className="font-mono text-xs text-muted mt-1">B.Tech Cohort</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
