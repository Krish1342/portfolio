import React from "react";
import { ArrowUpRight, ExternalLink, Github, Globe, Sparkles } from "lucide-react";
import { projects } from "../data/projects";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.highlight);
  const secondaryProjects = projects.filter((p) => !p.highlight);

  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28 px-6 sm:px-10 relative">
      <div className="max-w-[1300px] mx-auto space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Live Deployments & Architecture
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-fg tracking-tight">
              Featured Systems.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-body max-w-md leading-relaxed">
            Production-grade systems tested on real workloads — from automated exploratory analytics to cyclic RAG knowledge retrieval and agricultural ML.
          </p>
        </div>

        {/* 1. Primary Highlighted Systems (From Resume with Live Deployments) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-surface-border hover:border-accent/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Header row: Index & Live / Github actions */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-accent font-semibold px-2.5 py-1 rounded bg-accent/10 border border-accent/20">
                    System 0{idx + 1}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-accent text-bg font-semibold text-[11px] font-mono flex items-center gap-1 hover:bg-accent-hover transition-colors"
                        title="Live Deployment"
                      >
                        <Globe className="w-3 h-3" />
                        <span>Live</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-surface border border-surface-border text-muted hover:text-fg hover:border-accent transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-fg group-hover:text-accent transition-colors leading-tight">
                  {project.displayName || project.title}
                </h3>

                <p className="mt-3 font-sans text-sm text-body leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tags & Link */}
              <div className="mt-6 pt-4 border-t border-surface-border">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface text-fg border border-surface-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                    >
                      <span>Launch App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg hover:text-accent transition-colors"
                    >
                      <span>Explore Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-muted hover:text-fg flex items-center gap-1"
                  >
                    <span>Source</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Secondary Systems Grid */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Additional Machine Learning & Full-Stack Projects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryProjects.map((project, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-surface-border group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-muted px-2.5 py-1 rounded bg-surface border border-surface-border">
                      Project 0{idx + 4}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-surface border border-surface-border text-muted hover:text-fg hover:border-accent transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h4 className="font-display font-bold text-lg text-fg group-hover:text-accent transition-colors leading-tight">
                    {project.displayName || project.title}
                  </h4>

                  <p className="mt-2.5 font-sans text-xs sm:text-sm text-body leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-surface-border">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface text-muted border border-surface-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-muted hover:text-fg"
                  >
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Deep Link */}
        <div className="pt-4 text-center">
          <a
            href="https://github.com/Krish1342?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-surface-border text-sm font-medium text-body hover:text-fg hover:border-accent transition-colors"
          >
            <Github className="w-4 h-4 text-accent" />
            <span>Discover all open-source repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
