import React from "react";
import { motion } from "framer-motion";

export function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-end px-6 sm:px-10 pb-16 sm:pb-24 pt-32 relative">
      {/* Giant typographic statement — no subtitle, no badges, no floating elements */}
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="overflow-hidden mb-4">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-mono text-sm text-muted"
          >
            CS @ MIT-WPU · AI Intern @ LegitReach
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="font-heading font-extrabold text-[clamp(2.8rem,10vw,8rem)] leading-[0.9] tracking-tighter text-fg"
          >
            I build AI systems
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="font-heading font-extrabold text-[clamp(2.8rem,10vw,8rem)] leading-[0.9] tracking-tighter text-muted"
          >
            that actually
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="font-heading font-extrabold text-[clamp(2.8rem,10vw,8rem)] leading-[0.9] tracking-tighter"
          >
            <span className="text-accent">ship.</span>
          </motion.h1>
        </div>

        {/* Simple bottom row — two pieces of info, nothing wrapped in cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 sm:mt-24 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8"
        >
          <p className="font-body text-muted text-base sm:text-lg max-w-md leading-relaxed">
            Autonomous agents, data pipelines, full-stack platforms — from Jupyter notebooks to production FastAPI backends processing 100k+ rows.
          </p>

          <button
            onClick={() => scrollToSection("work")}
            className="font-mono text-sm text-fg group flex items-center gap-3 cursor-pointer"
          >
            <span className="link-hover">See the work</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-accent"
            >
              ↓
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
