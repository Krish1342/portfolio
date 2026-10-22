import React from "react";
import { GraduationCap, Briefcase, MapPin, CheckCircle2 } from "lucide-react";

export function About() {
  const photoUrl = `${import.meta.env.BASE_URL}Image.jpg`;

  return (
    <section className="pt-4 pb-16 sm:pb-24 px-6 sm:px-10 relative">
      <div id="about" className="max-w-[1300px] mx-auto">
        {/* Section Label - Compact & Direct */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-1">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Background & Engineering Philosophy
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-fg tracking-tight">
            Behind the systems.
          </h2>
        </div>

        {/* 2-Column Responsive Layout: Photo Starts Immediately */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Full Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-surface-border bg-surface p-2 shadow-2xl">
              <div className="rounded-2xl overflow-hidden bg-bg relative">
                <img
                  src={photoUrl}
                  alt="Krish Lodha"
                  className="w-full h-auto object-cover object-top max-h-[500px] rounded-2xl block"
                  loading="eager"
                />

                {/* Status Overlay Badge */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-bg/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-fg font-medium">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>Pune, Maharashtra, India</span>
                  </div>
                  <span className="font-mono text-[11px] text-accent font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    IST (UTC+5:30)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Badges Strip */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-surface-border text-muted flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-accent" />
                B.Tech AI & Data Science (CGPA: 8.94)
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-surface-border text-muted flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-accent" />
                Software Intern @ bizAmica
              </span>
            </div>
          </div>

          {/* Right Column: Clear, High-Contrast Story */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-display font-bold text-xl sm:text-3xl text-fg leading-snug">
              Software Developer & AI Engineer focused on scalable, production-grade systems.
            </h3>

            <div className="space-y-3.5 font-sans text-sm sm:text-base text-body leading-relaxed">
              <p>
                I am a Computer Science & Engineering student at <strong className="text-fg font-semibold">MIT World Peace University (2023–2027)</strong> specializing in <strong className="text-fg font-semibold">Artificial Intelligence & Data Science</strong> with a current <strong className="text-accent font-semibold">CGPA of 8.94</strong>.
              </p>
              <p>
                Currently, I am a <strong className="text-fg font-semibold">Software Intern at bizAmica Software</strong> in Pune, developing signature detection models for cheque processing, creating ground truth datasets, and improving the company's internal data labelling platform with additional AI models.
              </p>
              <p>
                Previously, as a <strong className="text-fg font-semibold">Research & Development Intern at LegitReach</strong>, I built an automated creative generation engine utilizing generative models and integrated the Meta Ads API for automated creative performance scoring and optimization.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-surface border border-surface-border">
                <div className="flex items-center gap-2 text-accent font-display font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Computer Vision & OCR</span>
                </div>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  Signature detection models, cheque verification, and high-accuracy training data annotation workflows.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface border border-surface-border">
                <div className="flex items-center gap-2 text-accent font-display font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Agentic AI & Vector Search</span>
                </div>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  RAG architectures with LangGraph, ChromaDB, FAISS, and Groq LLMs for sub-second retrieval.
                </p>
              </div>
            </div>

            {/* Verified Metrics Strip */}
            <div className="pt-4 border-t border-surface-border grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-accent">8.94</p>
                <p className="font-mono text-xs text-muted mt-0.5">MIT-WPU CGPA</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-fg">2</p>
                <p className="font-mono text-xs text-muted mt-0.5">AI Internships</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-accent">3</p>
                <p className="font-mono text-xs text-muted mt-0.5">Live Vercel Apps</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-fg">2027</p>
                <p className="font-mono text-xs text-muted mt-0.5">B.Tech Cohort</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
