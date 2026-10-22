import React from "react";
import { Briefcase, Calendar, Trophy, CheckCircle2 } from "lucide-react";
import { experience, volunteering } from "../data/experience";

export function Experience() {
  const allMilestones = [
    ...experience.map((e) => ({ ...e, isWork: true })),
    ...volunteering.map((v) => ({ ...v, isWork: false })),
  ];

  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28 px-6 sm:px-10 relative">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Track Record & Technical Leadership
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-fg tracking-tight">
            Work Experience.
          </h2>
          <p className="mt-3 font-sans text-sm sm:text-base text-body max-w-xl">
            Practical experience engineering generative models, client platforms, and directing technical event infrastructure.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l border-surface-border space-y-10">
          {allMilestones.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-surface-border group-hover:border-accent transition-colors flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-surface-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-surface border border-surface-border text-accent">
                      {item.isWork ? (
                        <Briefcase className="w-5 h-5" />
                      ) : (
                        <Trophy className="w-5 h-5 text-cyber-cyan" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-fg leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-accent font-semibold mt-0.5">
                        {item.event}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-surface-border font-mono text-xs text-muted w-fit">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <p className="font-sans text-sm sm:text-base text-body leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-5 pt-4 border-t border-surface-border flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}
