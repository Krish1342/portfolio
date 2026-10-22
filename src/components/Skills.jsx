import React, { useState } from "react";
import { Binary, Code, Code2, Database, Layers, Terminal } from "lucide-react";
import { skills } from "../data/skills";
import { ArchitectureGraph } from "./ArchitectureGraph";

const categoryIcons = {
  "AI & Generative Engineering": <Binary className="w-4 h-4 text-accent" />,
  "Full-Stack & Systems": <Code className="w-4 h-4 text-accent" />,
  "Data Engineering & Analytics": <Database className="w-4 h-4 text-accent" />,
  "Databases & Storage": <Layers className="w-4 h-4 text-accent" />,
  "Programming Languages": <Code2 className="w-4 h-4 text-accent" />,
  "DevOps & Developer Tools": <Terminal className="w-4 h-4 text-accent" />,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="pt-4 pb-16 sm:pb-24 px-6 sm:px-10 relative">
      <div id="skills" className="max-w-[1300px] mx-auto space-y-10">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-1">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Technical Stack & Applied Knowledge
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-fg tracking-tight">
            Capabilities & Core Tooling.
          </h2>
          <p className="mt-2 font-sans text-xs sm:text-sm text-body max-w-xl">
            A comprehensive matrix of frameworks, databases, and machine learning libraries I use to build scalable products.
          </p>
        </div>

        {/* 1. Interactive Architecture Topology Sub-section */}
        <div id="architecture">
          <ArchitectureGraph />
        </div>

        {/* 2. Structured Skills Matrix */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-surface-border">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pb-5 border-b border-surface-border">
            {skills.map((cat, idx) => {
              const isSelected = activeCategory === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "bg-accent text-bg font-semibold shadow-md shadow-accent/20"
                      : "bg-surface text-muted hover:text-fg hover:bg-surface-hover border border-surface-border"
                  }`}
                >
                  {categoryIcons[cat.name] || <Terminal className="w-3.5 h-3.5 text-accent" />}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Display */}
          <div className="pt-5">
            <div className="mb-5">
              <h3 className="font-display font-bold text-lg text-fg">
                {skills[activeCategory].name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-body mt-1">
                {skills[activeCategory].description}
              </p>
            </div>

            {/* Tags Cloud */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {skills[activeCategory].skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3 rounded-xl bg-surface/90 border border-surface-border hover:border-accent/40 hover:bg-surface-hover transition-all flex flex-col justify-between group"
                >
                  <span className="font-mono text-xs text-fg font-medium group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-muted mt-1.5">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
