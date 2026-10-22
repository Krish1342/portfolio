import React from "react";
import { Briefcase, Calendar, Trophy, Award, MapPin } from "lucide-react";
import { experience, certifications, volunteering } from "../data/experience";

export function Experience() {
  return (
    <section className="pt-4 pb-16 sm:pb-24 px-6 sm:px-10 relative">
      <div id="experience" className="max-w-[1300px] mx-auto space-y-12">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-1">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Track Record & Professional Background
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-fg tracking-tight">
            Work Experience.
          </h2>
          <p className="mt-2 font-sans text-xs sm:text-sm text-body max-w-xl">
            Hands-on software and AI engineering across computer vision systems, generative creative engines, and internal annotation platforms.
          </p>
        </div>

        {/* 1. Core Industry Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-surface-border space-y-8">
          {experience.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-bg border-2 transition-colors flex items-center justify-center ${
                  item.isCurrent
                    ? "border-accent shadow-[0_0_12px_rgba(255,107,53,0.4)]"
                    : "border-surface-border group-hover:border-accent"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.isCurrent ? "bg-accent animate-ping" : "bg-accent"
                  }`}
                />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-surface-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-surface border border-surface-border text-accent">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold text-lg sm:text-xl text-fg leading-tight">
                          {item.title}
                        </h3>
                        {item.isCurrent && (
                          <span className="font-mono text-[10px] font-semibold text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 font-sans text-sm text-accent font-semibold mt-0.5">
                        <span>{item.company}</span>
                        <span className="text-surface-border">•</span>
                        <span className="text-muted font-normal flex items-center gap-1 text-xs">
                          <MapPin className="w-3 h-3 text-muted" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-surface-border font-mono text-xs text-muted w-fit">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-body leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 pt-3 border-t border-surface-border flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface border border-surface-border text-fg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Industry Certifications Grid */}
        <div className="pt-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3">
            <Award className="w-4 h-4 text-accent" />
            <span>Verified Certifications & Simulations</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="glass-card rounded-2xl p-5 border border-surface-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-accent/10 text-accent border border-accent/20">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-fg leading-snug">
                    {cert.title}
                  </h4>
                </div>
                <p className="font-mono text-[11px] text-muted mt-3">
                  {cert.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Leadership & Community */}
        <div className="pt-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3">
            <Trophy className="w-4 h-4 text-accent" />
            <span>Technical Leadership & Campus Community</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {volunteering.map((item, vIdx) => (
              <div
                key={vIdx}
                className="glass-card rounded-2xl p-5 sm:p-6 border border-surface-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-accent font-semibold">
                      {item.event}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {item.date}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-fg mb-1.5">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface border border-surface-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
