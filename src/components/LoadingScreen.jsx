import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LoadingScreen({ onFinish }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 850);
    const t2 = setTimeout(() => onFinish(), 1300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-bg flex flex-col items-center justify-center pointer-events-none"
      animate={phase === 1 ? { y: "-100%" } : {}}
      transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="overflow-hidden mb-2">
        <motion.p
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent text-center"
        >
          Systems & Applied AI
        </motion.p>
      </div>

      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl text-fg tracking-tight select-none"
        >
          KRISH LODHA<span className="text-accent">.</span>
        </motion.h1>
      </div>
    </motion.div>
  );
}
