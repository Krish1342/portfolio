import React, { useState } from "react";
import { ArrowUpRight, Code, Database, ExternalLink, Github, Sparkles, Terminal, Activity, Globe } from "lucide-react";
import { projects } from "../data/projects";

export function Projects() {
  const [selectedDataset, setSelectedDataset] = useState("ecommerce");

  const datasets = {
    ecommerce: {
      name: "Global_Retail_2025.csv",
      rows: "248,120 rows",
      cols: "28 features",
      corr: "r = 0.91 (Margin vs LTV)",
      inference: "34ms (Groq Llama-3)",
      insight: "Automated analysis isolated high-margin repeat purchasers in tier-2 cohorts. Feature importance weighted heavily towards session recency.",
    },
    churn: {
      name: "SaaS_Subscriber_Churn.parquet",
      rows: "89,400 rows",
      cols: "34 features",
      corr: "r = -0.84 (Usage vs Churn)",
      inference: "28ms (Groq Llama-3)",
      insight: "Key churn predictor identified: drop in weekly active integrations within days 14-21 post-onboarding.",
    },
    stocks: {
      name: "Nifty50_Tick_Volatility.csv",
      rows: "512,000 rows",
      cols: "19 features",
      corr: "r = 0.78 (Volume vs Delta)",
      inference: "41ms (Groq Llama-3)",
      insight: "Significant volatility spikes detected during pre-market liquidity gaps. Moving average cross-correlation flags anomalous dispersion.",
    },
  };

  const activeData = datasets[selectedDataset];
  const flagship = projects[0]; // Automated_EDA
  const otherProjects = projects.slice(1);

  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28 px-6 sm:px-10 relative">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
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

        {/* 1. Flagship Spotlight: Automated EDA & BI Engine */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 mb-12 border border-surface-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[130px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Project Story & Specs */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent/15 text-accent border border-accent/30">
                    Flagship System
                  </span>
                  <span className="font-mono text-xs text-cyber-cyan font-medium">
                    FastAPI • Groq AI • React • Plotly.js
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-4xl text-fg tracking-tight">
                  Automated EDA & BI Platform
                </h3>

                <p className="mt-4 font-sans text-sm sm:text-base text-body leading-relaxed">
                  AI-powered web application for automated data analysis and interactive PowerBI-like dashboard generation. Delivers automated data profiling, feature correlation analysis, and Groq LLM synthesis in sub-second responses.
                </p>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {flagship.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-surface border border-surface-border text-fg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Live Demo + GitHub */}
              <div className="mt-8 pt-6 border-t border-surface-border flex flex-wrap items-center gap-3">
                {flagship.live && (
                  <a
                    href={flagship.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-accent text-bg hover:bg-accent-hover transition-all shadow-md shadow-accent/20 flex items-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-medium bg-surface hover:bg-surface-hover text-fg border border-surface-border transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <span className="font-mono text-xs text-muted">
                  auto-eda-pink.vercel.app
                </span>
              </div>
            </div>

            {/* Right: Interactive Telemetry Console */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-bg border border-surface-border overflow-hidden shadow-2xl">
                {/* Console Bar */}
                <div className="px-4 py-3 bg-surface border-b border-surface-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-[11px] text-muted">
                      eda_pipeline.py — Live Inference
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-cyber-emerald font-semibold px-2 py-0.5 rounded bg-cyber-emerald/10 border border-cyber-emerald/20">
                    STATUS 200 OK
                  </span>
                </div>

                {/* Interactive Dataset Selector Buttons */}
                <div className="p-4 bg-surface/50 border-b border-surface-border flex items-center gap-2 overflow-x-auto text-xs font-mono">
                  <span className="text-muted text-[11px] shrink-0">Select Dataset:</span>
                  <button
                    onClick={() => setSelectedDataset("ecommerce")}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      selectedDataset === "ecommerce"
                        ? "bg-accent text-bg font-semibold"
                        : "bg-surface text-muted hover:text-fg border border-surface-border"
                    }`}
                  >
                    Retail (248k)
                  </button>
                  <button
                    onClick={() => setSelectedDataset("churn")}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      selectedDataset === "churn"
                        ? "bg-accent text-bg font-semibold"
                        : "bg-surface text-muted hover:text-fg border border-surface-border"
                    }`}
                  >
                    SaaS Churn (89k)
                  </button>
                  <button
                    onClick={() => setSelectedDataset("stocks")}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      selectedDataset === "stocks"
                        ? "bg-accent text-bg font-semibold"
                        : "bg-surface text-muted hover:text-fg border border-surface-border"
                    }`}
                  >
                    Nifty50 (512k)
                  </button>
                </div>

                {/* Telemetry Display */}
                <div className="p-5 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-body border-b border-surface-border/60 pb-2">
                    <span className="text-muted">Target File:</span>
                    <span className="text-cyber-cyan font-semibold">{activeData.name}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded-xl bg-surface border border-surface-border">
                      <p className="text-[10px] text-muted">Volume</p>
                      <p className="text-sm font-bold text-fg mt-0.5">{activeData.rows}</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-surface border border-surface-border">
                      <p className="text-[10px] text-muted">Latency</p>
                      <p className="text-sm font-bold text-accent mt-0.5">{activeData.inference}</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-surface border border-surface-border">
                      <p className="text-[10px] text-muted">Correlation</p>
                      <p className="text-sm font-bold text-cyber-emerald mt-0.5">{activeData.corr}</p>
                    </div>
                  </div>

                  {/* Groq AI Synthesis Box */}
                  <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/20 text-body font-sans text-xs leading-relaxed">
                    <div className="flex items-center gap-1.5 text-accent font-mono font-semibold text-[11px] mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Groq AI Automated Synthesis:</span>
                    </div>
                    <p className="text-fg/90">{activeData.insight}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Systems Grid with Live Deployment Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-6 flex flex-col justify-between border transition-all ${
                project.highlight
                  ? "border-accent/40 shadow-lg shadow-accent/5"
                  : "border-surface-border"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-accent font-semibold px-2.5 py-1 rounded bg-accent/10 border border-accent/20">
                    System 0{idx + 2}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-accent/15 border border-accent/30 text-accent hover:bg-accent hover:text-bg transition-colors"
                        title="Live Deployment"
                      >
                        <Globe className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-surface border border-surface-border text-muted hover:text-fg hover:border-accent transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <h4 className="font-display font-bold text-xl text-fg leading-tight">
                  {project.displayName || project.title}
                </h4>

                <p className="mt-3 font-sans text-sm text-body leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface text-muted border border-surface-border"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-muted/60">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                    >
                      <span>Live Deployment</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg hover:text-accent transition-colors"
                    >
                      <span>Explore Source Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-muted hover:text-fg"
                  >
                    Repo ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Deep Link */}
        <div className="mt-12 text-center">
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
